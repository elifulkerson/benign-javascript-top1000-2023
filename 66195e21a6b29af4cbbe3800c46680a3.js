/*<![CDATA[*/
        
        var _env = "prod";
        var mallFrontRoot = "//www.n11.com";
        var envSpecificMFRoot = "//www.n11.com";
        var mallFrontBaseRoot = "//www.n11.com";
        var staticRoot = "https://n11scdn.akamaized.net/static";
        var noImagePath = staticRoot + '/images/layout/no-image.jpg';

        var onProductImageError = function(img) {
        img.src = noImagePath;
        };


        var partFinderEnabled = true;
        var walletEnabled = false;
        var walletBetaUser = false;
        var localizationEnabled = true;
        var realTimeActive = 'true';
        var isDevMode = false;
        var _curDate = 1697432712479;

        var showBracesOnBasketHolder = showBracesOnBasketHolder || false;
        var recommendationEnabled = true;
        var getLabel = function (key) {
            return dmallLabels[key] || '';
        };

        var realTimeCountServiceConfig = {
            campaignCountServiceEnabled : false,
            productCountServiceEnabled : false,
            promotionCountServiceEnabled : false,
            shockingCampaignCountServiceEnabled : false
        };

        var userAuthenticated = false;
        var userProfile = userProfile || {};

    /*]]>*/