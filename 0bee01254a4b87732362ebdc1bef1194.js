$(document).ready( function( e ) {
		if( $( '.footer_navigation_list' ).length ) {

			if( $(window).width() < 767 ) {

				var mcpro = readCookieFooter( 'mcpro' );
				if( $( '.pro_circle' ).length ) {
					if( readCookieFooter( 'token-normal' ) != '' ) {	/* For Logged-in Users */
						if( mcpro == '1' ) {	/* For MC PRO Users */

							$( '.footer_navigation_list .pro_circle .bea' ).hide();

							$( '.footer_navigation_list .pro_circle a' ).attr({
								href: 'https://www.moneycontrol.com/pro-top-stories',
								title: 'Pro',
								onclick: "GAEventTracker( 'Navigation', 'Bottom', 'Pro' );"
							});

						} else {	/* For Non-MC PRO Users */

							$( '.footer_navigation_list .pro_circle a' ).attr({
								href: 'https://www.moneycontrol.com/pro-top-stories',
								title: 'Be a Pro',
								onclick: "GAEventTracker( 'Navigation', 'Bottom', 'Be a Pro' );"
							});
						}
					} else {	/* For Non-Log in Users */

						$( '.footer_navigation_list .pro_circle a' ).attr({
							href: 'javascript:;',
							title: 'Be a Pro',
							class: 'linkSignIn',
							'data-toggle': 'modal',
							'data-target': '#LoginModal',
							onclick: "GAEventTracker( 'Navigation', 'Bottom', 'Be a Pro' );"
						});

					}
				}

				if( $( '#sticky-footer' ).length ) {	/* For Bottom Ads */
					$( '#sticky-footer' ).addClass( 'close_ad_div' );

					if( $( '.app_btn_container' ).length ) {	/* For News Pages */
						$( '.app_btn_container' ).css( 'bottom', '95px' );
					}
				}

				if( $( '.scroll-paginate' ).length ) {	/* For News Consumption Pages */
					/* $( '.scroll-paginate' ).addClass( 'close_ad_div' ); */

					if( $( '.app_btn_container' ).length ) {
						$( '.app_btn_container' ).css( 'bottom', '110px' );
					}
				}

				if( $( '#scroll' ).length ) {	/* For Live blog Pages */
					$( '#scroll' ).css( 'bottom', '50px' );
				}

				var lastScrollTop = 0;
				$(window).scroll( function( event ) {
					var element_top = $( '#fixedheader' ).offset().top;
					var window_scroll_top = $(this).scrollTop();

					if( element_top > 0 && window_scroll_top > 0 ) {
						var st = $(this).scrollTop();

						if( st > lastScrollTop ) {
							$( '#fixedheader' ).addClass( 'open_div' );
						} else {
							$( '#fixedheader' ).removeClass( 'open_div' );
						}
						lastScrollTop = st;
					}

				});
			}
		}
	});