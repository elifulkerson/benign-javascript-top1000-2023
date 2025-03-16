var url = window.location.href;
        if (url.indexOf("/roots/") < 0 && url.indexOf("index.html") < 0) {
            var bzw315_bcitycode = $.cookie('bzw315_bcitycode');
            if (bzw315_bcitycode != null && bzw315_bcitycode != '' && bzw315_bcitycode != 'www') {
                location.href = "//" + bzw315_bcitycode + ".bzw315.com/";
            }
        }