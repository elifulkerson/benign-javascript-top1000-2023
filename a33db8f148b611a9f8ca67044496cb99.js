(function () {
            if (typeof WeixinJSBridge == 'object' && typeof WeixinJSBridge.invoke == 'function') {
                handleFontSize();
            } else {
                document.addEventListener('WeixinJSBridgeReady', handleFontSize, false);
            }
            function handleFontSize() {
                var docEl = doc.documentElement;
                // var docWidth = docEl.clientWidth;
                var docWidth = getWidth();
                var rem = docWidth / window.__IFENG_ENV__.divisor;
                if (/\/ipad/.test(location.href)) {
                    rem = window.__IFENG_ENV__.minWidth / window.__IFENG_ENV__.divisor;
                } else {
                    if (docWidth > window.__IFENG_ENV__.maxDocWidth) {
                        rem = window.__IFENG_ENV__.maxWidth / window.__IFENG_ENV__.divisor;
                    } else {
                        rem = window.__IFENG_ENV__.minWidth / window.__IFENG_ENV__.divisor;
                    }
                }

                // 设置网页字体为默认大小
                WeixinJSBridge.invoke('setFontSizeCallback', { fontSize: 0 });
                setTimeout(function () {
                    document.documentElement.style.fontSize = rem + 'px';
                }, 0);
                // 重写设置网页字体大小的事件
                WeixinJSBridge.on('menu:setfont', function () {
                    WeixinJSBridge.invoke('setFontSizeCallback', { fontSize: 0 });
                    setTimeout(function () {
                        document.documentElement.style.fontSize = rem + 'px';
                    }, 0);
                });
            }
        })();