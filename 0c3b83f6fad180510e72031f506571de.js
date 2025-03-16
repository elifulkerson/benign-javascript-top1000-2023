(function() {
var asyncAvailable = true;
try {
    eval("async () => {}");
} catch(e) {
    asyncAvailable = false;
}

var falseUA = false && !asyncAvailable;
var primarySupportsAsync = !false && asyncAvailable;

var clientloggerIsEnabled = true;
if (clientloggerIsEnabled) {
    if (falseUA) {
        new Image().src = '/clientlog?falseua=1';
    }
    if (primarySupportsAsync) {
        new Image().src = '/clientlog?primarysupportsasync=1';
    }
    if (window.__etsy_logging && window.__etsy_logging.bots && (window.__etsy_logging.bots.isBot || window.__etsy_logging.bots.botCheck.length > 0)) {
        new Image().src = '/clientlog?feisbot=1&bot_check=' + encodeURIComponent(JSON.stringify(window.__etsy_logging.bots.botCheck));
    }
}

    if (typeof Sentry !== 'object') { return; }

    function breadcrumbFilter (arr_xhr, arr_console) {
        return function (crumb) {
            if (typeof crumb === 'object') {
                if (crumb.category === 'xhr'
                    && typeof crumb.data === 'object'
                    && typeof crumb.data.url === 'string') {
                    return !arr_xhr.some(function (re) {
                        return crumb.data.url.match(re);
                    }) && crumb;
                } else if (crumb.category === 'console'
                           && typeof crumb.message === 'string') {
                    return !arr_console.some(function (re) {
                        return crumb.message.match(re);
                    }) && crumb;
                }
            }
            return crumb;
        };
    }

    function beforeSend(event, hint) {
        try {
            if (hint.originalException.detail.reason.message === 'Extension context invalidated.') {
                return null;
            }
        } catch(_ignore) {
        }

        var serverUA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:21.0) Gecko/20100101 Firefox/21.0".trim();
        var browserUA = navigator.userAgent.trim();
        var mismatch = serverUA !== browserUA;

        if (mismatch) {
            return null;
        }

        if (falseUA) {
            return null;
        }

        event.request = event.request || {};
        event.request.headers = event.request.headers || {};
        event.extra = event.extra || {};

        event.request.headers["User-Agent"] = serverUA;
        event.extra["browser_side_user_agent"] = browserUA;

        if (window.__etsy_logging && window.__etsy_logging.bots && window.__etsy_logging.bots.isBot) {

            return null;
        }

        return event;
    }
    Sentry.onLoad(function() {
        var options = {
            release: '4f5ecb75d8aee571-prod',
            environment: 'Production',
            autoSessionTracking: false,
            beforeSend: beforeSend,
            beforeBreadcrumb: breadcrumbFilter([/etsy.com\/bcn\/beacon$/i, /\/icht.etsysecure.com\//i], [/https\:\/\/www\.etsy\.com\/careers/]),
            ignoreErrors: ["top.GLOBALS", /https\:\/\/www\.youtube\.com/, /undefined is not an object.*dataLayerTransactions.length/, /https\:\/\/tpc\.googlesyndication\.com/, /http\:\/\/fairytrade\.co\.uk/, /http\:\/\/100actsofsewing\.com/, /https\:\/\/www\.nobiggie\.net/, /staticxx\.facebook\.com/, /__firefox__/, /JSON syntax error/, /https\:\/\/bid\.g\.doubleclick\.net/, /https\:\/\/5094987\.fls\.doubleclick\.net/, /https\:\/\/www\.google\.com/, /https\:\/\/www\.zenaps\.com/, /Cannot read property.*DOMNodeInsertedByJs/, /e.tagName.toLowerCase/, /twttr/, /PAPADDINGXXPADDINGPADDINGXXPADDINGPADDINGXXPADDINGPADDINGXXPADDINGPADDINGXXPADDINGPADDINGX/, /Error calling method on NPObject/, /Access is denied./, /document\.getElementsByClassName\.ToString/, /https\:\/\/accounts\.google\.com/, /_isMatchingDomain/, /NS_ERROR_NOT_INITIALIZED/, /loginFormData\.userNameValue/, /find variable: \$pr/, /\$pr is not defined/, /find variable: _AutofillCallbackHandler/],
            allowUrls: [/etsystatic\.com/, /etsy\.com\/paula/, /etsy\.com\/ac/, /etsy\.com\/daj/, /etsycorp\.com/],
            denyUrls: [],
            sampleRate: 1.0,
        };


        Sentry.init(options);
        
        Sentry.configureScope(function(scope) {
            scope.setUser({"id":"Nifk_sMFqQkBD4TlXxT0U0XRFa38","ip_address":"70.163.140.175"});
            scope.setTags({"user_id":null,"is_signed_in":false,"is_web_view":false,"is_atlas_request":false,"request_uuid":"Eu4xy1yzYKCT_-h9MjnLFjGXWube","locale":"en-US","build_variant":"primaryVendor","polyfill":"paula","speedcurve_lux":"off","primary_event_name":"home"});
            scope.setExtras({"server_side_user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:21.0) Gecko/20100101 Firefox/21.0"});
        });
        window.__etsy_logging.errorQueue.forEach(function(errorData) {
            if (errorData[4]) {
                Sentry.captureException(errorData[4]);
            }
        });
    });
})();