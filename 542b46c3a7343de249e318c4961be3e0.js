if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(registrations => {
        registrations.forEach(registration => {
          if (registration.active.scriptURL.includes('/service-worker.client.js')) {
            registration.unregister();
          }
        });
      }).catch(() => { });
    }