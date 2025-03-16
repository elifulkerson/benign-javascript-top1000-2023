window.evidon = window.evidon || {};

        window.evidon.handleAdvertisingCategory = window.evidon.handleAdvertisingCategory || []
        window.evidon.handleAnalyticsAndCustomizationCategory = window.evidon.handleAnalyticsAndCustomizationCategory || []
        window.evidon.handleEssentialCategory = window.evidon.handleEssentialCategory || []
        window.evidon.handlePerformanceAndFunctionalityCategory = window.evidon.handlePerformanceAndFunctionalityCategory || []
        window.evidon.handleOrganizerCategory = window.evidon.handleOrganizerCategory || []

        if (!EB.EvidonConsent.shouldDisableEvidon()) {
            (function (id) {
                function append(scriptid, url, async) {
                    var d = document, sn = 'script', f = d.getElementsByTagName(sn)[0];
                    if (!f) f = d.head;
                    var s = d.createElement(sn);
                    s.async = async;
                    s.id = scriptid;
                    s.src = url;
                    s.charset = 'utf-8';
                    f.parentNode.insertBefore(s, f);
                }

                function is2parttld(value) {
                    var tldindicators = ['co', 'com', 'info', 'web', 'info', 'gov', 'edu', 'biz', 'net', 'org'];
                    var countryindicators = ['uk', 'us', 'fr', 'es', 'de', 'at', 'au', 'ae', 'be', 'br', 'ca', 'ch', 'cn', 'co', 'cz', 'dk', 'eg', 'eu', 'fi', 'gb', 'gr', 'hk', 'hr', 'hu', 'ie', 'in', 'jp', 'mx', 'nl', 'no', 'nz', 'pl', 'ro', 'ru', 'se'];
                    return (tldindicators.indexOf(value) !== -1 || countryindicators.indexOf(value) !== -1);
                }

                function getRootDomain() {
                    var parts = window.location.hostname.split('.');
                    if (parts.length === 2) rootDomain = parts[0];
                    else if (parts.length > 2) {
                        // see if the next to last value is a common tld
                        var part = parts[parts.length - 2];
                        if (is2parttld(part)) {
                            rootDomain = parts[parts.length - 3]; // go back one more
                        }
                        else {
                            rootDomain = part;
                        }
                    }

                    return rootDomain;
                }

                window.evidon.id = id;

                // set to true for non-production testing. this prevents analytics hits on the
                // evidon management interface.
                window.evidon.test = getRootDomain() !== 'eventbrite' ? true : false;

                // This property is unused by Eventbrite, but Evidon docs suggest that this is an identifier for the current active user. If we provide an internal id, Evidon will store it with the reporting information. Else, they will use a default correlation key not guaranteed to represent a unique user.
                //window.evidon.userid = '';

                var cdn = '//c.evidon.com/', rootDomain = getRootDomain(), noticecdn = cdn + 'sitenotice/';
                append('evidon-notice', noticecdn + 'evidon-sitenotice-tag.js', false);
                append('evidon-themes', noticecdn + id + '/snthemes.js', true);
                if (rootDomain) append('evidon-settings', noticecdn + id + '/' + rootDomain + (window.evidon.test ? '/test' : '') + '/settings.js', true);

                // For development purposes you can bypass country detection and hardcode a specific country tag below.
                // Ideally, use the ModHeader browser extension and change your location using it for testing.
                //
                // The translations which show up for you will always be whatever your browser Accept-Language headers are.
                // append('evidon-location', cdn + 'tag-gb/country.js', true);
                append('evidon-location', cdn + 'geo/country.js', true);

                window.evidon.priorConsentCallback = function (categories, vendors, cookies) {
                    // add the tags which need to wait for prior consent
                    // here. This should be all your advertising tags and
                    // probably most of your social and tracking tags.
                    //
                    // the list of vendor categories is available at https://privacy.evidon.com/v3/sitenotice/vendors
                    var handlers = {
                        categories: {
                            'all': 'handleAllCategories',
                            'advertising cookies': 'handleAdvertisingCategory',
                            'analytics and customization cookies': 'handleAnalyticsAndCustomizationCategory',
                            'essential cookies': 'handleEssentialCategory',
                            'performance and functionality cookies': 'handlePerformanceAndFunctionalityCategory',
                            'organizer cookies': 'handleOrganizerCategory',
                        },
                        vendors: {}
                    };

                    for (var category in categories) {
                        if (!categories[category]) continue;

                        // If general consent is given, the category is going to be "all",
                        // so we need to manually trigger every group of handler callbacks.
                        if (category === 'all') {
                            for (var category in handlers.categories) {
                                var callbacks = window.evidon[handlers.categories[category]];

                                // Iterate through the array of callbacks
                                if (Array.isArray(callbacks)) {
                                    for (var callback of callbacks) {
                                        if (typeof callback === 'function') callback();
                                    }
                                }
                            }
                        } else {
                            var callbacks = window.evidon[handlers.categories[category]];

                            // Iterate through the array of callbacks
                            if (Array.isArray(callbacks)) {
                                for (var callback of callbacks) {
                                    if (typeof callback === 'function') callback();
                                }
                            }
                        }
                    }

                    for (var vendor in vendors) {
                        if (!vendors[vendor]) continue;
                        var handler = window.evidon[handlers.vendors[vendor]];
                        if (typeof handler === 'function') handler();
                    }
                }

                window.evidon.closeCallback = function () {
                    // this is executed if the user closed a UI element without either Accepting (providing consent)
                    // or Declining (declining to provide consent).
                    //
                    // This callback is also executed when a banner autocloses in EU countries after 60seconds of no action.
                    //
                    // In the US but not California, we add a suppression cookie so that the banner does not show back up on page reload.
                    // If we do not do this, it's a very annoying experience where the banner will keep coming back up
                    if (window.evidon.notice.country.code === 'us'
                        && window.evidon.notice.country.stateCode
                        && window.evidon.notice.country.stateCode !== 'ca')
                    {
                        window.evidon.notice.dropSuppressionCookie(365);
                    }
                }

                window.evidon.consentWithdrawnCallback = function () {
                    // this is executed if the user withdraws consent and elects to
                    // no longer allow technologies to run on the site.
                }

                window.evidon.consentDeclinedCallback = function () {
                    // When a site user selects the Decline button in a banner or barrier, the consentDeclined event is triggered.
                    // This hides the notice for the current session, but when the site user opens a new session, either by refreshing
                    // or opening a new browser, they will be asked to decline again.
                    // https://community.crownpeak.com/t5/Universal-Consent-Platform-UCP/How-to-suppress-a-banner/ta-p/4647
                    window.evidon.notice.dropSuppressionCookie(365);
                }
            })(1611);
        }