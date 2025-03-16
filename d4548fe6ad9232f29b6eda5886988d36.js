$(document).ready(function() {
		var mcpro = readCookieRevamp( 'mcpro' );

		if( $( '.tooltiplink' ).length ) {
			if( mcpro == '1' ) {
				/* Ad Block in MC website for Pro users */
				$( '.tooltipbox' ).html( '' );
			} else {
				$('.tooltiplink a.tip').mouseover( function(){
					$(this).next('.tooltipbox').show();
				});
				$('.tooltiplink').mouseout(function(){
					$('.tooltipbox').hide();
				})
			}
		}

		if( $( '.tooltipbox' ).length ) {
			$('.tooltipbox').mouseover(function() {
				$(this).show();
			})
			$('.tooltipbox').mouseout(function() {
				$(this).hide();
			})
		}

		/* Find out current page url */
		if( $( '.current_page_url' ).length ) {
			var current_page_url = window.location.href;
			$( '.current_page_url' ).val( current_page_url );
		}

		/* Hide all elements for MC Pro Users, having class name as dfp_ads_block */
		if( $( '.dfp_ads_block' ).length ) {
			if( mcpro == '1' ) {
				$( '.dfp_ads_block' ).hide();
			}
		}

		/* When User mouseover on Special bar */
		$( ".speacial_dropbx" ).mouseover(function () {
			var isSpecialMenuLoaded = $("#special_dropdown").val();
			if (isSpecialMenuLoaded == '') {
				$("#special_dropdown").val(1);
				ajax_link = "https://www.moneycontrol.com/commonstore/commonfiles/specials_logo_data.html?classic=true";

				special_dropdown_call = $.ajax({
					type: "GET",
					url: ajax_link,
					dataType: 'html',
					error: function (obj, errorMsg, d) {
					},
					success: function (html_body) {
						if (html_body != '') {
							$("#splist").html(html_body);
							var spec_slider = $('.splist').bxSlider({
								pager: false,
								slideMargin: 15,
								minSlides: 6,
								maxSlides: 6,
								slideWidth: 145,
								infiniteLoop: true,
								moveSlides: 1,
							});
						}
					},
					beforeSend: function () {
					},
					complete: function () {
					}
				});
			}
			
		});

	});