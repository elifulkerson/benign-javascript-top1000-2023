if ('serviceWorker' in navigator) {
						navigator.serviceWorker.register('/sw-kompasiana.js', {
							scope: '/sw-kompasiana' // <--- THIS BIT IS REQUIRED
						}).then(function(registration) {
							// Registration was successful
							console.log('ServiceWorker Kompasiana registration successful with scope: ', registration.scope);
						}, function(err) {
							// registration failed :(
							console.log('ServiceWorker Kompasiana registration failed: ', err);
						});
					}