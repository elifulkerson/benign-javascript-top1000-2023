jQuery(document).ready(function($) {
	$(window).load(function(){
	var leaderHeight = $("#mvp-leader-wrap").outerHeight();
	var navHeight = $("#mvp-main-head-wrap").outerHeight();
	var headerHeight = navHeight + leaderHeight;
	var previousScroll = 0;
	$(window).scroll(function(event){
			var scroll = $(this).scrollTop();
			if ( typeof leaderHeight !== "undefined" ) {
				if ($(window).scrollTop() > headerHeight){
					$("#mvp-main-nav-small").addClass("mvp-nav-small-fixed");
					$("#mvp-main-body-wrap").css("margin-top", navHeight );
				} else {
					$("#mvp-main-nav-small").removeClass("mvp-nav-small-fixed");
					$("#mvp-main-body-wrap").css("margin-top","0");
				}
				if ($(window).scrollTop() > headerHeight + 50){
					$("#mvp-main-nav-small").addClass("mvp-fixed");
					$("#mvp-main-nav-small").addClass("mvp-fixed-shadow");
					$(".mvp-fly-top").addClass("mvp-to-top");
				} else {
					$("#mvp-main-nav-small").removeClass("mvp-fixed");
					$("#mvp-main-nav-small").removeClass("mvp-fixed-shadow");
					$(".mvp-fly-top").removeClass("mvp-to-top");
				}
			} else {
				if ($(window).scrollTop() > navHeight){
					$("#mvp-main-nav-small").addClass("mvp-nav-small-fixed");
					$("#mvp-main-body-wrap").css("margin-top", navHeight );
				} else {
					$("#mvp-main-nav-small").removeClass("mvp-nav-small-fixed");
					$("#mvp-main-body-wrap").css("margin-top","0");
				}
				if ($(window).scrollTop() > navHeight + 50){
					$("#mvp-main-nav-small").addClass("mvp-fixed");
					$("#mvp-main-nav-small").addClass("mvp-fixed-shadow");
					$(".mvp-fly-top").addClass("mvp-to-top");
				} else {
					$("#mvp-main-nav-small").removeClass("mvp-fixed");
					$("#mvp-main-nav-small").removeClass("mvp-fixed-shadow");
					$(".mvp-fly-top").removeClass("mvp-to-top");
				}
			}
			previousScroll = scroll;
	});
	});
	});
	

	jQuery(document).ready(function($) {
	$(".menu-item-has-children a").click(function(event){
	  event.stopPropagation();

  	});

	$(".menu-item-has-children").click(function(){
    	  $(this).addClass("toggled");
    	  if($(".menu-item-has-children").hasClass("toggled"))
    	  {
    	  $(this).children("ul").toggle();
	  $(".mvp-fly-nav-menu").getNiceScroll().resize();
	  }
	  $(this).toggleClass("tog-minus");
    	  return false;
  	});

	// Main Menu Scroll
	$(window).load(function(){
	  $(".mvp-fly-nav-menu").niceScroll({cursorcolor:"#888",cursorwidth: 7,cursorborder: 0,zindex:999999});
	});
	});