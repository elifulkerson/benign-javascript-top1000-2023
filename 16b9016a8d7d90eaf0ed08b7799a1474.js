var deviceType = "DESKTOP";
    var carouselAttributes = {};
    carouselAttributes.pageIdent                = "5050";
    carouselAttributes.carouselId               = "OriginalsDT";
    carouselAttributes.carouselType             = "ASIN_LIST";
    carouselAttributes.carouselViewTemplateType = "PRODUCT_6";
    carouselAttributes.hideNavigation           = "false";
    carouselAttributes.slotCode                 = "c9";
    carouselAttributes.templateType             = "PRODUCT_6";
    carouselAttributes.itemsPerPageDefault      = "1";
    carouselAttributes.itemsPerPageMobile       = "";
    carouselAttributes.itemsPerPageTablet       = "";
    carouselAttributes.carouselHeading          = "Exclusive Audible Originals";
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
    carouselAttributes.inputArgsType            = "Product";
    carouselAttributes.makeFallbackRequest      = false;
    carouselAttributes.lazyLoad                 = 'ondemand';
    carouselAttributes.responsive               = false;
    carouselAttributes.colorPalette             = "inverse";


    
        var sourceAsins = "B086WP794Z,B0C4M2ZKT4,B09PSLLWFG,B07LFLM4LJ,B09M1T89PY,B01L082HJ2,B0BFK1K36D,B0C8VJV8W1,B0B6QBNK4J,B084P6FQC8,B01N17THEO,B088C4DBYP,B084GYSS73,B07PP44743,B07341FZDC,B0CD8PJ51F,B0B6CY45SR,B0BQNYR1QQ,B0BBY76WP4,B0979GG9T2,B0C66LN3JW,B098TWVZVD,B07BHVWFSM,B0CBQLZF4M,B09J5XCVNC,B095Z5DYLP,B09QRS52WV,B09V3FZKGH,B08CMB2WMV,B08L5HMCTS";
        carouselAttributes.sourceAsins = sourceAsins && sourceAsins.split(',');

        
    

    
    

    if (deviceType === 'DESKTOP') {
        carouselAttributes.itemsPerPage = carouselAttributes.itemsPerPageDefault;
    } else {
        carouselAttributes.itemsPerPage = carouselAttributes.itemsPerPageTablet;
    }

    window.audibleCarousel = window.audibleCarousel || {};
    window.audibleCarousel["carouselData_c9"] = carouselAttributes;