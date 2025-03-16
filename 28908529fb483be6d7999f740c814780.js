function OptanonWrapper() {
        window.gtmDataLayer.push({
            event: 'OneTrustGroupsUpdated'
        });
        window.$ && typeof window.$ == 'function' && $(window).trigger('oneTrustReady');
    }