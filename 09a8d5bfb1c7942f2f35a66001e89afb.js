/* eslint-disable */

// Start of Async Drift Code

"use strict";

// Widget map with corresponding widget language.
const driftWidgetIdMap = window.drupalSettings.boxDriftIdentifiers;
const useDriftFacade = window.drupalSettings.useDriftFacade;

function loadDrift (driftFacade) {
    // Code snippet directly from Drift
    !function() {
        var t = window.driftt = window.drift = window.driftt || [];
        if (!t.init) {
            if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
            t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ],
                t.factory = function(e) {
                    return function() {
                        var n = Array.prototype.slice.call(arguments);
                        return n.unshift(e), t.push(n), t;
                    };
                }, t.methods.forEach(function(e) {
                t[e] = t.factory(e);
            }), t.load = function(t) {
                var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
                o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
                var i = document.getElementsByTagName("script")[0];
                i.parentNode.insertBefore(o, i);
            };
        }
    }();
    // End of snippet

    drift.SNIPPET_VERSION = '0.3.1';

    if (typeof driftWidgetIdMap[boxBootstrap.currUrlLang] !== 'undefined') {
      // Pick the matching language.
      drift.load(driftWidgetIdMap[boxBootstrap.currUrlLang]);
    } else {
      // Defaults to english.
      drift.load(driftWidgetIdMap.en);
    }

    // Create and event when Drift is loaded.
    var driftIsReady = new CustomEvent("driftIsReady");

    // End of Async Drift Code

    function positionDrift(driftElement, gdprConsent) {
        const driftElementRect = driftElement.getBoundingClientRect();
        const gdprConsentRect = gdprConsent.getBoundingClientRect();

        if (gdprConsentRect.right >= driftElementRect.left) {
            driftElement.style.bottom = `${gdprConsentRect.height}px`;
        }
    }

    drift.on('ready', function() {
        // Trigger custom event.
        document.body.dispatchEvent(driftIsReady);

        const driftElement = document.getElementById('drift-frame-controller');
        const gdprConsent = document.getElementById('gdpr-consent');

        const attributes = {};
        let cookiePrefix = '_uc_';

        if (driftElement && gdprConsent) {
            if (window.ResizeObserver) {
                const observer = new ResizeObserver(function() {
                    positionDrift(driftElement, gdprConsent);
                });
                observer.observe(driftElement);
            } else {
                // IE workaround
                setTimeout(function() {
                    positionDrift(driftElement, gdprConsent);
                }, 5000);
            }
        }

        if (location.hostname.match('boxworks')) {
            cookiePrefix = '_mkto_';
            attributes.id = Cookies.get(cookiePrefix + 'utm_id') ? Cookies.get(cookiePrefix + 'utm_id') : undefined;
        } else {
            attributes.id = Cookies.get(cookiePrefix + 'id') ? Cookies.get(cookiePrefix + 'id') : undefined;
        }

        // UTM query string parameters.
        attributes.utm_source = Cookies.get(cookiePrefix + 'utm_source') ? Cookies.get(cookiePrefix + 'utm_source') : undefined;
        attributes.utm_content = Cookies.get(cookiePrefix + 'utm_content') ? Cookies.get(cookiePrefix + 'utm_content') : undefined;
        attributes.utm_medium = Cookies.get(cookiePrefix + 'utm_medium') ? Cookies.get(cookiePrefix + 'utm_medium') : undefined;
        attributes.utm_keyword = Cookies.get(cookiePrefix + 'utm_keyword') ? Cookies.get(cookiePrefix + 'utm_keyword') : undefined;
        attributes.utm_theme = Cookies.get('_uc_utm_theme') ? Cookies.get('_uc_utm_theme') : undefined;
        attributes.utm_cmpid = Cookies.get('_uc_utm_cmpid') ? Cookies.get('_uc_utm_cmpid') : undefined;
        attributes.utm_campaign = Cookies.get(cookiePrefix + 'utm_campaign') ? Cookies.get(cookiePrefix + 'utm_campaign') : undefined;

        // Box Visitor Id.
        attributes.box_visitor_id = Cookies.get('box_visitor_id') ? Cookies.get('box_visitor_id') : undefined;

        for (let utm in attributes) {
            if (attributes.hasOwnProperty(utm) && attributes[utm] === undefined) {
                delete attributes[utm];
            }
        }

        if (Object.keys(attributes).length > 0) {
            drift.api.setUserAttributes(attributes);
        }

        if (driftFacade) {
            driftFacade.classList.add('drift-facade-hidden');
            drift.api.sidebar.open();
        }
    });
}

function loadDriftFacade() {
    function removeFacade() {
        driftFacade.classList.remove('drift-expanded');

        // expired in 30 minutes
        Cookies.set(closedCookie, 'true', { expires: 1/48 });
    }

    function openDrift() {
        removeFacade();

        // expired in 30 minutes
        Cookies.set(openedCookie, 'true', { expires: 1/48 });
        loadDrift(driftFacade);
    }

    const md = new MobileDetect(window.navigator.userAgent);
    const cookiePrefix = 'driftFacade_';
    const closedCookie = cookiePrefix + 'closed';
    const openedCookie = cookiePrefix + 'opened';

    const isFacadeClosed = Cookies.get(closedCookie);
    const wasDriftOpened = Cookies.get(openedCookie);

    if (wasDriftOpened || !!md.mobile() === false || !useDriftFacade) {
        loadDrift();
        return false;
    }

    if (isFacadeClosed) {
        return false;
    }

    const driftCssId = 'driftCSS';
    if (!document.getElementById(driftCssId))
    {
        const headElement = document.getElementsByTagName('head')[0];
        const linkElement = document.createElement('link');
        linkElement.id = driftCssId;
        linkElement.rel  = 'stylesheet';
        linkElement.type = 'text/css';
        linkElement.href = boxBootstrap.boxDriftCSS;
        linkElement.media = 'print';
        linkElement.setAttribute('onload', 'this.media=\'all\'');
        headElement.appendChild(linkElement);
    }

    const driftFacade = document.createElement('div');
    const driftChatBubble = document.createElement('div');
    const driftChatMesssage = document.createElement('button');
    const driftChatMesssageCount = document.createElement('div');
    const driftChatClose = document.createElement('button');
    const messageText = 'Welcome to Box! &#128075; &nbsp;Looking to simplify how you work with secure collaboration?';

    driftFacade.classList.add('drift-facade');
    driftChatBubble.classList.add('drift-chat-bubble');
    driftChatMesssage.classList.add('drift-chat-message');
    driftChatMesssageCount.classList.add('drift-chat-message-count');
    driftChatClose.classList.add('drift-chat-close');

    driftChatMesssage.innerHTML = '<p>' + messageText + '</p>';
    driftChatMesssageCount.innerHTML = '1';
    driftChatClose.innerHTML = '<svg width="10" height="10" viewBox="0 0 23 23" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" fill="white" d="M9.34583 11.2L0.384011 2.23818C-0.128004 1.72617 -0.128004 0.896026 0.384011 0.384011C0.896026 -0.128004 1.72617 -0.128004 2.23818 0.384011L11.2 9.34583L20.1618 0.384011C20.6738 -0.128004 21.504 -0.128004 22.016 0.384011C22.528 0.896026 22.528 1.72617 22.016 2.23818L13.0542 11.2L22.016 20.1618C22.528 20.6738 22.528 21.504 22.016 22.016C21.504 22.528 20.6738 22.528 20.1618 22.016L11.2 13.0542L2.23818 22.016C1.72617 22.528 0.896026 22.528 0.384011 22.016C-0.128003 21.504 -0.128003 20.6738 0.384011 20.1618L9.34583 11.2Z"></path></svg>';

    driftChatBubble.appendChild(driftChatMesssageCount);
    driftFacade.appendChild(driftChatBubble);
    driftFacade.appendChild(driftChatMesssage);
    driftFacade.appendChild(driftChatClose);
    document.body.appendChild(driftFacade);

    setTimeout(function() {
        !isFacadeClosed && driftFacade.classList.add('drift-expanded');
    }, 500);

    driftChatBubble.addEventListener('click', openDrift);
    driftChatMesssage.addEventListener('click', openDrift);
    driftChatClose.addEventListener('click', removeFacade);
}

window.addEventListener('load', loadDriftFacade);
