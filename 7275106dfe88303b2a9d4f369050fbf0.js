__tcfapi("addEventListener",2,(function(e,t){
if(t && ("useractioncomplete"===e.eventStatus||"tcloaded"===e.eventStatus)){
if(!e.purpose.consents[1])return;
var n=e.gdprApplies?1:0;
var metadata = {
        gdpr: n,
        gdpr_consent: e.tcString,
        ccpa: null,
        bp_id: "alterego",
    };
    var config = {
        name: "P&G",
        pixelUrl: "https://pandg.tapad.com/tag"
    };
    var tagger = Tapad.init(metadata, config);
    var data = {
       category: "Home",
    };
   tagger.sync(data);
}
}))