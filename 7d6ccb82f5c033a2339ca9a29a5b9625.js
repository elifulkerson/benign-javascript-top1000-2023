$(document).ready(function() {
			let mcpro = readCookie( 'mcpro' );
			if( mcpro == '1' ) {
				var html_body = '';
																										if( html_body != '' ) {
					$( '.hmpro_widget #mcprowd' ).html( '<div class="pro_slider_ban">' + html_body + '</div>' );
					$( '.hmpro_widget' ).removeClass( 'dfp_ads_block' ).show();
				}
			}
			$( '.hmpro_widget #mcprowd .pro_slider_ban' ).slick({ autoplay: true, dots: true });

							/* Invest in Fixed Deposits -> Start */
				if( $('.invest_in_fd_300x100' ).length > 0 ) {
					/* Runs Only for WAP */
					if( width <= 768 ) {
						let mobile_operating_system = get_mobile_operating_system();
						if( mobile_operating_system != 'ios' ) {
							$( '#invest_in_fd_300x100 a' ).attr({
								'href' : 'https://play.google.com/store/apps/details?id=com.divum.MoneyControl',
								'onclick' : 'GAEventTracker( "MC Home Page Banner", "Click", "Fixed Deposits|1" );'
							});
						} else {
							$( '#invest_in_fd_300x100 a' ).attr({
								'href' : 'https://apps.apple.com/us/app/moneycontrol-markets-news/id408654600',
								'onclick' : 'GAEventTracker( "MC Home Page Banner", "Click", "Fixed Deposits|2" );'
							});
						}
					}
				}
				/* End <- Invest in Fixed Deposits */
			
		});