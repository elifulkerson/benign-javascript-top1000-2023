require.config({
    // Local Directory
    baseUrl: "https://www.thehindu.com/theme/js",
    // Script Locations
    paths: {
    "jquery":"3.4.1/jquery.min",
    "slick": "th-online/slick.min",
    "jplayer": "th-online/jquery.jplayer.min",
    "jplayerlist": "th-online/jplayer.playlist.min",
    "marquee": "th-online/jquery.marquee.min",
    "bootstrap": "th-online/bootstrap.min",
    "bootstrap-datepicker": "th-online/bootstrap-datepicker.min",
    "iframeResizer": "iframeResizer.min",
    "iframecontent": "iframeResizer.contentWindow.min",
    "moment": "moment.min",
    "crypto": "crypto-js.min",
    "jquery-ui":"jquery-ui-1.13.2.min","count":"count.min","owlCarousel":"th-online/owl.carousel.min","custom":"https://www.thehindu.com/theme/js/th-online/custom.min.js?ver=1697088135",},
    shim: {	
    'slick': ['jquery'],
    'owlCarousel': ['jquery'],
    'jplayerlist': ['jquery','jplayer']
    },
    waitSeconds:0
    });