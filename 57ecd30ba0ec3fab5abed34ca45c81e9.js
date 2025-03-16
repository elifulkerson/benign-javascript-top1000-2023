(function() {
        // Minimal extend implementation suitable for our single use case below
        var extend = Object.assign || function (obj) {
            var others = Array.prototype.slice.call(arguments, 1);
            for (var i = 0; i < others.length; i++) {
                var other = others[i];
                for (var key in other) {
                    if (other.hasOwnProperty(key)) {
                        obj[key] = other[key];
                    }
                }
            }
            return obj;
        };
        window["tsInstance"] = new TS(extend({
            current_logo: 'https://static-assets.highwebmedia.com/images/logo.svg?hash=a55ee9da2e72',
            is_mobile: false,
            logged_in_user: JSON.parse('null'),
            animate_thumbnails: false,
            language_code: 'en',
            social_auths: '[[\u0022google\u002Doauth2\u0022, \u0022Google\u0022]]',
            push_services: JSON.parse('[{\u0022backend\u0022: \u0022a\u0022, \u0022flags\u0022: {\u0022pm_enabled\u0022: true, \u0022wowza_disabled\u0022: true, \u0022userlist_enabled\u0022: true, \u0022verify_enabled\u0022: false, \u0022fallback_eligible\u0022: true, \u0022is_live\u0022: true}, \u0022rest_host\u0022: \u0022realtime.pa.highwebmedia.com\u0022, \u0022realtime_host\u0022: \u0022realtime.pa.highwebmedia.com\u0022, \u0022fallback_hosts\u0022: [\u0022a\u002Dfallback.pa.highwebmedia.com\u0022, \u0022b\u002Dfallback.pa.highwebmedia.com\u0022, \u0022c\u002Dfallback.pa.highwebmedia.com\u0022, \u0022d\u002Dfallback.pa.highwebmedia.com\u0022, \u0022e\u002Dfallback.pa.highwebmedia.com\u0022]}]'),
            push_service_verify: 'None',
            chat_settings: JSON.parse('{\u0022font_size\u0022: \u00229pt\u0022, \u0022show_emoticons\u0022: true, \u0022emoticon_autocomplete_delay\u0022: \u00220\u0022, \u0022sort_users_key\u0022: \u0022a\u0022, \u0022room_entry_for\u0022: \u0022orgb\u0022, \u0022room_leave_for\u0022: \u0022orgb\u0022, \u0022c2c_notify_limit\u0022: \u0022300\u0022, \u0022silence_broadcasters\u0022: \u0022false\u0022, \u0022ignored_users\u0022: \u0022\u0022, \u0022allowed_chat\u0022: \u0022all\u0022, \u0022v_tip_vol\u0022: \u002250\u0022, \u0022b_tip_vol\u0022: \u002210\u0022, \u0022max_pm_age\u0022: 720}'),
            entrypoint_context_id: JSON.parse('\u00222929226067\u0022'),
            sitewide_pms_enabled: JSON.parse('true'),
            sample_metrics_off: false,
            quality_message: false,
            csrftoken: 'JWhAzRXc0g9VW6TDx7fBCq5iTcWyAOtv4jo4HQ952TkhOXfRdQuBQh1g60nQhVjE',
            JPEG_STREAM_URL: JSON.parse('\u0022https://cbjpeg.stream.highwebmedia.com/\u0022'),
            JPEG_ROOM_IMAGE_URL: JSON.parse('\u0022https://roomimg.stream.highwebmedia.com/\u0022'),
            GAMES_URL: JSON.parse('\u0022https://games.multimediallc.com/\u0022'),
            INTERNAL: false,
            PurchaseEventSources: JSON.parse('{\u0022TOKEN_SOURCE_USER_INFO_PANEL\u0022: \u0022TokenSourceUserInfoPanel\u0022, \u0022TOKEN_SOURCE_TIP_MODAL\u0022: \u0022TokenSourceTipModal\u0022, \u0022TOKEN_SOURCE_MODAL_CONFIRM\u0022: \u0022TokenSourceModalConfirm\u0022, \u0022TOKEN_SOURCE_SITEMAP\u0022: \u0022TokenSourceSitemap\u0022, \u0022TOKEN_SOURCE_WELCOME\u0022: \u0022TokenSourceWelcome\u0022, \u0022TOKEN_SOURCE_PHOTO_VIDEO\u0022: \u0022TokenSourcePhotoVideo\u0022, \u0022TOKEN_SOURCE_SOCIAL_MEDIA_EXTEND\u0022: \u0022TokenSourceSocialMediaExtend\u0022, \u0022TOKEN_SOURCE_SOCIAL_MEDIA_SUBSCRIBE\u0022: \u0022TokenSourceSocialMediaSubscribe\u0022, \u0022TOKEN_SOURCE_PURCHASE_DECLINED\u0022: \u0022TokenSourcePurchaseDeclined\u0022, \u0022TOKEN_SOURCE_PURCHASE_DECLINED_IFRAME\u0022: \u0022TokenSourcePurchaseDeclinedIframe\u0022, \u0022TOKEN_SOURCE_INCREASE_LIMITS\u0022: \u0022TokenSourceIncreaseLimits\u0022, \u0022TOKEN_SOURCE_PURCHASE_PAGE_IFRAME\u0022: \u0022TokenSourcePurchasePageIframe\u0022, \u0022TOKEN_SOURCE_SHOW_MY_CAM\u0022: \u0022TokenSourceShowMyCam\u0022, \u0022TOKEN_SOURCE_PURCHASE_MEDIA\u0022: \u0022TokenSourcePurchaseMedia\u0022, \u0022TOKEN_SOURCE_BROADCASTER_PROMOTION_PANEL\u0022: \u0022TokenSourceBroadcasterPromotionPanel\u0022, \u0022TOKEN_SOURCE_MOBILE_VIDEO_CONTROLS\u0022: \u0022TokenSourceMobileVideoControls\u0022, \u0022TOKEN_SOURCE_MOBILE_TOKENS_TAB_TOKEN_BAR\u0022: \u0022TokenSourceMobileTokensTabTokenBar\u0022, \u0022TOKEN_SOURCE_PRIVATE_MESSAGE_WINDOW\u0022: \u0022TokenSourcePrivateMessageWindow\u0022, \u0022TOKEN_SOURCE_TIP_CALLOUT\u0022: \u0022TokenSourceTipCallout\u0022, \u0022TOKEN_SOURCE_SPLIT_MODE_VIDEO_PANEL\u0022: \u0022TokenSourceSplitModeVideoPanel\u0022, \u0022TOKEN_SOURCE_LOW_TOKEN_BALANCE\u0022: \u0022TokenSourceLowTokenBalance\u0022, \u0022TOKEN_SOURCE_BONUS_TOKENS_SPLIT_TEST\u0022: \u0022TokenSourceBonusTokensSplitTest\u0022, \u0022SUPPORTER_SOURCE_USER_INFO_PANEL\u0022: \u0022SupporterSourceUserInfoPanel\u0022, \u0022SUPPORTER_SOURCE_PM_UPSELL\u0022: \u0022SupporterSourcePMUpsell\u0022, \u0022SUPPORTER_SOURCE_PREVIEW_ROOMS_UPSELL\u0022: \u0022SupporterSourcePreviewRoomsUpsell\u0022, \u0022SUPPORTER_SOURCE_ANON_TIP_UPSELL\u0022: \u0022SupporterSourceAnonTipUpsell\u0022, \u0022SUPPORTER_SOURCE_MEMBERSHIP_TAB\u0022: \u0022SupporterSourceMembershipTab\u0022, \u0022SUPPORTER_SOURCE_HOMEPAGE_ROOM_CARD\u0022: \u0022SupporterSourceHomepageRoomCard\u0022, \u0022SUPPORTER_SOURCE_MOBILE_TOKENS_TAB\u0022: \u0022SupporterSourceMobileTokensTab\u0022, \u0022SUPPORTER_SOURCE_JOIN_FAN_CLUB_BUTTON\u0022: \u0022SupporterSourceJoinFanClubButton\u0022}'),
            isTestbed: false,
            noImage: false,
        }, JSON.parse('{\u0022refreshFrequency\u0022: 60, \u0022showLocation\u0022: \u0022\u0022, \u0022regions\u0022: \u0022NA,SA,AS,ER,O\u0022, \u0022showRecommendations\u0022: false, \u0022roomListSource\u0022: \u0022df\u0022, \u0022show_mobile_site_banner_link\u0022: false, \u0022showTsRoomlist\u0022: false, \u0022dark_mode_enabled\u0022: true}')));
    })();