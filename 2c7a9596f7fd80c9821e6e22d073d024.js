$(document).ready(function() {
				if( $( '.newsletter_widget' ).length ) {
					var width = document.documentElement.clientWidth;
					$.ajax({
						type: "GET",
						url: 'https://www.moneycontrol.com/news/widget/signup-newletter/',
						dataType: 'html',
						error: function( obj, errorMsg, d ) {},
						success: function( html_body ) {
							if( html_body != '' ) {

								/* Runs Only for WEB */
								if( width >= 768 ) {
									$( ".newsletter_widget_web" ).html( html_body );
								}

								/* Runs Only for WAP */
								if( width <= 768 ) {
									$( ".newsletter_widget_wap" ).html( html_body );
								}
							}
						},
						beforeSend: function () {},
						complete: function () {}
					});
				}
			});