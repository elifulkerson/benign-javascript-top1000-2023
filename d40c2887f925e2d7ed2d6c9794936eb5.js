var useragent = navigator.userAgent;
        var useragent = navigator.userAgent; var issmartphone = false;
        if (useragent.toLowerCase().indexOf("pixel") >= 0 && useragent.toLowerCase().indexOf("android") >= 0)
        { issmartphone = true; }

        if (issmartphone) {

            window.location.href = 'https://www.ndtv.com';
        }