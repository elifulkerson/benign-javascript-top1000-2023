function isItIE() {
	  user_agent = navigator.userAgent;
	  var is_it_ie = user_agent.indexOf("MSIE ") > -1 || user_agent.indexOf("Trident/") > -1;
	  return is_it_ie;
	}
	if (isItIE()){
        var alert = document.getElementById('unsupported-browser-alert');
        var newClasses = alert.className.split('eds-hide').join('');
        alert.className = newClasses;
	}