(function() {
        var setupCreative = function() {
            window.$ad_fkiht9ga = document.getElementById('ad_fkiht9ga');
            window.imageCreative_fkiht9ga = DACXImageTemplateCreative.default($ad_fkiht9ga, {"cta":{"linkIn":true,"type":"url","url":"https://pay.amazon.com/using-amazon-pay/chase-prime-visa?aaxitk=consumer-marketing"},"backgroundImage":{"url":"https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/af37c532-2133-43df-ac0e-66fe335ac0c8.png","lowResUrl":""},"adChoicesPosition":"topright","additionalHtml":"","impressionUrls":[],"clickTrackerUrls":["https://aax-us-iad.amazon.com/x/c/REyB23mVTDO50MnH-fhBG5gAAAGLNoWmWgEAAAH0AQBvbm9fdHhuX2JpZDQgICBvbm9fdHhuX2ltcDEgICBu539L/"],"backgroundColor":null,"width":300,"height":250,"isLowResDisplay":false,"creativeImageData":null,"isBordered":false,"locale":"US","region":"na","mediaCentralPath":"https://images-na.ssl-images-amazon.com/images/G/01","privacyUrl":"https://www.amazon.com/adprefs","deviceContext":{"userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:21.0) Gecko/20100101 Firefox/21.0"},"isPreview":null,"isMobile":false,"isBlackjack":false,"isOffsite":false,"use1pRendering":true,"appendQueryParams":"","isExternalLink":false,"adLink":"https://pay.amazon.com/using-amazon-pay/chase-prime-visa?aaxitk=consumer-marketing","cascadingIntent":null,"isAmazonClickUrl":true,"isPrimeNowClickUrl":false,"is1pUrlSafe":true});
        };
        var imageCreative = window.DACXImageTemplateCreative || null;
        if (imageCreative) {
            setupCreative();
        } else {
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.async = true;
            script.src = "https://m.media-amazon.com/images/I/31PckX596+L.js";
            script.onload = setupCreative;
            script.setAttribute("crossorigin", "anonymous");
            (document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(script);
        }
    })();