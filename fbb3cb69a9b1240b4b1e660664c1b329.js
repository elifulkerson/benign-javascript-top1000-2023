(function (win, doc) {
            var docEl = doc.documentElement;

            function setRemUnit() {
                // console.log('runSetRemUnit');
                // console.log('docEl.clientWidth=======>', docEl.clientWidth);
                var docWidth = docEl.clientWidth;
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

                if (typeof __articleEditMode__ !== 'undefined' && __articleEditMode__) {
                    docEl.classList.add('article-edit-mode');
                } else {
                    docEl.style.cssText = 'font-size: ' + rem + 'px';
                }
            }

            var resetRemUnit = null;

            win.addEventListener(
                'resize',
                function () {
                    clearTimeout(resetRemUnit);
                    resetRemUnit = setTimeout(setRemUnit, 200);
                },
                false
            );

            win.addEventListener(
                'pageshow',
                function (e) {
                    if (e.persisted) {
                        clearTimeout(resetRemUnit);
                        resetRemUnit = setTimeout(setRemUnit, 200);
                    }
                },
                false
            );

            setRemUnit();

            if (win.devicePixelRatio && win.devicePixelRatio >= 2) {
                var testEl = doc.createElement('div');
                var fakeBody = doc.createElement('body');

                testEl.style.border = '0.5px solid transparent';
                fakeBody.appendChild(testEl);
                docEl.appendChild(fakeBody);

                if (testEl.offsetHeight === 1) {
                    docEl.classList.add('hairlines');
                }

                docEl.removeChild(fakeBody);
            }

            if (doc.readyState === 'complete') {
                doc.body.style.fontSize = 12 + 'px';
            } else {
                doc.addEventListener(
                    'DOMContentLoaded',
                    function (e) {
                        doc.body.style.fontSize = 12 + 'px';
                    },
                    false
                );
            }
        })(window, document);