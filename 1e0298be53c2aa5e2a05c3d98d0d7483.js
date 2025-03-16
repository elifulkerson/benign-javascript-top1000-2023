if (aff_w >= 728) {	  
    cX.callQueue.push(['invoke', function() { cX.getUserSegmentIds({persistedQueryId:'8220a85596d7e0a1176b8f095f62a95f8af32a6b',callback:MB_HP_Desktop_RightATF_300x600}); }]); 
    function MB_HP_Desktop_RightATF_300x600(cXsegmentIds) 
    {               
      googletag.cmd.push(function() { 
        googletag.defineSlot('/1120978/MB_HP_Desktop_RightATF_300x600', [[300, 600]], 'div-ad-gpt-1120978-1644500341-0-desktop').addService(googletag.pubads()).setTargeting("CxSegments",cXsegmentIds);
        googletag.enableServices(); 
      }); 
    }   
    document.getElementById('div-ad-gpt-1120978-1644500341-0-desktop').style.minHeight = 600+"px";
	cX.callQueue.push(['invoke', function() { googletag.cmd.push(function() {googletag.display('div-ad-gpt-1120978-1644500341-0-desktop'); });	 }]);

  }