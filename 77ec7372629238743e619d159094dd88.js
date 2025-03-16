$(document).ready(function() {
		$("img").lazyload({
			failure_limit : 100,
			effect : "fadeIn"
		});
	});