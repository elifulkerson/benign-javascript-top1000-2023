(function (window) {
    var yaftConf = {
        modules: ['Col1-0-ContentCanvas', 'header', 'dl', 'choose-news', 'event-coverage',
            'game-of-the-day', 'recently-played-games', 'games-categories', 'healthgrades',
            'horoscopes', 'jac', 'lending-tree', 'mortgage-rates', 'most-popular', 'readmo',
            'recommended-for-you', 'standard', 'standard-automated', 'stream', 'unified-player', 'weather'],
        usePrefixRegex: true,
        preferDataModNameOverId: true,
        adModules: [ 'jac-ad_mpu', 'jac-ad_leaderboard', 'jac-ad_header_mobile'],
        maxWaitTime: 3000
    };
    var perfData = {};

    window.YAFT.init(yaftConf, function(aftData, aftError) {
        const aft = Math.round(aftData.aft);
        const aftNoAd = Math.round(aftData.aftNoAd);
        const timeToVisuallyComplete = Math.round(aftData.visuallyComplete);
        const startRender = Math.round(aftData.startRender);
        const plt = Math.round(aftData.pageLoadTime);

        if (plt) {
            recordPerfData('common', 'PLT', plt);
        }

        if (aft) {
            recordPerfData('common', 'AFT', aft);
            recordPerfData('common', 'AFT1', aft);
            recordPerfData('common', 'AFTNOAD', aftNoAd);
            recordPerfData('common', 'VIC', timeToVisuallyComplete);
            recordPerfData('common', 'STR', startRender);
        }

        if (window.rapidInstance) {
            window.rapidInstance.beaconPerformanceData(perfData);
        } else {
            document.addEventListener(
                'rapid:init',
                function () {
                    window.rapidInstance.beaconPerformanceData(perfData);
                },
                { passive: true, once: true }
            );
        }
        perfData = {};
    });

    // This is helper function which is used in YAFT init callback function to record user and common timings
    function recordPerfData(type, name, value) {
        if (type === 'common') {
            if (!perfData.perf_commontime) {
                perfData.perf_commontime = {};
            }

            if (!perfData.perf_commontime.initialPageLoad) {
                perfData.perf_commontime.initialPageLoad = {};
            }

            perfData.perf_commontime.initialPageLoad[name] = value;

            return true;
        } else if (type === 'user') {
            if (!perfData.perf_usertime) {
                perfData.perf_usertime = {};
            }

            if (!perfData.perf_usertime.utm) {
                perfData.perf_usertime.utm = {};
            }

            perfData.perf_usertime.utm[name] = value;

            return true;
        }

        return false;
    }
})(window);