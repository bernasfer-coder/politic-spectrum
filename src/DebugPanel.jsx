import { useEffect, useState } from 'react';
import { clearDebugLog, debugLog, isDebugEnabled, readDebugLog, setDebugEnabled, subscribeDebugLog } from './debug.js';

function exportLog(entries) {
  const blob = new Blob([JSON.stringify(entries, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `politic-spectrum-debug-${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
  anchor.click();
  URL.revokeObjectURL(url);
}
export default function DebugPanel() {
  const [open, setOpen] = useState(() => isDebugEnabled());
  const [enabled, setEnabled] = useState(() => isDebugEnabled());
  const [entries, setEntries] = useState(readDebugLog);
  const [copyMessage, setCopyMessage] = useState('');

  useEffect(() => {
    const unsubscribe = subscribeDebugLog(setEntries);
    const onToggle = (event) => setEnabled(Boolean(event.detail?.enabled));
    const onOpen = () => { setOpen(true); if (!isDebugEnabled()) { setDebugEnabled(true); setEnabled(true); debugLog('debug-enabled', { source: 'error-boundary' }); } };
    window.addEventListener('politic-spectrum-debug-toggle', onToggle);
    window.addEventListener('politic-spectrum-debug-open', onOpen);
    return () => { unsubscribe(); window.removeEventListener('politic-spectrum-debug-toggle', onToggle); window.removeEventListener('politic-spectrum-debug-open', onOpen); };
  }, []);

  function toggleOpen() {
    if (!open && !enabled) { setDebugEnabled(true); setEnabled(true); debugLog('debug-enabled', { source: 'debug-console' }); }
    setOpen((value) => !value);
  }

  async function copyLog() {
    try {
      await navigator.clipboard.writeText(JSON.stringify(entries, null, 2));
      setCopyMessage('Copied.');
    } catch { setCopyMessage('Clipboard unavailable; use Download log.'); }
  }

  return <div className={`debug-tools${open ? ' is-open' : ''}`}><button className="debug-launcher" aria-expanded={open} aria-controls="debug-console" onClick={toggleOpen}>Debug{entries.length ? ` · ${entries.length}` : ''}</button>{open && <aside id="debug-console" className="debug-console" aria-label="Browser debug console"><div className="debug-console-heading"><div><p className="eyebrow">LOCAL DIAGNOSTICS</p><h2>Browser debug console</h2></div><button aria-label="Close debug console" onClick={() => setOpen(false)}>×</button></div><p>Captures UI changes, route transitions, browser errors, rejected promises and React render failures in this tab only. Search text is recorded as a length, not its contents.</p><div className="debug-console-actions"><button onClick={copyLog}>Copy log</button><button onClick={() => exportLog(entries)}>Download log</button><button onClick={() => { clearDebugLog(); setCopyMessage('Cleared.'); }}>Clear</button><label><input type="checkbox" checked={enabled} onChange={(event) => { setDebugEnabled(event.target.checked); setEnabled(event.target.checked); debugLog(event.target.checked ? 'debug-enabled' : 'debug-disabled', { source: 'debug-console' }); }} /> collect interactions</label></div><p className="debug-console-status" role="status">{enabled ? 'Interaction logging is on.' : 'Only warnings and errors are retained.'} {copyMessage}</p><ol className="debug-log-list">{entries.length ? entries.slice().reverse().map((entry, index) => <li key={`${entry.time}-${index}`} className={`debug-log-${entry.level}`}><time>{entry.time}</time><strong>{entry.event}</strong><code>{JSON.stringify(entry.data)}</code></li>) : <li className="debug-log-empty">No entries yet. Reproduce the problem with the console open.</li>}</ol></aside>}</div>;
}
