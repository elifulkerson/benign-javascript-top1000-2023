tp = window["tp"] || [];
	tp.push(['init', function () {
		tp.pianoId.init({
		loggedIn: function (data) {
		thgloggedIn(data)
		},
		loggedOut: function () {
		location.reload();
		}
		});
	}
	]);
	function thgloggedIn(data) {
		if(document.getElementsByTagName("header").length > 0) {
			document.getElementsByTagName("header")[0].classList.remove("logout");
			document.getElementsByTagName("header")[0].classList.add("login");
		}
	}
	function thgLogout() {
	typeof __thg_event != "undefined" ?  __thg_event.triggerLogOut(tp.pianoId.getUser()): null;
	   tp.push(["init", function () {
	        tp = window.tp || [];
	        tp.pianoId.logout()
	        location.reload();
	   }]);
    }
userIdentify.then(function() {
	var list = document.querySelectorAll(".menuuserdetect");
		for (var i = 0; i < list.length; ++i) {
			list[i].style.display = "block" ;
		}
		if(isNonSubcribedUser()){
			var housing = document.querySelectorAll(".housing-img");
			for (var j = 0; j < housing.length; ++j) {
				housing[j].style.display = "inline-block" ;
			}
		}
		
});