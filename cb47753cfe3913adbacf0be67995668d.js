$(document).ready(function() {

	$('.mpMenu li a').click( function( e ) {
		var mtab = $(this).attr('href');

		var element = $(this).attr('element');

		e.preventDefault();
		$(this).closest('ul').find('a').removeClass('active');
		$(this).addClass('active');
		$(this).closest('ul').parent().find('.keytab_nws').hide();
		$(mtab).fadeIn();

		if( element == 'mc_top_news_tabs' ) {
			var section_key = $(this).attr('section_key');
			var reload_div = $(this).attr('reload_div');

			reload_mc_top_news_tabs_element( section_key, reload_div );
		}

	});

	$('.drplist').click( function(){
		$(this).find('.drpElem').toggle();
		$(this).toggleClass('active');
	});

	if($('.scrollBar').length) {
		$('.scrollBar').jScrollPane({autoReinitialise: true});
	}

	$('.drpDwon').click( function(e) {
		e.preventDefault();
		$(this).parent().find('.analDrop').toggle();
		$(this).parent().find('.analDrop').jScrollPane();
	});

	$('.quatDrp').click( function( e ) {
		e.preventDefault();
		$('.qutoesDrop2').toggle();
		$('.scr2quote').jScrollPane();

	});

	if($('.febScrl').length) {
		$('.febScrl').jScrollPane();
	}

	$('document').on('click', '.qutoesDrop2 a',  function( e ) {
		$('.qutoesDrop2').hide();
	});

	$(".mc_homepage_body .nav-tabs a").click( function( e ) {
		var element = $(this).attr('element');
		e.preventDefault();
		$(this).tab('show');
		$('.scrollBar').jScrollPane();

		if( element == 'corporate_action' || element == 'market_action_commodities' || element == 'personal_finance_advice' || element == 'ipo_snapshot' ) {
			var section_key = $(this).attr('section_key');
			var reload_div = $(this).attr('reload_div');

			if( element == 'personal_finance_advice' ) {
				reload_personal_finance_advice_tabs_element( section_key, reload_div );
			}
		}

		if( element == 'market_action_chart_tabs' ) {
			var period = $(this).attr('period');
			var reload_div = $(this).attr('reload_div');
			var ind_id = $('#market_action #ind_id').val();
			var iframe_src = 'https://www.moneycontrol.com/mccode/common/indices_chart/indices_chart.php?market=i&period=' + period + '&ind_id=' + ind_id + '&width=250&height=120';
			$( '#market_action #' + reload_div ).find( 'iframe' ).attr( 'src', iframe_src );
		}

	});

	$('.plBtn').click( function() {
		$('.plreslt').show()
		$(this).parent().hide();
	});

	$('.input1').click( function() {
		$(this).toggleClass('checkAct');
	});

	if($('.baghilaSlide').length) {
		$('.baghilaSlide').bxSlider( {
			controls:false, 
			auto:true,
		});
	}

	/* Breaking News, Live Blog and Top News -> Start */

		/* Runs Only for WEB */
		if( $(window).width() >= 768 ) {
			if( $( '.breaking_news_widget_web' ).length ) {
				console.log( 'WEB -> Impression -> Breaking News' );
				GAEventTracker( 'MC Home Toast Menu', 'Impression', 'Breaking News' );
			}

			if( $( '.liveblog_widget_web' ).length ) {
				console.log( 'WEB -> Impression -> Live Blog' );
				GAEventTracker( 'MC Home Toast Menu', 'Impression', 'Live Blog' );
			}

			if( $( '.top_news_strip_widget_web' ).length ) {
				console.log( 'WEB -> Impression -> Top News Strip' );
				GAEventTracker( 'MC Home Toast Menu', 'Impression', 'Top News' );
			}

		}

		/* Runs Only for WAP */
		if( $(window).width() <= 768 ) {
			if( $( '.breaking_news_widget_wap' ).length ) {
				console.log( 'WAP -> Impression -> Breaking News' );
				GAEventTracker( 'MC Home Toast Menu', 'Impression', 'Breaking News' );
			}

			if( $( '.liveblog_widget_wap' ).length ) {
				console.log( 'WAP -> Impression -> Live Blog' );
				GAEventTracker( 'MC Home Toast Menu', 'Impression', 'Live Blog' );
			}

			if( $( '.top_news_strip_widget_wap' ).length ) {
				console.log( 'WAP -> Impression -> Top News Strip' );
				GAEventTracker( 'MC Home Toast Menu', 'Impression', 'Top News' );
			}
		} 
	/* End <- Breaking News, Live Blog and Top News */

	/* Web Stories -> Start */
		if( $( '.galleryWid2' ).length ) {
			$( '.galleryWid2' ).slick({
				infinite: false, arrows: true, dots: true, autoplay: false,
				slidesToShow: 2, slidesToScroll: 1, speed: 500,
			});
		}
	/* End <- Web Stories */

	/* Gallery -> Start */
		if( $( '.galleryWid' ).length ) {
			$( '.galleryWid' ).slick({
				infinite: false, arrows: true, dots: true, autoplay: false, 
				slidesToShow: 1, slidesToScroll: 1, speed: 500,
			});
		}
	/* End <- Gallery */

});

$(document).on( "click", function( event ) {

	if($('.quatDrp').length) {
		var $trigger = $(".quatDrp");
		if( $trigger !== event.target && ! $trigger.has(event.target).length) {
			$(".qutoesDrop2").hide();
		}
	}

	if($('.secgrDrop').length) {
		var $trigger2 = $(".secgrDrop");
		if( $trigger2 !== event.target && ! $trigger2.has(event.target).length) {
			$(".analDrop").hide();
		}
	}
});

/* ----------------------------- Developer Section ----------------------------- */

// reload_sensex_nifty_strips();

/* Reload Sensex Nifty Strip -> Start */
	function reload_sensex_nifty_strips() {
		var ajax_link = 'https://indices.moneycontrol.co.in/sensex_nifty/indtick.json';

		$.ajax({
			type: "POST",
			url: ajax_link,
			dataType: 'jsonp',
			jsonpCallback:"indicereq",
			cache: true,
			error: function(obj, errorMsg, d) {
				//jAlert('Unable to process request - ' + errorMsg + '- ' + d);
			},
			success: function( jsonp_data ) {

				if( jsonp_data != '' ) {

					if( Object.keys( jsonp_data ).length > 0 ) {
						var sensex_object = jsonp_data[0];
						var nifty_object = jsonp_data[1];

						if( Object.keys( sensex_object ).length > 0 ) {
							if( $('#mc_myspace #sensex' ).length ) {

								var change = 0;
								change = $.trim( sensex_object.Bchg );

								var arrow_class = '';
								var color_class = '';
								if( change > 0 ) {
									arrow_class = "green_arw";
									color_class = "txt10_green";
								} else if( change < 0 ) {
									arrow_class = "red_arw";
									color_class = "txt10_red";
								}

								$( '#mc_myspace #sensex #arrow_class' ).removeClass( 'red_arw green_arw' ).addClass( arrow_class );
								$( '#mc_myspace #sensex #cp' ).html( $.trim( sensex_object.BValue ) );
								$( '#mc_myspace #sensex #chg_pchg' ).removeClass( 'txt10_red txt10_green' ).addClass( color_class );
								$( '#mc_myspace #sensex #chg_pchg' ).html( change + ' (' + $.trim( sensex_object.Bpchg ) + '%)' );
							}
						}

						if( Object.keys( nifty_object ).length > 0 ) {
							if( $('#market_action #indices_price' ).length ) {
								var ind_id = $.trim( $('#market_action #indices_price' ).attr( 'ind_id' ) );

								if( ind_id == 9 ) {
									var change = 0;
									change = $.trim( nifty_object.Nchg );

									var arrow_class = '';
									var color_class = '';
									if( change > 0 ) {
										arrow_class = "green_arw";
										color_class = "grntxt";
									} else if( change < 0 ) {
										arrow_class = "red_arw";
										color_class = "rdtxt";
									}

									$( '#market_action #indices_price #name' ).html( '<a href="https://www.moneycontrol.com/indian-indices/cnx-nifty-9.html" title="Nifty 50">Nifty 50</a>' );
									$( '#market_action #indices_price #cp' ).html( $.trim( nifty_object.NValue ) );
									$( '#market_action #indices_price #arrow_class' ).removeClass( 'red_arw green_arw' ).addClass( arrow_class );
									
									$( '#market_action #indices_price #chg' ).removeClass( 'rdtxt grntxt' ).addClass( color_class );
									// $( '#market_action #indices_price #chg' ).html( change + ' (' + $.trim( nifty_object.Npchg ) + '%)' );
									$( '#market_action #indices_price #chg' ).html( change );
								}
							}
						}

					}
				}

				/* Send Ajax Call only in market hour + exculde Saturday and Sunday -> Start */
					var d = new Date();
					var hour = d.getHours();
					var day_number = d.getDay();

					// if(hour >= 9 && hour <= 16 && day_number != 6 && day_number != 7) {
						setTimeout( reload_sensex_nifty_strips, 8000 );
					// }
				/* End <- Send Ajax Call only in market hour + exculde Saturday and Sunday */

			},
			beforeSend: function() {
				//
			},
			complete: function() {
				//
			}
		});
	}
/* End <- Reload Sensex Nifty Strip */


/* Global functions -> Start */
	
/* End <- Global functions */

/* MC Top News Tabs -> Start */
	function reload_mc_top_news_tabs_element( section_key, reload_div ) {
		section_key = $.trim(section_key);
		reload_div = '#' + $.trim(reload_div);

		var ajax_link = '';
		if( section_key == 'latest' ) {
			ajax_link = SITE_LINK + 'ajaxcontent/latest_news/mc_homepage/english/';
		} else if( section_key == 'most_read' ) {
			ajax_link = SITE_LINK + 'ajaxcontent/most_read_news/mc_homepage/english/';
		} else if( section_key == 'most_shared' ) {
			ajax_link = SITE_LINK + 'ajaxcontent/most_shared_news/mc_homepage/english/';
		} else if( section_key == 'hindi_samachar' ) {
			ajax_link = SITE_LINK + 'ajaxcontent/top_news/mc_homepage/hindi/';
		} else if( section_key == 'top_news' ) {
			ajax_link = SITE_LINK + 'ajaxcontent/top_news/mc_homepage/english/';
		} else {
			ajax_link = SITE_LINK + 'ajaxcontent/' + section_key + '/mc_homepage/english/';
		}

		if( ajax_link != '' ) {
			$.ajax({
				type: "GET",
				url: ajax_link,
				dataType: 'html',
				error: function(obj, errorMsg, d) {
					//jAlert('Unable to process request - ' + errorMsg + '- ' + d);
				},
				success: function(html_body) {
					if(html_body != '') {
						$(reload_div).html(html_body);
					}
				},
				beforeSend: function() {
					$(reload_div + ' .ajax_loading').show();
				},
				complete: function() {
					$(reload_div + ' .ajax_loading').hide();
				}
			});
		}
		return false;
	}
/* End <- MC Top News Tabs */

/* Personal Finance Advice -> Start  */
	function reload_personal_finance_advice_tabs_element( section_key, reload_div ) {
		section_key = $.trim(section_key);
		reload_div = '#' + $.trim(reload_div);

		var ajax_link = '';
		ajax_link = SITE_LINK + 'ajaxcontent/personal_finance_advice/' + section_key + '/mc_homepage/';

		if( ajax_link != '' ) {
			$.ajax({
				type: "GET",
				url: ajax_link,
				dataType: 'html',
				error: function(obj, errorMsg, d) {
					//jAlert('Unable to process request - ' + errorMsg + '- ' + d);
				},
				success: function(html_body) {
					if(html_body != '') {
						$(reload_div).html(html_body);
					}
				},
				beforeSend: function() {
					$(reload_div + ' .ajax_loading').show();
				},
				complete: function() {
					$(reload_div + ' .ajax_loading').hide();
				}
			});
		}
		return false;
	}
/* End <- Personal Finance Advice */