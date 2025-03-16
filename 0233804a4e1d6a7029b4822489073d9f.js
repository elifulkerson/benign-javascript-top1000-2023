window.addEventListener( 'envelopeModuleReady', function() {
				let ats_es = getCookie( 'ff_ats_es' );
				if ( ats_es ) {
					atsenvelopemodule.setAdditionalData( { 'type': 'emailHashes', 'id': [ ats_es ] } );
					dataLayer.push( {
						'event': 'ua-event-generic',
						'generic-event-category': 'id',
						'generic-event-action': 'ats',
						'generic-event-label': 'deliver'
					} );
				}
			} );