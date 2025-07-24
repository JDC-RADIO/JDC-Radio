
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/JDC-Radio/service-worker.js');
  });
}
