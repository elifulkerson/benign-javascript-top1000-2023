$(document).ready(function() {
					if( $( '#market_radar_autoload' ).length ) {
						var width = window.innerWidth || document.documentElement.clientWidth;

						/* Runs Only for WEB */
						if( width >= 768 ) {
							$( '#market_radar_autoload' ).load( 'https://www.moneycontrol.com/techmvc/mc_widgets/radar/?classic=true' );
							$( '#market_radar_autoload' ).show();
						}
					}
				});