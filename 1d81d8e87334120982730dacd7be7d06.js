var currUrl = window.location.href;
var flag = currUrl.indexOf("gate/big5");
var ftzw = "tp://big5.news.cn/gate/big5/www.news.cn";
var jtzw = "tp://www.news.cn";
if (flag < 0) { // 文字变繁体
  document.write('<a href="ht' + ftzw + '" target="_blank">中文/繁体</a>');
}
else { // 文字变简体
  document.write('<a href="ht' + jtzw + '" target="_blank">中文/简体</a>');
}