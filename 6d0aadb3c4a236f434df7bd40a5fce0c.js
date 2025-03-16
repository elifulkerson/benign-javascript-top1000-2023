var TWAGORAINARTICLE = TWAGORAINARTICLE || function() {

    var getHTScriptElement = function() {
        var hTClass = 'pa-ht-class';
        if (document.currentScript)
            return document.currentScript;
        else {

            var scripts = document.getElementsByTagName('script');
            var currentHTag = 'pahter.tech/c/hespress.com.js';
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


    var config = {"site_name": "hespress.com", "sco": {"paSellerId": "107919", "paOwns": "Owned & Operated"}, "rules": [{"name": "inarticle pages desktop", "priority": 3, "type": "Magic", "product": {"magic": {"enabled": true, "clsOptimization": false, "formats": {"inarticle": {"pmp": {"paragraphLimit": 2, "placementId": "23917912", "probability": 0, "tagNames": ["p", "br", "li", "u"], "selectorType": "querySelector", "selectorName": "div.article-content", "isLight": true}, "direct": {"paragraphLimit": 2, "placementId": "", "probability": 0, "tagNames": ["p", "br", "h2"], "selectorType": "querySelector", "selectorName": ""}}, "vast": {"pmp": {"paragraphLimit": 2, "placementId": "23917824,//ads.stickyadstv.com/vast/vpaid-adapter/23627186,//adx.adform.net/adx/?mid=1279957&t=2,//video-ads.rubiconproject.com/video/11498/138376/2310994/203/vast.xml?tg_c.language=ar&p_aso.video.api=2&adtype=video&p_aso.video.ext.skip=&p_aso.video.ext.skipdelay=&p_aso.video.maxduration=&p_aso.video.protocols=,//vpaid.pubmatic.com/ads/video/vadtag.html?adtype=13&pubId=156400&siteId=916719&adId=4243725&vadFmt=3&vapi=2&vminl=1&vmaxl=500&vh=350&vw=620&placement=3&vtype=0&vpos=1&vplay=2&vskip=0&vcom=0&vfmt=1+3+5+6+7&sec=1&gdpr=&gdpr_consent=&us_privacy=&kadpageurl=%%PA_PAGE_URL%%", "probability": 100, "tagNames": ["p", "br", "h2", "div"], "selectorType": "querySelector", "selectorName": "article[id^='post-'] > div.article-content"}, "direct": {"paragraphLimit": 2, "placementId": "", "probability": 0, "tagNames": ["p", "br", "h2"], "selectorType": "querySelector", "selectorName": ""}, "incorner": {"enabled": true, "incorner_probability": 100, "position": "left", "effect": "detach_to_incorner"}}}, "rulePassback": "<script async src=\"https://securepubads.g.doubleclick.net/tag/js/gpt.js\"></script><script>  var inArticleSlot = null;  window.googletag = window.googletag || {cmd: []};  googletag.cmd.push(function() {    inArticleSlot = googletag.defineSlot('/1025510,153418548/23917824_hespress.com_inarticle_300x250', [[640, 480], [300, 250], [720, 300], [336, 280], [640, 360]], 'div-gpt-ad-1644569051048-0').addService(googletag.pubads()).setCollapseEmptyDiv(true,true);    googletag.pubads().enableSingleRequest();    googletag.enableServices();  });</script><!--/1025510,153418548/23917824_hespress.com_inarticle_300x250--><div id='div-gpt-ad-1644569051048-0'>  <script>    googletag.cmd.push(function() {if (googletag.pubads().isInitialLoadDisabled()) {googletag.pubads().refresh([inArticleSlot]);} else {googletag.display('div-gpt-ad-1644569051048-0');}});  </script></div>", "adMngrPassback": "<!-- PA Ad Tag - hespress.com_inarticle-adtag_300x250 <- DO NOT MODIFY --><script src=\"//ads.projectagoraservices.com/?id=18048\" type=\"text/javascript\"></script><!-- End PA Ad Tag -->"}}, "targeting": {"device_targeting": "desktop", "url_targeting": {"url": {"contains": ["hespress.com/\u0623\u0643\u0627\u062f\u064a\u0645\u064a\u0629-\u0627\u0644\u0645\u0645\u0644\u0643\u0629-\u062a\u0624\u0637\u0631-\u0637\u0644\u0628\u0629-\u062f\u0643\u0627\u062a\u0631\u0629-\u0644\u0628\u0646-941861.html"]}}}}, {"name": "inarticle pages mobile", "priority": 3, "type": "Magic", "product": {"magic": {"enabled": true, "clsOptimization": false, "formats": {"inarticle": {"pmp": {"paragraphLimit": 2, "placementId": "23917912", "probability": 0, "tagNames": ["p", "br", "h2"], "selectorType": "querySelector", "selectorName": "article[id^='post-'] > div.article-content", "isLight": true, "socialCardsEnabled": true}, "direct": {"paragraphLimit": 2, "placementId": "", "probability": 0, "tagNames": ["p", "br", "h2"], "selectorType": "querySelector", "selectorName": ""}}, "vast": {"pmp": {"paragraphLimit": 2, "placementId": "23917824,//ads.stickyadstv.com/vast/vpaid-adapter/23627186,//adx.adform.net/adx/?mid=1279957&t=2,//video-ads.rubiconproject.com/video/11498/138376/2310994/203/vast.xml?tg_c.language=ar&p_aso.video.api=2&adtype=video&p_aso.video.ext.skip=&p_aso.video.ext.skipdelay=&p_aso.video.maxduration=&p_aso.video.protocols=,//vpaid.pubmatic.com/ads/video/vadtag.html?adtype=13&pubId=156400&siteId=916719&adId=4243725&vadFmt=3&vapi=2&vminl=1&vmaxl=500&vh=350&vw=620&placement=3&vtype=0&vpos=1&vplay=2&vskip=0&vcom=0&vfmt=1+3+5+6+7&sec=1&gdpr=&gdpr_consent=&us_privacy=&kadpageurl=%%PA_PAGE_URL%%", "probability": 100, "tagNames": ["p", "br", "h2", "div"], "selectorType": "querySelector", "selectorName": "div.article-content", "height_video": {"enabled": true}}, "direct": {"paragraphLimit": 2, "placementId": "", "probability": 0, "tagNames": ["p", "br", "h2"], "selectorType": "querySelector", "selectorName": ""}, "incorner": {"enabled": true, "incorner_probability": 100, "position": "left", "effect": "detach_to_incorner"}}}, "rulePassback": "<script async src=\"https://securepubads.g.doubleclick.net/tag/js/gpt.js\"></script><script>  var inArticleSlot = null;  window.googletag = window.googletag || {cmd: []};  googletag.cmd.push(function() {    inArticleSlot = googletag.defineSlot('/1025510,153418548/23917824_hespress.com_inarticle_300x250', [[300, 250], [336, 280]], 'div-gpt-ad-1644569051048-0').addService(googletag.pubads()).setCollapseEmptyDiv(true,true);    googletag.pubads().enableSingleRequest();    googletag.enableServices();  });</script><!--/1025510,153418548/23917824_hespress.com_inarticle_300x250--><div id='div-gpt-ad-1644569051048-0'>  <script>    googletag.cmd.push(function() {if (googletag.pubads().isInitialLoadDisabled()) {googletag.pubads().refresh([inArticleSlot]);} else {googletag.display('div-gpt-ad-1644569051048-0');}});  </script></div>", "adMngrPassback": "<!-- PA Ad Tag - hespress.com_inarticle-adtag_300x250 <- DO NOT MODIFY --><script src=\"//ads.projectagoraservices.com/?id=18048\" type=\"text/javascript\"></script><!-- End PA Ad Tag -->", "viewability_height": {"enabled": false, "height": 96}}}, "targeting": {"device_targeting": "mobile", "url_targeting": {"url": {"contains": ["hespress.com/\u0623\u0643\u0627\u062f\u064a\u0645\u064a\u0629-\u0627\u0644\u0645\u0645\u0644\u0643\u0629-\u062a\u0624\u0637\u0631-\u0637\u0644\u0628\u0629-\u062f\u0643\u0627\u062a\u0631\u0629-\u0644\u0628\u0646-941861.html"]}}}}, {"name": "taboola widget", "priority": 3, "type": "Taboola", "product": {"Taboola": {"enabled": false, "name": "hespress-hespressar", "tags": [{"selector": ".box-tags", "position": "after", "widgets": [{"widgetType": "hybrid", "mode": "alternating-hespress", "containerId": "taboola-alternating-below-article", "placement": "Alternating Below Article"}]}], "pageLevelTracking": {"enabled": true}}}}]};

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