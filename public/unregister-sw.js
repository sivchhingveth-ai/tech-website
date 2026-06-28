// This file prevents the Vite service worker from registering
// Place this in your public folder or as a route

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(function(registrations) {
    for(let registration of registrations) {
      registration.unregister();
      console.log('ServiceWorker unregistered:', registration.scope);
    }
  });
  
  // Clear all caches
  if ('caches' in window) {
    caches.keys().then(function(cacheNames) {
      cacheNames.forEach(function(cacheName) {
        caches.delete(cacheName);
        console.log('Cache deleted:', cacheName);
      });
    });
  }
}
