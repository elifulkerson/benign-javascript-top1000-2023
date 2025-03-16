(function() { 
        if(window.manual_articles) {
            window.gdwc = window.gdwc || [];
            var script = document.createElement('script');
            script.defer = true;
            script.src = "https://webcomponent.gedidigital.it/gdwc-loader/js/gdwc-loader.js";
            document.getElementsByTagName('head')[0].appendChild(script);
        }
    })();