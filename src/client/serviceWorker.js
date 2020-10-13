export function register(config) {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
    });
  }
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}