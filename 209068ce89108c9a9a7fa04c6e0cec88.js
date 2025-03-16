$(function () {
        var bannerEl   = $('.index-large-banner__OSC');
        var cookieName = 'banner_osc_scr_20231016';
        var bannerLink = 'https://click.aliyun.com/m/1000380434/';
        function showBanner() {
            setTimeout(function () {
                bannerEl.slideDown(500, function () {
                    // refresh aside sticky
                    window.page && page.refreshAsideSticky && page.refreshAsideSticky();
                });
                bannerEl.on('click', function () {
                    window.open(bannerLink);
                });
                bannerEl.on('click', '.close', function (e) {
                    e.stopPropagation();
                    bannerEl.slideUp(500, function () {
                        $('.index-banner-wrap').remove();
                        // refresh aside sticky
                        window.page && page.refreshAsideSticky && page.refreshAsideSticky();
                    });
                    Cookies.set(cookieName, 1, {expires: 90, path: '/'});
                });
            }, 1000);
        }
        if (!Cookies.get(cookieName)) {
            showBanner();
        }
    });