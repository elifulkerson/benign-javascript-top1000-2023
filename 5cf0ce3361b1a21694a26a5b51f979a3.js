jQuery(document).ready(function($) {
	// nav-sub
	$('[data-toggle]').on('click', function() {
		var $this = $(this);
		$this.toggleClass('NR-open');
		$($this.attr('href')).toggle();
		return false;
	});
	// smartphone
	if ($('.NR-rwd').length) {
		$('#NR-nav').length && $('<a href="#" id="NR-sp-menu"></a>').appendTo('#NR-header-logo');
		$(document).on('click', '#NR-sp-menu', function () {
			$(this).toggleClass('NR-on');
			$('#NR-nav-main, .NR-search:not(.NR-search-fixed)').toggleClass('NR-open');
			return false;
		});
	}
});