//<![CDATA[
    !function(){function n(n,t){var r=i(n);return t&&(r=r("instance",t)),r}var r=[],c=0,i=function(t){return function(){var n=c++;return r.push([t,[].slice.call(arguments,0),n,{time:Date.now()}]),i(n)}};n._s=r,this.csa=n}();
    
    if (window.csa) {
      window.csa("Config", {
        "Application": "GoodreadsMonolith",
        "Events.SushiEndpoint": "https://unagi.amazon.com/1/events/com.amazon.csm.csa.prod",
        "Events.Namespace": "csa",
        "CacheDetection.RequestID": "0H18DQ2XF6J1V26ESVM7",
        "ObfuscatedMarketplaceId": "A1PQBFHBHS6YH1"
      });
    
      window.csa("Events")("setEntity", {
        session: { id: "416-9091730-4143282" },
        page: {requestId: "0H18DQ2XF6J1V26ESVM7", meaningful: "interactive"}
      });
    }
    
    var e = document.createElement("script"); e.src = "https://m.media-amazon.com/images/I/41mrkPcyPwL.js"; document.head.appendChild(e);
  //]]>