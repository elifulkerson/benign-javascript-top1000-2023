var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?c96b65e9975fa39afbd5e90222af5f39";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

/****  灰  ****/
    var thebegintime = '2022-11-30 12:13:00';
	var theendtime = '2022-12-07 18:59:59';
    var begind=new Date(Date.parse(thebegintime .replace(/-/g,"/")));
	var endd=new Date(Date.parse(theendtime .replace(/-/g,"/")));
    var curDate=new Date();
    if(begind <=curDate  && endd>=curDate){
	$.getScript("https://www.rednet.cn/js/grayscale.js");
	document.write('<style> html,body,div.wapper, ul.main_first, ul.main_sec, div.hn_bottom, li.baknone, div.part2017, div.footer, div.menu_navs, div.div_cline_nav{ -webkit-filter: grayscale(100%); -moz-filter: grayscale(100%); -ms-filter: grayscale(100%); -o-filter: grayscale(100%); filter:progid:DXImageTransform.Microsoft.BasicImage(grayscale=1); _filter:none;}img{-webkit-filter: grayscale(100%);-moz-filter: grayscale(100%);-ms-filter: grayscale(100%);-o-filter: grayscale(100%);filter: grayscale(100%);filter: url(/images/gray.svg#grayscale);filter: gray;-webkit-filter: grayscale(1);}</style>');

 window.onload = function(){
	 var navStr = navigator.userAgent.toLowerCase();
     if(navStr.indexOf("msie 10.0")!==-1||navStr.indexOf("rv:11.0")!==-1){
	  	//grayscale(document.body);
        grayscale(document.getElementsByTagName("img"));
	 }
	 }
    }