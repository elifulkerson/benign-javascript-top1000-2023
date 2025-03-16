!function(e){function t(t){function n(){r||(t(),r=!0)}var r=!1,o=document,i=!1;if("loading"!=document.readyState&&(i=!0),i)return n();if(o.addEventListener)o.addEventListener("DOMContentLoaded",n,!1);else if(o.attachEvent){var u=!1;try{u=null!==e.frameElement}catch(a){}o.documentElement.doScroll&&!u&&function e(){if(!r)try{o.documentElement.doScroll("left"),n()}catch(a){setTimeout(e,10)}}(),o.attachEvent("onreadystatechange",function(){"complete"===o.readyState&&n()})}}function n(t){e.requestNextAnimationFrame=function(){var t=undefined,n=undefined,r=(undefined,navigator.userAgent),o=0,i=this;return e.webkitRequestAnimationFrame&&(n=function(e){e===undefined&&(e=+new Date),i.callback(e)},t=e.webkitRequestAnimationFrame,e.webkitRequestAnimationFrame=function(e,r){i.callback=e,t(n,r)}),e.mozRequestAnimationFrame&&(o=r.indexOf("rv:"),-1!=r.indexOf("Gecko")&&"2.0"===r.substr(o+3,3)&&(e.mozRequestAnimationFrame=undefined)),e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(t,n){var r=void 0,o=void 0;e.setTimeout(function(){r=+new Date,t(r),o=+new Date,i.timeout=1e3/60-(o-r)},i.timeout)}}(),e.requestNextAnimationFrame(t)}function r(t,n,r){if(e.WindVane)e.WindVane&&e.WindVane.call(t,n,r);else{var o=document.createElement("script");o.src="//laz-g-cdn.alicdn.com/mtb/??lib-windvane/2.1.8/windvane.js",o.setAttribute("type","text/javascript"),document.body.appendChild(o),o.onload=function(){try{e.WindVane.call(t,n,r)}catch(o){}}}}e.__solutionFn={"ready":t,"WindVane":r,"RAF":n}}(window);

  
  
    window.onpageshow = function(event) {
      if (event.persisted) {
        window.location.reload();
      }
    };
  

  
  
    window.__siteCode = '6GBU2-DPKVK-U72D3-XBDGE-TDMNF';