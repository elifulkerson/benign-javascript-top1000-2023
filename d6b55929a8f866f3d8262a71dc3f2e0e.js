/* googletag */ 
     var googletag = window.googletag || {};
     googletag.cmd = googletag.cmd || [];
     window.googletag = googletag;
     googletag.cmd.push(function() {
         googletag.pubads().disableInitialLoad();  
     });
     function detectWidth(){
         return window.screen.width || window.innerWidth && document.documentElement.clientWidth ? Math.min(window.innerWidth, document.documentElement.clientWidth) : window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
     }
     var dfpNetwork =  21631601933;  
     var parentAdPrefix = '/inqphv1.networkhome';                              
     var pagekey = 'main'; 
     if(window.page_category && window.page_category.length > 0){
        pagekey = window.page_category.toString()
     } 
     var deviceWidth = detectWidth(); 
     var deviceName = "Desktop";
     if( deviceWidth < 1025) deviceName = "Tablet";
     if( deviceWidth < 768) deviceName = "Mobile";  
     // Size Mapping
     var adSizes = []; var page_slots = []; 
     adSizes["mrec"] = [[300,250],[250,250]];      
     adSizes["lb1"] = [[728,90],[970,250],[970,90]];  
     adSizes["ss"] = [[300,250]];  
     adSizes["skin"] = [[160,600]]; 
     if(deviceName == 'Tablet') {      
         adSizes["lb1"] = [[728,90]];  
     }
     if(deviceName == 'Mobile') {   
         adSizes["lb1"] = [[320,50],[320,100]];         
     } 
     var adUnits = [{ 
         code: "div-gpt-ad-mrec1",  
         device: ["Desktop","Tablet","Mobile"], 
         addSuffix:'mrec1',
         sizes:adSizes["mrec"],   
     },{   
         code: "div-gpt-ad-mrec2",  
         device: ["Desktop","Tablet","Mobile"], 
         addSuffix:'mrec2',
         sizes:adSizes["mrec"], 
     },{
         code:"div-gpt-ad-mrec3", 
         device: ["Desktop","Tablet","Mobile"],  
         addSuffix:'mrec3',
         sizes:adSizes["mrec"], 
     },{
         code:"div-gpt-ad-mrec4", 
         device: ["Desktop","Tablet","Mobile"],  
         addSuffix:'mrec4',
         sizes:adSizes["mrec"], 
     },{
         code:"div-gpt-ad-mrec5", 
         device: ["Desktop","Tablet","Mobile"],  
         addSuffix:'mrec5',
         sizes:adSizes["mrec"],   
     },{
         code: "div-gpt-ad-lb1", 
         device: ["Desktop","Tablet","Mobile"], 
         addSuffix:'lb1',
         sizes:adSizes["lb1"],
     },{
         code: "div-gpt-ad-ss1", 
         device: ["Desktop","Tablet","Mobile"], 
         addSuffix:'ss1',
         sizes:adSizes["ss"], 
     },{
         code: "div-gpt-ad-ss2", 
         device: ["Desktop","Tablet","Mobile"], 
         addSuffix:'ss2',
         sizes:adSizes["ss"]
     },{
         code: "div-gpt-ad-left_skin", 
         device: ["Desktop","Tablet"], 
         addSuffix:'left_skin',
         sizes: adSizes["skin"],  
     },{
         code: "div-gpt-ad-right_skin", 
         device: ["Desktop","Tablet"],  
         addSuffix:'right_skin',
         sizes: adSizes["skin"],  
     },{
         code:"div-gpt-ad-oop1", 
         device: ["Desktop","Tablet","Mobile"], 
         addSuffix:'oop1',
         sizes: [[1,1]], 
     },{
         code:"div-gpt-ad-oop2", 
         device: ["Desktop","Tablet","Mobile"], 
         addSuffix:'oop2',
         sizes: [[1,1]], 
     },{
         code:"div-gpt-ad-pixel1",
         device: ["Desktop","Tablet","Mobile"], 
         addSuffix:'pixel1',
         sizes: [[1,1]], 
     }
 ];

 console.log(" AdUnits ", adUnits);

 for (var i = 0, len = adUnits.length; i < len; i++) {
     if(adUnits[i].device.indexOf(deviceName) >= 0) {
         adUnits[i].adunit = '/'+dfpNetwork+parentAdPrefix+'/'+pagekey+'_'+adUnits[i].addSuffix;
         adUnits[i].display = true; 
     }     
 } 

 googletag.cmd.push(function() {
   if(adUnits){
     for (var i = 0, len = adUnits.length; i < len; i++) {
         if(!adUnits[i].display) continue;
         var defineslot = null;
             if(adUnits[i].addSuffix === "oop1" || adUnits[i].addSuffix === "oop2"){
                 defineslot = googletag.defineOutOfPageSlot(adUnits[i].adunit,adUnits[i].code).setTargeting('pos',adUnits[i].addSuffix.toString()).addService(googletag.pubads());
             }
             else{
                 defineslot = googletag.defineSlot(adUnits[i].adunit, adUnits[i].sizes, adUnits[i].code).addService(googletag.pubads());
                     if(adUnits[i].addSuffix === "lb1"){
                         defineslot.setTargeting('pos',['top']);
                     }else if(adUnits[i].addSuffix === "mrec1"){  
                         defineslot.setTargeting('pos',['middle'])
                     }else if(adUnits[i].addSuffix === "mrec2"){
                         defineslot.setTargeting('pos',['middle2']);
                     }else if(adUnits[i].addSuffix === "mrec3"){
                         defineslot.setTargeting('pos',['middle3']);
                     }else if(adUnits[i].addSuffix === "mrec4"){
                         defineslot.setTargeting('pos',['middle4']);
                     }else if(adUnits[i].addSuffix === "mrec5"){ 
                         defineslot.setTargeting('pos',['middle5']);  
                     }else if(adUnits[i].addSuffix === "ss1"){
                         defineslot.setTargeting('pos',['right']);
                     }else if(adUnits[i].addSuffix === "ss2"){
                         defineslot.setTargeting('pos',['right2']);
                     }else if(adUnits[i].addSuffix === "left_skin"){
                         defineslot.setTargeting('pos',['left-skin']);
                     }else if(adUnits[i].addSuffix === "right_skin"){
                         defineslot.setTargeting('pos',['right-skin']); 
                     }
             }
         defineslot.setTargeting('refreshIteration',"0".toString());
         page_slots.push({slot:defineslot,code:adUnits[i].code,rf:0});
     }
 }
     googletag.pubads().enableSingleRequest();
     googletag.pubads().collapseEmptyDivs();  
     googletag.enableServices(); 
 });