googletag.cmd.push(function() {
	var dlws = googletag.defineSlot('/31800665/Tribunnews/Home', [160, 600], 'div-Left-WideSkyscraper');
	dlws.setTargeting('pos',['LeftWideSkyscraper']);
	dlws.setTargeting('page',['home']);
	dlws.setTargeting('kg_pos',['skyscraper']);
	dlws.addService(googletag.pubads());

	
	var dtl = googletag.defineSlot('/31800665/Tribunnews/Home', [[728, 90], [970, 90], [970, 250]], 'div-Top-Leaderboard');
	dtl.setTargeting('pos',['TopLeaderboard']);
	dtl.setTargeting('page',['home']);
	dtl.setTargeting('kg_pos',['top_1']);
	dtl.addService(googletag.pubads());

	var drmr1 = googletag.defineSlot('/31800665/Tribunnews/Home', [[300, 600],[300, 250]], 'div-Right-MediumRectangle-1');
	drmr1.setTargeting('pos',['RightMediumRectangle-1']);
	drmr1.setTargeting('page',['home']);
	drmr1.setTargeting('kg_pos',['giant']);
	drmr1.addService(googletag.pubads());

	var drmr2 = googletag.defineSlot('/31800665/Tribunnews/Home', [300, 250], 'div-Right-MediumRectangle-2');
	drmr2.setTargeting('pos',['RightMediumRectangle-2']);
	drmr2.setTargeting('page',['home']);
	drmr2.setTargeting('kg_pos',['right_1']);
	drmr2.addService(googletag.pubads());

	var drmr3 = googletag.defineSlot('/31800665/Tribunnews/Home', [[300, 600],[300, 250]], 'div-Right-MediumRectangle-3');
	drmr3.setTargeting('pos',['RightMediumRectangle-3']);
	drmr3.setTargeting('page',['home']);
	drmr3.setTargeting('kg_pos',['giant_2']);
	drmr3.addService(googletag.pubads());

	
	
	
	
		var dnl1 = googletag.defineOutOfPageSlot('/31800665/Tribunnews/Home', 'div-NativeAds-Latest-1');
	dnl1.setTargeting('pos',['NativeAds-Latest-1']);
	dnl1.setTargeting('page',['home']);
	dnl1.setTargeting('kg_pos',['native_feed_1']);
	dnl1.addService(googletag.pubads());
	
		var dnl2 = googletag.defineOutOfPageSlot('/31800665/Tribunnews/Home', 'div-NativeAds-Latest-2');
	dnl2.setTargeting('pos',['NativeAds-Latest-2']);
	dnl2.setTargeting('page',['home']);
	dnl2.setTargeting('kg_pos',['native_feed_2']);
	dnl2.addService(googletag.pubads());
	
		var dnp1 = googletag.defineOutOfPageSlot('/31800665/Tribunnews/Home', 'div-NativeAds-Populer-1');
	dnp1.setTargeting('pos',['NativeAds-Populer-1']);
	dnp1.setTargeting('page',['home']);
	dnp1.setTargeting('kg_pos',['popular_news_1']);
	dnp1.addService(googletag.pubads());
	
		var dnp2 = googletag.defineOutOfPageSlot('/31800665/Tribunnews/Home', 'div-NativeAds-Populer-2');
	dnp2.setTargeting('pos',['NativeAds-Populer-2']);
	dnp2.setTargeting('page',['home']);
	dnp2.setTargeting('kg_pos',['popular_news_2']);
	dnp2.addService(googletag.pubads());
	
	
	
	
	
	
	
	
		var dtp = googletag.defineSlot('/31800665/Tribunnews/Home', [677, 132], 'div-Topik-Pilihan');
	dtp.setTargeting('pos',['TopikPilihan']);
	dtp.setTargeting('page',['home']);
	dtp.setTargeting('kg_pos',['TopikPilihan']);
	dtp.addService(googletag.pubads());
	
	
	
	
	
	
	
	
			
		var dtjb = googletag.defineOutOfPageSlot('/31800665/Tribunnews/Home', 'div-Tribunjualbeli');
		dtjb.setTargeting('pos',['Tribunjualbeli']);
		dtjb.setTargeting('page',['home']);
		dtjb.setTargeting('kg_pos',['Tribunjualbeli']);
		dtjb.addService(googletag.pubads());


		var dbs = googletag.defineSlot('/31800665/Tribunnews/Home', [[1,1],[468, 60],[1008, 60],[1100, 50]], 'div-Bottom-Scroll');
	dbs.setTargeting('pos',['BottomScroll']);
	dbs.setTargeting('page',['home']);
	dbs.setTargeting('kg_pos',['horizontal_ad']);
	dbs.addService(googletag.pubads());
	
	

		var dba = googletag.defineOutOfPageSlot('/31800665/Tribunnews/Home', 'div-BalloonAds');
	dba.setTargeting('pos',['BalloonAds']);
	dba.setTargeting('page',['home']);
	dba.setTargeting('kg_pos',['overlay']);
	dba.addService(googletag.pubads());
	
	
	var dpt = googletag.defineOutOfPageSlot('/31800665/Tribunnews/Home', 'div-Premium-Topframe');
	dpt.setTargeting('pos',['PremiumTopframe']);
	dpt.setTargeting('page',['home']);
	dpt.setTargeting('kg_pos',['pushdown']);
	dpt.addService(googletag.pubads());

	setContextualTargeting();
setBrandSafety();

function setContextualTargeting() {
    dfp_keywords = getKeywords();
    console.log(dfp_keywords);
    googletag.pubads().setTargeting('contextual_targeting', dfp_keywords);
}

function getKeywords(){
    var metas = document.getElementsByTagName('meta');
    var str = (metas.namedItem("news_keywords") || {}).content;
    if (str!=null){
        var keywords = str.toLowerCase().split(",").map(function(item) {
            return item.trim().replace(/\s\s+/g, ' ');
        });
        return keywords;
    }
    return null;
}

function setBrandSafety() {
  var cekclassread = document.getElementsByClassName("txt-article")[0];
  if(cekclassread != undefined){
    var content = document.getElementsByClassName("txt-article")[0].innerText;

    var gpt_safe = content.match(/\b(pneumonia|corona|islam|adult|sex|abuse|homo|horny|hot|naked|nude|porn|seks|teroris|terror|orgasme|kondom|dating|isis|fuck|pantat|jangkitan yis|buah pelir|keguguran|pil kontraseptif|baligh|infestasi|racun serangga|reput|labah labah|racun perosak|pemberi maklumat|baik palsu|natrium benzoat|kanser|keselamatan makanan|bedek|haram|pelancar roket|preliminares|wuhan)\b/i);
    if(gpt_safe){
      safe = 'no';
    }
    else{
      safe = 'yes';
    }

    var keyword1 = content.match(/\b(bola|ayah|bayi|demo|fans|Serangan|fifa|game|ibu|Porno|kecanduan|keluarga|kematian|kesehatan|liga|mayat|meledak|pembunuhan|pertandingan|piala dunia|polisi|qatar|remaja|sehat|seks|sepak|soccer|stadion|timnas|world cup|rush|seksi|anak|gas|surabaya|tragedi|stadium|mengamuk|global warming|healthy|bom|bunuh diri|ledak|senjata|astana|tewas|mati|LPSK|korban|meninggal)\b/i);
    if (keyword1) {
        keyword_targetting1 = 'yes';} else {
        keyword_targetting1 = 'no';}

    var keyword2 = content.match(/\b(Polusi|Udara|ISPA|Flu|Batuk|Panas|Hidung|Tenggorokan|Paru-paru|Bronkitis|Asma|Bronkiektasis|Pneumonia|Radang|Penyakit pernapasan|Infeksi pernapasan|Gejala ISPA|Penyebab ISPA|Hidup sehat|Mencegah|Sakit)\b/i);
    if (keyword2) {
        keyword_targetting2 = 'yes';} else {
        keyword_targetting2 = 'no';}

    var keyword3 = content.match(/\b(ekspedisi|reservasi|aktivitas|monumen|keindahan|wisatawan|wisata|eksplorasi|landmark|hotel|pesona|panorama|backpacker|backpacking|pemandangan|keliling|liburan|tiket|perjalanan|sejuk|jelajah|kota|festival|turis|pesiar|petualangan|traveloka|rekreasi|paspor|penginapan|petualang|pantai|destinasi|travel)\b/i);
    if (keyword3) {
        keyword_targetting3 = 'yes';} else {
        keyword_targetting3 = 'no';}

   var keyword4 = content.match(/\b(pemberhentian|PHK|diberhentikan|pemotongan karyawan|memecat|pemecatan|dipecat|penutupan operasional lokal|tutup|memotong pekerjaan|membatalkan|pembatalan|membatalkan tawaran pekerjaan|layoff|cut employee|fire|lay off)\b/i);
	if (keyword4) {
	    keyword_targetting4 = 'yes';} else {
	    keyword_targetting4 = 'no';}
        
    var keyword5 = content.match(/\b(Rusia|Ukraina|putin|Zelenskyy|Perang|Invasi|pemberontak|Militer|pembunuhan|serangan|bom|mayat|kematian|menghancurkan|bencana|ledakan|eksplosif|genosida|homosida|militan|milisi|nuklir|supremis|suriah|senjata|sandera|pembantaian|nuklir|Moskow|Kiev|NATO|Uni Soviet|tank|teror|sekutu|rudal)\b/i);
	if (keyword5) {
	    keyword_targetting5 = 'yes';} else {
	    keyword_targetting5 = 'no';}

  }else{
    safe = 'yes';
    keyword_targetting1 = 'no';
    keyword_targetting2 = 'no';
    keyword_targetting3 = 'no';
    keyword_targetting4 = 'no';
    keyword_targetting5 = 'no';
  }
  console.log('safe_branding =' + safe);
  googletag.pubads().setTargeting('safe_branding', safe);
  console.log('keyword_targetting1 =' + keyword_targetting1);
  googletag.pubads().setTargeting('keyword_targetting1', keyword_targetting1);
  console.log('keyword_targetting2 =' + keyword_targetting2);
  googletag.pubads().setTargeting('keyword_targetting2', keyword_targetting2);
  console.log('keyword_targetting3 =' + keyword_targetting3);
  googletag.pubads().setTargeting('keyword_targetting3', keyword_targetting3);
  console.log('keyword_targetting4 =' + keyword_targetting4);
  googletag.pubads().setTargeting('keyword_targetting4', keyword_targetting4);
  console.log('keyword_targetting5 =' + keyword_targetting5);
  googletag.pubads().setTargeting('keyword_targetting5', keyword_targetting5);
}

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

	googletag.pubads().setTargeting('kg_inv_type','desktop');
	googletag.pubads().setTargeting('kg_group_sites','tribunnews');
	googletag.pubads().enableSingleRequest();
	googletag.pubads().collapseEmptyDivs();
	googletag.enableServices();
});