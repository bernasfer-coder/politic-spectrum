import { Component } from 'react';
import { debugLog } from './debug.js';

export default class AppErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) { return { error }; }

  componentDidCatch(error, info) {
    debugLog('react-render-error', { error, componentStack: info.componentStack }, 'error');
  }

  render() {
    if (!this.state.error) return this.props.children;
    return <main className="app-error" role="alert"><p className="eyebrow">RECOVERABLE RUNTIME ERROR</p><h1>The analysis view stopped rendering.</h1><p>The browser caught an application error instead of leaving a blank page. Open the debug console below, copy the local log, then try a clean reload.</p><details><summary>Technical detail</summary><pre>{this.state.error.message}</pre></details><div className="app-error-actions"><button onClick={() => window.location.reload()}>Reload page</button><button onClick={() => { window.history.replaceState(null, '', window.location.pathname); window.location.reload(); }}>Start from a clean view</button><button onClick={() => window.dispatchEvent(new CustomEvent('politic-spectrum-debug-open'))}>Open debug console</button></div></main>;
  }
}
