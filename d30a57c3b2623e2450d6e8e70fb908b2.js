window.domContentLoaderPromise = new Promise(resolve => {
							document.addEventListener('DOMContentLoaded', () => {
								resolve();
							});
						});