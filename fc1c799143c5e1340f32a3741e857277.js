(function (im) {
        if (im) {
            var l = window.location,
                r = encodeURIComponent(document.referrer),
                p = l.pathname,
                s = l.search,
                ua = navigator.userAgent,
                rv = /^\/video\/(\d+)\.html/,
                rfp = /^\/f\/p\/(\d+)\.html/,
                rminiv = /^\/profile\/watchMini\.php/,
                addref = function (b) {
                    return b + s + (r ? (s ? '&' : '?') + 'referrer=' + r : '');
                },
                go = function (u) {
                    l.replace(u);
                },
                cok = document.cookie.split(';'),
                mh = l.host == 'dev.v.6.cn' ? 'dev-m.6.cn' : 'm.6.cn',
                ms,
                i,
                coki;

            for (i = 0; i < cok.length; i++) {
                coki = cok[i].trim();
                if (coki.indexOf('mobile-host=') == 0) {
                    mh = coki.slice(12);
                    break;
                }
            }
            ms = 'http' + (l.host == 'dev.v.6.cn' ? '' : 's') + '://' + mh;
            if (p == '/') {
                go(addref(ms));
            } else if (/^\/\d+$/.test(p)) {
                go(addref(ms + p));
            } else if (p == '/user/applyLive.php') {
                go(addref(ms + '/operations/applylive'));
            } else if (rv.test(p)) {
                go(addref(ms + '/video/' + rv.exec(p)[1]));
            } else if (rfp.test(p)) {
                go(addref(ms + '/family/' + rfp.exec(p)[1] + '/synopsis'));
            } else if (p == '/user/payshow.php') {
                if (/micromessenger/i.test(ua) && /iPhone|iPad/i.test(ua)) {
                    go(addref(ms + '/event/ios-wechat-tip'));
                } else {
                    go(addref(ms + '/pay'));
                }
            } else if (rminiv.test(p)) {
                go(addref(ms + '/v/' + /vid=(\d+)/.exec(s)[1]));
            } else if (p.indexOf('/event/salerecharge/firstCharge.php') == 0) {
                go(ms + '/appmate/promotion-collection?thepage=newFirstCharge');
            } else if (p.indexOf('/event/salerecharge/') == 0) {
                go(
                    ms +
                        '/appmate/promotion-collection?thepage=dailyChargeWelfare'
                );
            } else if (p.indexOf('/minivideo/') == 0) {
                go(ms + '/v');
            }
        }
    })(
        /Android|webOS|iPhone|iPad|iPod|BB10|IEMobile|^\S+$/i.test(
            window.navigator.userAgent
        )
    );

    window.myHost = '/';

    /*  */
    (function (s, c) {
        if (s.indexOf('coop=') > -1 || c.indexOf('coop=') > -1) {
            var jsElm, css;

            if (
                window.top != window &&
                (s.indexOf('coop=1074') > -1 || c.indexOf('coop=1074') > -1)
            ) {
                /**/
                /*  */
                jsElm =
                    '<script src="https://vj0.xiu123.cn/csjs/_/partner/partner_bootstrap_top_516.js"><\/script>';
                /*  */
                document.write(jsElm);
            } else {
                /**/
                var _sReg = s.match(/coop=(\d+)/) || [];
                var _cReg = c.match(/coop=(\d+)/) || [];

                if (_sReg[1] > 1005 || _cReg[1] > 1005) {
                    /*  */
                    jsElm = '<script src="https://vj0.xiu123.cn/mini/js/coop/coop_header_75.js"><\/script>';
                    css =
                        'https://vj0.xiu123.cn/mini/css/coop/coop_public_69.css';
                    /*  */
                    document.write(jsElm);
                    document.write(
                        '<link rel="stylesheet" type="text/css" href="' +
                            css +
                            '" />'
                    );
                }
            }
        }
    })(window.location.search, document.cookie);