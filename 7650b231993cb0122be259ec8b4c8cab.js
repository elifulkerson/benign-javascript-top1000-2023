window.helpers = {
            'getCookie': function (k){var v="; "+document.cookie;var p=v.split("; "+k+"=");if(p.length===2)return p.pop().split(";").shift();else return null},
            'setCookie': function (k,v,d){var e='';if(typeof d!=='undefined'){var n=new Date;n.setTime(n.getTime()+864e5*d);e+=';expires="';e+=n.toGMTString();e+='"';}document.cookie=k+'='+v+';path=/' + e},
            'delCookie': function (k){document.cookie=k+'=;path=/;expires=-1'},
            'isNumber': function (n){return !isNaN(n)&&typeof n!==undefined&&n!==null&&n!==''},
            'removeClass': function (e,c){if(document.documentElement.classList){e.classList.remove(c);}else{var r=new RegExp('(^|\\s)'+c+'(\\s|$)', 'g');e.className=e.className.replace(r, c)}},
            'addClass': function (e,c){if(document.documentElement.classList){e.classList.add(c);}else{if(e.className.indexOf(c)<0){if((e.className!==''&&e.className.charAt[e.className.length-1]===' ')||e.className===''){e.className+=c}else{e.className+=' '+c}}}},
            'hasClass': function (e,c){if(document.documentElement.classList){e.classList.contains(c);}else{return e.className.indexOf(c)>=0}},
        };