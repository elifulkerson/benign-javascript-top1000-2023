(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
// Setup the FEP global object form the FEP_object
// @TODO - can the format of FEP_object be changed server side?
VAN.assignFep(FEP_object);
var ga_code = 'UA-48457802-19';
var analytics_ga_data = {"dimension1":"Home","dimension2":"Home","dimension27":791504,"dimension61":"pageLoad","dimension95":"homepage","dimension99":0};
var version = 'null';
// Make sure all the GA dimensions are setup and correct
VAN.gaDimensions(ga_code, analytics_ga_data, version, window.FEP);