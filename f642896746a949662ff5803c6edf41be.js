if( 'SA1' != 'REP' && FFADS.units.SA1 && FFADS.units.SA1.ad_type == 'custom' && FFADS.units.SA1.custom_ads && ! getCookie( 'ff_subbed' ) ) {
							document.getElementById( 'SA1' ).innerHTML = FFADS.units.SA1.custom_ads[0].code;
							if( ! FFADS.units.SA1.lazy_load ) eval( FFADS.units.SA1.custom_ads[0].rendering_script );
						}
						else if( FFADS.units.SA1 && ! getCookie( 'ff_subbed' ) ) {
							
							googletag.cmd.push( function() {
								FFADS.debug( 'googletag.displaying SA1' );
								googletag.display( 'SA1' );
							} );
						}
						else {
							document.getElementsByClassName('persistent-footer')[0].style.display = 'none';}