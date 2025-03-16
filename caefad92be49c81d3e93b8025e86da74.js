googletag.cmd.push(function() {

        var getMetaCategory = document.getElementsByTagName("META");
        var getMetaContent = "";
        var i;
        for (i = 0; i < getMetaCategory.length; i++) {
            if (getMetaCategory[i].name == "content_category"){
                var getMetaContent = getMetaCategory[i].content;
             }
        }  
        var dfp_adunit = "";
        getMetaContent = getMetaContent.toLowerCase();
        var containsSpaces = function(str){return /\s/g.test(getMetaContent);};
        if(containsSpaces(getMetaContent) == true){
            var getMetaContent = getMetaContent.split(/\s/g).join('');
        } 
        if(getMetaContent == "" || getMetaContent == " "){
            dfp_adunit = "home";
        }
        else if(getMetaContent == "sporte"){
            dfp_adunit = "E-sport";
        }
        else{
            dfp_adunit = getMetaContent;
        }
/****/
//Top Banner
googletag.defineSlot('/31800665/BOLASPORT.COM/'+dfp_adunit, [[970, 90],[970, 250],[728, 90]], 'div-gpt-ad-head-banner').setTargeting('pos', ['Top_1']).setTargeting('kg_pos', ['top_1']).addService(googletag.pubads());
/****//****/
//MR3
googletag.defineSlot('/31800665/BOLASPORT.COM/'+dfp_adunit, [300, 250], 'div-gpt-ad-MR3').setTargeting('Pos', ['MR3']).setTargeting('kg_pos', ['right_3']).addService(googletag.pubads());
/****//****/
//Giant Banner
googletag.defineSlot('/31800665/BOLASPORT.COM/'+dfp_adunit, [[300, 600]], 'div-gpt-ad-giant').setTargeting('Pos', ['Giant']).setTargeting('kg_pos', ['giant']).addService(googletag.pubads());
/****//****/ 
//Giant banner 2
googletag.defineSlot('/31800665/BOLASPORT.COM/'+dfp_adunit, [[300, 250], [300, 600]], 'div-gpt-ad-giant2').setTargeting('Pos', ['Giant2']).setTargeting('kg_pos', ['giant_2']).addService(googletag.pubads());
/****//****/
// Skinad Trigger
var slotSkinTrigger = googletag.defineOutOfPageSlot('/31800665/BOLASPORT.COM/'+dfp_adunit, 'div-gpt-ad-skinad-trigger').setTargeting('trigger', ['Skin_Trigger']).addService(googletag.pubads());
/****/      
// Prepare to call Left Skinad
var slotSkinLeft = googletag.defineSlot('/31800665/BOLASPORT.COM/'+dfp_adunit, [[100,550],[100,650],[120,600]], 'div-gpt-ad-skin-left').setTargeting('pos', ['Skin_Left']).setTargeting('kg_pos', ['skin_left']); 
/****/    
// Prepare to call Right Skinad
var slotSkinRight = googletag.defineSlot('/31800665/BOLASPORT.COM/'+dfp_adunit, [[100,550],[100,650],[120,600]], 'div-gpt-ad-skin-right').setTargeting('pos', ['Skin_Right']).setTargeting('kg_pos', ['skin_right']);   
/****/    
var skinadStatus = false;  
googletag.pubads().addEventListener('slotRenderEnded', function(event) {
        if(slotSkinTrigger === event.slot){
            var dfp_lineItemId = event.lineItemId;
            var dfp_creativeId = event.creativeId;
            
            if(dfp_lineItemId != null && dfp_creativeId != null) {
               skinadStatus = true;
                // Activate the Left Skinad
                slotSkinLeft.addService(googletag.pubads());
                googletag.display('div-gpt-ad-skin-left');
                googletag.pubads().refresh([slotSkinLeft]);
                
                // Activate the Right Skinad
                slotSkinRight.addService(googletag.pubads());
                googletag.display('div-gpt-ad-skin-right');
                googletag.pubads().refresh([slotSkinRight]);
            }
            
            if(window.location.search == "?skinad_status"){
                console.log("Checked Url = "+window.location.search);
                console.log("Skinad Status : "+skinadStatus); 
                console.log("Skinad Trigger : "+dfp_lineItemId+"&"+dfp_creativeId); 
            }            
        }
    });/****/
//Bottom Frame
googletag.defineSlot('/31800665/BOLASPORT.COM/'+dfp_adunit, [[468,60], [728,90], [970,90], [1100,50]], 'div-gpt-ad-bottom-frame').setTargeting('pos', ['Horizontal_Ad']).setTargeting('kg_pos', ['horizontal_ad']).addService(googletag.pubads()); 
/****/googletag.defineOutOfPageSlot('/31800665/BOLASPORT.COM/'+dfp_adunit, 'div-gpt-ad-popup').setTargeting('pos', ['Popup']).setTargeting('kg_pos', ['Popup']).addService(googletag.pubads());

var dvignette = googletag.defineOutOfPageSlot('/31800665/BOLASPORT.COM/vignette', googletag.enums.OutOfPageFormat.INTERSTITIAL);
if(dvignette !== null) {
    dvignette.setTargeting('pos',['vignette']).setTargeting('kg_pos', ['vignette']);
    dvignette.addService(googletag.pubads());
}
googletag.defineOutOfPageSlot('31800665/BOLASPORT.COM/', 'div-gpt-adbro').setTargeting('pos', ['adbro']).setTargeting('kg_pos', ['Popup']).addService(googletag.pubads());

var fn_pageskin = "false";
     if (screen.width >= 1360) { fn_pageskin = "true"; }
	 
gptadslots[54321] = googletag.defineOutOfPageSlot('/31800665/BOLASPORT.COM/home', 'div-gpt-ad-143120217003854794-oopi').setTargeting('Pos',['inskin']).setTargeting("inskin_SRT",fn_pageskin).addService(googletag.pubads());/****/
//Popular1
googletag.defineOutOfPageSlot('/31800665/BOLASPORT.COM', 'div-gpt-ad-popular1').setTargeting('pos', ['Popular_1']).addService(googletag.pubads());
/****//****/
//Popular2
googletag.defineOutOfPageSlot('/31800665/BOLASPORT.COM', 'div-gpt-ad-popular2').setTargeting('pos', ['Popular_2']).addService(googletag.pubads());
/****/setContextualTargeting();
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
    var str = (metas.namedItem("keywords") || {}).content;
    if (str!=null){
        var keywords = str.toLowerCase().split(",").map(function(item) {
            return item.trim().replace(/\s\s+/g, ' ');
        });
        return keywords;
    }
    return null;
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

function setBrandSafety() {
  var cekclassread = document.getElementsByClassName("read__keyword")[0];
  if(cekclassread != undefined){
    var content = document.getElementsByClassName("read__keyword")[0].innerText;

    var gpt_safe = content.match(/\b(ak47|al jazeera|al qaeda|allah|Assad|bahan kimia|bencana|boikot|corona|covid-19|fatal|ganti rugi|gejala|gugur|hoax|hukuman|jokowi|kecelakaan|kejadian|keras|komplain|Kondom|kontroversi|korban|kriminal|palsu|pembunuhan|pemerkosaan|penyakit|peristiwa|pidana|polisi|porno|prabowo|racun|rasis|rasisme|seks|tersangka|viral|virus|porno|seks|lesbian|gay|sesama jenis|homoseks|homoseksual|biseksual|transgender|pemerasan|pemeras)\b/i);
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

    var keyword3 = content.match(/\b(cooking|sedaap|indofood|bango|resep|masakan|masak|tempe|goreng|kangkung|sate|ikan|ayam|tongseng|food|kuliner|masak|makanan|daging|destinasi|makan|kopi|pedas|gurih|kue|jajan|jajanan|bumbu|mie|menu|nasi|memasak|dapur|menggoreng|sambal|gorengan|pepaya|rendang|fried|chicken|sarden|donat|jengkol|telur|cumi|roti|olahan|cimol|kornet|sapi|tahu|tumpeng|rebus|baking|lontong|salad|penyedap|udang|kambing|adonan|kedelai|kacang)\b/i);
    if (keyword3) {
    keyword_targetting3 = 'yes';} else {
    keyword_targetting3 = 'no';}

  }else{
    safe = 'yes';
    keyword_targetting1 = 'no';
    keyword_targetting2 = 'no';
    keyword_targetting3 = 'no';
  }

  console.log('safe_branding =' + safe);
  googletag.pubads().setTargeting('safe_branding', safe);

  console.log('keyword_targetting1 =' + keyword_targetting1);
  googletag.pubads().setTargeting('keyword_targetting1', keyword_targetting1);

  console.log('keyword_targetting2 =' + keyword_targetting2);
  googletag.pubads().setTargeting('keyword_targetting2', keyword_targetting2);

  console.log('keyword_targetting3 =' + keyword_targetting3);
  googletag.pubads().setTargeting('keyword_targetting3', keyword_targetting3);

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
googletag.pubads().setTargeting('kg_group_sites','bolasport_com');/****/	
//Latest1
googletag.defineOutOfPageSlot('/31800665/BOLASPORT.COM/'+dfp_adunit, 'div-gpt-ad-latest1').setTargeting('pos', ['Latest_Stories_1']).addService(googletag.pubads());
/****//****/	
//Latest2
googletag.defineOutOfPageSlot('/31800665/BOLASPORT.COM/'+dfp_adunit, 'div-gpt-ad-latest2').setTargeting('pos', ['Latest_Stories_2']).addService(googletag.pubads());
/****/        
        googletag.pubads().enableSingleRequest();
        googletag.enableServices();
    });