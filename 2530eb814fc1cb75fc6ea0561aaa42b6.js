if( 'OOP' != 'REP' && FFADS.units.OOP && FFADS.units.OOP.ad_type == 'custom' && FFADS.units.OOP.custom_ads && ! getCookie( 'ff_subbed' ) ) {
							document.getElementById( 'OOP' ).innerHTML = FFADS.units.OOP.custom_ads[0].code;
							if( ! FFADS.units.OOP.lazy_load ) eval( FFADS.units.OOP.custom_ads[0].rendering_script );
						}
						else if( FFADS.units.OOP && ! getCookie( 'ff_subbed' ) ) {
							
				if( FFADS.use_fixed_containers ) {
					FFADS.debug( 'fixing size for OOP' );
					let max_wh = firefly_size_list_to_max_wh( FFADS.units.OOP.sizes );
					let el = document.querySelector( '#OOP' );
					el.style.width = max_wh[0] + 'px';
					el.style.height = max_wh[1] + 'px';
					el.classList.add( 'fixed-size' );
					FFADS.debug( el.style );
					FFADS.debug( el.classList );
				}
			
							googletag.cmd.push( function() {
								FFADS.debug( 'googletag.displaying OOP' );
								googletag.display( 'OOP' );
							} );
						}
						else {
							document.querySelector( '#OOP-ad' ).style.display = 'none';}