$(function() {
	    $('#slidejb').bxSlider({
			nextSelector: '#nexttjb',
			prevSelector: '#prevtjb',
			nextText: 'Next <i class="fa fa-angle-right"></i>',
			prevText: '<i class="fa fa-angle-left"></i> Prev',
			auto: true,
			pause: 10000,
			pager:false,
			infiniteLoop: true,
			hideControlOnEnd: true,
			adaptiveHeight: true
	    });
	});