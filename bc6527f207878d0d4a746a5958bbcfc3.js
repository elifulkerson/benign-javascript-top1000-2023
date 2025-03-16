// Define dataLayer and the gtag function.
        window.dataLayer = window.dataLayer || [];
        if (typeof gtag !== 'function') function gtag(){ dataLayer.push(arguments); }
        gtag('set', 'developer_id.dOGRkZj', true);

        // Europe is opt-in consent, so ad storage is denied by default.
        gtag('consent', 'default', {
            'ad_storage': 'denied',
            'analytics_storage': 'denied',
            'region': ['AT','BE','BG','CZ','DE','DK','ES','FI','FR','GB','GR','HU','IE','IT','LU','NL','PL','PT','RO','SE','BR','TH','TR'],
            'wait_for_update': 500
        });

        // Passing ad click, client ID, and session ID information in URLs
        gtag('set', 'url_passthrough', true);