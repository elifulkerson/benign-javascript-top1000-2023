var webAddress=location.hostname; 
var UrlPri =webAddress.match(/^dev/)?"stg-":(webAddress.match(/^stg/))?"stg-":"";
var UrlPri2 =webAddress.match(/^dev/)?"stg-":(webAddress.match(/^stg/))?"stg-":"";
var UrlPri1 =webAddress.match(/^dev/)?"stg-":(webAddress.match(/^stg/))?"stg-":"";
$('<link rel="stylesheet" type="text/css" href="//'+UrlPri+'utils.imimg.com/header/css/imloginv1-v43.css" >').appendTo("head");
if(typeof(cimjsv) === "undefined")
cimjsv = new Object();
cimjsv['//utils.imimg.com/header/js/imlogin.js']=415; 
var modid = 'MY';
var modid1 = 'MY';
var iso_by_ip = 'IN';
var updateUsing ='';
var gaFormIdentify;
var step = 1;
var country_nm = '';
var newUser = '';
var cookieDelete = '';
var country_ip = '';
var iploc_country_name = '';
var textStatus = '';
var errorThrown = '';
var globalVariable={example_attribute:""}; 
var _gaq = _gaq || [];
var ispns = '';
var dis_ckies = '';
isWrongCityEntered = 0;
redirectURL = document.URL;
otpPlusOTPOnCallCount = 0;
LoginwithOTPcount = 0;
verifytype = 0;
if (typeof(glmodid) != 'undefined') { modid=glmodid;}
var dropdownHtml = '';

$(document).ready(function(){
         var iploc = readCookie('iploc');
         var pdpReact = typeof pdpReactPage!=='undefined' ? pdpReactPage : 0;
          if( iploc != 'undefined' && iploc != ''){
            iso_by_ip = getparamVal(iploc, "gcniso");
            country_ip = getparamVal(iploc, "gip");
            country_nm = getparamVal(iploc, "gcnnm");
            iploc_country_name = country_nm;
            if(iso_by_ip == 'UK'){iso_by_ip = 'GB';}
        }
        else{
            var ULTAparams={
            'modid':modid,
            'token':'imobile@15061981'
        };

        $.ajax({
            type: "POST",
            dataType: "json",
            data: ULTAparams,
            url: "https://geoip.imimg.com/api/location",
            crossDomain: true,
            success: function(data){
              if(data.Response.Code==200)
              {
                iso_by_ip = data.Response.Data.geoip_countryiso;
                country_ip = data.Response.Data.geoip_ipaddress;
                country_nm = data.Response.Data.geoip_countryname;
                var Response = data.Response.Data;
                var str = JSON.stringify(Response);
                str = str.replace(/geoip_countryiso/g, 'gcniso');
                str = str.replace(/geoip_countryname/g, 'gcnnm');
                str = str.replace(/geoip_cityname/g, 'gctnm');
                str = str.replace(/geoip_cityid/g, 'gctid');
                str = str.replace(/geoip_accuracy/g, 'gacrcy');
                str = str.replace(/geoip_ipaddress/g, 'gip');
                str = str.replace(/geoip_statename/g, 'gstnm');
                object = JSON.parse(str);
                iploc_country_name = country_nm;
                if(typeof userDataCookie != 'undefined'){
                  var iploc_cook = new userDataCookie();
                  iploc_cook.set(object,'iploc');
                }else {
                  setTimeout(function() {
                    var iploc_cook = new userDataCookie();
                    iploc_cook.set(object,'iploc');
                  },1000);
                }
                if(iso_by_ip == 'UK'){iso_by_ip = 'GB';}
            }
            else
            {
              country_ip='35.184.248.141';
              iso_by_ip = "IN";
              country_nm="India"
            }
          
          }

            
            });
        }
        var val_imesh = readCookie("ImeshVisitor");
        redirectURL = decodeURIComponentSafe(document.URL,1);
        if ( redirectURL.indexOf("autoLoginconflict") != -1 && val_imesh != ''){
        signIn('','','','','','');}
       //back button 
       var glmod=(typeof(glmodid) != 'undefined') ? glmodid : 'DIR';
       if((typeof InstallTrigger == 'undefined') && (glmod != 'ETO' && glmod != 'TDR' && glmod != 'MY') && (typeof(window.performance.navigation) != 'undefined') && (Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') < 0)){
  var ref = document.referrer;
  var homeurl = webAddress.match(/dev/) ? 'https://dev.indiamart.com/new/gamma/?back=1' : webAddress.match(/stg/) ? 'https://stg.indiamart.com/new/gamma/?back=1' : 'https://www.indiamart.com/?back=1';
  var myurl = webAddress.match(/dev/) ? 'https://dev-my.indiamart.com/?back=1' : webAddress.match(/stg/) ? 'https://stg-my.indiamart.com/?back=1' :'https://my.indiamart.com/?back=1';
  var utype = (val_imesh !='') ? getparamVal(val_imesh, "utyp") : '';
  var url= (utype =='F' || utype =='N') ? myurl : homeurl;
  var trck = (url == myurl)? 'Clicks-MY' : 'Clicks-Home';
  var loc = window.location.href;
  if(cookiesEnabled() && typeof(sessionStorage)!="undefined")
  var bflg = sessionStorage.getItem('bckurl');
  // changes for PDP
  if (loc.match(/proddetail/)) {
    if (ref.match(/dir.indiamart.com/)) {
      url = ref;
    }
  }
  if (((ref =='') || (ref.split('/')[2].slice(ref.split('/')[2].indexOf('.') + 1) != 'indiamart.com') || (history.length == 1) || (bflg == loc) || (ref == loc)) && (loc != myurl) && (loc != homeurl)){
      if(history.length == 1){
        sessionStorage.setItem('bckurl',loc);
        sessionStorage.setItem('f', '0');
    }
      if(cookiesEnabled() && typeof(sessionStorage)!="undefined")
       var flg = sessionStorage.getItem('f');
      if(((window.performance.navigation.type == 0) || (window.performance.navigation.type == 255)) && (flg == undefined || flg != 1) && location.href.indexOf("#") == -1){
      history.pushState("", "", window.location.href);
      if(cookiesEnabled() && typeof(sessionStorage)!="undefined")
      sessionStorage.setItem('f','1');
    }
       window.onpopstate = function() {
          if (history.state != "" && location.href.indexOf("#") == -1 && pdpReact === 0){   
          
              sessionStorage.setItem('f', '0'),
              sessionStorage.setItem('bckurl', '0'),
              //_gaq.push(['_trackEvent', 'Backclicks',trck,glmod, 0, false]),
              window.location.replace(url);
          }
      }
  }
 }
});

function callVerOnReady()
{
    if(typeof(jQuery) === 'function'){
         pop_imesh = readCookie("ImeshVisitor");
         pop_xnhist = readCookie("xnHist");
         var ipv = getparamVal(pop_xnhist, "ipv");
         var fpv = getparamVal(pop_xnhist, "fpv");
         var glUserId = getparamVal(pop_imesh, "glid");
        var name = getparamVal(pop_imesh, "mb1");
        if (typeof(glmodid) != 'undefined') { modid=glmodid;}
        var email = getparamVal(pop_imesh, "em");
        var city = getparamVal(pop_imesh, "ct");
        var ph_country = getparamVal(pop_imesh, "phcc");
        var cn_iso = getparamVal(pop_imesh, "iso");
        if(typeof(pop_imesh) !== 'undefined' && pop_imesh != ''){
          if(modid!="MY" && modid !="FCP"){
             //Mobile Verification Popup for 3rd and 5th Page view
            if(((ipv == 3)||(ipv==5))) {  
                 if (name!=''&& getparamVal(pop_imesh, "phcc") == '91' && getparamVal(pop_imesh, "uv") != 'V'){        
                        showmobverifyScreen(glUserId,modid,name,ph_country,'121',cn_iso,'2','4','VER');
                 }
            } 
            //Email Verification Popup for 3rd and 5th Page view
            if(modid=="DIR" || modid=="PRODDTL"){
              var iss = readCookie('im_iss');
              if(typeof iss != 'undefined' && iss !=''){
                if(((fpv == 3)||(fpv==5))) {
                   if (email!='' && getparamVal(pop_imesh, "uv") == 'V' && getparamVal(pop_imesh, "ev") != 'V')
                   {        
                        send_otp(glUserId,modid,email,ph_country,'109',cn_iso,'2','4','EMAILVER');   
                   }
                } 
              }
              else if(typeof iss == 'undefined' || iss ==''){
                if(((ipv == 3)||(ipv==5))) {
                    if (email!='' && getparamVal(pop_imesh, "uv") == 'V' && getparamVal(pop_imesh, "ev") != 'V')
                    {        
                        send_otp(glUserId,modid,email,ph_country,'109',cn_iso,'2','4','EMAILVER');   
                    }
                }
              }
            }
            else{
              if(((fpv == 3)||(fpv==5))) {
                  if (email!='' && getparamVal(pop_imesh, "uv") == 'V' && getparamVal(pop_imesh, "ev") != 'V')
                  {        
                      send_otp(glUserId,modid,email,ph_country,'109',cn_iso,'2','4','EMAILVER');   
                  }
              }
            } 
          }
          else if(redirectURL.indexOf("utm_campaign=IN-newreg-SEARCH") != -1 && modid=='MY'){
              if(getparamVal(pop_imesh, "uv") != 'V' && cn_iso == 'IN'){
                  showmobverifyScreen(glUserId,modid,name,ph_country,'121',cn_iso,'2','4','VER');
              }
          }
      }
    } else{ setTimeout(function(){callVerOnReady()}, 1000);}
}
if(document.readyState !== "complete" && typeof jQuery === 'function'){
    $(document).ready(function(){ setTimeout(function(){callVerOnReady()}, 1000); });
}else{
    setTimeout(function(){callVerOnReady()}, 1000);
}

function decodeURIComponentSafe(uri, mod) {
    var out = new String(),
        arr,
        i = 0,
        l,
        x;
    typeof mod === "undefined" ? mod = 0 : 0;
    arr = uri.split(/(%(?:d0|d1)%.{2})/);
    for (l = arr.length; i < l; i++) {
        try {
            x = decodeURIComponent(arr[i]);
        } catch (e) {
            x = mod ? arr[i].replace(/%(?!\d+)/g, '%25') : arr[i];
        }
        out += x;
    }
    return out;
}

$(function(){
    $(document).unbind('keypress').bind('keypress', function (e) {
      if (e.keyCode == 27){
               if($('#step1').val() == 1){ // yandex_impression(gaFormIdentify,'step1_close');}
                 gATracking("step1_close");}
               else if($('#step1').val() == 2){// yandex_impression(gaFormIdentify,'VerificationFormClose');
                gATracking("VerificationFormClose");}
               closeMe1();  
           }
           if (e.keyCode == 13 &&((document.getElementById('logintoidentify')) || (document.getElementById('check_verify1')))){
                    if($("#identifiedForm").length){
                      if($('#countryIso').val() == 'IN')
                      {
                        $("#logintoidentify").click();
                      }
                      else
                      {
                        if(document.getElementById("myCheckbox")){
                          if(document.getElementById("myCheckbox").checked) 
                            {
                              $("#logintoidentify").click();
                            }
                          else
                            {
                                var mob_box = document.getElementById('mbl_idn');
                                var err_div = document.getElementById('err-msg-mbl-ctl');
                                invalidmsg_ctl(mob_box,"Please accept the terms and privacy policy.",err_div);
                            }
                        }
                      }
                    }
                    else{
                      if($('#iso').val() == 'IN')
                      {
                        if(dis_ckies=='')
                        $("#logintoidentify").click();
                      }
                      else
                      {
                      if(document.getElementById("myCheckbox")){
                        if(document.getElementById("myCheckbox").checked) 
                          {
                            if(dis_ckies=='')
                            $("#logintoidentify").click();
                          }
                        else
                          {
                            invalidMsgLogin("Please accept the terms and privacy policy.");
                          }
                      }
                      }
                  }
        $("#check_verify1").click(); 
                return false;
       }
    });    
});

$(function() {
    if (window.history && window.history.pushState) {
        $(window).on('popstate', function() {
                 if (typeof window.perWidget != 'undefined') {
                            syncDataCheck();
                             }
        });
    }
});

function callImloginv1(dirsearch, msg){
 if (typeof(isImloginV1Open) !== "undefined" && isImloginV1Open == 1) {
    if(dirsearch == 'R')
       fullLoginForm('','','','R');
       else
          fullLoginForm('','','','B');
 }
 else{
   $.ajaxSetup({cache:!0});
      $.getScript("//"+UrlPri+"utils.imimg.com/header/js/imloginv1-v72.js", function(){
          if(dirsearch == 'R') 
       fullLoginForm('','','','R');
       else
          fullLoginForm('','','','B'); 
       });
 }
}

function invalidMsgLogin(err_msg){   
        $('#mobile').css('border-color', 'red');
        $('#mobile_err').html(err_msg);
        $('#mobile_err').css('display','block');
}

function callidentifiedJ(){
    $("html").css("overflow","auto");
    $('#IdentifiedPopUpHTML').html('');return true;
}

function closeMe1(sfFlag){
  $('.as_arrow').css('display','block');
  $('#mob_val').remove();
  var iso = $("#iso").val();
  var gemail = $("#g_sub_head").text();
  var LWG_call = $("#LWG").val();
  var err_msg_val = $("#mobile_err").text();
  if(err_msg_val==''){
    if(typeof LWG_call != undefined && LWG_call == 1){
      if(iso != 'IN'){
        if(typeof gemail != undefined && gemail != ""){
          callForeignSubmit(iso);
          return;
        }
      }
    }
  }
        LoginwithOTPcount = 0;
        getLoginStringv1();
        var xread = readCookie('xnHist');
        var ipv_val = (xread !='') ? getparamVal(xread, "ipv") : '';
        if(sfFlag == 'IDEN' && dispflag == 1)
          {
            // yandex_impression('Identification_login_popup','Verification_close_'+modid);
            _gaq.push(['_trackEvent', 'Identification_login_popup', 'impression', 'Verification_close_' + modid]);
            if (modid == "DIR" || modid == "PRODDTL" || modid == "IMHOME")
            {
                var val_imesh = readCookie("ImeshVisitor");
                var em = (val_imesh !='') ? getparamVal(val_imesh, "em") : '';
                if (em == '') 
                {
                    globalVariable={example_attribute:"100"};
                }
            }
            callidentifiedJ();
        }
        else if(sfFlag == 'IDEN'){
             // yandex_impression('Identification_login_popup','Verification_close_'+modid);
             _gaq.push(['_trackEvent', 'Identification_login_popup', 'impression', 'Verification_close_' + modid]);
                globalVariable={example_attribute:"1"};
                if ((dispflag == 1) && (modid == "DIR" || modid == "PRODDTL" || modid == "IMHOME"))
                  {globalVariable={example_attribute:"100"};}
                callidentifiedJ();
              }
            else if(sfFlag == 'VER' && redirectURL.indexOf("utm_campaign=IN-newreg-SEARCH") != -1 && modid=='MY'){ 
                 // yandex_impression('Verification_popup','Verification_close_buyermy_'+modid);
                 _gaq.push(['_trackEvent', 'Identification_login_popup', 'impression', 'Verification_close_buyermy_' + modid]);
             $('#IdentifiedPopUpHTML').html('');return true;
            }
         else if(sfFlag == 'VER'){if(ipv_val == 4 || ipv_val == 5)
             // yandex_impression('Verification_popup','Verification_close_5th_'+modid);
             _gaq.push(['_trackEvent', 'Verification_popup', 'impression', 'Verification_close_5th_' + modid]);
             else 
             // yandex_impression('Verification_popup','Verification_close_3rd_'+modid);
             _gaq.push(['_trackEvent', 'Verification_popup', 'impression', 'Verification_close_3rd_' + modid]);

             $('#IdentifiedPopUpHTML').html('');return true;
            }
        else if(sfFlag == 'EMAILVER'){if(ipv_val == 5 || ipv_val == 4)
             // yandex_impression('Verification_popup','EMAIL_Verification_close_5th_'+modid);
             _gaq.push(['_trackEvent', 'Verification_popup', 'impression', 'EMAIL_Verification_close_5th_' + modid]);

            else // yandex_impression('Verification_popup','EMAIL_Verification_close_3rd_'+modid);
            _gaq.push(['_trackEvent', 'Verification_popup', 'impression', 'EMAIL_Verification_close_3rd_' + modid]);

            $('#IdentifiedPopUpHTML').html('');return true;
           }
        else if(sfFlag == 'HDR'){// yandex_impression('IM_Global_Header','Verification_close_'+modid);
          _gaq.push(['_trackEvent', 'IM_Global_Header', 'impression', 'Verification_close_' + modid]);

            window.location.reload();return true;
        }
        else if(sfFlag == 'BUYERMY'){
            // yandex_impression('Verification_popup','Verification_popup_Buyermy_Verification_MYcontact_close_'+modid);
            _gaq.push(['_trackEvent', 'Verification_popup', 'impression', 'Verification_popup_Buyermy_Verification_MYcontact_close_' + modid]);

             $('#IdentifiedPopUpHTML').html('');return true;
            }
        else if(sfFlag == 'BUYERMY_NAV'){
            // yandex_impression('Verification_popup','Verification_popup_Buyermy_Verification_MYNav_close_'+modid);
            _gaq.push(['_trackEvent', 'Verification_popup', 'impression', 'Verification_popup_Buyermy_Verification_MYNav_close_' + modid]);

             $('#IdentifiedPopUpHTML').html('');return true;
            }
        else if(sfFlag == 'SELLER_DASHBOARD'){
             $('#IdentifiedPopUpHTML').html('');return true;
            }
        else if(sfFlag == 'HDR_STRP'){
             $('#IdentifiedPopUpHTML').html('');return true;
            }
        else if (sfFlag == 'SCROLLVER' || sfFlag == 'SCROLLVER1')
            {
              //to be tracked
              // localstorage.setItem()
              if(sfFlag == 'SCROLLVER1'){
                  // yandex_impression('Verification_popup','Verification_popup_Verification_scroll_close_'+modid);
                  _gaq.push(['_trackEvent', 'Verification_popup', 'impression', 'Verification_popup_Verification_scroll_close_' + modid]);

                }
              if(sfFlag == 'SCROLLVER'){
            // yandex_impression('Verification_popup','Verification_popup_Verification_scrollver_close_'+modid);
            _gaq.push(['_trackEvent', 'Verification_popup', 'impression', 'Verification_popup_Verification_scrollver_close_' + modid]);

          }
            if(typeof(sessionStorage)!="undefined")  
            sessionStorage.setItem('scrollverclosed','1');
              // console.log(sessionStorage.getItem('scrollverclosed'));
              $('#IdentifiedPopUpHTML').hide();
              scrollverclosed = 1;
              $('#IdentifiedPopUpHTML').html('');
              return true;
            }
            else{
                // yandex_impression(gaFormIdentify,'VerificationFormClose');
              gATracking("VerificationFormClose");
            }
        if(sfFlag == 'FCP' || sfFlag == 'si' || sfFlag == 'MDC' || sfFlag == 'PNS'){$('#sign_in').html('');return true;}
        var urlmatch = document.URL;
        if(((step == 2 || step == 3) && (modid == 'MY' || modid == 'SELLERMY' || modid =='SELLERS' || modid == 'PAYWIM' || modid == 'IMHOME' || urlmatch == "https://trade.indiamart.com/"))){
        window.location.reload();
        } else{
            if (redirectURL.indexOf("autoLoginconflict") != -1 ){
                // yandex_impression('SignIn_popup_ConflictCases','Conflict_popup_close_'+modid1);
                _gaq.push(['_trackEvent', 'SignIn_popup_ConflictCases', 'impression', 'Conflict_popup_close_' + modid1]);

                                                         var indexOfAutoLoginConflictParam = redirectURL.indexOf("autologin");
                                                        urlWithOutConflictParam = redirectURL.substring(0,indexOfAutoLoginConflictParam-1);
                                                        history.pushState(null, null, urlWithOutConflictParam);
                                                        $('#sign_in').html('');
                                                    }
            else{
                $('#sign_in').html('');}
        }
    }

function redirect_SB(){    
     var url = webAddress.match(/my/) ? 'MY' : webAddress.match(/seller/) ? 'SELLER' : '';
    if(url == 'MY')
    {window.location = '//'+UrlPri+'my.indiamart.com';
        // yandex_impression('Redirection_on_signout','Redirection_to_MY_'+modid); 
   _gaq.push(['_trackEvent', 'Redirection_on_signout','Redirection_to_MY',modid, 0, true]);
    }
    else if(url == 'SELLER')
    {window.location = '//'+UrlPri+'seller.indiamart.com';
          // yandex_impression('Redirection_on_signout','Redirection_to_SELLER_'+modid); 
   _gaq.push(['_trackEvent', 'Redirection_on_signout','Redirection_to_SELLER',modid, 0, true]);
    }
    else
    {window.location.reload();}
}

function readCookie(name)
{
var search = name + "="
    if (document.cookie.length > 0){
        offset = document.cookie.indexOf(search)
        if (offset != -1){
            offset += search.length
            end = document.cookie.indexOf(";", offset)    // set index of beginning of value
            if (end == -1) end = document.cookie.length    // set index of end of cookie value
            return unescape(document.cookie.substring(offset, end))
        }
    }
    return "";
}
function getparamVal(cookieStr, key) { if (cookieStr > "") { var val = "|" + cookieStr + "|"; var pattern = new RegExp(".*?\\\|" + key + "=([^|]*).*|.*");return val.replace(pattern, '\$1');} else { return "";}}

function validmsg(){
        $('#mobile').css('border-color', '#999');
        $('#mobile_err').html('');
        $('#mobile_err').css('display','none');
}

function signIn(a,b,c,lgtemp,dirsearch,dirmsg){
          var iploc = readCookie('iploc');
          if( iploc != 'undefined' && iploc != ''){
            iso_by_ip = getparamVal(iploc, "gcniso");
            country_ip = getparamVal(iploc, "gip");
            country_nm = getparamVal(iploc, "gcnnm");
            iploc_country_name = country_nm;
            if(iso_by_ip == 'UK'){iso_by_ip = 'GB';}
          }
         redirectURL = decodeURIComponentSafe(document.URL,1);
        if ( redirectURL.indexOf("autoLoginconflict") != -1 ){
            var indexOfRequestType = redirectURL.indexOf("requestType");
            var typeOfRequest = redirectURL.substring(indexOfRequestType+12,indexOfRequestType+13);
            if ( (typeOfRequest == "I" && lgtemp != 'B') || (typeOfRequest == "F" && lgtemp != 'B'))
                register('s', lgtemp,dirsearch,dirmsg,a);
            else 
                callImloginv1();
        }
        else{
            cookieDelete = lgtemp ;
            if(lgtemp == 'B')
                callImloginv1();
            else
                register('s', lgtemp,dirsearch,dirmsg,a); 
        }
}
 
function register(pi,lgtemp,dirsearch,dirmsg,a){
    var meta = document.createElement('link');
    meta.href = "https://fonts.googleapis.com/css?family=Roboto";
    meta.rel = "stylesheet";
    meta.type = "text/css";
    document.getElementsByTagName('head')[0].appendChild(meta);
    var meta2 = document.createElement('script');
    meta2.src ="https://apis.google.com/js/platform.js";
    document.getElementsByTagName('head')[0].appendChild(meta2);

       var popUp = 'Join IndiaMART for Free', toSignIN = 'Already a member:', popUpSignIn = 'Sign In';
       var submitButton = 'Create Your Account';
       
       if(typeof userDataCookie != 'undefined'){
       var usrDatCook = new userDataCookie().get();
       var mb = usrDatCook.mb1;
       if( pi == 's' ){
                gaFormIdentify = "signIn";
                updateUsing = 'Sign IN Form Desktop';
                popUp = 'Sign In';
                if(lgtemp == 'C'){
                        // yandex_impression(gaFormIdentify,'step1_display_notme');
                       gATracking('step1_display_notme');
                        var fname = usrDatCook.fn;
                        var ename = usrDatCook.em;
                        if(typeof(mb) == 'undefined'){mb = "";}
                        if(typeof(fname) == 'undefined'){fname = "";}
                        if(typeof(ename) == 'undefined'){ename = "";}
                        if( fname == ''){popUp = "Not "+mb+"? Sign In as a different user";}
                        else { popUp = "Not "+fname+"? Sign In as a different user"; }
                        if(fname == '' && mb == ''){popUp = "Not "+ename+"? Sign In as a different user";} 
                }else if(dirsearch == 'si' || dirsearch == 'FCP' || dirsearch == 'MDC' || dirsearch == 'PNS' || dirsearch == 'PRODDTL')
                {   // yandex_impression(gaFormIdentify,'step1_display_'+dirsearch);
                   gATracking('step1_display_'+dirsearch+'');
                    popUp = dirmsg;}
                submitButton = 'Submit';
                toSignIN = '';
                popUpSignIn = '';
        }else{
                gaFormIdentify = "joinFree";
                updateUsing = 'Join Free Form Desktop';
       }
       redirectURL = decodeURIComponentSafe(document.URL,1);
        if ( redirectURL.indexOf("autoLoginconflict") != -1 ){
            var indexOfUserName = redirectURL.indexOf("username");
            var indexOfISO = redirectURL.indexOf("ISO");
            var indexOfname = redirectURL.indexOf("&fn");
            var indexOfRequestType = redirectURL.indexOf("requestType");
            var indexofscreen = redirectURL.indexOf("&screen");
            var typeOfRequest = redirectURL.substring(indexOfRequestType+12,indexOfRequestType+13);
            name1 = redirectURL.substring(indexOfname+4,indexOfISO-1);
            userNameFromParam = redirectURL.substring(indexOfUserName+9,indexOfname-1);
            screen = redirectURL.substring(indexofscreen+8,indexOfRequestType-1);
            if ( typeOfRequest == "I"){
            isoFromParam = redirectURL.substring(indexOfISO+4,indexofscreen-0); 
            iso_by_ip = isoFromParam;
            }
            else{
            var indexOfGlid = redirectURL.indexOf("kp");
            isoFromParam = redirectURL.substring(indexOfISO+4,indexOfGlid-1);
            iso_by_ip = isoFromParam;    
            }
            var name = usrDatCook.fn;
            if( name == ''){popUp = 'Not '+mb+' ? Sign In as '+name1+'';}
            else{popUp = 'Not '+name+' ? Sign In as '+name1+''; }
            modid1 = 'vc='+screen+'||imesh_user='+usrDatCook.glid+'||mail_user='+userNameFromParam+'';
       }
       if(lgtemp != 'C' && dirsearch != 'si' && dirsearch != 'PNS' && dirsearch != 'FCP' && dirsearch != 'MDC' && dirsearch != 'PRODDTL'){
           // yandex_impression(gaFormIdentify,'step1_display');
        gATracking('step1_display');
    }
       if (redirectURL.indexOf("autoLoginconflict") != -1 && isoFromParam == 'IN'){
           // yandex_impression('SignIn_popup_ConflictCases','Conflict_popup_display(IN)_'+modid1);}
   _gaq.push(['_trackEvent', 'SignIn_popup_ConflictCases','Conflict_popup_display(IN)',modid1, 0, true]);}
       if (redirectURL.indexOf("autoLoginconflict") != -1 && isoFromParam != 'IN'){
            // yandex_impression('SignIn_popup_ConflictCases','Conflict_popup_display(FN)_'+modid1);}
          _gaq.push(['_trackEvent', 'SignIn_popup_ConflictCases','Conflict_popup_display(FN)',modid1, 0, true]); }
       //login with google on MY
       var lwg_html_btn = '';
       
       if (!cookiesEnabled())
        { 
            gATracking("CookiesNotEnabled");
            dis_ckies =  '<div id="cookiesetmsg" style="padding: 8px;border: 1.5px solid #f4c608;border-radius: 5px;margin-bottom: 15px;"><img id="alertImage" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDk3LjQ3MiA0OTcuNDcyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0OTcuNDcyIDQ5Ny40NzI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIHRyYW5zZm9ybT0ibWF0cml4KDEuMjUgMCAwIC0xLjI1IDAgNDUpIj4NCgk8Zz4NCgkJPGc+DQoJCQk8cGF0aCBzdHlsZT0iZmlsbDojRkZDQzREOyIgZD0iTTI0LjM3NC0zNTcuODU3Yy0yMC45NTgsMC0zMC4xOTcsMTUuMjIzLTIwLjU0OCwzMy44MjZMMTgxLjQyMSwxNy45MjgNCgkJCQljOS42NDgsMTguNjAzLDI1LjQ2MywxOC42MDMsMzUuMTIzLDBMMzk0LjE0LTMyNC4wMzFjOS42NzEtMTguNjAzLDAuNDIxLTMzLjgyNi0yMC41NDgtMzMuODI2SDI0LjM3NHoiLz4NCgkJCTxwYXRoIHN0eWxlPSJmaWxsOiMyMzFGMjA7IiBkPSJNMTczLjYwNS04MC45MjJjMCwxNC44MTQsMTAuOTM0LDIzLjk4NCwyNS4zOTUsMjMuOTg0YzE0LjEyLDAsMjUuNDA3LTkuNTEyLDI1LjQwNy0yMy45ODQNCgkJCQlWLTIxNi43NWMwLTE0LjQ2MS0xMS4yODctMjMuOTg0LTI1LjQwNy0yMy45ODRjLTE0LjQ2MSwwLTI1LjM5NSw5LjE4Mi0yNS4zOTUsMjMuOTg0Vi04MC45MjJ6IE0xNzEuNDg5LTI4OS4wNTYNCgkJCQljMCwxNS4xNjcsMTIuMzQ1LDI3LjUxMSwyNy41MTEsMjcuNTExYzE1LjE2NywwLDI3LjUyMy0xMi4zNDUsMjcuNTIzLTI3LjUxMWMwLTE1LjE3OC0xMi4zNTYtMjcuNTIzLTI3LjUyMy0yNy41MjMNCgkJCQlDMTgzLjgzNC0zMTYuNTc5LDE3MS40ODktMzA0LjIzNCwxNzEuNDg5LTI4OS4wNTYiLz4NCgkJPC9nPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" style="width:  28px;height:  28px;margin-right: 7px;    margin-top: -4px;"><span style=" color:  grey;font-weight:  800;">Please Enable Cookies to Continue</span></div>';
        }
      
       // if(modid=='MY' && document.URL.indexOf('seller.indiamart.com') == -1){
          lwg_html_btn = '<div id="lwg_wrpr"><p style="margin-top:-10px;font-size:14px;font-weight:600;">OR</p><div id="gSignInWrapper" style="margin: 10px 0px 15px 0px;text-align:center;"> <div id="signinBtn" class="customGPlusSignIn"> <span class="Gicon"> </span> <span class="buttonText"> Continue with Google </span><input type="hidden" value="0" style="display:none;" id="LWG"> </div></div></div>';
      // }
        // ispns = dirsearch;
      //  var abtrack = (dirsearch == 'PNS') ? "gATrackingAb(\'Sc 1 Close Clicked\');" : '';
       var registerHTML = '<style>.dropdown dd ul{top:32px!important;}.dropdown dt {height: 20px!important;}</style><div class="overlay_s" id="overlay_s" style="display: none;"></div><div id="im-pop_s"> <!-- Popup div starts here --><div id="popupContact_s"> <!-- contact us form --><div id="form_s" ><a href="javascript:" onclick="closeMe1();gATracking(\'step1_close\');"><img src="//'+UrlPri+'utils.imimg.com/header/gifs/3.png" id="close_s"/></a><div class="one_s"><div class="c3"></div><div id="form_bxx"><div class="step-1"><h2 class="f1_s" id="ghead" style="margin-bottom:10px;">'+popUp+'</h2><p style="padding-right:25px;text-align:right;margin-top:3px;" class="f12_s">'+toSignIN+'&nbsp;<a style="font-weight:bold; color:#ffffff;" href="javascript:" onclick="signIn();">'+popUpSignIn+'</a></p><span id="g_sub_head" style="padding-left:10px;font-size: 15px;font-weight: 600;display:none;">You are just one step away from verified suppliers</span></div><div><div class="frm-1"><div class="frm_right-1 f1_s" id="gsubhead"><form name="userregistration" id="reg-form"><a name="etop"></a><input type="hidden" value="'+modid+'" name="modid"><input type="hidden" value="'+updateUsing+'" name="updatedusing" id="updatedusing"><i class="enbgg nvTg" id="gemal_icn" style="display:none;"></i><div class="labeljn_s c3_s" id="gemail" style="margin-bottom: 20px;margin-left: 20px;font-size: 14px;font-weight: bold;display:none;"></div><div class="labeljn_s c3_s" id="g_sub1_head" style="margin-left: 5px;font-size: 14px;font-weight: bold;display:none;margin-top:0px;"></div><div id="g_sub2_head" class="labeljn_s c3_s" style="margin-bottom: 10px;font-size: 14px;display: none;width:390px;line-height:1.8;margin-top:0px;"></div>'+dis_ckies+'<div class="labeljn_s c3_s" id = "formLabel">Mobile Number</div><div class="f1 cont_drpdown" id=""><dl class="dropdown cont_mob" id="country-dropdown" > </dl></div><div id="frmGglCntryChusr"></div><input type="text" value="" maxlength="60" placeholder="Enter Your Mobile Number" class="fw_fn-1 un2_s" id="mobile" onkeypress="return isNumberKey1(event)" name="mobile" style="background-color:#fff;outline: none;box-sizing: content-box;"><span id="mobile_err" class="em-1" style="display:none"></span><div id ="trm1" style="line-height: 21px;font-size: 14px;"><label><input type="checkbox" id="myCheckbox" style="vertical-align:-2px;" onchange="activateButton1(this)"> I agree to the&nbsp;</label><a href="https://www.indiamart.com/terms-of-use.html" target="_blank">terms </a> and <a href="https://www.indiamart.com/privacy-policy.html" target="_blank" ">privacy policy</a></div><input type="hidden" value="" name="country" id="country"><input type="hidden" value="" name="iso" id="iso"><input type="hidden" value="" id="country_name" name="country_name"><input type="hidden" value="1" id="step" name="step"><input type="hidden" value="" id="ph_country" name="ph_country"><input type="hidden" value="1" id="step1" name="step1"><input type="hidden" value="'+dirsearch+'" id="srch1" name="srch1"><input type="hidden" value="" id="multi_mob_numbers_lwg"><div class="mt10_s"><p><button tabindex="5" style="padding: 8px 0px; width: 260px" onclick="validateForm_userName1(\''+dirsearch+'\');" type="button" class="continue_s" name="start" id="logintoidentify">'+submitButton+'</button></p>'+lwg_html_btn+'<span id="loading_s" style="display:none; text-align:left !important;padding-top:24px;font-size:12px;top:10px;"><img style="text-align:left;" src="//'+UrlPri+'utils.imimg.com/header/gifs/indicator.gif" alt="loading" height="16" width="16"><b style="color:#000;">&nbsp;Signing In...</b></span></div></form></div></div></div></div></div></div> </div>  <!-- Popup div ends here --> </div><div id="loadingmessage" style="display:none;width: 100%;height: 100%;position:fixed;z-index: 1001;text-align: center;"><img src="//'+UrlPri+'utils.imimg.com/header/imgs/loader1.gif"/></div>';
        $('#sign_in').html(registerHTML);
           // if(modid=='MY'){
          if ( redirectURL.indexOf("autoLoginconflict") != -1 ){
            $("#lwg_wrpr").hide();
          }
      // }
        $("#overlay_s").css("display","block");
        document.getElementById("mobile").focus();
        if(iso_by_ip == 'UK'){iso_by_ip = 'GB';}
        if(  typeof(Suggester) != 'undefined' && Suggester != ''){
        var isd_suggestor = new Suggester({"type":"isd","element":"country-dropdown","onSelect":selectCountry, fields: "cname,iso,icon_order",displayFields:"cname,value",autocompleteClass:"isd_class",displaySeparator:'  +','defaultValue':iso_by_ip});
      }
       clc_cookies();
        var clientID = '';
       if (UrlPri == 'dev-' || UrlPri == 'stg-')
       {
          clientID = '335658149809-o25hpstdu2tdo43j8ppg8l6n6i0dtfl0.apps.googleusercontent.com';
      }
      else
      {
          clientID = '432055510365-4for8jpqviklkgt2lssm41sfhhfo0ovs.apps.googleusercontent.com';
       }
        meta2.onload = function() 
      {
        gapi.load('auth2', function(){
          // Retrieve the singleton for the GoogleAuth library and set up the client.
          auth2 = gapi.auth2.init({
            client_id: clientID,
            //cookiepolicy: 'single_host_origin',
            // Request scopes in addition to 'profile' and 'email'
            //scope: 'additional_scope'
          });
          googleSignin(document.getElementById('signinBtn'));
        });
      };
    }
    else{
      setTimeout(function(){
        register(pi,lgtemp,dirsearch,dirmsg,a);
      },50)
    }
}

function googleSignin(element) {
    auth2.attachClickHandler(element, {},

        function(googleUser) {
          var id_token = googleUser.getAuthResponse().id_token;
              gusrname = googleUser.getBasicProfile().getName();
              gusremail = googleUser.getBasicProfile().getEmail();
              if(gusremail!=''){
                  checkEmailExistOrNot(gusremail,id_token);

              }
              if(gusrname!=''){
                //$('#ghead').html("Welcome, "+gusrname);
                //$('#g_sub_head').show();
              }
              if(gusremail!=''){
                   // yandex_impression('Login_With_Google','Step1_'+modid1);
               _gaq.push(['_trackEvent', 'Login_With_Google','Step1',modid, 0, 0]);
                $("#formLabel").html('Mobile Number <span style="color:red;">*</span>');
                //$("#gemail").html(gusremail);
                //$("#gemail").css('display','inline-block');
                //$("#gemal_icn").css({'display':'inline-block','background-position': '-72px -9px'});
                if(($('#iso').val()!="IN" && $('#step').val() == "1")){
                  $("#mobile").attr('placeholder','Enter your Mobile Number');
                  $("#formLabel").html('Mobile Number <span style="color:blue;font-size:11px;">(Optional)</span>');
                }

                $("#lwg_wrpr").hide();
                //$("#signinBtn").hide();
                $("#logintoidentify").css('margin','15px 0 0px');
                $("#LWG").val(1);
                //$(".cont_drpdown").hide();
                //$("#mobile").css('visibility','hidden');
              }

        }, 
        function(error) {
        });
  }

  function cookiesEnabled() 
{
    var cookiesEnabled = (navigator.cookieEnabled) ? true : false;
    return cookiesEnabled;
}

  function verifyEmailViaLWG(email,glid){
    var iso = $('#iso').val();
    var ph_country = $('#ph_country').val();
    var mid = glmodid;
    if(typeof mid == undefined || mid == '')
      mid='DIR';
  var screen_name = 'Email Verification via login with google - desktop';
    var verparams = {
                'token':"imobile@15061981",
                'format':'JSON',
                'glusr_id'  : glid,
                'em'        : email,
                'mid'       : mid,
                'countIP'   : country_ip,
                'IPcount'   : ph_country,
                'lwg_screen': screen_name
            };
            $.ajax({
                    url : "//"+UrlPri2+"login.indiamart.com/user/emailVerification/",
                    data: verparams,
                    type: "POST",
                    crossDomain: true,
                    success: function(resultJson){
                            //_gaq.push(['_trackEvent','Identification_login_popup','Google_IM_Email_Updated_Verified', modid, 0, true]);
                            //set cookie for verified email
                            setEmailCookieLogin(email,1);
                           // getLoginStringv1();
                           // callToIdentifiedQ();
                    }
            });
  }
  function setEmailCookieLogin(email,marked)
{
    var imeshval = readCookie("ImeshVisitor");
    var b = "";
    var offset;
    var offset1;
    var end = email.indexOf("@");
    var len = end-2;
    var str = "";
    for (var i = 0; i <= end; i++)
    {
        str+="*";
    }
    var ends = email.substring(end);
    email = email.charAt(0)+str+ends;
    if (imeshval.length > 0)
        if (offset = imeshval.indexOf("em"), -1 != offset)
        {
            b = strToObj(imeshval);
            b.em = email;
            imesh_obj.set(b);
            imeshval = readCookie("ImeshVisitor");
        }
    if (marked == 1)
    {
        if (offset1 = imeshval.indexOf("ev"))
        {
            b = strToObj(imeshval);
            b.ev = "V";
            imesh_obj.set(b);
        }  
        /*if (offset1 = imeshval.indexOf("fn"), -1 != offset)
        {
            b = strToObj(imeshval);
            b.fn = fn;
            imesh_obj.set(b);
        }*/
    }
}

  function checkEmailExistOrNot(gusremail,id_token){
        var iso = $('#iso').val();
        var ph_country = $('#ph_country').val();
        var updated = $('#updatedusing').val();
        if(!$('#iso').val()){$('#iso').val(iso_by_ip);}
        $("#logintoidentify").css("display","none");
        $("#loading_s").css("display","block");
        var url = "//"+UrlPri2+"login.indiamart.com/user/loginwithgoogle_first/";
        var params_request = {  
            'username':gusremail,
            'iso':iso,
            'modid':modid,
            'format':'JSON',
            'create_user':1,
            'originalreferer':window.location.href,
            'GEOIP_COUNTRY_ISO':iso,
            'ip':country_ip,
            'screen_name':updateUsing,
            'id_token':id_token,
            'gusername':gusrname,
            'guseremail':gusremail,
            'ph_country':ph_country
        };
        $.ajax({
            url: url,
            type:"POST",
            data:params_request,
            jsonpCallback:'create_callback',
            crossDomain: true,
            success: function ( jsonResult ){
              var jsonResult = $.parseJSON(jsonResult);
              if(jsonResult['code']==200){
                var access=jsonResult.access; 
                 if(access != undefined && access == '2'){
                    document.cookie = "ImeshVisitor=; domain=.indiamart.com; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                    window.location.reload();
                    return;
                }
                var msg = jsonResult["msg"];
                var fndb = jsonResult["fn"];
                if(msg == 'Unique Email found in Primary Email'){
                    var glid = jsonResult["GLID"];
                    $("#gemail").html(gusremail);
                    $("#gemal_icn").css({'display':'inline-block','background-position': '-72px -9px'});
                    $('#sign_in').html('');
                    $("#loadingmessage").hide();
                    var data1=jsonResult.DataCookie;
                    verifyEmailViaLWG(gusremail,glid);
                    var loginSet = jsonResult.LoginCookie; 
                    var tokenSet=jsonResult.im_iss;
                    imesh_obj.set(data1,"ImeshVisitor");
                    v4iilex_obj.set(loginSet,"v4iilex");
                    im_iss_obj.set(tokenSet,"im_iss");
                    getLoginStringv1();
                    if(typeof isBLFormOpen != 'undefined'){
                    callToIdentifiedQ();}
                    if(modid=='MY')
                    window.location.reload();
                    return;
                }
              }
              else{
                if(jsonResult["code"] == '204'){
                              var err_msg = jsonResult['msg'];
                                if(jsonResult["message"] == 'ISO MisMatch'){
                                    invalidMsgLogin(err_msg);
                                    $("#country-dropdown").css('pointer-events','auto');   
                                }else if(jsonResult["message"].match(/suspicious/g)){
                                  var msg = jsonResult["message"];
                                    invalidMsgLogin(err_msg);  
                                }
                                else if(jsonResult['message'] == 'We have multiple account linked with this Email ID'){
                                    
                                  var msg = jsonResult["message"];
                                  $("#gemail").html(gusremail);
                                  $("#gemal_icn").hide();
                                  $("#gemail").hide();
                                  //$("#ghead").html("Hi "+gusremail);
                                  $("#ghead").html("Sign in to continue as "+gusrname);
                                  //if(modid!='FCP')
                                  //$('<br>').insertAfter('#ghead');
                                  //$("#g_sub_head").text("We have found multiple accounts linked with this Email ID.");
                                  $("#g_sub_head").text(gusremail);
                                  $("#g_sub_head").show();
                                  //$("#g_sub1_head").text("Please continue with your mobile number");
                                  // $("#g_sub1_head").text("We have found multiple accounts linked with this Email ID");
                                  //$("#g_sub2_head").insertAfter('#g_sub1_head');
                                  // $("#g_sub2_head").text("Please enter your regis/**/tered mobile number to continue");
                                  $("#g_sub2_head").text(err_msg);
                                  $("#g_sub1_head").css('display','inline-block');
                                  $("#g_sub2_head").css('display','inline-block');
                                  var mobile_numbers = jsonResult['data_num'];
                                  $("#multi_mob_numbers_lwg").val(mobile_numbers);
                                  $("#country-dropdown").css('pointer-events','none');
                                }
                                else if(jsonResult['message'] == 'No Email found in Primary Email'){
                                    $("#ghead").html("Sign in to continue as "+gusrname);
                                    // if(modid!='FCP')
                                    // $('<br>').insertAfter('#ghead');
                                  $("#g_sub_head").text(gusremail);
                                    $('#g_sub_head').show();
                                    //$("#gemail").html(gusremail);
                                    //$("#gemal_icn").css({'display':'inline-block','background-position': '-72px -9px'});
                                    //disable country selection in this case
                                    $("#country-dropdown").css('pointer-events','none');
                                }
                                else if(jsonResult['message'] == 'Invalid Token ID'){
                                  invalidMsgLogin("Invalid token request");
                                }
                                else{ invalidMsgLogin(err_msg);
                                    //_gaq.push(['_trackEvent','SignIn_204',username,modid, 0, true]);
                                }
                        }
                $("#logintoidentify").css("display","inline-block");
                $("#loading_s").css("display","none");
                //$("#loadingmessage").hide();
              }
              
            }
          });
}

function identifyViaLoginWithGoogle(username,multi_flag){
      //call check existing user or new user via login with google / new login wrapper
       // yandex_impression('Login_With_Google','Step2_'+modid1);
     _gaq.push(['_trackEvent', 'Login_With_Google','Step2',modid, 0, 0]);
      var iso = $('#iso').val();
        var ph_country = $('#ph_country').val();
        var updated = $('#updatedusing').val();
        if(!$('#iso').val()){$('#iso').val(iso_by_ip);}
        $("#logintoidentify").css("display","none");
        $("#loading_s").css("display","block");
        var url = "//"+UrlPri2+"login.indiamart.com/user/loginwithgoogle/";
        var params_request = {  
            'username':username,
            'iso':iso,
            'modid':modid,
            'format':'JSON',
            'create_user':1,
            'originalreferer':window.location.href,
            'GEOIP_COUNTRY_ISO':iso,
            'ip':country_ip,
            'ph_country':ph_country,
            'screen_name':updateUsing,
            'gusername':gusrname,
            'gemail':gusremail
        };
        var mobVal = $('#mobile').val();
        if(typeof mobVal != undefined && mobVal != ''){
          if(($('#iso').val()=="IN" && $('#step').val() == "1") || ($('#iso').val() != "IN" && $('#step').val() == "2")){
            params_request['username'] = mobVal;
            //params_request['email'] = $("#gemail").text();
          }
          else if($('#iso').val()!="IN"){
            params_request['username'] = username;//mobVal;
           // params_request['email'] = $("#gemail").text();
            params_request['mobile'] = mobVal;
          }
        }
        $.ajax({
            url: url,
            type:"POST",
            data:params_request,
            jsonpCallback:'create_callback',
            crossDomain: true,
            success: function ( jsonResult ){
              var jsonResult = $.parseJSON(jsonResult);
              if(jsonResult['code']==200){
                var msg = jsonResult["msg"];
                
                var resultSet=jsonResult.DataCookie; 
                var access=jsonResult.access; 
                var glid = jsonResult.DataCookie.glid;
                 if(access != undefined && access == '2'){
                    document.cookie = "ImeshVisitor=; domain=.indiamart.com; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                    window.location.reload();
                    return;
                }
                if((resultSet != undefined) && (resultSet !='')){
                   document.cookie = "ImeshVisitor" + "=;expires=;domain=.indiamart.com;path=/;";
                   imesh_obj.set(resultSet,"ImeshVisitor");
                   getLoginStringv1();
                   if(typeof isBLFormOpen != 'undefined'){
                   callToIdentifiedQ();}
                   var imesh = new userDataCookie().get();
                    var glUserId = imesh.glid;
                    var name = imesh.fn;
                    var email = imesh.em;
                    var city = imesh.ct;
                    iso = imesh.iso;
                    ph_country = imesh.phcc;

                  if(multi_flag==1){
                    // already existing number associated with multiple email case is getting identified, then verify email
                    verifyEmailViaLWG(gusremail,glid);
                    // if new number is logged with already associated multi email then do not verify email, just give identified login
                    //now ask for OTP
                    if(name != '' && email != ''){var flag = 4;}else{var flag = 3;}
                    if(ph_country == '91'&& imesh.uv !='V' && iso == 'IN'){
                    if(typeof isBLFormOpen != 'undefined'){      
                           callToIdentifiedQ();}
                    if ( document.URL == "https://"+UrlPri+"seller.indiamart.com/sbl" ){
                        fullLoginForm('','','','B');
                    }
                    else
                    {
                        truecaller_Ver(glUserId,modid,username,ph_country,'121',iso,'2',flag);
                        $("#loading_s").hide();
                        getLoginStringv1();
                        return true;
                    }
                    }
                  }
                  else if(msg == "New User created via User creation service"){
                    verifyEmailViaLWG(gusremail,glid);
                      // if new user is indian, so verify mobile no. hence show verification popup here
                      if(name != '' && email != ''){var flag = 4;}else{var flag = 3;}
                      if(ph_country == '91'&& imesh.uv !='V' && iso == 'IN'){
                      if(typeof isBLFormOpen != 'undefined'){      
                             callToIdentifiedQ();}
                      if ( document.URL == "https://"+UrlPri+"seller.indiamart.com/sbl" ){
                          fullLoginForm('','','','B');
                      }
                      else
                      {
                          truecaller_Ver(glUserId,modid,username,ph_country,'121',iso,'2',flag);
                          $("#loading_s").hide();
                          getLoginStringv1();
                          return true;
                      }
                      }
                  }
                  else if(msg == "Mobile Number found in Primary Mobile"){
                    verifyEmailViaLWG(gusremail,glid);
                      // if indian user already existing with unverified no. , show verification popup
                      if(name != '' && email != ''){var flag = 4;}else{var flag = 3;}
                      if(ph_country == '91'&& imesh.uv !='V' && iso == 'IN'){
                      if(typeof isBLFormOpen != 'undefined'){      
                             callToIdentifiedQ();}
                      if ( document.URL == "https://"+UrlPri+"seller.indiamart.com/sbl" ){
                          fullLoginForm('','','','B');
                      }
                      else
                      {
                          truecaller_Ver(glUserId,modid,username,ph_country,'121',iso,'2',flag);
                          $("#loading_s").hide();
                          getLoginStringv1();
                          return true;
                      }
                      }
                  }


                        $("#loading_s").hide();
                        $('#sign_in').html('');
                        getLoginStringv1();
                        if(modid=='MY')
                        window.location.reload();
                        return true;
                }
              }
              else{
                if(jsonResult["code"] == '204'){
                              var err_msg = jsonResult['msg'];
                              invalidMsgLogin(err_msg);
                        }
                $("#logintoidentify").css("display","inline-block");
                $("#loading_s").css("display","none");
                //$("#loadingmessage").hide();
              }
              
            }
          });
}
function callForeignSubmit(iso){
  if(iso!="IN"){
    var frn_eml = $("#g_sub_head").text();
    if(typeof frn_eml != undefined && frn_eml != ''){
      identifyViaLoginWithGoogle(frn_eml);
    }
  }
}
function activateButton1(element)
{   
    if(dis_ckies=='')
    {
      if(element.checked) {
        document.getElementById("logintoidentify").disabled = false;
        $("#logintoidentify").css("background-color","#00a699");
        $('#mobile_err').html('');
        $('#mobile_err').css('display','none');
       }
       else  {
        document.getElementById("logintoidentify").disabled = true;
        $("#logintoidentify").css("background-color","#b2b2b2");
      }
  }
  else{

        document.getElementById("logintoidentify").disabled = true;
        $("#logintoidentify").css("background-color","#b2b2b2");
      
  }
        
}

var fieldFlag = 1;
function isNumberKey1(evt){
    if(fieldFlag == 1){
        var charCode = (evt.which);
        if(charCode == 118 && evt.ctrlKey === true){
            return true;
        }
        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
    }
    return true;
}

function selectCountry(event, ob){
  var LWG_call = $("#LWG").val();
    $('#mobile').css('border-color', '');
    $("#trm1").css("display","none");
    $('#mobile_err').html('');
    $("#country-dropdown dt a span").attr('style','background-position:0px -'+ob.data.icon_order*11+'px');
    $("#country-dropdown dt span.value").html('+'+ob.value);
        $('#country_name').val(ob.data.cname);
    $('#iso').val(ob.data.iso);
    $('#ph_country').val(ob.value); 
//         iso_by_ip = ob.data.iso;
        if($('#iso').val()!="IN"){
          document.getElementById("lwg_wrpr").style.display = 'block';
        }
        else{
          document.getElementById("lwg_wrpr").style.display = 'none';
        }
        if(($('#iso').val()!="IN" && $('#step').val() == "1") || ($('#iso').val()=="IN" && $('#step').val() == "2") )
        {
                fieldFlag = 2;
                var iso = $('#iso').val();
                $("#trm1").css("display","inline-block");
                document.getElementById("logintoidentify").disabled = true;
                $("#logintoidentify").css("background-color","#b2b2b2");
                $('#myCheckbox').attr('checked', false);

                $('#mobile').attr('maxlength', '100');
                $('#country-dropdown dt span.value').css("display", 'none');
                $("#country-dropdown dt a").css('margin-top','10px');
                if(typeof LWG_call != undefined && LWG_call == 1){
                    $("#mobile").attr('placeholder','Enter your Mobile Number');
                    $("#formLabel").html('Mobile Number <span style="color:blue;font-size:11px;">(Optional)</span>');
                }
                else{
                  $('#mobile').attr("placeholder", "Enter your Email ID");
                  $('#formLabel').html('Email ID');
              }
                if($('#step').val() != "2"){
                    $('#mobile').css({"padding-left":"64px","width":"373px"});
                }
                $('#mobile').val("");
        }
        else{
                fieldFlag = 1;
                document.getElementById("logintoidentify").disabled = false;
                $("#logintoidentify").css("background-color","#00a699");
                $("#trm1").css("display","none");
                $('#mobile').attr('maxlength', '10');
                $('#country-dropdown dt span.value').css("display", 'inline-block');
                $('#formLabel').html('Mobile Number');
                $('#mobile').css({"padding-left":"119px","width":"318px"}).attr("placeholder", "Enter Your Mobile Number");
                if($('#step').val() != "2"){
                  if(typeof LWG_call != undefined && LWG_call == 1){
                      $("#formLabel").html('Mobile Number <span style="color:red;">*</span>');
                     }
                }
                $('#mobile').val("");
        }
        clc_cookies();      
}

function validateForm_userName1(dirsearch) {
  var LWG_call = $("#LWG").val();
        var mobVal = $('#mobile').val();
        if(!$('#iso').val()){$('#iso').val(iso_by_ip);}
        if(($('#iso').val()=="IN" && $('#step').val() == "1") || ($('#iso').val() != "IN" && $('#step').val() == "2")){            
                if((mobVal == '') || (mobVal.length == 0)){
                        invalidMsgLogin("Please enter mobile number.");
                        return false;
                }
                else{ 
                        mobVal= mobVal.replace(/\-|\s|\[|\]|\(|\)/ig,'');
                      //  mobVal= mobVal.replace(/^(0*)/,'');
                        mobVal= mobVal.replace(/\+/g,'');
                        var cnt = (mobVal.match(/[0-9]/g) || []).length;
                if(cnt>10){mobVal = mobVal.replace(/^((91){0,1}0{0,})/g,'');}
                        if($('#iso').val() != "IN" && $('#step').val() == "2"){
                            if(mobVal.length > 16 || mobVal.length < 7){
                                 invalidMsgLogin("Please enter valid number.");
                                 return false;
                            }
                             validmsg();
                            return true;
                        }
                        else{
                               if(!(/^[16789]/.test(mobVal))){
                                        invalidMsgLogin("Mobile Number should start with 6,7,8 or 9");
                                        return false;   
                                } else if(mobVal.length != 10){
                                        invalidMsgLogin("Please enter 10 digit mobile number.");
                                        return false;   
                                }
                                else{
                                        validmsg();
                                        if(dirsearch == 'PNS')
                                        gATrackingAb('step1_submit');
                                        if(typeof LWG_call != undefined && LWG_call == 1){
                                          var multiple_mob_numbers = $("#multi_mob_numbers_lwg").val();
                                          if(typeof multiple_mob_numbers != undefined && multiple_mob_numbers != ''){
                                            var multi_mobs = multiple_mob_numbers.split(",");
                                              if(jQuery.inArray(mobVal,multi_mobs) == -1){
                                                identifyViaLoginWithGoogle(mobVal,0);
                                                //invalidMsgLogin("Mobile number is not associated with registered Email ID");
                                                //return false;
                                              }
                                              else{
                                              identifyViaLoginWithGoogle(mobVal,1);}
                                          }
                                          else{
                                          identifyViaLoginWithGoogle(mobVal);}
                                        }
                                        else{
                                        userDetailsAutoFetchforidentify(mobVal,dirsearch);
                                    }
                                        return true;
                                }
                        }
                } 
        }
        else{
          if(typeof LWG_call != undefined && LWG_call == 1){
                mobVal = $("#g_sub_head").text();
              }
                mobVal = mobVal.replace(/^\s+|\s+$/gm,'');
                if((mobVal == '') || (mobVal.length == 0)){
                        invalidMsgLogin("Please enter your Email ID");
                        return false;      
                }else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(mobVal)))
                {
                        invalidMsgLogin("Invalid Email ID. Please enter the correct Email ID.");
                        return false;
                }else{ 
                        validmsg();
                        if(dirsearch == 'PNS')
                        gATrackingAb('step1_submit');
                        if($('#step').val() != "2"){
                          if(typeof LWG_call != undefined && LWG_call == 1){
                            identifyViaLoginWithGoogle(mobVal);
                          }
                          else{
                        userDetailsAutoFetchforidentify(mobVal,dirsearch);
            }
                    }
                        return true;
                }
        }
}   

function userDetailsAutoFetchforidentify(username,dirsearch){
        redirectURL = decodeURIComponentSafe(document.URL,1);
        var iso = $('#iso').val();
        var iploc = readCookie('iploc');
        var lat_val = (iploc !='') ? getparamVal(iploc, "GeoLoc_lt") : '';
        var long_val = (iploc !='') ? getparamVal(iploc, "lg") : '';
        if( iploc != 'undefined' && iploc != '')
        {
            iso_by_ip = getparamVal(iploc, "gcniso");
            country_ip = getparamVal(iploc, "gip");
            country_nm = getparamVal(iploc, "gcnnm");
            if(iso_by_ip == 'UK'){iso_by_ip = 'GB';}
        }
        else
        {
            var ULTAparams={
            'modid':modid,
            'token':'imobile@15061981'
          };

          $.ajax({
              type: "POST",
              dataType: "json",
              data: ULTAparams,
              url: "https://"+UrlPri+"geoip.imimg.com/api/location",
              crossDomain: true,
              success: function(data){
                if(data.Response.Code==200)
                {
                  iso_by_ip = data.Response.Data.geoip_countryiso;
                  country_ip = data.Response.Data.geoip_ipaddress;
                  country_nm = data.Response.Data.geoip_countryname;
                  if(iso_by_ip == 'UK'){iso_by_ip = 'GB';}
                }
                else
                {
                  country_ip='35.184.248.141';
                  iso_by_ip = "IN";
                  country_nm="India"
                }
              }
            });
        }
        var ph_country = $('#ph_country').val();
        var updated = $('#updatedusing').val();
        if(!$('#iso').val()){$('#iso').val(iso_by_ip);}
        $("#logintoidentify").css("display","none");
        $("#lwg_wrpr").css("display","none");
        $("#loading_s").css("display","block");
        var url = "//"+UrlPri2+"login.indiamart.com/user/identify/";
        var params_request = {  
            'username':username,
            'iso':iso,
            'modid':modid,
            'format':'JSON',
            'create_user':1,
            'originalreferer':window.location.href,
            'GEOIP_COUNTRY_ISO':iso,
            'ip':country_ip,
            'screen_name':updateUsing,
            'Lat_val': lat_val,
            'Long_val': long_val,
            'country' : country_nm
        };
        $.ajax({
            url: url,
            type:"POST",
            data:params_request,
            jsonpCallback:'create_callback',
            crossDomain: true,
            success: function ( jsonResult ){
                var jsonResult = $.parseJSON(jsonResult);
                imeshUserData = jsonResult.DataCookie;
                var attributeId = 121;
                isRestricted=0;
                 if(imeshUserData && imeshUserData.usts && imeshUserData.usts==2){//for these users half login is not allowed
                    isRestricted=1;
                }
                if(jsonResult != undefined && jsonResult["code"] == '200'){
                        var msg = jsonResult["msg"];
                        if(msg == 'New User created via User creation service')
                        {newUser = 1;
                        }
                        var resultSet=jsonResult.DataCookie; 
                        var access=jsonResult.access; 
                         if(access != undefined && access == '2'){
                            document.cookie = "ImeshVisitor=; domain=.indiamart.com; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                            window.location.reload();
                            return;
                        }
                        if((resultSet != undefined) && (resultSet !='')){
                                document.cookie = "ImeshVisitor" + "=;expires=;domain=.indiamart.com;path=/;";
                                imesh_obj.set(resultSet,"ImeshVisitor");
                        }

                }else{
                        if(jsonResult["code"] == '204'){
                            if(isRestricted){
                            $('#mob_val').remove();
                            $('body').append('<input type="hidden" id="mob_val">');
                            document.getElementById('mob_val').value = $('#mobile').val();
                            $('body').append('<input type="hidden" id="iso_restricted">');
                            document.getElementById('iso_restricted').value = $('#iso').val();
                            $('body').append('<input type="hidden" id="phcc_restricted">');
                            document.getElementById('phcc_restricted').value = $(".value").html();
                            dropdownHtml = $('#country-dropdown').html();

                        callImloginv1('R');
                        }else{
                          var err_msg = jsonResult['msg'];
                          invalidMsgLogin(err_msg);
                        }
                        } 
                        $("#logintoidentify").css("display","inline-block");
                        $("#loading_s").css("display","none");
                        return ;
                }
                if ( modid == "PRODDTL")
                {
                    if(parent.document.getElementById('buttonid') && parent.document.getElementById('buttonid').value != '')
                    {
                        var btnid = parent.document.getElementById('buttonid').value;
                        if(btnid)
                        {
                            $('#'+btnid).click();
                            $('#sign_in').html('');
                            parent.document.getElementById('buttonid').value = '';
                            getLoginStringv1();
                            return true;
                        }
                    }
                } 
                var imesh = new userDataCookie().get();
                var glUserId = imesh.glid;
                var name = imesh.fn;
                var email = imesh.em;
                var city = imesh.ct;
                iso = imesh.iso;
                ph_country = imesh.phcc;
                if (document.getElementById("myCheckbox") && document.getElementById("myCheckbox").checked){
                var params = {
                    'r':'Newreqform/TermNCondition',
                    's_glusrid':glUserId,
                    's_user_agent':navigator.userAgent,
                    'modid':modid,
                    'format':'JSON',
                    's_ip':country_ip,
                    's_ip_country':country_nm,
                    's_ip_country_iso':iso_by_ip,
                    'curr_page_url':window.location.href,
                    'reference_text':'Desktop Signin/Joinfree form'
                };
                $.ajax({
            url: "//"+UrlPri+"apps.imimg.com/index.php?",
            type:"POST",
            data:params,
            crossDomain: true,
            success: function ( jsonResult1 ){
            }
                });
                }
               if(name != '' && email != ''){var flag = 4;}else{var flag = 3;}
               if(newUser == '1'){
                    if(ph_country == '91' && iso == 'IN'){
                      if(typeof isBLFormOpen != 'undefined'){
                         callToIdentifiedQ();}
                         if(dirsearch == 'PNS' || dirsearch == 'PRODDTL'){$('#sign_in').html('');return true;}  
                         if ( document.URL == "https://"+UrlPri+"seller.indiamart.com/sbl" ){
                                fullLoginForm('','','','B');
                         }else{ 
                            truecaller_Ver(glUserId,modid,username,ph_country,attributeId,iso,'2',flag);
                    }
                    }else{
                      if(typeof isBLFormOpen != 'undefined'){
                        callToIdentifiedQ();}
                        thankyou_popup(modid,flag);
                        
                    }
                         if(cookieDelete == 'C'){
                        document.cookie = "imEqGl" + "=;expires=;domain=.indiamart.com;path=/;";
                    }
                    if(dirsearch == 'FCP' || dirsearch == 'MDC' || dirsearch == 'PNS' || dirsearch == 'si'){
                        // yandex_impression(gaFormIdentify,'step1_submit_'+dirsearch+'');
                       gATracking('step1_submit_'+dirsearch+'');
                    }else if(redirectURL.indexOf("autoLoginconflict") != -1){
                         // yandex_impression('SignIn_popup_ConflictCases','Conflict_popup_submit_'+modid1);}
                       _gaq.push(['_trackEvent', 'SignIn_popup_ConflictCases','Conflict_popup_submit',modid1, 0, true]); }
                    else{
                        // yandex_impression(gaFormIdentify,'step1_submit');
                        gATracking("step1_submit");
                    }
                }
                else
                {
                    
                    if(imesh == "" || imesh == null){
                         var resultSet=jsonResult.DataCookie;
                          imesh_obj.set(resultSet,"ImeshVisitor");
                    }
                    if(ph_country == '91'&& imesh.uv !='V' && iso == 'IN'){
                    if(typeof isBLFormOpen != 'undefined'){      
                           callToIdentifiedQ();}
                    if ( document.URL == "https://"+UrlPri+"seller.indiamart.com/sbl" ){
                        fullLoginForm('','','','B');
                    }
                    else
                    {
                        truecaller_Ver(glUserId,modid,username,ph_country,attributeId,iso,'2',flag);
                    }
                    }
                    else
                    {
                      if(typeof isBLFormOpen != 'undefined'){
                            callToIdentifiedQ();}
                            getLoginStringv1();
                            var urlmatch = document.URL;
                            if((modid == 'MY' || modid == 'SELLERMY' || modid=='SELLERS' || modid == 'PAYWIM' || modid == 'IMHOME' || modid == 'ETO') && (redirectURL.indexOf("autoLoginconflict") == -1)){
                                    window.location.reload();
                            }
                            else if (modid == 'DIR'){
                              if (typeof showCntNumber !== 'undefined' && $.isFunction(showCntNumber)) {
                                showCntNumber();
                              }
                              closeMe1();
                               // yandex_impression(gaFormIdentify,'step1_close');
                             gATracking('step1_close');
                              return true;
                            }
                            else{
                                $('#sign_in').html('');}
                    }
                    if(cookieDelete == 'C'){
                        document.cookie = "imEqGl" + "=;expires=;domain=.indiamart.com;path=/;";
                    }
                    if(dirsearch == 'FCP' || dirsearch == 'MDC' || dirsearch == 'PNS' || dirsearch == 'PRODDTL' || dirsearch == 'si'){
                        // yandex_impression(gaFormIdentify,'step1_submit_'+dirsearch+'');
                       gATracking('step1_submit_'+dirsearch+'');
                    }else{
                         // yandex_impression(gaFormIdentify,'step1_submit');
                       gATracking("step1_submit");
                    }
                }
                if ( redirectURL.indexOf("autoLoginconflict") != -1 ){
                    var indexOfAutoLoginConflictParam = redirectURL.indexOf("autologin");
                    urlWithOutConflictParam = redirectURL.substring(0,indexOfAutoLoginConflictParam-1);
                     history.pushState(null, document.title, urlWithOutConflictParam);
                    if(modid == 'MY' || modid == 'SELLERMY' || modid=='SELLERS' || modid == 'PAYWIM' || modid == 'IMHOME' || modid == 'ETO'){
                                    window.location.reload();
                    }
                }
            },
            error: function(message){
                    $("#logintoidentify").css("display","inline-block");
                    $("#loading_s").css("display","none");
                    invalidMsgLogin("Something went wrong. Please try again in sometime!");
                    _gaq.push(['_trackEvent','SignIn_Error',username,modid, 0, true]);
            }
        });
}

function thankyou_popup(modid,cDflag,sfFlag,src1)
{   var val_imesh = readCookie("ImeshVisitor");
    var em = (val_imesh !='') ? getparamVal(val_imesh, "em") : '';
    var crossDisplay = 'style="display: block;"';
         var verifyBoxHTML = '<div id="im-pop_s"> <!-- Popup div starts here --><div id="popupContact_s" style="display: block;"><!-- contact us form --><div class="overlay_s" id="overlay_s" style="display: none;"></div><div id="form_otp1" style="min-width: 540px;"><div class="step-1" id="bs_hdng1"><a href="javascript:" onclick="closeMe1(\''+src1+'\');" style="display: block;"><img src="//dev-utils.imimg.com/header/gifs/3.png" id="close_s"></a><h2 class="f1_s otp-pl18">Verification mail sent</h2></div><div><p class="email-message" style="margin: 19px 0px 20px 14px;">We have sent you a mail on <b> '+em+' </b> with a verification link.Please click on the link to verify that it belongs to you.</p></div></div><!-- Popup div ends here --></div>  <!-- Popup div ends here --> </div>';
         
          if(src1 != 'HDR_STRP'){
          document.getElementById('popupContact_s').innerHTML = verifyBoxHTML;
          document.getElementById('popupContact_s').style.display = "block";
          }
          else
          {
          $("#IdentifiedPopUpHTML").html(verifyBoxHTML);
          $("#overlay_s").css("display","block");
          $("#IdentifiedPopUpHTML").css({"display":"block","position":"fixed","top":"200px","left":"50%","z-index":"1001","margin-left":"-247px"});
          }

    setTimeout(function(){
        if(cDflag == 3 || cDflag == 4){closeMe1();
          if(modid=='MY')
            window.location.reload();
        }
        else if(modid == 'FCP' || sfFlag == 'si' || modid == 'MDC'){
          if(typeof isBLFormOpen != 'undefined'){
          callToIdentifiedQ();}
          $('#sign_in').html("");}
        else{window.location = '//'+UrlPri+'my.indiamart.com';}
        return true;
            }, 5000);
}

function truecaller_Ver(glid,modid,mobile_num,mob_cont_code,att_id,phCountry,resend,cDflag,src1)
{
    var imesh = new userDataCookie().get();
    var ph_c = imesh.phcc;
    var mobile = imesh.mb1;
    var src1 = 'TRUE';
    var mob = ph_c.concat(mobile);
    showmobverifyScreen(glid,modid,mobile_num,mob_cont_code,att_id,phCountry,'2',cDflag,'HDR');
}

var sendOTPCount = 0;
function send_otp(glid,modid,mobile_num,mob_cont_code,att_id,phCountry,resend,cDflag,src1){
    LoginwithOTPcount = 0;
    if(resend == 3){showmobverifyform(glid,modid,mobile_num,mob_cont_code,att_id,phCountry,cDflag,'TRUE','');
                   return;
    }
    if (!(document.getElementById("otp-message") === null ))
        document.getElementById("otp-message").innerHTML = "4 digit OTP SMS sent on your mobile <b>+91-" + mobile_num + "</b>";
    if (dispflag == 1 && src1 == 'IDEN') {
      document.getElementById("resendMsg").style.display = "block";
    }
    if(src1 == 'SCROLLVER1')
    {
         // yandex_impression('Verification_popup','Verification_scroll_click_'+modid);
     _gaq.push(['_trackEvent', 'Verification_popup','Verification_scroll_click',modid,0,true]);
    }
    var xread = readCookie('xnHist');
    var ipv_val = (xread !='') ? getparamVal(xread, "ipv") : '';
    $("#verify_error1").html('');
    if ( displayVerificationOptions == 1 )
        $("#mwrp").css("display","none");
    var imesh = new userDataCookie().get();
    var mobNoFromCookie1 = imesh.mb1;
    var glidFromCookie1 = imesh.glid;
    var im_issval;
    var AK;
    var miss_num = '081-8181-8181';
    if(att_id != '109')
    {
      if (!mobile_num || !mobNoFromCookie1){
        var gATracking1 = glidFromCookie1 + "_" + modid + "_" + mobile_num + "_" + mobNoFromCookie1;
        _gaq.push(['_trackEvent',gaFormIdentify,"mobileTrackingInSend",gATracking1, 0, true]);
      }
    }
    else
    {
      im_issval = readCookie('im_iss');
      AK = (im_issval !='') ? getparamVal(im_issval, "t") : '';
    }
    if (mob_cont_code != '91' && phCountry != 'IN')
        return false;
    username = imesh.mb1;
    $('#check_verify1').attr('disabled', true); 
    $('#check_verify1').css("background-color", "lightgrey");
    var processName = '';
        if(cDflag==1){
                processName = 'OTP_JoinFreeForm_Desktop';
                updateUsing = 'Join Free Form Desktop';
        }
    else{
         if(src1 == 'BUYERMY' || src1 == 'BUYERMY_NAV'){
                processName = 'OTP_BuyerMYContactProfile_Desktop';
                updateUsing = 'BUYER MY CONTACT PROFILE PAGE';
         }else if(src1 == 'SELLER_DASHBOARD'){
             processName = 'OTP_SellerMY_Desktop';
             updateUsing = 'SELLER MY DASHBOARD';
         }else{
        processName = 'OTP_SignInForm_Desktop';
        updateUsing = 'Sign IN Form Desktop';
        }
    }
    if( ( sendOTPCount > 2 && displayVerificationOptions != 1 ) ){
                $('#re_auth1, #resendMsg, #mwrp').css("display","none");
                $('#check_verify1').attr('disabled', false); 
                $("#verify_error1").html('Please Wait for the OTP');
                $('#check_verify1').css("background-color", "#00a699");
                if (dispflag == 1 && src1 == 'IDEN') {
                  document.getElementById("resendA").style.display = "none";
                  document.getElementById("resendMsg").style.display = "none";
                }
        return false;      
    }
    // if(resend == 1 && src1 == 'EMAILVER'){showmobverifyform(glid,modid,mobile_num,mob_cont_code,att_id,phCountry,cDflag,src1,miss_num); }
    if(resend == 2 && redirectURL.indexOf("autoLoginconflict") == -1 ){showmobverifyform(glid,modid,mobile_num,mob_cont_code,att_id,phCountry,cDflag,src1,miss_num);}
    if(resend == '1'){
                if(cDflag == 1){
                        if(src1 == 'IDEN'){
                            // yandex_impression('Identification_login_popup','Verification_resend_'+modid);
                            _gaq.push(['_trackEvent', 'Identification_login_popup', 'impression', 'Verification_resend_' + modid]);

                            }else{
                        if( displayVerificationOptions == 1 )
                             // yandex_impression(gaFormIdentify,"NewUser_ResendOTP_Clicked_"+(sendOTPCount+1));
                           gATracking("NewUser_ResendOTP_Clicked_"+(sendOTPCount+1));
                        else
                            // yandex_impression(gaFormIdentify,'NewUser_ResendOTP');
                           gATracking("NewUser_ResendOTP");
                        }
                        document.getElementById('resendMsg').style.display = 'none';
                }
                else if(cDflag == 3 || cDflag == 4){
                        if(src1 == 'IDEN'){
                            // yandex_impression('Identification_login_popup','Verification_resend'+modid);
                           _gaq.push(['_trackEvent', 'Identification_login_popup','Verification_resend',modid, 0, true]);
                        }
                        else if(src1 == 'VER' && redirectURL.indexOf("utm_campaign=IN-newreg-SEARCH") != -1 && modid=='MY'){
                            // yandex_impression('Verification_popup','Verification_resend_buyermy_'+modid);}
                           _gaq.push(['_trackEvent', 'Verification_popup','Verification_resend_buyermy',modid, 0, true]);}
                        else if(src1 == 'VER'){if(ipv_val == '4' || ipv_val == '5') 
                        // yandex_impression('Verification_popup','Verification_resend_5th_'+modid); 
                        _gaq.push(['_trackEvent', 'Verification_popup', 'impression', 'Verification_resend_5th_' + modid]);

                        else 
                        // yandex_impression('Verification_popup','Verification_resend_3rd_'+modid);
                        _gaq.push(['_trackEvent', 'Verification_popup', 'impression', 'Verification_resend_3rd_' + modid]);

                        }
                        else if(src1 == 'EMAILVER'){if(ipv_val == '5' || ipv_val == '4')
                           // yandex_impression('Verification_popup','Verification_EMAIL_resend_5th_'+modid); 
                           _gaq.push(['_trackEvent', 'Verification_popup', 'impression', 'Verification_EMAIL_resend_5th_' + modid]);

                          else 
                            // yandex_impression('Verification_popup','Verification_EMAIL_resend_3rd_'+modid);  
                            _gaq.push(['_trackEvent', 'Verification_popup', 'impression', 'Verification_EMAIL_resend_3rd_' + modid]);

                           }
                        else if(src1 == 'SCROLLVER'){
                            // yandex_impression('Verification_popup','Verification_scrollver_resend_'+modid); 
                            _gaq.push(['_trackEvent', 'Verification_popup', 'impression', 'Verification_scrollver_resend_' + modid]);

                            }
                        else if(src1 == 'BUYERMY'){
                            // yandex_impression('Verification_popup','Verification_popup_Buyermy_Verification_MYcontact_resend_'+modid);
                            _gaq.push(['_trackEvent', 'Verification_popup', 'impression', 'Verification_popup_Buyermy_Verification_MYcontact_resend_' + modid]);

                            }
                        else if(src1 == 'HDR'){// yandex_impression('IM_Global_Header','Verification_resend_'+modid);
                          _gaq.push(['_trackEvent', 'IM_Global_Header', 'impression', 'Verification_resend_' + modid]);

                         }
                        else if(src1 == 'HDR_STRP'){
                            // yandex_impression('IM_Header_Strip','Verification_resend_'+modid); 
                            _gaq.push(['_trackEvent', 'IM_Header_Strip', 'impression', 'Verification_resend_' + modid]);
                           }
                        else if(src1 == 'BUYERMY_NAV'){
                            // yandex_impression('Verification_popup','Verification_popup_Buyermy_Verification_MYNav_resend'+modid);
                            _gaq.push(['_trackEvent', 'Verification_popup', 'impression', 'Verification_popup_Buyermy_Verification_MYNav_resend' + modid]);
                            }
                        else{
                        if( displayVerificationOptions == 1 )
                            // yandex_impression(gaFormIdentify,'ExistingUser_ResendOTP_Clicked_'+(sendOTPCount+1));
                           gATracking("ExistingUser_ResendOTP_Clicked_"+(sendOTPCount+1));
                        else
                             // yandex_impression(gaFormIdentify,'ExistingUser_ResendOTP');
                           gATracking("ExistingUser_ResendOTP");
                        }
                        document.getElementById('resendMsg').style.display = 'none';
                }
                if ( displayVerificationOptions != 1 )
                    document.getElementById('load-send1').style.display = 'inline-block';
                $("#re_auth1").css("display","none");
                document.getElementById("verify_error1").innerHTML='';
                sendOTPCount++;
    }
        var mobContCodeFromCookie1 = imesh.phcc;
        var phCountryFromCookie1 = imesh.iso;
        var emFromCookie1 = imesh.em;
        
        if(iso_by_ip == 'IN' || phCountryFromCookie1 == 'IN')
         mobContCodeFromCookie1 = '91';  
        
        if(country_ip=='')
        {
          var ULTAparams={
              'modid':modid,
              'token':'imobile@15061981'
          };

          $.ajax({
              type: "POST",
              dataType: "json",
              data: ULTAparams,
              url: "https://geoip.imimg.com/api/location",
              crossDomain: true,
              success: function(data){
              
                if(data.Response.Code==200)
                {
                  iso_by_ip = data.Response.Data.geoip_countryiso;
                  country_ip = data.Response.Data.geoip_ipaddress;
                  country_nm = data.Response.Data.geoip_countryname;
                  if(iso_by_ip == 'UK'){iso_by_ip = 'GB';}
                }
                else
                {
                  country_ip='35.184.248.141';
                  iso_by_ip = "IN";
                  country_nm="India"
                }
         } });
        }
        if(country_ip == '')
                  country_ip='35.184.248.141';
        if (resend == 1 && src1 == 'EMAILVER')
        {
            params =
                  {  
                          'token':"imobile@15061981",
                          //'email': glusr_email,
                          'glusrid':glidFromCookie1,
                          'modid':modid,
                          'user_mobile_country_code': mobContCodeFromCookie1,
                          'flag':"OTPGen",
                          'user_ip':country_ip,
                          'user_country':phCountryFromCookie1,
                          'process':'OTP_EmailVerificationForm_Desktop',
                          'user_updatedusing' :'Verification Form Desktop',
                          'OTPResend':'1',
                          'attribute_id':att_id
                  };
                  send_otp_email(params,resend,emFromCookie1);
          }
          else if(resend == 1)
          {
            params =
            {  
                    'token':"imobile@15061981",
                    'mobile_num': mobNoFromCookie1,
                    'glusrid':glidFromCookie1,
                    'modid':modid,
                    'user_mobile_country_code': mobContCodeFromCookie1,
                    'flag':"OTPGen",
                    'user_ip':country_ip,
                    'user_country':phCountryFromCookie1,
                    'process':processName,
                    'user_updatedusing' :updateUsing,
                    'OTPResend':'1'
            };
          }
          else
          {
            params =
            {  
                    'token':"imobile@15061981",
                    'mobile_num': mobNoFromCookie1,
                    'glusrid':glidFromCookie1,
                    'modid':modid,
                    'user_mobile_country_code': mobContCodeFromCookie1,
                    'flag':"OTPGen",
                    'user_ip':country_ip,
                    'user_country':phCountryFromCookie1,
                    'process':processName,
                    'user_updatedusing' :updateUsing
            };
          }
          if (src1 != 'EMAILVER')
          {
            $.ajax({
                  type: "POST",
                  url: "//"+UrlPri2+"login.indiamart.com/users/OTPVerification/",
                  data: params,
                  dataType:"json",
                  crossDomain: true,
                  success:function(response){
                          $('#check_verify1').attr('disabled', false); 
                          $('#check_verify1').css("background-color", "#00a699");
                          var stat = response.Response.Status;
                          var message = response.Response.Message;
                          var serviceCode = response.Response.Code;
                          var vendorErrorResponse = response.Response.VENDOR_ERROR_RESPONSE;
                          if(message == 'We have already sent an OTP on your mobile' && stat == 'Success')
                          {
                            if(resend == '1')
                            $('.otp-message').html('We have already sent an OTP on <b>+91-'+mobile_num+'</b>');
                            if(dispflag == 1 && src1 == 'IDEN')
                              $('.otp-messages .italic').html('We have sent an One Time Password on your mobile <b>+91-'+mobile_num+'</b>');
                          }
                          if(resend == '1')
                          { 
                            $('.otp-message').html('We have sent an One Time Password on your mobile <b>+91-'+mobile_num+'</b>');
                            if ( displayVerificationOptions != 1 )   
                                document.getElementById('load-send1').style.display = 'none';
                            document.getElementById('resendMsg').style.display = 'block';
                            $("#verify_error1").hide();
                            $("#re_auth1").css("display","inline-block");
                            if (dispflag == 1 && src1 == 'IDEN') 
                            {
                              document.getElementById('resendMsg').innerHTML = 'OTP SMS has been sent again.';
                            }
                            $("#main_div").css("width","93%");
                          }
                          if ( displayVerificationOptions == 1 && resend == '1')
                          {
                            $("#mwrp").css("display","none");
                            if ( !(document.getElementById("resendMsg") === null) )
                            {
                              document.getElementById("resendMsg").innerHTML = "OTP SMS sent";
                              $("#resendMsg").css("display","block");
                            }
                          }
                          if (serviceCode == '204' && stat == 'Failure' && vendorErrorResponse != '')
                          {
                            document.getElementById("verify_error1").innerHTML=vendorErrorResponse;
                            $("#verify_error1").show();
                            $("#resendMsg").hide();
                            $("#tmrBL").css("visibility","hidden");
                            $("#mwrp").css("display","block");
                          }
                  }
              });
          }
        //}
        else
        {
          var params;
          if(resend == 2)
          {
            if(src1 == 'EMAILVER')
            {
              params =
                    {  
                            'token':"imobile@15061981",
                            //'email': glusr_email,
                            'glusrid':glidFromCookie1,
                            'modid':modid,
                            'user_mobile_country_code': mobContCodeFromCookie1,
                            'flag':"OTPGen",
                            'user_ip':country_ip,
                            'user_country':phCountryFromCookie1,
                            'process':'OTP_EmailVerificationForm_Desktop',
                            'user_updatedusing' :'Verification Form Desktop',
                            'OTPResend':'1',
                            'attribute_id':att_id
                    };
                    send_otp_email(params,resend,emFromCookie1);
            }
            else
            {
              params =
              {  
                      'token':"imobile@15061981",
                      'mobile_num': mobNoFromCookie1,
                      'glusrid':glidFromCookie1,
                      'modid':modid,
                      'user_mobile_country_code': mobContCodeFromCookie1,
                      'flag':"OTPGen",
                      'user_ip':country_ip,
                      'user_country':phCountryFromCookie1,
                      'process':processName,
                      'user_updatedusing' :updateUsing,
                      'OTPResend':'1'
              };
            }
          } 
          else
          {
            params =
            {  
                    'token':"imobile@15061981",
                    'mobile_num': mobNoFromCookie1,
                    'glusrid':glidFromCookie1,
                    'modid':modid,
                    'user_mobile_country_code': mobContCodeFromCookie1,
                    'flag':"OTPGen",
                    'user_ip':country_ip,
                    'user_country':phCountryFromCookie1,
                    'process':processName,
                    'user_updatedusing' :updateUsing
            };
          }
          if(src1 != 'EMAILVER')
          {
            $.ajax({
                    type: "POST",
                    url: "//"+UrlPri2+"login.indiamart.com/users/OTPVerification/",
                    data: params,
                    dataType:"json",
                    crossDomain: true,
                    success:function(response){
                            $('#check_verify1').attr('disabled', false); 
                            $('#check_verify1').css("background-color", "#00a699");
                            var stat = response.Response.Status;
                            var message = response.Response.Message;
                            var serviceCode = response.Response.Code;
                            var vendorErrorResponse = response.Response.VENDOR_ERROR_RESPONSE;
                            if(message == 'We have already sent an OTP on your mobile' && stat == 'Success')
                            {
                              $('.otp-message').html('We have already sent an OTP on <b>+91-'+mobile_num+'</b>');
                              if(dispflag == 1 && src1 == 'IDEN')
                                $('.otp-messages .italic').html('We have sent an One Time Password on your mobile <b>+91-'+mobile_num+'</b>');
                            }
                            if(resend == '1')
                            { 
                              $('.otp-message').html('We have sent an One Time Password on your mobile <b>+91-'+mobile_num+'</b>');
                              if ( displayVerificationOptions != 1 )   
                                  document.getElementById('load-send1').style.display = 'none';
                              document.getElementById('resendMsg').style.display = 'block';
                              $("#verify_error1").hide();
                              $("#re_auth1").css("display","inline-block");
                              if (dispflag == 1 && src1 == 'IDEN') 
                              {
                                document.getElementById('resendMsg').innerHTML = 'OTP SMS has been sent again.';
                              }
                              $("#main_div").css("width","93%");
                            }
                            if ( displayVerificationOptions == 1 && resend == '1')
                            {
                              $("#mwrp").css("display","none");
                              if ( !(document.getElementById("resendMsg") === null) ){
                                  document.getElementById("resendMsg").innerHTML = "OTP SMS sent";
                                  $("#resendMsg").css("display","block");
                              }
                            }
                            if (serviceCode == '204' && stat == 'Failure' && vendorErrorResponse != '')
                            {
                              document.getElementById("verify_error1").innerHTML=vendorErrorResponse;
                              $("#verify_error1").show();
                              $("#resendMsg").hide();
                              $("#tmrBL").css("visibility","hidden");
                              $("#mwrp").css("display","block");
                            }
                    }
                });
          } 
        }
}

function send_otp_email(params,resend,emFromCookie1)
{
  $.ajax({
    type: "POST",
    url: "//"+UrlPri2+"login.indiamart.com/users/OTPVerification/",
    data: params,
    dataType:"json",
    crossDomain: true,
    success:function(response){
            $('#check_verify1').attr('disabled', false); 
            $('#check_verify1').css("background-color", "#00a699");
            var stat = response.Response.Status;
            var message = response.Response.Message;
            // console.log(response);
            if (stat == 'Success' && resend == '1')
            {
              $('.otp-message').html('Please check your email <b>'+emFromCookie1+'</b> for a 4 digit OTP');
              document.getElementById('load-send1').style.display = 'none';
              document.getElementById('resendMsg').style.display = 'block';
              $("#resendMsg").show();
              $("#re_auth1").css("display","block");
            }
            if (stat == 'Success' && resend == '2')
            {
              $("#re_auth1").css("display","block");
            }

  }});
}

function movetoNext1(current, nextFieldID){
  if (current.value.length >= current.maxLength) {document.getElementById(nextFieldID).focus();}
}

function movetoNextNewVerPOP(previousFieldID, current, nextFieldID, event){
    if (current.value.length >= current.maxLength && nextFieldID != '') {document.getElementById(nextFieldID).focus();} 
    else {if (event.keyCode == 8 && previousFieldID != ''){document.getElementById(previousFieldID).focus(); } else {current.focus();} } }

var scrollverclosed;
var xread = readCookie('xnHist');
var ipv_val = (xread !='') ? getparamVal(xread, "ipv") : '';
var fpv_val = (xread !='') ? getparamVal(xread, "fpv") : '';
var displayVerificationOptions = 0;
var missCallHits;
var truecallerHits;
var waitMessage;
var dispflag = 0;

function showmobverifyform(glid,modid,mobile_num,mob_cont_code,att_id,phCountry,cDflag,src1,miss_num)
{  
    var skipDisplay = 'style="display: none;"';
    var crossDisplay = 'style="display: block;"';
    var MsgDisplay = 'style="display: block;"';
    var sfFlag = $('#srch1').val();
    var redurl = '';
    var xread = readCookie('xnHist');
    var ipv_val = (xread !='') ? getparamVal(xread, "ipv") : '';
    var fpv_val = (xread !='') ? getparamVal(xread, "fpv") : '';
    if(src1 != 'HDR_STRP'){
    var emsg = '<p class = "cm-msg" style = "text-align: center;color:#2e3192;font-size:22px;font-family:Open Sans,arial;margin-top:10px;margin-bottom:10px;">Get Connected to Verified Sellers</p>';}
    else
    {
      emsg = '';
    }
        
        step = 2;
        if(src1 == 'VER' || src1 == 'BUYERMY' || src1 == 'BUYERMY_NAV' || src1 == 'HDR' || src1 == 'SELLER_DASHBOARD' || src1 == 'HDR_STRP'){
              MsgDisplay = 'style="display: none;"';
              var box =  '<style>.otp-mb10{margin-bottom:10px;margin-left:61px}.lkotp{color:#2e3192;cursor:pointer;text-decoration:none;margin-left:61px;}.step-1 h2{font-size: 24px!important}.otp-pl18{padding-left:82px!important;padding-top:12px;height: 41px}.otp-message{color:#2a2a2a;margin:20px 22px}.wrper-txt{padding:3px 18px 36px;color:#2a2a2a;text-align:left;font-family:Open Sans,arial}.resendMsg{padding-left:59px}</style>'+emsg+'<div class=" c31 ds_in1 wrper-txt" style="display:inline-block;width:93%;" id="main_div"><p class="otp-message" style="text-align: center;line-height:25px;width:350px;margin:0 auto;">Enter the 4 digit One Time Password (OTP) sent<br>to your Mobile Number <b>+91-'+mobile_num+'</b> via SMS </p><div class="vfn-code1 fs141 c31"><p class="otp-mb10" id = "testing" style="position:relative;" ><i class="mbl-otp"></i><input type="text" maxlength="4" class="nptotp" id="authKey" onkeypress="return isNumberKey1(event);" autocomplete="off"><input type="button"  id="check_verify1" class="vrfy-otp" alt="" value="Submit" onclick="verify_mobile(\''+glid+'\',\''+modid+'\',\''+mobile_num+'\',\''+mob_cont_code+'\',\''+att_id+'\',\''+phCountry+'\',\''+cDflag+'\',\''+sfFlag+'\',\''+src1+'\');"><img id="loadingImage" src="//utils.imimg.com/header/gifs/indicator.gif" width="16" height="16" style="display: none; position: absolute; top: 15px; left: 200px;" margin-left="10"><input type="hidden" value="2" id="step1" name="step1"><span class="verify_doneNew" id="after_verified" style="display:none">Verification done</span><span class="err-otp2" id="verify_error1"></span></p><p class="f11_s"><span id="resendMsg" class="resendMsg" style="display: none;">The SMS has been sent again.</span><span id="resendA">Did not recieve OTP? <span onclick="send_otp(\''+glid+'\',\''+modid+'\',\''+mobile_num+'\',\''+mob_cont_code+'\',\''+att_id+'\',\''+phCountry+'\',\'1\',\''+cDflag+'\',\''+src1+'\');" class="lkotp" id="re_auth1">Resend</span></span><span id="load-send1" style="display: none;padding-left:60px;">Please wait &nbsp;&nbsp; <img width="10" height="10" border="0" alt="" src="//utils.imimg.com/header/gifs/indicator.gif" style="position:relative;top:-2px"></span></p><div class="ic-btm" style="height:0px;"><div class="im_logoN" style="right:35px;"></div></div></div></div>';
        }
        else if(src1 == 'IDEN'){
              dispflag = 1;
              var box = '<div class=" c31 ds_in1 wrper-txt" style="display:inline-block;width:94%;margin-left:auto!important;margin-top:auto!important;" id="main_div"><p class="otp-messages Head"><b>Please enter 4 digit One Time Password</b> </p><p class="otp-messages italic">Sent via SMS on your mobile <b>+91-'+mobile_num+'</b></p><div class="vfn-code1 fs141 c31"><div class="otp-mb10" id="testing" style="position:relative;text-align: center;"><div class="otp-con" style="padding-left: 0px;"><input class="mobbox1 f1 border_black1" type="text" id="first" autocomplete="off" onkeypress="return isNumberKey1(event)" onkeyup="movetoNextNewVerPOP(\'\',this, \'second\',event)" maxlength="1"><input class="mobbox1 f1 border_black1" type="text" id="second" autocomplete="off" onkeypress="return isNumberKey1(event)" onkeyup="movetoNextNewVerPOP(\'first\',this, \'third\',event)" maxlength="1"><input class="mobbox1 f1 border_black1" type="text" id="third" autocomplete="off" onkeypress="return isNumberKey1(event)" onkeyup="movetoNextNewVerPOP(\'second\',this, \'fourth\',event)" maxlength="1"><input class="mobbox1 f1 border_black1" type="text" id="fourth" maxlength="1" autocomplete="off" onkeypress="return isNumberKey1(event)" onkeyup="movetoNextNewVerPOP(\'third\',this,\'\',event)" style="border: 0;" autocomplete="off"><input type="hidden" id="authKey" value=""></div><span class="err-otp2" id="verify_error1" style="text-align:center;"></span><input type="button" id="check_verify1" class="vrfy-otp" alt="" value="Submit" onclick="verify_mobile(\''+glid+'\',\''+modid+'\',\''+mobile_num+'\',\''+mob_cont_code+'\',\''+att_id+'\',\''+phCountry+'\',\''+cDflag+'\',\''+sfFlag+'\',\''+src1+'\');" style="background-color: rgb(0, 166, 153);"><img id="loadingImage" src="//utils.imimg.com/header/gifs/indicator.gif" width="16" height="16" style="display: none; position: absolute; bottom: 11px; right: 223px;"><input type="hidden" value="2" id="step1" name="step1"><span class="verify_doneNew" id="after_verified" style="display:none; ">Verification done</span></div><p class="f11_s" style="text-align: center;"><span id="resendMsg" class="resendMsg" style="display: none;">OTP SMS has been sent again.</span><span id="resendA"> Did not receive OTP? <span onclick="send_otp(\''+glid+'\',\''+modid+'\',\''+mobile_num+'\',\''+mob_cont_code+'\',\''+att_id+'\',\''+phCountry+'\',\'1\',\''+cDflag+'\',\''+src1+'\');" class="lkotp" id="re_auth1">Resend</span></span><span id="load-send1" style="display: none;">Please wait &nbsp;&nbsp; <img width="10" height="10" border="0" alt="" src="//utils.imimg.com/header/gifs/indicator.gif" style="position:relative;top:-2px"></span></p><p class="c3 skip" style="display: none;"></p></div>';
              $('#first').focus();
        }        
        else if(src1 == 'EMAILVER'){
              MsgDisplay = 'style="display: none;"';
              var box =  '<style>.otp-mb10{margin-bottom:10px;margin-left:61px}.lkotp{color:#2e3192;cursor:pointer;text-decoration:none;margin-left:61px;}.step-1 h2{font-size: 24px!important}.otp-pl18{padding-left:82px!important;padding-top:12px;height: 41px}.otp-message{color:#2a2a2a;margin:20px 22px}.wrper-txt{padding:3px 18px 36px;color:#2a2a2a;text-align:left;font-family:Open Sans,arial}.resendMsg{padding-left:59px}</style>'+emsg+'<div class=" c31 ds_in1 wrper-txt" style="display:inline-block;width:100%;padding: 0px 0px 36px;" id="main_div"><p class="otp-message" style="text-align: center;">Check your email <b>'+mobile_num+'</b> for a 4 digit OTP</p><div class="vfn-code1 fs141 c31"><div class="otp-mb10" id = "testing" style="position:relative;display:inline-block;" ><div class="otp-con" style="padding-left: 0px;"><img src="//'+UrlPri1+'utils.imimg.com/header/gifs/emailSymbol.png" alt="Email OTP" class="eml-otp" style="padding-top: 3px;float:left;"><input class="mobbox1 f1 " type="text" id="first" autocomplete="off" onkeypress="return isNumberKey1(event)" onkeyup="movetoNextNewVerPOP(\'\',this, \'second\',event)" maxlength="1"><input class="mobbox1 f1 " type="text" id="second" autocomplete="off" onkeypress="return isNumberKey1(event)" onkeyup="movetoNextNewVerPOP(\'first\',this, \'third\',event)" maxlength="1"><input class="mobbox1 f1 " type="text" id="third" autocomplete="off" onkeypress="return isNumberKey1(event)" onkeyup="movetoNextNewVerPOP(\'second\',this, \'fourth\',event)" maxlength="1"><input class="mobbox1 f1 " type="text" id="fourth" maxlength="1" autocomplete="off" onkeypress="return isNumberKey1(event)" onkeyup="movetoNextNewVerPOP(\'third\',this,\'\',event)" style="" autocomplete="off"><input type="hidden" id="authKey" value=""></div></div><input type="button"  id="check_verify1" class="vrfy-otp" alt="" value="Submit" onclick="verify_email(\''+glid+'\',\''+modid+'\',\''+mobile_num+'\',\''+mob_cont_code+'\',\''+att_id+'\',\''+phCountry+'\',\''+cDflag+'\',\''+sfFlag+'\',\''+src1+'\');" style="margin-top:6px;"><img id="loadingImage" src="//utils.imimg.com/header/gifs/indicator.gif" width="16" height="16" style="display: none; position: absolute; top: 15px; left: 220px;" margin-left="10"><input type="hidden" value="2" id="step1" name="step1"><span class="verify_doneNew" id="after_verified" style="display:none;margin-left:160px;margin-top:0px;">Verification done</span><span class="err-otp2" id="verify_error1" style="margin-left:160px;"></span></p><p class="f11_s"><span id="resendMsg" class="resendMsg" style="display: none;">The OTP has been sent again.</span><span onclick="send_otp(\''+glid+'\',\''+modid+'\',\''+mobile_num+'\',\''+mob_cont_code+'\',\''+att_id+'\',\''+phCountry+'\',\'1\',\''+cDflag+'\',\''+src1+'\');" class="lkotp" id="re_auth1" style="width:100px;">Resend OTP</span><span id="load-send1" style="display: none;padding-left:60px;">Please wait &nbsp;&nbsp; <img width="10" height="10" border="0" alt="" src="//utils.imimg.com/header/gifs/indicator.gif" style="position:relative;top:-2px"></span></p><div class="ic-btm" style="height:0px;"><div class="im_logoN" style="right:18px;"></div></div></div></div>';
              $('#first').focus(); 

              // var box =  '<style>.otp-mb10{margin-bottom:10px;margin-left:61px}.lkotp{color:#2e3192;cursor:pointer;text-decoration:none;margin-left:61px;}.step-1 h2{font-size: 24px!important}.otp-pl18{padding-left:82px!important;padding-top:12px;height: 41px}.otp-message{color:#2a2a2a;margin:20px 22px}.wrper-txt{padding:3px 18px 36px;color:#2a2a2a;text-align:left;font-family:Open Sans,arial}.resendMsg{padding-left:59px}</style>'+emsg+'<div class=" c31 ds_in1 wrper-txt" style="display:inline-block;width:100%;padding: 0px 0px 36px;" id="main_div"><p class="otp-message" style="text-align: center;">Check your email <b>'+mobile_num+'</b> for a 4 digit OTP</p><div class="vfn-code1 fs141 c31"><p class="otp-mb10" id = "testing" style="position:relative;" ><img src="//'+UrlPri1+'utils.imimg.com/header/gifs/emailSymbol.png" alt="Email OTP" class="eml-otp" style="padding-top: 3px;"><input type="text" maxlength="4" class="nptotp" id="authKey" onkeypress="return isNumberKey1(event);"><input type="button"  id="check_verify1" class="vrfy-otp" alt="" value="Verify" onclick="verify_email(\''+glid+'\',\''+modid+'\',\''+mobile_num+'\',\''+mob_cont_code+'\',\''+att_id+'\',\''+phCountry+'\',\''+cDflag+'\',\''+sfFlag+'\',\''+src1+'\');"><img id="loadingImage" src="//utils.imimg.com/header/gifs/indicator.gif" width="16" height="16" style="display: none; position: absolute; top: 15px; left: 220px;" margin-left="10"><input type="hidden" value="2" id="step1" name="step1"><span class="verify_doneNew" id="after_verified" style="display:none">Verification done</span><span class="err-otp2" id="verify_error1"></span></p><p class="f11_s"><span id="resendMsg" class="resendMsg" style="display: none;">The OTP has been sent again.</span><span onclick="send_otp(\''+glid+'\',\''+modid+'\',\''+mobile_num+'\',\''+mob_cont_code+'\',\''+att_id+'\',\''+phCountry+'\',\'1\',\''+cDflag+'\',\''+src1+'\');" class="lkotp" id="re_auth1">Resend OTP</span><span id="load-send1" style="display: none;padding-left:60px;">Please wait &nbsp;&nbsp; <img width="10" height="10" border="0" alt="" src="//utils.imimg.com/header/gifs/indicator.gif" style="position:relative;top:-2px"></span></p><div class="ic-btm" style="height:0px;"><div class="im_logoN" style="right:18px;"></div></div></div></div>';
        } 
        else if(src1 == 'SCROLLVER'){
            sessionStorage.setItem('clickToVerif','1');
            // console.log("session clickToVerif"+sessionStorage.getItem('clickToVerif'));
            MsgDisplay = 'style="display: none;"';
            var box =  '<style>.otp-mb10{margin-bottom:10px;margin-left:61px}.lkotp{color:#2e3192;cursor:pointer;text-decoration:none;margin-left:61px;}.step-1 h2{font-size: 24px!important}.otp-pl18{padding-left:82px!important;padding-top:12px;height: 41px}.otp-message{color:#2a2a2a;margin:20px 22px}.wrper-txt{padding:3px 18px 36px;color:#2a2a2a;text-align:left;font-family:Open Sans,arial}.resendMsg{padding-left:59px}</style>'+emsg+'<div class=" c31 ds_in1 wrper-txt" style="display:inline-block;width:93%;" id="main_div"><p class="otp-message">Enter the 4 digit One Time Password (OTP) sent<br>to your Mobile Number <b>+91-'+mobile_num+'</b> via SMS </p><div class="vfn-code1 fs141 c31"><p class="otp-mb10" id = "testing" style="position:relative;" ><i class="mbl-otp"></i><input type="text" maxlength="4" onkeypress="return isNumberKey1(event);" class="nptotp" id="authKey"><input type="button"  id="check_verify1" class="vrfy-otp" alt="" value="Submit" onclick="verify_mobile(\''+glid+'\',\''+modid+'\',\''+mobile_num+'\',\''+mob_cont_code+'\',\''+att_id+'\',\''+phCountry+'\',\''+cDflag+'\',\''+sfFlag+'\',\''+src1+'\');"><img id="loadingImage" src="//utils.imimg.com/header/gifs/indicator.gif" width="16" height="16" style="display: none; position: absolute; top: 15px; left: 200px;" margin-left="10"><input type="hidden" value="2" id="step1" name="step1"><span class="verify_doneNew" id="after_verified" style="display:none">Verification done</span><span class="err-otp2" id="verify_error1"></span></p><p class="f11_s"><span id="resendMsg" class="resendMsg" style="display: none;">The SMS has been sent again.</span><span id="resendA">Did not recieve OTP? <span onclick="send_otp(\''+glid+'\',\''+modid+'\',\''+mobile_num+'\',\''+mob_cont_code+'\',\''+att_id+'\',\''+phCountry+'\',\'1\',\''+cDflag+'\',\''+src1+'\');" class="lkotp" id="re_auth1">Resend</span></span><span id="load-send1" style="display: none;padding-left:60px;">Please wait &nbsp;&nbsp; <img width="10" height="10" border="0" alt="" src="//utils.imimg.com/header/gifs/indicator.gif" style="position:relative;top:-2px"></span></p><div class="ic-btm" style="height:0px;"><div class="im_logoN" style="right:35px;"></div></div></div></div>';
        }
        else if(src1 == 'SCROLLVER1'){
              MsgDisplay = 'style="display: none;"';
              sessionStorage.setItem('scrolldisplay','1');
              var box =  '<style>.otp-mb10{margin-bottom:10px;margin-left:61px}.lkotp{color:#2e3192;cursor:pointer;text-decoration:none;margin-left:61px;}.step-1 h2{font-size: 24px!important}.otp-pl18{padding-left:82px!important;padding-top:12px;height: 41px}.wrper-txt{padding:3px 18px 36px;color:#2a2a2a;text-align:left;font-family:Open Sans,arial}</style>'+emsg+'<div class=" c31 ds_in1 wrper-txt" style="display:inline-block;width:97%;" id="main_div"><div class="vfn-code1 fs141 c31"><p class="otp-mb10" id = "testing" style="position:relative;" ><input type="button"  id="check_verify1" class="vrfy-otp" alt="" value="Click here to Verify" onclick="send_otp(\''+glid+'\',\''+modid+'\',\''+mobile_num+'\',\''+mob_cont_code+'\',\''+att_id+'\',\''+phCountry+'\',\'2\',\''+cDflag+'\',\'SCROLLVER\');" style="width:248px;margin-left:36px;" ></p><div class="ic-btm" style="height:0px;"><div class="im_logoN" style="right:35px;"></div></div></div></div>';
        }
        else{
              var box = '<div class=" c31 ds_in1 wrper-txt" style="display:inline-block;width:93%;margin-left:auto!important;margin-top:auto!important;padding-top:15px;" id="main_div"><p class="otp-message" id="otp-message">4 digit One Time Password SMS sent on your mobile <b>+91-'+mobile_num+'</b></p><div class="vfn-code1 fs141 c31"><p class="otp-mb10 tc" style="height:60px;position: relative;margin-bottom:0px;" id = "testing"><span class="icLg"><i class="mbl-otp"></i></span><input type="text" maxlength="4" class="nptotp vttxt" onkeypress="return isNumberKey1(event);" autocomplete="off" id="authKey"><input type="button"  id="check_verify1" class="vrfy-otp" style="padding:10px 0 10px 0" alt="" value="Submit" onclick="verify_mobile(\''+glid+'\',\''+modid+'\',\''+mobile_num+'\',\''+mob_cont_code+'\',\''+att_id+'\',\''+phCountry+'\',\''+cDflag+'\',\''+sfFlag+'\',\''+src1+'\');"><span class="tmrBL" id="tmrBL"><b>00:10</b></span><img id="loadingImage" src="//utils.imimg.com/header/gifs/indicator.gif" width="16" height="16" style="display: none;position: absolute;top: 18px;right: 102px;"><input type="hidden" value="2" id="step1" name="step1"><span class="verify_doneNew" id="after_verified" style="display:none">Verification done</span><span class="err-otp2" style="text-align:center;" id="verify_error1"></span></p><p class="f11_s tc"><span id="resendMsg" class="resendMsg" style="display: none;">OTP SMS sent</span></p><div class="mwrp" id="mwrp" style="margin-bottom: -15px;"><p class="mstxt"><span class="smLg" onclick="send_otp(\''+glid+'\',\''+modid+'\',\''+mobile_num+'\',\''+mob_cont_code+'\',\''+att_id+'\',\''+phCountry+'\',\'1\',\''+cDflag+'\',\''+src1+'\');" class="lkotp" id="re_auth1">Resend SMS</span><span class="smLnum" style="width:260px;line-height:32px;margin-left:12px;">Give a missed call on  <span class="msnbr">'+miss_num+'</span></span></p><p class="mnxt" id="mnxt1" style="color:#2e3192;"></p></div><p class="c3 skip" '+skipDisplay+'></p></div></div>';
              displayVerificationOptions = 1; 
        }

        if(cDflag == 3 || cDflag == 4){
                if(src1 == 'IDEN'){
                    // yandex_impression('Identification_login_popup','Verification_display_'+modid);
                   _gaq.push(['_trackEvent', 'Identification_login_popup','Verification_display',modid, 0, true]);
                }
                else if(src1 == 'VER' && (redirectURL.indexOf("utm_campaign=IN-newreg-SEARCH") != -1 && modid=='MY')){
                    // yandex_impression('Verification_popup','Verification_display_buyermy_'+modid);
                   _gaq.push(['_trackEvent', 'Verification_popup','Verification_display_buyermy',modid, 0, true]);
                }
                else if(src1 == 'VER'){if(ipv_val == '4' || ipv_val == '5')
                  // yandex_impression('Verification_popup','Verification_display_5th_'+modid);
                  _gaq.push(['_trackEvent', 'Verification_popup', 'Verification_display_5th_' + modid]);

                    else
                        // yandex_impression('Verification_popup','Verification_display_3rd_'+modid);}
                        _gaq.push(['_trackEvent', 'Verification_popup','Verification_display_3rd',modid, 0, true]);}
                else if(src1 == 'EMAILVER'){if(fpv_val == '5' || fpv_val == '4')
                    // yandex_impression('Verification_popup','Verification_EMAIL_display_5th_'+modid);
                    _gaq.push(['_trackEvent', 'Verification_popup', 'Verification_EMAIL_display_5th_' + modid]);

                    else
                       // yandex_impression('Verification_popup','Verification_EMAIL_display_3rd_'+modid);}
                       _gaq.push(['_trackEvent', 'Verification_popup', 'Verification_EMAIL_display_3rd_' + modid]);}

                else if(src1 == 'SCROLLVER1'){
                     // yandex_impression('Verification_popup','Verification_scroll_display_'+modid);}
                   _gaq.push(['_trackEvent', 'Verification_popup','Verification_scroll_display',modid, 0, true]);}
                else if(src1 == 'SCROLLVER'){
                  
                    // yandex_impression('Verification_popup','Verification_scrollver_display_'+modid);}
                  _gaq.push(['_trackEvent', 'Verification_popup','Verification_scrollver_display',modid, 0, true]);}
                else if(src1 == 'BUYERMY'){
                    // yandex_impression('Verification_popup','Verification_popup_Buyermy_VVerification_MYcontact_display_'+modid);}
                    _gaq.push(['_trackEvent', 'Verification_popup_Buyermy','Verification_MYcontact_display',modid, 0, true]);}
                else if(src1 == 'BUYERMY_NAV'){
                     // yandex_impression('Verification_popup','Verification_popup_Buyermy_Verification_MYNav_display_'+modid);}
                    _gaq.push(['_trackEvent', 'Verification_popup_Buyermy','Verification_MYNav_display',modid, 0, true]);}
                else if(src1 == 'HDR'){
                    // yandex_impression('IM_Global_Header','Verification_display_'+modid);}
                  _gaq.push(['_trackEvent', 'IM Global Header','Verification_display',modid, 0, true]);}
                else if(src1 == 'HDR_STRP'){
                     // yandex_impression('IM_Header_Strip','Verification_display_'+modid);}
                   _gaq.push(['_trackEvent', 'IM Header Strip','Verification_display',modid, 0, true]);}
                else
                {   // yandex_impression(gaFormIdentify,'ExistingUser_VerificationForm');
                    gATracking("ExistingUser_VerificationForm");
                redurl = document.URL;} 
        } else{
            if(src1 == 'IDEN'){
                // yandex_impression('Identification_login_popup','Verification_display_'+modid);}
               _gaq.push(['_trackEvent', 'Identification_login_popup','Verification_display',modid, 0, true]);}
                else
            {   // yandex_impression(gaFormIdentify,'NewUser_VerificationForm');
                gATracking("NewUser_VerificationForm");
                redurl = '//'+UrlPri+'my.indiamart.com';
            }
        }
        var verifyBoxHTML;
    redurl = redurl.replace(/[#]+$/,"");

    if (dispflag == 1 && src1 == 'IDEN') {
      verifyBoxHTML = '<!-- contact us form --><div class="overlay_s" id="overlay_s" style="display: none;"></div><div id="form_otp1" class="one_s1 new_vrf"><div class="step-1" id="bs_hdng1"><span class="close_imlogin" id="close_s" onclick="closeMe1(\''+src1+'\');">X</span><h2 class="f1_s otp-pl18">Verify Your Mobile Number<span>for a better and secure experience</span></h2><span class="mob_icon_login"></span></div><div>'+box+'</div></div><!-- Popup div ends here -->';
    }
    else
    {
      if (src1 == 'VER'  && redirectURL.indexOf("utm_campaign=IN-newreg-SEARCH") != -1 && modid=='MY')
      {
        verifyBoxHTML = '<!-- contact us form --><div class="overlay_s" id="overlay_s" style="display: none;"></div><div id="form_otp1" class="one_s1"><div class="step-1" id="bs_hdng1" ><a href="javascript:" onclick="closeMe1(\''+src1+'\');"><img src="//'+UrlPri+'utils.imimg.com/header/gifs/3.png" id="close_s"/></a><h2 class="f1_s otp-pl18">Verify Your Mobile Number</h2></div><div>'+box+'</div></div><!-- Popup div ends here -->';
      }
      else if ((src1 == 'VER'  && ipv_val == '4') || (src1 == 'VER'  && ipv_val == '5'))
      {
        verifyBoxHTML = '<!-- contact us form --><div class="overlay_s" id="overlay_s" style="display: none;"></div><div id="form_otp1" class="one_s1"><div class="step-1" id="bs_hdng1" ><a href="javascript:" onclick="closeMe1(\''+src1+'\');" style="display:none;"><img src="//'+UrlPri+'utils.imimg.com/header/gifs/3.png" id="close_s" style="display:none;"/></a><h2 class="f1_s otp-pl18">Verify Your Mobile Number</h2></div><div>'+box+'</div></div><!-- Popup div ends here -->';
      }
      else if (src1 == 'EMAILVER')
      {
        // if(modid=="DIR" || modid=="PRODDTL"){
            var iss = readCookie('im_iss');
            if(typeof iss != 'undefined' && iss !=''){
              if(fpv==5) {
                 verifyBoxHTML = '<!-- contact us form --><div class="overlay_s" id="overlay_s" style="display: none;"></div><div id="form_otp1" class="one_s1"><div class="step-1" id="bs_hdng1" ><a href="javascript:" onclick="closeMe1(\''+src1+'\');" style="display:none;"><img src="//'+UrlPri+'utils.imimg.com/header/gifs/3.png" id="close_s" style="display:none;"/></a><h2 class="f1_s" style="padding-top:12px;height: 30px;padding-left:117px;">Verify Your Email ID</h2></div><div>'+box+'</div></div><!-- Popup div ends here -->';
              }
              else if(fpv==3)
              {
                verifyBoxHTML = '<!-- contact us form --><div class="overlay_s" id="overlay_s" style="display: none;"></div><div id="form_otp1" class="one_s1"><div class="step-1" id="bs_hdng1" ><a href="javascript:" onclick="closeMe1(\''+src1+'\');" style="display:block;"><img src="//'+UrlPri+'utils.imimg.com/header/gifs/3.png" id="close_s"/></a><h2 class="f1_s" style="padding-top:12px;height: 30px;padding-left:117px;">Verify Your Email ID</h2></div><div>'+box+'</div></div><!-- Popup div ends here -->';
              }
            }
            else if(typeof iss == 'undefined' || iss ==''){
              if(ipv==5) {
                  verifyBoxHTML = '<!-- contact us form --><div class="overlay_s" id="overlay_s" style="display: none;"></div><div id="form_otp1" class="one_s1"><div class="step-1" id="bs_hdng1" ><a href="javascript:" onclick="closeMe1(\''+src1+'\');" style="display:none;"><img src="//'+UrlPri+'utils.imimg.com/header/gifs/3.png" id="close_s"/></a><h2 class="f1_s" style="padding-top:12px;height: 30px;padding-left:117px;">Verify Your Email ID</h2></div><div>'+box+'</div></div><!-- Popup div ends here -->';
              }
              else if(ipv==3)
              {
                verifyBoxHTML = '<!-- contact us form --><div class="overlay_s" id="overlay_s" style="display: none;"></div><div id="form_otp1" class="one_s1"><div class="step-1" id="bs_hdng1" ><a href="javascript:" onclick="closeMe1(\''+src1+'\');" style="display:block;"><img src="//'+UrlPri+'utils.imimg.com/header/gifs/3.png" id="close_s"/></a><h2 class="f1_s" style="padding-top:12px;height: 30px;padding-left:117px;">Verify Your Email ID</h2></div><div>'+box+'</div></div><!-- Popup div ends here -->';
              }
            }
          // }
        /*if (fpv_val == '5' || fpv_val == '4')
        {
          verifyBoxHTML = '<!-- contact us form --><div class="overlay_s" id="overlay_s" style="display: none;"></div><div id="form_otp1" class="one_s1"><div class="step-1" id="bs_hdng1" ><a href="javascript:" onclick="closeMe1(\''+src1+'\');" style="display:none;"><img src="//'+UrlPri+'utils.imimg.com/header/gifs/3.png" id="close_s" style="display:none;"/></a><h2 class="f1_s" style="padding-top:12px;height: 30px;padding-left:117px;">Verify Your Email ID</h2></div><div>'+box+'</div></div><!-- Popup div ends here -->';
        }*/
        /*else
        {
          verifyBoxHTML = '<!-- contact us form --><div class="overlay_s" id="overlay_s" style="display: none;"></div><div id="form_otp1" class="one_s1"><div class="step-1" id="bs_hdng1" ><a href="javascript:" onclick="closeMe1(\''+src1+'\');" style="display:block;"><img src="//'+UrlPri+'utils.imimg.com/header/gifs/3.png" id="close_s"/></a><h2 class="f1_s" style="padding-top:12px;height: 30px;padding-left:117px;">Verify Your Email ID</h2></div><div>'+box+'</div></div><!-- Popup div ends here -->';
        }*/
      }
      else
      {
        verifyBoxHTML = '<!-- contact us form --><div class="overlay_s" id="overlay_s" style="display: none;"></div><div id="form_otp1" class="one_s1"><div class="step-1" id="bs_hdng1"><a href="javascript:" onclick="closeMe1(\''+src1+'\');"'+crossDisplay+'><img src="//'+UrlPri+'utils.imimg.com/header/gifs/3.png" id="close_s"/></a><h2 class="f1_s otp-pl18">Verify Your Mobile Number</h2></div><div>'+box+'</div></div><!-- Popup div ends here -->';
      }
    }
    
    if(src1 == 'VER' || src1 == 'BUYERMY' || src1 == 'BUYERMY_NAV' || src1 == 'HDR' || src1 == 'SELLER_DASHBOARD' || src1 == 'HDR_STRP' || src1 == 'EMAILVER' || src1 == 'SCROLLVER' || src1 == 'SCROLLVER1'){
    $("#IdentifiedPopUpHTML").html(verifyBoxHTML);
    $("#overlay_s").css("display","block");
    $("#IdentifiedPopUpHTML").css({"display":"block","position":"fixed","top":"200px","left":"50%","z-index":"1001","margin-left":"-247px"});
    }
    else{
    document.getElementById('popupContact_s').innerHTML = verifyBoxHTML;
    document.getElementById('popupContact_s').style.display = "block";}
    if ($('#authKey').val() == "" && dispflag == 1 && src1 == 'IDEN') {
      $('#authKey').val($('#first').val()+$('#second').val()+$('#third').val()+$('#fourth').val());
    }
    $('#authKey').focus();
}

function verify_email(glid,modid,prim_email,mob_cont_code,att_id,iso,cDFlag,sfFlag,src1)
{
  var imesh = new userDataCookie().get();
  var mobNoFromCookie = imesh.mb1;
  var emFromCookie = imesh.em;
  var evStat = imesh.ev;
  var uvStat = imesh.uv;
  var xread = readCookie('xnHist');
  var fpv_val = (xread !='') ? getparamVal(xread, "fpv") : '';


  if (!prim_email || !emFromCookie){
      var gaTracking = modid + "_" + prim_email + "_" + emFromCookie ;
      _gaq.push(['_trackEvent',gaFormIdentify,"emailTrackingInVerify",gaTracking, 0, true]);
  }

  $("#re_auth1").css("display","none");
  // $("#resendA").css("display","none");
  document.getElementById('check_verify1').style.visibility="hidden";
  document.getElementById("check_verify1").style.cursor='wait';
  document.getElementById('loadingImage').style.display='inline-block';
  $('#verify_error1,#mnxt1').hide();
  $('#check_verify1').addClass("load_s");
  $("#resendMsg").css("display","none");
  var screen = '';
  var processName = '';

  if (cDFlag == 1 || cDFlag == 3 || cDFlag == 4)
  {
    if (src1 == 'EMAILVER')
    {
      processName = 'OTP_SignInForm_Desktop';// OTP_EmailVerificationForm_Desktop
      updateUsing = 'Verification Form Desktop';
      if (fpv_val == 5 || fpv_val == 4)
      {
          // yandex_impression('Verification_popup','Verification_Email_click_5th_'+modid);
       _gaq.push(['_trackEvent', 'Verification_popup','Verification_Email_click_5th',modid, 0, true]);
        screen = 'EMAIL VERIFICATION VIA DESKTOP ON 5PV';
      }
      else
      {
           // yandex_impression('Verification_popup','Verification_Email_click_3rd_'+modid);
       _gaq.push(['_trackEvent', 'Verification_popup','Verification_Email_click_3rd',modid, 0, true]);
        screen = 'EMAIL VERIFICATION VIA DESKTOP ON 3PV';
      }
    }
  }
  var x = document.getElementsByClassName("mobbox1 f1 ");
    auth_key = '';
    auth = new Array();
    for(i = 0; i < x.length; i++){
        auth[i] = x[i].value;
        auth_key = auth_key+auth[i];
    }
    auth_key = auth_key.replace(/^\s+|\s+$/g,"");
  if(!(/\d{4}/.test(auth_key)))
  {
    document.getElementById("authKey").value="";
    $('#check_verify1').removeClass("load_s");
    document.getElementById('check_verify1').style.visibility="visible";
    document.getElementById("check_verify1").style.cursor='pointer';
    document.getElementById('loadingImage').style.display='none';
    $("#resendMsg").css("display","none");
    $('#verify_error1').html('Please enter 4-digit OTP');
    $("#verify_error1").show();
    if(!( sendOTPCount > 2 && displayVerificationOptions != 1))
    $("#re_auth1").css("display","block");
    return false;
  }

  if(LoginwithOTPcount > 5){
       $("#re_auth1").css("display","inline-none");
       $('#verify_error1').html('Oops ! You have reached OTP limit, please try after sometime.');
       otpmsg();
       clearTimeout(waitMessage);
       return;
  }

  
  if(typeof country_ip == 'undefined' || country_ip == ''){
    var iploc = readCookie('iploc');
        if( iploc != 'undefined' && iploc != '')
        {
            country_ip = getparamVal(iploc, "gip");
            iploc_country_name = getparamVal(iploc, "gcnnm");
        }
  }
  params = {  
              'token':"imobile@15061981",
              //'email': glusr_email,
              'modid': modid,
              'user_mobile_country_code': mob_cont_code,
              'flag':"OTPVer",
              'user_ip':country_ip,
              'user_country':imesh.iso,
              'country_name':iploc_country_name,
              'auth_key':auth_key,
              'glusrid':glid,
              'verify_process':'Email',
              'attribute_id': att_id,
              'verify_screen' : screen,
              'process':processName
              };
        $.ajax({
            type: "POST",
            dataType: "json",
            crossDomain: true,
            url: "//"+UrlPri2+"login.indiamart.com/users/OTPVerification/",
            data: params,
            success:function(response){
                var stat = response.Response.Status;
                var message = response.Response.Message;
                var errmsg = response.Response.Error;
                if (stat == 'Failure' || (message.match('OTP not Verified')))
                {
                    $("#mwrp").css("display","block");
                    document.getElementById("authKey").value="";
                    document.getElementById('check_verify1').style.visibility="visible";
                    document.getElementById("check_verify1").style.cursor='pointer';
                    document.getElementById('loadingImage').style.display='none';
                    $("#verify_error1").show();
                    $('#check_verify1').removeClass("load_s");
                    $("#resendMsg").css("display","none");
                    if(!( sendOTPCount > 2 && displayVerificationOptions != 1))
                    $("#re_auth1").css("display","inline-block");
                    if (errmsg.match('Pending OTP record not found'))
                    {
                      $('#verify_error1').html('Your OTP has expired. Please click on Resend for new OTP.');
                    }
                    else
                      $('#verify_error1').html('Please enter correct OTP');
                    LoginwithOTPcount++;
                    return false;
                }
                else if(message != '' && message.match('Email Verified'))
                {
                    document.getElementById("check_verify1").style.cursor='pointer';
                    document.getElementById('loadingImage').style.display='none';
                    $('#verify_error1').html('');
                    $("#mnxt1").hide();
                    $("#after_verified").css("display","inline-block");
                    if(cDFlag ==3 || cDFlag ==4)
                    { 
                        if(src1 == 'EMAILVER'){if (fpv_val == 4 || fpv_val == 5) 
                        // yandex_impression('Verification_popup','Verification_email_success_5th_'+modid);
                        _gaq.push(['_trackEvent', 'Verification_popup', 'Verification_email_success_5th_' + modid]);

                        else 
                        // yandex_impression('Verification_popup','Verification_email_success_3rd_'+modid); 
                        _gaq.push(['_trackEvent', 'Verification_popup', 'Verification_email_success_3rd_' + modid]);

                             }
                        if(typeof isBLFormOpen != 'undefined'){                
                        callToIdentifiedQ();}
                        setTimeout(function(){closeMe1(src1);},1000);
                        var imeshval = readCookie("ImeshVisitor");
                        var b = "";
                        var offset;
                        var offset1;
                        if (offset1 = imeshval.indexOf("ev"))
                        {
                            b = strToObj(imeshval);
                            b.ev = "V";
                            imesh_obj.set(b);
                        }
                    }
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {console.log('Error');}
        });
}

function verify_mobile(glid,modid,mobile_num,mob_cont_code,att_id,iso,cDFlag,sfFlag,src1){
        verifytype = 2;
        seconds_left = 0;
        if ( !(document.getElementById('tmrBL') === null) )
            document.getElementById("tmrBL").innerHTML = "<b>00:15</b>";
        $("#tmrBL").css("visibility","hidden");
        $("#mwrp").css("display","none");
        var xread = readCookie('xnHist');
        var ipv_val = (xread !='') ? getparamVal(xread, "ipv") : '';
        var imesh = new userDataCookie().get();
        var mobNoFromCookie = imesh.mb1;
        var emFromCookie = imesh.em;
        var evStat = imesh.ev;
        if (!mobile_num || !mobNoFromCookie){
            var gaTracking = modid + "_" + mobile_num + "_" + mobNoFromCookie ;
            _gaq.push(['_trackEvent',gaFormIdentify,"mobileTrackingInVerify",gaTracking, 0, true]);
        }
         $("#re_auth1").css("display","none");
         $("#resendA").css("display","none");
         document.getElementById('check_verify1').style.visibility="hidden";
         document.getElementById("check_verify1").style.cursor='wait';
         document.getElementById('loadingImage').style.display='inline-block';
         $('#verify_error1,#mnxt1').hide();
         $('#check_verify1').addClass("load_s");
        $("#resendMsg").css("display","none");
    var screen = '';
    var processName = '';
        if(cDFlag==1){
                processName = 'OTP_JoinFreeForm_Desktop';
                updateUsing = 'Join Free Form Desktop';
        }
    else{
         if(src1 == 'BUYERMY' || src1 == 'BUYERMY_NAV'){
                processName = 'OTP_BuyerMYContactProfile_Desktop';
                updateUsing = 'BUYER MY CONTACT PROFILE PAGE';
         }else if(src1 == 'SELLER_DASHBOARD'){
             processName = 'OTP_SellerMY_Desktop';
             updateUsing = 'SELLER MY DASHBOARD';
         }else{
        processName = 'OTP_SignInForm_Desktop';
        updateUsing = 'Sign IN Form Desktop';
        }
    }
    if(cDFlag == 1)
    {
        if(src1 == 'IDEN')
        {
            // yandex_impression('Identification_login_popup','Verification_click_'+modid);
         _gaq.push(['_trackEvent', 'Identification_login_popup','Verification_click',modid, 0, true]);
          screen = 'VERIFICATION VIA DESKTOP IDENTIFICATION POPUP';
        }
        else
        {
            if ( displayVerificationOptions == 1 ){
                if ( ! ( document.getElementById("otp-message") === null ) ){
                    var otpMessageIDValue = document.getElementById("otp-message").innerHTML;
                    if ( otpMessageIDValue.includes("You will soon receive a call with OTP") ){
                        screen = "VERIFICATION VIA OTP_ON_CALL ON DESKTOP";
                        gATracking("NewUser_VerificationAttempt_Via_OTPOnCall");
                    }
                    else{
                        screen = 'VERIFICATION FROM JOINFREE DESKTOP POPUP'; 
                        gATracking("NewUser_VerificationAttempt"); 
                    }
                }
            }
            else{
                screen = 'VERIFICATION FROM JOINFREE DESKTOP POPUP'; 
                gATracking("NewUser_VerificationAttempt");    
            }
        }
    }
    else if(cDFlag == 3 || cDFlag == 4)
    {
            if(src1 == 'IDEN'){
                // yandex_impression('Identification_login_popup','Verification_click_'+modid);
                _gaq.push(['_trackEvent', 'Identification_login_popup','Verification_click',modid, 0, true]);
                screen = 'VERIFICATION VIA DESKTOP IDENTIFICATION POPUP';
            } 
            else if(src1 == 'BUYERMY' || src1 == 'BUYERMY_NAV')
                screen = 'Buyer ContactDetails Verification Popup';
            else if(src1 == 'SELLER_DASHBOARD')
                screen = 'VERIFICATION VIA SELLER DASHBOARD POPUP';
              else if(src1 == 'VER' && redirectURL.indexOf("utm_campaign=IN-newreg-SEARCH") != -1 && modid=='MY')
                    {
                        // yandex_impression('Verification_popup','Verification_click_buyermy_'+modid);
                        _gaq.push(['_trackEvent', 'Verification_popup','Verification_click_buyermy',modid, 0, true]);
                        screen = 'VERIFICATION VIA NEW REGISTRATION MAILER ON BUYER MY';
                        processName = 'ONLINE'; 
                    }
            else if(src1 == 'VER'){
              if (ipv_val == 4 || ipv_val == 5)
              {
                   // yandex_impression('Verification_popup','Verification_click_5th_'+modid);
                _gaq.push(['_trackEvent', 'Verification_popup','Verification_click_5th',modid, 0, true]);
                screen = 'VERIFICATION VIA DESKTOP ON 5PV';
              }
              else
              {
                  // yandex_impression('Verification_popup','Verification_click_3rd_'+modid);
                _gaq.push(['_trackEvent', 'Verification_popup','Verification_click_3rd',modid, 0, true]);
                screen = 'VERIFICATION VIA DESKTOP ON 3PV';
              }
            }
            else if(src1 == 'SCROLLVER'){
                // yandex_impression('Verification_popup','Verification_scrollver_click_'+modid);
                _gaq.push(['_trackEvent', 'Verification_popup','Verification_scrollver_click',modid, 0, true]);
                screen = 'VERIFICATION VIA DESKTOP SCROLLBASED';
            }
            else if(src1 == 'HDR'){
                 // yandex_impression('IM_Global_Header','Verification_click_'+modid);
              _gaq.push(['_trackEvent', 'IM Global Header','Verification_click',modid, 0, true]);
                screen = 'VERIFICATION FROM SIGNIN DESKTOP POPUP';
            }
            else if(src1 == 'HDR_STRP')
            {   // yandex_impression('IM_Header_Strip','Verification_click_'+modid);
                _gaq.push(['_trackEvent', 'IM Header Strip','Verification_click',modid, 0, true]);
                screen = 'VERIFICATION FROM IM_HEADER STRIP';
            }
            else
            {
                if ( displayVerificationOptions == 1 ){
                    if ( ! ( document.getElementById("otp-message") === null ) ){
                        var otpMessageIDValue = document.getElementById("otp-message").innerHTML;
                        if ( otpMessageIDValue.includes("You will soon receive a call with OTP") ){
                            screen = "VERIFICATION VIA OTP_ON_CALL ON DESKTOP";
                           gATracking("ExistingUser_VerificationAttempt_Via_OTPOnCall");
                        }
                        else{
                            screen = 'VERIFICATION FROM SIGNIN DESKTOP POPUP'; 
                            // yandex_impression(gaFormIdentify,'ExistingUser_VerificationAttempt');
                           gATracking("ExistingUser_VerificationAttempt"); 
                        }
                    }
                }
                else{
                    screen = 'VERIFICATION FROM SIGNIN DESKTOP POPUP'; 
                    // yandex_impression(gaFormIdentify,'ExistingUser_VerificationAttempt');
                 gATracking("ExistingUser_VerificationAttempt");    
                }   
            }
    }
    if ($('#authKey').val() == "" && dispflag == 1 && src1 == 'IDEN') {
      $('#authKey').val($('#first').val()+$('#second').val()+$('#third').val()+$('#fourth').val());
    }
    if(!(/\d{4}/.test($('#authKey').val()))){    
          $('#verify_error1').html('Please enter 4-digit OTP');
                $("#re_auth1").css("display","inline-block");
                $("#resendA").css("display","inline-block");
                if (dispflag == 1 && src1 == 'IDEN') {
                  document.getElementById("first").value="";
                  document.getElementById("second").value="";
                  document.getElementById("third").value="";
                  document.getElementById("fourth").value="";
                  $('#first').focus();
                }
                if ( otpPlusOTPOnCallCount > 6 )
                    $("#mwrp").css("display","none");
                else
                    otpmsg();
            return false;
    }
     
    if(LoginwithOTPcount > 5){
         $("#re_auth1").css("display","inline-none");
         $('#verify_error1').html('Oops ! You have reached OTP limit, please try after sometime.');
         otpmsg();
         clearTimeout(waitMessage);
         return;
    }
    if ($('#authKey').val() == "" && dispflag == 1 && src1 == 'IDEN') {
      $('#authKey').val($('#first').val()+$('#second').val()+$('#third').val()+$('#fourth').val());
    }
    var authVal = $('#authKey').val();
    if(typeof country_ip == 'undefined' || country_ip == ''){
    var iploc = readCookie('iploc');
        if( iploc != 'undefined' && iploc != '')
        {
            country_ip = getparamVal(iploc, "gip");
            iploc_country_name = getparamVal(iploc, "gcnnm");
        }
    }
    var params = {  
        'token':"imobile@15061981",
        'mobile_num': mobNoFromCookie,
        'modid': modid,
        'user_mobile_country_code': mob_cont_code,
        'flag':"OTPVer",
        'user_ip':country_ip,
        'country_name':iploc_country_name,
        'auth_key':$('#authKey').val(),
        'glusrid':glid,
        'verify_process':'ONLINE',
        'verify_screen' : screen,
        'process':processName
        };
    $.ajax({
        type: "POST",
        dataType: "json",
        crossDomain: true,
        url: "//"+UrlPri2+"login.indiamart.com/users/OTPVerification/",
        data: params,
        success:function(response){
            var stat = response.Response.Status;
            var message = response.Response.Message;
            var errmsg = response.Response.Error;
            if((stat == 'Failure' || (message.match('OTP not Verified') || message.match('Mobile Number not Verified'))) && (dispflag == 1 && src1 == 'IDEN'))
            {
                $("#re_auth1").css("display","inline-block");
                $("#resendA").css("display","inline-block");
                if (errmsg.match('Pending OTP record not found'))
                {
                  $('#verify_error1').html('Your OTP has expired. Please click on Resend for new OTP.');
                }
                else
                {
                  $('#verify_error1').html('Please enter correct OTP');
                }
                if (dispflag == 1 && src1 == 'IDEN')
                {
                  document.getElementById("first").value="";
                  document.getElementById("second").value="";
                  document.getElementById("third").value="";
                  document.getElementById("fourth").value="";
                  $('#first').focus();
                }
                LoginwithOTPcount++;
                if ( otpPlusOTPOnCallCount > 6 )
                    $("#mwrp").css("display","none");
                else
                    otpmsg();
            }
            else if (stat == 'Failure' || (message.match('OTP not Verified') || message.match('Mobile Number not Verified')))
            {
                $("#re_auth1").css("display","inline-block");
                $("#resendA").css("display","inline-block");
                if (errmsg.match('Pending OTP record not found'))
                {
                  $('#verify_error1').html('Your OTP has expired. Please click on Resend for new OTP.');
                }
                else
                  $('#verify_error1').html('Please enter correct OTP');
                LoginwithOTPcount++;
                if ( otpPlusOTPOnCallCount > 6 )
                    $("#mwrp").css("display","none");
                else
                    otpmsg();
            }
            else if(message != '' && message.match('Mobile Number Verified'))
            { 
                var data1 = response.Response.LOGIN_DATA.DataCookie; 
                var loginSet = response.Response.LOGIN_DATA.LoginCookie;; 
                var tokenSet=response.Response.LOGIN_DATA.im_iss;
                imesh_obj.set(data1,"ImeshVisitor");
                v4iilex_obj.set(loginSet,"v4iilex");
                im_iss_obj.set(tokenSet,"im_iss");
                document.getElementById("check_verify1").style.cursor='pointer';
                document.getElementById('loadingImage').style.display='none';
                $('#verify_error1').html('');
                $("#mnxt1").hide();
                if (dispflag == 1 && src1 == 'IDEN') {
                  $("#after_verified").css("display","block");
                }
                else
                  $("#after_verified").css("display","inline-block");
                if(cDFlag == '1')
                {
                    setCookieUv1();
                    if(typeof isBLFormOpen != 'undefined'){
                    callToIdentifiedQ();}
                    if(src1 == 'IDEN' && dispflag == 1)
                    {
                         // yandex_impression('Identification_login_popup','Verification_success_'+modid);
                        _gaq.push(['_trackEvent', 'Identification_login_popup','Verification_success',modid, 0, true]);
                        if(emFromCookie != '')
                        {globalVariable={example_attribute:"1"};}
                        else
                        {if(modid == "DIR" || modid == "PRODDTL" || modid == "IMHOME")globalVariable={example_attribute:"100"}; else globalVariable={example_attribute:"1"};}// here here
                        callidentifiedJ();
                    }
                    else if(src1 == 'VER' && redirectURL.indexOf("utm_campaign=IN-newreg-SEARCH") != -1 && modid=='MY')
                    {
                        // yandex_impression('Verification_popup','Verification_success_buyermy_'+modid);
                       _gaq.push(['_trackEvent', 'Verification_popup','Verification_success_buyermy',modid, 0, true]);
                        callidentifiedJ();
                        window.location = '//my.indiamart.com';
                        return true;
                    }
                    else if(src1 == 'VER')
                    {
                      if (ipv_val == 4 || ipv_val == 5)
                          // yandex_impression('Verification_popup','Verification_success_5th_'+modid);
                       _gaq.push(['_trackEvent', 'Verification_popup','Verification_success_5th',modid, 0, true]);
                      else
                          // yandex_impression('Verification_popup','Verification_success_3rd_'+modid);
                       _gaq.push(['_trackEvent', 'Verification_popup','Verification_success_3rd',modid, 0, true]);
                        globalVariable={example_attribute:"0"};
                        callidentifiedJ();
                    }
                    else if ( displayVerificationOptions == 1 ) 
                    {
                        if ( ! ( document.getElementById("otp-message") === null ) )
                        {
                            var otpMessageIDValue = document.getElementById("otp-message").innerHTML;
                            if ( otpMessageIDValue.includes("You will soon receive a call with OTP") )
                                 // yandex_impression(gaFormIdentify,'Verified_From_OTP_On_Call_'+modid);
                                _gaq.push(['_trackEvent',gaFormIdentify,"Verified_From_OTP_On_Call",modid, 0, true]);
                            else 
                                 // yandex_impression(gaFormIdentify,'Verified_From_OTP_On_SMS_'+modid);
                                _gaq.push(['_trackEvent',gaFormIdentify,"Verified_From_OTP_On_SMS",modid, 0, true]);  
                        }    
                    }
                    else
                           // yandex_impression(gaFormIdentify,'NewUser_VerificationSuccessful');
                        gATracking("NewUser_VerificationSuccessful");
                    
                    setTimeout(function(){closeMe1(src1);},1000);
                    return true;
                }
                if(cDFlag ==3 || cDFlag ==4)
                { 
                    if(src1 == 'IDEN'){
                         // yandex_impression('Identification_login_popup','Verification_success_'+modid);}
                        _gaq.push(['_trackEvent', 'Identification_login_popup','Verification_success',modid, 0, true]);}
                    else if(src1 == 'VER' && redirectURL.indexOf("utm_campaign=IN-newreg-SEARCH") != -1 && modid=='MY')
                    {
                          // yandex_impression('Verification_popup','Verification_success_buyermy_'+modid);
                       _gaq.push(['_trackEvent', 'Verification_popup','Verification_success_buyermy',modid, 0, true]);
                        window.location = '//my.indiamart.com';
                        return true;
                    }
                    else if(src1 == 'VER'){if (ipv_val == 4 || ipv_val == 5) 
                        // yandex_impression('Verification_popup','Verification_success_5th_'+modid); else
                       _gaq.push(['_trackEvent', 'Verification_popup','Verification_success_5th',modid, 0, true]); 
                       // yandex_impression('Verification_popup','Verification_success_3rd_'+modid);}
                      _gaq.push(['_trackEvent', 'Verification_popup','Verification_success_3rd',modid, 0, true]);}
                    else if(src1 == 'SCROLLVER'){
                        // yandex_impression('Verification_popup','Verification_scrollver_success_'+modid);}
                       _gaq.push(['_trackEvent', 'Verification_popup','Verification_scrollver_success',modid, 0, true]);}
                    else if(src1 == 'HDR'){
                        // yandex_impression('IM_Global_Header','Verification_success'+modid);}
                       _gaq.push(['_trackEvent', 'IM Global Header','Verification_success',modid, 0, true]);}
                    else if(src1 == 'HDR_STRP'){
                        // yandex_impression('IM_Header_Strip','Verification_success'+modid);}
                       _gaq.push(['_trackEvent', 'IM Header Strip','Verification_success',modid, 0, true]);}
                    else if(src1 == 'BUYERMY'){
                        // yandex_impression('Verification_popup','Verification_popup_Buyermy_Verification_MYcontact_success_'+modid);}
                        _gaq.push(['_trackEvent', 'Verification_popup_Buyermy','Verification_MYcontact_success',modid, 0, true]);}
                    else if(src1 == 'BUYERMY_NAV'){
                        // yandex_impression('Verification_popup','Verification_popup_Buyermy_Verification_MYNav_success_'+modid);}
                       _gaq.push(['_trackEvent', 'Verification_popup_Buyermy','Verification_MYNav_success',modid, 0, true]);}
                    else if ( displayVerificationOptions == 1 )
                    {
                        if ( ! ( document.getElementById("otp-message") === null ) ){
                            var otpMessageIDValue = document.getElementById("otp-message").innerHTML;
                            if ( otpMessageIDValue.includes("You will soon receive a call with OTP") )
                                // yandex_impression(gaFormIdentify,'Verified_From_OTP_On_Call_'+modid);
                               _gaq.push(['_trackEvent',gaFormIdentify,"Verified_From_OTP_On_Call",modid, 0, true]);
                            else 
                                // yandex_impression(gaFormIdentify,'Verified_From_OTP_On_SMS_'+modid);
                               _gaq.push(['_trackEvent',gaFormIdentify,"Verified_From_OTP_On_SMS",modid, 0, true]);  
                        }    
                    }
                    else
                        // yandex_impression(gaFormIdentify,'ExistingUser_VerificationSuccessful');
                        gATracking("ExistingUser_VerificationSuccessful");
                    if(typeof isBLFormOpen != 'undefined'){                
                    callToIdentifiedQ();}
                    if(src1 == 'IDEN')
                    {
                        if(emFromCookie != '')
                          {globalVariable={example_attribute:"1"};}
                        else
                          {globalVariable={example_attribute:"100"};}
                        callidentifiedJ();
                        return;
                    }
                    if(src1 == 'VER')
                    {
                        globalVariable={example_attribute:"0"};
                        callidentifiedJ();
                     }
                    if(src1 == 'HDR_STRP' && emFromCookie != '' && evStat != 'V')
                    {
                        thankyou_popup(modid,cDFlag,sfFlag,src1);
                        return;
                    }
                    if(src1 == 'BUYERMY' || src1 == 'BUYERMY_NAV')
                    {
                        window.location.reload();
                    }
                    else{setTimeout(function(){closeMe1(src1);},1000);}
                }
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {}
    });
}

function send_email(type,src_from,first_name,glusrId,mobile,email,modid)
{
  http_request = false;
  var response;
    cDflag = 3;
    sfFlag = '';
  if(src_from == 'HDR_STRP'){
      // yandex_impression('IM Header Strip','Email_Verification_Clicked_'+modid);}
      _gaq.push(['_trackEvent', 'IM Header Strip','Email_Verification_Clicked',modid, 0, true]);}
  var sid=Math.random();
  var url = "//"+UrlPri+'my.indiamart.com/userprofile/contactprofile/verification/?action=email_verification&type='+type+'&sid='+sid+'&email='
  +email+'&first_name='+first_name+'&glusrId='+glusrId+'&mobile='+mobile;
  if (window.XMLHttpRequest)
  {
    http_request=new XMLHttpRequest();
  }
  else if (window.ActiveXObject)
  {
    try    
    {
      http_request = new ActiveXObject("Msxml2.XMLHTTP");
    }
    catch (e)
    {
      try
      {
        http_request = new ActiveXObject("Microsoft.XMLHTTP");
      }
      catch (e)
      {
   
      }
    }
  }
  http_request.open('GET', url, true);
  http_request.send(null);
    thankyou_popup(modid,cDflag,sfFlag,src_from);
    return http_request.responseText;
}

function otpmsg(){
             $("#mwrp").css("display","block");
                document.getElementById("authKey").value="";
                document.getElementById('check_verify1').style.visibility="visible";
                document.getElementById("check_verify1").style.cursor='pointer';
                document.getElementById('loadingImage').style.display='none';
                $("#verify_error1").show();
                $('#check_verify1').removeClass("load_s");
                $("#resendMsg").html('');
                return false;
}

var interval;
var seconds_left;

function setCookieUv1(){var a=readCookie("ImeshVisitor"),b="";if(a.length>0)if(offset=a.indexOf("uv"),-1!=offset)b=strToObj(a),b.uv="V",imesh_obj.set(b);else{var c=a.charAt(a.length-1);a+="|"==c?"uv=V":"|uv=V",b=strToObj(a),imesh_obj.set(b)}}

function gATracking(msg){_gaq.push(['_trackEvent',gaFormIdentify,msg,modid, 0, true]);}

function gATrackingAb(msg){
  if(modid == 'DIR' && location.href.indexOf("-all.html") == -1)
  _gaq.push(['_trackEvent','signIn',msg,modid, 0, true]);
  //  imgtm.push(
  //   {
  //     'event': 'IMEvent-NI',
  //     'eventCategory': 'signIn',
  //     'eventAction': msg,
  //     'eventLabel': 'DIR',
  //     'CD_Additional_Data': 'ctaName=View Mob O|ctaType=Product Enquiry|PT=search|Section=Listing-MainProd|Position=pg-1_3|ScriptVer=enqBl_desktop.min.js?v=114'
  //   });
  
}

function clc_cookies()
{
  if(dis_ckies!='')
        {    
        
        document.getElementById("logintoidentify").disabled = true;
        $("#logintoidentify").css("background-color","#b2b2b2");
        $("#lwg_wrpr").css("display","none");
        }
}

function showmobverifyScreen(glid,modid,mobile_num,mob_cont_code,att_id,phCountry,resend,cDflag,src1)
{  
      // yandex_impression('Identification_login_popup','ExistingUser_VerificationSuccessful');
      _gaq.push(['_trackEvent', 'Identification_login_popup','SendOTPScreenDisplay',modid, 0, true])
      // var abtrack = (ispns == 'PNS') ? "gATrackingAb(\'Sc 2 Close Clicked\');" : '';
      // var abtrack2 = (ispns == 'PNS') ? "gATrackingAb(\'Sc 2 Submit Clicked\');" : '';
      verifyBoxHTML = '<div class="overlay_s" id="overlay_s" style="display: block;"></div><div id="form_otp1" class="one_s1"><div class="step-1" id="bs_hdng1"><a href="javascript:" onclick="closeMe1(\'HDR\');" style="display: block;"><img src="//utils.imimg.com/header/gifs/3.png" id="close_s"></a><h2 class="f1_s otp-pl18">Verify Your Mobile Number</h2></div><div><style>.otp-mb10{margin: 10px 0px; text-align: center;}.lkotp{color:#2e3192;cursor:pointer;text-decoration:none;margin-left:61px;}.step-1 h2{font-size: 24px!important}.otp-pl18{padding-left:82px!important;padding-top:12px;height: 41px}.otp-message{color:#2a2a2a;margin:20px 22px}.wrper-txt{padding:3px 18px 36px;color:#2a2a2a;text-align:left;font-family:Open Sans,arial}.resendMsg{padding-left:59px}</style><p class="cm-msg" style="text-align: center;color:#2e3192;font-size:22px;font-family:Open Sans,arial;margin-top:10px;margin-bottom:10px;">Get Connected to Verified Sellers</p><div class=" c31 ds_in1 wrper-txt" style="display:inline-block;width:93%;" id="main_div"><p class="otp-message" style="text-align: center;line-height:25px;width:350px;margin:0 auto;">Click below to get 4 digit One Time Password (OTP)<br>on your Mobile Number <b>+'+mob_cont_code+'-'+mobile_num+'</b> via SMS</p><div class="vfn-code1 fs141 c31" style="text-align:center"><p class="otp-mb10" id="testing" style="position:relative;/* text-align: center; */"><input type="button" id="check_verify1" class="vrfy-otp" alt="" value="Request OTP" onclick="send_otp(\''+glid+'\',\''+modid+'\',\''+mobile_num+'\',\''+mob_cont_code+'\',\''+att_id+'\',\''+phCountry+'\',\'2\',\''+cDflag+'\',\''+src1+'\');_gaq.push([\'_trackEvent\', \'Identification_login_popup\',\'SendOTPScreenSubmit\',modid, 0, true])" style="background-color: rgb(0, 166, 153);text-align: center;/* visibility: hidden; */cursor: pointer;font-size: 16px;"><span class="err-otp2" id="verify_error1"></span></p></div></div></div></div>';
      $("#sign_in").html('');
      $("#IdentifiedPopUpHTML").html(verifyBoxHTML);
      $("#IdentifiedPopUpHTML").css({"display":"block","position":"fixed","top":"200px","left":"50%","z-index":"1001","margin-left":"-247px"});    

}

// function yandex_impression(gaFormIdentify,value) {
//     if (typeof ym != 'function') {
//         (function (b, o, j, n, h, g, f) {
//             b[h] = b[h] || function () {
//                 (b[h].a = b[h].a || []).push(arguments)
//             };
//             b[h].l = 1 * new Date();
//             g = o.createElement(j), f = o.getElementsByTagName(j)[0], g.async = 1, g.src = n, f.parentNode.insertBefore(g, f)
//         })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
//         ym(51115208, "init", {
//             id: 51115208,
//             clickmap: true,
//             trackLinks: true,
//             accurateTrackBounce: true,
//             webvisor: true
//         });
//     }
//     if(gaFormIdentify == 'signIn')
//     window.yaParams = {SignIN: value};
//      else if(gaFormIdentify == 'Verification_popup')
//     window.yaParams = {Verification_popup: value};
//     else if(gaFormIdentify == 'Identification_login_popup')
//     window.yaParams = {Identification_login_popup: value};
//    else if(gaFormIdentify == 'Identification_login_popup')
//     window.yaParams = {Identification_login_popup: value};
//     else if(gaFormIdentify == 'IM_Global_Header')
//     window.yaParams = {IM_Global_Header: value};
//     else if(gaFormIdentify == 'IM_Header_Strip')
//     window.yaParams = {IM_Header_Strip: value};
//    else if(gaFormIdentify == 'joinFree')
//     window.yaParams = {JoinFree: value};
//     else if(gaFormIdentify == 'Redirection_on_signout')
//     window.yaParams = {Redirection_on_signout: value};
//    else
//        window.yaParams = {Imlogin: value};
   
//     ym(51115208, "params", window.yaParams || {});
// }