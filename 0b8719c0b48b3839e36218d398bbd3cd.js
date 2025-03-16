function OptanonWrapper() {
	if (!getCookie('OptanonAlertBoxClosed') || !Optanon.IsAlertBoxClosedAndValid()) {
	}   
	function getCookie(name) {
		let value = '; ' + document.cookie
		var parts = value.split('; ' + name + '=')
		if (parts.length == 2) {
			return parts.pop().split(";").shift();
		}
	}
	setTimeout(function(){                                               
		$('#accept-recommended-btn-handler').focus();
	}, 800);            
}