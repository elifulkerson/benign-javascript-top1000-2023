/**
* Inven Browser Detect Js by HunGom
* Renewal by InTheBlue
*/

(function($, undefined) {
	// Check browser
	var browser = {};
	var ua = String(navigator.userAgent || '').toLowerCase();

	var uaMatch = function(ua) {
		if (typeof(ua) == 'string') {
			ua = ua.toLowerCase();
			return undefined
				|| /(chrome)[ \/]([\w.]+)/.exec(ua)
				|| /(webkit)[ \/]([\w.]+)/.exec(ua)
				|| /(firefox)[ \/]([\w.]+)/.exec(ua)
				|| /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua)
				|| /(msie) ([\w.]+)/.exec(ua)
				|| /(trident)(?:.*rv:([\w.]+))?/.exec(ua)
				|| (ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua))
				|| []
			;
		} else {
			return [];
		}
	};

	var match = uaMatch(ua);
	if (match) {
		browser[match[1]] = true;
		browser.version = match[2] || '0';
		if (browser.chrome) {
			browser.webkit = true;
		} else if (browser.webkit) {
			browser.safari = true;
		} else if (browser.trident) {
			browser.msie = true;
		}
	}

	// Check mobile & tablet
	match = /(android|iphone|ipod|ipad|windows ce|windows phone|symbian|blackberry|opera mini|tablet|mobile)/.exec(ua);
	if (match) {
		match = match[1].replace(/ /g, '');
		browser.mobile = true;
		browser[match] = true;
		if (browser.ipad || browser.tablet) {
			browser.tablet = true;
		} else {
			var w = 0, h = 0;
			try {
				var win = $(window);
				w = win.width() || 0;
				h = win.height() || 0;
			} catch (e) {
				w = 0;
				h = 0;
			}
			if (Math.max(w, h) >= 1024) browser.tablet = true;
		}
	}

	// Add html browser selector class
	var b = [];
	if (browser.mobile) {
		b[b.length] = 'mobile';
		if (browser.tablet) b[b.length] = 'tablet';
	} else if (browser.msie) {
		b[b.length] = 'ie';
		var v = parseInt(browser.version);
		try {
			if (document.compatMode == 'BackCompat' && (document.documentMode || 5) == 5) {
				b[b.length] = 'quirks';
				browser.quirks = true;
			}
		} catch (e) {}
		if (v && !browser.quirks) b[b.length] = 'ie'+v;
	}
	if (b.length > 0) $('html').addClass(b.join(' '));

	// Overwrite jQuery browser object
	$.browser = browser;
    $.uaMatch = uaMatch;

    // set inven
    var INVEN = window.INVEN || {};
    INVEN.Browser = browser;
    window.INVEN = INVEN;
})(jQuery);