window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'AW-10996622296');
    if (
        location.search.indexOf('gtag=1') > -1 ||
        document.cookie.indexOf('gtag=1') > -1 ||
        document.referrer.indexOf('google') > -1
    ) {
        document.cookie = 'gtag=1;path=/;max-age=31536000;domain=.6.cn';
        $LAB.script(
            'https://www.googletagmanager.com/gtag/js?id=AW-10996622296'
        );
    }