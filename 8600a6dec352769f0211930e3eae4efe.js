$(document).ready( function(e) {
						var mcpro = readCookie( 'mcpro' );
						if( mcpro == '1' ) {
							if( $( '.ad_mc_hp_native_1' ).length ) {
								$( '.ad_mc_hp_native_1' ).html( '' ).hide();
							}
							if( $( '.ad_mc_hp_brand_connect' ).length ) {
								$( '.ad_mc_hp_brand_connect' ).html( '' ).hide();
							}
						}
					});