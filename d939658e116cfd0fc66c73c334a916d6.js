/* DFP */
    function setCookie(cname, cvalue, exdays, domain) { var d = new Date(); d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000)); var domain = "domain=" + domain + ";"; if (domain == '') { domain = ''; } var expires = "expires=" + d.toUTCString() + ";"; if (exdays == '0') { expires = ''; } document.cookie = cname + "=" + cvalue + "; " + expires + domain + " path=/"; }
    function getCookie(cname) { var name = cname + "="; var ca = document.cookie.split(';'); for (var i = 0; i < ca.length; i++) { var c = ca[i]; while (c.charAt(0) == ' ') c = c.substring(1); if (c.indexOf(name) == 0) return c.substring(name.length, c.length); } return ""; }
    function generateString(length) { return 'publisherprovidedids' + Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1)) + 'ndtvids'; }
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
    var utm_campaign = getParameterByName('utm_campaign');
/* DFP */


    googletag.cmd.push(function () {


        window.slot_1 = googletag.defineSlot('/1068322/NDTV_Homepage_728x90_ATF', [[970, 90], [728, 90], 'fluid'], 'adslot728x90ATF').addService(googletag.pubads());

        window.slot_2 = googletag.defineSlot('/1068322/NDTV_Homepage_300x250_ATF', [[300, 250], 'fluid'], 'adslot300x250ATF').addService(googletag.pubads());

        window.slot_3 = googletag.defineSlot('/1068322/NDTV_News_Homepage_728x90_BTF', [[970, 90], [728, 90], [970, 250], 'fluid'], 'adslot728x90BTF').addService(googletag.pubads());

        window.slot_4 = googletag.defineSlot('/1068322/NDTV_News_Homepage_300x250_BTF', [[300, 250], 'fluid'], 'adslot300x250BTF').addService(googletag.pubads());
            
        //window.slot_5 = googletag.defineSlot('/1068322/NDTV_News_HP_300x250_BTF_2', [300, 250], 'div-gpt-ad-1672922435035-0').addService(googletag.pubads());

        if (getCookie('PublisherProvidedIdsNew') === null || getCookie('PublisherProvidedIdsNew') === "") {
            setCookie('PublisherProvidedIdsNew', generateString(9), "180", ".ndtv.com");
        }
        googletag.pubads().setPublisherProvidedId(getCookie('PublisherProvidedIdsNew'));

        // C) Enable lazy loading with...
        googletag.pubads().enableLazyLoad({
            fetchMarginPercent: 100,
            renderMarginPercent: 100,
        });
        googletag.enableServices();

        googletag.pubads().enableSingleRequest();
        googletag.pubads().disableInitialLoad();
        /* DFP */
        var trTagVal = getCookie('__ngutmtags');
        if (utm_campaign != '' && utm_campaign != null) {
            setCookie('__ngutmtags', utm_campaign, '0', '.ndtv.com');
            googletag.pubads().setTargeting('UTM', [utm_campaign]);
        } else if (trTagVal != '') {
            googletag.pubads().setTargeting('UTM', [trTagVal]);
        }
        /* DFP */

        var __gdpr = getCookie('__usrloc'); if (__gdpr == 'EU') { googletag.pubads().setRequestNonPersonalizedAds(1); }
        googletag.enableServices();

        // OpenWrap code START here
        if (typeof PWT.requestBids === 'function') {
            PWT.requestBids(
                    PWT.generateConfForGPT(googletag.pubads().getSlots()),
                    function (adUnitsArray) {
                        console.log("AdUnitsArray", adUnitsArray);
                        if (adUnitsArray[0].bidData.kvp.pwtplt == "video") {
                            var videoUrl = window.PWT.generateDFPURL(adUnitsArray[0], {
                                section: 'blog',
                                anotherKey: 'anotherValue'
                            });
                            invokeVideoPlayer(videoUrl);

                        } else {
                            PWT.addKeyValuePairsToGPTSlots(adUnitsArray);
                            PWT.ow_BidsReceived = true;
                            initAdserver(false);
                        }
                    });
        }
        // No need to handle "else" part as we have A9 wrapper on page
        // OpenWrap code END here

        var FAILSAFE_TIMEOUT = 1000; // this timeout should be more than OpenWrap and A9 timeout
        setTimeout(function () {
            initAdserver(true); // calling this function with forced mode set to true so that GPT API is always executed
        }, FAILSAFE_TIMEOUT);

    });