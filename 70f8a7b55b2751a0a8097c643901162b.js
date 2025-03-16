var Config = {
    domains: {
        twitterkey: 'Pulzo',
        facebookkey: '482381891947090',
        desktop_scheme: 'https://www.pulzo.com',
        reactiveUrl: 'https://services.pulzo.com'
    },
    variables: {
        device: $('#deviceVar').val(),
        siteLocation: $('#siteLocation').val(),
        native: $('#active_native').val(),
        pushdown: $('#active_pushdown').val(),
        interstitial: $('#active_interstitial').val(),
        flotante: $('#active_float').val(),
        intext: $('#active_intext').val(),
        section: $('#currentSection').val(),
        adblocker: $('#active_adblocker').val(),
        native_plus: $('#native_plus').val(),
        breakingNews: 0
    }
};

if ($('.last-minute-desktop').length > 0 || $('.last-minute-movil').length > 0) {
    Config.variables.breakingNews = 1;
}

jQuery.loadScript = function (url, callback) {
    jQuery.ajax({
        url: url,
        dataType: 'script',
        success: callback,
        async: true
    });
};