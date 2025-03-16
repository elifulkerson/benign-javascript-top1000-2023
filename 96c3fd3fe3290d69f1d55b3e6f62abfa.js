//try {
//  var _EXPERIMENTID = window._EXPERIMENTID || (function(){
//    if ('mr' in window && '_' in window.mr) {
//      return mr._.EXPERIMENTID || ''
//    } else {
//      return ''
//    }
//  })();
//} catch(e){}
try {
	var _CNT = window._CNT || (function(){
		if ('mr' in window && '_' in window.mr) {
			return mr._.CNT || ''
		} else {
			return ''
		}
	})();
} catch(e){}
var _tmr = window._tmr || (window._tmr = []);
var tParm = [];
//_EXPERIMENTID && tParm.push('testid=' + _EXPERIMENTID);
_CNT && tParm.push('cnt=' + _CNT);
_tmr.push({ type: 'setUserID', userid: "" });
_tmr.push({id: "3217024", type: "pageView", start: (new Date()).getTime()});
_tmr.push({id: "110605", type: "pageView", start: (new Date()).getTime(), url: location.href + (tParm.length ? '#' + tParm.join('&'): '')});
(function (d, w, id) {
  if (d.getElementById(id)) return;
  var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
  ts.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//top-fwz1.mail.ru/js/code.js";
  var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
  if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
})(document, window, "topmailru-code");