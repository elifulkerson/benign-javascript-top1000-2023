if('serviceWorker' in navigator) {
			console.log('Trying to install ar-sw.js');
			navigator.serviceWorker
			.register('/ar-sw.js' , {scope:'/'})
			.then(function() {
				navigator.serviceWorker.addEventListener('message', function(event) {
					console.log("Got reply from service worker: " , event);
				});
				console.log("Service Worker Registered");
			});
		}