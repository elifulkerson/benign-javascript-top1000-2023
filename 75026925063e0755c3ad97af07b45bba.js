$(document).ready(function() {
					if( $( '.ad_google_shhide' ).length ) {
						$( '.sh_clad' ).click( function() {
							var $this = $(this);
							$( '.addhide_show' ).slideToggle();
							$this.toggleClass( 'sh_clad' );
							if( $this.hasClass( 'sh_clad' ) ) {
								$this.attr( 'title', 'Close Ad' );
								$this.text( 'Close Ad' );
																	let dimension_size = $.trim( $( '.closeadpr' ).attr( 'dimension_size' ) );
									if( dimension_size == '970x250' ) {
										jacketCounter = 0;
										jacketInterval = setInterval( jacketStartTimer, 1000 );
									}
															} else {
								$this.attr( 'title', 'Show Ad' );
								$this.text( 'Show Ad' );
							}
						})
					}
				});