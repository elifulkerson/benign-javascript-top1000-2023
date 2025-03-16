setTimeout(function () {
        var w = window;
        var d = document;
        var s = d.createElement('script');
        s.src = '//cdn.adpushup.com/42260/adpushup.js';
        s.crossOrigin = 'anonymous';
        s.type = 'text/javascript';
        s.async = true;
        (d.getElementsByTagName('head')[0] || d.getElementsByTagName('body')[0]).appendChild(s);
        w.adpushup = w.adpushup || { que: [] };
    }, 10000);