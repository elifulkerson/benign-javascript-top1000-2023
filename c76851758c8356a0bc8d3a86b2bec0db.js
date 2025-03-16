if ('serviceWorker' in navigator) {
                  window.addEventListener('load', () => {
                    navigator.serviceWorker
                    .register('/service-worker.js?dlw3YJsnmh0VWT_3ry3hI', { scope: '/' })
                    .then(() => null)
                    .catch(() => null);
                  });
                }