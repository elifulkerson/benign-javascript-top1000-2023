let ff_datalayer_ats_ess = getCookie( 'ff_ats_ess' );
				if ( ff_datalayer_ats_ess ) {
					dataLayer.push( {
						'user_id': ff_datalayer_ats_ess
					} );
				}