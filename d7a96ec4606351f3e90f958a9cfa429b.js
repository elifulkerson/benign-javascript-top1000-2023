(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

			(function() {

				// Set the default options for the Google Analytics "create" function.
				var gaCreateOptions = {
					trackingId: "UA-3922003-6",
					cookieDomain: 'auto',
					useAmpClientId: true
				};

				// Add the allowLinker option if it is configured and found in PHP.
									gaCreateOptions.allowLinker = true;
					
				var isLsAvailable = function() {
					var test = 'test';
					try {
						window.localStorage.setItem(test, test);
						window.localStorage.removeItem(test);
						return true;
					} catch (e) {
						return false;
					}
				}

				// Bail early and use the old method if we do not have localStorage in this browser.
				if ( ! isLsAvailable() ) {
					ga( 'create', gaCreateOptions );
					return;
				}

				// If we have a GA clientId in the URL.
				var haveClientIdInURL = false;

				// First, check for linker param in URL and let GA use that for our clientId if it exists.
				// Check if URLSearchParams is available, otherwise use a polyfill function.
				if ( 'function' === typeof URLSearchParams ) {
					var urlParams = new URLSearchParams( window.location.search );
					if ( urlParams.get( '_ga' ) ) {
						haveClientIdInURL = true;
					}
				} else {
					/**
					 * A polyfill for older browsers like IE.
					 * @link https://caniuse.com/#feat=urlsearchparams
					 * @link https://davidwalsh.name/query-string-javascript
					 */
					var getUrlParameter = function(name) {
						name = name.replace( /[\[]/, '\\[' ).replace( /[\]]/, '\\]' );
						var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
						var results = regex.exec( location.search );
						return results === null ? false : decodeURIComponent( results[1].replace( /\+/g, ' ' ) );
					};
					if ( getUrlParameter( '_ga' ) ) {
						haveClientIdInURL = true;
					}
				}

				// Assume the GA Cookie is not present.
				var hasGACookie = false;

				// Try to get the GA Cookie.
				var GACookie = document.cookie.split(';').filter(function(item) {
					return item.trim().indexOf('_ga=') === 0
				} );

				// Check if we have a cookie.
				if ( GACookie.length ) {
					// If the cookie value is not empty we have a GA cookie.
					hasGACookie = GACookie[0].trim().length > 4 ? true : false;
				}

				// Id to use for localStorage object which holds the GA clientId and expire time.
				var gaClientIdLocalStorageId = 'nyp_ga_client_id';

				// If we don't have a clientId in the URL and there is no GA cookie set, we look in localStorage for one.
				if ( ! haveClientIdInURL && ! hasGACookie ) {

					// If no linker param and no GA cookie, we check in localStorage for the GA clientId.
					var nypGALocalStorage = window.localStorage.getItem( gaClientIdLocalStorageId ) || '{}';
					var parsedNYPGALocalStorage = JSON.parse( nypGALocalStorage );
					var now = new Date().getTime();
					if ( parsedNYPGALocalStorage.clientId && parsedNYPGALocalStorage.expires ) {
						if ( now <= parsedNYPGALocalStorage.expires ) {

							// If we have the clientId, add it to the GA Tracker options.
							if ( parsedNYPGALocalStorage.clientId && '' !== parsedNYPGALocalStorage.clientId ) {
								gaCreateOptions.clientId = parsedNYPGALocalStorage.clientId;
							}
						}
					}
				}

				// Create the tracker instance.
				ga( 'create', gaCreateOptions );

				// Add the clientId to localStorage using readyCallback to ensure the tracker instance has been instantiated.
				ga( function( tracker ) {
					var clientId = tracker.get( 'clientId' );
					if ( clientId ) {
						var gaClientIdStore = JSON.stringify({
							clientId: clientId,
							expires: new Date().getTime() + 1000*60*60*24*365*2
						});
						window.localStorage.setItem( gaClientIdLocalStorageId, gaClientIdStore );
					}

					// Set the client ID as a dimension for tracking against with Aqfer.
					ga( 'set', 'dimension88', clientId );
					window.ga4Dims = window.ga4Dims || {};
					window.ga4Dims.aqfer_puu = clientId;
				});

				if ('function' === typeof CustomEvent) {
					window.dispatchEvent(new CustomEvent('ga:loaded'));
				}
			})();

			ga('require', 'linker');
ga('linker:autoLink', ["nypost.com","pagesix.com","decider.com"])

			// Optimizely Universal Analytics Integration code
			window.optimizely = window.optimizely || [];
			window.optimizely.push(['activateUniversalAnalytics']);