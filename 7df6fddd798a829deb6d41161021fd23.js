function getCookie(name) {
		const match = document.cookie.match(`(^| )${name}=([^;]+)`);
		return match ? JSON.parse(match[2]) : undefined;
	}

	function setCookie(cname, cvalue, exdays) {
		const d = new Date();
		d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
		let expires = "expires=" + d.toUTCString();
		document.cookie = cname + "=" + JSON.stringify(cvalue) + ";" + expires + ";path=/;domain=.elsevier.com;";
	}
	
	function isBot() {
	    return /bot|crawl|spider|SpeedCurve/i.test(navigator.userAgent ?? '')
	}

	let trialCookie = getCookie('beta_trial');
	const chance =  50; //  50% chance of being included

	if (!trialCookie) {
        let inTrial = false;
        if (!isBot()) {
            inTrial = (Math.random() * 100) > (100 - chance);
        }
		setCookie('beta_trial', {
			inTrial,
			optedOut: false
		}, 30);
		trialCookie = getCookie('beta_trial');
	}
	
	if (trialCookie.inTrial && !trialCookie.optedOut) {
		window.location = 'https://beta.elsevier.com/?trial=true'
	}