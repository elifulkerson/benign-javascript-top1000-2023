/*!
* hoverIntent v1.10.1 // 2019.10.05 // jQuery v1.7.0+
* http://briancherne.github.io/jquery-hoverIntent/
*
* You may use hoverIntent under the terms of the MIT license. Basically that
* means you are free to use hoverIntent as long as this header is left intact.
* Copyright 2007-2019 Brian Cherne
*/
!function(factory){"use strict";"function"==typeof define&&define.amd?define(["jquery"],factory):"object"==typeof module&&module.exports?module.exports=factory(require("jquery")):jQuery&&!jQuery.fn.hoverIntent&&factory(jQuery)}(function($){"use strict";function track(ev){cX=ev.pageX,cY=ev.pageY}var cX,cY,_cfg={interval:100,sensitivity:6,timeout:0},INSTANCE_COUNT=0,compare=function(ev,$el,s,cfg){if(Math.sqrt((s.pX-cX)*(s.pX-cX)+(s.pY-cY)*(s.pY-cY))<cfg.sensitivity)return $el.off(s.event,track),delete s.timeoutId,s.isActive=!0,ev.pageX=cX,ev.pageY=cY,delete s.pX,delete s.pY,cfg.over.apply($el[0],[ev]);s.pX=cX,s.pY=cY,s.timeoutId=setTimeout(function(){compare(ev,$el,s,cfg)},cfg.interval)};$.fn.hoverIntent=function(handlerIn,handlerOut,selector){var instanceId=INSTANCE_COUNT++,cfg=$.extend({},_cfg);$.isPlainObject(handlerIn)?(cfg=$.extend(cfg,handlerIn),$.isFunction(cfg.out)||(cfg.out=cfg.over)):cfg=$.isFunction(handlerOut)?$.extend(cfg,{over:handlerIn,out:handlerOut,selector:selector}):$.extend(cfg,{over:handlerIn,out:handlerIn,selector:handlerOut});function handleHover(e){var ev=$.extend({},e),$el=$(this),hoverIntentData=$el.data("hoverIntent");hoverIntentData||$el.data("hoverIntent",hoverIntentData={});var state=hoverIntentData[instanceId];state||(hoverIntentData[instanceId]=state={id:instanceId}),state.timeoutId&&(state.timeoutId=clearTimeout(state.timeoutId));var mousemove=state.event="mousemove.hoverIntent.hoverIntent"+instanceId;if("mouseenter"===e.type){if(state.isActive)return;state.pX=ev.pageX,state.pY=ev.pageY,$el.off(mousemove,track).on(mousemove,track),state.timeoutId=setTimeout(function(){compare(ev,$el,state,cfg)},cfg.interval)}else{if(!state.isActive)return;$el.off(mousemove,track),state.timeoutId=setTimeout(function(){!function(ev,$el,s,out){var data=$el.data("hoverIntent");data&&delete data[s.id],out.apply($el[0],[ev])}(ev,$el,state,cfg.out)},cfg.timeout)}}return this.on({"mouseenter.hoverIntent":handleHover,"mouseleave.hoverIntent":handleHover},cfg.selector)}});


//Global Variables
var AFTERLOGINCALLBACK = '';
var USERNMMC = '';
var LOGIN_API = 'http://www.moneycontrol.com/portfolio_new/mc_login_check.php';
var SITEURL = "https://"+window.location.hostname+"/";
var SITEURL_BS = "http://"+window.location.hostname;
var MC_URL = 'http://www.moneycontrol.com/';

/* WAP - Get MC App / Open in App */
var is_mc_app_strip_activated = false;	/* Use for Header Strip Banner Activation - [ true / false ] */
var is_mc_app_sticky_buttons_activated = true;	/* Use for Sticky Buttons Activation - [ true / false ] */

$(document).ready(function() {
	USERNMMC = readCookie("nnmc");

	if($('.sub1').length > 0){
		$('.sub1').hover(function(){
				headerTopPopups();
				$(this).find('.submenus').fadeIn();
			},function(){
				$(this).find('.submenus').hide();	
		});
	}

	$( '.searchlang' ).click(function(){
		$(this).toggleClass( 'activemn' );
		$(this).find( '.srchCat_DDLbx' ).slideToggle();
	}).mouseleave(function(e) {
		$(this).find( '.srchCat_DDLbx' ).slideUp();
		$(this).removeClass( 'activemn' );
	});

	$( '.iconpancake' ).click(function(){
		$( '.menu_tab_block .menu_tabs.wap_three_tabs li, .menu_tab_block .menu_tabs li, .menu_bottom_block .menu_tabs li' ).removeClass( 'current' );
	});

	$( '.menu_tabs.wap_three_tabs li.popuplink, .menu_bottom_block .menu_tabs li' ).click( function() {
		$(this).toggleClass( 'current' );
	});

	if( $( '.sign_wrapmenu' ).length > 0 ) {
		$( ".sign_wrapmenu a" ).click( function( event ) {
			event.preventDefault();
			$(this).parent().addClass( "current" );
			$( ".pancakScrl" ).addClass( "menuheight" );
			$(this).parent().siblings().removeClass( "current" );
			var tab = $(this).attr( "href" );
			$( ".menu_tab_submenu" ).not(tab).css( "display", "none" );
			$(tab).fadeIn();
		});
	}

	if( $( '.submenu_div' ).length > 0 ) {
		$( '.submenu_div' ).click( function( j ) {
			var dropDown = $(this).closest( '.menutable li' ).find( '.hamburger_submenu' );
			$(this).closest( '.menutable' ).find( '.hamburger_submenu' ).not(dropDown).slideUp();
			if( $(this).hasClass( 'active' ) ) {
				$(this).removeClass( 'active' );
			} else {
				$(this).closest( '.menutable' ).find( '.submenu_div.active' ).removeClass( 'active' );
				$(this).addClass( 'active' );
			}
			dropDown.stop(false, true).slideToggle();
			j.preventDefault();
		});
	}

	$( ".last_accordion_menu" ).click(function() {
		$( '.pancakScrl' ).animate({ scrollTop: $( "#accord_last_div" ).offset().top}, 'slow' );
	});

	/* When User clicks on User Profile icon from Top Navigation */
	if($('.icon-user').length > 0){
		$('.icon-user').click(function(){

			GAEventTracker( 'Navigation', 'Top', 'profile_menu_wap' );

			$('div#autosugg_mc_mobile, .pancakemenu').hide();	
			if($('.ic-search').hasClass('icon-close')){
				$('.ic-search').removeClass("icon-close");
			}
			if($('.iconpancake').hasClass('tpMenucl')){
				$('.iconpancake').removeClass("tpMenucl");
			}
			
			$(".usermenus").toggle();
			//$(this).find(".usermenus").toggle();
		});
	}

	if( $( '.toptab1' ).length > 0 ) {
		$( '.toptab1' ).hover(function() {
			headerTopPopups();

			/* Implementation for Defer image Specials tab. -> Start */
			$( '.toptab1 .common_dropmenu .app_banner img' ).each( function() {
				/* Checks, if data-src attribute is present */
				if( $(this).attr( 'data-src' ) ) {
					/* Checks, if data-src and src attributes are not same */
					if( $(this).attr( 'src' ) !== $(this).attr( 'data-src' ) ) {
						$(this).attr( 'src', $.trim( $(this).attr( 'data-src' ) ) );
					}
				}
			});
			/* End <- Implementation for Defer image Specials tab. */

			$(this).find( '.common_dropmenu' ).show();
		},function(){
			$(this).find( '.common_dropmenu' ).hide();
		});
	}

	if($('.subscriptionblock').length > 0){
		var premiumSlider = $('.subscriptionblock .app_banner').bxSlider({
			pager:false,   
			slideMargin:5,  
			minSlides: 3, 
			maxSlides: 4, 
			slideWidth: 230,  
			infiniteLoop:true, 
			moveSlides:1, 
		});
	}

	/*
	if( $( '.splist' ).length > 0 ) {
		var spec_slider = $( '.splist' ).bxSlider({
			pager:false,   
			slideMargin:15,  
			minSlides:6, 
			maxSlides:6,
			slideWidth:145,  
			infiniteLoop:true, 
			moveSlides:1, 
		});
	}
	*/

	if( $( '.toptab2' ).length > 0 ) {
		$( '.toptab2' ).hover(function(){
			headerTopPopups();
			if( $( '.common_dropmenu' ).length > 0 ) {
				$(this).find( '.common_dropmenu' ).show();
				premiumSlider.reloadSlider();
			}
		},function(){
			if( $( '.common_dropmenu' ).length > 0 ) {
				$(this).find( '.common_dropmenu' ).hide();
			}
		});
	}

	if( $( '.toptab3' ).length > 0 ) {
		$( '.toptab3' ).hover(function(){
			headerTopPopups();

			/* Implementation for Defer image Specials tab. -> Start * /
			$( '.toptab3 .common_dropmenu .splist img' ).each( function() {
				/* Checks, if data-src attribute is present * /
				if( $(this).attr( 'data-src' ) ) {
					/* Checks, if data-src and src attributes are not same * /
					if( $(this).attr( 'src' ) !== $(this).attr( 'data-src' ) ) {
						$(this).attr( 'src', $.trim( $(this).attr( 'data-src' ) ) );
					}
				}
			});
			/* End <- Implementation for Defer image Specials tab. */

			$(this).find('.common_dropmenu').show();
			/* spec_slider.reloadSlider(); */
		},function(){
			$(this).find('.common_dropmenu').hide();
		});
	}
	

	if($(window).width() <= 1024){
		/*if($('.stickymiddle').length > 0){
			$('.stickymiddle ul li').hover( function(){
				$(this).find('.stickysub').show();
				$('a', this).addClass('actlink');
			}, function(){
				$(this).find('.stickysub').hide();
				$('a', this).removeClass('actlink');
			});
		}*/
	}

	/*
	var navloc = $('.headBotm').offset().top;
	if($(window).width() > 1024){
		if($('.headBotm').length > 0){
			$(window).scroll(function(){
				if($(window).scrollTop() > navloc) {
					$('.headBotm').addClass('stickymenu');
					tophover();
					$('.stickysub').hide();
				} else {
					$('.stickysub.db.actlink').show();
					$('.headBotm').removeClass('stickymenu');
					$(".searchbox").hide();
					$('.ic-search').removeClass('icon-close');
					$('.activelink').unbind('mouseenter mouseleave');
				}
			});
		}
	}
	*/

	/* When User clicks on Search icon from Top */
	if( $( '.ic-search' ).length > 0) {
		$( '.ic-search' ).click( function(){
			// $( 'div.pancakemenu, #mc_mobile_usermenus' ).hide();
			$( '#mc_mobile_usermenus' ).hide();
			$( ".bodyhiddn" ).removeClass();
			$( '.pancakemenu' ).removeClass("active");
			$( '.iconpancake' ).removeClass("tpMenucl");

			if( $( '.iconpancake' ).hasClass( 'tpMenucl' ) ) {
				$( '.iconpancake' ).removeClass( "tpMenucl" );
			}
			$( "#autosugg_mc_mobile" ).toggle();
			$(this).toggleClass( "icon-close" );

			/* MON-3125 - Trending stocks in Search Box on WAP: Contd. */
			if( $( "#autosugg_mc_mobile" ).is( ":visible" ) ) {
				$( "#form_mobile_topsearch #search_str" ).focus();
				getAutosuggesionHeader( '#form_mobile_topsearch' );
			}
		});
	}

	if($('.icpancakeblock #stickysrchCatSelected').length > 0){
		$('.icpancakeblock #stickysrchCatSelected').click( function(){
			$('.srchCat_DDL').toggle();
		});
	}
	
	/*if($('#ul_srchCat_DDL li a').length > 0){
		$('#ul_srchCat_DDL li a').click(function(e) {
            $('#ul_srchCat_DDL li a').removeClass('active');
			$(this).addClass('active');
			
			if($('#ul_srchCat_DDL li a.active').length > 0){
				$("#srchCatSelected").html($('#ul_srchCat_DDL li a.active').text()+' <span class="catDdl_Arrow"></span>');
				$("#form_topsearch #topsearch_type").val($('#ul_srchCat_DDL li a.active').attr('rel'));
				//$("#srch").slideUp();
				$("#srch").show();
			}
			return false;
        });
	}*/
	
	if($("#autosugg_mc1").length > 0){
		$("#autosugg_mc1").mouseleave(function(e) {
			$("#autosugg_mc1").fadeOut();
			return false;
		});
	}

	if($( ".trend_searchbx" ).length > 0){
		$( ".trend_searchbx" ).mouseleave(function(e) {
			$( " .trend_searchbx" ).fadeOut();
			return false;
		});
	}

	if($(".myaccpop").length > 0){
		$(".myaccpop").mouseleave(function(e) {
			$('.myaccpop').parent('div.dropdown').removeClass('open'); //$(".myaccpop").fadeOut();
			return false;
		});
	}

	/* When User clicks on burger icon from Top Navigation */
	if( $( '.iconpancake' ).length > 0 ) {

		$( ".iconpancake" ).click(function() {

			GAEventTracker( 'Navigation', 'Top', 'ham_menu_wap' );

			$('div#autosugg_mc_mobile, #mc_mobile_usermenus').hide();
			if($('.ic-search').hasClass('icon-close')){
				$('.ic-search').removeClass("icon-close");
			}

			$(this).toggleClass('tpMenucl');
			// $( ".pancakemenu" ).toggle();

			$( ".pancakemenu" ).toggleClass( "active" );
			$( '.over' ).toggleClass( 'overlaybg' );
			$( 'body' ).toggleClass( 'bodyhiddn' );
			$( '.hamburger_submenu' ).hide();
			$( '.menu_tab_submenu' ).hide();

			/* Generate Get App Link bassed on User Device -> Start */
				var userAgent=navigator.userAgent.toLowerCase();
				if( ( userAgent.search( "iphone" ) > -1 ) || ( userAgent.search( "ipod" ) > -1 ) || ( userAgent.search( "ipad" ) > -1 ) ) {
					$( ".getAppModel" ).attr( 'href', "https://n7tuy.app.goo.gl/home?utm_source=MC_GetApp&utm_medium=MC_WAP&utm_campaign=GetApp_Button" ); 
				}
				if( ( userAgent.search( "android" ) > -1 ) ) {
					$( ".getAppModel" ).attr( 'href', "https://wz7ux.app.goo.gl/app?utm_source=MC_GetApp&utm_medium=MC_WAP&utm_campaign=GetApp_Button" ); 
				}
			/* End <- Generate Get App Link bassed on User Device */
		});
	}

	if( $( '.over' ).length > 0 ) {
		$( '.over' ).click(function(){
			$( '.iconpancake' ).removeClass( 'tpMenucl' );
			$( ".pancakemenu" ).removeClass( "active" );
			$( '.over' ).removeClass( 'overlaybg' );
			$( 'body' ).removeClass( 'bodyhiddn' );
			$( '.hamburger_submenu' ).hide();
			$( '.menu_tab_submenu' ).hide();
		});	
	}

	$(".btn-close").click(function(){
		$(this).closest('.dropdown').removeClass('open')
	});
	
	$('.dropdown-menu').click( function(e){
		e.stopPropagation();
	});

	/* WAP - Global search - Trending element hides => Commeneted out below section */
	/*
	$(window).scroll(function(){
		/* Runs Only for Mobile * /
		if( $(window).width() <= 767 ) {

			/* Hide Trending Search box -> Start * /
				if( $( '.trend_searchbx' ).length ) {
					if( $( '.trend_searchbx' ).css( 'display' ) == 'block' ) {
						$( '.trend_searchbx' ).hide();
					}
				}
			/* End <- Hide Trending Search box */

			/* Hide Auto Suggest Search box -> Start * /
				if( $( '#autosugg_mc1' ).length ) {
					if( $( '#autosugg_mc1' ).css( 'display' ) == 'block' ) {
						$( '#autosugg_mc1' ).css( 'display', 'none' );
					}
				}
			/* End <- Hide Auto Suggest Search box * /
		}
	});
	*/

	/* Aditya Birla Group Campaign Banner -> Start */
		if( $( '.aditya_birla_group_campaign_banner' ).length > 0 ) {

			var user_token_normal = readCookie( 'token-normal' );
			var mcpro = readCookie( 'mcpro' ); 

			if( user_token_normal != '' ) {	/* Runs for Log-in User Only */
				if( mcpro == undefined || mcpro == '' || mcpro == '0' ) {	/* Runs for Non Pro User Only */

					var ajax_link = 'https://www.moneycontrol.com/techmvc/mc_widgets/aditya_birla_group_campaign_banner?user_token=' + user_token_normal + '&classic=true';

					$.ajax({
						url : ajax_link,
						type : "POST",
						dataType : "html",
						crossDomain : true,
						success : function( html_data ) {
							if( html_data.length > 0 ) {
								$( '.aditya_birla_group_campaign_banner' ).html( html_data );
								$( '.aditya_birla_group_campaign_banner' ).show();
							}
						}
					});
				}
			}
		}
	/* End <- Aditya Birla Group Campaign Banner */

	/* WAP - Get MC App Installation Checks -> Start */
		var width = document.documentElement.clientWidth;

		/* Runs Only for WAP */
		if( width <= 768 ) {
			var is_checks_mc_app = true;
			var mobile_operating_system = get_mobile_operating_system();
			var is_get_mc_app_cookie_exists = false;
			var get_mc_app_cookie_name = 'MC_WAP_GET_APP_LOGIC_' + get_current_date();
			var get_mc_app_cookie_object = readCookie( get_mc_app_cookie_name );	/* Get Cookie Value */
			var is_microsite_page = $.trim( $( '#is_microsite_page' ).val() );
			var is_display_get_open_app_sticky_button = $.trim( $( '#is_display_get_open_app_sticky_button' ).val() );
			var page_url = window.location.href;

			$( '#get_open_app_result #mobile_operating_system' ).html( 'Mobile Operating System = ' + mobile_operating_system );

			/* Checks for Cookie is exists OR not? */
			if( get_mc_app_cookie_object == '1' ) {
				is_get_mc_app_cookie_exists = true;
			}

			/* Checks for News Microsite Page */
			if( is_microsite_page == '1' ) {
				is_checks_mc_app = false;
			}


			/* Checks for Microsite Pages */
			if( page_url != '' ) {
				/* Checks for /msite/ Microsite Page */
				if( page_url.indexOf( '/msite/' ) > -1 ) {
					is_checks_mc_app = false;
				}

				/* Checks for /ms/ Microsite Page */
				if( page_url.indexOf( '/ms/' ) > -1 ) {
					is_checks_mc_app = false;
				}
			}

			/* Hide Open App / Get App button funtionality */
			if( is_display_get_open_app_sticky_button == 'false' ) {
				is_checks_mc_app = false;
			}

			$( '#get_open_app_result #cookie_object' ).html( 'Cookie Name = ' + get_mc_app_cookie_name + ' | Cookie Value = ' + get_mc_app_cookie_object  + ' | Cookie Exists = ' + is_get_mc_app_cookie_exists );

			if( mobile_operating_system != 'ios' && is_get_mc_app_cookie_exists == false && is_checks_mc_app == true ) {
				window.addEventListener( 'load', () => {

					/* Generate Open APP Button Link */
					generate_open_app_button_link();

					/* Check to see if the API is supported. */
					if( 'getInstalledRelatedApps' in navigator ) {
						checkForMCApps();

					} else {
						if( is_mc_app_strip_activated == true ) {
							$( '.responsive_true' ).addClass( 'getapp_mobheader' );
							$( '#fixedheader' ).addClass( 'getapp_strip' );
							$( '.header_get_app_strip' ).show();
							$( '#get_open_app_result #final_output' ).html( 'Displays Get App Strip' );
						}

						if( is_mc_app_sticky_buttons_activated == true ) {
							$( '.get_app_sticky_btn' ).show();
							$( '#get_open_app_result #final_output' ).html( 'Displays Get App Sticky Button' );
						}
					}
				});
			}
		}
	/* End <- WAP - Get MC App Installation Checks */

	/* WAP - Get MC App Close Button -> Start */
		$(".mcApp_strip .close_btn").on( "click", function() {
			var get_mc_app_cookie_name = 'MC_WAP_GET_APP_LOGIC_' + get_current_date();

			GAEventTracker( 'Get App_X', 'Click', window.location.href );

			mctop_setCookie( get_mc_app_cookie_name, '1', '1' );	/* Create Cookie */

			$( '#mcApp_strip' ).hide();
			$( '.icpancakeblock' ).removeClass( 'getapp_strip' );
			$( '.responsive_true' ).removeClass( 'getapp_mobheader' );
		});
	/* End <- WAP - Get MC App Close Button */

	/* Credit Bureau Promo popup -> Start */
		let is_display_credit_bureau_promo_popup = true;	/* Popup Visibility Flag */
		let cb_promo_popup_value_list = [];
		let cb_promo_popup_object = 'PromoPopupRecord';	/* local Storage - Maintain Popup */
		let is_visted_cb_page_object = 'isVistedCbPage';	/* local Storage - To Store User Visited CB Page journey */
		let is_cb_promo_popup_autoLoad = false;	/* Load Popup after 'n' seconds -> true / false */
		let is_cb_promo_popup_idleLoad = true;	/* Load Popup on idle mode -> true / false */

		if( $( '.credit_bureau_promo_popup' ).length > 0 ) {

			let cb_promo_popup_intervals = $.trim( $( '#cbSignup' ).attr( 'popup_intervals' ) );	/* The Popup should display how many times? */

			/* Deal with local Storage values */
			let cb_promo_popup_value = localStorage.getItem( cb_promo_popup_object );
			let is_visted_cb_page_value = localStorage.getItem( is_visted_cb_page_object );

			/* console.log( 'Display Popup Intervals = ', cb_promo_popup_intervals ); */
			/* console.log( 'Local Storage -> ', cb_promo_popup_object,  ' => ', cb_promo_popup_value, " | ", is_visted_cb_page_object,  ' => ', is_visted_cb_page_value ); */

			/* Checks, if user click on Submit button from Popup */
			if( is_visted_cb_page_value ) { 
				/* console.log( 'User has already visited CB Page.' ); */
				is_display_credit_bureau_promo_popup = false;
			} 

			if( cb_promo_popup_value && is_display_credit_bureau_promo_popup ) {

				let cb_promo_popup_list = JSON.parse( cb_promo_popup_value );

				/* Checks for Popup exceeds limit */
				if( Object.keys( cb_promo_popup_list ).length >= cb_promo_popup_intervals ) { 
					/* console.log( 'Popup Display intervals are already fullfiled.' ); */
					is_display_credit_bureau_promo_popup = false; 
				} else {

					let current_date = new Date().toLocaleString( 'en-MY', { day : 'numeric', month : 'long', year : 'numeric' } );

					/* Checks for todays entry is Present or not on cb_promo_popup_list */
					for( let i = 0; i < Object.keys( cb_promo_popup_list ).length; i++ ) {

						/* Based to exixting values generate data for Local Storage List. */
						cb_promo_popup_value_list.push({ "date" : cb_promo_popup_list[i][ 'date' ], "isPromoShowed" : cb_promo_popup_list[i][ 'isPromoShowed' ] });

						if( current_date == cb_promo_popup_list[i][ 'date' ] && cb_promo_popup_list[i][ 'isPromoShowed' ] ) { 
							/* console.log( cb_promo_popup_list[i][ 'date' ], ' entry already exists. ' ); */
							is_display_credit_bureau_promo_popup = false;
						}
					}
				}
			}

			/* Setting up Popup Visibility */
			var user_token_normal = readCookie( 'token-normal' );
			var mcpro = readCookie( 'mcpro' ); 

			if( user_token_normal != '' ) {	/* Runs for Log-in User Only */
				if( mcpro == '1' ) {
					$( "#cbSignup .modal-dialog" ).addClass( 'probx' );
					$( "#cbSignup .for_mcpro_users" ).attr( "style", "display:block" );
					$( "#cbSignup .for_nonpro_users" ).attr( "style", "display:none" );
				}
			}

			/* Add Present Day values to Local Storage List. */
			if( is_display_credit_bureau_promo_popup ) {

				cb_promo_popup_value_list.push({ "date" : new Date().toLocaleString( 'en-MY', { day:'numeric', month:'long', year:'numeric' } ), "isPromoShowed" : true });

				if( is_cb_promo_popup_autoLoad ) {	/* Load Popup after 'n' seconds */
					/* console.log( "CB Promo - Load Popup after 'n' seconds" ); */
					cbPopupInterval = setInterval( function() { cbPopupStartTimer( cb_promo_popup_object, cb_promo_popup_value_list ) }, 1000 );

				} else if( is_cb_promo_popup_idleLoad ) {	/* Load Popup on idle mode */
					/* console.log( 'Load Popup on idle mode -> Started' ); */
					cbPopupIdleProcess( cb_promo_popup_object, cb_promo_popup_value_list );

				}
			}

			console.log( 'Is Display Credit Bureau Promo Popup = ', is_display_credit_bureau_promo_popup );

			$( 'body a' ).click( function( e ) {	/* Checks for each body element containing a href tag  */

				let selected_url = $.trim( $(this).attr( 'href' ) );	/* Get URL, which is clicked by User */
				let is_display = $.trim( $( "#cbSignup" ).attr( 'is_display' ) );	/* Checks if auto load Popup */

				/* console.log( 'selected_url = ', selected_url ); */
				/* console.log( 'is_display = ', is_display ); */

				if( selected_url != '' && is_display_credit_bureau_promo_popup && is_display === 'true' ) {

					/* Checks for URL Vaidation */
					var url_validate = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
					if( url_validate.test( selected_url ) ) {

						/* console.log( 'CB Promo Timer Stopped.' ); */

						clearInterval( cbPopupInterval );	/* Stopped Timer */

						$( "#cbSignup .close_btn" ).attr( 'redirect_url', selected_url );	/* Add Selected URL to Close button attribute. */

						e.preventDefault();

						localStorage.setItem( cb_promo_popup_object, JSON.stringify( cb_promo_popup_value_list ) );	/* Set value in local Storage */

						$( "#cbSignup" ).attr( 'visible_mode', 'on_transition' );	/* Set Visible Mode for Popup */

						GAEventTracker( 'Credit Score Pop Up', 'Impression', 'On Transition|View Banner|' + window.location.href );	/* Apply GA Event Tracker */

						$( "#cbSignup" ).modal();	/* Open Poopup */

					}
				}

			});

			/* When User clicks on Popup Close button */
			$( "#cbSignup .close_btn" ).on( "click", function() {
				let redirect_url = $.trim( $(this).attr( 'redirect_url' ) );
				if( redirect_url != '' ) { window.location.href = redirect_url; }
			});

			/* When User clicks on Popup Submit button */
			$( "#cbSignup .submit_btn" ).on( "click", function() {
				localStorage.setItem( is_visted_cb_page_object, true );	/* Set value in local Storage */
				window.location.href = 'https://www.moneycontrol.com/credit-score';
			});
		}
	/* End <- Credit Bureau Promo popup */

});

/* Credit Bureau Promo popup -> Start */

	/* Load Popup after 'n' seconds -> Start */
		/* if the value for is_cb_promo_popup_autoLoad is true */
		var cbPopupInterval = ''; 
		var cbPopupCounter = 0;

		function cbPopupStartTimer( cb_promo_popup_object, cb_promo_popup_value_list ) {

			cbPopupCounter++;

			/* console.log( 'CB Promo Timer : ', cbPopupCounter ); */

			if( cbPopupCounter == 5 ) {
				cbPopupStopTimer( cb_promo_popup_object, cb_promo_popup_value_list );
			}
		}

		function cbPopupStopTimer( cb_promo_popup_object, cb_promo_popup_value_list ) { 
			clearInterval( cbPopupInterval );

			if( $( '.credit_bureau_promo_popup' ).length ) {

				$( "#cbSignup" ).attr( 'visible_mode', 'auto' );	/* Set Visible Mode for Popup */

				localStorage.setItem( cb_promo_popup_object, JSON.stringify( cb_promo_popup_value_list ) );	/* Set value in local Storage */

				GAEventTracker( 'Credit Score Pop Up', 'Impression', 'Auto|View Banner|' + window.location.href );	/* Apply GA Event Tracker */

				$( "#cbSignup" ).modal();	/* Open Poopup */

			}
		}
	/* End <- Load Popup after 'n' seconds */

	/* Load Popup on idle mode -> Start */
		/* if the value for is_cb_promo_popup_idleLoad is true */
		function cbPopupIdleProcess( cb_promo_popup_object, cb_promo_popup_value_list ) {
			var t;
			window.onload = resetTimer;
			window.onmousemove = resetTimer;
			window.onmousedown = resetTimer;	/* catches touchscreen presses as well */
			window.ontouchstart = resetTimer;	/* catches touchscreen swipes as well */
			window.ontouchmove = resetTimer;	/* required by some devices */
			window.onclick = resetTimer;		/* catches touchpad clicks as well */
			window.onkeydown = resetTimer;
			window.addEventListener( 'scroll', resetTimer, true ); /* improved; see comments */

			function cbPopupIdleLoad() {

				if( $( '.credit_bureau_promo_popup' ).length ) {

					let is_display = $.trim( $( "#cbSignup" ).attr( 'is_display' ) );

					if( is_display === 'true' ) {

						$( "#cbSignup" ).attr( 'visible_mode', 'auto' );	/* Set Visible Mode for Popup */
						$( "#cbSignup" ).attr( 'is_display', 'false' );	/* Set Popup Display */

						localStorage.setItem( cb_promo_popup_object, JSON.stringify( cb_promo_popup_value_list ) );	/* Set value in local Storage */

						GAEventTracker( 'Credit Score Pop Up', 'Impression', 'Auto|View Banner|' + window.location.href );	/* Apply GA Event Tracker */

						$( "#cbSignup" ).modal();	/* Open Poopup */

						clearTimeout( t );
					}
				}

			}

			function resetTimer() {
				clearTimeout( t );
				t = setTimeout( cbPopupIdleLoad, 5000 );	/* time is in milliseconds */
			}
		}
	/* End <- Load Popup on idle mode */

/* End <- Credit Bureau Promo popup */

document.addEventListener( "DOMContentLoaded", () => {
	/* Check for International Elements -> Start */
		if( document.getElementsByClassName( 'hide_in_international' ) !== null ) {
			var country_code = document.getElementById( 'country_code' ).value;
			if( country_code != '' ) {
				if( country_code != 'IN' ) {
					const hide_in_international_collection = document.getElementsByClassName( 'hide_in_international' );
					if( hide_in_international_collection.length > 0 ) {
						for( i = 0; i < hide_in_international_collection.length; i++ ) { hide_in_international_collection[i].style.display = 'none'; }
					}
				}
			} else {
				var ajax_link = 'https://www.moneycontrol.com/monitoring/get_akamai_edgescape.php?classic=true';
				var opts = {
					method: 'GET',
					headers: {}
				};
				fetch( ajax_link, opts ).then( function ( response ) {
					return response.json();
				})
				.then( function ( json_obj ) {
					let country_code = null;
					if( json_obj.hasOwnProperty( 'akamai_list' ) ) {
						country_code = json_obj.akamai_list.country_code;
						document.getElementById( 'country_code' ).value = country_code;
						if( country_code != 'IN' ) {
							const hide_in_international_collection = document.getElementsByClassName( 'hide_in_international' );
							if( hide_in_international_collection.length > 0 ) {
								for( i = 0; i < hide_in_international_collection.length; i++ ) { hide_in_international_collection[i].style.display = 'none'; }
							}
						}
					}
				});
			}
		}
	/* End <- Check for International Elements */
});

/* Free Trial popup -> Start */
	function subscribe_to_freePopup( selected_product ) {
		var user_id = readCookie( 'nnmc' );

		if( user_id == "" || user_id == null || user_id == 'null' || user_id == undefined ) {
			if( readCookie( 'redthome' ) == 1 && !readCookie( 'nnmc' ) ) {
				var accountLink = "https://accounts.moneycontrol.com/mclogin/?ref=" + location.href;
				$( "#ifval" ).val( "495px" );
				$( "#myframe" ).attr( 'src', accountLink );
				$( "#LoginModal" ).modal();
			}
			mctop_setCookie( 'redthome', 2 );	/* Update Cookie */
		} else {
			mctop_setCookie( 'redthome', 3 );	/* Update Cookie */
			subscribe_to_freeT( selected_product );
		}
	}
	function subscribe_to_freeT( selected_product ) {
		var url = 'https://payments.moneycontrol.com/payment.php';
		var ftform = $('<form action="' + url + '" method="post" name="formred">' +
			'<input type="hidden" name="payment_gateway" id="payment_gateway" value="payu" />' +
			'<input type="hidden" name="selected_product[]" id="selected_product" value="' + selected_product +'" />' +
			'<input type="hidden" name="back_url" id="back_url" value="'+ window.location.href +'" />' +
			'<input type="hidden" name="medium" id="medium" value="web" />' +
			'<input type="hidden" name="redirect_url" id="redirect_url" value="'+ window.location.href +'" />' +
			'<input type="hidden" name="coupon_code" id="coupon_code" value="TRYPRO" />' +
			'<input type="hidden" name="campaign_url" value="'+ window.location.href +'" />' +
			'<input class="source_platform" type="hidden" name="source_platform" id="source_platform" value="web" />' +
			'</form>');
		$( 'body' ).append( ftform );
		ftform.submit();
	}
	function close_ve_postmsg() {
		$( "#ve_postmsg" ).modal( 'hide' );
	}
/* End <- Free Trial popup */

function get_current_date() {
	var d = new Date();
	var month = d.getMonth()+1;
	var date = d.getDate();

	if( month <= 9 ) {
		month = '0' + month;
	}
	if( date <= 9 ) {
		date = '0' + date;
	}
	return d.getFullYear() + '' + month + '' + date;
}

function get_mobile_operating_system() {
	var userAgent = navigator.userAgent || navigator.vendor || window.opera;
	if( /windows phone/i.test( userAgent ) ) {
		return 'windows';
	}
	if( /android/i.test( userAgent ) ) {
		return 'android';
	}
	if( /iPad|iPhone|iPod/.test( userAgent ) && !window.MSStream ) {
		return 'ios';
	}
	return 'unknown';
}

function generate_open_app_button_link() {

	var page_id_list = [ 'news_article_page', 'mc_pricechart_homepage_new', 'mc_market_homepage', 'indian_indices', 'global_market', 'mc_mf_homepage', 'top_performing_funds_index', 'mc_calendar', 'mc_bigshark' ];
	var page_url_list = [ 'https://www.moneycontrol.com/cryptocurrency/' ];

	var open_app_link = 'https://wz7ux.app.goo.gl/?link=https://www.moneycontrol.com/&utm_source=MC_OpeninApp&utm_medium=MC_WAP&utm_campaign=OpeninApp_Button&apn=com.divum.MoneyControl&ibi=com.moneycontrol.mc&isi=408654600';
	var page_url = window.location.href;
	var page_id = document.getElementById( 'page_id' ).value;

	if( page_url != '' ) {
		page_url = page_url.replace( '?classic=true', '' );
	}

	if( page_id != '' ) {
		if( page_id_list.length > 0 && page_id_list.includes( page_id ) ) {
			open_app_link = 'https://wz7ux.app.goo.gl/?link=' + page_url + '&utm_source=MC_OpeninApp&utm_medium=MC_WAP&utm_campaign=OpeninApp_Button&apn=com.divum.MoneyControl&ibi=com.moneycontrol.mc&isi=408654600';
		}
	}

	if( page_url_list.length > 0 && page_url_list.includes( page_url ) ) {
		open_app_link = 'https://wz7ux.app.goo.gl/?link=' + page_url + '&utm_source=MC_OpeninApp&utm_medium=MC_WAP&utm_campaign=OpeninApp_Button&apn=com.divum.MoneyControl&ibi=com.moneycontrol.mc&isi=408654600';
	}

	if( page_url == 'https://www.moneycontrol.com/portfolio-management/portfolio-investment-dashboard' ) {
		open_app_link = 'https://wz7ux.app.goo.gl/?link=https://www.moneycontrol.com/user-portfolio/&utm_source=MC_OpeninApp&utm_medium=MC_WAP&utm_campaign=OpeninApp_Button&apn=com.divum.MoneyControl&ibi=com.moneycontrol.mc&isi=408654600';
	}

	if( page_url == 'https://www.moneycontrol.com/portfolio-management/portfolio-investment-dashboard/stock/watchlist' ) {
		open_app_link = 'https://wz7ux.app.goo.gl/?link=https://www.moneycontrol.com/user-watchlist/&utm_source=MC_OpeninApp&utm_medium=MC_WAP&utm_campaign=OpeninApp_Button&apn=com.divum.MoneyControl&ibi=com.moneycontrol.mc&isi=408654600';
	}

	/* For Header Open App Strip */
	document.getElementById( 'header_open_app_button' ).setAttribute( 'href', open_app_link );

	/* For Sticky Open App Button */
	document.getElementById( 'sticky_open_app_button' ).setAttribute( 'href', open_app_link );

}

function checkForMCApps() {
	navigator.getInstalledRelatedApps().then((relatedApps) => {
		var installed_apps = relatedApps.length;
		if( installed_apps > 0 ) {

			$( '#get_open_app_result #is_mc_app_installed' ).html( 'MC APP is installed = true' );

			if( is_mc_app_strip_activated == true ) {
				$( '.header_open_app_icon' ).show();
				$( '#get_open_app_result #final_output' ).html( 'Displays Open App Button' );
			}

			if( is_mc_app_sticky_buttons_activated == true ) {
				$( '.open_app_sticky_btn' ).show();
				$( '#get_open_app_result #final_output' ).html( 'Displays Open App Sticky Button' );
			}

		} else {

			$( '#get_open_app_result #is_mc_app_installed' ).html( 'MC APP is installed = false' );

			if( is_mc_app_strip_activated == true ) {
				$( '.responsive_true' ).addClass( 'getapp_mobheader' );
				$( '#fixedheader' ).addClass( 'getapp_strip' );
				$( '.header_get_app_strip' ).show();
				$( '#get_open_app_result #final_output' ).html( 'Displays Get App Strip' );
			}

			if( is_mc_app_sticky_buttons_activated == true ) {
				$( '.get_app_sticky_btn' ).show();
				$( '#get_open_app_result #final_output' ).html( 'Displays Get App Sticky Button' );
			}
		}
	});
}

function getUrlParameter(para_name){
	var sPageURL = decodeURIComponent(window.location.search.substring(1)),
	sURLVariables = sPageURL.split('&'),
	sParameterName,
	i;
	
	for (i = 0; i < sURLVariables.length; i++) {
		sParameterName = sURLVariables[i].split('=');
		
		if(sParameterName[0] === para_name){
			return sParameterName[1] === undefined ? true : sParameterName[1];
		}
    }
};

function go_on_top(){
	$("html, body").animate({ scrollTop: 0 }, 600);
	return false;
}

function headerTopPopups(){
	//$('ul.submenus, div.appblock, div.subscriptionblock, div.specialsblock, .registerblock, .signinblock, .myaccpop, div#autosugg_mc1').hide();
	$('ul.submenus, div.appblock, div.subscriptionblock, div.specialsblock, div#autosugg_mc1').hide();
	
	$('.signinblock').parent('div.dropdown').removeClass('open');
	$('.registerblock').parent('div.dropdown').removeClass('open');
	$('.myaccpop').parent('div.dropdown').removeClass('open');
	
	if($('.ic-search').length > 0){
		$('.ic-search').removeClass("icon-close");
	}
}

function suggestboxdd(Otext, frmName){
	var form_name = '#form_topsearch';
	frmName = $.trim(frmName);
	
	if(frmName == 'maintop'){
		var form_name = '#form_topsearch';
	}else if(frmName == 'mobile_top'){
		var form_name = '#form_mobile_topsearch';
	}

	/* Added code for GA Event -> Start */
		if( Otext != '' ) {
			var div_id = 'tab' + Otext;
			var option_text = $.trim( $( '#' + div_id ).find('a').text() );
			if( $(window).width() <= 767 ) {
				GAEventTracker( 'SEARCHUSAGE', 'WAP_CATEGORY', option_text.toUpperCase() );
			} else {
				GAEventTracker( 'SEARCHUSAGE', 'CATEGORY', option_text.toUpperCase() );
			}
		}
	/* End <- Added code for GA Event */

	// For Videos
	if( Otext == 7 ) {
		// $( "#form_topsearch" ).attr( 'action', "https://www.moneycontrol.com/tv/" );
	}

	var dd_val = Otext;
	$(form_name+' #ul_srchCat_DDL li').removeClass('active');
	//$(this).addClass('active');
	$(form_name+" #tab"+dd_val).addClass('active');
	$("#form_topsearch #topsearch_type, #form_mobile_topsearch #topsearch_type").val(dd_val);
	
		getAutosuggesionHeader(form_name);
	
}


function tophover(){
	$('.stickymenu .activelink').hover(function(){
		$(this).find('.stickysub').show();
	},function(){
		$(this).find('.stickysub').hide();
	});
}

/* Added code for GA Event -> Start */
	function track_search_ga_event() {
		var formName = '#form_topsearch';
		var selected_option_id = $.trim( $( formName + " #topsearch_type" ).val() );
		var div_id = 'tab' + selected_option_id;
		var option_text = $.trim( $( '#' + div_id ).find('a').text() );

		if( $(window).width() <= 767 ) {
			GAEventTracker( 'SEARCHUSAGE', 'WAP_NO_OF_USERS', 'RESULTCLICK' ); 
			GAEventTracker( 'SEARCHUSAGE', 'WAP_RESULTCLICK', option_text.toUpperCase() );
		} else {
			GAEventTracker( 'SEARCHUSAGE', 'NO_OF_USERS', 'RESULTCLICK' ); 
			GAEventTracker( 'SEARCHUSAGE', 'RESULTCLICK', option_text.toUpperCase() );
		}
	}
/* End <- Added code for GA Event */

function getSearchKey( event ) {
	if(!event) return;
	var regex = new RegExp("^[a-zA-Z0-9]+$");
    var key = String.fromCharCode(!(event.charCode) ? event.which : event.charCode);

    if (!regex.test(key)) {
       getAutosuggesionHeader( '#form_topsearch', event );
	}
	
	 getAutosuggesionHeader( '#form_topsearch', event, key );
	//func_call( '#form_topsearch', event, key );
}
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
var func_call = debounce(function(a,b,c) {
	getAutosuggesionHeader( a,b,c );
}, 500);

function getAutosuggesionHeader( formName, event, key ) {
	if($.trim(formName) == ''){
		formName = '#form_topsearch';
	}

	var serch_typ_url = "";
    var serch_txt =  $.trim( $( formName + " #search_str" ).val() );

    var serch_typ = $.trim($(formName+" #topsearch_type").val());
	//  serch_typ =1;
	if(serch_typ == 2 || serch_typ == "2"){
		serch_typ_url = "https://www.moneycontrol.com/mf/mf_info/mfsearch.php";
	}else if(serch_typ == 5 || serch_typ == "5"){
		serch_typ_url = "https://www.moneycontrol.com/commodity/commodity-search/";
	}else{
		serch_typ_url = "https://www.moneycontrol.com/stocks/cptmarket/compsearchnew.php";
	}
	
	var div_cls_serach = ' scrollBar ';
	
	if(formName == '#form_mobile_topsearch'){
		div_cls_serach = '';
	}

	/* Trending on MC -> Start */
		/* var mc_trend_cookie = readCookie( "mc_trend" ); */
		if( serch_txt === '' ) {
			/*
			if( mc_trend_cookie ) {
				GAEventTracker( 'SEARCHUSAGE', 'MCTRENDS', 'VISIBLE' );
				$( '.trend_searchbx' ).show();
			}
			*/
			if( $(window).width() <= 767 ) {
				GAEventTracker( 'SEARCHUSAGE', 'MCTRENDS', 'WAP_VISIBLE' );
			} else {
				GAEventTracker( 'SEARCHUSAGE', 'MCTRENDS', 'VISIBLE' );
			}
			$( '.trend_searchbx' ).show();
		} else {
			$( '.trend_searchbx' ).hide();
		}
	/* End <- Trending on MC */

	/* Added code for GA Event -> Start */
		if( $(window).width() <= 767 ) {
			if( serch_txt.length == 1 ) {
					GAEventTracker( 'SEARCHUSAGE', 'WAP_NO_OF_USERS', '1LETTER' );
			} else if( serch_txt.length == 2 ) {
					GAEventTracker( 'SEARCHUSAGE', 'WAP_NO_OF_USERS', 'AFTER2LETTER' );
			} else if( serch_txt.length == 3 ) {
					GAEventTracker( 'SEARCHUSAGE', 'WAP_NO_OF_USERS', 'AFTER3LETTER' );
			} else if( serch_txt.length == 4 ) {
					GAEventTracker( 'SEARCHUSAGE', 'WAP_NO_OF_USERS', 'AFTER4LETTER' );
			} else if( serch_txt.length == 5 ) {
					GAEventTracker( 'SEARCHUSAGE', 'WAP_NO_OF_USERS', 'AFTER5LETTER' );
			} else if( serch_txt.length == 6 ) {
					GAEventTracker( 'SEARCHUSAGE', 'WAP_NO_OF_USERS', 'AFTER6LETTER' );
			}
		} else {
			if( serch_txt.length == 1 ) {
					GAEventTracker( 'SEARCHUSAGE', 'NO_OF_USERS', '1LETTER' );
			} else if( serch_txt.length == 2 ) {
					GAEventTracker( 'SEARCHUSAGE', 'NO_OF_USERS', 'AFTER2LETTER' );
			} else if( serch_txt.length == 3 ) {
					GAEventTracker( 'SEARCHUSAGE', 'NO_OF_USERS', 'AFTER3LETTER' );
			} else if( serch_txt.length == 4 ) {
					GAEventTracker( 'SEARCHUSAGE', 'NO_OF_USERS', 'AFTER4LETTER' );
			} else if( serch_txt.length == 5 ) {
					GAEventTracker( 'SEARCHUSAGE', 'NO_OF_USERS', 'AFTER5LETTER' );
			} else if( serch_txt.length == 6 ) {
					GAEventTracker( 'SEARCHUSAGE', 'NO_OF_USERS', 'AFTER6LETTER' );
			}
		}
	/* End <- Added code for GA Event */

	if( ( 
			( serch_typ == 1 || serch_typ == 2 || serch_typ == 5 || serch_typ == 9 || serch_typ == 11 || serch_typ == 12 ) && serch_txt.length >= 1 ) ||
			( ( serch_typ == 3 || serch_typ == 6 || serch_typ == 7 || serch_typ == 10 ) && serch_txt.length >= 3 )
		) {

		serch_txt = encodeURIComponent(serch_txt); 

		var main_para = '';
		if( serch_typ == 2 ) {	/* MF Search */
			main_para = '&main=true';
		}

		var wap_para = '';
		if( $(window).width() <= 767 && JQ_IS_NEWS_SECTION === 1 ) {
			wap_para = "&classic=true";
		}

		var main_serch_url = "http://devmc.moneycontrol.com/mccode/common/autosuggestion_solr.php";

		$.ajax({
			url:main_serch_url+"?classic=true&query="+serch_txt+"&type="+serch_typ+"&format=json"+main_para+wap_para,
			
            jsonpCallback:"suggest1",
            cache:true,
            type:"GET",
            dataType:"jsonp",
            success:function(str){
                var i = ""; var s = 0; var o = "";

                $.each(str, function(k, v){
					i += "<li>" +
						"	<a href='javascript:void(0);' onClick=\"track_search_ga_event(); window.location = '" + v.link_src + "' ;\">" + v.pdt_dis_nm + "</a>" +
						"</li>";
                    s++;
                });

                if( s > 9 && (serch_typ == 2 || serch_typ == 1 || serch_typ == 5 || serch_typ == 9)){
                    var u = serch_typ_url+"?search_str="+serch_txt+"&topsearch_type="+serch_typ;
                    if(serch_typ == 5){ u = serch_typ_url+serch_txt+".html"; }
					o = '<li><a href="'+u+'"><span>More Â»</span></a></li>';
				}
				
				var suggestbox_html = ''+
										'<ul class="suglist scrollBar">'
										  +i
										'</ul>'+
										'<div class="brdtp CTR PT5">'+
										'</div>'+
									  '';
				$(formName+" #autosuggestlist").html(suggestbox_html);

				/* WAP - Change View All Link */
				if( serch_typ == 11 ) {
					if( $( '.top_asugscrl' ).length > 0 ) {
						$( '.top_asugscrl .view_all_element a' ).attr( 'href', 'https://www.moneycontrol.com/crypto-exchanges' );
					}
				} else {
					if( $( '.top_asugscrl' ).length > 0 ) {
						$( '.top_asugscrl .view_all_element a' ).attr( 'href', 'https://www.moneycontrol.com/news/tags/mf-experts.html' );
					}
				}

				headerTopPopups();
				$(formName+" #autosugg_mc1").show();
                
				if(formName == "#form_mobile_topsearch"){
					$('.ic-search').addClass('icon-close')
				}
				
				//$('.scrollBar').jScrollPane({autoReinitialise: true});
			}
		})
    }else{
		if((serch_typ == 4) && serch_txt.length >= 3){
			window.location = 'https://mmb.moneycontrol.com/search/'+encodeURIComponent($.trim(serch_txt))+'/All/';
			return false;
		}else if((serch_typ == 7 || serch_typ == 8) && serch_txt.length >= 3){

			// For Videos
			if( serch_typ == 7 ) {
				$( '#form_topsearch #search_data' ).remove();
				$( '#form_topsearch #cid' ).remove();
				$( '#form_topsearch #mbsearch_str' ).remove();
				$( '#form_topsearch #topsearch_type' ).remove();
			}

			$(formName+'').submit();
			return false;
		}else{
			var suggestbox_html =''+
									'<ul class="suglist scrollBar">'+
									'</ul>'+
									'<div class="brdtp CTR PT5">'+
									'</div>'+
								  '';
			$(formName+" #autosuggestlist").html(suggestbox_html);
			$(formName+" #autosugg_mc1").hide();
			//$('.scrollBar').jScrollPane({autoReinitialise: true});
		}
	}
}

function addBodyClickEvt(element){
	$(document).unbind('click');	
	$(document).bind('click', function(event){
		var $target = $(event.target);
		if(!$target.parents().is(element) && !$target.is(element)){
			$(element).hide();
			$(document).unbind('click');
		}
	});
}

function submit_search_txt(formName){
	if($.trim(formName) == ''){
		formName = '#form_topsearch';
	}
	
    var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var t = $.trim($(formName+" #search_str").val());
    var n = $.trim($(formName+" #cid").val());
	var r = $.trim($(formName+" #topsearch_type").val());
	var i = "";
	
    if(t == ""){
        alert("Search string cannot be blank!!!");
        $(formName+" #search_str").focus();
        return false
	}
    if(t.length < 1){
        alert("Please enter minimum one characters for search");
        $(formName+" #search_str").focus();
        return false
	}
	if(r == 3 && t.length < 3){
		alert('Please enter minimum three characters for news search');
		$(formName+" #search_str").focus();
		return false;
	}
	if(r == 7 && t.length < 3){
		alert('Please enter minimum three characters for videos search');
		$(formName+" #search_str").focus();
		return false;
	}
	if(r == 10 && t.length < 3){
		alert('Please enter minimum three characters for glossary search');
		$(formName+" #search_str").focus();
		return false;
	}
    
    if(r == 1){
		i = "Price";
	}else if(r == 2){
		i = "MFs";
	}else if(r == 3){
		i = "News";
	}else if(r == 4){
		i = "Keyword";
	}else if(r == 5){
		i = "Commodities";
    }else if(r == 6){
		i = "Notices";
    }else if(r == 7){
		i = "Videos";
    }else if(r == 8){
		i = "All";
    }else if(r == 9){
		i = "Futures";
	}else if (r == 10){
		i= "Glossary";
	}
	
    var s = t;

    if(i == "News"){
        $(formName+" #search_data").val(s);
		$(formName+" #cid").val("News");
		$(formName+"").attr('action', "https://www.moneycontrol.com/mccode/news/searchresult.php?str="+s);
	}else if(i == "Price"){
        var o = t;
        o = o.toUpperCase();
        if(t.length < 2){
            Char = o.charAt(0);
            if(e.indexOf(Char) != -1){ $(formName+"").attr('action', "https://www.moneycontrol.com/india/stockmarket/pricechartquote/"+Char); }
		}else{
            $(formName+"").attr('action', "https://www.moneycontrol.com/stocks/cptmarket/compsearchnew.php?fname=price&companyname="+t.replace(/&/,"%26"));
		}
	}else if(i == "MFs"){
		var o = t;
		o = o.toUpperCase();
		if(t.length < 2){
			Char = o.charAt(0);
			if(e.indexOf(Char) != -1){
				$(formName+"").attr('action', "https://www.moneycontrol.com/india/mutualfunds/mutualfundsinfo/snapshot/"+Char);
			}else{
				$(formName+"").attr('action', "https://www.moneycontrol.com/mf/mf_info/mfsearch.php?AMCname="+t);
			}
		}else{
			$(formName+"").attr('action', "https://www.moneycontrol.com/mf/mf_info/mfsearch.php?AMCname="+t);
		}
	}else if(i == "Topic"){
		$(formName+" #mbsearch_str").val(s);
		$(formName+"").attr('action', "https://www.moneycontrol.com/msgboard/viewmsg/find_topic.php");
	}else if(i == "Boarder"){
		$(formName+" #mbsearch_str").val(s);
		$(formName+"").attr('action', "https://www.moneycontrol.com/msgboard/viewmsg/find_boarders.php");
	}else if(i == "Stock"){
		$(formName+" #mbsearch_str").val(s);
		$(formName+"").attr('action', "https://www.moneycontrol.com/msgboard/viewmsg/find_topic_stock.php");
	}else if(i == "Keyword"){
		$(formName+" #mbsearch_str").val(s);
		$(formName+"").attr('action', "https://mmb.moneycontrol.com/india/messageboard/mmb_search_result.php?f_criteria=Keyword&f_Period=1&f_search="+t);
	}else if(i == "Commodities"){
		$(formName+"").attr('method', 'POST');
		$(formName+"").attr('action', "https://www.moneycontrol.com/commodity/commodity-search/"+s+".html");
	}else if(i == "Notices"){
		$(formName+"").attr('action', "https://www.moneycontrol.com/stocks/cptmarket/compsearchnew.php?notice_q=1&fname=price&companyname="+t.replace(/&/,"%26"));
	}else if(i == "Web"){
		$(formName+"").attr('action', "https://www.moneycontrol.com/mccode/news/searchresult_archive.php?domains=www.moneycontrol.com&q="+t+"&client=ca-money_test_js&forid=1&channel=7271894659&ie=ISO-8859-1&oe=ISO-8859-1&flav=0000&cof=GALT%3A%230066CC%3BGL%3A1%3BDIV%3A%23999999%3BVLC%3A336633%3BAH%3Acenter%3BBGC%3AFFFFFF%3BLBGC%3AFF9900%3BALC%3A0066CC%3BLC%3A0066CC%3BT%3A000000%3BGFNT%3A666666%3BGIMP%3A666666%3BFORID%3A11&hl=en&x=38&y=9");
	}else if(i == "Videos"){
		$(formName+"").attr('action', "https://www.moneycontrol.com/tv/?search_str="+t);
	}else if(i == "All"){
		$(formName+" #search_data").val(s);
		$(formName+"").attr('action', "https://www.moneycontrol.com/news/websearch.php?search_data="+s);
	}else if(i == "Futures"){
		$(formName+" #search_data").val(s);
		$(formName+"").attr('action', "https://www.moneycontrol.com/stocks/cptmarket/compsearchnew.php?companyname="+t.replace(/&/,"%26"));
	} else if (i == "Glossary"){
		// $(formName+" #search_data").val(s)
		$(formName+"").attr('action', "https://www.moneycontrol.com/glossary/");
	}
	
}

/* MC Login and Register code (START) */

function showLoginRegPopup(typ){
	$('.signinblock').parent('div.dropdown').removeClass('open');
	$('.registerblock').parent('div.dropdown').addClass('open');
	
	/*typ = $.trim(typ);
	headerTopPopups();
	
	if(typ == "login"){
		$('.registerblock').fadeOut();
		
		$('.signinblock').fadeIn(50, function(){
			addBodyClickEvt('.signinblock');
		});
	}else if(typ == "signup"){
		$('.signinblock').fadeOut();
		
		$('.registerblock').fadeIn(50, function(){
			addBodyClickEvt('.registerblock');
		});
	}else if(typ == "profile"){
		$('.signinblock, .registerblock').fadeOut();
		
		$('.myaccpop').fadeIn(50, function(){
			addBodyClickEvt('.myaccpop');
		});
	}*/
	return false;
}

function hideLoginRegPopup(){
	//$('.registerblock, .myaccpop, .signinblock').fadeOut();
	return false;
}

function signInMCUser(){
	var user_name = $.trim($('form#signin_mc_frm input#signuname').val());
	var user_pass = $.trim($('form#signin_mc_frm input#signpwd').val());	
    var err = 0;
	
    if(user_name == ""){
        $('form#signin_mc_frm input#signuname').focus();
		alert('Please enter username.');
		err++;
        return false;
	}
	
	if(user_pass == ""){
        $('form#signin_mc_frm input#signpwd').focus();
		alert('Please enter password.');
		err++;
        return false;
	}
	
	if(err == 0){
		var api_url = LOGIN_API+'?username='+user_name+'&password='+SHA1(user_pass)+'&format=json&sh=1';
		$.ajax({
			url : api_url,
			type : "POST",
			dataType : "jsonp",
			crossDomain : true,
			success : function(json_data) {
				var succ_sts = JSON.parse(json_data.succ);
				
				if(succ_sts == 1 || succ_sts == '1'){
					USERNMMC = readCookie("nnmc");
					var redirect_url = getUrlParameter('ref');
					
					if($.trim(AFTERLOGINCALLBACK) != ''){
						//hideLoginRegPopup();
						eval(AFTERLOGINCALLBACK);
					}else if($('form#login').length > 0 || $.trim(redirect_url) == 'http://www.moneycontrol.com/mcplus/portfolio/loginportfolio.php'){
						window.location = 'http://www.moneycontrol.com/bestportfolio/wealth-management-tool/investments';
						return false;
					}else{
						location.reload(true);
					}
				}else if(succ_sts == 0 || succ_sts == '0'){
					alert('Invalid user name or password.');
				}else{
					alert('Error..!!');
				}
			}
		});
    }
    return false
}

function suggest_mcuser_ids(){
    var e = $.trim($("#reg_mc_frm #registerName").val());
	
    if(e.length >= 4){
		$("#div_user_name_not_available ul.userlist").html('');
		var str_li = '';
        
		$.get(MC_URL+"/mccode/common/unameAutosuggest.php?q_f=suggest&uname="+e,function(e){
			if(e.length>0){
                var n=e.split(",");
                
				for(var r = 0; r <= n.length-1; r++){
                    if(r == 6){ break; }
					
					if($.trim(n[r]) != ""){
						//str_li += '<div class="sugginp"><input name="suggrad" onclick="$(\'#registerName\').val($(this).val());$(\'#errDIv\').html(\'\');" type="radio" value="'+n[r]+'"/><span style="word-wrap: break-word;">'+n[r]+"</span></div>"
						str_li += '<li><label><input name="rdo_btn_username" onclick="$(\'#reg_mc_frm #registerName\').val($(this).val()); $(\'#div_user_name_not_available\').hide();" type="radio" value="'+n[r]+'"> '+n[r]+'</label></li>';
					}
				}
				
				$("#div_user_name_not_available ul.userlist").html(str_li);
				$("#div_user_name_not_available").show();
			}else{
				$("#div_user_name_not_available ul.userlist").html('');
				$("#div_user_name_not_available").hide();
			}
        })
	}
}

function checkAvailableMCUserName(){
    var e = $.trim($("#reg_mc_frm #registerName").val());
	
    if(e.length >= 4){
		$.ajax({
			url : MC_URL+"mccode/common/unameAutosuggest.php?q_f=checkuserA&uname="+e+'&format=json',
			type : "GET",
			dataType : "jsonp",
			crossDomain : true,
			success : function(json_data) {
				var succ_sts = $.trim(json_data.msg);
				
				if(succ_sts.length > 0){
					if(succ_sts != "Yes"){
						//alert("Username not available.");
						suggest_mcuser_ids();
					}else{
						$("div#div_user_name_available").show();
						setTimeout(function(){ $("div#div_user_name_available").hide(); }, 2000);
					}
				}
			}
		});
	}else{
		if(e.length > 0){
			alert("Username should be atleast 4 characters.");
			return false
        }
    }
}

function registration_MCUser() {
	var e = $.trim($("#reg_mc_frm #registerName").val());
	var t = $.trim($("#reg_mc_frm #registerPasword").val());
	var n = $.trim($("#reg_mc_frm #registerConfPasword").val());
	var r = $.trim($("#reg_mc_frm #registerEmail").val());
	var i = 0;

	if(e=="" || e=="Username"){
		alert("Please enter username.");
		i=1;
		$("#reg_mc_frm #registerName").focus();
		return false
	}
	
	if(e.length <= 3){
		alert("Username should be atleast 4 characters.");
		i=1;
		$("#reg_mc_frm #registerName").focus();
		return false
	}
	
	if(t == ""){
		alert("Please enter password.");
		i=1;
		$("#reg_mc_frm #registerPasword").focus();
		return false
	}
	
	if(t.length < 8){
		alert("Password should be 8 or more characters.");
	    i =1;
		$("#reg_mc_frm #registerPasword").focus();
	    return false;
	}
	
	var patternpw_numeric = new RegExp(/(?=.*\d)/);
	if(!patternpw_numeric.test(t)){
		alert("Password should contain atleast 1 number.");
		$("#reg_mc_frm #registerPasword").focus();
	    i =1;
	    return false;
	}
	
	var patternpw_caps = new RegExp(/(?=.*[A-Z])/);
	if(!patternpw_caps.test(t)){
		alert("Password should contain atleast 1 upper case letter.");
		$("#reg_mc_frm #registerPasword").focus();
	    i =1;
	    return false;
	}
	
	var patternpw_symbol = new RegExp(/(?=.*\W)/);
	if(!patternpw_symbol.test(t)){
		alert("Password should contain atleast 1 symbol (except #).");
		$("#reg_mc_frm #registerPasword").focus();
	    i =1;
	    return false;
	}
	
	var patternpw = new RegExp(/((?=.*\d)(?=.*[A-Z])(?=.*\W).{8,})/);
	if(!patternpw.test(t)){
		alert("Password should be 8 or more characters, atleast 1 number, 1 symbol (except #) and 1 upper case letter.");
		$("#reg_mc_frm #registerPasword").focus();
	    i =1;
	    return false;
	}
	
	if(t.match(/#/)){
		i=1;
		alert("Password should not contain # characters.");
		$("#reg_mc_frm #registerPasword").focus();
		return false
	}
	
	if(n != t){
		alert("Password and confirm password values doesnot match.");
		$("#reg_mc_frm #registerConfPasword").focus();
		i=1;
		return false
	}

	if(r == ""){
		alert("please enter email address.");
		i=1;
		$("#reg_mc_frm #registerEmail").focus();
		return false
	}
	
	var s=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	if(!s.test(r)){
		alert("please enter valid email address.");
		i=1;
		$("#reg_mc_frm #registerEmail").focus();
		return false
	}

	if(i == 0) {
		$.ajax({
			url : MC_URL+"mccode/common/unameAutosuggest.php?q_f=checkuserA&uname="+e+'&format=json',
			type : "GET",
			dataType : "jsonp",
			crossDomain : true,
			success : function(json_data) {
				var succ_sts = $.trim(json_data.msg);
				
				if(succ_sts == "Yes" && succ_sts.length == 3){
					$("#reg_mc_frm").removeAttr("onsubmit");
					$("#reg_mc_frm").attr("action", MC_URL+"mccode/common/commonRegistration.php");
					$("#reg_mc_frm").submit();
				} else {
					//alert("Username not available.");
					suggest_mcuser_ids();
					$("#reg_mc_frm #registerName").focus();
				}
			}
		})
	}
    return false
}

//Facebook Login Popup
function openFacebookLoginRegPopup(){
	//var e = "http://login.moneycontrol.com/social_user/Login_mc.php?fblogin=1&loginsec=mc&returl";
	var e = "https://mmb.moneycontrol.com/social_user/Login_mc.php?fblogin=1&loginsec=mc&returl";
	
    mctop_setCookie("returl", location.href, 1);
    var t = navigator.userAgent.match("MSIE (.)");
    var n = t&&t.length>1?t[1]:"";
    
	if(n != "" && n > 6){
        fbLoginWindow = window.open(e,"FacebookLogin","toolbar=yes,location=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes,width=850,height=500,left=180,top=15");
	}else{
        fbLoginWindow = window.open(e,"FacebookLogin","toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=no,width=850,height=500,left=180,top=15");
	}
	
	if(window.focus){ fbLoginWindow.focus(); }
	return false
}

//Twitter Login Popup
function openTwitterLoginRegPopup() {
	var e = "http://login.moneycontrol.com/social_user/getTwitterDatamc.php?loginsec=mc&twlogin";
	
    mctop_setCookie("returl", location.href, 1);
    var t = navigator.userAgent.match("MSIE (.)");
    var n = t&&t.length>1?t[1]:"";
    
	if(n != "" && n > 6){
        twLoginWindow = window.open(e,"TwitterLogin","toolbar=yes,location=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes,width=800,height=400,left=230,top=15");
	}else{
        twLoginWindow = window.open(e,"TwitterLogin","toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=no,width=800,height=400,left=230,top=15");
	}
	
	if(window.focus){ twLoginWindow.focus(); }
	
	return false;
}

//Google Login Popup
function openGoogleLoginRegPopup() {
	var e = "http://login.moneycontrol.com/social_user/Login_mc.php?loginsec=mc&glogin";
	
    mctop_setCookie("returl", location.href, 1);
    var t = navigator.userAgent.match("MSIE (.)");
    var n = t&&t.length>1?t[1]:"";
    
	if(n != "" && n > 6){
        ggLoginWindow = window.open(e,"GoogleLogin","toolbar=yes,location=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes,width=800,height=400,left=230,top=15");
	}else{
        ggLoginWindow = window.open(e,"GoogleLogin","toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=no,width=800,height=400,left=230,top=15");
	}
	
	if(window.focus){ ggLoginWindow.focus(); }
	
	return false;
}

//Yahoo Login Popup(Not in use-openYahooLoginRegPopup)
function openYahooLoginRegPopup() {
	var e = "http://login.moneycontrol.com/social_user/Login_mc.php?ylogin&returl=";
	
    mctop_setCookie("returl", location.href, 1);
    var t = navigator.userAgent.match("MSIE (.)");
    var n = t&&t.length>1?t[1]:"";
	
    if(n != "" && n > 6){
        yhLoginWindow = window.open(e,"YahooLogin","toolbar=yes,location=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes,width=800,height=400,left=230,top=15");
	}else{
        yhLoginWindow = window.open(e,"YahooLogin","toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=800,height=400,left=230,top=15");
	}
	
	if(window.focus){ yhLoginWindow.focus(); }
	
	return false
}

//Encryption function(SHA1)
function SHA1(msg) {
    function rotate_left(n,s) {
        var t4 = ( n<<s ) | (n>>>(32-s));
        return t4;
    };
    function lsb_hex(val) {
        var str="";
        var i;
        var vh;
        var vl;
        for( i=0; i<=6; i+=2 ) {
            vh = (val>>>(i*4+4))&0x0f;
            vl = (val>>>(i*4))&0x0f;
            str += vh.toString(16) + vl.toString(16);
        }
        return str;
    };
    function cvt_hex(val) {
        var str="";
        var i;
        var v;
        for( i=7; i>=0; i-- ) {
          v = (val>>>(i*4))&0x0f;
          str += v.toString(16);
        }
        return str;
    };
    function Utf8Encode(string) {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
          var c = string.charCodeAt(n);
          if (c < 128) {
            utftext += String.fromCharCode(c);
          }
          else if((c > 127) && (c < 2048)) {
            utftext += String.fromCharCode((c >> 6) | 192);
            utftext += String.fromCharCode((c & 63) | 128);
          }
          else {
            utftext += String.fromCharCode((c >> 12) | 224);
            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
            utftext += String.fromCharCode((c & 63) | 128);
          }
        }
        return utftext;
    };
    var blockstart;
    var i, j;
    var W = new Array(80);
    var H0 = 0x67452301;
    var H1 = 0xEFCDAB89;
    var H2 = 0x98BADCFE;
    var H3 = 0x10325476;
    var H4 = 0xC3D2E1F0;
    var A, B, C, D, E;
    var temp;
    msg = Utf8Encode(msg);
    var msg_len = msg.length;
    var word_array = new Array();
    for( i=0; i<msg_len-3; i+=4 ) {
        j = msg.charCodeAt(i)<<24 | msg.charCodeAt(i+1)<<16 |
        msg.charCodeAt(i+2)<<8 | msg.charCodeAt(i+3);
        word_array.push( j );
    }
    switch( msg_len % 4 ) {
        case 0:
          i = 0x080000000;
        break;
        case 1:
          i = msg.charCodeAt(msg_len-1)<<24 | 0x0800000;
        break;
        case 2:
          i = msg.charCodeAt(msg_len-2)<<24 | msg.charCodeAt(msg_len-1)<<16 | 0x08000;
        break;
        case 3:
          i = msg.charCodeAt(msg_len-3)<<24 | msg.charCodeAt(msg_len-2)<<16 | msg.charCodeAt(msg_len-1)<<8  | 0x80;
        break;
    }
    word_array.push( i );
    while( (word_array.length % 16) != 14 ) word_array.push( 0 );
    word_array.push( msg_len>>>29 );
    word_array.push( (msg_len<<3)&0x0ffffffff );
    for ( blockstart=0; blockstart<word_array.length; blockstart+=16 ) {
        for( i=0; i<16; i++ ) W[i] = word_array[blockstart+i];
        for( i=16; i<=79; i++ ) W[i] = rotate_left(W[i-3] ^ W[i-8] ^ W[i-14] ^ W[i-16], 1);
        A = H0;
        B = H1;
        C = H2;
        D = H3;
        E = H4;
        for( i= 0; i<=19; i++ ) {
          temp = (rotate_left(A,5) + ((B&C) | (~B&D)) + E + W[i] + 0x5A827999) & 0x0ffffffff;
          E = D;
          D = C;
          C = rotate_left(B,30);
          B = A;
          A = temp;
        }
        for( i=20; i<=39; i++ ) {
          temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff;
          E = D;
          D = C;
          C = rotate_left(B,30);
          B = A;
          A = temp;
        }
        for( i=40; i<=59; i++ ) {
          temp = (rotate_left(A,5) + ((B&C) | (B&D) | (C&D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff;
          E = D;
          D = C;
          C = rotate_left(B,30);
          B = A;
          A = temp;
        }
        for( i=60; i<=79; i++ ) {
          temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff;
          E = D;
          D = C;
          C = rotate_left(B,30);
          B = A;
          A = temp;
        }
        H0 = (H0 + A) & 0x0ffffffff;
        H1 = (H1 + B) & 0x0ffffffff;
        H2 = (H2 + C) & 0x0ffffffff;
        H3 = (H3 + D) & 0x0ffffffff;
        H4 = (H4 + E) & 0x0ffffffff;
    }
    var temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);

    return temp.toLowerCase();

}

/* MC Login and Register code (END) */

function readCookie(e){
	var t=e+"=";
    var n=document.cookie.split(";");
	
    for(var r=0;r<n.length;r++){
		var i=n[r];
        while(i.charAt(0)==" ")i=i.substring(1,i.length);
        if(i.indexOf(t)==0)return i.substring(t.length,i.length)
	}
	
	return false;
}

function mctop_setCookie(e,t,n){
    var r=new Date;
    r.setDate(r.getDate()+n);
    var i=escape(t)+(n==null?"":"; expires="+r.toUTCString())+"; path=/; domain=.moneycontrol.com; ";
	document.cookie=e+"="+i
}

function mctop_getCookie(e){
    var t,n,r,i=document.cookie.split(";");
    for(t=0;t<i.length;t++){
        n=i[t].substr(0,i[t].indexOf("="));
        r=i[t].substr(i[t].indexOf("=")+1);
        n=n.replace(/^\s+|\s+$/g,"");
        if(n==e){
            return unescape(r)
		}
	}
}

/*
function referesh_hamburger_menu_top_news() {
	var hamburger_menu_top_news_request;
	if( hamburger_menu_top_news_request != null ) { 
		hamburger_menu_top_news_request.abort();
		hamburger_menu_top_news_request = null;
	}
	hamburger_menu_top_news_request = $.ajax({
		url : 'https://www.moneycontrol.com/techmvc/mc_widgets/hamburger_menu_top_news/?classic=true',
		type : "POST",
		dataType : "html",
		cache: true,
		error: function( obj, errorMsg, d ) {
			/* alert( 'Unable to process request - ' + errorMsg + '- ' + d ); * /
		},
		success : function( html_body ) {
			if( html_body.length > 10 ) {
				$( '.hamburger_menu_desktop .hmb_right' ).html( html_body );
			}
		}
	});
}
*/

function referesh_forum_user_profile() {
	var user_token_normal = readCookie( 'token-normal' );

	if( user_token_normal != '' ) {
		var forum_link_request;
		if( forum_link_request != null ) { 
			forum_link_request.abort();
			forum_link_request = null;
		}

		forum_link_request = $.ajax({
			url : 'https://www.moneycontrol.com/techmvc/ajaxcontent/generate_forum_links/' + user_token_normal + '/?classic=true',
			type : "POST",
			dataType : "text",
			cache: true,
			error: function( obj, errorMsg, d ) {
				// alert( 'Unable to process request - ' + errorMsg + '- ' + d );
			},
			success : function( data ) {
				if( data.length > 85 ) {
					let output = JSON.parse( data );
					if( output.generate_forum_links.status == 'success' ) {
						let user_fname = $.trim( output.generate_forum_links.data.user_fname );
						let user_lname = $.trim( output.generate_forum_links.data.user_lname );

						let user_name = '';
						if( user_fname != '' ) {
							user_name = user_fname;
						}
						if( user_name != '' ) {
							user_name += ' ';
						}
						if( user_lname != '' ) {
							user_name += user_lname;
						}
						if( user_name == '' ) {
							user_name = 'User Profile';
						}

						$( '#forum_user_profile a' ).attr({
							'href' : output.generate_forum_links.data.user_profile_url + '#lhsMenu',
							'title' : user_name
						});
						$( '#forum_user_profile a' ).removeClass( 'linkSignIn' );
						$( '#forum_user_profile a' ).removeAttr('data-toggle data-target');
					}
				}
			}
		});
	} else {
		$( '#forum_user_profile a' ).attr({
			'href' : 'javascript:;',
			'title' : 'User Profile',
			'data-toggle' : 'modal',
			'data-target' : '#LoginModal'
		});
		$( '#forum_user_profile a' ).addClass( 'linkSignIn' );
	}
}

function referesh_personal_finance_upcoming_chat() {
	var upcoming_chat_request;
	if( upcoming_chat_request != null ) { 
		upcoming_chat_request.abort();
		upcoming_chat_request = null;
	}
	upcoming_chat_request = $.ajax({
		url : 'https://appfeeds.moneycontrol.com/jsonapi/pf/chat?status=upcoming',
		type : "GET",
		dataType : "text",
		cache: true,
		error: function( obj, errorMsg, d ) {
			// alert( 'Unable to process request - ' + errorMsg + '- ' + d );
		},
		success : function( data ) {
			if( data.length > 2 ) {
				let output = JSON.parse( data );
				if( Object.keys( output[0] ).length > 0 ) {
					let value = output[0];
					let html_body = null;

					let designation_organisation = null;
					if( value.celeb_desgn != '' ) {
						designation_organisation = $.trim( value.celeb_desgn );
					}
					if( designation_organisation != '' ) {
						designation_organisation += ' - ';
					}
					if( value.celeb_orgn != '' ) {
						designation_organisation += $.trim( value.celeb_orgn );
					}
					if( designation_organisation != '' ) {
						designation_organisation = ' | ' + designation_organisation;
					}

					html_body = '<span class="expert_link_chat">EXPERT CHAT</span>' +
								'<img src="https://images.moneycontrol.com/images' + value.exprt_img + '" width="30" height="30" alt="' + value.celeb_name + '" title="' + value.celeb_name + '" class="cht_thmb" />' +
								'<a href="javascript:;" title="' + value.preface + '" class="live_chat_txt">' + value.preface + '</a>' +
								'<span class="expernm">' + value.celeb_name + '</span> ' + designation_organisation +
								'<span class="live_now">' + value.cdate + '</span>';

					$( '.upcoming_expert_chat_box .expert_left' ).html( html_body );
					$( '.upcoming_expert_chat_box' ).show();
				}
			}
		}
	});
}

function referesh_personal_finance_live_chat() {
	var live_chat_request;
	if( live_chat_request != null ) { 
		live_chat_request.abort();
		live_chat_request = null;
	}
	live_chat_request = $.ajax({
		url : 'https://appfeeds.moneycontrol.com/jsonapi/pf/chat?status=live',
		type : "GET",
		dataType : "text",
		cache: true,
		error: function( obj, errorMsg, d ) {
			// alert( 'Unable to process request - ' + errorMsg + '- ' + d );
		},
		success : function( data ) {
			if( data.length > 2 ) {
				let output = JSON.parse( data );
				if( Object.keys( output[0] ).length > 0 ) {
					let value = output[0];
					let html_body = null;

					let designation_organisation = null;
					if( value.celeb_desgn != '' ) {
						designation_organisation = $.trim( value.celeb_desgn );
					}
					if( designation_organisation != '' ) {
						designation_organisation += ' - ';
					}
					if( value.celeb_orgn != '' ) {
						designation_organisation += $.trim( value.celeb_orgn );
					}
					if( designation_organisation != '' ) {
						designation_organisation = ' | ' + designation_organisation;
					}

					html_body = '<span class="expert_link_chat">CHAT WITH EXPERT</span>' +
								'<img src="https://images.moneycontrol.com/images' + value.exprt_img + '" width="30" height="30" alt="' + value.celeb_name + '" title="' + value.celeb_name + '" class="cht_thmb" />' +
								'<a href="http://mcchat.moneycontrol.com/" title="' + value.preface + '" class="live_chat_txt">' + value.preface + '</a>' +
								'<span class="expernm">' + value.celeb_name + '</span> ' + designation_organisation +
								'<span class="live_now"><span class="live_round"></span>LIVE NOW</span>';

					$( '.live_expert_chat_box .expert_left' ).html( html_body );
					$( '.live_expert_chat_box' ).show();
					$( '.upcoming_expert_chat_box' ).hide();
				}
			}
		}
	});
}

function referesh_videos_list() {
	var videos_list_request;
	if( videos_list_request != null ) { 
		videos_list_request.abort();
		videos_list_request = null;
	}
	videos_list_request = $.ajax({
		url : 'https://www.moneycontrol.com/techmvc/mc_widgets/mega_menu_video_list?classic=true',
		type : "POST",
		dataType : "html",
		cache: true,
		error: function( obj, errorMsg, d ) {
			/* alert( 'Unable to process request - ' + errorMsg + '- ' + d ); */
			console.log ( 'Unable to process request - ', errorMsg, '- ', d );
		},
		success : function( html_body ) {
			if( html_body.length > 10 ) {
				$( '.mega_menu_video_list_block' ).html( html_body );
				$( '.mega_menu_video_list_block' ).show();
			}
		}
	});
}

/* Hamburger Menu -> Start */
	/*
	$( '.open_hamburger' ).click(function() {
		let cid = $.trim( $( '#cid' ).val() );

		/* Checking for Be a Pro * /
		if( cid == '12' ) {
			cid = '16';	/* Set as Subscription * /
		}

		let element_id = 'HamburgerMenu_' + cid;

		if( !$( '.' + element_id ).length ) {
			element_id = 'HamburgerMenu_0';	/* Set as Market * /
		}

		$(this).next( '.hamburger_menu_desktop' ).show();
		$('body').addClass( 'body_open_hamburger' );

		/* Default selection for selected cid -> Start */
			/* For verticle L1 menu * /
			$( '.hamburger_sub_menu' ).removeClass( 'active' );
			$( '.' + element_id ).addClass( 'active' );

			/* For verticle L2 menu * /
			$( '.hamburger_menu_tab_pane' ).removeClass( 'active in' );
			$( '#' + element_id ).addClass( 'active in' );
		/* End <- Default selection for selected cid * /

		referesh_hamburger_menu_top_news();
	});
	*/

	$( '.open_hamburger' ).click(function() {
		let cid = $.trim( $( '#cid' ).val() );
		let element_id = 'HamburgerMenu_' + cid;

		var moneycontrol_hamburger_menu_request;
		if( moneycontrol_hamburger_menu_request != null ) { 
			moneycontrol_hamburger_menu_request.abort();
			moneycontrol_hamburger_menu_request = null;
		}
		moneycontrol_hamburger_menu_request = $.ajax({
			url : 'https://www.moneycontrol.com/techmvc/mc_widgets/moneycontrol_hamburger_menu/?classic=true',
			type : "POST",
			dataType : "html",
			cache: true,
			error: function( obj, errorMsg, d ) {
				/* alert( 'Unable to process request - ' + errorMsg + '- ' + d ); */
				console.log ( 'Unable to process request - ', errorMsg, '- ', d );
			},
			success : function( html_body ) {
				if( html_body.length > 10 ) {
					$( '.hamburger_menu_desktop' ).html( html_body );

					var mcpro = readCookieRevamp( 'mcpro' );
					if( mcpro == '1' ) {
						$( '.for_mcpro_users' ).show();
						$( '.for_nonpro_users' ).hide();
					} else {
						$( '.for_mcpro_users' ).hide();
						$( '.for_nonpro_users' ).show();
					}

					/* Checking for Be a Pro */
					if( cid == '12' ) {
						cid = '16';	/* Set as Subscription */
					}

					if( !$( '.' + element_id ).length ) {
						element_id = 'HamburgerMenu_0';	/* Set as Market */
					}

					$( '.hamburger_menu_desktop' ).show();
					$('body').addClass( 'body_open_hamburger' );

					/* Default selection for selected cid -> Start */
						/* For verticle L1 menu */
						$( '.hamburger_sub_menu' ).removeClass( 'active' );
						$( '.' + element_id ).addClass( 'active' );

						/* For verticle L2 menu */
						$( '.hamburger_menu_tab_pane' ).removeClass( 'active in' );
						$( '#' + element_id ).addClass( 'active in' );
					/* End <- Default selection for selected cid */

					$( '.close_hamburger' ).click(function() {
						$(this).parents().find( '.hamburger_menu_desktop' ).hide();
						$( 'body' ).removeClass( 'body_open_hamburger' );
					})
				}
			}
		});
	})

	$( '.close_hamburger' ).click(function() {
		$(this).parents().find( '.hamburger_menu_desktop' ).hide();
		$( 'body' ).removeClass( 'body_open_hamburger' );
	})

	$( '#forum_user_profile' ).click(function() {
		$( '.hamburger_menu_desktop' ).hide();
		$( 'body' ).removeClass( 'body_open_hamburger' );
	})

	if( $( '.global_menu' ).length ) {
		// $( '.global_menu > li > a' ).hover(function() {
		$( '.global_menu > li > a' ).hoverIntent(function() {
			let cid = $.trim( $(this).parent().attr( 'cid' ) );
			$(this).tab( 'show' );

			/* Run Only for Forum Menu */
			if( cid == '4' ) {
				referesh_forum_user_profile();
			}

		});

		// $( '.global_menu > li' ).hover(function() {
		$( '.global_menu > li' ).hoverIntent(function() {
			if( $(this).hasClass( 'hoverblock' ) ) {
				return;
			} else {
				$(this).find( 'a' ).tab( 'show' );
			}
		});

		$( '.global_menu > li' ).find('a').click(function() {
			$(this).parent().siblings().addClass( 'hoverblock' );
		});
	}
/* End <- Hamburger Menu */

if( $( '.tophvr' ).length ) {
	$( '.tophvr' ).hover(function() {
		$(this).find( '.common_dropmenu' ).fadeIn();
		$(this).find( '.droplogbox' ).fadeIn();
	},function(){
		$(this).find( '.common_dropmenu' ).hide();
		$(this).find( '.droplogbox' ).hide();
	});
}

if( $( '.main_nav' ).length ) {
	$( '.main_nav>li.sub_nav' ).hover( function() {
		let cid = $.trim( $(this).attr( 'cid' ) );

		/* Run Only for Personal Finance L1 Menu */
		if( cid == '8' ) {
			referesh_personal_finance_upcoming_chat();
			referesh_personal_finance_live_chat();
		}

		/* Run Only for Forum L1 Menu */
		if( cid == '4' ) {
			referesh_forum_user_profile();
		}

		/* Run Only for Videos L1 Menu */
		if( cid == '5' ) {
			referesh_videos_list();
		}
	});
}

if( $( '.trans_wrapper' ).length ) {
	$('.main_nav>li.sub_nav').hover(function(){
		$(this).parents().find('.trans_wrapper').show();
		// $('body').addClass('body_hidden');
	},function(){
		$(this).parents().find('.trans_wrapper').hide();
		// $('body').removeClass('body_hidden');
	})
}