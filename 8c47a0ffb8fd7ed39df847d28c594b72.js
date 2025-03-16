$(document).ready(function() {
	$(".floating-images").css("bottom","110px");
	closeFloatingBanner = () => {
		$(".floating-images").css("bottom","-10000px");
	}	
});