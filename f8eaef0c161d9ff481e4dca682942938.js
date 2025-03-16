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
        if(getMetaContent == "" || getMetaContent == ""){
            dfp_adunit = "Home";
        }
        else if(getMetaContent == "Fashion And Beauty"){
            dfp_adunit = "fashion_beauty";
        }
        else if(getMetaContent == "Grid - Trending Topic"){
            dfp_adunit = "Trending_Topic";
        }
        else if(getMetaContent == "Grid - Love & Life"){
            dfp_adunit = "Love_Life";
        }
        else if(getMetaContent == "Grid - Fashion & Beauty"){
            dfp_adunit = "Fashion_Beauty";
        }
        else if(getMetaContent == "Grid - Lady Boss"){
            dfp_adunit = "Lady_Boss";
        }
        else if((getMetaContent != "" || getMetaContent != " ") && getMetaContent != "tag"){
            dfp_adunit = getMetaContent;
        }
        else {
            dfp_adunit = "Home";
        } 

googletag.defineSlot('/31800665/Grid.id/'+dfp_adunit, [[970, 90],[970, 250],[728, 90]], 'div-gpt-ad-head-banner').setTargeting('pos', ['Top_1']).setTargeting('kg_pos', ['top_1']).addService(googletag.pubads());googletag.defineSlot('/31800665/Grid.id', [[300, 600]], 'div-gpt-ad-giant').setTargeting('Pos', ['Giant']).setTargeting('kg_pos', ['giant']).addService(googletag.pubads());googletag.defineSlot('/31800665/Grid.id/'+dfp_adunit, [[300, 250], [300, 600]], 'div-gpt-ad-giant2').setTargeting('Pos', ['Giant2']).setTargeting('kg_pos', ['giant_2']).addService(googletag.pubads());googletag.defineSlot('/31800665/Grid.id/'+dfp_adunit, [[300, 250],[336,280]], 'div-gpt-ad-MR3').setTargeting('Pos', ['MR3']).setTargeting('kg_pos', ['right_3']).addService(googletag.pubads());googletag.defineSlot('/31800665/Grid.id/'+dfp_adunit,[[100,550],[120,600],[100,650]],'div-gpt-ad-skin-left').setTargeting('pos',['Skin_Left']).setTargeting('kg_pos', ['skin_left']).addService(googletag.pubads());googletag.defineSlot('/31800665/Grid.id/'+dfp_adunit,[[100,550],[120,600],[100,650]],'div-gpt-ad-skin-right').setTargeting('pos',['Skin_Right']).setTargeting('kg_pos', ['skin_right']).addService(googletag.pubads());googletag.defineSlot('/31800665/Grid.id/'+dfp_adunit, [[468,60], [728,90], [970,90], [1100,50]], 'div-gpt-ad-bottom-frame').setTargeting('pos', ['horizontal_ad']).setTargeting('kg_pos', ['horizontal_ad']).addService(googletag.pubads());/****/
//Popup
googletag.defineOutOfPageSlot('/31800665/Grid.id/'+dfp_adunit, 'div-Premium-Topframe').setTargeting('pos', ['Popup']).setTargeting('kg_pos', ['Popup']).addService(googletag.pubads());
/****/

var dvignette = googletag.defineOutOfPageSlot('/31800665/Grid.id/vignette', googletag.enums.OutOfPageFormat.INTERSTITIAL);
if(dvignette !== null) {
    dvignette.setTargeting('pos',['vignette']);
    dvignette.setTargeting('kg_pos',['vignette']);
    dvignette.addService(googletag.pubads());
}

/****/
//Adbro
googletag.defineOutOfPageSlot('/31800665/Grid.id/'+dfp_adunit, 'div-gpt-adbro').setTargeting('pos', ['adbro']).setTargeting('kg_pos', ['adbro']).addService(googletag.pubads());
/****/googletag.defineOutOfPageSlot('/31800665/Grid.id/'+dfp_adunit, 'div-gpt-ad-balloon-ad').setTargeting('pos', ['BalloonAds']).addService(googletag.pubads());googletag.defineOutOfPageSlot('/31800665/Grid.id/'+dfp_adunit, 'div-gpt-ad-popular1').setTargeting('pos', ['Popular_1']).addService(googletag.pubads());googletag.defineOutOfPageSlot('/31800665/Grid.id/'+dfp_adunit, 'div-gpt-ad-popular2').setTargeting('pos', ['Popular_2']).addService(googletag.pubads());setContextualTargeting();
setBrandSafety();
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
  var cekclassread = document.getElementsByClassName("read__article")[0];
  if(cekclassread != undefined){
    var content = document.getElementsByClassName("read__article")[0].innerText;

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

    var keyword3 = content.match(/\b(wuling|hyundai|tesla|mobil listrik|mobil ramah lingkungan|mobil EV|test drive)\b/i);
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
googletag.pubads().setTargeting('kg_group_sites','grid_id');googletag.defineOutOfPageSlot('/31800665/Grid.id/'+dfp_adunit, 'div-gpt-ad-latest1').setTargeting('pos', ['Latest_Stories_1']).addService(googletag.pubads());googletag.defineOutOfPageSlot('/31800665/GOM/Grid.id/'+dfp_adunit, 'div-gpt-ad-latest2').setTargeting('pos', ['Latest_Stories_2']).addService(googletag.pubads());googletag.defineOutOfPageSlot('/31800665/Grid.id/'+dfp_adunit, 'div-gpt-ad-highlight1').setTargeting('pos', ['Article_Highlight']).addService(googletag.pubads());        
        googletag.pubads().enableSingleRequest();
        googletag.pubads().enableAsyncRendering();
        googletag.pubads().collapseEmptyDivs();
        googletag.enableServices();         
        
    });