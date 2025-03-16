window.admiral = window.admiral || function() {(admiral.q = admiral.q || []).push(arguments)};

			
			window.admiral( "after", "transact.subscribed", function( subs ) {
				subs.offers.forEach( function ( offer ) {
					if ( offer.offerType === "subscription" ) {
						// setCookie( 'ff_subbed', offer.offerID, 7 );
					}
				} );
			} );

			window.admiral( "after", "transact.loggedOut", function() {
				// setCookie( 'ff_subbed', '', -1 );
				location.reload();
			} );

			window.admiral( 'after', 'measure.detected', function( user ) {
				if ( user.subscribed == false ) {
					// setCookie( 'ff_subbed', '', -1 );
				}
			} );