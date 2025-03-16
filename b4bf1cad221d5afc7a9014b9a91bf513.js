googletag.cmd.push(function() {

		gptadslots[88]= googletag.defineSlot('/31800665/KOMPAS.COM/home', [[970,250]],'div-gpt-ad-712092287234656005-88').setTargeting('Pos',['Billboard']).setTargeting('kg_pos', ['billboard']).addService(googletag.pubads());//Adslot 2 declaration
		gptadslots[2]= googletag.defineSlot('/31800665/KOMPAS.COM/home', [[300,600]],'div-gpt-ad-Giant').setTargeting('Pos',['Giant']).setTargeting('kg_pos', ['giant']).addService(googletag.pubads());//Adslot 5 declaration
		gptadslots[5]= googletag.defineSlot('/31800665/KOMPAS.COM/home', [[300,600],[300,250]],'div-gpt-ad-Giant_2').setTargeting('Pos',['Giant_2']).setTargeting('kg_pos', ['giant_2']).addService(googletag.pubads());//Adslot 4 declaration
		gptadslots[4]= googletag.defineSlot('/31800665/KOMPAS.COM/home', [[300,250]],'div-gpt-ad-Right_3').setTargeting('Pos',['Right_3']).setTargeting('kg_pos', ['right_3']).addService(googletag.pubads());//Adslot 1 declaration
            gptadslots[1]= googletag.defineSlot('/31800665/KOMPAS.COM/home', [[728, 90], [970, 90], [970, 250]],'div-gpt-ad-Top_1-1').setTargeting('Pos',['Top_1']).setTargeting('kg_pos', ['top_1']).addService(googletag.pubads());//Adslot 9 declaration
			gptadslots[9]= googletag.defineSlot('/31800665/KOMPAS.COM/home', [[468,60],[728,90],[970,90],[1100,50],[1100,150]],'div-gpt-ad-Horizontal_Ad').setTargeting('Pos',['Horizontal_Ad']).setTargeting('kg_pos', ['horizontal_ad']).addService(googletag.pubads());gptadslots[0] = googletag.defineOutOfPageSlot('/31800665/KOMPAS.COM/home', 'div-gpt-ad-712092287234656005-oop').setTargeting('Pos',['Overlay']).setTargeting('kg_pos', ['overlay']).addService(googletag.pubads());googletag.defineOutOfPageSlot('/31800665/KOMPAS.COM/home', 'div-gpt-ad-articlehighlight').setTargeting('pos', ['Article_Highlight']).setTargeting('kg_pos', ['native_feed_1']).addService(googletag.pubads());gptadslots[333]= googletag.defineSlot('/31800665/KOMPAS.COM/home', [[1,1]],'div-gpt-ad-712092287234656005-333').setTargeting('Pos',['berita_pilihan_3']).addService(googletag.pubads());setContextualTargeting();
if(typeof keywordBrandSafety === 'undefined'){
    console.log("no article keywords");
}else{
    console.log("execute keywords");
    setKeywordTargeting();
}

function setContextualTargeting() {
    dfp_keywords = getKeywords();
    console.log(dfp_keywords);
    googletag.pubads().setTargeting('contextual_targeting', dfp_keywords);
}

function getKeywords(){
    var metas = document.getElementsByTagName('meta');
    var str = (metas.namedItem("content_tags") || {}).content;
    if (str!=null){
        var keywords = str.toLowerCase().split(",").map(function(item) {
            return item.trim().replace(/\s\s+/g, ' ');
        });
        return keywords;
    }
    return [''];
}

// s:new keyword targeting via GAM
function setKeywordTargeting() {
    dfp_keywords = getArticle();
    console.log(dfp_keywords);
    googletag.pubads().setTargeting('keyword_targeting', dfp_keywords);
}

function getArticle(){
    var strKey = keywordBrandSafety;
    if (strKey!=null){
        var keywords = strKey.toLowerCase().split(/[ .]/).map(function(item) {
            return item.trim().replace(/\W*(&amp;quot;)\W*/g, '').replace(/([^a-zA-Z0-9]$|[()\n\"])/g, '');
        });
        keywords = keywords.filter((str) => str !== '');
        return keywords;
    }
    return null;
}
// e:new keyword targeting via GAM

try{
    // Retrieving local storage
    var ls = window.localStorage;
	
	var lr = ls.getItem("_jxitr");
	if (lr && lr.length > 2){
		try{
			googletag.pubads().setTargeting('jx_audience_interest', JSON.parse(lr).join().split(','));
		}catch {}
	}
	
	var li = ls.getItem("_jxitd");
	if (li && li.length > 2){
		try{
			googletag.pubads().setTargeting('jx_audience_intend', JSON.parse(li).join().split(','));
		}catch {}
	}

}catch(e){
      //console.log("Localstorage not accessible or any other error: " + e.message);
}
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    googletag.pubads().setTargeting('kg_inv_type','mweb');
}else{
     googletag.pubads().setTargeting('kg_inv_type','desktop');
}
googletag.pubads().setTargeting('kg_group_sites','kompas_com');googletag.pubads().setTargeting('page', 'index');
		

        googletag.pubads().enableSingleRequest();
        
        googletag.enableServices();
	});