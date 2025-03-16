window.nypGa = function(callback) {
				if ('function' === typeof window.ga) {
					window.ga((tracker) => {
						callback(tracker);
					});
				} else {
					window.addEventListener('ga:loaded', function() {
						window.ga((tracker) => {
							callback(tracker);
						});
					});
				}
			};