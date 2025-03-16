var _user_id = '';
  var _user_email = '';
  var _session_id = 'c7262d54-8c43-3b81-6a0b-8c9726b94813';
  var _sift_beacon_key ='cd9096b1cb';
  var _sift = window._sift = window._sift || [];
  _sift.push(['_setAccount',_sift_beacon_key]);
  _sift.push(['_setUserId', _user_id]);
  _sift.push(['_setUserEmail', _user_email]);
  _sift.push(['_setSessionId', _session_id]);
  _sift.push(['_trackPageview']);

 (function() {
   function ls() {
     var e = document.createElement('script');
     e.async = true;
     e.src = 'https://cdn.sift.com/s.js';
     document.body.appendChild(e);
   }
   if (window.attachEvent) {
     window.attachEvent('onload', ls);
   } else {
     window.addEventListener('load', ls, false);
   }
 })();