$(function() {
		$('#topil').bxSlider({
			pagerCustom: '#navtopil',
			mode: 'vertical',
			autoHover: true,
			pagerEvent: 'mousemove',
			infiniteLoop: true,
			controls: true,
			nextSelector: '#nexttopil',
			prevSelector: '#prevtopil',
			nextText: '<i class="fa fa-angle-right"></i>',
			prevText: '<i class="fa fa-angle-left"></i>'
		});
	});