window.addEventListener('load', (event) => {
        if (typeof window.csa !== 'undefined' && typeof window.csa === 'function') {
            var csaLatencyPlugin = window.csa('Content', {
                element: {
                    slotId: 'LoadAds',
                    type: 'service-call'
                }
            });
            csaLatencyPlugin('mark', 'clickToBodyEnd', 1697426830013);
        }
    })