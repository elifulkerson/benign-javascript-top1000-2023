function OptanonWrapper() {
            const links = document.querySelectorAll('#onetrust-banner-sdk a');
            links.forEach((link) => window.teamviewer.queryParameters.addQueryParameterToSingleLinkElement(link));
        }
        function wdScrollCookieText() { document.getElementById('onetrust-policy-text').scrollTo(0,0); }