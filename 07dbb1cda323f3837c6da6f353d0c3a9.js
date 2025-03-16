window.yelp = window.yelp || {};
            window.yelp.cookieTypePreferencesHeader = '["ANALYTICS","FUNCTIONAL","INTERNAL","STRICTLY_NECESSARY","TARGETING"]';
            window.OneTrust = window.OneTrust || {};
            window.OneTrust.dataSubjectParams = window.OneTrust.dataSubjectParams || {};
            window.OneTrust.dataSubjectParams.id = '';
            window.OneTrust.dataSubjectParams.isAnonymous = true;

            function addCookieManagementScript() {
                var tag = document.createElement('script');
                tag.async = true;
                tag.src = 'https://cdn.cookielaw.org/consent/5fbcd417-fbc1-4fcc-abad-f622f1bba72d/otSDKStub.js';
                tag.type = 'text/javascript';
                tag.charset = 'UTF-8';
                tag.setAttribute('data-domain-script', '5fbcd417-fbc1-4fcc-abad-f622f1bba72d');
                tag.setAttribute('data-document-language', 'true');

                document.head.appendChild(tag);
            }

            if ('requestIdleCallback' in window) {
                requestIdleCallback(addCookieManagementScript, { timeout: 4000 });
            } else {
                setTimeout(addCookieManagementScript, 2000);
            }