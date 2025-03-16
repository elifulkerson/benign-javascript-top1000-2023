window.Etsy=window.Etsy||{};
        Etsy.Context=Etsy.Context||{};

        (function() {
            function assign(firstSource, secondSource) {
                if (!secondSource) {
                  return;
                }

                var out = Object(firstSource);

                for (var key in secondSource) {
                    // Avoid bugs when hasOwnProperty is shadowed
                    if (Object.prototype.hasOwnProperty.call(secondSource, key)) {
                        out[key] = secondSource[key];
                    }
                }
                return out;
            }

            Etsy.Context.feature=assign(Etsy.Context.feature ? Etsy.Context.feature : {}, {"isAppShellEnabled":true});
            Etsy.Context.data=assign(Etsy.Context.data ? Etsy.Context.data : {}, {"is_mobile":false,"should_auto_redirect":false,"locale_settings":{"language":{"code":"en-US","id":0,"name":"English (US)","translation":"English (US)","is_detected":true,"is_default":true},"currency":{"currency_id":840,"code":"USD","name":"United States Dollar","number_precision":2,"symbol":"$","listing_enabled":true,"browsing_enabled":true,"buyer_location_restricted":false,"rate_updates_enabled":true,"is_detected":true,"is_default":true,"append_currency_symbol":false},"region":{"code":"US","country_id":209,"name":"United States","translation":"United States","is_detected":true,"is_default":true,"is_EU_region":false},"subdir_code":""},"neu_api_specs_sample_rate":null,"FB_GRAPHQL_VERSION":"v2.10","page_guid":"f702210a783.4a8435e03bfee85d2584.00","primary_event_name":"home","request_uuid":"Eu4xy1yzYKCT_-h9MjnLFjGXWube","sign_in_modal_mweb":false,"user_is_test_account":false,"user_id":null,"css_variant":"sasquatch","guest_uaid":["Nifk_sMFqQkBD4TlXxT0U0XRFa38","Nifk_sMFqQkBD4TlXxT0U0XRFa38"],"etsyweb_granify_traffic":true,"granify":{"site_id":"qivBM","page_type":"home"},"is_app_shell":true,"csrf_nonce":"3:1697428227:Hk4N6jj-QvtM-QKkxTf8qzOBo7O2:2e58dda875adb5e86bdb6e5fc8e1851826be192ed4fd42fe5012cb5cdf839d7e","uaid_nonce":"3:1697428227:QpvL-XBjRNLtQNNwrT5ejyiaOdnh:784daaad0b48ffce69767c8eee7581973ac9744a9463eea5bcdc5816ef49b09d","clientlogger":{"is_enabled":true,"endpoint":"\/clientlog","logs_per_page":6,"id":"Eu4xy1yzYKCT_-h9MjnLFjGXWube","digest":"b317ae734c1dbc12588866816aa61f86020aeb5d","enabled_features":["info","warn","error","basic","uncaught"]},"impact_tracker_should_prompt_signin":false,"impact_tracker_should_direct_open":false,"shop_favorites_see_all_link":"See all","shop_favorites_search_header":"Shops you follow","is_mobile_shop_search":false,"show_simplified_mobile_header":false,"is_eligible_for_ship_to_setting_in_global_header":false,"show_etsy_has_it_design":false,"in_cart_count":0,"show_mini_cart":true,"page_type":"home","has_dropdown":true,"show_visual_subnav":false,"use_mousedown_autosuggest_listener":false,"mweb_full_screen_search_dropdown":false,"relocate_cat_nav":false,"mott_version":"eb3a8d4","catnav_show_sales":false,"catnav_gift_guide":"off","gifting_catnav_flyout_js":true,"should_show_registry_on_nav":true,"should_use_gifting_taxos_in_nav_flyout":true,"impact_message":{"footer_renewable_impact":{"impact_name":"footer_renewable_impact","impact_themes":["sustainability"],"impact_audiences":["buyers"]}},"videos_in_recs_modules_enabled":true,"saved_searches_enabled":false,"is_thank_you":false,"hp_lazy_load_footer":false,"open_overlay_instead_shipping_drawer":false,"has_activity":false,"include_strv_ads_sash_javascript":false,"use_collection_carousel_cards":false,"onsite_promos_enabled":false,"show_minicart_on_home":false,"show_video_in_listing_card":true,"show_collage_video_in_listing_card":true,"google_client_id":"296956783393-2d8r0gljo87gjmdpmvkgbeasdmelq33e.apps.googleusercontent.com","show_one_tap_modal":false});
        })();