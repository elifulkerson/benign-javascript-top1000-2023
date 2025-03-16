(function () {
        var img = new Image();
        var pt = (document.location.protocol == "https:" ? "https:" : "http:");
        img.src = pt + '//lg1.logging.admicro.vn/ftest?url=' + encodeURIComponent(document.URL);
        var img1 = new Image();
        img1.src = pt + '//amcdn.vn/ftest?url=' + encodeURIComponent(document.URL);
    })();