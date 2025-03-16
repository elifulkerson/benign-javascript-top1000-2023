googletag.cmd.push(function() {
        //Adslot 1 declaration
    gptadslots[1]= googletag.defineSlot('/31800665/KOMPASIANA.COM/home', [[728, 90], [970, 90], [970, 250]],'div-gpt-ad-414138224105403936-1').setTargeting('Pos',['Top_1']).setTargeting('kg_pos', ['top_1']).addService(googletag.pubads());

        //Adslot 2 declaration
    gptadslots[2]= googletag.defineSlot('/31800665/KOMPASIANA.COM/home', [[300,250]],'div-gpt-ad-414138224105403936-2').setTargeting('Pos',['Right_1']).setTargeting('kg_pos', ['right_2']).addService(googletag.pubads());

    //Adslot 3 declaration
    gptadslots[3]= googletag.defineSlot('/31800665/KOMPASIANA.COM/home', [[300,250]],'div-gpt-ad-414138224105403936-3').setTargeting('Pos',['Right_2']).setTargeting('kg_pos', ['right_3']).addService(googletag.pubads());

    //Adslot 4 declaration
    gptadslots[4]= googletag.defineSlot('/31800665/KOMPASIANA.COM/home', [[300,250]],'div-gpt-ad-414138224105403936-4').setTargeting('Pos',['Right_3']).setTargeting('kg_pos', ['right_4']).addService(googletag.pubads());

    // Adslot giant ads
    gptadslots[2222]= googletag.defineSlot('/31800665/KOMPASIANA.COM/home', [[300,600]],'div-gpt-ad-414138224105403936-2222').setTargeting('Pos',['Giant']).setTargeting('kg_pos', ['giant']).addService(googletag.pubads());
    
    //Adslot oop declaration
    gptadslots[0]= googletag.defineOutOfPageSlot('/31800665/KOMPASIANA.COM/home', 'div-gpt-ad-162687188723508243-oop').setTargeting('Pos',['Overlay']).setTargeting('kg_pos', ['overlay']).addService(googletag.pubads());


    gptadslots[4923]= googletag.defineOutOfPageSlot('/31800665/KOMPASIANA.COM/home', 'div-gpt-ad-643108395629198345-rollup').setTargeting('Pos',['Rollup']).setTargeting('kg_pos', ['rollup']).addService(googletag.pubads());

    
        //Adslot head declaration
        gptadslots[9]= googletag.defineSlot('/31800665/KOMPASIANA.COM/home', [[468,60], [728,90], [970,90], [1100,50]],'div-gpt-ad-414138224105403936-9').setTargeting('Pos',['Horizontal_Ad']).setTargeting('kg_pos', ['horizontal_ad']).addService(googletag.pubads());
    
    
    

                    // flying carpet
                gptadslots[411]= googletag.defineSlot('/31800665/KOMPASIANA.COM/home', [[1,1], [300,250],[336,280]],'div-gpt-ad-712092287234656005-411').setTargeting('Pos',['flying_carpet_desktop']).setTargeting('kg_pos', ['zone_middle_1']).addService(googletag.pubads());
    

    

    
    var dvignette = googletag.defineOutOfPageSlot('/31800665/KOMPASIANA.COM/vignette', googletag.enums.OutOfPageFormat.INTERSTITIAL);
    if(dvignette !== null) {
        dvignette.setTargeting('Pos',['vignette']);
        dvignette.setTargeting('kg_pos',['vignette']);
        dvignette.addService(googletag.pubads());
    }
    /** s: Brandsafety */
    setContextualTargeting();
if(typeof keywordBrandSafety === 'undefined'){
    console.log("no article keywords");
}else{
    console.log("execute keywords");
    setKeywordTargeting();
}
setBrandSafety();

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
}    /** e: Brandsafety */

        googletag.pubads().setTargeting('kg_inv_type','desktop');
    googletag.pubads().setTargeting('kg_group_sites','kompasiana');
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();

});