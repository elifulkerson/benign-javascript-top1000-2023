if( readCookieRevamp( 'nnmc' ) ) {
			var is_activate_logout_link = true;
			if( is_activate_logout_link == true ) {
				var current_page_url = window.location.href;
				if( current_page_url != '' && current_page_url != undefined ) {
					$( '.my_acclist .login_user_logout a' ).attr( 'href', 'https://www.moneycontrol.com/mcplus/portfolio/logout.php?ref=' + current_page_url );
				}
			}
		}