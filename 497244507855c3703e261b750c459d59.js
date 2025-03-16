const urlParams = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
    startTnbTracking = function() {
        if( window.$ ) {
            window.googletag = window.googletag || {};
            var googleTagLoaded = setInterval((function () {
                if (window.googletag && googletag.pubadsReady) {
                    //Listen to slotRenderEnded to enable billboard closing functionality
                    window.googletag.pubads().addEventListener("slotRenderEnded", function (event) {
                        if(event.slot.getSlotElementId().toUpperCase().indexOf("TNB") !== -1) {
                            sessionStorage.setItem(event.slot.getSlotElementId(), JSON.stringify(event.lineItemId));
                        }
                    });
                    clearInterval(googleTagLoaded);
                }
            }), 50);
            $(window).blur(function(e){
                if(
                    document.activeElement
                    && document.activeElement.tagName == 'IFRAME'
                    && document.activeElement.id.indexOf("google") !== -1
                    && document.activeElement.id.toUpperCase().indexOf("TNB") !== -1
                ){
                    var lineItemId = sessionStorage.getItem(document?.activeElement?.parentElement?.parentElement.id);
                    $(window).focus();
                    var iframeId = document?.activeElement?.id;
                    // remove 'google_ads_iframe_' from the beginning and '_0' from the end
                    var adUnitPath = iframeId?.slice(18, iframeId?.length - 2);

                    var obj = {
                        event_name_cd:         "click_on_tnb_button",
                        GA_event_category:     "Trade Now Button",
                        GA_event_action:       "tnb button clicked",
                        GA_event_label:        lineItemId + "-" + adUnitPath,
                        action_cd:             "click",
                        object:                "button",
                        event_cd_description1: "last paid source",
                        event_cd_value1:       getCookie('lastPaidSource'),
                        event_cd_description2: "click id",
                        event_cd_value2:       getCookie('lastPaidSourceClickId'),
                        event_cd_description3: "campaign id",
                        event_cd_value3:       getCookie('lastPaidSourceCampaignId')
                    }
                    addGtmToGAEvent(obj);
                }
            });
            getClickId = function () {
                if (!!urlParams.gclid) {
                    return urlParams.gclid;
                }
                if (!!urlParams.msclkid) {
                    return urlParams.msclkid;
                }
                if (!!urlParams.fbclid) {
                    return urlParams.fbclid;
                }
                if (!!urlParams.click_id) {
                    return urlParams.click_id;
                }
            }
            setLastPaidSourceCookies = function () {
                if (!!getClickId() && !!urlParams.utm_source) {

                    setCookie('lastPaidSource', urlParams.utm_source, 30, '/', '.investing.com');
                    setCookie('lastPaidSourceClickId', getClickId(), 30, '/', '.investing.com');
                    setCookie('lastPaidSourceCampaignId', urlParams.utm_campaign, 30, '/', '.investing.com');
                }
            }
            $(function(){
                setLastPaidSourceCookies();
            });
        } else {
            window.setTimeout( startTnbTracking, 50 );
        }
    }
    startTnbTracking();