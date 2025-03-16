jQuery(function($){
    
    //var store = new Persist.Store('INQCTraker');
    
    function hidecookmsg(){
        $(".qni-cookmsg").removeClass("showcookmsg");
        $(".qni-cookmsg").addClass("hidecookmsg");
    }
    
    $("#m_date").click(function(){
        //store.remove('iagreed');
        //console.log("removed persist.js data");
        //console.log($.cookie("iagreed"));
        $.removeCookie("iagreed", {path: "/"});
        console.log("I remove the cookie :(");
    });    
    
    $("#smf_lbl").click(function(){
        $.cookie("iagreed","yes",{expires: 365, path: "/"});
        console.log("saved a js cookie"); 
    });
    
    $(".iagree").click(function(){
        $(".qni-cookmsg").removeClass("showcookmsg");
        $(".qni-cookmsg").addClass("hidecookmsg");
        //localStorage.setItem("iagreed","yes");
        //store.set("iagreed","yes");
        $.cookie("iagreed","yes",{expires: 365, domain: ".inquirer.net", path: "/"});
        ga('send', 'event', 'INQTracker', 'IAgreed', 'PrivacyPolicyAgree');
    });
    
    //var iagreed = localStorage.getItem("iagreed");
    var iagreed = $.cookie("iagreed");
    if(iagreed != "yes"){
        $(".qni-cookmsg").addClass("showcookmsg");
        //setTimeout(hidecookmsg,10000);
    }        
    
});