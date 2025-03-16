qcdata = {} || qcdata;
    (function(){
        var elem = document.createElement('script');
        elem.src = (document.location.protocol === "https:" ? "https://secure" : "http://pixel") +
            ".quantserve.com/aquant.js?a=p-80xBzMhbKolFI";
        elem.async = true;
        elem.type = "text/javascript";
        var scpt = document.getElementsByTagName('script')[0];
        scpt.parentNode.insertBefore(elem,scpt);
    }());

    var qcdata = {qacct: 'p-80xBzMhbKolFI', labels: ''};