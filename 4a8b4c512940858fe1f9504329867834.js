if( 'BB1' != 'REP' && FFADS.units.BB1 && FFADS.units.BB1.ad_type == 'custom' && FFADS.units.BB1.custom_ads && ! getCookie( 'ff_subbed' ) ) {
							document.getElementById( 'BB1' ).innerHTML = FFADS.units.BB1.custom_ads[0].code;
							if( ! FFADS.units.BB1.lazy_load ) eval( FFADS.units.BB1.custom_ads[0].rendering_script );
						}
						else if( FFADS.units.BB1 && ! getCookie( 'ff_subbed' ) ) {
							
				if( FFADS.use_fixed_containers ) {
					FFADS.debug( 'fixing size for BB1' );
					let max_wh = firefly_size_list_to_max_wh( FFADS.units.BB1.sizes );
					let el = document.querySelector( '#BB1' );
					el.style.width = max_wh[0] + 'px';
					el.style.height = max_wh[1] + 'px';
					el.classList.add( 'fixed-size' );
					FFADS.debug( el.style );
					FFADS.debug( el.classList );
				}
			
							googletag.cmd.push( function() {
								FFADS.debug( 'googletag.displaying BB1' );
								googletag.display( 'BB1' );
							} );
						}
						else {
							document.querySelector( '#BB1-ad' ).style.display = 'none';}