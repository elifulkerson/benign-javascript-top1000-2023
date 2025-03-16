var files = ['https://staticx1.dditscdn.com/jsm2/site/livejasmin/script/bundle/main2.cf4d.css'],
                excludePages = ['auth.loginmember', 'signup.signupmember', 'favorite2.index'],
                bodyId = 'index.index';
            if (excludePages.indexOf(bodyId) === -1) {
                files.push('https://staticx1.dditscdn.com/jsm2/site/livejasmin/script/bundle/main3.ccdd.css')
            }
            if (bodyId !== 'chathtml5.performer') {
                files.push('https://staticx1.dditscdn.com/jsm2/site/livejasmin/css/armageddon-client.2e0d4.css')
            }
            (function (files) {
                for (var i = 0; files.length > i; i++) {
                    var e = document.createElement('link');
                    e.rel = 'stylesheet';
                    e.href = files[i];
                    e.type = 'text/css';
                    var e2 = document.getElementsByTagName('link')[0];
                    e2.parentNode.insertBefore(e, e2);
                }
            })(files)