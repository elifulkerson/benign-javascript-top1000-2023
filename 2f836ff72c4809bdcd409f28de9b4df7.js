// iFramely lazy load snippet
            function loadIframelyEmbedJs() {
            if (document.querySelectorAll('[data-iframely-url]').length === 0) return;
            var iframely = window.iframely = window.iframely || {};
            var widgets = iframely.widgets = iframely.widgets || {};
            if (widgets.load) {
            widgets.load();
        } else {
            var ifs = document.createElement('script'); ifs.type = 'text/javascript'; ifs.async = true;
            ifs.src = ('https:' == document.location.protocol ? 'https:' : 'http:') + '//oembed.vice.com/embed.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ifs, s);
        }
        }