(function(document, window){
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://api.pushnami.com/scripts/v1/pushnami-adv/5f85b8d1931e9a0010c6d0c2";
    script.onload = function() {
				
        Pushnami
            .update({
                "category": "news",
				"articlecat": ""
            })
            .prompt();
    };
    document.getElementsByTagName("head")[0].appendChild(script);
})(document, window);