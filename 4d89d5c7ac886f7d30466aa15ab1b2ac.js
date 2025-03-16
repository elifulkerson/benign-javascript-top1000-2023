var templateType = "";
window.forbes = window.forbes || {};
window.forbes.isAdvisor = templateType === 'advisor';// this file is external 3rd party code to initiate header prebidding which comes directly from Medianet
// https://forbesmedia.atlassian.net/browse/ADSS-77
/* eslint-disable no-underscore-dangle, camelcase */
window._mNHandle = window._mNHandle || {};
window._mNHandle.queue = window._mNHandle.queue || [];
window.forbes = window.forbes || {};
window.forbes.fastFetchMedianet = true;

// eslint-disable-next-line no-unused-vars
const medianet_versionId = '3121199';

(() => {
	const loadScript = (tagSrc) => {
		const scriptTag = document.createElement('script');
		const placeTag = document.getElementsByTagName('script')[0];
		scriptTag.type = 'text/javascript';
		scriptTag.async = true;
		scriptTag.src = tagSrc;
		placeTag.parentNode.insertBefore(scriptTag, placeTag);
	};

	const loadMedianetAd = () => {
		loadScript('https://contextual.media.net/dmedianet.js?cid=8CU2T3HV4&https=1');
	};

	const loadMedianetManagePrebid = (isMobile) => {
		window.mnjs = window.mnjs || {
			customerId: isMobile ? '8CU243I76' : '8CU4ZAPFY',
			domain: window.location.hostname,
			version: 1.0,
		};
		/* eslint-disable prefer-template */
		const mnjsEndpoint = 'https://warp.media.net/js/tags/clientag.js?'
			+ 'cid=' + window.mnjs.customerId
			+ '&dn=' + window.mnjs.domain
			+ '&version=' + window.mnjs.version;
		loadScript(mnjsEndpoint);
	};

	/**
	 * gets user agent from navigator info
	 * @param {String} ua user agent from navigator
	 * @param {String} isMobileAndroid for android devices
	 * @param {String} isMobileWindows for windows phone devices
	 * @returns a string representing the user agent
	 */
	const getIsMobile = (ua, isMobileAndroid, isMobileWindows) => ua.match(/iP(hone|od)/i)
		|| ua.match(/iPod/i)
		|| ua.match(/BlackBerry/i)
		|| isMobileAndroid
		|| isMobileWindows;

	const loadMedianetHeaderBidding = () => {
		if (window.forbes.isAdvisor) {
			loadScript('https://contextual.media.net/bidexchange.js?cid=8CU25AH4U');
		} else {
			const ua = navigator.userAgent;
			const isMobileAndroid = ua.match(/Android/i) && ua.match(/Mobile/i);
			const isMobileWindows = ua.match(/Nokia|NOKIA/i) && ua.match(/Symbian|Windows Phone/i);
			const isMobile = getIsMobile(ua, isMobileAndroid, isMobileWindows);
			loadMedianetManagePrebid(isMobile);
		}
	};

	/**
	 * check if the _swb_consent_ cookie is loaded
	 * @Todo make the ketch checks on the window so we can call them from there and make sure we dont
	 * lose time in the proccess
	 * we added ketch check to make sure we don't load medianet if the user is in the EU or China
	 * adding the checks here is a temporary solution.
	 * @returns boolean that represents if the cookie is loaded or not
	 */
	const checkConsentCookieLoaded = () => !!document.cookie.match(/_swb_consent_=/);

	/**
	 * get the _swb_consent_ cookie and url decode it to get it ready for parseing
	 * @returns String that has the ketch cookie value
	 */
	function getSwbCookieValue() {
		let cookieValue = false;
		if (!checkConsentCookieLoaded()) {
			return cookieValue;
		}

		const ketchCookieName = '_swb_consent_=';
		document.cookie.split(';').forEach((cookie) => {
			if (cookie.trim().startsWith(ketchCookieName)) {
				cookieValue = decodeURIComponent(cookie.split('=')[1]);
			}
		});

		return cookieValue;
	}

	/**
	 * get the cookie and parse it into json from base64 string
	 * @returns object that contains the consent details
	 */
	function getSwbCookie() {
		const ketchCookie = getSwbCookieValue();

		try {
			const cookieInfo = window.atob(ketchCookie);
			return JSON.parse(cookieInfo);
		} catch (error) {
			return {};
		}
	}

	/**
	 * Check if the user gave full consent.
	 * @returns If the user gave full consent.
	 */
	function userGaveFullConsent() {
		const userConsent = getSwbCookie();

		if (!userConsent.purposes) {
			return false;
		}

		const purposesKeys = Object.keys(userConsent.purposes);
		let userConsentPrefrences = true;

		// safety check for when the cookie is first intialized
		if (purposesKeys.length === 1) {
			return false;
		}

		purposesKeys.forEach((element) => {
			if (userConsent.purposes[element].allowed === 'false') {
				userConsentPrefrences = false;
			}
		});

		return userConsentPrefrences;
	}

	if (window.forbes.isEurope || window.forbes.isChina) {
		if (checkConsentCookieLoaded() && userGaveFullConsent()) {
			loadMedianetAd();
			loadMedianetHeaderBidding();
		}
	} else {
		loadMedianetAd();
		loadMedianetHeaderBidding();
	}
})();