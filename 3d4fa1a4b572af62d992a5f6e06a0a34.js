function createScript(url, callback) {
  var oScript = document.createElement('script')
  oScript.type = 'text/javascript'
  oScript.async = true
  oScript.defer = true
  oScript.charset = 'utf-8'
  oScript.src = url
  /*
  ** script标签的onload和onreadystatechange事件
  ** IE6/7/8支持onreadystatechange事件
  ** IE9/10支持onreadystatechange和onload事件
  ** Firefox/Chrome/Opera支持onload事件
  */

  // 判断IE8及以下浏览器
  var isIE = !-[1]
  if (isIE) {
      oScript.onreadystatechange = function () {
          if (this.readyState == 'loaded' || this.readyState == 'complete') {
              callback()
          }
      }
  } else {
      // IE9及以上浏览器，Firefox，Chrome，Opera
      oScript.onload = function () {
          callback()
      }
  }
  document.body.appendChild(oScript)
}
createScript('//wza.news.cn/dist/aria.js?appid=7c11fb3e5d5e6bc07fc782d63ab71188',function () {console.log('OK')})