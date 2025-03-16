function cx_getOptOutStatus(key){
   let status = false;
   key = key + '=';
   if (document.cookie.indexOf(key) >= 0) {
     status = true;
   }
   return status;
}
var cX = cX || {options : { consent: cx_getOptOutStatus('cx_optout_impress') }}; 
cX.callQueue = cX.callQueue || [];
cX.callQueue.push(['setSiteId', '1138580433800724645']);
cX.callQueue.push(['sendPageViewEvent']);