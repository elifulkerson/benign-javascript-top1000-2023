var sUserAgent = navigator.userAgent,
            mobileAgents = ['Windows CE', 'iPod', 'Symbian', 'iPhone', 'BlackBerry', 'Android', 'Windows Phone'];
        var _url = location.href;
        if (sUserAgent.match(/iPad/i)) {
            if (!/(\/visualediting)|(\/preview)|(\/ipad)/.test(_url)) {
                location.href = _url.replace('ifeng.com', 'ifeng.com/ipad')
            }
        }
        if (!/\/ipad/.test(_url)) {
            for (var i = 0, len = mobileAgents.length; i < len; i++) {
                if (sUserAgent.indexOf(mobileAgents[i]) !== -1) {
                    location.href = 'https://i.ifeng.com?ch=ifengweb';
                    break;
                }
            }
        }
        var ads = [];