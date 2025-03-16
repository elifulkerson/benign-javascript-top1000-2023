if (window.FontFace) {
        var html = document.getElementsByTagName('html')[0];
        html.classList.add('no-icons');


        var icons = new window.FontFace(
            "xh-icons",
            "url(https://static-lvlt.xhcdn.com/xh-desktop/fonts/ve2b23fd01d.xh-icons.woff2) format('woff2')," +
            "url(https://static-lvlt.xhcdn.com/xh-desktop/fonts/vb712dad6ee.xh-icons.woff) format('woff')," +
            "url(https://static-lvlt.xhcdn.com/xh-desktop/fonts/vb05bddf710.xh-icons.ttf) format('truetype')," +
            "url(https://static-lvlt.xhcdn.com/xh-desktop/fonts/v123bd4d9a2.xh-icons.eot) format('embedded-opentype')"
            , {
                style: "normal",
                weight: "400"
            }
        );

        document.fonts.add(icons);
        icons.loaded.then(
            function () {
                html.classList.remove('no-icons');
            }
        );
        icons.load();
    } else {
        var link = document.createElement('link');

        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = "https://static-lvlt.xhcdn.com/xh-desktop/css/ve6ee81efb1.font.css";

        document.head.appendChild(link);
    }