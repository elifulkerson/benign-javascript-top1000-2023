window.yodaTheme = setTheme;
        function setTheme(theme) {
            var theme = theme || 'meituan';
            var header = document.getElementById('header');
            header.style.display = "block";
            var logo = document.getElementById('logo');
            var footer = document.getElementById('footer');
            footer.style.display = "block";

            var link = document.createElement('link');
            link.rel = 'shortcut icon';
            link.type = 'image/x-icon';

            if (theme === 'meituan' || theme === 'mt' || theme === '') {
                link.href = '/static/favicon.ico';
            }
            if (theme === 'dianping' || theme === 'dp') {
                header.className = 'dpHeader';
                logo.className = 'dpLogo';
                footer.innerHTML = '© 2003-2021 dianping.com, All Rights Reserved.';
                link.href = '//www.dpfile.com/s/res/favicon.5ff777c11d7833e57e01c9d192b7e427.ico';
            }

            document.head.appendChild(link);
        }

            var options = {
            requestCode: "c2675cd9a10b4dae83fdd05f85029465",
            succCallbackUrl: "https\x3A\x2F\x2Foptimus\x2Dmtsi\x2Emeituan\x2Ecom\x2Foptimus\x2FverifyResult\x3ForiginUrl\x3Dhttps\x253A\x252F\x252Fwww\x2Edianping\x2Ecom\x252F",
            failCallbackUrl: "",
            root: "root",
            theme: "dianping",
            isMobile: false,
            display: ""
        }
        YodaSeed(options, "");