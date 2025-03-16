var wamid = '2641'; /* Wam Account ID  */
  var typ = '3';
  var Wvar=[];
  Wvar.push("domain",location.host);

  (function() {
    var bs = new Image(1, 1);
    bs.src = 'https://dx.frontend.weborama.com/collect?touchpoint=0&url=' + escape(document.location);
  })();

  // include the wamfactory wildcard js
  (function() {
    var w = document.createElement("script");
    w.type = "text/javascript";
    w.src = document.location.protocol + "//cstatic.weborama.fr/js/wam/customers/wamfactory_dpm.wildcard.min.js?rnd="+new Date().getTime();
    w.async = true;
    var body = document.getElementsByTagName('script')[0];
    body.parentNode.insertBefore(w,body);
  })();