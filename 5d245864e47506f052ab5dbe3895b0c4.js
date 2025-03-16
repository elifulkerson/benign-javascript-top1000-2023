if (aff_w < 728) {	  
    cX.callQueue.push(['invoke', function() { cX.getUserSegmentIds({persistedQueryId:'8220a85596d7e0a1176b8f095f62a95f8af32a6b',callback:MB_HP_Mobile_ATF_300x250}); }]); 
    function MB_HP_Mobile_ATF_300x250(cXsegmentIds) 
    {               
      googletag.cmd.push(function() { 
        googletag.defineSlot('/1120978/MB_HP_Mobile_ATF_300x250', [[300, 250]], 'div-ad-gpt-1120978-1644500341-0-mobile').addService(googletag.pubads()).setTargeting("CxSegments",cXsegmentIds);
        googletag.enableServices(); 
      }); 
    }   
    document.getElementById('div-ad-gpt-1120978-1644500341-0-mobile').style.minHeight = 250+"px";
	cX.callQueue.push(['invoke', function() { googletag.cmd.push(function() {googletag.display('div-ad-gpt-1120978-1644500341-0-mobile'); });	 }]);

  }

  $(document).ready(function() {  
var aff_w = window.innerWidth;  
if (aff_w < 728) {  
$(".mpp-main-element-right .mpp-main-element-sponsor-container").css("display", "none");  
}  
});