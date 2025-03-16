(function(window, domain) {
    window.beaconeater = {
        url: '/_td_api/beacon/error',
        params: { type: 'error', appName: 'aol', appVersion: '0', site: domain, url: window.location.href },
        getQueryString: function(customErrorParams) {
            const fullErrorParams = Object.assign({}, customErrorParams, window.beaconeater.params);
            const queryString = Object.keys(fullErrorParams).map(function(key) {
                return encodeURIComponent(key) + '=' + encodeURIComponent(fullErrorParams[key]);
            }).join('&');
            return '?' + queryString;
        },
        sendBeacon: function(customErrorParams) {
            fetch(this.url + this.getQueryString(customErrorParams));
        }
    };

    var customEvent = document.createEvent('CustomEvent');
    customEvent.initCustomEvent('beaconeater:init', false, false, {});
    document.dispatchEvent(customEvent);
})(window, 'wwwaolcom');