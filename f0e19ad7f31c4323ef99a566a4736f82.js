var docHostName = location.hostname;
var isNotEcm = true;
if(typeof(docHostName) !='undefined') {
  if(docHostName.indexOf("ecm.momoshop.com.tw") > -1 || docHostName.indexOf("10.3.12.224") > -1
    || docHostName.indexOf("ecmdev.momoshop.com.tw") > -1 || docHostName.indexOf("ecmuati.momoshop.com.tw") > -1
    || /ecmuat[1]?[0-9]{1}\./.test(docHostName) || /ecmqc[1]?[0-9]{1}\./.test(docHostName)) {
    isNotEcm = false;
  }
}
function goMain() {
  if(typeof(docHostName) !='undefined') {
    if(isNotEcm) {
      location.replace('https://' + docHostName + '/main/Main.jsp');
    } else {
      location.replace('http://' + docHostName + '/main/Main.jsp');
    }
  }
}