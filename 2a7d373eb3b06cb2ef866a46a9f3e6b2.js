var metaTags=document.getElementsByTagName("meta");
var Authors = "no author";
var Sections = "no section";
for (var i = 0; i < metaTags.length; i++) {

    if (metaTags[i].getAttribute("property") == "dable:author") {
        Authors = metaTags[i].getAttribute("content");
    }
	
	if (metaTags[i].getAttribute("property") == "article:section") {
        Sections = metaTags[i].getAttribute("content");
    }
}



  (function() {
    /** CONFIGURATION START **/
    var _sf_async_config = window._sf_async_config = (window._sf_async_config || {});
    _sf_async_config.uid = 67041;
    _sf_async_config.domain = 'okezone.com'; //CHANGE THIS TO THE ROOT DOMAIN
    _sf_async_config.flickerControl = false;
    _sf_async_config.useCanonical = true;
    _sf_async_config.useCanonicalDomain = true;
    _sf_async_config.sections = Sections; // CHANGE THIS TO YOUR SECTION NAME(s)
    _sf_async_config.authors = Authors; // CHANGE THIS TO YOUR AUTHOR NAME(s)
    /** CONFIGURATION END **/
    function loadChartbeat() {
        var e = document.createElement('script');
        var n = document.getElementsByTagName('script')[0];
        e.type = 'text/javascript';
        e.async = true;
        e.src = '//static.chartbeat.com/js/chartbeat.js';;
        n.parentNode.insertBefore(e, n);
    }
    loadChartbeat();
	console.log('Maka Chartboat Meta Dari  :'+Authors+' Dan '+Sections);
  })();