const DEBUG_ENABLED_KEY = 'politic-spectrum-debug';
const DEBUG_LOG_KEY = 'politic-spectrum-debug-log';
const MAX_LOG_ENTRIES = 250;

let listenersInstalled = false;
const subscribers = new Set();

function storage(kind) {
  if (typeof window === 'undefined') return null;
  try { return window[kind]; } catch { return null; }
}

export function isDebugEnabled() {
  if (typeof window === 'undefined') return false;
  try {
    return new URLSearchParams(window.location.search).get('debug') === '1' || storage('localStorage')?.getItem(DEBUG_ENABLED_KEY) === '1';
  } catch { return false; }
}

export function setDebugEnabled(enabled) {
  try { storage('localStorage')?.setItem(DEBUG_ENABLED_KEY, enabled ? '1' : '0'); } catch { /* Storage is optional. */ }
  if (typeof window !== 'undefined') window.dispatchEvent(new CustomEvent('politic-spectrum-debug-toggle', { detail: { enabled } }));
}

function errorDetails(error) {
  if (!error) return null;
  if (error instanceof Error) return { name: error.name, message: error.message, stack: error.stack?.split('\n').slice(0, 8).join('\n') };
  if (typeof error === 'object') {
    try { return JSON.parse(JSON.stringify(error)); } catch { return { value: String(error) }; }
  }
  return { value: String(error) };
}

function safeValue(value) {
  if (value instanceof Error) return errorDetails(value);
  if (typeof value === 'bigint') return String(value);
  if (typeof value === 'function') return `[Function ${value.name || 'anonymous'}]`;
  if (value && typeof value === 'object') {
    try { return JSON.parse(JSON.stringify(value)); } catch { return String(value); }
  }
  return value;
}

export function summarizeHash(hash = '') {
  const [path, query = ''] = String(hash).split('?');
  const params = new URLSearchParams(query);
  return { path, queryKeys: [...params.keys()].sort() };
}

function readStoredLog() {
  const store = storage('sessionStorage');
  if (!store) return [];
  try {
    const parsed = JSON.parse(store.getItem(DEBUG_LOG_KEY) ?? '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch { return []; }
}

export function readDebugLog() { return readStoredLog(); }

export function clearDebugLog() {
  try { storage('sessionStorage')?.removeItem(DEBUG_LOG_KEY); } catch { /* Storage is optional. */ }
  const entries = readStoredLog();
  subscribers.forEach((subscriber) => {
    try { subscriber(entries); } catch { /* Diagnostics must never break the app. */ }
  });
}

export function subscribeDebugLog(subscriber) {
  subscribers.add(subscriber);
  return () => subscribers.delete(subscriber);
}

export function debugLog(event, data = {}, level = 'info') {
  const shouldRecord = isDebugEnabled() || ['warn', 'error'].includes(level);
  if (!shouldRecord) return;
  const route = typeof window === 'undefined' ? { path: '' } : summarizeHash(window.location.hash);
  const entry = { time: new Date().toISOString(), level, event, href: typeof window === 'undefined' ? '' : `${window.location.pathname}${route.path}`, data: safeValue(data) };
  const entries = [...readStoredLog(), entry].slice(-MAX_LOG_ENTRIES);
  try { storage('sessionStorage')?.setItem(DEBUG_LOG_KEY, JSON.stringify(entries)); } catch { /* Storage is optional. */ }
  if (isDebugEnabled() && typeof console !== 'undefined') {
    const method = typeof console[level] === 'function' ? console[level] : console.log;
    method.call(console, `[PoliticSpectrum] ${event}`, entry.data);
  }
  subscribers.forEach((subscriber) => {
    try { subscriber(entries); } catch { /* Diagnostics must never break the app. */ }
  });
}

function describeElement(element) {
  const tag = element.tagName?.toLowerCase();
  if (!['a', 'button', 'input', 'select', 'summary'].includes(tag)) return null;
  const text = (element.getAttribute('aria-label') || element.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 100);
  const detail = { tag, text, role: element.getAttribute('role') || undefined, name: element.getAttribute('name') || undefined };
  if (tag === 'select') detail.value = element.value;
  if (tag === 'input' && ['range', 'checkbox', 'radio'].includes(element.type)) detail.value = element.type === 'checkbox' || element.type === 'radio' ? element.checked : element.value;
  if (tag === 'input' && ['search', 'text', 'url'].includes(element.type)) detail.valueLength = element.value.length;
  return detail;
}

export function installDebugListeners() {
  if (listenersInstalled || typeof window === 'undefined' || typeof document === 'undefined') return;
  listenersInstalled = true;
  window.addEventListener('error', (event) => debugLog('window-error', { message: event.message, source: event.filename, line: event.lineno, column: event.colno }, 'error'));
  window.addEventListener('unhandledrejection', (event) => debugLog('unhandled-rejection', { reason: errorDetails(event.reason) }, 'error'));
  window.addEventListener('hashchange', () => debugLog('hashchange', summarizeHash(window.location.hash)));
  window.addEventListener('popstate', () => debugLog('popstate', summarizeHash(window.location.hash)));
  document.addEventListener('click', (event) => { const target = event.target.closest?.('a,button,input,select,summary'); const detail = target && describeElement(target); if (detail) debugLog('ui-click', detail); }, true);
  document.addEventListener('change', (event) => { const detail = describeElement(event.target); if (detail) debugLog('ui-change', detail); }, true);
  const root = document.getElementById('root');
  if (root) {
    let hadContent = Boolean(root.firstElementChild);
    new MutationObserver(() => {
      const hasContent = Boolean(root.firstElementChild);
      if (hadContent && !hasContent) debugLog('root-became-empty', { childCount: root.childElementCount }, 'error');
      hadContent = hasContent;
    }).observe(root, { childList: true });
  }
}
