var MynetGlobal = {service: 'anasayfa'};
        var MYNET_MAIN_GLOBAL = {
            my_open_menu_icon_css: '//s.mynet.com.tr/rosetta/services/anasayfa/production/build//css/my-open-menu-icons.css?id=1e91acab7316458518f7'
        };

        var isPremiumUser = false;
        var visitor_subscriptions = {"visitor_username":null,"visitor_products":[],"visitor_churned_products":[],"has_noads_feature":null,"has_email_feature":null};

        
            window.dataLayer = [{
            "version": 4,
            "service_alias": "anasayfa",
            "author": {
                "type": "",
                "user_name": "",
                "screen_name": "",
            },
            "content": {
                "id": null,
                "sub_id": null,
                "sub_id_index": null,
                "length": null,
                "tags": null,
                "title": null,
                "category": [
                    "",
                    ""
                ],
                "published_at": null,
                "created_at": null,
                "updated_at": null,
                "type": null,
                "page_type": "homepage",

            },
            "visitor": {
                "username": "",
                "products": null
            },
            "platform": "desktop"
        }];

        WebFontConfig = {
            google: {families: ['PT+Sans:400,700:latin-ext']}
        };
        (function (d) {
            var wf = d.createElement('script'), s = d.scripts[0];
            wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js';
            wf.async = true;
            s.parentNode.insertBefore(wf, s);
        })(document);

        if (typeof myChecker == 'undefined') {
            function myChecker(condition, callback) {
                if ('function' != typeof condition || 'function' != typeof callback) {
                    return false;
                }
                var checker = setInterval(function () {
                    if (condition()) {
                        callback()
                        clearInterval(checker)
                    }
                }, 50);
                setTimeout(function () {
                    clearInterval(checker);
                }, 5e3);
            }
        }