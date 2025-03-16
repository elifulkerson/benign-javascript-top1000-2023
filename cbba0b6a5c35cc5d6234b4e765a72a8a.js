if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', function () {
            RakeLoadScript();
        });
    } else {
        document.attachEvent("onreadystatechange", function() {
            if (document.readyState !== "loading") {
                RakeLoadScript();
            }
        });
    }