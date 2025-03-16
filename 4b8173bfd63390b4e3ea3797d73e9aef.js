window.RAYCHAT_TOKEN = "92cb3eb0-4f96-4f45-b1be-584d0c59ba8f" ;

        var defaultLang = 'fa';
        var providerName;
        try {
            if (window.localStorage) {
                defaultLang = window.localStorage.getItem('lang');
                providerName = window.localStorage.getItem('provider');
            }
        } catch(error) {
            defaultLang = 'fa';
        }
        
            providerName = providerName || window.location.host.replace('www.', '').replace('.com', '');
        
        window.__APP_CONFIG__ = {
            lang: defaultLang,
            provider: providerName,
        }
        window.addEventListener('appLoaded', function () {
            var $loadingElem = document.getElementById('app-preloader');
            $loadingElem.classList.add('hide');
            setTimeout(function () {
                $loadingElem.remove();
            }, 1000);
        });