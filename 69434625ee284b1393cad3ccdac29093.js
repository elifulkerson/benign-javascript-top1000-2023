(function () {
		var footerLinks, needConsent;

		try {
			footerLinks = JSON.parse('[{"copyright":"Copyright: \u00a9 ESPN Enterprises, Inc. All rights reserved.","footer":[{"label":"Terms of Use","href":"https://disneytermsofuse.com/english/"},{"label":"Privacy Policy","href":"https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/"},{"label":"Your US State Privacy Rights","href":"https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/your-us-state-privacy-rights/"},{"label":"Children%27s Online Privacy Policy","href":"https://disneyprivacycenter.com/kids-privacy-policy/english/"},{"label":"Interest-Based Ads","href":"http://preferences-mgr.truste.com/?type=espn&affiliateId=148"},{"label":"About Nielsen Measurement","href":"http://www.nielsen.com/digitalprivacy"},{"className":"ot-sdk-show-settings","label":"Do Not Sell or Share My Personal Information","href":"https://privacy.thewaltdisneycompany.com/en/dnssmpi/"},{"label":"Contact Us","href":"https://www.espn.com/espn/news/story?page=contact-index"},{"label":"Disney Ad Sales Site","href":"https://disneyadsales.com/"},{"label":"Work for ESPN","href":"https://jobs.disneycareers.com/espn"}]}]');
            needConsent = 'false';
		} catch (e) {
            console.log(e);
        }

		window.espn.footerLinks = footerLinks || {};
        window.espn.needConsent = needConsent || false
	})();