'use client';

import { useEffect } from 'react';

export default function ServiceWorkerCleaner() {
  useEffect(() => {
    // Unregister all service workers
    if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
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
  }, []);

  return null;
}
