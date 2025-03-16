(function(){
        let loginBoxLoaded = false;
        let lastCheck = 0;
        let loadLoginBox = function(signature) {
            if (loginBoxLoaded) {
                if (signature) {
                    $("#UserAdscore").val(signature || "ME");
                }
                return true;
            }
            $("#members_dash .content .inner").load("/login_box.html", function() {
                $("#UserAdscore").val(signature || "MEL");
                loginBoxLoaded = true;
            });  
        };
        let updateSignature = function() {
            if (lastCheck && (Date.now() - lastCheck < 60000)) {
                return false;
            }
            AdscoreInit("QgEpAQAAAAAAKbzVC73d7KvD9MUxLPjvOq_lpo4", {
                callback: function(result) { 
                    if (result.signature) {
                        loadLoginBox(result.signature);
                    } else {
                        loadLoginBox("MF");
                    }
                }
            });
            lastCheck = Date.now();
        };
        updateSignature();
        $(document).ready(function() {
            setTimeout(loadLoginBox, 5000);
            setInterval(updateSignature, 1000);
        });
    })();