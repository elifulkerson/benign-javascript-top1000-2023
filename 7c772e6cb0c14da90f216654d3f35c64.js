!(function(){
    var MyBrowser = {
        version: '',
        getBrowser: function(){
            var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
            var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
            var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器 
            var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器 
            var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
            var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
            var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器
            var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器
            if (isIE) {
                var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
                reIE.test(userAgent);
                var fIEVersion = parseFloat(RegExp["$1"]);
                if (fIEVersion == 7) {return "IE7";} 
                else if (fIEVersion == 8) {return "IE8";} 
                else if (fIEVersion == 9) {return "IE9";} 
                else if (fIEVersion == 10) {return "IE10";} 
                else {return "IE6";}
            } 
            if(isIE11) {return "IE11";}
            if (isOpera) {return "Opera";}
            if (isEdge) {return "Edge";}
            if (isFF) {return "FF";}
            if (isSafari) {return "Safari";}
            if (isChrome) {return "Chrome";}
        },
        getBrowserVer: function(n){
            var ua = navigator.userAgent.toLowerCase(),  
                s,  
                name = '',  
                ver = 0;  
            //探测浏览器
            (s = ua.match(/msie ([\d.]+)/)) ? _set("ie", _toFixedVersion(s[1])):  
            (s = ua.match(/firefox\/([\d.]+)/)) ? _set("firefox", _toFixedVersion(s[1])) :  
            (s = ua.match(/chrome\/([\d.]+)/)) ? _set("chrome", _toFixedVersion(s[1])) :  
            (s = ua.match(/opera.([\d.]+)/)) ? _set("opera", _toFixedVersion(s[1])) :  
            (s = ua.match(/version\/([\d.]+).*safari/)) ? _set("safari", _toFixedVersion(s[1])) : 0;  
            
            function _toFixedVersion(ver, floatLength) {  
            ver = ('' + ver).replace(/_/g, '.');  
            floatLength = floatLength || 1;  
            ver = String(ver).split('.');  
            ver = ver[0] + '.' + (ver[1] || '0');  
            ver = Number(ver).toFixed(floatLength);  
            return ver;  
            }  
            function _set(bname, bver) {  
            name = bname;  
            ver = bver;  
            }  
            return (n == 'n' ? name : (n == 'v' ? ver : name + ver));
        },
        init: function init() {
            MyBrowser.version = MyBrowser.getBrowser();
            // 
            if (MyBrowser.version.indexOf('IE') > -1 ){ 
                window.location.href = "https://www.huanqiu.com/browser";
            } else if (
                (window.location.hostname != 'www.huanqiu.com') &&
                (MyBrowser.getBrowserVer('n') === 'chrome') &&
                (MyBrowser.getBrowserVer('v') < 56)
                ) {
                window.location.href = "https://www.huanqiu.com/browser";
            }
        }
    };
    MyBrowser.init();
})();