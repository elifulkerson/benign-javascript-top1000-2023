(function ($) {
    var wrapped;
    var adBlockRadar = window.adBlockRadar;
    var adSlots = [4847, 4499];
    //  мимик, 2 запроса :(
    if (mr._.STUCK_IN_POT) {
        adSlots.forEach(function (slot) {
            $.reloadSlots([slot], function (wrapper, data) {
                var params = {};
                insertBanner(wrapper, data);
                if (!wrapped) {
                    wrapped = true;
                    var layout = document.querySelector('.layout__content');
                    layout.className = mr.locator.transform('layout__content');
                    mr.locator.wrap(['.rectangle-banner__inner']);
                    mr.locator.wrap(['#news']);
                    mr.locator.wrap(['.tgb-banner']);
                    // обманываем селекторы адблока
                    mr.locator.insertSheet({
                        '.layout__rightcol': {
                            'padding-top': mr.locator.calcString(300, 'px')
                        },
                        '.rectangle-banner': {
                            top: mr.locator.calcString(69, 'px'),
                            height: mr.locator.calcString(0, 'px'),
                            width: mr.locator.calcString(0, 'px')
                        },
                        '@media (min-height: 765px)': {
                            '.rectangle-banner': {
                                top: mr.locator.calcString(88, 'px')
                            }
                        },
                        '@media (min-height: 825px)': {
                            '.rectangle-banner': {
                                top: mr.locator.calcString(94, 'px')
                            }
                        },
                        '.body_event .rectangle-banner': {
                            'margin-top': '250px'
                        },
                        '.rectangle-banner__inner': {
                            height: mr.locator.calcString(300, 'px'),
                            width: mr.locator.calcString(300, 'px')
                        },
                        '.layout__content': {
                            margin: "0 0 0 " + mr.locator.calcString(24, '%')
                        }
                    });
                    mr.locator.updateSheets(mr._.STYLES);
                }
            })();
        });
    }
    else {
        $.reloadSlots(adSlots, { json: 1 }, function (wrapper, data) {
            var params = {};
            if (data.json && data.json.extend) {
                params._SITEZONE = data.json.extend;
                mr.switchers.refreshBannerOnFocus = false;
                mr.switchers.refreshBannerOnAuthChange = false;
            }
            insertBanner(wrapper, data);
        })();
    }
    function insertBanner(wrapper, data) {
        // Если контейнера для банера не появилось, то мы продолжим самовызывать эту функцию
        if (wrapper) {
            var insertTo = mr._.STUCK_IN_POT || data.json ? $.insertByJSON : $.insertBanner;
            insertTo(wrapper, data);
            // Убираем обводку, потому что у HTML своя есть :)
            if (wrapper.id === 'slot_4847') {
                mr[data.json ? 'removeClass' : 'addClass'](wrapper, 'tgb-banner_no-border');
            }
            if (mr._.STUCK_IN_POT) {
                adBlockRadar.one({
                    name: 'adblock_insert_from-' + (data.tpl === 'tgb' ? 4847 : 4499),
                    time: 1
                });
            }
            return;
        }
        setTimeout(function () {
            insertBanner(mr.id('slot_' + data.slot), data);
        }, 100);
    }
})(window.mr);
splashRadar('content', 1);