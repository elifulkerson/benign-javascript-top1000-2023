(function() {
                var viewport = document.querySelector('.js-viewport');
                var date = new Date();
                date.setFullYear(date.getFullYear() + 1);
                function setViewport() {
                    var isLargeViewport = (screen.availWidth > 1300 || screen.availHeight > 1300) && window.matchMedia("(orientation: landscape)").matches;
                    viewport.setAttribute('content', isLargeViewport ? 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no' : 'width=1280, minimum-scale=0.1, maximum-scale=5.0');
                    document.cookie = '_ug_small_screen=' + (isLargeViewport ? 0 : 1) +';path=/;domain=.ultimate-guitar.com;expires=' + date.toUTCString() + ';';
                }
                setViewport();
                window.matchMedia("(orientation: landscape)").addEventListener('change', setViewport)
            })()