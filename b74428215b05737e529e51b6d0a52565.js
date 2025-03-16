__tcfapi("addEventListener", 2, function(tcData, success) {
    if (success && tcData.unicLoad  === true) {
        if(!window._initAds) {
            window._initAds = true;
            var script = document.createElement('script');
            script.async = true;
            script.src = '//dsh7ky7308k4b.cloudfront.net/publishers/gsmarenacom_new_d.min.js';
            document.head.appendChild(script);
        
	    var script = document.createElement('script');
            script.async = true;
            script.src = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
            document.head.appendChild(script);		

        var s = document.createElement('script');
			s.async = true;
			s.src = '//btloader.com/tag?o=5184339635601408&upapi=true';
			document.head.appendChild(s);    

            
	}
    }
});