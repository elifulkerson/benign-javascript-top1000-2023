/* navigator.cookieEnabled means cookies are enabled */
		if (window.navigator.cookieEnabled && 'serviceWorker' in navigator) {
			window.addEventListener('load', function () {
				function unregisterSW(forceReload) {
					navigator.serviceWorker.getRegistration().then(function (registration) {
						var serviceWorkerUnregistered = false;
						if (registration) {
							registration.unregister();
							serviceWorkerUnregistered = true;
						}
						(serviceWorkerUnregistered || forceReload) && window.location.reload();
					});
				};
				var isDLFKHostName = window.location.hostname === 'dl.flipkart.com';
				// don't unregister if its one view page. As desktop useragent will also get served from batman
				if (isDLFKHostName || (navigator.userAgent.indexOf('Mobile') === -1 && !true)) {
					unregisterSW(isDLFKHostName);
				} else {
					try {
						navigator.serviceWorker.register('/sw.js?k=' + '90a886dc430f550c437da7cb045dae87').then(function (registration) {
							console.log('ServiceWorker registration successful with scope: ', registration.scope);
							if (registration.active) {
								const serviceWorker = registration.active;
								const prefetchChunksData = {
									prefetchUrls: window.prefetch_asset_urls || [],
									type: 'PREFETCH_ASSETS'
								};
								try {
									serviceWorker.postMessage(JSON.stringify(prefetchChunksData));
									console.log('ServiceWorker is active and sending message : ', registration.scope);
								} catch (err) {
									/* we have seen issues of sw being in redundant state in older browsers
										postMessage does not go through and results in an error. trying to catch the error and writing it to console
										we could add it to sentry and log it if it happens in other devices too  */
									console.log(`Service Worker Error: ${err.toString()}`);
								}
							}
						}).catch(function (err) {
							window.reportToSentry(err);
							console.error('ServiceWorker registration failed: ', err);
						});
	
						navigator.serviceWorker.ready.then(function (swRegistration) {
							window.heartBeatPushFailed = true;
							return (
								swRegistration.sync &&
								swRegistration.sync.register('heart-beat-for-push').then(function () {
									// registration succeeded
									window.heartBeatPushFailed = false;
									console.log('Sync registration successfull for web push Heart beat');
								}, function (err) {
									console.log('Sync registration failed for web push Heart beat: ' + err);
								})
							);
						}).catch(function (err) {
							console.log('Sync registration failed for web push Heart beat: ' + err);
						});
					} catch (err) {
						window.reportToSentry(err);
						console.error('ServiceWorker setup failed: ', err);
					}
				}
			});
		}