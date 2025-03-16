(function(YQReloadMobile) {
            var localUrl = location.href;
            var oriHost = location.host;
            var isMobile = YQReloadMobile.isMobile();
            var desHref;

            var regUrl = /[\?\#]nums=[\w\.\_]+/;
            var isMatchUrl = regUrl.exec(localUrl);

            /* 命中M站 */
            if (isMobile) {
                if (isMatchUrl) {
                    /* 重定向M站结果页 */
                    var pathName = location.pathname;
                    var oPath = pathName.match(/^\/[\w-]+/);
                    var langPath = oPath[0];
                    var newPathName = langPath + '/track';

                    desHref = '//m.17track.net' + newPathName + location.search + location.hash;
                } else {
                    /* 重定向M站首页 */
                    desHref = localUrl.replace(oriHost, 'm.17track.net');
                }

                window.location.href = desHref;
                return;
            }

            /* 命中T站，带单号的重定向到T站 */
            if (isMatchUrl) {
                desHref = localUrl.replace(oriHost, 't.17track.net');
                window.location.href = desHref;
                return;
            }
        })(YQReloadMobile);