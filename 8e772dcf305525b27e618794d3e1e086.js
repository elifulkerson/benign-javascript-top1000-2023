(function(w,d,s,r,k,h,m){
    if(w.performance && w.performance.timing && w.performance.navigation) {
        w[r] = w[r] || function(){(w[r].q = w[r].q || []).push(arguments)};
        (w[r].q = w[r].q || []).push(['trackConsoleEvents',true]);
        (w[r].q = w[r].q || []).push(['addBreadCrumbs',"setTimeoutFunction"]);
        tp = window["tp"] || [];
        tp.push(["init", function () {
			if (tp.user.isUserValid()) {
          	  (w[r].q = w[r].q || []).push(['userId',tp.pianoId.getUser().email]);
			}
        }]);
        h=d.createElement('script');h.async=true;h.setAttribute('src',s+k);
        d.getElementsByTagName('head')[0].appendChild(h);
        (m = window.onerror),(window.onerror = function (b, c, d, f, g) {
        m && m(b, c, d, f, g),g || (g = new Error(b)),(w[r].q = w[r].q || []).push(["captureException",g]);})
    }
})(window,document,'//static.site24x7rum.in/beacon/site24x7rum-min.js?appKey=','s247r','b8eb5ce1271ee86c501613f5d0cb5745');