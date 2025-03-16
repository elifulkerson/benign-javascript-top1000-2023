if( readCookieRevamp( 'nnmc' ) ) {
				var is_activate_logout_link = true;
				if( is_activate_logout_link == true ) {
					var current_page_url = window.location.href;
					if( current_page_url != '' && current_page_url != undefined ) {
						document.getElementById( 'wap_login_user_logout' ).setAttribute( 'href', 'https://m.moneycontrol.com/logout.php?red_url=' + current_page_url );
					}
				}
			}