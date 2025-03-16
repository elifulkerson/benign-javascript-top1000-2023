document.body.classList.remove('noscript');

    function checkIfGrLibraryLoaded() {
        return ('undefined' !== typeof gr) && (null !== gr);
	}

	if (checkIfGrLibraryLoaded() && gr.isLogged()) {
		document.body.classList.add('logged-user');
	}

	if (false) {
		document.body.classList.add('logged-oauth' ,'logged-user');

		if (false) {
			document.body.classList.add('premium-user');
		}
	}

    if (checkIfGrLibraryLoaded() && (gr.isPremium() || gr.isUltimate())) {
        document.body.classList.add('premium-user');
    }

    if (checkIfGrLibraryLoaded() && gr.user && gr.user.email.match(/\@freepik.com/)) {
        document.body.classList.add('admin-user');
	}

	if ('undefined' !== typeof CampaignHelpers && CampaignHelpers.showBanner()) {
		document.body.classList.add('campaign-active');
	}