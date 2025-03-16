var pending_sections = [];
var section_threshold = 500;

$(document).ready(function() {
	if (typeof(ntd_language_active) != "undefined" && $('body.' + ntd_language_active).length > 0) {
		if ('ntd_japan' == ntd_language_active) {
			$('body.' + ntd_language_active).css('font-family', '"ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",Osaka, "メイリオ", Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif');
			if ($('.front_exclusive_slideshow').length > 0) {
				var slick_settings = {
					arrows: false,
					autoplay: true,
					autoplaySpeed: 2000,
					speed: 7000,
					vertical: true,
					verticalSwiping: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					pauseOnHover: true,
				};
				$('.front_exclusive_slideshow').slick(slick_settings);
			}
		} else if ('ntd_korea' == ntd_language_active) {
			$('body.' + ntd_language_active).css('font-family', '"AppleMyungjo", "Malgun Gothic", "Roboto", "Nanum Gothic"');
		}
		if ('ntd_french' == ntd_language_active ||
			'ntd_italian' == ntd_language_active ||
			'ntd_netherlands' == ntd_language_active ||
			'ntd_portuguese' == ntd_language_active) {
			$("#favicon1").attr("href","/assets/themes/ntd/images/et/et_favicon_1.jpg");
			$("#favicon2").attr("href","/assets/themes/ntd/images/et/et_favicon_2.png");
			$("#favicon3").attr("href","/assets/themes/ntd/images/et/et_favicon_3.png");
		}
		if ('ntd_spanish' == ntd_language_active) {
			$("#favicon1").attr("href","/assets/themes/ntd/images/et/lge_favicon_1.png");
			$("#favicon2").attr("href","/assets/themes/ntd/images/et/lge_favicon_2.png");
			$("#favicon3").attr("href","/assets/themes/ntd/images/et/lge_favicon_3.png");
		}
	}

    if ($("body.single").length > 0 && $("div.wp-video").length > 0 && $("video.ntd-video-wrap").length > 0) {
        resize_featured_video();
        $(window).resize(function(){
            resize_featured_video();
        });
    }

	$('body').click(function(e) {
		if (!e.target.matches('header .sections') &&
			!e.target.matches('header .menu_bottom .dropdown') &&
			!e.target.matches('header .search_icon') &&
			!e.target.matches('header .search') &&
			!e.target.matches('header .search_bar')) {
			collapseSearchButton();
			$('header .menu_bottom .dropdown.hover').trigger('mouseleave');
			$('header .sections .menu_icon.opened').trigger('click');
		}
	});

	$('body').bind('touchstart', function() {
		$('header .menu_bottom .dropdown').removeClass('hover');
		$('header .sections.opened').trigger('click');
		collapseSearchButton();
	});

	$('header .sections').bind('touchstart', function(e) {
		e.stopPropagation();
	});

	$('header .search').bind('touchstart', function(e) {
		e.stopPropagation();
	});

	$("header .menu_bottom .dropdown").hover(function() {
		$(this).addClass('hover');
		collapseSearchButton();
	}, function() {
		$(this).removeClass('hover');
	});

	$('#navbox').click(function(e) {
		e.stopPropagation();
	});

	$('header .search_icon').click(function(e) {
		e.stopPropagation();

		$('header .sections.opened').trigger('click');

		var it = this;

		if ($(this).hasClass('active')) {
			if ($.trim($('#search_bar').val())) {
				$(this).parent().submit();
				$('#search_bar').val('');

			} else {
				$('#search_bar').removeClass('active');
				$(this).removeClass('active');
			}

		} else {
			$(this).addClass('active');
			$('#search_bar').addClass('active');
			$('#search_bar').focus();
		}

	});

	$('header .search_icon_small').click(function(e) {
		$(this).parent().submit();
	});

	$('header .sections').click(function(e) {
		e.stopPropagation();

		collapseSearchButton();

		var navPos = 74;
		if ($(this).hasClass("closed")) {
			$("#navbox").slideDown(300);
			$('#sections .menu_icon').addClass("opened");
			$('#sections .menu_icon').removeClass("closed");
			$(this).addClass("opened");
			$(this).removeClass("closed");
			$("#navbox").css({
				"position": "absolute",
				"top": navPos,
			});
		} else {
			var it = this;
			$("#navbox").slideUp(300);
			$(it).addClass("closed");
			$(it).removeClass("opened");
			$('#sections .menu_icon').addClass("closed");
			$('#sections .menu_icon').removeClass("opened");

		}
		return false;
	});

	if ($('body.home').length > 0 && typeof(ntd_segment_url) != "undefined") {
		add_lazy_load_section('#inspired_top_posts', function() {
			load_html_segment((ntd_segment_url + '/html/top_posts_img.html'), '#inspired_top_posts');
		});

	}

	if ($('body.single').length > 0 && typeof(ntd_segment_url) != "undefined") {
		add_lazy_load_section('#single_page_inspired_videos', function() {
			load_html_segment((ntd_segment_url + '/html/videos_img.html'), '#single_page_inspired_videos');
		});
	}

	if ($('body.single.ntd_french').length > 0) {
		$('.article_body .post_content figure').css('width', '100%');
	}

	if ($('.category-the-edge-of-wonder').length > 0) {
		$("#main nav.category_nav").each(function(){
			$(this).next().andSelf().wrapAll("<div class='wonder_banner'></div>");
		});
	}

	if (typeof(ntd_language_active) != "undefined" && 'ntd_korea' == ntd_language_active && $('body.single').length > 0 && $('meta[property^="dable"]').length > 0) {
		$('div[itemprop="articleBody"]').after('<div class="division clear">&nbsp;</div><div id="dablewidget_GlGa6Zox" data-widget_id="GlGa6Zox"><script>(function(d,a){d[a]=d[a]||function(){(d[a].q=d[a].q||[]).push(arguments)};}(window,"dable"));dable("renderWidget", "dablewidget_GlGa6Zox");</script></div>');
	}
	
	if (typeof(ntd_language_active) != "undefined" && 'ntd_korea' == ntd_language_active && $('body.single').length > 0 && $('meta[property^="dable"]').length > 0) {
		$('aside .most_read_in_news').append('<div id="dablewidget_job8mRlW" data-widget_id="job8mRlW"><script>(function(d,a){d[a]=d[a]||function(){(d[a].q=d[a].q||[]).push(arguments)};}(window,"dable"));dable("renderWidget", "dablewidget_job8mRlW");</script></div>');
	}
	
	var page_num = 2;
	$('#category_load_more span').click(function() {
		var page_total = $(this).parent().data('page-num');
		url = window.location.href;
		if (page_num <= page_total) {
			if ($('#category_load_more').hasClass('is_search')) {
				url = url.replace('/?s=', ('/page/' + page_num + '/?s='));
			} else {
				var last_char = url.charAt(url.length -1);
				if('/' === last_char) {
					url += 'page/' + page_num;
				}else {
					url += '/page/' + page_num;
				}
			}
			$.ajax({
				type: 'GET',
				url: url,
				success: function(data) {
					page_num++;
					var content = $(data).find('.main_body .post_list ul').html();
					if (content) {
						$('.main_body .post_list ul').append(content);
					}
				},
				complete: function(data) {
					if (page_num >= page_total) {
						$('#category_load_more').hide();
					}
					if ($.fn.laziestloader) {
						$("img.lazy").laziestloader({
							threshold: 500
						});
					}
				}
			});
		}
		return false;
	});

	$("#backtotop").hide();
	$(function() {
		$(window).scroll(function() {
			if ($(this).scrollTop() > 800) {
				$("#backtotop").fadeIn();
			} else {
				$("#backtotop").fadeOut();
			}
		});
		$("#backtotop a").click(function() {
			$("body,html").animate({
				scrollTop: 0
			}, 800);
			return false;
		})
	});

	if ($("#ntd_facebook_fan_page").length > 0) {
		add_lazy_load_section('#ntd_facebook_fan_page', function() {
			$("#ntd_facebook_fan_page").append('<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FNTDTelevision&amp;tabs&amp;width=300&amp;height=220&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId=507441805990632" width="300" height="220" scrolling="no" frameborder="0" allowtransparency="true"></iframe>');
		});
	}

	if ($("#ntd_facebook_inspired_page").length > 0) {
		add_lazy_load_section('#ntd_facebook_inspired_page', function() {
			$("#ntd_facebook_inspired_page").append('<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FInspiredLifePage&amp;tabs&amp;width=300&amp;height=220&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId=507441805990632" width="300" height="220" scrolling="no" frameborder="0" allowtransparency="true"></iframe>');
		});
	}

	if ($("#ntd_facebook_taste_page").length > 0) {
		add_lazy_load_section('#ntd_facebook_taste_page', function() {
			$("#ntd_facebook_taste_page").append('<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTasteLifeByNTD&amp;tabs&amp;width=300&amp;height=220&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId=507441805990632" width="300" height="220" scrolling="no" frameborder="0" allowtransparency="true"></iframe>');
		});
	}

	if ($("#fb1_page").length > 0) {
		var pageId1 = $("#fb1_page").data('pageid');
		add_lazy_load_section('#fb1_page', function() {
			$("#fb1_page").append('<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F'+pageId1+'&amp;tabs&amp;width=300&amp;height=220&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId=507441805990632" width="300" height="220" scrolling="no" frameborder="0" allowtransparency="true"></iframe>');
		});
	}

	if ($("#fb2_page").length > 0) {
		var pageId2 = $("#fb2_page").data('pageid');
		add_lazy_load_section('#fb2_page', function() {
			$("#fb2_page").append('<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F'+pageId2+'&amp;tabs&amp;width=300&amp;height=220&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId=507441805990632" width="300" height="220" scrolling="no" frameborder="0" allowtransparency="true"></iframe>');
		});
	}

	if ($("#fb3_page").length > 0) {
		var pageId3 = $("#fb3_page").data('pageid');
		add_lazy_load_section('#fb3_page', function() {
			$("#fb3_page").append('<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F'+pageId3+'&amp;tabs&amp;width=300&amp;height=220&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId=507441805990632" width="300" height="220" scrolling="no" frameborder="0" allowtransparency="true"></iframe>');
		});
	}

	// open links in post content in new window/tab
	$('.post_content a').each(function() {
		$(this).attr("target", "_blank");
	});

	function collapseSearchButton() {
		$('#search_bar').val('');
		$('#search_bar').removeClass('active');
		$('header .search_icon').removeClass('active');
	}

	if ($.fn.laziestloader) {
		$("img.lazy").laziestloader({
			threshold: 500
		});

		$(window).trigger('scroll');
	}

	//resize ratio for video from vhostapi.ntd.tv
	$.each($('.video_fit_container > iframe, .video_fit_container > div.wp-video, .video_fit_container > div.player-container'), function() {
		var attr = $(this).attr('data-ratio');
		if (!attr) {
			attr = $(this).siblings('script').attr('data-ratio');
		}
		if (typeof attr !== typeof undefined && attr.length > 0) {
			$(this).parent('.video_fit_container').css('padding-top', attr);
		}
	});

	$('.current_edition').click(function(e) {
	    if ($('.multiple_edition ul').hasClass('hidden')) {
	        e.stopPropagation();
	        open_languages_dropdown();
	    } else {
	        e.stopPropagation();
	        close_languages_dropdown()
	    }
	});

	$(document).on("click", function(e) {
	    e.stopPropagation();
	    close_languages_dropdown();
	});

	function open_languages_dropdown() {
	    $('.multiple_edition ul').removeClass('hidden');
	    $('body').append('<div id="ui-widget-overlay"  class="ui-widget-overlay" style="z-index: 100;"></div>');
	}

	function close_languages_dropdown() {
	    $('.multiple_edition ul').addClass('hidden');
	    $('#ui-widget-overlay').remove();
	}
	jQuery.loadAsync = function(url, success_callback) {
			return jQuery.ajax({
				url: url,
				dataType: "script",
				cache: true,
				async: true,
				success: success_callback || jQuery.noop,
			});
		};
	if ((ntd_language_active === 'ntd_italian') || (ntd_language_active === 'ntd_portuguese')) {		
		var ntd_storage_prefer = localStorage.getItem('ntd_storage_prefer');
		if (ntd_storage_prefer != null){
			if (ntd_storage_prefer.indexOf('ntd-media-storage') >= 0) {
				$('#ntd-media-storage').prop('checked', true); 
				if ( typeof scripts_to_load != 'undefined' && scripts_to_load.length > 0) {
						for (var i = 0; i < scripts_to_load.length; i++) {
							jQuery.loadAsync(scripts_to_load[i], jQuery.noop);
						}
				}
			}
			if (ntd_storage_prefer.indexOf('ntd-analytics-storage') >= 0) {
				$('#ntd-analytics-storage').prop('checked', true);
			}
			if (ntd_storage_prefer.indexOf('ntd-advertisment-storage') >= 0) {
				$('#ntd-advertisment-storage').prop('checked', true);
			}
		}
	}
	
    /* show or hide cookie bar in the bottom of the page
     * followed French CNIL request
    * 2. to condition this registration and this access to a prior positive action of the persons concerned;
    * all the field should be deselect as default.
    */
    setTimeout(function () {
		var epoch_gdpr_agreement = localStorage.getItem("epoch_gdpr_agreement");
		var epoch_gdpr_userid = eet_ymk_userID();
		var preferSelectedAll= ['ntd-gdpr-basic,ntd-analytics-storage','ntd-media-storage','ntd-advertisment-storage'];
		var ntd_storage_prefer = localStorage.getItem('ntd_storage_prefer');
		/* ntd_japan*/
		if ((ntd_language_active === 'ntd_italian' || ntd_language_active === 'ntd_portuguese' )) {			
			$(".ntd-gdpr-button-settings").click(function(e){
				e.preventDefault();
				$('.cookie-bar').show();	
				$('.ntd-gdpr-first-screen').hide();
				$('.ntd-gdpr-second-screen').show();
				$('body').removeClass( "ntd-gdpr-no-scroll" );
			});

			$(".ntd-eu :button").click(function() {
				var buttonElementName = $(this).attr('name');

				var preferSelected = ['ntd-gdpr-basic'];
				if (buttonElementName=='ntd-one-save-status') {
					$.each($('input[name="gdpr[]"]').serializeArray(), function(i, field){
					preferSelected.push(field.value);
				});
				} else if (buttonElementName=='accept-btn'){
					preferSelected = preferSelectedAll;
				}
				else if (buttonElementName=='ntd-gdpr-denyAll'){
						preferSelected = ['ntd-gdpr-basic'];
				} else {
					return;
				}
				var preferSelectedString = '';

				if (Array.isArray(preferSelected)){
					preferSelectedString = preferSelected.join(';');
				} else {
					preferSelectedString = preferSelected;
				}
				$.ajax({
					type: "GET",
					url: "https://www.youmaker.com/g/log?user=" + epoch_gdpr_userid,
					data: "ntd_storage_prefer: " + preferSelectedString,
					complete: function (data) {
					localStorage.setItem('epoch_gdpr_agreement', '1');
					localStorage.setItem("ntd_storage_prefer", preferSelectedString);
					$(".cookie-bar").slideUp();
					$('body').removeClass( "ntd-gdpr-no-scroll" );
					/*clear cookies before reload if reject */
					if (preferSelectedString.indexOf('ntd-analytics-storage') < 0) {
					    var cookies = document.cookie.split(";"); 
					    for (var i = 0; i < cookies.length; i++) {
					        ntd_set_cookie(cookies[i].split("=")[0], '', -1);
					    }
					}
					location.reload(true);
					}
				});
			});
			
			$(".ntd-one-cancel-status").click(function(){
			epoch_gdpr_agreement = localStorage.getItem("epoch_gdpr_agreement");
			ntd_storage_prefer = localStorage.getItem("ntd_storage_prefer");

			if (epoch_gdpr_agreement == "1") {
				$(".cookie-bar").hide();
				$('.ntd-gdpr-first-screen').hide();
				$('.ntd-gdpr-second-screen').show();
				$('body').removeClass( "ntd-gdpr-no-scroll" );
				return;
			} else {
				$('body').addClass( "ntd-gdpr-no-scroll" );
				$(".cookie-bar").show();
				$('.ntd-gdpr-first-screen').show();
				$('.ntd-gdpr-second-screen').hide();
				}
			});
			
			if ((ntd_storage_prefer == null) || (ntd_storage_prefer.indexOf('ntd-gdpr-basic') < 0)){
				$('.cookie-bar').show();                
				$('.ntd-gdpr-first-screen').show();
				$('.ntd-gdpr-second-screen').hide();
				$('body').addClass( "ntd-gdpr-no-scroll" ); 
			}
		} else if (ntd_language_active !== 'ntd_portuguese' && ntd_language_active !== 'ntd_italian' ){
			/*  ntd_language_active !== 'ntd_portuguese'  (ntd_italian)*/ 
			if (epoch_gdpr_agreement != "1") { 
				$(".cookie-bar").show();
			}
			$(".accept-btn").click(function () {
			$.ajax({
				type: "GET",
				url: "https://www.youmaker.com/g/log?user=" + epoch_gdpr_userid,
				complete: function (data) {                       
						 localStorage.setItem('epoch_gdpr_agreement', '1');                       
				}
			});
			$(".cookie-bar").slideUp();
				return false;
			});
		}

		$("#x_close").click(function () {
			$(".cookie-bar").slideUp();
			return false;
		});
	}, 8000);

}); /* end of document ready */
function ntd_set_cookie(name, value, days) {
	var expires = "";
	var date = new Date();
	var domain = ".theepochtimes.com";
	if (ntd_language_active === 'ntd_italian') {
		domain = '.epochtimes.it';		
	} else if (ntd_language_active === 'ntd_portuguese') {
		domain = '.epochtimes.com.br';
	}
	date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
	expires = "; expires=" + date.toGMTString();
	document.cookie = name + "=" + value + expires + ";domain=" + domain + ";path=/;SameSite=Lax";
}
function ntdGetCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ')
			c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0)
			return c.substring(nameEQ.length, c.length);
	}
	return null;
}
function check_sections_on_scroll() {
	var scroll = jQuery(window).scrollTop();
	pending_sections = pending_sections.filter(function(item) {
		var section_top = jQuery(item.selector).offset().top - jQuery(window).height();
		// Show the section if the user scrolls near or past the section.
		if (section_top - scroll < item.threshold || scroll > section_top) {
			item.callback();
			// Remove this section from the pending list.
			return false;
		}
		return true;
	});
}
function eet_ymk_userID() {
	if (typeof window.ymkAuth !== 'undefined' && typeof window.ymkAuth.ymkUserData !== 'undefined' && window.ymkAuth.ymkUserData) {
		return window.ymkAuth.ymkUserData;
	}
	var userID = localStorage.getItem("epoch_gdpr_userid");
	if (!userID) {
		userID = epochGUID();
		localStorage.setItem('epoch_gdpr_userid', userID);
	}
	return userID;
}
function add_lazy_load_section(selector, callback, threshold) {
	var offset = jQuery(selector).offset();
	if (!offset)
		return;

	if (!threshold || threshold < 0)
		threshold = section_threshold;

	pending_sections.push({
		selector: selector,
		callback: callback,
		threshold: threshold
	});
}

function load_html_segment(url, dest) {
	$.ajax({
		type: 'GET',
		url: url,
		success: function(data) {
			$(dest).empty().append(data);
		},
		complete: function(data) {
			if ($.fn.laziestloader) {
				$(dest + " img.lazy").laziestloader({
					threshold: 500
				});
			}
		}
	});
}

// throttled scroll events
var didScroll = null;
jQuery(window).scroll(function() {
	didScroll = true;
});
setInterval(function() {
	if (didScroll) {
		didScroll = false;
		check_sections_on_scroll();
	}
}, 250);

function epochGUID() {
	  function s4() { return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1); }
	  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

function resize_featured_video() {
    var article_width = $(".left_block").width();
    var video_height = article_width * (56.25/100);
    $(".wp-video").css("width", article_width);
    $(".wp-video").css("height", video_height);
    $(".ntd-video-wrap").attr("width", article_width);
    $(".ntd-video-wrap").attr("height", video_height);
}