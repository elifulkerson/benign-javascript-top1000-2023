!function(a,l,b,c,k,s,t,g,A){a.CustomerConnectAnalytics=k,a[k]=a[k]||function(){
  (a[k].q=a[k].q||[]).push(arguments)},g=l.createElement(b),A=l.getElementsByTagName(b)[0],
  g.type="text/javascript",g.async=!0,g.src=c+"?id="+s+"&parentId="+t,A.parentNode.insertBefore(g,A)
  }(window,document,"script","//carbon-cdn.ccgateway.net/script","cca",window.location.hostname, "e8a16a4090");

  window.googletag = window.googletag || {};
  window.googletag.cmd = window.googletag.cmd || [];
  window.googletag.cmd.push(function () {
    if (googletag.pubads().getTargeting('carbon_segment').length === 0) {
      const carbon = JSON.parse(window.localStorage.getItem('ccRealtimeData'));
      googletag.pubads().setTargeting('carbon_segment', carbon ? carbon.audiences.map(function (i) { return i.id; }) : []);
    }
    if (googletag.pubads().getTargeting('cc-iab-class-id').length === 0) {
      const iabIds = JSON.parse(window.localStorage.getItem('ccContextualData'));
      if (iabIds) {
        googletag.pubads().setTargeting('cc-iab-class-id', iabIds);
      }
    }
  });