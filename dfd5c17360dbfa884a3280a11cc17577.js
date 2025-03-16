// 统计代码
// var _report = _report || [];
// _report.push(['_setAccount', 'webGYj6Xe3q91jcs3']);

// (function() {
//     var report = document.createElement("script");
//     report.src = "https://analysis.huanqiu.com/report.js?id=858d45e1f01f24b9ae02e83792a3ce3c";
//     var s = document.getElementsByTagName("script")[0];
//     s.parentNode.insertBefore(report, s);
// })();
// 百度推送
(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();

var _BODY = document.querySelector('body');

// 百度统计
var bdhm_tag = document.createElement('script');
bdhm_tag.type = 'text/javascript';
bdhm_tag.async = true;
bdhm_tag.src = 'https://hm.baidu.com/h.js?1fc983b4c305d209e7e05d96e713939f';
_BODY.insertAdjacentElement('beforeend',bdhm_tag)

// cnzz
var cnzz_s_tag = document.createElement('script');
cnzz_s_tag.type = 'text/javascript';
cnzz_s_tag.async = true;
cnzz_s_tag.src = 'https://s22.cnzz.com/z_stat.php?id=1000010102';
var cnzz_ss_tag = document.createElement('span');
cnzz_ss_tag.id = 'cnzz_stat_icon_1000010102';

_BODY.insertAdjacentElement('beforeend',cnzz_ss_tag)
_BODY.insertAdjacentElement('beforeend',cnzz_s_tag)

try{
    document.getElementById('cnzz_stat_icon_1000010102').style.display = 'block'
    document.getElementById('cnzz_stat_icon_1000010102').style.height = 0
    document.getElementById('cnzz_stat_icon_1000010102').style.overflow = 'hidden'
}catch(e){
    console.log(e)
}





