(function(src) {
        var a = document.createElement("script");
        a.type = "text/javascript";
        a.async = true;
        a.src = src;
        var b = document.getElementsByTagName("script")[0];
        b.parentNode.insertBefore(a, b)
    })("//cdn.piano.io/api/tinypass.min.js");

    window.pdl = window.pdl || {};
    window.pdl.requireConsent = true;

    tp = window.tp || [];

    tp.push(["init", function() {
        tp.enableGACrossDomainLinking();
    }]);