$(document).ready(function() {
			$( '#id_activateft' ).click(function() {
				$( "#all_login_popup" ).modal( 'show' );
			});

			if( $( '#all_login_popup' ).length > 0 ) {
				var free_trial_cookie_name = 'ftcookie';
				var free_trial_cookie_object = readCookie( free_trial_cookie_name );
				var redthome_cookie_name = 'redthome';
				var redthome_cookie_object = readCookie( redthome_cookie_name );
				var nnmc_cookie_object = readCookie( 'nnmc' );
				var selected_product = $.trim( $( "#all_login_popup .selected_product" ).val() );

				if( free_trial_cookie_object && free_trial_cookie_object == 1 ) {
					$( "#all_login_popup" ).modal( 'show' );
					mctop_setCookie( free_trial_cookie_name, parseInt( free_trial_cookie_object )+1 );	/* Update Cookie */
				}

				if( readCookie( 'mcpro' ) != 1 ) {
					if( redthome_cookie_object == 1 && nnmc_cookie_object ) {
						subscribe_to_freePopup( selected_product );
					} else if( redthome_cookie_object == 1 && !nnmc_cookie_object ) {
						subscribe_to_freePopup( selected_product );
					} else if( redthome_cookie_object == 2 && nnmc_cookie_object ) {
						subscribe_to_freePopup( selected_product );
					}
				} else {
					if( redthome_cookie_object && redthome_cookie_object == 4 ) {
						mctop_setCookie( redthome_cookie_name, parseInt( redthome_cookie_object )+1 );	/* Update Cookie */
						$( "#ve_postmsg" ).modal( 'show' );
					}
				}
			}
		});