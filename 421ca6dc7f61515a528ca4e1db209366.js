document.addEventListener( 'DOMContentLoaded', function() {
				var googletag = googletag || {};
				googletag.cmd = googletag.cmd || [];
				googletag.cmd.push( function() {
					const slots = ["inline_1","inline_2","inline_3","inline_4"];
					slots.forEach( function( slot ) {
						if ( document.getElementById( 'div-gpt-ad-' + slot ) ) {
							googletag.cmd.push( function() {
								googletag.display( 'div-gpt-ad-' + slot );
							} );
						}
					} );
				} );
			} );