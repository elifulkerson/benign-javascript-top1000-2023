!(function () {
        var time = new Date().getTime();
    
        $(document.body).bind('mousemove keypress', function(e) {
            time = new Date().getTime();
        });
    
        function refresh() {
            if (new Date().getTime() - time >= 900000) { // 15 Menit
                window.location.reload(true);
            } else {
                setTimeout(refresh, 10000);
            }
        }
        setTimeout(refresh, 10000);
    })();