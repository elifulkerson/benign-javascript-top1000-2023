if( 'HP3' != 'REP' && FFADS.units.HP3 && FFADS.units.HP3.ad_type == 'custom' && FFADS.units.HP3.custom_ads && ! getCookie( 'ff_subbed' ) ) {
							document.getElementById( 'HP3' ).innerHTML = FFADS.units.HP3.custom_ads[0].code;
							if( ! FFADS.units.HP3.lazy_load ) eval( FFADS.units.HP3.custom_ads[0].rendering_script );
						}
						else if( FFADS.units.HP3 && ! getCookie( 'ff_subbed' ) ) {
							
				if( FFADS.use_fixed_containers ) {
					FFADS.debug( 'fixing size for HP3' );
					let max_wh = firefly_size_list_to_max_wh( FFADS.units.HP3.sizes );
					let el = document.querySelector( '#HP3' );
					el.style.width = max_wh[0] + 'px';
					el.style.height = max_wh[1] + 'px';
					el.classList.add( 'fixed-size' );
					FFADS.debug( el.style );
					FFADS.debug( el.classList );
				}
			
							googletag.cmd.push( function() {
								FFADS.debug( 'googletag.displaying HP3' );
								googletag.display( 'HP3' );
							} );
						}
						else {
							document.querySelector( '#HP3-ad' ).style.display = 'none';}