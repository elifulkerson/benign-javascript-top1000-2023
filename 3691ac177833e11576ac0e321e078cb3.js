window.mgzUI = window.mgzUI || {};
(function () {
    window.setGlobals = function (name, obj) {
        if (obj && name) {
            window[name] = obj;
        }
    }

    setGlobals('Globals', {"publisherId":"Taboola_newsplace-global-edition-en","key":"Taboola","userId":"crawler","retOrigUrl":true,"language":"en","query":{"publisherId":"Taboola_newsplace-global-edition-en","key":"Taboola","userId":"crawler","retOrigUrl":true,"language":"en"},"analyticsUrl":"https://stat.thestartmagazine.com/mediaStatistics/v1.0/web","version":"1.81.0 - Tue Oct 03 2023 09:52:19 GMT+0000 (UTC)","settings":{"ads":{"dfp":{"active":true,"swipe_only":true,"maxAdsPerDay":"8","skip_timeout":"2","maxAdsPerSession":"3","showOnFirstScreen":false,"showEveryNumOfScreens":"4"},"has_yb_abc":true,"interstitial":{"active":true},"has_pub_suffix":true},"feed":{"personal":false,"ad_breakers":{"DFP":{"active":true,"weight":1}},"feed_enabled":true,"taboola_feed":{"mode":"thumbsnails-feed","active":true,"container":"Taboola_Feed_Page","page_type":"home","placement":"Editorial Thumbnails Trending","ad_blocker_fallback_placement":"Editorial Thumbnails Trending Only"},"lean_new_style":false,"native_content":{"cedato":{"cap":0,"active":true,"weight":0.4,"categories":["all"]}},"contentSourceDisplay":true,"native_ad_percentage":0.5,"ad_breakers_percentage":0,"imageShardingInstances":3},"lean":{"ads":{"lazy_load_ads":true},"feed":{"ad_breakers":{"dfp":{"cap":4,"active":true}}},"native_ads":{"promoted_content":{"cap":2,"active":true,"weight":1}}},"video":{"ads":{"DFP":{"active":true,"loop_time":30},"lazy_load_ads":false},"theme":"tn_video","auto_play":false,"count_down":5,"refresh_cap":2,"serverRender":true,"share_enabled":true,"content_api_url":"https://magazine-api.taboola.com/video-content/${itemId}/page-data","cloudinary_image":true,"send_alive_event":1,"additional_content":{"active":true,"taboola_feed":{"mode1":"editorial-video-stream","active":true,"container":"taboola-article-footer-widget","page_type":"article","placement1":"Below Video Only"}}},"article":{"ads":{"DFP":{"active":true,"loop_time":60,"placements":{"center":true,"footer":false,"header":true},"name":"dfp"},"carambola":{"active":false,"options":{"wid":0},"placements":{"center":false,"footer":true,"header":false},"name":"carambola"},"lazy_load_ads":false},"theme":"tn_summary","summary":{"ads":{"DFP":{"active":true,"placements":{"center":false,"footer":false,"header":true}}},"active":true,"no_image":false,"cloudinary_url":"https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_{h}%2Cw_{w}%2Cc_fill%2Cg_auto:subject_100:classic_50%2Ce_sharpen/","cloudinary_image":true,"time_stamp_disabled":true},"comments":false,"paragraphs":2,"serverRender":true,"share_enabled":true,"swipe_enabled":false,"cloudinary_url":"https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_{h}%2Cw_{w}%2Cc_fill%2Cg_auto:subject_100:classic_50%2Ce_sharpen/","floating_button":{"type":"arrow","active":false,"timeout":5},"cloudinary_image":true,"promoted_content":{"active":true,"taboolawidget":{"active":false,"placements":{"center":true,"footer":false}}},"content_providers":[{"cap":5,"days":1,"name":"bloomberg","register_url":"www.bloomberg.com/subscriptions?in_source=celltick_start"}],"hard_back_to_feed":false,"additional_content":{"ads":[{"adSlot":"/156102325/article//320_50_related_article","noTitle":true,"adFormat":"[[320,100], [320, 50]]","provider":"dfp"}],"active":true,"blockOrder":["article","article","ad","article","article"],"taboola_feed":{"mode1":"editorial-stream-a","mode2":"thumbnails-feed-ac-a","active":true,"container":"taboola-article-footer-widget","page_type":"article","placement1":"Below article","placement2":"Below Summary"},"widget_configuration":{"in_article":false,"bottom_type":"rich"}},"increased_monetization":{"active":true,"variant":"shortImage"},"read_orig_article_enabled":true,"notifications_popup_enabled":true},"modules":{"active":false,"resource":"\"use strict\";\n\nvar SMloader = SMloader || {};\nSMloader.hookScriptUrl = 'https://cdn.taboola.com/static/impl/js/theme-page_hooks.js', SMloader.loadScript = function (src, cstm) {\n  return new Promise(function (resolve, reject) {\n    var s = document.createElement('script');\n    var r = false;\n    s.type = 'text/javascript', s.onerror = function (err) {\n      reject(err);\n    }, cstm && s.setAttribute(\"custom-element\", cstm), s.src = src, s.async = true, s.onload = s.onreadystatechange = function () {\n      !r && (!this.readyState || this.readyState === 'complete') && (r = true, resolve('loaded'));\n    };\n    var t = document.getElementsByTagName('script')[0];\n    t.parentElement.insertBefore(s, t);\n  });\n}, SMloader.loadScript(SMloader.hookScriptUrl, 'rendered').then(function (res) {\n  console.log('SMloader hookScriptUrl...', res);\n}).catch(function (error) {\n  return console.log('SMloader hookScriptUrl...', error.message ? error.message : error.type);\n});"},"partner":{"about_logo":"","about_text":"","active_state":"Active"},"version":1,"settings":{"active":true},"tracking":{"ga":"UA-97642021-3"},"providers":{"yb":{"url":"https://dmcdn.yieldbird.com/d98f18ea-b8d7-4591-85bb-db32dab19906/yb.js","video":{"id":"div-hb-ad-121314151-0","size":"[[320,50],[320,100]]","ad_unit":"/156102325/video_page_320"},"article":{"center":[{"id":"div-hb-ad-121314151-1","size":"[[200,200],[300,250],[250,250],'fluid',[336,280]]","ad_unit":"/156102325/article//300_250"},{"id":"div-hb-ad-121314151-2","size":"[[200,200],[300,250],[250,250],'fluid',[336,280]]","ad_unit":"/156102325/article//300_250_second"},{"id":"div-hb-ad-121314151-3","size":"[[200,200],[300,250],[250,250],'fluid',[336,280]]","ad_unit":"/156102325/article//300_250_third"},{"id":"div-hb-ad-121314151-4","size":"[[200,200],[300,250],[250,250],'fluid',[336,280]]","ad_unit":"/156102325/article//300_250_forth"}],"footer":{"id":"div-hb-ad-121314151-5","size":"[[200,200],[300,250],[250,250],'fluid',[336,280]]","ad_unit":"/156102325/article//300_250_footer"},"header":{"id":"div-hb-ad-121314151-0","size":"[[320,50],[320,100]]","ad_unit":"/156102325/article//320_50"}},"summary":{"footer":{"id":"div-gpt-ad-121314151-1","size":"[[300,250],[250,250],[200,200],[336,280]]","ad_unit":"/156102325/summary_page_300_250"},"header":{"id":"div-gpt-ad-summary_page_generic_320x50","size":"[[320,50]]","ad_unit":"summary_page_generic_320x50"}},"url_feed":"https://dmcdn.yieldbird.com/ee9ff312-62c5-4112-9ff4-cee951873f87/yb.js","url_lean":"https://dmcdn.yieldbird.com/80994253-2c0b-4ddc-babc-1d74a7cf727a/yb.js","url_video":"https://dmcdn.yieldbird.com/2d659325-9905-4017-a143-33a1b2f41a8d/yb.js","url_summary":"https://dmcdn.yieldbird.com/7aae40d4-4438-44c0-b37e-5051e1b90971/yb.js","url_feed_lean":"https://dmcdn.yieldbird.com/2d4aeb2d-fa44-473d-9f20-3c7cc3b3f71d/yb.js","url_video_lean":"https://dmcdn.yieldbird.com/44218bc1-90d8-4915-9581-fc8e1dc20c5c/yb.js","header_bidding_enabled":false},"DFP":{"feed":[{"size":"[[300,250],[250,250],[200,200],[336,280]]","ad_unit":"/156102325/feed//300_250_first"},{"size":"[[300,250],[250,250],[200,200],[336,280]]","ad_unit":"/156102325/feed//300_250_second"},{"size":"[[300,250],[250,250],[200,200],[336,280]]","ad_unit":"/156102325/feed//300_250_third"},{"size":"[[300,250],[250,250],[200,200],[336,280]]","ad_unit":"/156102325/feed//300_250_fourth"},{"size":"[[300,250],[250,250],[200,200],[336,280]]","ad_unit":"/156102325/feed//300_250_fifth"},{"size":"[[300,250],[250,250],[200,200],[336,280]]","ad_unit":"/156102325/feed//300_250_sixth"},{"size":"[[300,250],[250,250],[200,200],[336,280]]","ad_unit":"/156102325/feed//300_250_seventh"}],"video":[{"id":"new_video_page_320","size":"[[320,100],[320,50]]","ad_unit":"/156102325/new_video_page_320"}],"article":[{"lazy":true,"size":"[[300,250],[250,250],[200,200],[336,280]]","ad_unit":"/156102325/article//300_250_lean"},{"lazy":true,"size":"[[300,250],[250,250],[200,200],[336,280]]","ad_unit":"/156102325/article//300_250_second_lean"},{"lazy":true,"size":"[[300,250],[250,250],[200,200],[336,280]]","ad_unit":"/156102325/article//300_250_third_lean"}],"summary":{"top":{"id":"div-gpt-ad-summary_page_generic_320x50","size":"[[320,50]]","ad_unit":"/156102325/summary_page_generic_320x50"},"footer":{"id":"div-gpt-ad-121314151-1","size":"[[300,250],[250,250],[200,200],[336,280]]","ad_unit":"/156102325/summary_page_300_250"}},"article-page":{"top":{"id":"div-gpt-ad-121314151-0","size":"[[320, 50]]","ad_unit":"/156102325/article//320_50_lean_newsplace-global-edition-en","type":"dfp","width":320,"height":50},"center":[{"id":"div-gpt-ad-121314151-1","size":"[[300,250],[250,250],[200,200],[336,280]]","ad_unit":"/156102325/article//300_250_lean_newsplace-global-edition-en","type":"dfp","width":300,"height":250},{"id":"div-gpt-ad-121314151-2","size":"[[300,250],[250,250],[200,200],[336,280]]","ad_unit":"/156102325/article//300_250_second_lean_newsplace-global-edition-en","type":"dfp","width":300,"height":250},{"id":"div-gpt-ad-121314151-3","size":"[[300,250],[250,250],[200,200],[336,280]]","ad_unit":"/156102325/article//300_250_third_lean_newsplace-global-edition-en","type":"dfp","width":300,"height":250},{"id":"div-gpt-ad-121314151-4","size":"[[300,250],[250,250],[200,200],[336,280]]","ad_unit":"/156102325/article//300_250_fourth_lean_newsplace-global-edition-en","type":"dfp"}],"footer":{"id":"div-gpt-ad-121314151-5","lazy":true,"size":"[[300,250],[250,250],[200,200],[336,280]]","ad_unit":"/156102325/article//300_250_footer"}}},"cedato":{"player_id":920614111},"Taboola":{"api_key":"f44d224ed117102b74bed53b82e6079af28600d5","network_url":"https://taboolanews.com/generic/newsplace-global-edition-en","publisher_id":"newsplace-network","fallback_time":5,"should_fix_url":true,"default_language":"en","specific_dfp_lazy_load":{"active":true,"root_margin":"0px 0px 15% 0px"}}},"signature":{"id":2970,"ts":"2022-08-29 13:56:37.568","md5":"af54e39f-3455-a3e8-f7a2-29e552ef82a4"},"dfp_partner":{"name":"Taboola_newsplace-global-edition-en"},"service_worker":false,"content_providers":{"Bloomberg":{"register_url":"https://www.bloomberg.com/subscriptions?in_source=celltick_start","articles_daily_cap":10}},"time_on_page_enabled":true,"kanalyticsPercentage":1,"hotMapPercentage":0,"hotMapId":1840595,"summary":{}},"signature":{"id":2970,"ts":"2022-08-29 13:56:37.568","md5":"af54e39f-3455-a3e8-f7a2-29e552ef82a4"},"features":{"dont_send_analytics_observer":false},"fallbackUrl":"","pixelAccountId":"","hbEnabled":false,"pbEnabled":false,"isFeedPage":true,"tabsUIObj":{},"hasTaboolaFeed":true,"pageId":"lean/feed","dfpEnabled":true,"pubId":"newsplace-network","taboolaFeed":{"mode":"thumbsnails-feed","active":true,"container":"Taboola_Feed_Page","page_type":"home","placement":"Editorial Thumbnails Trending","ad_blocker_fallback_placement":"Editorial Thumbnails Trending Only"}});
    Globals.settings = Globals.settings || {};
    Globals.features = Globals.features || {};
    if (window.settings_override) {
        Globals.hasSettingsOverriding = true;
        Globals.settings = mergeDeep(Globals.settings, window.settings_override);
    }

    // Update the canonical URL in case it doesn't match the page URL.
    const canonicalLinkEl = document.querySelector("link[rel=canonical]");
    if (canonicalLinkEl && canonicalLinkEl.getAttribute('href') !== window.location.href) {
        canonicalLinkEl.setAttribute('href', window.location.href || '');
    }

    // Counting user time on page from the earliest possible time
    var shouldReportTimeOnPage = Globals.settings.time_on_page_enabled;
    if (shouldReportTimeOnPage) {
        window.mgzUI = window.mgzUI || {};
        const isPerformanceSupported = window.performance && typeof window.performance.now === 'function';

        /**
        * If performance API is supported, will return time elapsed since page load in ms and truncate the number using the bitwise operator,
         * Otherwise returns 0
         * @returns {number}
        */
        function getPerformanceTimeMark() {
            if (isPerformanceSupported) {
                return performance.now() | 0;
            } else {
                return 0;
            }
        }

        /**
         Calculates the total time a user spent on the page,
         and sends a time_on_page event.
         */
        function sendTimeOnPageEvent() {
            const now = Date.now();
            const performanceNow = getPerformanceTimeMark();
            const timeOnPage = mgzUI.timeOnPage;
            const EVENT_NAME = 'time_on_page';
            let performanceData = {};

            if (timeOnPage.startingTime) {
                const totalTime = now - timeOnPage.startingTime;

                // Only if performance API is supported, those values will be added to the data obj sent in the event.
                if (isPerformanceSupported) {
                    const performanceTotalTime = (performanceNow - timeOnPage.performanceStartingTime);

                    performanceData = {
                        performanceStartingTime: timeOnPage.performanceStartingTime,
                        performanceEndTime: performanceNow,
                        performanceTotalTime: performanceTotalTime
                    }
                }

                const data = {
                    startingTime: timeOnPage.startingTime,
                    endTime: now,
                    totalTime: totalTime,
                    ...performanceData,

                };

                if (window.TRCImpl && navigator && typeof navigator.sendBeacon === 'function') {
                    // When the 4th argument of this function is set to true, the event will be sent
                    // using the navigator.sendBeacon API.
                   TRCImpl.sendAbTestEvent(EVENT_NAME, data, noop, true);
                } else if (window.AbFire && typeof window.AbFire.sendAbEvent === 'function') {
                    // Try sending a regular HTTP GET request
                    AbFire.sendAbEvent(EVENT_NAME, data);
                }
                timeOnPage.isActive = false;
            }
        }

        /**
         Assigns a starting timestamp and adds an event listener for when the user leaves the page
         */
        function reportTimeOnPage() {
            mgzUI.timeOnPage = {
                startingTime: null,
                performanceStartingTime: null,
                isActive: true
            };

            const timeOnPage = mgzUI.timeOnPage;
            timeOnPage.startingTime = Date.now();
            timeOnPage.performanceStartingTime = getPerformanceTimeMark();

            window.addEventListener('visibilitychange', function () {
                var isVisible = document.visibilityState === 'visible';
                if (!isVisible) {
                    sendTimeOnPageEvent();

                } else if (!timeOnPage.isActive) {
                    // Reset the timer when user comes back to the page and an event was sent previously.
                    timeOnPage.startingTime = Date.now();
                    timeOnPage.performanceStartingTime = getPerformanceTimeMark();
                    timeOnPage.isActive = true;
                }
            })
        }

        reportTimeOnPage();
    }
})();