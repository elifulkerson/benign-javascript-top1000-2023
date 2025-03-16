var mcpro = readCookieRevamp( 'mcpro' );
	if( mcpro == '1' ) {
		$( '.for_mcpro_users' ).show();
		$( '.for_nonpro_users' ).hide();
	} else {

		$( '.for_mcpro_users' ).hide();
		$( '.for_nonpro_users' ).show();
	}

	if( readCookieRevamp( 'nnmc' ) ) {
		var usernnmc = readCookieRevamp( 'nnmc' );
		usernnmc = $.trim(usernnmc);
		let nnmc = usernnmc;

		if( $.trim( usernnmc ) == 'Guest' || $.trim( usernnmc ) == 'guest' ) {
			$( 'div.myaccpop' ).remove();
		}

		usernnmc = usernnmc.replace("%40","@");
		usernnmc = usernnmc.replace(/\+/g, " ");

		let display_name = convertStringToCamelCase( usernnmc );

		$( '.user_after_login .userlink' ).attr( "title", display_name );

		if( display_name.length > 9 ) {
			$( '.user_after_login .usr_nm' ).text( "Hi " + display_name.substring( 0, 9 ) + ' ...' );
		} else {
			$( '.user_after_login .usr_nm' ).text( "Hi " + display_name );
		}

		if( usernnmc != false && usernnmc != 'false' && usernnmc != '' ) {

			if( $( '.mobile_user_name' ).length ) {
				var dispnm = usernnmc;
				if( usernnmc.length > 6 ) {
					dispnm = usernnmc.substr( 0, 6 ) + '..';
				}

				$( 'a#mobile_usr_nm' ).text( "Hi " + dispnm );
				$( '.mobile_user_name .a_tag' ).attr( 'title', usernnmc );

				$( '.mobile_user_name .image_tag' ).attr({
					alt: usernnmc,
					title: usernnmc
				});

				$( '.mobile_user_name .span_tag' ).text( usernnmc );
			}

			$( 'div.blp, ul.blp' ).hide();
			$( 'div.blp, ul.blp' ).remove();
			$( 'div.alp' ).show();
		} else {
			$( 'div.alp, ul.alp, li.alp' ).remove();
		}

		/* Ad Block in MC website for Pro users -> Start */
			var mcpro = readCookieRevamp( 'mcpro' );

			if( $( '.mc_logo_be_a_pro' ).length ) {
				if( mcpro == '1' ) {
					$( '.mc_logo_only_pro' ).show();
					$( '.for_mcpro_users' ).show();
				} else {
					$( '.mc_logo_be_a_pro' ).show();
				}
			}

			if( $( '#menu_l1_be_a_pro' ).length ) {
				if( mcpro == '1' ) {
					$( '#menu_l1_be_a_pro a' ).text( 'PRO' );
					$( '#menu_l1_be_a_pro a' ).attr({
						href: 'https://www.moneycontrol.com/pro-top-stories',
						title: 'PRO'
					});
				} else {
					$( '#menu_l1_be_a_pro a' ).attr( 'href', 'https://www.moneycontrol.com/pro-top-stories' );
				}
			}
		/* End <- Ad Block in MC website for Pro users */

		/* WAP - Bottom menu block -> Start */
			if( $( '.menu_bottom_block' ).length ) {
				if( mcpro == '1' ) {
					$( '.menu_bottom_block .bottom_be_a_pro a' ).attr({
						href: 'https://www.moneycontrol.com/pro-top-stories',
						title: 'Pro'
					});
				}
			}
		/* End <- WAP - Bottom menu block */

		/* My Watchlist link -> Start */
			let def_view = readCookieRevamp( 'DEF_VIEW' );

			if( def_view != '' && def_view != undefined ) {
				let my_watchlist_link = 'https://www.moneycontrol.com/watchlist';

				if( def_view == '4' ) {
					if( $( '.my_watchlist_link' ).length ) { $( '.my_watchlist_link' ).attr( 'href', my_watchlist_link ); }
				}
				$( '.verified_text' ).attr( 'src', my_watchlist_link );
			}
		/* End -> My Watchlist link */

		/* Check for User Email and Mobile verification -> Start */
			let verification_flag = readCookieRevamp( 'verify' );
			if( verification_flag != '' && verification_flag != undefined ) {
				let verification_list = null;

				verification_flag = decodeURIComponent( verification_flag );
				verification_list = verification_flag.split( '$$##$$' );

				if( verification_list[1] == "0" || verification_list[0] == "0" ) { /* [1] => Email , [0] => Mobile ,  */
					$( '.verified_text' ).html( '(Unverified)' );
				} else {
					$( '.verified_text' ).html( '' );
				}
			}
		/* End <- Check for User Email and Mobile verification */

		/* Header Avatar Icon -> Start */
			if( $( '.user_icon' ).length || $( '.propic' ).length ) {
				/* For Pro User */
				if( mcpro == '1' ) {
					$( '.user_icon, .propic' ).html( '<svg class="green_user_icon" xmlns="https://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g transform="translate(21769 4933)"><circle id="Ellipse_745_copy_2" data-name="Ellipse 745 copy 2" cx="8" cy="8" r="8" transform="translate(-21769 -4933)" fill="#66a650"/><path id="Union_140" data-name="Union 140" d="M0,10.581a4.848,4.848,0,0,1,2.3-.989.6.6,0,0,0,.057-.465,5.781,5.781,0,0,1-.578-1.594,1.784,1.784,0,0,1-.426-1.25.756.756,0,0,1,.219-.517,3.354,3.354,0,0,1,.161-1.817L.675,2.317v0a.416.416,0,0,1-.042.02A.418.418,0,0,1,.1,2.077.411.411,0,1,1,.872,1.8a.437.437,0,0,1-.02.342.081.081,0,0,0,.026.019c1.166.858,1.546-.653,1.493-1.195A.426.426,0,0,1,1.953.687.421.421,0,0,1,2.195.15a.416.416,0,0,1,.53.256.424.424,0,0,1-.109.456c.3.439,1.546,1.351,1.894-.05a.429.429,0,0,1-.243-.25A.412.412,0,1,1,5.041.279.415.415,0,0,1,4.8.816L4.776.823,5.012,2.7a2.252,2.252,0,0,1,1.321.75,2.414,2.414,0,0,1,.439,1.861c-.02.117-.036.209-.048.3-.01.05-.016.1-.024.151a.762.762,0,0,1,.224.522A1.805,1.805,0,0,1,6.5,7.529a5.786,5.786,0,0,1-.58,1.592.674.674,0,0,0,.056.472,4.61,4.61,0,0,1,2.331.989l-.45.52A3.9,3.9,0,0,0,5.9,10.274a2.26,2.26,0,0,1-1.754.816,2.287,2.287,0,0,1-1.764-.816,4.134,4.134,0,0,0-1.935.833ZM2.271,5.792a.344.344,0,0,1-.088.329l-.046.046a.453.453,0,0,0-.105.118c0,.34.1.691.221.75a.351.351,0,0,1,.19.291,4.8,4.8,0,0,0,.532,1.511A.317.317,0,0,1,3,8.9a1.325,1.325,0,0,1-.075.969,1.6,1.6,0,0,0,1.216.533,1.579,1.579,0,0,0,1.2-.537,1.4,1.4,0,0,1-.081-.952.434.434,0,0,1,.029-.077,4.748,4.748,0,0,0,.537-1.511.335.335,0,0,1,.179-.285,1.038,1.038,0,0,0,.228-.759.533.533,0,0,0-.1-.116l-.048-.046a.345.345,0,0,1-.092-.3c.021-.121.037-.215.052-.311s.031-.193.053-.32a1.757,1.757,0,0,0-.3-1.3,1.61,1.61,0,0,0-.961-.517,4.152,4.152,0,0,1-1.214.664c-.022.009-.044.015-.063.024a4.12,4.12,0,0,1-1.241.275A2.931,2.931,0,0,0,2.271,5.792Z" transform="translate(-21764.885 -4930.811)" fill="#fff" stroke="rgba(0,0,0,0)" stroke-miterlimit="10" stroke-width="1"/></g></svg>' );
				} else {
					/* For Log-in User */
					$( '.user_icon, .propic' ).html( '<svg class="blue_user_icon" xmlns="https://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g transform="translate(21899 4933)"><circle id="Ellipse_745_copy_2" data-name="Ellipse 745 copy 2" cx="8" cy="8" r="8" transform="translate(-21899 -4933)" fill="#0065a1"/><path id="Shape_37_copy_2" data-name="Shape 37 copy 2" d="M0,7.966a4.841,4.841,0,0,1,2.3-.99.6.6,0,0,0,.057-.465,5.809,5.809,0,0,1-.58-1.6,1.783,1.783,0,0,1-.427-1.248.755.755,0,0,1,.22-.518A3.007,3.007,0,0,1,2,.877,2.563,2.563,0,0,1,4.15,0,2.674,2.674,0,0,1,6.332.834,2.421,2.421,0,0,1,6.772,2.7c-.021.116-.035.209-.05.3-.008.05-.016.1-.024.151a.759.759,0,0,1,.224.522A1.792,1.792,0,0,1,6.5,4.912a5.743,5.743,0,0,1-.579,1.593.673.673,0,0,0,.055.469A4.619,4.619,0,0,1,8.3,7.965l-.448.519A3.93,3.93,0,0,0,5.9,7.657a2.254,2.254,0,0,1-1.753.817,2.28,2.28,0,0,1-1.763-.815,4.138,4.138,0,0,0-1.937.832Zm4.142-.178a1.581,1.581,0,0,0,1.2-.538A1.4,1.4,0,0,1,5.262,6.3a.356.356,0,0,1,.031-.078A4.743,4.743,0,0,0,5.828,4.71a.342.342,0,0,1,.179-.285,1.025,1.025,0,0,0,.23-.757.526.526,0,0,0-.1-.118L6.086,3.5a.343.343,0,0,1-.094-.3c.023-.122.037-.215.053-.312s.03-.192.053-.321a1.745,1.745,0,0,0-.3-1.3A2.043,2.043,0,0,0,4.15.686,1.926,1.926,0,0,0,2.538,1.3a2.528,2.528,0,0,0-.266,1.881.342.342,0,0,1-.088.328l-.046.045a.494.494,0,0,0-.1.12c0,.339.1.691.221.75a.343.343,0,0,1,.188.29,4.765,4.765,0,0,0,.534,1.511A.349.349,0,0,1,3,6.286a1.316,1.316,0,0,1-.075.968A1.6,1.6,0,0,0,4.142,7.788Z" transform="translate(-21895.271 -4929.345)" fill="#fff"/></g></svg>' );
				}
			}
		/* End <- Header Avatar Icon */

	} else {

		/* Header Avatar Icon -> Start */
			if( $( '.user_icon' ).length || $( '.propic' ).length ) {
				/* For Normal User */
				$( '.user_icon, .propic' ).html( '<svg class="grey_user_icon" xmlns="https://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g transform="translate(21964 4933)"><circle id="Ellipse_745_copy_2" data-name="Ellipse 745 copy 2" cx="8" cy="8" r="8" transform="translate(-21964 -4933)" fill="#535866"/><path id="Shape_37_copy_2" data-name="Shape 37 copy 2" d="M0,7.966a4.841,4.841,0,0,1,2.3-.99.6.6,0,0,0,.057-.465,5.809,5.809,0,0,1-.58-1.6,1.783,1.783,0,0,1-.427-1.248.755.755,0,0,1,.22-.518A3.007,3.007,0,0,1,2,.877,2.563,2.563,0,0,1,4.15,0,2.674,2.674,0,0,1,6.332.834,2.421,2.421,0,0,1,6.772,2.7c-.021.116-.035.209-.05.3-.008.05-.016.1-.024.151a.759.759,0,0,1,.224.522A1.792,1.792,0,0,1,6.5,4.912a5.743,5.743,0,0,1-.579,1.593.673.673,0,0,0,.055.469A4.619,4.619,0,0,1,8.3,7.965l-.448.519A3.93,3.93,0,0,0,5.9,7.657a2.254,2.254,0,0,1-1.753.817,2.28,2.28,0,0,1-1.763-.815,4.138,4.138,0,0,0-1.937.832Zm4.142-.178a1.581,1.581,0,0,0,1.2-.538A1.4,1.4,0,0,1,5.262,6.3a.356.356,0,0,1,.031-.078A4.743,4.743,0,0,0,5.828,4.71a.342.342,0,0,1,.179-.285,1.025,1.025,0,0,0,.23-.757.526.526,0,0,0-.1-.118L6.086,3.5a.343.343,0,0,1-.094-.3c.023-.122.037-.215.053-.312s.03-.192.053-.321a1.745,1.745,0,0,0-.3-1.3A2.043,2.043,0,0,0,4.15.686,1.926,1.926,0,0,0,2.538,1.3a2.528,2.528,0,0,0-.266,1.881.342.342,0,0,1-.088.328l-.046.045a.494.494,0,0,0-.1.12c0,.339.1.691.221.75a.343.343,0,0,1,.188.29,4.765,4.765,0,0,0,.534,1.511A.349.349,0,0,1,3,6.286a1.316,1.316,0,0,1-.075.968A1.6,1.6,0,0,0,4.142,7.788Z" transform="translate(-21960.271 -4929.345)" fill="#fff"/></g></svg>' );
			}
		/* End <- Header Avatar Icon */

		$( 'div.alp, ul.alp, li.alp' ).remove();
		$( '.mc_logo_be_a_pro' ).show();
	}