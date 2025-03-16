var isTrim = function (s) { return !s.replace(/(^\s*)|(\s*$)/g, ""); }; //æ¸é¤ç©ºæ ¼
var getUrlParam = function (name, values) {
    var hash = window.location.hash;
    if (!isTrim(hash)) {
        hash = hash.replace("#", "");
        if (!isTrim(hash)) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = hash.match(reg);
            if (r != null) return unescape(r[2]); return values;
        }
    }
    return values;
}
var QZbgHtm='<div class="QZnav" id="QZnav">';
QZbgHtm+='<div class="topbar">';
QZbgHtm+='<div class="topbar1">';
QZbgHtm+='<div class="QZ-home"><a class="alik ymxk" href="https://www.gamersky.com/" target="_blank">GAMERSKY.COM</a></div>';
QZbgHtm+='<div class="QZ-nav">';
QZbgHtm+='<i>|</i><a class="alik link" href="https://www.gamersky.com/pcgame/" target="_blank">åæºæ¸¸æ</a>';
QZbgHtm+='<i>|</i><a class="alik link" href="https://ol.gamersky.com/" target="_blank">ç½ç»æ¸¸æ</a>';
QZbgHtm+='<i>|</i><a class="alik link" href="https://tv.gamersky.com/" target="_blank">çµè§æ¸¸æ</a>';
QZbgHtm+='<i>|</i><a class="alik link" href="https://shouyou.gamersky.com/" target="_blank">ææºæ¸¸æ</a>';
QZbgHtm+='<i>|</i><a class="alik link" href="https://acg.gamersky.com/" target="_blank">å¨æ¼«æç©º</a>';
QZbgHtm+='<i>|</i><a class="alik link" href="http://club.gamersky.com/" target="_blank">æ¸¸æ°ç¤¾åº</a>';
QZbgHtm+='</div>';
QZbgHtm+='</div>';
QZbgHtm+='<div class="topbar2">';
QZbgHtm+='<div class="QZ-links">';
QZbgHtm+='<span class="navtt">';
QZbgHtm+='<p class="alik app">ææºå®¢æ·ç«¯</p>';
QZbgHtm+='<div class="topbar-menu app">';
QZbgHtm+='<ul class="topbar-appul">';
QZbgHtm+='<li class="con-l">';
QZbgHtm+='<a class="applogo" href="https://a.gamersky.com/index.html?3&3" target="_blank"></a>';
QZbgHtm+='<h3><a href="https://a.gamersky.com/index.html?3&3" target="_blank">æ¸¸æ°æç©ºAPP</a></h3>';
QZbgHtm+='<div class="txt">éæ¶éå°ï¼è·åææ°æ¸¸æèµè®¯æ»ç¥</div>';
QZbgHtm+='<div class="lik">';
QZbgHtm+='<a href="https://at.umeng.com/WT15jC" tit="0jaObe" target="_blank" data-itemid="995690" class="countHit countHitSql">Androidçä¸è½½</a>';
QZbgHtm+='<i>|</i>';
QZbgHtm+='<a href="https://at.umeng.com/mqO5zq" tit="D419PD" target="_blank" data-itemid="995690" class="countHit countHitSql">iOSçä¸è½½</a>';
QZbgHtm+='</div></li><li class="con-r"><img src="//image.gamersky.com/webimg15/a/33/code110x110_homenav.png" /></li>';
QZbgHtm+='</ul>';
QZbgHtm+='</div>';
QZbgHtm+='</span>';
QZbgHtm+='<i>|</i>';
QZbgHtm+='<span class="navtt">';
QZbgHtm+='<p class="alik">ç½ç«å¯¼èª</p>';
QZbgHtm+='<div class="topbar-menu url">';
QZbgHtm+='<script src="https://www.gamersky.com/autoinc/allsite/allsite_urlnav_inc.htm"></script>';
QZbgHtm+='</div>';
QZbgHtm+='</span>';
QZbgHtm+='<i>|</i>';
QZbgHtm+='<span class="navtt">';
QZbgHtm+='<a class="alik" href="https://ku.gamersky.com/release/" target="_blank">ææ°åæºæ¸¸æ</a>';
QZbgHtm+='</span>';
QZbgHtm+='<i>|</i>';
QZbgHtm+='<span class="navtt">';
QZbgHtm+='<a class="alik tongzhi" href="javascript:;">éç¥</a>';
QZbgHtm+='</span>';
QZbgHtm+='<i>|</i>';
QZbgHtm+='</div>';
QZbgHtm+='<div class="noLogin" id="QZNotLog">';
QZbgHtm+='<a class="alik Login" href="javascript:;">ç»å½</a>';
QZbgHtm+='<a class="alik Reg" href="https://i.gamersky.com/user/register" target="_blank">æ³¨å</a>';
QZbgHtm+='</div>';
QZbgHtm+='<div class="okLogin" id="QZHasLog">';
QZbgHtm+='<a class="alik uname" href="https://i.gamersky.com/home/" target="_blank"><img src="//image.gamersky.com/avatar/original/game/game001.jpg"></a>';
QZbgHtm+='<div class="userLayer" id="QZuserLayer">';
QZbgHtm+='<div class="zx"></div>';
QZbgHtm+='<ul class="topbar-usercon">';
QZbgHtm+='<li class="user1">';
QZbgHtm+='<div class="img"><a href="http://i.gamersky.com/home/" target="_blank"><img src="//image.gamersky.com/avatar/original/game/game001.jpg"></a></div>';
QZbgHtm+='<div class="time">ä¸åå¥½ï¼ç¥æ¨å·¥ä½æå¿«ï¼</div>';
QZbgHtm+='<div class="name"></div>';
QZbgHtm+='<div class="binding">';
QZbgHtm+='<a href="https://i.gamersky.com/user/info/emailbind" class="email" data-tit="é®ç®±" target="_blank" title="ç¹å»ç»å®"></a>';
QZbgHtm+='<a href="https://i.gamersky.com/user/info/mobilebind" class="phone" data-tit="ææº" target="_blank" title="ç¹å»ç»å®"></a>';
QZbgHtm+='<a href="https://i.gamersky.com/user/info/baseconnect/" class="weixin" data-tit="å¾®ä¿¡" target="_blank" title="ç¹å»ç»å®"></a>';
QZbgHtm+='<a href="https://i.gamersky.com/user/info/baseconnect/" class="qq" data-tit="QQ" target="_blank" title="ç¹å»ç»å®"></a>';
<!-- QZbgHtm+='<a href="https://i.gamersky.com/user/info/baseconnect/" class="sina" data-tit="æ°æµª" target="_blank" title="ç¹å»ç»å®"></a>'; -->
QZbgHtm+='</div>';
QZbgHtm+='</li>';
QZbgHtm+='<li class="user2">';
QZbgHtm+='<a class="jb" href="https://i.gamersky.com/store" target="_blank"><i></i><p>éå¸åå</p></a>';
QZbgHtm+='<a class="zl" href="https://i.gamersky.com/author" target="_blank"><i></i><p>åä½ä¸­å¿</p></a>';
QZbgHtm+='</li>';
QZbgHtm+='<li class="user3">';
QZbgHtm+='<div class="link"><a href="https://i.gamersky.com/user/info/modifyinfo" target="_blank">ä¿®æ¹èµæ</a> | <a href="https://i.gamersky.com/user/info/password" target="_blank">ä¿®æ¹å¯ç </a></div>';
QZbgHtm+='<div class="ExitSign"><a href="javascript:;" id="QZsign">éåº</a></div>';
QZbgHtm+='</li>';
QZbgHtm+='</ul>';
QZbgHtm+='</div></div></div></div></div>';

var QZbgHtm1 ='<div class="QZshade"></div>';
var QZbgHtm2 ='<div class="QZlogin">';
QZbgHtm2+='<a class="QZ-close" href="javascript:;">Ã</a>';
QZbgHtm2+=' <div class="QZ-button"><span class="QZ-sms QZ-active">ç­ä¿¡ç»å½</span><span class="QZ-password">å¯ç ç»å½</span></div>';
QZbgHtm2+=' <div class="sms-login"><div class="QZ-input inp-phone"><input name="userNumber" type="text" id="userNumber" maxlength="35" placeholder="è¯·è¾å¥ææºå·" class="cur"></div><div class="QZ-input code"><input name="code" type="code" id="QZcode" maxlength="35" placeholder="è¯·è¾å¥éªè¯ç "class="cur"> <button id="code-btn" class="code-btn">è·åéªè¯ç </button></div><div id="mpanel2"></div><div class="QZ-btn"><a id="QZsmsbtn" href="javascript:;">ç» å½ / æ³¨ å</a></div><div class="QZ-chk"><label for="QZcookie"><input type="checkbox" name="cookie" id="QZcookie" checked="checked">ä¸æ¬¡èªå¨ç»å½</label></div><div class="QZ-chk"><span>ç»å½å³ä»£è¡¨åæ<a href="//i.gamersky.com/user/agreement/">ãæ¸¸æ°æç©ºæå¡æ¡æ¬¾ä¸éç§æ¡æ¬¾ã</a></span></div></div>';
QZbgHtm2+=' <div class="password-login"><div class="QZ-input"><input name="userName" type="text" id="QZuserName" maxlength="35" placeholder="è¯·è¾å¥é®ç®±/ç¨æ·å" class="cur"></div> <div class="QZ-input code"><input name="password" type="password" id="QZpassword" maxlength="35" placeholder="è¯·è¾å¥å¯ç " class="cur"><a href="https://i.gamersky.com/user/getpassword" target="_blank" class="QZ-link forgetPaw">å¿è®°å¯ç </a> </div> <div class="QZ-btn"><a id="QZbtn" href="javascript:;">ç» å½</a></div><div class="QZ-chk"><label for="QZcookie"><input type="checkbox" name="cookie" id="QZcookie" checked="checked">ä¸æ¬¡èªå¨ç»å½</label><a class="QZ-reg" href="https://i.gamersky.com/user/register" target="_blank">ç«å³æ³¨å</a></div> <div class="QZ-chk"><span>ç»å½å³ä»£è¡¨åæ<a href="//i.gamersky.com/user/agreement/">ãæ¸¸æ°æç©ºæå¡æ¡æ¬¾ä¸éç§æ¡æ¬¾ã</a></span></div></div>';

QZbgHtm2+=' <fieldset><legend></legend></fieldset>';
QZbgHtm2+='<div class="QZ-con"> <a href="javascript:;" id="QZweixinLogin"></a><a href="javascript:;" id="QZqqLogin"></a></div>';
QZbgHtm2+='</div>';


if(getUrlParam("p",0)<=0){
  document.write(QZbgHtm);
}
document.write(QZbgHtm1);
document.write(QZbgHtm2);
document.write('<script src="//j.gamersky.com/g/QZnav_n.js"></script>');
document.write('<script src="//j.gamersky.com/g/paho-mqtt.js"></script>');
document.write('<script src="//j.gamersky.com/g/login/js/crypto-js.js"></script>');
document.write('<script src="//j.gamersky.com/g/login/js/ase.js"></script>');
document.write('<script src="//j.gamersky.com/g/login/js/verify.js?20220803"></script>');
document.write('<link rel="stylesheet" href="//j.gamersky.com/g/login/css/verify.css"></link>');