if (aff_w >= 728) {
			cX.callQueue.push(['invoke', function() { cX.getUserSegmentIds({persistedQueryId:'8220a85596d7e0a1176b8f095f62a95f8af32a6b',callback:MB_HP_Desktop_Mid_970x90}); }]); 
          	function MB_HP_Desktop_Mid_970x90(cXsegmentIds) 
          	{
                googletag.cmd.push(function() { 
				googletag.defineSlot('/1120978/MB_HP_Desktop_Mid_970x90', [[728, 90],[970, 90]], 'div-ad-gpt-1120978-1649076165-0').addService(googletag.pubads()).setTargeting("CxSegments",cXsegmentIds);
				googletag.enableServices();
                });  
            }
            document.getElementById('div-ad-gpt-1120978-1649076165-0').style.minHeight = 90+"px";
            cX.callQueue.push(['invoke', function() { googletag.cmd.push(function() {googletag.display('div-ad-gpt-1120978-1649076165-0'); });	 }]);			
	
		}   else {
            cX.callQueue.push(['invoke', function() { cX.getUserSegmentIds({persistedQueryId:'8220a85596d7e0a1176b8f095f62a95f8af32a6b',callback:MB_HP_Mobile_Mid_300x250}); }]); 
          	function MB_HP_Mobile_Mid_300x250(cXsegmentIds) 
            {
              	googletag.cmd.push(function() { 
				googletag.defineSlot('/1120978/MB_HP_Mobile_Mid_300x250', [[300, 250]], 'div-ad-gpt-1120978-1649076165-0').addService(googletag.pubads()).setTargeting("CxSegments",cXsegmentIds);
                googletag.enableServices();
              	});
            }
            document.getElementById('div-ad-gpt-1120978-1649076165-0').style.minHeight = 250+"px";
			cX.callQueue.push(['invoke', function() { googletag.cmd.push(function() {googletag.display('div-ad-gpt-1120978-1649076165-0'); });	 }]);						
			
		}