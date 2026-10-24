// Development-only fixture. Vite's production entry does not include this file.
// Captures destinations locally; no calls, messages or Google tags are executed.
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '../src/App';
import '../src/index.css';

const report = { events: [], destinations: [] };
const updateReport = () => {
  document.getElementById('qa-summary').textContent = `QA: ${report.events.length} eventos / ${report.destinations.length} aberturas`;
  document.getElementById('qa-report').textContent = JSON.stringify(report, null, 2);
};
window.dataLayer = [];
window.dataLayer.push = (...items) => {
  report.events.push(...items);
  updateReport();
  return report.events.length;
};
window.open = (url) => {
  report.destinations.push(url);
  updateReport();
  return null;
};
document.addEventListener('click', (event) => {
  const link = event.target.closest('a');
  if (link && (link.href.startsWith('https://wa.me/') || link.href.startsWith('tel:'))) {
    event.preventDefault();
    report.destinations.push(link.href);
    updateReport();
  }
}, true);
window.history.replaceState(null, '', '/?utm_source=qa&utm_campaign=teste&gclid=qa-only');
createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
updateReport();
