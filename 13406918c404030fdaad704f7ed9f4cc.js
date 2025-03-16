// Code to load the navigation without the temporarily blank navigation and page jumpiness -- mainly for desktop.
	if( window.jQuery ) {
		if ( jQuery(window).width() >= 975 ) {
			jQuery('.nav__utility').show();
			jQuery('.site-nav--primary').appendTo('.nav__second-nav');
			jQuery('.nav__primary-nav').appendTo('.nav__second-nav');
		}
		if ( jQuery(window).width() < 975 ) {
			jQuery('.nav__utility').hide();
		}
	}