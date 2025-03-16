initDftTargeting();
mgzUI.notLoadAllAds = true;
var taboolaFeed = Globals.taboolaFeed || {};

if (Globals.features.dont_send_analytics_observer) {
    Env.enableAnalyticsFromSettings();
}

setTimeout(function () {
    window.GA_service.trackPageView('feed');
}, 500);

var isFirstRender = false;
mgzTaboola.defineWidget(taboolaFeed, function () {
    window._taboola._renderedWidgets = [];
    window._taboola.push({
        listenTo: 'visible',
        handler: function (e) {
            if (!isFirstRender) {

                AbFire.sendAbEvent('magazine_ab ', 'ab_vA');
                isFirstRender = true;
            }
        }
    });
});

console.log(Globals.version);