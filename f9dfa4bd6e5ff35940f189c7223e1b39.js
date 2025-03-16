requirejs(['jquery', 'owlCarousel'], function ($, owlCarousel) {
			var top_pick = $('.top-pick .owl-carousel');
			if ( $(window).width() < 1181 ) {
				top_pick.trigger('destroy.owl.carousel');
				top_pick.addClass('off');
			} 
			else{
				top_pick.owlCarousel({
					margin:20,
			loop:true,
			autoplay:false,
			touchDrag:true,
			mouseDrag:true,
			responsive:{
				0:{
					items:1.4,
					nav:false,
					dots:false, 
					slideBy:1
				},
				600:{
					items:2.5,
					nav:false,
					dots:false,
					slideBy:1
				},
				1000:{
					items:3.5,
					nav:false,
					dots:false,
					slideBy:3
				},
				1200:{
					items:4,
					nav:true,
					dots:true,
					navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
					slideBy:4
				}
				}
			});
	
			}
		
	
		$( window ).resize(function() {
			if ( $(window).width() < 1181 ) {
				top_pick.trigger('destroy.owl.carousel');
				top_pick.addClass('off');
			} 
			else{
				top_pick.owlCarousel({
				margin:15,
				loop:true,
				autoplay:false,
				nav:false,
				dots:true,  
					rtl: true,
	
				mouseDrag: true,
				touchDrag: true,
				pullDrag: true,
				freeDrag: false,
				
			lazyLoad:true,
	
				responsive:{
					0:{
						items:2.3,
						slideBy:1
					},
					600:{
						items:3.5,
						slideBy:1
					},
					1000:{
						items:4.5,
						slideBy:4
					},
					1200:{
						items:6,
						nav:true,
						dots: false,
						navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
						slideBy:6
					}
				}
			});
	
			}
		});
});