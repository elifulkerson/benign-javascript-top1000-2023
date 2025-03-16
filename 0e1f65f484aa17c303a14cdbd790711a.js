tp = window.tp || [];
		// Shows Debuging comments
						tp.push(["setDebug", false ]);
					// Sending category tags
		tp.push(["setTags", ""]);
		// Sending section tags... just used for testing.
		tp.push(["setContentSection", ""]);
		// Execute when the page is first loaded and tp is loaded
		tp.push(["init", function() {
			// Display correct buttons
			if( tp.pianoId.isUserValid() ) {
				document.querySelectorAll( '.piano-logout' ).forEach( function( el ) {
					el.style.display = 'inline-block';
				} );
				document.querySelectorAll( '.piano-manage' ).forEach( function( el ) {
					el.style.display = 'inline-block';
				} );
			} else {
				document.querySelectorAll( '.piano-login' ).forEach( function( el ) {
					el.style.display = 'inline-block';
				} );
				document.querySelectorAll( '.piano-subscribe' ).forEach( function( el ) {
					el.style.display = 'inline-block';
				} );
			}
			tp.pianoId.init({
				loggedIn: function(data) {
					// Show logout/manage
					document.querySelectorAll( '.piano-logout' ).forEach( function( el ) {
						el.style.display = 'inline-block';
					} );
					document.querySelectorAll( '.piano-manage' ).forEach( function( el ) {
						el.style.display = 'inline-block';
					} );
					// Hide login/subscribe
					document.querySelectorAll( '.piano-login' ).forEach( function( el ) {
						el.style.display = 'none';
					} );
					document.querySelectorAll( '.piano-subscribe' ).forEach( function( el ) {
						el.style.display = 'none';
					} );
				},
				loggedOut: function() {
					// Hide logout/manage
					document.querySelectorAll( '.piano-logout' ).forEach( function( el ) {
						el.style.display = 'none';
					} );
					document.querySelectorAll( '.piano-manage' ).forEach( function( el ) {
						el.style.display = 'none';
					} );
					// Show login/subscribe
					document.querySelectorAll( '.piano-login' ).forEach( function( el ) {
						el.style.display = 'inline-block';
					} );
					document.querySelectorAll( '.piano-subscribe' ).forEach( function( el ) {
						el.style.display = 'inline-block';
					} );
				}
			});
		}]);
		(function(src){var a=document.createElement("script");a.type="text/javascript";a.async=true;a.src=src;var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)})("https://experience.tinypass.com/xbuilder/experience/load?aid=3TkGX7xXpu");