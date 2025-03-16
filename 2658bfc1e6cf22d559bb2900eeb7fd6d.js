if('serviceWorker' in navigator && navigator.serviceWorker.getRegistrations &&
                   'caches' in window) {
                    window.navigator.serviceWorker.getRegistrations()
                        .then(function(registrations) {
                            registrations.forEach(function(registration) {
                                if (registration.active && registration.active.scriptURL &&
                                    registration.active.scriptURL.indexOf('cacheStatic') > -1) {
                                    registration.unregister();
                                }
                            });
                        })
                        .catch(function(error) {
                            console.error(error)
                        });
                };