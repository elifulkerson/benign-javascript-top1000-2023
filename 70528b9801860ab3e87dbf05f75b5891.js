var TWAGORAINARTICLE = TWAGORAINARTICLE || function() {

    var getHTScriptElement = function() {
        var hTClass = 'pa-ht-class';
        if (document.currentScript)
            return document.currentScript;
        else {

            var scripts = document.getElementsByTagName('script');
            var currentHTag = 'agorahtag.tech/c/elmogaz.com.js';
            var sl = scripts.length;
            for (var s = 0; s < sl; s++) {
                if ((scripts[s].src.indexOf(currentHTag) !== -1) && !scripts[s].classList.contains(hTClass)) {
                    scripts[s].classList.add(hTClass);
                    break;
                }
            }

            return scripts[s];
        }
    }

    var getQueryString = function(script) {
        var queryString = script.src.replace(/^[^\?]+\??/, '');
        return '?' + queryString;
    }

    var getParameterByName = function(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        try {
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
        } catch (err) {
            return null;
        }
    }

    var getPartnerSCOfromHTUrl = function(currentScript) {
        var schain = null;
        var currentHTScript = currentScript;
        var qS = getQueryString(currentHTScript);
        if (qS) schain = getParameterByName('schain', qS);

        return schain;

    }


    var config = {"sco": {"paSellerId": "105910", "paOwns": "Owned & Operated"}, "site_name": "elmogaz.com", "rules": [{"name": "taboola widget", "priority": 3, "type": "Taboola", "product": {"Taboola": {"enabled": false, "name": "elmogazmena-f20255526", "tags": [{"selector": "#sBDY > div > article > div.sharetable", "position": "after", "widgets": [{"widgetType": "sponsored", "mode": "sc-elmogaz", "containerId": "taboola-sponsored-below-article", "placement": "Sponsored Below Article"}]}], "pageLevelTracking": {"enabled": true}}}}, {"name": "inarticle pages desktop", "priority": 3, "type": "Magic", "product": {"magic": {"enabled": true, "formats": {"inarticle": {"pmp": {"paragraphLimit": 2, "placementId": "", "probability": 0, "tagNames": ["p", "br", "li", "u"], "selectorType": "querySelector", "selectorName": ""}, "direct": {"paragraphLimit": 2, "placementId": "", "probability": 0, "tagNames": ["p", "br", "h2"], "selectorType": "querySelector", "selectorName": ""}}, "vast": {"pmp": {"paragraphLimit": 2, "placementId": "//ads.stickyadstv.com/vast/vpaid-adapter/12277665,//adx.adform.net/adx/?mid=878598&t=2,//video-ads.rubiconproject.com/video/11498/138376/1841598/203/vast.xml,//vpaid.pubmatic.com/ads/video/vadtag.html?adtype=13&pubId=156400&siteId=752868&adId=3196462&vadFmt=3&vapi=2&vminl=1&vmaxl=500&vh=350&vw=620&placement=3&vtype=0&vpos=1&vskip=0&vcom=0&vfmt=1+3+4+5+6+7&sec=1&gdpr=&gdpr_consent=&us_privacy=&kadpageurl=%%PA_PAGE_URL%%", "probability": 100, "tagNames": ["p", "br"], "selectorType": "querySelector", "selectorName": "#topic_content"}, "direct": {"paragraphLimit": 2, "placementId": "", "probability": 0, "tagNames": ["p"], "selectorType": "querySelector", "selectorName": ""}}}, "rulePassback": "<!-- PA Ad Tag - elmogaz.com_inarticle-adtag_300x250 <- DO NOT MODIFY --><script src=\"//ads.projectagoraservices.com/?id=11954\" type=\"text/javascript\"></script><!-- End PA Ad Tag -->", "adMngrPassback": ""}}, "targeting": {"device_targeting": "desktop"}}, {"name": "inarticle pages desktop test Appnexus", "priority": 4, "type": "Magic", "product": {"magic": {"enabled": false, "formats": {"inarticle": {"pmp": {"paragraphLimit": 2, "placementId": "", "probability": 0, "tagNames": ["p", "br", "li", "u"], "selectorType": "querySelector", "selectorName": ""}, "direct": {"paragraphLimit": 2, "placementId": "", "probability": 0, "tagNames": ["p", "br", "h2"], "selectorType": "querySelector", "selectorName": ""}}, "vast": {"pmp": {"paragraphLimit": 2, "placementId": "20061984", "probability": 100, "tagNames": ["p", "br"], "selectorType": "querySelector", "selectorName": "#topic_content"}, "direct": {"paragraphLimit": 2, "placementId": "", "probability": 0, "tagNames": ["p"], "selectorType": "querySelector", "selectorName": ""}}}}}, "targeting": {"device_targeting": "desktop", "url_targeting": {"url": {"contains": ["elmogaz.com/648267"]}}}}, {"name": "inarticle pages mobile", "priority": 3, "type": "Magic", "product": {"magic": {"enabled": true, "formats": {"inarticle": {"pmp": {"paragraphLimit": 2, "placementId": "", "probability": 0, "tagNames": ["p", "br", "h2"], "selectorType": "querySelector", "selectorName": ""}, "direct": {"paragraphLimit": 2, "placementId": "", "probability": 0, "tagNames": ["p", "br", "h2"], "selectorType": "querySelector", "selectorName": ""}}, "vast": {"pmp": {"paragraphLimit": 2, "placementId": "//ads.stickyadstv.com/vast/vpaid-adapter/12277665,//adx.adform.net/adx/?mid=878598&t=2,//video-ads.rubiconproject.com/video/11498/138376/1841598/203/vast.xml,//vpaid.pubmatic.com/ads/video/vadtag.html?adtype=13&pubId=156400&siteId=752868&adId=3196462&vadFmt=3&vapi=2&vminl=1&vmaxl=500&vh=350&vw=620&placement=3&vtype=0&vpos=1&vskip=0&vcom=0&vfmt=1+3+4+5+6+7&sec=1&gdpr=&gdpr_consent=&us_privacy=&kadpageurl=%%PA_PAGE_URL%%", "probability": 100, "tagNames": ["p", "br"], "selectorType": "querySelector", "selectorName": "#topic_content"}, "direct": {"paragraphLimit": 2, "placementId": "", "probability": 0, "tagNames": ["p", "br", "h2"], "selectorType": "querySelector", "selectorName": ""}}}, "rulePassback": "<!-- PA Ad Tag - elmogaz.com_inarticle-adtag_300x250 <- DO NOT MODIFY --><script src=\"//ads.projectagoraservices.com/?id=11954\" type=\"text/javascript\"></script><!-- End PA Ad Tag -->", "adMngrPassback": ""}}, "targeting": {"device_targeting": "mobile"}}, {"name": "inarticle pages mobile test Appnexus", "priority": 4, "type": "Magic", "product": {"magic": {"enabled": false, "formats": {"inarticle": {"pmp": {"paragraphLimit": 2, "placementId": "", "probability": 0, "tagNames": ["p", "br", "h2"], "selectorType": "querySelector", "selectorName": ""}, "direct": {"paragraphLimit": 2, "placementId": "", "probability": 0, "tagNames": ["p", "br", "h2"], "selectorType": "querySelector", "selectorName": ""}}, "vast": {"pmp": {"paragraphLimit": 2, "placementId": "20061984", "probability": 100, "tagNames": ["p", "br"], "selectorType": "querySelector", "selectorName": "#topic_content"}, "direct": {"paragraphLimit": 2, "placementId": "", "probability": 0, "tagNames": ["p", "br", "h2"], "selectorType": "querySelector", "selectorName": ""}}}}}, "targeting": {"device_targeting": "mobile", "url_targeting": {"url": {"contains": ["elmogaz.com/648267"]}}}}, {"name": "Custom script - Taboola CSS - desktop", "priority": 3, "type": "CustomScript", "product": {"CustomScript": {"scripts": [{"code": "<script>var addcss = function(css){    var head = document.getElementsByTagName('head')[0];    var s = document.createElement('style');    s.setAttribute('type', 'text/css');    if (s.styleSheet) {           s.styleSheet.cssText = css;    } else {                        s.appendChild(document.createTextNode(css));    }    head.appendChild(s); };addcss('[id*=\"postbid_if_\"] {width: unset!important;} [id*=\"patag_parent_\"] {width: unset!important;}');</script>"}]}}, "targeting": {"device_targeting": "desktop"}}]};

    var currentHTScript = getHTScriptElement();

    return {
        getConfig: function() {
            return config;
        },
        getPartnersSCO: function() {
            return getPartnerSCOfromHTUrl(currentHTScript);
        }
    }

}();

!function (e, t, a) { var n, r = e.getElementsByTagName(t)[0]; e.getElementById("pa-tag") || ((n = e.createElement(t)).id = "pa-tag", n.src = "//palibzh.tech/libs/projectagora.min.js", r.parentNode.insertBefore(n, r)) }(document, "script");