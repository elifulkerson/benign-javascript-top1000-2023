function OptanonWrapper() {
		var handler = document.getElementById('confirm-choices-handler');

		if (handler) {
			handler.addEventListener("click", function() {Optanon.RejectAll(); alert("You have been opted out of browser data sharing by this site. This setting will not apply to other sites, your other browsers or if you clean this browser's cookies");}); }
		}