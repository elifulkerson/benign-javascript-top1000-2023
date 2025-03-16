var max_limit_interstitial_page_check = 8;
			var interstitial_page_position = [1, 3, 5, 7];
						function getCurrentDate() {

				var d = new Date();
				var month = d.getMonth()+1;
				var date = d.getDate();

				if( month <= 9 ) { month = '0' + month; }
				if( date <= 9 ) { date = '0' + date; }
				return d.getFullYear() + '' + month + '' + date;
			}
			function getInterstitialCookie( cname ) {
				var name = cname + "=";
				var ca = document.cookie.split(';');
				for( var i = 0; i < ca.length; i++ ) {
					var c = ca[i];
					while( c.charAt(0) == ' ' ) { c = c.substring( 1 ); }
					if( c.indexOf( name ) == 0 ) { return c.substring( name.length, c.length ); }
				}
				return "";
			}
			function createInterstitialCookie( name, value, days ) {
				var expires="";
				if( days ) {
					var date = new Date();
					date.setTime(date.getTime()+(days*24*60*60*1000));
					expires = "; expires="+date.toGMTString();
				} else { 
					expires = ""; 
				}
				document.cookie = name+"="+value+expires+"; path=/; domain=.moneycontrol.com;";
			}
			function initializeInterstitial() {

				var is_mc_wap_interstitial = '1';
				var width = window.innerWidth || document.documentElement.clientWidth;
				var mcpro = getInterstitialCookie( 'mcpro' );

				if( mcpro == '1' ) { is_mc_wap_interstitial = '0'; }

				/* Runs Only for WAP */
				if( width <= 768 && is_mc_wap_interstitial == '1' ) {
					var current_page = window.location.href;
					var interstitial_cookie_name = 'MC_WAP_INTERSTITIAL_NEW_LOGIC_' + getCurrentDate();
					var interstitial_cookie_object = getInterstitialCookie( interstitial_cookie_name );	/* Get Cookie Value */

					/* Checks for Cookie is exists OR not? */
					if( interstitial_cookie_object == undefined || interstitial_cookie_object == '' ) {
						interstitial_cookie_value = {};
						interstitial_cookie_value[0] = current_page;
						createInterstitialCookie( interstitial_cookie_name, JSON.stringify( interstitial_cookie_value ), '1' );	/* Create Cookie */
											} else {
						var interstitial_cookie_value = JSON.parse( interstitial_cookie_object );
						var pageCount = Object.keys( interstitial_cookie_value ).length;

						if( pageCount <= max_limit_interstitial_page_check ) {

							var is_page_exists = false;
							for( var i = 0; i < pageCount; i++ ) {
								if( current_page === interstitial_cookie_value[ i ] ) { is_page_exists = true; }
							}

							if( is_page_exists == false ) {

								if( interstitial_page_position.includes( pageCount ) ) {
									interstitial_cookie_value[ pageCount ] = current_page;
									createInterstitialCookie( interstitial_cookie_name, JSON.stringify( interstitial_cookie_value ), '1' );	/* Update Cookie */
																			window.location.href = "https://www.moneycontrol.com/promo/mc_wap_interstitial_dfp.php";
																	} else {
									interstitial_cookie_value[ pageCount ] = current_page;
									createInterstitialCookie( interstitial_cookie_name, JSON.stringify( interstitial_cookie_value ), '1' );	/* Update Cookie */
																	}
							} else {
															}
						}
					}
				}
			}
			window.onload = initializeInterstitial();