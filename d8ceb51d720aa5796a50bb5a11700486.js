var _deq = _deq || [];
    _deq.push(['setConfig', {
        projectId: 'c8c3489e-f329-40e8-bcfc-1f852e512b01',
        apiKey: '5fb72d88-baeb-4ca1-aa5a-6b7c921e159d',
        cookieDays: 365
    }]);
    _deq.push(['init']);
    (function() {
        var contentId = 'null';
        if (typeof window.globalOptions.contentId !== 'undefined') {
            contentId = "'" + window.globalOptions.contentId + "'";
        }

        var node = document.createElement('script');
        node.type = 'text/javascript';
        node.async = !0;
        node.setAttribute('data-config', "{'layout': 'homepage', 'contentid': " + contentId + ", 'jobid': 'J9999'}");
        node.src = 'https://a.bf-tools.net/de/de.js';
        var scripts = document.getElementsByTagName('script')[0];
        scripts.parentNode.insertBefore(node, scripts)
    })()