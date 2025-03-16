(function () {
            var a = document.createElement("script");
            a.async = !0;
            a.type = "text/javascript";
            a.onerror = function () { window.admerrorload = true; };
            a.src = ("https:" == document.location.protocol ? "https:" : "http:") + "//media1.admicro.vn/core/admcore.js";
            var b = document.getElementsByTagName("script")[0];
            b.parentNode.insertBefore(a, b);
        })();