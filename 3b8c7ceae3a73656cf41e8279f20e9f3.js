if( 'HP1' != 'REP' && FFADS.units.HP1 && FFADS.units.HP1.ad_type == 'custom' && FFADS.units.HP1.custom_ads && ! getCookie( 'ff_subbed' ) ) {
							document.getElementById( 'HP1' ).innerHTML = FFADS.units.HP1.custom_ads[0].code;
							if( ! FFADS.units.HP1.lazy_load ) eval( FFADS.units.HP1.custom_ads[0].rendering_script );
						}
						else if( FFADS.units.HP1 && ! getCookie( 'ff_subbed' ) ) {
							
				if( FFADS.use_fixed_containers ) {
					FFADS.debug( 'fixing size for HP1' );
					let max_wh = firefly_size_list_to_max_wh( FFADS.units.HP1.sizes );
					let el = document.querySelector( '#HP1' );
					el.style.width = max_wh[0] + 'px';
					el.style.height = max_wh[1] + 'px';
					el.classList.add( 'fixed-size' );
					FFADS.debug( el.style );
					FFADS.debug( el.classList );
				}
			
							googletag.cmd.push( function() {
								FFADS.debug( 'googletag.displaying HP1' );
								googletag.display( 'HP1' );
							} );
						}
						else {
							document.querySelector( '#HP1-ad' ).style.display = 'none';}