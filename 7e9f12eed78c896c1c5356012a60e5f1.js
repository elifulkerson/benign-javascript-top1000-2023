if (aff_w >= 728) {
           cX.callQueue.push(['invoke', function() { cX.getUserSegmentIds({persistedQueryId:'8220a85596d7e0a1176b8f095f62a95f8af32a6b',callback:MB_HP_Desktop_Native2_1x1}); }]);
          	function MB_HP_Desktop_Native2_1x1(cXsegmentIds) 
          	{
			googletag.cmd.push(function() {	
			googletag.defineSlot('/1120978/MB_HP_Desktop_Native2_1x1', [[1, 1]], 'div-ad-gpt-1120978-1644500887-0').addService(googletag.pubads()).setTargeting("CxSegments",cXsegmentIds);
            googletag.enableServices();              
            });
            }  

			document.getElementById('div-ad-gpt-1120978-1644500887-0').style.minHeight = 1+"px";
			cX.callQueue.push(['invoke', function() { googletag.cmd.push(function() {googletag.display('div-ad-gpt-1120978-1644500887-0'); });	 }]);
			
	
		}   else {
			cX.callQueue.push(['invoke', function() { cX.getUserSegmentIds({persistedQueryId:'8220a85596d7e0a1176b8f095f62a95f8af32a6b',callback:MB_HP_Mobile_Native2_1x1}); }]);
          	function MB_HP_Mobile_Native2_1x1(cXsegmentIds) 
          	{          
          	googletag.cmd.push(function() {	
			googletag.defineSlot('/1120978/MB_HP_Mobile_Native2_1x1', [[1, 1]], 'div-ad-gpt-1120978-1644500887-0').addService(googletag.pubads()).setTargeting("CxSegments",cXsegmentIds);
			googletag.enableServices();
            });
            }  
          
			document.getElementById('div-ad-gpt-1120978-1644500887-0').style.minHeight = 1+"px";
			cX.callQueue.push(['invoke', function() { googletag.cmd.push(function() {googletag.display('div-ad-gpt-1120978-1644500887-0'); });	 }]);
		}