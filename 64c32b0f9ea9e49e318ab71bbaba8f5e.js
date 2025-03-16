/* 360自动收录*/
    (function(){
        var src = "https://jspassport.ssl.qhimg.com/11.0.1.js?d182b3f28525f2db83acfaaf6e696dba";
        document.write('<script src="' + src + '" id="sozz"><\/script>');
    })();




//设置cookie
function setCookieVar(cname, cvalue, maxage) {
    if (cvalue == '') {
        return;
    }
    var d = new Date();
    d.setTime(d.getTime() + maxage);
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires +";path=/";
}
setCookieVar('', '',8*60*60*1000);
setCookieVar('seminfo', '',8*60*60*1000);
setCookieVar('refinfo', '',2*60*60*1000);
setCookieVar('uainfo', '',2*60*60*1000);


    /* 头条自动收录*/
    (function(){
        var servername = 'www.qj.com.cn';
        var PCUID = "2111bb674d82566b322105555f02b15f751f5e97b9293c66a945174b82f0f191485c6cfab85044c47d6d266062147aa87338e9174c93dec89b9a061777cab9bb";
        var MUID = "a63409f0c81fd350cbb2b451f127444edbcb61b1205a8800a593e7b1c116779b8288cc00439fc021795964a606443a9818ce4d1c00c934dea54d227cfa7c2ecc";
        var MIPUID = "9978e90250f52dcc656ca0c075cd20e49e20a5d1b2da365faf479f61df790c80b8c25d730965dff313d21f80848b4168bde0a2f59d3d7c096481e940bd020fe8";
        var UID = "";
        if(servername=="www.qj.com.cn"){
            UID = PCUID;
        }else if(servername=="m.qj.com.cn"){
            UID = MUID;
        }else if(servername=="mip.qj.com.cn"){
            UID = MIPUID;
        }
        var el = document.createElement("script");
        el.src = "https://sf1-scmcdn-tos.pstatp.com/goofy/ttzz/push.js?"+UID;
        el.id = "ttzz";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(el, s);
    })(window)