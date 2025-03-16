// Code to enable sub-area highlighting for countries and areas navigation

	if(window.jQuery) {
		jQuery(document).ready(function(){
			jQuery(document).on({
				touchstart: function( event ) {
					event.preventDefault();
					if(!jQuery( this ).prev().hasClass('highlighted')) {
						jQuery( this ).prev().addClass('highlighted');
					}
				},
				mouseleave: function() {
					if(jQuery( this ).prev().hasClass('highlighted')) {
					}
				},
				mouseover: function() {
					if(!jQuery( this ).prev().hasClass('highlighted')) {
						jQuery( this ).prev().addClass('highlighted');
					}
				}
			}, '#country_navigation_chosen .indent');

			jQuery(document).on({
				touchstart: function( event ) {
					event.preventDefault();
					if(!jQuery( this ).next('.indent').hasClass('highlighted')) {
						jQuery( this ).next('.indent').addClass('highlighted');
					}
				},
				mouseleave: function() {
					if(jQuery( this ).next('.indent').hasClass('highlighted')) {
					}
				},
				mouseover: function() {
					if(!jQuery( this ).next('.indent').hasClass('highlighted')) {
						jQuery( this ).next('.indent').addClass('highlighted');
					}
				}
			}, '#country_navigation_chosen .noindent');

		});

		// Code to load the navigation without the temporarily blank navigation and page jumpiness -- mainly for desktop.
		if ( jQuery(window).width() >= 975 ) {
			jQuery('.nav__utility').show();
			jQuery('.site-nav--primary').appendTo('.nav__second-nav');
			jQuery('.nav__primary-nav').appendTo('.nav__second-nav');
		}
		if ( jQuery(window).width() < 975 ) {
			jQuery('.nav__utility').hide();
		}
	}