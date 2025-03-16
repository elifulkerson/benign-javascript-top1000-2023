if( 'HP2' != 'REP' && FFADS.units.HP2 && FFADS.units.HP2.ad_type == 'custom' && FFADS.units.HP2.custom_ads && ! getCookie( 'ff_subbed' ) ) {
							document.getElementById( 'HP2' ).innerHTML = FFADS.units.HP2.custom_ads[0].code;
							if( ! FFADS.units.HP2.lazy_load ) eval( FFADS.units.HP2.custom_ads[0].rendering_script );
						}
						else if( FFADS.units.HP2 && ! getCookie( 'ff_subbed' ) ) {
							
				if( FFADS.use_fixed_containers ) {
					FFADS.debug( 'fixing size for HP2' );
					let max_wh = firefly_size_list_to_max_wh( FFADS.units.HP2.sizes );
					let el = document.querySelector( '#HP2' );
					el.style.width = max_wh[0] + 'px';
					el.style.height = max_wh[1] + 'px';
					el.classList.add( 'fixed-size' );
					FFADS.debug( el.style );
					FFADS.debug( el.classList );
				}
			
							googletag.cmd.push( function() {
								FFADS.debug( 'googletag.displaying HP2' );
								googletag.display( 'HP2' );
							} );
						}
						else {
							document.querySelector( '#HP2-ad' ).style.display = 'none';}