var PushlySDK = window.PushlySDK || [];
				function pushly() { PushlySDK.push(arguments) }
				pushly('load', {
					domainKey: 'lGrO4sEYCy0zUu2DRBSBxuOWIGo8lGqPv8wE',
					sw: '/push-worker.js',
				});

				if ('undefined' !== typeof ga) {
					ga(function(tracker) {
						pushly('profile', {'external_id': tracker.get('clientId')});
					});
				}
				let autId = false;
				document.cookie.split(';').forEach(elt => {
						if (elt.includes('_autid=')) {
							autId = elt.split('=')[1];
						}
					});
				if (autId) {
					pushly('profile', {'aUT_id': autId });
				}