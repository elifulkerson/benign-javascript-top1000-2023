window._newsroom = window._newsroom || [];
        window._newsroom.push({ pageTemplate: 'news-home' });
        window._newsroom.push({ pageDashboard: 'news-home' });
        window._newsroom.push('auditClicks');
        window._newsroom.push('trackPage');
        !function (e, f, u) {
            e.async = 1;
            e.src = u;
            f.parentNode.insertBefore(e, f);
        }(document.createElement('script'),
            document.getElementsByTagName('script')[0],
            'https://c2.taboola.com/nr/ndtv/newsroom.js');