window._qevents = window._qevents || [];

    (function() {
        var elem = document.createElement('script');
        elem.src = (document.location.protocol == "https:" ? "https://secure" : "http://edge") + ".quantserve.com/quant.js";
        elem.async = true;
        elem.type = "text/javascript";
        var scpt = document.getElementsByTagName('script')[0];
        scpt.parentNode.insertBefore(elem, scpt);
    })();

    window._qevents.push({
        qacct:"p-3aud4J6uA4Z6Y",
        uid:"__INSERT_EMAIL_HERE__"
    });