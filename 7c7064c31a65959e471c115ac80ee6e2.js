var mcpro = readCookieRevamp( 'mcpro' );
		var current_page_url = window.location.href;
		if( current_page_url != '' && current_page_url != undefined ) {
			document.getElementById( 'wap_popup_menu_login' ).setAttribute( 'href', 'https://m.moneycontrol.com/login.php?cpurl=' + current_page_url );
		}