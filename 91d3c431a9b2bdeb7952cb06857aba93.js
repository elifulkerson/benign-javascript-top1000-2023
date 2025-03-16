function loadChartbeat() {
    var e = document.createElement('script');
    var n = document.getElementsByTagName('script')[0];
    e.type = 'text/javascript';
    e.async = true;
    e.src = '//static.chartbeat.com/js/chartbeat.js';
    n.parentNode.insertBefore(e, n);
}

function handleChartBeat(event){
    document.removeEventListener('scroll', handleChartBeat);
    /*
    var _author = document.querySelector('meta[name="author"]').content;
    var _section = document.getElementsByTagName("title")[0].text;
    */
    
    var _author = document.querySelector('meta[name="author"]');
    if(_author != null){
      _author=_author.content;
    }
    
    var _section = document.getElementsByTagName("title")[0];
    if(_section != null){
      _section=_section.text;
    }
    
    var _sf_async_config = window._sf_async_config = (window._sf_async_config || {});
    _sf_async_config.uid = 67045;
    _sf_async_config.domain = 'otvfoco.com.br'; //CHANGE THIS TO THE ROOT DOMAIN
    _sf_async_config.flickerControl = false;
    _sf_async_config.useCanonical = true;
    _sf_async_config.useCanonicalDomain = true;
    
    _sf_async_config.sections = _section; // CHANGE THIS TO YOUR SECTION NAME(s)
    _sf_async_config.authors = _author; // CHANGE THIS TO YOUR AUTHOR NAME(s)

    loadChartbeat();
    		
    var t=document.createElement("script");
    t.type="text/javascript";  
    t.src="//static.chartbeat.com/js/chartbeat_mab.js";    
    document.getElementsByTagName("head")[0].appendChild(t);	 
    console.log('chart beat loaded...');
}

document.addEventListener('scroll', handleChartBeat);