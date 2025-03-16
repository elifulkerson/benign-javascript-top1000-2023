if( $( '.mc_hp_native_atf' ).length ) {
										var is_dfp_ads_visible = $.trim( $( '.is_dfp_ads_visible' ).val() );
										if( is_dfp_ads_visible == true || is_dfp_ads_visible === 'true' ) {	/* is_dfp_ads_visible is declared while initialization of DFP */
											$( '.mc_hp_native_atf' ).show();
										}
									}