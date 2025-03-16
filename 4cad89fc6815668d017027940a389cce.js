require(["jquery"], function ($) {
	$(this).scroll(function() {
		if ($(this).scrollTop() > 300) {
			if($( window ).width() > 1200){
				$("#left-bottom-sticky-container").css("bottom", "30px");
				return 0;
			}
			if($( window ).width() > 1000 && $( window ).width() < 1200){
				$("#left-bottom-sticky-container").css("bottom", "12px");
				return 0;
			}
			if($( window ).width() > 600 && $( window ).width() < 1000){
				$("#left-bottom-sticky-container").css("bottom", "0px");
				return 0;
			}
			if($( window ).width() <= 600){
				if($(".flooting-ad").css("display") == "block"){
					
					$("#left-bottom-sticky-container").css("bottom", "95px");
					return 0;
				}
				$("#left-bottom-sticky-container").css("bottom", "0px");
				return 0;
			}
			$("#left-bottom-sticky-container").css("bottom", "30px");
		}
		else{
			$("#left-bottom-sticky-container").css("bottom", "-100%");
		}

	});
});