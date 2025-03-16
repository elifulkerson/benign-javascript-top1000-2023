requirejs(['jquery'], function ($) {
	userIdentify.then(function() {
		if(!isNonSubcribedUser()) {
			if ($(window).width() < 1181 ) {
				document.getElementById("toppickDiv").remove()
			}
			else{
				document.getElementById("toppickDiv").parentElement.remove()
			}
			
		}
	});
	});