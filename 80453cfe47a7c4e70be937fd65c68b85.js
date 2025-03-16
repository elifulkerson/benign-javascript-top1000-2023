var isSafari = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
    if (!isSafari) {
        function includeLinkStyle(url) {
            let link = document.createElement("link");
            link.rel = "stylesheet";
            link.type = "text/css";
            link.href = url;
            document.getElementsByTagName("head")[0].appendChild(link);
        }
        includeLinkStyle("https://fonts.googleapis.com/earlyaccess/notosanstc.css");
        includeLinkStyle("https://fonts.googleapis.com/css?family=Noto+Sans+TC:100,300,400,500,700,900&display=swap&subset=chinese-traditional");
    }