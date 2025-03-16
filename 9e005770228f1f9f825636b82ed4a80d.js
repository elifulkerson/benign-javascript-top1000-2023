function loadGptScript(){
	var gads = document.createElement('script');
	var useSSL = 'https:' == document.location.protocol;
	gads.src = (useSSL ? 'https:' : 'http:') + '//securepubads.g.doubleclick.net/tag/js/gpt.js';
	var node = document.getElementsByTagName('script')[0];
	node.parentNode.insertBefore(gads, node);
}function loadPWTScript(){
	window.PWT.jsLoaded = function(){ //PubMatic pwt.js on load callback is used to load GPT
		loadGptScript();
	};
	(function() {
		var purl = window.location.href;
		var url = '//ads.pubmatic.com/AdServer/js/pwt/159088/2116';var profileVersionId = '';
		if(purl.indexOf('pwtv=')>0){
		var regexp = /pwtv=(.*?)(&|$)/g;
		var matches = regexp.exec(purl);
		if(matches.length >= 2 && matches[1].length > 0){
		profileVersionId = '/'+matches[1];
		}
		}
		var wtads = document.createElement('script');
		wtads.async = true;
		wtads.type = 'text/javascript';
		wtads.src = url+profileVersionId+'/pwt.js';
		var node = document.getElementsByTagName('script')[0];
		node.parentNode.insertBefore(wtads, node);
	})();
}function loadAPScript(){
	!function(a9,a,p,s,t,A,g){if(a[a9])return;function q(c,r){a[a9]._Q.push([c,r])}a[a9]={init:function(){q("i",arguments)},fetchBids:function(){q("f",arguments)},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]};A=p.createElement(s);A.async=!0;A.src=t;g=p.getElementsByTagName(s)[0];g.parentNode.insertBefore(A,g)}("apstag",window,document,"script","//c.amazon-adsystem.com/aax2/apstag.js");
	// initialize apstag and have apstag set bids on the googletag slots when they are returned to the page
	apstag.init({
	pubID: '231ec860-73af-421d-9fc4-8ea161815c03',
	adServer: 'googletag',
	bidTimeout: 1e3
	});

	// request the bids for the four googletag slots
	apstag.fetchBids({
	slots: [{
	slotID: '/22390678/TH_MWeb_HP_Sticky',
	slotName: 'sectiondivsticky',
	sizes: [320, 50]
	},{
	slotID: '/22390678/TH_MWeb_HP_Mid03',
	slotName: 'div-gpt-ad-1661760873175-0',
	sizes: [[336, 280], [300, 250]]
	},{
	slotID: '/22390678/TH_MWeb_HP_Mid04',
	slotName: 'div-gpt-ad-1661768149272-0',
	sizes: [[336, 280], [300, 250]]
	},{
	slotID: '/22390678/TH_MWeb_HP_Top',
	slotName: 'div-gpt-ad-1661760358827-0',
	sizes: [[300, 250], [336, 280]]
	},{
	slotID: '/22390678/TH_MWeb_HP_Mid01',
	slotName: 'div-gpt-ad-1661760580744-0',
	sizes: [[336, 280], [300, 250]]
	},{
	slotID: '/22390678/TH_MWeb_HP_Mid02',
	slotName: 'div-gpt-ad-1661760715032-0',
	sizes: [[300, 250], [336, 280]]
	},{
	slotID: '/22390678/TH_Desktop_HP_RM',
	slotName: 'dynamicadwidget',
	sizes: [300, 250]
	},{
	slotID: '/22390678/TH_Desktop_HP_Billboard_Top',
	slotName: 'div-gpt-ad-1661755475138-0',
	sizes: [[970, 250], [970, 90], [728, 90]]
	},{
	slotID: '/22390678/TH_Desktop_HP_Billboard_Mid01',
	slotName: 'div-gpt-ad-1661757059382-0',
	sizes: [[970, 250], [728, 90], [970, 90]]
	},{
	slotID: '/22390678/TH_Desktop_HP_Billboard_Mid02',
	slotName: 'div-gpt-ad-1661758244868-0',
	sizes: [[728, 90], [970, 250], [970, 90]]
	},{
	slotID: '/22390678/TH_Desktop_HP_Billboard_Mid03',
	slotName: 'div-gpt-ad-1661758372652-0',
	sizes: [[970, 250], [970, 90], [728, 90]]
	},{
	slotID: '/22390678/TH_Desktop_HP_Billboard_Mid04',
	slotName: 'div-gpt-ad-1661758638590-0',
	sizes: [[970, 90], [728, 90], [970, 250]]
	}]
	}, function(bids) {
	// set apstag bids, then trigger the first request to DFP
	googletag.cmd.push(function() {
	apstag.setDisplayBids();if(DevIdf.isMobile){googletag.pubads().refresh(getSlotsViewPort(false));}else{googletag.pubads().refresh(); }});
	});
}function getSlotsViewPort(abovefold){
	var googletagslots = googletag.pubads().getSlots();
	var slots = [];
	googletagslots.forEach(function(slot) {
	if(abovefold && slot.getSlotId().toString(2).toLowerCase().match(/(TH_MWeb_AT_Top|TH_MWeb_HP_Top|TH_Desktop_HP_Billboard_Top|TH_Desktop_Topic_Billboard_Top|TH_MWeb_Topic_Top|TH_Desktop_Masthead_970x50|TH_MWeb_Masthead_320x50|TH_Mweb_Brandhub_Visit-Dubai_300x250)/i) === null){
	slots.push(slot);
	}else if(!abovefold && slot.getSlotId().toString(2).toLowerCase().match(/(TH_MWeb_AT_Top|TH_MWeb_HP_Top|TH_Desktop_HP_Billboard_Top|TH_Desktop_Topic_Billboard_Top|TH_MWeb_Topic_Top|TH_Desktop_Masthead_970x50|TH_MWeb_Masthead_320x50|TH_Mweb_Brandhub_Visit-Dubai_300x250)/i) != null){
	slots.push(slot);
	}
	});
	return slots;
}Promise.all([userIdentify, thgCookieConsent]).then(function() {
if(isNonSubcribedUser() && thg.advertisingCookie()){loadPWTScript();loadAPScript();}
});