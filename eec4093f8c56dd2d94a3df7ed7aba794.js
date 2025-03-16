var _ioliub = {
    env: '',
    setCookie: function (name, value, days, domain) {
        console.log('[ioliub.setCookie]', name, value);
        var expires = '';
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = name + '=' + (value || '') + expires + '; domain=' + domain + '; path=/';
    },
    getCookie: function(name) {
        var nameEQ = name + '=';
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },
    eraseCookie: function (name, domain) {
        console.log('[ioliub.eraseCookie]', name);
        document.cookie = name + '=; Max-Age=-99999999; domain=.' + domain + '; path=/';
    },
    loadExternalScript: function (url, onloadCallback, onerrorCallback) {
        console.log('[ioliub.loadExternalScript]', url);
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        script.onreadystatechange = onloadCallback;
        script.onload = onloadCallback;
        script.onerror = onerrorCallback;
        document.head.appendChild(script);
    },
    ajax: function (options) {
        var o = {
            method: 'GET',
            url: null,
            data: null,
            timeout: 3000, // ms;
            onsuccess: null,
            onerror: null,
            ontimeout: null,
            always: null,
            track: true
        },
        startTime = 0, respTime = 0;
        if (typeof options !== 'object') return;
        if (options.method === 'GET' || options.method === 'POST') o.method = options.method;
        if (options.url) {o.url = options.url;} else {return;}
        if (options.data) {o.data = options.data;}
        if (options.timeout) o.timeout = options.timeout;
        if (options.onsuccess) o.onsuccess = options.onsuccess;
        if (options.onerror) o.onerror = options.onerror;
        if (options.ontimeout) o.ontimeout = options.ontimeout;
        if (options.always) o.always = options.always;
        if (typeof options.track === 'boolean') o.track = options.track;
        console.log('[ioliub.ajax]', o.method, o.url, o.data);
        var req = new XMLHttpRequest();
        if (o.onsuccess) req.addEventListener('load', function (e) {
            if (e.target.status == 200) {
                if (o.track) respTime = performance.now() - startTime;
                o.onsuccess(req, respTime);
            } else if (o.onerror) {
                o.onerror(e);
            }
        });
        if (o.onerror) req.addEventListener('error', o.onerror);
        if (o.always) req.addEventListener('loadend', o.always);
        if (o.ontimeout) req.addEventListener('timeout', o.ontimeout);
        req.open(o.method, o.url, true);
        req.withCredentials = true;
        req.timeout = o.timeout;
        if (o.track) startTime = performance.now();
        if (o.method === 'POST') {
            // con application/json ---> php non vede params in $_POST, usare file_get_contents('php://input');
            req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
            req.send(JSON.stringify(o.data));
        } else {
            req.send();
        }
        return req;
    },
    urls: {
        iubenda_cs: '//cdn.iubenda.com/cs/iubenda_cs.js',
        check_privacy_libero: null,
        check_privacy_virgilio: null,
        set_privacy_libero: null,
        set_privacy_virgilio: null
    },
    cookies: {
        euconsent_v2: 'euconsent-v2',
        ts_check_tcf: 'ts_check_tcf', // UnixTimestamp dell'ultima verifica di allineamento del consenso effettuata (regola il cap di verifica sui sistemi)
        ts_set_tcf : 'ts_set_tcf', // UnixTimestamp dell'ultima impostazione di privacy effettuata dallâ€™utente (consTimestamp)
        auth_check: 'LIB_NAME_CK',
        router: 'LOG_CMP'
    },
    loginUrlPrefix: function () {
        return (this.env)? '//' + this.env + '-': '//';
    },
    initLoginUrls: function () {
        this.urls.check_privacy_libero = this.loginUrlPrefix() + 'login.libero.it/cmp/check_privacy.php';
        this.urls.check_privacy_virgilio = this.loginUrlPrefix() + 'login.virgilio.it/cmp/check_privacy.php';
        this.urls.set_privacy_libero = this.loginUrlPrefix() + 'login.libero.it/cmp/set_privacy.php';
        this.urls.set_privacy_virgilio = this.loginUrlPrefix() + 'login.virgilio.it/cmp/set_privacy.php';
    },
    ready_callback: function () {},
    ready: function (callback) {
        this.ready_callback = callback;
    },
    isauth: function () {
        return this.getCookie(this.cookies.auth_check) != null;
    },
    brand: function () {
        var name = null, lst;
        try {
            name = window.location.hostname.split('.').at(-2);
        } catch (e) {
            try {
                lst = window.location.hostname.split('.');
                name = lst[lst.length - 2];
            } catch (e) {}
        }
        return name;
    },
    domain: function () {
        return this.brand() + '.it';
    },
    // iubConfUrl: function () {
    //     var url = this.urls['iub_conf_' + this.brand()];
    //     if (!url) console.error('[ioliub.iubConfUrl]', url);
    //     return url;
    // },
    // iubConsConfUrl: function () {
    //     var url = this.urls['iub_cons_conf_' + this.brand()];
    //     if (!url) console.error('[ioliub.iubConsConfUrl]', url);
    //     return url;
    // },
    checkPrivacyUrl: function () {
        var url = this.urls['check_privacy_' + this.brand()];
        if (!url) console.error('[ioliub.checkPrivacyUrl]', url);
        return url;
    },
    setPrivacyUrl: function () {
        var url = this.urls['set_privacy_' + this.brand()];
        if (!url) console.error('[ioliub.setPrivacyUrl]', url);
        return url;
    },
    loadConsentSolution: function () {
        var that = this;
        window._iub.csConfiguration.callback.onPreferenceFirstExpressed = function (preferences) {
            console.log('[ioliub.iub_conf.onPreferenceFirstExpressed INJ]', preferences);
            window._ioliub.consSyncronizer();
        };
        window._iub.csConfiguration.callback.onCookiePolicyShown = function () {
            console.log('[ioliub.iub_conf.onCookiePolicyShown INJ]');
            window._ioliub.lastCookieTCFv2();
        };
        var configuredCallbackOnBannerShown = window._iub.csConfiguration.callback.onBannerShown;
        window._iub.csConfiguration.callback.onBannerShown = function () {
            console.log('[ioliub.iub_conf.onBannerShown INJ]');
            configuredCallbackOnBannerShown();
            window._ioliub.lastCookieTCFv2();
            that.bannerShown = true;
        };
        // _iub.csConfiguration.callback.onConsentGiven = function () {
        //     console.log('[ioliub.iub_conf.onConsentGiven INJ]');
        //     // window._ioliub.consSyncronizer();
        // };
        if (this.syncOnNotFound) {
            var configuredCallbackOnPreferenceExpressed = function () {};
            if (typeof window._iub.csConfiguration.callback.onPreferenceExpressed === 'function') {
                configuredCallbackOnPreferenceExpressed = window._iub.csConfiguration.callback.onPreferenceExpressed;
            };
            window._iub.csConfiguration.callback.onPreferenceExpressed = function (t) {
                configuredCallbackOnPreferenceExpressed(t);
                console.log('[ioliub.iub_conf.onPreferenceExpressed INJ] firstrun', that.firstrun, 'bannerShown', that.bannerShown, 'esitoCheckPrivacy', that.esitoCheckPrivacy);
                // window._ioliub.consSyncronizer();
                if (that.firstrun && !that.bannerShown) {
                    if (that.esitoCheckPrivacy === 'USER_CONSENT_NOT_FOUND') {
                        that.consSyncronizer();
                    }
                }
                that.firstrun = false;
                that.bannerShown = false;
                that.esitoCheckPrivacy = null;
            };
        }
        // if (this.syncOnNotFound) {
        //     _iub.csConfiguration.callback.onReady = function (consent) {
        //         console.log('[ioliub.iub_conf.onReady INJ] consent', consent);
        //         // console.log('[ioliub.iub_conf.onReady INJ]', that, that.esitoCheckPrivacy);
        //         if (_iub.cs.api.isPreferenceExpressed()) {
        //             if (that.esitoCheckPrivacy === 'USER_CONSENT_NOT_FOUND') {
        //                 that.consSyncronizer();
        //             }
        //         }
        //     };
        // }
        this.consPreflight();
    },
    gvlIcb: function (user_id /* integer */ , now /* Date object */, cutoff /* Date object */, allowed_days /* integer */, spread_slots /* integer */) {
        // const cutoff = new Date("2022-07-01"); // date of GVL cutoff
        const epoch = new Date("1999-09-09"); // far past.  exact value irrelevant
        // const allowed_days = 30;
        // const spread_slots = 10;
        const one_day = 86400000;
        const elapsed_days = (now - cutoff) / one_day;
        var res;
        if (now < cutoff) {
            res = epoch;
        } else if (elapsed_days > allowed_days) {
            res = cutoff;
        } else {
            /* spread deterministically based on user_id and elapsed_days */
            const s = elapsed_days / allowed_days;
            const m = Math.max(1, Math.floor(spread_slots * (1 - s * s)));
            res = (Math.floor(elapsed_days) + Math.abs(user_id)) % m == 0 ? cutoff : epoch;
            // if (res === cutoff) {
            //     console.log('INVALIDATING');
            // }
            // console.log('m = ', m);
        }
        return res.toISOString().substring(0, 10);
    },
    init: function (options) {
        var o = {
            env: '',
            metricEnable: false,
            metricSample: 0,
            syncOnNotFound: false,
            gvl: {enable: false}
        };
        if (typeof options === 'object') {
            if (typeof options.env === 'string') o.env = options.env;
            if (typeof options.metricEnable === 'boolean') o.metricEnable = options.metricEnable;
            if (typeof options.metricSample === 'number') o.metricSample = options.metricSample;
            if (typeof options.syncOnNotFound === 'boolean') o.syncOnNotFound = options.syncOnNotFound;
            if (typeof options.gvl === 'object') o.gvl = options.gvl;
        }
        setTimeout(function (that) {
            that.env = o.env;
            that.initLoginUrls();
            that.metric.init(o.metricEnable, o.metricSample);
            if (that.metric.enabled) {
                var startTimeInit = performance.now();
                window.__tcfapi('addEventListener', 2, function(tcData, success) {
                    if (success) {
                        if (tcData.eventStatus === 'tcloaded') {
                            var tcloadedTime = performance.now() - startTimeInit;
                            // console.log('[ioliub] tcloaded time', tcloadedTime, 'ms');
                            that.metric.sendEvent('iubcons.tcloaded', tcloadedTime);
                        }
                    }
                });
            }
            console.log('[ioliub.init] metric enabled', that.metric.enabled);
            console.log('[ioliub.init] cookie router', that.getCookie(that.cookies.router));
            console.log('[ioliub.init] isauth', that.isauth());
            console.log('[ioliub.init] domain', that.domain());
            that.syncOnNotFound = o.syncOnNotFound;
            that._lastCookieTCFv2 = '';
            that.firstrun = true;
            that.bannerShown = false;
            that.esitoCheckPrivacy = null;

            console.log('[ioliub.init gvl mgmt]', o.gvl.enable);
            if (o.gvl.enable) {
                var uid = null;
                try { uid = window.__u.c; } catch (e) {}
                console.log('[ioliub.init gvl UID]', uid);
                console.log('[ioliub.init gvl config]', o.gvl);
                if (typeof uid === 'number') {
                    if (typeof o.gvl.force === 'object' && o.gvl.force.enable) {
                        if (typeof o.gvl.force.cutoff === 'string') {
                            var cutoff = new Date(o.gvl.force.cutoff);
                            var allowed_days = (typeof o.gvl.force.allowed_days === 'number')? o.gvl.force.allowed_days: 30;
                            var spread_slots = (typeof o.gvl.force.spread_slots === 'number')? o.gvl.force.spread_slots: 10;
                            var dryrun = (typeof o.gvl.force.dryrun === 'boolean')? o.gvl.force.dryrun: true;
                            var now = new Date();
                            var icb = that.gvlIcb(uid, now, cutoff, allowed_days, spread_slots);
                            console.log('[ioliub.init gvl icb]', icb);
                            if (dryrun) {
                                console.log('[ioliub.init gvl icb dryrun]');
                                var configuredCallbackOnPreferenceExpressed = function () {};
                                if (typeof window._iub.csConfiguration.callback.onPreferenceExpressed === 'function') {
                                    configuredCallbackOnPreferenceExpressed = window._iub.csConfiguration.callback.onPreferenceExpressed;
                                };
                                window._iub.csConfiguration.callback.onPreferenceExpressed = function (t) {
                                    configuredCallbackOnPreferenceExpressed(t);
                                    try {
                                        // console.log('*** iubiol dryrun onPreferenceExpressed consent timestamp', _iub.cs.consent.timestamp);
                                        var consentDate = new Date(_iub.cs.consent.timestamp);
                                        if (consentDate < new Date(icb)) {
                                            if (that.metric.enabled) that.metric.sendEvent('iubcons.gvl.test');
                                        }
                                    } catch (e) {
                                        console.error('[ioliub.init gvl icb dryrun');
                                    }
                                };
                            } else {
                                // window._iub.csConfiguration.invalidateConsentBefore = '2022-08-02'; --> no banner
                                // window._iub.csConfiguration.invalidateConsentBefore = '2022-08-04'; --> banner
                                window._iub.csConfiguration.invalidateConsentBefore = icb;
                                // if (this.metric.enabled) this.metric.sendEvent('iubcons.gvl.call');
                            }
                        }
                    } else {
                        console.log('[ioliub] newConsentAtVendorListUpdate', 360 - (Math.abs(uid) % o.gvl.T));
                        window._iub.csConfiguration.newConsentAtVendorListUpdate = 360 - (Math.abs(uid) % o.gvl.T);
                        // _iub.csConfiguration.newConsentAtVendorListUpdate = undefined;
                        // _iub.csConfiguration.newConsentAtVendorListUpdate = 0;
                    }
                }
            }

            if (that.getCookie(that.cookies.router)) {
                if (that.isauth()) {
                    console.log('[ioliub.init] load consent solution');
                    that.loadConsentSolution();
                } else {
                    console.log('[ioliub.init] load cookie solution');
                    // that.loadCookieSolution();
                    that.activateCookieSolution();
                }
            } else {
                console.log('[ioliub.init] load cookie solution');
                // that.loadCookieSolution();
                that.activateCookieSolution();
            }
        }, 0, this);
    },
    // Asynchronously activate the Cookie Solution
    activateCookieSolution: function () {
        // console.log('[ioliub.activateCookieSolution] pre cookie solution cookiePref', this.getCookie('_iub_cs-' + _iub.csConfiguration.cookiePolicyId));
        // console.log('[ioliub.activateCookieSolution] pre cookie solution cookieEuconsent', this.getCookie(this.cookies.euconsent_v2));
        var that = this;
        this.loadExternalScript(this.urls.iubenda_cs, function () {
            console.log('[ioliub.activateCookieSolution] iubenda cookie solution: ready');
            that.ready_callback();
            // that.loadExternalScript(that.urls.qciol);
        });
    },
    onCheckPrivacyHTTPSuccess: function (ctx) {
        return function (req, respTime) {
            console.log('onCheckPrivacyHTTPSuccess', req.status, req.response);
            var body = null, esito = null;
            if (ctx.metric.enabled) ctx.metric.sendEvent('iubcons.check.resptime', respTime);
            try { body = JSON.parse(req.responseText); } catch (e) { }
            if (!body) {
                console.error('[ioliub.onCheckPrivacyHTTPSuccess] bad response from ' + req.responseURL);
                if (ctx.metric.enabled) ctx.metric.sendEvent('iubcons.check.response:EMPTY');
                ctx.activateCookieSolution();
                return;
            }
            try { esito = body.esito; } catch (e) { }
            if (!esito) {
                console.error('[ioliub.onCheckPrivacyHTTPSuccess] bad response from ' + req.responseURL + ' - esito?');
                if (ctx.metric.enabled) ctx.metric.sendEvent('iubcons.check.esito:EMPTY');
                ctx.activateCookieSolution();
                return;
            }
            if (ctx.checkPrivacyCallbacks[esito]) {
                ctx.checkPrivacyCallbacks[esito](body, ctx, esito);
                if (ctx.metric.enabled) ctx.metric.sendEvent('iubcons.check.esito:' + esito);
            } else {
                console.error('[ioliub.onCheckPrivacyHTTPSuccess] bad response from ' + req.responseURL + ' - esito:' + esito);
                ctx.activateCookieSolution();
                if (ctx.metric.enabled) ctx.metric.sendEvent('iubcons.check.esito:UNKNOWN');
            }
        };
    },
    onCheckPrivacyHTTPError: function (ctx, timeout) {
        var detail = (timeout)? 'timeout': '';
        return function (e) {
            console.error('[ioliub.onCheckPrivacyHTTPError] ' + detail, e);
            ctx.activateCookieSolution();
            if (ctx.metric.enabled) {
                var evt = (timeout)? 'iubcons.check.timeout': 'iubcons.check.http_status_code:' + ctx.metric.cleanHttpStatusCode(e.target.status);
                ctx.metric.sendEvent(evt);
            }
        };
    },
    onCheckPrivacyHTTPLoadend: function () {
        console.log('[ioliub.onCheckPrivacyHTTPLoadend] always args', arguments);
    },
    cookiePreferencesName: function () {
        return '_iub_cs-' + window._iub.csConfiguration.cookiePolicyId;
    },
    setCookiePreferences: function (value) {
        // console.log('[ioliub.setCookiePreferences]', this.cookiePreferencesName(), value, 365, this.domain());
        this.setCookie(this.cookiePreferencesName(), value, 365, this.domain());
    },
    setCookieTcfV2: function (value) {
        // console.log('[ioliub.setCookieTcfV2]');
        this.setCookie(this.cookies.euconsent_v2, value, 365, this.domain());
    },
    eraseCookiesCS: function () {
        this.eraseCookie(this.cookiePreferencesName(), this.domain());
        this.eraseCookie(this.cookies.euconsent_v2, this.domain());
    },
    checkPrivacyCallbacks: {
        CORS_ORIGIN_EMPTY: function (body, ctx, esito) {
            console.error('[ioliub.checkPrivacyCallbacks] check privacy esito:' + esito);
            ctx.activateCookieSolution();
        },
        NOP: function (body, ctx, esito) {
            console.error('[ioliub.checkPrivacyCallbacks] check privacy esito:' + esito);
            ctx.activateCookieSolution();
        },
        USER_NOT_BETA_TESTER: function (body, ctx, esito) {
            console.error('[ioliub.checkPrivacyCallbacks] check privacy esito:' + esito);
            ctx.activateCookieSolution();
        },
        MISSING_ALL_SSO_COOKIES: function (body, ctx, esito) {
            console.error('[ioliub.checkPrivacyCallbacks] check privacy esito:' + esito);
            ctx.activateCookieSolution();
        },
        MISSING_BASIC_SSO_COOKIES: function (body, ctx, esito) {
            console.error('[ioliub.checkPrivacyCallbacks] check privacy esito:' + esito);
            ctx.activateCookieSolution();
        },
        NOTVALID_SSO_COOKIES: function (body, ctx, esito) {
            console.error('[ioliub.checkPrivacyCallbacks] check privacy esito:' + esito);
            ctx.activateCookieSolution();
        },
        USER_NOT_AUTHORIZED: function (body, ctx, esito) {
            console.error('[ioliub.checkPrivacyCallbacks] check privacy esito:' + esito);
            ctx.activateCookieSolution();
        },
        INTERNAL_ERROR: function (body, ctx, esito) {
            console.error('[ioliub.checkPrivacyCallbacks] check privacy esito:' + esito);
            ctx.activateCookieSolution();
        },
        IUBENDA_ERROR: function (body, ctx, esito) {
            console.error('[ioliub.checkPrivacyCallbacks] check privacy esito:' + esito);
            ctx.activateCookieSolution();
        },
        USER_CONSENT_NOT_FOUND: function (body, ctx, esito) {
            console.log('[ioliub.checkPrivacyCallbacks] check privacy esito:' + esito);
            if (ctx.syncOnNotFound) {
                ctx.esitoCheckPrivacy = 'USER_CONSENT_NOT_FOUND';
            } else {
                ctx.eraseCookiesCS();
            }
            ctx.activateCookieSolution();
        },
        IUBENDA_OBJECT_RESULT_NOT_VALID: function (body, ctx, esito) {
            console.error('[ioliub.checkPrivacyCallbacks] check privacy esito:' + esito);
            ctx.eraseCookiesCS();
            ctx.activateCookieSolution();
        },
        IUBENDA_OBJECT_SUBJECT_ID_RESULT_DIFFERENT: function (body, ctx, esito) {
            console.error('[ioliub.checkPrivacyCallbacks] check privacy esito:' + esito);
            ctx.eraseCookiesCS();
            ctx.activateCookieSolution();
        },
        IUBENDA_OBJECT_DATE_RESULT_NOT_VALID: function (body, ctx, esito) {
            console.error('[ioliub.checkPrivacyCallbacks] check privacy esito:' + esito);
            ctx.eraseCookiesCS();
            ctx.activateCookieSolution();
        },
        OK: function (body, ctx, esito) {
            // console.log('[ioliub.checkPrivacyCallbacks] *** _iub.cs.consent.purposes', _iub.cs.consent.purposes);
            console.log('[ioliub.checkPrivacyCallbacks] check privacy esito:' + esito);
            var cookiePolicyId = window._iub.csConfiguration.cookiePolicyId, consPreferences = null, cookiePreferencesContent,
                cookieTcfV2Content = null;
            try { consPreferences = body.iubenda_object.preferences; } catch (e) {}
            if (consPreferences) {
                try {
                    cookiePreferencesContent = { timestamp: consPreferences.cookieTimestamp, version: consPreferences.cookieVersion, purposes: consPreferences.cookiePurposes, id: cookiePolicyId };
                } catch (e) {}
                if (cookiePreferencesContent) {
                    ctx.setCookiePreferences(escape(JSON.stringify(cookiePreferencesContent)));
                } else {
                    console.error('[ioliub.checkPrivacy] bad preferences obj');
                }
                // TO RESTORE
                // if (_iub.csConfiguration.enableTcf) {
                if (true) {
                    try { cookieTcfV2Content = consPreferences.cookieTCFv2; } catch (e) {}
                    if (cookieTcfV2Content) {
                        ctx.setCookieTcfV2(cookieTcfV2Content);
                    } else {
                        console.error('[ioliub.checkPrivacy] reading cookieTcfV2Content');
                    }
                }
            } else {
                console.error('[ioliub.checkPrivacy] no preferences obj');
            }
            ctx.activateCookieSolution();
        }
    },
    esitoCheckPrivacy: null,
    checkPrivacy: function () {
        console.log('[ioliub.checkPrivacy]');
        this.ajax({
            method: 'GET',
            url: this.checkPrivacyUrl(),
            data: null,
            onsuccess: this.onCheckPrivacyHTTPSuccess(this),
            onerror: this.onCheckPrivacyHTTPError(this),
            // always: this.onCheckPrivacyHTTPLoadend,
            ontimeout: this.onCheckPrivacyHTTPError(this, true),
            track: this.metric.enabled
        });
        if (this.metric.enabled) this.metric.sendEvent('iubcons.check.call');
    },
    // Synchronizing service that runs at every pageview before the Cookie Solution is loaded
    // Used only to fetch a remote consent when a local consent doesn't exist before the Cookie Solution starts
    consPreflight: function () {
        console.log('[ioliub.consPreflight] started');
        var cookieTsCheckTcf = this.getCookie(this.cookies.ts_check_tcf),
            cookieTCFv2 = this.getCookie(this.cookies.euconsent_v2);
        console.log('[ioliub.consPreflight] cookie ts_check_tcf:', (cookieTsCheckTcf)? 'yes;': 'no;', 'cookie euconsent:', (cookieTCFv2)? 'yes': 'no');
        if (!cookieTsCheckTcf || !cookieTCFv2) {
            this.checkPrivacy();
        } else {
            console.log('[ioliub.consPreflight] found ts_check_tcf & euconsent_v2: no check_privacy call');
            this.activateCookieSolution();
        }
        if (this.metric.enabled) {
            var ck = (cookieTsCheckTcf)? 'yes': 'no';
            // console.log('^^^ sendEvent before', performance.now());
            this.metric.sendEvent('iubcons.cookie.ts_check_tcf:' + ck);
            // console.log('^^^ sendEvent after', performance.now());
        }
    },
    setPrivacyCallbacks: {
        CORS_ORIGIN_EMPTY: function (body, ctx, esito) {
            console.log('[ioliub.setPrivacyCallbacks] set privacy esito:' + esito);
        },
        USER_NOT_BETA_TESTER: function (body, ctx, esito) {
            console.log('[ioliub.setPrivacyCallbacks] set privacy esito:' + esito);
        },
        EMPTY_INPUT_PARAM: function (body, ctx, esito) {
            console.log('[ioliub.setPrivacyCallbacks] set privacy esito:' + esito);
        },
        NOTVALID_INPUT_PARAM: function (body, ctx, esito) {
            console.log('[ioliub.setPrivacyCallbacks] set privacy esito:' + esito);
        },
        EMPTY_IUBENDA_OBJECT_INPUT_PARAM: function (body, ctx, esito) {
            console.log('[ioliub.setPrivacyCallbacks] set privacy esito:' + esito);
        },
        EMPTY_OBJECT_PREFERENCES_PARAM: function (body, ctx, esito) {
            console.log('[ioliub.setPrivacyCallbacks] set privacy esito:' + esito);
        },
        EMPTY_OBJECT_EUCONSENT_PARAM: function (body, ctx, esito) {
            console.log('[ioliub.setPrivacyCallbacks] set privacy esito:' + esito);
        },
        EUCONSENT_DECODE_FAILED: function (body, ctx, esito) {
            console.log('[ioliub.setPrivacyCallbacks] set privacy esito:' + esito);
        },
        MISSING_ALL_SSO_COOKIES: function (body, ctx, esito) {
            console.log('[ioliub.setPrivacyCallbacks] set privacy esito:' + esito);
        },
        MISSING_BASIC_SSO_COOKIES: function (body, ctx, esito) {
            console.log('[ioliub.setPrivacyCallbacks] set privacy esito:' + esito);
        },
        NOTVALID_SSO_COOKIES: function (body, ctx, esito) {
            console.log('[ioliub.setPrivacyCallbacks] set privacy esito:' + esito);
        },
        USER_NOT_AUTHORIZED: function (body, ctx, esito) {
            console.log('[ioliub.setPrivacyCallbacks] set privacy esito:' + esito);
        },
        INTERNAL_ERROR: function (body, ctx, esito) {
            console.log('[ioliub.setPrivacyCallbacks] set privacy esito:' + esito);
        },
        IUBENDA_ERROR: function (body, ctx, esito) {
            console.log('[ioliub.setPrivacyCallbacks] set privacy esito:' + esito);
        },
        IUBENDA_SUBJECTID_RESULT_NOTVALID: function (body, ctx, esito) {
            console.log('[ioliub.setPrivacyCallbacks] set privacy esito:' + esito);
        },
        IUBENDA_DATE_RESULT_NOTVALID: function (body, ctx, esito) {
            console.log('[ioliub.setPrivacyCallbacks] set privacy esito:' + esito);
        },
        PREVIOUS_EUCONSENT_DECODE_FAILED: function (body, ctx, esito) {
            console.log('[ioliub.setPrivacyCallbacks] set privacy esito:' + esito);
        },
        OK: function (body, ctx, esito) {
            console.log('[ioliub.setPrivacyCallbacks] set privacy esito:' + esito);
        }
    },
    onSetPrivacyHTTPSuccess: function (ctx) {
        return function (req, respTime) {
            console.log('[ioliub.onSetPrivacyHTTPSuccess]');
            var body = null, esito = null;
            if (ctx.metric.enabled) ctx.metric.sendEvent('iubcons.set.resptime', respTime);
            try { body = JSON.parse(req.responseText); } catch (e) { console.error(e); }
            if (!body) {
                console.error('[ioliub.onSetPrivacyHTTPSuccess] bad response from ' + req.responseURL);
                if (ctx.metric.enabled) ctx.metric.sendEvent('iubcons.set.response:EMPTY');
                return;
            }
            try { esito = body.esito; } catch (e) { }
            if (!esito) {
                console.error('[ioliub.onSetPrivacyHTTPSuccess] bad response from ' + req.responseURL + ' - esito?');
                if (ctx.metric.enabled) ctx.metric.sendEvent('iubcons.set.esito:EMPTY');
                return;
            }
            if (ctx.setPrivacyCallbacks[esito]) {
                ctx.setPrivacyCallbacks[esito](body, ctx, esito);
                if (ctx.metric.enabled) ctx.metric.sendEvent('iubcons.set.esito:' + esito);
            } else {
                console.error('[ioliub.onSetPrivacyHTTPSuccess] bad response from ' + req.responseURL + ' - esito:' + esito);
                if (ctx.metric.enabled) ctx.metric.sendEvent('iubcons.set.esito:UNKNOWN');
            }
        };
    },
    onSetPrivacyHTTPError: function (ctx, timeout) {
        var detail = (timeout)? 'timeout': '';
        return function (e) {
            console.error('[ioliub.onSetPrivacyHTTPError] ' + detail, e);
            if (ctx.metric.enabled) {
                var evt = (timeout)? 'iubcons.set.timeout': 'iubcons.set.http_status_code:' + ctx.metric.cleanHttpStatusCode(e.target.status);
                ctx.metric.sendEvent(evt);
            }
        };
    },
    onSetPrivacyHTTPLoadend: function () {},
    setPrivacy: function (data) {
        console.log('[ioliub.setPrivacy]');
        this.ajax({
            method: 'POST',
            url: this.setPrivacyUrl(),
            data: data,
            onsuccess: this.onSetPrivacyHTTPSuccess(this),
            onerror: this.onSetPrivacyHTTPError(this),
            // always: this.onSetPrivacyHTTPLoadend,
            ontimeout: this.onSetPrivacyHTTPError(this, true),
            track: this.metric.enabled
        });
        if (this.metric.enabled) this.metric.sendEvent('iubcons.set.call');
    },
    consPreferencesPost: function (preferences/*, cookiePreferencesContent*/) {
        var data = {
            consent: {
                subject: '<tbd>',
                preferences: preferences,
                proofs: [{
                    content: window._iub.csConfiguration
                    // form: _iub.csConfiguration.cookiePolicyId
                }],
                legal_notices: [{
                    identifier: 'cookie_policy'
                }],
                siteId: window._iub.csConfiguration.siteId
            },
            // cookiePreferencesContent: cookiePreferencesContent,
            cookieTCFv2_previous: this._lastCookieTCFv2
        };
        this.setPrivacy(data);
    },
    // Add the TCF (if active) values to a preferences object before pushing to the ConS (invoked via callback)
    tcfAddPreferences: function (preferences, callback) {
        if (!window.__tcfapi) {
            // Do nothing if the TCF is not active
            return callback();
        }

        // var that = this;
        window.__tcfapi('getTCData', 2, function (res) {
            // Append TCF value to the preferences object
            preferences.cookieTCFv2 = res.tcString;
            callback();
        });
    },
    consSyncronizer: function () {
        console.log('[ioliub.consSyncronizer]');

        // Gather all the local consent info
        var cookiePurposes = window._iub.cs.consent.purposes,
            cookieTimestamp = window._iub.cs.consent.timestamp,
            cookieVersion = window._iub.cs.consent.version,
            cookiePolicyId = window._iub.cs.consent.id;

        var that = this;

        // something was changed locally, push the updated consent to ConS
        // console.log('[ioliub.consSyncronizer] push to ConS');
        var cookiePreferences = { cookiePurposes: cookiePurposes, cookieTimestamp: cookieTimestamp, cookieVersion: cookieVersion, cookiePolicyId: cookiePolicyId };
        // var cookiePreferencesContent = escape(JSON.stringify(cookiePreferences));
        this.tcfAddPreferences(cookiePreferences, function () {
            that.consPreferencesPost(cookiePreferences/*, cookiePreferencesContent*/);
        });

    },
    lastCookieTCFv2: function () {
        console.log('[ioliub.lastCookieTCFv2] ' + this.getCookie(this.cookies.euconsent_v2));
        this._lastCookieTCFv2 = this.getCookie(this.cookies.euconsent_v2);
    },
    metric: {
        init: function (enable, sample) {
            var sampleEnable = (Math.random() >= sample)? false: true;
            this.enabled = enable && sampleEnable;
        },
        enabled: false,
        sendEvent: (function () {
            var res;
            try {res = screen.width;} catch(er){res = 0;}
            return function (evt, val){
                var tme, dom;
                try {tme = Date.now();} catch(er){tme = 0;}
                try {if(typeof val === 'undefined') val = Math.floor(performance.now());} catch(er){val=0;}
                try {dom = window.location.hostname;} catch(er){dom = 'error';}
                var url = 'https://evnt.iol.it/v2?&pgnf='+dom+'%2Call%2C%2C%2C%2C0%2C'+res+'%2C0%2C%2Cb%2C0%2C%2C'+evt+'%2C'+val+'&nc='+tme;
                var i=new Image();
                i.src = url;
                console.log('[ioliub.metric] '+evt+' '+val);
            };
        })(),
        cleanHttpStatusCode: function (stcode) {
            var cleancode = 'UNKNOWN';
            if (typeof stcode === 'number') {
                if (stcode < 600) cleancode = stcode;
            }
            return cleancode;
        }
    }
};
_ioliub.init({
    // env: '',
    metricEnable: true,
    metricSample: 1, // 1.0(100%), 0.1(10%), 0.01(1%), 0.0(0%)
    syncOnNotFound: true,
    gvl: {
        enable: true, // false-->newConsentAtVendorListUpdate is read from cfg; true-->newConsentAtVendorListUpdate is changed based on the UID
        // caseA) GVL non varia per 360gg
        // caseB) necessario aggiornare la GVL
        force: {
            enable: false,
            cutoff: '2023-12-01',
            allowed_days: 30,
            spread_slots: 10,
            dryrun: true
        },
        T: 10  // values: 30 or 45 or 60
    }
});
