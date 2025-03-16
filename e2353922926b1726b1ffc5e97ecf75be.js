$(document).ready(function() {
				$( '.btn_black_float' ).click(function() {
					var serch_txt =  $.trim( $( "#form_topsearch #search_str" ).val() );
					if( serch_txt !== '' ) {
						$( "#form_topsearch #search_str" ).val( '' );
					}

					$( '.btn_black_float' ).hide();
					$( '.searchfloat' ).addClass( 'search_abos' );
					$( '.searchfloat.search_abos' ).show();

					/* Trending on MC -> Start */
						GAEventTracker( 'SEARCHUSAGE', 'MCTRENDS', 'VISIBLE' );
						setTimeout(function(){
							$( "#form_topsearch #search_str" ).focus();
						});
						$( '.trend_searchbx' ).show();
					/* End <- Trending on MC */
				});
				if( $( '.bottom_nav' ).length ) {
					/* Runs Only for WEB */
					if( $(window).width() >= 768 ) {
						var hedpos = $( '.bottom_nav' ).offset().top;

						$(window).scroll( function() {
							var window_scroll_top = $(window).scrollTop();

							if( window_scroll_top <= 40 ) {
								var serch_txt =  $.trim( $( "#form_topsearch #search_str" ).val() );
								if( serch_txt === '' ) {
									if( $( '.trend_searchbx' ).css( 'display' ) == 'block' ) {
										$( ".trend_searchbx" ).hide();
									}
									if( $( '#autosugg_mc1' ).css( 'display' ) == 'block' ) {
										$( "#autosugg_mc1" ).hide();
									}
								}

								$( '.searchfloat' ).removeClass( 'search_abos' );
								$( '.btn_black_float' ).hide();

								if( $( '.searchBox.searchfloat' ).css( 'display' ) == 'none' ) {
									$( '.searchBox.searchfloat' ).show();
								}
							}
						
							if( window_scroll_top > hedpos ) {
								var serch_txt =  $.trim( $( "#form_topsearch #search_str" ).val() );

								$( '.bottom_nav' ).addClass( 'posnav_fix' );
								$( '.btn_black_float' ).show();
								$( '.searchfloat' ).addClass( 'search_abos' );

								if( serch_txt === '' ) {
									if( $( '.searchBox.searchfloat' ).css( 'display' ) == 'block' ) {
										$( '.searchBox.searchfloat' ).hide();
									}
								}
							} else {
								$( '.bottom_nav' ).removeClass( 'posnav_fix' );
								$( '.btn_black_float' ).hide();
								$( '.searchfloat' ).removeClass( 'search_abos' );
							}
						});
					}
				}
			});

			$(document).mouseup(function (e) {
				var container = $( ".searchfloat.search_abos" );
				if( !container.is(e.target) && container.has(e.target).length === 0 ) {
					if( $( '.searchBox.search_abos' ).css( 'display' ) == 'block' ) {
						var serch_txt =  $.trim( $( "#form_topsearch #search_str" ).val() );
						if( serch_txt !== '' ) {
							$( "#form_topsearch #search_str" ).val( '' );
						}
						if( $( '.trend_searchbx' ).css( 'display' ) == 'block' ) {
							$( ".trend_searchbx" ).hide();
						}
						if( $( '#autosugg_mc1' ).css( 'display' ) == 'block' ) {
							$( "#autosugg_mc1" ).hide();
						}
						$( '.searchBox.searchfloat' ).removeClass( 'search_abos' ).hide();
						$( '.btn_black_float' ).show();
					}
				}
			});