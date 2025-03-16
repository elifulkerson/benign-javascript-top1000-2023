var refererHost = "direct";

    if (document.referrer) {
        var docReferrerHostMatches = new RegExp("://([^/]*)/.*").exec(document.referrer);
        /* Check just to be safe */
        if (docReferrerHostMatches) {
            var docReferrerHost = docReferrerHostMatches[1];
            refererHost = docReferrerHost;
        }
    }

    // login tracking (1)
    DM.pageEvents.listen(DM.pageEvents.PAGE_LOGIN_BUTTON_CLICKED, function (obj, event, pars){
        if (pars.action === 'loggingIn'){
            document.cookie = "attempting_login=true; path=/";
        }
    });

    var pagemeta = {
        environment: 'production',
        clientSegmentation: {"segments":{"a":{"weight":10},"b":{"weight":10},"c":{"weight":80}},"shuffleNumber":2,"defaultSegment":"default"},
        comscoreClientId: '14366613',
        comscoreNsSite: 'master',
        domain: 'dailymail.co.uk',
        channel: '/ushome',
        channelId: '561',
        subChannel: '/ushome',
        subChannel2: '',
        contentType: 'home',
        articleTitle: '',
        articleId: '',
        articleVersionNumber: '',
        internalSearchTerms: searchTerms,
        loggedInStatus: (DM.isLoggedIn ? 'Logged In' : 'Logged Out'),
        galleryTitle: '',
        galleryId: '',
        threadTitle: '',
        threadId: '',
        userId: DM.userId,
        partnerSite:  '',
        publishedDate: null,
        updatedDate: null,
        authorName: '',
        authorsIds: [],
        authorsShortNames: [],
        errorUrl: '',
        serverDate: new Date(1697430587359),
        url: 'D=g',
        referringSubDomain: refererHost,
        topics: [],
        inlineLinks: '',
        pageName: '/ushome/home',
        products: '',
        bundleLocation: 'https://www.dailymail.co.uk/static/gunther/17.18.1',
        bundleVersion: '17.18.1',
        syncBundleLocation: 'https://www.dailymail.co.uk/static/mol-fe/static/mol-fe-sync-bundle/9.7.0',
        syncBundleVersion: '9.7.0',
        asyncBundleLocation: 'https://www.dailymail.co.uk/static/mol-fe/static/mol-fe-async-bundle/7.2.5',
        asyncBundleVersion: '7.2.5',
        videoBundleLocation: 'https://www.dailymail.co.uk/static/videoplayer/7.2.0',
        videoBundleVersion: '7.2.0',
        adsBundleLocation: 'https://www.dailymail.co.uk/static/mol-adverts/7.9.0',
        adsBundleVersion: '7.9.0',
        feTag: 'fe_desktop_default',
        appVersion: '5.449.0',
        configVersion: '3624',
        textBased: false,
        isDecorator: '' === 'true',
        isFeatureArticle: '' === 'true',
        webPush: {"baseEndpoint":"https://hulkprod.anm.co.uk/api/web-push-notification/","hostname":"dailymail.co.uk","promptFrequency":"7d","pullNotificationEnabled":true,"pullNotificationTTL":1800000,"pullNotificationScrollThreshold":500,"pullNotificationStartDelay":0,"promptEnabled":true},
        wordCount: '0:0:0:0:0:0:0',
        relatedWithThumbs: true,
        renderPlatform: 'desktop',
        isTopicLiveBlog: false
       };
         // login tracking (1)


     window.feTag = 'fe_desktop_default';

    if (document.cookie.replace(/(?:(?:^|.*;\s*)attempting_login\s*\=\s*([^;]*).*$)|^.*$/, "$1") === "true" && DM.isLoggedIn) {
            document.cookie = "attempting_login=false; path=/";
            pagemeta.registrationEntry = 'Successfully Logged In';
    }

    DM.setPageMetadata(pagemeta);

    /************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
    DM.pageEvents.fireEvent(DM.pageEvents.PAGE_RENDER_STARTED, DM.getPageMetadata());