if (window.pageData && !window.squizAnalyticsOverride) {
        window.pageData.visitor = window.pageData.visitor || {};
        window.pageData.visitor.ipAddress = '54.173.50.130' || '54.173.50.130';
    
        const searchPath = window.location.pathname.replace('/_nocache', '').replace('/recache', '');
        if (!['/search-results', '/test-folder/elcm-test/search'].includes(searchPath)) {
            window.pageData.event = 'pageLoad';
            window.appData.push(JSON.parse(JSON.stringify(window.pageData)));
            delete window.pageData.event;
        }
    }