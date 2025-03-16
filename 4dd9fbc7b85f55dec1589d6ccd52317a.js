var deviceType = "DESKTOP";
    var carouselAttributes = {};
    carouselAttributes.pageIdent                = "5050";
    carouselAttributes.carouselId               = "PastPurchasesAudibleCarousel";
    carouselAttributes.carouselType             = "P13N_RECOMMENDATIONS";
    carouselAttributes.carouselViewTemplateType = "PRODUCT_6";
    carouselAttributes.hideNavigation           = "false";
    carouselAttributes.slotCode                 = "c6";
    carouselAttributes.templateType             = "PRODUCT_6";
    carouselAttributes.itemsPerPageDefault      = "1";
    carouselAttributes.itemsPerPageMobile       = "";
    carouselAttributes.itemsPerPageTablet       = "";
    carouselAttributes.carouselHeading          = "<font color=#ffffff><br>Bestsellers and new releases";
    carouselAttributes.headerText               = "";
    carouselAttributes.hidePagination           = "false";
    carouselAttributes.autoPlay                 = "false";
    carouselAttributes.showLoop                 = "true";
    carouselAttributes.stagePadding             = "0";
    carouselAttributes.centerMode               = "false";
    carouselAttributes.displayDots              = "true";
    carouselAttributes.deviceType               = deviceType;
    carouselAttributes.usePaginatedServiceCalls = "false";
    carouselAttributes.itemsToLoad              = parseInt("30");
    carouselAttributes.itemsLoaded              = parseInt("30");
    carouselAttributes.lastItemIndex            = carouselAttributes.itemsLoaded;
    carouselAttributes.nextPageNo               = 2;
    carouselAttributes.inputArgsType            = "Recommendations";
    carouselAttributes.makeFallbackRequest      = false;
    carouselAttributes.lazyLoad                 = 'ondemand';
    carouselAttributes.responsive               = false;
    carouselAttributes.colorPalette             = "inverse";


    
        var sourceAsins = "";
        carouselAttributes.sourceAsins = sourceAsins && sourceAsins.split(',');

        
    

    
    
        carouselAttributes.contextId                = "AudibleMostPopularListensPremiumStrategy";
        carouselAttributes.isAudibleMarketplace     = "true";

        
        var contextMetadata = {};
        
            contextMetadata["audible-asin"] = "1";
        
            contextMetadata["explicitExcludedAsins"] = "B07Q769RZS;B09KXWLPJG";
        
        carouselAttributes.contextMetadata = contextMetadata;
    

    if (deviceType === 'DESKTOP') {
        carouselAttributes.itemsPerPage = carouselAttributes.itemsPerPageDefault;
    } else {
        carouselAttributes.itemsPerPage = carouselAttributes.itemsPerPageTablet;
    }

    window.audibleCarousel = window.audibleCarousel || {};
    window.audibleCarousel["carouselData_c6"] = carouselAttributes;