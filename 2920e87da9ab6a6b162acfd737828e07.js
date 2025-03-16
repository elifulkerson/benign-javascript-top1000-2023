/*! For license information please see client.min.js.LICENSE.txt */
(function(){var __webpack_modules__={1284:function(n,t,e){var i;!function(r,o){"use strict";var a="function",u="undefined",c="object",s="string",f="model",l="name",d="type",h="vendor",v="version",p="architecture",g="console",m="mobile",_="tablet",w="smarttv",y="wearable",b="embedded",E="Amazon",I="Apple",A="ASUS",T="BlackBerry",S="Firefox",k="Google",R="Huawei",N="LG",D="Microsoft",C="Motorola",O="Opera",x="Samsung",P="Sharp",M="Sony",L="Xiaomi",V="Zebra",F="Facebook",U=function(n){for(var t={},e=0;e<n.length;e++)t[n[e].toUpperCase()]=n[e];return t},z=function(n,t){return typeof n===s&&-1!==j(t).indexOf(j(n))},j=function(n){return n.toLowerCase()},q=function(n,t){if(typeof n===s)return n=n.replace(/^\s\s*/,""),typeof t===u?n:n.substring(0,350)},G=function(n,t){for(var e,i,r,u,s,f,l=0;l<t.length&&!s;){var d=t[l],h=t[l+1];for(e=i=0;e<d.length&&!s&&d[e];)if(s=d[e++].exec(n))for(r=0;r<h.length;r++)f=s[++i],typeof(u=h[r])===c&&u.length>0?2===u.length?typeof u[1]==a?this[u[0]]=u[1].call(this,f):this[u[0]]=u[1]:3===u.length?typeof u[1]!==a||u[1].exec&&u[1].test?this[u[0]]=f?f.replace(u[1],u[2]):o:this[u[0]]=f?u[1].call(this,f,u[2]):o:4===u.length&&(this[u[0]]=f?u[3].call(this,f.replace(u[1],u[2])):o):this[u]=f||o;l+=2}},B=function(n,t){for(var e in t)if(typeof t[e]===c&&t[e].length>0){for(var i=0;i<t[e].length;i++)if(z(t[e][i],n))return"?"===e?o:e}else if(z(t[e],n))return"?"===e?o:e;return n},H={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},Y={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[v,[l,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[v,[l,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[l,v],[/opios[\/ ]+([\w\.]+)/i],[v,[l,"Opera Mini"]],[/\bopr\/([\w\.]+)/i],[v,[l,O]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[l,v],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[v,[l,"UCBrowser"]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[v,[l,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[v,[l,"WeChat"]],[/konqueror\/([\w\.]+)/i],[v,[l,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[v,[l,"IE"]],[/yabrowser\/([\w\.]+)/i],[v,[l,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[l,/(.+)/,"$1 Secure Browser"],v],[/\bfocus\/([\w\.]+)/i],[v,[l,"Firefox Focus"]],[/\bopt\/([\w\.]+)/i],[v,[l,"Opera Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[v,[l,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[v,[l,"Dolphin"]],[/coast\/([\w\.]+)/i],[v,[l,"Opera Coast"]],[/miuibrowser\/([\w\.]+)/i],[v,[l,"MIUI Browser"]],[/fxios\/([-\w\.]+)/i],[v,[l,S]],[/\bqihu|(qi?ho?o?|360)browser/i],[[l,"360 Browser"]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[l,/(.+)/,"$1 Browser"],v],[/(comodo_dragon)\/([\w\.]+)/i],[[l,/_/g," "],v],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[l,v],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[l],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[l,F],v],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[l,v],[/\bgsa\/([\w\.]+) .*safari\//i],[v,[l,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[v,[l,"Chrome Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[l,"Chrome WebView"],v],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[v,[l,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[l,v],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[v,[l,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[v,l],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[l,[v,B,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[l,v],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[l,"Netscape"],v],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[v,[l,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[l,v],[/(cobalt)\/([\w\.]+)/i],[l,[v,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[p,"amd64"]],[/(ia32(?=;))/i],[[p,j]],[/((?:i[346]|x)86)[;\)]/i],[[p,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[p,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[p,"armhf"]],[/windows (ce|mobile); ppc;/i],[[p,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[p,/ower/,"",j]],[/(sun4\w)[;\)]/i],[[p,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[p,j]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[f,[h,x],[d,_]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[f,[h,x],[d,m]],[/\((ip(?:hone|od)[\w ]*);/i],[f,[h,I],[d,m]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[f,[h,I],[d,_]],[/(macintosh);/i],[f,[h,I]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[f,[h,P],[d,m]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[f,[h,R],[d,_]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[f,[h,R],[d,m]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[f,/_/g," "],[h,L],[d,m]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[f,/_/g," "],[h,L],[d,_]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[f,[h,"OPPO"],[d,m]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[f,[h,"Vivo"],[d,m]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[f,[h,"Realme"],[d,m]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[f,[h,C],[d,m]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[f,[h,C],[d,_]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[f,[h,N],[d,_]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[f,[h,N],[d,m]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[f,[h,"Lenovo"],[d,_]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[f,/_/g," "],[h,"Nokia"],[d,m]],[/(pixel c)\b/i],[f,[h,k],[d,_]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[f,[h,k],[d,m]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[f,[h,M],[d,m]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[f,"Xperia Tablet"],[h,M],[d,_]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[f,[h,"OnePlus"],[d,m]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[f,[h,E],[d,_]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[f,/(.+)/g,"Fire Phone $1"],[h,E],[d,m]],[/(playbook);[-\w\),; ]+(rim)/i],[f,h,[d,_]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[f,[h,T],[d,m]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[f,[h,A],[d,_]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[f,[h,A],[d,m]],[/(nexus 9)/i],[f,[h,"HTC"],[d,_]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[h,[f,/_/g," "],[d,m]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[f,[h,"Acer"],[d,_]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[f,[h,"Meizu"],[d,m]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[h,f,[d,m]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[h,f,[d,_]],[/(surface duo)/i],[f,[h,D],[d,_]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[f,[h,"Fairphone"],[d,m]],[/(u304aa)/i],[f,[h,"AT&T"],[d,m]],[/\bsie-(\w*)/i],[f,[h,"Siemens"],[d,m]],[/\b(rct\w+) b/i],[f,[h,"RCA"],[d,_]],[/\b(venue[\d ]{2,7}) b/i],[f,[h,"Dell"],[d,_]],[/\b(q(?:mv|ta)\w+) b/i],[f,[h,"Verizon"],[d,_]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[f,[h,"Barnes & Noble"],[d,_]],[/\b(tm\d{3}\w+) b/i],[f,[h,"NuVision"],[d,_]],[/\b(k88) b/i],[f,[h,"ZTE"],[d,_]],[/\b(nx\d{3}j) b/i],[f,[h,"ZTE"],[d,m]],[/\b(gen\d{3}) b.+49h/i],[f,[h,"Swiss"],[d,m]],[/\b(zur\d{3}) b/i],[f,[h,"Swiss"],[d,_]],[/\b((zeki)?tb.*\b) b/i],[f,[h,"Zeki"],[d,_]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[h,"Dragon Touch"],f,[d,_]],[/\b(ns-?\w{0,9}) b/i],[f,[h,"Insignia"],[d,_]],[/\b((nxa|next)-?\w{0,9}) b/i],[f,[h,"NextBook"],[d,_]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[h,"Voice"],f,[d,m]],[/\b(lvtel\-)?(v1[12]) b/i],[[h,"LvTel"],f,[d,m]],[/\b(ph-1) /i],[f,[h,"Essential"],[d,m]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[f,[h,"Envizen"],[d,_]],[/\b(trio[-\w\. ]+) b/i],[f,[h,"MachSpeed"],[d,_]],[/\btu_(1491) b/i],[f,[h,"Rotor"],[d,_]],[/(shield[\w ]+) b/i],[f,[h,"Nvidia"],[d,_]],[/(sprint) (\w+)/i],[h,f,[d,m]],[/(kin\.[onetw]{3})/i],[[f,/\./g," "],[h,D],[d,m]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[f,[h,V],[d,_]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[f,[h,V],[d,m]],[/smart-tv.+(samsung)/i],[h,[d,w]],[/hbbtv.+maple;(\d+)/i],[[f,/^/,"SmartTV"],[h,x],[d,w]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[h,N],[d,w]],[/(apple) ?tv/i],[h,[f,"Apple TV"],[d,w]],[/crkey/i],[[f,"Chromecast"],[h,k],[d,w]],[/droid.+aft(\w)( bui|\))/i],[f,[h,E],[d,w]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[f,[h,P],[d,w]],[/(bravia[\w ]+)( bui|\))/i],[f,[h,M],[d,w]],[/(mitv-\w{5}) bui/i],[f,[h,L],[d,w]],[/Hbbtv.*(technisat) (.*);/i],[h,f,[d,w]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[h,q],[f,q],[d,w]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[d,w]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[h,f,[d,g]],[/droid.+; (shield) bui/i],[f,[h,"Nvidia"],[d,g]],[/(playstation [345portablevi]+)/i],[f,[h,M],[d,g]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[f,[h,D],[d,g]],[/((pebble))app/i],[h,f,[d,y]],[/droid.+; (glass) \d/i],[f,[h,k],[d,y]],[/droid.+; (wt63?0{2,3})\)/i],[f,[h,V],[d,y]],[/(quest( 2| pro)?)/i],[f,[h,F],[d,y]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[h,[d,b]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[f,[d,m]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[f,[d,_]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[d,_]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[d,m]],[/(android[-\w\. ]{0,9});.+buil/i],[f,[h,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[v,[l,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[v,[l,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[l,v],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[v,l]],os:[[/microsoft (windows) (vista|xp)/i],[l,v],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[l,[v,B,H]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[l,"Windows"],[v,B,H]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[v,/_/g,"."],[l,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[l,"Mac OS"],[v,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[v,l],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[l,v],[/\(bb(10);/i],[v,[l,T]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[v,[l,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[v,[l,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[v,[l,"webOS"]],[/crkey\/([\d\.]+)/i],[v,[l,"Chromecast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[l,"Chromium OS"],v],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[l,v],[/(sunos) ?([\w\.\d]*)/i],[[l,"Solaris"],v],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[l,v]]},K=function(n,t){if(typeof n===c&&(t=n,n=o),!(this instanceof K))return new K(n,t).getResult();var e=n||(typeof r!==u&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:""),i=typeof r!==u&&r.navigator&&r.navigator.userAgentData?r.navigator.userAgentData:o,a=t?function(n,t){var e={};for(var i in n)t[i]&&t[i].length%2==0?e[i]=t[i].concat(n[i]):e[i]=n[i];return e}(Y,t):Y;return this.getBrowser=function(){var n,t={};return t.name=o,t.version=o,G.call(t,e,a.browser),t.major=typeof(n=t.version)===s?n.replace(/[^\d\.]/g,"").split(".")[0]:o,t},this.getCPU=function(){var n={};return n.architecture=o,G.call(n,e,a.cpu),n},this.getDevice=function(){var n={};return n.vendor=o,n.model=o,n.type=o,G.call(n,e,a.device),!n.type&&i&&i.mobile&&(n.type=m),n},this.getEngine=function(){var n={};return n.name=o,n.version=o,G.call(n,e,a.engine),n},this.getOS=function(){var n={};return n.name=o,n.version=o,G.call(n,e,a.os),!n.name&&i&&"Unknown"!=i.platform&&(n.name=i.platform.replace(/chrome/i,"Chromium").replace(/mac/i,"Mac ")),n},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return e},this.setUA=function(n){return e=typeof n===s&&n.length>350?q(n,350):n,this},this.setUA(e),this};K.VERSION="0.7.33",K.BROWSER=U([l,v,"major"]),K.CPU=U([p]),K.DEVICE=U([f,h,d,g,m,w,_,y,b]),K.ENGINE=K.OS=U([l,v]),typeof t!==u?(n.exports&&(t=n.exports=K),t.UAParser=K):e.amdO?(i=function(){return K}.call(t,e,t,n))===o||(n.exports=i):typeof r!==u&&(r.UAParser=K)}("object"==typeof window?window:this)},3491:function(n,t,e){var i=e(2047)(),r=e(6417);n.exports=function(n,t){function e(t){if(!(this instanceof e))return new e(t);try{throw new Error(t)}catch(o){o.name=n,this.stack=o.stack}i&&this.stack&&(this.stack=r(this.stack,n,t)),this.message=t||"",this.name=n}return e.prototype=new(t||Error),e.prototype.constructor=e,e.prototype.inspect=function(){return this.message?"["+n+": "+this.message+"]":"["+n+"]"},e.prototype.name=n,e}},6417:function(n){"use strict";n.exports=function(n,t,e){var i=t;return e&&(i+=": "+e),n=i+n.slice(n.indexOf("\n"))}},2047:function(n){"use strict";n.exports=function(){var n=new Error("yep");return!!n.stack&&"Error: yep\n"===n.stack.substr(0,11)}},44:function(n,t,e){n.exports=function(){"use strict";function n(n){return"function"==typeof n||"object"==typeof n&&null!==n}function t(n){return"function"==typeof n}undefined;var i=Array.isArray?Array.isArray:function(n){return"[object Array]"===Object.prototype.toString.call(n)},r=0,o=undefined,a=undefined,u=function(n,t){y[r]=n,y[r+1]=t,2===(r+=2)&&(a?a(b):I())};function c(n){a=n}function s(n){u=n}var f="undefined"!=typeof window?window:undefined,l=f||{},d=l.MutationObserver||l.WebKitMutationObserver,h="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),v="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function p(){return function(){return process.nextTick(b)}}function g(){return void 0!==o?function(){o(b)}:w()}function m(){var n=0,t=new d(b),e=document.createTextNode("");return t.observe(e,{characterData:!0}),function(){e.data=n=++n%2}}function _(){var n=new MessageChannel;return n.port1.onmessage=b,function(){return n.port2.postMessage(0)}}function w(){var n=setTimeout;return function(){return n(b,1)}}var y=new Array(1e3);function b(){for(var n=0;n<r;n+=2)(0,y[n])(y[n+1]),y[n]=undefined,y[n+1]=undefined;r=0}function E(){try{undefined;var n=e(7339);return o=n.runOnLoop||n.runOnContext,g()}catch(t){return w()}}var I=undefined;function A(n,t){var e=arguments,i=this,r=new this.constructor(k);r[S]===undefined&&Q(r);var o,a=i._state;return a?(o=e[a-1],u((function(){return $(a,r,o,i._result)}))):G(i,r,n,t),r}function T(n){var t=this;if(n&&"object"==typeof n&&n.constructor===t)return n;var e=new t(k);return U(e,n),e}I=h?p():d?m():v?_():f===undefined?E():w();var S=Math.random().toString(36).substring(16);function k(){}var R=void 0,N=1,D=2,C=new H;function O(){return new TypeError("You cannot resolve a promise with itself")}function x(){return new TypeError("A promises callback cannot return that same promise.")}function P(n){try{return n.then}catch(t){return C.error=t,C}}function M(n,t,e,i){try{n.call(t,e,i)}catch(r){return r}}function L(n,t,e){u((function(n){var i=!1,r=M(e,t,(function(e){i||(i=!0,t!==e?U(n,e):j(n,e))}),(function(t){i||(i=!0,q(n,t))}),"Settle: "+(n._label||" unknown promise"));!i&&r&&(i=!0,q(n,r))}),n)}function V(n,t){t._state===N?j(n,t._result):t._state===D?q(n,t._result):G(t,undefined,(function(t){return U(n,t)}),(function(t){return q(n,t)}))}function F(n,e,i){e.constructor===n.constructor&&i===A&&e.constructor.resolve===T?V(n,e):i===C?(q(n,C.error),C.error=null):i===undefined?j(n,e):t(i)?L(n,e,i):j(n,e)}function U(t,e){t===e?q(t,O()):n(e)?F(t,e,P(e)):j(t,e)}function z(n){n._onerror&&n._onerror(n._result),B(n)}function j(n,t){n._state===R&&(n._result=t,n._state=N,0!==n._subscribers.length&&u(B,n))}function q(n,t){n._state===R&&(n._state=D,n._result=t,u(z,n))}function G(n,t,e,i){var r=n._subscribers,o=r.length;n._onerror=null,r[o]=t,r[o+N]=e,r[o+D]=i,0===o&&n._state&&u(B,n)}function B(n){var t=n._subscribers,e=n._state;if(0!==t.length){for(var i=undefined,r=undefined,o=n._result,a=0;a<t.length;a+=3)i=t[a],r=t[a+e],i?$(e,i,r,o):r(o);n._subscribers.length=0}}function H(){this.error=null}var Y=new H;function K(n,t){try{return n(t)}catch(e){return Y.error=e,Y}}function $(n,e,i,r){var o=t(i),a=undefined,u=undefined,c=undefined,s=undefined;if(o){if((a=K(i,r))===Y?(s=!0,u=a.error,a.error=null):c=!0,e===a)return void q(e,x())}else a=r,c=!0;e._state!==R||(o&&c?U(e,a):s?q(e,u):n===N?j(e,a):n===D&&q(e,a))}function W(n,t){try{t((function(t){U(n,t)}),(function(t){q(n,t)}))}catch(e){q(n,e)}}var X=0;function J(){return X++}function Q(n){n[S]=X++,n._state=undefined,n._result=undefined,n._subscribers=[]}function Z(n,t){this._instanceConstructor=n,this.promise=new n(k),this.promise[S]||Q(this.promise),i(t)?(this._input=t,this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?j(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&j(this.promise,this._result))):q(this.promise,nn())}function nn(){return new Error("Array Methods must be provided an Array")}function tn(n){return new Z(this,n).promise}function en(n){var t=this;return i(n)?new t((function(e,i){for(var r=n.length,o=0;o<r;o++)t.resolve(n[o]).then(e,i)})):new t((function(n,t){return t(new TypeError("You must pass an array to race."))}))}function rn(n){var t=new this(k);return q(t,n),t}function on(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function an(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function un(n){this[S]=J(),this._result=this._state=undefined,this._subscribers=[],k!==n&&("function"!=typeof n&&on(),this instanceof un?W(this,n):an())}function cn(){var n=undefined;if("undefined"!=typeof e.g)n=e.g;else if("undefined"!=typeof self)n=self;else try{n=Function("return this")()}catch(r){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=n.Promise;if(t){var i=null;try{i=Object.prototype.toString.call(t.resolve())}catch(r){}if("[object Promise]"===i&&!t.cast)return}n.Promise=un}return Z.prototype._enumerate=function(){for(var n=this.length,t=this._input,e=0;this._state===R&&e<n;e++)this._eachEntry(t[e],e)},Z.prototype._eachEntry=function(n,t){var e=this._instanceConstructor,i=e.resolve;if(i===T){var r=P(n);if(r===A&&n._state!==R)this._settledAt(n._state,t,n._result);else if("function"!=typeof r)this._remaining--,this._result[t]=n;else if(e===un){var o=new e(k);F(o,n,r),this._willSettleAt(o,t)}else this._willSettleAt(new e((function(t){return t(n)})),t)}else this._willSettleAt(i(n),t)},Z.prototype._settledAt=function(n,t,e){var i=this.promise;i._state===R&&(this._remaining--,n===D?q(i,e):this._result[t]=e),0===this._remaining&&j(i,this._result)},Z.prototype._willSettleAt=function(n,t){var e=this;G(n,undefined,(function(n){return e._settledAt(N,t,n)}),(function(n){return e._settledAt(D,t,n)}))},un.all=tn,un.race=en,un.resolve=T,un.reject=rn,un._setScheduler=c,un._setAsap=s,un._asap=u,un.prototype={constructor:un,then:A,"catch":function(n){return this.then(null,n)}},un.polyfill=cn,un.Promise=un,un}()},2624:function(n){"use strict";n.exports=function(n){var t,e={};if(!(n instanceof Object)||Array.isArray(n))throw new Error("keyMirror(...): Argument must be an object.");for(t in n)n.hasOwnProperty(t)&&(e[t]=t);return e}},6855:function(n){"use strict";n.exports=function(n,t,e,i){Object.defineProperty(n,t,{get:function(){var n=e.call(this);return Object.defineProperty(this,t,{value:n,enumerable:!!i,writable:!0}),n},set:function(n){return Object.defineProperty(this,t,{value:n,enumerable:!!i,writable:!0}),n},enumerable:!!i,configurable:!0})}},7190:function(n){"use strict";var t=Element.prototype,e=t.matches||t.matchesSelector||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector;n.exports=function(n,t){if(e)return e.call(n,t);for(var i=n.parentNode.querySelectorAll(t),r=0;r<i.length;r++)if(i[r]==n)return!0;return!1}},7446:function(n){!function(){function t(n,t){var e,i,r,o,a,u,c,s;for(e=3&n.length,i=n.length-e,r=t,a=3432918353,u=461845907,s=0;s<i;)c=255&n.charCodeAt(s)|(255&n.charCodeAt(++s))<<8|(255&n.charCodeAt(++s))<<16|(255&n.charCodeAt(++s))<<24,++s,r=27492+(65535&(o=5*(65535&(r=(r^=c=(65535&(c=(c=(65535&c)*a+(((c>>>16)*a&65535)<<16)&4294967295)<<15|c>>>17))*u+(((c>>>16)*u&65535)<<16)&4294967295)<<13|r>>>19))+((5*(r>>>16)&65535)<<16)&4294967295))+((58964+(o>>>16)&65535)<<16);switch(c=0,e){case 3:c^=(255&n.charCodeAt(s+2))<<16;case 2:c^=(255&n.charCodeAt(s+1))<<8;case 1:r^=c=(65535&(c=(c=(65535&(c^=255&n.charCodeAt(s)))*a+(((c>>>16)*a&65535)<<16)&4294967295)<<15|c>>>17))*u+(((c>>>16)*u&65535)<<16)&4294967295}return r^=n.length,r=2246822507*(65535&(r^=r>>>16))+((2246822507*(r>>>16)&65535)<<16)&4294967295,r=3266489909*(65535&(r^=r>>>13))+((3266489909*(r>>>16)&65535)<<16)&4294967295,(r^=r>>>16)>>>0}var e=t;e.v2=function(n,t){for(var e,i=n.length,r=t^i,o=0;i>=4;)e=1540483477*(65535&(e=255&n.charCodeAt(o)|(255&n.charCodeAt(++o))<<8|(255&n.charCodeAt(++o))<<16|(255&n.charCodeAt(++o))<<24))+((1540483477*(e>>>16)&65535)<<16),r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16)^(e=1540483477*(65535&(e^=e>>>24))+((1540483477*(e>>>16)&65535)<<16)),i-=4,++o;switch(i){case 3:r^=(255&n.charCodeAt(o+2))<<16;case 2:r^=(255&n.charCodeAt(o+1))<<8;case 1:r=1540483477*(65535&(r^=255&n.charCodeAt(o)))+((1540483477*(r>>>16)&65535)<<16)}return r=1540483477*(65535&(r^=r>>>13))+((1540483477*(r>>>16)&65535)<<16),(r^=r>>>15)>>>0},e.v3=t,n.exports=e}()},6861:function(n,t,e){n=e.nmd(n),function(){var i,r="Expected a function",o="__lodash_hash_undefined__",a=9007199254740991,u="[object Arguments]",c="[object Array]",s="[object Boolean]",f="[object Date]",l="[object Error]",d="[object Function]",h="[object GeneratorFunction]",v="[object Map]",p="[object Number]",g="[object Object]",m="[object RegExp]",_="[object Set]",w="[object String]",y="[object Symbol]",b="[object WeakMap]",E="[object ArrayBuffer]",I="[object Float32Array]",A="[object Float64Array]",T="[object Int8Array]",S="[object Int16Array]",k="[object Int32Array]",R="[object Uint8Array]",N="[object Uint8ClampedArray]",D="[object Uint16Array]",C="[object Uint32Array]",O=/[&<>"'`]/g,x=RegExp(O.source),P=/\w*$/,M=/^\[object .+?Constructor\]$/,L=/^(?:0|[1-9]\d*)$/,V={};V[I]=V[A]=V[T]=V[S]=V[k]=V[R]=V[N]=V[D]=V[C]=!0,V[u]=V[c]=V[E]=V[s]=V[f]=V[l]=V[d]=V[v]=V[p]=V[g]=V[m]=V[_]=V[w]=V[b]=!1;var F={};F[u]=F[c]=F[E]=F[s]=F[f]=F[I]=F[A]=F[T]=F[S]=F[k]=F[v]=F[p]=F[g]=F[m]=F[_]=F[w]=F[y]=F[R]=F[N]=F[D]=F[C]=!0,F[l]=F[d]=F[b]=!1;var U={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},z={"function":!0,object:!0},j=z[typeof t]&&t&&!t.nodeType?t:i,q=z.object&&n&&!n.nodeType?n:i,G=q&&q.exports===j?j:i,B=on(j&&q&&"object"==typeof e.g&&e.g),H=on(z[typeof self]&&self),Y=on(z[typeof window]&&window),K=on(z[typeof this]&&this),$=B||Y!==(K&&K.window)&&Y||H||K||Function("return this")();function W(n,t){return n.set(t[0],t[1]),n}function X(n,t){return n.add(t),n}function J(n,t){return nn(It(n),Ae)}function Q(n,t){return!!n.length&&en(n,t,0)>-1}function Z(n,t,e){for(var i=-1,r=n.length;++i<r;)if(e(t,n[i]))return!0;return!1}function nn(n,t){for(var e=-1,i=t.length,r=n.length;++e<i;)n[r+e]=t[e];return n}function tn(n,t,e){for(var r=-1,o=n.length;++r<o;){var a=n[r],u=t(a);if(null!=u&&(c===i?u==u:e(u,c)))var c=u,s=a}return s}function en(n,t,e){if(t!=t)return function(n,t,e){var i=n.length,r=t+(e?0:-1);for(;e?r--:++r<i;){var o=n[r];if(o!=o)return r}return-1}(n,e);for(var i=e-1,r=n.length;++i<r;)if(n[i]===t)return i;return-1}function rn(n,t,e,i,r){return r(n,(function(n,r,o){e=i?(i=!1,n):t(e,n,r,o)})),e}function on(n){return n&&n.Object===Object?n:null}function an(n){return U[n]}function un(n){var t=!1;if(null!=n&&"function"!=typeof n.toString)try{t=!!(n+"")}catch(e){}return t}function cn(n,t){return n="number"==typeof n||L.test(n)?+n:-1,t=null==t?a:t,n>-1&&n%1==0&&n<t}var sn=Array.prototype,fn=Object.prototype,ln=Function.prototype.toString,dn=fn.hasOwnProperty,hn=0,vn=ln.call(Object),pn=fn.toString,gn=$._,mn=RegExp("^"+ln.call(dn).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),_n=$.Reflect,wn=$.Symbol,yn=$.Uint8Array,bn=_n?_n.enumerate:i,En=Object.getPrototypeOf,In=Object.getOwnPropertySymbols,An=Object.create,Tn=fn.propertyIsEnumerable,Sn=sn.splice,kn=$.isFinite,Rn=Object.keys,Nn=Math.max,Dn=Ot($,"Map"),Cn=Ot($,"Set"),On=Ot($,"WeakMap"),xn=Ot(Object,"create"),Pn=Dn?ln.call(Dn):"",Mn=Cn?ln.call(Cn):"",Ln=On?ln.call(On):"",Vn=wn?wn.prototype:i,Fn=Vn?Vn.valueOf:i;function Un(n){if(ue(n)&&!Zt(n)){if(n instanceof zn)return n;if(dn.call(n,"__wrapped__"))return function(n){var t=new zn(n.u,n.l);return t.m=It(n.m),t}(n)}return new zn(n)}function zn(n,t){this.u=n,this.m=[],this.l=!!t}function jn(){}function qn(n,t){return xn?n[t]!==i:dn.call(n,t)}function Gn(n){var t=-1,e=n?n.length:0;for(this.clear();++t<e;){var i=n[t];this.set(i[0],i[1])}}function Bn(n){var t=-1,e=n?n.length:0;for(this.I=new Gn;++t<e;)this.push(n[t])}function Hn(n,t){var e=n.I;if(Lt(t)){var i=e.I;return("string"==typeof t?i.string:i.hash)[t]===o}return e.has(t)}function Yn(n){var t=-1,e=n?n.length:0;for(this.clear();++t<e;){var i=n[t];this.set(i[0],i[1])}}function Kn(n,t){var e=Xn(n,t);return!(e<0)&&(e==n.length-1?n.pop():Sn.call(n,e,1),!0)}function $n(n,t){var e=Xn(n,t);return e<0?i:n[e][1]}function Wn(n,t){return Xn(n,t)>-1}function Xn(n,t){for(var e=n.length;e--;)if(Xt(n[e][0],t))return e;return-1}function Jn(n,t,e){var i=Xn(n,t);i<0?n.push([t,e]):n[i][1]=e}function Qn(n,t,e,r){return n===i||Xt(n,fn[e])&&!dn.call(r,e)?t:n}function Zn(n,t,e){(e!==i&&!Xt(n[t],e)||"number"==typeof t&&e===i&&!(t in n))&&(n[t]=e)}function nt(n,t,e){var r=n[t];dn.call(n,t)&&Xt(r,e)&&(e!==i||t in n)||(n[t]=e)}function tt(n){return"function"==typeof n?n:Te}function et(n,t,e,r,o,a,c){var l;if(r&&(l=a?r(n,o,a,c):r(n)),l!==i)return l;if(!ae(n))return n;var b=Zt(n);if(b){if(l=function(n){var t=n.length,e=n.constructor(t);t&&"string"==typeof n[0]&&dn.call(n,"index")&&(e.index=n.index,e.input=n.input);return e}(n),!t)return It(n)}else{var O=Pt(n),x=O==d||O==h;if(ie(n))return function(n,t){if(t)return n.slice();var e=new n.constructor(n.length);return n.copy(e),e}(n,t);if(O==g||O==u||x&&!a){if(un(n))return a?n:{};if(l=function(n){return"function"!=typeof n.constructor||Vt(n)?{}:it(En(n))}(x?{}:n),!t)return l=function(n,t){return n&&St(t,we(t),n)}(l,n),e?Rt(n,l):l}else{if(!F[O])return a?n:{};l=function(n,t,e){var i=n.constructor;switch(t){case E:return Tt(n);case s:case f:return new i(+n);case I:case A:case T:case S:case k:case R:case N:case D:case C:return function(n,t){var e=t?Tt(n.buffer):n.buffer;return new n.constructor(e,n.byteOffset,n.length)}(n,e);case v:return function(n){return Gt(function(n){var t=-1,e=Array(n.size);return n.forEach((function(n,i){e[++t]=[i,n]})),e}(n),W,new n.constructor)}(n);case p:case w:return new i(n);case m:return function(n){var t=new n.constructor(n.source,P.exec(n));return t.lastIndex=n.lastIndex,t}(n);case _:return Gt(function(n){var t=-1,e=Array(n.size);return n.forEach((function(n){e[++t]=n})),e}(o=n),X,new o.constructor);case y:return r=n,Fn?Object(Fn.call(r)):{}}var r;var o}(n,O,t)}}c||(c=new Yn);var M=c.get(n);return M||(c.set(n,l),(b?ut:lt)(n,(function(i,o){nt(l,o,et(i,t,e,r,o,n,c))})),e&&!b?Rt(n,l):l)}function it(n){return ae(n)?An(n):{}}function rt(n,t,e){if("function"!=typeof n)throw new TypeError(r);return setTimeout((function(){n.apply(i,e)}),t)}var ot,at,ut=(ot=lt,function(n,t){if(null==n)return n;if(!ne(n))return ot(n,t);for(var e=n.length,i=at?e:-1,r=Object(n);(at?i--:++i<e)&&!1!==t(r[i],i,r););return n});function ct(n,t){var e=[];return ut(n,(function(n,i,r){t(n,i,r)&&e.push(n)})),e}function st(n,t,e,i){i||(i=[]);for(var r=-1,o=n.length;++r<o;){var a=n[r];t>0&&te(a)&&(e||Zt(a)||Qt(a))?t>1?st(a,t-1,e,i):nn(i,a):e||(i[i.length]=a)}return i}var ft=function(n){return function(t,e,i){for(var r=-1,o=Object(t),a=i(t),u=a.length;u--;){var c=a[n?u:++r];if(!1===e(o[c],c,o))break}return t}}();function lt(n,t){return n&&ft(n,t,we)}function dt(n,t){return ct(t,(function(t){return re(n[t])}))}function ht(n,t,e,r,o){return n===t||(null==n||null==t||!ae(n)&&!ue(t)?n!=n&&t!=t:function(n,t,e,r,o,a){var d=Zt(n),h=Zt(t),v=c,_=c;d||(v=(v=pn.call(n))==u?g:v);h||(_=(_=pn.call(t))==u?g:_);var y=v==g&&!un(n),b=_==g&&!un(t),E=v==_;a||(a=[]);var I=jt(a,(function(t){return t[0]===n}));if(I&&I[1])return I[1]==t;if(a.push([n,t]),E&&!y){var A=d||fe(n)?function(n,t,e,r,o,a){var u=-1,c=2&o,s=1&o,f=n.length,l=t.length;if(f!=l&&!(c&&l>f))return!1;var d=!0;for(;++u<f;){var h,v=n[u],p=t[u];if(h!==i){if(h)continue;d=!1;break}if(s){if(!At(t,(function(n){return v===n||e(v,n,r,o,a)}))){d=!1;break}}else if(v!==p&&!e(v,p,r,o,a)){d=!1;break}}return d}(n,t,e,r,o,a):function(n,t,e,i,r,o,a){switch(e){case s:case f:return+n==+t;case l:return n.name==t.name&&n.message==t.message;case p:return n!=+n?t!=+t:n==+t;case m:case w:return n==t+""}return!1}(n,t,v);return a.pop(),A}if(!(2&o)){var T=y&&dn.call(n,"__wrapped__"),S=b&&dn.call(t,"__wrapped__");if(T||S){A=e(T?n.value():n,S?t.value():t,r,o,a);return a.pop(),A}}if(!E)return!1;A=function(n,t,e,r,o,a){var u=2&o,c=we(n),s=c.length,f=we(t).length;if(s!=f&&!u)return!1;var l=s;for(;l--;){var d=c[l];if(!(u?d in t:dn.call(t,d)))return!1}var h=!0,v=u;for(;++l<s;){var p,g=n[d=c[l]],m=t[d];if(!(p===i?g===m||e(g,m,r,o,a):p)){h=!1;break}v||(v="constructor"==d)}if(h&&!v){var _=n.constructor,w=t.constructor;_==w||!("constructor"in n)||!("constructor"in t)||"function"==typeof _&&_ instanceof _&&"function"==typeof w&&w instanceof w||(h=!1)}return h}(n,t,e,r,o,a);return a.pop(),A}(n,t,ht,e,r,o))}function vt(n){var t=typeof n;return"function"==t?n:null==n?Te:("object"==t?mt:bt)(n)}function pt(n){n=null==n?n:Object(n);var t=[];for(var e in n)t.push(e);return t}function gt(n,t){var e=-1,i=ne(n)?Array(n.length):[];return ut(n,(function(n,r,o){i[++e]=t(n,r,o)})),i}function mt(n){var t=we(n);return function(e){var r=t.length;if(null==e)return!r;for(e=Object(e);r--;){var o=t[r];if(!(o in e)||!ht(n[o],e[o],i,3))return!1}return!0}}function _t(n,t,e,r,o){if(n!==t){var a=Zt(t)||fe(t)?i:ye(t);ut(a||t,(function(u,c){if(a&&(u=t[c=u]),ae(u))o||(o=new Yn),function(n,t,e,r,o,a,u){var c=n[e],s=t[e],f=u.get(s);if(f)return void Zn(n,e,f);var l=a?a(c,s,e+"",n,t,u):i,d=l===i;d&&(l=s,Zt(s)||fe(s)?Zt(c)?l=c:te(c)?l=It(c):(d=!1,l=et(s,!a)):function(n){if(!ue(n)||pn.call(n)!=g||un(n))return!1;var t=En(n);if(null===t)return!0;var e=t.constructor;return"function"==typeof e&&e instanceof e&&ln.call(e)==vn}(s)||Qt(s)?Qt(c)?l=St(h=c,ye(h)):!ae(c)||r&&re(c)?(d=!1,l=et(s,!a)):l=c:d=!1);var h;u.set(s,l),d&&o(l,s,r,a,u);u["delete"](s),Zn(n,e,l)}(n,t,c,e,_t,r,o);else{var s=r?r(n[c],u,c+"",n,t,o):i;s===i&&(s=u),Zn(n,c,s)}}))}}function wt(n,t){return n=Object(n),Gt(t,(function(t,e){return e in n&&(t[e]=n[e]),t}),{})}function yt(n,t){var e={};return function(n,t){null==n||ft(n,t,ye)}(n,(function(n,i){t(n,i)&&(e[i]=n)})),e}function bt(n){return function(t){return null==t?i:t[n]}}function Et(n,t,e){var i=-1,r=n.length;t<0&&(t=-t>r?0:r+t),(e=e>r?r:e)<0&&(e+=r),r=t>e?0:e-t>>>0,t>>>=0;for(var o=Array(r);++i<r;)o[i]=n[i+t];return o}function It(n){return Et(n,0,n.length)}function At(n,t){var e;return ut(n,(function(n,i,r){return!(e=t(n,i,r))})),!!e}function Tt(n){var t=new n.constructor(n.byteLength);return new yn(t).set(new yn(n)),t}bn&&!Tn.call({valueOf:1},"valueOf")&&(pt=function(n){return function(n){for(var t,e=[];!(t=n.next()).done;)e.push(t.value);return e}(bn(n))});var St=kt;function kt(n,t,e,i){e||(e={});for(var r=-1,o=t.length;++r<o;){var a=t[r];nt(e,a,i?i(e[a],n[a],a,e,n):n[a])}return e}function Rt(n,t){return St(n,xt(n),t)}function Nt(n){return Wt((function(t,e){var r=-1,o=e.length,a=o>1?e[o-1]:i;for(a="function"==typeof a?(o--,a):i,t=Object(t);++r<o;){var u=e[r];u&&n(t,u,r,a)}return t}))}function Dt(n,t,e,i){if("function"!=typeof n)throw new TypeError(r);var o=1&t,a=function(n){return function(){var t=arguments,e=it(n.prototype),i=n.apply(e,t);return ae(i)?i:e}}(n);return function u(){for(var t=-1,r=arguments.length,c=-1,s=i.length,f=Array(s+r),l=this&&this!==$&&this instanceof u?a:n;++c<s;)f[c]=i[c];for(;r--;)f[c++]=arguments[++t];return l.apply(o?e:this,f)}}var Ct=bt("length");function Ot(n,t){var e=n[t];return function(n){if(null==n)return!1;if(re(n))return mn.test(ln.call(n));return ue(n)&&(un(n)?mn:M).test(n)}(e)?e:i}var xt=In||function(){return[]};function Pt(n){return pn.call(n)}function Mt(n){var t=n?n.length:i;return oe(t)&&(Zt(n)||se(n)||Qt(n))?function(n,t){for(var e=-1,i=Array(n);++e<n;)i[e]=t(e);return i}(t,String):null}function Lt(n){var t=typeof n;return"number"==t||"boolean"==t||"string"==t&&"__proto__"!=n||null==n}function Vt(n){var t=n&&n.constructor;return n===("function"==typeof t&&t.prototype||fn)}(Dn&&Pt(new Dn)!=v||Cn&&Pt(new Cn)!=_||On&&Pt(new On)!=b)&&(Pt=function(n){var t=pn.call(n),e=t==g?n.constructor:null,i="function"==typeof e?ln.call(e):"";if(i)switch(i){case Pn:return v;case Mn:return _;case Ln:return b}return t});var Ft=Wt((function(n,t){return Zt(n)||(n=null==n?[]:[Object(n)]),t=st(t,1),J(n)}));function Ut(n){return n?n[0]:i}function zt(n){var t=Un(n);return t.l=!0,t}function jt(n,t){return function(n,t,e,i){var r;return e(n,(function(n,e,o){if(t(n,e,o))return r=i?e:n,!1})),r}(n,vt(t),ut)}function qt(n,t){return ut(n,tt(t))}function Gt(n,t,e){return rn(n,vt(t),e,arguments.length<3,ut)}function Bt(n,t){var e;if("function"!=typeof t)throw new TypeError(r);return n=de(n),function(){return--n>0&&(e=t.apply(this,arguments)),n<=1&&(t=i),e}}var Ht=Wt((function(n,t,e){return Dt(n,33,t,e)})),Yt=Wt((function(n,t){return rt(n,1,t)})),Kt=Wt((function(n,t,e){return rt(n,he(t)||0,e)}));var $t=Wt((function(n,t){return Dt(n,32,i,t)}));function Wt(n,t){if("function"!=typeof n)throw new TypeError(r);return t=Nn(t===i?n.length-1:de(t),0),function(){for(var e=arguments,i=-1,r=Nn(e.length-t,0),o=Array(r);++i<r;)o[i]=e[t+i];var a=Array(t+1);for(i=-1;++i<t;)a[i]=e[i];return a[t]=o,n.apply(this,a)}}function Xt(n,t){return n===t||n!=n&&t!=t}function Jt(n,t){return n>t}function Qt(n){return te(n)&&dn.call(n,"callee")&&(!Tn.call(n,"callee")||pn.call(n)==u)}var Zt=Array.isArray;function ne(n){return null!=n&&oe(Ct(n))&&!re(n)}function te(n){return ue(n)&&ne(n)}var ee,ie=(ee=!1,function(){return ee});function re(n){var t=ae(n)?pn.call(n):"";return t==d||t==h}function oe(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=a}function ae(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function ue(n){return!!n&&"object"==typeof n}function ce(n){return"number"==typeof n||ue(n)&&pn.call(n)==p}function se(n){return"string"==typeof n||!Zt(n)&&ue(n)&&pn.call(n)==w}function fe(n){return ue(n)&&oe(n.length)&&!!V[pn.call(n)]}function le(n,t){return n<t}var de=Number,he=Number;function ve(n){return"string"==typeof n?n:null==n?"":n+""}var pe=Nt((function(n,t){St(t,we(t),n)})),ge=Nt((function(n,t){St(t,ye(t),n)})),me=Nt((function(n,t,e,i){kt(t,ye(t),n,i)}));var _e=Wt((function(n){return n.push(i,Qn),me.apply(i,n)}));function we(n){var t=Vt(n);if(!t&&!ne(n))return function(n){return Rn(Object(n))}(n);var e=Mt(n),i=!!e,r=e||[],o=r.length;for(var a in n)!dn.call(n,a)||i&&("length"==a||cn(a,o))||t&&"constructor"==a||r.push(a);return r}function ye(n){for(var t=-1,e=Vt(n),i=pt(n),r=i.length,o=Mt(n),a=!!o,u=o||[],c=u.length;++t<r;){var s=i[t];a&&("length"==s||cn(s,c))||"constructor"==s&&(e||!dn.call(n,s))||u.push(s)}return u}var be=Nt((function(n,t,e){_t(n,t,e)})),Ee=Wt((function(n,t){return null==n?{}:(t=gt(st(t,1),String),wt(n,function(n,t,e,i){var r,o=-1,a=Q,u=!0,c=n.length,s=[],f=t.length;if(!c)return s;e&&(t=gt(t,(r=e,function(n){return r(n)}))),i?(a=Z,u=!1):t.length>=200&&(a=Hn,u=!1,t=new Bn(t));n:for(;++o<c;){var l=n[o],d=e?e(l):l;if(u&&d==d){for(var h=f;h--;)if(t[h]===d)continue n;s.push(l)}else a(t,d,i)||s.push(l)}return s}(ye(n),t)))}));var Ie=Wt((function(n,t){return null==n?{}:wt(n,st(t,1))}));function Ae(n){return n?function(n,t){return gt(t,(function(t){return n[t]}))}(n,we(n)):[]}function Te(n){return n}var Se,ke=vt;function Re(n,t,e){var i=we(t),r=dt(t,i);null!=e||ae(t)&&(r.length||!i.length)||(e=t,t=n,n=this,r=dt(t,we(t)));var o=!ae(e)||!("chain"in e)||e.chain,a=re(n);return ut(r,(function(e){var i=t[e];n[e]=i,a&&(n.prototype[e]=function(){var t=this.l;if(o||t){var e=n(this.u),r=e.m=It(this.m);return r.push({func:i,args:arguments,thisArg:n}),e.l=t,e}return i.apply(n,nn([this.value()],arguments))})})),n}zn.prototype=it(Un.prototype),zn.prototype.constructor=zn,jn.prototype=xn?xn(null):fn,Gn.prototype.clear=function(){this.I={hash:new jn,map:Dn?new Dn:[],string:new jn}},Gn.prototype["delete"]=function(n){var t=this.I;return Lt(n)?function(n,t){return qn(n,t)&&delete n[t]}("string"==typeof n?t.string:t.hash,n):Dn?t.map["delete"](n):Kn(t.map,n)},Gn.prototype.get=function(n){var t=this.I;return Lt(n)?function(n,t){if(xn){var e=n[t];return e===o?i:e}return dn.call(n,t)?n[t]:i}("string"==typeof n?t.string:t.hash,n):Dn?t.map.get(n):$n(t.map,n)},Gn.prototype.has=function(n){var t=this.I;return Lt(n)?qn("string"==typeof n?t.string:t.hash,n):Dn?t.map.has(n):Wn(t.map,n)},Gn.prototype.set=function(n,t){var e=this.I;return Lt(n)?function(n,t,e){n[t]=xn&&e===i?o:e}("string"==typeof n?e.string:e.hash,n,t):Dn?e.map.set(n,t):Jn(e.map,n,t),this},Bn.prototype.push=function(n){var t=this.I;if(Lt(n)){var e=t.I;("string"==typeof n?e.string:e.hash)[n]=o}else t.set(n,o)},Yn.prototype.clear=function(){this.I={array:[],map:null}},Yn.prototype["delete"]=function(n){var t=this.I,e=t.array;return e?Kn(e,n):t.map["delete"](n)},Yn.prototype.get=function(n){var t=this.I,e=t.array;return e?$n(e,n):t.map.get(n)},Yn.prototype.has=function(n){var t=this.I,e=t.array;return e?Wn(e,n):t.map.has(n)},Yn.prototype.set=function(n,t){var e=this.I,i=e.array;i&&(i.length<199?Jn(i,n,t):(e.array=null,e.map=new Gn(i)));var r=e.map;return r&&r.set(n,t),this},Un.assign=pe,Un.assignIn=ge,Un.before=Bt,Un.bind=Ht,Un.chain=zt,Un.compact=function(n){return ct(n,Boolean)},Un.concat=Ft,Un.create=function(n,t){var e=it(n);return t?pe(e,t):e},Un.defaults=_e,Un.defer=Yt,Un.delay=Kt,Un.filter=function(n,t){return ct(n,vt(t))},Un.flatten=function(n){return(n?n.length:0)?st(n,1):[]},Un.flattenDeep=function(n){return(n?n.length:0)?st(n,Infinity):[]},Un.iteratee=ke,Un.keys=we,Un.map=function(n,t){return gt(n,vt(t))},Un.mapValues=function(n,t){var e={};return t=vt(t),lt(n,(function(n,i,r){e[i]=t(n,i,r)})),e},Un.matches=function(n){return mt(pe({},n))},Un.merge=be,Un.mixin=Re,Un.negate=function(n){if("function"!=typeof n)throw new TypeError(r);return function(){return!n.apply(this,arguments)}},Un.omit=Ee,Un.omitBy=function(n,t){return t=vt(t),yt(n,(function(n,e){return!t(n,e)}))},Un.once=function(n){return Bt(2,n)},Un.partial=$t,Un.pick=Ie,Un.pickBy=function(n,t){return null==n?{}:yt(n,vt(t))},Un.slice=function(n,t,e){var r=n?n.length:0;return t=null==t?0:+t,e=e===i?r:+e,r?Et(n,t,e):[]},Un.sortBy=function(n,t){var e=0;return t=vt(t),gt(gt(n,(function(n,i,r){return{value:n,index:e++,criteria:t(n,i,r)}})).sort((function(n,t){return function(n,t){if(n!==t){var e=null===n,r=n===i,o=n==n,a=null===t,u=t===i,c=t==t;if(n>t&&!a||!o||e&&!u&&c||r&&c)return 1;if(n<t&&!e||!c||a&&!r&&o||u&&o)return-1}return 0}(n.criteria,t.criteria)||n.index-t.index})),bt("value"))},Un.tap=function(n,t){return t(n),n},Un.thru=function(n,t){return t(n)},Un.toArray=function(n){return ne(n)?n.length?It(n):[]:Ae(n)},Un.values=Ae,Un.extend=ge,Re(Un,Un),Un.clone=function(n){return ae(n)?Zt(n)?It(n):St(n,we(n)):n},Un.cloneDeep=function(n){return et(n,!0,!0)},Un.escape=function(n){return(n=ve(n))&&x.test(n)?n.replace(O,an):n},Un.every=function(n,t,e){return function(n,t){var e=!0;return ut(n,(function(n,i,r){return e=!!t(n,i,r)})),e}(n,vt(t=e?i:t))},Un.find=jt,Un.findIndex=function(n,t){return n&&n.length?function(n,t,e){for(var i=n.length,r=e?i:-1;e?r--:++r<i;)if(t(n[r],r,n))return r;return-1}(n,vt(t)):-1},Un.forEach=qt,Un.forOwn=function(n,t){return n&&lt(n,tt(t))},Un.has=function(n,t){return null!=n&&dn.call(n,t)},Un.head=Ut,Un.identity=Te,Un.includes=function(n,t,e,i){n=ne(n)?n:Ae(n),e=e&&!i?de(e):0;var r=n.length;return e<0&&(e=Nn(r+e,0)),se(n)?e<=r&&n.indexOf(t,e)>-1:!!r&&en(n,t,e)>-1},Un.indexOf=function(n,t,e){for(var i=n?n.length:0,r=((e="number"==typeof e?e<0?Nn(i+e,0):e:0)||0)-1,o=t==t;++r<i;){var a=n[r];if(o?a===t:a!=a)return r}return-1},Un.isArguments=Qt,Un.isArray=Zt,Un.isBoolean=function(n){return!0===n||!1===n||ue(n)&&pn.call(n)==s},Un.isDate=function(n){return ue(n)&&pn.call(n)==f},Un.isEmpty=function(n){if(ne(n)&&(Zt(n)||se(n)||re(n.splice)||Qt(n)))return!n.length;for(var t in n)if(dn.call(n,t))return!1;return!0},Un.isEqual=function(n,t){return ht(n,t)},Un.isFinite=function(n){return"number"==typeof n&&kn(n)},Un.isFunction=re,Un.isNaN=function(n){return ce(n)&&n!=+n},Un.isNull=function(n){return null===n},Un.isNumber=ce,Un.isObject=ae,Un.isRegExp=function(n){return ae(n)&&pn.call(n)==m},Un.isString=se,Un.isUndefined=function(n){return n===i},Un.last=function(n){var t=n?n.length:0;return t?n[t-1]:i},Un.max=function(n){return n&&n.length?tn(n,Te,Jt):i},Un.min=function(n){return n&&n.length?tn(n,Te,le):i},Un.noConflict=function(){return $._===this&&($._=gn),this},Un.noop=function(){},Un.reduce=Gt,Un.result=function(n,t,e){var r=null==n?i:n[t];return r===i&&(r=e),re(r)?r.call(n):r},Un.size=function(n){return null==n?0:(n=ne(n)?n:we(n)).length},Un.some=function(n,t,e){return At(n,vt(t=e?i:t))},Un.uniqueId=function(n){var t=++hn;return ve(n)+t},Un.each=qt,Un.first=Ut,Re(Un,(Se={},lt(Un,(function(n,t){dn.call(Un.prototype,t)||(Se[t]=n)})),Se),{chain:!1}),Un.VERSION="4.6.1",ut(["pop","join","replace","reverse","split","push","shift","sort","splice","unshift"],(function(n){var t=(/^(?:replace|split)$/.test(n)?String.prototype:sn)[n],e=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",i=/^(?:pop|join|replace|shift)$/.test(n);Un.prototype[n]=function(){var n=arguments;return i&&!this.l?t.apply(this.value(),n):this[e]((function(e){return t.apply(e,n)}))}})),Un.prototype.toJSON=Un.prototype.valueOf=Un.prototype.value=function(){return n=this.u,Gt(this.m,(function(n,t){return t.func.apply(t.thisArg,nn([n],t.args))}),n);var n},(Y||H||{})._=Un,j&&q&&(G&&((q.exports=Un)._=Un),j._=Un)}.call(this)},9576:function(n,t,e){n.exports=e(6861)._.noConflict()},7751:function(n,t,e){var i=e(7446).v3,r=Math.pow(2,32),o=function(n,t){return(i(n,t)>>>0)/r};n.exports={Seed:{IGNORING:0,BUCKETING:1,FALLBACK:2,HOLDBACK:3,BEHAVIOR_EVENT:2716770798},hashToHex:function(n,t){var e=i(n,t);return(e>>>16).toString(16)+(65535&e).toString(16)},hashToInt:function(n,t,e){return Math.floor(o(n,t)*e)},hashToReal:o,toByteString:function(n){var t=String.fromCharCode;return n.replace(/[\S\s]/gi,(function(n){n=n.charCodeAt(0);var e=t(255&n);return n>255&&(e=t(n>>>8&255)+e),n>65535&&(e=t(n>>>16)+e),e}))}}},1243:function(n,t){t.generate=function e(n){return n?(n^16*Math.random()>>n/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)}},2438:function(n,t,e){var i=e(9576),r=e(4041).get("stores/audience_data"),o=e(4658),a=e(7356),u=e(3552),c=e(4955);function s(n){var t=["type","selector","attributes","value"],e=i.extend({},n);return e.changeSet=i.map(n.changeSet,(function(n){return i.pick(c.dereferenceChangeId(n),t)})),e}t.emitLayerDecided=function(n){var t=n.decisionTicket?n.decisionTicket.audienceIds:[],e=i.map(t,(function(n){return{id:n,name:r.get(n).name}})),u={type:a.TYPES.LIFECYCLE,name:"layerDecided",data:i.extend(n,{audiences:e})},s=c.translateLayerEventToCampaignEvent(u);o.emit(u),o.emit(s)},t.emitViewActivated=function(n){var t={type:a.TYPES.LIFECYCLE,name:"viewActivated",data:n},e=c.translateViewActivatedToPageActivated(t);o.emit(t),o.emit(e)},t.emitViewsActivated=function(n){var t={type:a.TYPES.LIFECYCLE,name:"viewsActivated",data:n};o.emit(t)},t.emitPageDeactivated=function(n){var t={type:a.TYPES.LIFECYCLE,name:"pageDeactivated",data:n};o.emit(t)},t.emitActivateEvent=function(){o.emit({type:a.TYPES.LIFECYCLE,name:"activate"},!0)},t.emitActivatedEvent=function(){o.emit({type:a.TYPES.LIFECYCLE,name:"activated"})},t.emitInitializedEvent=function(){var n={type:a.TYPES.LIFECYCLE,name:"initialized"};window.optimizely&&(window.optimizely.initialized=!0),o.emit(n)},t.emitOriginsSyncedEvent=function(){var n={type:a.TYPES.LIFECYCLE,name:"originsSynced"};o.emit(n)},t.emitActionAppliedEvent=function(n){var t={type:n.type,campaignId:n.layerId,pageId:n.pageId,experimentId:n.experimentId,variationId:n.variationId};u.defineProperty(t,"changes",(function(){return s(n).changeSet}),"actionAppliedEvent");var e={type:a.TYPES.ACTION,name:"applied",data:t};o.emit(e)},t.emitActionsForDecisionAppliedEvent=function(n,t){var e={decision:n};u.defineProperty(e,"actions",(function(){return i.map(t,s)}),"appliedAllForDecisionEvent");var r={type:a.TYPES.ACTION,name:"appliedAllForDecision",data:e};o.emit(r)},t.emitSendEvents=function(){var n={type:a.TYPES.ANALYTICS,name:"sendEvents"};o.emit(n)},t.emitHoldEvents=function(){var n={type:a.TYPES.ANALYTICS,name:"holdEvents"};o.emit(n)}},963:function(n,t,e){var i=e(9576),r=e(9978),o=e(3552),a=e(4955),u=e(2119),c=e(74);function s(n,t,e,r){var o=n.getLayerState(r),a=t.get(r),c=e.get();if(!o||!a)return c?{layer:{name:c.layerName,id:c.layerId,policy:c.layerPolicy,integrationStringVersion:c.integrationStringVersion},experiment:{name:c.experimentName,id:c.experimentId},variation:{name:c.variationName,id:c.variationId},isLayerHoldback:!1}:null;if(u.isSingleExperimentPolicy(a.policy)&&o.decision.isLayerHoldback)return null;var s,f,l=o.decision.experimentId,d=o.decision.variationId;return l&&d&&(s=i.find(a.experiments,{id:l}))&&(f=i.find(s.variations,{id:d}))?{layer:{name:a.name,id:a.id,policy:a.policy,integrationStringVersion:a.integrationStringVersion},experiment:{name:s.name,id:s.id},variation:{name:f.name,id:f.id},isLayerHoldback:o.decision.isLayerHoldback}:null}function f(n,t,e,r,o,a){var s=[],f=n.getLayerStates();a.onlySingleExperiments&&(f=i.filter(f,(function(n){var e=t.get(n.layerId);return e&&u.isSingleExperimentPolicy(e.policy)})));var l=i.map(f,(function(n){var t=!!n.decision.variationId,e=n.decisionActivationId&&n.decisionActivationId===r.getActivationId(),o=c.getExperimentAndVariation(),a=o?o.variationId:null,u=t&&n.decision.variationId===a;return i.extend(n,{isActive:t&&e||u,visitorRedirected:u})})),d=o?i.filter(l,o):l;return i.each(d,(function(n){var r=function(n,t,e,r){var o,a,u=n.layerId,c=t.get(u)||{},s=i.map(c.experiments,(function(n){return i.pick(n,["id","name"])}));if(!r&&c.decisionMetadata&&c.decisionMetadata.offerConsistency)return;var f={id:u,campaignName:c.name||null,experiment:null,allExperiments:s,variation:null,reason:n.decision.reason,isActive:!!n.isActive,visitorRedirected:n.visitorRedirected,isInCampaignHoldback:n.decision.isLayerHoldback};n.decision&&n.decision.experimentId&&(o=i.find(c.experiments,{id:n.decision.experimentId})),o&&(f.experiment=i.pick(o,["id","name","campaignName"])),o&&n.decision.variationId&&(a=i.find(o.variations,{id:n.decision.variationId})),a&&(f.variation=i.pick(a,["id","name"]));var l=i.map(n.decisionTicket.audienceIds,(function(n){return i.pick(e.get(n),["id","name"])}));return f.audiences=l,c.decisionMetadata&&c.decisionMetadata.offerConsistency&&(f.pageId=n.pageId),f}(n,t,e,a.includeOfferConsistency);r&&s.push(r)})),s}t.data=["stores/audience_data","stores/client_metadata","stores/event_data","stores/layer_data","stores/view_data","stores/group_data","stores/interest_group","stores/tag_group","stores/global",function(n,t,e,r,u,c,s,f,l){var d={},h={},v={},p={audiences:n.getAudiencesMap(),events:e.getEventsMap(),campaigns:d,pages:u.getPagesMap(),experiments:h,variations:v,projectId:l.getProjectId(),snippetId:l.getSnippetId(),accountId:l.getAccountId(),dcpServiceId:l.getDCPServiceId(),revision:l.getRevision(),clientName:t.getClientName(),clientVersion:t.getClientVersion()},g=a.dereferenceChangeId;return i.each(r.getAll(),(function(n){o.defineProperty(d,n.id,(function(){var t=i.extend({},n);return o.defineProperty(t,"changes",(function(){return i.map(n.changes,g)}),"campaign"),o.defineProperty(t,"experiments",(function(){return i.map(n.experiments,(function(n){return h[n.id]}))}),"campaign"),t}),"campaignMap","byId"),i.each(n.experiments,(function(n){o.defineProperty(h,n.id,(function(){var t=i.extend({},n);return o.defineProperty(t,"changes",(function(){return i.map(n.changes,g)}),"experiment"),o.defineProperty(t,"variations",(function(){return i.map(n.variations,(function(n){return v[n.id]}))}),"experiment"),t}),"experimentMap","byId"),i.each(n.variations,(function(n){o.defineProperty(v,n.id,(function(){var t=i.extend({},n);return o.defineProperty(t,"actions",(function(){return i.map(n.actions,(function(n){return i.extend({},n,{changes:i.map(n.changes,g)})}))}),"variation"),t}),"variationMap","byId")}))}))})),p.groups=c.getGroupsMap(),p}],t.visitor=["stores/visitor",function(n){return i.cloneDeep(n.getVisitorProfile())}],t.visitor_id=["stores/visitor_id",function(n){return{randomId:n.getRandomId()}}],t.state=["stores/audience_data","stores/layer_data","stores/layer","stores/view_data","stores/view","stores/global","stores/observed_redirect",function(n,t,e,o,a,l,d){return{getCampaignStates:function(r){var o={},a=f(e,t,n,l,r,{includeOfferConsistency:!1});return i.each(a,(function(n){o[n.id]=n})),o},getExperimentStates:function(r){var o=f(e,t,n,l,r,{includeOfferConsistency:!1,onlySingleExperiments:!0}),a=["audiences","variation","reason","visitorRedirected","isActive"];return i.reduce(o,(function(n,t){var e=t.allExperiments[0];return n[e.id]=i.extend({},i.pick(t,a),{id:e.id,experimentName:e.name,isInExperimentHoldback:t.isInCampaignHoldback}),n}),{})},getCampaignStateLists:function(r){var o={},a=f(e,t,n,l,r,{includeOfferConsistency:!0});return i.each(a,(function(n){var t=n.id;o[t]||(o[t]=[]),o[t].push(n)})),o},getPageStates:function(n){var t=a.getAll(),e=i.reduce(t,(function(n,t){var e=o.get(t.id);return n[t.id]=i.extend({},i.pick(e,["id","name","apiName","category","staticConditions","tags"]),i.pick(t,["isActive","metadata"])),n[t.id].isActive=!!n[t.id].isActive,n}),{});return n?i.pickBy(e,n):e},isGlobalHoldback:function(){return l.isGlobalHoldback()},getActivationId:function(){return l.getActivationId()},getVariationMap:function(){var n=e.getLayerStates(),r={};return i.each(n,(function(n){var e=t.get(n.layerId);if(n.decision&&n.decision.experimentId&&(r[n.decision.experimentId]={id:n.decision.variationId,name:null,index:null},e)){var o=i.find(e.experiments,{id:n.decision.experimentId});if(o&&n.decision.variationId)var a=i.find(o.variations,{id:n.decision.variationId}),u=i.findIndex(o.variations,{id:n.decision.variationId});a&&(r[n.decision.experimentId]={id:n.decision.variationId,name:a.name,index:u})}})),r},getActiveExperimentIds:function(){var n={};return i.each(this.getCampaignStateLists({isActive:!0}),(function(t){i.each(t,(function(t){n[t.experiment.id]=!0}))})),i.keys(n)},getRedirectInfo:function(){var n=c.getExperimentAndVariation();return n&&(n.referrer=c.getReferrer()),n},getDecisionString:function(n){if(!n)throw new Error("Must pass a config to getDecisionString");n=i.extend({maxLength:255,shouldCleanString:!1},n);var o=s(e,t,d,n.campaignId);return o?r.generateAnalyticsString(o.layer,o.experiment,o.variation,o.isLayerHoldback,n.maxLength,n.shouldCleanString):null},getDecisionObject:function(n){if(!n)throw new Error("Must pass a config to getDecisionObject");n=i.extend({maxLength:255,shouldCleanString:!1},n);var o=s(e,t,d,n.campaignId);if(!o)return null;var a=r.formatNamesAndIdsForAnalytics(o.layer,o.experiment,o.variation,n.shouldCleanString),c=i.mapValues(a.names,(function(t,e){return r.combineAndTruncateIdAndName(t,a.idStrings[e],n.maxLength)})),f={experiment:c.experiment,variation:c.variation};return u.isSingleExperimentPolicy(o.layer.policy)||i.extend(f,{campaign:c.layer,holdback:o.isLayerHoldback}),f}}}],t.utils=e(9280).create(),t.jquery=["env/jquery",function(n){return n}],t.event_emitter=e(9799)},6072:function(n,t,e){var i=e(2678),r=e(2188),o="optimizelyDataApi";t.registerFunction=function(n,t){var e=r.getGlobal(o);e||(e={},r.setGlobal(o,e)),e[n]||(e[n]=t)},t.unregisterFunction=function(n){var t=r.getGlobal(o);t&&t[n]&&(t[n]=function(){i.log('Ignoring attempt to call "'+o+"."+n+'" which has been unregistered.')})},t.getFunction=function(n){return r.getGlobal(o)[n]}},7431:function(n,t,e){var i=e(9576),r=e(2678),o=e(963),a=e(4041),u=a.get("stores/plugins"),c=e(2805),s=e(8964),f=e(4797),l=[e(4692),e(7509),e(5830)],d=["clientMetadata","cookieDomain","disable","load","optOut","rum"];t.push=function(n,t){var e,o,a,u;if(!i.isArray(n)&&i.isObject(n))u=i.isUndefined(n.version)?1:n.version,e=n.type,a=[n];else if(i.isArray(n))u=0,e=n[0],a=n.slice(1);else{if(!i.isString(n))return r.warn("API / Ignoring non-array/object/string argument:",n),!1;u=0,e=n,a=[]}if(l[u]&&(o=l[u][e]),t&&-1===d.indexOf(e))return r.debug("API / Ignoring non high priority function:",e,a),!1;if(!o)return r.warn('API / No function found for "'+e+'" (v'+u+") with arguments:",a),!1;r.log('API / Executing: "'+e,'" with arguments:',a);try{o.apply(null,a),f.dispatch(c.RECORD_API_USAGE,{methodName:u?"v"+u+"."+e:e})}catch(s){r.error(s)}return!0},t.get=function(n){r.log('API / Getting module: "'+n+'"');var t=o[n];if(t?i.isArray(t)&&(t=a.evaluate(t)):t=u.getPlugin(s.PluginTypes.apiModules,n),t)return f.dispatch(c.RECORD_API_USAGE,{methodName:"get."+n}),t;r.warn('Module "'+n+'" not found.')}},3552:function(n,t,e){var i=e(6855),r=e(2805),o=e(4797),a=e(2678);t.defineProperty=function(n,t,e,u,c){i(n,t,(function(){var n=["prop",u,c||t].join(".");return a.debug('Evaluating getter: "'+n+'"'),o.dispatch(r.RECORD_API_USAGE,{methodName:n}),e()}),!0)}},4692:function(n,t,e){var i=e(9576),r=e(7509);function o(n){var t,e={};if(n)if(a(n))t=Number(n);else{if("object"!=typeof n)throw new Error("tracker: Revenue argument "+n+"not a number.");if("revenue"in(e=i.extend({},n))){if(!a(e.revenue))throw new Error("tracker: Revenue value "+e.revenue+"not a number.");t=Number(e.revenue),delete e.revenue}}return i.isUndefined(t)||(e.revenue=t),e}function a(n){return i.isNumber(n)||i.isString(n)&&Number(n)==n}t.activateGeoDelayedExperiments=function(n,t){t||(t=n.lists?"odds":"cdn3"),r.dataFromSource({data:n,source:t})},t.activateSiteCatalyst=function(n){n&&n.sVariable&&r.integrationSettings({id:"adobe_analytics",settings:{sVariableReference:n.sVariable}})},t.bucketVisitor=function(n,t){if(n&&t){var e={experimentId:String(n)};t>256?e.variationId=String(t):e.variationIndex=String(t),r.bucketVisitor(e)}},t.bucketUser=t.bucketVisitor,t.disable=function(n){r.disable({scope:n})},t.log=function(n){i.isUndefined(n)&&(n=!0),r.log({level:n?"INFO":"OFF"})},t.optOut=function(n){i.isUndefined(n)&&(n=!0),r.optOut({isOptOut:n})},t.setCookieDomain=function(n){r.cookieDomain({cookieDomain:n})},t.setCookieExpiration=function(n){r.cookieExpiration({cookieExpirationDays:n})},t.setDimensionValue=function(n,t){var e={};e[n]=t,r.user({attributes:e})},t.setUserId=function(n){r.user({userId:n})},t.storeThirdPartyData=function(n,t){r.dataFromSource({source:n,data:t})},t.trackEvent=function(n,t){r.event({eventName:n,tags:o(t)})}},4955:function(n,t,e){var i=e(9576),r=e(4041),o=e(3694),a=e(3552),u=r.get("stores/change_data");t.translateDecisionToCampaignDecision=function(n){return c(i.cloneDeep(n),{layerId:"campaignId",isLayerHoldback:"isCampaignHoldback"})},t.translateLayerEventToCampaignEvent=function(n){var e={};return a.defineProperty(e,"campaign",(function(){return function(n){var e=i.cloneDeep(n);return e.changes&&(e.changes=i.map(e.changes,t.dereferenceChangeId)),e.experiments&&i.each(e.experiments,(function(n){n.changes&&(n.changes=i.map(n.changes,t.dereferenceChangeId)),n.variations&&i.each(n.variations,(function(n){n.actions&&i.each(n.actions,(function(n){n.changes&&(n.changes=i.map(n.changes,t.dereferenceChangeId))}))}))})),e}(n.data.layer)}),"campaignEvent"),e.decisionTicket=n.data.decisionTicket,e.decision=this.translateDecisionToCampaignDecision(n.data.decision),e.audiences=n.data.audiences,{type:"lifecycle",name:"campaignDecided",data:e}},t.translateViewActivatedToPageActivated=function(n){return{type:"lifecycle",name:"pageActivated",data:{page:n.data.view}}},t.dereferenceChangeId=function(n){var t=u.getChange(n);return t?o.safeReference(t):n};var c=function(n,t){var e=i.omit(n,i.keys(t));return i.each(t,(function(t,i){e[t]=n[i]})),e}},9280:function(n,t,e){var i=e(8398).Promise,r=e(3791).t,o=e(8207).poll,a=e(5354).b,u=e(5346).A;t.create=function(){return{observeSelector:r,poll:o,Promise:i,waitForElement:a,waitUntil:u}}},6726:function(n){n.exports={DEFAULT_INTERVAL:20}},3791:function(n,t,e){var i=e(9576),r=(e(2805),e(4041)),o=r.get("stores/directive"),a=e(6954),u=(e(7174),e(8964),e(4797),e(1243).generate),c=e(8207),s=e(2188),f=(r.get("stores/rum"),{once:!1,onTimeout:null,timeout:null}),l={},d=function(n){d=function(){if(!o.shouldObserveChangesIndefinitely())return function(n){var t=c.poll(i.partial(v,n));l[n].cancelObservation=function(){t(),delete l[n]}};var n,t=function(){this.disconnect(),i.each(i.keys(l),v),this.observe(r,e)},e={attributes:!0,childList:!0,subtree:!0,characterData:!0},r=a.getDocumentElement();return n=new MutationObserver(t),function(t){var o=l[t];n.observe(r,e),o.cancelObservation=function(){delete l[t],i.isEmpty(l)&&n.disconnect()}}}(),d(n)};function h(n){var t=l[n];t&&t.cancelObservation&&t.cancelObservation()}function v(n){if(l[n]){if(function(n){var t=n.options.timeout;if(null!==t)if("function"==typeof t)try{return t()}catch(e){}else if(Date.now()-n.startTime>t)return!0;return!1}(l[n]))return 0===l[n].matchedCount&&i.isFunction(l[n].options.onTimeout)&&l[n].options.onTimeout(),void h(n);var t=a.querySelectorAll(l[n].selector);t.length&&(i.each(t,(function(t){t.T&&t.T[n]||l[n].callbackQueue.push(t)})),function(n){for(;l[n]&&l[n].callbackQueue.length;){var t=l[n].callbackQueue.shift();if(p(t,n),l[n].matchedCount=l[n].matchedCount+1,l[n].callback(t),l[n]&&l[n].options.once)return void h(n)}}(n))}}function p(n,t){n.T||(n.T={}),n.T[t]=!0}t.t=function(n,t,e){if(!function(n){try{a.querySelector(n)}catch(t){return!1}return!0}(n))throw new Error("observeSelector expects a valid css selector as its first argument");if(!i.isFunction(t))throw new Error("observeSelector expects a function as its second argument");if(e&&(!i.isObject(e)||i.isFunction(e)))throw new Error("observeSelector expects an object as its third argument");var r=u();return e=i.assign({},f,e||{}),l[r]={callback:t,callbackQueue:[],matchedCount:0,options:e,selector:n,startTime:Date.now()},d(r),s.setTimeout(i.bind(v,null,r),0),i.partial(h,r)}},8207:function(n,t,e){var i=e(9576),r=(e(2805),e(4041)),o=(e(8964),e(4797),e(1243).generate),a=e(2188),u=e(6726).DEFAULT_INTERVAL,c=(r.get("stores/rum"),{});function s(n){c[n]&&i.each(c[n].callbacks,(function(n){n.call(null)}))}function f(n,t){c[t]&&c[t].callbacks[n]&&(delete c[t].callbacks[n],i.some(c[t].callbacks)||(clearInterval(c[t].id),delete c[t]))}t.poll=function(n,t){i.isNumber(t)||(t=u),c[t]||(c[t]={callbacks:{},id:a.setInterval(i.partial(s,t),t)});var e=o();return c[t].callbacks[e]=n,i.partial(f,e,t)},t.cancelAll=function(){i.each(c,(function(n,t){clearInterval(n.id),delete c[t]}))}},5354:function(n,t,e){var i=e(8398).Promise,r=e(3791).t;t.b=function(n){return new i((function(t,e){r(n,t,{once:!0})}))}},5346:function(n,t,e){var i=e(8398).Promise,r=e(8207).poll;t.A=function(n){return new i((function(t,e){if(n())t();else var i=r((function(){n()&&(i(),t())}))}))}},7509:function(n,t,e){var i=e(9576),r=e(2805),o=e(7431),a=e(963),u=e(8955),c=e(8964),s=e(9126),f=e(2438),l=e(3113),d=e(6639).U,h=e(3792),v=e(4819),p=(e(6708),e(2474)),g=e(4658),m=e(4797),_=e(2676),w=e(4604),y=e(2678),b=e(2376),E=(e(6928),e(9840)),I=e(1685),A=e(4041),T=A.get("stores/dimension_data"),S=A.get("stores/view"),k=A.get("stores/view_data"),R=A.get("stores/visitor_id"),N=A.get("stores/layer_data"),D=A.get("stores/directive"),C=!1,O=t.ApiListenerError=d("ApiListenerError");t.event=function(n){var t;switch(n.eventType){case"click":t=function(n){var t;return n.eventData&&(t=p.create(n.eventData.id,n.eventData.apiName,"click",n.eventData)),function(){var n=s.trackClickEvent(t);n?y.log("API / Tracking click event:",n):y.log("API / Not tracking click event:",n)}}(n);break;case"decision":t=function(n){var t=n.eventData,e=w.createLayerState(t.layerId,t.experimentId,t.variationId,t.isLayerHoldback),i=w.createSingle(t.layerId,t.experimentId,t.variationId);return function(){w.recordLayerDecision(e.layerId,e.decisionTicket,e.decision),y.log("API / Tracking decision event:",e),s.trackDecisionEvent(e.decision,e.decisionTicket,i)}}(n);break;case"pageview":t=function(n){var t=E.create(n.eventData.id,n.eventData.apiName),e=E.createState(t.id);return function(){var n=s.trackViewActivation(t,e);n?y.log("API / Tracking pageview event:",n):y.log("API / Not tracking pageview event:",n)}}(n);break;default:t=function(n){var t;return n.eventId&&(t=p.create(n.eventId,n.eventName,"custom")),E.updateAllViewTags(),function(){s.trackCustomEvent(n.eventName,n.tags,t)?y.log("API / Tracking custom event:",n.eventName,n.tags):y.log("API / Not tracking custom event:",n.eventName)}}(n)}R.getBucketingId()?t():m.dispatch(r.ADD_CLEANUP_FN,{lifecycle:c.Lifecycle.postActivate,cleanupFn:t})},t.clientMetadata=function(n){C},t.priorRedirectString=function(n){},t.microsnippetError=function(n){},t.rum=function(n){m.dispatch(r.SET_RUM_DATA,n.eventData)},t.initialViewStates=function(n){var t=i.map(n.states,(function(n,t){return{id:t,isActive:n}}));E.registerViews(t)},t.page=function(n){var t=k.getByApiName(n.pageName);if(!t)throw new Error('Unknown page "'+n.pageName+'"');var e=!n.hasOwnProperty("isActive")||n.isActive,i=function(){e?E.activateViaAPI(t,n.tags):(E.deactivate(t),y.log("API / Deactivated Page",E.description(t)))};R.getBucketingId()?i():m.dispatch(r.ADD_CLEANUP_FN,{lifecycle:c.Lifecycle.postViewsActivated,cleanupFn:i})},t.tags=function(n){E.setGlobalTags(n.tags)},t.user=function(n){y.log("API / Setting visitor custom attributes:",n.attributes),i.each(n.attributes,(function(n,t){var e,i,r=t,o=T.getById(t)||T.getByApiName(t);o&&(r=o.id,e=o.apiName,i=o.segmentId||o.id);var a={id:i,value:n};e&&(a.name=e),x(r,a,!0)}))};var x=function(n,t,e){var i=[{key:e?["custom",n]:[n],value:t,metadata:{lastModified:h.now()}}],o=function(){m.dispatch(r.SET_VISITOR_ATTRIBUTES,{attributes:i})};R.getBucketingId()?o():m.dispatch(r.ADD_CLEANUP_FN,{lifecycle:c.Lifecycle.postVisitorProfileLoad,cleanupFn:o})};t.optOut=function(n){var t=!n.hasOwnProperty("isOptOut")||n.isOptOut;v.setOptOut(t)},t.cookieExpiration=function(n){var t=n.cookieExpirationDays;t<90&&(y.error('Argument "cookieExpirationDays"=',t,"less than minimum days:",90,", setting to minimum."),t=90),y.log("API / Setting cookie age to",t,"days."),m.dispatch(r.SET_COOKIE_AGE,86400*t)},t.extendCookieLifetime=function(n){n=i.extend({isEnabled:!0},n),y.log("API / Setting cookie automatic lifetime extension to",n.isEnabled),m.dispatch(r.SET_COOKIE_AUTO_REFRESH,n.isEnabled)},t.cookieDomain=function(n){y.log("API / Setting cookie domain to",n.cookieDomain),m.dispatch(r.SET_COOKIE_DOMAIN,n.cookieDomain)},t.disable=function(n){if(n.scope){if("tracking"!==n.scope)throw new Error('Unknown "scope" for disable: '+n.scope);y.log("API / Disabling tracking"),m.dispatch(r.LOAD_DIRECTIVE,{trackingDisabled:!0})}else y.log("API / Disabling everything"),m.dispatch(r.LOAD_DIRECTIVE,{disabled:!0})},t.log=function(n){var t=n.level,e=n.match;i.isUndefined(t)&&(t="INFO"),i.isUndefined(e)&&(e=""),y.setLogMatcher(e),y.setLogLevel(t)},t.registerModule=function(n){var t="custom/"+n.moduleName;if(a[t]||o.get(t))throw new Error('Module name "'+t+'" is reserved. Will not be registered as plugin.');b.registerApiModule(t,n.module)},t.dataFromSource=function(n){var t=n.source;l.makeAsyncRequest(t),l.resolveRequest(t,n.data)},t.addListener=function(n){if(!i.isFunction(n.handler))throw new Error("A handler function must be supplied");(n=i.omit(n,"type")).publicOnly=!0,n.emitErrors=!0;var t=n.handler;n.handler=function(n){try{return t(n)}catch(e){throw new O(e)}},g.on(n)},t.removeListener=function(n){if(!n.token)throw new Error("Must supply a token to removeListener");g.off(n.token)},t.load=function(n){n.data=i.extend({},n.data),u.normalizeClientData(n.data),m.dispatch(r.DATA_LOADED,{data:n.data})},t.integrationSettings=function(n){if(!n.id)throw new Error("id is required");if(!n.settings)throw new Error("settings is required");m.dispatch(r.SET_INTEGRATION_SETTINGS,i.extend({},n.settings,{id:n.id}))},t.bucketVisitor=function(n){if(!n.variationId&&i.isUndefined(n.variationIndex)||n.variationId&&n.variationIndex)throw new Error("One of a variationId or a variationIndex is required.");if(!n.experimentId)throw new Error("An experimentId is required.");var t,e,r=n.campaignId;if(r){if(!(t=N.get(r)))throw new Error("Could not find layer "+r)}else if(!(r=(t=N.getLayerByExperimentId(n.experimentId)).id))throw new Error("Could not find layer for experiment "+n.experimentId);if(!(e=i.find(t.experiments,{id:n.experimentId})))throw new Error("Could not find experiment "+n.experimentId+" in layer "+r);var o=n.variationId;if(i.isUndefined(n.variationIndex)){if(!i.find(e.variations,{id:o}))throw new Error("Cound not find variation "+o+" in experiment "+n.experimentId)}else if(!(o=e.variations[n.variationIndex].id))throw new Error("Could not find variation at index "+n.variationIndex+" in experiment "+n.experimentId);I.updateVariationIdMap(r,n.experimentId,o),R.getBucketingId()&&I.persistVariationIdMap()},t.waitForOriginSync=function(n){if(!i.isArray(n.canonicalOrigins))throw new Error("canonicalOrigins must be an array. Got: "+_.stringify(n.canonicalOrigins));i.each(n.canonicalOrigins,(function(n){if(!i.isString(n))throw new Error("Each item in canonicalOrigins must be a string. Found type "+(void 0===n?"undefined":(t=n)&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t));var t})),m.dispatch(r.XDOMAIN_SET_CANONICAL_ORIGINS,{canonicalOrigins:n.canonicalOrigins})},t.disableCrossOrigin=function(){y.log("API / cross origin tracking is DISABLED"),m.dispatch(r.XDOMAIN_SET_DISABLED,{disabled:!0})},t.activate=function(){D.shouldActivate()?(i.forEach(S.getActiveViewStates(),(function(n){E.deactivate(k.get(n.id))})),m.dispatch(r.RESET_VIEW_STATES),f.emitActivateEvent()):y.debug("Not activating.")},t.sendEvents=function(){f.emitSendEvents()},t.holdEvents=function(){f.emitHoldEvents()}},5830:function(){},8821:function(n,t,e){var i=e(9576),r=e(6639).U,o=t.ActivationCodeError=r("ActivationCodeError"),a=t.ProjectJSError=r("ProjectJSError"),u=e(9289),c=e(2805),s=e(9126),f=e(2438),l=e(6621),d=e(7989),h=e(8955),v=e(3792),p=e(3378),g=e(4041),m=e(4819),_=e(6954),w=e(8964),y=e(4658),b=e(7356),E=e(9404),I=e(4797),A=e(1722),T=e(4604),S=e(4243).mM,k=e(2678),R=e(1645),N=e(9e3),D=e(2376),C=e(7984),O=e(8398).Promise,x=e(1705),P=e(6928),M=e(9418),L=e(7246),V=e(9840),F=e(1685),U=e(2188),z=(g=e(4041)).get("stores/session"),j=g.get("stores/audience_data"),q=g.get("stores/action_data"),G=g.get("stores/cleanup"),B=g.get("stores/directive"),H=g.get("stores/global"),Y=g.get("stores/group_data"),K=g.get("stores/layer_data"),$=g.get("stores/layer"),W=g.get("stores/pending_events"),X=g.get("stores/plugins"),J=g.get("stores/rum"),Q=g.get("stores/visitor"),Z=g.get("stores/view_data"),nn=g.get("stores/view"),tn=g.get("stores/visitor_id"),en=g.get("stores/visitor_bucketing"),rn=g.get("stores/xdomain"),on=e(7431),an=e(6708),un=e(8562),cn=t;function sn(){var n=null;i.isNumber(n)&&0===K.getCount()?(k.log("Activating after delay of",n,"ms because no Experiments are running"),I.dispatch(c.SET_RUM_DATA,{data:{activateDfd:!0}}),U.setTimeout(f.emitActivateEvent,n)):f.emitActivateEvent()}function fn(n){an.handleError(n.data.error,n.data.metadata)}function ln(n,t){I.dispatch(c.SET_RUM_DATA,{data:{extras:{xdAttempt:n,xdError:t?t.toString():void 0}}})}function dn(n,t,e){n=n||[];var r=X.getAllPlugins(w.PluginTypes.visitorProfileProviders),o=H.getGlobalHoldbackThreshold(),a=Q.getVisitorProfile();F.populateLazyVisitorData(r,a);var u=tn.getBucketingId();if(!u)throw new Error("bucketingId not set");var c,s=Q.getVisitorProfile();t&&(c=en.getVariationIdMap()[t.id]);var f={bucketingId:u,visitorProfile:s,audiences:n,globalHoldback:o,preferredVariationMap:c,layer:t};return t&&e&&p.isPageIdRelevant(t)?i.map(e,(function(n){return p.createTicket(i.extend({},f,{pageId:n}))})):[p.createTicket(f)]}function hn(n,e,r,o){try{var a=function(n){return{bucketingId:tn.getBucketingId(),preferredLayerId:en.getPreferredLayerMap()[n.id]}}(o),u=p.decideGroup(o,a);if(u.reason)return k.debug("Not activating Group",A.description(o),"; reason:",u.reason),J.getSampleRum()&&I.dispatch(c.RECORD_LAYER_FEATURE_USAGE,{feature:"mutex",entityId:o.id}),O.resolve();var s=K.get(u.layerId);if(!s)return k.debug("Visitor was bucketed into a Campaign ("+u.layerId+") which is not in this snippet"),O.resolve();var f=i.filter(s.pageIds,i.partial(i.includes,r));return i.isEmpty(f)?(k.debug("Not activating Group",A.description(o),"; reason: visitor was bucketed into a Campaign/Experiment not related to the currently-activating Page(s)"),O.resolve()):(J.getSampleRum()&&I.dispatch(c.RECORD_LAYER_FEATURE_USAGE,{feature:"mutex",entityId:o.id}),t.decideAndExecuteLayerASAP(n,e,f,s))}catch(l){return k.error("Error getting decision for Group",A.description(o),"; ",l),O.reject(l)}}function vn(n,t){var e={};return i.each(n,(function(n){i.isArray(n)?i.extend(e,vn(n,t)):i.isObject(n)&&t[n.type]&&(e[n.type]=!0)})),e}function pn(n){var t=[];return i.each(n,(function(n){t.push(n.name,n)})),t}function gn(n){var t=G.getCleanupFns(n);if(t.length>0){for(;t.length>0;)t.shift()();I.dispatch(c.CLEAR_CLEANUP_FN,{lifecycle:n})}}t.initialize=function(n){return this.initGlobalStore(n.clientData),this.initializePlugins(n.plugins)},t.initGlobalStore=function(n){h.normalizeClientData(n),y.on({filter:{type:"error"},handler:fn}),I.dispatch(c.DATA_LOADED,{data:n}),k.log("Initialized with DATA:",n)},t.initializePlugins=function(n){if(i.isArray(window.optimizely)&&(window.optimizely=i.filter(window.optimizely,(function(n){var t=!0;return!on.push(n,t)}))),m.setOptOut(B.shouldOptOut()),!B.isDisabled()&&!B.shouldOptOut()){un.queueBeacons(),_.isReady()?I.dispatch(c.SET_DOMCONTENTLOADED):_.addReadyHandler((function(){I.dispatch(c.SET_DOMCONTENTLOADED)})),N.time("projectJS");var e=H.getProjectJS();if(i.isFunction(e))try{E.apply(e)}catch(h){k.error("Error while executing projectJS: ",h),d.emitError(new a(h))}N.timeEnd("projectJS"),i.each(n||[],(function(n){try{n(D)}catch(h){d.emitInternalError(h)}})),i.each(H.getPlugins()||[],(function(n){try{E.apply(n,[D])}catch(h){d.emitError(h)}})),P.load();var r=y.on({filter:{type:"lifecycle",name:"activated"},handler:function(){Q.observe(F.persistVisitorProfile),$.observe(F.persistLayerStates),z.observe(F.persistSessionState),W.observe(R.persistPendingEvents),en.observe(F.persistVisitorBucketingStore),y.off(r)}});y.on({filter:{type:"lifecycle",name:"viewsActivated"},handler:t.onViewsActivated}),y.on({filter:{type:"lifecycle",name:"pageDeactivated"},handler:t.onPageDeactivated}),t.initializeApi();var o=R.getPendingEvents();if(o&&(I.dispatch(c.LOAD_PENDING_EVENTS,{events:o}),R.retryPendingEvents(o)),y.on({filter:{type:"lifecycle",name:"activate"},handler:t.activate}),f.emitInitializedEvent(),!B.shouldActivate())return O.resolve();var u=[];if(rn.isDisabled())sn();else{var s=t.initializeXDomainStorage();if(u.push(s),Boolean(rn.getCanonicalOrigins())){var l=M.makeTimeoutPromise(1e3);O.race([s,l])["catch"]((function(n){k.error("Failed to initialize xDomain storage: ",n)})).then(sn)["catch"](an.handleError)}else sn()}return O.all(u)}k.log("Controller / Is disabled")},t.activate=function(){try{var n=[];k.log("Activated client"),gn(w.Lifecycle.preActivate);var t=v.now();I.dispatch(c.ACTIVATE,{activationId:String(t),activationTimestamp:t});var e=Z.getAll();V.registerViews(e),F.setId(F.getOrGenerateId()),n.push(s.trackPostRedirectDecisionEvent()),I.dispatch(c.MERGE_VARIATION_ID_MAP,{variationIdMap:F.getVariationIdMap()}),I.dispatch(c.MERGE_PREFERRED_LAYER_MAP,{preferredLayerMap:F.getPreferredLayerMap()}),gn(w.Lifecycle.postVisitorProfileLoad),n.push((h=X.getAllPlugins(w.PluginTypes.visitorProfileProviders),g=Q.getVisitorProfile(),F.populateEagerVisitorData(h,g)).then((function(){k.log("Populated visitor profile")})));var r=dn(),o=p.decideGlobal(r);k.log("Made global decision",r,"->",o),I.dispatch(c.RECORD_GLOBAL_DECISION,o);var a=s.trackClientActivation();a?k.log("Tracked activation event",a):k.log("Not tracking activation event");var u=cn.setUpViewActivation(e),l=[];return i.each(u,(function(n){l=l.concat(V.activateMultiple([n]))})),gn(w.Lifecycle.postViewsActivated),gn(w.Lifecycle.postActivate),f.emitActivatedEvent(),O.all(n).then((function(){y.emit({type:b.TYPES.LIFECYCLE,name:"activateDeferredDone"}),k.log("All immediate effects of activation resolved")}),d.emitError)}catch(m){return d.emitError(m),O.reject(m)}var h,g},cn.setUpViewActivation=function(n){var t=[];return i.each(n,(function(n){i.isBoolean(nn.getViewState(n.id).isActive)&&V.isActivationTypeImmediate(n.activationType)?k.debug("Skipping page: already evaluated, presumably at the edge",V.description(n)):V.shouldTriggerImmediately(n.activationType)?t.push(n):n.activationType===w.ViewActivationTypes.callback?(k.debug("Setting up conditional activation for Page",V.description(n)),cn.activateViewOnCallback(n)):n.activationType===w.ViewActivationTypes.polling?(k.debug("Setting up polling activation for Page",V.description(n)),C.pollFor(i.partial(E.apply,n.activationCode),null,i.partial(L.isTimedOut,v.now())).then((function(){V.activateMultiple([n])}))["catch"]((function(t){k.warn("Failed to activate view ",n,t)}))):n.activationType!==w.ViewActivationTypes.manual&&d.emitError(new Error("Unknown view activationType: "+n.activationType))})),t},cn.activateViewOnCallback=function(n){var t={pageId:n.id};Object.defineProperty(t,"isActive",{get:function(){return nn.isViewActive(n.id)}});try{E.apply(n.activationCode,[function(t){var e=i.extend({},t,{pageName:n.apiName,type:"page"});on.push(e)},t])}catch(r){var e=new o("("+r.toString()+") in activationCode for "+V.description(n));d.emitError(e,{originalError:r,userError:!0})}},t.onViewsActivated=function(n){var e,r=n.data.views,o=i.map(r,"id");try{if(!tn.getBucketingId())throw new Error("View activated with no visitorId set");var a=function(n){var e=K.getAllByPageIds(n),r=B.getForceVariationIds(),o=B.getForceAudienceIds(),a=!i.isEmpty(r);a&&k.log("Force variations are in use. Disabling mutual exclusivity.");var u=a?{individual:e}:i.reduce(e,(function(n,t){return t.groupId?n.groups[t.groupId]||(n.groups[t.groupId]=Y.get(t.groupId)):n.individual.push(t),n}),{groups:{},individual:[]});k.log("Deciding Campaigns/Experiments for Page(s)",n);var c=i.map(u.groups,A.description).join(", ");k.log("Groups:",c);var s=i.map(u.individual,T.description).join(", ");k.log("Campaigns/Experiments not in Groups (by Campaign id):",s);var f=i.map(u.groups,i.partial(hn,r,o,n))||[],l=i.map(u.individual,(function(e){var a=i.filter(e.pageIds,i.partial(i.includes,n));return t.decideAndExecuteLayerASAP(r,o,a,e)})),d=f.concat(l);return O.all(d).then((function(t){var e=i.filter(t,(function(n){return!!n}));return k.log("All Campaigns/Experiments for Page(s) (by Campaign id)",n,"resolved:",i.map(e,T.description).join(", ")),e}))}(o)["catch"](d.emitError);return e=O.all(i.map(r,(function(n){var t=function(){V.parseViewTags(n);var t=s.trackViewActivation(n);t?k.log("Tracked activation for Page",V.description(n),t):k.log("Not Tracking activation for Page",V.description(n))};return _.isReady()?O.resolve(t()):C.pollFor(_.isReady,1e3).then(t)}))),O.all([a,e])}catch(u){d.emitError(u)}},t.onPageDeactivated=function(n){var t=n.data.page,e=q.getAllActionIdsByPageId(t.id);i.each(e,(function(n){var e=q.getActionState(n);e&&(i.each(e,(function(n,e){if(n.cancel)try{n.cancel(),k.debug("Controller / Canceled change",e,"observation due to deactivation of page:",t)}catch(i){k.error("Controller / Error canceling change",e,"observation upon deactivation of page.",i)}if(t.undoOnDeactivation&&n.undo)try{n.undo(),k.debug("Controller / Undid change",e,"due to deactivation of page:",t)}catch(r){k.error("Controller / Error undoing change upon deactivation of page.",r)}})),I.dispatch(c.REMOVE_ACTION_STATE,{actionId:n}),k.debug("Controller / Undid changes and/or canceled change observation due to deactivation of page:",t,n))}))},t.initializeApi=function(){var n={push:on.push};n.get=on.get;var t=window.optimizely;i.isArray(t)&&i.each(t,(function(t){n.push(t)})),n.data={note:"Obsolete, use optimizely.get('data') instead"},n.state={},window.optimizely=n},t.persistItemsWithId=function(n){return i.each(n,(function(n,t){F.checkKeyForVisitorId(t)&&S.setItem(t,n)})),n},t.initializeXDomainStorage=function(){var n=e(7581),r=!!F.getCurrentId(),o=!!r&&F.hasSomeData();r?o?k.log("xd / Existing visitor; has data on this origin"):k.log("xd / Existing visitor; new to this origin"):k.log("xd / New visitor");var a=H.getAccountId(),u="https://a20673560014.cdn.optimizely.com".replace("__SUBDOMAIN__","a"+a+"."),s="/client_storage/a"+a+".html";n.subscribe((function(n,t){F.checkKeyForVisitorId(n)&&S.setItem(n,t)}));var l=n.fetchAll().then((function(t){if(!tn.getVisitorIdLocator()){var e=rn.getCanonicalOrigins();if(e){var i=n.getXDomainUserId(t,e);i&&(k.log("Syncing cross-origin visitor randomId:",i),F.maybePersistVisitorId({randomId:i}))}}return F.deleteOldForeignData(),t})).then(t.persistItemsWithId).then((function(n){if(F.loadForeignData(),r&&!o){var t=!i.isEmpty(n);k.debug("xd / Loaded foreign data? ",t),ln(t)}k.log("Loaded visitor data from foreign origins"),f.emitOriginsSyncedEvent()}),(function(n){throw r&&!o&&(k.debug("xd / Failed to load foreign data:",n),ln(!1,n)),n}));return O.all([n.load(u,s)["catch"]((function(n){throw k.debug("xd / Failed to load iframe:",n),r&&!o&&ln(!1,n),n})),l["catch"]((function(n){k.debug("xd / Ignored error syncing foreign data (expected if waitForOriginSync used):",n.message),k.debug("xd / Enqueuing sync to happen after visitorId set."),I.dispatch(c.ADD_CLEANUP_FN,{lifecycle:w.Lifecycle.postVisitorProfileLoad,cleanupFn:f.emitOriginsSyncedEvent})}))])},t.decideAndExecuteLayerASAP=function(n,e,r,o){return new O((function(a,d){try{!function(n,t,e,r,o){if(t.length||e.length)return void o(dn([],void 0,r));var a=T.relatedAudienceIds(n),u=i.reduce(a,(function(n,t){var e=j.get(t);return!e||n.push(e),n}),[]),s=X.getAllPlugins(w.PluginTypes.audienceMatchers);if(J.getSampleRum()){var f={};if(i.each(u,(function(n){i.extend(f,vn(n.conditions,s))})),!i.isEmpty(f)){var d=i.keys(f);I.dispatch(c.RECORD_AUDIENCE_USAGE,{audienceTypes:d,layerId:n.id})}}!function(n,t,e,r){var o=i.reduce(n,(function(n,e){return i.extend(n,l.requiredAudienceFieldsForConditions(e.conditions,t))}),{}),a=i.reduce(o,(function(n,t){if(i.isUndefined(F.getAttribute(t))){var e=F.getPendingAttributeValue(t);i.isUndefined(e)||n.push(e)}return n}),[]);if(0===a.length)return r();var u=[].concat(n),c=x.firstToResolve(i.map(a,(function(n){return O.resolve(n).then((function(){var n=Q.getVisitorProfile();if(u=i.filter(u,(function(e){return i.isUndefined(l.isInAudience(n,e,t))})),!i.isEmpty(u))throw new Error("At least one audience is still pending")}))})));O.race([c,new O((function(n,t){U.setTimeout(t,e)}))]).then((function(){k.log("Activating Campaign after pending Audiences resolved",n),r()}),(function(){k.log("Activating Campaign after timeout on Audiences",n),r()}))}(u,s,T.getActivationTimeout(n),(function(){var t=dn(u,n,r);i.map(t,(function(t){!function(n,t,e){var r=i.map(n.audienceIds,i.bind(j.get,j)),o=i.filter(t,(function(t){return!i.includes(n.audienceIds,t.id)}));k.log("When deciding Campaign",T.description(e),"visitor is in audiences:",pn(r),"and not in audiences:",pn(o))}(t,u,n)})),o(t)}))}(o,n,e,r,(function(l){i.each(l,(function(a){var l=a.pageId?[a.pageId]:r;k.debug("Deciding layer: ",o,"with decisionTicket: ",a,"and actionViewIds: ",l),function(n,e,r,o,a){var l=T.description(n);k.log("Activating Campaign",l,"on Page(s)",o),r.length&&(k.log("Applying force audienceIds:",r,"to Campaign",l),(a=i.cloneDeep(a)).audienceIds=r);var d=t.decideLayer(n,a,e),h=!(!e.length&&!r.length),v=t.getActionsForDecision(n,d,h),g=function(n,t){return i.filter(n,(function(n){return i.isUndefined(n.pageId)||i.includes(t,n.pageId)}))}(v.actions,o);if(v.maybeExecute&&function(n,t,e,r){var o=T.description(t);k.log("Preparing actions",n,"for Campaign",o,"on Page(s)",r),i.forEach(n,u.prepareAction)}(g,n,0,o),i.forEach(o,(function(){s.trackDecisionEvent(d,a)})),f.emitLayerDecided({layer:n,decisionTicket:a,decision:d}),d.error)throw d.error;if(J.getSampleRum()){I.dispatch(c.RECORD_LAYER_POLICY_USAGE,{policy:n.policy,layerId:n.id});var m=function(n){var t={};return i.each(n,(function(n){i.each(n.changeSet,(function(n){t[n.type]||(t[n.type]=!0)}))})),t}(v.actions);I.dispatch(c.RECORD_CHANGE_TYPE_USAGE,{changeTypes:i.keys(m),layerId:n.id}),i.isEmpty(n.integrationSettings)||I.dispatch(c.RECORD_INTEGRATION_USAGE,{integrations:T.getIntegrationTypes(n),layerId:n.id})}if(!p.isInCohort(d))return void k.log("Not activating Campaign: "+T.description(n)+"; not in the cohort because:",d.reason);v.maybeExecute&&function(n,t,e,r){var o=T.description(t);k.log("Executing actions",n,"for Campaign",o,"on Page(s)",r),O.all(i.map(n,(function(n){return u.executePreparedAction(n).then(i.partial(f.emitActionAppliedEvent,n))}))).then((function(){k.log("All page actions for",e,"applied:",n),f.emitActionsForDecisionAppliedEvent(e,n)}))["catch"]((function(n){k.warn("Error evaluating page actions for decision",e,"because:",n)}))}(g,n,d,o)}(o,n,e,l,a)})),a(o)}))}catch(h){k.error("Error getting decision for Campaign: "+T.description(o),h),d(h)}}))},t.decideLayer=function(n,t,e){var i;var r=T.description(n);i=e.length?p.getDummyLayerDecision(n,e):p.decideLayer(n,t),k.log("Recording decision for Campaign",r,t,"->",i),T.recordLayerDecision(n.id,t,i),i.variationId&&i.experimentId&&F.updateVariationIdMap(n.id,i.experimentId,i.variationId),n.groupId&&F.updatePreferredLayerMap(n.groupId,n.id);return i},t.getActionsForDecision=function(n,t,e){var i=T.description(n),r="NOT applying changes for Campaign",o={actions:[],maybeExecute:!1};if(o.actions=[].concat(q.getLayerActions(t.layerId)||[],q.getExperimentActions(t.experimentId)||[],q.getExperimentVariationActions(t.experimentId,t.variationId)||[]),!e&&H.isGlobalHoldback())return k.log(r,i,"(visitor is in global holdback)"),o;if(t.isLayerHoldback)return k.log(r,i,"(visitor is in layer holdback)"),o;if(!t.experimentId||!t.variationId)return k.log(r,i,"(visitor is not eligible for any Experiments)"),o;return o.maybeExecute=!0,k.log("Got Actions for Campaign:",i,o.actions),o}},2174:function(n,t,e){var i=e(44).Promise,r=e(3792),o=e(4041).get("stores/plugins"),a=e(8964),u=e(2678);t.create=function(n,t,e){var c={identifier:n.id,action:t,startTime:e||r.now()};try{var s=o.getPlugin(a.PluginTypes.changeAppliers,n.type);if(!s)throw new Error("Unrecognized change type "+n.type);return new s(n,c)}catch(f){return u.error("Change applier was never properly constructed:",f),{apply:function(){return i.reject(f)}}}}},8235:function(n){n.exports={SELECTOR_POLLING_MAX_TIME:2e3,CHANGE_DATA_KEY:"optimizelyChangeData",CHANGE_ID_ATTRIBUTE_PREFIX:"data-optly-"}},4611:function(n,t,e){var i=e(9576),r=e(8235).CHANGE_DATA_KEY;function o(n,t){return[n,t].join("_")}t.getData=function(n,t,e){var i=o(t,e);return n[r]&&n[r][i]?n[r][i]:null},t.hasData=function(n){return Boolean(n&&n[r]&&!i.isEmpty(n[r]))},t.removeData=function(n,t,e){n[r]&&delete n[r][o(t,e)]},t.setData=function(n,t,e,i){if("object"!=typeof i)throw new Error("setData expects an object");n[r]||(n[r]={}),n[r][o(t,e)]=i}},5557:function(n,t,e){var i=e(2624);n.exports={changeType:{CUSTOM_CODE:"custom_code",ATTRIBUTE:"attribute",APPEND:"append",REARRANGE:"rearrange",REDIRECT:"redirect",WIDGET:"widget"},DOMInsertionType:{AFTER:"after",APPEND:"append",BEFORE:"before",PREPEND:"prepend"},insertAdjacentHTMLType:{AFTER_BEGIN:"afterbegin",AFTER_END:"afterend",BEFORE_BEGIN:"beforebegin",BEFORE_END:"beforeend"},selectorChangeType:{CLASS:"class",HTML:"html",HREF:"href",SRC:"src",STYLE:"style",TEXT:"text",HIDE:"hide",REMOVE:"remove"},changeApplierState:i({APPLIED:null,APPLYING:null,UNAPPLIED:null,UNDOING:null}),changeState:i({BLOCKED:null,UNAPPLIED:null,APPLIED:null,APPLYING:null,UNDOING:null,TIMED_OUT:null,IGNORED:null,ERROR:null})}},9289:function(n,t,e){var i=e(9576),r=e(2805),o=e(7989),a=e(3113),u=e(6639).U,c=e(3792),s=e(4041),f=e(4797),l=e(2678),d=e(8398).Promise,h=e(5554),v=s.get("stores/global"),p=s.get("stores/action_data"),g=s.get("stores/change_data"),m=s.get("stores/session"),_=e(2174);e(7246).initialize();var w=u("ActionError");function y(n,t,e){if(p.getActionState(t.id)){var o=p.getChangeApplier(n.id,t.id);if(i.isUndefined(o)){var a={changeId:n.id,actionId:t.id,changeApplier:_.create(n,t,e)};f.dispatch(r.SET_CHANGE_APPLIER,a)}else l.warn("Action / Attempted to prepare a change which is already being applied: ",n)}else l.warn("Action / Attempted to prepare change for inactive action: ",t)}function b(n,t,e,r){if(!i.includes(r,t)){if(!n[String(t)]){var u=g.getChange(t);if(!u){var s="Change with id "+t+" is absent";return r.length&&(s+=" but listed as a dependency for "+r[r.length-1]),void l.warn(s)}n[String(t)]=new d((function(s){var f=i.map(u.dependencies||[],(function(i){return b(n,i,e,r.concat([t]))}));if(u.src){var v="change_"+u.src,m=a.makeAsyncRequest(v,(function(){return h.addScriptAsync("https://cdn.optimizely.com/public/20673560014/data"+u.src,(function(){a.resolveRequest(v)}))})).then((function(){var n=g.getChange(u.id);n||o.emitError(new w("Failed to load async change from src: "+u.src)),y(n,e,c.now())}));f.push(m)}d.all(f).then((function(){var n=c.now(),i=p.getChangeApplier(t,e.id);return i?(l.debug("Action / Applying change:",u),i.apply().then((function(t){t?l.log(t):l.debug("Action / Applied change for the first time in "+(c.now()-n)+"ms:",u),s()}))):(l.debug("Action / Not applying change ",t," - No changeApplier found."),void s())}))["catch"]((function(n){l.error("Action / Failed to apply change:",u,n),s()}))}))}return n[String(t)]}l.error("Change with id "+t+" has circular dependencies: "+r.concat(t))}t.prepareAction=function(n){l.debug("Action / Preparing:",n),f.dispatch(r.ACTION_EXECUTED,{actionId:n.id,sessionId:m.getSessionId(),layerId:n.layerId,pageId:n.pageId,timestamp:c.now(),activationId:v.getActivationId()});var t=c.now();i.forEach(n.changeSet,(function(e){var o=i.isObject(e)?e.id:e,a=g.getChange(o);a||(f.dispatch(r.ADD_CHANGE,e),a=g.getChange(e.id)),a.src||y(a,n,t)}))},t.executePreparedAction=function(n){l.debug("Action / Executing:",n);var t={},e=i.map(n.changeSet,(function(e){var r=i.isObject(e)?e.id:e;return b(t,r,n,[])}));return d.all(e).then((function(){l.debug("changes for action id="+n.id+" applied")}))}},7246:function(n,t,e){var i=e(8235),r=e(4041).get("stores/directive");function o(){("interactive"===document.readyState||"complete"===document.readyState)&&(t.domReadyTime=Date.now())}t.domReadyTime=null,t.initialize=function(){o(),document.addEventListener("readystatechange",o,!0)},t.isTimedOut=function(n){var e=Date.now();if(!t.domReadyTime||!n)return!1;var o=Math.max(n,t.domReadyTime);return r.isEditor()&&(o=t.domReadyTime),!(e-o<i.SELECTOR_POLLING_MAX_TIME)}},9126:function(n,t,e){var i=e(9576),r=e(2805),o=e(7989),a=e(5434),u=e(3792),c=e(5172),s=e(4041),f=e(6954),l=e(8964),d=e(1852),h=e(4658),v=e(7356),p=e(1372),g=e(4797),m=e(4604),_=e(2678),w=(e(9e3),e(8398).Promise),y=e(74),b=e(6928),E=e(9418),I=e(9612),A=e(1243),T=s.get("stores/client_metadata"),S=s.get("stores/global"),k=s.get("stores/session"),R=s.get("stores/view"),N=s.get("stores/plugins"),D=s.get("stores/layer"),C=s.get("stores/layer_data"),O=s.get("stores/observed_redirect"),x=s.get("stores/pending_redirect"),P=s.get("stores/visitor"),M=s.get("stores/directive"),L=s.get("stores/event_data"),V=s.get("stores/visitor_id");function F(n,t){return i.extend({},n,{isLayerHoldback:t,isGlobalHoldback:!1,clientName:i.isNull(n.clientName)?c.NAME:n.clientName,integrationStringVersion:i.isNull(n.integrationStringVersion)?1:n.integrationStringVersion,anonymizeIP:i.isNull(S.getAnonymizeIP())?void 0:S.getAnonymizeIP(),activationId:S.getActivationId(),decisionTicketAudienceIds:[],sessionId:k.getSessionId(),activeViewStates:[],userFeatures:j(P.getVisitorProfile()),layerStates:D.getLayerStatesForAnalytics()})}function U(n){var t=y.getReferrer()||f.getReferrer();return{eventId:A.generate(),timestamp:u.now(),revision:S.getRevision(),clientName:T.getClientName(),clientVersion:T.getClientVersion(),projectId:S.getProjectId(),accountId:S.getAccountId(),activationId:S.getActivationId(),sessionId:k.getSessionId(),isGlobalHoldback:S.isGlobalHoldback(),namespace:S.getNamespace(),referrer:t,visitorId:V.getRandomId(),activeViewStates:n.activeViewStates,layerStates:n.layerStates,userFeatures:j(n.visitorProfile)}}function z(n){var t,e;return n.pageId?(t=n.pageId,(e=R.getViewState(t))&&e.isActive?e.metadata:{}):{}}function j(n){var t=N.getAllPlugins(l.PluginTypes.visitorProfileProviders),e=i.filter(t,{shouldTrack:!0}),r={id:null,type:null,name:"",value:null,shouldIndex:!0};return i.reduce(e,(function(t,e){try{var o=e.provides,a=n[o],u=[];if(!i.isUndefined(a)){i.isObject(a)?u=i.map(a,(function(n,t){var e=i.isObject(n)?n:{value:n};return i.extend({},{type:o,name:t},e)})):u.push({type:o,value:a});var c=i(u).map((function(n){return i.pick(i.extend({},r,n),i.keys(r))})).filter((function(n){return!!n.value})).value();t=t.concat(c)}}catch(s){_.warn("Error evaluating userFeature against visitorProfile:",s)}return t}),[])}function q(n,t,e){var r=function(n,t){var e=[];return i.each(N.getAllPlugins(l.PluginTypes.analyticsTrackers),(function(i,r){if(i[n]&&(!t||!i[t]))try{e.push({name:r,hookFn:s.evaluate(i[n])})}catch(o){_.error(o)}})),e}(n,e);_.debug("Found "+r.length+" analytics integrations defining a "+n+" hook"),_.debug("Calling each with data: ",t),i.each(r,(function(n){try{_.debug("Calling plugin: "+n.name),n.hookFn(t),_.debug("Called plugin: "+n.name)}catch(e){_.error(e)}}))}function G(n,t,e){var r=function(n,t){0;var e=[];return i.each(N.getAllPlugins(l.PluginTypes.analyticsTrackers),(function(r,o){i.includes(t,r[n])&&e.push({name:o,hookFn:r.trackLayerDecision})})),e}(n,t);_.debug("Found "+r.length+" analytics integrations  defining a trackLayerDecision "+n+" timing of "+t.join("|")),_.debug("Calling each with data: ",e),i.each(r,(function(n){try{_.debug("Calling plugin: "+n.name),n.hookFn(e),_.debug("Called plugin: "+n.name)}catch(t){_.error(t)}}))}t.trackClientActivation=function(){if(M.shouldSendTrackingData()){var n,t=(n=U({activeViewStates:[],visitorProfile:P.getVisitorProfile(),layerStates:D.getLayerStatesForAnalytics()}),i.extend(n,{eventTags:{}}));return q("onClientActivation",t),t}},t.trackCustomEvent=function(n,t,e){t=t||{},e||(e=L.getByApiName(n));var r=function(n,t,e){var r=U({activeViewStates:R.getActiveViewStates(),visitorProfile:P.getVisitorProfile(),layerStates:D.getLayerStatesForAnalytics()}),o=e&&e.pageId?z(e):R.getActiveViewTags(),a=i.extend({},o,t),u=e&&e.category?e.category:d.OTHER;return i.extend(r,{eventEntityId:e&&e.id,eventApiName:n,eventCategory:u,eventTags:a})}(n,t,e),u={name:n,type:p.CUSTOM,category:r.eventCategory,tags:i.omit(r.eventTags,"revenue")};if(i.isUndefined(t.revenue)||(u.revenue=t.revenue),o.emitAnalyticsEvent({name:e?e.name||e.apiName:n,apiName:e?e.apiName:void 0,type:p.CUSTOM,tags:i.omit(r.eventTags,"revenue"),category:r.eventCategory,metrics:u.revenue?{revenue:u.revenue}:{}},!M.shouldSendTrackingData()),M.shouldSendTrackingData())return a.addEvent(u),q("onCustomEvent",r),r},t.trackDecisionEvent=function(n,t,e){e||(e=C.get(n.layerId));var o=A.generate();g.dispatch(r.RECORD_LAYER_DECISION_EVENT_ID,{layerId:n.layerId,pageId:t.pageId,decisionId:o});var a=function(n,t,e,r){var o=null,a=null,c=null;if(t.experimentId){var s=i.find(r.experiments,{id:t.experimentId});if(s&&(o=s.name||null,c=s.integrationSettings,t.variationId)){var l=i.find(s.variations,{id:t.variationId});l&&(a=l.name||null)}}var d=y.getReferrer()||f.getReferrer();return{sessionId:k.getSessionId(),decisionTicketAudienceIds:e.audienceIds,visitorId:V.getRandomId(),decisionId:n,activationId:S.getActivationId(),namespace:S.getNamespace(),timestamp:u.now(),pageId:e.pageId||null,variationId:t.variationId,variationName:a,experimentId:t.experimentId,experimentName:o,layerId:t.layerId,layerName:r.name,layerPolicy:r.policy,accountId:S.getAccountId(),projectId:S.getProjectId(),revision:String(S.getRevision()),clientName:T.getClientName(),clientVersion:T.getClientVersion(),referrer:d,integrationStringVersion:r.integrationStringVersion||1,integrationSettings:i.extend({},r.integrationSettings,c)}}(o,n,t,e),c=x.isExpectingRedirect(),s=x.getLayerId(),l=m.description(e);if(c&&s===e.id&&(b.persist(a,"COOKIE"),_.log("Relaying decision for redirect Campaign",l)),M.shouldSendTrackingData()){var d=F(a,n.isLayerHoldback);if(c&&s===e.id){var h=I.TrackLayerDecisionTimingFlags.preRedirectPolicy;d.timing=h,G(h,[I.PreRedirectPolicies.PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT],d),_.log("Called trackLayerDecision for redirect Campaign",l,d)}else{h=I.TrackLayerDecisionTimingFlags.nonRedirectPolicy;d.timing=h,G(h,[I.NonRedirectPolicies.TRACK_IMMEDIATELY],d),_.log("Called trackLayerDecision for non-redirect Campaign",l,d)}}else _.log("Analytics / Not tracking decision for Campaign",m.description(e))},t.trackPostRedirectDecisionEvent=function(){if(!M.shouldSendTrackingData()||O.hasTracked())return w.resolve();var n=O.get();if(!n)return w.resolve();var t=F(n,!1),e=I.TrackLayerDecisionTimingFlags.postRedirectPolicy;t.timing=e,G(e,[I.PostRedirectPolicies.TRACK_IMMEDIATELY],t);var i=new w((function(n){var t=h.on({filter:{type:v.TYPES.LIFECYCLE,name:"originsSynced"},handler:function(){n(),h.off(t)}})})),o=E.makeTimeoutPromise(1e3);return w.race([i,o]).then((function(){_.log("Calling trackers after successful sync")}),(function(n){_.warn("Calling trackers after failed sync:",n)})).then((function(){(t=F(n,!1)).timing=I.TrackLayerDecisionTimingFlags.postRedirectPolicy,G(I.TrackLayerDecisionTimingFlags.postRedirectPolicy,[I.PostRedirectPolicies.TRACK_AFTER_SYNC],t),g.dispatch(r.REGISTER_TRACKED_REDIRECT_DATA)}))["catch"]((function(n){_.error("Error when calling trackers after sync:",n)}))},t.trackClickEvent=function(n){var t=function(n){var t=U({activeViewStates:R.getActiveViewStates(),visitorProfile:P.getVisitorProfile(),layerStates:D.getLayerStatesForAnalytics()}),e=n.config&&n.config.selector?n.config.selector:n.eventFilter.selector,r=n.apiName,o=n.category||d.OTHER,a=n.id,u=z(n);return i.extend(t,{eventApiName:r,eventCategory:o,eventEntityId:a,eventTags:u,pageId:n.pageId,selector:e})}(n),e={name:n.apiName,type:n.eventType,category:t.eventCategory,tags:t.eventTags};if(o.emitAnalyticsEvent({name:n.name||n.apiName,apiName:n?n.apiName:void 0,type:n.eventType,category:t.eventCategory,tags:t.eventTags,metrics:{}},!M.shouldSendTrackingData()),M.shouldSendTrackingData())return a.addEvent(e),q("onClickEvent",t),t},t.trackViewActivation=function(n,t){if(t||(t=R.getViewState(n.id)),t.isActive){var e=function(n,t){var e=U({activeViewStates:R.getActiveViewStates(),visitorProfile:P.getVisitorProfile(),layerStates:D.getLayerStatesForAnalytics()});return i.extend(e,{pageId:n.id,pageApiName:n.apiName,viewCategory:n.category,eventTags:t.metadata})}(n,t);if(o.emitAnalyticsEvent({name:n.name||e.pageApiName,apiName:e.pageApiName,type:p.PAGEVIEW,category:e.viewCategory,tags:e.eventTags,metrics:{}},!M.shouldSendTrackingData()),M.shouldSendTrackingData())return a.addEvent({name:e.pageApiName,type:p.PAGEVIEW,category:e.viewCategory,tags:e.eventTags}),g.dispatch(r.TRACK_VIEW_ACTIVATED_EVENT,{pageId:n.id,eventData:e}),q("onPageActivated",e),e}else _.debug("Inactive view passed to `trackViewActivation`")}},6928:function(n,t,e){var i=e(9576),r=e(2805),o=e(8718),a=e(7989),u=e(4041),c=e(8964),s=e(4797),f=e(2678),l=e(9612),d=u.get("stores/plugins"),h=".",v=[{name:"sessionId",relayName:"s"},{name:"decisionTicketAudienceIds",relayName:"as",valueToValueString:function(n){return i.map(n,encodeURIComponent).join(",")},encodeValueString:i.identity,decodeValueString:i.identity,valueFromValueString:function(n){return i.map(n.split(","),o.safeDecodeURIComponent)}},{name:"decisionId",relayName:"d"},{name:"activationId",relayName:"aId"},{name:"pageId",relayName:"vId",isNullable:!0},{name:"variationId",relayName:"v",isNullable:!0},{name:"referrer",relayName:"r"},{name:"timestamp",relayName:"t",valueFromValueString:Number},{name:"visitorId",relayName:"i"},{name:"projectId",relayName:"p"},{name:"revision",relayName:"n"},{name:"clientName",relayName:"cN",isNullable:!0},{name:"clientVersion",relayName:"cV"},{name:"namespace",relayName:"ns"},{name:"accountId",relayName:"a"},{name:"layerId",relayName:"l"},{name:"layerName",relayName:"lN",isNullable:!0},{name:"layerPolicy",relayName:"lP"},{name:"experimentId",relayName:"x",isNullable:!0},{name:"experimentName",relayName:"xN",isNullable:!0},{name:"variationName",relayName:"vN",isNullable:!0},{name:"integrationStringVersion",relayName:"isv",valueFromValueString:Number,isNullable:!0},{name:"integrationSettings",relayName:"iS",isMulti:!0,valueToValueString:function(n,t){var e=null;if(n){var r=d.getPlugin(c.PluginTypes.analyticsTrackers,t);if(r&&i.isFunction(r.serializeSettings))try{e=r.serializeSettings(n)}catch(o){f.warn("Analytics / Failed to persist integrationSettings for plugin:",t,o)}}return e},valueFromValueString:function(n,t){var e=null,r=d.getPlugin(c.PluginTypes.analyticsTrackers,t);if(r&&i.isFunction(r.deserializeSettings))try{e=r.deserializeSettings(n)}catch(o){f.warn("Analytics / Failed to persist integrationSettings for plugin:",t,o)}return e},isNullable:!0}],p={},g={};i.forEach(v,(function(n){p[n.name]=n,g[n.relayName]=n})),t.persist=function(n,t){t===l.RedirectRelayMedia.COOKIE?function(n){try{var t=function(n){var t=[],e=i.reduce(n,(function(n,e,r){var o=p[r];return o?(o.isMulti?i.forEach(e,(function(t,e){t=o.valueToValueString?o.valueToValueString(t,e):String(t),i.isNull(t)||(t=(o.encodeValueString||encodeURIComponent)(t),n.push(encodeURIComponent(o.relayName+h+e)+"="+t))})):i.isNull(e)||(e=(o.valueToValueString||String)(e),e=(o.encodeValueString||encodeURIComponent)(e),n.push(o.relayName+"="+e)),n):(t.push(r),n)}),[]);if(t.length)throw new Error("Relay / Don't know how to relay some fields: "+t);return e.sort(),e.join("&")}(n)}catch(e){return f.error("Relay / Error computing redirect relay cookie: ",e),void a.emitError(e)}f.debug("Relay / Setting redirect relay cookie:",t);try{o.set(c.COOKIES.REDIRECT,t,{maxAge:5,encodeValue:!1})}catch(r){f.error("Relay / Failed to set redirect relay cookie",r),a.emitError(r)}}(n):f.error("Relay / Unsupported redirect relay medium: "+t)},t.load=function(n){if(n||(n=function(){var n=o.get(c.COOKIES.REDIRECT,!1);if(n)return f.log("Relay / Found redirect cookie:",n),n}()),n){var t=function(n){var t={},e=n.split("&");return i.forEach(e,(function(n){var e=n.split("=");if(2===e.length){var r=o.safeDecodeURIComponent(e[0]),u=g[r];if(u||(u=i.find(v,(function(n){return n.isMulti&&0===r.indexOf(n.relayName+h)})))){var c=e[1];try{if(u.isMulti){t[u.name]=t[u.name]||{};var s=r.substring(u.relayName.length+h.length);c=(u.decodeValueString||o.safeDecodeURIComponent)(c),c=(u.valueFromValueString||i.identity)(c,s),t[u.name][s]=c}else c=(u.decodeValueString||o.safeDecodeURIComponent)(c),c=(u.valueFromValueString||i.identity)(c),t[u.name]=c}catch(l){return f.warn("Relay / Skipping segment due to decode or parse error:",n,l),void a.emitError(l)}}else f.warn("Relay / Skipping segment with unknown field identifier:",n,r)}else f.warn("Relay / Skipping invalid segment:",n)})),t}(n);if(t){var e=[];if(i.forEach(v,(function(n){(i.isNull(t[n.name])||i.isUndefined(t[n.name]))&&(n.isNullable?t[n.name]=null:(delete t[n.name],e.push(n.name)))})),!e.length)return s.dispatch(r.LOAD_REDIRECT_DATA,t),s.dispatch(r.ADD_CLEANUP_FN,{lifecycle:c.Lifecycle.postVisitorProfileLoad,cleanupFn:function(){var n,e;e=(n=t).pageId||void 0,s.dispatch(r.RECORD_LAYER_DECISION,{layerId:n.layerId,decision:{layerId:n.layerId,experimentId:n.experimentId,variationId:n.variationId,isLayerHoldback:!1},decisionTicket:{audienceIds:n.decisionTicketAudienceIds,bucketingId:n.visitorId,globalHoldback:0,preferredVariationMap:void 0,pageId:e,activationId:n.activationId},sessionId:n.sessionId,activationId:n.activationId,timestamp:n.timestamp,revision:n.revision,namespace:n.namespace,pageId:e}),s.dispatch(r.RECORD_LAYER_DECISION_EVENT_ID,{layerId:n.layerId,pageId:e,decisionId:n.decisionId}),s.dispatch(r.ACTION_EXECUTED,{sessionId:n.sessionId,layerId:n.layerId,pageId:n.pageId,timestamp:n.timestamp,activationId:n.activationId})}}),t;f.error("Relay / Observed redirect data with missing fields:",e)}}}},7989:function(n,t,e){var i=e(4658);t.emitError=function(n,t,e){i.emit({type:"error",name:n.name||"Error",data:{error:n,metadata:t}},e||!1,!0)},t.emitInternalError=function(n,e){t.emitError(n,e,!0)},t.emitAnalyticsEvent=function(n,t){var e={type:"analytics",name:"trackEvent",data:n};i.emit(e,t)}},6621:function(n,t,e){var i=e(9576),r=e(6227),o=e(9196),a=e(2678),u=e(1685);function c(n,t){var e="function"==typeof n?n(t):n;return"string"==typeof e&&(e=[e]),i.isArray(e)?e:(a.warn("Couldn't determine fieldsNeeded for matcher; assuming []"),[])}function s(n){return n.name?n.name+" ("+n.id+")":n.id}t.isInAudience=function(n,t,e){var u,f=function(n,t){return function(e){var r=e.type,u=t[r];if(!u)throw new Error("Audience / No matcher found for type="+r);if(u.fieldsNeeded)for(var s=c(u.fieldsNeeded,e),f=0;f<s.length;f++){var l=s[f],d=o.getFieldValue(n,l);if(i.isUndefined(d))return void a.debug("Audience / Required field",l,"for type",r,"has no value")}a.debug("Matching condition:",e,"to values:",n);var h=u.match(n,e);if(!i.isUndefined(h))return!!h}}(n,e);a.groupCollapsed("Checking audience",t.name,t.id,t),a.debug("Visitor Profile:",n);try{var l=r.evaluate(t.conditions,f)}catch(d){u=d,l=!1}return a.groupEnd(),u&&a.error("Audience / Error evaluating audience",s(t),":",u),a.log("Is "+(l?"in":"NOT in")+" audience:",s(t)),l},t.requiredAudienceFieldsForConditions=function f(n,t){var e={};return i.each(n,(function(n){if(i.isArray(n))i.extend(e,f(n,t));else if(i.isObject(n)){var r=t[n.type];if(r){var o=c(r.fieldsNeeded,n);i.each(o,(function(n){e[u.serializeFieldKey(n)]=n}))}}})),e}},2657:function(n,t){t.FIELDS={NAME:"n",TIME:"t",TYPE:"y",CATEGORY:"c",REVENUE:"r",SESSION_ID:"s",OPTIONS:"o",SESSION_INDEX:"si"},t.FIELDS_V0_2={name:t.FIELDS.NAME,time:t.FIELDS.TIME,type:t.FIELDS.TYPE,category:t.FIELDS.CATEGORY,tags:t.FIELDS.OPTIONS,session_index:t.FIELDS.SESSION_INDEX}},5093:function(n,t,e){var i=e(9576),r=e(2657),o=e(9196).getFieldValue,a=e(7751);function u(n,t,e,o,a){this[r.FIELDS.NAME]=n,this[r.FIELDS.TYPE]=t,i.isString(e)&&e.trim().length>0&&(this[r.FIELDS.CATEGORY]=e),o&&i.keys(o).length>0&&(this[r.FIELDS.OPTIONS]=o),i.isUndefined(a)||(this[r.FIELDS.REVENUE]=a)}function c(n,t,e,o){this.eventBase=n,this[r.FIELDS.TIME]=t,i.isUndefined(e)||(this[r.FIELDS.SESSION_ID]=e),i.isUndefined(o)||(this[r.FIELDS.SESSION_INDEX]=o)}t.x=u,u.prototype.digest=function(){var n=function(n,t){return encodeURIComponent(n)+"="+encodeURIComponent(t)},t=[];if(t.push(n(r.FIELDS.NAME,this[r.FIELDS.NAME])),t.push(n(r.FIELDS.TYPE,this[r.FIELDS.TYPE])),this[r.FIELDS.CATEGORY]&&t.push(n(r.FIELDS.CATEGORY,this[r.FIELDS.CATEGORY])),this[r.FIELDS.REVENUE]&&t.push(n(r.FIELDS.REVENUE,this[r.FIELDS.REVENUE])),!this[r.FIELDS.OPTIONS])return t.join("&");var e=this[r.FIELDS.OPTIONS]||{},o=i.filter(i.keys(e),(function(n){return e.hasOwnProperty(n)}));o=o.sort();for(var a=0;a<o.length;a++)t.push(n(o[a],e[o[a]]));return t.join("&")},u.prototype.hash=function(){return this.hash_||(this.hash_=a.hashToHex(a.toByteString(this.digest()),a.Seed.BEHAVIOR_EVENT)),this.hash_},u.prototype.setHash=function(n){this.hash_=n},u.prototype.reHash=function(){this.hash_=null,this.hash()},u.prototype.equals=function(n){if(this.hash()!==n.hash()||this[r.FIELDS.NAME]!==n[r.FIELDS.NAME]||this[r.FIELDS.TYPE]!==n[r.FIELDS.TYPE]||this[r.FIELDS.CATEGORY]!==n[r.FIELDS.CATEGORY]||this[r.FIELDS.REVENUE]!==n[r.FIELDS.REVENUE])return!1;var t=this[r.FIELDS.OPTIONS]||{},e=n[r.FIELDS.OPTIONS]||{},o=i.filter(i.keys(t),(function(n){return t.hasOwnProperty(n)})),a=i.filter(i.keys(e),(function(n){return e.hasOwnProperty(n)}));if(o.length!==a.length)return!1;for(var u=0;u<o.length;u++){var c=o[u];if(!e.hasOwnProperty(c)||t[c]!==e[c])return!1}return!0},u.prototype.getValueOrDefault=function(n,t){var e=o(this,n);return i.isUndefined(e)?t:e},u.prototype.setFieldValue=function(n,t){n!==r.FIELDS.NAME&&n!==r.FIELDS.TYPE&&n!==r.FIELDS.CATEGORY&&n!==r.FIELDS.REVENUE&&n!==r.FIELDS.OPTIONS||(this[n]=t,this.reHash())},t.j=c,c.prototype.getValueOrDefault=function(n,t){if(0===n.length)return this;var e={};e[r.FIELDS.TIME]=this[r.FIELDS.TIME],e[r.FIELDS.SESSION_ID]=this[r.FIELDS.SESSION_ID],e[r.FIELDS.SESSION_INDEX]=this[r.FIELDS.SESSION_INDEX];var a=o(e,n);return i.isUndefined(a)?this.eventBase.getValueOrDefault(n,t):a},c.prototype.setFieldValue=function(n,t){n===r.FIELDS.TIME||n===r.FIELDS.SESSION_ID||n===r.FIELDS.SESSION_INDEX?this[n]=t:this.eventBase.setFieldValue(n,t)};var s={n:"name",y:"type",c:"category",r:"revenue",s:"session_id",o:"tags",si:"session_index"};c.prototype.readableEvent=function(){var n,t,e=function(n){return i.isString(n)?'"'+n+'"':n},o=this,a=[];i.each([r.FIELDS.NAME,r.FIELDS.TYPE,r.FIELDS.CATEGORY,r.FIELDS.REVENUE,r.FIELDS.SESSION_ID],(function(r){n=s[r],t=o.getValueOrDefault([r]),i.isUndefined(t)||a.push(n+": "+e(t))}));var u=[];if(n=s[r.FIELDS.OPTIONS],t=o.getValueOrDefault([r.FIELDS.OPTIONS]),i.isUndefined(t)||(i.each(t,(function(n,t){u.push(t+": "+String(e(n)))})),a.push(n+": {\n\t\t"+u.join(",\n\t\t")+"\n\t}")),t=o.getValueOrDefault([r.FIELDS.TIME]),i.isNumber(t)&&(t=e(new Date(t).toString())),!i.isUndefined(t)){a.push("timestamp: "+t)}return"{\n\t"+a.join(",\n\t")+"\n}"},c.prototype.toObject=function(n){var t,e,o={},a=this;i.each([r.FIELDS.NAME,r.FIELDS.TYPE,r.FIELDS.CATEGORY,r.FIELDS.REVENUE,r.FIELDS.OPTIONS,r.FIELDS.SESSION_INDEX],(function(n){t=s[n],e=a.getValueOrDefault([n],n===r.FIELDS.OPTIONS?{}:void 0),i.isUndefined(e)||(o[t]=e)}));var u=s[r.FIELDS.OPTIONS],c=s[r.FIELDS.REVENUE];if(n&&n.revenueAsTag&&o[c]&&(o[u]=o[u]||{},o[u][c]=o[c],delete o[c]),e=a.getValueOrDefault([r.FIELDS.TIME]),i.isNumber(e))if(n&&n.timeAsTimestamp){o.timestamp=new Date(e)}else{o.time=e}return o}},5434:function(n,t,e){var i=e(9314);t.initializeStore=i.initialize,t.addEvent=i.addEvent,t.getEvents=i.getEvents,t.getEventCount=i.getEventCount},2289:function(n,t,e){var i=e(5093).j,r=e(3792),o=e(2657),a=e(5093).x;t.CURRENT_SESSION_INDEX=0;var u=18e5;function c(n,e){var i;i=t.isInSameSession(n,e)?n.getValueOrDefault([o.FIELDS.SESSION_ID]):e.getValueOrDefault([o.FIELDS.TIME]),e.setFieldValue(o.FIELDS.SESSION_ID,i)}function s(n,e,i){var r,a=n.getValueOrDefault([o.FIELDS.SESSION_INDEX]);r=t.isInSameSession(e,n)?a:i?a+1:a-1,e.setFieldValue(o.FIELDS.SESSION_INDEX,r)}t.isInSameSession=function(n,t){var e=n.getValueOrDefault([o.FIELDS.TIME],0),i=t.getValueOrDefault([o.FIELDS.TIME],0);return Math.abs(e-i)<u},t.updateSessionId=function(n,t){if(n){var e=n.getValueOrDefault([o.FIELDS.TIME]),r=n.getValueOrDefault([o.FIELDS.SESSION_ID]),u=t.getValueOrDefault([o.FIELDS.TIME]);e="number"!=typeof e?u-36e5:e,r="number"!=typeof r?e:r,c(n=new i(new a("",""),e,r),t)}else t.setFieldValue(o.FIELDS.SESSION_ID,t.getValueOrDefault([o.FIELDS.TIME]))},t.updateSessionIndex=function(n,t){if(n){var e=n.getValueOrDefault([o.FIELDS.TIME]),r=n.getValueOrDefault([o.FIELDS.SESSION_INDEX]),u=t.getValueOrDefault([o.FIELDS.TIME]),c=n.getValueOrDefault([o.FIELDS.SESSION_ID]);e="number"!=typeof e?u-36e5:e,r="number"!=typeof r?0:r,c="number"!=typeof c?e:c,s(n=new i(new a("",""),e,c,r),t,!1)}else t.setFieldValue(o.FIELDS.SESSION_INDEX,0)},t.sessionize=function(n){var e=n.length;if(0!==e){n[0].setFieldValue(o.FIELDS.SESSION_ID,n[0].getValueOrDefault([o.FIELDS.TIME]));for(var i=1;i<e;i++)c(n[i-1],n[i]);var a=t.CURRENT_SESSION_INDEX,f=n[e-1].getValueOrDefault([o.FIELDS.TIME]);r.now()-f>u&&(a+=1),n[e-1].setFieldValue(o.FIELDS.SESSION_INDEX,a);for(i=e-1;i>0;i--)s(n[i],n[i-1],!0)}},t.reindexIfNecessary=function(n,t,e){var i=function(n){for(var t=0;t<n.length;t++){var e=n[t].getValueOrDefault([o.FIELDS.SESSION_INDEX]);n[t].setFieldValue(o.FIELDS.SESSION_INDEX,e+1)}};-1===n.getValueOrDefault([o.FIELDS.SESSION_INDEX])&&(i(t),i(e))},t.sessionSortPredicate=function(n,t){return n[o.FIELDS.TIME]-t[o.FIELDS.TIME]},t.applyMigrations=function(n){return!1}},9314:function(n,t,e){var i=e(9576),r=e(2805),o=e(3792),a=e(1852),u=e(4797),c=e(2678),s=e(1685),f=t,l=e(5093).j,d=e(2657),h=e(5093).x,v=e(2289),p=e(4041),g=p.get("stores/visitor_events"),m=p.get("stores/visitor_events_manager"),_={EVENTBASE:"eb",HASH:"h",TIMEBASE:"tb",TIMESTAMPS:"ts",DELTA:"d",INDEX:"i"};function w(n){u.dispatch(r.SET_VISITOR_EVENTS,n)}function y(n){u.dispatch(r.UPDATE_BEHAVIOR_STORE,{key:"baseMap",value:n})}function b(n){u.dispatch(r.UPDATE_BEHAVIOR_STORE,{key:"eventQueue",value:n})}function E(n){u.dispatch(r.UPDATE_BEHAVIOR_STORE,{key:"lastEvent",value:n})}function I(){return g.getEvents()}function A(){return m.getBaseMap()}function T(){return m.getEventQueue()}function S(){return m.getLastEvent()}function k(){var n=I().concat(T()),t=!1;return n.length>1e3&&(n=n.slice(-1e3),t=!0),w(n),b([]),t}t.initialize=function(n,t){if(!m.getInitialized()){f.S(n,t);var e=I();e.length>0&&E(e[e.length-1]);var i=T();i.length>0&&E(i[i.length-1]),u.dispatch(r.UPDATE_BEHAVIOR_STORE,{key:"initialized",value:!0})}},t.addEvent=function(n){c.debug("Behavior store: adding event",n);var t=f.k(n);E(t),b(T().concat(t)),v.reindexIfNecessary(S(),I(),T()),f.R(T())},t.getEvents=function(){return T().length>0&&(k()&&v.sessionize(I()),f.N(I()),f.R(T())),I()},t.getEventCount=function(){return T().length+I().length},f.S=function(n,t){f.D(n,t)&&(f.N(I()),f.R(T())),v.sessionize(I())},f.D=function(n,t){if(0===n.length&&0===t.length)return w([]),b([]),!1;var e=!1,i=n[0]||t[0];return _.EVENTBASE in i?(w(f.C(n)),b(f.C(t))):(e=!0,w(f.O(n)),b(f.O(t))),T().length>0&&(k(),e=!0),w(f._updateBaseMapAndMaybeDedupe(I())),f._migrateEventBasesAndUpdateStore()&&(e=!0),e},f.O=function(n){for(var t=[],e=0;e<n.length;e++){var i=n[e],r=f.P(i);t[e]=new l(r,i[d.FIELDS.TIME])}return t},f._migrateEventBasesAndUpdateStore=function(){var n=!1,t=f.M();return v.applyMigrations(t)&&(n=!0,y({}),w(f._updateBaseMapAndMaybeDedupe(I())),b(f._updateBaseMapAndMaybeDedupe(T()))),n},f.L=function(){return o.now()},f.k=function(n){var t,e=n.name,i=n.type||"default",r=n.category||a.OTHER,o=n.tags||{};n.revenue&&(t=n.revenue);var u=new h(e,i,r,o,t);u=f.V(u);var c=f.L(),s=new l(u,c,-1);return v.updateSessionId(S(),s),v.updateSessionIndex(S(),s),s},f._updateBaseMapAndMaybeDedupe=function(n){for(var t=0;t<n.length;t++)n[t].eventBase=f.V(n[t].eventBase);return n},f.N=function(n){var t=f.F(n);s.persistBehaviorEvents(t)},f.R=function(n){var t=f.F(n);s.persistBehaviorEventQueue(t)},f.q=function(){var n;m.getCleared()||(w([]),b([]),f.N(I()),f.R(T()),y({}),E(null),n=!0,u.dispatch(r.UPDATE_BEHAVIOR_STORE,{key:"cleared",value:n}))},f.V=function(n){var t=n.hash(),e=A(),r=e[t];if(i.isUndefined(r))return e[t]=[n],y(e),n;for(var o=0;o<r.length;o++)if(n.equals(r[o]))return r[o];return r.push(n),y(e),n},f.M=function(){var n=[],t=A();for(var e in t)!t.hasOwnProperty(e)||(n=n.concat(t[e]));return n},f.F=function(n){for(var t=function(n){var t={};t[d.FIELDS.NAME]=n.getValueOrDefault([d.FIELDS.NAME]),t[d.FIELDS.TYPE]=n.getValueOrDefault([d.FIELDS.TYPE]);var e=n.getValueOrDefault([d.FIELDS.CATEGORY]);i.isUndefined(e)||(t[d.FIELDS.CATEGORY]=e);var r=n.getValueOrDefault([d.FIELDS.REVENUE]);i.isUndefined(r)||(t[d.FIELDS.REVENUE]=r);var o=n.getValueOrDefault([d.FIELDS.OPTIONS]);return i.isUndefined(o)||(t[d.FIELDS.OPTIONS]=o),t},e=_,r=[],o="_idx_",a=0;a<n.length;a++){var u,c,s=n[a],f=s.eventBase;if(f.hasOwnProperty(o)){u=r[f._idx_];var l=s[d.FIELDS.TIME]-(u[e.TIMEBASE]||0);(c={})[e.DELTA]=l,c[e.INDEX]=a,u[e.TIMESTAMPS].push(c)}else(u={})[e.EVENTBASE]=t(s),u[e.HASH]=f.hash(),u[e.TIMEBASE]=s[d.FIELDS.TIME],(c={})[e.DELTA]=0,c[e.INDEX]=a,u[e.TIMESTAMPS]=[c],r.push(u),f._idx_=r.length-1}for(a=0;a<n.length;a++)delete n[a].eventBase._idx_;return r},f.P=function(n,t){var e=new h(n[d.FIELDS.NAME],n[d.FIELDS.TYPE],n[d.FIELDS.CATEGORY],n[d.FIELDS.OPTIONS],n[d.FIELDS.REVENUE]);return i.isUndefined(t)||e.setHash(t),e},f.C=function(n){for(var t=_,e=[],i=0;i<n.length;i++)for(var r=n[i],o=f.P(r[t.EVENTBASE],r[t.HASH]),a=r[t.TIMEBASE],u=r[t.TIMESTAMPS],c=0;c<u.length;c++){var s=u[c],d=new l(o,a+s[t.DELTA]);e[s[t.INDEX]]=d}return e},t.deserialize=function(n){return f.C(n)},t.mergeAllEvents=function(n){var t=[].concat.apply([],n);return t.sort(v.sessionSortPredicate),v.sessionize(t),t}},2805:function(n,t,e){var i=e(2624);n.exports=i({LOG:null,SET_LOGLEVEL:null,INITIALIZE_STATE:null,SET_DOMCONTENTLOADED:null,ACTIVATE:null,UPDATE_BEHAVIOR_STORE:null,DATA_LOADED:null,SET_CLIENT_NAME:null,SET_CLIENT_VERSION:null,LOAD_PERSISTED_LAYER_STATES:null,RECORD_GLOBAL_DECISION:null,RECORD_LAYER_DECISION:null,ENSURE_ORIGINAL_PUSHSTATE:null,ENSURE_ORIGINAL_REPLACESTATE:null,SET_VISITOR_ATTRIBUTES:null,SET_VISITOR_ATTRIBUTE_PENDING:null,LOAD_EXISTING_VISITOR_PROFILE:null,SET_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENT_QUEUE:null,SET_VISITOR_ID:null,SET_VISITOR_ID_VIA_API:null,REFRESH_SESSION:null,LOAD_SESSION_STATE:null,UPDATE_VARIATION_ID_MAP:null,MERGE_VARIATION_ID_MAP:null,UPDATE_PREFERRED_LAYER_MAP:null,MERGE_PREFERRED_LAYER_MAP:null,RECORD_LAYER_DECISION_EVENT_ID:null,TRACK_VIEW_ACTIVATED_EVENT:null,REGISTER_ASYNC_DEFERRED:null,RESOLVE_DEFERRED:null,REJECT_DEFERRED:null,REGISTER_PLUGIN:null,ADD_CLEANUP_FN:null,CLEAR_CLEANUP_FN:null,ACTION_EXECUTED:null,REGISTER_ACTION:null,SET_VIEW_ACTIVE_STATE:null,UPDATE_PARSED_VIEW_METADATA:null,UPDATE_USER_SUPPLIED_METADATA:null,REGISTER_VIEWS:null,SET_GLOBAL_TAGS:null,SET_VIEW_BATCHING:null,RESET_VIEW_STATES:null,ATTACH_EVENT_STREAM_PUBLISHERS:null,DETACH_EVENT_STREAM_PUBLISHERS:null,LOAD_DIRECTIVE:null,SET_COOKIE_AGE:null,SET_COOKIE_DOMAIN:null,SET_COOKIE_AUTO_REFRESH:null,XDOMAIN_SET_DEFAULT_FRAME:null,XDOMAIN_ADD_FRAME:null,XDOMAIN_SET_MESSAGE:null,XDOMAIN_ADD_SUBSCRIBER:null,XDOMAIN_SET_CANONICAL_ORIGINS:null,XDOMAIN_SET_DISABLED:null,ADD_EMITTER_HANDLER:null,REMOVE_EMITTER_HANDLER:null,SET_INTEGRATION_SETTINGS:null,ADD_CHANGE:null,SET_CHANGE_APPLIER:null,REMOVE_ACTION_STATE:null,ANNOUNCE_PENDING_REDIRECT:null,LOAD_REDIRECT_DATA:null,REGISTER_TRACKED_REDIRECT_DATA:null,SET_PENDING_EVENT:null,REMOVE_PENDING_EVENT:null,LOAD_PENDING_EVENTS:null,SANDBOXED_FUNCTIONS_ADDED:null,SET_RUM_DATA:null,RECORD_API_USAGE:null,INITIALIZE_CHANGE_METRICS:null,RECORD_ACTIVATION_TYPE_USAGE:null,RECORD_AUDIENCE_USAGE:null,RECORD_CHANGE_MACROTASK_RATE:null,RECORD_CHANGE_OVERHEATED:null,RECORD_CHANGE_TYPE_USAGE:null,RECORD_DOM_OBSERVATION_OCCURENCE:null,RECORD_INTEGRATION_USAGE:null,RECORD_LAYER_FEATURE_USAGE:null,RECORD_LAYER_POLICY_USAGE:null,RECORD_RECOMMENDATIONS_USAGE:null,RECORD_VIEW_FEATURE_USAGE:null,RECORD_VIEWS_INITIALLY_ACTIVATED_COUNT:null,RECORD_VISITOR_ID_LOCATOR_USAGE:null,RECORD_VISITOR_ID_ERROR:null,RECORD_STICKY_BUCKETING_FEATURE:null,SET_PERFORMANCE_MARKS_DATA:null,FINALIZE_BATCH_SNAPSHOT:null,REGISTER_PREVIOUS_BATCH:null,REGISTER_TRACKER_VISITOR:null,REGISTER_TRACKER_EVENT:null,REGISTER_TRACKER_DECISION:null,RESET_TRACKER_EVENTS:null,RESET_TRACKER_PREVIOUS_BATCHES:null,RESET_TRACKER_STORE:null,SET_TRACKER_POLLING:null,SET_TRACKER_BATCHING:null,SET_TRACKER_SEND_EVENTS:null,SET_TRACKER_PERSISTABLE_STATE:null,SET_TRACKER_DIRTY:null,UPDATE_TRACKER_VISITOR_ATTRIBUTES:null,SET_UA_DATA:null})},8964:function(n,t,e){var i=e(9576),r=e(2624);t.COOKIES={OPT_OUT:"optimizelyOptOut",PREVIEW:"optimizelyPreview",REDIRECT:"optimizelyRedirectData",SESSION_STATE:"optimizelySessionState",TOKEN:"optimizelyToken",VISITOR_ID:"optimizelyEndUserId",VISITOR_UUID:"optimizelyPPID"},t.LayerActivationTypes={CONDITIONAL:"conditional",IMMEDIATE:"immediate",MANUAL:"manual",READY:"ready",TIMEOUT:"timeout"},t.LogLevel={OFF:0,ERROR:1,WARN:2,INFO:3,DEBUG:4},t.Lifecycle=r({preActivate:null,postVisitorProfileLoad:null,postViewsActivated:null,postActivate:null}),t.ViewActivationTypes={immediate:"immediate",manual:"manual",callback:"callback",polling:"polling",URLChanged:"url_changed",DOMChanged:"dom_changed"},t.StorageKeys={PENDING_EVENTS:"pending_events",RELAYED_EVENTS:"relayed_events"},t.PluginTypes=r({visitorProfileProviders:null,viewProviders:null,audienceMatchers:null,viewMatchers:null,analyticsTrackers:null,viewTagLocators:null,userFeatureDefs:null,apiModules:null,changeAppliers:null,deciders:null,eventImplementations:null,viewTriggers:null}),t.ResourceTimingAttributes=r({connectStart:null,connectEnd:null,decodedBodySize:null,domainLookupStart:null,domainLookupEnd:null,duration:null,encodedBodySize:null,fetchStart:null,requestStart:null,responseStart:null,responseEnd:null,secureConnectionStart:null,startTime:null,transferSize:null,serverTiming:null}),t.RUMPerformanceTimingAttributes=r({blockTime:null}),t.AttributionTypes=r({FIRST_TOUCH:null,LAST_TOUCH:null}),t.SandboxedFunctions=r({XMLHttpRequest:null}),t.PerformanceData=r({performance_marks:null,resource_timing:null,performance_timing:null}),t.PerformanceCounters=r({mutation_observer_invocation:null,polling_invocation:null,match_selector_invocation:null}),t.VisitorStorageKeys={EVENTS:"events",EVENT_QUEUE:"event_queue",LAYER_MAP:"layer_map",LAYER_STATES:"layer_states",SESSION_STATE:"session_state",VISITOR_PROFILE:"visitor_profile",VARIATION_MAP:"variation_map",TRACKER_OPTIMIZELY:"tracker_optimizely"},t.AllStorageKeys=i.assign({},t.StorageKeys,t.VisitorStorageKeys),t.ListTargetingKeyTypes={COOKIE:"c",QUERY:"q",JS_VARIABLE:"j"},t.VisitorIdLocatorType={COOKIE:"cookie",JS_VARIABLE:"js",LOCALSTORAGE:"localStorage",QUERY:"query"}},1852:function(n){n.exports={OTHER:"other"}},7356:function(n,t){t.TYPES={ACTION:"action",ANALYTICS:"analytics",EDITOR:"editor",LIFECYCLE:"lifecycle"}},1372:function(n){n.exports={CLICK:"click",CUSTOM:"custom",ENGAGEMENT:"engagement",PAGEVIEW:"pageview"}},9612:function(n,t,e){var i=e(2624);t.TrackLayerDecisionTimingFlags=i({preRedirectPolicy:null,postRedirectPolicy:null,nonRedirectPolicy:null}),t.PreRedirectPolicies=i({PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT:null,PERSIST_BEFORE_REDIRECT:null}),t.PostRedirectPolicies=i({TRACK_IMMEDIATELY:null,TRACK_AFTER_SYNC:null}),t.NonRedirectPolicies=i({TRACK_IMMEDIATELY:null}),t.RedirectRelayMedia=i({COOKIE:null})},151:function(n,t,e){var i=e(7751),r=t.TOTAL_POINTS=1e4;t.bucketingNumber=function(n,t,e){return i.hashToInt(n+t,e,r)},t.isHoldback=function(n,e){return t.bucketingNumber(n,e.id,i.Seed.IGNORING)<(e.holdback||0)},t.chooseWeightedCandidate=function(n,e,r){for(var o=t.bucketingNumber(n,e,i.Seed.BUCKETING),a=0;a<r.length;a++)if(r[a].endOfRange>o)return r[a].entityId;throw new Error("Unable to choose candidate")}},6183:function(n,t,e){var i=e(9576),r=e(2805),o=e(151),a=e(6227),u=e(7065).E,c=e(4797),s=e(2678);t.isValidExperiment=function(n,t){var e,r=i.partial(i.includes,n);return s.groupCollapsed("Decision / Evaluating audiences for experiment:",t,n),e=!t.audienceIds||a.evaluate(t.audienceIds,r),s.groupEnd(),s.debug("Decision / Experiment",t,"is valid?",e),e},t.selectVariation=function(n,t,e,a,f){if(!n.variations||0===n.variations.length)throw new u('No variations in selected experiment "'+n.id+'"');if(!n.weightDistributions&&n.variations.length>1)throw new u('On selected experiment "'+n.id+'", weightDistributions must be defined if # variations > 1');var l;if(n.bucketingStrategy&&"impression"===n.bucketingStrategy)if(1===n.variations.length)l=n.variations[0].id;else{var d=a;l=o.chooseWeightedCandidate(e+d,n.id,n.weightDistributions)}else if(l=1===n.variations.length?n.variations[0].id:o.chooseWeightedCandidate(e,n.id,n.weightDistributions),f&&f[n.id]){s.debug("Decision / Using preferredVariationMap to select variation for experiment:",n.id);var h=f[n.id];if(!i.find(n.variations,{id:h}))return c.dispatch(r.RECORD_STICKY_BUCKETING_FEATURE,{feature:"stoppedVariation",id:n.id}),s.debug("Decision / Preferred variation:",h,"not found on experiment:",n.id,". Visitor not bucketed."),null;h!==l&&(c.dispatch(r.RECORD_STICKY_BUCKETING_FEATURE,{feature:"preferredVariation",id:n.id}),l=h)}var v=i.find(n.variations,{id:l});if(v)return s.debug("Decision / Selected variation:",v),v;throw new u('Unable to find selected variation: "'+l+'".')},t.getExperimentById=function(n,t){var e=i.find(n.experiments,{id:t});if(e)return e;throw new u("Unable to find selected experiment.")},t.hasVariationActionsOnView=function(n,t){return s.debug("Decision / Checking variation:",n,"for actions on pageId:",t),!!i.find(n.actions,(function(n){return n.pageId===t&&!i.isEmpty(n.changes)}))}},7065:function(n,t){function e(n){this.message=n}e.prototype=new Error,t.E=e},3378:function(n,t,e){var i=e(9576),r=e(2805),o=e(7989),a=e(6621),u=e(151),c=e(6183),s=e(7065).E,f=e(4041),l=e(8964),d=e(4797),h=e(1722),v=e(4604),p=e(2678),g=e(2119),m=f.get("stores/plugins"),_=f.get("stores/global"),w=f.get("stores/layer_data");function y(n){var t=m.getPlugin(l.PluginTypes.deciders,n);if(i.isEmpty(t))throw new Error("No deciders found for policy: "+n);return t}t.isPageIdRelevant=function(n){if(!n)return!1;var t=y(n.policy);return i.isFunction(t.includePageIdInDecisionTicket)?t.includePageIdInDecisionTicket(n):!0===t.includePageIdInDecisionTicket},t.createTicket=function(n){var t,e,r,o=i.pick(n,["bucketingId","globalHoldback","preferredVariationMap","pageId"]);return i.extend(o,{audienceIds:(t=n.visitorProfile,e=n.audiences,r=m.getAllPlugins(l.PluginTypes.audienceMatchers),i.reduce(e,(function(n,e){return a.isInAudience(t,e,r)&&n.push(e.id),n}),[])),activationId:_.getActivationId()}),o},t.decideGlobal=function(n){return{isGlobalHoldback:u.isHoldback(n.bucketingId,{id:null,holdback:n.globalHoldback})}},t.decideGroup=function(n,t){p.debug("Decision / Deciding layer for group: ",h.description(n));var e,o,a=t.preferredLayerId,c=!!a;try{(e=u.chooseWeightedCandidate(t.bucketingId,n.id,n.weightDistributions))&&"None"!==e||(o='Group traffic allocation. Visitor maps to a "hole" in the bucket space left by an experiment or campaign that\'s since been removed from the group')}catch(l){o="Group traffic allocation. Visitor maps to a point in the bucket space which has never been covered by any experiment or campaign."}if(c&&(p.debug("Decision / Using preferredLayerMap to select layer for group:",h.description(n)),a!==e&&(d.dispatch(r.RECORD_STICKY_BUCKETING_FEATURE,{feature:"preferredLayer",id:n.id}),e=a)),o)return{layerId:null,reason:o};if(!i.find(n.weightDistributions,{entityId:e})){var f="Visitor was"+(c?" sticky-":" non-sticky ")+"bucketed into a campaign ("+e+") which is not in the group";if(!c)throw new s(f);return{layerId:null,reason:f}}return{layerId:e}},t.decideLayer=function(n,t){var e,r;p.debug("Deciding: ",n,t);var a,f,l=y(n.policy),d={layerId:n.id,experimentId:null,variationId:null,isLayerHoldback:u.isHoldback(t.bucketingId,n)};if(i.isEmpty(n.experiments))throw new s("No experiments in layer.");try{if(l.decideLayer){p.debug("Decision / Using decider's custom decideLayer.");var h=l.decideLayer(n,t);e=h.experiment,r=h.variation}else p.debug("Decision / Using default decideLayer behavior."),e=l.selectExperiment(n,t.audienceIds,t.bucketingId),r=c.selectVariation(e,t.audienceIds,t.bucketingId,t.activationId,t.preferredVariationMap)}catch(v){a=v,(null!=(f=s)&&"undefined"!=typeof Symbol&&f[Symbol.hasInstance]?f[Symbol.hasInstance](a):a instanceof f)?d.reason=v.message:d.error=v}return d.experimentId=e?e.id:null,d.variationId=r?r.id:null,d.error&&(d.error.name="DecisionEngineError",o.emitError(d.error)),d},t.getDummyLayerDecision=function(n,t){var e,i=function(n,t){for(var e=0;e<n.experiments.length;e++)for(var i=0;i<n.experiments[e].variations.length;i++)if(t.indexOf(n.experiments[e].variations[i].id)>-1)return{experimentId:n.experiments[e].id,variationId:n.experiments[e].variations[i].id};return null}(n,t);return i?(p.log("Decision / Applying force variation:",i.variationId,"to Campaign",v.description(n)),e={layerId:n.id,variationId:i.variationId,experimentId:i.experimentId,isLayerHoldback:!1,reason:"force"}):(p.log("No variation matches ids:",t,"in Campaign",v.description(n)),e={layerId:n.id,variationId:null,experimentId:null,isLayerHoldback:!1,reason:"force"}),e},t.isInCohort=function(n){if(!n.experimentId||!n.variationId)return!1;var t=w.get(n.layerId);return!(g.isSingleExperimentPolicy(t.policy)&&n.isLayerHoldback)}},4041:function(n,t,e){var i=e(9576),r=e(5179),o=e(4797),a=e(1361),u=r.create(),c={action_data:e(2034),async_request:e(3685),audience_data:e(6330),change_data:e(5065),cleanup:e(1390),client_metadata:e(3642),cookie_options:e(9381),event_data:e(9610),event_emitter:e(1592),dimension_data:e(4253),directive:e(4710),global:e(1312),history:e(6662),integration_settings:e(9935),layer:e(1037),layer_data:e(8336),log:e(8842),observed_redirect:e(8648),pending_events:e(9990),performance:e(1053),plugins:e(4808),provider_status:e(6743),pending_redirect:e(9441),rum:e(1349),sandbox:e(8654),session:e(2043),tracker_optimizely:e(3697),ua_data:e(2604),view:e(6963),view_data:e(1522),visitor:e(9984),visitor_attribute_entity:e(4375),visitor_events:e(5847),visitor_events_manager:e(9721),visitor_id:e(7022),visitor_bucketing:e(1217),xdomain:e(5417)};c.group_data=e(3881),o.registerStores(c),i.forOwn(c,(function(n,t){u.register("stores/"+t,o.getStore(t))})),u.register("core/plugins/matchers/key_value",a),n.exports=u},4819:function(n,t,e){var i=e(9576),r=e(2805),o=e(7989),a=e(8718),u=e(6639).U,c=e(8964),s=e(4797),f=e(2678),l=t.JSONParseError=u("JSONParseError"),d=e(4005),h=e(2676),v=e(2188),p="optimizely_show_preview",g="optimizely_disable",m="optimizely_editor",_="optimizely_p13n",w="optimizely_x_audiences",y="optimizely_x",b="optimizely_show_preview",E="optimizely_opt_out",I="optimizely_token",A="optimizely_force_tracking";t.populateDirectiveData=function(){var n,t,e,u,T,S,k,R;!function(){var n="OFF",t=d.getQueryParamValue("optimizely_log");if(t){var e=t.split(":");""!==e[0]&&(n=String(e[0]).toUpperCase()),void 0!==e[1]&&f.setLogMatch(e[1])}f.setLogLevel(n)}(),function(){var n=v.getUserAgent()||"";if(!i.isString(n))return void f.warn("Directive / userAgent not a string");n=n.toLowerCase();var t=["googlebot","yahoo! slurp","bingbot","bingpreview","msnbot","keynote","ktxn","khte","gomezagent","alertsite","yottaamonitor","pingdom.com_bot","aihitbot","baiduspider","adsbot-google","mediapartners-google","applebot","catchpoint","phantomjs","moatbot","facebookexternalhit"],e=function(t){if(i.includes(n,t))return f.warn("Directive / Matches bot:",t),!0};i.some(t,e)&&(f.log("Directive / Disabling tracking"),s.dispatch(r.LOAD_DIRECTIVE,{trackingDisabled:!0}))}(),n=Boolean(i.result(window.optimizely,"initialized")),s.dispatch(r.LOAD_DIRECTIVE,{alreadyInitialized:n}),s.dispatch(r.LOAD_DIRECTIVE,{mutationObserverAPISupported:v.isMutationObserverAPISupported()}),function(){var n=a.get(c.COOKIES.OPT_OUT),t=d.getQueryParamValue(E),e="You have successfully opted out of Optimizely for this domain.",i="You are NOT opted out of Optimizely for this domain.";if("true"===t||"false"===t){var o="true"===t;s.dispatch(r.LOAD_DIRECTIVE,{shouldOptOut:o}),v.alert(o?e:i)}else n&&s.dispatch(r.LOAD_DIRECTIVE,{shouldOptOut:"true"===n})}(),function(){var n=!1,t=[p,g];t.push(m);for(var e=0;e<t.length;e++)if("true"===d.getQueryParamValue(t[e])){f.warn("Directive / Not activating because "+t[e]+" is set."),n=!0;break}s.dispatch(r.LOAD_DIRECTIVE,{disabled:n})}(),s.dispatch(r.LOAD_DIRECTIVE,{isEditor:!1}),s.dispatch(r.LOAD_DIRECTIVE,{isPreview:!1}),(t=d.getQueryParamValue(b))&&f.log("Directive / Is legacy preview mode"),s.dispatch(r.LOAD_DIRECTIVE,{isLegacyPreview:!!t}),s.dispatch(r.LOAD_DIRECTIVE,{isSlave:!1}),e=v.getGlobal("optlyDesktop"),(u=!(!e||i.isUndefined(e.p13nInner)))&&f.log("Directive / Is running in desktop app editor"),s.dispatch(r.LOAD_DIRECTIVE,{isRunningInDesktopApp:u}),(T="true"===d.getQueryParamValue(_))&&f.log("Directive / Is running in editor"),s.dispatch(r.LOAD_DIRECTIVE,{isRunningInV2Editor:T}),S=a.get(c.COOKIES.TOKEN)||null,k=d.getQueryParamValue(I)||S,s.dispatch(r.LOAD_DIRECTIVE,{projectToken:k}),function(){var n=a.get(c.COOKIES.PREVIEW),t=[],e=d.getQueryParamValue(w);if(e)t=a.safeDecodeURIComponent(e).split(",");else if(n)try{t=h.parse(n).forceAudienceIds}catch(v){var i=new l("Failed to parse previewCookie in registerForceAudienceIds: "+n),u={originalMessage:v.message,userError:!0};o.emitError(i,u)}t.length&&(f.log("Directive / Force Audience IDs:",t),s.dispatch(r.LOAD_DIRECTIVE,{forceAudienceIds:t}))}(),function(){var n=a.get(c.COOKIES.PREVIEW),t=[],e=d.getQueryParamValue(y);if(e)t=a.safeDecodeURIComponent(e).split(",");else if(n)try{t=h.parse(n).forceVariationIds}catch(v){var i=new l("Failed to parse previewCookie in registerForceVariationIds: "+n),u={originalMessage:v.message,userError:!0};o.emitError(i,u)}t.length&&(f.log("Directive / Force Variation IDs:",t),s.dispatch(r.LOAD_DIRECTIVE,{forceVariationIds:t}))}(),(R=d.getQueryParamValue(A))&&s.dispatch(r.LOAD_DIRECTIVE,{forceTracking:R})};t.setOptOut=function(n){n?(f.warn("Directive / Opting out"),a.set(c.COOKIES.OPT_OUT,"true",{maxAge:31536e4},!0)):a.remove(c.COOKIES.OPT_OUT),s.dispatch(r.LOAD_DIRECTIVE,{shouldOptOut:n})}},3792:function(n,t){t.now=function(){return+new Date}},5172:function(n,t){t.VERSION="0.188.1",t.NAME="js"},6954:function(n,t,e){var i=e(4041).get("stores/global");e(5133);t.getDocumentElement=function(){return document.documentElement},t.getCookieString=function(){return document.cookie||""},t.setCookie=function(n){document.cookie=n},t.querySelector=function(n){return document.querySelector(n)},t.querySelectorAll=function(n){return document.querySelectorAll(n)},t.parseUri=function(n){var e=t.createElement("a");return e.href=n,e},t.childrenOf=function(n){return Array.prototype.slice.call(n.querySelectorAll("*"))},t.createElement=function(n){return document.createElement(n)},t.isReady=function(){return i.domContentLoadedHasFired()||"interactive"===document.readyState||"complete"===document.readyState},t.isLoaded=function(){return"complete"===document.readyState},t.addReadyHandler=function(n){return document.addEventListener("DOMContentLoaded",n),function(){t.removeReadyHandler(n)}},t.removeReadyHandler=function(n){return function(){document.removeEventListener("DOMContentLoaded",n)}},t.getReferrer=function(){return document.referrer},t.getReadyState=function(){return document.readyState},t.write=function(n){if("loading"!==t.getReadyState())throw new Error("Aborting attempt to write to already-loaded document");document.write(n)},t.appendToHead=function(n){return t.appendTo(document.head,n)},t.appendTo=function(n,t){n.appendChild(t)},t.addEventListener=function(n,t,e){return document.addEventListener(n,t,e),function(){document.removeEventListener(n,t,e)}},t.getCurrentScript=function(){if(document.currentScript)return document.currentScript},t.parentElement=function(n){for(var t=n.parentNode;t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;return t}},4243:function(n,t,e){var i,r,o="optimizely_data",a=e(6639).U,u=e(147),c=e(2188),s=a("StorageError");try{r=c.getGlobal("localStorage")}catch(f){throw new s("Unable to read localStorage: "+f.toString())}if(!r)throw new s("localStorage is undefined");i=u.create(r,o),t.mM=i},7174:function(n,t){t.create=function(n){return new MutationObserver(n)},t.observe=function(n,t,e){n.observe(t,e)}},7170:function(n,t,e){var i=e(8398).Promise,r=e(2188);t.estimateStorage=function(){var n=r.getGlobal("navigator");try{return n.storage.estimate()}catch(t){return i.resolve({usage:null,quota:null})}}},9e3:function(n,t,e){var i=e(2805),r=e(6639).U,o=e(3792),a=e(4797),u=e(2188),c=e(4041).get("stores/rum"),s="optimizely:",f=t.Error=r("PerformanceError");function l(){return u.getGlobal("performance")}t.time=function(n){if(c.getSampleRum()){var t=l();if(t&&t.mark){var e=s+n;t.clearMarks(e+"Begin"),t.mark(e+"Begin")}}},t.timeEnd=function(n){if(c.getSampleRum()){var t=l();if(t&&t.mark){var e=s+n,r=t.getEntriesByName(e+"Begin");if(0===r.length)throw new f("Called timeEnd without matching time: "+n);t.clearMarks(e+"End"),t.mark(e+"End");var o=n+"Time",u=t.getEntriesByName(e+"End")[0].startTime-r[0].startTime;a.dispatch(i.SET_PERFORMANCE_MARKS_DATA,{name:o,data:{startTime:Math.round(1e3*r[0].startTime)/1e3,duration:Math.round(1e3*u)/1e3}})}}},t.setMark=function(n,t,e){if(c.getSampleRum()){var r=l();if(r&&r.mark){var o=s+n;r.mark(o),a.dispatch(i.SET_PERFORMANCE_MARKS_DATA,{name:n,data:{startTime:Math.round(1e3*t)/1e3,duration:Math.round(1e3*e)/1e3}})}}},t.now=function(){var n=l();return n?n.now():o.now()}},2188:function(n,t,e){var i=e(9576),r=e(2678);t.getUserAgent=function(){return window.navigator.userAgent},t.getLocationSearch=function(){return window.location.search},t.getNavigatorLanguage=function(){return window.navigator.language||window.navigator.userLanguage},t.getHref=function(){return window.location.href},t.getLocation=function(){return window.location},t.setLocation=function(n){window.location.replace(n)},t.setGlobal=function(n,t){window[n]=t},t.getGlobal=function(n){return window[n]},t.getGlobalByPath=function(n){for(var t=n.split("."),e=window;t.length;)try{e=e[t.shift()]}catch(i){throw r.error("Attempted to access nonexistent property. Path ",n),new Error("Attempted to access nonexistent property. Path "+n)}return e},t.addEventListener=function(){return window.addEventListener.apply(window,arguments)},t.removeEventListener=function(){return window.removeEventListener.apply(window,arguments)},t.isMutationObserverAPISupported=function(){return!i.isUndefined(window.MutationObserver)},t.alert=function(n){alert(n)},t.setTimeout=function(n,t){return setTimeout((function(){try{n()}catch(t){r.warn("Deferred function threw error:",t)}}),t)},t.setInterval=function(n,t){return setInterval((function(){try{n()}catch(t){r.warn("Polling function threw error:",t)}}),t)}},2474:function(n,t,e){var i=e(9576);t.create=function(n,t,e,r){return i.extend({category:"other"},r,{id:n,apiName:t,eventType:e})}},4658:function(n,t,e){var i=e(9576),r=e(1243),o=e(2805),a=e(7989),u=e(4041),c=e(4797),s=e(2678),f=u.get("stores/event_emitter");t.on=function(n){return n.token||(n.token=r.generate()),c.dispatch(o.ADD_EMITTER_HANDLER,n),n.token},t.off=function(n){c.dispatch(o.REMOVE_EMITTER_HANDLER,{token:n})},t.emit=function(n,t,e){var r=f.getHandlers(n,t);i.each(r,(function(i){try{i.handler.call({$di:u},n)}catch(r){!e&&i.emitErrors?(s.error("Error in handler for event:",n,r),a.emitError(r,null,t)):s.warn("Suppressed error in handler for event:",n,r)}}))}},9799:function(n,t,e){var i=e(4658);t.on=function(n){return n.publicOnly=!0,i.on(n)},t.off=i.off,t.emit=function(n){i.emit(n)}},9404:function(__unused_webpack_module,exports,__webpack_require__){var createError=__webpack_require__(3491),di=__webpack_require__(4041),Logger=__webpack_require__(2678),CSP_MODE=!1,EXEC_WITH_JQUERY=!0,ExecError=exports.Error=createError("ExecError");exports.apply=function(n,t){t=t||[],EXEC_WITH_JQUERY&&(t=t.concat(di.get("env/jquery")));try{return n.apply(void 0,t)}catch(e){throw Logger.warn("Error applying function",n,"with args:",t,e),new ExecError(e)}},exports.eval=function(str){if(CSP_MODE)throw new ExecError("eval is not supported in CSP mode");try{return EXEC_WITH_JQUERY&&(str="var $ = optimizely.get('jquery');"+str),eval(str)}catch(e){throw Logger.warn("Error executing JS:",str,e),new ExecError(e)}}},4797:function(n,t,e){var i=e(8394);n.exports=i.create()},1722:function(n,t,e){var i=e(9576);t.description=function(n){var t=!!n.name?'"'+n.name+'" ':"",e=function(n){return i.map(n.weightDistributions,"entityId")}(n).join(", ");return t+"(id "+n.id+", campaigns: "+e+")"}},4604:function(n,t,e){var i=e(9576),r=e(2805),o=e(3792),a=e(4041),u=e(4797),c=a.get("stores/global"),s=a.get("stores/session");t.recordLayerDecision=function(n,t,e){return u.dispatch(r.RECORD_LAYER_DECISION,{layerId:n,decision:e,decisionTicket:t,sessionId:s.getSessionId(),activationId:c.getActivationId(),timestamp:o.now(),revision:c.getRevision(),namespace:c.getNamespace(),pageId:t.pageId}),e},t.relatedAudienceIds=function(n){var t={},e=["and","or","not"];return i.each(n.experiments,(function(n){i.each(i.flattenDeep(n.audienceIds),(function(n){i.includes(e,n)||(t[n]=!0)}))})),i.keys(t)},t.getActivationTimeout=function(n){var t=n.activation;return t&&null!==t.timeout&&void 0!==t.timeout?t.timeout:2e3},t.description=function(n){return(n.name?'"'+n.name+'" ':"")+"("+n.id+")"},t.createSingle=function(n,t,e){return{id:n,policy:"single_experiment",holdback:0,experiments:[{id:t||"",variations:[{id:e||"",actions:[]}],audienceIds:[]}],integrationStringVersion:1}},t.createLayerState=function(n,t,e,i){return void 0===i&&(i=!1),{layerId:n,decision:{layerId:n,experimentId:t,variationId:e,isLayerHoldback:i||!1},decisionTicket:{audienceIds:[]}}},t.getIntegrationTypes=function(n){return i.keys(i.reduce(i.keys(n.integrationSettings),(function(n,t){return i.isNaN(Number(t))||(t="custom"),n[t]=1,n}),{}))}},4364:function(n,t,e){var i=e(9576);t.y=function(n,t){if(!t)return 0;for(var e=t.toString().split("."),r=n.toString().split("."),o=0;o<e.length;o++){if(i.isUndefined(r[o]))return-1;if(isNaN(Number(r[o]))){if(r[o]!==e[o])return-1}else{if(Number(r[o])<Number(e[o]))return-1;if(Number(r[o])>Number(e[o]))return 1}}return 0}},6227:function(n,t,e){var i=e(9576),r=e(2676),o=e(2678),a="or",u="not";var c={};function s(n,t){var e;if(i.isArray(n)){var u,s;n[0]in c?(u=n[0],s=n.slice(1)):(u=a,s=n),o.groupCollapsed('Condition / Applying operator "'+u+'" with args',r.stringify(s));try{e=c[u](s,t),o.debug("Condition / Result:",e)}finally{o.groupEnd()}return e}return e=t(n),o.debug("Condition / Evaluated:",r.stringify(n),":",e),e}c["and"]=function(n,t){for(var e,r,o=0;o<n.length;o++){if(!1===(e=s(n[o],t)))return!1;i.isUndefined(e)&&(r=!0)}if(!r)return!0},c[a]=function(n,t){for(var e,r=!1,o=0;o<n.length;o++){if(!0===(e=s(n[o],t)))return!0;i.isUndefined(e)&&(r=!0)}if(!r)return!1},c[u]=function(n,t){if(1!==n.length)return!1;var e=s(n[0],t);return i.isUndefined(e)?void 0:!e},n.exports={evaluate:s}},7051:function(n,t,e){var i=e(9576),r=e(1284);function o(n){if((n=(n||"").toLowerCase())in c)return n;var t=i.keys(c);return i.find(t,(function(t){var e=c[t];return i.includes(e,n)}))||"unknown"}function a(n,t,e){return t||("unknown"===n?"unknown":e?"mobile":"desktop_laptop")}t.parseUA=function(n){var t=new r(n),e=t.getBrowser(),i=t.getOS(),c=t.getDevice(),f=(i.name||"unknown").toLowerCase(),l=(e.name||"unknown").toLowerCase(),d=u(c.type,l,f);return{browser:{id:o(e.name),version:e.version},platform:{name:f,version:i.version},device:{model:s[c.model]||"unknown",type:a(l,c.type,d),isMobile:d}}};var u=function(n,t,e){if(i.includes(["mobile","tablet"],n)||i.includes(["opera mini"],t))return!0;return!!i.includes(["android","blackberry","ios","windows phone"],e)},c={gc:["chrome","chromium","silk","yandex","maxthon","chrome webview"],edge:["edge"],ie:["internet explorer","iemobile"],ff:["firefox","iceweasel"],opera:["opera","opera mini","opera tablet"],safari:["safari","mobile safari","webkit"],ucbrowser:["uc browser"]},s={iPhone:"iphone",iPad:"ipad"}},5179:function(n,t,e){var i=e(9576);function r(){this.B={}}r.prototype.register=function(n,t){if(1!==arguments.length){if(this.B[n])throw new Error("Module already registered for: "+n);this.B[n]=t}else{var e=this;i.each(n,(function(n,t){e.register(t,n)}))}},r.prototype.get=function(n){return this.B[n]},r.prototype.getModuleKeys=function(){var n=this.B;return i.keys(n)},r.prototype.evaluate=function(n){var t=n.length,e=n.slice(0,t-1),r=n[t-1];if("function"!=typeof r)throw new Error("Evaluate must take a function as last element in array");var o=i.map(e,i.bind(this.get,this));return r.apply(null,o)},r.prototype.reset=function(){this.B={}},n.exports={create:function(){return new r}}},4811:function(n,t,e){var i=e(9576);function r(n,t,e){this.H=n,this.Y=t,this.K=0,this.$=!1,this.W={},i.extend(this,e),this.X={},this.initialize&&this.initialize()}r.prototype.J=function(n,t){var e=this.W[n];e&&"function"==typeof e&&e.call(this,t,n)},r.prototype.Z=function(){return i.cloneDeep(this.X)},r.prototype.on=function(n,t){this.W[n]=i.bind(t,this)},r.prototype.observe=function(n){return this.Y.nn(this.H,n)},r.prototype.emitChange=function(){this.$=!0,this.K++},r.prototype.hasChanges=function(){return this.$},r.prototype.resetChange=function(){this.$=!1},r.prototype.getStateId=function(){return this.K},r.prototype.tn=function(){this.reset&&"function"==typeof this.reset&&this.reset(),this.initialize()},n.exports=r},8394:function(n,t,e){var i=e(9576),r=e(4811);function o(n){n=n||{},this.en={},this.rn={},this.an=0,this.un=[],this.cn=[]}function a(n,t){return function(){var e=n.indexOf(t);-1!==e&&n.splice(e,1)}}o.prototype.registerStores=function(n){i.forOwn(n,i.bind((function(n,t){this.en[t]=new r(t,this,n)}),this))},o.prototype.getStore=function(n){return this.en[n]},o.prototype.dispatch=function(n,t){this.dispatchId++,i.each(this.un,i.bind((function(e){e.call(this,n,t)}),this)),i.forOwn(this.en,(function(e){e.J(n,t)})),i.each(this.cn,i.bind((function(e){e.call(this,n,t)}),this)),i.forOwn(this.en,i.bind((function(n,t){n.hasChanges()&&this.rn[t]&&(n.resetChange(),i.each(this.rn[t],(function(t){t(n)})))}),this))},o.prototype.reset=function(){this.rn={},i.forOwn(this.en,(function(n,t){n.tn()}))},o.prototype.getState=function(){var n={};return i.forOwn(this.en,(function(t,e){n[e]=t.Z()})),n},o.prototype.onPreAction=function(n){var t=this.un;return t.push(n),a(t,n)},o.prototype.onPostAction=function(n){var t=this.cn;return t.push(n),a(t,n)},o.prototype.nn=function(n,t){return this.rn[n]||(this.rn[n]=[]),this.rn[n].push(t),a(this.rn[n],t)},n.exports={create:function(n){return new o(n)}}},2676:function(n,t,e){var i=e(9576);function r(n){var t,e,r=[Array.prototype],o=[];i.each(r,(function(n){i.isUndefined(n.toJSON)||(o.push(n.toJSON),delete n.toJSON)}));try{t=n()}catch(a){e=a}finally{i.each(o,(function(n,t){r[t].toJSON=n}))}if(e)throw e;return t}t.stringify=function(){return r(i.bind((function(){return JSON.stringify.apply(null,this)}),arguments))},t.parse=JSON.parse},6061:function(n,t,e){var i=e(9576);t.hasMatch=function(n,t,e){var r=!i.isUndefined(e)&&null!==e,o=!i.isUndefined(n)&&null!==n;switch(t||(o?"exact":"exists")){case"exists":return r;case"exact":return r&&String(e)===n;case"substring":return r&&String(e).indexOf(n)>-1;case"regex":try{return!(!o||!r)&&new RegExp(n).test(String(e))}catch(f){}return!1;case"range":var a=n.split(":"),u=parseFloat(a[0]),c=parseFloat(a[1]),s=parseFloat(e);return s>=u&&s<=c;default:return!1}}},8398:function(n,t,e){n.exports=e(44)},147:function(n,t,e){var i=e(9576),r=e(2678);function o(n,t){this.sn=n,this.fn=t}o.prototype.ln=function(n){return[this.fn,n].join("$$")},o.prototype.dn=function(n){return n.replace(this.fn+"$$","")},o.prototype.setItem=function(n,t){try{this.sn.setItem(this.ln(n),t)}catch(e){r.warn("Failed to save",n,"to localStorage:",e)}},o.prototype.removeItem=function(n){this.sn.removeItem(this.ln(n))},o.prototype.getItem=function(n){var t=null;try{t=this.sn.getItem(this.ln(n))}catch(e){}return t},o.prototype.keys=function(){var n=i.keys(this.sn);return i.map(i.filter(n,i.bind((function(n){return i.includes(n,this.fn)}),this)),i.bind(this.dn,this))},o.prototype.allKeys=function(){return i.keys(this.sn)},o.prototype.allValues=function(){return i.values(this.sn)},n.exports={create:function(n,t){return new o(n,t)},mockStorage:{keys:function(){},getItem:function(n){},removeItem:function(n){},setItem:function(n,t){}}}},9328:function(n,t,e){var i=e(6954),r=e(4658),o=e(7174);t.createDOMChangedObserver=function(){var n=i.getDocumentElement(),t={type:"viewTrigger",name:"DOMChanged"},e=o.create((function(){r.emit(t,!0)}));o.observe(e,n,{attributes:!0,childList:!0,subtree:!0,characterData:!0})}},1645:function(n,t,e){var i=e(9576),r=e(7989),o=e(8964),a=e(2676),u=e(4243).mM,c=e(2678),s=e(3455),f=e(4041).get("stores/pending_events"),l=o.StorageKeys.PENDING_EVENTS;t.persistPendingEvents=function(){try{var n=f.getEventsString();u.setItem(l,n),e(7581).setItem(l,n)}catch(t){c.warn("PendingEvents / Unable to set localStorage key, error was: ",t),r.emitInternalError(t)}},t.getPendingEvents=function(){try{return a.parse(u.getItem(l))}catch(n){return null}},t.retryPendingEvents=function(n){i.forOwn(n,(function(n,t){s.retryableRequest(n.data,t,n.retryCount)})),i.isEmpty(n)||c.log("Retried pending events: ",n)}},2376:function(n,t,e){var i=e(9576),r=e(2805),o=e(4041),a=e(8964),u=e(4658),c=e(4797);t.registerApiModule=function(n,t){i.isArray(t)&&(t=o.evaluate(t)),c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.apiModules,name:n,plugin:t})},t.registerDependency=function(n,t){o.get(n)||o.register(n,t)},t.registerVisitorProfileProvider=function(n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.visitorProfileProviders,name:n.provides,plugin:n})},t.registerViewProvider=function(n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.viewProviders,name:n.provides,plugin:n})},t.registerAudienceMatcher=function(n,t){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.audienceMatchers,name:n,plugin:t})},t.registerViewMatcher=function(n,t){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.viewMatchers,name:n,plugin:t})},t.registerAnalyticsTracker=function(n,t){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.analyticsTrackers,name:n,plugin:t})},t.registerViewTagLocator=function(n,t){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.viewTagLocators,name:n,plugin:t})},t.registerAudiencePlugin=function(n){n.dependencies&&i.each(n.dependencies,(function(n,e){t.registerDependency(e,n)}));var e,r,a="vendor."+n.vendor;e=i.isString(n.provider)?o.get(n.provider)(n.vendor):i.isFunction(n.provider)?n.provider(n.vendor):i.cloneDeep(n.provider),t.registerVisitorProfileProvider(i.extend(e,{provides:a})),r=i.isString(n.matcher)?o.get(n.matcher):n.matcher;var u={fieldsNeeded:[a],match:function(n,t){return r(n[a],t)}};t.registerAudienceMatcher(a,u)},t.registerWidget=function(n){return i.isArray(n)&&(n=o.evaluate(n)),{showToken:u.on({filter:{type:"showWidget",name:n.widgetId},handler:n.showFn}),hideToken:u.on({filter:{type:"hideWidget",name:n.widgetId},handler:n.hideFn})}},t.registerChangeApplier=function(n,t){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.changeAppliers,name:n,plugin:t})},t.registerDecider=function(n,t){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.deciders,name:n,plugin:t})},t.registerEventImplementation=function(n,t){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.eventImplementations,name:n,plugin:t})},t.registerViewTrigger=function(n,t){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.viewTriggers,name:n,plugin:t})}},9978:function(n,t,e){var i=e(9576),r=e(4041),o=":",a="holdback",u="treatment",c="",s=e(2678),f=e(2119);function l(n){return n.replace(/[^a-zA-Z0-9\.\~\!\*\(\)\']+/g,"_")}t.formatNamesAndIdsForAnalytics=function(n,t,e,o){var a={layer:n.name||c,experiment:t.name||c,variation:e.name||c};o&&(a=i.mapValues(a,l));var u,s=!n.integrationStringVersion||1===n.integrationStringVersion;if(a.experiment===c&&s)if(u=t.audienceIds,!i.isEmpty(u)&&i.includes(["and","or","not"],u[0]))a.experiment="Exp";else{var f=r.get("stores/audience_data");a.experiment=function(n,t){return i.isEmpty(t)?"everyone_else":i.reduce(t,(function(t,e){var i=n.get(e);return i?t+l(i.name?i.name:i.id)+",":t}),"").slice(0,-1)}(f,t.audienceIds)}return{names:a,idStrings:{layer:"("+l(n.id)+")",experiment:"("+l(t.id)+")",variation:"("+l(e.id)+")"}}},t.combineAndTruncateIdAndName=function(n,t,e){var i=e-t.length;if(i<0&&(s.warn("maxLength must be at least long enough to fit the entity ID, which is length"+t.length+". Defaulting to only use entity ID as name."),n=c),n===c)return t;if(n.length>i){var r=Math.min(n.length,i);return(n=n.substring(0,r))+t}return n+" "+t},t.generateAnalyticsString=function(n,e,r,c,s,l){return n.integrationStringVersion&&2===n.integrationStringVersion?function(n,e,r,u,c,s){if(f.isSingleExperimentPolicy(n.policy)&&u)return;var l=!f.isSingleExperimentPolicy(n.policy)&&u,d=t.formatNamesAndIdsForAnalytics(n,e,r,s),h=[d.names.experiment,d.names.variation],v=[d.idStrings.experiment,d.idStrings.variation];f.isSingleExperimentPolicy(n.policy)||(h.unshift(d.names.layer),v.unshift(d.idStrings.layer));var p=i.reduce(v,(function(n,t){return n+t.length}),0),g=h.length-1+(l?1:0),m=p+g*o.length;if(l&&(m+=a.length),m>c)throw new Error("The analytics string size is too low to send the entity IDs.");for(var _=c-m,w=h.length,y=[],b=h.length-1;b>=0;b--){var E=h[b],I=Math.min(E.length,Math.floor(_/w));_-=I,w--,y.unshift(E.substring(0,I))}var A=i.map(y,(function(n,t){return n+v[t]}));return l&&A.push(a),A.join(o)}(n,e,r,c,s,l):function(n,e,r,c,s,l){var d=c?a:u,h=3*o.length,v=t.formatNamesAndIdsForAnalytics(n,e,r,l),p=v.names,g=v.idStrings,m=i.reduce(g,(function(n,t){return n+t.length}),0);if(m+h+d.length>s)throw new Error("The analytics string size is too low to send the campaign, experiment, and variation IDs.");var _=s-m-h-d.length,w={};w.variation=Math.min(p.variation.length,Math.floor(_/3)),_-=w.variation,w.experiment=Math.min(p.experiment.length,Math.floor(_/2)),_-=w.experiment,w.layer=_;var y={};i.each(p,(function(n,t){y[t]=n.substring(0,w[t])}));var b=[];return f.isSingleExperimentPolicy(n.policy)||b.push(y.layer+g.layer),(b=b.concat([y.experiment+g.experiment,y.variation+g.variation,d])).join(o)}(n,e,r,c,s,l)}},859:function(n,t,e){var i=e(9576);n.exports=function(n,t){n=function(n){var t=n.split("?");if(t[1]){var e=t[1].split("#"),r=e[0],a=e[1],u=r.split("&"),c=[];return i.each(u,(function(n){0!==n.indexOf(o)&&c.push(n)})),t[1]="",c.length>0&&(t[1]="?"+c.join("&")),a&&(t[1]+="#"+a),t.join("")}return n}(n);var e=t.value;switch(t.match){case"exact":return(n=c(n))===c(e);case"regex":try{return Boolean(n.match(e))}catch(r){}return!1;case"simple":return(n=u(n))===(e=u(e));case"substring":return n=c(n,!0),e=c(e,!0),-1!==n.indexOf(e);default:return!1}};var r=["www."],o="optimizely_",a=["https?://.*?.?optimizelyedit.(com|test)/","https?://.*.?optimizelypreview.(com|test)/","https?://(edit|preview)(-hrd|-devel)?.optimizely.(com|test)/","https?://.*?.?optimizelyedit(-hrd)?.appspot.com/","https?://"];function u(n){return c(function(n){var t=n.indexOf("?");return-1!==t&&(n=n.substring(0,t)),-1!==(t=n.indexOf("#"))&&(n=n.substring(0,t)),n}(n))}function c(n,t){n=(n=n.replace("/?","?")).toLowerCase().replace(/[/&?]+$/,"");var e=a.slice(0);t||(e=e.concat(r));for(var i=e.length,o=0;o<i;o++){var u=e[o],c=new RegExp("^"+u);n=n.replace(c,"")}return n}},1361:function(n,t,e){var i=e(9576),r=e(9196).getFieldValue,o=e(6061);n.exports=function(n,t){var e=r(n,t.name.split("."));return i.isArray(e)?i.some(e,i.partial(o.hasMatch,t.value,t.match)):o.hasMatch(t.value,t.match,e)}},6217:function(n,t,e){var i=e(3113),r=e(5554),o="cdn3";t.getIP=function(){return i.makeAsyncRequest(o,a).then((function(n){return n.ip}))},t.getIPDerivedGeolocation=function(){return i.makeAsyncRequest(o,a).then((function(n){return n.location}))};function a(){r.addScriptAsync("//cdn3.optimizely.com/js/geo4.js")}},2034:function(n,t,e){var i=e(9576),r=e(2805),o=e(3694),a=e(2678);n.exports={initialize:function(){this.X={actions:{},actionState:{}},this.on(r.DATA_LOADED,this.hn),this.on(r.ACTION_EXECUTED,this.vn),this.on(r.SET_CHANGE_APPLIER,this.pn),this.on(r.REMOVE_ACTION_STATE,this.gn)},hn:function(n){var t=this;i.isEmpty(n.data.layers)||(i.each(n.data.layers,(function(n){var e;if(n.changes){var r="layerId:"+n.id;e={id:r,layerId:n.id,changeSet:n.changes,type:"layer"},o.deepFreeze(e),t.X.actions[r]=e}i.each(n.experiments,(function(r){if(r.changes){var a="experimentId:"+r.id;e={id:a,layerId:n.id,experimentId:r.id,changeSet:r.changes,type:"experiment"},o.deepFreeze(e),t.X.actions[a]=e}i.each(r.variations,(function(a){i.each(a.actions,(function(i){var u=i.pageId||i.viewId,c=r.id+":"+a.id+":"+u;e={id:c,layerId:n.id,experimentId:r.id,variationId:a.id,pageId:u,changeSet:i.changes,type:"variation"},o.deepFreeze(e),t.X.actions[c]=e}))}))}))})),this.emitChange())},vn:function(n){var t=n.actionId;i.isUndefined(t)||this.X.actionState[t]||(this.X.actionState[t]={})},pn:function(n){var t=n.actionId,e=n.changeId;this.X.actionState[t]?this.X.actionState[t][e]=n.changeApplier:a.warn("Action Data / Attempted to set changeApplier for inactive action: ",t)},gn:function(n){delete this.X.actionState[n.actionId]},get:function(n){return o.safeReference(this.X.actions[n])},getActionState:function(n){return o.safeReference(this.X.actionState[n])},getByChangeId:function(n){return i.find(this.X.actions,{changeSet:[{id:n}]})},getAllActionIdsByPageId:function(n){return i.map(i.filter(this.X.actions,{pageId:n}),"id")},getChangeApplier:function(n,t){var e=this.X.actionState[t];if(e)return e[n]},getExperimentVariationActions:function(n,t){return o.safeReference(i.filter(this.X.actions,{experimentId:n,variationId:t}))},getLayerActions:function(n){return o.safeReference(i.filter(this.X.actions,{id:"layerId:"+n}))},getExperimentActions:function(n){return o.safeReference(i.filter(this.X.actions,{id:"experimentId:"+n}))},getAll:function(){return o.safeReference(i.values(this.X.actions))}}},3685:function(n,t,e){var i=e(2805);n.exports={initialize:function(){this.X={},this.on(i.REGISTER_ASYNC_DEFERRED,this.mn),this.on(i.RESOLVE_DEFERRED,this._n),this.on(i.REJECT_DEFERRED,this.wn)},getRequest:function(n){return this.X[n]},getPromise:function(n){var t=this.getRequest(n);if(t)return t.promise},mn:function(n){this.X[n.source]={promise:n.promise,resolver:n.resolver,rejecter:n.rejecter}},_n:function(n){var t=this.getRequest(n.source);if(!t)throw new Error("No request registered for source: "+n.source);t.resolver(n.resolveWith)},wn:function(n){var t=this.getRequest(n.source);if(!t)throw new Error("No request registered for source: "+n.source);if(!t.rejecter)throw new Error("No rejecter registered for source: "+n.source);t.rejecter(n.rejectWith)}}},6330:function(n,t,e){var i=e(9576),r=e(2805),o=e(3694);function a(n,t){return t||(t={}),n?(i.each(n,(function(n){if(!i.isString(n)){if(i.isObject(n)){var e=n.type,r=n.name||"_";t[e]||(t[e]={}),t[e][r]=!0}i.isArray(n)&&a(n,t)}})),t):t}n.exports={initialize:function(){this.X={audiences:{},featuresNeeded:{}},this.on(r.DATA_LOADED,this.hn)},hn:function(n){i.isEmpty(n.data.audiences)||(i.each(n.data.audiences,i.bind((function(n){o.deepFreeze(n),i.merge(this.X.featuresNeeded,a(n.conditions)),this.X.audiences[n.id]=n}),this)),this.emitChange())},getAll:function(){return o.safeReference(i.values(this.X.audiences))},getFeaturesNeeded:function(n){return o.safeReference(this.X.featuresNeeded[n]||{})},getAudiencesMap:function(){return o.safeReference(this.X.audiences)},get:function(n){return o.safeReference(this.X.audiences[n])},getAudienceName:function(n){return i.find(i.values(this.X.audiences),{id:n}).name||"Aud "+n}}},5065:function(n,t,e){var i=e(9576),r=e(2805),o=e(3694);n.exports={initialize:function(){this.X={},this.on(r.ADD_CHANGE,this.yn),this.on(r.DATA_LOADED,this.hn)},getChange:function(n){return this.X[n]},hn:function(n){i.isEmpty(n.data.changes)||i.each(n.data.changes,i.bind(this.yn,this))},yn:function(n){o.deepFreeze(n),this.X[n.id]=n,this.emitChange()}}},1390:function(n,t,e){var i=e(9576),r=e(2805),o=e(8964);n.exports={initialize:function(){this.X={},i.each(o.Lifecycle,i.bind((function(n){this.X[n]=[]}),this)),this.on(r.ADD_CLEANUP_FN,this.bn),this.on(r.CLEAR_CLEANUP_FN,this.En)},getCleanupFns:function(n){return i.cloneDeep(this.X[n])},bn:function(n){this.X[n.lifecycle].push(n.cleanupFn),this.emitChange()},En:function(n){var t=this.X[n.lifecycle];if(n.cleanupFn){var e=t.indexOf(n.cleanupFn);e>-1&&(t.splice(e,1),this.emitChange())}else this.X[n.lifecycle]=[],this.emitChange()}}},3642:function(n,t,e){var i=e(2805),r=e(5172);n.exports={initialize:function(){this.X={name:r.NAME,version:r.VERSION},this.on(i.SET_CLIENT_NAME,this.In),this.on(i.SET_CLIENT_VERSION,this.An)},getClientName:function(){return this.X.name},getClientVersion:function(){return this.X.version},In:function(n){n&&(this.X.name=n),this.emitChange()},An:function(n){n&&(this.X.version=n),this.emitChange()}}},9381:function(n,t,e){var i=e(2805);n.exports={initialize:function(){this.X={currentDomain:null,defaultAgeSeconds:15552e3,autoRefresh:true},this.on(i.SET_COOKIE_DOMAIN,this.Tn),this.on(i.SET_COOKIE_AGE,this.Sn),this.on(i.SET_COOKIE_AUTO_REFRESH,this.kn)},getCurrentDomain:function(){return this.X.currentDomain},getDefaultAgeInSeconds:function(){return this.X.defaultAgeSeconds},getAutoRefresh:function(){return this.X.autoRefresh},Tn:function(n){this.X.currentDomain=n,this.emitChange()},Sn:function(n){this.X.defaultAgeSeconds=n,this.emitChange()},kn:function(n){this.X.autoRefresh=n,this.emitChange()}}},4253:function(n,t,e){var i=e(9576),r=e(2805),o=e(3694);n.exports={initialize:function(){this.X={},this.on(r.DATA_LOADED,this.hn)},hn:function(n){i.isEmpty(n.data.dimensions)||(i.each(n.data.dimensions,i.bind((function(n){o.deepFreeze(n),this.X[n.id]=n}),this)),this.emitChange())},getAll:function(){return o.safeReference(i.values(this.X))},getById:function(n){return o.safeReference(this.X[n])},getByApiName:function(n){return o.safeReference(i.find(i.values(this.X),{apiName:n}))}}},4710:function(n,t,e){var i=e(9576),r=e(2805);n.exports={initialize:function(){this.X={disabled:!1,forceAudienceIds:[],forceVariationIds:[],alreadyInitialized:!1,mutationObserverAPISupported:!1,isEditor:!1,isPreview:!1,isLegacyPreview:!1,isSlave:!1,previewLayerIds:[],projectToken:null,shouldOptOut:!1,trackingDisabled:!1,isRunningInV2Editor:!1,isRunningInDesktopApp:!1,forceTracking:!1},this.on(r.LOAD_DIRECTIVE,this.Rn)},getAll:function(){return i.cloneDeep(this.X)},conflictInObservingChanges:function(){return!this.X.mutationObserverAPISupported},isDisabled:function(){return this.X.disabled},isEditor:function(){return this.X.isEditor},clientHasAlreadyInitialized:function(){return this.X.alreadyInitialized},getForceAudienceIds:function(){return this.X.forceAudienceIds},getForceVariationIds:function(){return this.X.forceVariationIds},getPreviewLayerIds:function(){return this.X.previewLayerIds},getProjectToken:function(){return this.X.projectToken},getForceTracking:function(){return this.X.forceTracking},shouldActivate:function(){return!this.X.isEditor&&!this.isDisabled()},shouldBootstrapDataForPreview:function(){return this.X.isPreview},shouldBootstrapDataForEditor:function(){return this.X.isEditor},shouldInitialize:function(){return!(this.shouldLoadPreview()||this.isDisabled()||this.getProjectToken())},shouldLoadPreview:function(){return!(this.X.isPreview||this.X.isLegacyPreview||!this.getProjectToken()||this.X.isEditor)},shouldBailForDesktopApp:function(){return!this.X.isEditor&&this.X.isRunningInDesktopApp},shouldLoadInnie:function(){return!this.X.isSlave&&!this.X.isEditor&&this.X.isRunningInV2Editor},shouldObserveChangesIndefinitely:function(){return this.X.mutationObserverAPISupported},shouldObserveChangesUntilTimeout:function(){return!this.shouldObserveChangesIndefinitely()},shouldOptOut:function(){return this.X.shouldOptOut},shouldSendTrackingData:function(){return!this.X.trackingDisabled&&(!!this.X.forceTracking||!this.X.isPreview&&i.isEmpty(this.getForceVariationIds())&&i.isEmpty(this.getForceAudienceIds()))},isSlave:function(){return this.X.isSlave},isRunningInDesktopApp:function(){return this.X.isRunningInDesktopApp},isRunningInV2Editor:function(){return this.X.isRunningInV2Editor},Rn:function(n){i.extend(this.X,n),this.emitChange()}}},9610:function(n,t,e){var i=e(9576),r=e(2805),o=e(3694);n.exports={initialize:function(){this.X={},this.on(r.DATA_LOADED,this.hn)},getAll:function(){return o.safeReference(i.values(this.X))},getEventsMap:function(){return o.safeReference(this.X)},get:function(n){return o.safeReference(this.X[n])},getByApiName:function(n){return o.safeReference(i.find(i.values(this.X),{apiName:n}))},getByPageId:function(n){return o.safeReference(i.filter(this.X,{pageId:n}))},hn:function(n){i.isEmpty(n.data.events)||(i.each(n.data.events,i.bind((function(n){n.pageId||(n.pageId=n.viewId),o.deepFreeze(n),this.X[n.id]=n}),this)),this.emitChange())}}},1592:function(n,t,e){var i=e(9576),r=e(2805);function o(n){var t=[];return n&&i.isObject(n)?(n.type&&t.push(n.type),t.push("|"),n.type&&n.name&&t.push(n.name),t.join("")):"|"}n.exports={initialize:function(){this.X={handlers:{}},this.on(r.ADD_EMITTER_HANDLER,this.Nn),this.on(r.REMOVE_EMITTER_HANDLER,this.Dn)},getHandlers:function(n,t){var e=[null,{type:n.type},{type:n.type,name:n.name}],r=[];return i.each(e,i.bind((function(n){var t=o(n),e=this.X.handlers[t];e&&(r=r.concat(e))}),this)),t&&(r=i.filter(r,(function(n){return!n.publicOnly}))),r},Nn:function(n){var t=o(n.filter);this.X.handlers[t]||(this.X.handlers[t]=[]),this.X.handlers[t].push({handler:n.handler,token:n.token,publicOnly:!!n.publicOnly,emitErrors:!!n.emitErrors}),this.emitChange()},Dn:function(n){var t=!1,e=n.token;i.forOwn(this.X.handlers,i.bind((function(n,r){var o=i.filter(n,(function(n){return n.token!==e}));o.length!==n.length&&(t=!0,this.X.handlers[r]=o)}),this)),t&&this.emitChange()}}},1312:function(n,t,e){var i=e(9576),r=e(2805),o=e(3694);n.exports={initialize:function(){this.X={holdback:0,isGlobalHoldback:null,listTargetingKeys:[],revision:null,projectId:null,accountId:null,namespace:null,activationId:null,activationTimestamp:null,dcpServiceId:null,dcpKeyfieldLocators:[],recommenderServices:[],anonymizeIP:null,projectJS:null,snippetId:null,plugins:[],domContentLoaded:!1,experimental:{}},this.on(r.DATA_LOADED,this.Cn),this.on(r.ACTIVATE,this.On),this.on(r.RECORD_GLOBAL_DECISION,this.xn),this.on(r.SET_DOMCONTENTLOADED,this.Pn)},getRevision:function(){return this.X.revision},getGlobalHoldbackThreshold:function(){return this.X.holdback},getProjectId:function(){return this.X.projectId},getSnippetId:function(){return this.X.snippetId},getAccountId:function(){return this.X.accountId},getNamespace:function(){return this.X.namespace},getActivationId:function(){return this.X.activationId},getActivationTimestamp:function(){return this.X.activationTimestamp},getAnonymizeIP:function(){return this.X.anonymizeIP},isGlobalHoldback:function(){return!!this.X.isGlobalHoldback},getListTargetingKeys:function(){return this.X.listTargetingKeys.slice()},getDCPServiceId:function(){return this.X.dcpServiceId},getDCPKeyfieldLocators:function(){return this.X.dcpKeyfieldLocators},getRecommenderServices:function(){return this.X.recommenderServices},getProjectJS:function(){return this.X.projectJS},getPlugins:function(){return this.X.plugins},getExperimental:function(){return o.safeReference(this.X.experimental)},domContentLoadedHasFired:function(){return this.X.domContentLoaded},On:function(n){this.X.activationId=n.activationId,this.X.activationTimestamp=n.activationTimestamp,this.X.isGlobalHoldback=null},xn:function(n){var t=n.isGlobalHoldback;if(null!==this.X.isGlobalHoldback&&this.X.isGlobalHoldback!==t)throw new Error("Attempted to change already set global holdback!");this.X.isGlobalHoldback=t,this.emitChange()},Cn:function(n){var t=i.pick(n.data,["holdback","accountId","projectId","snippetId","namespace","revision","listTargetingKeys","dcpServiceId","dcpKeyfieldLocators","recommenderServices","anonymizeIP","plugins","projectJS","experimental"]);if(0!==i.keys(t).length){i.extend(this.X,{listTargetingKeys:[],dcpServiceId:null,dcpKeyfieldLocators:[]},t),this.emitChange()}},Pn:function(){this.X.domContentLoaded=!0,this.emitChange()}}},3881:function(n,t,e){var i=e(9576),r=e(2805),o=e(3694);n.exports={initialize:function(){this.X={},this.on(r.DATA_LOADED,this.hn)},hn:function(n){i.isEmpty(n.data.groups)||(i.each(n.data.groups,i.bind((function(n){o.deepFreeze(n),this.X[n.id]=n}),this)),this.emitChange())},getAll:function(){return o.safeReference(i.values(this.X))},getGroupsMap:function(){return o.safeReference(this.X)},get:function(n){return o.safeReference(this.X[n])}}},6662:function(n,t,e){var i=e(9576),r=e(2805),o=e(2188);n.exports={initialize:function(){this.X={originalPushState:null,originalReplaceState:null},this.on(r.ENSURE_ORIGINAL_PUSHSTATE,this.Mn),this.on(r.ENSURE_ORIGINAL_REPLACESTATE,this.Ln)},getOriginalPushState:function(){return this.X.originalPushState},getOriginalReplaceState:function(){return this.X.originalReplaceState},Mn:function(){this.X.originalPushState||(this.X.originalPushState=i.bind(o.getGlobal("history").pushState,o.getGlobal("history")))},Ln:function(){this.X.originalReplaceState||(this.X.originalReplaceState=i.bind(o.getGlobal("history").replaceState,o.getGlobal("history")))}}},9935:function(n,t,e){var i=e(9576),r=e(2805);n.exports={initialize:function(){this.X={},this.on(r.DATA_LOADED,this.hn),this.on(r.SET_INTEGRATION_SETTINGS,this.Vn)},hn:function(n){i.isEmpty(n.data.integrationSettings)||(i.each(n.data.integrationSettings,i.bind((function(n){this.X[n.id]=n}),this)),this.emitChange())},Vn:function(n){var t=this.X[n.id];t?i.extend(t,n):this.X[n.id]=n},getAll:function(){return i.cloneDeep(i.values(this.X))},get:function(n){return i.cloneDeep(this.X[n])},getReference:function(n){return this.X[n]}}},1037:function(n,t,e){var i=e(9576),r=e(2805),o=e(2678),a="*";n.exports={initialize:function(){this.X={},this.on(r.LOAD_PERSISTED_LAYER_STATES,this.Fn),this.on(r.RECORD_LAYER_DECISION,this.Un),this.on(r.RECORD_LAYER_DECISION_EVENT_ID,this.zn)},getLayerState:function(n,t){if(this.X[n]){var e=this.X[n];if(i.keys(e).length>1&&!t)throw new Error("View Id must be specified when more than one layerState for layer.");return t?i.cloneDeep(i.find(e,{pageId:t})):i.cloneDeep(e["*"])}},getLayerStates:function(n){var t=[];for(var e in this.X)i.forEach(this.X[e],(function(e){(i.isUndefined(n)||e.namespace===n)&&t.push(i.cloneDeep(e))}));return t},getLayerStatesForAnalytics:function(){var n=[];for(var t in this.X)i.forEach(this.X[t],(function(t){n.push(i.pick(t,["layerId","decision","decisionEventId"]))}));return n},Fn:function(n){n.merge||(this.X={}),i.each(n.layerStates,i.bind((function(n){var t=n.layerId;n.pageId||(n.pageId=n.viewId);var e=n.pageId||a,r=this.X[t];if(i.isUndefined(r))this.X[t]={},this.X[t][e]=n;else{var o=r[e];(!o||n.decisionTimestamp>(o.decisionTimestamp||0))&&(this.X[t][e]=n)}}),this)),this.emitChange()},Un:function(n){var t={layerId:n.layerId,revision:n.revision,namespace:n.namespace,pageId:n.pageId,decisionTicket:n.decisionTicket,decision:n.decision,decisionActivationId:n.activationId,decisionTimestamp:n.timestamp,decisionEventId:null},e=this.X[n.layerId]||{};n.pageId?(delete e["*"],e[n.pageId]=t):(e={})["*"]=t,this.X[n.layerId]=e,this.emitChange()},zn:function(n){var t=n.layerId,e=n.pageId||a;this.X[t]?this.X[t][e]?(this.X[t][e].decisionEventId=n.decisionId,this.emitChange()):o.warn("Not recording decision event: Layer state not found for view",e):o.warn("Not recording decision event: Campaign not registered",t)}}},8336:function(n,t,e){var i=e(9576),r=e(2805),o=e(3694),a=e(2119);n.exports={initialize:function(){this.X={layers:{},experiments:{},variations:{}},this.on(r.DATA_LOADED,this.hn)},hn:function(n){if(!i.isEmpty(n.data.layers)){var t=this;i.each(n.data.layers,(function(n){i.each(n.experiments,(function(e){n.pageIds||(n.pageIds=n.viewIds),e.campaignName||a.isSingleExperimentPolicy(n.policy)?a.isSingleExperimentPolicy(n.policy)&&n.groupId&&(e.groupId=n.groupId):e.campaignName=n.name,i.each(e.variations,(function(n){i.each(n.actions,(function(n){n.pageId||(n.pageId=n.viewId)})),t.X.variations[n.id]=n})),t.X.experiments[e.id]=e})),o.deepFreeze(n),t.X.layers[n.id]=n})),this.emitChange()}},getAll:function(){return o.safeReference(i.values(this.X.layers))},getCampaignsMap:function(){return o.safeReference(this.X.layers)},getExperimentsMap:function(){return o.safeReference(this.X.experiments)},getVariationsMap:function(){return o.safeReference(this.X.variations)},getCount:function(){return i.keys(this.X.layers).length},getAllByPageIds:function(n){return o.safeReference(i.filter(this.X.layers,(function(t){return i.some(n,i.partial(i.includes,t.pageIds))})))},get:function(n){return o.safeReference(this.X.layers[n])},getLayerByExperimentId:function(n){var t=i.find(this.X.layers,(function(t){return i.find(t.experiments,{id:n})}));return o.safeReference(t)},getExperimentByVariationId:function(n){var t;return i.some(this.X.layers,(function(e){return i.some(e.experiments,(function(e){return i.find(e.variations,{id:n})&&(t=e),t})),t})),o.safeReference(t)}}},8842:function(n,t,e){var i=e(2805);n.exports={initialize:function(){this.X={logs:[]},this.on(i.LOG,this.jn)},getLogs:function(){return this.X.logs},jn:function(n){this.X.logs.push(n),this.emitChange()},Z:function(){return this.X.logs.slice()}}},8648:function(n,t,e){var i=e(2805),r=e(3694);n.exports={initialize:function(){this.X={data:null,hasTracked:null},this.on(i.LOAD_REDIRECT_DATA,this.qn),this.on(i.REGISTER_TRACKED_REDIRECT_DATA,this.Gn)},get:function(){return r.safeReference(this.X.data)},hasTracked:function(){return this.X.hasTracked},qn:function(n){r.deepFreeze(n),this.X.data=n,this.X.hasTracked=!1,this.emitChange()},Gn:function(){this.X.hasTracked=!0}}},9990:function(n,t,e){var i=e(9576),r=e(2805),o=e(2676);n.exports={initialize:function(){this.X={},this.on(r.SET_PENDING_EVENT,this.Bn),this.on(r.REMOVE_PENDING_EVENT,this.Hn),this.on(r.LOAD_PENDING_EVENTS,this.Yn)},getEvents:function(){return this.X},getEventsString:function(){return o.stringify(this.X)},Bn:function(n){i.keys(this.X).length>=1e3&&this.Kn();var t=n.id,e=n.retryCount;this.X[t]&&this.X[t].retryCount===e||(this.X[t]={id:t,timeStamp:n.timeStamp,data:n.data,retryCount:e},this.emitChange())},Hn:function(n){delete this.X[n.id],this.emitChange()},Yn:function(n){this.X=n.events,this.Kn(),this.emitChange()},Kn:function(){for(var n=i.sortBy(this.X,"timeStamp"),t=0;t<=n.length-1e3;t++)delete this.X[n[t].id];this.emitChange()}}},9441:function(n,t,e){var i=e(9576),r=e(2805);n.exports={initialize:function(){this.X={layerId:null},this.on(r.ANNOUNCE_PENDING_REDIRECT,this.qn)},isExpectingRedirect:function(){return i.isString(this.X.layerId)},getLayerId:function(){return this.X.layerId},qn:function(n){this.isExpectingRedirect()||(this.X.layerId=n.layerId,this.emitChange())}}},1053:function(n,t,e){var i=e(9576),r=e(2805),o=e(8964);n.exports={initialize:function(){this.X={},this.X[o.PerformanceData.performance_marks]={},this.on(r.SET_PERFORMANCE_MARKS_DATA,this.$n)},$n:function(n){i.isUndefined(this.X[o.PerformanceData.performance_marks][n.name])&&(this.X[o.PerformanceData.performance_marks][n.name]=[]),this.X[o.PerformanceData.performance_marks][n.name].push(n.data),this.emitChange()},getMarks:function(){return i.mapValues(this.X[o.PerformanceData.performance_marks],(function(n){return i.map(n,(function(n){return[n.startTime,n.duration]}))}))},getDurationsFor:function(n){return i.reduce(n,i.bind((function(n,t){var e=this.X[o.PerformanceData.performance_marks][t];return e&&(n[t]=Math.round(i.reduce(e,(function(n,t){return n+t.duration}),0))),n}),this),{})}}},4808:function(n,t,e){var i=e(9576),r=e(2805),o=e(8964),a=e(2678);n.exports={initialize:function(){this.X=i.mapValues(o.PluginTypes,(function(){return{}})),this.on(r.REGISTER_PLUGIN,this.Wn)},Wn:function(n){var t=n.type,e=n.name,i=n.plugin;if(!t||!e)throw new Error("Missing information needed to register plugins: "+t+":"+e);if(!this.X[t])throw new Error("Invalid plugin type specified: "+t);this.X[t][e]=i,a.debug("Plugin Store: Registering Plugin :",n)},getAllPlugins:function(n){if(!n)return this.X;if(this.X[n])return this.X[n];throw new Error("Invalid plugin type: "+n)},getPlugin:function(n,t){if(!t||!n)throw new Error("Missing plugin parameters");return this.getAllPlugins(n)[t]||null}}},6743:function(n,t,e){var i=e(9576),r=e(2805),o=e(9196);n.exports={initialize:function(){this.X={},this.on(r.SET_VISITOR_ATTRIBUTE_PENDING,this.Xn)},getPendingAttributeValue:function(n){return n=i.isArray(n)?n.concat("pending"):[n,"pending"],o.getFieldValue(this.X,n)},Xn:function(n){o.setFieldValue(this.X,n.key,{pending:n.pending}),this.emitChange()}}},1349:function(n,t,e){var i=e(9576),r=e(2805);n.exports={initialize:function(){this.X={inRumSample:!1,id:null,src:null,RumHost:null,data:{extras:{}},apis:{},DOMObservation:{},featuresNeeded:{}},this.on(r.SET_RUM_DATA,this.Jn),this.on(r.RECORD_API_USAGE,this.Qn),this.on(r.INITIALIZE_CHANGE_METRICS,this.Zn),this.on(r.RECORD_ACTIVATION_TYPE_USAGE,this.nt),this.on(r.RECORD_AUDIENCE_USAGE,this.tt),this.on(r.RECORD_CHANGE_MACROTASK_RATE,this.et),this.on(r.RECORD_CHANGE_OVERHEATED,this.it),this.on(r.RECORD_CHANGE_TYPE_USAGE,this.rt),this.on(r.RECORD_DOM_OBSERVATION_OCCURENCE,this.ot),this.on(r.RECORD_INTEGRATION_USAGE,this.ut),this.on(r.RECORD_LAYER_FEATURE_USAGE,this.ct),this.on(r.RECORD_LAYER_POLICY_USAGE,this.st),this.on(r.RECORD_VIEW_FEATURE_USAGE,this.ft),this.on(r.RECORD_VIEWS_INITIALLY_ACTIVATED_COUNT,this.dt),this.on(r.RECORD_VISITOR_ID_LOCATOR_USAGE,this.ht),this.on(r.RECORD_VISITOR_ID_ERROR,this.vt),this.on(r.RECORD_STICKY_BUCKETING_FEATURE,this._t)},Jn:function(n){i.merge(this.X,n),this.emitChange()},Qn:function(n){this.X.apis[n.methodName]||(this.X.apis[n.methodName]=0),this.X.apis[n.methodName]++,this.emitChange()},Zn:function(){i.isUndefined(this.X.data.extras.changeMacrotaskRate)&&(this.X.data.extras.changeMacrotaskRate=0),i.isUndefined(this.X.data.extras.numOverheatedChanges)&&(this.X.data.extras.numOverheatedChanges=0)},et:function(n){i.isUndefined(this.X.data.extras.changeMacrotaskRate)&&(this.X.data.extras.changeMacrotaskRate=0),n.changeMacrotaskRate>this.X.data.extras.changeMacrotaskRate&&(this.X.data.extras.changeMacrotaskRate=n.changeMacrotaskRate),this.emitChange()},it:function(){i.isUndefined(this.X.data.extras.numOverheatedChanges)&&(this.X.data.extras.numOverheatedChanges=0),this.X.data.extras.numOverheatedChanges++,this.emitChange()},ot:function(n){this.X.DOMObservation[n.counterName]||(this.X.DOMObservation[n.counterName]=0),this.X.DOMObservation[n.counterName]++,this.emitChange()},wt:function(n,t,e){i.isUndefined(this.X.featuresNeeded[n])&&(this.X.featuresNeeded[n]={});var r=this.X.featuresNeeded[n];i.each(t,(function(n){r[n]||(r[n]={}),r[n][e]||(r[n][e]=!0)}))},ut:function(n){this.wt("integrations",n.integrations,n.layerId)},rt:function(n){this.wt("changeTypes",n.changeTypes,n.layerId)},nt:function(n){this.wt("activationTypes",[n.activationType],n.entityId),this.emitChange()},ft:function(n){this.wt("viewFeatures",n.featuresUsed,n.entityId),this.emitChange()},ct:function(n){this.wt("layerFeatures",[n.feature],n.entityId),this.emitChange()},st:function(n){this.wt("policy",[n.policy],n.layerId),this.emitChange()},tt:function(n){this.wt("audiences",n.audienceTypes,n.layerId),this.emitChange()},dt:function(n){this.X.data.extras.viewsInitiallyActivatedCount=n.viewsInitiallyActivatedCount,this.emitChange()},ht:function(n){this.wt("visitorIdLocatorType",[n.visitorIdLocatorType],n.entityId),this.emitChange()},vt:function(n){this.X.data.extras.errorCustomVisitorId=n.isError,this.emitChange()},_t:function(n){this.wt("stickyBucketing",[n.feature],n.id)},getSampleRum:function(){return this.X.inRumSample},getRumId:function(){return this.X.id},getRumHost:function(){return this.X.RumHost},getApiData:function(){return this.X.apis},getDOMObservationData:function(){return this.X.DOMObservation},getRumData:function(){return i.cloneDeep(this.X.data)},getScriptSrc:function(){return this.X.src},getFeaturesNeededData:function(){var n=this.X.featuresNeeded,t={};return i.forOwn(n,(function(n,e){var r=i.keys(n);i.isEmpty(r)||(t[e]={}),i.forEach(r,(function(r){t[e][r]=i.keys(n[r]).length}))})),t}}},8654:function(n,t,e){var i=e(2805);n.exports={initialize:function(){this.X={initialized:!1,natives:{}},this.on(i.SANDBOXED_FUNCTIONS_ADDED,this.yt)},yt:function(n){if(!n.sandboxedFunctions)throw new Error("No sandboxedFunctions found in payload");this.X.natives=n.sandboxedFunctions,this.X.initialized=!0,this.emitChange()},getAll:function(){return this.X.natives},get:function(n){if(!n)throw new Error("Missing name parameter");return this.X.natives[n]||null},isInitialized:function(){return this.X.initialized}}},2043:function(n,t,e){var i=e(9576),r=e(2805),o=e(3792),a=e(1243);n.exports={initialize:function(){this.X={lastSessionTimestamp:0,sessionId:null},this.on(r.REFRESH_SESSION,this.bt),this.on(r.LOAD_SESSION_STATE,this.Et)},getState:function(){return i.cloneDeep(this.X)},getSessionId:function(){return this.X.sessionId},Et:function(n){this.X.sessionId=n.sessionId,this.X.lastSessionTimestamp=n.lastSessionTimestamp,this.emitChange()},bt:function(){var n=o.now(),t=this.X.lastSessionTimestamp;(!this.X.sessionId||n-t>18e5)&&(this.X.sessionId=a.generate()),this.X.lastSessionTimestamp=n,this.emitChange()}}},3697:function(n,t,e){var i=e(9576),r=e(2805);n.exports={initialize:function(){this.It(),this.on(r.FINALIZE_BATCH_SNAPSHOT,this.At),this.on(r.REGISTER_PREVIOUS_BATCH,this.Tt),this.on(r.REGISTER_TRACKER_VISITOR,this.St),this.on(r.REGISTER_TRACKER_EVENT,this.kt),this.on(r.REGISTER_TRACKER_DECISION,this.Rt),this.on(r.RESET_TRACKER_EVENTS,this.Nt),this.on(r.RESET_TRACKER_STORE,this.It),this.on(r.RESET_TRACKER_PREVIOUS_BATCHES,this.Dt),this.on(r.SET_TRACKER_POLLING,this.Ct),this.on(r.SET_TRACKER_BATCHING,this.Ot),this.on(r.SET_TRACKER_SEND_EVENTS,this.xt),this.on(r.SET_TRACKER_PERSISTABLE_STATE,this.Pt),this.on(r.SET_TRACKER_DIRTY,this.Mt),this.on(r.UPDATE_TRACKER_VISITOR_ATTRIBUTES,this.Lt)},getPersistableState:function(){return this.X.isDirty?this.hasEventsToSend()||this.hasPreviousBatchesToSend()?{data:this.X.data,decisions:this.X.decisions,decisionEvents:this.X.decisionEvents,previousBatches:this.X.previousBatches}:{}:null},Pt:function(n){i.isEmpty(this.X.data)||i.isEmpty(n.data)||(this.At(),this.X.previousBatches.push(this.getEventBatch())),this.X.data=n.data||{},this.X.decisions=n.decisions||[],this.X.decisionEvents=n.decisionEvents||[],i.isEmpty(this.X.previousBatches)||i.isEmpty(n.previousBatches)?this.X.previousBatches=n.previousBatches||[]:this.X.previousBatches=this.X.previousBatches.concat(n.previousBatches),this.emitChange()},Mt:function(n){this.X.isDirty=n,this.emitChange()},kt:function(n){var t=this.Vt();(i.isEmpty(t.snapshots)||!i.isEmpty(this.X.decisionEvents))&&this.Ft(),this.Ut().events.push(n.event),this.X.decisions=n.decisions,this.Mt(!0)},Rt:function(n){this.X.decisionEvents.push(n.decisionEvent),this.X.decisions=n.decisions,this.Mt(!0)},St:function(n){i.isEmpty(this.X.data)?this.X.data=n.data:this.At(),this.X.data.visitors.push(n.visitor),this.X.decisions=n.decisions,this.X.decisionEvents=[],this.Mt(!0)},Tt:function(n){this.X.previousBatches.push(n),this.Mt(!0)},It:function(){this.X={polling:!1,shouldBatch:!0,data:{},decisions:[],decisionEvents:[],canSend:!1,isDirty:!1,previousBatches:[]},this.emitChange()},Nt:function(){var n=this.Vt();this.X.data.visitors=[n],n.snapshots=[],this.Mt(!0)},Dt:function(){this.X.previousBatches=[],this.Mt(!0)},Ct:function(n){this.X.polling=n,this.emitChange()},Ot:function(n){this.X.shouldBatch=n,this.emitChange()},xt:function(n){this.X.canSend=n,this.emitChange()},getEventBatch:function(){return i.cloneDeep(this.X.data)},getPreviousBatches:function(){return i.cloneDeep(this.X.previousBatches)},zt:function(){return this.X.decisionEvents.slice()},jt:function(){this.X.decisionEvents=[]},qt:function(){return this.X.decisions.slice()},isPolling:function(){return this.X.polling},shouldBatch:function(){return this.X.shouldBatch},Ut:function(){return i.last(this.Vt().snapshots)},Vt:function(){return i.last(this.X.data.visitors)},Ft:function(){var n=this.zt();this.Vt().snapshots.push({decisions:this.qt(),events:n}),this.jt(),this.Mt(!0)},At:function(){this.X.decisionEvents.length>0&&this.Ft()},hasEventsToSend:function(){if(!i.isEmpty(this.X.decisionEvents))return!0;if(!i.isEmpty(this.X.data)&&i.some(this.X.data.visitors||[],(function(n){return n.snapshots.length>0})))return!0;return!1},hasPreviousBatchesToSend:function(){return!i.isEmpty(this.X.previousBatches)},canSend:function(){return this.X.canSend},Lt:function(n){var t=this.Vt();t&&(t.attributes=n.attributes)}}},2604:function(n,t,e){var i=e(9576),r=e(2805);n.exports={initialize:function(){this.X={},this.on(r.SET_UA_DATA,this.hn)},hn:function(n){i.isEmpty(this.X)&&(this.X=n.data)},get:function(){return i.cloneDeep(this.X)}}},6963:function(n,t,e){var i=e(9576),r=e(2805),o=e(2678),a={globalTags:{},viewStates:{},shouldBatch:!1};n.exports={initialize:function(){this.X=i.cloneDeep(a),this.on(r.REGISTER_VIEWS,this.Gt),this.on(r.SET_VIEW_ACTIVE_STATE,this.Bt),this.on(r.UPDATE_PARSED_VIEW_METADATA,this.Ht),this.on(r.UPDATE_USER_SUPPLIED_METADATA,this.Yt),this.on(r.TRACK_VIEW_ACTIVATED_EVENT,this.Kt),this.on(r.SET_GLOBAL_TAGS,this.$t),this.on(r.RESET_VIEW_STATES,this.Wt),this.on(r.SET_VIEW_BATCHING,this.Ot)},getAll:function(){var n={};for(var t in this.X.viewStates)n[t]=this.getViewState(t);return n},shouldBatch:function(){return this.X.shouldBatch},getViewState:function(n){var t=i.cloneDeep(this.X.viewStates[n]),e=this.X.globalTags;return t.metadata=i.extend({},t.parsedMetadata,e,t.userSuppliedMetadata),t},getActiveViewTags:function(){var n=this.getActiveViewStates(),t=i.map(n,(function(n){return n.metadata})),e=[{}].concat(t);return i.extend.apply(i,e)},getActivationEventId:function(n){return this.X.viewStates[n]?this.X.viewStates[n].activationEventId:null},getActiveViewStates:function(){return i.reduce(this.X.viewStates,i.bind((function(n,t,e){return this.isViewActive(e)&&n.push(this.getViewState(e)),n}),this),[])},isViewActive:function(n){var t=this.X.viewStates[n];return t||o.warn("No Page registered with id",n),!!t.isActive},getGlobalTags:function(){return i.cloneDeep(this.X.globalTags)},Wt:function(){this.X.viewStates={},this.emitChange()},Gt:function(n){i.each(n.views,i.bind((function(n){var t=n.id;this.X.viewStates[t]={id:t,isActive:i.isBoolean(n.isActive)?n.isActive:null,activatedTimestamp:null,activationEventId:null,parsedMetadata:{},userSuppliedMetadata:{}}}),this)),this.emitChange()},Bt:function(n){var t=n.view.id;if(!this.X.viewStates[t])throw new Error("No view exists with id "+t);this.X.viewStates[t].isActive=n.isActive,n.isActive?this.X.viewStates[t].activatedTimestamp=n.timestamp:(this.X.viewStates[t].parsedMetadata={},this.X.viewStates[t].userSuppliedMetadata={}),this.emitChange()},Ht:function(n){var t=n.pageId;if(!this.X.viewStates[t])throw new Error("No view exists with id "+t);i.assign(this.X.viewStates[t].parsedMetadata,n.metadata),this.emitChange()},Yt:function(n){var t=n.pageId;if(!this.X.viewStates[t])throw new Error("No view exists with id "+t);i.assign(this.X.viewStates[t].userSuppliedMetadata,n.metadata),this.emitChange()},Kt:function(n){var t=n.pageId;this.X.viewStates[t]&&(this.X.viewStates[t].activationEventId=n.eventData.eventId,this.emitChange())},$t:function(n){i.extend(this.X.globalTags,n),this.emitChange()},Ot:function(n){this.X.shouldBatch=n,this.emitChange()}}},1522:function(n,t,e){var i=e(9576),r=e(2805),o=e(3694);n.exports={initialize:function(){this.X={views:{},apiNamesToViews:{}},this.on(r.DATA_LOADED,this.hn)},getAll:function(){return o.safeReference(i.values(this.X.views))},getPagesMap:function(){return o.safeReference(this.X.views)},get:function(n){return o.safeReference(this.X.views[n])},getByApiName:function(n){return o.safeReference(this.X.apiNamesToViews[n])},apiNameToId:function(n){var t=this.X.apiNamesToViews[n];if(t)return t.id},idToApiName:function(n){var t=this.X.views[n];if(t)return t.apiName},getNumberOfPages:function(){return i.keys(this.X.views).length},getAllViewsForActivationType:function(n){return i.filter(this.X.views,{activationType:n})},hn:function(n){i.isEmpty(n.data.views)||(i.each(n.data.views,i.bind((function(n){o.deepFreeze(n),this.X.views[n.id]=n,this.X.apiNamesToViews[n.apiName]=n}),this)),this.emitChange())}}},9984:function(n,t,e){var i=e(9576),r=e(2805),o=e(9196);n.exports={initialize:function(){this.X={profile:{},metadata:{},visitorId:null},this.on(r.SET_VISITOR_ID_VIA_API,this.Xt),this.on(r.SET_VISITOR_ATTRIBUTES,this.Jt),this.on(r.LOAD_EXISTING_VISITOR_PROFILE,this.Qt)},getVisitorProfile:function(){return this.X.profile},getVisitorProfileMetadata:function(){return this.X.metadata},getAttribute:function(n){var t=this.X.profile;return i.cloneDeep(o.getFieldValue(t,n))},getAttributeMetadata:function(n){return i.cloneDeep(this.X.metadata[n])},getVisitorIdFromAPI:function(){return this.X.visitorId},Qt:function(n){this.X.profile=n.profile,this.X.metadata=n.metadata,this.emitChange()},Jt:function(n){i.each(n.attributes,i.bind((function(n){var t=n.key;o.setFieldValue(this.X.profile,t,n.value),n.metadata&&i.forOwn(n.metadata,i.bind((function(n,e){o.setFieldValue(this.X.metadata,t.concat(e),n)}),this))}),this)),this.emitChange()},Xt:function(n){this.X.visitorId=n,this.emitChange()}}},4375:function(n,t,e){var i=e(9576),r=e(2805);n.exports={initialize:function(){this.X={},this.on(r.DATA_LOADED,this.Zt)},getCustomBehavioralAttributes:function(){return i.filter(this.X,(function(n){return!!n.rule_json}))},getVisitorAttribute:function(n){var t=i.values(this.X);if(n.datasourceId&&(t=i.filter(t,{dcp_datasource_id:String(n.datasourceId)})),n.attributeName&&n.attributeId)throw new Error("Must not specify both attribute name and attribute ID");if(n.attributeId){var e=this.X[n.attributeId];if(!e)throw new Error("Unrecognized attribute ID: "+n.attributeId);return e}if(n.attributeName){var r=i.filter(t,{name:n.attributeName});if(!r.length)throw new Error("Unrecognized attribute name: "+n.attributeName);if(r.length>1)throw new Error("Too many attributes with name: "+n.attributeName);return r[0]}throw new Error("Must specify attribute name or attribute ID")},Zt:function(n){i.isEmpty(n.data.visitorAttributes)||(i.each(n.data.visitorAttributes,i.bind((function(n){this.X[n.id]=n}),this)),this.emitChange())}}},1217:function(n,t,e){var i=e(9576),r=e(2805),o=e(2676);n.exports={initialize:function(){this.X={variationIdMap:{},preferredLayerMap:{}},this.on(r.UPDATE_VARIATION_ID_MAP,this.ne),this.on(r.MERGE_VARIATION_ID_MAP,this.te),this.on(r.UPDATE_PREFERRED_LAYER_MAP,this.ee),this.on(r.MERGE_PREFERRED_LAYER_MAP,this.re)},getVariationIdMap:function(){return i.cloneDeep(this.X.variationIdMap)},getVariationIdMapString:function(){return o.stringify(this.X.variationIdMap)},ne:function(n){var t=this.X.variationIdMap[n.layerId]||{};t[n.experimentId]!==n.variationId&&(t[n.experimentId]=n.variationId,this.X.variationIdMap[n.layerId]=t,this.emitChange())},te:function(n){var t=this.getVariationIdMap(),e=n.variationIdMap;i.each(t||{},(function(n,t){e[t]?i.assign(e[t],n):e[t]=n})),this.X.variationIdMap=e,this.emitChange()},getPreferredLayerMap:function(){return i.cloneDeep(this.X.preferredLayerMap)},getPreferredLayerMapString:function(){return o.stringify(this.X.preferredLayerMap)},getPreferredLayerId:function(n){return this.X.preferredLayerMap[n]},ee:function(n){this.X.preferredLayerMap[n.groupId]!==n.layerId&&(this.X.preferredLayerMap[n.groupId]=n.layerId,this.emitChange())},re:function(n){var t=this.getPreferredLayerMap(),e=n.preferredLayerMap;i.assign(e,t),this.X.preferredLayerMap=e,this.emitChange()}}},5847:function(n,t,e){e(9576);var i=e(2805);e(5093).j;n.exports={initialize:function(){this.X={events:[],foreignEvents:{},foreignEventQueues:{}},this.on(i.SET_VISITOR_EVENTS,this.hn),this.on(i.SET_FOREIGN_VISITOR_EVENTS,this.oe),this.on(i.SET_FOREIGN_VISITOR_EVENT_QUEUE,this.ae)},getEvents:function(){return this.X.events},getForeignEvents:function(){return this.X.foreignEvents},getForeignEventQueues:function(){return this.X.foreignEventQueues},hn:function(n){this.X.events=n,this.emitChange()},oe:function(n){this.X.foreignEvents[n.key]=n.value},ae:function(n){this.X.foreignEventQueues[n.key]=n.value}}},9721:function(n,t,e){var i=e(2805);n.exports={initialize:function(){this.X={baseMap:{},eventQueue:[],lastEvent:null,initialized:!1,cleared:!1},this.on(i.UPDATE_BEHAVIOR_STORE,this.ue)},getBaseMap:function(){return this.X.baseMap},getEventQueue:function(){return this.X.eventQueue},getLastEvent:function(){return this.X.lastEvent},getCleared:function(){return this.X.cleared},getInitialized:function(){return this.X.initialized},ue:function(n){this.X[n.key]=n.value}}},7022:function(n,t,e){var i=e(9576),r=e(2805);n.exports={initialize:function(){this.X={randomId:null,visitorIdLocator:null},this.on(r.SET_VISITOR_ID,this.hn),this.on(r.DATA_LOADED,this.ce)},getBucketingId:function(){return this.getRandomId()},getRandomId:function(){return this.X.randomId},getVisitorIdLocator:function(){return this.X.visitorIdLocator},hn:function(n){i.extend(this.X,n),this.emitChange()},ce:function(n){i.isEmpty(n.data.visitorIdLocator)||(this.X.visitorIdLocator=n.data.visitorIdLocator,this.emitChange())}}},5417:function(n,t,e){var i=e(9576),r=e(2678),o=e(2805);n.exports={initialize:function(){this.X={frames:[],defaultFrame:null,messages:[],subscribers:[],canonicalOrigins:null,disabled:!1},this.on(o.XDOMAIN_SET_DEFAULT_FRAME,this.se),this.on(o.XDOMAIN_ADD_FRAME,this.fe),this.on(o.XDOMAIN_SET_MESSAGE,this.le),this.on(o.XDOMAIN_ADD_SUBSCRIBER,this.de),this.on(o.XDOMAIN_SET_CANONICAL_ORIGINS,this.he),this.on(o.XDOMAIN_SET_DISABLED,this.ve)},getMessages:function(){return i.cloneDeep(this.X.messages)},getOffset:function(){return 0===this.X.messages.length?0:this.X.messages[0].data.id},getNextMessageId:function(){return this.X.messages.length+this.getOffset()},getMessageById:function(n){return this.X.messages[n-this.getOffset()]},getSubscribers:function(){return this.X.subscribers},getFrames:function(){return this.X.frames},getNextFrameId:function(){return this.X.frames.length},getDefaultFrame:function(){return this.X.defaultFrame},getCanonicalOrigins:function(){return i.cloneDeep(this.X.canonicalOrigins)},isDisabled:function(){return this.X.disabled},se:function(n){this.X.defaultFrame=n},fe:function(n){this.X.frames.push(n)},le:function(n){for(this.X.messages[n.messageId-this.getOffset()]=n.message;this.X.messages.length>1e3;){var t=this.X.messages.shift();r.debug("XDomainStorage: Cleared old message: "+t.data.id)}},de:function(n){this.X.subscribers.push(n.subscriber)},he:function(n){this.X.canonicalOrigins=n.canonicalOrigins},ve:function(n){this.X.disabled=n.disabled}}},7010:function(n,t){t.locatorType={CSS_SELECTOR:"css_selector",JAVASCRIPT:"javascript",URL_REGEX:"url_regex"},t.valueType={STRING:"string",NUMBER:"number",CURRENCY:"currency"},t.nodeNames={INPUT:"INPUT",SELECT:"SELECT"}},34:function(n,t,e){var i=e(6639).U;t.Error=i("TagError")},1295:function(n,t,e){var i=e(8964).PluginTypes,r=e(4041).get("stores/plugins");t.getTagValue=function(n){var e=r.getPlugin(i.viewTagLocators,n.locatorType);if(!e)throw new t.Error("No locator registered for tag locatorType: "+n.locatorType);return e(n)},t.enums=e(7010),t.Error=e(34).Error},3113:function(n,t,e){var i=e(2805),r=e(4797),o=e(8398).Promise,a=e(4041).get("stores/async_request");t.makeAsyncRequest=function(n,t){var e,u,c=a.getPromise(n);if(c)return c;var s=new o((function(n,t){e=n,u=t}));return r.dispatch(i.REGISTER_ASYNC_DEFERRED,{source:n,promise:s,resolver:e,rejecter:u}),t&&t(),s},t.resolveRequest=function(n,t){r.dispatch(i.RESOLVE_DEFERRED,{source:n,resolveWith:t})},t.rejectRequest=function(n,t){r.dispatch(i.REJECT_DEFERRED,{source:n,rejectWith:t})}},4005:function(n,t,e){var i=e(7918),r=e(2188);t.getLanguage=function(){return r.getNavigatorLanguage()},t.getQueryParams=i.getQueryParams,t.getQueryParamValue=i.getQueryParamValue,t.getUrl=function(){return r.getHref()}},8718:function(n,t,e){var i=e(9576),r=e(6639).U,o=e(3792),a=e(6954),u=e(2188),c=e(2805),s=e(4041),f=e(4797),l=s.get("stores/cookie_options"),d=t.SetError=r("CookieSetError"),h=t.MismatchError=r("CookieMismatchError");t.getAll=function(n){var e,r,o,u,c;i.isUndefined(n)&&(n=!0),e=a.getCookieString().split(/\s*;\s*/);var s={};for(o=0;o<e.length;o++)if((u=(r=e[o]).indexOf("="))>0&&void 0===s[c=t.safeDecodeURIComponent(r.substring(0,u))]){var f=r.substring(u+1);n&&(f=t.safeDecodeURIComponent(f)),s[c]=f}return s},t.safeDecodeURIComponent=function(n){try{return decodeURIComponent(n)}catch(t){return n}},t.get=function(n,e){return t.getAll(e)[n]},t.set=function(n,e,r,s){r=i.extend({encodeValue:!0},r),!1!==s&&(s=!0);var g=[];if(i.isUndefined(r.domain)){var m=l.getCurrentDomain();m||(m=function(n,e){!1!==e&&(e=!0);for(var r,o,a=n.hostname.split("."),u=[],s=null,l=a.length-1;l>=0;l--)if(u.unshift(a[l]),r=u.join("."),!i.includes(v,r)){o={domain:e?"."+r:r};try{t.set(p,Math.random().toString(),o),t.remove(p,o),s=o.domain;break}catch(d){}}return f.dispatch(c.SET_COOKIE_DOMAIN,s),s}(u.getLocation(),!0)),r.domain=m}if(r.domain&&g.push("domain="+r.domain),i.isUndefined(r.path)&&(r.path="/"),r.path&&g.push("path="+r.path),i.isUndefined(r.expires)){var _=i.isUndefined(r.maxAge)?l.getDefaultAgeInSeconds():r.maxAge;r.expires=new Date(o.now()+1e3*_)}if(i.isUndefined(r.expires)||g.push("expires="+r.expires.toUTCString()),r.secure&&g.push("secure"),a.setCookie(n+"="+(r.encodeValue?encodeURIComponent(e):e)+";"+g.join(";")),s){var w=r.encodeValue,y=t.get(n,w);if(y!==e){if(!y)throw new d('Failed to set cookie "'+n+'"');throw new h('Expected "'+e+'" for "'+n+'", got "'+y+'"')}}},t.remove=function(n,e){for(var r=u.getLocation().hostname.split(".");r.length>0;)t.set(n,null,i.extend({},e,{domain:"."+r.join("."),expires:new Date(0)}),!1),r.shift()};var v=["optimizely.test"],p="optimizelyDomainTestCookie"},6639:function(n,t,e){var i=e(3491),r=i("InternalError");t.G=r,t.U=function(n){return i(n,r)}},6530:function(n,t,e){var i=e(9576),r=e(8398).Promise;n.exports=function(){var n,t,e=new r((function(e,i){n=e,t=i}));return e.resolve=function(){return n.apply(null,i.toArray(arguments)),e},e.reject=function(){return t.apply(null,i.toArray(arguments)),e},e}},3694:function(n,t,e){var i=e(9576);t.deepFreeze=function(n){},t.safeReference=function(n){return i.cloneDeep(n)}},9196:function(n,t,e){var i=e(9576);t.getFieldValue=function(n,t){i.isArray(t)||(t=[t]);for(var e=n,r=0;r<t.length;r++){var o=t[r];if(!i.isObject(e)||!e.hasOwnProperty(o))return;e=e[o]}return e},t.setFieldValue=function(n,t,e){if(!i.isArray(t)||i.isEmpty(t))throw new Error("Attempted to set an invalid key path: "+t);for(var r=n,o=0;o<t.length-1;o++){var a=t[o];i.isObject(r[a])||(r[a]={}),r=r[a]}r[t[t.length-1]]=e}},2678:function(n,t,e){var i=e(9576),r=e(2805),o=e(3792),a=e(8964),u=e(4797),c=e(2676);function s(){this.logLevel=null,this.logMatch=null,this.logs=[],this.timebase=o.now()}s.prototype.pe=function(){return!i.isNull(this.logLevel)},s.prototype.setLogLevel=function(n){var t=this.ge(n);null===t?console.error("Unknown log level: "+n):this.logLevel!==t&&(this.log("Setting log level to "+t),this.logLevel=t,this.flush())},s.prototype.setLogMatcher=function(n){i.isString(n)?this.logMatcher=n:this.logMatcher="",this.logGroup=0},s.prototype.shouldLog=function(n){return this.pe()&&this.logLevel>=n},s.prototype.matchesLogMessage=function(n,t){var e=this.logMatcher;if(!this.logMatcher)return!0;if(this.logGroup)return"GROUPSTART"===n?this.logGroup++:"GROUPEND"===n&&this.logGroup--,!0;var r=i.some(t,(function(n){if(!i.isString(n))try{n=c.stringify(n)}catch(t){}return i.isString(n)&&i.includes(n,e)}));return r&&"GROUPSTART"===n&&this.logGroup++,r},s.prototype.storeLog=function(n,t){var e={logLevel:n,logMessage:t};u.dispatch(r.LOG,e)},s.prototype.flush=function(){var n=e(4041).get("stores/log");this.logGroup=0;var t=n.getLogs();i.each(t,i.bind((function(n){this.me(n.logLevel,n.logMessage,!0)}),this))},s.prototype.me=function(n,t,e){var r,o=n;if(console)switch(n){case"GROUPSTART":r=console.groupCollapsed,o=a.LogLevel.DEBUG;break;case"GROUPEND":r=console.groupEnd,o=a.LogLevel.DEBUG;break;case a.LogLevel.ERROR:r=console.error;break;case a.LogLevel.WARN:r=console.warn;break;case a.LogLevel.DEBUG:r=console.debug;break;default:r=console.log}try{e||this.pe()&&!this.shouldLog(o)||(i.isArray(t)&&i.isString(t[0])&&(t=this._e(t)),this.storeLog(n,t)),r&&this.shouldLog(o)&&this.matchesLogMessage(n,t)&&r.apply(console,t)}catch(u){console&&(console.error?console.error(u):console.log(u))}},s.prototype.debug=function(){this.me(a.LogLevel.DEBUG,[].slice.call(arguments))},s.prototype.log=function(){this.me(a.LogLevel.INFO,[].slice.call(arguments))},s.prototype.logAlways=function(){var n=this._e([].slice.call(arguments));console&&console.log&&console.log.apply&&console.log.apply(console,n),this.storeLog(a.LogLevel.INFO,n)},s.prototype.warn=function(){this.me(a.LogLevel.WARN,[].slice.call(arguments))},s.prototype.error=function(n){var t=[].slice.call(arguments);1===t.length&&n.stack?(this.me(a.LogLevel.ERROR,[this.we(),n]),this.me(a.LogLevel.INFO,[n.stack])):this.me(a.LogLevel.ERROR,t)},s.prototype.groupCollapsed=function(){this.me("GROUPSTART",[].slice.call(arguments))},s.prototype.groupEnd=function(){this.me("GROUPEND",[].slice.call(arguments))},s.prototype._e=function(n){var t=this.we().toString();return t.length<6&&(t=("     "+t).slice(-6)),[t+"| Optly / "+n[0]].concat(n.slice(1))},s.prototype.we=function(){return this.timebase?o.now()-this.timebase:0},s.prototype.ge=function(n){return n&&("TRUE"===(n=n.toUpperCase())&&(n="INFO"),"FALSE"===n&&(n="OFF"),"ALL"===n&&(n="DEBUG"),!i.isUndefined(a.LogLevel[n]))?a.LogLevel[n]:null},n.exports=new s},3043:function(n,t,e){n.exports=e(7190)},2119:function(n,t){t.isSingleExperimentPolicy=function(n){return"single_experiment"===n||"multivariate"===n}},7984:function(n,t,e){var i=e(9576),r=e(8398).Promise,o=e(2188);t.pollFor=function(n,t,e){var a,u;return i.isFunction(e)?u=e:(a=e||100,u=function(){return--a<-1}),t=t||50,new r((function(e,i){!function r(){var a;if(!u()){try{var c=n();if(c)return e(c)}catch(s){a=s}return o.setTimeout(r,t)}i(a||new Error("Poll timed out"))}()}))}},1705:function(n,t,e){var i=e(9576),r=e(8398).Promise;t.firstToResolve=function(n){return new r((function(t){i.each(n,(function(n){r.resolve(n).then(t,(function(){}))}))}))}},7918:function(n,t,e){var i=e(9576),r=e(2188);t.getQueryParams=function(){var n=r.getLocationSearch()||"";if(0===n.indexOf("?")&&(n=n.substring(1)),0===n.length)return[];for(var t=n.split("&"),e=[],i=0;i<t.length;i++){var o="",a="",u=t[i].split("=");u.length>0&&(o=u[0]),u.length>1&&(a=u[1]),e.push([o,a])}return e},t.getQueryParamValue=function(n){for(var e=t.getQueryParams(),i=0;i<e.length;i++)if(e[i][0]===n)return e[i][1]},t.queryStringFromMap=function(n){return i.map(n,(function(n,t){return t+"="+n})).join("&")}},2522:function(n,t,e){var i=e(9576),r=e(2678),o=e(2188);function a(n){this.windowLength=n,this.count=0,this.listeners={},this.isIncrementingTick=!1}a.prototype.countCurrentTick=function(){this.isIncrementingTick||(this.isIncrementingTick=!0,this.increment(),o.setTimeout(i.bind((function(){this.isIncrementingTick=!1}),this),0))},a.prototype.increment=function(){this.count+=1,i.forEach(this.listeners[String(this.count)],(function(n){n()})),o.setTimeout(i.bind(this.decrement,this),this.windowLength)},a.prototype.decrement=function(){this.count-=1,this.count<0&&(r.warn("Decremented down to negative count: ",this.count),this.count=0)},a.prototype.addListener=function(n,t){this.listeners[n]||(this.listeners[n]=[]),this.listeners[n].push(t)},n.exports=a},74:function(n,t,e){var i=e(9576),r=e(4041).get("stores/observed_redirect");t.getReferrer=function(){var n=r.get();return n?n.referrer:null},t.getExperimentAndVariation=function(){var n=r.get();return n&&i.isString(n.variationId)?i.pick(n,["experimentId","variationId"]):null}},2591:function(n,t,e){var i=e(9576),r=e(2805),o=e(3792),a=e(4041),u=e(6954),c=e(8964),s=e(4797),f=e(2678),l=a.get("stores/sandbox"),d=e(2188);t.shouldSandbox=function(){return!1},t.get=function(n){if(!n)throw new Error("Name is required");if(t.shouldSandbox()){l.isInitialized()||h();var e=l.get(n);if(e)return e}return d.getGlobal(n)};var h=function(){try{var n="optimizely_"+o.now(),t=u.createElement("iframe");t.name=n,t.style.display="none",u.appendToHead(t);var e=t.contentWindow,a=t.contentDocument;a.write("<script><\/script>"),a.close();var l=i.mapValues(c.SandboxedFunctions,(function(n){return e[n]}));s.dispatch(r.SANDBOXED_FUNCTIONS_ADDED,{sandboxedFunctions:l}),t.parentNode.removeChild(t)}catch(d){f.warn("Unable to create a sandbox: ",d)}}},5554:function(n,t,e){var i=e(6954),r=e(2678),o=e(3455);t.addScriptAsync=function(n,t){var e=i.querySelector("head"),o=i.createElement("script");o.type="text/javascript",o.async=!0,o.src=n,t&&(o.onload=t),e.insertBefore(o,e.firstChild),r.debug("Asynchronously requesting "+n)},t.addScriptSync=function(n,e){try{var a="optimizely_synchronous_script_"+Math.floor(1e5*Math.random());if(-1!==n.indexOf('"'))return void r.error("Blocked attempt to load unsafe script: "+n);i.write('<script id="'+a+'" src="'+n+'"><\/script>');var u=i.querySelector("#"+a);if(!u)throw new Error("DocumentEnv.write failed to append script");u.onload=e,u.onerror=function(i){r.warn("Failed to load script ("+n+") synchronously:",i),t.addScriptAsync(n,e)}}catch(c){r.debug("DocumentEnv.write failed for "+n+": "+c.message);return o.request({url:n,async:!1,contentType:"text/plain",success:function(n){new Function(n.responseText)(),e&&e()}})["catch"]((function(i){r.error("Failed to load "+n+" via synchronous XHR: "+i.message),t.addScriptAsync(n,e)}))}}},9418:function(n,t,e){var i=e(8398).Promise,r=e(2188);t.makeTimeoutPromise=function(n){return new i((function(t,e){r.setTimeout((function(){e(new Error("Timed out after "+n+" ms"))}),n)}))}},769:function(n,t,e){var i=e(9576),r=e(7051),o=e(2188),a=e(2805),u=e(4041),c=e(4797),s=u.get("stores/ua_data");t.get=function(){var n=s.get();return i.isEmpty(n)&&(n=r.parseUA(o.getUserAgent()),c.dispatch(a.SET_UA_DATA,{data:n})),n}},6724:function(n,t){t.guessDomain=function(n,t){if(!n)return"";try{return t?n.match(/:\/\/(.[^/]+)/)[1]:n.match(/:\/\/(?:www[0-9]?\.)?(.[^/:]+)/)[1]}catch(e){return""}}},7581:function(n,t,e){var i=e(9576),r=e(8398).Promise,o=e(2805),a=e(4041),u=e(4797),c=e(7989),s=e(6639).U,f=e(3792),l=e(6954),d=e(2676),h=e(7984),v=e(1685),p=e(2188),g=e(2678),m=a.get("stores/xdomain"),_=t.Error=s("XDomainStorageError");function w(n){var t;if(i.find(m.getFrames(),{origin:n.origin})){try{t=d.parse(n.data)}catch(a){return void g.debug("XDomain","Ignoring malformed message event:",n)}if("ERROR"===t.type)u.dispatch(o.XDOMAIN_SET_DISABLED,{disabled:!0}),c.emitInternalError(new _("Xdomain Error: "+t.response));else if("SYNC"===t.type)i.each(m.getSubscribers(),(function(n){n(t.response.key,t.response.value)}));else{var e=m.getMessageById(t.id);if(!e){if(g.warn("XDomain","No stored message found for ID",t.id),i.isNumber(t.id)){var r=m.getNextMessageId();t.id>=r?c.emitInternalError(new _("Message ID is greater than expected maximum ID ("+t.id+">"+r+")")):t.id<0?c.emitInternalError(new _("Message ID is < 0: "+t.id)):c.emitInternalError(new _("No stored message found for message ID: "+t.id))}else c.emitInternalError(new _("Message ID is not a number: "+t.id));return}if(!e.resolver)return void g.warn("XDomain","Message already resolved, ignoring:",t.id);e.resolver(t.response),u.dispatch(o.XDOMAIN_SET_MESSAGE,{messageId:t.id,message:{data:{id:t.id,type:e.data.type,key:e.data.key},startTime:e.startTime,endTime:f.now()}})}}else g.debug("XDomain","No frame found for origin: "+n.origin)}function y(n,t){return t||(t=m.getDefaultFrame()),new r((function(e){var r={data:i.extend({},n,{id:m.getNextMessageId()}),resolver:e};t?m.isDisabled()||b(r,t):u.dispatch(o.XDOMAIN_SET_MESSAGE,{messageId:r.data.id,message:r})}))}function b(n,t){var e=n.data;u.dispatch(o.XDOMAIN_SET_MESSAGE,{messageId:n.data.id,message:i.extend({},n,{startTime:f.now()})}),t.target.postMessage(d.stringify(e),t.origin)}t.setItem=function(n,t,e){return y({type:"PUT",key:n,value:t},e)},t.getItem=function(n,t){return y({type:"GET",key:n},t)},t.fetchAll=function(n){return y({type:"GETALL"},n)},t.deleteData=function(n,t){return y({type:"DELETE",visitorId:n},t)},t.subscribe=function(n){u.dispatch(o.XDOMAIN_ADD_SUBSCRIBER,{subscriber:n})},t.loadIframe=function(n,t){return new r((function(e){var i=l.createElement("iframe");i.src=n+t,i.hidden=!0,i.setAttribute("tabindex","-1"),i.setAttribute("title","Optimizely Internal Frame"),i.style.display="none",i.height=0,i.width=0,i.onload=function(){var r={id:m.getNextFrameId(),target:i.contentWindow,origin:n,path:t};u.dispatch(o.XDOMAIN_ADD_FRAME,r),e(r)},l.appendTo(l.querySelector("body"),i)}))},t.getXDomainUserId=function(n,t){var e,r={},o=i.keys(n);return i.each(t,(function(n){r[n]=[],i.each(o,(function(t){var o=v.getUserIdFromKey(t,n);!e&&o&&(e=o),o&&!i.includes(r[n],o)&&r[n].push(o)}))})),g.debug("XDomain: Found userIds:",r),e},t.load=function(n,e){p.addEventListener("message",w);return h.pollFor((function(){return!!l.querySelector("body")})).then((function(){return t.loadIframe(n,e)})).then((function(n){u.dispatch(o.XDOMAIN_SET_DEFAULT_FRAME,n),m.isDisabled()||i.each(m.getMessages(),(function(t){t.startTime||b(t,n)}))}))}},3455:function(n,t,e){var i=e(9576),r=e(2805),o=e(3792),a=e(4797),u=e(2676),c=e(2678),s=e(8398).Promise,f=e(2591);t.isCORSSupported=function(){return"withCredentials"in new(f.get("XMLHttpRequest"))},t.request=function(n){return n=i.extend({method:"GET",async:!0,contentType:"text/plain;charset=UTF-8"},n),new s((function(e,r){if(!t.isCORSSupported())return r("CORS is not supported");var o=new(f.get("XMLHttpRequest"));o.onload=function(){n.success&&n.success(o),e(o)},o.onerror=function(){n.error&&n.error(o),r(o)},i.isObject(n.data)&&(n.data=u.stringify(n.data)),o.open(n.method,n.url,n.async),n.withCredentials&&(o.withCredentials=n.withCredentials),o.setRequestHeader("Content-Type",n.contentType),i.isObject(n.headers)&&i.forEach(n.headers,(function(n,t){o.setRequestHeader(t,n)})),o.send(n.data)}))},t.retryableRequest=function(n,e,u,f){if(!e)return s.reject(new Error("No id specified for request."));if(!t.isCORSSupported())return s.reject(new Error("CORS is not supported."));i.isUndefined(f)&&(f=3),i.isUndefined(u)&&(u=0);var l={id:e,timeStamp:o.now(),data:n,retryCount:u};return a.dispatch(r.SET_PENDING_EVENT,l),c.debug("Sending event ",e),t.request(n).then((function(n){return a.dispatch(r.REMOVE_PENDING_EVENT,{id:e}),n}),(function(n){throw l.retryCount>=f?(a.dispatch(r.REMOVE_PENDING_EVENT,{id:e}),c.warn("Event ",l," could not be sent after ",f," attempts.")):(l.retryCount++,a.dispatch(r.SET_PENDING_EVENT,l),c.debug("Event ",l," failed to send, with error ",n," It will be retried ",f-u," times.")),n}))},t.sendBeacon=t.request},9840:function(n,t,e){var i=e(9576),r=e(2805),o=e(2438),a=e(6227),u=e(3792),c=e(4041),s=e(8964),f=e(1372),l=e(4797),d=e(2678),h=e(1295),v=c.get("stores/event_data"),p=c.get("stores/plugins"),g=c.get("stores/rum"),m=c.get("stores/view"),_=c.get("stores/view_data");function w(n,t){i.forEach(n,(function(n){if(n.eventType!==f.CUSTOM){var e=p.getPlugin(s.PluginTypes.eventImplementations,n.eventType);e?t?e.attach(n):e.detach(n):d.warn("No implementation found for event type:",n.eventType,"needed for event:",n)}}))}t.parseViewTags=function(n){var e=t.evaluateViewTags(n);t.setParsedViewTags(n.id,e)},t.updateAllViewTags=function(){var n=m.getActiveViewStates();i.each(n,(function(n){var e=_.get(n.id);t.parseViewTags(e)}))},t.evaluateViewTags=function(n){return n.tags?i.reduce(n.tags,(function(n,t){try{n[t.apiName]=h.getTagValue(t)}catch(r){e=r,(null!=(i=h.Error)&&"undefined"!=typeof Symbol&&i[Symbol.hasInstance]?i[Symbol.hasInstance](e):e instanceof i)?d.warn("Page / Ignoring unparseable tag",t,r):d.error(r)}var e,i;return n}),{}):{}},t.createViewTicket=function(){var n={};return i.each(p.getAllPlugins(s.PluginTypes.viewProviders),(function(t){n[t.provides]=c.evaluate(t.getter)})),n},t.registerViews=function(n){l.dispatch(r.REGISTER_VIEWS,{views:n})},t.activateViaAPI=function(n,e){e&&t.setUserSuppliedViewTags(n.id,e),t.activateMultiple([n],e)},t.getViewsAndActivate=function(n){var e=_.getAllViewsForActivationType(n);t.activateMultiple(e)},t.activateMultiple=function(n,e){var a=[];return i.each(n,(function(n){var u=m.getViewState(n.id),c=t.createViewTicket();if(u.isActive)if(n.deactivationEnabled)try{t.hasValidStaticConditions(n,c)||t.deactivate(n)}catch(h){d.error("Page / Error evaluating whether to deactivate page ",t.description(n),h)}else d.log("Not activating Page, already active ",t.description(n));else{try{if(!t.hasValidStaticConditions(n,c))return i.isBoolean(u.isActive)||t.setViewActiveState(n,!1),void d.log("Page / Failed to match page conditions for "+t.description(n),n.staticConditions)}catch(h){return i.isBoolean(u.isActive)||t.setViewActiveState(n,!1),void d.error("Page / Error evaluating whether to activate page ",t.description(n),h)}if(a.push(n),t.setViewActiveState(n,!0),d.log("Activated Page",t.description(n)),o.emitViewActivated({view:n,metadata:e}),g.getSampleRum()){var f=n.activationType||s.ViewActivationTypes.immediate;l.dispatch(r.RECORD_ACTIVATION_TYPE_USAGE,{activationType:f,entityId:n.id})}w(v.getByPageId(n.id),!0)}})),i.isEmpty(a)||o.emitViewsActivated({views:a}),a},t.deactivate=function(n){m.getViewState(n.id).isActive?(t.setViewActiveState(n,!1),d.log("Deactivated Page",t.description(n)),o.emitPageDeactivated({page:n}),w(v.getByPageId(n.id),!1)):d.log("Not deactivating Page, already inactive ",t.description(n))},t.setViewActiveState=function(n,t){l.dispatch(r.SET_VIEW_ACTIVE_STATE,{view:n,timestamp:u.now(),isActive:t})},t.setGlobalTags=function(n){l.dispatch(r.SET_GLOBAL_TAGS,n)},t.setParsedViewTags=function(n,t){l.dispatch(r.UPDATE_PARSED_VIEW_METADATA,{pageId:n,metadata:t})},t.setUserSuppliedViewTags=function(n,t){l.dispatch(r.UPDATE_USER_SUPPLIED_METADATA,{pageId:n,metadata:t})},t.hasValidStaticConditions=function(n,t){var e={};if(i.isEmpty(n.staticConditions))return!0;var o=p.getAllPlugins(s.PluginTypes.viewMatchers);d.groupCollapsed("Page / Evaluating staticConditions:",n.staticConditions),d.debug("Matching to current value:",t);var u=a.evaluate(n.staticConditions,(function(n){var i=n.type,r=o[i];if(!r)throw new Error("Page / No matcher found for type="+i);return r&&(e[n.type]||(e[n.type]=!0)),r.match(t,n)}));return d.groupEnd(),g.getSampleRum()&&u&&l.dispatch(r.RECORD_VIEW_FEATURE_USAGE,{featuresUsed:i.keys(e),entityId:n.id}),u},t.description=function(n){return'"'+n.name+'" ('+n.id+")"},t.isActivationTypeImmediate=function(n){return n===s.ViewActivationTypes.immediate||!n},t.shouldTriggerImmediately=function(n){return n===s.ViewActivationTypes.DOMChanged||n===s.ViewActivationTypes.URLChanged||n===s.ViewActivationTypes.immediate||!n},t.create=function(n,t){return{id:n,apiName:t,category:"other"}},t.createState=function(n){return{id:n,isActive:!0,metadata:{},parsedMetadata:{},userSuppliedMetadata:{}}}},1685:function(n,t,e){var i,r=e(9576),o=e(4797),a=e(2805),u=e(5434),c=e(9314),s=e(8718),f=e(3792),l=e(4041),d=e(8964),h=e(2676),v=e(9196),p=e(4243).mM,g=e(2678),m=e(8398).Promise,_=e(7918),w=e(8964).VisitorStorageKeys,y=e(2188);i=e(7581);var b=l.get("stores/cookie_options"),E=l.get("stores/global"),I=l.get("stores/layer"),A=l.get("stores/plugins"),T=l.get("stores/rum"),S=l.get("stores/session"),k=l.get("stores/visitor_id"),R=l.get("stores/visitor_bucketing"),N=l.get("stores/visitor"),D=l.get("stores/provider_status");function C(n,t){var e=function(n,e){var i;t.attributionType&&(i=f.now()),o.dispatch(a.SET_VISITOR_ATTRIBUTES,{attributes:[{key:n,value:e,metadata:{lastModified:i}}]})};if(t.getter){var i=t.provides;if(r.isArray(i)||(i=[i]),!(t.isSticky&&!r.isUndefined(v.getFieldValue(n,i)))){var u;try{var c=l.evaluate(t.getter);r.isFunction(c)&&(c=c((function(){return v.getFieldValue(n,i)}),(function(n){e(i,n)}))),r.isUndefined(c)||(t.isAsync?(u=c.then((function(n){e(i,n)}),(function(n){g.warn('Failed to evaluate provider for "'+t.provides+'"; error was:',n)})),o.dispatch(a.SET_VISITOR_ATTRIBUTE_PENDING,{key:i,pending:u})):e(i,c))}catch(s){g.warn('Failed to evaluate getter for provider for "'+t.provides+'"; error was: '+s.message)}return u}}}function O(n){var t=M(n),e=p.getItem(t);return r.isString(e)&&(e=F(e)),e}function x(n){var t;if(n.layerId)t=n;else{var e=n;t={layerId:e.i,pageId:e.p,decisionTimestamp:e.t,decisionTicket:{audienceIds:e.a||[]},decision:{layerId:e.i,experimentId:e.x||null,variationId:e.v||null,isLayerHoldback:e.h||!1}}}return t}function P(n,t,e){try{var r=M(n);e||(t=h.stringify(t));try{p.setItem(r,t)}catch(o){throw g.warn("Visitor / Unable to set localStorage key, error was:",o),new Error("Unable to set localStorage")}i.setItem(r,t)}catch(o){g.warn("Unable to persist visitor data:",o.message)}}function M(n){var e=k.getBucketingId();if(!e)throw new Error("Visitor bucketingId not set");var i=t.getNamespace();if(!i)throw new Error("Namespace is not set");return[e,i,n].join("$$")}function L(n,e){if(!k.getBucketingId())throw new Error("Cannot update local store because bucketingId not set");if(V(n)){var i=t.getStorageKeyFromKey(n);if(r.includes(w,i)){var u=M(i);if(!(n.indexOf(u)<=0)&&(e=F(e)))if(i===w.EVENT_QUEUE)o.dispatch(a.SET_FOREIGN_VISITOR_EVENT_QUEUE,{key:n,value:c.deserialize(e)});else if(i===w.EVENTS)o.dispatch(a.SET_FOREIGN_VISITOR_EVENTS,{key:n,value:c.deserialize(e)});else if(i===w.LAYER_STATES)o.dispatch(a.LOAD_PERSISTED_LAYER_STATES,{layerStates:r.map(e,x),merge:!0});else if(i===w.VARIATION_MAP)o.dispatch(a.MERGE_VARIATION_ID_MAP,{variationIdMap:e});else if(i===w.VISITOR_PROFILE){var s=e;r.each(["custom"],(function(n){var t=A.getPlugin(d.PluginTypes.visitorProfileProviders,n);if(t){if(s.profile&&s.metadata){var e=function(n,t,e){var i=N.getAttribute(t),o=N.getAttributeMetadata(t),a=n.profile[t],u=n.metadata[t];if(r.isEmpty(i))return{data:a,metadata:u};var c={};return r.forOwn(a,(function(n,t){var i,a;o&&o[t]&&(i=o[t].lastModified),u&&u[t]&&(a=u[t].lastModified),(e===d.AttributionTypes.FIRST_TOUCH&&i>=a||e===d.AttributionTypes.LAST_TOUCH&&a>=i||r.isUndefined(i)&&a)&&(c.data=c.data||{},c.data[t]=n,a&&(c.metadata=c.metadata||{},c.metadata[t]=c.metadata[t]||{},c.metadata[t].lastModified=a))})),c}(s,n,t.attributionType);if(!r.isEmpty(e)){var i=[];r.forOwn(e.data,(function(t,r){var o=e.metadata[r],a={key:[n,r],value:t,metadata:o};i.push(a)})),o.dispatch(a.SET_VISITOR_ATTRIBUTES,{attributes:i})}}}else g.debug("Attribute type",n,"not used by any audiences")}))}}}}function V(n){return n.split("$$")[0].indexOf("://")>0}function F(n){try{return h.parse(n)}catch(t){return g.debug("Failed to parse: ",n,t),null}}t.getOrGenerateId=function(){return{randomId:t.getCurrentId()||"oeu"+f.now()+"r"+Math.random()}},t.getCurrentId=function(){var n=k.getVisitorIdLocator();return N.getVisitorIdFromAPI()||(n?function(n){var t,e=n.name;switch(n.type){case d.VisitorIdLocatorType.COOKIE:t=s.get(e);break;case d.VisitorIdLocatorType.JS_VARIABLE:t=y.getGlobalByPath(e);break;case d.VisitorIdLocatorType.LOCALSTORAGE:try{t=y.getGlobal("localStorage").getItem(e)}catch(u){throw new Error("Unable to read localStorage: "+u.toString())}break;case d.VisitorIdLocatorType.QUERY:t=_.getQueryParamValue(e)}try{if(!t)throw g.error("Visitor / Customer provided visitor id cannot be found. Type:",n.type," Name:",e),new Error("Failure to obtain visitor id from "+n.type);if(!r.isString(t)&&!r.isNumber(t))throw g.error("Visitor / Customer provided visitor id is not a string or number. Type:",n.type," Name:",e," Id Type:",(i=t)&&"undefined"!=typeof Symbol&&i.constructor===Symbol?"symbol":typeof i),new Error("Customer provided visitor id is not a string or number")}catch(c){throw T.getSampleRum()&&o.dispatch(a.RECORD_VISITOR_ID_ERROR,{isError:!0}),c}var i;T.getSampleRum()&&(o.dispatch(a.RECORD_VISITOR_ID_ERROR,{isError:!1}),o.dispatch(a.RECORD_VISITOR_ID_LOCATOR_USAGE,{visitorIdLocatorType:n.type,entityId:t}));return String(t)}(n):s.get(d.COOKIES.VISITOR_ID))},t.hasSomeData=function(){return p.keys().length>0},t.setId=function(n){var e,c,f=k.getBucketingId();o.dispatch(a.SET_VISITOR_ID,n),k.getBucketingId()!==f&&(!function(){!function(n,t){0;u.initializeStore(n,t)}(O(w.EVENTS)||[],O(w.EVENT_QUEUE)||[]);var n=(e=w.LAYER_STATES,i=k.getBucketingId(),c=[],s=new RegExp(i+"\\$\\$([^$]+?)\\$\\$"+e),r.each(p.keys(),(function(n){var t=n.match(s);if(t){var e={namespace:t[1],userId:i,item:F(p.getItem(n))};c.push(e)}})),c);var e,i,c,s;r.forEach(n,(function(n){n.item=r.map(n.item,x)})),l=n,h=[],r.each(l,(function(n){r.each(n.item,(function(t){t.namespace=n.namespace,h.push(t)}))})),g=h,o.dispatch(a.LOAD_PERSISTED_LAYER_STATES,{layerStates:r.filter(g,(function(n){return!!n.decision}))}),v=O(w.SESSION_STATE)||{},v=r.extend({lastSessionTimestamp:0,sessionId:null},v),o.dispatch(a.LOAD_SESSION_STATE,v),function(n){var t,e,i=A.getAllPlugins(d.PluginTypes.visitorProfileProviders),u=r.filter(i,(function(n){return r.isFunction(n.restorer)}));n.profile&&n.metadata?(t=n.profile,e=n.metadata):(t=n,e={});t=r.reduce(t,(function(n,t,e){var i=t,o=r.find(u,{provides:e});return o&&(i=o.restorer(t)),n[e]=i,n}),{}),o.dispatch(a.LOAD_EXISTING_VISITOR_PROFILE,{profile:t,metadata:e})}(O(w.VISITOR_PROFILE)||{});var f=O(w.TRACKER_OPTIMIZELY);f&&(m=f,o.dispatch(a.SET_TRACKER_PERSISTABLE_STATE,m));var l,h;var v;var g;var m;t.loadForeignData(),t.removeLegacySessionStateCookies()}(),t.deleteOldLocalData(),i.deleteData(n));try{k.getVisitorIdLocator()||t.maybePersistVisitorId(n)}catch(l){if(g.error("Visitor / Unable to persist visitorId, disabling tracking"),o.dispatch(a.LOAD_DIRECTIVE,{trackingDisabled:!0}),e=l,null!=(c=s.MismatchError)&&"undefined"!=typeof Symbol&&c[Symbol.hasInstance]?c[Symbol.hasInstance](e):e instanceof c)throw g.error("Visitor / Cookie not set to correct value:",l),new Error("Cookie mismatch error while persisting visitorId");throw l}t.refreshSession()},t.getVariationIdMap=function(){return O(w.VARIATION_MAP)||{}},t.updateVariationIdMap=function(n,t,e){o.dispatch(a.UPDATE_VARIATION_ID_MAP,{layerId:n,experimentId:t,variationId:e})},t.persistVariationIdMap=function(){var n=R.getVariationIdMapString();P(w.VARIATION_MAP,n,!0)},t.getPreferredLayerMap=function(){return O(w.LAYER_MAP)||{}},t.updatePreferredLayerMap=function(n,t){o.dispatch(a.UPDATE_PREFERRED_LAYER_MAP,{groupId:n,layerId:t})},t.persistTrackerOptimizelyData=function(n){P(w.TRACKER_OPTIMIZELY,n)},t.refreshSession=function(){o.dispatch(a.REFRESH_SESSION)},t.populateEagerVisitorData=function(n,e){var i=r.filter(n,(function(n){return!n.isLazy}));return t.populateVisitorData(i,e)},t.populateLazyVisitorData=function(n,e){var i=r.filter(n,(function(n){return n.isLazy}));return t.populateVisitorData(i,e)},t.populateVisitorData=function(n,t){t=t||{};var e=r.partial(C,t),i=r(n).filter({isAsync:!0}).map(e).filter().value();return r.forEach(r.filter(n,(function(n){return!n.isAsync})),e),i.length>0?m.all(i):m.resolve()},t.persistBehaviorEvents=function(n){P(w.EVENTS,n)},t.persistBehaviorEventQueue=function(n){P(w.EVENT_QUEUE,n)},t.getPersistedBehaviorEventCount=function(){var n=O(w.EVENTS)||[],t=O(w.EVENT_QUEUE)||[];return c.deserialize(n).length+c.deserialize(t).length},t.persistLayerStates=function(){var n=I.getLayerStates(t.getNamespace());n=r.map(n,(function(n){return r.omit(n,"namespace")})),P(w.LAYER_STATES,n)},t.persistSessionState=function(){P(w.SESSION_STATE,S.getState())},t.persistVisitorProfile=function(){P(w.VISITOR_PROFILE,function(){var n=N.getVisitorProfile(),t=N.getVisitorProfileMetadata(),e=A.getAllPlugins(d.PluginTypes.visitorProfileProviders);if(e){var i=r.reduce(e,(function(n,t){return t.provides&&(n[t.provides]=t),n}),{});n=r.omitBy(n,(function(n,t){var e=i[t];return e&&e.isTransient}))}return{profile:n,metadata:t}}())},t.persistVisitorBucketingStore=function(){var n;t.persistVariationIdMap(),n=R.getPreferredLayerMapString(),P(w.LAYER_MAP,n,!0)},t.getUserIdFromKey=function(n,e){var i;return r.includes(n,e)&&r.includes(n,"_")&&r.includes(n,"$$")&&r.includes(n.slice(n.indexOf("$$")),t.getNamespace())&&(i=n.slice(n.indexOf("_")+1,n.indexOf("$$"))),i},t.maybePersistVisitorId=function(n){n.randomId&&(b.getAutoRefresh()||t.getCurrentId()!==n.randomId?(s.set(d.COOKIES.VISITOR_ID,n.randomId),g.log("Persisting visitorId:",n.randomId)):g.log("Not persisting visitorId: value is not changed and also auto-refresh is disabled"))},t.getAttribute=function(n){return N.getAttribute(n)},t.getPendingAttributeValue=function(n){return D.getPendingAttributeValue(n)},t.isForeignKey=V,t.checkKeyForVisitorId=function(n){var e=k.getBucketingId()||t.getCurrentId(),i=t.getIdFromKey(n);return!i||i===e},t.getIdFromKey=function(n){var e=n.split("$$")[0],i=t.getStorageKeyFromKey(n);if(r.includes(d.StorageKeys,i))return null;var o=e.indexOf("_");return-1===o?e:e.substring(o+1)},t.getStorageKeyFromKey=function(n){var t,e=n.split("$$").pop();if(e.indexOf("://")>-1){var i=e.indexOf("_");t=e.substring(i+1)}else t=e;return r.includes(r.values(d.AllStorageKeys),t)?t:null},t.deleteOldLocalData=function(){var n=p.keys();r.each(n,(function(n){t.isForeignKey(n)||t.checkKeyForVisitorId(n)||p.removeItem(n)}))},t.deleteOldForeignData=function(){var n=p.keys();r.each(n,(function(n){t.isForeignKey(n)&&p.removeItem(n)}))},t.loadForeignData=function(){r.each(p.keys(),(function(n){var t=p.getItem(n);t&&L(n,t)}))},t.getNamespace=function(){return E.getNamespace()},t.serializeFieldKey=function(n){return r.isArray(n)?n.join("$$"):n},t.removeLegacySessionStateCookies=function(){var n=s.getAll();r.forEach(r.keys(n),(function(n){0===n.indexOf(d.COOKIES.SESSION_STATE+"$$")&&s.remove(n)}))}},8955:function(n,t,e){var i=e(9576),r=e(8964);t.normalizeClientData=function(n){!n.listTargetingKeys&&n.listTargetingCookies&&(n.listTargetingKeys=i.map(n.listTargetingCookies,(function(n){return{type:r.ListTargetingKeyTypes.COOKIE,key:n}})),delete n.listTargetingCookies)}},5723:function(n,t,e){e(4041).register("env/jquery",e(6911))},6911:function(n,t,e){var i,r=e(2188);try{i=$}catch(a){}var o=r.getGlobal("$");n.exports=i&&i!==o?i:o},5133:function(n){n.exports={}},6708:function(n,t,e){function i(n,t){return null!=t&&"undefined"!=typeof Symbol&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](n):n instanceof t}var r=e(9576),o=e(6639).G,a=e(3792),u=e(4041),c=e(6954),s=e(2678),f=e(2188),l=e(3455),d=u.get("stores/client_metadata"),h=u.get("stores/global");function v(n){return n&&n.engine?n.engine:d.getClientName()}t.handleError=function(n,t){var e=function(){return l.request({url:"https://errors.client.optimizely.com/log",method:"POST",data:m,contentType:"application/json"}).then((function(n){s.log("Error Monitor / Logged error with response: ",n)}),(function(n){s.error("Failed to log error, response was: ",n)}))},u=n.name||"Error",p=n.message||"",g=n.stack||null;i(n,o)&&(i(p,Error)?(p=p.message,g=n.message.stack):g=null);var m={timestamp:a.now(),clientEngine:v(t),clientVersion:d.getClientVersion(),accountId:h.getAccountId(),projectId:h.getProjectId(),errorClass:u,message:p,stacktrace:g},_=r.map(h.getExperimental(),(function(n,t){return{key:"exp_"+t,value:String(n)}}));t&&r.forEach(t,(function(n,t){r.isObject(n)||_.push({key:t,value:String(n)})}),[]),r.isEmpty(_)||(m.metadata=_),s.error("Logging error",m),c.isLoaded()?e():f.addEventListener("load",e)}},7102:function(n,t,e){var i=e(9576),r=e(2805),o=e(7989),a=e(8235),u=e(6639).U,c=e(4611),s=e(6530),f=e(4041).get("stores/directive"),l=e(6954),d=e(5557),h=e(4797),v=e(2678),p=e(2522),g=e(7246),m=e(9280).create(),_=1e3,w=10,y=u("ChangeOverheatError");function b(n,t){if(this.change=n,this.identifier=t.identifier,this.startTime=t.startTime,f.shouldObserveChangesIndefinitely()){h.dispatch(r.INITIALIZE_CHANGE_METRICS),this.rateMeter=new p(_);var e=i.isNull(w)?Number.POSITIVE_INFINITY:w;this.rateMeter.addListener(e,i.bind((function(){v.warn("AppendChange",this,"has overheated and will no longer apply or reapply"),this.cancel(),h.dispatch(r.RECORD_CHANGE_OVERHEATED),o.emitError(new y("Change "+this.identifier+" has overheated"),{layerId:t.action&&t.action.layerId,experimentId:t.action&&t.action.experimentId,variationId:t.action&&t.action.variationId,changeId:n.id,changeType:n.type,movingWindowMilliseconds:_,maxMacroTasksInMovingWindow:e})}),this));for(var a=Math.min(e,50),u=0;u<=a;u++)this.rateMeter.addListener(u,i.partial((function(n){h.dispatch(r.RECORD_CHANGE_MACROTASK_RATE,{changeMacrotaskRate:n})}),u))}}b.prototype.numberOfRootNodes=function(n){var t=document.createElement("div");return t.innerHTML=n,t.childNodes.length},b.prototype.getSiblingElements=function(n,t,e){for(var i=n,r=[],o=0;o<t;o++)e?(r.push(i.nextSibling),i=i.nextSibling):(r.push(i.previousSibling),i=i.previousSibling);return r},b.prototype.apply=function(){this.applyDeferred=s();try{if(!this.numberOfRootNodes(this.change.value))throw new Error("No DOM elements to be created for this change: "+this.change.value);var n=i.partial(this.applyDeferred.reject,new Error("Unable to find selector.")),t={};f.shouldObserveChangesUntilTimeout()?t={timeout:i.partial(g.isTimedOut,this.startTime),onTimeout:n}:f.isEditor()&&m.waitUntil(i.partial(g.isTimedOut,this.startTime)).then(n,n),this.unobserveSelector=m.observeSelector(this.change.selector,i.bind(this.maybeApplyToElement,this),t);var e=l.querySelectorAll(this.change.selector);i.each(e,i.bind(this.maybeApplyToElement,this))}catch(r){this.applyDeferred.reject(r)}return this.applyDeferred},b.prototype.maybeApplyToElement=function(n){var t=a.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id;if(n.hasAttribute(t))return v.debug("Not applying AppendChange to element",n,"because it was inserted by this change"),void this.applyDeferred.resolve();this.rateMeter&&this.rateMeter.countCurrentTick(),i.bind(this.applyOrReapplyToElement,this,n,t)(),this.applyDeferred.resolve()},b.prototype.applyOrReapplyToElement=function(n,t){var e;switch(this.change.operator){case d.DOMInsertionType.AFTER:e=d.insertAdjacentHTMLType.AFTER_END;break;case d.DOMInsertionType.APPEND:e=d.insertAdjacentHTMLType.BEFORE_END;break;case d.DOMInsertionType.BEFORE:e=d.insertAdjacentHTMLType.BEFORE_BEGIN;break;case d.DOMInsertionType.PREPEND:e=d.insertAdjacentHTMLType.AFTER_BEGIN;break;default:e=d.insertAdjacentHTMLType.BEFORE_END}n.insertAdjacentHTML(e,this.change.value),n.setAttribute(t,""),c.setData(n,this.change.id,this.identifier,[]);var r,o,a=this.numberOfRootNodes(this.change.value)-1;e===d.insertAdjacentHTMLType.BEFORE_END?(r=n.lastChild,o=this.getSiblingElements(r,a,!1)):e===d.insertAdjacentHTMLType.AFTER_BEGIN?(r=n.firstChild,o=this.getSiblingElements(r,a,!0)):e===d.insertAdjacentHTMLType.BEFORE_BEGIN?(r=n.previousSibling,o=this.getSiblingElements(r,a,!1)):e===d.insertAdjacentHTMLType.AFTER_END&&(r=n.nextSibling,o=this.getSiblingElements(r,a,!0)),o.unshift(r),i.each(o,i.bind((function(n){var e=n.nodeType===Node.ELEMENT_NODE?n:l.parentElement(n);e.setAttribute(t,"");var r=c.getData(e,this.change.id,this.identifier)||[];r.push(n),c.setData(e,this.change.id,this.identifier,r),i.each(l.childrenOf(e),(function(n){n.setAttribute(t,"")}))}),this))},b.prototype.cancel=function(){this.unobserveSelector&&this.unobserveSelector()},n.exports=function(n){n.registerChangeApplier(d.changeType.APPEND,b)}},2075:function(n,t,e){var i=e(9576),r=e(5557);t.transformVisibilityAttributesToCSS=function(n){if(!n.attributes)return n;if(n.attributes[r.selectorChangeType.HIDE]||n.attributes[r.selectorChangeType.REMOVE]){var t=i.extend({css:{}},i.cloneDeep(n));return n.attributes[r.selectorChangeType.HIDE]&&(t.css.visibility="hidden",delete t.attributes[r.selectorChangeType.HIDE]),n.attributes[r.selectorChangeType.REMOVE]&&(t.css.display="none",delete t.attributes[r.selectorChangeType.REMOVE]),t}return n},t.createStylesFromChange=function(n,t){if(i.isEmpty(t.css))return t.attributes.style;var e="",r=t.attributes.style||"";return i.each(t.css,(function(n,t){new RegExp(t+"\\s?:").test(r)||(e+=t+":"+n+";")})),i.isUndefined(t.attributes.style)?(n||"")+e:e+r}},145:function(n,t,e){var i=e(9576),r=(e(8398).Promise,e(2805)),o=e(7989),a=e(8235),u=e(6639).U,c=e(4611),s=e(6530),f=e(4041).get("stores/directive"),l=e(6954),d=e(5557),h=e(4797),v=e(2678),p=e(7174),g=e(2522),m=e(7246),_=e(2188),w=e(2075),y=e(9280).create(),b={attributes:!0,childList:!0,subtree:!0,characterData:!0},E=1e3,I=10,A=u("ChangeOverheatError");function T(n,t){if(this.change=i.cloneDeep(n),this.change=w.transformVisibilityAttributesToCSS(this.change),this.identifier=t.identifier,this.startTime=t.startTime,this.disconnectObserverQueue=[],f.shouldObserveChangesIndefinitely()){h.dispatch(r.INITIALIZE_CHANGE_METRICS),this.rateMeter=new g(E);var e=i.isNull(I)?Number.POSITIVE_INFINITY:I;this.rateMeter.addListener(e,i.bind((function(){v.warn("AttributeChange",this,"has overheated and will no longer apply or reapply"),this.cancel(),h.dispatch(r.RECORD_CHANGE_OVERHEATED),o.emitError(new A("Change "+this.identifier+" has overheated"),{layerId:t.action&&t.action.layerId,experimentId:t.action&&t.action.experimentId,variationId:t.action&&t.action.variationId,changeId:n.id,changeType:n.type,movingWindowMilliseconds:E,maxMacroTasksInMovingWindow:e})}),this));for(var a=Math.min(e,50),u=0;u<=a;u++)this.rateMeter.addListener(u,i.partial((function(n){h.dispatch(r.RECORD_CHANGE_MACROTASK_RATE,{changeMacrotaskRate:n})}),u))}this.cancelled=!1}T.prototype.apply=function(){this.applyDeferred=s();try{if(i.isEmpty(this.change.attributes)&&i.isEmpty(this.change.css))return v.debug("Not applying empty AttributeChange"),this.applyDeferred.resolve(),this.applyDeferred;var n=i.partial(this.applyDeferred.reject,new Error("Unable to find selector.")),t={};f.shouldObserveChangesUntilTimeout()?t={timeout:i.partial(m.isTimedOut,this.startTime),onTimeout:n}:f.isEditor()&&y.waitUntil(i.partial(m.isTimedOut,this.startTime)).then(n,n),this.unobserveSelector=y.observeSelector(this.change.selector,i.bind(this.maybeApplyToElement,this),t);var e=l.querySelectorAll(this.change.selector);i.each(e,i.bind(this.maybeApplyToElement,this))}catch(r){this.applyDeferred.reject(r)}return this.applyDeferred},T.prototype.maybeApplyToElement=function(n){var t=a.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id;if(n.hasAttribute(t))return v.debug("AttributeChange not being applied. Element already changed, or is a child of an element that was changed by this AttributeChange. "+n),void this.applyDeferred.resolve();this.rateMeter&&this.rateMeter.countCurrentTick();var e=i.bind(this.applyOrReapplyToElement,this,n,t);e();var r=i.bind((function(){var t=i.bind((function(){this.cancelled||p.observe(o,n,b)}),this);return _.setTimeout(t)}),this),o=p.create(i.bind((function(){this.rateMeter&&this.rateMeter.countCurrentTick(),o.disconnect(),e(),r()}),this));r(),this.disconnectObserverQueue.push(i.bind(o.disconnect,o)),this.applyDeferred.resolve()},T.prototype.applyOrReapplyToElement=function(n,t){var e={};i.forOwn(this.change.attributes,(function(r,o){switch(o){case d.selectorChangeType.CLASS:i.isUndefined(n.className)||(e[d.selectorChangeType.CLASS]=n.className,n.className=r);break;case d.selectorChangeType.HREF:i.isUndefined(n.href)||(e[d.selectorChangeType.HREF]=n.href,n.href=r);break;case d.selectorChangeType.HTML:i.isUndefined(n.innerHTML)||(e[d.selectorChangeType.HTML]=n.innerHTML,n.innerHTML=r,i.each(l.childrenOf(n),(function(n){n.setAttribute(t,"")})));break;case d.selectorChangeType.SRC:i.isUndefined(n.src)||(e[d.selectorChangeType.SRC]=n.src,n.src=r);break;case d.selectorChangeType.STYLE:break;case d.selectorChangeType.TEXT:i.isUndefined(n.textContent)||(e[d.selectorChangeType.TEXT]=n.textContent,n.textContent=r);break;default:throw new Error("Unrecognized attribute: "+o)}}));var r=w.createStylesFromChange(n.style.cssText,this.change);i.isString(r)&&(e[d.selectorChangeType.STYLE]=n.style.cssText,n.style.cssText=r),n.setAttribute(t,""),c.setData(n,this.change.id,this.identifier,e)},T.prototype.cancel=function(){this.cancelled=!0,this.unobserveSelector&&this.unobserveSelector(),i.each(this.disconnectObserverQueue,(function(n){try{n()}catch(t){}}))},n.exports=function(n){n.registerChangeApplier(d.changeType.ATTRIBUTE,T)}},7649:function(n,t,e){var i=e(9576),r=e(6530),o=e(5557),a=e(9404);function u(n,t){if(!i.isFunction(n.value))throw new Error("Custom code must be a function");this.change=n}u.prototype.apply=function(){var n=r();try{a.apply(this.change.value),n.resolve()}catch(t){n.reject(t)}return n},n.exports=function(n){n.registerChangeApplier(o.changeType.CUSTOM_CODE,u)}},6108:function(n,t,e){var i=e(9576),r=e(151),o=e(6183),a=e(7065).E,u={decideLayer:function(n,t){if(!n.decisionMetadata||!n.decisionMetadata.experimentPriorities)throw new a("No decisionMetadata.experimentPriorities on layer.");for(var e=n.decisionMetadata.experimentPriorities.length,i=0;i<e;i++){var r=c(n,t.audienceIds,t.bucketingId,i);if(r){var u=o.selectVariation(r,t.audienceIds,t.bucketingId,t.activationId,t.preferredVariationMap);if(!n.decisionMetadata.offerConsistency||o.hasVariationActionsOnView(u,t.pageId))return{experiment:r,variation:u}}}throw new a("No eligible experiment and variation found.")},includePageIdInDecisionTicket:function(n){return!(!n.decisionMetadata||!n.decisionMetadata.offerConsistency)}};function c(n,t,e,u){var c,s=n.decisionMetadata.experimentPriorities[u],f=i.reduce(s,(function(e,i){var r=o.getExperimentById(n,i.entityId);return o.isValidExperiment(t,r)&&e.push(i.entityId),e}),[]);if(!i.isEmpty(f)){var l,d=i.filter(s,{endOfRange:null});if(d&&d.length===s.length)l=function(n){for(var t=[],e=Math.round(1e4/n.length),i=0;i<n.length;i++)t.push({entityId:n[i],endOfRange:e*(i+1)});return t[t.length-1].endOfRange=1e4,t}(f);else{if(0!==d.length)throw new a("You must specify weights for all or none of the experiments in each priority layer.");l=function(n,t){for(var e=[],r=[],o=0,a=0;a<t.length;a++){var u=0;n.indexOf(t[a].entityId)>=0&&(o+=u=0===a?t[0].endOfRange:t[a].endOfRange-t[a-1].endOfRange,r.push({entityId:t[a].entityId,points:u}))}if(i.isEmpty(e))for(var c=0,s=0;s<r.length;s++){var f=Math.round(1e4*r[s].points/o)+c;e.push({entityId:r[s].entityId,endOfRange:f}),c=f}return e[e.length-1].endOfRange=1e4,e}(f,s)}if(c=r.chooseWeightedCandidate(e,n.id,l)){var h=o.getExperimentById(n,c);if(h)return h}}}n.exports=function(n){n.registerDecider("equal_priority",u)}},4870:function(n,t,e){var i=e(6183),r=e(7065).E,o={selectExperiment:function(n,t,e){if(n.experiments.length<1)throw new r("Unable to find experiment to bucket user into");var o=n.experiments[0];if(!i.isValidExperiment(t,o))throw new r('Audience conditions failed for experiment: "'+o.id+'".');return o}};n.exports=function(n){n.registerDecider("single_experiment",o),n.registerDecider("multivariate",o)}},4064:function(n,t,e){var i=function(n){return n&&"undefined"!=typeof Symbol&&n.constructor===Symbol?"symbol":typeof n},r=e(9576),o=e(7989),a=e(6639).U,u=e(6954),c=e(3043),s=t.Error=a("ClickDelegateError");function f(n){this.handler=n,this.events=[],this.unlistenFn=null,this.clickHandler=r.bind((function(n){r.forEach(this.events,r.bind((function(t){try{var e=t.config&&t.config.selector?t.config.selector:t.eventFilter.selector;(function(n,t,e){var a=n.target,u=0;for(;a;){var f;try{f=c(a,t)}catch(d){var l={typeofElementValue:void 0===a?"undefined":i(a),nodeName:r.result(a,["nodeName"],null),nodeType:r.result(a,["nodeType"],null),targetName:r.result(n,["target","nodeName"],null),targetType:r.result(n,["target","nodeType"],null),numParentsTraversed:u,selector:t,errorMessage:d.message,eventId:e.id};return o.emitError(new s("Unable to evaluate match for element"),l),!1}if(f)return!0;a=a.parentElement,u++}return!1})(n,e,t)&&this.handler(t)}catch(a){o.emitError(new s("Unable to handle click for selector"+e+":"+a.message))}}),this))}),this)}f.prototype.listen=function(){this.unlistenFn=u.addEventListener("click",this.clickHandler,!0)},f.prototype.unlisten=function(){this.unlistenFn&&(this.unlistenFn(),this.unlistenFn=null)},f.prototype.hasEvents=function(){return this.events.length>0},f.prototype.addEvent=function(n){this.events.push(n)},f.prototype.removeEvent=function(n){this.events=r.filter(this.events,(function(t){return t.apiName!==n.apiName}))},n.exports=f},7154:function(n,t,e){var i=e(9126),r=e(4064),o=e(2678),a=e(9840);function u(n){return"apiName: "+n.apiName+", selector: "+n.eventFilter.selector}n.exports=function(n){var t=new r((function(n){a.updateAllViewTags(),i.trackClickEvent(n)?o.log("Tracking click event:",n):o.log("Not tracking click event:",n)}));n.registerEventImplementation("click",{attach:function(n){t.hasEvents()||t.listen(),t.addEvent(n),o.debug("Started listening for click event ("+u(n)+"):",n)},detach:function(n){t.removeEvent(n),t.hasEvents()||t.unlisten(),o.debug("Stopped listening for click event ("+u(n)+"):",n)}})}},3057:function(n,t,e){var i=e(9576),r=e(5071),o=e(5186),a=e(319);function u(n,t){var e=o.buildFromSpecV0_1(t);if(1!==e.length)throw new Error("Invalid query descriptor; verify that no aggregators are specified");return a.execute(e[0],n)}function c(n,t){return i.map(n,(function(n){return i.isFunction(n.toObject)?n.toObject(t):n}))}function s(n,t){if(!n)return["Descriptor not defined"];var e=[];return n.count&&e.push('Unexpected "count" clause specified'),n.pick&&n.pick.modifier&&-1===t.indexOf(n.pick.modifier)&&e.push('Invalid "pick" modifier "'+n.pick.modifier+'"'),i.each(n.filters,(function(n){i.isUndefined(n.modifier)||e.push('Unexpected "filter" modifier "'+n.modifier+'"')})),e.length>0?e:void 0}function f(n,t){var e={revenueAsTag:!1,timeAsTimestamp:!0};if(i.isUndefined(t))return c(r.getEvents(n),e);if(i.isNumber(t)){if(t<=0)throw new Error("Count must be a positive integer, got "+t);return c(r.getEvents(n).slice(-t),e)}var a=s(t,i.values(o.RECENCY_FILTERS));if(a)throw new Error(a.join("\n"));return c(u(r.getEvents(n),t),e)}function l(n,t){if(!(t=i.cloneDeep(t)||{}).pick)throw new Error('No "pick" clause provided in query descriptor');if(!t.pick.name)throw new Error('No field name provided in "pick" clause');t.pick.modifier=t.pick.modifier||o.FREQUENCY_FILTERS.MOST_FREQUENT;var e=s(t,i.values(o.FREQUENCY_FILTERS));if(e)throw new Error(e.join("\n"));return u(r.getEvents(n),t)}function d(n,t){var e=o.buildFromSpecV0_2(t),u=r.getEvents(n),s=c(a.execute(e,u),{revenueAsTag:!0,timeAsTimestamp:!1});return(t.pick||t.reduce&&"count"===t.reduce.aggregator)&&(s=i.flatten(s)),t.reduce&&(s=s[0]),s}n.exports=["stores/visitor_events",function(n){return{getEvents:i.partial(f,n),getByFrequency:i.partial(l,n),query:i.partial(d,n)}}]},9374:function(n,t,e){n.exports=function(n){n.registerApiModule("behavior",e(3057))}},1569:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(6731)),n.registerAudienceMatcher("behavior",e(4683))}},4683:function(n,t,e){var i=e(9576),r=e(2676),o=e(5186),a=e(319);n.exports={fieldsNeeded:["events"],match:function(n,t){var e,u=r.parse(t.value);return e=i.isUndefined(u.version)?[u]:o.buildFromSpecV0_1(u),i.every(e,(function(t){return a.isSatisfied(t,n.events)}))}}},6731:function(n,t,e){var i=e(5071);n.exports={provides:"events",isTransient:!0,getter:[function(){return i.getEvents()}]}},6879:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(6478))}},6478:function(n,t,e){var i=e(9576),r=e(2024),o=e(5071),a=e(2676),u=e(5186);n.exports={provides:"customBehavior",shouldTrack:!0,isLazy:!1,getter:["stores/global","stores/visitor_attribute_entity",function(n,t){var e=n.getProjectId(),c=i.filter(i.map(t.getCustomBehavioralAttributes(e),(function(n){try{return{id:n.id,granularity:r.GRANULARITY.ALL,rule:u.buildFromSpecV0_2(a.parse(n.rule_json))}}catch(t){return}}))),s=o.getEvents();return r.evaluate(c,s)}]}},9754:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(351)),n.registerAudienceMatcher("first_session",e(2456))}},2456:function(n){n.exports={fieldsNeeded:["first_session"],match:function(n){return!!n.first_session}}},351:function(n,t,e){var i=e(2657),r=e(5071),o=e(9196).getFieldValue,a=e(2289).CURRENT_SESSION_INDEX;n.exports={provides:"first_session",shouldTrack:!0,getter:[function(){var n=r.getEvents();if(n&&n.length>0){var t=n[0];return o(t,[i.FIELDS.SESSION_INDEX])===a}return!0}]}},2024:function(n,t,e){var i=e(2678),r={FIELDS:e(2657).FIELDS},o=e(5186),a=e(319);t.GRANULARITY={ALL:"all",CURRENT_SESSION:"current_session",LAST_30_DAYS:"last_30_days",LAST_60_DAYS:"last_60_days"},t.evaluate=function(n,e){var u={};if(0===e.length){for(var c=0;c<n.length;c++)u[n[c].id]=n[c].defaultValue;return u}var s=function(n){if(0===n.length)return[];for(var t=n.length-1,e=r.FIELDS.SESSION_ID,i=n[t][e];t>0&&i===n[t-1][e];)t--;return n.slice(t)}(e),f=function(n,t){if(0===n.length||t<=0)return[];var e=+new Date-t*o.MILLIS_IN_A_DAY;e-=e%o.MILLIS_IN_A_DAY;for(var i=n.length;i>0&&e<=n[i-1][r.FIELDS.TIME];)i--;return n.slice(i)}(e,60);for(c=0;c<n.length;c++){var l=n[c],d=e;l.granularity===t.GRANULARITY.CURRENT_SESSION?d=s:l.granularity===t.GRANULARITY.LAST_60_DAYS&&(d=f);try{var h=d;l.rule&&(h=a.execute(l.rule,d)),u[l.id]=l.defaultValue,1===h.length?u[l.id]=h[0][0]||l.defaultValue:i.debug("Behavior / Rule for",l.id,"returned",h.length,"results, expected 1")}catch(v){i.error("Behavior / Rule for",l.id,"failed with",v.message||"")}}return u}},5071:function(n,t,e){var i=e(9576),r=e(9314),o=e(4041).get("stores/visitor_events");t.getEvents=function(){var n=r.getEvents(),t=[].concat.apply([],i.values(o.getForeignEvents())),e=[].concat.apply([],i.values(o.getForeignEventQueues())),a=r.mergeAllEvents([n,t,e]);return a.slice(a.length-1e3)}},5186:function(n,t,e){var i=t,r=e(9576),o={FIELDS:e(2657).FIELDS,FIELDS_V0_2:e(2657).FIELDS_V0_2},a=e(2676),u=e(2678),c=e(319);i.MILLIS_IN_A_DAY=864e5,i.aggregateField=function(n,t){return r.isString(t)&&(t=[t]),t=t||c.DEFAULT_FIELD,[c.generateAlias(n,t)]},i.groupField=function(n){return r.isString(n)&&(n=[n]),[(n=n||c.DEFAULT_FIELD).join(".")]};var s={"<":"lt","<=":"lte",">":"gt",">=":"gte","=":"eq","==":"eq"};function f(n){return n=(n||"").toString().trim(),s[n]||n}function l(n,t,e){var a={where:t};if(n.count&&(a.limit=n.count),n.modifier===i.FREQUENCY_FILTERS.MOST_FREQUENT){var u=i.getFieldKeyPathForSource(n.name,e),c=i.aggregate("count"),s=i.aggregateField("count"),f=i.groupField(u);return r.extend(a,{select:[{field:f}],groupBy:i.groupBy([u]),aggregate:[c],orderBy:[{field:s,direction:"DESC"}]})}return r.extend(a,{orderBy:[{field:[o.FIELDS.TIME],direction:"DESC"}]})}i.fieldComparison=function(n,t,e){return n=f(n),r.isString(t)&&(t=[t]),"exists"===n?{op:n,args:[{field:t}]}:{op:n,args:[{field:t},{value:e}]}},i.relativeTimeComparison=function(n,t){return{op:f(n),args:[{op:"-",args:[{eval:"now"},{field:[o.FIELDS.TIME]}]},{value:t*i.MILLIS_IN_A_DAY}]}},i.rangeTimeComparison=function(n){return r.isArray(n)?{op:"between",args:[{field:[o.FIELDS.TIME]},{value:[n[0]||+new Date(0),n[1]||+new Date]}]}:(u.error("Rule builder","rangeTimeComparison passed invalid range",n),null)},i.groupBy=function(n){for(var t=[],e=0;e<n.length;e++)t[e]={field:n[e]};return t},i.aggregate=function(n,t){return r.isString(t)&&(t=[t]),{op:n,args:[{field:t=t||c.DEFAULT_FIELD}]}},i.SOURCE_TYPES={BEHAVIOR:"events",CUSTOM_BEHAVIOR:"custom_behavior",DCP:"dcp"},i.FREQUENCY_FILTERS={MOST_FREQUENT:"most_frequent",LEAST_FREQUENT:"least_frequent"},i.RECENCY_FILTERS={MOST_RECENT:"most_recent",LEAST_RECENT:"least_recent"},i.getFieldKeyPathForSource=function(n,t){t=t||i.SOURCE_TYPES.BEHAVIOR;var e=[];return r.isString(n)?(e=[n],t!==i.SOURCE_TYPES.BEHAVIOR||r.includes(r.values(o.FIELDS),n)||(e=[o.FIELDS.OPTIONS,n])):e=n,e},i.buildFromSpecV0_1=function(n){if(!(n.action||n.filters&&0!==n.filters.length))throw new Error('Audience spec must have an "action" field or at least one "filter" '+a.stringify(n));var t=i.fieldComparison("gt",o.FIELDS.TIME,0),e=[],c=[];if(n.action&&(c.push(i.fieldComparison("eq",o.FIELDS.NAME,n.action.value)),n.action.type&&c.push(i.fieldComparison("eq",o.FIELDS.TYPE,n.action.type))),n.time)if("last_days"===n.time.type)c.push(i.relativeTimeComparison("lte",n.time.days));else if("range"===n.time.type){var s=i.rangeTimeComparison([n.time.start,n.time.stop]);s&&c.push(s)}else u.error("Rule builder",'Audience spec has bad "time" type',n.time.type);if(t={op:"and",args:c},n.count&&e.push({where:i.fieldComparison(n.count.comparator,"0",n.count.value),from:{select:[{field:i.aggregateField("count")}],where:t,aggregate:[i.aggregate("count")]}}),n.filters&&r.each(n.filters,(function(r){var a,u,s=i.getFieldKeyPathForSource(r.name,n.source);if(r.modifier===i.FREQUENCY_FILTERS.MOST_FREQUENT?(a=i.aggregate("count"),u=i.aggregateField("count")):r.modifier===i.RECENCY_FILTERS.MOST_RECENT&&(a=i.aggregate("max",o.FIELDS.TIME),u=i.aggregateField("max",o.FIELDS.TIME)),a){var f=s,l=i.groupField(f);e.push({where:i.fieldComparison(r.comparator,"0",r.value),from:{select:[{field:l}],where:t,groupBy:i.groupBy([f]),aggregate:[a],orderBy:[{field:u,direction:"DESC"}],limit:1}})}else c.push(i.fieldComparison(r.comparator,s,r.value))})),n.pick){if(e.length>0)throw new Error('A "pick" clause must not be specified with "count" or "most_recent", "most_frequent" modifiers'+a.stringify(n));return[l(n.pick,t,n.source)]}return e.length>0?e:[{where:t}]},i.buildFromSpecV0_2=function(n){!function(n){var t=[];if(r.isUndefined(n))throw new Error("rule is undefined");if(!r.isObject(n))throw new Error("rule is not an Object");"0.2"!==n.version&&t.push('version: not "0.2"'),n.filter&&(r.isArray(n.filter)?r.each(n.filter,(function(n,e){var r=i.validateFieldKeyPathV0_2(n.field,i.FieldPurpose.FILTER);r&&t.push("filter["+e+"]: "+r);var o=i.validateComparatorAndValue(n.comparator,n.value);o&&t.push("filter["+e+"]: "+o)})):t.push("filter: not an array"));var e=[],o=[];n.sort&&(n.reduce&&n.reduce.aggregator&&"nth"!==n.reduce.aggregator&&t.push("sort: superfluous because we can apply aggregator "+a.stringify(n.reduce.aggregator)+" to unsorted items"),r.isArray(n.sort)?r.each(n.sort,(function(n,u){var c=i.validateFieldKeyPathV0_2(n.field,i.FieldPurpose.SORT);c&&t.push("sort["+u+"]: "+c),n.field&&"frequency"===n.field[0]?e.push(n):o.push(n);var s=function(n){var t="direction "+(a.stringify(n)||String(n));if(!r.includes(["ascending","descending"],n))return t+' is not "ascending" or "descending"'}(n.direction);s&&t.push("sort["+u+"]: "+s)})):t.push("sort: not an array"),e.length&&o.length&&t.push('sort: sorting by non-["frequency"] field is pointless because we are going to sort the picked values by ["frequency"]'),e.length&&!n.pick&&t.push('sort: sorting by ["frequency"] is impossible because no values have been picked'));if(n.pick){n.reduce&&"count"===n.reduce.aggregator&&t.push('pick: superfluous because we can apply aggregator "count" to raw events');var u=i.validateFieldKeyPathV0_2(n.pick.field);u&&t.push("pick: "+u)}if(n.reduce){var c=n.reduce.aggregator,s="aggregator "+(a.stringify(c)||String(c)),f=n.reduce.n,l="index "+(a.stringify(f)||String(f));r.includes(["sum","avg","max","min","count","nth"],c)||t.push("reduce: "+s+" is unknown"),r.includes(["sum","avg","max","min"],c)&&(n.pick||t.push("reduce: "+s+" is impossible to use because no values have been picked")),"nth"===c?((!r.isNumber(f)||isNaN(f)||parseInt(f,10)!==f||f<0)&&t.push("reduce: "+l+" is not a non-negative integer (mandated by "+s+")"),n.sort||t.push('reduce: aggregator "nth" is meaningless without a specific sort order')):r.isUndefined(f)||t.push("reduce: "+l+" is defined (not mandated by "+s+")")}if(t.length)throw new Error(t.join("\n"))}(n);var t={where:{op:"and",args:r.map(n.filter||[],(function(n){return"age"===n.field[0]?i.relativeTimeComparison(n.comparator||"eq",n.value/i.MILLIS_IN_A_DAY):i.fieldComparison(n.comparator||"eq",i.convertFieldKeyPathFromSpecV0_2(n.field),n.value)}))}};if(n.reduce&&"count"===n.reduce.aggregator)return r.extend(t,{aggregate:[{op:"count",args:[{field:["*"]}]}],select:[{field:["_count_*"]}]});var e=[],o=[];if(n.sort&&(r.each(n.sort,(function(n){r.includes(["ascending","descending"],n.direction)&&(r.includes(["time","age"],n.field[0])&&o.push(n),"frequency"===n.field[0]&&e.push(n))})),o.length&&!e.length&&(t.orderBy=r.filter(r.map(o,(function(n){return"time"===n.field[0]?{field:i.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===n.direction?"ASC":"DESC"}:"age"===n.field[0]?{field:i.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===n.direction?"DESC":"ASC"}:void 0}))))),n.pick&&n.pick.field){var u=i.convertFieldKeyPathFromSpecV0_2(n.pick.field);if(n.reduce&&r.includes(["avg","max","min","sum"],n.reduce.aggregator))return r.extend(t,{aggregate:[{op:n.reduce.aggregator,args:[{field:u}]}],select:[{field:[c.generateAlias(n.reduce.aggregator,u)]}]});t=e.length?r.extend(t,{groupBy:[{field:u}],aggregate:[{op:"count",args:[{field:["*"]}]}],orderBy:[{field:["_count_*"],direction:"ascending"===e[0].direction?"ASC":"DESC"}],select:[{field:[u.join(".")]}]}):r.extend(t,{select:[{field:u}]})}if(n.reduce&&"nth"===n.reduce.aggregator){var s=n.reduce.n;if(r.isNumber(s)&&s>=0&&Number(s)===Math.floor(Number(s)))return r.extend(t,{offset:s,limit:1})}return t},i.convertFieldKeyPathFromSpecV0_2=function(n){return"tags"===n[0]&&"revenue"===n[1]?["r"]:[o.FIELDS_V0_2[n[0]]].concat(n.slice(1))},i.FieldPurpose={FILTER:"filter",SORT:"sort",PICK:"pick"},i.validateFieldKeyPathV0_2=function(n,t){var e="field "+(a.stringify(n)||String(n));if(!r.isArray(n)||!r.every(n,r.isString))return e+" is not an array of strings";if("tags"===n[0]&&n.length>2||"tags"!==n[0]&&n.length>1)return e+" includes too many strings";if("tags"===n[0]&&n.length<2)return e+" does not specify an exact tag";if(n.length<1)return e+" does not specify a top-level field";var u=r.keys(o.FIELDS_V0_2),c=["age","frequency"];return t===i.FieldPurpose.FILTER&&(u.push("age"),c=["frequency"]),t===i.FieldPurpose.SORT&&(u=["time","age","frequency"],c=["name","type","category","tags"]),r.includes(c,n[0])?e+" is not supported here":r.includes(u,n[0])?void 0:e+" is unknown"},i.validateComparatorAndValue=function(n,t){var e="comparator "+(a.stringify(n)||String(n)),i="value "+(a.stringify(t)||String(t));if(!r.isString(n)&&!r.isUndefined(n))return e+" is not a string";switch(n){case void 0:case"eq":case"is":case"contains":break;case"lt":case"gt":case"lte":case"gte":if(!r.isNumber(t))return i+" is not a number (mandated by "+e+")";break;case"in":if(!r.isArray(t))return i+" is not an array (mandated by "+e+")";break;case"between":if(!(r.isArray(t)&&2===t.length&&r.isNumber(t[0])&&r.isNumber(t[1])&&t[0]<=t[1]))return i+" is not a pair of increasing numbers (mandated by "+e+")";break;case"regex":if(!(r.isString(t)||r.isArray(t)&&2===t.length&&r.isString(t[0])&&r.isString(t[1])))return i+" is not a pattern string or a [pattern string, flags string] array (mandated by "+e+")";break;case"exists":if(!r.isUndefined(t))return i+" is not undefined (mandated by "+e+")";break;default:return e+" is unknown"}}},319:function(n,t,e){var i=e(9576),r=e(8964),o=e(2678),a=i.bind(o.log,o),u=e(3792),c=e(9196).getFieldValue,s=e(2676),f=function(n,t,e){if(n.getValueOrDefault)return n.getValueOrDefault(t,e);if(!i.isArray(t))return e;var r=c(n,t);return void 0===r&&(r=e),r},l=function(n){return"string"==typeof n?n.trim().toLowerCase():n};t.clause={WHERE:"where",GROUP_BY:"groupBy",AGGREGATE:"aggregate",HAVING:"having",ORDER_BY:"orderBy",SELECT:"select",OFFSET:"offset",LIMIT:"limit",FROM:"from"},t.DEFAULT_FIELD=["*"],t.booleanOperators={eq:function(n){var t=i.map(n,l);return t[0]==t[1]},is:function(n){return n[0]===n[1]},gt:function(n){return n[0]>n[1]},lt:function(n){return n[0]<n[1]},gte:function(n){return n[0]>=n[1]},lte:function(n){return n[0]<=n[1]},"in":function(n){var t=i.map(n[1]||[],l);return i.includes(t,l(n[0]))},between:function(n){return n[1][0]<=n[0]&&n[0]<=n[1][1]},contains:function(n){var t=i.map(n,(function(n){return"string"==typeof n?n.toLowerCase():n}));return-1!==(t[0]||"").indexOf(t[1])},regex:function(n){try{var t,e;return i.isString(n[1])?(t=n[1],e="i"):(t=n[1][0]||"",e=n[1][1]||""),new RegExp(t,e).test(n[0])}catch(r){return o.error("Rules",'In operator "regex", error: '+(r.message||"invalid RegExp /"+[t,e].join("/"))),!1}},exists:function(n){return void 0!==n[0]},and:function(n){return i.every(n,(function(n){return n}))},or:function(n){return i.some(n,(function(n){return n}))},not:function(n){return!n[0]}},t.arithmeticOperators={"+":function(n){return(n[0]||0)+(n[1]||0)},"-":function(n){return(n[0]||0)-(n[1]||0)},"/":function(n){return(n[0]||0)/(n[1]||1)},"%":function(n){return(n[0]||0)%(n[1]||1)}},t.aggregateOperators={sum:function(n,e){for(var i=n[0]||t.DEFAULT_FIELD,r=0,o=0;o<e.length;o++)r+=f(e[o],i,0);return r},avg:function(n,e){if(0===e.length)return 0;for(var i=n[0]||t.DEFAULT_FIELD,r=0,o=0;o<e.length;o++)r+=f(e[o],i,0);return r/e.length},max:function(n,e){for(var i=n[0]||t.DEFAULT_FIELD,r=Number.NEGATIVE_INFINITY,o=0;o<e.length;o++)r=Math.max(r,f(e[o],i,Number.NEGATIVE_INFINITY));return r},min:function(n,e){for(var i=n[0]||t.DEFAULT_FIELD,r=Number.POSITIVE_INFINITY,o=0;o<e.length;o++)r=Math.min(r,f(e[o],i,Number.POSITIVE_INFINITY));return r},count:function(n,t){return t.length}};var d={now:function(){return u.now()}},h=function(n,e){if(e.hasOwnProperty("value"))return e.value;if(e.hasOwnProperty("field"))return f(n,e.field);if(e.hasOwnProperty("eval"))return e.eval in d?d[e.eval]():void o.error("Rules","Unknown function: "+e.eval);if(e.op){var r,a=(r=e.op)in t.booleanOperators?t.booleanOperators[r]:r in t.arithmeticOperators?t.arithmeticOperators[r]:null;if(a){var u=i.partial(h,n),c=e.args||[];return a(i.map(c,(function(n){return u(n)})),n)}o.error("Rules","Unknown operator: "+e.op)}else o.error("Rules","No operator specified: "+s.stringify(e))};t.generateAlias=function(n,t){return"_"+n+"_"+t.join(".")};t.rewrite=function(n){var e=[],r={};function a(n,u){if(i.isArray(n)&&("and"!==n[0]&&"or"!==n[0]&&"not"!==n[0]&&o.error("Rules","Unexpected operation "+n[0]+". Continuing optimistically."),n={op:n[0],args:n.slice(1)}),n.hasOwnProperty("field")||n.hasOwnProperty("value")||n.hasOwnProperty("eval"))return n;if(u&&n.op in t.aggregateOperators){var c=(n.args&&n.args[0]||{}).field||t.DEFAULT_FIELD,s=t.generateAlias(n.op,c);return s in r||(e.push({op:n.op,args:n.args}),r[s]=!0),{field:[s]}}for(var f=[],l=n.args||[],d=0;d<l.length;d++)f[d]=a(l[d],u);return{op:n.op,args:f}}var u={};n.hasOwnProperty(t.clause.WHERE)&&(u[t.clause.WHERE]=a(n[t.clause.WHERE],!1)),n.hasOwnProperty(t.clause.HAVING)&&(u[t.clause.HAVING]=a(n[t.clause.HAVING],!0)),(n.hasOwnProperty(t.clause.AGGREGATE)||e.length>0)&&(u[t.clause.AGGREGATE]=(n[t.clause.AGGREGATE]||[]).concat(e));for(var c=[t.clause.GROUP_BY,t.clause.ORDER_BY,t.clause.SELECT,t.clause.OFFSET,t.clause.LIMIT],s=0;s<c.length;s++)n.hasOwnProperty(c[s])&&(u[c[s]]=n[c[s]]);return n.hasOwnProperty(t.clause.FROM)&&(u[t.clause.FROM]=t.rewrite(n[t.clause.FROM])),u};var v=function(n,e){e=e||0;var r=[];if(n.hasOwnProperty(t.clause.WHERE)?n[t.clause.WHERE].op?n[t.clause.WHERE].op in t.booleanOperators||r.push("Non-boolean WHERE clause operator"):r.push("Missing WHERE clause operator"):r.push("Missing WHERE clause"),!n.hasOwnProperty(t.clause.HAVING)||(n[t.clause.HAVING].op?n[t.clause.HAVING].op in t.booleanOperators||r.push("Non-boolean HAVING clause operator"):r.push("Missing HAVING clause operator")),n.hasOwnProperty(t.clause.GROUP_BY)&&!n.hasOwnProperty(t.clause.AGGREGATE)&&r.push("No AGGREGATE clause specified with GROUP_BY clause"),n.hasOwnProperty(t.clause.SELECT)){var o=n[t.clause.SELECT];if(i.isArray(o))for(var a=0;a<o.length;a++)o[a].op&&o[a].op in t.aggregateOperators&&r.push('In SELECT clause, aggregate operator "'+o[a].op+'" specified in selector at index '+a);else r.push("SELECT clause must be an array")}if(n.hasOwnProperty(t.clause.OFFSET)){var u=n[t.clause.OFFSET];(!i.isNumber(u)||Number(u)<0||Number(u)!==Math.floor(Number(u)))&&r.push("OFFSET must be a non-negative integer")}if(n.hasOwnProperty(t.clause.LIMIT)){var c=n[t.clause.LIMIT];(!i.isNumber(c)||Number(c)<0||Number(c)!==Math.floor(Number(c)))&&r.push("LIMIT must be a non-negative integer")}return e>0&&(r=i.map(r,(function(n){return"Sub-rule "+e+": "+n}))),n.hasOwnProperty(t.clause.FROM)&&(r=r.concat(v(n[t.clause.FROM],e+1))),r},p=function(n,e){var r,u,c,l=e;if(n.hasOwnProperty(t.clause.FROM)&&(o.debug("Evaluating FROM clause:",n[t.clause.FROM]),l=p(n[t.clause.FROM],l),o.debug("Results after FROM:",l)),o.debug("Evaluating WHERE clause:",n[t.clause.WHERE]),l=i.filter(l,(function(e){return h(e,n[t.clause.WHERE])})),o.debug("Results after WHERE:",l),n.hasOwnProperty(t.clause.AGGREGATE)){o.debug("Evaluating AGGREGATE clause:",n[t.clause.AGGREGATE]);var d=function(n,t){var e={};if(void 0===n||!i.isArray(n)||0===n.length)return e["*"]={fieldValues:{},events:t},e;for(var r=i.map(n,(function(n){return n.field})),o=0;o<t.length;o++){for(var a=t[o],u=[],c={},l=0;l<r.length;l++){var d=r[l],h=f(a,d),v=d.join(".");c[v]=h,u.push(encodeURIComponent(v)+"="+encodeURIComponent(s.stringify(h)))}var p=u.join("&");e.hasOwnProperty(p)||(e[p]={fieldValues:c,events:[]}),e[p].events.push(a)}return e}(n[t.clause.GROUP_BY],l);l=function(n,t){var e=[];return i.each(n,(function(n,r){var o=i.extend({},n.fieldValues),a=t[r]||{};i.extend(o,a),e.push(o)})),e}(d,(r=n[t.clause.AGGREGATE],u=d,c={},i.each(u,(function(n,e){c[e]={};for(var i=0;i<r.length;i++){var a=r[i],u=a.op;if(u in t.aggregateOperators){var s=(a.args&&a.args[0]||{}).field||t.DEFAULT_FIELD,f=t.generateAlias(u,s),l=t.aggregateOperators[u]([s],n.events);c[e][f]=l}else o.error("Rules","Unknown aggregate operator "+u)}})),c)),o.debug("Results after AGGREGATE:",l)}n.hasOwnProperty(t.clause.HAVING)&&(o.debug("Evaluating HAVING clause:",n[t.clause.HAVING]),l=i.filter(l,(function(e){return h(e,n[t.clause.HAVING])})),o.debug("Results after HAVING:",l)),n.hasOwnProperty(t.clause.ORDER_BY)&&(o.debug("Evaluating ORDER_BY clause:",n[t.clause.ORDER_BY]),l=function(n,t){return i.isArray(n)?0===n.length?t:t.sort((function(t,e){for(var i=0;i<n.length;i++){var r=n[i],o="ASC"===(r.direction||"ASC")?1:-1,a=r.field,u=f(t,a,0),c=f(e,a,0);if(u<c)return-o;if(u>c)return o}return 0})):(a("Rules","groupBy rule must be an array"),t)}(n[t.clause.ORDER_BY],l),o.debug("Results after ORDER_BY:",l));var v,g=0;return n.hasOwnProperty(t.clause.OFFSET)&&(o.debug("Evaluating OFFSET clause:",n[t.clause.OFFSET]),g=Number(n[t.clause.OFFSET])),n.hasOwnProperty(t.clause.LIMIT)&&(o.debug("Evaluating LIMIT clause:",n[t.clause.LIMIT]),v=g+Number(n[t.clause.LIMIT])),(g>0||!i.isUndefined(v))&&(l=l.slice(g,v),o.debug("Results after OFFSET/LIMIT:",l)),n.hasOwnProperty(t.clause.SELECT)&&(o.debug("Evaluating SELECT clause:",n[t.clause.SELECT]),l=function(n,t){return i.map(t,(function(t){return i.map(n,(function(n){return h(t,n)}))}))}(n[t.clause.SELECT],l),o.debug("Results after SELECT:",l)),l};t.execute=function(n,e){n=t.rewrite(n),o.shouldLog(r.LogLevel.DEBUG)&&o.groupCollapsed("Evaluating Behavioral Rule"),o.debug("Rule:",n,s.stringify(n)),o.debug("Events:",e);var i=v(n);if(i.length>0)throw new Error("Rule "+s.stringify(n)+" has violations: "+i.join("\n"));var a=p(n,e);return o.debug("Rule result:",a),o.shouldLog(r.LogLevel.DEBUG)&&o.groupEnd(),a},t.isSatisfied=function(n,e){try{return t.execute(n,e).length>0}catch(i){return o.error("Rules","Error "+i.toString()+" while evaluating rule "+s.stringify(n)),!1}}},5664:function(n,t,e){n.exports=function(n){n.registerDependency("sources/browser_id",e(6003)),n.registerVisitorProfileProvider(e(806)),n.registerVisitorProfileProvider(e(6442)),n.registerAudienceMatcher("browser_version",e(716))}},716:function(n,t,e){var i=e(4364).y;n.exports={fieldsNeeded:["browserVersion","browserId"],match:function(n,t){var e=t.value,r=n.browserId,o=n.browserVersion;if(0===e.indexOf(r)){var a=e.substr(r.length);return 0===i(o,a)}return!1}}},806:function(n){n.exports={provides:"browserId",shouldTrack:!0,isSticky:!0,getter:["sources/browser_id",function(n){return n.getId()}]}},6442:function(n){n.exports={provides:"browserVersion",getter:["sources/browser_id",function(n){return n.getVersion()}]}},6003:function(n,t,e){var i=e(769);t.getId=function(){return i.get().browser.id},t.getVersion=function(){return i.get().browser.version}},6093:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(3045)),n.registerAudienceMatcher("campaign",e(817))}},817:function(n,t,e){var i=e(6061);n.exports={fieldsNeeded:["campaign"],match:function(n,t){return i.hasMatch(t.value,t.match,n.campaign)}}},3045:function(n,t,e){var i=e(4005);n.exports={provides:"campaign",shouldTrack:!0,isSticky:!0,getter:[function(){return i.getQueryParamValue("utm_campaign")}]}},9031:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(8516)),n.registerAudienceMatcher("cookies",e(994))}},994:function(n,t,e){var i=e(6061);n.exports={fieldsNeeded:["cookies"],match:function(n,t){var e=t.name,r=t.value,o=t.match,a=n.cookies[e];return i.hasMatch(r,o,a)}}},8516:function(n,t,e){var i=e(9576),r=e(8718),o=e(4041).get("stores/audience_data");n.exports={provides:"cookies",isLazy:!0,getter:[function(){var n=r.getAll(),t=o.getFeaturesNeeded("cookies");return i.reduce(n,(function(n,e,r){return i.has(t,r)&&(n[r]=e),n}),{})}]}},8068:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(9286));var t=e(2531);n.registerAudienceMatcher("custom_attribute",t),n.registerAudienceMatcher("custom_dimension",t)}},2531:function(n,t,e){var i=e(9576),r=e(6061);t.match=function(n,t){var e;return n.custom&&(e=n.custom[t.name]),i.isObject(e)&&(e=e.value),r.hasMatch(t.value,t.match,e)}},9286:function(n,t,e){var i=e(9576),r=e(8964),o=e(2678),a=e(4041).get("stores/dimension_data");n.exports={provides:"custom",attributionType:r.AttributionTypes.LAST_TOUCH,restorer:function(n){return i.reduce(n,(function(n,t,e){var r=e,u=a.getByApiName(e),c=a.getById(e);return i.isObject(t)?(!t.id&&u&&(c=u,r=u.id,i.extend(t,{id:c.segmentId||c.id})),!t.name&&c&&c.apiName&&(t.name=c.apiName),t.id||c||o.warn("Unable to determine ID for custom attribute:",e,"; segmentation is disabled."),n[r]=t,n):(o.error('Unable to restore custom attribute "'+e+'" because value is not an object'),n)}),{})},shouldTrack:!0}},520:function(n,t,e){n.exports=function(n){n.registerDependency("sources/device",e(8822)),n.registerVisitorProfileProvider(e(4917)),n.registerAudienceMatcher("device",e(1306))}},1306:function(n){n.exports={fieldsNeeded:["device"],match:function(n,t){return n.device===t.value}}},4917:function(n){n.exports={provides:"device",shouldTrack:!0,isSticky:!0,getter:["sources/device",function(n){return n.getDevice()}]}},8822:function(n,t,e){var i=e(769);t.getDevice=function(){var n=i.get().device;return"unknown"!==n.model?n.model:"tablet"===n.type?"tablet":n.isMobile?"mobile":"desktop"}},9665:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(7510)),n.registerAudienceMatcher("device_type",e(4160))}},4160:function(n){n.exports={fieldsNeeded:["device_type"],match:function(n,t){return n.device_type===t.value}}},7510:function(n,t,e){var i=e(769);n.exports={provides:"device_type",shouldTrack:!0,isSticky:!0,getter:[function(){var n=i.get().device;switch(n.type){case"mobile":return"phone";case"tablet":case"desktop_laptop":return n.type;default:return"other"}}]}},563:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(9158)),n.registerAudienceMatcher("language",e(3195))}},3195:function(n,t){t.fieldsNeeded=["language"],t.match=function(n,t){return!!n.language&&n.language.toLowerCase().indexOf(t.value)>-1}},9158:function(n,t,e){var i=e(4005);n.exports={provides:"language",getter:[function(){return i.getLanguage()}]}},7819:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(5850)),n.registerAudienceMatcher("location",e(9099))}},9099:function(n,t){t.fieldsNeeded=["location"],t.match=function(n,t){if(!n.hasOwnProperty("location"))return!1;var e=n.location,i=t.value.split("|"),r=(i[0]||"").trim(),o=(i[1]||"").trim(),a=(i[2]||"").trim(),u=(i[3]||"").trim(),c=(i.length>4&&i[4]||"").trim();switch(i.length){case 1:if(e.country===r)return!0;break;case 2:if(e.region===o&&e.country===r)return!0;break;case 3:if(e.city===a&&(e.region===o||""===o)&&e.country===r)return!0;break;case 4:if(e.continent===u)return!0;break;case 5:if(e.dma===c)return!0}return!1}},5850:function(n,t,e){var i=e(6217);n.exports={provides:"location",isAsync:!0,getter:[function(){return i.getIPDerivedGeolocation()}]}},4871:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(4349)),n.registerAudienceMatcher("query",e(9054))}},9054:function(n,t,e){var i=e(9576),r=e(6061);t.fieldsNeeded=["queryParams"],t.match=function(n,t){var e=i.find(n.queryParams,(function(n){return n[0]===t.name}));return r.hasMatch(t.value,t.match,e?e[1]:null)}},4349:function(n,t,e){var i=e(4005);n.exports={provides:"queryParams",getter:[function(){return i.getQueryParams()}]}},8663:function(n,t,e){function i(n,t){return null!=t&&"undefined"!=typeof Symbol&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](n):n instanceof t}var r=e(9576),o=e(2676),a=e(2678),u=e(8398).Promise,c=e(3455),s=1,f=2,l="itemMetadata",d="recos";function h(n){return n===f}function v(n,t){if(!function(n){return n===s}(t))return d in n?o.parse(n.recos):(a.warn('recommender / Expected key "recos" not found'),[]);var e=new RegExp("^reco(\\d+)$"),i=r.reduce(n,(function(t,i,a){var u=a.match(e);if(u){var c=o.parse(n[a]);c&&r.isObject(c)&&(t[u[1]]=c)}return t}),[]);return r.filter(i,(function(n){return!r.isUndefined(n)}))}function p(n,t){return[n,encodeURIComponent(t)].join("/")}function g(n,t){var e=function(n,t,e){if(!r.isArray(n)||r.isEmpty(n))throw new Error("No "+e+"s available");var i;if(t){if(!(i=r.find(n,{id:t})))throw new Error("No "+e+" found with specified id "+t)}else{if(n.length>1)throw new Error("No "+e+" id specified when there are more than one available.");i=n[0]}return i},i=e(n.getRecommenderServices(),t&&t.recommenderServiceId,"recommender service");return i.idTagName||(i.idTagName="id"),{recommenderService:i,recommender:e(i.recommenders,t&&t.recommenderId,"recommender")}}function m(n){return o.parse(n).data}function _(n,t){return c.request({url:p(n,t)}).then((function(n){var t=m(n.response),e={};return l in t&&(e=o.parse(t.itemMetadata)),e}))}function w(n,t,e,o){var a=!(!o||!o.fetchWithMetadata),u=o&&o.overrideServingUrl||t.servingUrl;return c.request({url:p(u,e)}).then((function(t){var e,u=m(t.response);return e=v(u,n.serviceVersion),a&&h(n.serviceVersion)?y(n,r.map(e,n.idTagName),o).then((function(n){return n=r.map(n,(function(n){return i(n,Error)&&(n={}),delete n.__proto__,n})),r.merge(e,n)})):e}))}function y(n,t,e){var i=e&&e.overrideCatalogUrl||n.catalogUrl;return r.isString(t)?_(i,t):u.all(r.map(t,(function(n){return _(i,n)["catch"]((function(t){return a.warn("recommender / Failed to get recommendations for item:",n,t),t}))})))}function b(n,t,e){var i=g(n,e);return w(i.recommenderService,i.recommender,t,{overrideServingUrl:e&&e.overrideServingUrl,overrideCatalogUrl:e&&e.overrideCatalogUrl,fetchWithMetadata:!0})}function E(n,t,e){var i=g(n,e),r=i.recommenderService,o=i.recommender;if(!h(r.serviceVersion))throw new Error("Recommender service "+r.id+" serves self-contained recos. Use `fetchRecommendations` API call");return w(r,o,t,{overrideServingUrl:e&&e.overrideServingUrl,fetchWithMetadata:!1})}function I(n,t,e){var i=g(n,e).recommenderService;if(!h(i.serviceVersion))throw new Error("Recommender service "+i.id+" serves self-contained recos. Use `fetchRecommendations` API call");return r.isArray(t)&&t.length>20?u.reject("Cannot fetch more than 20 items"):y(i,t,e)}function A(n,t,e,i){return new T(n,t,e,i)}function T(n,t,e,i){this.recommenderSettings=t;var r=g(n,t);this.recommenderService=r.recommenderService,this.recommender=r.recommender,this.targetId=e,i&&(this.preFilter=i.preFilter,this.canonicalize=i.canonicalize,this.postFilter=i.postFilter),this._globalStore=n,this.reset()}function S(){var n={recosNoMeta:[],recosNoMetaOffset:0,recos:[],recosOffset:0};return a.debug("recommender / fetching recommended items for",this.targetId,"from recommender",this.recommender.id),h(this.recommenderService.serviceVersion)?E(this._globalStore,this.targetId,this.recommenderSettings).then(r.bind((function(t){return n.recosNoMeta=r.filter(t,this.preFilter),n}),this)):b(this._globalStore,this.targetId,this.recommenderSettings).then(r.bind((function(t){return n.recos=r(t).filter(this.preFilter).map(this.canonicalize).filter(this.postFilter).value(),n}),this))}function k(n){var t=n.numNeeded,e=n.buffer,o=e.recosNoMeta.length-e.recosNoMetaOffset;if(t<=0||o<=0)return u.resolve(n);var c=Math.max(t,5),s=r.slice(e.recosNoMeta,e.recosNoMetaOffset,e.recosNoMetaOffset+c),f=r.map(s,this.recommenderService.idTagName);e.recosNoMetaOffset+=f.length;var l=n.recosSoFar;return a.debug("recommender / fetching metadata for",f,"from recommender",this.recommender.id),I(this._globalStore,f,this.recommenderSettings).then(r.bind((function(o){o=r.map(o,(function(n){return i(n,Error)?{}:n})),e.recos=r(s).merge(o).map(this.canonicalize).filter(this.postFilter).value();var a=r.slice(e.recos,0,t);return e.recosOffset=a.length,n.recosSoFar=l.concat(a),n.numNeeded-=a.length,n.numNeeded>0?k.call(this,n):n}),this))}T.prototype.reset=function(){this._bufferPromise=null},T.prototype.next=function(n){var t=Math.floor(r.isNumber(n)?n:1);if(t<=0)throw new Error("Invalid argument "+n+". Must be positive integer");this._bufferPromise||(this._bufferPromise=S.call(this));var e=this._bufferPromise.then(r.bind((function(n){var e=[];return n.recos.length-n.recosOffset>0&&(e=n.recos.slice(n.recosOffset,n.recosOffset+t),n.recosOffset+=e.length,t-=e.length),t<=0?{result:e,buffer:n}:k.call(this,{buffer:n,recosSoFar:e,numNeeded:t}).then((function(n){return{result:n.recosSoFar,buffer:n.buffer}}))}),this));return this._bufferPromise=e.then((function(n){return n.buffer})),e.then((function(n){return n.result}))},n.exports=["stores/global",function(n){return{fetchRecommendations:r.partial(b,n),fetchRecommendedItems:r.partial(E,n),fetchItemMetadata:r.partial(I,n),getRecommendationsFetcher:r.partial(A,n)}}]},9686:function(n,t,e){n.exports=function(n){n.registerApiModule("recommender",e(8663))}},928:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(340)),n.registerAudienceMatcher("referrer",e(206))}},206:function(n,t,e){var i=e(859);t.fieldsNeeded=["referrer"],t.match=function(n,t){return null!==n.referrer&&i(n.referrer,t)}},340:function(n,t,e){var i=e(6954),r=e(74);n.exports={provides:"referrer",shouldTrack:!0,isSticky:!0,getter:[function(){var n=r.getReferrer()||i.getReferrer();return""===n&&(n=null),n}]}},186:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(4859)),n.registerAudienceMatcher("source_type",e(1612))}},1612:function(n,t,e){var i=e(6061);t.fieldsNeeded=["source_type"],t.match=function(n,t){return i.hasMatch(t.value,t.match,n.source_type)}},4859:function(n,t,e){var i=e(4005),r=e(6954),o=e(74),a=e(6724),u=["google\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","bing\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","yahoo\\.\\w{2,3}(\\.\\w{2,3})?/search","baidu\\.\\w{2,3}(\\.\\w{2,3})?/","https://(www)?\\.google\\..*?/?$","https://search\\.yahoo\\..*?/?$","https://(www)?\\.bing\\..*?/?$"];n.exports={provides:"source_type",shouldTrack:!0,isSticky:!1,getter:[function(){return function(n,t){var e,c=n(),s=function(){if(i.getQueryParamValue("utm_source")||i.getQueryParamValue("gclid")||i.getQueryParamValue("otm_source"))return"campaign";for(var n=o.getReferrer()||r.getReferrer(),t=0;t<u.length;t++){var e=u[t];if(n.match(e))return"search"}return n&&a.guessDomain(n)!==a.guessDomain(i.getUrl())?"referral":"direct"}();e=s,(!c||"direct"!==e)&&t(s)}}]}},1310:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(4397)),n.registerVisitorProfileProvider(e(1582)),n.registerAudienceMatcher("time_and_day",e(8809))}},8809:function(n,t,e){var i=e(8290);t.fieldsNeeded=["currentTimestamp"],t.match=function(n,t){return i.test(t.value,new Date(n.currentTimestamp))}},4397:function(n,t,e){var i=e(3792);n.exports={provides:"currentTimestamp",shouldTrack:!0,isLazy:!0,getter:[function(){return i.now()}]}},1582:function(n){n.exports={provides:"offset",shouldTrack:!0,isLazy:!0,getter:[function(){return(new Date).getTimezoneOffset()}]}},8290:function(n,t,e){var i=e(9576);function r(n){var t=n.split(":");if(2!==t.length)throw new Error("optly.timeAndDayInterval.timeStringToMinutes: Invalid time string "+n);return 60*parseInt(t[0],10)+parseInt(t[1],10)}t.test=function(n,t){var e=function(n){var t=n.split("_");if(3!==t.length)throw new Error("Invalid time and day string "+n);var e=t[2].split(",");return{start_time:t[0],end_time:t[1],days:e}}(n),o=r(e.start_time),a=r(e.end_time),u=60*t.getHours()+t.getMinutes(),c=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"][t.getDay()];return u>=o&&u<=a&&i.includes(e.days,c)}},7644:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(9995))}},9995:function(n){n.exports={provides:"visitorId",getter:["stores/visitor_id",function(n){return n.getRandomId()}]}},3056:function(n,t,e){var i=e(2676),r=e(2678),o=e(7984),a=e(74),u=e(9612),c=e(2188),s="google_universal_analytics",f=e(9978);var l=function(n,t){return o.pollFor((function(){return function(n){var t=n.getGlobal("GoogleAnalyticsObject");return t?n.getGlobal(t):null}(c)}),200,50).then((function(e){var i=t.universal_analytics_tracker,r=i?i+".":"",o=t.universal_analytics_slot,u=a.getReferrer();u&&e(r+"set","referrer",u);var c={nonInteraction:!0};c["dimension"+o]=n,e(r+"send","event","Optimizely","Assigned To Campaign",c)}))},d={preRedirectPolicy:u.PreRedirectPolicies.PERSIST_BEFORE_REDIRECT,postRedirectPolicy:u.PostRedirectPolicies.TRACK_IMMEDIATELY,nonRedirectPolicy:u.NonRedirectPolicies.TRACK_IMMEDIATELY,trackLayerDecision:function(n){var t=n.integrationSettings;if(t&&t[s]&&n.experimentId&&n.variationId){var e={id:n.layerId,name:n.layerName,policy:n.layerPolicy,integrationStringVersion:n.integrationStringVersion},i={id:n.experimentId,name:n.experimentName},o={id:n.variationId,name:n.variationName},a=n.isLayerHoldback,u=f.generateAnalyticsString(e,i,o,a,150,!0);if(u)return l(u,t[s])["catch"]((function(n){r.warn("Tracker for",s,"failed:",n)}))}},serializeSettings:i.stringify,deserializeSettings:i.parse};n.exports=function(n){n.registerAnalyticsTracker("google_universal_analytics",d)}},2774:function(n,t,e){var i=e(9576),r=e(7989),o=e(1243),a=e(2805),u=e(6639).U,c=e(2676),s=e(2678),f=e(9612),l=e(1685),d=e(2188),h=e(3455),v=e(4041),p=(e(6954),e(4658)),g=e(7356),m=e(4797),_=v.get("stores/global"),w=v.get("stores/tracker_optimizely"),y=t.Error=u("OptimizelyTrackerError"),b="client_activation",E="campaign_activated",I="view_activated",A={revenue:{validate:O,sanitize:Math.floor,excludeFeature:!0},quantity:{validate:O,sanitize:Math.floor,excludeFeature:!0},value:{validate:O,sanitize:i.identity}},T="AUTO",S=[function(){return function(n){P(function(n){return i.extend({entity_id:n.pageId,key:n.pageApiName,timestamp:n.timestamp,uuid:n.eventId,type:I},D(n.eventTags))}(n),n.userFeatures,K(n.layerStates))}}],k=[function(){return function(n){!function(n){var t=i.isNull(_.getAnonymizeIP())?void 0:_.getAnonymizeIP(),e={account_id:n.accountId,anonymize_ip:t,client_name:n.clientName,client_version:n.clientVersion,project_id:n.projectId,visitors:[]};e.revision=n.revision,e.enrich_decisions=!0;var r={session_id:L(n.sessionId),visitor_id:n.visitorId,attributes:[],snapshots:[]},o=K(n.layerStates);m.dispatch(a.REGISTER_TRACKER_VISITOR,{data:e,visitor:r,decisions:o}),Y()}(n),P(function(n){return{entity_id:null,type:b,uuid:n.eventId,timestamp:n.timestamp}}(n),n.userFeatures,K(n.layerStates))}}],R=[function(){return function(n){var t;P((t=n,i.extend({entity_id:t.eventEntityId,key:t.eventApiName,timestamp:t.timestamp,uuid:t.eventId,type:t.eventCategory},D(t.eventTags))),n.userFeatures,K(n.layerStates))}}],N=[function(){return function(n){var t;P((t=n,i.extend({entity_id:t.eventEntityId,key:t.eventApiName,timestamp:t.timestamp,uuid:t.eventId,type:t.eventCategory},D(t.eventTags))),n.userFeatures,K(n.layerStates))}}];function D(n){var t=function(n,t,e){try{C(t),n[e]=t}catch(i){r.emitError(new y("Bad value for eventTags["+e+"]: "+i.message))}return n},e=i.keys(A),o=i.omit(n,e),a=i.pick(n,e),u=i.reduce(o,t,{}),c=i.reduce(a,(function(n,e,i){var o=A[i];o.excludeFeature||t(u,e,i);try{o.validate(e),n[i]=o.sanitize(e),u[i]=n[i]}catch(a){r.emitError(new y("Bad value for eventMetrics["+i+"]: "+a.message))}return n}),{});return c.tags=u,c}function C(n){if(null==n)throw new Error("Feature value is null");if("object"==typeof n){var t;try{t=c.stringify(n)}catch(e){}throw new Error('Feature value is complex: "'+t)}}function O(n){if(null==n)throw new Error("Metric value is null");if(!i.isNumber(n))throw new Error("Metric value is not numeric")}function x(n){return i.reduce(n,(function(n,t){try{C(t.value),n.push({entity_id:t.id||null,key:t.name,type:t.type,value:t.value})}catch(e){s.warn("Error evaluating user feature",t,e)}return n}),[])}function P(n,t,e){m.dispatch(a.REGISTER_TRACKER_EVENT,{event:n,decisions:e}),M(t),Y()}function M(n){var t=x(n);m.dispatch(a.UPDATE_TRACKER_VISITOR_ATTRIBUTES,{attributes:t})}function L(n){return T}function V(){if(w.canSend()){var n=w.hasEventsToSend(),t=w.hasPreviousBatchesToSend();n||t?(t&&(i.each(w.getPreviousBatches(),F),m.dispatch(a.RESET_TRACKER_PREVIOUS_BATCHES)),n&&(m.dispatch(a.FINALIZE_BATCH_SNAPSHOT),F(w.getEventBatch()),m.dispatch(a.RESET_TRACKER_EVENTS))):s.debug("Not sending events because there are no events to send")}else s.debug("Not sending events (holding)")}function F(n){s.debug("Sending ticket:",n);var t=o.generate();h.retryableRequest({url:"https://logx.optimizely.com/v1/events",method:"POST",data:U(n)},t)}function U(n){return i.extend({},i.pick(n,["account_id","anonymize_ip","client_name","client_version","enrich_decisions","project_id","revision"]),{visitors:i.map(n.visitors,z)})}function z(n){return{visitor_id:n.visitor_id,session_id:T,attributes:i.map(n.attributes,j),snapshots:i.map(n.snapshots,q)}}function j(n){return H(n,{entity_id:"e",key:"k",type:"t",value:"v"})}function q(n){var t=n.events;return t=function(n){var t=i.reduce(n,(function(n,t){var e;if(n[e=t.type===I&&i.isEmpty(t.tags)&&i.isEmpty(i.pick(t,i.keys(A)))?t.type:t.uuid]){var r=n[e].timestamp;t.timestamp>r&&(r=t.timestamp),n[e]=i.extend({},n[e],{key:n[e].key+"-"+(t.key||""),entity_id:n[e].entity_id+"-"+t.entity_id,timestamp:r})}else n[e]=t;return n}),{});return i.values(t)}(t),{activationTimestamp:_.getActivationTimestamp(),decisions:i.map(n.decisions,G),events:i.map(t,B)}}function G(n){return H(n,{campaign_id:"c",experiment_id:"x",is_campaign_holdback:"h",variation_id:"v"})}function B(n){return n.key===E&&(n.type=E,delete n.key),H(n,{entity_id:"e",key:"k",quantity:"q",revenue:"$",tags:"a",timestamp:"t",uuid:"u",value:"v",type:"y"})}function H(n,t){return i.reduce(n,(function(n,e,i){return i in t&&(n[t[i]||i]=e),n}),{})}function Y(){if(w.shouldBatch()){if(!w.isPolling()){d.setTimeout((function n(){V(),w.isPolling()&&d.setTimeout(n,1e3)}),1e3),m.dispatch(a.SET_TRACKER_POLLING,!0),d.setTimeout((function(){m.dispatch(a.SET_TRACKER_BATCHING,!1),m.dispatch(a.SET_TRACKER_POLLING,!1)}),1e4)}}else V()}function K(n){return i.map(n,(function(n){return{campaign_id:n.layerId,experiment_id:n.decision.experimentId,variation_id:n.decision.variationId,is_campaign_holdback:n.decision.isLayerHoldback}}))}function $(){var n=w.getPersistableState();if(n)try{s.debug("Persisting pending batch:",n),l.persistTrackerOptimizelyData(n),m.dispatch(a.SET_TRACKER_DIRTY,!1)}catch(t){s.debug("Failed to persist pending batch:",t)}}var W={trackLayerDecision:function(n){n.timing===f.TrackLayerDecisionTimingFlags.postRedirectPolicy?function(n){var t=x(n.userFeatures),e={account_id:n.accountId,anonymize_ip:n.anonymizeIP,client_name:n.clientName,client_version:n.clientVersion,project_id:n.projectId,visitors:[{session_id:L(n.sessionId),visitor_id:n.visitorId,attributes:t,snapshots:[{decisions:[{campaign_id:n.layerId,experiment_id:n.experimentId,variation_id:n.variationId,is_campaign_holdback:n.isLayerHoldback}],events:[{uuid:n.decisionId,entity_id:n.layerId,timestamp:n.timestamp,type:E}]}]}]};m.dispatch(a.REGISTER_PREVIOUS_BATCH,e),Y()}(n):function(n){var t={entity_id:n.layerId,type:E,uuid:n.decisionId,timestamp:n.timestamp};m.dispatch(a.REGISTER_TRACKER_DECISION,{decisionEvent:t,decisions:K(n.layerStates)}),M(n.userFeatures),Y()}(n)},postRedirectPolicy:f.PostRedirectPolicies.TRACK_AFTER_SYNC,nonRedirectPolicy:f.NonRedirectPolicies.TRACK_IMMEDIATELY,onPageActivated:S,onClientActivation:k,onClickEvent:N,onCustomEvent:R};n.exports=function(n){n.registerAnalyticsTracker("optimizely",W),p.on({filter:{type:g.TYPES.ANALYTICS,name:"sendEvents"},handler:function(){m.dispatch(a.SET_TRACKER_SEND_EVENTS,!0),w.isPolling()||V()}}),p.on({filter:{type:g.TYPES.ANALYTICS,name:"holdEvents"},handler:function(){m.dispatch(a.SET_TRACKER_SEND_EVENTS,!1)}}),m.dispatch(a.SET_TRACKER_SEND_EVENTS,!0);var t=p.on({filter:{type:"lifecycle",name:"activated"},handler:function(){w.observe($),p.off(t)}})}},2628:function(n,t,e){var i=e(9404),r={match:function(n,t){return i.apply(t.value)}};n.exports=function(n){n.registerViewMatcher("custom_code",r)}},7278:function(n,t,e){var i=e(6954),r={match:function(n,t){return!!i.querySelector(t.value)}};n.exports=function(n){n.registerViewMatcher("element_present",r)}},414:function(n,t,e){n.exports=function(n){n.registerViewProvider(e(2218)),n.registerViewMatcher("url",e(1154))}},1154:function(n,t,e){var i=e(859);n.exports={fieldsNeeded:["url"],match:function(n,t){return i(n.url,t)}}},2218:function(n,t,e){var i=e(4005);n.exports={provides:"url",getter:[function(){return i.getUrl()}]}},6357:function(n,t,e){var i=e(6954),r=e(8964),o=e(4658),a=e(9328),u=e(9840),c={token:void 0,setUpObserver:function(){a.createDOMChangedObserver(),this.token=o.on({filter:{type:"viewTrigger",name:"DOMChanged"},handler:function(){u.getViewsAndActivate(r.ViewActivationTypes.DOMChanged)}})},turnOffObserver:function(){o.off(this.token)}};n.exports=function(n){i.isReady()?c.setUpObserver():i.addReadyHandler(c.setUpObserver),n.registerViewTrigger("DOMChanged",c)}},3269:function(n,t,e){var i=e(9576),r=e(2805),o=e(4041),a=e(8964),u=e(4658),c=e(4797),s=o.get("stores/history"),f=e(2678),l=e(8398).Promise,d=e(9840),h=e(2188);function v(n){u.emit({type:"viewTrigger",name:"URLChanged",data:{source:n,newURL:h.getHref()}},!0)}n.exports=function(n){var t;t=function(){var n=s.getOriginalPushState().apply(this,arguments);return l.resolve().then((function(){v("pushState")}))["catch"]((function(n){f.error("Error while wrapPushState: ",n)})),n},c.dispatch(r.ENSURE_ORIGINAL_PUSHSTATE),h.getGlobal("history").pushState=t,function(){var n=function(){var n=s.getOriginalReplaceState().apply(this,arguments);return l.resolve().then((function(){v("replaceState")}))["catch"]((function(n){f.error("Error while wrapReplaceState: ",n)})),n};c.dispatch(r.ENSURE_ORIGINAL_REPLACESTATE),h.getGlobal("history").replaceState=n}(),h.addEventListener("popstate",p,!1),h.addEventListener("hashchange",g,!1),u.on({filter:{type:"viewTrigger",name:"URLChanged"},handler:function(){d.getViewsAndActivate(a.ViewActivationTypes.URLChanged)}}),n.registerViewTrigger("URLChanged")};var p=i.partial(v,"popstate"),g=i.partial(v,"hashchange")},106:function(n,t,e){var i=e(9576),r=e(4041),o=e(4658),a=e(7356),u=e(2188),c=r.get("stores/directive"),s="optimizelyPreview",f=function(n){u.getGlobal(s).push(n)};t.initialize=function(n){c.isSlave()&&function(n){var t=!1;if(i.isArray(window.optimizely)&&i.each(window.optimizely,(function(e){i.isArray(e)&&"verifyPreviewProject"===e[0]&&String(e[1])===n&&(t=!0)})),!t)throw new Error("Preview projectId: "+n+" does not match expected")}(n),o.on({filter:{type:a.TYPES.ANALYTICS,name:"trackEvent"},handler:f}),o.on({filter:{type:a.TYPES.LIFECYCLE,name:"viewActivated"},handler:f}),o.on({filter:{type:a.TYPES.LIFECYCLE,name:"layerDecided"},handler:f}),o.on({filter:{type:"error"},publicOnly:!0,handler:f})},t.setupPreviewGlobal=function(){u.getGlobal(s)||u.setGlobal(s,[])},t.pushToPreviewGlobal=function(n){f(n)}},8562:function(n,t,e){var i=e(9576),r=e(1243),o=e(3113),a=e(5434),u=e(3792),c=e(6954),s=e(4797),f=e(4243).mM,l=e(2678),d=e(7170),h=e(8398).Promise,v=e(1685),p=e(2188),g=e(3455),m=e(2805),_=e(8964),w=e(4041),y=w.get("stores/async_request"),b=w.get("stores/client_metadata"),E=w.get("stores/global"),I=w.get("stores/rum"),A=w.get("stores/performance"),T=w.get("stores/xdomain"),S=w.get("stores/view_data"),k=e(7431),R="https://rum.optimizely.com/rum",N="1.0";function D(n){return i.isEmpty(n)?h.resolve():(t=function(){return g.request({url:R,method:"POST",data:n,withCredentials:!0}).then((function(n){return o.resolveRequest("RUM_FIRST_BEACON",n),n}))["catch"]((function(n){throw l.error("POST to client-rum failed:",n),o.rejectRequest("RUM_FIRST_BEACON",n),n}))},(e=y.getPromise("RUM_FIRST_BEACON"))?e.then(t):o.makeAsyncRequest("RUM_FIRST_BEACON",t));var t,e}function C(){try{return!c.querySelector("body")}catch(n){return null}}function O(){var n=p.getGlobal("performance"),t=n?n.timing:{},e=A.getMarks()||{},r=I.getApiData(),o=I.getDOMObservationData(),a=k.get("state").getActiveExperimentIds(),u=I.getFeaturesNeededData(),s=c.parseUri(I.getScriptSrc()),l=I.getRumData()||{},h=l.extras||{};i.assign(h,{apiCalls:r,DOMObservationData:o,paintTimings:P(),activeExperimentIds:a,numPages:S.getNumberOfPages(),snippet:{scheme:s.protocol.slice(0,-1),host:s.host,path:s.pathname},networkInfo:x(),experimental:E.getExperimental(),featuresNeeded:u,beacon:{cjsOnload:!0}});var g=p.getGlobal("Prototype");g&&!i.isUndefined(g.Version)&&(h.prototypeJS=g.Version);var m=!1;m=!0;var _=T.getFrames();_.length&&(h.xdFramesLoaded=_.length);var w={id:I.getRumId(),v:N,project:E.getSnippetId()||E.getProjectId(),navigationTimings:t,userTimings:e,xd:m,apis:i.keys(r),extras:h,sampleRate:l.sampleRate};(function(){var n=f.keys(),t=i.filter(i.map(n,(function(n){var t=v.getStorageKeyFromKey(n);return t?{key:n,isForeign:v.isForeignKey(n),category:t,size:n.length+f.getItem(n).length}:null}))),e=i.reduce(t,(function(n,t){var e=t.key,i=v.getIdFromKey(e);return i?((t.isForeign?n.foreign:n.local)[i]=!0,n):n}),{local:{},foreign:{}}),r=i.chain(t).filter({isForeign:!0}).reduce((function(n,t){return n[t.key.split("_")[0]]=!0,n}),{}).value(),o={local:0,foreign:0},a={local:{},foreign:{}};i.forEach(t,(function(n){var t=n.isForeign?"foreign":"local";o[t]+=n.size,a[t][n.category]||(a[t][n.category]=0),a[t][n.category]+=n.size}));var u={numKeys:f.allKeys().length,sizeKeys:f.allKeys().toString().length,sizeValues:f.allValues().toString().length,idCounts:{local:i.keys(e.local).length,foreign:i.keys(e.foreign).length},foreignOriginCount:i.keys(r).length,byteTotals:o,byteTotalsByCategory:a};return d.estimateStorage().then((function(n){return i.assign(u,{storageEstimate:n})}))})().then((function(n){D(i.assign(w,{lsMetrics:n}))}))}function x(){var n=p.getGlobal("navigator");if(n&&n.connection)return i.pick(n.connection,["downlink","rtt","effectiveType"])}function P(){var n=p.getGlobal("performance");if(n)try{var t=n.getEntriesByType("paint");if(i.isEmpty(t))return;return i.reduce(t,(function(n,t){return n[t.name]=Math.round(t.startTime),n}),{})}catch(e){return}}t.initialize=function(){var n,t=r.generate().replace(/-/g,"");n=Math.random()<.01;var e=function(){var n=c.getCurrentScript();if(n)return n.src}();s.dispatch(m.SET_RUM_DATA,{id:t,RumHost:R,inRumSample:n,src:e,data:{id:t,sync:C(),timebase:u.now(),sampleRate:.01,url:e,extras:{initialDOMState:c.getReadyState()}}})},t.queueBeacons=function(){return I.getSampleRum()?(function(){try{p.getGlobal("requestAnimationFrame")((function(){var n=I.getRumData().timebase;s.dispatch(m.SET_RUM_DATA,{data:{render:u.now()-(n||0)}})}))}catch(n){return}}(),c.isLoaded()?p.setTimeout(O,3e3):p.addEventListener("load",O),new h((function(n,t){p.setTimeout((function(){(function(){!function(){var n={id:I.getRumId(),v:N,account:E.getAccountId(),project:E.getSnippetId()||E.getProjectId(),snippet:E.getSnippetId(),revision:E.getRevision(),clientVersion:b.getClientVersion(),hasSlave:!1,wxhr:!0,extras:{}},t=v.getPersistedBehaviorEventCount(),e=a.getEventCount();n.numBehaviorEvents=e;var r=e-t;i.extend(n.extras,{behaviorEventCountDiff:r,behaviorEventCountDecreased:r<0}),i.assign(n,function(){var n=p.getGlobal("performance");if(!n)return;var t,e=I.getScriptSrc();try{if(e){l.debug("Using derived script src: ",e);var r=n.getEntriesByName(e);r.length>0&&(t=r[0])}if(!t){var o=/\/\/[^.]+\.optimizely\.(com|test)\/(js|api\/client)\/[\d]+\.js/gi;l.debug("Scanning resource timing entries with regex");var a=n.getEntriesByType("resource");t=i.find(a,(function(n){return o.test(n.name)}))}if(t)return i.mapValues(_.ResourceTimingAttributes,(function(n,e){var i=t[e];return"number"==typeof i?Math.round(1e3*(i||0))/1e3:"serverTiming"===e?i||[]:void 0}))}catch(u){return}}(),A.getDurationsFor(i.values(_.RUMPerformanceTimingAttributes))),s.dispatch(m.SET_RUM_DATA,{data:n})}();var n=I.getRumData(),t=A.getMarks()||{};return n.extras=n.extras||{},n.extras.beacon={cjsTimeout:!0},n.userTimings=t,D(n=i.pickBy(n,(function(n){return!i.isUndefined(n)})))})().then(n,t)}),3e3)}))["catch"]((function(n){l.warn("RUM / Error sending data:",n)}))):h.resolve()}},7339:function(){}},__webpack_module_cache__={};function __webpack_require__(n){var t=__webpack_module_cache__[n];if(t!==undefined)return t.exports;var e=__webpack_module_cache__[n]={id:n,loaded:!1,exports:{}};return __webpack_modules__[n].call(e.exports,e,e.exports,__webpack_require__),e.loaded=!0,e.exports}__webpack_require__.amdO={},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),__webpack_require__.nmd=function(n){return n.paths=[],n.children||(n.children=[]),n};var __webpack_exports__={};!function(){try{!function(){var n=function(n){var t=[__webpack_require__(7644)];t.push(__webpack_require__(1569)),t.push(__webpack_require__(6879)),t.push(__webpack_require__(9754)),t.push(__webpack_require__(9374)),t.push(__webpack_require__(5664)),t.push(__webpack_require__(6093)),t.push(__webpack_require__(9031)),t.push(__webpack_require__(8068)),t.push(__webpack_require__(520)),t.push(__webpack_require__(9665)),t.push(__webpack_require__(563)),t.push(__webpack_require__(7819)),t.push(__webpack_require__(4871)),t.push(__webpack_require__(928)),t.push(__webpack_require__(186)),t.push(__webpack_require__(1310)),t.push(__webpack_require__(3056)),t.push(__webpack_require__(2774)),t.push(__webpack_require__(414)),t.push(__webpack_require__(2628)),t.push(__webpack_require__(7278)),t.push(__webpack_require__(6357)),t.push(__webpack_require__(3269)),t.push(__webpack_require__(7154)),t.push(__webpack_require__(9686)),t.push(__webpack_require__(7102)),t.push(__webpack_require__(145)),t.push(__webpack_require__(7649)),t.push(__webpack_require__(6108)),t.push(__webpack_require__(4870)),f.initializePlugins(t)};window.performance&&window.performance.mark&&window.performance.mark("optimizely:blockBegin"),__webpack_require__(8562).initialize();var t=__webpack_require__(9e3);t.time("gtagReady");var e=__webpack_require__(2678),i=__webpack_require__(4041);__webpack_require__(5723);var r=i.get("stores/directive");if(!__webpack_require__(3455).isCORSSupported())throw new Error("CORS is not supported on this browser, aborting.");var o,a=__webpack_require__(6072),u=__webpack_require__(4819),c=__webpack_require__(5554),s={"accountId": "20673560014", "namespace": "20917322331", "revision": "8147", "anonymizeIP": true, "enableForceParameters": true, "experimental": {"trimPages": true}, "projectId": "20917322331", "layers": [{"changes": null, "id": "22125610640", "name": null, "commitId": "22134000591", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": null, "changes": null, "id": "22149900157", "integrationSettings": null, "variations": [{"id": "22148390217", "name": null, "actions": []}, {"id": "22124430168", "name": null, "actions": [{"viewId": "22114910509", "changes": [{"selector": ".content-mobile > h1", "dependencies": [], "attributes": {"html": "Contact Sales - Optimizely test"}, "type": "attribute", "id": "EFACB540-93CF-4CC5-9880-67CADFDDFE33", "css": {"color": "rgba(222, 3, 3, 1)"}}]}]}], "weightDistributions": [{"entityId": "22124430168", "endOfRange": 10000}], "name": null, "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["22114910509"], "weightDistributions": null, "decisionMetadata": null}, {"changes": null, "id": "22886473898", "name": null, "commitId": "25866320524", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"contentsquare": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "22631702689"], "audienceName": null, "changes": null, "id": "22954470390", "integrationSettings": null, "variations": [{"id": "22923743831", "name": null, "actions": []}, {"id": "22970971301", "name": null, "actions": [{"viewId": "22971990855", "changes": [{"selector": ".ez__megaMenuWrapper", "dependencies": [], "attributes": {"hide": true}, "type": "attribute", "id": "2DB0A7ED-6B3C-4769-8291-24937E60D557", "css": {}}, {"selector": ".HeaderWithDescriptionAndBlueBorder__heading", "dependencies": [], "attributes": {"style": "color: red;"}, "type": "attribute", "id": "0C0B9F24-8E81-42FA-ABE4-F482D9A990B5", "css": {}}, {"selector": ".S2CImageWithHeadingDescListCta__heading", "dependencies": [], "attributes": {"style": "color: red;"}, "type": "attribute", "id": "F5B9CCFB-E76C-4996-95D6-7F4FA59EA18C", "css": {}}, {"selector": ".S2CHeadingWithListAndImageType2__heading", "dependencies": [], "attributes": {"style": "color: red;"}, "type": "attribute", "id": "B9E93E97-7110-4177-9547-29EC620E182D", "css": {}}, {"selector": ".HeaderForWysiwyg__heading", "dependencies": [], "attributes": {"style": "color: red;"}, "type": "attribute", "id": "62F13F5E-182B-4C57-8567-A90CF2BC671C", "css": {}}, {"selector": ".content__heading", "dependencies": [], "attributes": {"style": "color: red;"}, "type": "attribute", "id": "FAD70823-960F-478B-B1B2-1F9AC98433B0", "css": {}}, {"selector": ".HeadingWithDescriptionAndParagraphsWithImage__heading > .heading__content", "dependencies": [], "attributes": {"style": "color: red;"}, "type": "attribute", "id": "7E2CD46E-9485-497F-8632-E7677A9D4EE6", "css": {}}]}]}], "weightDistributions": [{"entityId": "22970971301", "endOfRange": 10000}], "name": null, "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["22971990855"], "weightDistributions": null, "decisionMetadata": null}, {"changes": null, "id": "23674990017", "name": null, "commitId": "23665680442", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": null, "changes": null, "id": "23662480017", "integrationSettings": null, "variations": [{"id": "23645970053", "name": null, "actions": [{"viewId": "23648510021", "changes": [{"dependencies": [], "type": "custom_code", "id": "504557DC-B84D-412F-B8F9-7704ABDBD073", "value": function($){//console.log('Online Free Trial Upgrade - Optimizely: 14 Day');

window.dataModel = window.dataModel || {};
if (window.newBillingConfig) {
  window.newBillingConfig.onlineProFreeTrialDays = 14;
}
}}]}]}], "weightDistributions": null, "name": null, "bucketingStrategy": null}], "policy": "equal_priority", "viewIds": ["23648510021"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "23662480017", "endOfRange": null}]], "offerConsistency": null}}, {"changes": null, "id": "23880530981", "name": null, "commitId": "24029221506", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "20886904205"], "audienceName": null, "changes": null, "id": "23854921800", "integrationSettings": null, "variations": [{"id": "23885782670", "name": null, "actions": [{"viewId": "21291500364", "changes": [{"dependencies": [], "type": "custom_code", "id": "45D703A5-36C4-4C23-95F3-5DAF4CE4AD50", "value": function($){var wait4 = optimizely.get('utils').waitForElement;

wait4('.row:first-child .col-md-6:first-child .add-on-section li:nth-child(2)').then(e => {
   e.innerHTML = `<i class="zm-icon-ok"></i>Virtual Service Numbers available in select countries. <a target="_blank" href="https://zoom.us/billing/pbx/rates?audioProduct=ZCC">View list of countries.</a> Low incoming call rates. Limited outbound capabilities`;
});

wait4('.row:first-child .col-md-6:nth-child(2) .add-on-section li:nth-child(2)').then(e => {
   e.innerHTML = `<i class="zm-icon-ok"></i>Toll Free Numbers available in select countries. <a target="_blank" href="https://zoom.us/billing/pbx/rates?audioProduct=ZCC">View list of countries.</a>  Attractive incoming call rates.`;
});
}}]}, {"viewId": "23030170275", "changes": [{"dependencies": [], "type": "custom_code", "id": "1C078DD9-38DB-44EA-BE20-42500AB1EC25", "value": function($){var wait4 = optimizely.get('utils').waitForElement;

wait4('.zm-collapse-item:nth-child(3) [role="tabpanel"] div div').then(e => {
  document.querySelector('head').insertAdjacentHTML('beforeend', `<style>.feature-plan-card:nth-child(2) .new-feature-item:nth-child(2) {display: none !important}</style>`);
  if(e.innerHTML.includes('is is')) {
     e.innerHTML = e.innerHTML.replace("is is", "is");
  }
});

wait4('.feature-plan-card:nth-child(2) .new-feature-item:last-child').then(e => {
  e.innerHTML = "Advanced Whiteboard features, including custom and organizational templates, and 3rd-party integrations";
});

wait4('#whiteboard-basic').then(e => {
  //e.innerHTML = e.innerHTML.replace("Whiteboard", "Whiteboard Unlimited");
});
}}]}]}], "weightDistributions": null, "name": null, "bucketingStrategy": null}], "policy": "equal_priority", "viewIds": ["21291500364", "23030170275"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "23854921800", "endOfRange": null}]], "offerConsistency": null}}, {"changes": null, "id": "23891630292", "name": null, "commitId": "24372821611", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"contentsquare": {}, "google_universal_analytics": {"universal_analytics_tracker": "", "universal_analytics_slot": "110"}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "23075300126", "23892930237"], "audienceName": null, "changes": null, "id": "23915950045", "integrationSettings": null, "variations": [{"id": "23903560128", "name": null, "actions": [{"viewId": "23915210160", "changes": [{"dependencies": [], "type": "custom_code", "id": "9C906AF6-766F-4043-A2B7-A22A5F0D9942", "value": function($){if (window.dataModel) {
    //console.log('[Optimizely] One Page Checkout [ZP]: Enabled [Pricing Page]');
    window.dataModel.enablePbxOPC = true;
}
}}]}]}], "weightDistributions": null, "name": null, "bucketingStrategy": null}], "policy": "equal_priority", "viewIds": ["23915210160"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "23915950045", "endOfRange": null}]], "offerConsistency": null}}, {"changes": null, "id": "24018110452", "name": null, "commitId": "23969850823", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": null, "changes": null, "id": "24033410384", "integrationSettings": null, "variations": [{"id": "23982770697", "name": null, "actions": [{"viewId": "24000230618", "changes": [{"dependencies": [], "type": "custom_code", "id": "ea73317a20614d6e8cf622b75eb51f50", "value": function($){// console.log('pricing phone page - link fix - before'); 

// mutation observer - waits for DOM ready
(function(win){var listeners=[],doc=win.document,MutationObserver=win.MutationObserver||win.WebKitMutationObserver,observer;function ready(selector,fn){listeners.push({selector:selector,fn:fn});if(!observer){observer=new MutationObserver(check);observer.observe(doc.documentElement,{childList:true,subtree:true})}check()}function check(){for(var i=0,len=listeners.length,listener,elements;i<len;i++){listener=listeners[i];elements=doc.querySelectorAll(listener.selector);for(var j=0,jLen=elements.length,element;j<jLen;j++){element=elements[j];if(!element.ready){element.ready=true;listener.fn.call(element,element)}}}}win.ready=ready})(this);
ready('a[href*="/zoomphone/plans-pricing"]',function(element){
	var test = document.querySelectorAll('a[href*="/zoomphone/plans-pricing"]');
	// console.log('test var length is: ' + test.length);
	for(var i = 0; i < test.length; i++){
  // 	console.log('before link: ' + test[i].getAttribute('href'));
		test[i].setAttribute('href',test[1].getAttribute('href').replace('/zoomphone/plans-pricing','/products/zoom-phone/plans-pricing/'));
  //	console.log('after link: ' + test[i].getAttribute('href'));
	}
});

//console.log('pricing phone page - link fix - after');
}}]}]}], "weightDistributions": null, "name": null, "bucketingStrategy": null}], "policy": "equal_priority", "viewIds": ["24000230618"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "24033410384", "endOfRange": null}]], "offerConsistency": null}}, {"changes": [{"id": "00F23AC8-FF4D-4F3C-B04C-A8F706F1AA71", "type": "custom_code", "value": function($){try {
    //get the latest op cache
    const getLatestOpcCache = () => {
        //Get all keys from session storage
        const keys = Object.keys(sessionStorage);
        //Filter out only the keys that start with "__opc_state_cache__"
        const stateCacheKeys = keys.filter((key) => key.startsWith('__opc_state_cache__'));
        //Sort the state cache keys by the numeric value at the end of each key in descending order
        stateCacheKeys.sort((a, b) => {
            const numA = parseInt(a.match(/\d+$/)[0]);
            const numB = parseInt(b.match(/\d+$/)[0]);
            return numB - numA;
        });
        //Extract the values for the state cache keys | extracting all in case we need it in the future
        const stateCacheValues = stateCacheKeys.map((key) => sessionStorage.getItem(key));
        //Log the values for the state cache keys
        //console.log(stateCacheValues);
        return JSON.parse(stateCacheValues.at(0));
    };
    const getPlanType = (latestOpcCache) => {
        //get zo_pro_monthly or zo_pro_annual
        if (!latestOpcCache || !latestOpcCache.ShoppingCart) {
            return '';
        }
        const keys = Object.keys(latestOpcCache.ShoppingCart.persist);
        //const planType = keys.find((key) => key.startsWith('zo_pro_') || key.startsWith('yearly_c50'));
        //return planType;
        return keys;
    };
    //add to the config as needed
    const eventsConfig = {
        yearly_c50: 'Annual Pro Plan Purchase',
        business_yearly_c50: 'Business Annual Plan Purchase',
        PLANCODE_UNKNOWN1: 'Business Plus Annual Plan Purchase',
        zsched_yearly: 'Zoom Scheduler Annual Plan Purchase',
        zwb_yearly: 'Zoom Whiteboard Annual Plan Purchase',
        large500_yearly: 'Large Meetings Annual Plan Purchase',
        PLANCODE_1509: 'Large Meetings 1000 Participant Annual Plan Purchase',
        PLANCODE_1508: 'Large Meetings 1000 Participant Monthly Plan Purchase',
        cmr_monthly_commitment_10: 'Cloud Storage 5TB Annual Plan Purchase',
        ztransl_yearly: 'Zoom Translated Captions Annual Plan Purchase',
        PLANCODE_UNKNOWN2: 'Audio Conferencing Annual Plan Purchase',
        PLANCODE_7203: 'Zoom Phone Power Pack Annual Plan Purchase',
        PLANCODE_UNKNOWN3: 'Conference Room Connector Annual Plan Purchase',
        zo_pro_monthly: 'Monthly Pro Plan Purchase',
        business_monthly_c50: 'Business Monthly Plan Purchase',
        PLANCODE_UNKNOWN4: 'Business Plus Monthly Plan Purchase',
        zsched_monthly: 'Zoom Scheduler Monthly Plan Purchase',
        zwb_monthly: 'Zoom Whiteboard Monthly Plan Purchase',
        large500_monthly: 'Large Meetings Monthly Plan Purchase',
        cmr_5TB_monthly: 'Cloud Storage 5TB Monthly Plan Purchase',
        ztransl_monthly: 'Zoom Translated Captions Monthly Plan Purchase',
        PLANCODE_UNKNOWN5: 'Audio Conferencing Monthly Plan Purchase',
        PLANCODE_720: 'Zoom Phone Power Pack Monthly Plan Purchase',
        PLANCODE_UNKNOWN6: 'Conference Room Connector Monthly Plan Purchase',
        PLANCODE_7201: 'Zoom Phone US Canada Annual Metered Unlimited Plan Purchase',
        PLANCODE_7202: 'Zoom Phone US Canada Annual Metered Unlimited Plan Purchase',
        PLANCODE_7002: 'Zoom Phone US Canada Annual Metered Plan Purchase',
        PLANCODE_7111: 'Zoom Phone US Canada Annual Unlimited Plan Purchase',
        PLANCODE_7207: 'Zoom Phone US Canada Monthly Metered Unlimited Plan Purchase',
        PLANCODE_7001: 'Zoom Phone US Canada Monthly Metered Plan Purchase',
        PLANCODE_7101: 'Zoom Phone US Canada Monthly Unlimited Plan Purchase',
        PLANCODE_7943: 'Zoom Phone US Canada Unlimited Calling Add-On Plan Purchase',
        PLANCODE_7973: 'Zoom Phone US Canada Unlimited Power Pack Plan Purchase',
        PLANCODE_7302: 'Zoom Phone US Canada Monthly Toll-free Phone Numbers Purchase',
        PLANCODE_7312: 'Zoom Phone US Canada Annual Toll-free Phone Numbers Purchase',
        PLANCODE_UNKNOWN7: 'Zoom Phone Additional Phone Numbers Annual Plan Purchase',
        PLANCODE_UNKNOWN8: 'Zoom Phone Additional Phone Numbers Monthly Plan Purchase',
        PLANCODE_7301: 'Zoom Phone US Canada Additional Phone Numbers Plan Purchase',
        PLANCODE_7311: 'Zoom Phone US Canada Additional Phone Numbers Plan Purchase',
        webinar500_yearly: 'Webinar 500 Annual Plan Purchase',
        webinar500_monthly: 'Webinar 500 Monthly Plan Purchase',
        webinar1000_yearly: 'Webinar 1000 Annual Plan Purchase',
        webinar1000_monthly: 'Webinar 1000 Monthly Plan Purchase',
        webinar3000_yearly: 'Webinar 3000 Annual Plan Purchase',
        webinar3000_monthly: 'Webinar 3000 Monthly Plan Purchase',
        webinar5000_monthly: 'Webinar 5000 Monthly Plan Purchase',
        webinar10000_monthly: 'Webinar 10000 Monthly Plan Purchase',
        zec_100_unlimited_yearly: 'Zoom Sessions 100 Annual Plan Purchase',
        zec_100_unlimited_monthly: 'Zoom Sessions 100 Monthly Plan Purchase',
        zec_500_unlimited_yearly: 'Zoom Sessions 500 Annual Plan Purchase',
        zec_1000_unlimited_yearly: 'Zoom Sessions 1000 Annual Plan Purchase',
        zec_3000_unlimited_yearly: 'Zoom Sessions 3000 Annual Plan Purchase',
        ze_100_unlimited_yearly: 'Zoom Events 100 Annual Plan Purchase',
        ze_100_unlimited_monthly: 'Zoom Events 100 Monthly Plan Purchase',
        ze_500_unlimited_yearly: 'Zoom Events 500 Annual Plan Purchase',
        ze_1000_unlimited_yearly: 'Zoom Events 1000 Annual Plan Purchase',
        ze_3000_unlimited_yearly: 'Zoom Events 3000 Annual Plan Purchase',
        zwb_plus_yearly: 'Zoom Whiteboard Plus Annual Plan Purchase',
        zwb_plus_monthly: 'Zoom Whiteboard Plus Monthly Plan Purchase'
    };
    const targetUrlContent = '/opc/buy/zsuccess';
    const eventsTrigger = (configObject) => {
        const latestOpcCache = getLatestOpcCache();
        const planTypes = getPlanType(latestOpcCache);
        planTypes.forEach((planType) => {
            if (!configObject[planType]) return;

            window.optimizely = window.optimizely || [];
            window.optimizely.push({
                type: 'event',
                eventName: "" + configObject[planType] + ""
            });

            window.optimizely.push({
                "type": "user",
                "attributes": {
                    "product_sku": "" + planType + ""
                }
            });
            console.log(configObject[planType]);
        });
    };
    const utils = window.optimizely.get('utils');
    utils.waitForElement('body').then(() => {
        if (window.location.pathname.includes(targetUrlContent)) {
            eventsTrigger(eventsConfig);
        }
    });
} catch (error) {
    console.log('error in Test', error);
}
}, "dependencies": []}], "id": "24078071317", "name": null, "commitId": "25891370610", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"google_universal_analytics": {"universal_analytics_slot": "161", "universal_analytics_tracker": ""}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "24149620196", "22793360055"], "audienceName": null, "changes": null, "id": "24183210042", "integrationSettings": null, "variations": [{"id": "24087350978", "name": null, "actions": [{"viewId": "23357791757", "changes": []}]}, {"id": "24146710228", "name": null, "actions": [{"viewId": "23357791757", "changes": []}]}], "weightDistributions": [{"entityId": "24087350978", "endOfRange": 5000}, {"entityId": "24146710228", "endOfRange": 10000}], "name": null, "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["23357791757"], "weightDistributions": null, "decisionMetadata": null}, {"changes": null, "id": "24322240971", "name": null, "commitId": "25227960057", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"contentsquare": {}, "google_universal_analytics": {"universal_analytics_slot": "157", "universal_analytics_tracker": ""}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "23075300126"], "audienceName": null, "changes": null, "id": "24400010864", "integrationSettings": null, "variations": [{"id": "24431920164", "name": null, "actions": [{"viewId": "24338090460", "changes": [{"id": "08C2A1D1-B433-4E25-814E-C5489080494B", "type": "custom_code", "value": function($){var CAMPAIGN_KEY = '_zm_optly_opc-zp-may';
var scenario = sessionStorage.getItem(CAMPAIGN_KEY);

switch (scenario) {
  case 'billing':
    if (window.newBillingConfig) {
      //console.log('[Optimizely] One Page Checkout [ZP-All / Billing-Edit]: Enabled');
      window.newBillingConfig.enableZPhoneOPCEdit = true;
    }
    break;

  case 'pricing-eng':
    if (window.dataModel) {
      //console.log('[Optimizely] One Page Checkout [ZP-US/CA / Pricing-NonEng]: Enabled');
      window.dataModel.enablePbxOPC = true;
    }
    break;

  case 'pricing-all':
    if (window.dataModel) {
      //console.log('[Optimizely] One Page Checkout [ZP-All / Pricing]: Enabled');
      window.dataModel.enablePbxOPC = true;
    }
}

sessionStorage.removeItem(CAMPAIGN_KEY);
}, "dependencies": []}]}]}], "weightDistributions": null, "name": null, "bucketingStrategy": null}], "policy": "equal_priority", "viewIds": ["24338090460"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "24400010864", "endOfRange": null}]], "offerConsistency": null}}, {"changes": null, "id": "24500050465", "name": null, "commitId": "25181060047", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"contentsquare": {}, "google_universal_analytics": {"universal_analytics_slot": "99", "universal_analytics_tracker": ""}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "23075300126"], "audienceName": null, "changes": null, "id": "24490450509", "integrationSettings": null, "variations": [{"id": "24497680428", "name": null, "actions": [{"viewId": "24549200047", "changes": [{"id": "115D4397-39CB-43E9-B377-7EB86A08B5CA", "type": "custom_code", "value": function($){// pricing page
if (window.dataModel && window.dataModel.isLogin && typeof window.dataModel.enableOpcPhase2 !== 'undefined' && window.dataModel.enableOpcPhase2 !== 'Unsupported') {
  //console.log('[Optimizely] One Page Checkout (Edit / Add To Cart): Enabled [Pricing Page]');
  window.dataModel.enableOpcPhase2 = true;
}

// billing page (paid account)
if (window.newBillingConfig && typeof window.newBillingConfig.enableOpcPhase2 !== 'undefined' && window.newBillingConfig.enableOpcPhase2 !== 'Unsupported') {
  //console.log('[Optimizely] One Page Checkout (Edit / Add To Cart): Enabled [Billing Page]');
  window.newBillingConfig.enableOpcPhase2 = true;
}
}, "dependencies": []}]}]}], "weightDistributions": null, "name": null, "bucketingStrategy": null}], "policy": "equal_priority", "viewIds": ["24549200047"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "24490450509", "endOfRange": null}]], "offerConsistency": null}}, {"changes": null, "id": "24593221392", "name": null, "commitId": "24938960156", "groupId": null, "holdback": 5000, "activation": {}, "integrationSettings": {"contentsquare": {}, "google_universal_analytics": {"universal_analytics_slot": "54", "universal_analytics_tracker": ""}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "23075300126"], "audienceName": null, "changes": null, "id": "24604700511", "integrationSettings": null, "variations": [{"id": "24638130240", "name": null, "actions": [{"viewId": "24649510226", "changes": [{"id": "CD9B6B51-A86D-4A94-979A-50FB85CAAF8D", "type": "custom_code", "value": function($){//console.log('[Optimizely] Enable Billing Phone: Enabled');
document.querySelector('.opc-addr form').__vue__.$data.showBillPhoneNumber = true;
}, "dependencies": []}]}]}], "weightDistributions": null, "name": null, "bucketingStrategy": null}], "policy": "equal_priority", "viewIds": ["24649510226"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "24604700511", "endOfRange": null}]], "offerConsistency": null}}, {"changes": null, "id": "24617341163", "name": null, "commitId": "25793391041", "groupId": null, "holdback": 5000, "activation": {}, "integrationSettings": {"contentsquare": {}, "google_universal_analytics": {"universal_analytics_slot": "108", "universal_analytics_tracker": ""}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "24210280483", "20886904205", "22551780691"], "audienceName": null, "changes": null, "id": "24695130008", "integrationSettings": null, "variations": [{"id": "24618390912", "name": null, "actions": [{"viewId": "24495650228", "changes": [{"id": "48dac5d855ec43558b758b6a8994fcf2", "type": "custom_code", "value": function($){(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "";

    /* helper library */
    var _$;
    !(function (factory) {
      _$ = factory();
    })(function () {
      var bm = function (s) {
        if (typeof s === "string") {
          this.value = Array.prototype.slice.call(document.querySelectorAll(s));
        }
        if (typeof s === "object") {
          this.value = [s];
        }
      };
      bm.prototype = {
        eq: function (n) {
          this.value = [this.value[n]];
          return this;
        },
        each: function (fn) {
          [].forEach.call(this.value, fn);
          return this;
        },
        log: function () {
          console && console.log(this);
        },
        append: function (v) {
                  return this.each(function (i) {
                    i.insertAdjacentHTML('beforeEnd', v);
                  });
                },
        addClass: function (v) {
                  var a = v.split(" ");
                  return this.each(function (i) {
                    for (var x = 0; x < a.length; x++) {
                      if (i.classList) {
                        i.classList.add(a[x]);
                      } else {
                        i.className += " " + a[x];
                      }
                    }
                  });
                },
          removeClass: function (v) {
                   var a = v.split(' ');
                   return this.each(function (i) {
                     for (var x = 0; x < a.length; x++) {
                       if (i.classList) {
                         i.classList.remove(a[x]);
                       } else {
                         i.className = i.className.replace(
                           new RegExp('\\b' + a[x] + '\\b', 'g'),
                           ''
                         );
                       }
                     }
                   });
                 },             
         live : function(selector, event, callback, context) {
            /****Helper Functions****/
            // helper for enabling IE 8 event bindings
            function addEvent(el, type, handler) {
              if (el.attachEvent) el.attachEvent("on" + type, handler);
              else el.addEventListener(type, handler);
            }
            // matches polyfill
            this.Element &&
              (function (ElementPrototype) {
                ElementPrototype.matches =
                  ElementPrototype.matches ||
                  ElementPrototype.matchesSelector ||
                  ElementPrototype.webkitMatchesSelector ||
                  ElementPrototype.msMatchesSelector ||
                  function (selector) {
                    var node = this,
                      nodes = (
                        node.parentNode || node.document
                      ).querySelectorAll(selector),
                      i = -1;
                    while (nodes[++i] && nodes[i] != node);
                    return !!nodes[i];
                  };
              })(Element.prototype);
            // live binding helper using matchesSelector
            function live(selector, event, callback, context) {
              addEvent(context || document, event, function (e) {
                var found,
                  el = e.target || e.srcElement;
                while (
                  el &&
                  el.matches &&
                  el !== context &&
                  !(found = el.matches(selector))
                )
                  el = el.parentElement;
                if (found) callback.call(el, e);
              });
            }
            live(selector, event, callback, context);
          },        
        waitForElement: function (
          selector,
          trigger,
          delayInterval,
          delayTimeout
        ) {
          var interval = setInterval(function () {
            if (_$(selector).value.length) {
              clearInterval(interval);
              trigger();
            }
          }, delayInterval);
          setTimeout(function () {
            clearInterval(interval);
          }, delayTimeout);
        },
      };
      return function (selector) {
        return new bm(selector);
      };
    });

    var helper = _$();

    var closeIcon = ''+
    '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="fe_close_svg">'+
    '<mask id="mask0_1211_27457" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="1" y="1" width="12" height="12">'+
    '<path d="M2.49686 1.87814C2.326 1.70729 2.049 1.70729 1.87814 1.87814C1.70729 2.049 1.70729 2.326 1.87814 2.49686L6.38128 7L1.87814 11.5031C1.70729 11.674 1.70729 11.951 1.87814 12.1219C2.049 12.2927 2.326 12.2927 2.49686 12.1219L7 7.61872L11.5031 12.1219C11.674 12.2927 11.951 12.2927 12.1219 12.1219C12.2927 11.951 12.2927 11.674 12.1219 11.5031L7.61872 7L12.1219 2.49686C12.2927 2.326 12.2927 2.049 12.1219 1.87814C11.951 1.70729 11.674 1.70729 11.5031 1.87814L7 6.38128L2.49686 1.87814Z" fill="#000001"/>'+
    '</mask>'+
    '<g mask="url(#mask0_1211_27457)">'+
    '<rect width="14" height="14" fill="white"/>'+
    '</g>'+
    '</svg>';

    var fe_promotion = ''+
    '<div class="fe_promotion">'+
    '     <span class="closeIcon">'+closeIcon+'</span>'+
    '     <div class="fe_promotion_container">'+
    '           <img src="https://fe-test-dev.s3.amazonaws.com/zoom/%5BZoom%5D(Internal)%3A+%5BAB-ECOMM%5D+2023.05+-+Zoom+One+Pricing+page+-+OP+Banner/image.png">'+
    '           <p><img src="https://fe-test-dev.s3.amazonaws.com/zoom/%5BZoom%5D(Internal)%3A+%5BAB-ECOMM%5D+2023.05+-+Zoom+One+Pricing+page+-+OP+Banner/image.png"><strong>Scheduler is here!</strong> Zoom Scheduler optimizes scheduling by sharing availability for others to conveniently book appointments. Seamlessly integrate with Zoom Meetings, Zoom Mail and Calendar, and more. </p>'+
    '           <a class="fe_desktop_link">Buy Now</a>'+
    '           <a class="fe_mobile_link">Buy Now</a>'+
    '     </div>'+
    '</div>';

    window.optimizely = window.optimizely || [];

    /* Variation Init */
    function init() {

      if(sessionStorage.getItem('fe_promotion') != 'true'){
        _$('body').addClass('fe_scheduler_promotion');
        _$('#footer_container').append(fe_promotion);
      }

      helper.live('.closeIcon','click',function(){
        _$('body').addClass('fe_promotion_hide');
        _$('body').removeClass('fe_scheduler_promotion')
        sessionStorage.setItem('fe_promotion','true');
      })

      helper.live('.fe_promotion_container a','click',function(){
        document.querySelector('.add-on-part .buy-plan-btn[aria-describedby="scheduler-plan scheduler-plan_desc"]') && document.querySelector('.add-on-part .buy-plan-btn[aria-describedby="scheduler-plan scheduler-plan_desc"]').click();
        window.optimizely.push({
          "type": "user",
          "attributes": {
            "Offer_conversions": "Yes"
          }
        });
      })

      helper.live('[action="buy now"] .buy-plan-link, .add-on-part .buy-plan-btn:not(.contactsales-btn)','click',function(){
        window.optimizely.push({
          "type": "user",
          "attributes": {
            "Conversion_for_all_users": "Yes"
          }
        });
      })

    }

    /* Initialize variation */
    helper.waitForElement("#footer_container", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
}, "dependencies": []}, {"id": "12ddd0905737442999e56466b209f568", "type": "append", "selector": "head", "value": "<style>html body.fe_promotion_hide .fe_promotion{\n    display: none;\n}\n\nhtml body.fe_scheduler_promotion .fe_promotion {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    background: #0c5cff;\n    z-index: 999;\n    padding: 16px 30px; \n}\n\nhtml body.fe_scheduler_promotion .fe_promotion_container {\n    max-width: 1192px;\n    margin: auto;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 16px;\n}\n\nhtml body.fe_scheduler_promotion .fe_promotion img{\n    max-width: 24px;\n}\n\nhtml body.fe_scheduler_promotion .fe_promotion p{\n    color: #fff;\n    margin: 0;\n    flex: 1;\n    font-family: 'Almaden Sans';\n    font-size: 16px;\n    line-height: 24px;\n    font-weight: 400;\n}\n\nhtml body.fe_scheduler_promotion .fe_promotion a{\n    text-decoration: none;\n    background: #00F0EA;\n    padding: 10px 24px;\n    border-radius: 100px;\n    color: #000;\n    font-size: 16px;\n    font-weight: 500;\n    font-family: 'Almaden Sans';\n    cursor: pointer;\n}\n\nhtml body.fe_scheduler_promotion .fe_promotion a:hover{\n    text-decoration: none;\n    background: #04e4ec;\n}\n\nhtml body.fe_scheduler_promotion span.closeIcon{\n    position: absolute;\n    right: 15px;\n    top: 13px;\n    cursor: pointer;\n}\nhtml body.fe_scheduler_promotion .fe_mobile_link{\n    display: none;\n}\n\n/* chat icon */\nhtml body.fe_scheduler_promotion #solvvy-container .solvvy-widget-iframe,\nhtml body.fe_scheduler_promotion #solvvy-lazy-button{\n    bottom: 90px !important;\n}\n\nhtml body.fe_scheduler_promotion .fe_promotion p img{\n    display: none;\n}\n\nhtml body.fe_scheduler_promotion #footer_container{\n    padding-bottom: 70px;\n}\nhtml body.fe_scheduler_promotion .fe_close_svg path {\n    stroke: #fff; \n    stroke-width: 1.5; \n  }\n@media screen and (max-width: 885px){\n    html body.fe_scheduler_promotion #solvvy-container .solvvy-widget-iframe,\n    html body.fe_scheduler_promotion  #solvvy-lazy-button{\n        bottom: 100px !important;\n    }\n}\n\n@media screen and (max-width: 767px){\n    html body.fe_scheduler_promotion  .fe_promotion img{\n        display: none;\n    }\n\n    html body.fe_scheduler_promotion  .fe_promotion p img{\n        display: inline-block;\n        margin-right: 10px;\n    }\n\n    html body.fe_scheduler_promotion .fe_promotion_container{\n        flex-direction: column;\n    }\n    html body.fe_scheduler_promotion .fe_promotion img{\n        max-width: 20px;\n    }\n\n    html body.fe_scheduler_promotion .fe_promotion a{\n        width: 100%;\n        text-align: center;\n    }\n\n    html body.fe_scheduler_promotion .fe_promotion p{\n        font-size: 14px;\n    }\n\n    html body.fe_scheduler_promotion span.closeIcon{\n        right: 9px;\n        top: 9px;\n    }\n\n    html body.fe_scheduler_promotion #solvvy-container .solvvy-widget-iframe,\n    html body.fe_scheduler_promotion #solvvy-lazy-button {\n        bottom: 160px !important;\n    }\n    html body.fe_scheduler_promotion .fe_mobile_link{\n        display: block;\n    }\n    html body.fe_scheduler_promotion .fe_desktop_link{\n        display: none;\n    }\n}\n\n@media screen and (max-width: 668px){\n    html body.fe_scheduler_promotion #solvvy-container .solvvy-widget-iframe,\n    html body.fe_scheduler_promotion #solvvy-lazy-button{\n        bottom: 180px !important;\n    }\n}\n\n@media screen and (max-width: 488px){\n    html body.fe_scheduler_promotion #solvvy-container .solvvy-widget-iframe,\n    html body.fe_scheduler_promotion #solvvy-lazy-button{\n        bottom: 200px !important;\n    }\n\n    html body.fe_scheduler_promotion #footer_container{\n        padding-bottom: 150px;\n    }\n}\n\n@media screen and (max-width: 375px){\n    html body.fe_scheduler_promotion #solvvy-container .solvvy-widget-iframe,\n    html body.fe_scheduler_promotion #solvvy-lazy-button{\n        bottom: 230px !important;\n    }\n    html body.fe_scheduler_promotion .fe_promotion p{\n        padding-right: 5px;\n    }\n}\n\n@media screen and (max-width:370px){\n    html body.fe_scheduler_promotion .fe_promotion p{\n        padding-right: 5px;\n    }\n}\n\n@media screen and (max-width: 338px){\n    html body.fe_scheduler_promotion #solvvy-container .solvvy-widget-iframe,\n    html body.fe_scheduler_promotion #solvvy-lazy-button{\n        bottom: 250px !important;\n    }\n}</style>", "dependencies": []}]}]}], "weightDistributions": null, "name": null, "bucketingStrategy": null}], "policy": "equal_priority", "viewIds": ["24495650228"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "24695130008", "endOfRange": null}]], "offerConsistency": null}}, {"changes": null, "id": "24731440094", "name": null, "commitId": "24893460582", "groupId": null, "holdback": 500, "activation": {}, "integrationSettings": {"contentsquare": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["or", "21011180528"], "audienceName": null, "changes": null, "id": "24715990063", "integrationSettings": null, "variations": [{"id": "24704030065", "name": null, "actions": [{"viewId": "24731670076", "changes": [{"id": "294D276A-C2CE-4410-B361-86E0853B88E8", "type": "custom_code", "value": function($){const utils = optimizely.get('utils');

utils.waitForElement('.bill_date_choose.left-section .zm-switch input').then(zmSwitch => {
  utils.waitForElement('.add-on-parts .new-pricing-row.row, .plans-container').then(row => {
    row.insertAdjacentHTML(
      'beforebegin',
      `
      <div class="grey-region mobile-select-container" id="optly-bill-switcher-mobile" style="padding-left: 0;padding-bottom: 30px;">
         <div class="billed-section">
           <div class="billed-container" id="optly-bill-switcher-mobile-container"></div>
        </div>
      </div>
    `
    );

    update();
  });

  const observer = new MutationObserver(m => {
    update();
  });

  utils.waitForElement('.save-up-label-new').then(update);

  observer.observe(zmSwitch.parentNode, { attributes: true, childList: false, subtree: false, attributeFilter: ['class'] });

  function update() {
    utils.waitForElement('#optly-bill-switcher-mobile-container').then(element => {
      const billing = zmSwitch.closest('.bill_date_choose');
      element.innerHTML = '';
      element.insertAdjacentElement('afterbegin', billing.cloneNode(true));

      utils.waitForElement('#optly-bill-switcher-mobile-container .zm-switch').then(btn => {
        btn.querySelector('input').classList.add('optly-switch-input');
        btn.querySelector('input').addEventListener('click', () => {
          btn.classList.toggle('is-checked');
          const disabledItem = element.querySelector('.disabled-item');
          const dateItem = element.querySelector('.date_item');
          disabledItem.classList.toggle('disabled-item');
          disabledItem.classList.toggle('date_item');
          dateItem.classList.toggle('disabled-item');
          dateItem.classList.toggle('date_item');
          zmSwitch.click();
        })
      });
    });
  }
});

utils.waitForElement('.bill_date_choose:not(.left-section) .zm-switch input').then(zmSwitch => {
  utils.waitForElement('.add-on-parts .new-pricing-row.row, .plans-container').then(row => {
    row.insertAdjacentHTML(
      'beforebegin',
      `
      <div class="tabs-new" id="optly-bill-switcher" style="background: none;">
         <div class="tabs-new-inside">
           <div class="select-container select-container-new">
           <div class="select-container_left" id="optly-bill-switcher-container"></div>
         </div>
        </div>
      </div>
    `
    );

    update();
  });

  const observer = new MutationObserver(m => {
    update();
  });

  utils.waitForElement('.save-up-label-new').then(update);

  observer.observe(zmSwitch.parentNode, { attributes: true, childList: false, subtree: false, attributeFilter: ['class'] });

  function update() {
    utils.waitForElement('#optly-bill-switcher-container').then(element => {
      const billing = zmSwitch.closest('.bill_date_choose');
      element.innerHTML = '';
      element.insertAdjacentElement('afterbegin', billing.cloneNode(true));

      utils.waitForElement('#optly-bill-switcher-container .zm-switch').then(btn => {
        btn.querySelector('input').classList.add('optly-switch-input');
        btn.querySelector('input').addEventListener('click', () => {
          btn.classList.toggle('is-checked');
          const disabledItem = element.querySelector('.disabled-item');
          const dateItem = element.querySelector('.date_item');
          disabledItem.classList.toggle('disabled-item');
          disabledItem.classList.toggle('date_item');
          dateItem.classList.toggle('disabled-item');
          dateItem.classList.toggle('date_item');
          zmSwitch.click();
        })
      });
    });
  }
});
}, "dependencies": []}, {"id": "2499EA5C-5D85-4A1F-893F-26BF91E5E79D", "type": "append", "selector": "head", "value": "<style>#optly-bill-switcher {\n  margin-top: -6rem;\n}\n\n@media (max-width: 768px) {\n  #optly-bill-switcher {\n    margin-top: -3rem;\n    margin-bottom: 0;\n  }\n\n  #optly-bill-switcher .select-container.select-container-new {\n    padding-bottom: 0;\n  }\n\n  #optly-bill-switcher + .new-pricing-row.row {\n    padding-top: 0 !important;\n  }\n}\n\n@media (max-width: 600px) {\n  #optly-bill-switcher {\n    display: none;\n  }\n}</style>", "dependencies": []}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "E55643B9-D521-4922-9751-0661533FE739", "selector": ".bill_date_choose .zm-switch input:not(.optly-switch-input)"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "7E6F8DFC-5853-4846-B62C-A49C3A8C3EEE", "selector": ".add-on-parts a"}]}]}], "weightDistributions": null, "name": null, "bucketingStrategy": null}], "policy": "equal_priority", "viewIds": ["24731670076"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "24715990063", "endOfRange": null}]], "offerConsistency": null}}, {"changes": null, "id": "24778840921", "name": null, "commitId": "24959850794", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"contentsquare": {}, "google_universal_analytics": {"universal_analytics_slot": "160", "universal_analytics_tracker": ""}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "23075300126"], "audienceName": null, "changes": null, "id": "24812530239", "integrationSettings": null, "variations": [{"id": "24818570035", "name": null, "actions": [{"viewId": "24791111363", "changes": [{"id": "c32e037f87944d68a6c9eda03b510d7d", "type": "custom_code", "value": function($){window._basicPriceSaveOfferTest({variation: 'A'});
}, "dependencies": []}]}]}, {"id": "24789211715", "name": null, "actions": [{"viewId": "24791111363", "changes": [{"id": "b53734d893054cd5a0ddb9eb14b8b72b", "type": "custom_code", "value": function($){window._basicPriceSaveOfferTest({variation: 'B'});
}, "dependencies": []}]}]}, {"id": "24801001469", "name": null, "actions": [{"viewId": "24791111363", "changes": [{"id": "7f8f1005a8cf42f7aafcce9d453e12cb", "type": "custom_code", "value": function($){window._basicPriceSaveOfferTest({variation: 'C'});
}, "dependencies": []}]}]}], "weightDistributions": [{"entityId": "24818570035", "endOfRange": 3400}, {"entityId": "24789211715", "endOfRange": 6700}, {"entityId": "24801001469", "endOfRange": 10000}], "name": null, "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["24791111363"], "weightDistributions": null, "decisionMetadata": null}, {"changes": null, "id": "24793001470", "name": null, "commitId": "25029080370", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"contentsquare": {}, "google_universal_analytics": {"universal_analytics_slot": "159", "universal_analytics_tracker": ""}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "23075300126"], "audienceName": null, "changes": null, "id": "24756861965", "integrationSettings": null, "variations": [{"id": "24788810344", "name": null, "actions": [{"viewId": "24791531071", "changes": [{"id": "681C015D-31BD-4CFF-A674-E126599BB663", "type": "custom_code", "value": function($){window._basicPriceSaveOfferTest({variation: 'A'});
}, "dependencies": []}]}]}, {"id": "24802720190", "name": null, "actions": [{"viewId": "24791531071", "changes": [{"id": "958E164D-130A-4617-96C8-AD7049E5B8C2", "type": "custom_code", "value": function($){window._basicPriceSaveOfferTest({variation: 'B'});
}, "dependencies": []}]}]}, {"id": "24829330031", "name": null, "actions": [{"viewId": "24791531071", "changes": [{"id": "A4D679A3-13C3-4231-932A-D2A4372DACF1", "type": "custom_code", "value": function($){window._basicPriceSaveOfferTest({variation: 'C'});
}, "dependencies": []}]}]}], "weightDistributions": [{"entityId": "24788810344", "endOfRange": 3400}, {"entityId": "24802720190", "endOfRange": 6700}, {"entityId": "24829330031", "endOfRange": 10000}], "name": null, "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["24791531071"], "weightDistributions": null, "decisionMetadata": null}, {"changes": null, "id": "24807181053", "name": null, "commitId": "25862670357", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"contentsquare": {}, "google_universal_analytics": {"universal_analytics_slot": "101", "universal_analytics_tracker": ""}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "23075300126"], "audienceName": null, "changes": null, "id": "24789621285", "integrationSettings": null, "variations": [{"id": "24787621595", "name": null, "actions": [{"viewId": "24784101724", "changes": [{"id": "18F9EB35-D997-4D48-A779-ECECE9AE97A3", "type": "custom_code", "value": function($){(function () {
  var billingPageMatcher = ZmOptlyUtil.isInPath([/^\/billing/]);
  var pricingPageMatcher = ZmOptlyUtil.isInPath([/(\/[\w-]+)?\/pricing/]);

  if (billingPageMatcher && window.newBillingConfig) {
    //console.log('[Optimizely] One Page Checkout (High-Risk): Enabled [Billing Page]');
    var bpEnableOpcMatcher = typeof window.newBillingConfig.enableOPC !== 'undefined';
    var bpPro2BizMatcher = typeof window.newBillingConfig.enablePro2BizOPC !== 'undefined'
      && window.newBillingConfig.enablePro2BizOPC !== 'Unsupported';
    var bpZpEditMatcher = typeof window.newBillingConfig.enableZPhoneOPCEdit !== 'undefined'
      && window.newBillingConfig.enableZPhoneOPCEdit !== 'Unsupported';
    var bpEnableOpcPhase2Matcher = typeof window.newBillingConfig.enableOpcPhase2 !== 'undefined'
      && window.newBillingConfig.enableOpcPhase2 !== 'Unsupported';

    if (bpEnableOpcMatcher) {
      window.newBillingConfig.enableOPC = true;
    }
    if (bpPro2BizMatcher) {
      window.newBillingConfig.enablePro2BizOPC = true;
    }
    if (bpZpEditMatcher) {
      window.newBillingConfig.enableZPhoneOPCEdit = true;
    }
    if (bpEnableOpcPhase2Matcher) {
      window.newBillingConfig.enableOpcPhase2 = true;
    }
  }

  if (pricingPageMatcher) {
    //console.log('[Optimizely] One Page Checkout (High-Risk): Enabled [Pricing Page]');
    var ppEnableOpcMatcher = typeof window.dataModel.enableOPC !== 'undefined';
    var ppPro2BizMatcher = typeof window.dataModel.enablePro2BizOPC !== 'undefined'
      && window.dataModel.enablePro2BizOPC !== 'Unsupported';
    var ppEnableOpcPhase2Matcher = window.dataModel.isLogin
      && typeof window.dataModel.enableOpcPhase2 !== 'undefined'
      && window.dataModel.enableOpcPhase2 !== 'Unsupported';
    var ppZpMatcher = ZmOptlyUtil.isInPath([/(\/[\w-]+)?\/pricing\/zoom-phone\/?$/])
      && window.isZoomPhoneOPCBuyEnabled
      && typeof window.dataModel.enablePbxOPC !== 'undefined';

    if (ppEnableOpcMatcher) {
      window.dataModel.enableOPC = true;
      window.dataModel._disableZE100 = true;
    }
    if (ppPro2BizMatcher) {
      window.dataModel.enablePro2BizOPC = true;
    }
    if (ppEnableOpcPhase2Matcher) {
      window.dataModel.enableOpcPhase2 = true;
    }
    if (ppZpMatcher) {
      window.dataModel.enablePbxOPC = true;
    }
  }
})();
}, "dependencies": []}]}]}], "weightDistributions": null, "name": null, "bucketingStrategy": null}], "policy": "equal_priority", "viewIds": ["24784101724"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "24789621285", "endOfRange": null}]], "offerConsistency": null}}, {"changes": null, "id": "24872110557", "name": null, "commitId": "25864740705", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"contentsquare": {}, "google_universal_analytics": {"universal_analytics_slot": "100", "universal_analytics_tracker": ""}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "23075300126"], "audienceName": null, "changes": null, "id": "24879250471", "integrationSettings": null, "variations": [{"id": "24886690039", "name": null, "actions": [{"viewId": "24885920515", "changes": [{"id": "F87FCAD2-BE08-4281-9CFB-4613B2A09725", "type": "custom_code", "value": function($){if (window.dataModel) {
  //console.log('[Optimizely] One Page Checkout [India/INR]: Enabled [Pricing Page]');
  window.dataModel.enableOPC = true;
  window.dataModel._disableZE100 = true;
}
if (window.newBillingConfig) {
  //console.log('[Optimizely] One Page Checkout [India/INR]: Enabled [Billing Page]');
  window.newBillingConfig.enableOPC = true;
}
}, "dependencies": []}]}]}], "weightDistributions": null, "name": null, "bucketingStrategy": null}], "policy": "equal_priority", "viewIds": ["24885920515"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "24879250471", "endOfRange": null}]], "offerConsistency": null}}, {"changes": null, "id": "24881170006", "name": null, "commitId": "24934350532", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"contentsquare": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["23075300126"], "audienceName": null, "changes": null, "id": "24823920753", "integrationSettings": null, "variations": [{"id": "24816500320", "name": null, "actions": [{"viewId": "24782202499", "changes": [{"id": "64AC218C-902F-4DAF-9577-E0C36C49B144", "type": "custom_code", "value": function($){if (window.homeDestinationConfig) {
  //console.log('[Optimizely] One Page Checkout (Add To Cart): Enabled [Home Destination Page]');
  window.homeDestinationConfig.enableOpcPhase2 = true;
}
}, "dependencies": []}]}]}], "weightDistributions": null, "name": null, "bucketingStrategy": null}], "policy": "equal_priority", "viewIds": ["24782202499"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "24823920753", "endOfRange": null}]], "offerConsistency": null}}, {"changes": null, "id": "24958240299", "name": null, "commitId": "25730020021", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"contentsquare": {}, "google_universal_analytics": {"universal_analytics_slot": "111", "universal_analytics_tracker": ""}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "23075300126"], "audienceName": null, "changes": null, "id": "24941900765", "integrationSettings": null, "variations": [{"id": "24976850079", "name": null, "actions": [{"viewId": "24948560802", "changes": [{"id": "2A4913CB-5E41-4221-B951-20B5033C420A", "type": "custom_code", "value": function($){// pricing page
if (window.dataModel && typeof window.dataModel.isOPCSupportedForWebinarEventSession !== 'undefined' && window.dataModel.isOPCSupportedForWebinarEventSession !== 'Unsupported') {
  //console.log('[Optimizely] One Page Checkout (Webinar/Events/Sessions): Enabled [Pricing Page]');
  window.dataModel.isOPCSupportedForWebinarEventSession = true;
}

// billing page (paid account)
if (window.newBillingConfig && typeof window.newBillingConfig.isOPCSupportedForWebinarEventSession !== 'undefined' && window.newBillingConfig.isOPCSupportedForWebinarEventSession !== 'Unsupported') {
  //console.log('[Optimizely] One Page Checkout (Webinar/Events/Sessions): Enabled [Billing Page]');
  window.newBillingConfig.isOPCSupportedForWebinarEventSession = true;
}
}, "dependencies": []}]}]}], "weightDistributions": null, "name": null, "bucketingStrategy": null}], "policy": "equal_priority", "viewIds": ["24948560802"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "24941900765", "endOfRange": null}]], "offerConsistency": null}}, {"changes": null, "id": "25040650358", "name": null, "commitId": "25331070171", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"contentsquare": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["or", "24210280483", "20886904205"], "audienceName": null, "changes": null, "id": "25063560391", "integrationSettings": null, "variations": [{"id": "25052540757", "name": null, "actions": [{"viewId": "24409400200", "changes": [{"id": "1F05F5D0-0A57-4D44-9371-419D43C74EAA", "type": "custom_code", "value": function($){(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "";

    /* helper library */
    var _$;
    !(function (factory) {
      _$ = factory();
    })(function () {
      var bm = function (s) {
        if (typeof s === "string") {
          this.value = Array.prototype.slice.call(document.querySelectorAll(s));
        }
        if (typeof s === "object") {
          this.value = [s];
        }
      };
      bm.prototype = {
        eq: function (n) {
          this.value = [this.value[n]];
          return this;
        },
        each: function (fn) {
          [].forEach.call(this.value, fn);
          return this;
        },
        log: function () {
          console && console.log(this);
        },
        insertAfter: function (v) {
          return this.each(function (i) {
            i.insertAdjacentHTML('afterEnd', v);
          });
        },
        insertBefore: function (v) {
          return this.each(function (i) {
            i.insertAdjacentHTML('beforeBegin', v);
          });
        },
        afterBegin: function (v) {
          return this.each(function (i) {
            i.insertAdjacentHTML('afterbegin', v);
          });
        },
        addClass: function (v) {
          var a = v.split(" ");
          return this.each(function (i) {
            for (var x = 0; x < a.length; x++) {
              if (i.classList) {
                i.classList.add(a[x]);
              } else {
                i.className += " " + a[x];
              }
            }
          });
        },
        html: function (v) {
          return typeof v == 'undefined'
            ? this.value[0].innerHTML
            : this.each(function (i) {
              i.innerHTML = v;
            });
        },
        removeClass: function (v) {
          var a = v.split(' ');
          return this.each(function (i) {
            for (var x = 0; x < a.length; x++) {
              if (i.classList) {
                i.classList.remove(a[x]);
              } else {
                i.className = i.className.replace(
                  new RegExp('\\b' + a[x] + '\\b', 'g'),
                  ''
                );
              }
            }
          });
        },
        toggleClass: function (v) {
          var a = v.split(' ');
          return this.each(function (i) {
            for (var x = 0; x < a.length; x++) {
              if (i.classList) {
                i.classList.toggle(a[x]);
              } else {
                if (new RegExp('\\b' + a[x] + '\\b').test(i.className)) {
                  i.className = i.className.replace(
                    new RegExp('\\b' + a[x] + '\\b', 'g'),
                    ''
                  );
                } else {
                  i.className += ' ' + a[x];
                }
              }
            }
          });
        },
        live: function (selector, event, callback, context) {
          /****Helper Functions****/
          // helper for enabling IE 8 event bindings
          function addEvent(el, type, handler) {
            if (el.attachEvent) el.attachEvent("on" + type, handler);
            else el.addEventListener(type, handler);
          }
          // matches polyfill
          this.Element &&
            (function (ElementPrototype) {
              ElementPrototype.matches =
                ElementPrototype.matches ||
                ElementPrototype.matchesSelector ||
                ElementPrototype.webkitMatchesSelector ||
                ElementPrototype.msMatchesSelector ||
                function (selector) {
                  var node = this,
                    nodes = (
                      node.parentNode || node.document
                    ).querySelectorAll(selector),
                    i = -1;
                  while (nodes[++i] && nodes[i] != node);
                  return !!nodes[i];
                };
            })(Element.prototype);
          // live binding helper using matchesSelector
          function live(selector, event, callback, context) {
            addEvent(context || document, event, function (e) {
              var found,
                el = e.target || e.srcElement;
              while (
                el &&
                el.matches &&
                el !== context &&
                !(found = el.matches(selector))
              )
                el = el.parentElement;
              if (found) callback.call(el, e);
            });
          }
          live(selector, event, callback, context);
        },
        waitForElement: function (
          selector,
          trigger,
          delayInterval,
          delayTimeout
        ) {
          var interval = setInterval(function () {
            if (_$(selector).value.length) {
              clearInterval(interval);
              trigger();
            }
          }, delayInterval);
          setTimeout(function () {
            clearInterval(interval);
          }, delayTimeout);
        },
      };
      return function (selector) {
        return new bm(selector);
      };
    });

    var fe_tooltip_icon = '' +
      '  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '  <mask id="mask0_407_15151" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="17">' +
      '  <path d="M8.85714 5.07143C8.85714 5.54482 8.47339 5.92857 8 5.92857C7.52661 5.92857 7.14286 5.54482 7.14286 5.07143C7.14286 4.59805 7.52661 4.21429 8 4.21429C8.47339 4.21429 8.85714 4.59805 8.85714 5.07143Z" fill="black"/>' +
      '  <path d="M8.74286 8.1V12.3286C8.74286 12.7388 8.41028 13.0714 8.00001 13.0714C7.58974 13.0714 7.25715 12.7388 7.25715 12.3286V8.1C7.25715 7.68973 7.58974 7.35714 8.00001 7.35714C8.41028 7.35714 8.74286 7.68973 8.74286 8.1Z" fill="black"/>' +
      '  <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8.5C16 12.9183 12.4183 16.5 8 16.5C3.58172 16.5 0 12.9183 0 8.5C0 4.08172 3.58172 0.5 8 0.5C12.4183 0.5 16 4.08172 16 8.5ZM14.8571 8.5C14.8571 12.2871 11.7871 15.3571 8 15.3571C4.2129 15.3571 1.14286 12.2871 1.14286 8.5C1.14286 4.7129 4.2129 1.64286 8 1.64286C11.7871 1.64286 14.8571 4.7129 14.8571 8.5Z" fill="black"/>' +
      '  </mask>' +
      '  <g mask="url(#mask0_407_15151)">' +
      '  <rect y="0.5" width="16" height="16" fill="#0B5CFF"/>' +
      '  </g>' +
      '  </svg>';

    var domestic_tooltip = '' +
      '  <div class="fe-domesticTooltip sub-title">' +
      '     Unlimited Regional Calling in one of the 48 Countries and Territories' +
      '       <div class="fe-btn-container">' +
      '           <button class="zm-tooltip button-icon fe-regional-tooltipBtn">' + fe_tooltip_icon + '</button>' +
      '           <div class="zm-tooltip__popper is-light fe-reg-tooltip">' +
      '               <div> Includes a phone number and unlimited domestic calling within the country. The countries / territory included are: US, Canada, UK, Ireland, Australia, New Zealand, Austria, Denmark, France, Germany, Italy, Portugal, Spain, Sweden, Belgium,' +
      '                  Netherlands, Switzerland, Puerto Rico, Argentina, Brazil, Chile, Colombia, Costa Rica, Ecuador, Mexico, Panama, Peru, Bulgaria, Croatia, Czech Republic, Estonia, Finland, Greece, Hungary,<br>Hong Kong SAR, Lithuania, Luxembourg, Norway, Poland, Romania,' +
      '                  Slovakia, Slovenia, Singapore, South Africa, Israel, Japan. </div>' +
      '               <div class="popper__arrow"></div>' +
      '           </div>' +
      '       </div>' +
      '   </div>';


    var fe_wrapper = '' +
      '  <ul class="fe-item-wrapper">' +
      '      <li><span class="fe-title">Internal Calling </span><span class="fe-subtitle">Unlimited</span></li>' +
      '      <li><span class="fe-title">Outbound Calling </span><span class="fe-subtitle metered">Metered</span><span class="fe-subtitle unlimited">Unlimited</span></li>' +
      '      <li>' +
      '          <span id="oneManPorTip" class="fe-title">One Management Portal</span>' +
      '          <div class="fe-btn-container">' +
      '              <button class="zm-tooltip button-icon fe-tooltip-button">' + fe_tooltip_icon + '</button>' +
      '              <div class="zm-tooltip__popper is-light fe-tooltip">' +
      '                  <div>Provision and manage users, monitor call quality and usage data in the Zoom centralized admin portal.' +
      '                  </div>' +
      '                  <div class="popper__arrow"></div>' +
      '              </div>' +
      '          </div>' +
      '      </li>' +
      '      <li>' +
      '          <span class="fe-title">SMS & MMS </span><span class="fe-subtitle">Domestic</span>' +
      '          <div class="fe-btn-container">' +
      '              <button class="zm-tooltip button-icon fe-tooltip-button">' + fe_tooltip_icon + '</button>' +
      '              <div class="zm-tooltip__popper is-light fe-tooltip">' +
      '                  <div>Available for US, Canada and Australia numbers only with the purchase of a calling plan. Available to use for direct numbers (not company numbers).' +
      '                  </div>' +
      '                  <div class="popper__arrow"></div>' +
      '              </div>' +
      '          </div>' +
      '      </li>' +
      '      <li><span class="fe-title">US & Canada Number</span></li>' +
      '      <li> <span class="fe-title">Multiple Device Use </span><span class="fe-subtitle">Make & receive calls from multiple devices and apps</span></li>' +
      '      <li class="fe-optionalLi">' +
      '          <span class="fe-title">Optional Add-on </span><span class="fe-subtitle">Unlimited calling to 19 countries</span>' +
      '          <div class="fe-btn-container">' +
      '              <button class="zm-tooltip button-icon fe-tooltip-button">' + fe_tooltip_icon + '</button>' +
      '              <div class="zm-tooltip__popper is-light fe-tooltip">' +
      '                  <div>An add-on plan that can be purchased with any of the unlimited calling plans. It provides unlimited international calling to the following countries / territory: US, Canada, UK, Ireland, Australia, New Zealand, Austria, Denmark, France,' +
      '                      Germany, Italy, Portugal, Spain, Sweden, Belgium, Netherlands, Switzerland, Puerto Rico & Japan.' +
      '                  </div>' +
      '                  <div class="popper__arrow"></div>' +
      '              </div>' +
      '          </div>' +
      '      </li>' +
      '      <li class="fe-directDialLi"> <span class="fe-title">Direct Dial Number</span></li>' +
      '  </ul>';

    var fe_globalTxt = '' +
      '<h3 class="title fe-globalSelectTxt">Global Select</h3>';

    var helper = _$();

    function handleTooltip(button, tooltip) {
      button.addEventListener("mouseenter", function() {
        tooltip.classList.add("fe-show");
      });

      button.addEventListener("mouseleave", function() {
        tooltip.classList.remove("fe-show");
      });
    }

    /* Variation Init */
    function init() {

      // check country location
      var getCountry = document.querySelector('.hidden-country').innerHTML;

      if (getCountry === 'United States'){
        _$('body').addClass('fe-phonePriceBody');
      }

      _$('html body #region-metered_desc').html('Pay as You Go');
      // three tiles js
      var indices = [0, 1, 4];

      // insert new copy for three tiles
      !_$('.fe-item-wrapper').value[0] && indices.forEach(function(index) {
        _$(".plan-wrapper .items-wrapper").value[index].insertAdjacentHTML("beforebegin", fe_wrapper);
      });

      !_$('.fe-domesticTooltip').value[0] && _$(".pricing-details #domestic_desc").insertAfter(domestic_tooltip);
      !_$('.fe-globalSelectTxt').value[0] && _$("#domestic").insertAfter(fe_globalTxt);

      // show tooltip on hover
      document.querySelectorAll(".fe-tooltip-button").forEach(function (button, index) {
        handleTooltip(button, document.querySelectorAll(".fe-tooltip")[index]);
      });

      var regBtn = document.querySelector(".fe-regional-tooltipBtn");
      var regTooltip = document.querySelector(".fe-reg-tooltip");

      handleTooltip(regBtn, regTooltip);


      // back to the control if user change the county
      helper.live('[data-taid="call-from-country-select"] .zm-select-dropdown .zm-select-dropdown__item, #new-pricing-content .mobile-select-container .dropdown-detail-item', 'mousedown', function () {
        var interval = setInterval(function () {
          var getCountry = document.querySelector('.hidden-country').innerHTML;
          if (getCountry != 'United States') {
            _$("body").removeClass("fe-phonePriceBody");
          } else {
            _$("body").addClass("fe-phonePriceBody");
            setTimeout(function () {
              clearInterval(interval);
            }, 5000);
          }
        })

        setTimeout(function () {
          clearInterval(interval)
        }, 2000)
      })

    }


    // Transaction CVR of Phone Plans
    window.optimizely = window.optimizely || [];
    function transactionCVR() {
      helper.live('[plan="metered plan"] .buy-plan-link, [plan="unlimited plan"] .buy-plan-link, .comparison-table-header [aria-label="Buy Now Metered"], .comparison-table-header [aria-label="Buy Now Unlimited"], [plan="additional phone numbers"] .buy-plan-btn , [plan="toll-free numbers"] .buy-plan-btn , [planname="International calling"] .buy-plan-btn , [plan="zoom phone power user"] .buy-plan-btn', 'click', function () {
        window.optimizely.push({
          "type": "user",
          "attributes": {
            "Transaction_CVR_of_Phone_Plans": "Yes"
          }
        });
      })
    }

    transactionCVR();

    /* Initialize variation */
    helper.waitForElement('[plan="pro global select"] .buy-plan-link', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
}, "dependencies": []}, {"id": "0E74B171-1A9C-4EA8-A503-CADE99C1B5D5", "type": "append", "selector": "head", "value": "<style>html body.fe-phonePriceBody #region-metered_desc~.fe-item-wrapper .fe-optionalLi,\nhtml body.fe-phonePriceBody #region-metered_desc~.fe-item-wrapper .fe-directDialLi,\nhtml body.fe-phonePriceBody #region-unlimited_desc~.fe-item-wrapper .fe-directDialLi,\nhtml body.fe-phonePriceBody #region-metered_desc~.items-wrapperr,\nhtml body.fe-phonePriceBody #region-metered_desc~.items-wrapper,\nhtml body.fe-phonePriceBody #region-unlimited_desc~.items-wrapper,\nhtml body.fe-phonePriceBody #domestic_desc~.items-wrapper,\nhtml body.fe-phonePriceBody .pricing-details #domestic_desc,\nhtml body.fe-phonePriceBody #domestic,\nhtml body.fe-phonePriceBody .QSIUserDefinedHTML\n{\n    display: none;\n}\n\nhtml body.fe-phonePriceBody .fe-hide {\n    display: none;\n}\n\nhtml body .fe-item-wrapper,\nhtml body .fe-domesticTooltip,\nhtml body .fe-compareTblHeading,\nhtml body .fe-core-Content,\nhtml body .fe-globalSelectTxt\n{\n    display: none;\n}\n\nhtml body.fe-phonePriceBody .fe-item-wrapper,\nhtml body.fe-phonePriceBody .fe-domesticTooltip,\nhtml body.fe-phonePriceBody .fe-compareTblHeading,\nhtml body.fe-phonePriceBody .fe-core-Content,\nhtml body.fe-phonePriceBody .fe-globalSelectTxt\n{\n    display: revert;\n}\n\nhtml body.fe-phonePriceBody .plan-wrapper .price-part {\n    margin-top: 0;\n    margin-bottom: 4px;\n}\n\nhtml body [plan=\"pro global select\"] .buy-plan-link{\n    padding: 9px 24px;\n    font-weight: 500 !IMPORTANT;\n    font-size: 16px;\n    line-height: 24px;\n}\n\nhtml body.fe-phonePriceBody .plan-wrapper .fe-item-wrapper li {\n    list-style-type: none;\n    margin-bottom: 10px;\n    line-height: 21px;\n}\n\nhtml body.fe-phonePriceBody .plan-wrapper .fe-title {\n    color: #00053d;\n    font-weight: 600;\n    letter-spacing: 0.01em;\n}\n\nhtml body.fe-phonePriceBody .plan-wrapper .fe-subtitle {\n    color: #515079;\n    font-weight: 600;\n    font-size: 12px;\n    letter-spacing: 0.01em;\n}\n\nhtml body.fe-phonePriceBody [plan=\"pro global select\"]  .fe-subtitle.metered,\nhtml body.fe-phonePriceBody [plan=\"unlimited plan\"]  .fe-subtitle.metered,\nhtml body.fe-phonePriceBody [plan=\"metered plan\"]  .fe-subtitle.unlimited{\n    display: none;\n}\n\nhtml body.fe-phonePriceBody .plan-wrapper .fe-item-wrapper li {\n    position: relative;\n    padding-left: 20px;\n}\n\nhtml body.fe-phonePriceBody .plan-wrapper .fe-item-wrapper li::before {\n    content: \"\\2713\";\n    margin-right: 0.5em;\n    color: #0b5cff;\n    position: absolute;\n    left: 0;\n}\n\nhtml body.fe-phonePriceBody .plan-wrapper .fe-item-wrapper {\n    padding-left: 0;\n    font-size: 14px;\n}\n\nhtml body.fe-phonePriceBody .plan-wrapper .pricing-details h3.title {\n    color: #0b5cff;\n    font-weight: 700;\n    margin-top: 10px;\n    font-size: 22px;\n    letter-spacing: 0.3px;\n    text-transform: capitalize;\n    line-height: 33px;\n    margin-bottom: 4px;\n}\n\nhtml body.fe-phonePriceBody .plan-wrapper .pricing-details .sub-title {\n    color: #515079;\n    font-size: 14px;\n    letter-spacing: 0;\n    font-weight: 500;\n    height: 41px !important;\n    line-height: 21px;\n    margin-bottom: 4px;\n}\n\nhtml body.fe-phonePriceBody .pricing-details .subtext.currency-flag,\nhtml body.fe-phonePriceBody .pricing-details .price-num{\n    font-weight: 600;\n}\nhtml body.fe-phonePriceBody .pricing-details .subtext.currency-flag{\n    margin-top: 4px;\n}\nhtml body.fe-phonePriceBody .pricing-details .price-num{\n    line-height: 38px;\n}\n\nhtml body.fe-phonePriceBody .pricing-details .subtext{\n    color: #00053D;\n    font-weight: 600;\n    font-size: 14px;\n}\n\nhtml body.fe-phonePriceBody .pricing-details .rate{\n    color: #515079;\n    line-height: 16.8px;\n}\nhtml body.fe-phonePriceBody .price-abtest-designA .new-price-wrapper + div{\n    line-height: 16.8px;\n}\n\nhtml body.fe-phonePriceBody .plan-wrapper .fe-zm-tooltip__popper {\n    position: absolute;\n    border-radius: 8px;\n    padding: 8px 12px;\n    z-index: 2000;\n    font-size: 14px;\n    line-height: 24px;\n    min-width: 10px;\n    max-width: 320px;\n    box-shadow: 0 2px 12px 0 rgba(35, 35, 51, .5);\n    border: 1px solid transparent;\n    color: #6e7680;\n    background: #fff;\n    width: 250px;\n    z-index: 113;\n    transform-origin: center bottom;\n}\n\nhtml body.fe-phonePriceBody .plan-wrapper .fe-tooltip{\n    position: absolute;\n    opacity: 0;\n    transition: opacity 0.4s ease-in-out;\n    visibility: hidden;\n    bottom: 35px;\n    left: 70%;\n    transform: translate(-50%);\n}\n\nhtml body.fe-phonePriceBody .plan-wrapper .fe-tooltip.fe-show{\n    opacity: 1;\n    visibility: visible;\n    z-index: 105;\n}\n\nhtml body.fe-phonePriceBody .fe-tooltip .popper__arrow:after {\n    border-bottom: 15px solid white;\n    transform: rotate(180deg);\n    left: 90px;\n    border-width: 10px;\n}\n/******** Reg tooltip *******/\nhtml body .plan-wrapper .fe-reg-tooltip {\n    position: absolute;\n    opacity: 0;\n    transition: opacity 0.4s ease-in-out;\n    visibility: hidden;\n    left: 80%;\n    transform: translate(-50%);\n    visibility: visible;\n    top: 32px;\n    z-index: -1;\n}\nhtml body.fe-phonePriceBody .plan-wrapper .fe-reg-tooltip.fe-show{\n    opacity: 1;\n    visibility: visible;\n    z-index: 105;\n}\nhtml body .fe-reg-tooltip .popper__arrow:after {\n    border-bottom: 15px solid white;\n    left: 90px;\n    border-width: 10px;\n    top: -490px;\n}\n\nhtml body.fe-phonePriceBody .plan-wrapper .fe-btn-container {\n    display: inline;\n    position: absolute;\n}\n\nhtml body.fe-phonePriceBody .plan-wrapper .price-abtest-designA {\n    margin-bottom: 15px;\n}\n\nhtml body.fe-phonePriceBody .price-abtest-designA a{\n    color: #0B5CFF;\n}\nhtml body .time-switch-container_main{\n    flex-wrap: wrap !important;\n}\n@media screen and (min-width: 921px) and (max-width: 1077px){\n    html body .calculator-outer-container .calculator-container.calculator-container-max{\n        height: 100px;\n    }\n}\n/* Media Query  */\n\n@media screen and (min-width:1299px) {\n    html body .plan-wrapper .fe-reg-tooltip {\n        top: -90px;\n        left: 155px;\n    }\n    html body .fe-reg-tooltip .popper__arrow:after {\n        transform: rotate(270deg);\n        left: -35px;\n        top: -380px;\n    }\n}\n\n@media(min-width: 1400px) {\n    html body.fe-phonePriceBody #domestic_desc~.fe-item-wrapper .fe-optionalLi .fe-tooltip {\n        right: -150px;\n        left: inherit;\n    }\n    html body #domestic_desc ~ ul li.fe-optionalLi .fe-tooltip .popper__arrow:after{\n        left: 183px;\n    }\n}\n@media(max-width: 768px){\n    html body .new-ui-style .select-container{\n        display: flex;\n        flex-wrap: wrap;\n        gap: 10px;\n    }\n    html body .zm-select .zm-select-input .zm-select-toggle{\n        right: 0px;\n    }\n    html body .new-ui-style .select-container .zm-select .zm-select-input .zm-select__caret{\n        font-size: 20px;\n    }\n    html body .time-switch-container_main .content{\n        flex-wrap: wrap;\n    }\n}</style>", "dependencies": []}]}]}], "weightDistributions": null, "name": null, "bucketingStrategy": null}], "policy": "equal_priority", "viewIds": ["24409400200"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "25063560391", "endOfRange": null}]], "offerConsistency": null}}, {"changes": null, "id": "25111170190", "name": null, "commitId": "25454170299", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"contentsquare": {}, "google_universal_analytics": {"universal_analytics_slot": "103", "universal_analytics_tracker": ""}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "25078980369"], "audienceName": null, "changes": null, "id": "25060420451", "integrationSettings": null, "variations": [{"id": "25042700316", "name": null, "actions": []}, {"id": "25098550087", "name": null, "actions": [{"viewId": "20983450035", "changes": [{"id": "13ba56fa40b045dc8e9db7abaf246eeb", "type": "custom_code", "value": function($){(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "";

    /* helper library */
    var _$;
    !(function (factory) {
      _$ = factory();
    })(function () {
      var bm = function (s) {
        if (typeof s === "string") {
          this.value = Array.prototype.slice.call(document.querySelectorAll(s));
        }
        if (typeof s === "object") {
          this.value = [s];
        }
      };
      bm.prototype = {
        eq: function (n) {
          this.value = [this.value[n]];
          return this;
        },
        each: function (fn) {
          [].forEach.call(this.value, fn);
          return this;
        },
        log: function () {
          console && console.log(this);
        },
        insertBefore: function (v) {
          return this.each(function (i) {
            i.insertAdjacentHTML('beforeBegin', v);
          });
        },
        addClass: function (v) {
          var a = v.split(" ");
          return this.each(function (i) {
            for (var x = 0; x < a.length; x++) {
              if (i.classList) {
                i.classList.add(a[x]);
              } else {
                i.className += " " + a[x];
              }
            }
          });
        },
        parents: function (v) {
          return _$(this.value[0].closest(v));
        },
        removeClass: function (v) {
          var a = v.split(' ');
          return this.each(function (i) {
            for (var x = 0; x < a.length; x++) {
              if (i.classList) {
                i.classList.remove(a[x]);
              } else {
                i.className = i.className.replace(
                  new RegExp('\\b' + a[x] + '\\b', 'g'),
                  ''
                );
              }
            }
          });
        },
        html: function (v) {
          return typeof v == 'undefined'
            ? this.value[0].innerHTML
            : this.each(function (i) {
              i.innerHTML = v;
            });
        },
        live: function (selector, event, callback, context) {
          /****Helper Functions****/
          // helper for enabling IE 8 event bindings
          function addEvent(el, type, handler) {
            if (el.attachEvent) el.attachEvent("on" + type, handler);
            else el.addEventListener(type, handler);
          }
          // matches polyfill
          this.Element &&
            (function (ElementPrototype) {
              ElementPrototype.matches =
                ElementPrototype.matches ||
                ElementPrototype.matchesSelector ||
                ElementPrototype.webkitMatchesSelector ||
                ElementPrototype.msMatchesSelector ||
                function (selector) {
                  var node = this,
                    nodes = (
                      node.parentNode || node.document
                    ).querySelectorAll(selector),
                    i = -1;
                  while (nodes[++i] && nodes[i] != node);
                  return !!nodes[i];
                };
            })(Element.prototype);
          // live binding helper using matchesSelector
          function live(selector, event, callback, context) {
            addEvent(context || document, event, function (e) {
              var found,
                el = e.target || e.srcElement;
              while (
                el &&
                el.matches &&
                el !== context &&
                !(found = el.matches(selector))
              )
                el = el.parentElement;
              if (found) callback.call(el, e);
            });
          }
          live(selector, event, callback, context);
        },
        waitForElement: function (
          selector,
          trigger,
          delayInterval,
          delayTimeout
        ) {
          var interval = setInterval(function () {
            if (_$(selector).value.length) {
              clearInterval(interval);
              trigger();
            }
          }, delayInterval);
          setTimeout(function () {
            clearInterval(interval);
          }, delayTimeout);
        },
      };
      return function (selector) {
        return new bm(selector);
      };
    });

    function funcInterval(trigger){
      var interval = setInterval(function () {
        trigger();
      }, 20);

      setTimeout(function () {
        clearInterval(interval);
      }, 2000);
    }

    var feEnterpriseString = '' +
      '  <div class="fe_enterprise_wrapper">' +
      '      <div class="fe_enterprise_container">' +
      '          <div class="fe_enterprise_main">' +
      '              <div class="fe_contactSales">' +
      '                  <p class="fe_heading">Zoom One Enterprise</p>' +
      '                  <p class="fe_subheading">Our business communication solution, tailored to global enterprises</p>' +
      '                  <a href="https://explore.zoom.us/en/contactsales" class="fe_contactBtn">' +
      '                      Contact Sales' +
      '                  </a>' +
      '              </div>' +
      '              <div class="fe_enterprise_logos">' +
      '                  <div class="icons-parts icon-parts-desk">' +
      '                      <div class="brand-img atlassian"></div>' +
      '                      <div class="brand-img circle"></div>' +
      '                      <div class="brand-img okta"></div>' +
      '                      <div class="brand-img salesforce"></div>' +
      '                      <div class="brand-img slack"></div>' +
      '                  </div>' +
      '                  <div class="icons-parts icon-parts-mob">' +
      '                      <div class=fe_mob_up_icon>' +
      '                           <div class="brand-img atlassian"></div>' +
      '                           <div class="brand-img circle"></div>' +
      '                       </div>' +
      '                       <div class=fe_mob_bottom_icon>' +
      '                           <div class="brand-img okta"></div>' +
      '                           <div class="brand-img salesforce"></div>' +
      '                           <div class="brand-img slack"></div>' +
      '                       </div>' +
      '                  </div>' +
      '              </div>' +
      '          </div>' +
      '      </div>' +
      '  </div>';
    var helper = _$();
    /* Variation Init */
    function init() {

      // Initial setup
      initiateEnterPrise();

      // Live function for the plan change
      helper.live('.zm-dropdown-menu__item-content .pricing_nav_dropdown_item,[data-taid="call-from-country-select"] .zm-select-dropdown .zm-select-dropdown__item', 'mousedown', function () {
        funcInterval(initiateEnterPrise);
        funcInterval(removeEnterPriseTable);
      });

      helper.live('.zm-dropdown-menu__item-content .pricing_nav_dropdown_item,[data-taid="call-from-country-select"] .zm-select-dropdown .zm-select-dropdown__item', 'touchstart', function () {
        funcInterval(initiateEnterPrise);
        funcInterval(removeEnterPriseTable);
      });

      helper.live('.zm-switch input', 'change', function () {
        funcInterval(removeEnterPriseTable);
      })

    }

    function initiateEnterPrise() {
      var planText = _$(".pricing_nav_dropdown .active-nav-item h2").html();
      var body = _$("body");

      if (planText === 'Business') {
        body.addClass("fe_rmvEntPlan");
        insertEnterPrise();
        if(_$('.comparison-tree-table-mobile .zm-select-dropdown [aria-label="Enterprise"].selected').value[0] != null){
          _$('.comparison-tree-table-mobile .zm-select-dropdown [aria-label="Business"]').value[0].click();
          setTimeout(function(){
            window.scroll(0, 0);
          },10)
        }
      } else {
        body.removeClass("fe_rmvEntPlan");
      }
    }

    function insertEnterPrise() {
      var enterpriseWrapper = _$(".fe_enterprise_wrapper");
      var fullPlanTable = _$(".add-on-parts");
      var mobilePlanTable = _$(".add-on-parts-mobile");
      
      if (enterpriseWrapper.value[0] == null) {
        if (fullPlanTable) {
          fullPlanTable.insertBefore(feEnterpriseString);
        }
        
        if (mobilePlanTable) {
          mobilePlanTable.insertBefore(feEnterpriseString);
        }
      }
    }
    
    function removeEnterPriseTable() {
      // removing enterprise on comparison table
      if (_$('[data-link-term="Contact Sales"]').value[0] != null && _$('[data-link-term="Contact Sales"]').parents('th').value[0] != null) {
        _$('[data-link-term="Contact Sales"]').parents('th').addClass('fe_enterprise_hide');
      }
    }

    /* Initialize variation */
    helper.waitForElement(".add-on-parts, .add-on-parts-mobile", init, 50, 25000);

    // removing enterprise on comparison table
    helper.waitForElement('[data-link-term="Contact Sales"]', function () {
      removeEnterPriseTable();
    }, 50, 15000)
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
}, "dependencies": []}, {"id": "ae7d2218d2604b059a1d58f0cd9a53bb", "type": "append", "selector": "head", "value": "<style>html body .fe_enterprise_wrapper {\n    display: none;\n}\n\nhtml body.fe_rmvEntPlan .fe_enterprise_wrapper {\n    display: revert;\n    margin: 0;\n    background: #F7F7F8;\n    margin: 50px -30px 0;\n}\nhtml body.fe_rmvEntPlan .feature-plan-card[plan=\"enterprise\"], \nhtml body.fe_rmvEntPlan .icons-parts:not(.fe_enterprise_wrapper .icons-parts){\n    display: none;\n}\nhtml body.fe_rmvEntPlan .question-parts{\n    margin-top: 70px;\n}\n\nhtml body.fe_rmvEntPlan .fe_enterprise_wrapper *{\n    margin: 0;\n}\nhtml body.fe_rmvEntPlan .fe_readStories{\n    font-weight: bold;\n}\nhtml body.fe_rmvEntPlan .fe_enterprise_wrapper .fe_enterprise_container{\n    max-width: 1440px;\n    width: 100%;\n    padding: 32px 50px;\n    margin: 0 auto;\n}\nhtml body.fe_rmvEntPlan .fe_enterprise_wrapper .fe_enterprise_main{\n    display: flex;\n    justify-content: space-between;\n    gap: 40px;\n    align-items: center;\n}\nhtml body.fe_rmvEntPlan .fe_enterprise_wrapper .icons-parts{\n    padding: 0;\n}\nhtml body.fe_rmvEntPlan .fe_enterprise_wrapper .icon-parts-mob{\n    display: none;\n}\n\nhtml body.fe_rmvEntPlan .fe_enterprise_wrapper .icons-parts .brand-img{\n    width: 170px;\n}\n\nhtml body.fe_rmvEntPlan .fe_enterprise_wrapper .fe_readStories{\n    text-align: center;\n}\nhtml body.fe_rmvEntPlan .fe_enterprise_wrapper .fe_contactSales .fe_heading{\n    font-weight: 700;\n    font-size: 22px;\n    line-height: 26px;\n    color: #00053d;\n    margin-bottom: 16px;\n}\nhtml body.fe_rmvEntPlan .fe_enterprise_wrapper .fe_contactSales .fe_subheading{\n    color: #666487;\n    font-weight: 400;\n    line-height: 20px;\n    margin-bottom: 16px;\n    max-width: 385px;\n    width: 100%;\n    font-size: 16px;\n}\nhtml body.fe_rmvEntPlan .fe_enterprise_wrapper .fe_contactBtn{\n    border: 1px solid #0b5cff;\n    color: #0b5cff;\n    border-radius: 20px;\n    padding: 5px 20px;\n    text-align: center;\n    text-decoration: none;\n    font-size: 16px;\n    cursor: pointer;\n    display: inline-block;\n    font-weight: 500;\n}\nhtml body.fe_rmvEntPlan .fe_enterprise_wrapper .fe_contactBtn:hover{\n    background: rgba(11,92,255,0.1);\n}\n/* Remove ENT Plan from comp table css */\nhtml body.fe_rmvEntPlan .zm-table__body-wrapper .zm-table__body tbody .zm-table__row:not(.title-row) td:last-of-type,\nhtml body.fe_rmvEntPlan .zm-table__body-wrapper .zm-table__body colgroup col:last-of-type,\nhtml body.fe_rmvEntPlan .zm-table__header-wrapper .zm-table__header .comparison-table-header .fe_enterprise_hide,\nhtml body.fe_rmvEntPlan .zm-table__header-wrapper .zm-table__header colgroup {\n    display: none;\n}\nhtml body.fe_rmvEntPlan .zm-table__header-wrapper .zm-table__header colgroup,\nhtml body.fe_rmvEntPlan .zm-table__body-wrapper .zm-table__body colgroup col {\n    width: 25%;\n}\nhtml body.fe_rmvEntPlan .comparison-tree-table-mobile .zm-select-dropdown [aria-label=\"Enterprise\"]{\n    display: none;\n}\n@media (min-width: 1400px) {\n    html body.fe_rmvEntPlan .new-one-card-layout .feature-plan-card{\n        max-width: 23%;\n        width: 100%;\n    }\n}\n@media (min-width: 1450px) {\n    html body.fe_rmvEntPlan .fe_enterprise_wrapper {\n        width: 100vw;\n        margin-left: calc(-50vw + 50%); \n        margin-right: calc(-50vw + 50%); \n    }\n    html body.fe_rmvEntPlan{\n        overflow-x: hidden;\n    }\n}\n@media(max-width: 1378px){\n    html body.fe_rmvEntPlan .fe_enterprise_wrapper .icons-parts .brand-img {\n        width: 140px;\n    }\n}\n@media(max-width: 1024px){\n    html body.fe_rmvEntPlan .fe_enterprise_wrapper .fe_contactSales{\n        max-width: 253px;\n        width: 100%;\n    }\n    html body.fe_rmvEntPlan .fe_enterprise_wrapper {\n        margin: 50px -25px 0;\n    }\n}\n@media(max-width: 767px){\n    html body.fe_rmvEntPlan .fe_enterprise_wrapper .fe_enterprise_main {\n        flex-direction: column;\n        gap: 0;\n    }\n    html body.fe_rmvEntPlan .fe_enterprise_wrapper .fe_contactSales {\n        text-align: center;\n    }\n    html body.fe_rmvEntPlan .fe_enterprise_wrapper {\n        margin: 50px -3.84615vw 0;\n    }\n    html body.fe_rmvEntPlan .fe_enterprise_wrapper .fe_enterprise_container {\n        padding: 32px 15px;\n    }\n    html body.fe_rmvEntPlan .fe_enterprise_wrapper .fe_contactSales {\n        max-width: 400px;\n        width: 100%;\n    }\n    html body.fe_rmvEntPlan .fe_enterprise_wrapper .icon-parts-mob{\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n    html body.fe_rmvEntPlan .fe_enterprise_wrapper .fe_mob_up_icon,\n    html body.fe_rmvEntPlan .fe_enterprise_wrapper .fe_mob_bottom_icon{\n        display: flex;\n        width: 100%;\n        justify-content: space-between;\n    }\n\n    html body.fe_rmvEntPlan .fe_enterprise_wrapper .icon-parts-desk{\n        display: none;\n    }\n    html body.fe_rmvEntPlan .icons-parts.icon-parts-mob .brand-img.atlassian {\n        background-image: url(https://fe-test-dev.s3.amazonaws.com/zoom/+Zoom+One+Pricing+Page/logo-atlassian.svg);\n        width: 154px;\n        margin-right: 0;\n    }\n    html body.fe_rmvEntPlan .icons-parts.icon-parts-mob .brand-img.circle {\n        background-image: url(https://fe-test-dev.s3.amazonaws.com/zoom/+Zoom+One+Pricing+Page/logo-dropbox.svg);\n        width: 156px;\n    }\n    html body.fe_rmvEntPlan .icons-parts.icon-parts-mob .brand-img.okta {\n        background-image: url(https://fe-test-dev.s3.amazonaws.com/zoom/+Zoom+One+Pricing+Page/logo-okta.svg);\n        width: 89px;\n        background-size: auto;\n    }\n    html body.fe_rmvEntPlan .icons-parts.icon-parts-mob .brand-img.salesforce {\n        background-image: url(https://fe-test-dev.s3.amazonaws.com/zoom/+Zoom+One+Pricing+Page/logo-salesforce.svg);\n        width: 85px;\n    }\n    html body.fe_rmvEntPlan .icons-parts.icon-parts-mob .brand-img.slack {\n        background-image: url(https://fe-test-dev.s3.amazonaws.com/zoom/+Zoom+One+Pricing+Page/logo-slack.svg);\n        width: 118px;\n    }\n\n    html body.fe_rmvEntPlan .fe_enterprise_wrapper .fe_enterprise_logos{\n        width: 100%;\n        max-width: 350px;\n        margin: auto;\n    }\n}\n@media(max-width: 360px){\n    html body.fe_rmvEntPlan .fe_enterprise_wrapper .fe_mob_up_icon,\n    html body.fe_rmvEntPlan .fe_enterprise_wrapper .fe_mob_bottom_icon{\n        flex-direction: column;\n        align-items: center;\n    }\n\n}</style>", "dependencies": []}]}]}], "weightDistributions": [{"entityId": "25042700316", "endOfRange": 5000}, {"entityId": "25098550087", "endOfRange": 10000}], "name": null, "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["20983450035"], "weightDistributions": null, "decisionMetadata": null}, {"changes": null, "id": "25222380028", "name": null, "commitId": "25769250722", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "20886904205"], "audienceName": null, "changes": null, "id": "25224520031", "integrationSettings": null, "variations": [{"id": "25231730023", "name": null, "actions": [{"viewId": "25222380027", "changes": [{"id": "02358DDB-E8B4-4D1F-9AAC-6C5DC984EB06", "type": "custom_code", "value": function($){// homepage nav fix 
// using mutation observer - code in shared js container 

  // Connect & learn - second column
ready('#navbar-left #resources .dropdown-menu .second_column',function(element){   // desktop
  document.querySelector('#navbar-left #resources .dropdown-menu .second_column #resourcesC2TitleAndDesc .columnTitle').innerText = 'Connect & Learn';
  document.querySelector('#navbar-left #resources .dropdown-menu .second_column #resourcesC2TitleAndDesc .resourceDescription').innerText ='Network with other Zoom users, share your own insights, and access expert-led tutorials on Zoom products and features.';
  document.querySelector('#navbar-left #resources .dropdown-menu .second_column .resourceSectionLinks').innerHTML = '<li><a href="https://community.zoom.com/" target="_blank" tracking_id="headerCommunity" tracking-category="NavHeader">Zoom Community</a><li><a href="https://learning.zoom.us/learn" target="_blank" tracking-id="headerLearn" tracking-category="NavHeader" aria-describedby="headerLearn">Learning Center</a></li><li><a tracking-id="headerTutorials" tracking-category="NavHeader" href="https://learn-zoom.us/show-me" onclick="">How-to Videos</a></li>';
  console.log('hmp-optz-tg-on');
});
ready('.tabletWhiteBar #resources .second_column',function(element){  // tablet
  document.querySelector('#navbar-left-tab.tabletWhiteBar #resources .dropdown-menu .second_column .columnTitle').innerText = "Connect & Learn";
  document.querySelector('.tabletWhiteBar #resources .second_column .resourceSectionLinks').innerHTML = '<li><a href="https://community.zoom.com/" target="_blank" tracking_id="headerCommunity" tracking-category="NavHeader">Zoom Community</a><li><a href="https://learning.zoom.us/learn" target="_blank" tracking-id="headerLearn" tracking-category="NavHeader" aria-describedby="headerLearn">Learning Center</a></li><li><a tracking-id="headerTutorials" tracking-category="NavHeader" href="https://learn-zoom.us/show-me" onclick="">How-to Videos</a></li>';
});
ready('#navbar-left-mobile #resources .second_column',function(element){  // mobile
  document.querySelector('#navbar-left-mobile #resources .dropdown-menu .second_column .columnTitle').innerText = "Connect & Learn";
  document.querySelector('#navbar-left-mobile #resources .second_column .resourceSectionLinks').innerHTML = '<li><a href="https://community.zoom.com/" target="_blank" tracking_id="headerCommunity" tracking-category="NavHeader">Zoom Community</a><li><a href="https://learning.zoom.us/learn" target="_blank" tracking-id="headerLearn" tracking-category="NavHeader" aria-describedby="headerLearn">Learning Center</a></li><li><a tracking-id="headerTutorials" tracking-category="NavHeader" href="https://learn-zoom.us/show-me" onclick="">How-to Videos</a></li>';
});
// hardware & services - third column 
ready('#navbar-left #resources .dropdown-menu .third_column',function(element){  // desktop
  document.querySelector('#navbar-left #resources .dropdown-menu .third_column #resourcesC3TitleAndDesc .columnTitle').innerText ="Hardware & Services";
  document.querySelector('#navbar-left #resources .dropdown-menu .third_column #resourcesC3TitleAndDesc .resourceDescription').innerText = "Expert support and services for all your design, strategy, implementation, event, and hardware needs.";
  document.querySelector('#navbar-left #resources .dropdown-menu .third_column .resourceSectionLinks').innerHTML = '<li><a href="https://explore.zoom.us/en/global-services/">Global Services</a></li><li><a href="https://explore.zoom.us/en/hardware-purchase-options/">Hardware Options</a></li><li><a href="https://explore.zoom.us/en/products/cmk/" >Customer Managed Key</a></li>';
});
ready('.tabletWhiteBar #resources .dropdown-menu .third_column',function(element){  // tablet
  document.querySelector('#navbar-left-tab.tabletWhiteBar #resources .dropdown-menu .third_column .columnTitle').innerText ="Hardware & Services";
  document.querySelector('.tabletWhiteBar #resources .third_column .resourceSectionLinks').innerHTML = '<li><a href="https://explore.zoom.us/en/global-services/">Global Services</a></li><li><a href="https://explore.zoom.us/en/hardware-purchase-options/">Hardware Options</a></li><li><a href="https://explore.zoom.us/en/products/cmk/" >Customer Managed Key</a></li>';
});
ready('#navbar-left-mobile #resources .dropdown-menu .third_column',function(element){    // mobile
  document.querySelector('#navbar-left-mobile #resources .dropdown-menu .third_column .columnTitle').innerText = "Hardware & Services";
  document.querySelector('#navbar-left-mobile #resources .third_column .resourceSectionLinks').innerHTML = '<li><a href="https://explore.zoom.us/en/global-services/">Global Services</a></li><li><a href="https://explore.zoom.us/en/hardware-purchase-options/">Hardware Options</a></li><li><a href="https://explore.zoom.us/en/products/cmk/" >Customer Managed Key</a></li>';
});
}, "dependencies": []}]}]}], "weightDistributions": null, "name": null, "bucketingStrategy": null}], "policy": "equal_priority", "viewIds": ["25222380027"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "25224520031", "endOfRange": null}]], "offerConsistency": null}}, {"changes": null, "id": "25244300764", "name": null, "commitId": "25484810014", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"contentsquare": {}, "google_universal_analytics": {"universal_analytics_slot": "108", "universal_analytics_tracker": ""}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "20886904205"], "audienceName": null, "changes": null, "id": "25233550788", "integrationSettings": null, "variations": [{"id": "25237970889", "name": null, "actions": [{"viewId": "25270510591", "changes": [{"id": "35453A6D-9F19-481E-AA3C-850230E7FA04", "type": "custom_code", "value": function($){(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "";

    /* helper library */
    var _$;
    !(function (factory) {
      _$ = factory();
    })(function () {
      var bm = function (s) {
        if (typeof s === "string") {
          this.value = Array.prototype.slice.call(document.querySelectorAll(s));
        }
        if (typeof s === "object") {
          this.value = [s];
        }
      };
      bm.prototype = {
        eq: function (n) {
          this.value = [this.value[n]];
          return this;
        },
        each: function (fn) {
          [].forEach.call(this.value, fn);
          return this;
        },
        log: function () {
          console && console.log(this);
        },
        append: function (v) {
                  return this.each(function (i) {
                    i.insertAdjacentHTML('beforeEnd', v);
                  });
                },
        addClass: function (v) {
                  var a = v.split(" ");
                  return this.each(function (i) {
                    for (var x = 0; x < a.length; x++) {
                      if (i.classList) {
                        i.classList.add(a[x]);
                      } else {
                        i.className += " " + a[x];
                      }
                    }
                  });
                },
          removeClass: function (v) {
                   var a = v.split(' ');
                   return this.each(function (i) {
                     for (var x = 0; x < a.length; x++) {
                       if (i.classList) {
                         i.classList.remove(a[x]);
                       } else {
                         i.className = i.className.replace(
                           new RegExp('\\b' + a[x] + '\\b', 'g'),
                           ''
                         );
                       }
                     }
                   });
                 },             
         live : function(selector, event, callback, context) {
            /****Helper Functions****/
            // helper for enabling IE 8 event bindings
            function addEvent(el, type, handler) {
              if (el.attachEvent) el.attachEvent("on" + type, handler);
              else el.addEventListener(type, handler);
            }
            // matches polyfill
            this.Element &&
              (function (ElementPrototype) {
                ElementPrototype.matches =
                  ElementPrototype.matches ||
                  ElementPrototype.matchesSelector ||
                  ElementPrototype.webkitMatchesSelector ||
                  ElementPrototype.msMatchesSelector ||
                  function (selector) {
                    var node = this,
                      nodes = (
                        node.parentNode || node.document
                      ).querySelectorAll(selector),
                      i = -1;
                    while (nodes[++i] && nodes[i] != node);
                    return !!nodes[i];
                  };
              })(Element.prototype);
            // live binding helper using matchesSelector
            function live(selector, event, callback, context) {
              addEvent(context || document, event, function (e) {
                var found,
                  el = e.target || e.srcElement;
                while (
                  el &&
                  el.matches &&
                  el !== context &&
                  !(found = el.matches(selector))
                )
                  el = el.parentElement;
                if (found) callback.call(el, e);
              });
            }
            live(selector, event, callback, context);
          },        
        waitForElement: function (
          selector,
          trigger,
          delayInterval,
          delayTimeout
        ) {
          var interval = setInterval(function () {
            if (_$(selector).value.length) {
              clearInterval(interval);
              trigger();
            }
          }, delayInterval);
          setTimeout(function () {
            clearInterval(interval);
          }, delayTimeout);
        },
      };
      return function (selector) {
        return new bm(selector);
      };
    });

    var helper = _$();

    var closeIcon = ''+
    '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="fe_close_svg">'+
    '<mask id="mask0_1211_27457" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="1" y="1" width="12" height="12">'+
    '<path d="M2.49686 1.87814C2.326 1.70729 2.049 1.70729 1.87814 1.87814C1.70729 2.049 1.70729 2.326 1.87814 2.49686L6.38128 7L1.87814 11.5031C1.70729 11.674 1.70729 11.951 1.87814 12.1219C2.049 12.2927 2.326 12.2927 2.49686 12.1219L7 7.61872L11.5031 12.1219C11.674 12.2927 11.951 12.2927 12.1219 12.1219C12.2927 11.951 12.2927 11.674 12.1219 11.5031L7.61872 7L12.1219 2.49686C12.2927 2.326 12.2927 2.049 12.1219 1.87814C11.951 1.70729 11.674 1.70729 11.5031 1.87814L7 6.38128L2.49686 1.87814Z" fill="#000001"/>'+
    '</mask>'+
    '<g mask="url(#mask0_1211_27457)">'+
    '<rect width="14" height="14" fill="white"/>'+
    '</g>'+
    '</svg>';

    var fe_promotion = ''+
    '<div class="fe_promotion">'+
    '     <span class="closeIcon">'+closeIcon+'</span>'+
    '     <div class="fe_promotion_container">'+
    '           <img src="https://fe-test-dev.s3.amazonaws.com/zoom/%5BZoom%5D(Internal)%3A+%5BAB-ECOMM%5D+2023.05+-+Zoom+One+Pricing+page+-+OP+Banner/image.png">'+
    '           <p><img src="https://fe-test-dev.s3.amazonaws.com/zoom/%5BZoom%5D(Internal)%3A+%5BAB-ECOMM%5D+2023.05+-+Zoom+One+Pricing+page+-+OP+Banner/image.png">Introducing Zoom AI Companion - now available across the Zoom platform! <a class="learn-more open-share-modal">Learn more</a></p>'+
    '     </div>'+
    '</div>';

    window.optimizely = window.optimizely || [];

    /* Variation Init */
    function init() {

      if(sessionStorage.getItem('fe_promotion') != 'true'){
        _$('body').addClass('fe_scheduler_promotion');
        _$('#footer_container').append(fe_promotion);
      }

      helper.live('.closeIcon','click',function(){
        _$('body').addClass('fe_promotion_hide');
        _$('body').removeClass('fe_scheduler_promotion')
        sessionStorage.setItem('fe_promotion','true');
      })

      helper.live('.fe_promotion_container a','click',function(){
        window.optimizely.push({
          "type": "user",
          "attributes": {
            "Offer_conversions": "Yes"
          }
        });
      })

      helper.live('[action="buy now"] .buy-plan-link, .add-on-part .buy-plan-btn:not(.contactsales-btn)','click',function(){
        window.optimizely.push({
          "type": "user",
          "attributes": {
            "Conversion_for_all_users": "Yes"
          }
        });
      })

    }

    /* Initialize variation */
    helper.waitForElement("#footer_container", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
}, "dependencies": []}, {"id": "F7608C2B-1814-4566-A3EB-76CBB16D89E9", "type": "append", "selector": "head", "value": "<style>html body.fe_promotion_hide .fe_promotion{\n    display: none;\n}\n\nhtml body.fe_scheduler_promotion .fe_promotion {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    background: #0c5cff;\n    z-index: 999;\n    padding: 16px 30px; \n}\n\nhtml body.fe_scheduler_promotion .fe_promotion_container {\n    max-width: 1192px;\n    margin: auto;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 16px;\n}\n\nhtml body.fe_scheduler_promotion .fe_promotion img{\n    max-width: 24px;\n}\n\nhtml body.fe_scheduler_promotion .fe_promotion p{\n    color: #fff;\n    margin: 0;\n    flex: 1;\n    font-family: 'Almaden Sans';\n    font-size: 16px;\n    line-height: 20px;\n    font-weight: 500;\n}\n\nhtml body.fe_scheduler_promotion .fe_promotion a{\n    text-decoration: none;\n    cursor: pointer;\n    color: #00F0EA;\n    font-family: 'Almaden Sans';\n    display: inline-block;\n}\n\nhtml body.fe_scheduler_promotion .fe_promotion a:hover{\n    color: #01d8d2;\n}\n\nhtml body.fe_scheduler_promotion span.closeIcon{\n    position: absolute;\n    right: 15px;\n    top: 13px;\n    cursor: pointer;\n}\nhtml body.fe_scheduler_promotion .fe_mobile_link{\n    display: none;\n}\n\n/* chat icon */\nhtml body.fe_scheduler_promotion #ot-sdk-btn-floating.ot-floating-button{\n    bottom: 110px;\n}\nhtml body.fe_scheduler_promotion #solvvy-container .solvvy-widget-iframe,\nhtml body.fe_scheduler_promotion #solvvy-lazy-button{\n    bottom: 90px !important;\n}\n\nhtml body.fe_scheduler_promotion .fe_promotion p img{\n    display: none;\n}\n\nhtml body.fe_scheduler_promotion #footer_container{\n    padding-bottom: 70px;\n}\nhtml body.fe_scheduler_promotion .fe_close_svg path {\n    stroke: #fff; \n    stroke-width: 1.5; \n  }\n\n@media screen and (max-width: 767px){\n    html body.fe_scheduler_promotion  .fe_promotion img{\n        display: none;\n    }\n\n    html body.fe_scheduler_promotion  .fe_promotion p img{\n        display: inline-block;\n        margin-right: 10px;\n    }\n\n    html body.fe_scheduler_promotion .fe_promotion_container{\n        flex-direction: column;\n    }\n    html body.fe_scheduler_promotion .fe_promotion img{\n        max-width: 20px;\n    }\n\n    html body.fe_scheduler_promotion .fe_promotion p{\n        font-size: 14px;\n    }\n\n    html body.fe_scheduler_promotion span.closeIcon{\n        right: 9px;\n        top: 9px;\n    }\n\n    html body.fe_scheduler_promotion .fe_mobile_link{\n        display: block;\n    }\n    html body.fe_scheduler_promotion .fe_desktop_link{\n        display: none;\n    }\n}\n\n@media screen and (max-width: 488px){\n\n    html body.fe_scheduler_promotion #footer_container{\n        padding-bottom: 150px;\n    }\n}\n\n@media screen and (max-width: 375px){\n    html body.fe_scheduler_promotion .fe_promotion p{\n        padding-right: 5px;\n    }\n}\n\n@media screen and (max-width:370px){\n    html body.fe_scheduler_promotion .fe_promotion p{\n        padding-right: 5px;\n    }\n}</style>", "dependencies": []}]}]}], "weightDistributions": null, "name": null, "bucketingStrategy": null}], "policy": "equal_priority", "viewIds": ["25270510591"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "25233550788", "endOfRange": null}]], "offerConsistency": null}}, {"changes": null, "id": "25268330614", "name": null, "commitId": "25435560669", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"contentsquare": {}, "google_universal_analytics": {"universal_analytics_slot": "103", "universal_analytics_tracker": ""}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "23075300126", "23892930237"], "audienceName": null, "changes": null, "id": "25320480080", "integrationSettings": null, "variations": [{"id": "25326130036", "name": null, "actions": [{"viewId": "25306650175", "changes": [{"id": "EA7B699B-1C82-461D-A233-B4C57488FCEA", "type": "custom_code", "value": function($){// pricing page
if (window.dataModel && typeof window.dataModel.enableWbForOpc !== 'undefined' && window.dataModel.enableWbForOpc !== 'Unsupported') {
  //console.log('[Optimizely] One Page Checkout (Whiteboard): Enabled [Pricing Page]');
  window.dataModel.enableWbForOpc = true;
}

// billing page (paid account)
if (window.newBillingConfig && typeof window.newBillingConfig.enableWbForOpc !== 'undefined' && window.newBillingConfig.enableWbForOpc !== 'Unsupported') {
  //console.log('[Optimizely] One Page Checkout (Whiteboard): Enabled [Billing Page]');
  window.newBillingConfig.enableWbForOpc = true;
}
}, "dependencies": []}]}]}], "weightDistributions": null, "name": null, "bucketingStrategy": null}], "policy": "equal_priority", "viewIds": ["25306650175"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "25320480080", "endOfRange": null}]], "offerConsistency": null}}, {"changes": [{"id": "10e6f2f6b6384f1f9124fbf8af86a041", "type": "custom_code", "value": function($){const utils = window.optimizely.get('utils');
utils.waitForElement('body').then(function () {
  console.log('body is ready');
  // do something with body
  window.optimizely = window.optimizely || [];
  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest('a[href*="eventsaascore"]') || target.closest('a[href*="zecc_yearly"]')) {
      window.optimizely.push({
        type: 'user',
        attributes: {
          Click_on_pricing_events_page_buynow_cta: 'session'
        }
      });
      
    } else if (target.closest('a[href*="eventsaas"]') || target.closest('a[href*="zeca_yearly"]'))
      window.optimizely.push({
        type: 'user',
        attributes: {
         Click_on_pricing_events_page_buynow_cta: 'event'
        }
      });
    	
  });
});
}, "dependencies": []}], "id": "25300260419", "name": null, "commitId": "25852540646", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"contentsquare": {}, "google_universal_analytics": {"universal_analytics_slot": "109", "universal_analytics_tracker": ""}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "22551780691", "23626970263", "22582550118"], "audienceName": null, "changes": null, "id": "25274090907", "integrationSettings": null, "variations": [{"id": "25224451858", "name": null, "actions": []}, {"id": "25206751377", "name": null, "actions": [{"viewId": "24896290074", "changes": [{"id": "e7de65f43d2343b39e8f51db2127b1ad", "type": "custom_code", "value": function($){(()=>{var e={341:e=>{e.exports={ID:"FE-Card-Opt",VARIATION:"1",CLIENT:"zoom"}}},t={};function n(a){var s=t[a];if(void 0!==s)return s.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";function e(e,t,n,a,s,i,r){try{var o=e[i](r),l=o.value}catch(e){return void n(e)}o.done?t(l):Promise.resolve(l).then(a,s)}function t(t){return function(){var n=this,a=arguments;return new Promise((function(s,i){var r=t.apply(n,a);function o(t){e(r,s,i,o,l,"next",t)}function l(t){e(r,s,i,o,l,"throw",t)}o(void 0)}))}}var a=n(341),s=n.n(a);const i=e=>'\n    <div class="'+e+'__loader">\n    <svg class="circular" viewBox="25 25 50 50" role="button" aria-label="loading" tabindex="0">\n      <circle class="path" cx="50" cy="50" r="20" fill="none"></circle>\n    </svg>\n\n    </div>',r=function(e,t){var n,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"year",s=null==t?void 0:t.split(".")[0],i=(document.querySelector(".subtext.currency-flag"),'\n    <div aria-label="$'+s+" per "+a+'" class="'+e+'__newprice new-price">\n        <div>\n            <div>\n                <div class="price-part">\n                    <span class="subtext currency-flag" style="display:inline-block;width: max-content">'+((null===(n=window.feCardOptData)||void 0===n?void 0:n.currencySymbol)||"$")+'</span>\n                    <div class="price-num">\n                        '+s+'<span class="flag-hidden">.</span><span class="subtext">00</span>\n                    </div>\n                </div>\n                <span class="rate">/'+a+"</span>\n            </div>\n        </div>\n    </div>\n\n    ");return i};var o=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e4,a=25,s=Date.now(),i=setInterval((()=>{e.every((e=>"function"==typeof e?e():!!document.querySelector(e)))?(clearInterval(i),t()):Date.now()-s>=n&&(clearInterval(i),console.log("Polling exceeded maximum time limit",e))}),a)},l=e=>new Promise((t=>{setTimeout(t,e)})),c=(e,t)=>{var n=new CustomEvent(e,{detail:t});document.dispatchEvent(n)},d=()=>{var e=window.feCardOptData.currentPlanPrice;return{sessions:{eventtype:"sessions",value:100,targetIndex:1,price:e.subscriptionsSessions.zec_100_unlimited_yearly},events:{eventtype:"events",value:100,targetIndex:2,price:e.subscriptionsEvents.ze_100_unlimited_yearly}}};const u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"500";o(['[aria-label="'+e+' attendees"]'],(()=>{document.querySelector('[aria-label="'+e+' attendees"]').click()}))},p=()=>document.getElementById("zm-radio-group0-radio-1").checked||window.location.href.includes("no.zoom.us/")?"subscription":"payperattendee",v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,{ID:t}=s(),n=window.location.href.includes("no.zoom.us/"),a=n?{webinar:0,sessions:2,events:1}:{webinar:0,sessions:1,events:2},i=[],r=n?".webinar-plans":".webinar-plans-new",o=document.querySelectorAll(r),l=p(),c=document.querySelector(".filter-num-container .item.active .label").innerText;return o.forEach(((e,t)=>{if(0!==t||"payperattendee"!==l&&"100"!==c){var n=e.querySelector(".price-num"),a=e.querySelector(".buy-plan-link"),s=n?n.textContent:"",r=a.getAttribute("href"),o=a.getAttribute("class"),d=a.textContent;i.push({priceAnnual:s,btnUrl:r,btnText:d,btnClass:o})}else i.push({})})),i[a[e]]||i};var m=function(){var e=t((function*(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=document.querySelector('[data-eventtype="webinar"] .price-wrapper');n.style.opacity="0";var a=window.location.href.includes("no.zoom.us/"),s=500,i=document.querySelector('[for="zm-radio-group0-radio-'+(a?"1":"2")+'"]'),r=document.querySelector(".filter-num-container .item.active .label").innerText;i.click(),u(t||r),yield l(s);var o=document.querySelectorAll("."+(a?"webinar-plans":"webinar-card-bottom")+" .price-num")[e],c=document.querySelectorAll("."+(a?"webinar-plans":"webinar-card-bottom")+" a")[e],d=c?c.href:"",p=c?c.className:"",v=c?c.textContent:"",m=o?o.textContent:"";return document.getElementById("zm-radio-group0-radio-"+(a?"0":"1")).click(),u(r),yield l(s),n.style.opacity="1",{priceMonthly:m,monthBtnUrl:d,monthlyBtnText:v,monthlyBtnClass:p}}));return function(){return e.apply(this,arguments)}}();const y=m;var{ID:h}=s();var{ID:b}=s(),_=function(){var e=t((function*(e){var t=window.location.href.includes("no.zoom.us/"),{eventtype:n,value:a,targetIndex:s}=e.detail,o=document.querySelector(".price-monthly."+n);1*a!=100&&"webinar"!==n?o&&o.classList.add(b+"__hide"):o&&o.classList.remove(b+"__hide"),u(a);var c=p();yield l(500);var d=v(n),{btnUrl:m,btnClass:_,btnText:g,priceAnnual:w}=d,f=document.querySelector("."+b+'__eventcard[data-eventtype="'+n+'"]'),S=null==f?void 0:f.querySelector(".price-annual");null==S||S.classList.remove(b+"__hide"),w||S.classList.add(b+"__hide"),S.innerHTML=r(b,w);var x=f.querySelector("a");if(x.href=m,x.setAttribute("class",_),x.innerHTML=g,l(2500).then((()=>{(()=>{var e=window.location.href.includes("no.zoom.us/"),t=document.querySelector(".zm-table__header");(e?document.querySelectorAll("."+h+'__eventcard:not([data-eventtype="sessions"])'):document.querySelectorAll("."+h+"__eventcard")).forEach(((e,n)=>{var a,s,i,r=e.querySelector(".price-annual .price-num").innerText.split(".")[0],o=null===(a=e.querySelector(".price-monthly .price-num"))||void 0===a?void 0:a.innerText.split(".")[0],c=e.querySelector("a").href,d=e.querySelector("a").getAttribute("class"),u=e.querySelector("a").innerText,v="payperattendee"===p()?n+3:n+2,m=t.querySelector(".comparison-table-header-cell:nth-child("+v+")");if(m){var y=m.querySelector(".price-num"),h=m.querySelector("a"),b=()=>{""!==r.trim()&&r||""===o.trim()?""!==r.trim()&&r?m.querySelector(".rate").innerText="/year/license":m.querySelector(".rate").innerText="":m.querySelector(".rate").innerText="/month/license"};h.href=c,h.setAttribute("class",d),h.innerHTML=u,l(1e3).then((()=>{t.style.opacity=1}));var _=m.querySelector(".type-price"),g=""!==r.trim()&&r?r:o||"";return""===g.trim()||c.includes("contactsales")?(_&&(_.style.opacity=0),void(y&&(y.style.opacity=0))):!y&&_?(_.innerHTML='\n        <div class="new-price-wrapper">\n            <div aria-label="$'+(s=g)+' per year per user" class="new-price">\n            <div class="price-part">\n                <span class="subtext currency-flag">'+((null===(i=window.feCardOptData)||void 0===i?void 0:i.currencySymbol)||"$")+'</span>\n                <div class="price-num">\n                '+s+'<span class="flag-hidden">.</span><span class="subtext">00</span>\n                </div>\n            </div>\n            <span class="rate">/year/user</span>\n            </div>\n        </div>\n        ',void b()):void(y&&(y.innerHTML=g+'<span class="flag-hidden">.</span><span class="subtext">00</span>',b()))}}))})(parseInt(s))})),"payperattendee"!==c&&("webinar"===n||t)){var E=document.querySelector(".price-monthly."+n);E.classList.remove(b+"__hide"),E.innerHTML=i(b);var L="webinar"===n?0:1;console.log("it started"),f.querySelector(".card-action").style.opacity="0";var{priceMonthly:q,monthBtnUrl:T,monthlyBtnText:k,monthlyBtnClass:A}=yield y(L);console.log("it finished"),document.querySelector('[data-eventtype="webinar"] .price-wrapper').style.opacity="1",f.querySelector(".card-action").style.opacity="1",q||E.classList.add(b+"__hide"),E.innerHTML=r(b,q,"month");var z=document.querySelector('[data-eventtype="'+n+'"] a'),C=z.closest("."+b+"__eventcard");!t&&parseInt(a)<5e3||t&&parseInt(a.replace(/\,/g,""))<5e3?C.classList.remove("no-border"):(z.href=T,z.setAttribute("class",A),z.innerHTML=k,C.classList.add("no-border"))}}));return function(t){return e.apply(this,arguments)}}();const g=_;var{ID:w}=s();var f='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M12.4419 5.55806C12.686 5.80214 12.686 6.19786 12.4419 6.44194L8.44194 10.4419C8.19786 10.686 7.80214 10.686 7.55806 10.4419L3.55806 6.44194C3.31398 6.19786 3.31398 5.80214 3.55806 5.55806C3.80214 5.31398 4.19786 5.31398 4.44194 5.55806L8 9.11612L11.5581 5.55806C11.8021 5.31398 12.1979 5.31398 12.4419 5.55806Z" fill="#0B5CFF"/>\n</svg>',S='<i class="zm-icon-info-outline fe-tooltip"></i>';const x=(e,t,n)=>{var a,s,o='<div class="'+e+'__showmore" class=""><span class="text text-see">See detail</span><span class="text text-close">Close detail</span> <span class="arrow">'+f+"</span></div>",l=window.location.href.includes("no.zoom.us/"),{title:c,subtitle:d,featureHeadline:u,attendeeText:m,features:y,eventType:h}=t,b=(a=document.querySelectorAll(".filter-num-container .item:not(.notShown)"),s=[],a.forEach((e=>{var t=e.querySelector(".label").innerText;s.push(t)})),s),_=v(h),{btnUrl:g,btnClass:w,btnText:S,priceAnnual:x}=_,E=p(),L="subscription"===E&&"webinar"!==h?b.filter((e=>parseInt(e)<=5e3)):b,q="payperattendee"!==E?'<div class="price-monthly '+h+'">'+("webinar"===h?i(e):"")+"</div>":"",T="webinar"!==h||l?L:L.slice(1);return'  \n    <div class="'+e+'__eventcard" data-eventtype="'+h+'" \n      data-index="'+("webinar"===h||l?n:n+1)+'">\n    <div class="title">Zoom '+c+'</div>\n    <div class="subtitle">'+d+'</div>\n    <div class="attendee-wrapper">\n        <div class="attendee-dropdown" data-eventtype="'+h+'">\n            '+((e,t)=>'\n    <div class="'+e+'__custom-dp">\n        <div class="dp-selected dp-arrow-active">\n            <div class="dp-label">'+t[0]+'</div>\n            <div class="dp-arrow">'+f+'</div>\n        </div>\n        <div class="dp-items">\n            '+t.map(((e,n)=>'<div class="dp-item '+(0===n?"same-as-selected":"")+'" \n                        data-value="'+e+'">\n                        '+(t.length===n+1?("5000"===e?"3000":e)+(e.includes("+")?"":"+"):e)+"\n                    </div>")).join("\n")+" \n           \n        </div>\n    </div>")(e,T)+'\n            <span class="attendee-dropdown-label">Attendees</span>\n        </div>\n        <div class="attendee-promotext">'+m+'</div>\n    </div>\n    <div class="price-wrapper">\n        '+q+'\n        <div class="price-annual '+e+'__hide">'+r(e,x)+'</div>\n        \n        <div class="price-annual-loader ">'+("webinar"===h||l?"":i(e))+'</div>\n    </div>\n    <div class="card-action">\n        <a\n        type="button"\n        role="link"\n        href="'+g+'"\n        class="'+w+'"><span class="zm-button__slot">'+S+'</span>\n        </a>\n    </div>\n    <div class="'+e+'__featurelist">\n        <div class="feature-headline">'+u+"</div>\n        <ul>\n        "+y.map(((e,t)=>'<li class="'+(l&&t>4?"extra":"")+'"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">\n<path d="M11.3463 1.29941C7.60101 3.61721 5.1383 7.40091 5.1385 11.7006C5.1385 9.24491 3.5405 7.03801 1 5.51681" stroke="#0B5CFF" stroke-width="2.0157" stroke-linejoin="bevel"/>\n</svg><span>'+e+"</span></li>")).join("\n")+"\n        </ul>\n    </div>\n    "+(l?o:"")+'\n    <div class="card-footer">\n        *Zoom One licenses required\n    </div>\n    </div>'},E=(e,t)=>{var{badge:n}=t[0];return'  \n      <div class="'+e+'__eventcards" data-badge="'+n+'">\n        <div class="badge-text">'+n+'</div>\n        <div class="content">\n            '+t.map(((t,n)=>x(e,t,n))).join("\n")+"\n        </div>\n      </div>"};var L={webiner:[{title:"Webinars",subtitle:"Effortlessly broadcast messages with a user-friendly webinar platform",attendeeText:"Host unlimited webinars at the chosen capacity",featureHeadline:"",features:["Engage audience with high-quality video webcasting","Boost engagement with Q&A, polling, and reactions","Improve webinar strategy with post-event reporting","Support up to 100,000 attendees and 100 panelists"],badge:"WEBINARS",eventType:"webinar"}],events:[{title:"Sessions",subtitle:"Elevate event sessions with premium production features to drive engagement",attendeeText:"Host unlimited webinars or events at the chosen capacity",featureHeadline:"Includes Zoom Webinars, plus:",features:["Customize event landing pages for effective branding","Promote events with branded emails","Measure performance with an interactive dashboard","Seamless collaboration with co-hosts and co-editors","Professional events tools: Simulive, Backstage, and more"],badge:"EVENTS PLATFORM",eventType:"sessions"},{title:"Events",subtitle:"Host hybrid and virtual events in an all-in-one event management platform",attendeeText:"Host unlimited webinars or events at the chosen capacity",featureHeadline:"Everything in Sessions, plus:",features:["Boost audience engagement with multi-session events","Easily host events with tailored ticketing and mobile app","Increase event revenue with Expo Floor and Sponsor area","Foster attendee networking with customizable profiles ","Extend reach with on-demand viewing in Event Lobby","Accelerate event setup with curated event templates "],badge:"EVENTS PLATFORM",eventType:"events"}],goEvents:[{title:"Events",subtitle:"Host hybrid and virtual events in an all-in-one event management platform",attendeeText:"Host unlimited webinars or events at the chosen capacity",featureHeadline:"Everything in Webinar, plus:",features:['<span class="glow">NEW</span> Emphasize your marketing message with custom calls to action',"Host multi-session, multi-track, and multi-day events","Customizable registration and ticketing options",'<span class="glow">NEW</span> Easy to use, step by step event set up flow using the event dashboard',"Event hubs for organizing and showcasing your events and hosts",'<span class="glow">NEW</span> Add your own greenroom to each Webinar or Event session using Backstage so speakers and hosts can collaborate before, after and during a session',"Attendee networking with customizable audience profiles, 1:1 chat and post event networking analytics","With your purchase of Zoom Events, you will be able to schedule webinars in the webinar platform with all of the benefits that come with a Zoom Webinars license","Live stream session content to event lobby and third-party platforms","Post session recordings to Event Lobby and allow attendees to view after the event is completed","Robust event analytics including attendee engagement, registration statistics and more","Engage your attendees, sponsors or speakers with a virtual Expo Floor"],badge:"BEST VALUE",eventType:"events"}],goWebinar:[{title:"Webinars",subtitle:"Effortlessly broadcast messages with a user-friendly webinar platform",attendeeText:"Host unlimited webinars at the chosen capacity",featureHeadline:"",features:["Unlimited webinar sessions for up to 30 hours each","Brand your Zoom Webinars with a customized backsplash and control over speaker virtual backgrounds","Ability to export registrant and webinar attendee lists","Integrate with CRM and marketing automation tools","Monetize your webinar through paid registration","Ability to live stream your webinar to third-party platforms","Record your webinar to the cloud","Access to post-session reporting"],badge:"WEBINARS",eventType:"webinar"}]},{ID:q}=s(),T=function(){var e=t((function*(){var e=window.location.href.includes("no.zoom.us/"),t=document.querySelector(".webinar-card-row"),n=document.createElement("div"),{webiner:a,events:s,goEvents:i,goWebinar:o}=L,c=e?i:s,d=e?o:a;(()=>{var e=document.querySelector("."+q+"__cards-wrapper");null==e||e.remove()})(),n.classList.add(q+"__cards-wrapper"),t.classList.add(q+"__hide"),t.insertAdjacentElement("beforebegin",n),yield l(500);var u=p(),v=window.feCardOptData.currentPlanPrice,{subscriptionsWebinar:m,subscriptionsSessions:y,subscriptionsEvents:h}=v,b=e=>(e/100).toString();if(n.insertAdjacentHTML("beforeend",E(q,c)),"payperattendee"===u)return document.querySelectorAll(".attendee-promotext").forEach((e=>{e.innerText="Pay based on the number of attendees joining the event"})),void document.querySelector("."+q+'__eventcard[data-eventtype="sessions"] .feature-headline').classList.add(q+"__hide");n.insertAdjacentHTML("afterbegin",E(q,d));var _=document.querySelector(".price-monthly.webinar");if(_){_.innerHTML="";var g=b(m.webinar500_monthly);_.insertAdjacentHTML("afterbegin",r(q,g,"month"))}var w=document.querySelector(".price-monthly.sessions"),f=b(y.zec_100_unlimited_monthly);w.insertAdjacentHTML("afterbegin",r(q,f,"month"));var S=document.querySelector(".price-monthly.events"),x=b(h.ze_100_unlimited_monthly);S.insertAdjacentHTML("afterbegin",r(q,x,"month"))}));return function(){return e.apply(this,arguments)}}();const k=T;var{ID:A}=s(),z=function(){var e=t((function*(){var e=window.location.href.includes("no.zoom.us/"),t=document.querySelector("."+A+'__eventcard[data-eventtype="events"] .dp-items>div'),n=document.querySelector("."+A+'__eventcard[data-eventtype="sessions"] .dp-items>div');e||"payperattendee"===p()?(null==t||t.click(),yield l(500)):(null==n||n.click(),document.querySelectorAll(".price-wrapper").forEach((e=>{e.style.opacity=0})),c("attendee-update",d().events),c("attendee-update",d().sessions),document.querySelectorAll(".price-wrapper").forEach((e=>{e.style.opacity=1}))),o([()=>document.querySelectorAll(".price-annual").length>1],(()=>{document.querySelectorAll(".price-annual").forEach((e=>{e.classList.remove(A+"__hide"),e.nextElementSibling.classList.add(A+"__hide")}))}))}));return function(){return e.apply(this,arguments)}}();const C=z;var{ID:I}=s();const H=function(){var e=t((function*(e){var{target:t}=e,n=t.checked,a=document.querySelector("."+I+"__toggleswitch");a.style.pointerEvents="none",document.querySelector(".toggle-option-attendee").classList.toggle("active"),document.querySelector(".toggle-option-subscription").classList.toggle("active"),n?(document.getElementById("zm-radio-group0-radio-1").click(),u()):document.getElementById("zm-radio-group0-radio-0").click(),yield k(),C(),yield l(1e3),a.style.pointerEvents="auto"}));return function(t){return e.apply(this,arguments)}}();var{ID:P}=s();const B=[{feature:"Webinar Setup in Web Portal",tooltipText:"",subscription:"true",payPerAttendee:"false"},{feature:"Concurrent Events",tooltipText:"A <b>subscription</b> plan supports one live event at a time, while the <b>pay per attendee</b> plan allows concurrent live events.",subscription:"false",payPerAttendee:"true"},{feature:"Overages",tooltipText:"",subscription:"false",payPerAttendee:"true"},{feature:"Events Platform Hubs",tooltipText:"Zoom Events <b>hubs</b> offer convenient event organization, allowing hosts to group related events based on specific topics.",subscription:"1 hub per license",payPerAttendee:"1000 hubs"},{feature:"Events Platform Hosts <br/>(500 attendees or more)",tooltipText:"Zoom Events <b>hub hosts</b> can create, edit, and publish events that have been created by the hub owner.",subscription:"5 hub hosts",payPerAttendee:"100 hub hosts"},{feature:"Events Platform Hosts <br /> (100 attendees)",tooltipText:"Zoom Events <b>hub hosts</b> can create, edit, and publish events that have been created by the hub owner.",subscription:"2 hub hosts",payPerAttendee:"100 hub hosts"}],M=e=>{window.optimizely=window.optimizely||[],window.optimizely.push({type:"event",eventName:"20917322331_"+e})},O=()=>{var e,t=("_zm_currency",2===(e=("; "+document.cookie).split("; _zm_currency=")).length?e.pop().split(";").shift():null),n=document.getElementById("currency_symbol"),a=null==n?void 0:n.value;return console.log(t,a),{currency:t,currencySymbol:a}},j=function(){var e=t((function*(){var e=yield fetch("/pricing/planPrice.json"),t=yield e.json(),{result:n}=t,{currency:a}=O(),s=n[a],i=[{name:"webinar",startingString:"webinar"},{name:"sessions",startingString:"zec_"},{name:"events",startingString:"ze_"}].map((e=>{var{startingString:t}=e;return Object.fromEntries(Object.entries(s).filter((e=>{var[n]=e;return n.startsWith(t)&&/\d/.test(n)})))}));return{subscriptionsWebinar:i[0],subscriptionsSessions:i[1],subscriptionsEvents:i[2],attendeeSessions:s.zecc_yearly,attendeeEvents:s.zeca_yearly}}));return function(){return e.apply(this,arguments)}}();var{ID:W,VARIATION:D}=s(),Z=window.location.href.includes("no.zoom.us/"),N=function(){var e=t((function*(){var e,t,n;console.time("Execution Time Inner"),Z&&document.body.classList.add("zm-go"),t=document.querySelector(".attendees-container"),(n=document.querySelector(".select-container_left")).classList.add(P+"__hide"),t.classList.add(P+"__hide"),u(),document.querySelector("."+P+"__togglecontainer")||(n.insertAdjacentHTML("beforebegin",'\n    <div class="'+(e=P)+'__header">\n        '+(e=>'\n    <div class="'+e+'__togglecontainer">\n        <div class="toggle-option-attendee">Pay Per Attendee</div>\n        <div class="'+e+'__toggleswitch">\n            <label class="switch"><input type="checkbox" checked="checked"/>\n            <div class="toggle-helper"></div>\n            </label>\n        </div>\n        <div class="toggle-option-subscription active">Subscription</div>\n    </div>')(e)+'\n        <span class="modal-opener">How are they different?</span>\n    </div>'),document.querySelector("."+P+"__header").addEventListener("change",H)),document.body.insertAdjacentHTML("afterbegin",((e,t)=>{var n=e=>"true"===e||"false"===e?{true:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">\n<g clip-path="url(#clip0_636_279068)">\n  <mask\n    id="mask0_636_279068"\n    style="mask-type: alpha"\n    maskUnits="userSpaceOnUse"\n    x="0"\n    y="1"\n    width="16"\n    height="14">\n    <path\n      fill-rule="evenodd"\n      clip-rule="evenodd"\n      d="M15.6294 2.0147C16.0947 2.4412 16.1261 3.16414 15.6996 3.62941L6.27104 13.9151C6.05457 14.1513 5.74893 14.2857 5.42858 14.2857C5.10823 14.2857 4.80258 14.1513 4.58612 13.9151L0.300402 9.2398C-0.126104 8.77453 -0.0946717 8.05159 0.370607 7.62509C0.835886 7.19858 1.55882 7.23001 1.98533 7.69529L5.42858 11.4516L14.0147 2.0849C14.4412 1.61962 15.1641 1.58819 15.6294 2.0147Z"\n      fill="black"\n    />\n  </mask>\n  <g mask="url(#mask0_636_279068)">\n    <rect width="16" height="16" fill="#0B5CFF" />\n  </g>\n</g>\n<defs>\n  <clipPath id="clip0_636_279068">\n    <rect width="16" height="16" fill="white" />\n  </clipPath>\n</defs>\n</svg>',false:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="1" viewBox="0 0 16 1" fill="none">\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.5C0 0.223858 0.223858 0 0.5 0H15.5C15.7761 0 16 0.223858 16 0.5C16 0.776142 15.7761 1 15.5 1H0.5C0.223858 1 0 0.776142 0 0.5Z" fill="#666487"/>\n  </svg>'}[e]:e,a=t=>'<span class="'+e+'__tooltip">\n      '+(t&&S)+"<span>"+t+"</span>\n    </span>";return'\n    <div class="'+e+"__modal "+e+'__hide">\n        <div class="'+e+'__comparisontable">\n        <div class="'+e+'__comparisontable-close"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">\n<mask id="mask0_636_279164" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">\n<path d="M0.853553 0.146447C0.658291 -0.0488155 0.341709 -0.0488155 0.146447 0.146447C-0.0488155 0.341709 -0.0488155 0.658291 0.146447 0.853553L7.29289 8L0.146447 15.1464C-0.0488155 15.3417 -0.0488155 15.6583 0.146447 15.8536C0.341709 16.0488 0.658291 16.0488 0.853553 15.8536L8 8.70711L15.1464 15.8536C15.3417 16.0488 15.6583 16.0488 15.8536 15.8536C16.0488 15.6583 16.0488 15.3417 15.8536 15.1464L8.70711 8L15.8536 0.853553C16.0488 0.658291 16.0488 0.341709 15.8536 0.146447C15.6583 -0.0488155 15.3417 -0.0488155 15.1464 0.146447L8 7.29289L0.853553 0.146447Z" fill="#000001"/>\n</mask>\n<g mask="url(#mask0_636_279164)">\n<rect width="16" height="16" fill="#131619"/>\n</g>\n</svg></div>\n        <div class="'+e+'__comparisontable-title">How are they different?</div>\n        <div class="'+e+'__comparisontable-header comparison-row">\n            <div class="'+e+'__comparisontable-header-col1">*All plans require a <br /> Zoom One license</div>\n            <div class="'+e+'__comparisontable-header-col2"><span>Subscription</span>&nbsp;'+a("A <b>subscription</b> allows you to host an unlimited amount of events at your chosen capacity.")+'</div>\n            <div class="'+e+'__comparisontable-header-col3"><span>Pay Per Attendee</span>&nbsp;'+a("The <b>pay per attendee</b> license determines how many total attendees can attend all of your account’s events held within a 12-month period from purchase.")+'</div>\n        </div>\n        <div class="'+e+'__comparisontable-body">\n            '+t.map((t=>(t=>{var{feature:a,tooltipText:s,subscription:i,payPerAttendee:r}=t;return'<div class="comparison-row">\n        <div class="comparison-row__col1" data-tooltip="'+s+'">\n            <span>'+a+'</span>\n            <span class="'+e+'__tooltip">\n                '+(s&&S)+"<span>"+s+'</span>\n            </span>\n        </div>\n        <div class="comparison-row__col2">'+n(i)+'</div>\n        <div class="comparison-row__col3">'+n(r)+"</div>\n    </div>"})(t))).join("\n")+"\n        </div>\n        </div>\n    </div>"})(W,B)),yield k(),C(),o([".zm-table__header"],(()=>{var e=document.querySelector(".zm-table__header");e&&(e.style.opacity=0)}))}));return function(){return e.apply(this,arguments)}}();const F=()=>{(()=>{var{ID:e,VARIATION:t}=s();document.documentElement.classList.add(e),document.documentElement.classList.add(e+"-"+t)})(),document.body.addEventListener("click",(e=>{var{target:t}=e;(e=>{var t,n,a=e.closest(".dp-selected"),s=e.closest(".dp-items"),i=null===(t=e.closest("."+w+"__eventcard"))||void 0===t||null===(n=t.dataset)||void 0===n?void 0:n.index;if(a||s){if(e.closest(".dp-selected"))e.closest(".dp-selected").nextElementSibling.classList.toggle("active");else if(e.closest(".dp-item")){var r=e.closest(".attendee-dropdown"),o=e.closest(".dp-items"),l=r.querySelector(".dp-label"),{eventtype:d}=r.dataset,{value:u}=e.dataset,v=p();document.querySelector("."+w+"__toggleswitch input").checked&&(console.log("here"),document.getElementById("zm-radio-group0-radio-1").click()),"webinar"===d&&(document.querySelector('[data-eventtype="webinar"] .price-wrapper').style.opacity="0"),o.querySelectorAll(".dp-item").forEach((e=>e.classList.remove("same-as-selected"))),e.classList.add("same-as-selected"),o.classList.remove("active"),l.innerText=parseInt(u)>=5e3&&"subscription"===v&&"webinar"!==d?"3000+":u,c("attendee-update",{eventtype:d,value:u,targetIndex:i})}}else document.querySelectorAll(".dp-items").forEach((e=>e.classList.remove("active")))})(t),(e=>{var{ID:t}=s(),n=document.querySelector("."+t+"__modal");e.closest(".modal-opener")?n.classList.remove(t+"__hide"):(e.closest("."+t+"__comparisontable-close")||e.closest("."+t+"__modal")&&!e.closest("."+t+"__comparisontable"))&&n.classList.add(t+"__hide")})(t),(e=>{if(e.closest('[data-eventtype="webinar"]')&&e.closest(".buy-plan-link"))M("click_pricing_events_page__annual_bill__webinar__buy"),M("click_pricing_events_page__zoom_webinars_buy_now_cta");else if(e.closest('[data-eventtype="sessions"]')&&e.closest(".buy-plan-link")){var t,n=null===(t=e.href)||void 0===t?void 0:t.includes("attendee");M("click_pricing_events_page__zoom_sessions_buy_now_cta"),!n&&M("click_pricing_events_page__annual_bill__session__buy"),n&&M("click_pricing_events_page__pay_per_attendee__zoom_se")}else if(e.closest('[data-eventtype="events"]')&&e.closest(".buy-plan-link")){var a,s=null===(a=e.href)||void 0===a?void 0:a.includes("attendee");M("click_pricing_events_page__zoom_events_buy_now_cta"),!s&&M("click_pricing_events_page__annual_bill__zoom_events_"),s&&M("click_pricing_events_page__pay_per_attendee__zoom_ev")}})(t),Z&&t.closest("."+W+"__showmore")&&(t.closest("."+W+"__showmore").classList.toggle("active"),t.closest(".content").querySelectorAll("li.extra").forEach((e=>e.classList.toggle("active"))))})),document.body.addEventListener("pointerup",(e=>{var{target:t}=e;if(t.closest(".zm-dropdown-menu__item")){var n=document.querySelector(".filter-num-container .item span").textContent;u(n),setTimeout((()=>{N()}),500)}})),document.addEventListener("attendee-update",g),"control"!==D&&j().then((e=>{var{currencySymbol:t}=O(),n=e;window.feCardOptData={currentPlanPrice:n,currencySymbol:t},N()}))};"/pricing/events"===window.location.pathname&&([".attendees-container",".select-container_left",".webinar-card-row"].forEach((e=>{var t=document.querySelector(e);t&&(t.style.opacity=0)})),o(["#new-pricing-content",".attendees-container",".subtext.currency-flag"],F))})()})();
}, "dependencies": []}, {"id": "660af823017a49b9af2aafbb5834df58", "type": "append", "selector": "head", "value": "<style>.FE-Card-Opt .zm-table__header{opacity:0}.FE-Card-Opt body.zm-go .FE-Card-Opt__header,.FE-Card-Opt body.zm-go [data-eventtype=sessions]{display:none}.FE-Card-Opt body.zm-go .select-wrapper{margin-left:auto}.FE-Card-Opt body.zm-go .FE-Card-Opt__cards-wrapper{-webkit-box-align:start!important;-ms-flex-align:start!important;align-items:flex-start!important}.FE-Card-Opt body.zm-go .FE-Card-Opt__cards-wrapper>div:last-child{margin-left:0;margin-right:0}.FE-Card-Opt body.zm-go [data-badge=\"BEST VALUE\"]{max-width:450px}.FE-Card-Opt body.zm-go [data-badge=\"BEST VALUE\"] .price-monthly.events{border-right:1px solid #e0e0e6;margin-right:16px;padding-right:16px}.FE-Card-Opt body.zm-go .glow{background:#ededf4;border-radius:4px;color:#0e72ed;font-size:14px;font-weight:900;letter-spacing:.25px;line-height:14px;margin-left:0;padding:3px;text-transform:uppercase}.FE-Card-Opt body.zm-go .FE-Card-Opt__showmore{-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#00053d!important;cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:14px;line-height:150%;margin-bottom:auto;padding:9px 29px;position:relative;white-space:normal;width:-webkit-max-content;width:-moz-max-content;width:max-content}.FE-Card-Opt body.zm-go .FE-Card-Opt__showmore .text{margin-right:20px}.FE-Card-Opt body.zm-go .FE-Card-Opt__showmore:hover .text{text-decoration:underline}.FE-Card-Opt body.zm-go .FE-Card-Opt__showmore .text-see{display:block}.FE-Card-Opt body.zm-go .FE-Card-Opt__showmore .text-close{display:none}.FE-Card-Opt body.zm-go .FE-Card-Opt__showmore .arrow{display:-webkit-box;display:-ms-flexbox;display:flex}.FE-Card-Opt body.zm-go .FE-Card-Opt__showmore.active .text-see{display:none}.FE-Card-Opt body.zm-go .FE-Card-Opt__showmore.active .text-close{display:block}.FE-Card-Opt body.zm-go .FE-Card-Opt__showmore.active .arrow{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.FE-Card-Opt body.zm-go li.extra{display:none}.FE-Card-Opt body.zm-go li.extra.active{display:-webkit-box;display:-ms-flexbox;display:flex}.FE-Card-Opt__hide{display:none!important}.FE-Card-Opt__header{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex}.FE-Card-Opt__header .modal-opener{color:#0b5cff;cursor:pointer;font-size:14px;font-weight:600;line-height:1.3}.FE-Card-Opt__togglecontainer{margin-right:20px}.FE-Card-Opt__togglecontainer,.FE-Card-Opt__togglecontainer .switch{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex}.FE-Card-Opt__togglecontainer .switch{background:#e0e0e6;border-radius:1em;height:20px;margin-bottom:0;width:50px}.FE-Card-Opt__togglecontainer .toggle-helper{background:#0b5cff;border-radius:50%;height:24px;-webkit-transition:all .3s ease-out;transition:all .3s ease-out;width:24px}.FE-Card-Opt__togglecontainer input{opacity:0;position:absolute}.FE-Card-Opt__togglecontainer input:checked+div{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.FE-Card-Opt__togglecontainer .toggle-option-attendee{color:#666487;font-size:16px;font-weight:600;line-height:24px;margin-right:10px}.FE-Card-Opt__togglecontainer .toggle-option-attendee.active{color:#00031f}.FE-Card-Opt__togglecontainer .toggle-option-subscription{color:#666487;font-size:16px;font-weight:600;line-height:24px;margin-left:10px}.FE-Card-Opt__togglecontainer .toggle-option-subscription.active{color:#00053d}.FE-Card-Opt__cards-wrapper{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:center;margin-bottom:64px}.FE-Card-Opt__cards-wrapper>div:first-child{margin-right:16px}.FE-Card-Opt__cards-wrapper>div:last-child{margin-left:auto;margin-right:auto}.FE-Card-Opt__eventcards{max-width:950px;width:auto}.FE-Card-Opt__eventcards .badge-text{background-color:#0b5cff;border-radius:20px 20px 0 0;color:#fff;font-size:12px;font-weight:600;line-height:18px;padding:3px 10px;text-align:center}.FE-Card-Opt__eventcards[data-badge=WEBINARS]{max-width:435px}.FE-Card-Opt__eventcards[data-badge=WEBINARS] .badge-text{background-color:#274d83}.FE-Card-Opt__eventcards .content{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;border-radius:0 0 20px 20px;-webkit-box-shadow:0 1px 16px 0 rgba(0,0,0,.122);box-shadow:0 1px 16px 0 rgba(0,0,0,.122);display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:center}.FE-Card-Opt__eventcard{-webkit-box-orient:vertical;-webkit-box-direction:normal;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%;min-height:610px;padding:16px 20px 20px;width:100%}.FE-Card-Opt__eventcard[data-eventtype=webinar].no-border .price-wrapper .price-monthly.webinar{border-right:none}.FE-Card-Opt__eventcard[data-eventtype=sessions]{position:relative}.FE-Card-Opt__eventcard[data-eventtype=sessions]:after{background-color:#e0e0e6;content:\"\";height:calc(100% - 20px);position:absolute;right:0;top:0;width:1px}.FE-Card-Opt__eventcard[data-eventtype=sessions].no-border .price-wrapper .price-monthly.sessions{border-right:none}.FE-Card-Opt__eventcard[data-eventtype=events]{position:relative}.FE-Card-Opt__eventcard[data-eventtype=events]:after{background-color:#e0e0e6;content:\"\";height:calc(100% - 20px);position:absolute;right:0;top:0;width:1px}.FE-Card-Opt__eventcard[data-eventtype=events].no-border .price-wrapper .price-monthly.events{border-right:none}.FE-Card-Opt__eventcard .title{color:#0b5cff;font-size:22px;font-weight:700;line-height:33px;text-align:left}.FE-Card-Opt__eventcard .subtitle{color:#00031f;font-size:14px;font-weight:600;letter-spacing:0;line-height:21px;margin-bottom:16px;text-align:left;width:calc(100% - 30px)}.FE-Card-Opt__eventcard .attendee-dropdown{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;margin-bottom:10px}.FE-Card-Opt__eventcard .attendee-dropdown-label{color:#00053d;font-size:14px;font-weight:500;line-height:17px;margin-left:8px;text-align:left}.FE-Card-Opt__eventcard .attendee-promotext{color:#666487;font-size:12px;font-weight:450;line-height:14px;text-align:left}.FE-Card-Opt__eventcard .price-wrapper{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;margin:10px 0}.FE-Card-Opt__eventcard .price-wrapper .opacity-0{opacity:0}.FE-Card-Opt__eventcard .price-wrapper .price-monthly.events,.FE-Card-Opt__eventcard .price-wrapper .price-monthly.sessions,.FE-Card-Opt__eventcard .price-wrapper .price-monthly.webinar{border-right:1px solid #e0e0e6;margin-right:16px;padding-right:16px;position:relative}.FE-Card-Opt__eventcard .price-wrapper .price-part{margin:0}.FE-Card-Opt__eventcard .price-wrapper .rate{color:#00053d;font-family:Almaden Sans;font-size:12px;font-weight:450;letter-spacing:0;line-height:14px;text-align:left}.FE-Card-Opt__eventcard .price-wrapper .price-num,.FE-Card-Opt__eventcard .price-wrapper .subtext.currency-flag{font-weight:600}.FE-Card-Opt__eventcard .price-wrapper .price-num{font-size:32px;line-height:1.2}.FE-Card-Opt__eventcard .price-wrapper .price-num .subtext{margin-top:2px}.FE-Card-Opt__eventcard .price-wrapper .subtext.currency-flag{color:#00031f;margin-top:2px;width:4px}.FE-Card-Opt__eventcard .FE-Card-Opt__featurelist{margin:25px 0 auto}.FE-Card-Opt__eventcard .FE-Card-Opt__featurelist .feature-headline{font-weight:700;line-height:21px;margin-bottom:8px;text-align:left}.FE-Card-Opt__eventcard .FE-Card-Opt__featurelist ul{padding-left:0}.FE-Card-Opt__eventcard .FE-Card-Opt__featurelist li{color:#00053d;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:14px;font-weight:400;letter-spacing:0;line-height:21px;list-style:none;margin-bottom:6px;text-align:left}.FE-Card-Opt__eventcard .FE-Card-Opt__featurelist li span{margin-left:8px;width:calc(100% - 24px)}.FE-Card-Opt__eventcard .FE-Card-Opt__featurelist li svg{margin-top:4px;width:24px}.FE-Card-Opt__eventcard .card-footer{color:#666487;font-size:14px;font-weight:450;letter-spacing:.01em;line-height:17px;text-align:left}.FE-Card-Opt__custom-dp{max-width:130px;position:relative;width:100%}.FE-Card-Opt__custom-dp .dp-selected{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:justify;-ms-flex-pack:justify;align-items:center;border:1px solid #b8b8c4;border-radius:10px;color:#0b5cff;cursor:pointer;font-size:18px;font-weight:700;justify-content:space-between;letter-spacing:0;line-height:27px;padding:7px 12px;text-align:left}.FE-Card-Opt__custom-dp .dp-selected,.FE-Card-Opt__custom-dp .dp-selected .dp-arrow{display:-webkit-box;display:-ms-flexbox;display:flex}.FE-Card-Opt__custom-dp .dp-items{background-color:#fff;border:1px solid #dfe3e8;border-radius:10px;-webkit-box-shadow:0 2px 12px 0 rgba(35,35,51,.5);box-shadow:0 2px 12px 0 rgba(35,35,51,.5);height:-webkit-max-content;height:-moz-max-content;height:max-content;left:0;opacity:0;overflow-y:auto;padding:4px;position:absolute;top:46px;-webkit-transition:opacity .3s ease-in-out,visibility .3s ease-in-out;transition:opacity .3s ease-in-out,visibility .3s ease-in-out;visibility:hidden;width:100%;z-index:10}.FE-Card-Opt__custom-dp .dp-items.active{opacity:1;visibility:visible}.FE-Card-Opt__custom-dp .dp-items>div{cursor:pointer;padding:6px 8px}.FE-Card-Opt__custom-dp .dp-items>div:hover{background-color:#f1f4f6;color:#131619}.FE-Card-Opt__custom-dp .dp-items>div.same-as-selected{background-color:#0e72ed;border-radius:10px;color:#fff;font-size:14px;font-weight:400;letter-spacing:0;line-height:20px;text-align:left}.FE-Card-Opt__loader .circular{-webkit-animation:loading-rotate 2s linear infinite;animation:loading-rotate 2s linear infinite;width:32px}.FE-Card-Opt__loader .path{stroke-dasharray:90,150;stroke-dashoffset:0;stroke-width:2;stroke:#0e71eb;stroke-linecap:round;-webkit-animation:loading-dash 1.5s ease-in-out infinite;animation:loading-dash 1.5s ease-in-out infinite}@-webkit-keyframes loading-rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loading-rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes loading-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-40px}to{stroke-dasharray:90,150;stroke-dashoffset:-120px}}@keyframes loading-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-40px}to{stroke-dasharray:90,150;stroke-dashoffset:-120px}}.FE-Card-Opt__modal{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:rgba(0,0,0,.5);display:-webkit-box;display:-ms-flexbox;display:flex;height:100%;left:0;overflow:auto;position:fixed;top:0;width:100%;z-index:2000}.FE-Card-Opt__comparisontable{-webkit-animation:fade-in-top .3s cubic-bezier(.39,.575,.565,1) both;animation:fade-in-top .3s cubic-bezier(.39,.575,.565,1) both;background-color:#fff;border:1px solid #babacc;border-radius:12px;-webkit-box-shadow:0 8px 24px 0 rgba(35,35,51,.102);box-shadow:0 8px 24px 0 rgba(35,35,51,.102);margin:20px auto 0;max-width:900px;padding:46px 46px 32px;position:relative;width:100%}@media screen and (max-width:1380px){.FE-Card-Opt__comparisontable{margin:32px auto 0}}.FE-Card-Opt__comparisontable-close{cursor:pointer;position:absolute;right:14px;top:14px}.FE-Card-Opt__comparisontable .comparison-row{-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#00053d;display:grid;font-size:16px;font-weight:450;grid-template-columns:repeat(3,1fr);letter-spacing:0;line-height:24px;padding:20px 40px;text-align:center}.FE-Card-Opt__comparisontable .comparison-row>div:first-child{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;display:-webkit-box;display:-ms-flexbox;display:flex;text-align:left}.FE-Card-Opt__comparisontable .comparison-row>div:first-child span{margin-right:4px}.FE-Card-Opt__comparisontable [data-tooltip] i{color:#4f90ee;cursor:pointer}.FE-Card-Opt__comparisontable-title{color:#00031f;font-family:Happy Display;font-size:32px;font-weight:600;letter-spacing:0;line-height:38px;padding-bottom:36px;text-align:center}.FE-Card-Opt__comparisontable-header{border-bottom:1px solid #e0e0e6;margin-bottom:10px}.FE-Card-Opt__comparisontable-header-col1{color:#666487;font-size:14px;font-weight:450;line-height:17px;text-align:left}.FE-Card-Opt__comparisontable-header-col2,.FE-Card-Opt__comparisontable-header-col3{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;font-family:Happy Display;font-weight:600;justify-content:center}.FE-Card-Opt__comparisontable-body>.comparison-row:nth-last-child(2) [data-tooltip*=\"Zoom Events <b>hub hosts</b> can create\"] span.FE-Card-Opt__tooltip{-webkit-transform:translateX(-15px);transform:translateX(-15px)}.FE-Card-Opt__comparisontable-body>div:nth-child(2n){background-color:#f7f7f8}.FE-Card-Opt__tooltip{position:relative}.FE-Card-Opt__tooltip:after{background-color:transparent;content:\"\";height:14px;left:50%;position:absolute;top:0;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:100%}.FE-Card-Opt__tooltip:hover>span{-webkit-animation:fade-in .5s cubic-bezier(.39,.575,.565,1) both;animation:fade-in .5s cubic-bezier(.39,.575,.565,1) both;display:block}.FE-Card-Opt__tooltip i{color:#0b5cff}.FE-Card-Opt__tooltip span{background-color:#fff;border:1px solid rgba(35,35,51,.039);border-radius:12px;-webkit-box-shadow:0 2px 12px 0 rgba(35,35,51,.5);box-shadow:0 2px 12px 0 rgba(35,35,51,.5);color:#666487;display:none;font-size:14px;font-weight:450;height:auto;left:50%;line-height:21px;max-width:250px;padding:12px;position:absolute;text-align:left;top:-14px;-webkit-transform:translate(-50%,-100%);transform:translate(-50%,-100%);width:-webkit-max-content;width:-moz-max-content;width:max-content}.FE-Card-Opt__tooltip span b{font-weight:700}.FE-Card-Opt__tooltip span.active{display:block}.FE-Card-Opt__tooltip span:before{border-left:16px solid transparent;border-right:16px solid transparent;border-top:16px solid #fff;content:\"\";height:0;left:50%;position:absolute;top:100%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:0}@-webkit-keyframes fade-in-top{0%{opacity:0;-webkit-transform:translateY(-50px);transform:translateY(-50px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes fade-in-top{0%{opacity:0;-webkit-transform:translateY(-50px);transform:translateY(-50px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}</style>", "dependencies": []}]}]}], "weightDistributions": [{"entityId": "25206751377", "endOfRange": 10000}], "name": null, "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["24896290074"], "weightDistributions": null, "decisionMetadata": null}, {"changes": null, "id": "25319950019", "name": null, "commitId": "25508170010", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"contentsquare": {}, "google_universal_analytics": {"universal_analytics_slot": "103", "universal_analytics_tracker": ""}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "23075300126", "23892930237"], "audienceName": null, "changes": null, "id": "25247951775", "integrationSettings": null, "variations": [{"id": "25347180063", "name": null, "actions": [{"viewId": "25303620967", "changes": [{"id": "F4E0D219-045D-41AA-B011-93AEE1ADB9E7", "type": "custom_code", "value": function($){// pricing page
if (window.dataModel && typeof window.dataModel.enableZrForOpc !== 'undefined' && window.dataModel.enableZrForOpc !== 'Unsupported') {
  //console.log('[Optimizely] One Page Checkout (Rooms): Enabled [Pricing Page]');
  window.dataModel.enableZrForOpc = true;
}

// billing page (paid account)
if (window.newBillingConfig && typeof window.newBillingConfig.enableZrForOpc !== 'undefined' && window.newBillingConfig.enableZrForOpc !== 'Unsupported') {
  //console.log('[Optimizely] One Page Checkout (Rooms): Enabled [Billing Page]');
  window.newBillingConfig.enableZrForOpc = true;
}
}, "dependencies": []}]}]}], "weightDistributions": null, "name": null, "bucketingStrategy": null}], "policy": "equal_priority", "viewIds": ["25303620967"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "25247951775", "endOfRange": null}]], "offerConsistency": null}}, {"changes": null, "id": "25326960835", "name": null, "commitId": "25791111015", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"contentsquare": {}, "google_universal_analytics": {"universal_analytics_slot": "103", "universal_analytics_tracker": ""}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "23075300126", "25540610666"], "audienceName": null, "changes": null, "id": "25249051056", "integrationSettings": null, "variations": [{"id": "25243391121", "name": null, "actions": [{"viewId": "25295741054", "changes": [{"id": "752A0BE0-799D-4210-B670-A2079E9382FE", "type": "custom_code", "value": function($){if (window.newBillingConfig) {
  //console.log('[Optimizely] Addons Expansion: Control A');
  window.newBillingConfig.opcAddonExpansionTest = 'A';
}
}, "dependencies": []}]}]}, {"id": "25240861258", "name": null, "actions": [{"viewId": "25295741054", "changes": [{"id": "9EF104A3-A988-4EEF-BBB2-80B6B02B8465", "type": "custom_code", "value": function($){if (window.newBillingConfig) {
  //console.log('[Optimizely] Addons Expansion: B');
  window.newBillingConfig.opcAddonExpansionTest = 'B';
}
}, "dependencies": []}]}]}, {"id": "25337130166", "name": null, "actions": [{"viewId": "25295741054", "changes": [{"id": "6EC56166-DB8A-44A4-AD25-C1990FCEDE29", "type": "custom_code", "value": function($){if (window.newBillingConfig) {
  //console.log('[Optimizely] Addons Expansion: C');
  window.newBillingConfig.opcAddonExpansionTest = 'C';
}
}, "dependencies": []}]}]}], "weightDistributions": [{"entityId": "25243391121", "endOfRange": 3334}, {"entityId": "25240861258", "endOfRange": 6667}, {"entityId": "25337130166", "endOfRange": 10000}], "name": null, "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["25295741054"], "weightDistributions": null, "decisionMetadata": null}, {"changes": null, "id": "25415570141", "name": null, "commitId": "25447560087", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": null, "changes": null, "id": "25439290150", "integrationSettings": null, "variations": [{"id": "25435970193", "name": null, "actions": []}, {"id": "25416580124", "name": null, "actions": [{"viewId": "25422200224", "changes": [{"id": "5392F687-972B-4EA2-92DC-17E27D51BC9A", "type": "custom_code", "value": function($){// pricing page
if (window.dataModel) {
  //console.log('[Optimizely] Disable Zoom Clips UI: Enabled [Pricing Page]');
  window.dataModel.disabledClips = true;
}

// OPC
if (window.newBillingConfig) {
  //console.log('[Optimizely] Disable Zoom Clips UI: Enabled [Checkout Page]');
  window.newBillingConfig.disabledClips = true;
}

// Home Destination
if (window.homeDestinationConfig) {
  //console.log('[Optimizely] Disable Zoom Clips UI: Enabled [Home Destination Page]');
  window.homeDestinationConfig.disabledClips = true;
}
}, "dependencies": []}]}]}], "weightDistributions": [{"entityId": "25416580124", "endOfRange": 10000}], "name": null, "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["25422200224"], "weightDistributions": null, "decisionMetadata": null}, {"changes": null, "id": "25519870025", "name": null, "commitId": "25455930586", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"contentsquare": {}, "google_universal_analytics": {"universal_analytics_slot": "77", "universal_analytics_tracker": ""}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "21591231112"], "audienceName": null, "changes": null, "id": "25499030219", "integrationSettings": null, "variations": [{"id": "25493320217", "name": null, "actions": []}, {"id": "25468670300", "name": null, "actions": [{"viewId": "25437370827", "changes": [{"css": {}, "dependencies": [], "attributes": {"html": "See Pricing"}, "type": "attribute", "id": "DF6F7B6E-0C03-4158-A9D3-BF3A6FE76F12", "selector": ".swiper-slide-visible .blue-bg-link"}, {"css": {}, "dependencies": [], "attributes": {"html": "See Pricing"}, "type": "attribute", "id": "63EA358C-ABC8-4D39-ADB2-32795E73EE19", "selector": "#navbar-left .top-pricing-new"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "0799580B-5928-4A82-B5E3-622AAC5286E9", "selector": "#navbar-left #btnNewProducts"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "C05618A8-0503-406A-B5D7-305C27482A31", "selector": "#navbar-left #btnNewSolutions"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "737AB743-B22F-43F2-8E92-E79B9CDA2C06", "selector": "#navbar-left #btnNewResources"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "4EAADF13-D3B0-4765-9BB3-55F562014502", "selector": "a.hidden-xs"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "A0DB0A95-DD24-4B51-8AC6-12CA2B6E0294", "selector": ".nonMobileView .signup-new"}]}]}, {"id": "25498990267", "name": null, "actions": [{"viewId": "25437370827", "changes": [{"css": {}, "dependencies": [], "attributes": {"html": "Explore Plans"}, "type": "attribute", "id": "991CD676-A3D0-49A2-BDE5-F0DEF3C4E8FF", "selector": "#navbar-left .top-pricing-new"}, {"css": {}, "dependencies": [], "attributes": {"html": "Explore Plans"}, "type": "attribute", "id": "6CBD24BD-B5D5-47C9-AC15-993D9D33ABD5", "selector": ".swiper-slide-visible .blue-bg-link"}]}]}, {"id": "25487060491", "name": null, "actions": [{"viewId": "25437370827", "changes": [{"css": {}, "dependencies": [], "attributes": {"html": "Explore Products"}, "type": "attribute", "id": "F8264CBD-619E-4E21-B051-3A9372F4AA6A", "selector": "#navbar-left .top-pricing-new"}, {"css": {}, "dependencies": [], "attributes": {"html": "Explore Products"}, "type": "attribute", "id": "BA71EDCC-D3B8-4EE0-BB16-AFC2FE5C06B0", "selector": ".swiper-slide-visible .blue-bg-link"}]}]}, {"id": "25515720048", "name": null, "actions": [{"viewId": "25437370827", "changes": [{"css": {}, "dependencies": [], "attributes": {"html": "Buy Now"}, "type": "attribute", "id": "2497837B-1FCA-4546-ACF3-1A3828027556", "selector": "#navbar-left .top-pricing-new"}, {"css": {}, "dependencies": [], "attributes": {"html": "Buy Now"}, "type": "attribute", "id": "BDE6FE79-C09F-435A-A275-AFF2EADE53C1", "selector": ".swiper-slide-visible .blue-bg-link"}]}]}, {"id": "25468170439", "name": null, "actions": [{"viewId": "25437370827", "changes": [{"css": {}, "dependencies": [], "attributes": {"html": "Build a Package"}, "type": "attribute", "id": "E618B878-C738-4F04-B4F2-052E3132E544", "selector": "#navbar-left .top-pricing-new"}, {"css": {}, "dependencies": [], "attributes": {"html": "Build a Package"}, "type": "attribute", "id": "1CD06E86-B741-4129-A53C-B5E258F0821A", "selector": ".swiper-slide-visible .blue-bg-link"}]}]}], "weightDistributions": [{"entityId": "25493320217", "endOfRange": 1667}, {"entityId": "25468670300", "endOfRange": 3334}, {"entityId": "25498990267", "endOfRange": 5001}, {"entityId": "25487060491", "endOfRange": 6668}, {"entityId": "25515720048", "endOfRange": 8335}, {"entityId": "25468170439", "endOfRange": 10000}], "name": null, "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["25437370827"], "weightDistributions": null, "decisionMetadata": null}, {"changes": null, "id": "25590880537", "name": null, "commitId": "25615780333", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"contentsquare": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["23075300126"], "audienceName": null, "changes": null, "id": "25568260526", "integrationSettings": null, "variations": [{"id": "25608060255", "name": null, "actions": [{"viewId": "25561920351", "changes": [{"id": "1F94ED74-7E4E-4050-A353-413BF7DAF68F", "type": "custom_code", "value": function($){document.querySelector('html').style.display = 'none';
setTimeout(function () {
  window.location.replace('/opc/buy' + window.location.search);
}, 10);
}, "dependencies": []}]}]}], "weightDistributions": null, "name": null, "bucketingStrategy": null}], "policy": "equal_priority", "viewIds": ["25561920351"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "25568260526", "endOfRange": null}]], "offerConsistency": null}}, {"changes": null, "id": "25633210200", "name": null, "commitId": "25538620871", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"contentsquare": {}, "google_universal_analytics": {"universal_analytics_slot": "7", "universal_analytics_tracker": ""}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "21591231112"], "audienceName": null, "changes": null, "id": "25588930167", "integrationSettings": null, "variations": [{"id": "25554190179", "name": null, "actions": []}, {"id": "25606830270", "name": null, "actions": [{"viewId": "25508840397", "changes": [{"id": "6D9A06FD-EF30-4926-8A35-4833D6601400", "type": "custom_code", "value": function($){ready('#btnNewProducts',function(element){
  if (screen.width < 1025) {
    document.querySelector("#products > div > div > div.main_col.first_column > ul > li:nth-child(2) > a").href = "https://www.zoom.com/en/products/team-chat";
    document.querySelector("#products > div > div > div.main_col.third_column > ul > li:nth-child(3) > a").href = "https://www.zoom.com/en/products/webinars";
    document.querySelector("#products > div > div > div.main_col.first_column > ul > li:nth-child(3) > a").href = "https://www.zoom.com/en/products/voip-phone";
    document.querySelector("#products > div > div > div.main_col.second_column > ul > li:nth-child(3) > a").href = "https://www.zoom.com/en/products/meeting-rooms/features/workspace";
    document.querySelector("#products > div > div > div.main_col.first_column > ul > li:nth-child(6) > a").href = "https://www.zoom.com/en/products/email-calendar";
    document.querySelector("#products > div > div > div.main_col.third_column > ul > li:nth-child(1) > a").href = "https://www.zoom.com/en/products/event-platform";
    document.querySelector("#products > div > div > div.main_col.first_column > ul > li:nth-child(1) > a").href = "https://www.zoom.com/en/products/virtual-meetings";
    document.querySelector("#products > div > div > div.main_col.fourth_column > ul > li:nth-child(1) > a").href = "https://www.zoom.com/en/products/contact-center";
    document.querySelector("#products > div > div > div.main_col.first_column > ul > li:nth-child(4) > a").href = "https://www.zoom.com/en/products/online-whiteboard";
    document.querySelector("#navbar-left-mobile > ul.nav.navbar-nav.visible-xs.mobile-newmenu-items > li:nth-child(3) > a").href = "https://www.zoom.com/en/contact/live-demo";
    document.querySelector("#products > div > div > div.main_col.first_column > ul > li:nth-child(5) > a").href = "https://www.zoom.com/en/products/conversation-intelligence";
    document.querySelector("#products > div > div > div.main_col.first_column > ul > li:nth-child(8) > a").href = "https://www.zoom.com/en/products/appointment-scheduler";
    document.querySelector("#products > div > div > div.main_col.second_column > ul > li:nth-child(2) > a").href = "https://www.zoom.com/en/products/meeting-rooms/features/room-connector";
    document.querySelector("#exploreZoomOne").href = "https://www.zoom.com/en/products/collaboration-tools";
    document.querySelector("#products > div > div > div.main_col.third_column > ul > li:nth-child(2) > a").href = "https://www.zoom.com/en/products/single-session-events";
    document.querySelector("#products > div > div > div.main_col.fourth_column > ul > li:nth-child(2) > a").href = "https://www.zoom.com/en/products/contact-center/features/virtual-agent";
	}
	else {
    
	}
});
}, "dependencies": []}]}]}], "weightDistributions": [{"entityId": "25554190179", "endOfRange": 5000}, {"entityId": "25606830270", "endOfRange": 10000}], "name": null, "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["25508840397"], "weightDistributions": null, "decisionMetadata": null}, {"changes": null, "id": "25679500639", "name": null, "commitId": "25864780700", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"contentsquare": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "25540610666"], "audienceName": null, "changes": null, "id": "25693350498", "integrationSettings": null, "variations": [{"id": "25685820487", "name": null, "actions": [{"viewId": "25683380411", "changes": [{"id": "26F99A87-E4C9-4A37-A2BF-A983C454F361", "type": "custom_code", "value": function($){var utils = window.optimizely.get('utils');
//console.log('[Optimizely] Whiteboard Pricing Page FAQ Section');

utils.observeSelector('.question-list-container', function (element) {
  var faqList = [
    {
      question: 'What is Zoom Whiteboard?',
      answer: '<div>Zoom Whiteboard is a rich visual collaboration tool built into the Zoom platform that empowers users to ideate, create, and collaborate at any time, both in and out of meeting.</div><div>Whiteboard includes feature enhancements that were not available with the previous classic whiteboard. Some of the new features include: an infinite canvas, sticky notes, advanced shapes, connectors, templates, a variety of ways to share your whiteboards, and more.</div>'
    },
    {
      question: 'What are the benefits of Whiteboard?',
      answer: '<div>Whiteboard is persistent, so it can be used without being associated with a meeting.</div><div>Whiteboard takes Zoom users to the next level when it comes to team collaboration. Existing whiteboards can be shared synchronously within a Zoom meeting, and then can be shared after a meeting - via a direct link, email, chat or chat channels.</div><div>Whiteboard is accessible from anywhere you are already working - from the web, the Zoom client, Zoom Rooms for Touch, and Zoom Companion Whiteboards.</div>'
    },
    {
      question: 'Is Whiteboard included for all Zoom users?',
      answer: '<div>There are three tiers of Whiteboard available for Zoom users - Whiteboard Basic, Whiteboard, and Whiteboard Plus. All tiers allow users to own, create, and save whiteboards, and provide access to standard whiteboard features.</div><div>The Whiteboard tier and Whiteboard Plus tier are add-ons for users who want access to unlimited whiteboards and advanced features.</div>'
    },
    {
      question: 'What is Whiteboard Basic?',
      answer: '<div>Whiteboard Basic is included for each Zoom user, offering 3 concurrently editable whiteboards and standard whiteboard features.</div>'
    },
    {
      question: 'What is included in the Whiteboard add-on?',
      answer: '<div>Whiteboard add-on is a user-assigned subscription. It’s available as an upgrade for Basic & Pro Meeting users from 3 concurrent whiteboards to unlimited whiteboards (based on storage quota) and includes some additional features. It is included with Zoom One Business, Zoom One Business Plus, and Zoom One Enterprise.</div>'
    },
    {
      question: 'How does Zoom support non-profits?',
      answer: '<div><b>For US Customers:</b> If your non-profit organization is eligible for a sales tax exemption, follow the <a href="https://support.zoom.us/hc/en-us/articles/208186963-Tax-exemption" target="_blank">support guide</a> to submit your exemption certificate. Some certificates may need manual review and result in initial tax charges, but once approved, any applicable taxes paid will be refunded to your original payment method.</div><div><b>Global Non-profit Discount:</b> Zoom collaborates with TechSoup to offer verified non-profit organizations worldwide a special discount. For further details and to claim this offer. Please visit their <a href="https://www.techsoup.org/zoom" target="_blank">website.</a></div>'
    }
  ];
  
  var faqListElms = document.querySelectorAll('.question-parts .zm-collapse-item');

  Array.from(faqListElms).forEach(function (elm, idx) {
    var faq = faqList[idx];
    if (faq) {
      elm.querySelector('.zm-collapse-item__header').childNodes[1].textContent = faq.question;
      elm.querySelector('.zm-collapse-item__content').innerHTML = faq.answer;
    } else {
      elm.remove();
    }
  });
  
}, {once: true});
}, "dependencies": []}]}]}], "weightDistributions": null, "name": null, "bucketingStrategy": null}], "policy": "equal_priority", "viewIds": ["25683380411"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "25693350498", "endOfRange": null}]], "offerConsistency": null}}, {"changes": null, "id": "25709550264", "name": null, "commitId": "25700190542", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"contentsquare": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "20886904205"], "audienceName": null, "changes": null, "id": "25717240257", "integrationSettings": null, "variations": [{"id": "25658840385", "name": null, "actions": [{"viewId": "25691410317", "changes": [{"id": "134AE25B-34C8-4C74-96AF-375669C6A192", "type": "custom_code", "value": function($){// homepage new wheel for zoomtopia
var utils = window.optimizely.get("utils");
utils.waitForElement('#screen-new3 .new3-inner').then(function(){
    // set names 
    var targetOne = document.getElementById('EmployeeSwitch');
    var targetTwo = document.getElementById('CustomerSwitch');
    var slider = document.getElementById('backgroundSlide');

    // click on button - cx
    targetTwo.addEventListener("click", toggleWheelCX);
    function toggleWheelCX() {
        document.querySelector("#screen-new3 .new3-inner .img-container .zm-product-wheels").classList.remove('newWheelex');
        setTimeout(() => {
            document.querySelector("#screen-new3 .new3-inner .img-container .zm-product-wheels").classList.add('newWheelcx');
        }, "250");
        document.querySelector("#EmployeeSwitch").classList.remove('active_toggle');
        document.querySelector("#CustomerSwitch").classList.remove('active_toggle_hover');
        document.querySelector("#EmployeeSwitch").classList.add('active_toggle_hover');
        document.querySelector("#CustomerSwitch").classList.add('active_toggle');
      //  console.log('togglewheel function run -cx');
    }
    // click on button - ex
    targetOne.addEventListener("click", toggleWheelEX);
    function toggleWheelEX() {
        document.querySelector("#screen-new3 .new3-inner .img-container .zm-product-wheels").classList.remove('newWheelcx');
        setTimeout(() => {
            document.querySelector("#screen-new3 .new3-inner .img-container .zm-product-wheels").classList.add('newWheelex');
        }, "250");
        document.querySelector("#EmployeeSwitch").classList.add('active_toggle');
        document.querySelector("#CustomerSwitch").classList.remove('active_toggle');
        document.querySelector("#CustomerSwitch").classList.add('active_toggle_hover');
        document.querySelector("#EmployeeSwitch").classList.remove('active_toggle_hover');
    //   console.log('togglewheel function run -ex');
    }

    // slider 
    targetOne.addEventListener("click", slidebackground);
    targetTwo.addEventListener("click", slidebackground);
    function slidebackground(e) {
        slider.style.width = e.target.offsetWidth + "px";
        slider.style.transform = "translate(" + e.target.offsetLeft + "px)";
   //     console.log('slide background fn run');
    }
});
}, "dependencies": []}, {"id": "AD58EAFF-5B37-4031-8C95-B11847912BF4", "type": "append", "selector": "head", "value": "<style>.active_toggle {\n  display: block !important;\n}\n\n.cx {\n  display: none;\n}\n\n.ex {\n  display: none;\n}\n\n#screen-new3 .zm-product-wheels.new,\n#screen-new3 .zm-product-wheels {\n  display: none !important;\n}\n\n#screen-new3 .zm-product-wheels.newWheelcx {\n  background: url(\"https://explore.zoom.us/media/zoom-cx-wheel.png\") no-repeat;\n  position: absolute;\n  z-index: 10;\n  background-size: contain;\n  width: 100%;\n  padding-bottom: 100%;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  display: block !important;\n  max-width: 450px;\n}\n\n#screen-new3 .zm-product-wheels.newWheelex {\n  background: url(\"https://explore.zoom.us/media/zoom-ex-wheel.png\") no-repeat;\n  position: absolute;\n  z-index: 10;\n  background-size: contain;\n  width: 100%;\n  padding-bottom: 100%;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  display: block !important;\n  max-width: 450px;\n}\n\n.toggleSwitch {\n  display: flex;\n  border: 1px solid rgba(11, 92, 255, 1);\n  border-radius: 100px;\n  max-width: fit-content;\n  padding: 3px 3px;\n}\n\n.active_toggle_hover:hover {\n  background: rgba(79, 144, 238, 0.24);\n}\n\n#EmployeeSwitch,\n#CustomerSwitch {\n  font-family: Almaden Sans;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 19px;\n  letter-spacing: 0em;\n  text-align: center;\n  border-radius: 100px;\n  padding: 7px 15px;\n  cursor: pointer;\n}\n\n#EmployeeSwitch {\n  margin-right: 5px;\n}\n\n#CustomerSwitch {\n  margin-right: 3px;\n}\n\n#screen-new3 #newWheel {\n  transition: all 0.5s ease-out;\n}\n\n#screen-new3 .zm-product-wheels#newWheel.newWheelex,\n#screen-new3 .zm-product-wheels#newWheel.newWheelcx {\n  opacity: 1;\n  animation: wheelFadeIn 0.5s;\n}\n@keyframes wheelFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@media only screen and (max-width: 1100px) {\n  #screen-new3 .zm-product-wheels.newWheelex,\n  #screen-new3 .zm-product-wheels.newWheelcx {\n    max-width: 350px;\n    top: 65%;\n  }\n}\n\n@media only screen and (max-width: 850px) and (min-width: 768px) {\n  #screen-new3 .zm-product-wheels.newWheelex,\n  #screen-new3 .zm-product-wheels.newWheelcx {\n    max-width: 350px;\n    top: 60%;\n  }\n}\n\n@media only screen and (min-width: 481px) and (max-width: 767px) {\n  .toggleSwitch {\n    margin: 0 auto;\n  }\n  #screen-new3 .img-container {\n    height: 420px !important;\n  }\n}\n\n@media only screen and (min-width: 400px) and (max-width: 480px) {\n  .toggleSwitch {\n    margin: 0 auto;\n  }\n  #screen-new3 .img-container {\n    height: 340px !important;\n  }\n  #screen-new3 .zm-product-wheels.newWheelex,\n  #screen-new3 .zm-product-wheels.newWheelcx {\n    max-width: 280px;\n    top: 60%;\n  }\n}\n\n@media only screen and (max-width: 399px) {\n  .toggleSwitch {\n    margin: 0 auto;\n  }\n  #screen-new3 .img-container {\n    height: 340px !important;\n  }\n  #screen-new3 .zm-product-wheels.newWheelex,\n  #screen-new3 .zm-product-wheels.newWheelcx {\n    max-width: 280px;\n    top: 53%;\n  }\n}\n\n.toggleSwitch {\n  position: relative;\n  z-index: 11;\n}\nspan.backgroundSlide {\n  background: linear-gradient(0deg, #0b5cff, #0b5cff),\n    linear-gradient(0deg, rgba(11, 92, 255, 0.1), rgba(11, 92, 255, 0.1));\n  position: absolute;\n  left: 0px;\n  top: 0;\n  width: 192px;\n  height: 90%;\n  border-radius: 999px;\n  z-index: 1;\n  transform: translateX(0px);\n  transition: 0.25s ease-out;\n  bottom: 0;\n  margin: auto;\n}\ndiv#EmployeeSwitch,\ndiv#CustomerSwitch {\n  z-index: 2;\n}\n#CustomerSwitch {\n  margin: 0;\n}</style>", "dependencies": []}, {"id": "8A50AF01-0BF1-4855-BAE4-5AC4FCAAF77B", "type": "append", "dependencies": [], "selector": ".new3-inner > .img-container", "value": "<div id=\"newWheel\" class=\"zm-product-wheels newWheelex\"></div>", "operator": "prepend"}, {"id": "F7440AD1-DED0-431D-9F80-06416DBB5850", "type": "append", "dependencies": [], "selector": ".copy-wrapper > .bigger-font", "value": "<div class=\"toggleSwitch\">\n  <span class=\"backgroundSlide\" id=\"backgroundSlide\"></span>\n<div id=\"EmployeeSwitch\" class=\"active_toggle\">Employee Experience</div>\n<div id=\"CustomerSwitch\" class=\"active_toggle_hover\">Customer Experience</div>\n</div>", "operator": "before"}, {"css": {}, "dependencies": [], "attributes": {"class": "wheel_ai_link"}, "type": "attribute", "id": "1471CC70-D2C0-4A83-A924-5EA1D91F8374", "selector": ".copy-wrapper a"}]}]}], "weightDistributions": null, "name": null, "bucketingStrategy": null}], "policy": "equal_priority", "viewIds": ["25691410317"], "weightDistributions": null, "decisionMetadata": {"experimentPriorities": [[{"entityId": "25717240257", "endOfRange": null}]], "offerConsistency": null}}, {"changes": null, "id": "25771190720", "name": null, "commitId": "25909490502", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"contentsquare": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "22872930337", "25540610666"], "audienceName": null, "changes": null, "id": "25758891541", "integrationSettings": null, "variations": [{"id": "25791461206", "name": null, "actions": []}, {"id": "25791661025", "name": null, "actions": [{"viewId": "25786961533", "changes": [{"id": "5082E7AF-65C5-4430-AD5A-5E025427AF9C", "type": "custom_code", "value": function($){(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "";
    /* helper library */
    function waitForElement(selector, trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function () {
        if (
          document &&
          document.querySelector(selector) &&
          document.querySelectorAll(selector).length > 0
        ) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function () {
        clearInterval(interval);
      }, delayTimeout);
    }

    function live(selector, event, callback, context) {
      /****Helper Functions****/
      // helper for enabling IE 8 event bindings
      function addEvent(el, type, handler) {
        if (el.attachEvent) el.attachEvent("on" + type, handler);
        else el.addEventListener(type, handler);
      }
      // matches polyfill
      this.Element &&
        (function (ElementPrototype) {
          ElementPrototype.matches =
            ElementPrototype.matches ||
            ElementPrototype.matchesSelector ||
            ElementPrototype.webkitMatchesSelector ||
            ElementPrototype.msMatchesSelector ||
            function (selector) {
              var node = this,
                nodes = (
                  node.parentNode || node.document
                ).querySelectorAll(selector),
                i = -1;
              while (nodes[++i] && nodes[i] != node);
              return !!nodes[i];
            };
        })(Element.prototype);
      // live binding helper using matchesSelector
      function live(selector, event, callback, context) {
        addEvent(context || document, event, function (e) {
          var found,
            el = e.target || e.srcElement;
          while (
            el &&
            el.matches &&
            el !== context &&
            !(found = el.matches(selector))
          )
            el = el.parentElement;
          if (found) callback.call(el, e);
        });
      }
      live(selector, event, callback, context);
    }

    function funcInterval(trigger) {
      var interval = setInterval(function () {
        trigger();
      }, 20);
      setTimeout(function () {
        clearInterval(interval);
      }, 5000);
    }

    /* Variation Init */
    var pricing_data = [
      {
        "name": 'US',
        "currencyValue": 'USD',
        "currency_flag": '$',
        "Pro": 12 + '<span class="subtext">' + 49 + '</span>',
        "Business": 16 + '<span class="subtext">' + 66 + '</span>',
        "Business_Plus": 20 + '<span class="subtext">83</span>',
        "Pro_monthly": '$' + 15.99,
        "Business_monthly": '$' + 19.99,
        "Business_Plus_monthly": '$' + 25 + '.' + '00',
        "save_up_label": '<span class="fe-save-up-label-new">Save 21%</span>',
        "save_up_label_biz": '<span class="fe-save-up-label-new">Save 16%</span>',
      },
      {
        "name": "NZ",
        "currencyValue": 'NZD',
        "currency_flag": 'NZ$',
        "Pro": 17 + '<span class="subtext">' + 74 + '</span>',
        "Business": 23 + '<span class="subtext">' + 65 + '</span>',
        "Business_Plus": 31 + '<span class="subtext">67</span>',
        "Pro_monthly": 'NZ$' + 22.99,
        "Business_monthly": 'NZ$' + 28.39,
        "Business_Plus_monthly": 'NZ$' + 38 + '.' + '00',
        "save_up_label": '<span class="fe-save-up-label-new">Save 22%</span>',
        "save_up_label_biz": '<span class="fe-save-up-label-new">Save 16%</span>',
      },
      {
        "name": "GB",
        "currencyValue": 'GBP',
        "currency_flag": '£',
        "Pro": 9 + '<span class="subtext">' + 99 + '</span>',
        "Business": 13 + '<span class="subtext">' + 33 + '</span>',
        "Business_Plus": 15 + '<span class="subtext">42</span>',
        "Pro_monthly": '£' + 12.99,
        "Business_monthly": '£' + 15.99,
        "Business_Plus_monthly": '£' + 18 + '.' + '50',
        "save_up_label": '<span class="fe-save-up-label-new">Save 23%</span>',
        "save_up_label_biz": '<span class="fe-save-up-label-new">Save 16%</span>',
      },
      {
        "name": "CA",
        "currencyValue": 'CAD',
        "currency_flag": 'CAD',
        "Pro": 16 + '<span class="subtext">67</span>',
        "Business": 22 + '<span class="subtext">50</span>',
        "Business_Plus": 26 + '<span class="subtext">25</span>',
        "Pro_monthly": 'CAD' + 21.49,
        "Business_monthly": 'CAD' + 27 + '.' + '00',
        "Business_Plus_monthly": 'CAD' + 31 + '.' + '50',
        "save_up_label": '<span class="fe-save-up-label-new">Save 22%</span>',
        "save_up_label_biz": '<span class="fe-save-up-label-new">Save 16%</span>',
      },
      {
        "name": "IE",
        "currencyValue": 'EUR',
        "currency_flag": '€',
        "Pro": 11 + '<span class="subtext">' + 66 + '</span>',
        "Business": 15 + '<span class="subtext">' + 83 + '</span>',
        "Business_Plus": 18 + '<span class="subtext">' + 41 + '</span>',
        "Pro_monthly": '€' + 14.99,
        "Business_monthly": '€' + 18.99,
        "Business_Plus_monthly": '€' + 22 + '.' + '00',
        "save_up_label": '<span class="fe-save-up-label-new">Save 22%</span>',
        "save_up_label_biz": '<span class="fe-save-up-label-new">Save 16%</span>',
      },
      {
        "name": 'AU',
        "currencyValue": 'AUD',
        "currency_flag": 'A$',
        "Pro": 17 + '<span class="subtext">' + 49 + '</span>',
        "Business": 23 + '<span class="subtext">' + 33 + '</span>',
        "Business_Plus": 28 + '<span class="subtext">' + 96 + '</span>',
        "Pro_monthly": 'A$' + 22.39,
        "Business_monthly": 'A$' + 27.99,
        "Business_Plus_monthly": 'A$' + 34.75,
        "save_up_label": '<span class="fe-save-up-label-new">Save 21%</span>',
        "save_up_label_biz": '<span class="fe-save-up-label-new">Save 16%</span>'
      },
    ]
    var currencies = ["USD", "NZD", "GBP", 'CAD', "EUR","AUD"];

    // Function to update text for monthly billing
    function monthlyTextChange() {
      const elements = document.querySelectorAll('.new-pricing-row .rate');
      const newText = '/month/user, billed monthly';
      updateText(elements, newText);
    }

    // Function to update text for monthly billing (comparison tables)
    function monthlyTextChangeComp() {
      const elements = document.querySelectorAll('.zm-table.comparison-table-new th.comparison-table-header-cell .cell .rate');
      const newText = '/month/user, billed monthly';
      updateText(elements, newText);
    }

    // Function to update text for monthly billing (mobile comparison tables)
    function monthlyTextChangeCompMobile() {
      const elements = document.querySelectorAll('.comparison-tree-table-mobile  .new-price .rate');
      const newText = '/month/user, billed monthly';
      updateText(elements, newText);
    }

    // Function to update text for elements
    function updateText(elements, newText) {
      for (let i = 0; i < elements.length; i++) {
        elements[i].innerText = newText;
      }
    }

    // Function to add a class to the "Enterprise" pricing plan
    function addClassToEnterprise() {
      const contactSalesBtn = document.querySelector('.new-buy-btn [data-link-term="Contact Sales"]');
      if (contactSalesBtn) {
        contactSalesBtn.closest('th').classList.add('fe-enterprise');
      }
    }
    
    // Function to insert pricing information
    function insertPricingInfo(pricing, currencyFlag, monthlyPrice, className, saveUpLabel) {
      const headerCells = document.querySelectorAll('.new-tab-content .feature-plan-card .title-words');
    
      headerCells.forEach(headerCell => {
        headerCell.closest('.title').classList.add('fe-tab-content');
        if (headerCell.innerText === className) {
          const priceClassName = 'fe-' + className.toLowerCase().replace(' ', '');
          if (!document.querySelector('.' + priceClassName)) {
            const insertIndex = Array.from(headerCells).findIndex(cell => cell.innerText === className);
            const priceHTML = `<div class="fe-price-num ${priceClassName}">
              <div class="fe-pro-pricing">
                <strike class="fe-monthly-price">${monthlyPrice}</strike>
                <sup class="fe-sup">${currencyFlag}</sup>
                <span class="fe-subtext">${pricing}</span>
              </div>
              <p class="fe-year">${saveUpLabel}</p>
            </div>
            <span class="fe-rate">/month/user, billed annually</span>`;
            headerCells[insertIndex].insertAdjacentHTML('afterend', priceHTML);
          }
        }
      });
    }
    
    // Function to update pricing information for desktop
    function priceListObject() {
      addClassToEnterprise();

      const currencyValueToFind = window.dataModel.currencyValue;
      const country = pricing_data.find(item => item.currencyValue === currencyValueToFind);

      if (country) {
        insertPricingInfo(country.Pro, country.currency_flag, country.Pro_monthly, 'Pro', country.save_up_label);
        insertPricingInfo(country.Business, country.currency_flag, country.Business_monthly, 'Business', country.save_up_label_biz);
        insertPricingInfo(country.Business_Plus, country.currency_flag, country.Business_Plus_monthly, 'Business Plus', country.save_up_label_biz);
      }
    
    }
    
    // Function to add a class to the "Enterprise" pricing plan (comparison tables)
    function addClassToCompEnterprise() {
      const contactSalesBtn = document.querySelector('.new-buy-btn [data-link-term="Contact Sales"]');
      if (contactSalesBtn) {
        contactSalesBtn.closest('th').classList.add('fe-enterprise');
      }
    }
    // Function to insert pricing information into comparison tables
    function insertComparisonPricingInfo(pricing, currencyFlag, className, saveUpLabel) {
      const comparisonTables = document.querySelectorAll('.comparison-table-new .type-title');
    
      comparisonTables.forEach(comparisonTable => {
        comparisonTable.closest('.cell').classList.add('fe-tab-content');
        if (comparisonTable.innerText === className) {
          const priceClassName = 'fe-' + className.toLowerCase().replace(' ', '');
          if (!document.querySelector('.' + priceClassName + '1')) {
            const insertIndex = Array.from(comparisonTables).findIndex(table => table.innerText === className);
            const priceHTML = `<div class="fe-price-num ${priceClassName + '1'}">
              <div class="fe-pro-pricing">
                <sup class="fe-sup">${currencyFlag}</sup>
                <span class="fe-subtext">${pricing}</span>
              </div>
              <p class="fe-year">  ${saveUpLabel}</p>
            </div>
            <span class="fe-rate">/month/user, billed annually</span>`;
            comparisonTables[insertIndex].insertAdjacentHTML('afterend', priceHTML);
          }
        }
      });
    }
    
     // Function to update pricing information for comparison tables
    function priceListobjectComp() {
      addClassToCompEnterprise();

      const currencyValueToFind = window.dataModel.currencyValue;
      const country = pricing_data.find(item => item.currencyValue === currencyValueToFind);

      if (country) {
        insertComparisonPricingInfo(country.Pro, country.currency_flag, 'Pro', country.save_up_label);
        insertComparisonPricingInfo(country.Business, country.currency_flag, 'Business', country.save_up_label_biz);
        insertComparisonPricingInfo(country.Business_Plus, country.currency_flag, 'Business Plus', country.save_up_label_biz);
      }
    
    }
    

    // Function to update pricing information for mobile comparison tables
    function priceListobjectCompMobile() {

      const currencyValueToFind = window.dataModel.currencyValue;
      const country = pricing_data.find(item => item.currencyValue === currencyValueToFind);

      if (country) {
        var comparison_tables = document.querySelectorAll('.comparison-tree-table-mobile .zm-select-span__inner');
        comparison_tables.forEach(comparison_table => {

          var feMonthlyBusinessPlus = document.querySelector('.comparison-tree-table-mobile .fe-monthlybp-pricing1');
          var feMonthlyBusiness = document.querySelector('.comparison-tree-table-mobile .fe-monthly-pricing1');
          var fePro = document.querySelector('.comparison-tree-table-mobile .fe-pro1');
          var fePro2 = document.querySelector('.comparison-tree-table-mobile .fe-pro2');

          var activeNavHeading =  document.querySelector('.pricing_nav_dropdown .active-nav-item h2');

          // Basic plan selected
          if (comparison_table.innerText === 'Basic') {
              fePro && fePro.classList.add('fe-hide');
          }
         
          // 
          if (activeNavHeading.innerText === 'Business') {                
            if (comparison_table.innerText === 'Pro') {
                fePro && fePro.classList.remove('fe-hide');
                !fePro && document.querySelector('.comparison-tree-table-mobile__header-left-col .type-price').insertAdjacentHTML('afterend', '<div class="fe-price-num fe-pro1"><div class="fe-pro-pricing"><sup class="fe-sup">' + country.currency_flag + '</sup><span class="fe-subtext"> ' + country.Pro + '</span></div><p class="fe-year">  ' + country.save_up_label + '</p><span class="fe-rate">/month/user, billed annually</span></div>');
            }
          }

           // persona plan for mobile
          if (document.querySelector('[current-usage-type="personal"]')) {
         
            feMonthlyBusiness && feMonthlyBusiness.classList.add('fe-hide')
            feMonthlyBusinessPlus && feMonthlyBusinessPlus.classList.add('fe-hide');
            fePro && fePro.classList.add('fe-hide');

            fePro2 && fePro2.classList.remove('fe-hide');

            if (comparison_table.innerText === 'Pro') {                  
              !fePro2 && document.querySelector('[current-usage-type="personal"] .comparison-tree-table-mobile__header-right-col .type-price').insertAdjacentHTML('afterend', '<div class="fe-price-num fe-pro2"><div class="fe-pro-pricing"><sup class="fe-sup">' + country.currency_flag + '</sup><span class="fe-subtext"> ' + country.Pro + '</span></div><p class="fe-year">  ' + country.save_up_label + '</p><span class="fe-rate">/month/user, billed annually</span></div>');
            }
          }
          // persona plan end

           // Business plan for mobile
         
          if (comparison_table.innerText === 'Business') {
            feMonthlyBusinessPlus && feMonthlyBusinessPlus.classList.add('fe-hide');
            feMonthlyBusiness && feMonthlyBusiness.classList.remove('fe-hide')

            if (activeNavHeading.innerText === 'Personal') {
              fePro2 && fePro2.classList.add('fe-hide');
            }

            fePro2 && fePro2.classList.add('fe-hide');
            !feMonthlyBusiness && document.querySelector('.comparison-tree-table-mobile__header-right-col .type-price').insertAdjacentHTML('afterend', '<div class="fe-price-num fe-monthly-pricing1"><sup class="fe-sup">' + country.currency_flag + '</sup><span class="fe-subtext"> ' + country.Business + '</span><p class="fe-year">  ' + country.save_up_label_biz + '</p><span class="fe-rate">/month/user, billed annually</span></div>');

          }

          
          // Business plan for mobile end

          if (comparison_table.innerText === 'Business Plus') {
              feMonthlyBusinessPlus && feMonthlyBusinessPlus.classList.remove('fe-hide');
              feMonthlyBusiness && feMonthlyBusiness.classList.add('fe-hide')
              !feMonthlyBusinessPlus && document.querySelector('.comparison-tree-table-mobile__header-right-col .type-price').insertAdjacentHTML('afterend', '<div class="fe-price-num fe-monthlybp-pricing1"><sup class="fe-sup">' + country.currency_flag + '</sup><span class="fe-subtext"> ' + country.Business_Plus + '</span><p class="fe-year">  ' + country.save_up_label_biz + '</p><span class="fe-rate">/month/user, billed annually</span></div>');
          }

          if (comparison_table.innerText === 'Enterprise') {
              feMonthlyBusinessPlus && feMonthlyBusinessPlus.classList.add('fe-hide');
              feMonthlyBusiness && feMonthlyBusiness.classList.add('fe-hide')
          }

        });
      }

    }

    // Function to initialize the tile section
    function initTileSection() {
      document.querySelector('body').classList.add('fe-savings-promo');
      priceListObject();
      monthlyTextChange();
      const featurePlanCard = document.querySelector('[plan="business plus"][action="contact sales"]');
      featurePlanCard && featurePlanCard.classList.add('fe-contactsales');
    }

    // Function to initialize the feature comparison section
    function initCompareFeatures() {
      priceListobjectComp();
      monthlyTextChangeComp();
    }

     // Function to initialize the mobile section
    function initMobile() {
      priceListobjectCompMobile();
      monthlyTextChangeCompMobile();
    }

    // Event listener for changes in the switch 
    live('.zm-switch input', 'change', function () {
      funcInterval(initTileSection);
      funcInterval(initCompareFeatures);
      funcInterval(monthlyTextChangeComp);
    })

    // Event listener for dropdown menu selections
    live('.zm-dropdown-menu__item-content .pricing_nav_dropdown_item,[aria-label*="switch types for row 2"], [aria-label="Basic"],[aria-label="Pro"],[aria-label="Business"],[aria-label="Business Plus"],[aria-label="Enterprise"],.zm-select-dropdown__item, .dropdown-detail-item', 'mousedown', function () {

      funcInterval(initTileSection);
      funcInterval(initCompareFeatures);
      funcInterval(monthlyTextChangeComp);
      funcInterval(priceListobjectCompMobile);
      funcInterval(monthlyTextChangeCompMobile);

    });


  // Wait for elements to appear and trigger initialization functions
    waitForElement(".new-tab-content .feature-plan-card .new-price", initTileSection, 50, 50000);
    waitForElement(".comparison-table-new .price-num", initCompareFeatures, 100, 50000);
    waitForElement(".comparison-tree-table-mobile .zm-select-span__inner", initMobile, 100, 50000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
}, "dependencies": []}, {"id": "80E7F7BC-FCC0-42A6-B10E-049AF9D663A9", "type": "append", "selector": "head", "value": "<style>html body .fe-hide,\nhtml body [period=\"monthly\"] .comparison-tree-table .fe-price-num,\nhtml body .comparison-tree-table-mobile .fe-price-num.fe-hide,\nhtml body [period=\"monthly\"] .new-pricing-row .fe-price-num,\nhtml body [period=\"monthly\"] .fe-rate,\nhtml body [period=\"annual\"] .plan-wrapper .feature-plan-card .saving,\nhtml body .pricing-tabs-bk .feature-plan-card .saving,\nhtml body.fe-savings-promo .fe-contactsales .fe-price-num,\nhtml body.fe-savings-promo .fe-contactsales .fe-rate,\nhtml body.fe-savings-promo [period=\"annual\"] .new-pricing-row .fe-tab-content+div>.new-price-wrapper,\nhtml body.fe-savings-promo [period=\"annual\"] .comparison-tree-table-mobile-new .new-price,\nhtml body.fe-savings-promo [period=\"annual\"] .comparison-tree-table .fe-tab-content .type-price:not(.type-price-free) {\n    display: none;\n}\n\nhtml body.fe-savings-promo [period=\"annual\"] .zm-table.comparison-table-new .comparison-table-header .fe-tab-content .new-buy-btn {\n    margin-top: 10px;\n}\n\nhtml body.fe-savings-promo .zm-table.comparison-table-new .comparison-table-header .fe-tab-content [data-link-term=\"Buy Now\"] {\n    padding: 7px 29px;\n}\n\nhtml body.fe-savings-promo .fe-new-price .fe-price-part {\n    font-size: 30px;\n    line-height: 23px;\n    margin-top: 10px;\n    margin-bottom: 6px;\n    margin-top: 0;\n    color: #00053d;\n}\n\nhtml body .fe-new-price .fe-subtext.currency-flag {\n    font-size: 12px;\n    font-weight: 600;\n    line-height: 29px;\n    padding-right: 3px;\n    margin-top: 0;\n}\n\nhtml body .fe-price-num,\nhtml body .fe-price-num1 {\n    display: inline;\n    color: var(--day-foreground-foreground, #00053D);\n    font-size: 32px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 120%;\n}\n\nhtml body .comparison-tree-table .fe-price-num {\n    font-size: 20px;\n    display: inline-block;\n}\n\nhtml body .comparison-tree-table .fe-pro-pricing {\n    display: inline-block;\n}\n\nhtml body .fe-flag-hidden {\n    color: transparent;\n    width: 0;\n    display: inline-block;\n}\n\nhtml body .fe-subtext {\n    color: var(--day-foreground-foreground, #00053D);\n    font-size: 32px;\n    font-style: normal;\n    font-weight: 600;\n    margin-left: -4px;\n    display: inline-block;\n    font-family: \"Happy Display\", Internacional, Helvetica, Arial;\n}\n\nhtml body .comparison-tree-table .fe-subtext {\n    padding-top: 5px;\n    margin-left: -2px;\n}\n\nhtml body .fe-subtext .subtext {\n    margin-top: 0px;\n    font-size: 14px;\n    margin-left: 2px;\n}\n\nhtml body .zm-table.comparison-table-new .new-price-wrapper .new-price .price-num .subtext {\n    margin-left: 2px;\n    margin-top: 0px;\n}\n\nhtml body [period=\"monthly\"] .zm-table.comparison-table-new .type-price {\n    height: 70px;\n    margin-top: 6px;\n}\n\nhtml body.fe-savings-promo [period=\"annual\"] .zm-table.comparison-table-new .type-price {\n    height: 44px;\n    margin-top: 10px;\n    line-height: 1;\n}\n\nhtml body .fe-pro-pricing {\n    display: inline-block;\n}\n\nhtml body .fe-year {\n    display: inline;\n    position: relative;\n    top: -5px;\n}\n\nhtml body .fe-rate {\n    display: block;\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 120%;\n    text-transform: lowercase;\n    letter-spacing: 0px;\n    color: var(--day-foreground-foreground-ada, #666487);\n}\n\nhtml body .fe-monthly-price {\n    color: var(--day-foreground-foreground-ada, #666487);\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 120%;\n    display: block;\n    margin-top: 8px;\n    font-family: \"Happy Display\", Internacional, Helvetica, Arial;\n}\n\nhtml body .fe-save-up-label-new {\n    background: linear-gradient(92.79deg, #268543 7.27%, #1c837e 92.73%);\n    border-radius: 4px 8px;\n    padding: 0 6px;\n    color: #fff;\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 20px;\n    display: inline;\n    text-transform: capitalize;\n}\n\nhtml body.fe-savings-promo .fe-sup {\n    top: -13px;\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 150%;\n    position: relative;\n    font-family: \"Happy Display\", Internacional, Helvetica, Arial;\n}\n\nhtml body.fe-savings-promo .comparison-tree-table-mobile .fe-subtext {\n    margin-left: 2px;\n}\n\nhtml body .comparison-tree-table .fe-year {\n    font-weight: 400;\n    font-size: 14px;\n    text-transform: lowercase;\n    color: #515079;\n    display: inline;\n    position: relative;\n    top: -7px;\n}\n\nhtml body.fe-savings-promo .feature-plan-card section {\n    max-height: 95px;\n    height: 100%;\n    margin-top: 11px;\n}\n\nhtml body.fe-savings-promo .zm-table.comparison-table-new th.comparison-table-header-cell.fe-enterprise .type-price {\n    display: block;\n    height: 57px;\n    margin: 0;\n}\n\nhtml body [period=\"monthly\"] .zm-table.comparison-table-new th.comparison-table-header-cell.fe-enterprise .type-price {\n    height: 87px;\n}\n\nhtml body.fe-savings-promo .new-ui-style .new-one-card-layout .new-pricing-row .rate,\nhtml body.fe-savings-promo .zm-table.comparison-table-new th.comparison-table-header-cell .cell .rate {\n    font-size: 14px;\n    display: block;\n    color: var(--day-foreground-foreground-ada, #666487);\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 400;\n    letter-spacing: 0;\n    line-height: 120%;\n}\n\nhtml body.fe-savings-promo .new-ui-style .new-one-card-layout .new-pricing-row .price-part .price-num,\nhtml body.fe-savings-promo .zm-table.comparison-table-new .new-price-wrapper .new-price .price-num,\nhtml body.fe-savings-promo .comparison-tree-table-mobile .comparison-tree-table-mobile__header-price-row .price-num {\n    color: var(--day-foreground-foreground, #00053D);\n    font-size: 32px !important;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 100%;\n}\n\nhtml body.fe-savings-promo .new-ui-style .new-one-card-layout .new-pricing-row .price-part .currency-flag,\nhtml body.fe-savings-promo .zm-table.comparison-table-new .new-price-wrapper .new-price .price-part .currency-flag {\n    line-height: 143%;\n    margin-top: 0px;\n}\n\n\n/* new css */\n\nhtml body .comparison-tree-table-mobile .comparison-tree-table-mobile__header-price-row .rate {\n    font-size: 12px;\n    height: 21px;\n    display: block;\n    margin-top: -8px;\n}\n\nhtml body.fe-savings-promo [period=\"monthly\"] .comparison-tree-table-mobile__header-btn-row {\n    padding-top: 40px;\n}\n\nhtml body .comparison-tree-table-mobile .comparison-tree-table-mobile__header-price-row .fe-subtext .subtext {\n    margin-top: -4px;\n}\n\nhtml body.fe-savings-promo .comparison-tree-table-mobile .new-price-wrapper .new-price .subtext {\n    margin-top: 9px;\n}\n\nhtml body.fe-savings-promo .new-one-card-layout .comparison-tree-table-mobile .new-price-wrapper .new-price .currency-flag {\n    margin-top: 5px;\n}\n\nhtml body.fe-savings-promo .comparison-tree-table-mobile .comparison-tree-table-mobile__header-price-row .type-price-free {\n    margin-top: 15px;\n}\n\nhtml body.fe-savings-promo .comparison-tree-table-mobile-new .comparison-tree-table-mobile__inside {\n    padding-top: 40.76923vw;\n}\n\nhtml body .comparison-tree-table-mobile .fe-price-num {\n    margin: 21px 0 8px;\n}</style>", "dependencies": []}]}]}, {"id": "25773870989", "name": null, "actions": [{"viewId": "25786961533", "changes": [{"id": "144C4BC1-EC16-4615-BA7F-D7E833C5992C", "type": "custom_code", "value": function($){(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "";
    /* helper library */
    function waitForElement(selector, trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function () {
        if (
          document &&
          document.querySelector(selector) &&
          document.querySelectorAll(selector).length > 0
        ) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function () {
        clearInterval(interval);
      }, delayTimeout);
    }

    function live(selector, event, callback, context) {
      /****Helper Functions****/
      // helper for enabling IE 8 event bindings
      function addEvent(el, type, handler) {
        if (el.attachEvent) el.attachEvent("on" + type, handler);
        else el.addEventListener(type, handler);
      }
      // matches polyfill
      this.Element &&
        (function (ElementPrototype) {
          ElementPrototype.matches =
            ElementPrototype.matches ||
            ElementPrototype.matchesSelector ||
            ElementPrototype.webkitMatchesSelector ||
            ElementPrototype.msMatchesSelector ||
            function (selector) {
              var node = this,
                nodes = (
                  node.parentNode || node.document
                ).querySelectorAll(selector),
                i = -1;
              while (nodes[++i] && nodes[i] != node);
              return !!nodes[i];
            };
        })(Element.prototype);
      // live binding helper using matchesSelector
      function live(selector, event, callback, context) {
        addEvent(context || document, event, function (e) {
          var found,
            el = e.target || e.srcElement;
          while (
            el &&
            el.matches &&
            el !== context &&
            !(found = el.matches(selector))
          )
            el = el.parentElement;
          if (found) callback.call(el, e);
        });
      }
      live(selector, event, callback, context);
    }

    function funcInterval(trigger) {
      var interval = setInterval(function () {
        trigger();
      }, 20);
      setTimeout(function () {
        clearInterval(interval);
      }, 5000);
    }

    /* Variation Init */
    var pricing_data = [
      {
        "name": 'US',
        "currencyValue": 'USD',
        "currency_flag": '$',
        "Pro": 12 + '<span class="subtext">' + 49 + '</span>',
        "Business": 16 + '<span class="subtext">' + 66 + '</span>',
        "Business_Plus": 20 + '<span class="subtext">83</span>',
        "Pro_monthly": '$' + 15.99,
        "Business_monthly": '$' + 19.99,
        "Business_Plus_monthly": '$' + 25 + '.' + '00',
        "save_up_label": '<span class="fe-save-up-label-new">Save 21%</span>',
        "save_up_label_biz": '<span class="fe-save-up-label-new">Save 16%</span>',
      },
      {
        "name": "NZ",
        "currencyValue": 'NZD',
        "currency_flag": 'NZ$',
        "Pro": 17 + '<span class="subtext">' + 74 + '</span>',
        "Business": 23 + '<span class="subtext">' + 65 + '</span>',
        "Business_Plus": 31 + '<span class="subtext">67</span>',
        "Pro_monthly": 'NZ$' + 22.99,
        "Business_monthly": 'NZ$' + 28.39,
        "Business_Plus_monthly": 'NZ$' + 38 + '.' + '00',
        "save_up_label": '<span class="fe-save-up-label-new">Save 22%</span>',
        "save_up_label_biz": '<span class="fe-save-up-label-new">Save 16%</span>',
      },
      {
        "name": "GB",
        "currencyValue": 'GBP',
        "currency_flag": '£',
        "Pro": 9 + '<span class="subtext">' + 99 + '</span>',
        "Business": 13 + '<span class="subtext">' + 33 + '</span>',
        "Business_Plus": 15 + '<span class="subtext">42</span>',
        "Pro_monthly": '£' + 12.99,
        "Business_monthly": '£' + 15.99,
        "Business_Plus_monthly": '£' + 18 + '.' + '50',
        "save_up_label": '<span class="fe-save-up-label-new">Save 23%</span>',
        "save_up_label_biz": '<span class="fe-save-up-label-new">Save 16%</span>',
      },
      {
        "name": "CA",
        "currencyValue": 'CAD',
        "currency_flag": 'CAD',
        "Pro": 16 + '<span class="subtext">67</span>',
        "Business": 22 + '<span class="subtext">50</span>',
        "Business_Plus": 26 + '<span class="subtext">25</span>',
        "Pro_monthly": 'CAD' + 21.49,
        "Business_monthly": 'CAD' + 27 + '.' + '00',
        "Business_Plus_monthly": 'CAD' + 31 + '.' + '50',
        "save_up_label": '<span class="fe-save-up-label-new">Save 22%</span>',
        "save_up_label_biz": '<span class="fe-save-up-label-new">Save 16%</span>',
      },
      {
        "name": "IE",
        "currencyValue": 'EUR',
        "currency_flag": '€',
        "Pro": 11 + '<span class="subtext">' + 66 + '</span>',
        "Business": 15 + '<span class="subtext">' + 83 + '</span>',
        "Business_Plus": 18 + '<span class="subtext">' + 41 + '</span>',
        "Pro_monthly": '€' + 14.99,
        "Business_monthly": '€' + 18.99,
        "Business_Plus_monthly": '€' + 22 + '.' + '00',
        "save_up_label": '<span class="fe-save-up-label-new">Save 22%</span>',
        "save_up_label_biz": '<span class="fe-save-up-label-new">Save 16%</span>',
      },
      {
        "name": 'AU',
        "currencyValue": 'AUD',
        "currency_flag": 'A$',
        "Pro": 17 + '<span class="subtext">' + 49 + '</span>',
        "Business": 23 + '<span class="subtext">' + 33 + '</span>',
        "Business_Plus": 28 + '<span class="subtext">' + 96 + '</span>',
        "Pro_monthly": 'A$' + 22.39,
        "Business_monthly": 'A$' + 27.99,
        "Business_Plus_monthly": 'A$' + 34.75,
        "save_up_label": '<span class="fe-save-up-label-new">Save 21%</span>',
        "save_up_label_biz": '<span class="fe-save-up-label-new">Save 16%</span>'
      },
    ]
    var currencies = ["USD", "NZD", "GBP", 'CAD', "EUR","AUD"];

    // Function to update text for monthly billing
    function monthlyTextChange() {
      const elements = document.querySelectorAll('.new-pricing-row .rate');
      const newText = '/month/user, billed monthly';
      updateText(elements, newText);
    }

    // Function to update text for monthly billing (comparison tables)
    function monthlyTextChangeComp() {
      const elements = document.querySelectorAll('.zm-table.comparison-table-new th.comparison-table-header-cell .cell .rate');
      const newText = '/month/user, billed monthly';
      updateText(elements, newText);
    }

    // Function to update text for monthly billing (mobile comparison tables)
    function monthlyTextChangeCompMobile() {
      const elements = document.querySelectorAll('.comparison-tree-table-mobile  .new-price .rate');
      const newText = '/month/user, billed monthly';
      updateText(elements, newText);
    }

    // Function to update text for elements
    function updateText(elements, newText) {
      for (let i = 0; i < elements.length; i++) {
        elements[i].innerText = newText;
      }
    }

    // Function to add a class to the "Enterprise" pricing plan
    function addClassToEnterprise() {
      const contactSalesBtn = document.querySelector('.new-buy-btn [data-link-term="Contact Sales"]');
      if (contactSalesBtn) {
        contactSalesBtn.closest('th').classList.add('fe-enterprise');
      }
    }
    
    // Function to insert pricing information
    function insertPricingInfo(pricing, currencyFlag, monthlyPrice, className, saveUpLabel) {
      const headerCells = document.querySelectorAll('.new-tab-content .feature-plan-card .title-words');
    
      headerCells.forEach(headerCell => {
        headerCell.closest('.title').classList.add('fe-tab-content');
        if (headerCell.innerText === className) {
          const priceClassName = 'fe-' + className.toLowerCase().replace(' ', '');
          if (!document.querySelector('.' + priceClassName)) {
            const insertIndex = Array.from(headerCells).findIndex(cell => cell.innerText === className);
            const priceHTML = `<div class="fe-price-num ${priceClassName}">
              <div class="fe-pro-pricing">
                <strike class="fe-monthly-price">${monthlyPrice}</strike>
                <sup class="fe-sup">${currencyFlag}</sup>
                <span class="fe-subtext">${pricing}</span>
              </div>
              <p class="fe-year">${saveUpLabel}</p>
            </div>
            <span class="fe-rate">/month/user, billed annually <br /> or ${monthlyPrice} billed monthly</span>`;
            headerCells[insertIndex].insertAdjacentHTML('afterend', priceHTML);
          }
        }
      });
    }
    
    // Function to update pricing information for desktop
    function priceListObject() {
      addClassToEnterprise();

      const currencyValueToFind = window.dataModel.currencyValue;
      const country = pricing_data.find(item => item.currencyValue === currencyValueToFind);

      if (country) {
        insertPricingInfo(country.Pro, country.currency_flag, country.Pro_monthly, 'Pro', country.save_up_label);
        insertPricingInfo(country.Business, country.currency_flag, country.Business_monthly, 'Business', country.save_up_label_biz);
        insertPricingInfo(country.Business_Plus, country.currency_flag, country.Business_Plus_monthly, 'Business Plus', country.save_up_label_biz);
      }
    
    }
    
    // Function to add a class to the "Enterprise" pricing plan (comparison tables)
    function addClassToCompEnterprise() {
      const contactSalesBtn = document.querySelector('.new-buy-btn [data-link-term="Contact Sales"]');
      if (contactSalesBtn) {
        contactSalesBtn.closest('th').classList.add('fe-enterprise');
      }
    }
    // Function to insert pricing information into comparison tables
    function insertComparisonPricingInfo(pricing, currencyFlag, monthlyPrice, className, saveUpLabel) {
      const comparisonTables = document.querySelectorAll('.comparison-table-new .type-title');
    
      comparisonTables.forEach(comparisonTable => {
        comparisonTable.closest('.cell').classList.add('fe-tab-content');
        if (comparisonTable.innerText === className) {
          const priceClassName = 'fe-' + className.toLowerCase().replace(' ', '');
          if (!document.querySelector('.' + priceClassName + '1')) {
            const insertIndex = Array.from(comparisonTables).findIndex(table => table.innerText === className);
            const priceHTML = `<div class="fe-price-num ${priceClassName + '1'}">
              <div class="fe-pro-pricing">
                <sup class="fe-sup">${currencyFlag}</sup>
                <span class="fe-subtext">${pricing}</span>
              </div>
              <p class="fe-year">${saveUpLabel}</p>
            </div>
            <span class="fe-rate">/month/user, billed annually <br /> or ${monthlyPrice} billed monthly</span>`;

            comparisonTables[insertIndex].insertAdjacentHTML('afterend', priceHTML);
          }
        }
      });
    }
    
     // Function to update pricing information for comparison tables
    function priceListobjectComp() {
      addClassToCompEnterprise();

      const currencyValueToFind = window.dataModel.currencyValue;
      const country = pricing_data.find(item => item.currencyValue === currencyValueToFind);

      if (country) {
        insertComparisonPricingInfo(country.Pro, country.currency_flag,  country.Pro_monthly, 'Pro', country.save_up_label);
        insertComparisonPricingInfo(country.Business, country.currency_flag,country.Business_monthly, 'Business', country.save_up_label_biz);
        insertComparisonPricingInfo(country.Business_Plus, country.currency_flag, country.Business_Plus_monthly, 'Business Plus', country.save_up_label_biz);
      }
    
    }
    

    // Function to update pricing information for mobile comparison tables
    function priceListobjectCompMobile() {

      const currencyValueToFind = window.dataModel.currencyValue;
      const country = pricing_data.find(item => item.currencyValue === currencyValueToFind);

      if (country) {
        var comparison_tables = document.querySelectorAll('.comparison-tree-table-mobile .zm-select-span__inner');
        comparison_tables.forEach(comparison_table => {

          var feMonthlyBusinessPlus = document.querySelector('.comparison-tree-table-mobile .fe-monthlybp-pricing1');
          var feMonthlyBusiness = document.querySelector('.comparison-tree-table-mobile .fe-monthly-pricing1');
          var fePro = document.querySelector('.comparison-tree-table-mobile .fe-pro1');
          var fePro2 = document.querySelector('.comparison-tree-table-mobile .fe-pro2');

          var activeNavHeading =  document.querySelector('.pricing_nav_dropdown .active-nav-item h2');

          // Basic plan selected
          if (comparison_table.innerText === 'Basic') {
              fePro && fePro.classList.add('fe-hide');
          }
         
          // 
          if (activeNavHeading.innerText === 'Business') {                
            if (comparison_table.innerText === 'Pro') {
                fePro && fePro.classList.remove('fe-hide');
                !fePro && document.querySelector('.comparison-tree-table-mobile__header-left-col .type-price').insertAdjacentHTML('afterend', '<div class="fe-price-num fe-pro1"><div class="fe-pro-pricing"><sup class="fe-sup">' + country.currency_flag + '</sup><span class="fe-subtext"> ' + country.Pro + '</span></div><p class="fe-year">  ' + country.save_up_label + '</p><span class="fe-rate">/month/user, billed annually <br /> or  ' + country.Pro_monthly + ' billed monthly</span></div>');
            }
          }

           // persona plan for mobile
          if (document.querySelector('[current-usage-type="personal"]')) {
         
            feMonthlyBusiness && feMonthlyBusiness.classList.add('fe-hide')
            feMonthlyBusinessPlus && feMonthlyBusinessPlus.classList.add('fe-hide');
            fePro && fePro.classList.add('fe-hide');

            fePro2 && fePro2.classList.remove('fe-hide');

            if (comparison_table.innerText === 'Pro') {                  
              !fePro2 && document.querySelector('[current-usage-type="personal"] .comparison-tree-table-mobile__header-right-col .type-price').insertAdjacentHTML('afterend', '<div class="fe-price-num fe-pro2"><div class="fe-pro-pricing"><sup class="fe-sup">' + country.currency_flag + '</sup><span class="fe-subtext"> ' + country.Pro + '</span></div><p class="fe-year">  ' + country.save_up_label + '</p><span class="fe-rate">/month/user, billed annually <br /> or ' + country.Pro_monthly + ' billed monthly</div>');
            }
          }
          // persona plan end

           // Business plan for mobile
         
          if (comparison_table.innerText === 'Business') {
            feMonthlyBusinessPlus && feMonthlyBusinessPlus.classList.add('fe-hide');
            feMonthlyBusiness && feMonthlyBusiness.classList.remove('fe-hide')

            if (activeNavHeading.innerText === 'Personal') {
              fePro2 && fePro2.classList.add('fe-hide');
            }

            fePro2 && fePro2.classList.add('fe-hide');
            !feMonthlyBusiness && document.querySelector('.comparison-tree-table-mobile__header-right-col .type-price').insertAdjacentHTML('afterend', '<div class="fe-price-num fe-monthly-pricing1"><sup class="fe-sup">' + country.currency_flag + '</sup><span class="fe-subtext"> ' + country.Business + '</span><p class="fe-year">  ' + country.save_up_label_biz + '</p><span class="fe-rate">/month/user, billed annually <br /> or  ' + country.Business_monthly + ' billed monthly</span></div>');

          }

          
          // Business plan for mobile end

          if (comparison_table.innerText === 'Business Plus') {
              feMonthlyBusinessPlus && feMonthlyBusinessPlus.classList.remove('fe-hide');
              feMonthlyBusiness && feMonthlyBusiness.classList.add('fe-hide')
              !feMonthlyBusinessPlus && document.querySelector('.comparison-tree-table-mobile__header-right-col .type-price').insertAdjacentHTML('afterend', '<div class="fe-price-num fe-monthlybp-pricing1"><sup class="fe-sup">' + country.currency_flag + '</sup><span class="fe-subtext"> ' + country.Business_Plus + '</span><p class="fe-year">  ' + country.save_up_label_biz + '</p><span class="fe-rate">/month/user, billed annually <br /> or  ' + country.Business_Plus_monthly + ' billed monthly</span></div>');
          }

          if (comparison_table.innerText === 'Enterprise') {
              feMonthlyBusinessPlus && feMonthlyBusinessPlus.classList.add('fe-hide');
              feMonthlyBusiness && feMonthlyBusiness.classList.add('fe-hide')
          }

        });
      }

    }

    // Function to initialize the tile section
    function initTileSection() {
      document.querySelector('body').classList.add('fe-savings-promo');
      priceListObject();
      monthlyTextChange();
      const featurePlanCard = document.querySelector('[plan="business plus"][action="contact sales"]');
      featurePlanCard && featurePlanCard.classList.add('fe-contactsales');
      
    }

    // Function to initialize the feature comparison section
    function initCompareFeatures() {
      priceListobjectComp();
      monthlyTextChangeComp();
    }

     // Function to initialize the mobile section
    function initMobile() {
      priceListobjectCompMobile();
      monthlyTextChangeCompMobile();
    }

    // Event listener for changes in the switch 
    live('.zm-switch input', 'change', function () {
      funcInterval(initTileSection);
      funcInterval(initCompareFeatures);
      funcInterval(monthlyTextChangeComp);
    })

    // Event listener for dropdown menu selections
    live('.zm-dropdown-menu__item-content .pricing_nav_dropdown_item,[aria-label*="switch types for row 2"], [aria-label="Basic"],[aria-label="Pro"],[aria-label="Business"],[aria-label="Business Plus"],[aria-label="Enterprise"],.zm-select-dropdown__item, .dropdown-detail-item', 'mousedown', function () {

      funcInterval(initTileSection);
      funcInterval(initCompareFeatures);
      funcInterval(monthlyTextChangeComp);
      funcInterval(priceListobjectCompMobile);
      funcInterval(monthlyTextChangeCompMobile);

    });


  // Wait for elements to appear and trigger initialization functions
    waitForElement(".new-tab-content .feature-plan-card .new-price", initTileSection, 50, 50000);
    waitForElement(".comparison-table-new .price-num", initCompareFeatures, 100, 50000);
    waitForElement(".comparison-tree-table-mobile .zm-select-span__inner", initMobile, 100, 50000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
}, "dependencies": []}, {"id": "75E235D8-9B46-4AD6-BADE-9B2EEC033256", "type": "append", "selector": "head", "value": "<style>html body .fe-hide,\nhtml body .fe-monthly-price,\nhtml body .fe-save-up-label-new,\nhtml body.fe-savings-promo .pricing-tabs-bk .feature-plan-card .saving,\nhtml body.fe-savings-promo .bill_date_choose .zm-switch,\nhtml body .comparison-tree-table-mobile .fe-price-num.fe-hide,\nhtml body.fe-savings-promo .fe-contactsales .fe-price-num,\nhtml body.fe-savings-promo .fe-contactsales .fe-rate,\nhtml body.fe-savings-promo [period=\"monthly\"] .comparison-tree-table .fe-price-num,\nhtml body.fe-savings-promo [period=\"monthly\"] .new-pricing-row .fe-price-num,\nhtml body.fe-savings-promo [period=\"monthly\"] .fe-rate,\nhtml body.fe-savings-promo [period=\"annual\"] .plan-wrapper .feature-plan-card .saving,\nhtml body.fe-savings-promo [period=\"annual\"] .new-pricing-row .fe-tab-content+div>.new-price-wrapper,\nhtml body.fe-savings-promo [period=\"annual\"] .comparison-tree-table-mobile-new .new-price,\nhtml body.fe-savings-promo [period=\"annual\"] .comparison-tree-table .fe-tab-content .type-price:not(.type-price-free) {\n    display: none;\n}\n\nhtml body.fe-savings-promo [period=\"annual\"] .zm-table.comparison-table-new .comparison-table-header .fe-tab-content .new-buy-btn {\n    margin-top: 10px;\n}\n\nhtml body.fe-savings-promo .zm-table.comparison-table-new .comparison-table-header .fe-tab-content [data-link-term=\"Buy Now\"] {\n    padding: 7px 29px;\n}\n\nhtml body.fe-savings-promo .fe-new-price .fe-price-part {\n    font-size: 30px;\n    line-height: 23px;\n    margin-top: 10px;\n    margin-bottom: 6px;\n    margin-top: 0;\n    color: #00053d;\n}\n\nhtml body .fe-new-price .fe-subtext.currency-flag {\n    font-size: 12px;\n    font-weight: 600;\n    line-height: 29px;\n    padding-right: 3px;\n    margin-top: 0;\n}\n\nhtml body .fe-price-num,\nhtml body .fe-price-num1 {\n    display: inline;\n    color: var(--day-foreground-foreground, #00053D);\n    font-size: 32px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 120%;\n}\n\nhtml body .comparison-tree-table .fe-price-num {\n    font-size: 20px;\n    display: inline-block;\n}\n\nhtml body .comparison-tree-table .fe-pro-pricing {\n    display: inline-block;\n}\n\nhtml body .fe-flag-hidden {\n    color: transparent;\n    width: 0;\n    display: inline-block;\n}\n\nhtml body .fe-subtext {\n    color: var(--day-foreground-foreground, #00053D);\n    font-size: 32px;\n    font-style: normal;\n    font-weight: 600;\n    margin-left: -4px;\n    display: inline-block;\n    font-family: \"Happy Display\", Internacional, Helvetica, Arial;\n}\n\nhtml body .comparison-tree-table .fe-subtext {\n    padding-top: 5px;\n    margin-left: 0px;\n}\n\nhtml body .fe-subtext .subtext {\n    margin-top: 0px;\n    font-size: 14px;\n    margin-left: 2px;\n}\n\nhtml body .zm-table.comparison-table-new .new-price-wrapper .new-price .price-num .subtext {\n    margin-left: 2px;\n    margin-top: 0px;\n}\n\nhtml body [period=\"monthly\"] .zm-table.comparison-table-new .type-price {\n    height: 70px;\n    margin-top: 6px;\n}\n\nhtml body.fe-savings-promo [period=\"annual\"] .zm-table.comparison-table-new .type-price {\n    height: 44px;\n    margin-top: 10px;\n    line-height: 1;\n}\n\nhtml body .fe-pro-pricing {\n    display: inline-block;\n}\n\nhtml body .fe-year {\n    display: inline;\n    position: relative;\n    top: -5px;\n}\n\nhtml body .fe-rate {\n    display: block;\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 120%;\n    text-transform: initial;\n    letter-spacing: 0px;\n    color: var(--day-foreground-foreground-ada, #666487);\n}\n\nhtml body .new-one-card-layout .feature-plan-card .title-words {\n    margin-bottom: 8px;\n}\n\nhtml body.fe-savings-promo .fe-sup {\n    top: -13px;\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 150%;\n    position: relative;\n    font-family: \"Happy Display\", Internacional, Helvetica, Arial;\n}\n\nhtml body.fe-savings-promo .comparison-tree-table-mobile .fe-subtext {\n    margin-left: 2px;\n}\n\nhtml body .comparison-tree-table .fe-year {\n    font-weight: 400;\n    font-size: 14px;\n    text-transform: lowercase;\n    color: #515079;\n    display: inline;\n    position: relative;\n    top: -7px;\n}\n\nhtml body.fe-savings-promo .feature-plan-card section {\n    max-height: 95px;\n    height: 100%;\n    margin-top: 11px;\n}\n\nhtml body.fe-savings-promo .zm-table.comparison-table-new th.comparison-table-header-cell.fe-enterprise .type-price {\n    display: block;\n    height: 77px;\n    margin: 0;\n}\n\nhtml body [period=\"monthly\"] .zm-table.comparison-table-new th.comparison-table-header-cell.fe-enterprise .type-price {\n    height: 87px;\n}\n\nhtml body.fe-savings-promo .new-ui-style .new-one-card-layout .new-pricing-row .rate,\nhtml body.fe-savings-promo .zm-table.comparison-table-new th.comparison-table-header-cell .cell .rate {\n    font-size: 14px;\n    display: block;\n    color: var(--day-foreground-foreground-ada, #666487);\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 400;\n    letter-spacing: 0;\n    line-height: 120%;\n}\n\nhtml body.fe-savings-promo .new-ui-style .new-one-card-layout .new-pricing-row .price-part .price-num,\nhtml body.fe-savings-promo .zm-table.comparison-table-new .new-price-wrapper .new-price .price-num,\nhtml body.fe-savings-promo .comparison-tree-table-mobile .comparison-tree-table-mobile__header-price-row .price-num {\n    color: var(--day-foreground-foreground, #00053D);\n    font-size: 32px !important;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 100%;\n}\n\nhtml body.fe-savings-promo .new-ui-style .new-one-card-layout .new-pricing-row .price-part .currency-flag,\nhtml body.fe-savings-promo .zm-table.comparison-table-new .new-price-wrapper .new-price .price-part .currency-flag {\n    line-height: 143%;\n    margin-top: 0px;\n}\n\n\n/* new css */\n\nhtml body .comparison-tree-table-mobile .comparison-tree-table-mobile__header-price-row .rate {\n    font-size: 12px;\n    height: 21px;\n    display: block;\n    margin-top: -8px;\n}\n\nhtml body.fe-savings-promo [period=\"monthly\"] .comparison-tree-table-mobile__header-btn-row {\n    padding-top: 40px;\n}\n\nhtml body .comparison-tree-table-mobile .comparison-tree-table-mobile__header-price-row .fe-subtext .subtext {\n    margin-top: -4px;\n}\n\nhtml body.fe-savings-promo .comparison-tree-table-mobile .new-price-wrapper .new-price .subtext {\n    margin-top: 9px;\n}\n\nhtml body.fe-savings-promo .new-one-card-layout .comparison-tree-table-mobile .new-price-wrapper .new-price .currency-flag {\n    margin-top: 5px;\n}\n\nhtml body.fe-savings-promo .comparison-tree-table-mobile .comparison-tree-table-mobile__header-price-row .type-price-free {\n    margin-top: 15px;\n}\n\nhtml body.fe-savings-promo .comparison-tree-table-mobile-new .comparison-tree-table-mobile__inside {\n    padding-top: 40.76923vw;\n}\n\nhtml body .comparison-tree-table-mobile .fe-price-num {\n    margin: 21px 0 8px;\n    text-align: center;\n}\n\nhtml body.fe-savings-promo .tabs-new-inside .select-container_left .bill_date_choose {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    gap: 10px;\n    opacity: 0;\n    cursor: default;\n}\n\nhtml body.fe-savings-promo .grey-region .billed-container .left-section {\n    opacity: 0;\n    cursor: default;\n}</style>", "dependencies": []}]}]}], "weightDistributions": [{"entityId": "25773870989", "endOfRange": 10000}], "name": null, "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["25786961533"], "weightDistributions": null, "decisionMetadata": null}, {"changes": null, "id": "25902950169", "name": null, "commitId": "25894120413", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"contentsquare": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "21736930277", "25540610666"], "audienceName": null, "changes": null, "id": "25875950072", "integrationSettings": null, "variations": [{"id": "25874780081", "name": null, "actions": []}, {"id": "25876430173", "name": null, "actions": [{"viewId": "25786961533", "changes": [{"id": "3bd00a7231f0452a81dd0d2131928e34", "type": "custom_code", "value": function($){(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "";
    /* helper library */
    function waitForElement(selector, trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function () {
        if (
          document &&
          document.querySelector(selector) &&
          document.querySelectorAll(selector).length > 0
        ) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function () {
        clearInterval(interval);
      }, delayTimeout);
    }

    function live(selector, event, callback, context) {
      /****Helper Functions****/
      // helper for enabling IE 8 event bindings
      function addEvent(el, type, handler) {
        if (el.attachEvent) el.attachEvent("on" + type, handler);
        else el.addEventListener(type, handler);
      }
      // matches polyfill
      this.Element &&
        (function (ElementPrototype) {
          ElementPrototype.matches =
            ElementPrototype.matches ||
            ElementPrototype.matchesSelector ||
            ElementPrototype.webkitMatchesSelector ||
            ElementPrototype.msMatchesSelector ||
            function (selector) {
              var node = this,
                nodes = (
                  node.parentNode || node.document
                ).querySelectorAll(selector),
                i = -1;
              while (nodes[++i] && nodes[i] != node);
              return !!nodes[i];
            };
        })(Element.prototype);
      // live binding helper using matchesSelector
      function live(selector, event, callback, context) {
        addEvent(context || document, event, function (e) {
          var found,
            el = e.target || e.srcElement;
          while (
            el &&
            el.matches &&
            el !== context &&
            !(found = el.matches(selector))
          )
            el = el.parentElement;
          if (found) callback.call(el, e);
        });
      }
      live(selector, event, callback, context);
    }

    function funcInterval(trigger) {
      var interval = setInterval(function () {
        trigger();
      }, 20);
      setTimeout(function () {
        clearInterval(interval);
      }, 5000);
    }

    /* Variation Init */
    var pricing_data = [
      {
        "name": 'US',
        "currencyValue": 'USD',
        "currency_flag": '$',
        "Pro": 12 + '<span class="subtext">' + 49 + '</span>',
        "Business": 16 + '<span class="subtext">' + 66 + '</span>',
        "Business_Plus": 20 + '<span class="subtext">83</span>',
        "Pro_monthly": '$' + 15.99,
        "Business_monthly": '$' + 19.99,
        "Business_Plus_monthly": '$' + 25 + '.' + '00',
        "save_up_label": '<span class="fe-save-up-label-new">Save 21%</span>',
        "save_up_label_biz": '<span class="fe-save-up-label-new">Save 16%</span>',
      },
      {
        "name": "NZ",
        "currencyValue": 'NZD',
        "currency_flag": 'NZ$',
        "Pro": 17 + '<span class="subtext">' + 74 + '</span>',
        "Business": 23 + '<span class="subtext">' + 65 + '</span>',
        "Business_Plus": 31 + '<span class="subtext">67</span>',
        "Pro_monthly": 'NZ$' + 22.99,
        "Business_monthly": 'NZ$' + 28.39,
        "Business_Plus_monthly": 'NZ$' + 38 + '.' + '00',
        "save_up_label": '<span class="fe-save-up-label-new">Save 22%</span>',
        "save_up_label_biz": '<span class="fe-save-up-label-new">Save 16%</span>',
      },
      {
        "name": "GB",
        "currencyValue": 'GBP',
        "currency_flag": '£',
        "Pro": 9 + '<span class="subtext">' + 99 + '</span>',
        "Business": 13 + '<span class="subtext">' + 33 + '</span>',
        "Business_Plus": 15 + '<span class="subtext">42</span>',
        "Pro_monthly": '£' + 12.99,
        "Business_monthly": '£' + 15.99,
        "Business_Plus_monthly": '£' + 18 + '.' + '50',
        "save_up_label": '<span class="fe-save-up-label-new">Save 23%</span>',
        "save_up_label_biz": '<span class="fe-save-up-label-new">Save 16%</span>',
      },
      {
        "name": "CA",
        "currencyValue": 'CAD',
        "currency_flag": 'CAD',
        "Pro": 16 + '<span class="subtext">67</span>',
        "Business": 22 + '<span class="subtext">50</span>',
        "Business_Plus": 26 + '<span class="subtext">25</span>',
        "Pro_monthly": 'CAD' + 21.49,
        "Business_monthly": 'CAD' + 27 + '.' + '00',
        "Business_Plus_monthly": 'CAD' + 31 + '.' + '50',
        "save_up_label": '<span class="fe-save-up-label-new">Save 22%</span>',
        "save_up_label_biz": '<span class="fe-save-up-label-new">Save 16%</span>',
      },
      {
        "name": "IE",
        "currencyValue": 'EUR',
        "currency_flag": '€',
        "Pro": 11 + '<span class="subtext">' + 66 + '</span>',
        "Business": 15 + '<span class="subtext">' + 83 + '</span>',
        "Business_Plus": 18 + '<span class="subtext">' + 41 + '</span>',
        "Pro_monthly": '€' + 14.99,
        "Business_monthly": '€' + 18.99,
        "Business_Plus_monthly": '€' + 22 + '.' + '00',
        "save_up_label": '<span class="fe-save-up-label-new">Save 22%</span>',
        "save_up_label_biz": '<span class="fe-save-up-label-new">Save 16%</span>',
      },
      {
        "name": 'AU',
        "currencyValue": 'AUD',
        "currency_flag": 'A$',
        "Pro": 17 + '<span class="subtext">' + 49 + '</span>',
        "Business": 23 + '<span class="subtext">' + 33 + '</span>',
        "Business_Plus": 28 + '<span class="subtext">' + 96 + '</span>',
        "Pro_monthly": 'A$' + 22.39,
        "Business_monthly": 'A$' + 27.99,
        "Business_Plus_monthly": 'A$' + 34.75,
        "save_up_label": '<span class="fe-save-up-label-new">Save 21%</span>',
        "save_up_label_biz": '<span class="fe-save-up-label-new">Save 16%</span>'
      },
    ]
    var currencies = ["USD", "NZD", "GBP", 'CAD', "EUR","AUD"];

    // Function to update text for monthly billing
    function monthlyTextChange() {
      const elements = document.querySelectorAll('.new-pricing-row .rate');
      const newText = '/month/user, billed monthly';
      updateText(elements, newText);
    }

    // Function to update text for monthly billing (comparison tables)
    function monthlyTextChangeComp() {
      const elements = document.querySelectorAll('.zm-table.comparison-table-new th.comparison-table-header-cell .cell .rate');
      const newText = '/month/user, billed monthly';
      updateText(elements, newText);
    }

    // Function to update text for monthly billing (mobile comparison tables)
    function monthlyTextChangeCompMobile() {
      const elements = document.querySelectorAll('.comparison-tree-table-mobile  .new-price .rate');
      const newText = '/month/user, billed monthly';
      updateText(elements, newText);
    }

    // Function to update text for elements
    function updateText(elements, newText) {
      for (let i = 0; i < elements.length; i++) {
        elements[i].innerText = newText;
      }
    }

    // Function to add a class to the "Enterprise" pricing plan
    function addClassToEnterprise() {
      const contactSalesBtn = document.querySelector('.new-buy-btn [data-link-term="Contact Sales"]');
      if (contactSalesBtn) {
        contactSalesBtn.closest('th').classList.add('fe-enterprise');
      }
    }
    
    // Function to insert pricing information
    function insertPricingInfo(pricing, currencyFlag, monthlyPrice, className, saveUpLabel) {
      const headerCells = document.querySelectorAll('.new-tab-content .feature-plan-card .title-words');
    
      headerCells.forEach(headerCell => {
        headerCell.closest('.title').classList.add('fe-tab-content');
        if (headerCell.innerText === className) {
          const priceClassName = 'fe-' + className.toLowerCase().replace(' ', '');
          if (!document.querySelector('.' + priceClassName)) {
            const insertIndex = Array.from(headerCells).findIndex(cell => cell.innerText === className);
            const priceHTML = `<div class="fe-price-num ${priceClassName}">
              <div class="fe-pro-pricing">
                <strike class="fe-monthly-price">${monthlyPrice}</strike>
                <sup class="fe-sup">${currencyFlag}</sup>
                <span class="fe-subtext">${pricing}</span>
              </div>
              <p class="fe-year">${saveUpLabel}</p>
            </div>
            <span class="fe-rate">/month/user, billed annually</span>`;
            headerCells[insertIndex].insertAdjacentHTML('afterend', priceHTML);
          }
        }
      });
    }
    
    // Function to update pricing information for desktop
    function priceListObject() {
      addClassToEnterprise();

      const currencyValueToFind = window.dataModel.currencyValue;
      const country = pricing_data.find(item => item.currencyValue === currencyValueToFind);

      if (country) {
        insertPricingInfo(country.Pro, country.currency_flag, country.Pro_monthly, 'Pro', country.save_up_label);
        insertPricingInfo(country.Business, country.currency_flag, country.Business_monthly, 'Business', country.save_up_label_biz);
        insertPricingInfo(country.Business_Plus, country.currency_flag, country.Business_Plus_monthly, 'Business Plus', country.save_up_label_biz);
      }
    
    }
    
    // Function to add a class to the "Enterprise" pricing plan (comparison tables)
    function addClassToCompEnterprise() {
      const contactSalesBtn = document.querySelector('.new-buy-btn [data-link-term="Contact Sales"]');
      if (contactSalesBtn) {
        contactSalesBtn.closest('th').classList.add('fe-enterprise');
      }
    }
    // Function to insert pricing information into comparison tables
    function insertComparisonPricingInfo(pricing, currencyFlag, className, saveUpLabel) {
      const comparisonTables = document.querySelectorAll('.comparison-table-new .type-title');
    
      comparisonTables.forEach(comparisonTable => {
        comparisonTable.closest('.cell').classList.add('fe-tab-content');
        if (comparisonTable.innerText === className) {
          const priceClassName = 'fe-' + className.toLowerCase().replace(' ', '');
          if (!document.querySelector('.' + priceClassName + '1')) {
            const insertIndex = Array.from(comparisonTables).findIndex(table => table.innerText === className);
            const priceHTML = `<div class="fe-price-num ${priceClassName + '1'}">
              <div class="fe-pro-pricing">
                <sup class="fe-sup">${currencyFlag}</sup>
                <span class="fe-subtext">${pricing}</span>
              </div>
              <p class="fe-year">  ${saveUpLabel}</p>
            </div>
            <span class="fe-rate">/month/user, billed annually</span>`;
            comparisonTables[insertIndex].insertAdjacentHTML('afterend', priceHTML);
          }
        }
      });
    }
    
     // Function to update pricing information for comparison tables
    function priceListobjectComp() {
      addClassToCompEnterprise();

      const currencyValueToFind = window.dataModel.currencyValue;
      const country = pricing_data.find(item => item.currencyValue === currencyValueToFind);

      if (country) {
        insertComparisonPricingInfo(country.Pro, country.currency_flag, 'Pro', country.save_up_label);
        insertComparisonPricingInfo(country.Business, country.currency_flag, 'Business', country.save_up_label_biz);
        insertComparisonPricingInfo(country.Business_Plus, country.currency_flag, 'Business Plus', country.save_up_label_biz);
      }
    
    }
    

    // Function to update pricing information for mobile comparison tables
    function priceListobjectCompMobile() {

      const currencyValueToFind = window.dataModel.currencyValue;
      const country = pricing_data.find(item => item.currencyValue === currencyValueToFind);

      if (country) {
        var comparison_tables = document.querySelectorAll('.comparison-tree-table-mobile .zm-select-span__inner');
        comparison_tables.forEach(comparison_table => {

          var feMonthlyBusinessPlus = document.querySelector('.comparison-tree-table-mobile .fe-monthlybp-pricing1');
          var feMonthlyBusiness = document.querySelector('.comparison-tree-table-mobile .fe-monthly-pricing1');
          var fePro = document.querySelector('.comparison-tree-table-mobile .fe-pro1');
          var fePro2 = document.querySelector('.comparison-tree-table-mobile .fe-pro2');

          var activeNavHeading =  document.querySelector('.pricing_nav_dropdown .active-nav-item h2');

          // Basic plan selected
          if (comparison_table.innerText === 'Basic') {
              fePro && fePro.classList.add('fe-hide');
          }
         
          // 
          if (activeNavHeading.innerText === 'Business') {                
            if (comparison_table.innerText === 'Pro') {
                fePro && fePro.classList.remove('fe-hide');
                !fePro && document.querySelector('.comparison-tree-table-mobile__header-left-col .type-price').insertAdjacentHTML('afterend', '<div class="fe-price-num fe-pro1"><div class="fe-pro-pricing"><sup class="fe-sup">' + country.currency_flag + '</sup><span class="fe-subtext"> ' + country.Pro + '</span></div><p class="fe-year">  ' + country.save_up_label + '</p><span class="fe-rate">/month/user, billed annually</span></div>');
            }
          }

           // persona plan for mobile
          if (document.querySelector('[current-usage-type="personal"]')) {
         
            feMonthlyBusiness && feMonthlyBusiness.classList.add('fe-hide')
            feMonthlyBusinessPlus && feMonthlyBusinessPlus.classList.add('fe-hide');
            fePro && fePro.classList.add('fe-hide');

            fePro2 && fePro2.classList.remove('fe-hide');

            if (comparison_table.innerText === 'Pro') {                  
              !fePro2 && document.querySelector('[current-usage-type="personal"] .comparison-tree-table-mobile__header-right-col .type-price').insertAdjacentHTML('afterend', '<div class="fe-price-num fe-pro2"><div class="fe-pro-pricing"><sup class="fe-sup">' + country.currency_flag + '</sup><span class="fe-subtext"> ' + country.Pro + '</span></div><p class="fe-year">  ' + country.save_up_label + '</p><span class="fe-rate">/month/user, billed annually</span></div>');
            }
          }
          // persona plan end

           // Business plan for mobile
         
          if (comparison_table.innerText === 'Business') {
            feMonthlyBusinessPlus && feMonthlyBusinessPlus.classList.add('fe-hide');
            feMonthlyBusiness && feMonthlyBusiness.classList.remove('fe-hide')

            if (activeNavHeading.innerText === 'Personal') {
              fePro2 && fePro2.classList.add('fe-hide');
            }

            fePro2 && fePro2.classList.add('fe-hide');
            !feMonthlyBusiness && document.querySelector('.comparison-tree-table-mobile__header-right-col .type-price').insertAdjacentHTML('afterend', '<div class="fe-price-num fe-monthly-pricing1"><sup class="fe-sup">' + country.currency_flag + '</sup><span class="fe-subtext"> ' + country.Business + '</span><p class="fe-year">  ' + country.save_up_label_biz + '</p><span class="fe-rate">/month/user, billed annually</span></div>');

          }

          
          // Business plan for mobile end

          if (comparison_table.innerText === 'Business Plus') {
              feMonthlyBusinessPlus && feMonthlyBusinessPlus.classList.remove('fe-hide');
              feMonthlyBusiness && feMonthlyBusiness.classList.add('fe-hide')
              !feMonthlyBusinessPlus && document.querySelector('.comparison-tree-table-mobile__header-right-col .type-price').insertAdjacentHTML('afterend', '<div class="fe-price-num fe-monthlybp-pricing1"><sup class="fe-sup">' + country.currency_flag + '</sup><span class="fe-subtext"> ' + country.Business_Plus + '</span><p class="fe-year">  ' + country.save_up_label_biz + '</p><span class="fe-rate">/month/user, billed annually</span></div>');
          }

          if (comparison_table.innerText === 'Enterprise') {
              feMonthlyBusinessPlus && feMonthlyBusinessPlus.classList.add('fe-hide');
              feMonthlyBusiness && feMonthlyBusiness.classList.add('fe-hide')
          }

        });
      }

    }

    // Function to initialize the tile section
    function initTileSection() {
      document.querySelector('body').classList.add('fe-savings-promo');
      priceListObject();
      monthlyTextChange();
      const featurePlanCard = document.querySelector('[plan="business plus"][action="contact sales"]');
      featurePlanCard && featurePlanCard.classList.add('fe-contactsales');
    }

    // Function to initialize the feature comparison section
    function initCompareFeatures() {
      priceListobjectComp();
      monthlyTextChangeComp();
    }

     // Function to initialize the mobile section
    function initMobile() {
      priceListobjectCompMobile();
      monthlyTextChangeCompMobile();
    }

    // Event listener for changes in the switch 
    live('.zm-switch input', 'change', function () {
      funcInterval(initTileSection);
      funcInterval(initCompareFeatures);
      funcInterval(monthlyTextChangeComp);
    })

    // Event listener for dropdown menu selections
    live('.zm-dropdown-menu__item-content .pricing_nav_dropdown_item,[aria-label*="switch types for row 2"], [aria-label="Basic"],[aria-label="Pro"],[aria-label="Business"],[aria-label="Business Plus"],[aria-label="Enterprise"],.zm-select-dropdown__item, .dropdown-detail-item', 'mousedown', function () {

      funcInterval(initTileSection);
      funcInterval(initCompareFeatures);
      funcInterval(monthlyTextChangeComp);
      funcInterval(priceListobjectCompMobile);
      funcInterval(monthlyTextChangeCompMobile);

    });


  // Wait for elements to appear and trigger initialization functions
    waitForElement(".new-tab-content .feature-plan-card .new-price", initTileSection, 50, 50000);
    waitForElement(".comparison-table-new .price-num", initCompareFeatures, 100, 50000);
    waitForElement(".comparison-tree-table-mobile .zm-select-span__inner", initMobile, 100, 50000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
}, "dependencies": []}, {"id": "2ae8f6c664a2454f96e737cedf01f4e9", "type": "append", "selector": "head", "value": "<style>html body .fe-hide,\nhtml body [period=\"monthly\"] .comparison-tree-table .fe-price-num,\nhtml body .comparison-tree-table-mobile .fe-price-num.fe-hide,\nhtml body [period=\"monthly\"] .new-pricing-row .fe-price-num,\nhtml body [period=\"monthly\"] .fe-rate,\nhtml body [period=\"annual\"] .plan-wrapper .feature-plan-card .saving,\nhtml body .pricing-tabs-bk .feature-plan-card .saving,\nhtml body.fe-savings-promo .fe-contactsales .fe-price-num,\nhtml body.fe-savings-promo .fe-contactsales .fe-rate,\nhtml body.fe-savings-promo [period=\"annual\"] .new-pricing-row .fe-tab-content+div>.new-price-wrapper,\nhtml body.fe-savings-promo [period=\"annual\"] .comparison-tree-table-mobile-new .new-price,\nhtml body.fe-savings-promo [period=\"annual\"] .comparison-tree-table .fe-tab-content .type-price:not(.type-price-free) {\n    display: none;\n}\n\nhtml body.fe-savings-promo [period=\"annual\"] .zm-table.comparison-table-new .comparison-table-header .fe-tab-content .new-buy-btn {\n    margin-top: 10px;\n}\n\nhtml body.fe-savings-promo .zm-table.comparison-table-new .comparison-table-header .fe-tab-content [data-link-term=\"Buy Now\"] {\n    padding: 7px 29px;\n}\n\nhtml body.fe-savings-promo .fe-new-price .fe-price-part {\n    font-size: 30px;\n    line-height: 23px;\n    margin-top: 10px;\n    margin-bottom: 6px;\n    margin-top: 0;\n    color: #00053d;\n}\n\nhtml body .fe-new-price .fe-subtext.currency-flag {\n    font-size: 12px;\n    font-weight: 600;\n    line-height: 29px;\n    padding-right: 3px;\n    margin-top: 0;\n}\n\nhtml body .fe-price-num,\nhtml body .fe-price-num1 {\n    display: inline;\n    color: var(--day-foreground-foreground, #00053D);\n    font-size: 32px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 120%;\n}\n\nhtml body .comparison-tree-table .fe-price-num {\n    font-size: 20px;\n    display: inline-block;\n}\n\nhtml body .comparison-tree-table .fe-pro-pricing {\n    display: inline-block;\n}\n\nhtml body .fe-flag-hidden {\n    color: transparent;\n    width: 0;\n    display: inline-block;\n}\n\nhtml body .fe-subtext {\n    color: var(--day-foreground-foreground, #00053D);\n    font-size: 32px;\n    font-style: normal;\n    font-weight: 600;\n    margin-left: -4px;\n    display: inline-block;\n    font-family: \"Happy Display\", Internacional, Helvetica, Arial;\n}\n\nhtml body .comparison-tree-table .fe-subtext {\n    padding-top: 5px;\n    margin-left: -2px;\n}\n\nhtml body .fe-subtext .subtext {\n    margin-top: 0px;\n    font-size: 14px;\n    margin-left: 2px;\n}\n\nhtml body .zm-table.comparison-table-new .new-price-wrapper .new-price .price-num .subtext {\n    margin-left: 2px;\n    margin-top: 0px;\n}\n\nhtml body [period=\"monthly\"] .zm-table.comparison-table-new .type-price {\n    height: 70px;\n    margin-top: 6px;\n}\n\nhtml body.fe-savings-promo [period=\"annual\"] .zm-table.comparison-table-new .type-price {\n    height: 44px;\n    margin-top: 10px;\n    line-height: 1;\n}\n\nhtml body .fe-pro-pricing {\n    display: inline-block;\n}\n\nhtml body .fe-year {\n    display: inline;\n    position: relative;\n    top: -5px;\n}\n\nhtml body .fe-rate {\n    display: block;\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 120%;\n    text-transform: lowercase;\n    letter-spacing: 0px;\n    color: var(--day-foreground-foreground-ada, #666487);\n}\n\nhtml body .fe-monthly-price {\n    color: var(--day-foreground-foreground-ada, #666487);\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 120%;\n    display: block;\n    margin-top: 8px;\n    font-family: \"Happy Display\", Internacional, Helvetica, Arial;\n}\n\nhtml body .fe-save-up-label-new {\n    background: linear-gradient(92.79deg, #268543 7.27%, #1c837e 92.73%);\n    border-radius: 4px 8px;\n    padding: 0 6px;\n    color: #fff;\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 20px;\n    display: inline;\n    text-transform: capitalize;\n}\n\nhtml body.fe-savings-promo .fe-sup {\n    top: -13px;\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 150%;\n    position: relative;\n    font-family: \"Happy Display\", Internacional, Helvetica, Arial;\n}\n\nhtml body.fe-savings-promo .comparison-tree-table-mobile .fe-subtext {\n    margin-left: 2px;\n}\n\nhtml body .comparison-tree-table .fe-year {\n    font-weight: 400;\n    font-size: 14px;\n    text-transform: lowercase;\n    color: #515079;\n    display: inline;\n    position: relative;\n    top: -7px;\n}\n\nhtml body.fe-savings-promo .feature-plan-card section {\n    max-height: 95px;\n    height: 100%;\n    margin-top: 11px;\n}\n\nhtml body.fe-savings-promo .zm-table.comparison-table-new th.comparison-table-header-cell.fe-enterprise .type-price {\n    display: block;\n    height: 57px;\n    margin: 0;\n}\n\nhtml body [period=\"monthly\"] .zm-table.comparison-table-new th.comparison-table-header-cell.fe-enterprise .type-price {\n    height: 87px;\n}\n\nhtml body.fe-savings-promo .new-ui-style .new-one-card-layout .new-pricing-row .rate,\nhtml body.fe-savings-promo .zm-table.comparison-table-new th.comparison-table-header-cell .cell .rate {\n    font-size: 14px;\n    display: block;\n    color: var(--day-foreground-foreground-ada, #666487);\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 400;\n    letter-spacing: 0;\n    line-height: 120%;\n}\n\nhtml body.fe-savings-promo .new-ui-style .new-one-card-layout .new-pricing-row .price-part .price-num,\nhtml body.fe-savings-promo .zm-table.comparison-table-new .new-price-wrapper .new-price .price-num,\nhtml body.fe-savings-promo .comparison-tree-table-mobile .comparison-tree-table-mobile__header-price-row .price-num {\n    color: var(--day-foreground-foreground, #00053D);\n    font-size: 32px !important;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 100%;\n}\n\nhtml body.fe-savings-promo .new-ui-style .new-one-card-layout .new-pricing-row .price-part .currency-flag,\nhtml body.fe-savings-promo .zm-table.comparison-table-new .new-price-wrapper .new-price .price-part .currency-flag {\n    line-height: 143%;\n    margin-top: 0px;\n}\n\n\n/* new css */\n\nhtml body .comparison-tree-table-mobile .comparison-tree-table-mobile__header-price-row .rate {\n    font-size: 12px;\n    height: 21px;\n    display: block;\n    margin-top: -8px;\n}\n\nhtml body.fe-savings-promo [period=\"monthly\"] .comparison-tree-table-mobile__header-btn-row {\n    padding-top: 40px;\n}\n\nhtml body .comparison-tree-table-mobile .comparison-tree-table-mobile__header-price-row .fe-subtext .subtext {\n    margin-top: -4px;\n}\n\nhtml body.fe-savings-promo .comparison-tree-table-mobile .new-price-wrapper .new-price .subtext {\n    margin-top: 9px;\n}\n\nhtml body.fe-savings-promo .new-one-card-layout .comparison-tree-table-mobile .new-price-wrapper .new-price .currency-flag {\n    margin-top: 5px;\n}\n\nhtml body.fe-savings-promo .comparison-tree-table-mobile .comparison-tree-table-mobile__header-price-row .type-price-free {\n    margin-top: 15px;\n}\n\nhtml body.fe-savings-promo .comparison-tree-table-mobile-new .comparison-tree-table-mobile__inside {\n    padding-top: 40.76923vw;\n}\n\nhtml body .comparison-tree-table-mobile .fe-price-num {\n    margin: 21px 0 8px;\n}</style>", "dependencies": []}]}]}, {"id": "25869980115", "name": null, "actions": [{"viewId": "25786961533", "changes": [{"id": "0070df1fe39046cfbbf140b1e25e2376", "type": "custom_code", "value": function($){(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "";
    /* helper library */
    function waitForElement(selector, trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function () {
        if (
          document &&
          document.querySelector(selector) &&
          document.querySelectorAll(selector).length > 0
        ) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function () {
        clearInterval(interval);
      }, delayTimeout);
    }

    function live(selector, event, callback, context) {
      /****Helper Functions****/
      // helper for enabling IE 8 event bindings
      function addEvent(el, type, handler) {
        if (el.attachEvent) el.attachEvent("on" + type, handler);
        else el.addEventListener(type, handler);
      }
      // matches polyfill
      this.Element &&
        (function (ElementPrototype) {
          ElementPrototype.matches =
            ElementPrototype.matches ||
            ElementPrototype.matchesSelector ||
            ElementPrototype.webkitMatchesSelector ||
            ElementPrototype.msMatchesSelector ||
            function (selector) {
              var node = this,
                nodes = (
                  node.parentNode || node.document
                ).querySelectorAll(selector),
                i = -1;
              while (nodes[++i] && nodes[i] != node);
              return !!nodes[i];
            };
        })(Element.prototype);
      // live binding helper using matchesSelector
      function live(selector, event, callback, context) {
        addEvent(context || document, event, function (e) {
          var found,
            el = e.target || e.srcElement;
          while (
            el &&
            el.matches &&
            el !== context &&
            !(found = el.matches(selector))
          )
            el = el.parentElement;
          if (found) callback.call(el, e);
        });
      }
      live(selector, event, callback, context);
    }

    function funcInterval(trigger) {
      var interval = setInterval(function () {
        trigger();
      }, 20);
      setTimeout(function () {
        clearInterval(interval);
      }, 5000);
    }

    /* Variation Init */
    var pricing_data = [
      {
        "name": 'US',
        "currencyValue": 'USD',
        "currency_flag": '$',
        "Pro": 12 + '<span class="subtext">' + 49 + '</span>',
        "Business": 16 + '<span class="subtext">' + 66 + '</span>',
        "Business_Plus": 20 + '<span class="subtext">83</span>',
        "Pro_monthly": '$' + 15.99,
        "Business_monthly": '$' + 19.99,
        "Business_Plus_monthly": '$' + 25 + '.' + '00',
        "save_up_label": '<span class="fe-save-up-label-new">Save 21%</span>',
        "save_up_label_biz": '<span class="fe-save-up-label-new">Save 16%</span>',
      },
      {
        "name": "NZ",
        "currencyValue": 'NZD',
        "currency_flag": 'NZ$',
        "Pro": 17 + '<span class="subtext">' + 74 + '</span>',
        "Business": 23 + '<span class="subtext">' + 65 + '</span>',
        "Business_Plus": 31 + '<span class="subtext">67</span>',
        "Pro_monthly": 'NZ$' + 22.99,
        "Business_monthly": 'NZ$' + 28.39,
        "Business_Plus_monthly": 'NZ$' + 38 + '.' + '00',
        "save_up_label": '<span class="fe-save-up-label-new">Save 22%</span>',
        "save_up_label_biz": '<span class="fe-save-up-label-new">Save 16%</span>',
      },
      {
        "name": "GB",
        "currencyValue": 'GBP',
        "currency_flag": '£',
        "Pro": 9 + '<span class="subtext">' + 99 + '</span>',
        "Business": 13 + '<span class="subtext">' + 33 + '</span>',
        "Business_Plus": 15 + '<span class="subtext">42</span>',
        "Pro_monthly": '£' + 12.99,
        "Business_monthly": '£' + 15.99,
        "Business_Plus_monthly": '£' + 18 + '.' + '50',
        "save_up_label": '<span class="fe-save-up-label-new">Save 23%</span>',
        "save_up_label_biz": '<span class="fe-save-up-label-new">Save 16%</span>',
      },
      {
        "name": "CA",
        "currencyValue": 'CAD',
        "currency_flag": 'CAD',
        "Pro": 16 + '<span class="subtext">67</span>',
        "Business": 22 + '<span class="subtext">50</span>',
        "Business_Plus": 26 + '<span class="subtext">25</span>',
        "Pro_monthly": 'CAD' + 21.49,
        "Business_monthly": 'CAD' + 27 + '.' + '00',
        "Business_Plus_monthly": 'CAD' + 31 + '.' + '50',
        "save_up_label": '<span class="fe-save-up-label-new">Save 22%</span>',
        "save_up_label_biz": '<span class="fe-save-up-label-new">Save 16%</span>',
      },
      {
        "name": "IE",
        "currencyValue": 'EUR',
        "currency_flag": '€',
        "Pro": 11 + '<span class="subtext">' + 66 + '</span>',
        "Business": 15 + '<span class="subtext">' + 83 + '</span>',
        "Business_Plus": 18 + '<span class="subtext">' + 41 + '</span>',
        "Pro_monthly": '€' + 14.99,
        "Business_monthly": '€' + 18.99,
        "Business_Plus_monthly": '€' + 22 + '.' + '00',
        "save_up_label": '<span class="fe-save-up-label-new">Save 22%</span>',
        "save_up_label_biz": '<span class="fe-save-up-label-new">Save 16%</span>',
      },
      {
        "name": 'AU',
        "currencyValue": 'AUD',
        "currency_flag": 'A$',
        "Pro": 17 + '<span class="subtext">' + 49 + '</span>',
        "Business": 23 + '<span class="subtext">' + 33 + '</span>',
        "Business_Plus": 28 + '<span class="subtext">' + 96 + '</span>',
        "Pro_monthly": 'A$' + 22.39,
        "Business_monthly": 'A$' + 27.99,
        "Business_Plus_monthly": 'A$' + 34.75,
        "save_up_label": '<span class="fe-save-up-label-new">Save 21%</span>',
        "save_up_label_biz": '<span class="fe-save-up-label-new">Save 16%</span>'
      },
    ]
    var currencies = ["USD", "NZD", "GBP", 'CAD', "EUR","AUD"];

    // Function to update text for monthly billing
    function monthlyTextChange() {
      const elements = document.querySelectorAll('.new-pricing-row .rate');
      const newText = '/month/user, billed monthly';
      updateText(elements, newText);
    }

    // Function to update text for monthly billing (comparison tables)
    function monthlyTextChangeComp() {
      const elements = document.querySelectorAll('.zm-table.comparison-table-new th.comparison-table-header-cell .cell .rate');
      const newText = '/month/user, billed monthly';
      updateText(elements, newText);
    }

    // Function to update text for monthly billing (mobile comparison tables)
    function monthlyTextChangeCompMobile() {
      const elements = document.querySelectorAll('.comparison-tree-table-mobile  .new-price .rate');
      const newText = '/month/user, billed monthly';
      updateText(elements, newText);
    }

    // Function to update text for elements
    function updateText(elements, newText) {
      for (let i = 0; i < elements.length; i++) {
        elements[i].innerText = newText;
      }
    }

    // Function to add a class to the "Enterprise" pricing plan
    function addClassToEnterprise() {
      const contactSalesBtn = document.querySelector('.new-buy-btn [data-link-term="Contact Sales"]');
      if (contactSalesBtn) {
        contactSalesBtn.closest('th').classList.add('fe-enterprise');
      }
    }
    
    // Function to insert pricing information
    function insertPricingInfo(pricing, currencyFlag, monthlyPrice, className, saveUpLabel) {
      const headerCells = document.querySelectorAll('.new-tab-content .feature-plan-card .title-words');
    
      headerCells.forEach(headerCell => {
        headerCell.closest('.title').classList.add('fe-tab-content');
        if (headerCell.innerText === className) {
          const priceClassName = 'fe-' + className.toLowerCase().replace(' ', '');
          if (!document.querySelector('.' + priceClassName)) {
            const insertIndex = Array.from(headerCells).findIndex(cell => cell.innerText === className);
            const priceHTML = `<div class="fe-price-num ${priceClassName}">
              <div class="fe-pro-pricing">
                <strike class="fe-monthly-price">${monthlyPrice}</strike>
                <sup class="fe-sup">${currencyFlag}</sup>
                <span class="fe-subtext">${pricing}</span>
              </div>
              <p class="fe-year">${saveUpLabel}</p>
            </div>
            <span class="fe-rate">/month/user, billed annually <br /> or ${monthlyPrice} billed monthly</span>`;
            headerCells[insertIndex].insertAdjacentHTML('afterend', priceHTML);
          }
        }
      });
    }
    
    // Function to update pricing information for desktop
    function priceListObject() {
      addClassToEnterprise();

      const currencyValueToFind = window.dataModel.currencyValue;
      const country = pricing_data.find(item => item.currencyValue === currencyValueToFind);

      if (country) {
        insertPricingInfo(country.Pro, country.currency_flag, country.Pro_monthly, 'Pro', country.save_up_label);
        insertPricingInfo(country.Business, country.currency_flag, country.Business_monthly, 'Business', country.save_up_label_biz);
        insertPricingInfo(country.Business_Plus, country.currency_flag, country.Business_Plus_monthly, 'Business Plus', country.save_up_label_biz);
      }
    
    }
    
    // Function to add a class to the "Enterprise" pricing plan (comparison tables)
    function addClassToCompEnterprise() {
      const contactSalesBtn = document.querySelector('.new-buy-btn [data-link-term="Contact Sales"]');
      if (contactSalesBtn) {
        contactSalesBtn.closest('th').classList.add('fe-enterprise');
      }
    }
    // Function to insert pricing information into comparison tables
    function insertComparisonPricingInfo(pricing, currencyFlag, monthlyPrice, className, saveUpLabel) {
      const comparisonTables = document.querySelectorAll('.comparison-table-new .type-title');
    
      comparisonTables.forEach(comparisonTable => {
        comparisonTable.closest('.cell').classList.add('fe-tab-content');
        if (comparisonTable.innerText === className) {
          const priceClassName = 'fe-' + className.toLowerCase().replace(' ', '');
          if (!document.querySelector('.' + priceClassName + '1')) {
            const insertIndex = Array.from(comparisonTables).findIndex(table => table.innerText === className);
            const priceHTML = `<div class="fe-price-num ${priceClassName + '1'}">
              <div class="fe-pro-pricing">
                <sup class="fe-sup">${currencyFlag}</sup>
                <span class="fe-subtext">${pricing}</span>
              </div>
              <p class="fe-year">${saveUpLabel}</p>
            </div>
            <span class="fe-rate">/month/user, billed annually <br /> or ${monthlyPrice} billed monthly</span>`;

            comparisonTables[insertIndex].insertAdjacentHTML('afterend', priceHTML);
          }
        }
      });
    }
    
     // Function to update pricing information for comparison tables
    function priceListobjectComp() {
      addClassToCompEnterprise();

      const currencyValueToFind = window.dataModel.currencyValue;
      const country = pricing_data.find(item => item.currencyValue === currencyValueToFind);

      if (country) {
        insertComparisonPricingInfo(country.Pro, country.currency_flag,  country.Pro_monthly, 'Pro', country.save_up_label);
        insertComparisonPricingInfo(country.Business, country.currency_flag,country.Business_monthly, 'Business', country.save_up_label_biz);
        insertComparisonPricingInfo(country.Business_Plus, country.currency_flag, country.Business_Plus_monthly, 'Business Plus', country.save_up_label_biz);
      }
    
    }
    

    // Function to update pricing information for mobile comparison tables
    function priceListobjectCompMobile() {

      const currencyValueToFind = window.dataModel.currencyValue;
      const country = pricing_data.find(item => item.currencyValue === currencyValueToFind);

      if (country) {
        var comparison_tables = document.querySelectorAll('.comparison-tree-table-mobile .zm-select-span__inner');
        comparison_tables.forEach(comparison_table => {

          var feMonthlyBusinessPlus = document.querySelector('.comparison-tree-table-mobile .fe-monthlybp-pricing1');
          var feMonthlyBusiness = document.querySelector('.comparison-tree-table-mobile .fe-monthly-pricing1');
          var fePro = document.querySelector('.comparison-tree-table-mobile .fe-pro1');
          var fePro2 = document.querySelector('.comparison-tree-table-mobile .fe-pro2');

          var activeNavHeading =  document.querySelector('.pricing_nav_dropdown .active-nav-item h2');

          // Basic plan selected
          if (comparison_table.innerText === 'Basic') {
              fePro && fePro.classList.add('fe-hide');
          }
         
          // 
          if (activeNavHeading.innerText === 'Business') {                
            if (comparison_table.innerText === 'Pro') {
                fePro && fePro.classList.remove('fe-hide');
                !fePro && document.querySelector('.comparison-tree-table-mobile__header-left-col .type-price').insertAdjacentHTML('afterend', '<div class="fe-price-num fe-pro1"><div class="fe-pro-pricing"><sup class="fe-sup">' + country.currency_flag + '</sup><span class="fe-subtext"> ' + country.Pro + '</span></div><p class="fe-year">  ' + country.save_up_label + '</p><span class="fe-rate">/month/user, billed annually <br /> or  ' + country.Pro_monthly + ' billed monthly</span></div>');
            }
          }

           // persona plan for mobile
          if (document.querySelector('[current-usage-type="personal"]')) {
         
            feMonthlyBusiness && feMonthlyBusiness.classList.add('fe-hide')
            feMonthlyBusinessPlus && feMonthlyBusinessPlus.classList.add('fe-hide');
            fePro && fePro.classList.add('fe-hide');

            fePro2 && fePro2.classList.remove('fe-hide');

            if (comparison_table.innerText === 'Pro') {                  
              !fePro2 && document.querySelector('[current-usage-type="personal"] .comparison-tree-table-mobile__header-right-col .type-price').insertAdjacentHTML('afterend', '<div class="fe-price-num fe-pro2"><div class="fe-pro-pricing"><sup class="fe-sup">' + country.currency_flag + '</sup><span class="fe-subtext"> ' + country.Pro + '</span></div><p class="fe-year">  ' + country.save_up_label + '</p><span class="fe-rate">/month/user, billed annually <br /> or ' + country.Pro_monthly + ' billed monthly</div>');
            }
          }
          // persona plan end

           // Business plan for mobile
         
          if (comparison_table.innerText === 'Business') {
            feMonthlyBusinessPlus && feMonthlyBusinessPlus.classList.add('fe-hide');
            feMonthlyBusiness && feMonthlyBusiness.classList.remove('fe-hide')

            if (activeNavHeading.innerText === 'Personal') {
              fePro2 && fePro2.classList.add('fe-hide');
            }

            fePro2 && fePro2.classList.add('fe-hide');
            !feMonthlyBusiness && document.querySelector('.comparison-tree-table-mobile__header-right-col .type-price').insertAdjacentHTML('afterend', '<div class="fe-price-num fe-monthly-pricing1"><sup class="fe-sup">' + country.currency_flag + '</sup><span class="fe-subtext"> ' + country.Business + '</span><p class="fe-year">  ' + country.save_up_label_biz + '</p><span class="fe-rate">/month/user, billed annually <br /> or  ' + country.Business_monthly + ' billed monthly</span></div>');

          }

          
          // Business plan for mobile end

          if (comparison_table.innerText === 'Business Plus') {
              feMonthlyBusinessPlus && feMonthlyBusinessPlus.classList.remove('fe-hide');
              feMonthlyBusiness && feMonthlyBusiness.classList.add('fe-hide')
              !feMonthlyBusinessPlus && document.querySelector('.comparison-tree-table-mobile__header-right-col .type-price').insertAdjacentHTML('afterend', '<div class="fe-price-num fe-monthlybp-pricing1"><sup class="fe-sup">' + country.currency_flag + '</sup><span class="fe-subtext"> ' + country.Business_Plus + '</span><p class="fe-year">  ' + country.save_up_label_biz + '</p><span class="fe-rate">/month/user, billed annually <br /> or  ' + country.Business_Plus_monthly + ' billed monthly</span></div>');
          }

          if (comparison_table.innerText === 'Enterprise') {
              feMonthlyBusinessPlus && feMonthlyBusinessPlus.classList.add('fe-hide');
              feMonthlyBusiness && feMonthlyBusiness.classList.add('fe-hide')
          }

        });
      }

    }

    // Function to initialize the tile section
    function initTileSection() {
      document.querySelector('body').classList.add('fe-savings-promo');
      priceListObject();
      monthlyTextChange();
      const featurePlanCard = document.querySelector('[plan="business plus"][action="contact sales"]');
      featurePlanCard && featurePlanCard.classList.add('fe-contactsales');
      
    }

    // Function to initialize the feature comparison section
    function initCompareFeatures() {
      priceListobjectComp();
      monthlyTextChangeComp();
    }

     // Function to initialize the mobile section
    function initMobile() {
      priceListobjectCompMobile();
      monthlyTextChangeCompMobile();
    }

    // Event listener for changes in the switch 
    live('.zm-switch input', 'change', function () {
      funcInterval(initTileSection);
      funcInterval(initCompareFeatures);
      funcInterval(monthlyTextChangeComp);
    })

    // Event listener for dropdown menu selections
    live('.zm-dropdown-menu__item-content .pricing_nav_dropdown_item,[aria-label*="switch types for row 2"], [aria-label="Basic"],[aria-label="Pro"],[aria-label="Business"],[aria-label="Business Plus"],[aria-label="Enterprise"],.zm-select-dropdown__item, .dropdown-detail-item', 'mousedown', function () {

      funcInterval(initTileSection);
      funcInterval(initCompareFeatures);
      funcInterval(monthlyTextChangeComp);
      funcInterval(priceListobjectCompMobile);
      funcInterval(monthlyTextChangeCompMobile);

    });


  // Wait for elements to appear and trigger initialization functions
    waitForElement(".new-tab-content .feature-plan-card .new-price", initTileSection, 50, 50000);
    waitForElement(".comparison-table-new .price-num", initCompareFeatures, 100, 50000);
    waitForElement(".comparison-tree-table-mobile .zm-select-span__inner", initMobile, 100, 50000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
}, "dependencies": []}, {"id": "abccdb5a22c3443fb12fb00d5083ae2d", "type": "append", "selector": "head", "value": "<style>html body .fe-hide,\nhtml body .fe-monthly-price,\nhtml body .fe-save-up-label-new,\nhtml body.fe-savings-promo .pricing-tabs-bk .feature-plan-card .saving,\nhtml body.fe-savings-promo .bill_date_choose .zm-switch,\nhtml body .comparison-tree-table-mobile .fe-price-num.fe-hide,\nhtml body.fe-savings-promo .fe-contactsales .fe-price-num,\nhtml body.fe-savings-promo .fe-contactsales .fe-rate,\nhtml body.fe-savings-promo [period=\"monthly\"] .comparison-tree-table .fe-price-num,\nhtml body.fe-savings-promo [period=\"monthly\"] .new-pricing-row .fe-price-num,\nhtml body.fe-savings-promo [period=\"monthly\"] .fe-rate,\nhtml body.fe-savings-promo [period=\"annual\"] .plan-wrapper .feature-plan-card .saving,\nhtml body.fe-savings-promo [period=\"annual\"] .new-pricing-row .fe-tab-content+div>.new-price-wrapper,\nhtml body.fe-savings-promo [period=\"annual\"] .comparison-tree-table-mobile-new .new-price,\nhtml body.fe-savings-promo [period=\"annual\"] .comparison-tree-table .fe-tab-content .type-price:not(.type-price-free) {\n    display: none;\n}\n\nhtml body.fe-savings-promo [period=\"annual\"] .zm-table.comparison-table-new .comparison-table-header .fe-tab-content .new-buy-btn {\n    margin-top: 10px;\n}\n\nhtml body.fe-savings-promo .zm-table.comparison-table-new .comparison-table-header .fe-tab-content [data-link-term=\"Buy Now\"] {\n    padding: 7px 29px;\n}\n\nhtml body.fe-savings-promo .fe-new-price .fe-price-part {\n    font-size: 30px;\n    line-height: 23px;\n    margin-top: 10px;\n    margin-bottom: 6px;\n    margin-top: 0;\n    color: #00053d;\n}\n\nhtml body .fe-new-price .fe-subtext.currency-flag {\n    font-size: 12px;\n    font-weight: 600;\n    line-height: 29px;\n    padding-right: 3px;\n    margin-top: 0;\n}\n\nhtml body .fe-price-num,\nhtml body .fe-price-num1 {\n    display: inline;\n    color: var(--day-foreground-foreground, #00053D);\n    font-size: 32px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 120%;\n}\n\nhtml body .comparison-tree-table .fe-price-num {\n    font-size: 20px;\n    display: inline-block;\n}\n\nhtml body .comparison-tree-table .fe-pro-pricing {\n    display: inline-block;\n}\n\nhtml body .fe-flag-hidden {\n    color: transparent;\n    width: 0;\n    display: inline-block;\n}\n\nhtml body .fe-subtext {\n    color: var(--day-foreground-foreground, #00053D);\n    font-size: 32px;\n    font-style: normal;\n    font-weight: 600;\n    margin-left: -4px;\n    display: inline-block;\n    font-family: \"Happy Display\", Internacional, Helvetica, Arial;\n}\n\nhtml body .comparison-tree-table .fe-subtext {\n    padding-top: 5px;\n    margin-left: 0px;\n}\n\nhtml body .fe-subtext .subtext {\n    margin-top: 0px;\n    font-size: 14px;\n    margin-left: 2px;\n}\n\nhtml body .zm-table.comparison-table-new .new-price-wrapper .new-price .price-num .subtext {\n    margin-left: 2px;\n    margin-top: 0px;\n}\n\nhtml body [period=\"monthly\"] .zm-table.comparison-table-new .type-price {\n    height: 70px;\n    margin-top: 6px;\n}\n\nhtml body.fe-savings-promo [period=\"annual\"] .zm-table.comparison-table-new .type-price {\n    height: 44px;\n    margin-top: 10px;\n    line-height: 1;\n}\n\nhtml body .fe-pro-pricing {\n    display: inline-block;\n}\n\nhtml body .fe-year {\n    display: inline;\n    position: relative;\n    top: -5px;\n}\n\nhtml body .fe-rate {\n    display: block;\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 120%;\n    text-transform: initial;\n    letter-spacing: 0px;\n    color: var(--day-foreground-foreground-ada, #666487);\n}\n\nhtml body .new-one-card-layout .feature-plan-card .title-words {\n    margin-bottom: 8px;\n}\n\nhtml body.fe-savings-promo .fe-sup {\n    top: -13px;\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 150%;\n    position: relative;\n    font-family: \"Happy Display\", Internacional, Helvetica, Arial;\n}\n\nhtml body.fe-savings-promo .comparison-tree-table-mobile .fe-subtext {\n    margin-left: 2px;\n}\n\nhtml body .comparison-tree-table .fe-year {\n    font-weight: 400;\n    font-size: 14px;\n    text-transform: lowercase;\n    color: #515079;\n    display: inline;\n    position: relative;\n    top: -7px;\n}\n\nhtml body.fe-savings-promo .feature-plan-card section {\n    max-height: 95px;\n    height: 100%;\n    margin-top: 11px;\n}\n\nhtml body.fe-savings-promo .zm-table.comparison-table-new th.comparison-table-header-cell.fe-enterprise .type-price {\n    display: block;\n    height: 77px;\n    margin: 0;\n}\n\nhtml body [period=\"monthly\"] .zm-table.comparison-table-new th.comparison-table-header-cell.fe-enterprise .type-price {\n    height: 87px;\n}\n\nhtml body.fe-savings-promo .new-ui-style .new-one-card-layout .new-pricing-row .rate,\nhtml body.fe-savings-promo .zm-table.comparison-table-new th.comparison-table-header-cell .cell .rate {\n    font-size: 14px;\n    display: block;\n    color: var(--day-foreground-foreground-ada, #666487);\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 400;\n    letter-spacing: 0;\n    line-height: 120%;\n}\n\nhtml body.fe-savings-promo .new-ui-style .new-one-card-layout .new-pricing-row .price-part .price-num,\nhtml body.fe-savings-promo .zm-table.comparison-table-new .new-price-wrapper .new-price .price-num,\nhtml body.fe-savings-promo .comparison-tree-table-mobile .comparison-tree-table-mobile__header-price-row .price-num {\n    color: var(--day-foreground-foreground, #00053D);\n    font-size: 32px !important;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 100%;\n}\n\nhtml body.fe-savings-promo .new-ui-style .new-one-card-layout .new-pricing-row .price-part .currency-flag,\nhtml body.fe-savings-promo .zm-table.comparison-table-new .new-price-wrapper .new-price .price-part .currency-flag {\n    line-height: 143%;\n    margin-top: 0px;\n}\n\n\n/* new css */\n\nhtml body .comparison-tree-table-mobile .comparison-tree-table-mobile__header-price-row .rate {\n    font-size: 12px;\n    height: 21px;\n    display: block;\n    margin-top: -8px;\n}\n\nhtml body.fe-savings-promo [period=\"monthly\"] .comparison-tree-table-mobile__header-btn-row {\n    padding-top: 40px;\n}\n\nhtml body .comparison-tree-table-mobile .comparison-tree-table-mobile__header-price-row .fe-subtext .subtext {\n    margin-top: -4px;\n}\n\nhtml body.fe-savings-promo .comparison-tree-table-mobile .new-price-wrapper .new-price .subtext {\n    margin-top: 9px;\n}\n\nhtml body.fe-savings-promo .new-one-card-layout .comparison-tree-table-mobile .new-price-wrapper .new-price .currency-flag {\n    margin-top: 5px;\n}\n\nhtml body.fe-savings-promo .comparison-tree-table-mobile .comparison-tree-table-mobile__header-price-row .type-price-free {\n    margin-top: 15px;\n}\n\nhtml body.fe-savings-promo .comparison-tree-table-mobile-new .comparison-tree-table-mobile__inside {\n    padding-top: 40.76923vw;\n}\n\nhtml body .comparison-tree-table-mobile .fe-price-num {\n    margin: 21px 0 8px;\n    text-align: center;\n}\n\nhtml body.fe-savings-promo .tabs-new-inside .select-container_left .bill_date_choose {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    gap: 10px;\n    opacity: 0;\n    cursor: default;\n}\n\nhtml body.fe-savings-promo .grey-region .billed-container .left-section {\n    opacity: 0;\n    cursor: default;\n}</style>", "dependencies": []}]}]}], "weightDistributions": [{"entityId": "25876430173", "endOfRange": 10000}], "name": null, "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["25786961533"], "weightDistributions": null, "decisionMetadata": null}], "groups": [], "audiences": [{"id": "20886904205", "name": null, "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "language", "value": "en"}], ["or", {"match": "exact", "name": "_zm_lang", "type": "cookies", "value": "en-US"}]]]}, {"id": "21011180528", "name": null, "conditions": ["and", ["or", ["or", {"match": "exists", "name": "optly_zoom_test", "type": "cookies", "value": ""}], ["or", {"match": "exists", "name": "optly_zoom_test", "type": "query", "value": ""}]]]}, {"id": "21591231112", "name": null, "conditions": ["and", ["or", ["or", {"match": "exact", "name": "optly_zoom_test", "type": "cookies", "value": "dauphin"}]]]}, {"id": "21736930277", "name": null, "conditions": ["and", ["or", ["or", {"match": "exact", "name": "optly_zoom_test", "type": "query", "value": "test02"}], ["or", {"match": "exact", "name": "optly_zoom_test", "type": "cookies", "value": "test02"}]]]}, {"id": "22551780691", "name": null, "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "device", "value": "desktop"}]]]}, {"id": "22582550118", "name": null, "conditions": ["and", ["or", ["or", {"match": "exact", "name": "optly_zoom_test", "type": "query", "value": "test011"}], ["or", {"match": "exact", "name": "optly_zoom_test", "type": "cookies", "value": "test011"}]]]}, {"id": "22631702689", "name": null, "conditions": ["and", ["or", ["or", {"match": "substring", "name": "optly_zoom_test", "type": "query", "value": "test09"}], ["or", {"match": "exact", "name": "optly_zoom_test", "type": "cookies", "value": "test09"}]]]}, {"id": "22793360055", "name": null, "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "location", "value": "US"}, {"match": null, "name": null, "type": "location", "value": "CA"}]]]}, {"id": "22872930337", "name": null, "conditions": ["and", ["or", ["or", {"match": "exact", "name": "optly_zoom_test", "type": "cookies", "value": "test03"}], ["or", {"match": "exact", "name": "optly_zoom_test", "type": "query", "value": "test03"}]]]}, {"id": "23075300126", "name": null, "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "device", "value": "desktop"}]]]}, {"id": "23626970263", "name": null, "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "location", "value": "GB"}, {"match": null, "name": null, "type": "location", "value": "US"}, {"match": null, "name": null, "type": "location", "value": "CA"}, {"match": null, "name": null, "type": "location", "value": "IE"}, {"match": null, "name": null, "type": "location", "value": "AU"}, {"match": null, "name": null, "type": "location", "value": "NZ"}]]]}, {"id": "23892930237", "name": null, "conditions": ["and", ["or", ["or", {"match": "exact", "name": "_zm_lang", "type": "cookies", "value": "en-US"}, {"match": "exact", "name": "_zm_lang", "type": "cookies", "value": ""}, {"match": "exact", "name": "_zm_optly_lang", "type": "cookies", "value": "en-US"}]]]}, {"id": "24149620196", "name": null, "conditions": ["and", ["or", ["not", ["or", {"match": null, "name": null, "type": "location", "value": "RU"}, {"match": null, "name": null, "type": "location", "value": "HK"}, {"match": null, "name": null, "type": "location", "value": "UA"}, {"match": null, "name": null, "type": "location", "value": "YE"}, {"match": null, "name": null, "type": "location", "value": "LY"}, {"match": null, "name": null, "type": "location", "value": "SD"}, {"match": null, "name": null, "type": "location", "value": "BY"}, {"match": null, "name": null, "type": "location", "value": "SO"}, {"match": null, "name": null, "type": "location", "value": "KH"}, {"match": null, "name": null, "type": "location", "value": "ML"}, {"match": null, "name": null, "type": "location", "value": "MM"}, {"match": null, "name": null, "type": "location", "value": "SS"}, {"match": null, "name": null, "type": "location", "value": "CD"}, {"match": null, "name": null, "type": "location", "value": "CF"}, {"match": null, "name": null, "type": "location", "value": "AE"}, {"match": null, "name": null, "type": "location", "value": "AF"}, {"match": null, "name": null, "type": "location", "value": "IQ"}, {"match": null, "name": null, "type": "location", "value": "CN"}, {"match": null, "name": null, "type": "location", "value": "MX"}, {"match": null, "name": null, "type": "location", "value": "CO"}, {"match": null, "name": null, "type": "location", "value": "VE"}, {"match": null, "name": null, "type": "location", "value": "ET"}, {"match": null, "name": null, "type": "location", "value": "LB"}, {"match": null, "name": null, "type": "location", "value": "NI"}, {"match": null, "name": null, "type": "location", "value": "PK"}, {"match": null, "name": null, "type": "location", "value": "ZW"}, {"match": null, "name": null, "type": "location", "value": "DE"}, {"match": null, "name": null, "type": "location", "value": "AT"}, {"match": null, "name": null, "type": "location", "value": "ES"}, {"match": null, "name": null, "type": "location", "value": "IT"}, {"match": null, "name": null, "type": "location", "value": "BE"}, {"match": null, "name": null, "type": "location", "value": "NL"}, {"match": null, "name": null, "type": "location", "value": "JP"}, {"match": null, "name": null, "type": "location", "value": "CM"}, {"match": null, "name": null, "type": "location", "value": "LI"}, {"match": null, "name": null, "type": "location", "value": "MC"}, {"match": null, "name": null, "type": "location", "value": "IM"}, {"match": null, "name": null, "type": "location", "value": "IN"}, {"match": null, "name": null, "type": "location", "value": "CH"}]]]]}, {"id": "24210280483", "name": null, "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "location", "value": "US"}]]]}, {"id": "25078980369", "name": null, "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "location", "value": "CA"}, {"match": null, "name": null, "type": "location", "value": "NZ"}, {"match": null, "name": null, "type": "location", "value": "IE"}, {"match": null, "name": null, "type": "location", "value": "AU"}, {"match": null, "name": null, "type": "location", "value": "IN"}, {"match": null, "name": null, "type": "location", "value": "GB"}]]]}, {"id": "25540610666", "name": null, "conditions": ["and", ["or", ["or", {"match": "exact", "name": "_zm_lang", "type": "cookies", "value": "en-US"}, {"match": "exact", "name": "_zm_lang", "type": "cookies", "value": ""}, {"match": "exact", "name": "_zm_optly_lang", "type": "cookies", "value": "en-US"}]]]}], "listTargetingKeys": [], "visitorAttributes": [], "visitorIdLocator": {"type": "cookie", "name": "_zm_visitor_guid"}, "integrationSettings": [], "views": [{"id": "20946580103", "category": "other", "apiName": "20917322331_success_direct_to_paid", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "\\/buy\\/zsuccess"}], ["not", ["or", {"match": "substring", "type": "url", "value": "type=basic2pro"}]]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "20950640141", "category": "other", "apiName": "20917322331_visit", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "zoom.us"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "20952770085", "category": "other", "apiName": "20917322331_success_free_account_setup", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "\\/activate"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "20968750053", "category": "other", "apiName": "20917322331_success_paid_account_signups__upgrades", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(\\/buy\\/success)|(\\/buy\\/zsuccess)|(billing\\/success)|(billing\\/zsuccess)"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "20974930098", "category": "other", "apiName": "20917322331_success_free_to_paid_upgrade", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(subscription-success)|(\\/billing\\/zsuccess)|(\\/billing\\/upgradeSuccess\\?type=basic2pro)|(\\/billing\\/update\\/success)|(\\/opc\\/buy\\/zsuccess\\?type=basic2pro)"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "20980690649", "category": "other", "apiName": "20917322331_visit_buy_success_page__flow_4", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us/buy/zsuccess"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "20980910363", "category": "other", "apiName": "20917322331_visit_pricing_phone_page", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us/pricing/zoom-phone"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "20983450035", "category": "other", "apiName": "20917322331_visit_pricing_page", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us(/[\\w-]+)?/pricing"}], ["not", ["or", {"match": "regex", "type": "url", "value": "\\/zoom-phone|\\/events|\\/zoom-rooms|\\/zoom-contact-center|\\/whiteboard|\\/education|\\/healthcare"}]]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "20992440311", "category": "other", "apiName": "20917322331_visit_buy_page__flow2", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us/buy/signup"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "21000050341", "category": "other", "apiName": "20917322331_visit_buy_subscription_page__flow_3", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us/buy/subscription"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "21007930093", "category": "other", "apiName": "20917322331_visit_pricing_rooms_page", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us/pricing/zoom-rooms"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "21127280754", "category": "other", "apiName": "20917322331_visit_pricing_events_page", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us/pricing/events"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "polling", "activationCode": /**
 
 * Supply an expression to return a boolean inside a function.
 * For complete documentation, see https://docs.developers.optimizely.com/web/docs/dynamic-websites#section-polling
 */

function pollingFn() {
    var highRiskCountries = ['CM', 'LI', 'MC', 'IM', 'IN', 'RU', 'HK', 'UA', 'YE', 'LY', 'SD', 'BY', 'SO', 'KH', 'ML', 'MM', 'SS', 'CD', 'CF', 'AE', 'AF', 'IQ', 'CN', 'MX', 'CO', 'VE', 'ET', 'LB', 'NI', 'PK', 'ZW', 'DE', 'AT', 'ES', 'IT', 'BE', 'NL', 'JP'];
  if(window.dataModel){
    return !highRiskCountries.includes(window.dataModel.currentCountry);
  }
}
}, {"id": "21129942071", "category": "other", "apiName": "20917322331_visit_all_pricing_pages", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "zoom\\.us\\/pricing"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "21268221766", "category": "other", "apiName": "20917322331_visit_free_user__buy_subscription_page__flow2", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us/account/billing/buy_subscription"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "21270440613", "category": "other", "apiName": "20917322331_visit_billing_page", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us/billing$"}, {"match": "regex", "type": "url", "value": "(.*)zoom.us/billing/plan$"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "21272352605", "category": "other", "apiName": "20917322331_visit_free_user__upgrade_success_page__flow4", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us\\/billing\\/upgradeSuccess"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "21291500364", "category": "other", "apiName": "20917322331_visit_pricing_contact_sales_page", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us\\/pricing\\/zoom-contact-center"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "21307271496", "category": "other", "apiName": "20917322331_visit_free_user__buy_page__flow1", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us/account/billing/buy"}], ["or", {"match": "substring", "type": "url", "value": "type=basic2pro"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "21795911499", "category": "other", "apiName": "20917322331_pricing_webinar__events_page", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us/pricing/events"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate) {
    var whitelistedPaths = [
        '/pricing/events'
    ];
    var pathname = window.location.pathname;
    var isInPath = whitelistedPaths.some(function (path) {
        return pathname.indexOf(path) === 0;
    });

    if (!isInPath) {
        return;
    }

    var utils = window.optimizely.get('utils');
    utils.observeSelector('#olft_config + *', function () {
        var activateExpOld = window.wbnNeedFreeTrial === true || window.eventsNeedFreeTrial === true || window.zpNeedFreeTrial === true;
        var activateExpNew = window.isEligibleForWbnFreeTrial === true || window.isEligibleForEventsFreeTrial === true || window.isEligibleForZpFreeTrial === true;
        if (activateExpOld || activateExpNew) {
          //  console.log('Online Free Trial - Optimizely: Activate');
            activate();
        }
    }, {
        timeout: 10000,
        once: true,
        onTimeout: function () {
	         // console.log('Online Free Trial - Optimizely: Stopped Observing');
        }
    });
}
}, {"id": "21850041931", "category": "other", "apiName": "20917322331_visit_buy_page__meetings_pro_plan", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us/buy\\?"}], ["or", {"match": "substring", "type": "url", "value": "plan=pro"}, {"match": "substring", "type": "url", "value": "plan=biz"}], ["or", {"match": "substring", "type": "url", "value": "from=pro"}, {"match": "substring", "type": "url", "value": "from=biz"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "21851912852", "category": "other", "apiName": "20917322331_visit_buy_page__flow1", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us/buy\\?"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "url_changed"}, {"id": "21923431018", "category": "other", "apiName": "20917322331_visit_free_user__review_order__buy_subscription_page", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us/account/billing/buy_subscription"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate) {
    var whitelistedPaths = [
        '/billing/buy_subscription',
    ];
    var pathname = window.location.pathname;
    var isInPath = whitelistedPaths.some(function (path) {
        return pathname.indexOf(path) > -1;
    });
    if (!isInPath) {
        return;
    }

    var utils = window.optimizely.get('utils');
    var cancelPolling = utils.poll(function() {
        if (document.querySelector('.simplemodal-data .dialogTitle') && (document.querySelector('.simplemodal-data .dialogTitle').textContent.toLowerCase().indexOf('review order') > -1)) {
            console.log('activated');
            activate();
            cancelPolling();
        }
    }, 1000)
}
}, {"id": "21925791480", "category": "other", "apiName": "20917322331_visit_signin__review_order__buy_subscription_page__f", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us/buy/sign-in"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate) {
    var whitelistedPaths = [
        '/buy/sign-in',
    ];
    var pathname = window.location.pathname;
    var isInPath = whitelistedPaths.some(function (path) {
        return pathname.indexOf(path) > -1;
    });
    if (!isInPath) {
        return;
    }

    var utils = window.optimizely.get('utils');
    var cancelPolling = utils.poll(function() {
        if (document.querySelector('.simplemodal-data .dialogTitle') && (document.querySelector('.simplemodal-data .dialogTitle').textContent.toLowerCase().indexOf('review order') > -1)) {
            activate();
            cancelPolling();
        }
    }, 1000)
}
}, {"id": "21982060152", "category": "other", "apiName": "20917322331_success_billing__update_billing_success", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us/billing/update/success"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "22114910509", "category": "other", "apiName": "20917322331_url_targeting_for_test_explorezoomus_test", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "explore.zoom.us/en/contact-sales-utm-test/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "22426130749", "category": "other", "apiName": "20917322331_visit_upgrade_page__accountbillingbuy_paid_to_paid__", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us/account/billing/buy"}], ["or", {"match": "substring", "type": "url", "value": "type=edit"}], ["or", {"match": "substring", "type": "url", "value": "oldPlanCode="}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "22443000929", "category": "other", "apiName": "20917322331_visit_upgrade_page__edit_plan_billing_info", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us/billing/add_edit_plan_billing_info"}], ["or", {"match": "substring", "type": "url", "value": "type=edit"}], ["or", {"match": "substring", "type": "url", "value": "oldPlanCode="}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "22698290914", "category": "other", "apiName": "20917322331_visit_buy_page_product__events", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us/buy\\?"}], ["or", {"match": "substring", "type": "url", "value": "from=event"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "url_changed"}, {"id": "22717371072", "category": "other", "apiName": "20917322331_visit_buy_page_product__phone", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us/buy\\?"}], ["or", {"match": "substring", "type": "url", "value": "plan=pbx"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "22720150043", "category": "other", "apiName": "20917322331_visit_buy_page_product__whiteboard__net_new_flow_1", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us/buy\\?"}], ["or", {"match": "substring", "type": "url", "value": "plan=whiteboard"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "22737260645", "category": "other", "apiName": "20917322331_visit_buy_page_product__webinar", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us/buy\\?"}], ["or", {"match": "substring", "type": "url", "value": "from=webinar"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "url_changed"}, {"id": "22739610180", "category": "other", "apiName": "20917322331_visit_buy_page_product__zoom_room__net_new_flow_1", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us/buy\\?"}], ["or", {"match": "substring", "type": "url", "value": "plan=zr"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "22971990855", "category": "other", "apiName": "20917322331_url_targeting_for_explore_page_integration_test", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://explore.zoom.us/en/accessibility/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "22986190845", "category": "other", "apiName": "20917322331_visit_pricing_education_page_industry", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us/pricing/education"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "23005911031", "category": "other", "apiName": "20917322331_visit_pricing_healthcare_page_industry", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us/pricing/healthcare"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "23030170275", "category": "other", "apiName": "20917322331_visit_pricing_whiteboard_page", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us/pricing/whiteboard"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "23357791757", "category": "other", "apiName": "20917322331_visitopc_success_page__flow_3_", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us(/[\\w-]+)?/opc/buy/zsuccess"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "23364141594", "category": "other", "apiName": "20917322331_visitopc_buy_page__flow1", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us(/[\\w-]+)?/opc/buy/config"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "url_changed"}, {"id": "23396821522", "category": "other", "apiName": "20917322331_visitopc_buy_page__flow_2", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us(/[\\w-]+)?/opc/buy/checkout"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "url_changed"}, {"id": "23648510021", "category": "other", "apiName": "20917322331_free_trial_logged_in_buy_page", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)?zoom.us/account/billing/buy"}], ["or", {"match": "substring", "type": "url", "value": "type=basic2trial"}, {"match": "substring", "type": "url", "value": "type=add_trial"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate) {
    var whitelistedPaths = [
        '/account/billing/buy'
    ];
    var pathname = window.location.pathname;
    var isInPath = whitelistedPaths.some(function (path) {
        return pathname.indexOf(path) === 0;
    });

    if (!isInPath) {
        return;
    }

    var qs = window.location.search;
    if (qs.indexOf('type=add_trial') === -1 && qs.indexOf('type=basic2trial') === -1) {
        return;
    }

    var utils = window.optimizely.get('utils');
    utils.observeSelector('#olft_config + *', function () {
            //console.log('Online Free Trial Upgrade - Optimizely: Activate');
            activate();
     }, {
        timeout: 10000,
        once: true,
        onTimeout: function () {
            //console.log('Online Free Trial Upgrade - Optimizely: Stopped Observing');
        }
    });
}
}, {"id": "23675100336", "category": "other", "apiName": "20917322331_visit_pricing_eventwebinar_page_step1_checkout_page", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "https?:\\/\\/(\\w+\\.)?zoom.us/opc/buy/config"}, {"match": "regex", "type": "url", "value": "https?:\\/\\/(\\w+\\.)?zoom.us/buy"}, {"match": "regex", "type": "url", "value": "https?:\\/\\/(\\w+\\.)?zoom.us/account/billing/buy"}], ["or", {"match": "substring", "type": "url", "value": "from=webinar"}, {"match": "substring", "type": "url", "value": "from=events"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "23915210160", "category": "other", "apiName": "20917322331_url_targeting_for_pzecomm_202304__pricing_page_nn_f2", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us(/[\\w-]+)?/pricing/zoom-phone"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate) {
  var whitelistedPathsRegex = [
    /(\/[\w-]+)?\/pricing\/zoom-phone/
  ];
  var pathname = window.location.pathname;
  var isInPath = whitelistedPathsRegex.some(function (pathRegex) {
    var match = pathname.match(pathRegex);
    return match && match.index === 0;
  });

  if (!isInPath) {
    return;
  }

  var utils = window.optimizely.get('utils');
  utils.observeSelector('#opc_config + *', function () {
    var validCountries = ['US', 'CA'];
    var pricingPageMatcher = window.dataModel && window['ZmOptlyUtil'].isInCountry(window.dataModel, validCountries);
    if (window.isZoomPhoneOPCBuyEnabled && pricingPageMatcher) {
      //console.log('[Optimizely] One Page Checkout [ZP]: Activate');
      activate();
    }
  }, {
    timeout: 30000,
    once: true,
    onTimeout: function () {
      //console.log('[Optimizely] One Page Checkout [ZP]: Stopped Observing');
    }
  });
}
}, {"id": "24000230618", "category": "other", "apiName": "20917322331_url_targeting_for_copy_of_pzecomm_202212__pricing_ph", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us(/[\\w-]+)?/pricing/zoom-phone"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "24338090460", "category": "other", "apiName": "20917322331_url_targeting_for_pzecomm_202305__pricing_page_nn_f2", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us(/[\\w-]+)?/pricing/zoom-phone"}, {"match": "regex", "type": "url", "value": "(.*)zoom.us/billing"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate) {
  var zmUtils = window['ZmOptlyUtil'];
  var paths = [
    /(\/[\w-]+)?\/pricing\/zoom-phone/,
    /^\/billing/
  ];

  if (!zmUtils.isInPath(paths)) {
    return;
  }

  var CAMPAIGN_KEY = '_zm_optly_opc-zp-may';
  sessionStorage.removeItem(CAMPAIGN_KEY);
  var utils = window.optimizely.get('utils');
  utils.observeSelector('#opc_config + *', function () {
    var blockedCountries = [
      'RU', 'HK', 'UA', 'YE', 'LY', 'SD', 'BY', 'SO', 'KH', 'ML', 'MM', 'SS', 'CD', 'CF', 'AE', 'AF', 'IQ', 'CN', 'MX', 'CO', 'VE', 'ET', 'LB', 'NI', 'PK', 'ZW', // high-risk
      'IN' // on-session unsupported
    ];
    var engCountries = ['US', 'CA'];

    // billing page (edit)
    var billingPageEditMatcher = zmUtils.isInPath([/^\/billing/])
      && window.newBillingConfig
      && typeof window.newBillingConfig.enableZPhoneOPCEdit !== 'undefined'
      && window.newBillingConfig.enableZPhoneOPCEdit !== 'Unsupported'
      && !window['ZmOptlyUtil'].isInCountry(window.newBillingConfig, blockedCountries);
    if (billingPageEditMatcher) {
      sessionStorage.setItem(CAMPAIGN_KEY, 'billing');
      //console.log('[Optimizely] One Page Checkout [ZP-All / Billing-Edit]: Activate');
      activate();
      return;
    }

    // pricing page (nn/f2p)
    var pricingPageMatcher = zmUtils.isInPath([/(\/[\w-]+)?\/pricing\/zoom-phone/]);
    var isNonEnglishLang = zmUtils.getCookie('_zm_lang') !== 'en-US';
    var isEngCountry = window.dataModel && window['ZmOptlyUtil'].isInCountry(window.dataModel, engCountries);
    var isBlockedCountry = window.dataModel && window['ZmOptlyUtil'].isInCountry(window.dataModel, blockedCountries);
    if (pricingPageMatcher && isEngCountry && isNonEnglishLang) {
      sessionStorage.setItem(CAMPAIGN_KEY, 'pricing-eng');
      //console.log('[Optimizely] One Page Checkout [ZP-US/CA / Pricing-NonEng]: Activate');
      activate();
    } else if (pricingPageMatcher && !isEngCountry && !isBlockedCountry) {
      sessionStorage.setItem(CAMPAIGN_KEY, 'pricing-all');
      //console.log('[Optimizely] One Page Checkout [ZP-All / Pricing-All]: Activate');
      activate();
    }
  }, {
    timeout: 30000,
    once: true,
    onTimeout: function () {
      //console.log('[Optimizely] One Page Checkout [ZP-All]: Stopped Observing');
    }
  });
}
}, {"id": "24409400200", "category": "other", "apiName": "20917322331_url_targeting_for_abecomm_202305__phone_pricing_page", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "^https?://(?:\\w+\\.)?zoom\\.us/pricing/zoom-phone$"}], ["not", ["or", {"match": "simple", "type": "url", "value": "https://ch01web.zoom.us/pricing/zoom-phone"}]]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "polling", "activationCode": function pollingFn() {
  var highRiskCountries = ['CM', 'LI', 'MC', 'IM', 'IN', 'RU', 'HK', 'UA', 'YE', 'LY', 'SD', 'BY', 'SO', 'KH', 'ML', 'MM', 'SS', 'CD', 'CF', 'AE', 'AF', 'IQ', 'CN', 'MX', 'CO', 'VE', 'ET', 'LB', 'NI', 'PK', 'ZW', 'DE', 'AT', 'ES', 'IT', 'BE', 'NL', 'JP'];
  if (window.dataModel) {
    return !highRiskCountries.includes(window.dataModel.currentCountry);
  }
}
}, {"id": "24495650228", "category": "other", "apiName": "20917322331_url_targeting_for__fsecomm_202306__zoom_one_pricing_", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "^https?://(?:\\w+\\.)?zoom\\.us/(?:pricing|pricing#personal)$"}], ["not", ["or", {"match": "substring", "type": "url", "value": "ch01web.zoom.us"}]]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "polling", "activationCode": function pollingFn() {

  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }

  var accType = document.getElementById("gtm_accountType");
    var highRiskCountries = ['CM', 'LI', 'MC', 'IM', 'IN', 'RU', 'HK', 'UA', 'YE', 'LY', 'SD', 'BY', 'SO', 'KH', 'ML', 'MM', 'SS', 'CD', 'CF', 'AE', 'AF', 'IQ', 'CN', 'MX', 'CO', 'VE', 'ET', 'LB', 'NI', 'PK', 'ZW', 'DE', 'AT', 'ES', 'IT', 'BE', 'NL', 'JP'];
  if ((( getCookie('_zm_login_acctype') == 1 || getCookie('_zm_login_acctype') == 2 || getCookie('_zm_everlogin_type') == 1 || getCookie('_zm_everlogin_type') == 2 ||  (accType && accType.value == 2) || (accType && accType.value == 1)) && getCookie('_zm_cdn_blocked') == 'log_unblk' && (!window.billingConf.planInfos.serviceCodes || !window.billingConf.planInfos.serviceCodes.length)) == false && !highRiskCountries.includes(window.dataModel.currentCountry) && accType.value !== '') {
    return true;
  }
}
}, {"id": "24516240653", "category": "other", "apiName": "20917322331_visit__scheduler_promotion_checkout_page", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "https:\\/\\/(?:[a-z]{2}[0-9]{2}web\\.zoom\\.us|zoom\\.us)(?:\\/opc)?\\/buy\\?plan=zsched&period=annual&from=zsched"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "24549200047", "category": "other", "apiName": "20917322331_url_targeting_for_pzecomm_202306__pricingbilling_pag", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us(/[\\w-]+)?/pricing/?"}, {"match": "regex", "type": "url", "value": "(.*)zoom.us/billing"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate) {
  var paths = [
    /(\/[\w-]+)?\/pricing/,
    /^\/billing/
  ];

  if (!window['ZmOptlyUtil'].isInPath(paths)) {
    return;
  }

  var utils = window.optimizely.get('utils');
  utils.observeSelector('#opc_config + *', function () {
    var blockedCountries = [
      'RU', 'HK', 'UA', 'YE', 'LY', 'SD', 'BY', 'SO', 'KH', 'ML', 'MM', 'SS', 'CD', 'CF', 'AE', 'AF', 'IQ', 'CN', 'MX', 'CO', 'VE', 'ET', 'LB', 'NI', 'PK', 'ZW', // high-risk
      'IN' // on-session unsupported
    ];

    var pricingPageMatcher = window.dataModel
      && window.dataModel.isLogin
      && typeof window.dataModel.enableOpcPhase2 !== 'undefined'
      && window.dataModel.enableOpcPhase2 !== 'Unsupported'
      && !window['ZmOptlyUtil'].isInCountry(window.dataModel, blockedCountries);
    if (pricingPageMatcher) {
      //console.log('[Optimizely] One Page Checkout (Edit / Add To Cart): Activate [Pricing Page]');
      activate();
      return;
    }

    var billingPageMatcher = window.newBillingConfig
      && typeof window.newBillingConfig.enableOpcPhase2 !== 'undefined'
      && window.newBillingConfig.enableOpcPhase2 !== 'Unsupported'
      && !window['ZmOptlyUtil'].isInCountry(window.newBillingConfig, blockedCountries);
    if (billingPageMatcher) {
      //console.log('[Optimizely] One Page Checkout (Edit / Add To Cart): Activate [Billing Page]');
      activate();
    }
  }, {
    timeout: 30000,
    once: true,
    onTimeout: function () {
      //console.log('[Optimizely] One Page Checkout (Edit / Add To Cart): Timeout');
    }
  });
}
}, {"id": "24649510226", "category": "other", "apiName": "20917322331_url_targeting_for_pzecomm_202307__opc_checkout_page_", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us/opc/buy/checkout"}], ["or", {"match": "substring", "type": "url", "value": "plan=pbx"}], ["or", {"type": "element_present", "value": ".opc-addr form"}], ["or", {"type": "custom_code", "value": function jsCondition() {
  var validCountries = ['US', 'UK', 'CA', 'NZ', 'AU', 'IE'];
  return window.newBillingConfig && window['ZmOptlyUtil'].isInCountry(window.newBillingConfig, validCountries);
}
}]], "deactivationEnabled": true, "undoOnDeactivation": false, "tags": [], "activationType": "dom_changed"}, {"id": "24731670076", "category": "other", "apiName": "20917322331_rpx_zoom_one_zoom_phone__zoom_room", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://zoom.us/pricing"}, {"match": "simple", "type": "url", "value": "https://zoom.us/pricing/zoom-phone"}, {"match": "simple", "type": "url", "value": "https://zoom.us/pricing/zoom-rooms"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "24764871007", "category": "other", "apiName": "20917322331_success_events_direct_to_paid_purchase", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "\\/buy\\/zsuccess"}], ["not", ["or", {"match": "substring", "type": "url", "value": "type=basic2pro"}]]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "24780111969", "category": "other", "apiName": "20917322331_success_webinar_direct_to_paid_purchases", "name": null, "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "/opc/buy/zsuccess"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "polling", "activationCode": function isWebinarPurchase() {
  return window.location.href.includes('webinar');
}
}, {"id": "24782202499", "category": "other", "apiName": "20917322331_url_targeting_for_pzecomm_202307__opc_checkout_pag_1", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us/myhome"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate) {
  var paths = [
    /^\/myhome\/?$/
  ];

  if (!window['ZmOptlyUtil'].isInPath(paths)) {
    return;
  }

  var utils = window.optimizely.get('utils');
  utils.observeSelector('#opc_config + *', function () {
    var blockedCountries = [
      'RU', 'HK', 'UA', 'YE', 'LY', 'SD', 'BY', 'SO', 'KH', 'ML', 'MM', 'SS', 'CD', 'CF', 'AE', 'AF', 'IQ', 'CN', 'MX', 'CO', 'VE', 'ET', 'LB', 'NI', 'PK', 'ZW', // high-risk
      'IN' // on-session unsupported
    ];

    var pageMatcher = window.homeDestinationConfig
      && typeof window.homeDestinationConfig.enableOpcPhase2 !== 'undefined'
      && window.homeDestinationConfig.enableOpcPhase2 !== 'Unsupported'
      && !window['ZmOptlyUtil'].isInCountry(window.homeDestinationConfig, blockedCountries);
    if (pageMatcher) {
      //console.log('[Optimizely] One Page Checkout (Add To Cart): Activate [Home Destination Page]');
      activate();
    }
  }, {
    timeout: 30000,
    once: true,
    onTimeout: function () {
      document.querySelector('html').style.display = 'block';
      //console.log('[Optimizely] One Page Checkout (Add To Cart): Timeout [Home Destination Page]');
    }
  });
}
}, {"id": "24784101724", "category": "other", "apiName": "20917322331_url_targeting_for_pzecomm_202307__pricingbilling_pag", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us(/[\\w-]+)?/pricing/?"}, {"match": "regex", "type": "url", "value": "(.*)zoom.us/billing"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate) {
  var paths = [
    /(\/[\w-]+)?\/pricing/,
    /^\/billing/
  ];

  var ZmOptlyUtil = window['ZmOptlyUtil'];
  if (!ZmOptlyUtil.isInPath(paths)) {
    return;
  }

  var utils = window.optimizely.get('utils');
  utils.observeSelector('#opc_config + *', function () {
    var hrCountries = [
      'RU', 'HK', 'UA', 'LY', 'BY', 'KH', 'ML', 'MM', 'SS', 'CD', 'CF', 'AE', 'AF', 'IQ', 'MX', 'CO', 'VE', 'ET', 'LB', 'NI', 'PK', 'ZW'
    ];

    var billingPageMatcher = ZmOptlyUtil.isInPath([/^\/billing/]);
    var pricingPageMatcher = ZmOptlyUtil.isInPath([/(\/[\w-]+)?\/pricing/]);

    if (billingPageMatcher && window.newBillingConfig && ZmOptlyUtil.isInCountry(window.newBillingConfig, hrCountries)) {
      var bpEnableOpcMatcher = typeof window.newBillingConfig.enableOPC !== 'undefined';
      var bpPro2BizMatcher = typeof window.newBillingConfig.enablePro2BizOPC !== 'undefined'
        && window.newBillingConfig.enablePro2BizOPC !== 'Unsupported';
      var bpZpEditMatcher = typeof window.newBillingConfig.enableZPhoneOPCEdit !== 'undefined'
        && window.newBillingConfig.enableZPhoneOPCEdit !== 'Unsupported';
      var bpEnableOpcPhase2Matcher = typeof window.newBillingConfig.enableOpcPhase2 !== 'undefined'
        && window.newBillingConfig.enableOpcPhase2 !== 'Unsupported';
      if (bpEnableOpcMatcher || bpPro2BizMatcher || bpZpEditMatcher || bpEnableOpcPhase2Matcher) {
        //console.log('[Optimizely] One Page Checkout (High-Risk): Activate [Billing Page]');
        activate();
      }
      return;
    }

    if (pricingPageMatcher && window.dataModel && ZmOptlyUtil.isInCountry(window.dataModel, hrCountries)) {
      var ppEnableOpcMatcher = typeof window.dataModel.enableOPC !== 'undefined';
      var ppPro2BizMatcher = typeof window.dataModel.enablePro2BizOPC !== 'undefined'
        && window.dataModel.enablePro2BizOPC !== 'Unsupported';
      var ppEnableOpcPhase2Matcher = window.dataModel.isLogin
        && typeof window.dataModel.enableOpcPhase2 !== 'undefined'
        && window.dataModel.enableOpcPhase2 !== 'Unsupported';
      var ppZpMatcher = ZmOptlyUtil.isInPath([/(\/[\w-]+)?\/pricing\/zoom-phone\/?$/])
        && window.isZoomPhoneOPCBuyEnabled
        && typeof window.dataModel.enablePbxOPC !== 'undefined';
      if (ppEnableOpcMatcher || ppPro2BizMatcher || ppEnableOpcPhase2Matcher || ppZpMatcher) {
        //console.log('[Optimizely] One Page Checkout (High-Risk): Activate [Pricing Page]');
        activate();
      }
    }
  }, {
    timeout: 30000,
    once: true,
    onTimeout: function () {
      //console.log('[Optimizely] One Page Checkout (High-Risk): Stopped Observing');
    }
  });
}
}, {"id": "24791111363", "category": "other", "apiName": "20917322331_url_targeting_for_copy_of_abecomm_202307__new_billin", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us/billing(/plan)?/?"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate) {
  var paths = [
    /^\/billing(\/plan)?\/?$/
  ];

  if (!window['ZmOptlyUtil'].isInPath(paths)) {
    return;
  }

  var CAMPAIGN_KEY = '_zm_optly_opc-bp-so';
  var CAMPAIGN_VARIATION_KEY = '_zm_optly_opc-bp-so-var';
  sessionStorage.removeItem(CAMPAIGN_KEY);
  sessionStorage.removeItem(CAMPAIGN_VARIATION_KEY);

  var blockedCountries = [
    'RU', 'HK', 'UA', 'YE', 'LY', 'SD', 'BY', 'SO', 'KH', 'ML', 'MM', 'SS', 'CD', 'CF', 'AE', 'AF', 'IQ', 'CN', 'MX', 'CO', 'VE', 'ET', 'LB', 'NI', 'PK', 'ZW', // high-risk
    'IN' // on-session unsupported
  ];

  var config = {
    'selector': '.zr-main-container',
    'eligibilityReadySelector': '.bp-card-container .bp-plan-card',
    'isEligible': function () {
      return window.newBillingConfig
        && window.newBillingConfig.billingPortalVersion === 2
        && !window['ZmOptlyUtil'].isInCountry(window.newBillingConfig, blockedCountries)
        && !!window.newBillingConfig.allowDowngrade2basicPlus;
    },
    'isSubscriptionCanceledState': function () {
      var appElm = document.querySelector(config.selector);
      if (!appElm.__vue__) {
        return false;
      }

      try {
        return appElm.__vue__.$store.getters['fe-billing-plan-management/accountInfo'].status === 'Cancelled';
      } catch (e) {
        return false;
      }
    },
    'isArl': function () {
      var appElm = document.querySelector(config.selector);
      if (!appElm.__vue__) {
        return false;
      }

      try {
        return appElm.__vue__.$store.getters['fe-billing-plan-management/isARLCustomer'];
      } catch (e) {
        return false;
      }
    },
    'arl': {
      'preCancelDialogSelectorTrigger': function (record) {
        var target = record.target;
        return record.type === 'childList' && target.classList && target.classList.contains('bp-pre-cancel-dialog');
      }
    },
    'nonArl': {
      'preCancelDialogSelectorTrigger': function (record) {
        var target = record.target;
        return record.type === 'childList' && target.classList && target.classList.contains('bp-cancel-coupon-dialog');
      }
    }
  };

  var createAppStateStr = function (isArl, isCanceledState) {
    return [isArl.toString(), isCanceledState.toString()].join('|');
  };

  var pageObserver = new MutationObserver(function () {
    var billingSelector = !!document.querySelector(config.selector);
    if (billingSelector) {
      this.disconnect();
      initEligibility();
    }
  });
  pageObserver.observe(document, {subtree: true, childList: true});

  function initEligibility() {
    var billingSelector = document.querySelector(config.selector);
    var eligibilityObserver = new MutationObserver(function () {
      if (!!document.querySelector(config.eligibilityReadySelector)) {
        this.disconnect();
        initObserver();
      }
    });
    eligibilityObserver.observe(billingSelector, {subtree: true, childList: true});
  }

  function initObserver() {
    if (!config.isEligible()) {
      return false;
    }

    var isArl = config.isArl();
    if (isArl) {
      // only non-arl flow
      return false;
    }

    var isCanceledState = config.isSubscriptionCanceledState();
    var cancelFlowConfig = isArl ? config.arl : config.nonArl;
    console.log('[Optimizely B+] initObserver; isArl=', isArl, '; isCanceledState=', isCanceledState);

    var dialogSelectorTrigger = isCanceledState ? cancelFlowConfig.postCancelDialogSelectorTrigger : cancelFlowConfig.preCancelDialogSelectorTrigger;
    var triggerPromptObserver = new MutationObserver(function (mutations) {
      // new billing app can have state change without page refresh
      isCanceledState = config.isSubscriptionCanceledState();
      dialogSelectorTrigger = isCanceledState ? cancelFlowConfig.postCancelDialogSelectorTrigger : cancelFlowConfig.preCancelDialogSelectorTrigger;
      var cancelDialogDisplayed = mutations.some(function (record) {
        return dialogSelectorTrigger && dialogSelectorTrigger(record);
      });
      if (cancelDialogDisplayed) {
        console.log('[Optimizely B+] Basic Plus Save Offer Test: Activate [canceledState=' + isCanceledState + ']');
        sessionStorage.setItem(CAMPAIGN_KEY, createAppStateStr(isArl, isCanceledState));
        var storedVariation = sessionStorage.getItem(CAMPAIGN_VARIATION_KEY);
        storedVariation && typeof window._basicPriceSaveOfferTest === 'function'
          ? window._basicPriceSaveOfferTest({variation: storedVariation})
          : activate();
      }
    });
    triggerPromptObserver.observe(document, {
      subtree: true,
      childList: true,
      attributes: true
    });
  }
}
}, {"id": "24791531071", "category": "other", "apiName": "20917322331_url_targeting_for_abecomm_202307__new_billing_page__", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us/billing(/plan)?/?"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate) {
  var paths = [
    /^\/billing(\/plan)?\/?$/
  ];

  if (!window['ZmOptlyUtil'].isInPath(paths)) {
    return;
  }

  var CAMPAIGN_KEY = '_zm_optly_opc-bp-so';
  var CAMPAIGN_VARIATION_KEY = '_zm_optly_opc-bp-so-var';
  sessionStorage.removeItem(CAMPAIGN_KEY);
  sessionStorage.removeItem(CAMPAIGN_VARIATION_KEY);

  var blockedCountries = [
    'RU', 'HK', 'UA', 'YE', 'LY', 'SD', 'BY', 'SO', 'KH', 'ML', 'MM', 'SS', 'CD', 'CF', 'AE', 'AF', 'IQ', 'CN', 'MX', 'CO', 'VE', 'ET', 'LB', 'NI', 'PK', 'ZW', // high-risk
    'IN' // on-session unsupported
  ];

  var config = {
    'selector': '.zr-main-container',
    'eligibilityReadySelector': '.bp-card-container .bp-plan-card',
    'isEligible': function () {
      return window.newBillingConfig
        && window.newBillingConfig.billingPortalVersion === 2
        && !window['ZmOptlyUtil'].isInCountry(window.newBillingConfig, blockedCountries)
        && !!window.newBillingConfig.allowDowngrade2basicPlus;
    },
    'isSubscriptionCanceledState': function () {
      var appElm = document.querySelector(config.selector);
      if (!appElm.__vue__) {
        return false;
      }

      try {
        return appElm.__vue__.$store.getters['fe-billing-plan-management/accountInfo'].status === 'Cancelled';
      } catch (e) {
        return false;
      }
    },
    'isArl': function () {
      var appElm = document.querySelector(config.selector);
      if (!appElm.__vue__) {
        return false;
      }

      try {
        return appElm.__vue__.$store.getters['fe-billing-plan-management/isARLCustomer'];
      } catch (e) {
        return false;
      }
    },
    'arl': {
      'preCancelDialogSelectorTrigger': function (record) {
        var target = record.target;
        return record.type === 'childList' && target.classList && target.classList.contains('bp-pre-cancel-dialog');
      }
    },
    'nonArl': {
      'preCancelDialogSelectorTrigger': function (record) {
        var target = record.target;
        return record.type === 'childList' && target.classList && target.classList.contains('bp-cancel-coupon-dialog');
      }
    }
  };

  var createAppStateStr = function (isArl, isCanceledState) {
    return [isArl.toString(), isCanceledState.toString()].join('|');
  };

  var pageObserver = new MutationObserver(function () {
    var billingSelector = !!document.querySelector(config.selector);
    if (billingSelector) {
      this.disconnect();
      initEligibility();
    }
  });
  pageObserver.observe(document, {subtree: true, childList: true});

  function initEligibility() {
    var billingSelector = document.querySelector(config.selector);
    var eligibilityObserver = new MutationObserver(function () {
      if (!!document.querySelector(config.eligibilityReadySelector)) {
        this.disconnect();
        initObserver();
      }
    });
    eligibilityObserver.observe(billingSelector, {subtree: true, childList: true});
  }

  function initObserver() {
    if (!config.isEligible()) {
      return false;
    }

    var isArl = config.isArl();
    if (!isArl) {
      // only arl flow
      return false;
    }

    var isCanceledState = config.isSubscriptionCanceledState();
    var cancelFlowConfig = isArl ? config.arl : config.nonArl;
    console.log('[Optimizely B+] initObserver; isArl=', isArl, '; isCanceledState=', isCanceledState);

    var dialogSelectorTrigger = isCanceledState ? cancelFlowConfig.postCancelDialogSelectorTrigger : cancelFlowConfig.preCancelDialogSelectorTrigger;
    var triggerPromptObserver = new MutationObserver(function (mutations) {
      // new billing app can have state change without page refresh
      isCanceledState = config.isSubscriptionCanceledState();
      dialogSelectorTrigger = isCanceledState ? cancelFlowConfig.postCancelDialogSelectorTrigger : cancelFlowConfig.preCancelDialogSelectorTrigger;
      var cancelDialogDisplayed = mutations.some(function (record) {
        return dialogSelectorTrigger && dialogSelectorTrigger(record);
      });
      if (cancelDialogDisplayed) {
        console.log('[Optimizely B+] Basic Plus Save Offer Test: Activate [canceledState=' + isCanceledState + ']');
        sessionStorage.setItem(CAMPAIGN_KEY, createAppStateStr(isArl, isCanceledState));
        var storedVariation = sessionStorage.getItem(CAMPAIGN_VARIATION_KEY);
        storedVariation && typeof window._basicPriceSaveOfferTest === 'function'
          ? window._basicPriceSaveOfferTest({variation: storedVariation})
          : activate();
      }
    });
    triggerPromptObserver.observe(document, {
      subtree: true,
      childList: true,
      attributes: true
    });
  }
}
}, {"id": "24799680558", "category": "other", "apiName": "20917322331_success_sessions_direct_to_paid_purchases", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "\\/buy\\/zsuccess"}], ["not", ["or", {"match": "substring", "type": "url", "value": "type=basic2pro"}]]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "24867451121", "category": "other", "apiName": "20917322331_success_opc_downgrade_success__basic_plus_plan", "name": null, "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "/opc/buy/downgrade"}], ["or", {"match": "substring", "type": "url", "value": "plan=zobasicp"}], ["or", {"match": "substring", "type": "url", "value": "type=downgrade"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "24870270520", "category": "other", "apiName": "20917322331_success_opc_downgrade_flow_success_page__basic_plus_", "name": null, "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "/opc/buy/updateSuccess"}], ["or", {"match": "substring", "type": "url", "value": "plan=zobasicp"}], ["or", {"match": "substring", "type": "url", "value": "type=downgrade"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "24879510013", "category": "other", "apiName": "20917322331_visit_billing_plan_page_", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us/billing/plan"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "24885920515", "category": "other", "apiName": "20917322331_url_targeting_for_pzecomm_202306__pricing_page__bill", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us(/[\\w-]+)?/pricing/?"}, {"match": "regex", "type": "url", "value": "(.*)zoom.us/billing"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate) {
  var paths = [
    /(\/[\w-]+)?\/pricing/,
    /^\/billing/
  ];

  var ZmOptlyUtil = window['ZmOptlyUtil'];
  if (!ZmOptlyUtil.isInPath(paths)) {
    return;
  }

  var utils = window.optimizely.get('utils');
  utils.observeSelector('#opc_config + *', function () {
    var allowedCountries = ['IN'];

    var pricingPageMatcher = window.dataModel && window.isFreeAccount && ZmOptlyUtil.isInCountry(window.dataModel, allowedCountries);
    if (pricingPageMatcher) {
      //console.log('[Optimizely] One Page Checkout [India/INR]: Activate [Pricing Page]');
      activate();
      return;
    }

    var billingPageMatcher = window.newBillingConfig && window.isFreeAccount && ZmOptlyUtil.isInCountry(window.newBillingConfig, allowedCountries);
    if (billingPageMatcher) {
      //console.log('[Optimizely] One Page Checkout [India/INR]: Activate [Billing Page]');
      activate();
    }
  }, {
    timeout: 30000,
    once: true,
    onTimeout: function () {
      //console.log('[Optimizely] One Page Checkout [India/INR]: Stopped Observing');
    }
  });
}
}, {"id": "24896290074", "category": "other", "apiName": "20917322331_visit_pricing_events_page_with_polling_function_fo_1", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us/pricing/events"}], ["not", ["or", {"match": "substring", "type": "url", "value": "https://ch01web.zoom.us"}, {"match": "substring", "type": "url", "value": "https://go.zoom.us"}]]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "polling", "activationCode": /**
 * Sample Polling Function
 * Supply an expression to return a boolean inside a function.
 * For complete documentation, see https://docs.developers.optimizely.com/web/docs/dynamic-websites#section-polling
 */

function pollingFn() {
    var highRiskCountries = ['CM', 'LI', 'MC', 'IM', 'IN', 'RU', 'HK', 'UA', 'YE', 'LY', 'SD', 'BY', 'SO', 'KH', 'ML', 'MM', 'SS', 'CD', 'CF', 'AE', 'AF', 'IQ', 'CN', 'MX', 'CO', 'VE', 'ET', 'LB', 'NI', 'PK', 'ZW', 'DE', 'AT', 'ES', 'IT', 'BE', 'NL', 'JP'];
  if(window.dataModel){
    return !highRiskCountries.includes(window.dataModel.currentCountry);
  }
}
}, {"id": "24948560802", "category": "other", "apiName": "20917322331_url_targeting_for_pzecomm_202308__pricingbilling_pag", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us(/[\\w-]+)?/pricing/events/?"}, {"match": "regex", "type": "url", "value": "(.*)zoom.us/billing"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate) {
  var paths = [
    /(\/[\w-]+)?\/pricing\/events/,
    /^\/billing/
  ];

  if (!window['ZmOptlyUtil'].isInPath(paths)) {
    return;
  }

  var utils = window.optimizely.get('utils');
  utils.observeSelector('#opc_config + *', function () {
    var blockedCountries = [
      'RU', 'HK', 'UA', 'YE', 'LY', 'SD', 'BY', 'SO', 'KH', 'ML', 'MM', 'SS', 'CD', 'CF', 'AE', 'AF', 'IQ', 'CN', 'MX', 'CO', 'VE', 'ET', 'LB', 'NI', 'PK', 'ZW', // high-risk
      'IN' // on-session unsupported
    ];

    var pricingPageMatcher = window.dataModel
      && typeof window.dataModel.isOPCSupportedForWebinarEventSession !== 'undefined'
      && window.dataModel.isOPCSupportedForWebinarEventSession !== 'Unsupported'
      && !window['ZmOptlyUtil'].isInCountry(window.dataModel, blockedCountries);
    if (pricingPageMatcher) {
      //console.log('[Optimizely] One Page Checkout (Webinars/Events/Sessions): Activate [Pricing Page]');
      activate();
      return;
    }

    var billingPageMatcher = window.newBillingConfig
      && typeof window.newBillingConfig.isOPCSupportedForWebinarEventSession !== 'undefined'
      && window.newBillingConfig.isOPCSupportedForWebinarEventSession !== 'Unsupported'
      && !window['ZmOptlyUtil'].isInCountry(window.newBillingConfig, blockedCountries);
    if (billingPageMatcher) {
      //console.log('[Optimizely] One Page Checkout (Webinars/Events/Sessions): Activate [Billing Page]');
      activate();
    }
  }, {
    timeout: 30000,
    once: true,
    onTimeout: function () {
      //console.log('[Optimizely] One Page Checkout (Webinars/Events/Sessions): Timeout');
    }
  });
}
}, {"id": "25222380027", "category": "other", "apiName": "20917322331_url_targeting_for_pzweb_202308_homepage__top_header_", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*).zoom.us\\/*$"}], ["not", ["or", {"match": "simple", "type": "url", "value": "go.zoom.us"}, {"match": "simple", "type": "url", "value": "us04web.zoom.us"}, {"match": "simple", "type": "url", "value": "us05web.zoom.us"}]]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "25270510591", "category": "other", "apiName": "20917322331_url_targeting_for_pzecomm_202308_pricing_page_banner", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "^https?://(?:\\w+\\.)?zoom\\.us/(?:pricing|pricing#personal)$"}], ["not", ["or", {"match": "substring", "type": "url", "value": "ch01web.zoom.us"}]]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "polling", "activationCode": function pollingFn() {

  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }

  var accType = document.getElementById("gtm_accountType");
    var highRiskCountries = ['CM', 'LI', 'MC', 'IM', 'IN', 'RU', 'HK', 'UA', 'YE', 'LY', 'SD', 'BY', 'SO', 'KH', 'ML', 'MM', 'SS', 'CD', 'CF', 'AE', 'AF', 'IQ', 'CN', 'MX', 'CO', 'VE', 'ET', 'LB', 'NI', 'PK', 'ZW'];
  if ((( getCookie('_zm_login_acctype') == 1 || getCookie('_zm_login_acctype') == 2 || getCookie('_zm_everlogin_type') == 1 || getCookie('_zm_everlogin_type') == 2 ||  (accType && accType.value == 2) || (accType && accType.value == 1)) && getCookie('_zm_cdn_blocked') == 'log_unblk' && (!window.billingConf.planInfos.serviceCodes || !window.billingConf.planInfos.serviceCodes.length) || accType.value === '') && !highRiskCountries.includes(window.dataModel.currentCountry)) {
    return true;
  }
}
}, {"id": "25295741054", "category": "other", "apiName": "20917322331_url_targeting_for_ztspz164_abecomm_202309__one_page_", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us(/[\\w-]+)?/opc/buy/config"}], ["or", {"match": "substring", "type": "url", "value": "plan=pro"}], ["or", {"type": "element_present", "value": "#the-main-content"}]], "deactivationEnabled": true, "undoOnDeactivation": false, "tags": [], "activationType": "dom_changed"}, {"id": "25303620967", "category": "other", "apiName": "20917322331_url_targeting_for_pzecomm_202309__pricingbilling_pag", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us(/[\\w-]+)?/pricing/?"}, {"match": "regex", "type": "url", "value": "(.*)zoom.us/billing"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate) {
  var paths = [
    /(\/[\w-]+)?\/pricing/,
    /^\/billing/
  ];

  if (!window['ZmOptlyUtil'].isInPath(paths)) {
    return;
  }

  var utils = window.optimizely.get('utils');
  utils.observeSelector('#opc_config + *', function () {
    var blockedCountries = [
      //'RU', 'HK', 'UA', 'YE', 'LY', 'SD', 'BY', 'SO', 'KH', 'ML', 'MM', 'SS', 'CD', 'CF', 'AE', 'AF', 'IQ', 'CN', 'MX', 'CO', 'VE', 'ET', 'LB', 'NI', 'PK', 'ZW', // high-risk
      'IN' // on-session unsupported
    ];

    var pricingPageMatcher = window.dataModel
      && typeof window.dataModel.enableZrForOpc !== 'undefined'
      && window.dataModel.enableZrForOpc !== 'Unsupported'
      && !window['ZmOptlyUtil'].isInCountry(window.dataModel, blockedCountries);
    if (pricingPageMatcher) {
      //console.log('[Optimizely] One Page Checkout (Rooms): Activate [Pricing Page]');
      activate();
      return;
    }

    var billingPageMatcher = window.newBillingConfig
      && typeof window.newBillingConfig.enableZrForOpc !== 'undefined'
      && window.newBillingConfig.enableZrForOpc !== 'Unsupported'
      && !window['ZmOptlyUtil'].isInCountry(window.newBillingConfig, blockedCountries);
    if (billingPageMatcher) {
      //console.log('[Optimizely] One Page Checkout (Rooms): Activate [Billing Page]');
      activate();
    }
  }, {
    timeout: 30000,
    once: true,
    onTimeout: function () {
      //console.log('[Optimizely] One Page Checkout (Rooms): Timeout');
    }
  });
}
}, {"id": "25306650175", "category": "other", "apiName": "20917322331_url_targeting_for_pzecomm_202309__pricingbilling_p_1", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us(/[\\w-]+)?/pricing/?"}, {"match": "regex", "type": "url", "value": "(.*)zoom.us/billing"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate) {
  var paths = [
    /(\/[\w-]+)?\/pricing/,
    /^\/billing/
  ];

  if (!window['ZmOptlyUtil'].isInPath(paths)) {
    return;
  }

  var utils = window.optimizely.get('utils');
  utils.observeSelector('#opc_config + *', function () {
    var blockedCountries = [
      //'RU', 'HK', 'UA', 'YE', 'LY', 'SD', 'BY', 'SO', 'KH', 'ML', 'MM', 'SS', 'CD', 'CF', 'AE', 'AF', 'IQ', 'CN', 'MX', 'CO', 'VE', 'ET', 'LB', 'NI', 'PK', 'ZW', // high-risk
      'IN' // on-session unsupported
    ];

    var pricingPageMatcher = window.dataModel
      && typeof window.dataModel.enableWbForOpc !== 'undefined'
      && window.dataModel.enableWbForOpc !== 'Unsupported'
      && !window['ZmOptlyUtil'].isInCountry(window.dataModel, blockedCountries);
    if (pricingPageMatcher) {
      //console.log('[Optimizely] One Page Checkout (Whiteboard): Activate [Pricing Page]');
      activate();
      return;
    }

    var billingPageMatcher = window.newBillingConfig
      && typeof window.newBillingConfig.enableWbForOpc !== 'undefined'
      && window.newBillingConfig.enableWbForOpc !== 'Unsupported'
      && !window['ZmOptlyUtil'].isInCountry(window.newBillingConfig, blockedCountries);
    if (billingPageMatcher) {
      //console.log('[Optimizely] One Page Checkout (Whiteboard): Activate [Billing Page]');
      activate();
    }
  }, {
    timeout: 30000,
    once: true,
    onTimeout: function () {
      //console.log('[Optimizely] One Page Checkout (Whiteboard): Timeout');
    }
  });
}
}, {"id": "25422200224", "category": "other", "apiName": "20917322331_url_targeting_for_pzecomm_202309__pricingcheckouthom", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us(/[\\w-]+)?/pricing/?"}, {"match": "regex", "type": "url", "value": "(.*)zoom.us/opc/buy"}, {"match": "regex", "type": "url", "value": "(.*)zoom.us/myhome"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate) {
  var paths = [
    /(\/[\w-]+)?\/pricing/,
    /^\/opc\/buy/,
    /^\/myhome/
  ];

  if (!window['ZmOptlyUtil'].isInPath(paths)) {
    return;
  }

  var utils = window.optimizely.get('utils');
  utils.observeSelector('#opc_config,#opt-bill-phone-config', function () {
    if (window.dataModel || window.newBillingConfig || window.homeDestinationConfig) {
      //console.log('[Optimizely] Disable Zoom Clips UI: Activate');
      activate();
    }
  }, {
    timeout: 30000,
    once: true,
    onTimeout: function () {
      //console.log('[Optimizely] Disable Zoom Clips UI: Timeout');
    }
  });
}
}, {"id": "25437370827", "category": "other", "apiName": "20917322331_url_targeting_for_abweb202309__home_pagenav_cta_ve_1", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://zoom.us/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "25508840397", "category": "other", "apiName": "20917322331_url_targeting_for_pzweb_202309__homepage__nav_update", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://zoom.us/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "25561920351", "category": "other", "apiName": "20917322331_url_targeting_for_test_testing_legacy_checkout_to_op", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us/buy"}], ["or", {"match": "substring", "type": "url", "value": "rtest=1"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate) {
  var paths = [
    /^\/buy$/
  ];

  if (!window['ZmOptlyUtil'].isInPath(paths)) {
    return;
  }

  document.querySelector('html').style.display = 'none';

  var utils = window.optimizely.get('utils');
  utils.observeSelector('#olft_config + *', function () {
    document.querySelector('html').style.display = 'block';

    if (window.newBillingConfig) {
      activate();
    }
  }, {
    timeout: 30000,
    once: true,
    onTimeout: function () {
      document.querySelector('html').style.display = 'block';
    }
  });
}
}, {"id": "25683380411", "category": "other", "apiName": "20917322331_url_targeting_for_pzecomm_202310__whiteboard_pricing", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us/pricing/whiteboard"}], ["or", {"type": "element_present", "value": ".question-list-container"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "dom_changed"}, {"id": "25691410317", "category": "other", "apiName": "20917322331_url_targeting_for_homepage_new_wheel", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://zoom.us/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "25786961533", "category": "other", "apiName": "20917322331_visit_pricing_page_country_specific", "name": null, "staticConditions": ["and", ["or", {"match": "regex", "type": "url", "value": "(.*)zoom.us(/[\\w-]+)?/pricing"}], ["not", ["or", {"match": "regex", "type": "url", "value": "\\/zoom-phone|\\/events|\\/zoom-rooms|\\/zoom-contact-center|\\/whiteboard|\\/education|\\/healthcare"}]]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "polling", "activationCode": /**
 * Sample Polling Function
 * Supply an expression to return a boolean inside a function.
 * For complete documentation, see https://docs.developers.optimizely.com/web/docs/dynamic-websites#section-polling
 */

function pollingFn() {
  var userCountry = window.dataModel.currentCountry;
  var countryList = ['US', 'GB', 'IE', 'CA', 'NZ', 'AU'];
  
  if (countryList.includes(userCountry)) {
    return true;
  }
}
}], "events": [{"id": "20944620049", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_click_standard_pro__buy_now_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".new-one-card-layout[period=\"annual\"] .feature-plan-card[plan=\"pro\"] a[data-taid=\"pro-card-btn\"]"}}, {"id": "20964911856", "viewId": "20950640141", "name": null, "category": "other", "apiName": "20917322331_click_homepage__header_nav__contact_sales__link", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".top-sales"}}, {"id": "20980702540", "viewId": "20950640141", "name": null, "category": "other", "apiName": "20917322331_click_homepage___header_nav__sign_in__link", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".signin .link"}}, {"id": "20985070061", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_click_explore_addons_", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".addon-box-container a.addon-box-btn"}}, {"id": "20989250049", "viewId": "20950640141", "name": null, "category": "other", "apiName": "20917322331_click_ada_chat_bot_icon", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#ada-button-frame"}}, {"id": "20992801631", "viewId": "20950640141", "name": null, "category": "other", "apiName": "20917322331_click_homepage__header_nav__sign_up_its_free__cta_bu", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".signupfree"}}, {"id": "20994690493", "viewId": "20950640141", "name": null, "category": "other", "apiName": "20917322331_click_homepage__header_nav__plans_n_pricing_link", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".top-pricing"}}, {"id": "20994760142", "viewId": "20950640141", "name": null, "category": "other", "apiName": "20917322331_click_homepage__footer__currency_dropdown__dropdown_", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".dropdown-currency > .dropdown-toggle"}}, {"id": "21005632440", "viewId": "20950640141", "name": null, "category": "other", "apiName": "20917322331_click_homepage__bottom_section__request_demo__cta_bu", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".btn-cta-wrapper > .cta-bgwhite"}}, {"id": "21008851005", "viewId": "20950640141", "name": null, "category": "other", "apiName": "20917322331_click_homepage__footer__language_dropdown__dropdown_", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".dropdown-language > .dropdown-toggle"}}, {"id": "21021571873", "viewId": "20950640141", "name": null, "category": "other", "apiName": "20917322331_click_homepage__bottom_section__buy_now__cta_button", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#screen8_container .cta-bg.cta-bgyellow"}}, {"id": "21025341525", "viewId": "20950640141", "name": null, "category": "other", "apiName": "20917322331_click_homepage__header_nav__request_demo__link", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#black-topbar .list-inline > li:nth-of-type(1)"}}, {"id": "21027610923", "viewId": "20950640141", "name": null, "category": "other", "apiName": "20917322331_click_homepage__header_nav__join_a_meeting__link", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#btnJoinMeeting"}}, {"id": "21100812002", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_click_all_pricing_pages__annual_bill__small_business", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".third-part .buy-plan-link[data-link-term=\"Annual\"]"}}, {"id": "21101951068", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_click_pricing_meetings_page__zoom_united_tab", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#tab-bundles > .pricing-tab-link"}}, {"id": "21104582685", "viewId": "21007930093", "name": null, "category": "other", "apiName": "20917322331_click_pricing_rooms_page__all_bills__free__sign_up_c", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".buy-plan-link[data-link-label=\"Free Trial - Start Free Trial\"]"}}, {"id": "21109731554", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_click_pricing_meetings_page__monthly_bill__enterpris", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".new-one-card-layout[period=\"monthly\"] .feature-plan-card[plan=\"enterprise\"] a[data-taid=\"ent-card-btn\"]"}}, {"id": "21113510508", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_click_pricing_meetings_page__main_cta__small_busines", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".new-one-card-layout[period=\"annual\"] .feature-plan-card[plan=\"business\"] a[data-taid=\"biz-card-btn\"]"}}, {"id": "21114182693", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_click_pricing_meetings_page__monthly_bill__small_bus", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".new-one-card-layout[period=\"monthly\"] .feature-plan-card[plan=\"business\"] a[data-taid=\"biz-card-btn\"]"}}, {"id": "21114610346", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_click_pricing_meetings_page__main_cta__free__sign_up", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".new-one-card-layout[period=\"annual\"] .feature-plan-card[plan=\"basic\"] a[data-taid=\"free-card-btn\"]"}}, {"id": "21120232261", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_click_all_pricing_pages__annual_bill__free__sign_up_", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".first-part .buy-plan-link[data-link-term=\"Annual\"]"}}, {"id": "21122421531", "viewId": "21007930093", "name": null, "category": "other", "apiName": "20917322331_click_pricing_rooms_page__monthly_bill__rooms_licens", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".buy-plan-link[data-link-label=\"Zoom Rooms - Buy Now\"][data-link-term=\"Monthly\"]"}}, {"id": "21122460952", "viewId": "21127280754", "name": null, "category": "other", "apiName": "20917322331_click_pricing_events_page__video_webinars__buy_now_c", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".first-part .price-abtest-designA > .buy-plan-link"}}, {"id": "21123821152", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_click_pricing_meetings_page__zoom_rooms_tab", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".new-pricing-tabs.one #tab-rooms"}}, {"id": "21124460775", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_click_pricing_meetings_page__annual_toggle_", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".new-one-ui-style .tabs-new-inside .bill_date_choose .zm-switch [aria-label=\"selectedmonthly\"]"}}, {"id": "21129182960", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_click_pricing_meetings_page__monthly_bill__pro__buy_", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".new-one-card-layout[period=\"monthly\"] .feature-plan-card[plan=\"pro\"] a[data-taid=\"pro-card-btn\"]"}}, {"id": "21130241665", "viewId": "21007930093", "name": null, "category": "other", "apiName": "20917322331_click_pricing_rooms_page__annual_bill__rooms_enterpr", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".buy-plan-link[data-link-label=\"Zoom Rooms Enterprise - Contact Sales\"][data-link-term=\"Annual\"]"}}, {"id": "21130251113", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_click_all_pricing_pages__pro__buy_now_cta__button", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".second-part .buy-plan-link[data-link-term=\"Monthly\"]"}}, {"id": "21130520207", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_click_pricing_meetings_page__header_nav__sign_in_lin", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".signin"}}, {"id": "21133831233", "viewId": "20950640141", "name": null, "category": "other", "apiName": "20917322331_click_homepage__hero__sign_up_free_cta__button", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#hmp-slide-1-a .cta-bgyellow"}}, {"id": "21135131640", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_click_pricing_meetings_page__full_plan_comparison_ex", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".new-one-card-layout #plancomparison #showFullPlanComarisonBtn"}}, {"id": "21135571818", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_click_all_pricing_pages__annual_bill__enterprise__co", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".fourth-part .buy-plan-link[data-link-term=\"Annual\"]"}}, {"id": "21136210480", "viewId": "21007930093", "name": null, "category": "other", "apiName": "20917322331_click_pricing_rooms_page__monthly_bill__rooms_enterp", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".buy-plan-link[data-link-label=\"Zoom Rooms Enterprise - Contact Sales\"][data-link-term=\"Monthly\"]"}}, {"id": "21138330019", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_click_pricing_meetings_page__zoom_events_tab", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".new-pricing-tabs.one #tab-webinars"}}, {"id": "21139030759", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_click_pricing_meetings_page__header_nav__sign_up_its", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#signupfree"}}, {"id": "21140880059", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_click_all_pricing_pages__free__sign_up_cta__button", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".first-part .buy-plan-link[data-link-term=\"Monthly\"]"}}, {"id": "21142300091", "viewId": "21007930093", "name": null, "category": "other", "apiName": "20917322331_click_pricing_rooms_page__annual_bill__rooms_license", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".buy-plan-link[data-link-label=\"Zoom Rooms - Buy Now\"][data-link-term=\"Annual\"]"}}, {"id": "21142360183", "viewId": "21127280754", "name": null, "category": "other", "apiName": "20917322331_clickvariant_b_pricing_events_page__event_platform__", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "[data-abtest=\"pricingWebinarB\"] .new-events-test .new-plan-card .price-abtest-designA .buy-plan-link[data-link-prod=\"Events Plus\"]"}}, {"id": "21143090914", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_click_pricing_meetings_page__monthly_toggle", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "input[type=\"radio\"][value=\"monthly\"]"}}, {"id": "21143110469", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_click_pricing_meetings_page__logo_", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".logo"}}, {"id": "21143720178", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_click_pricing_meetings_page__zoom_phone_tab", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".new-pricing-tabs.one #tab-phone"}}, {"id": "21145241186", "viewId": "21127280754", "name": null, "category": "other", "apiName": "20917322331_clickvariant_b_pricing_events_page__video_webinars__", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "[data-abtest=\"pricingWebinarB\"] .new-events-test .new-plan-card .price-abtest-designA .buy-plan-link[data-link-prod=\"Webinar\"]"}}, {"id": "21153820130", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_click_pricing_meetings_page__annual_bill__enterprise", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".new-one-card-layout[period=\"annual\"] .feature-plan-card[plan=\"enterprise\"] a[data-taid=\"ent-card-btn\"]"}}, {"id": "21155020849", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_click_pricing_meetings_page__monthly_bill__free__sig", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".new-one-card-layout[period=\"monthly\"] .feature-plan-card[plan=\"basic\"] a[data-taid=\"free-card-btn\"]"}}, {"id": "21155720436", "viewId": "21127280754", "name": null, "category": "other", "apiName": "20917322331_click_pricing_events_page__event_platform__buy_now_c", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".third-part .price-abtest-designA > .orange-link"}}, {"id": "21159770012", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_click_all_pricing_pages__annual_bill__pro__buy_now_c", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".second-part .buy-plan-link[data-link-term=\"Annual\"]"}}, {"id": "21163101237", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_click_all_pricing_pages__enterprise__contact_sales_c", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".fourth-part .buy-plan-link[data-link-term=\"Monthly\"]"}}, {"id": "21163230678", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_click_all_pricing_pages__small_businesses__buy_now_c", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".third-part .buy-plan-link[data-link-term=\"Monthly\"]"}}, {"id": "21204863076", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_click_all_pricing_pages__header__sign_in__link", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".signin a.link"}}, {"id": "21218143522", "viewId": "21007930093", "name": null, "category": "other", "apiName": "20917322331_click_pricing_rooms_page__monthly_bill__free__sign_u", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".price-item a[data-link-label=\"Free Trial - Start Free Trial\"][data-link-term=\"Monthly\"]"}}, {"id": "21230182274", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_click_all_pricing_pages__pages_tab__zoom_phone_tab__", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".zm-tabs__nav #tab-phone"}}, {"id": "21238620026", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_click_all_pricing_pages__billing_period_tab__bille_1", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".new-bill-switch-wrapper #tab-annual"}}, {"id": "21252550044", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_click_all_pricing_pages__pages_tab__zoom_rooms_tab__", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".zm-tabs__nav #tab-rooms"}}, {"id": "21252650041", "viewId": "21127280754", "name": null, "category": "other", "apiName": "20917322331_click_pricing_events_page__monthly_bill__webinar__bu", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".events-container[period=\"monthly\"] .webinar-plans-new a.buy-plan-link"}}, {"id": "21254752827", "viewId": "20980910363", "name": null, "category": "other", "apiName": "20917322331_click_pricing_phone_page__comparison__pro__contact_s", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".comparison-table-header [aria-label=\"Contact Sales Pro\"]"}}, {"id": "21254800022", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_click_pricing_meetings_page__addon_cloud_storage__bu", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".add-on-section a[data-link-label=\"Cloud Storage - Buy Now\"]"}}, {"id": "21260270019", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_click_all_pricing_pages__pages_tab__zoom_meetings_ta", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".zm-tabs__nav #tab-one"}}, {"id": "21260840014", "viewId": "21127280754", "name": null, "category": "other", "apiName": "20917322331_click_pricing_events_page__addon_audio_conferencing_", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".add-on-section .zm-button--primary[aria-describedby=\"ado1 adp1\"]"}}, {"id": "21262470028", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_click_pricing_meetings_page__addon_large_meetings__b", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".add-on-section a[data-link-label=\"Large Meetings - Buy Now\"]"}}, {"id": "21263401103", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_click_all_pricing_pages__billing_period_tab__billed_", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".new-bill-switch-wrapper #tab-monthly"}}, {"id": "21264170015", "viewId": "21127280754", "name": null, "category": "other", "apiName": "20917322331_click_pricing_events_page__annual_bill__zoom_events_", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".events-container[period=\"annual\"] .webinar-plans-new:nth-child(3) a.buy-plan-link"}}, {"id": "21268030026", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_click_all_pricing_pages__pages_tab__zoom_contact_cen", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".zm-tabs__nav #tab-contactCenter"}}, {"id": "21268220012", "viewId": "21127280754", "name": null, "category": "other", "apiName": "20917322331_click_pricing_events_page__annual_bill__webinar__buy", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".events-container[period=\"annual\"] .webinar-plans-new:nth-child(1) .buy-plan-link"}}, {"id": "21268270009", "viewId": "21007930093", "name": null, "category": "other", "apiName": "20917322331_click_pricing_rooms_page__annual_bill__free__sign_up", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".price-item a[data-link-label=\"Free Trial - Start Free Trial\"][data-link-term=\"Annual\"]"}}, {"id": "21269980017", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_click_all_pricing_pages__header__sign_up_its_free_ct", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "a.signupfree"}}, {"id": "21272250006", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_click_all_pricing_pages__pages_tab__zoom_events_tab_", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".zm-tabs__nav #tab-webinars"}}, {"id": "21277642330", "viewId": "20980910363", "name": null, "category": "other", "apiName": "20917322331_click_pricing_phone_page__monthly_bill__global_selec", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "[period=\"monthly\"] .plan-wrapper-row .pricing-details[plan=\"pro global select\"] [data-link-label=\"Domestic Select - Buy Now\"]"}}, {"id": "21277740027", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_click_pricing_meetings_page__addon_audio_conferencin", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".add-on-section a[data-link-label=\"Audio Plan - Buy Now\"]"}}, {"id": "21279353102", "viewId": "20980910363", "name": null, "category": "other", "apiName": "20917322331_click_pricing_phone_page__addon__zoom_phone_power_pa", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".add-on-section .buy-plan-btn[data-link-label=\"Zoom Phone Power User - Buy Now\"]"}}, {"id": "21279512389", "viewId": "20980910363", "name": null, "category": "other", "apiName": "20917322331_click_pricing_phone_page__comparison__select__contac", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".comparison-table-header [aria-label=\"Contact Sales Select\"]"}}, {"id": "21280590518", "viewId": "20980910363", "name": null, "category": "other", "apiName": "20917322331_click_pricing_phone_page__addon__international_calli", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".add-on-section[plan=\"international calling\"] a"}}, {"id": "21280620125", "viewId": "20980910363", "name": null, "category": "other", "apiName": "20917322331_click_pricing_phone_page__addon__additional_phone_nu", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".add-on-section [aria-describedby=\"additional-phone-plan additional-phone-plan_desc\"]"}}, {"id": "21281080018", "viewId": "21127280754", "name": null, "category": "other", "apiName": "20917322331_click_pricing_events_page__addon_cloud_storage__buy_", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".add-on-section .zm-button--primary[aria-describedby=\"ado2 adp2\"]"}}, {"id": "21281350017", "viewId": "21127280754", "name": null, "category": "other", "apiName": "20917322331_click_pricing_events_page__addon_zoom_event_services", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".add-on-section .zm-button--primary[aria-describedby=\"ado3 adp3\"]"}}, {"id": "21281520009", "viewId": "21127280754", "name": null, "category": "other", "apiName": "20917322331_click_pricing_events_page__full_plan_comparison__lin", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#plancomparison h3"}}, {"id": "21282600084", "viewId": "20980910363", "name": null, "category": "other", "apiName": "20917322331_click_pricing_phone_page__comparison__unlimited__buy", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".comparison-table-header [aria-label=\"Buy Now Unlimited\"]"}}, {"id": "21287812834", "viewId": "20980910363", "name": null, "category": "other", "apiName": "20917322331_click_pricing_phone_page__addon__toll_free_numbers__", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".add-on-section .buy-plan-btn[data-link-label=\"Toll-Free Numbers - Buy Now\"]"}}, {"id": "21291091739", "viewId": "20980910363", "name": null, "category": "other", "apiName": "20917322331_click_pricing_phone_page__monthly_bill__na_unlimited", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "[period=\"monthly\"] .plan-wrapper-row .pricing-details[plan=\"unlimited plan\"] [data-link-label=\"US & Canada Unlimited - Buy Now\"]"}}, {"id": "21292470156", "viewId": "20980910363", "name": null, "category": "other", "apiName": "20917322331_click_pricing_phone_page__annual_bill__global_select", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "[period=\"annual\"] .plan-wrapper-row .pricing-details[plan=\"pro global select\"] [data-link-label=\"Domestic Select - Buy Now\"]"}}, {"id": "21292530086", "viewId": "20980910363", "name": null, "category": "other", "apiName": "20917322331_click_pricing_phone_page__annual_bill__payg__buy_now", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".new-tab-content [period=\"annual\"] .pricing-details[plan=\"metered plan\"] .buy-plan-link[data-link-label=\"US & Canada Metered - Buy Now\"]"}}, {"id": "21299490807", "viewId": "20980910363", "name": null, "category": "other", "apiName": "20917322331_click_pricing_phone_page__annual_bill__na_unlimited_", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".new-tab-content [period=\"annual\"] .pricing-details[plan=\"unlimited plan\"] .buy-plan-link[data-link-label=\"US & Canada Unlimited - Buy Now\"]"}}, {"id": "21299780074", "viewId": "20980910363", "name": null, "category": "other", "apiName": "20917322331_click_pricing_phone_page__comparison__metered__buy_n", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".comparison-table-header [aria-label=\"Buy Now Metered\"]"}}, {"id": "21301751323", "viewId": "20980910363", "name": null, "category": "other", "apiName": "20917322331_click_pricing_phone_page__monthly_bill__na_metered__", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "[period=\"monthly\"] .plan-wrapper-row .pricing-details[plan=\"metered plan\"] [data-link-label=\"US & Canada Metered - Buy Now\"]"}}, {"id": "21308450088", "viewId": "20980910363", "name": null, "category": "other", "apiName": "20917322331_click_pricing_phone_page__full_plan_comparison__cta", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "button[data-link-label=\"Full Plan Comparison\"]"}}, {"id": "21510433390", "viewId": "20950640141", "name": null, "category": "other", "apiName": "20917322331_clicktest_variant_homepage__rdb__hero__sec_cta_butto", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".new_hero_redesign .sht_buttonRow .cta-sec"}}, {"id": "21539733359", "viewId": "20950640141", "name": null, "category": "other", "apiName": "20917322331_clicktest_variant_homepage__rdb__hero__main_orange_c", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".new_hero_redesign .sht_buttonRow .cta-bgyellow"}}, {"id": "21562320799", "viewId": "20950640141", "name": null, "category": "other", "apiName": "20917322331_clicktest_variant_homepage__rdb__rr__logos_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#six_container .six_cont_logo a img"}}, {"id": "21568532466", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_click_pricing_meetings_page__full_plan_comparison__2", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#plancomparison .comparison-table-header a[aria-label=\"Buy Now Business\"]"}}, {"id": "21568601802", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_click_pricing_meetings_page__addon_whiteboard__buy_n", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".add-on-section[plan=\"zoom whiteboard\"] a.buy-plan-btn"}}, {"id": "21571351472", "viewId": "20950640141", "name": null, "category": "other", "apiName": "20917322331_click_homepage__rdb__top_tick_whiteboard_link", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#tick_top a.tick_link"}}, {"id": "21582241072", "viewId": "20950640141", "name": null, "category": "other", "apiName": "20917322331_clicktest_variant_homepage__rdb__is__watch_full_vide", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#five_container .vslide_right .full-link span"}}, {"id": "21589160824", "viewId": "20950640141", "name": null, "category": "other", "apiName": "20917322331_clicktest_variant_homepage__rdb__ps__delight_custome", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".sticky-rails .product-titles a.product-title:nth-child(3)"}}, {"id": "21591240822", "viewId": null, "name": null, "category": "other", "apiName": "step2_sendcampaigndata_begin", "eventType": "custom", "eventFilter": null}, {"id": "21594780702", "viewId": "20950640141", "name": null, "category": "other", "apiName": "20917322331_clicktest_variant_homepage__rdb__ps__build_zoom_nav_", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".sticky-rails .product-titles a.product-title:nth-child(4)"}}, {"id": "21595150567", "viewId": null, "name": null, "category": "other", "apiName": "step2_sendcampaigndata_end", "eventType": "custom", "eventFilter": null}, {"id": "21597191068", "viewId": "20950640141", "name": null, "category": "other", "apiName": "20917322331_click_homepage__hero__carousel_ctas_engagement", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".heroSlide .tab-ct-text a"}}, {"id": "21597241150", "viewId": "20950640141", "name": null, "category": "other", "apiName": "20917322331_clicktest_variant_homepage__rdb__wn__slide_arrow_but", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#four_container .fstep button"}}, {"id": "21599060727", "viewId": "20950640141", "name": null, "category": "other", "apiName": "20917322331_clicktest_variant_homepage__rdb__ps__connect_team_na", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".sticky-rails .product-titles a.product-title:nth-child(1)"}}, {"id": "21599340502", "viewId": null, "name": null, "category": "other", "apiName": "step1_init_end", "eventType": "custom", "eventFilter": null}, {"id": "21600390637", "viewId": "20950640141", "name": null, "category": "other", "apiName": "20917322331_clicktest_variant_homepage__rdb__ps__host_events_nav", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".sticky-rails .product-titles a.product-title:nth-child(2)"}}, {"id": "21605000778", "viewId": "20950640141", "name": null, "category": "other", "apiName": "20917322331_clicktest_variant_homepage__rdb__wn__main_cta_button", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#four_container .fcta a"}}, {"id": "21605830220", "viewId": "20950640141", "name": null, "category": "other", "apiName": "20917322331_clicktest_variant_homepage__rdb__cs__watch_video_lin", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#sev_container .sev_link a"}}, {"id": "21610090764", "viewId": "20950640141", "name": null, "category": "other", "apiName": "20917322331_clicktest_variant_homepage__rdb__is__nav_buttons", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#five_container .fiv_in_cont"}}, {"id": "21610192338", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_click_pricing_meetings_page__full_plan_comparison__1", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#plancomparison .comparison-table-header a[aria-label=\"Buy Now Pro\"]"}}, {"id": "21611310342", "viewId": null, "name": null, "category": "other", "apiName": "step1_init_begin", "eventType": "custom", "eventFilter": null}, {"id": "21613581311", "viewId": "20950640141", "name": null, "category": "other", "apiName": "20917322331_clicktest_variant_homepage__rdb__bottom__sign_up_fre", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#eight-container .eight-llink"}}, {"id": "21621183437", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_click_pricing_meetings_page__full_comparison_expande", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#plancomparison .comparison-table-header a[aria-label=\"Sign Up Basic\"]"}}, {"id": "21621970027", "viewId": "20950640141", "name": null, "category": "other", "apiName": "20917322331_clicktest_variant_homepage__rdb__is__learn_more_butt", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#five_container .vcta a"}}, {"id": "21623000519", "viewId": "20950640141", "name": null, "category": "other", "apiName": "20917322331_clicktest_variant_homepage__rdb__ps__skip_ahead_butt", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".sticky-rails .bottom-fix a.skip"}}, {"id": "21625140568", "viewId": "20950640141", "name": null, "category": "other", "apiName": "20917322331_click_homepage__zoom_for_you_wheel__learn_more_link_", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#screen2_container a.learn"}}, {"id": "21625160762", "viewId": "20950640141", "name": null, "category": "other", "apiName": "20917322331_clicktest_variant_homepage__rdb__ps__dropdown__learn", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".sticky-rails .sticky-container .category-content a.w-button"}}, {"id": "21625330576", "viewId": "20950640141", "name": null, "category": "other", "apiName": "20917322331_click_homepage__customer_reviews__links_engagement", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".zoom-news a"}}, {"id": "21625460012", "viewId": "20950640141", "name": null, "category": "other", "apiName": "20917322331_clicktest_variant_homepage__rdb__sec__learn_more_lin", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#sec_container .sec_content .sec_link"}}, {"id": "21627260516", "viewId": "20950640141", "name": null, "category": "other", "apiName": "20917322331_clicktest_variant_homepage__rdb__bottom__plans_prici", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#eight-container .eight-rlink"}}, {"id": "21628890054", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_click_pricing_meetings_page__full_plan_comparison__3", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#plancomparison .comparison-table-header a[aria-label=\"Contact Sales Enterprise\"]"}}, {"id": "21629090617", "viewId": "20950640141", "name": null, "category": "other", "apiName": "20917322331_click_homepage__footer__links_engagement", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#footer-new a"}}, {"id": "21678820953", "viewId": "21127280754", "name": null, "category": "other", "apiName": "20917322331_click_pricing_event_page__billing_plan_toggle_cta__b", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "input[type=\"radio\"][name=\"Billed Circle\"]:not([value=\"attendee\"])"}}, {"id": "21688110396", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_clickpzo_pricing_zoom_one_page__enterprise_cta", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#new-pricing-content .feature-plan-card[plan=\"enterprise\"] a.buy-plan-link"}}, {"id": "21692240533", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_clickpzo_pricing_zoom_one_page__basic_free_cta", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#new-pricing-content .feature-plan-card[plan=\"basic\"] a.buy-plan-link"}}, {"id": "21692480527", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_clickpzo_pricing_zoom_one_page__personalbusiness__ta", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#new-pricing .switch-container .zm-tabs__item"}}, {"id": "21698910637", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_clickpzo_pricing_zoom_one_page__full_plan_comparis_1", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#new-pricing .zm-table a.orange-link[data-link-label=\"Basic Plan\"]"}}, {"id": "21703420539", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331__clickpzo_pricing_zoom_one_page__full_plan_compariso", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#new-pricing .zm-table a.orange-link[data-link-label=\"Biz Plan\"]"}}, {"id": "21704350446", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_clickpzo_pricing_zoom_one_page__addons__whiteboard__", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".new-add-on-wrapper a.buy-plan-btn[aria-describedby=\"whiteboard-plan whiteboard-plan_desc\"]"}}, {"id": "21707520716", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_clickpzo_pricing_zoom_one_page__ready_for_more__expl", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#new-pricing-content .plan-wrapper #promotion a.buy-plan-link"}}, {"id": "21711380843", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_clickpzo_pricing_zoom_one_page__addons__zoom_rooms__", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".new-add-on-wrapper a.buy-plan-btn[aria-describedby=\"premier-plan premier-plan_desc\"]"}}, {"id": "21711440652", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_clickpzo_pricing_zoom_one_page__addons__zoom_phone_p", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".new-add-on-wrapper a.buy-plan-btn[aria-describedby=\"power-pack-plan power-pack-plan_desc\"]"}}, {"id": "21714360256", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_clickpzo_pricing_zoom_one_page__business_cta", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#new-pricing-content .feature-plan-card[plan=\"business\"] a.buy-plan-link"}}, {"id": "21714850292", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_clickpzo_pricing_zoom_one_page__full_plan_comparis_2", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#new-pricing .zm-table a.orange-link[data-link-label=\"Pro Plan\"]"}}, {"id": "21718000383", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_clickpzo_pricing_zoom_one_page__pro_cta", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#new-pricing-content .feature-plan-card[plan=\"pro\"] a.buy-plan-link"}}, {"id": "21718460043", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_clickpzo_pricing_zoom_one_page__full_plan_comparis_3", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#new-pricing .zm-table a.orange-link[data-link-label=\"Biz Plan\"]"}}, {"id": "21719020030", "viewId": null, "name": null, "category": "other", "apiName": "LetsGoClick", "eventType": "custom", "eventFilter": null}, {"id": "21720190592", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_clickpzo_pricing_zoom_one_page__addons__large_meetin", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".new-add-on-wrapper a.buy-plan-btn[aria-describedby=\"new-large-meetings new-large-meetings_desc\"]"}}, {"id": "21726960718", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_clickpzo_pricing_zoom_one_page__addons__audio_confer", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".new-add-on-wrapper a.buy-plan-btn[aria-describedby=\"new-audio-conferencing new-audio-conferencing_desc\"]"}}, {"id": "21731560677", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_clickpzo_pricing_zoom_one_page__addons__cloud_storag", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".new-add-on-wrapper a.buy-plan-btn[aria-describedby=\"new-cloud-storage new-cloud-storage_desc\"]"}}, {"id": "21731670308", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_clickpzo_pricing_zoom_one_page__full_plan_comparis_4", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#new-pricing .zm-table a.orange-link[data-link-label=\"Enterprise Plan\"]"}}, {"id": "21749100097", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_clickpzo_pricing_zoom_one_page__full_plan_comparison", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#new-pricing-content #plancomparison .title h3"}}, {"id": "21767260185", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_clickpzo_pricing_zoom_one_page__business_plus_cta", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".feature-plan-card[plan=\"business plus\"] a.buy-plan-link"}}, {"id": "21795332789", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_click__pricing_page__bill_annually", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".zm-radio__original[value=\"annual\"]"}}, {"id": "21802981625", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_click__pricing_page__billed_monthly", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".zm-radio__original[value=\"monthly\"]"}}, {"id": "21860201473", "viewId": "20980910363", "name": null, "category": "other", "apiName": "20917322331_click__phone_pricing_page__toggle_engagement", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".fe-usage .fe-usage-optns input"}}, {"id": "21865092545", "viewId": "21850041931", "name": null, "category": "other", "apiName": "20917322331_click_buy_page__meetings_pro__additional_options__ta", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".additional-options [aria-label=\"Additional options\"] .zm-tabs__item"}}, {"id": "21869492148", "viewId": "21850041931", "name": null, "category": "other", "apiName": "20917322331_click_buy_page__meetings_pro__billing_annual_select", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".billing-checkbox-button-label[data-link-label=\"Annual\"]"}}, {"id": "21871282870", "viewId": "21850041931", "name": null, "category": "other", "apiName": "20917322331_click_buy_page__meetings_pro__top_banner__bundle_sav", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".upgrade-switch-to button.zm-button--primary"}}, {"id": "21900050039", "viewId": "21850041931", "name": null, "category": "other", "apiName": "20917322331_click_buy_page__meetings_pro__billing_monthly_select", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".billing-checkbox-button-label[data-link-label=\"Monthly\"]"}}, {"id": "21907330326", "viewId": "21850041931", "name": null, "category": "other", "apiName": "20917322331_click_buy_page__meetings_pro__cancel_cta", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#cancel_config_btn"}}, {"id": "21914960090", "viewId": "21850041931", "name": null, "category": "other", "apiName": "20917322331_click_buy_page__meetings_pro__continue_cta", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#save_config_btn"}}, {"id": "21917871093", "viewId": null, "name": null, "category": "other", "apiName": "Account SignUp - Buy Subscription -  flow1", "eventType": "custom", "eventFilter": null}, {"id": "21950421097", "viewId": "21270440613", "name": null, "category": "other", "apiName": "20917322331_click_billing_portal__pay_billview_invoice_link", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".plan-link-btn a.zm-button--link:nth-child(2)"}}, {"id": "21960591322", "viewId": "21270440613", "name": null, "category": "other", "apiName": "20917322331_click_billing_portal__update_credit_card_link_", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".plan-link-btn a.zm-button--link:first-child"}}, {"id": "21975790550", "viewId": "21270440613", "name": null, "category": "other", "apiName": "20917322331_click_billing_portal__upgrade_account_orange_cta_but", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".billing-page .current-products button.product-upgrade"}}, {"id": "21977310590", "viewId": "21270440613", "name": null, "category": "other", "apiName": "20917322331_click_billing_portal__cancel_plan_button_cta", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "button[aria-label=\"Cancel Zoom One Pro\"]"}}, {"id": "21979151145", "viewId": "21270440613", "name": null, "category": "other", "apiName": "20917322331_click_billing_portal__edit_current_plan_button_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "button[aria-label=\"Edit Zoom One Pro\"]"}}, {"id": "22029690679", "viewId": "21270440613", "name": null, "category": "other", "apiName": "20917322331_clicktc_billing_portal_test_version__toggle_billing_", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "div[data-abtest=\"switch-cycle-cel-testC\"] label.billing-switch"}}, {"id": "22031371383", "viewId": "21270440613", "name": null, "category": "other", "apiName": "20917322331_clicktb_billing_portal_test_version__dropdown_billin", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "div[data-abtest=\"switch-cycle-cel-testB\"] .zm-scrollbar "}}, {"id": "22129201187", "viewId": null, "name": null, "category": "other", "apiName": "step3_ga_tracking_success", "eventType": "custom", "eventFilter": null}, {"id": "22141530688", "viewId": null, "name": null, "category": "other", "apiName": "step4_ga_timeout", "eventType": "custom", "eventFilter": null}, {"id": "22159390030", "viewId": null, "name": null, "category": "other", "apiName": "step2_ga_ready", "eventType": "custom", "eventFilter": null}, {"id": "22164291588", "viewId": "21127280754", "name": null, "category": "other", "apiName": "20917322331_click_msf_step_1_no", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".step-one button.fe_no"}}, {"id": "22166761516", "viewId": "21127280754", "name": null, "category": "other", "apiName": "20917322331_click_msf_step_3_yes", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".step-three button.fe_yes"}}, {"id": "22174071981", "viewId": "21127280754", "name": null, "category": "other", "apiName": "20917322331_click_msf_step_2_yes", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".step-two button.fe_yes"}}, {"id": "22180361939", "viewId": "21127280754", "name": null, "category": "other", "apiName": "20917322331_click_msf_step_2_no", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".step-two button.fe_no"}}, {"id": "22189261869", "viewId": "21127280754", "name": null, "category": "other", "apiName": "20917322331_click_msf_step_4_yes_", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".step-four button.fe_yes"}}, {"id": "22195261447", "viewId": "21127280754", "name": null, "category": "other", "apiName": "20917322331_click_events_pricing_need_help", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".fe_link span"}}, {"id": "22197041560", "viewId": "21127280754", "name": null, "category": "other", "apiName": "20917322331_click_msf_webinars_buy_now", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".zoom_webinar .fe_buy-btn a"}}, {"id": "22199002318", "viewId": "21127280754", "name": null, "category": "other", "apiName": "20917322331_click_msf_close_icon", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".fe_form--wrapper .fe_close"}}, {"id": "22207481954", "viewId": "21127280754", "name": null, "category": "other", "apiName": "20917322331_click_msf_step_3_no_", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".step-three button.fe_no"}}, {"id": "22210931516", "viewId": "21127280754", "name": null, "category": "other", "apiName": "20917322331_click_msf_step_1_yes_", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".step-one button.fe_yes"}}, {"id": "22215241836", "viewId": "21127280754", "name": null, "category": "other", "apiName": "20917322331_click_msf_back_icon", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".fe_form--wrapper .zm-icon-left"}}, {"id": "22225970595", "viewId": "21127280754", "name": null, "category": "other", "apiName": "20917322331_click_msf_events_buy_now_", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".zoom_events .fe_buy-btn a"}}, {"id": "22235540119", "viewId": "21127280754", "name": null, "category": "other", "apiName": "20917322331_click_msf_step_4_no", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".step-four button.fe_no"}}, {"id": "22283991714", "viewId": "21270440613", "name": null, "category": "other", "apiName": "20917322331_clickpausetest_billing_portal__cancel_plan_modal__pa", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "[aria-label=\"cancelPromptDialog\"] .zm-dialog__footer div:nth-child(2) button.zm-button--link:nth-child(1)"}}, {"id": "22336993485", "viewId": "21000050341", "name": null, "category": "other", "apiName": "20917322331_click_buy_subscription_page__review_order__back_butt", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".bottom-section .secondBtn input[data-link-term=\"Back\"][data-link-label=\"Review Order Dialog\"]"}}, {"id": "22356553645", "viewId": "21270440613", "name": null, "category": "other", "apiName": "20917322331_click_billing_portal_page__cancel_modal__go_back_but", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "[aria-label=\"cancelPromptDialog\"] .zm-dialog__footer .zm-button--plain"}}, {"id": "22360463383", "viewId": "21000050341", "name": null, "category": "other", "apiName": "20917322331_click_buy_subscription_page__payment_method_select_c", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".billing_info .payment_method .payment_option input[name=\"payment_method\"]"}}, {"id": "22364503971", "viewId": "20992440311", "name": null, "category": "other", "apiName": "20917322331_click_buy_signup_page__back_cta_button", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".desktop-content button[data-link-term=\"Step 2\"][data-link-label=\"Back\"]"}}, {"id": "22372761598", "viewId": "21270440613", "name": null, "category": "other", "apiName": "20917322331_click_billing_portal_page__cancel_modal__cancel_subs", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "[aria-label=\"cancelPromptDialog\"] .zm-dialog__footer .zm-button--primary"}}, {"id": "22387901761", "viewId": "21000050341", "name": null, "category": "other", "apiName": "20917322331_click_buy_subscription_page__bottom__continue_cta_bu", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".bottom-section button[data-link-term=\"Step 3\"][data-link-label=\"Save & Continue\"]"}}, {"id": "22390860751", "viewId": "21270440613", "name": null, "category": "other", "apiName": "20917322331_clickpausetest_billing_portal__pause_modal_2__no_go_", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "[aria-label=\"pausePlanDialog\"] .zm-dialog__footer button.zm-button--plain"}}, {"id": "22416880410", "viewId": "20992440311", "name": null, "category": "other", "apiName": "20917322331_click_buy_signup_page__continue_cta_button", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".desktop-content button[data-link-term=\"Step 2\"][data-link-label=\"Continue\"]"}}, {"id": "22419312498", "viewId": "20992440311", "name": null, "category": "other", "apiName": "20917322331_clickvarb_buy_signup_page__side_checkout_cart__edit_", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#shopping-cart .cart-product-panel .cart-product-footer button"}}, {"id": "22419940952", "viewId": "21000050341", "name": null, "category": "other", "apiName": "20917322331_clickvarb_buy_subscription_page__side_checkout_cart_", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#shopping-cart .cart-product-panel .cart-product-footer button"}}, {"id": "22422180667", "viewId": "20992440311", "name": null, "category": "other", "apiName": "20917322331_click_buy_signup_page__age_select_radio_", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#age_gating_question [aria-label=\"For verification, please confirm your age.\"] .zm-radio input[name=\"age\"]"}}, {"id": "22423940575", "viewId": "21000050341", "name": null, "category": "other", "apiName": "20917322331_click_buy_subscription_page__bottom_back_cta_button", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".bottom-section button[data-link-term=\"Step 3\"][data-link-label=\"Back Button\"], #content_container > div.bottom-section.bt > div > button.btn.btn-default.back"}}, {"id": "22442490054", "viewId": null, "name": null, "category": "other", "apiName": "event_user_id_hash", "eventType": "custom", "eventFilter": null}, {"id": "22447530440", "viewId": "20992440311", "name": null, "category": "other", "apiName": "20917322331_buy_signup_page__signin_cta_button", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#age_gating_question .sign-in-button"}}, {"id": "22465270019", "viewId": "21000050341", "name": null, "category": "other", "apiName": "20917322331_click_buy_subscription_page__review_order__place_ord", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".bottom-section .firstBtn input[data-link-term=\"Place Order\"][data-link-label=\"Review Order Dialog\"]"}}, {"id": "22702080852", "viewId": "21850041931", "name": null, "category": "other", "apiName": "20917322331_clicktestphase2_buy_page__plan_details_cta", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".billing-app .zoom-buy-flow .fe_planDetails"}}, {"id": "22704210877", "viewId": "21850041931", "name": null, "category": "other", "apiName": "20917322331_clicktestphase2_buy_page__continue_cta", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".billing-app .zoom-buy-flow .fe_cta"}}, {"id": "22704230805", "viewId": "21850041931", "name": null, "category": "other", "apiName": "20917322331_clicktestphase2_buy_page__explore_more_plans_cta", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".billing-app .zoom-buy-flow .fe_explorePlan"}}, {"id": "22885960184", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_click_business_plus_buy_now_button", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "div.active > .zm-button--primary.buy-plan-link > .zm-button__slot"}}, {"id": "23342411917", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_clickztspz68_all_pricing_pages__plans_n_pricing_drop", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".pricing-tabs-bk .pricing-tabs-bk-title-selector button"}}, {"id": "23343782330", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_clickztspz68_all_pricing_pages__tabs__webinar_cta", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#new-pricing-content .new-pricing-tabs.zm-tabs--capsule #tab-webinars"}}, {"id": "23343821354", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_clickztspz68_all_pricing_pages__tabs__contact_center", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#new-pricing-content .new-pricing-tabs.zm-tabs--capsule #tab-contactCenter"}}, {"id": "23351892073", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_clickztspz68_all_pricing_pages__annual_basic__main_c", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".pricing-tabs-bk-content .new-one-card-layout[period=\"annual\"] .feature-plan-card[plan=\"basic\"] a[data-taid=\"free-card-btn\"]"}}, {"id": "23358011207", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_clickztspz68_all_pricing_pages__tabs__rooms_cta", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#new-pricing-content .new-pricing-tabs.zm-tabs--capsule #tab-rooms"}}, {"id": "23360021887", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_clickztspz68_all_pricing_pages__tabs__whiteboard_cta", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#new-pricing-content .new-pricing-tabs.zm-tabs--capsule #tab-whiteboard"}}, {"id": "23362081740", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_clickztspz68_all_pricing_pages__annual_pro__main_cta", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".pricing-tabs-bk-content .new-one-card-layout[period=\"annual\"] .feature-plan-card[plan=\"pro\"] a[data-taid=\"pro-card-btn\"]"}}, {"id": "23363802037", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_clickztspz68_all_pricing_pages__monthly_business_plu", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".pricing-tabs-bk-content .new-one-card-layout[period=\"monthly\"] .feature-plan-card[plan=\"business plus\"] a[data-taid=\"biz-plus-card-btn\"]"}}, {"id": "23363981698", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_clickztspz68_all_pricing_pages__monthly_pro__main_ct", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".pricing-tabs-bk-content .new-one-card-layout[period=\"monthly\"] .feature-plan-card[plan=\"pro\"] a[data-taid=\"pro-card-btn\"]"}}, {"id": "23376782016", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_clickztspz68_all_pricing_pages__annual_business_plus", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".pricing-tabs-bk-content .new-one-card-layout[period=\"annual\"] .feature-plan-card[plan=\"business plus\"] a[data-taid=\"biz-plus-card-btn\"]"}}, {"id": "23395011988", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_clickztspz68_all_pricing_pages__monthly_business__ma", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".pricing-tabs-bk-content .new-one-card-layout[period=\"monthly\"] .feature-plan-card[plan=\"business\"] a[data-taid=\"biz-card-btn\"]"}}, {"id": "23407721060", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_clickztspz68_all_pricing_pages__monthly_basic__main_", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".pricing-tabs-bk-content .new-one-card-layout[period=\"monthly\"] .feature-plan-card[plan=\"basic\"] a[data-taid=\"free-card-btn\"]"}}, {"id": "23426270892", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_clickztspz68_all_pricing_pages__annual_business__mai", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".pricing-tabs-bk-content .new-one-card-layout[period=\"annual\"] .feature-plan-card[plan=\"business\"] a[data-taid=\"biz-card-btn\"]"}}, {"id": "23434620175", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_clickztspz68_all_pricing_pages__annual_enterprise__m", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".pricing-tabs-bk-content .new-one-card-layout[period=\"annual\"] .feature-plan-card[plan=\"enterprise\"] a[data-taid=\"ent-card-btn\"]"}}, {"id": "23438730056", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_clickztspz68_all_pricing_pages__monthly_enterprise__", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".pricing-tabs-bk-content .new-one-card-layout[period=\"monthly\"] .feature-plan-card[plan=\"enterprise\"] a[data-taid=\"ent-card-btn\"]"}}, {"id": "23445061604", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_clickztspz68_all_pricing_pages__tabs__zoom_phone_cta", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#new-pricing-content .new-pricing-tabs.zm-tabs--capsule #tab-phone"}}, {"id": "23446050080", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_clickztspz68_all_pricing_pages__tabs__zoom_one_cta", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#new-pricing-content .new-pricing-tabs.zm-tabs--capsule #tab-one"}}, {"id": "23640770206", "viewId": "21127280754", "name": null, "category": "other", "apiName": "20917322331_click_pricing_events_page__comparison__zoom_sessions", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".comparison-table-header-cell [aria-label=\"Buy Now Zoom Sessions\"]"}}, {"id": "23642190232", "viewId": "21127280754", "name": null, "category": "other", "apiName": "20917322331_click_pricing_events_page__comparison__zoom_webinars", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".comparison-table-header-cell [aria-label=\"Buy Now Zoom Webinars\"]"}}, {"id": "23646540573", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_clickpd__zo_pricing_page__monthly__business__buy_now", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".new-one-card-layout[period=\"monthly\"] .feature-plan-card[plan=\"business\"] a[data-taid=\"biz-card-btn\"]"}}, {"id": "23646850473", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_clickpd__zo_pricing_page__monthly__compare_all_zoom_", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".one-page[period=\"monthly\"] #plancomparison #showFullPlanComarisonBtn"}}, {"id": "23650400300", "viewId": "21127280754", "name": null, "category": "other", "apiName": "20917322331_click_pricing_events__all_buy_now_ctas", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".buy-plan-link"}}, {"id": "23651770692", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_clickpdvc__zo_pricing_page__monthly__basic_plus__buy", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".new-one-card-layout[period=\"monthly\"] [plan=\"basic plus\"][data-variation=\"B\"] a[data-taid=\"pro-card-btn\"]"}}, {"id": "23652130674", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_click_pricing_meetings_page__annual_bill__business_p", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".new-one-card-layout[period=\"annual\"] .feature-plan-card[plan=\"business plus\"] a[data-taid=\"biz-plus-card-btn\"]"}}, {"id": "23655510386", "viewId": "21127280754", "name": null, "category": "other", "apiName": "20917322331_click_pricing_events_page__zoom_sessions_buy_now_cta", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".webinar-plans-new:nth-of-type(2) .buy-plan-link"}}, {"id": "23656660722", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_clickpd__zo_pricing_page__monthly__basic__signup_but", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".new-one-card-layout[period=\"monthly\"] .feature-plan-card[plan=\"basic\"] a[data-taid=\"free-card-btn\"]"}}, {"id": "23659720573", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_click_pricing_meetings_page__zoom_whiteboard_tab", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".new-pricing-tabs.one #tab-whiteboard"}}, {"id": "23660361056", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_clickpd__zo_pricing_page__monthly__full_comparison_1", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".one-page[period=\"monthly\"] #plancomparison .comparison-table-header a[aria-label=\"Buy Now Pro\"]"}}, {"id": "23661890832", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_clickpd__zo_pricing_page__monthly__basic_plus__buy_n", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".new-one-card-layout[period=\"monthly\"] [plan=\"basic plus\"][data-variation=\"C\"] a[data-taid=\"pro-card-btn\"]"}}, {"id": "23665490800", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_clickpd__zo_pricing_page__monthly__full_comparison__", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".one-page[period=\"monthly\"] #plancomparison .comparison-table-header a[aria-label=\"Sign Up Basic\"]"}}, {"id": "23669030418", "viewId": "21127280754", "name": null, "category": "other", "apiName": "20917322331_click_pricing_events_page__zoom_events_buy_now_cta", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".webinar-plans-new:nth-of-type(3) .buy-plan-link"}}, {"id": "23670300717", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_click_pricing_meetings_page__full_plan_comparison__4", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#plancomparison .comparison-table-header a[aria-label=\"Buy Now Business Plus\"]"}}, {"id": "23671921120", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_clickpd__zo_pricing_page__monthly__full_comparison_3", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".one-page[period=\"monthly\"] #plancomparison .comparison-table-header a[aria-label=\"Buy Now Business Plus\"]"}}, {"id": "23671990465", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_clickpd__zo_pricing_page__monthly__pro__buy_now_butt", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".new-one-card-layout[period=\"monthly\"] .feature-plan-card[plan=\"pro\"] a[data-taid=\"pro-card-btn\"]"}}, {"id": "23673631004", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331__click_pricing_meetings_page__monthly_bill__business", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".new-one-card-layout[period=\"monthly\"] .feature-plan-card[plan=\"business plus\"] a[data-taid=\"biz-plus-card-btn\"]"}}, {"id": "23674950486", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_clickpd__zo_pricing_page__monthly__business_plus__bu", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".new-one-card-layout[period=\"monthly\"] .feature-plan-card[plan=\"business plus\"] a[data-taid=\"biz-plus-card-btn\"]"}}, {"id": "23676510064", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_clickpd__zo_pricing_page__monthly__full_comparison_2", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".one-page[period=\"monthly\"] #plancomparison .comparison-table-header a[aria-label=\"Buy Now Business\"]"}}, {"id": "23677050518", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_clickpd__zo_pricing_page__qualtrics__survey_answer_c", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#SurveyEngineBody .LabelContainer label.SingleAnswer"}}, {"id": "23677230818", "viewId": "21127280754", "name": null, "category": "other", "apiName": "20917322331_click_pricing_events_page__zoom_webinars_buy_now_cta", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".webinar-plans-new:nth-of-type(1) .buy-plan-link"}}, {"id": "23683000203", "viewId": "21127280754", "name": null, "category": "other", "apiName": "20917322331_click_pricing_events_page__comparison__zoom_events_b", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".comparison-table-header-cell [aria-label=\"Buy Now Zoom Events\"]"}}, {"id": "23686130294", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_click_pricing_meetings_page__monthlyannual_toggle_cl", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".new-one-ui-style .tabs-new-inside .bill_date_choose .zm-switch"}}, {"id": "23699690125", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_click_pricing_meetings_page__zoom_contact_centertab", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".new-pricing-tabs.one #tab-contactCenter"}}, {"id": "23707240383", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_clickpd__zo_pricing_page__monthly__full_comparison_4", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".one-page[period=\"monthly\"] #plancomparison .comparison-table-header a[aria-label=\"Contact Sales Enterprise\"]"}}, {"id": "23709660009", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_clickpdvb__zo_pricing_page__monthly__basic_plus__buy", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".new-one-card-layout[period=\"monthly\"] [plan=\"basic plus\"][data-variation=\"A\"] a[data-taid=\"pro-card-btn\"]"}}, {"id": "23730741529", "viewId": "21127280754", "name": null, "category": "other", "apiName": "20917322331_click_pricing_events_page__pay_per_attendee__zoom_ev", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".events-container[period=\"attendee\"] .webinar-plans-new:nth-child(3) a.buy-plan-link"}}, {"id": "23736620650", "viewId": "20980910363", "name": null, "category": "other", "apiName": "20917322331_clickztspz69vb_pricing_phone_page__monthly_bill__na_", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".fe_phone_pricing [period=\"monthly\"] .plan-wrapper-row [plan=\"business plus\"] [data-taid=\"biz-plus-card-btn\"]"}}, {"id": "23743661518", "viewId": "21127280754", "name": null, "category": "other", "apiName": "20917322331_click_pricing_events_page__annual_bill__zoom_session", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".events-container[period=\"annual\"] .webinar-plans-new:nth-child(2) a.buy-plan-link"}}, {"id": "23745341293", "viewId": "21127280754", "name": null, "category": "other", "apiName": "20917322331_click_pricing_events_page__pay_per_attendee__zoom_se", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".events-container[period=\"attendee\"] .webinar-plans-new:nth-child(2) a.buy-plan-link"}}, {"id": "23779950541", "viewId": "20980910363", "name": null, "category": "other", "apiName": "20917322331_clickztspz69vb_pricing_phone_page__annual_bill__na_b", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".fe_phone_pricing [period=\"annual\"] .feature-plan-card[plan=\"business plus\"] .buy-plan-link"}}, {"id": "23842300052", "viewId": "21127280754", "name": null, "category": "other", "apiName": "20917322331_click_pricing_events__compare_all_zoom_plans_cta", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#showFullPlanComarisonBtn, #showFullPlanComarisonBtn"}}, {"id": "24386161124", "viewId": "24409400200", "name": null, "category": "other", "apiName": "20917322331_click_phone_pricing_page__features_table__metered_ct", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".comparison-table-header [aria-label=\"Buy Now Metered\"]"}}, {"id": "24393490441", "viewId": "24409400200", "name": null, "category": "other", "apiName": "20917322331_click_phone_pricing_page__features_table__pro_cta_cl", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".comparison-table-header [aria-label=\"Contact Sales Pro\"]"}}, {"id": "24394231043", "viewId": "24409400200", "name": null, "category": "other", "apiName": "20917322331_click_phone_pricing_page__main_card__unlimited_cta_c", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "[plan=\"unlimited plan\"] .buy-plan-link"}}, {"id": "24404800498", "viewId": "24409400200", "name": null, "category": "other", "apiName": "20917322331_click_phone_pricing_page__features_table__expandcoll", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".fe-core-Content, .fe-PhoneFeatureTr, .fe-DeviceSupportTr, .fe-ZoomMeetingTr, .fe-IntegrationTr, .fe-CentralizedTr"}}, {"id": "24410120541", "viewId": "24409400200", "name": null, "category": "other", "apiName": "20917322331_click_phone_pricing_page__main_card__global_select_c", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "[plan=\"pro global select\"] .buy-plan-link"}}, {"id": "24411510264", "viewId": "24409400200", "name": null, "category": "other", "apiName": "20917322331_click_phone_pricing_page__features_table__select_cta", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".comparison-table-header [aria-label=\"Contact Sales Select\"]"}}, {"id": "24415740511", "viewId": "24409400200", "name": null, "category": "other", "apiName": "20917322331_click_phone_pricing_page__features_table__unlimited_", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".comparison-table-header [aria-label=\"Buy Now Unlimited\"]"}}, {"id": "24430170085", "viewId": "24409400200", "name": null, "category": "other", "apiName": "20917322331_click_phone_pricing_page__features_table__close_comp", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#showFullPlanComarisonBtn[aria-expanded=\"true\"]"}}, {"id": "24441650082", "viewId": "24409400200", "name": null, "category": "other", "apiName": "20917322331_click_phone_pricing_page__main_card__pay_as_you_go_c", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "[plan=\"metered plan\"] .buy-plan-link"}}, {"id": "24444270006", "viewId": "20950640141", "name": null, "category": "other", "apiName": "20917322331_paragraph_demo_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".swiper-slide-visible p.desc"}}, {"id": "24490380189", "viewId": "24495650228", "name": null, "category": "other", "apiName": "20917322331_click_pricing_page__zoom_one__scheduler_promotion__c", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".fe_promotion_container a"}}, {"id": "24519200171", "viewId": "24495650228", "name": null, "category": "other", "apiName": "20917322331_click_pricing_page__zoom_one__scheduler_promotion__1", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".fe_promotion .closeIcon"}}, {"id": "24752810267", "viewId": "24731670076", "name": null, "category": "other", "apiName": "20917322331_addons_engagement", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".add-on-parts a"}}, {"id": "24811220073", "viewId": "24731670076", "name": null, "category": "other", "apiName": "20917322331_all_toggle_engagement", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".bill_date_choose .zm-switch input:not(.optly-switch-input)"}}, {"id": "24840860788", "viewId": "24879510013", "name": null, "category": "other", "apiName": "20917322331_click_new_billing_plan_page__please_note_modal__go_b", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".bp-pre-cancel-dialog .bp-pre-cancel-dialog__footer .zm-button--plain"}}, {"id": "24865690433", "viewId": "24879510013", "name": null, "category": "other", "apiName": "20917322331_click_new_billing_plan_page__cancellation_modal__rea", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": " .bp-post-cancel-success-dialog .bp-retentions__cancel-confirm #btn_postcancel_resubscribe"}}, {"id": "24867450956", "viewId": "24879510013", "name": null, "category": "other", "apiName": "20917322331_click_new_billing_plan_page__manage_plan_modal__canc", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".bp-plan-manage-dialog .bp-plan-manage-dialog__footer .bp-footer-button-container .zm-button--plain"}}, {"id": "24868580769", "viewId": "24879510013", "name": null, "category": "other", "apiName": "20917322331_click_new_billing_plan_page__please_note_modal__sw_1", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".bp-pre-cancel-dialog .bp-retentions__pre-cancel .pre-cancel #btn_precancel_offer"}}, {"id": "24875170798", "viewId": "24870270520", "name": null, "category": "other", "apiName": "20917322331_click_opc_update_success_page__basic_plus_plan___rev", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".opc-upgrade-success.opc-page #the-main-content.zm-button--primary"}}, {"id": "24878200248", "viewId": "24879510013", "name": null, "category": "other", "apiName": "20917322331_click_new_billing_plan_page__plan_management__zoom_3", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".bp-card-container .bp-plan-card__body__bundle .bp-plan-card__body__bundle__action"}}, {"id": "24881520707", "viewId": "24879510013", "name": null, "category": "other", "apiName": "20917322331_click_new_billing_plan_page__please_note_modal__paus", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".bp-pre-cancel-dialog .bp-pre-cancel-dialog__footer__link-container .zm-button--link"}}, {"id": "24881920799", "viewId": "24879510013", "name": null, "category": "other", "apiName": "20917322331_click_new_billing_plan_page__plan_summary_card__view", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".bp-coupons-and-plan-summary .bp-plan-summary-wrap .zm-button--link"}}, {"id": "24882020372", "viewId": "24879510013", "name": null, "category": "other", "apiName": "20917322331_click_new_billing_plan_page__plan_management__zoom_2", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".bp-card-container .bp-plan-card__body__planlist .bp-plan-info__link"}}, {"id": "24882140190", "viewId": "24879510013", "name": null, "category": "other", "apiName": "20917322331_click_new_billing_plan_page__discover_other_cards__a", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".bp-card-container .add-ons .bp-addon-plan .bp-plan-card__manage-btn"}}, {"id": "24886490793", "viewId": "24879510013", "name": null, "category": "other", "apiName": "20917322331_click_new_billing_plan_page__manage_plan_modal__edit", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".bp-plan-manage-dialog .bp-plan-manage-dialog__footer .bp-footer-button-container .zm-button--primary"}}, {"id": "24890140380", "viewId": "24879510013", "name": null, "category": "other", "apiName": "20917322331_click_new_billing_plan_page__plan_management__zoom_1", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".bp-card-container .bp-plan-card__header__action .zm-icon-down"}}, {"id": "24895490581", "viewId": "24879510013", "name": null, "category": "other", "apiName": "20917322331_click_new_billing_plan_page__plan_management__coupon", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".bp-coupons-and-plan-summary .bp-coupons-wrap .zm-button--link"}}, {"id": "24903370192", "viewId": "24879510013", "name": null, "category": "other", "apiName": "20917322331_click_new_billing_plan_page__switch_to_basic_plus_mo", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".bp-cancel-coupon-dialog .bp-cancel-coupon-dialog__body .secondBtn #btn-request_cancel_plan"}}, {"id": "24904010127", "viewId": "24879510013", "name": null, "category": "other", "apiName": "20917322331_click_new_billing_plan_page__cancellation_modal__pau", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".bp-post-cancel-success-dialog .bp-retentions__cancel-confirm #btn_postcancel_pause"}}, {"id": "24905910169", "viewId": "24879510013", "name": null, "category": "other", "apiName": "20917322331_click_new_billing_plan_page__please_note_modal__canc", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".bp-pre-cancel-dialog .bp-pre-cancel-dialog__footer .zm-button--primary"}}, {"id": "24906100101", "viewId": "24879510013", "name": null, "category": "other", "apiName": "20917322331_click_new_billing_plan_page__you_might_be_interested", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".bp-card-container .bp-retentions .bp-ui-card a.link"}}, {"id": "24908750024", "viewId": "24879510013", "name": null, "category": "other", "apiName": "20917322331_click_new_billing_plan_page__plan_management__zoom_o", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".bp-card-container .bp-plan-card__header__action .bp-plan-card__manage-btn"}}, {"id": "24912580107", "viewId": "24879510013", "name": null, "category": "other", "apiName": "20917322331_click_new_billing_plan_page__cancellation_modal__sta", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".bp-post-cancel-success-dialog .bp-retentions__cancel-confirm #btn_postcancel_survey"}}, {"id": "24913170542", "viewId": "24879510013", "name": null, "category": "other", "apiName": "20917322331_click_new_billing_plan_page__please_note_modal__disp", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".bp-pre-cancel-dialog .bp-pre-cancel-dialog__footer .bp-pre-cancel-dialog__footer__link-btn"}}, {"id": "24924380029", "viewId": "24879510013", "name": null, "category": "other", "apiName": "20917322331_click_new_billing_plan_page__please_note_modal__swit", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".bp-pre-cancel-dialog .bp-retentions__pre-cancel .pre-cancel #btn_precancel_pause"}}, {"id": "24928970202", "viewId": "24879510013", "name": null, "category": "other", "apiName": "20917322331_click_new_billing_plan_page__switch_to_basic_plus__1", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".bp-cancel-coupon-dialog .bp-cancel-coupon-dialog__body .firstBtn #btn-request_take_offer"}}, {"id": "24929120265", "viewId": "24879510013", "name": null, "category": "other", "apiName": "20917322331_click_new_billing_plan_page__cancellation_modal__get", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".bp-post-cancel-success-dialog .bp-retentions__cancel-confirm #btn_postcancel_offer_reactivate"}}, {"id": "25061440450", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_click_zoom_one_pricing_page__monthly_billannually_bi", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".fe_enterprise_wrapper .fe_contactBtn"}}, {"id": "25114910893", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_click_zo_pricing_page__annual_plan__business_plus__b", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "a[href*=\"/buy?plan=zonebundle&from=zonebundle_zonebizpzvu&period=annual&addon_period=annual&usageType\"]"}}, {"id": "25116760857", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_click_zo_pricing_page__annual_plan__pro__buy_now_cta", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "a[href*=\"/opc/buy?plan=pro&period=annual&from=pro&usageType\"]"}}, {"id": "25120470869", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_click_zo_pricing_page__monthly_plan__business_plus__", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "a[href*=\"/buy?plan=zonebundle&from=zonebundle_zonebizpzvu&period=monthly&addon_period=monthly&usageType=business\"]"}}, {"id": "25124690953", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_click_zo_pricing_page__monthly_plan__business__buy_n", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "a[href*=\"/opc/buy?plan=biz&period=monthly&from=biz&usageType\"]"}}, {"id": "25132500991", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_click_zp_pricing_page__monthly_plan__uscanada_payg_b", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "a[href*=\"/opc/buy?plan=pbx&period=monthly&from=pbx_ZVM&addon_period=monthly\"]"}}, {"id": "25138221070", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_click_zp_pricing_page__annual_plan__uscanada_payg_bu", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "a[href*=\"/opc/buy?plan=pbx&period=annual&from=pbx_ZVM&addon_period=annual\"]"}}, {"id": "25146221541", "viewId": "20950640141", "name": null, "category": "other", "apiName": "20917322331_click_homepage__temporary_zoomtopia_banner__save_you", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".zoomTopiaPara a"}}, {"id": "25147110508", "viewId": null, "name": null, "category": "other", "apiName": "Addon_Learn_More_Clicks", "eventType": "custom", "eventFilter": null}, {"id": "25160600272", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_click_zo_pricing_page__monthly_plan_pro__buy_now_cta", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "a[href*=\"/opc/buy?plan=pro&period=monthly&from=pro&usageType\"]"}}, {"id": "25161010865", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_click_zw_pricing_page__monthly_plan__events_buy_now_", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "a[aria-label=\"Buy NowZoom Events\"][data-link-term=\"Monthly\"]"}}, {"id": "25161410834", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_click_zw_pricing_page__monthly_plan__webinar__buy_no", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "a[href*=\"/opc/buy?plan=pro&period=monthly&from=webinar500&usageType\"]"}}, {"id": "25165900477", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_click_zo_pricing_page__annual_plan__business__buy_no", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "a[href*=\"/opc/buy?plan=biz&period=annual&from=biz&usageTyp\"]"}}, {"id": "25167440718", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_click_zp_pricing_page__annual_plan__uscanada_unlimit", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "a[href*=\"/opc/buy?plan=pbx&period=annual&from=pbx_ZVU&addon_period=annual&\"]"}}, {"id": "25181970350", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_click_zw_pricing_page__annual_plan__webinar__buy_now", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "a[href*=\"/opc/buy?plan=pro&period=annual&from=webinar500&usageType\"]"}}, {"id": "25197020530", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_click_zw_pricing_page__annual_plan__events_buy_now_c", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "a[aria-label=\"Buy NowZoom Events\"][data-link-term=\"Annual\"]"}}, {"id": "25197530264", "viewId": "21129942071", "name": null, "category": "other", "apiName": "20917322331_click_zp_pricing_page__monthly_plan__uscanada_unlimi", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "a[href*=\"/opc/buy?plan=pbx&period=monthly&from=pbx_ZVU&addon_period=monthly\"]"}}, {"id": "25203400083", "viewId": "20950640141", "name": null, "category": "other", "apiName": "20917322331_click_homepage__temporary_zoomtopia_banner__close_ba", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#zoomTopiaCloseButton"}}, {"id": "25243330972", "viewId": "25270510591", "name": null, "category": "other", "apiName": "20917322331_click_zoom_one_pricing_page_banner__ai_companion___1", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".enjoy-tip-dialog-pc .zm-dialog__body .text-description .close-btn"}}, {"id": "25247210525", "viewId": "25270510591", "name": null, "category": "other", "apiName": "20917322331_click_zoom_one_pricing_page_banner__ai_companion___2", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".enjoy-tip-dialog-pc .zm-dialog__body .video-container"}}, {"id": "25251231222", "viewId": "25270510591", "name": null, "category": "other", "apiName": "20917322331_click_zoom_one_pricing_page_banner__ai_companion___l", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "html body.fe_scheduler_promotion .fe_promotion a"}}, {"id": "25285150450", "viewId": "25270510591", "name": null, "category": "other", "apiName": "20917322331_click_zoom_one_pricing_page_banner__ai_companion___m", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "html body.fe_scheduler_promotion .fe_promotion a"}}, {"id": "25402460181", "viewId": null, "name": null, "category": "other", "apiName": "Zoom Translated Captions Monthly Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25402470508", "viewId": null, "name": null, "category": "other", "apiName": "Zoom Sessions 1000 Annual Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25406600530", "viewId": null, "name": null, "category": "other", "apiName": "Zoom Events 500 Annual Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25408600341", "viewId": null, "name": null, "category": "other", "apiName": "Zoom Sessions 100 Annual Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25412460285", "viewId": null, "name": null, "category": "other", "apiName": "Audio Conferencing Annual Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25413870374", "viewId": null, "name": null, "category": "other", "apiName": "Zoom Phone US Canada Monthly Metered Unlimited Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25418520373", "viewId": null, "name": null, "category": "other", "apiName": "Zoom Phone US Canada Annual Metered Unlimited Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25423490528", "viewId": null, "name": null, "category": "other", "apiName": "Webinar 10000 Monthly Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25424410436", "viewId": null, "name": null, "category": "other", "apiName": "Webinar 5000 Monthly Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25426070377", "viewId": null, "name": null, "category": "other", "apiName": "Webinar 1000 Annual Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25427600621", "viewId": null, "name": null, "category": "other", "apiName": "Annual Pro Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25428090497", "viewId": "25437370827", "name": null, "category": "other", "apiName": "20917322331_sign_up_clicks", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".nonMobileView .signup-new"}}, {"id": "25428340476", "viewId": null, "name": null, "category": "other", "apiName": "Webinar 3000 Monthly Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25429720391", "viewId": null, "name": null, "category": "other", "apiName": "Zoom Scheduler Annual Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25430280489", "viewId": null, "name": null, "category": "other", "apiName": "Zoom Phone Additional Phone Numbers Annual Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25431630501", "viewId": null, "name": null, "category": "other", "apiName": "Zoom Scheduler Monthly Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25432280399", "viewId": null, "name": null, "category": "other", "apiName": "Zoom Whiteboard Plus Monthly Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25435410447", "viewId": null, "name": null, "category": "other", "apiName": "Webinar 500 Monthly Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25437730411", "viewId": null, "name": null, "category": "other", "apiName": "Zoom Sessions 100 Monthly Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25438940747", "viewId": "25437370827", "name": null, "category": "other", "apiName": "20917322331_nav_cta_clicks", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#navbar-left .top-pricing-new"}}, {"id": "25439430580", "viewId": null, "name": null, "category": "other", "apiName": "Zoom Whiteboard Plus Annual Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25443210303", "viewId": null, "name": null, "category": "other", "apiName": "Large Meetings Annual Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25443340582", "viewId": "25437370827", "name": null, "category": "other", "apiName": "20917322331_hero_cta_clicks", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".swiper-slide-visible .blue-bg-link"}}, {"id": "25444500534", "viewId": null, "name": null, "category": "other", "apiName": "Zoom Whiteboard Annual Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25444770267", "viewId": null, "name": null, "category": "other", "apiName": "Zoom Whiteboard Monthly Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25444840203", "viewId": null, "name": null, "category": "other", "apiName": "Zoom Events 100 Monthly Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25450450162", "viewId": null, "name": null, "category": "other", "apiName": "Webinar 1000 Monthly Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25451990617", "viewId": null, "name": null, "category": "other", "apiName": "Zoom Events 3000 Annual Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25452430228", "viewId": null, "name": null, "category": "other", "apiName": "Zoom Sessions 3000 Annual Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25452820116", "viewId": null, "name": null, "category": "other", "apiName": "Zoom Sessions 500 Annual Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25454680052", "viewId": null, "name": null, "category": "other", "apiName": "Business Monthly Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25461640290", "viewId": null, "name": null, "category": "other", "apiName": "Monthly Pro Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25462220216", "viewId": null, "name": null, "category": "other", "apiName": "Zoom Translated Captions Annual Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25466310229", "viewId": null, "name": null, "category": "other", "apiName": "Zoom Phone Additional Phone Numbers Monthly Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25466370222", "viewId": null, "name": null, "category": "other", "apiName": "Zoom Events 1000 Annual Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25466640271", "viewId": null, "name": null, "category": "other", "apiName": "Large Meetings Monthly Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25467300310", "viewId": null, "name": null, "category": "other", "apiName": "Business Plus Annual Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25469970289", "viewId": null, "name": null, "category": "other", "apiName": "Zoom Phone Power Pack Monthly Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25471420354", "viewId": null, "name": null, "category": "other", "apiName": "Audio Conferencing Monthly Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25471580346", "viewId": null, "name": null, "category": "other", "apiName": "Cloud Storage 5TB Annual Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25472250208", "viewId": null, "name": null, "category": "other", "apiName": "Business Plus Monthly Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25474000259", "viewId": null, "name": null, "category": "other", "apiName": "Conference Room Connector Annual Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25475790150", "viewId": null, "name": null, "category": "other", "apiName": "Zoom Phone Power Pack Annual Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25479880062", "viewId": null, "name": null, "category": "other", "apiName": "Zoom Events 100 Annual Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25482200068", "viewId": null, "name": null, "category": "other", "apiName": "Cloud Storage 5TB Monthly Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25482200070", "viewId": null, "name": null, "category": "other", "apiName": "Conference Room Connector Monthly Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25483160049", "viewId": null, "name": null, "category": "other", "apiName": "Webinar 3000 Annual Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25483420124", "viewId": null, "name": null, "category": "other", "apiName": "Webinar 500 Annual Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25487810018", "viewId": null, "name": null, "category": "other", "apiName": "Business Annual Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25487820029", "viewId": "25437370827", "name": null, "category": "other", "apiName": "20917322331_contact_sales_clicks", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "a.hidden-xs"}}, {"id": "25495190210", "viewId": "25437370827", "name": null, "category": "other", "apiName": "20917322331_nav_resources_clicks", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#navbar-left #btnNewResources"}}, {"id": "25504080044", "viewId": "25437370827", "name": null, "category": "other", "apiName": "20917322331_nav_products_clicks", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#navbar-left #btnNewProducts"}}, {"id": "25507640113", "viewId": "25437370827", "name": null, "category": "other", "apiName": "20917322331_nav_solutions_clicks", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#navbar-left #btnNewSolutions"}}, {"id": "25664330326", "viewId": "20950640141", "name": null, "category": "other", "apiName": "20917322331_click_homepage__zoomtopia_2023_temp_link__new_wheel", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".wheel_ai_link"}}, {"id": "25748800987", "viewId": null, "name": null, "category": "other", "apiName": "Zoom Phone US Canada Annual Toll-free Phone Numbers Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25750720550", "viewId": null, "name": null, "category": "other", "apiName": "Large Meetings 1000 Participant Annual Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25760540282", "viewId": null, "name": null, "category": "other", "apiName": "Zoom Phone US Canada Annual Unlimited Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25764450439", "viewId": null, "name": null, "category": "other", "apiName": "Zoom Phone US Canada Monthly Unlimited Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25766260807", "viewId": null, "name": null, "category": "other", "apiName": "Large Meetings 1000 Participant Monthly Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25777341092", "viewId": null, "name": null, "category": "other", "apiName": "Zoom Phone US Canada Unlimited Power Pack Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25780130312", "viewId": null, "name": null, "category": "other", "apiName": "Zoom Phone US Canada Monthly Metered Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25782540505", "viewId": null, "name": null, "category": "other", "apiName": "Zoom Phone US Canada Unlimited Calling Add-On Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25785730394", "viewId": null, "name": null, "category": "other", "apiName": "Zoom Phone US Canada Annual Metered Plan Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25787710805", "viewId": null, "name": null, "category": "other", "apiName": "Zoom Phone US Canada Monthly Toll-free Phone Numbers Purchase", "eventType": "custom", "eventFilter": null}, {"id": "25808120816", "viewId": "20983450035", "name": null, "category": "other", "apiName": "20917322331_click_pricing_page__zoom_one__annual_savings_promo__", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".zm-switch input"}}, {"id": "25919380834", "viewId": null, "name": null, "category": "other", "apiName": "Zoom Phone US Canada Additional Phone Numbers Plan Purchase", "eventType": "custom", "eventFilter": null}], "dimensions": [{"id": "21554611103", "name": null, "apiName": "newPlanType", "segmentId": null}, {"id": "21568670454", "name": null, "apiName": "event", "segmentId": null}, {"id": "21576920185", "name": null, "apiName": "paidStartDate", "segmentId": null}, {"id": "21581790437", "name": null, "apiName": "accountType", "segmentId": null}, {"id": "21586380259", "name": null, "apiName": "trackingGuid", "segmentId": null}, {"id": "21590190222", "name": null, "apiName": "accountPlanType", "segmentId": null}, {"id": "21590380044", "name": null, "apiName": "pageLanguage", "segmentId": null}, {"id": "21592440303", "name": null, "apiName": "userStatus", "segmentId": null}, {"id": "21594330264", "name": null, "apiName": "billingCycle", "segmentId": null}, {"id": "21594620179", "name": null, "apiName": "accountChannel", "segmentId": null}, {"id": "21595180220", "name": null, "apiName": "visitorGuid", "segmentId": null}, {"id": "21596790107", "name": null, "apiName": "fullUrl", "segmentId": null}, {"id": "21597380428", "name": null, "apiName": "discountType", "segmentId": null}, {"id": "21600550186", "name": null, "apiName": "licenseCount", "segmentId": null}, {"id": "21602390008", "name": null, "apiName": "rateMrr", "segmentId": null}, {"id": "21604530081", "name": null, "apiName": "autoRenew", "segmentId": null}, {"id": "21607080340", "name": null, "apiName": "billingCountry", "segmentId": null}, {"id": "21610950118", "name": null, "apiName": "zoom_id", "segmentId": null}, {"id": "21613600286", "name": null, "apiName": "expirationDate", "segmentId": null}, {"id": "21617540242", "name": null, "apiName": "userRole", "segmentId": null}, {"id": "21617670304", "name": null, "apiName": "chargeType", "segmentId": null}, {"id": "21621160347", "name": null, "apiName": "pageName", "segmentId": null}, {"id": "21621230397", "name": null, "apiName": "userCountry", "segmentId": null}, {"id": "21623040205", "name": null, "apiName": "productUserType", "segmentId": null}, {"id": "21625040246", "name": null, "apiName": "addOns", "segmentId": null}, {"id": "21629070144", "name": null, "apiName": "domainType", "segmentId": null}, {"id": "21837582401", "name": null, "apiName": "category", "segmentId": null}, {"id": "21846890202", "name": null, "apiName": "paymentType", "segmentId": null}, {"id": "21858111540", "name": null, "apiName": "productId", "segmentId": null}, {"id": "21860181196", "name": null, "apiName": "brand", "segmentId": null}, {"id": "23627540391", "name": null, "apiName": "Click_on_Business_Plus_Phone_Pricing", "segmentId": null}, {"id": "23908690757", "name": null, "apiName": "test_API", "segmentId": null}, {"id": "24401560291", "name": null, "apiName": "Transaction_CVR_of_Phone_Plans", "segmentId": null}, {"id": "24503270210", "name": null, "apiName": "Offer_conversions", "segmentId": null}, {"id": "24509580885", "name": null, "apiName": "Conversion_for_all_users", "segmentId": null}, {"id": "24955220717", "name": null, "apiName": "Click_on_pricing_events_page_buynow_cta", "segmentId": null}, {"id": "25675700225", "name": null, "apiName": "product_sku", "segmentId": null}], "projectJS": function(){//Fix for zoom_user_id Begin
window['optimizely'] = window['optimizely'] || [];
window["optimizely"].push({
  "type": "tags",
  "tags": {
    "zm_usr_id_sha256": window.zmGlobalMrktKey || ""
  }
});
//Fix for zoom_user_id End

// mutation observer - waits for DOM ready
(function(win){var listeners=[],doc=win.document,MutationObserver=win.MutationObserver||win.WebKitMutationObserver,observer;function ready(selector,fn){listeners.push({selector:selector,fn:fn});if(!observer){observer=new MutationObserver(check);observer.observe(doc.documentElement,{childList:true,subtree:true})}check()}function check(){for(var i=0,len=listeners.length,listener,elements;i<len;i++){listener=listeners[i];elements=doc.querySelectorAll(listener.selector);for(var j=0,jLen=elements.length,element;j<jLen;j++){element=elements[j];if(!element.ready){element.ready=true;listener.fn.call(element,element)}}}}win.ready=ready})(this);

(function(){window.ZmOptlyUtil={isInPath:function isInPath(a){var b=window.location.pathname;return a.some(function(a){if("string"==typeof a)return 0===b.indexOf(""+a);var c=b.match(a);return c&&0===c.index})},isInCountry:function isInCountry(a,b){var c=a.billingCountry||a.countries;if(c&&(-1<b.indexOf(c.billTo)||-1<b.indexOf(c.soldTo)))return!0;var d=a.currentCountry;return d&&-1<b.indexOf(d)},getCookie:function getCookie(a){var b=document.cookie.match(a+"=([^;]*)");return b?b[1]:void 0},setCookie:function setCookie(a,b,c,d,e,f){c=null===c?"":"domain="+c+";",d=d||0,e=e||0,f=f||0;var g=new Date;g.setDate(g.getDate()+d),g.setMinutes(g.getMinutes()+e),g.setSeconds(g.getSeconds()+f);var h=escape(b)+(null==d?"":"; expires="+g.toUTCString());document.cookie=a+"="+h+";"+c+"path=/"},isInHoldback:function isInHoldback(a,b){var c=window.optimizely,d=c.get("state").getCampaignStates()["20917322331"===c.get("data").projectId?a:b];return d&&d.isActive&&d.isInCampaignHoldback},patchSsPrefix:"optlyHf_",patchList:[],createPatch:function createPatch(a,b){var c=!!!sessionStorage.getItem(this.patchSsPrefix+a);return this.patchList.push({id:a,name:b,enabled:c}),c}}})();

(function(){var a=document.documentElement.getAttribute("lang");a&&window.ZmOptlyUtil.setCookie("_zm_optly_lang",a,null,0,0,10)})();

// request from Tyler - ZTSPZ-57 - 12/09/2022
ready('.zcc-container .plans-container .col-md-6:nth-child(1)',function(element){
	document.querySelector('.zcc-container .plans-container .col-md-6:nth-child(1) #us-ca-phone-num').innerHTML = "Zoom Virtual Service Phone Number";
	var vsp = document.querySelector('.zcc-container .plans-container .col-md-6:nth-child(1) .list-container li:nth-child(2)');
	if(vsp.outerHTML.includes('Available')){
		document.querySelector('.zcc-container .plans-container .col-md-6:nth-child(1) .list-container li:nth-child(2)').innerHTML = "<i class=\"zm-icon-ok\"></i>Available in US, Canada, UK, Ireland, Australia, and New Zealand. Low incoming call rates. Limited outbound capabilities\n";
	}
});
// toll free number change 
ready('.zcc-container .plans-container .col-md-6:nth-child(2)',function(element){
	document.querySelector('.zcc-container .plans-container .col-md-6:nth-child(2) #us-ca-phone-num').innerHTML = "Zoom Toll-Free Phone Number";
	var tfn = document.querySelector('.zcc-container .plans-container .col-md-6:nth-child(2) .list-container li:nth-child(2)');
	if(tfn.outerHTML.includes('Available')){
		document.querySelector('.zcc-container .plans-container .col-md-6:nth-child(2) .list-container li:nth-child(2)').innerHTML = "<i class=\"zm-icon-ok\"></i>Available in US, Canada, UK, Ireland, Australia, and New Zealand. Attractive incoming call rates\n";
	}
});


// added 08/09/2022 - FunnelEnvy code to record event metric in Optimizely
//for checkout flow https://zoom.us/buy/signup 
(function() {
    try {
        if (window.location.href.indexOf('https://zoom.us/buy/signup') > -1) {
            const send = XMLHttpRequest.prototype.send;
            XMLHttpRequest.prototype.send = function() {
                this.addEventListener('load', function() {
                    if (this.responseURL.indexOf('/buy/signup_checkpass') > -1) {
                        window['optimizely'] = window['optimizely'] || [];
                        window['optimizely'].push({
                            type: "event",
                            eventName: "Account SignUp - Buy Subscription -  flow1",
                            tags: {
                                revenue: 0, // Optional in cents as integer (500 == $5.00)
                                value: 0.00 // Optional as float
                            }
                        });
                        // Fire Optimzely Goal
                    }
                });
                return send.apply(this, arguments);
            };
        }
    } catch (err) {
        console && console.log('#Error ==>' + e.message);
    }
})();


// ----- START ZTSPZ-117 - Main core code (shared between two campaigns)
(function () {
  var paths = [
    /^\/billing(\/plan)?\/?$/
  ];

  if (!window['ZmOptlyUtil'].isInPath(paths)) {
    return;
  }

  var enableLog = false;
  var arlOfferDialogObserver = null;
  var postCancelDialogObserver = null;
  var isInit = false;

  window._basicPriceSaveOfferTest = function (options) {
    options = options || {};
    var ZmOptlyUtil = window['ZmOptlyUtil'];
    var CAMPAIGN_KEY = '_zm_optly_opc-bp-so';
    var CAMPAIGN_VARIATION_KEY = '_zm_optly_opc-bp-so-var';
    var variation = options.variation;
    var storedAppState = sessionStorage.getItem(CAMPAIGN_KEY);

    if (!variation || !storedAppState) {
      return;
    }

    var appState = storedAppState.split('|');
    var isArl = appState[0] === 'true';
    var isCanceledState = appState[1] === 'true';
    var currentFlow = null;

    enableLog && console.log('[Optimizely B+] Start: variation=', variation, '; isArl=', isArl, '; isCanceledState=', isCanceledState);

    sessionStorage.setItem(CAMPAIGN_VARIATION_KEY, variation);

    var translations = {
      'en-US': {
        'arl.preCancel.tile.heading': 'Stay with us and try our NEW Basic Plus plan',
        'arl.preCancel.tile.desc': 'Extend four meetings up to 80 minutes with our new Zoom One Basic Plus plan, for {price} per month!',
        'arl.preCancel.tile.link': 'Switch Plan',

        'all.postCancel.tile.heading': 'Come back and try something new',
        'all.postCancel.tile.desc': 'We\'re sad to see you go. Try our new {price} Basic Plus Plan when you join us again.',
        'all.postCancel.tile.link': 'Get Offer',

        'all.offer.heading': 'Switch to Basic Plus for {price}',
        'all.offer.desc': 'We\'re sorry you haven\'t found the right plan yet. Switch to our new Zoom One Basic Plus plan for only {price} per month. Extend four meetings for up to 80 minutes, record meetings to the cloud and more!',
        'all.offer.secondaryBtn': 'Not Now',
        'all.offer.primaryBtn': 'Switch Plan'
      },
      'es-ES': {
        'arl.preCancel.tile.heading': 'Permanezca con nosotros y pruebe nuestro NUEVO plan Básico Plus',
        'arl.preCancel.tile.desc': 'Extienda cuatro reuniones para que duren hasta 80 minutos con nuestro nuevo plan Básico Plus de Zoom One, por {price} al mes.',
        'arl.preCancel.tile.link': 'Cambiar de plan',

        'all.postCancel.tile.heading': 'Regrese y pruebe algo nuevo.',
        'all.postCancel.tile.desc': 'Nos apena que se vaya. Pruebe nuestro nuevo Plan Básico Plus de {price} cuando vuelva a suscribirse.',
        'all.postCancel.tile.link': 'Conseguir oferta',

        'all.offer.heading': 'Cambiar a Básico Plus por {price}',
        'all.offer.desc': 'Lamentamos que aún no encuentre el plan adecuado. Cámbiese a nuestro nuevo plan Básico Plus de Zoom One por solo {price} al mes. Extienda cuatro reuniones para que duren hasta 80 minutos, grabe en la nube y mucho más.',
        'all.offer.secondaryBtn': 'Ahora no',
        'all.offer.primaryBtn': 'Cambiar de plan'
      },
      'de-DE': {
        'arl.preCancel.tile.heading': 'Bleiben Sie uns treu und testen Sie unser NEUES Basic Plus-Abo',
        'arl.preCancel.tile.desc': 'Halten Sie vier Meetings von bis zu 80 Minuten ab mit unserem neuen Abo Zoom One Basic Plus für {price} im Monat.',
        'arl.preCancel.tile.link': 'Abo wechseln',

        'all.postCancel.tile.heading': 'Kehren Sie zurück und probieren Sie etwas Neues',
        'all.postCancel.tile.desc': 'Schade, dass Sie uns verlassen. Testen Sie unser neues Basic Plus-Abo für {price}, wenn Sie es sich anders überlegen.',
        'all.postCancel.tile.link': 'Angebot sichern',

        'all.offer.heading': 'Zu Basic Plus für {price} wechseln',
        'all.offer.desc': 'Es tut uns leid, dass Sie noch kein passendes Abonnement gefunden haben. Wechseln Sie zu unserem neuen Abo Zoom One Basic Plus für {price} im Monat. Sie können vier Meetings von bis zu 80 Minuten abhalten, Meetings in der Cloud aufzeichnen und mehr.',
        'all.offer.secondaryBtn': 'Nicht jetzt',
        'all.offer.primaryBtn': 'Abo wechseln'
      },
      'fr-FR': {
        'arl.preCancel.tile.heading': 'Restez avec nous et essayez notre NOUVEAU forfait Basique Plus',
        'arl.preCancel.tile.desc': 'Avec notre nouveau forfait Zoom One Basique Plus à {price} par mois, bénéficiez d’une durée maximale de 80 minutes pour quatre de vos réunions.',
        'arl.preCancel.tile.link': 'Changer de forfait',

        'all.postCancel.tile.heading': 'Revenez sur votre décision et essayez quelque chose de nouveau',
        'all.postCancel.tile.desc': 'Nous sommes navrés dʼapprendre que vous nous quittez. Essayez notre nouveau forfait Basique Plus à {price} lors de votre réabonnement.',
        'all.postCancel.tile.link': 'Je profite de l’offre',

        'all.offer.heading': 'Passez à Basique Plus pour {price}',
        'all.offer.desc': 'Nous sommes navrés d’apprendre que vous n’avez pas encore trouvé le forfait qui vous convient. Passez à notre nouveau forfait Zoom One Basique Plus pour seulement {price} par mois. Prolongez quatre de vos réunions jusqu’à 80 minutes, enregistrez des réunions dans le cloud et bien plus encore !',
        'all.offer.secondaryBtn': 'Pas maintenant',
        'all.offer.primaryBtn': 'Changer de forfait'
      },
      'jp-JP': {
        'arl.preCancel.tile.heading': '新しいベーシック プラスプランのご案内',
        'arl.preCancel.tile.desc': '新しい Zoom One ベーシック プラスプランは、月額 {price}で 4 つのミーティングを最長 80 分まで延長できます！',
        'arl.preCancel.tile.link': 'プランを切り替える',

        'all.postCancel.tile.heading': 'またのお越しをお待ちしております',
        'all.postCancel.tile.desc': 'この度はご満足いただけなかったとのこと、申し訳ございませんでした。 次回はぜひ、{price}の新しいベーシックプラス プランをご検討ください。',
        'all.postCancel.tile.link': '特典を受け取る',

        'all.offer.heading': '{price}のベーシック プラスに切り替える',
        'all.offer.desc': 'ご要望に沿ったプランをご用意できず、申し訳ございませんでした。 新しい Zoom One ベーシックプラス プランへは、月額わずか {price}で切り替え可能です。 4 つのミーティングを最長 80 分まで延長することや、ミーティングをクラウドにレコーディングすることができます！',
        'all.offer.secondaryBtn': '今ではない',
        'all.offer.primaryBtn': 'プランを切り替える'
      },
      'pt-PT': {
        'arl.preCancel.tile.heading': 'Fique conosco e experimento nosso NOVO plano Básico Plus',
        'arl.preCancel.tile.desc': 'Amplie a duração de quatro reuniões para até 80 minutos com nosso novo Plano Zoom One Básico Plus, por {price} ao mês!',
        'arl.preCancel.tile.link': 'Trocar de plano',

        'all.postCancel.tile.heading': 'Volte e experimente algo novo',
        'all.postCancel.tile.desc': 'Estamos tristes que você vai embora. Experimente nosso novo plano Básico Plus, por {price}, ao voltar a ser nosso cliente.',
        'all.postCancel.tile.link': 'Aproveitar a oferta',

        'all.offer.heading': 'Troque para o Básico Plus por {price}',
        'all.offer.desc': 'Pena que você ainda não encontrou o plano certo para você. Troque para nosso novo plano Zoom One Básico Plus, por apenas {price} por mês. Amplie a duração de quatro reuniões para até 80 minutos, grave reuniões na nuvem e muito mais!',
        'all.offer.secondaryBtn': 'Agora Não',
        'all.offer.primaryBtn': 'Trocar de plano'
      },
      'ru-RU': {
        'arl.preCancel.tile.heading': 'Оставайтесь с нами и попробуйте наш НОВЫЙ тарифный план Базовый Плюс',
        'arl.preCancel.tile.desc': 'Продлите четыре конференции до 80 минут с нашим новым тарифным планом Zoom One Базовый Плюс стоимостью всего {price} в месяц!',
        'arl.preCancel.tile.link': 'Переключить планы',

        'all.postCancel.tile.heading': 'Возвращайтесь и попробуйте кое-что новое',
        'all.postCancel.tile.desc': 'Нам очень жаль, что вы уходите. Присоединяйтесь к нам снова и попробуйте наш новый тарифный план Базовый Плюс стоимостью {price}.',
        'all.postCancel.tile.link': 'Воспользоваться предложением',

        'all.offer.heading': 'Переключиться на план Базовый Плюс стоимостью {price}.',
        'all.offer.desc': 'Очень жаль, что вы пока не нашли подходящий тарифный план. Переключитесь на наш новый тарифный план Zoom One Базовый Плюс стоимостью всего {price} в месяц. Продлите четыре конференции до 80 минут, записывайте конференции в облако и выполняйте много других действий!',
        'all.offer.secondaryBtn': 'Не сейчас',
        'all.offer.primaryBtn': 'Переключить планы'
      },
      'zh-CN': {
        'arl.preCancel.tile.heading': '继续订阅并尝试我们新推出的基础加强版套餐',
        'arl.preCancel.tile.desc': '订阅我们新推出的 Zoom One 基础加强版套餐可将四场会议延长至 80 分钟，每月费用为 {price}！',
        'arl.preCancel.tile.link': '更换套餐',

        'all.postCancel.tile.heading': '再次订阅，尝试新推出的套餐',
        'all.postCancel.tile.desc': '我们很遗憾看到您退订。 如果您再次订阅，请尝试我们新推出的基础加强版套餐，费用为 {price}。',
        'all.postCancel.tile.link': '获得优惠',

        'all.offer.heading': '更换为基础加强版，费用为 {price}.',
        'all.offer.desc': '很遗憾您还没有找到合适的套餐。 更换为我们新推出的 Zoom One 基础加强版套餐，每月仅需 {price}。 可将四场会议延长至 80 分钟，可将会议录制到云端等！',
        'all.offer.secondaryBtn': '以后再说',
        'all.offer.primaryBtn': '更换套餐'
      },
      'zh-TW': {
        'arl.preCancel.tile.heading': '繼續訂閱，並試用全新的基礎加強版計畫',
        'arl.preCancel.tile.desc': '使用全新的 Zoom One 基礎加強版計畫，最多可將四個會議延長至 80 分鐘，價格為每月 {price}！',
        'arl.preCancel.tile.link': '切換計畫',

        'all.postCancel.tile.heading': '歡迎回來，嘗試點新事物吧',
        'all.postCancel.tile.desc': '我們很難過看到您要離開。 請在重新加入我們時，試用我們全新的基礎加強版計畫，價格為 {price}。',
        'all.postCancel.tile.link': '獲得優惠',

        'all.offer.heading': '切換為基礎加強版，價格為 {price}.',
        'all.offer.desc': '您仍找不到適合的計畫，我們感到抱歉。 每月僅需 {price}，即可切換為全新的 Zoom One 基礎加強版計畫。 最多可將四個會議延長至 80 分鐘，將更多會議錄製到雲端等更多功能！',
        'all.offer.secondaryBtn': '現在不要',
        'all.offer.primaryBtn': '切換計畫'
      },
      'it-IT': {
        'arl.preCancel.tile.heading': 'Resta con noi e prova il nostro NUOVO piano Basic Plus',
        'arl.preCancel.tile.desc': 'Grazie al nostro piano Zoom One Basic Plus, estendi quattro riunioni fino a 80 minuti, a {price} al mese.',
        'arl.preCancel.tile.link': 'Cambia piano',

        'all.postCancel.tile.heading': 'Torna con noi e prova un nuovo piano',
        'all.postCancel.tile.desc': 'Ci dispiace che tu te ne vada. Se decidi di tornare con noi, puoi provare il nostro piano Basic Plus a {price}.',
        'all.postCancel.tile.link': 'Ricevi l\'offerta',

        'all.offer.heading': 'Passa a Basic Plus per {price}.',
        'all.offer.desc': 'Ci dispiace che tu non abbia ancora trovato il piano adatto. Passa al nostro nuovo piano Zoom One Basic Plus per soli {price} al mese. Registra le riunioni nel cloud, estendine quattro fino a 80 minuti e altro ancora.',
        'all.offer.secondaryBtn': 'Non ora',
        'all.offer.primaryBtn': 'Cambia piano'
      },
      'vi-VN': {
        'arl.preCancel.tile.heading': 'Tiếp tục đồng hành cùng chúng tôi và trải nghiệm thử gói Cơ bản Nâng cao MỚI',
        'arl.preCancel.tile.desc': 'Kéo dài thời lượng 4 cuộc họp đến 80 phút khi dùng gói Zoom One Cơ bản Nâng cao mới của chúng tôi với giá {price} mỗi tháng!',
        'arl.preCancel.tile.link': 'Đổi gói dịch vụ',

        'all.postCancel.tile.heading': 'Quay lại và trải nghiệm thử tính năng mới',
        'all.postCancel.tile.desc': 'Chúng tôi rất tiếc khi thấy bạn rời đi. Trải nghiệm thử gói Cơ bản Nâng cao mới với giá {price} khi bạn quay lại với chúng tôi.',
        'all.postCancel.tile.link': 'Nhận ưu đãi',

        'all.offer.heading': 'Đổi sang gói Cơ bản Nâng cao với giá {price}.',
        'all.offer.desc': 'Chúng tôi rất tiếc khi bạn chưa tìm thấy gói dịch vụ phù hợp. Đổi sang gói Zoom One Cơ bản Nâng cao mới của chúng tôi với giá chỉ {price} mỗi tháng. Kéo dài thời lượng 4 cuộc họp đến 80 phút, ghi lại cuộc họp lên đám mây và nhiều tính năng khác!',
        'all.offer.secondaryBtn': 'Để sau',
        'all.offer.primaryBtn': 'Đổi gói dịch vụ'
      },
      'ko-KO': {
        'arl.preCancel.tile.heading': '구독을 유지하고 새로운 기본 플러스 요금제를 이용해 보세요',
        'arl.preCancel.tile.desc': '새로운 Zoom One 기본 플러스 요금제로 월 {price} 에 4개의 미팅을 최대 80분까지 연장해 보세요!',
        'arl.preCancel.tile.link': '요금제 바꾸기',

        'all.postCancel.tile.heading': '다시 구독을 시작하고 새로운 요금제를 이용해 보세요',
        'all.postCancel.tile.desc': '구독을 취소하신다니 정말 아쉽네요. 다시 구독을 시작하고 {price}의 새로운 기본 플러스 요금제를 이용해 보세요.',
        'all.postCancel.tile.link': '혜택 받기',

        'all.offer.heading': '{price}의 기본 플러스 요금제로 바꾸기',
        'all.offer.desc': '아직 적합한 요금제를 찾지 못하셨다니 유감이네요. 단돈 월 {price}로 새로운 Zoom One 기본 플러스 요금제로 바꿔 보세요 4개의 미팅을 최대 80분까지 연장하고 미팅을 클라우드에 녹화하는 등 다양한 기능을 이용해 보세요!',
        'all.offer.secondaryBtn': '지금은 괜찮습니다',
        'all.offer.primaryBtn': '요금제 바꾸기'
      },
      'pl-PL': {
        'arl.preCancel.tile.heading': 'Zostań z nami i wypróbuj nasz NOWY plan Podstawowy Plus',
        'arl.preCancel.tile.desc': 'Wydłuż cztery spotkania do aż 80 minut z naszym nowym planem Zoom One Podstawowy Plus za {price} na miesiąc!',
        'arl.preCancel.tile.link': 'Zmień plan',

        'all.postCancel.tile.heading': 'Wróć i wypróbuj coś nowego',
        'all.postCancel.tile.desc': 'Smutno nam, że odchodzisz. Wypróbuj nasz nowy plan Podstawowy Plus za {price}, gdy ponownie do nas dołączysz.',
        'all.postCancel.tile.link': 'Skorzystaj z oferty',

        'all.offer.heading': 'Przejdź na plan Podstawowy Plus za {price}.',
        'all.offer.desc': 'Przykro nam, że jeszcze nie udało Ci się znaleźć odpowiedniego planu. Przejdź na nasz nowy plan Zoom One Podstawowy Plus za {price} na miesiąc. Wydłuż cztery spotkania do aż 80 minut, nagrywaj spotkania w chmurze i wiele więcej!',
        'all.offer.secondaryBtn': 'Nie teraz',
        'all.offer.primaryBtn': 'Zmień plan'
      },
      'tr-TR': {
        'arl.preCancel.tile.heading': 'Bizimle kalın ve YENİ Temel Plus planımızı deneyin',
        'arl.preCancel.tile.desc': 'Yeni Zoom One Temel Plus planımızla aylık {price} karşılığında dört toplantıyı 80 dakikaya kadar uzatın!',
        'arl.preCancel.tile.link': 'Plan Değiştirin',

        'all.postCancel.tile.heading': 'Geri dönün ve yeni bir şey deneyin',
        'all.postCancel.tile.desc': 'Ayrıldığınızı görmek bizi üzüyor. Bize tekrar katıldığınızda yeni Temel Plus Planımızı {price} karşılığında deneyin.',
        'all.postCancel.tile.link': 'Teklif Al',

        'all.offer.heading': '{price} karşılığında Temel Plus planına geçin',
        'all.offer.desc': 'Henüz uygun planı bulamadığınız için üzgünüz. Aylık sadece {price} karşılığında yeni Zoom One Temel Plus planımıza geçin. Dört toplantıyı 80 dakikaya kadar uzatın, toplantıları buluta kaydedin ve daha fazlasını elde edin!',
        'all.offer.secondaryBtn': 'Şimdi Değil',
        'all.offer.primaryBtn': 'Plan Değiştirin'
      },
      'id-ID': {
        'arl.preCancel.tile.heading': 'Tetap bersama kami dan coba paket Dasar Plus BARU',
        'arl.preCancel.tile.desc': 'Perpanjang durasi empat rapat hingga 80 menit dengan paket Zoom One Dasar Plus baru dengan harga {price} per bulan!',
        'arl.preCancel.tile.link': 'Beralih Paket',

        'all.postCancel.tile.heading': 'Kembalilah dan coba hal baru',
        'all.postCancel.tile.desc': 'Kami sedih melihat Anda pergi. Coba Paket Dasar Plus baru dengan harga {price} jika Anda bergabung dengan kami lagi.',
        'all.postCancel.tile.link': 'Dapatkan Penawaran',

        'all.offer.heading': 'Beralih ke Dasar Plus dengan harga {price}.',
        'all.offer.desc': 'Maaf, Anda belum menemukan paket yang tepat. Beralih ke paket Zoom One Dasar Plus baru cukup dengan {price} per bulan. Perpanjang durasi empat rapat hingga 80 menit, rekam rapat ke cloud dan banyak lagi!',
        'all.offer.secondaryBtn': 'Tidak Sekarang',
        'all.offer.primaryBtn': 'Beralih Paket'
      },
      'nl-NL': {
        'arl.preCancel.tile.heading': 'Blijf bij ons en probeer ons NIEUWE Basis Plus-abonnement',
        'arl.preCancel.tile.desc': 'Verleng vier vergaderingen tot 80 minuten met ons nieuwe Zoom One Basis Plus-abonnement, voor {price} per maand!',
        'arl.preCancel.tile.link': 'Veranderen van abonnement',

        'all.postCancel.tile.heading': 'Kom terug en probeer iets nieuws',
        'all.postCancel.tile.desc': 'We vinden het jammer dat je vertrekt. Probeer ons nieuwe Basis Plus-abonnement van {price} wanneer je terugkomt.',
        'all.postCancel.tile.link': 'Naar de aanbieding',

        'all.offer.heading': 'Overstappen naar Basis Plus voor {price}.',
        'all.offer.desc': 'We vinden het jammer dat je nog geen geschikt abonnement hebt gevonden. Stap over naar ons nieuwe Zoom One Basis Plus-abonnement voor slechts {price} per maand. Verleng vier vergaderingen tot 80 minuten, neem vergaderingen op naar de cloud en meer!',
        'all.offer.secondaryBtn': 'Niet nu',
        'all.offer.primaryBtn': 'Veranderen van abonnement'
      }
    };

    var priceMatrix = {
      'USD': ['$6.99', '$9.99'],
      'EUR': ['€6.49', '€9.29'],
      'GBP': ['£5.29', '£7.49'],
      'AUD': ['A$9.99', 'A$13.99'],
      'JPY': ['￥899', '￥1,249'],
      'CAD': ['CAD9.29', 'CAD13.29'],
      'NZD': ['NZ$10.99', 'NZ$15.49'],
      'SGD': ['S$9.99', 'S$13.99'],
      'KRW': ['₩9,779', '₩13,999'],
      'SEK': ['kr72.99', 'kr103.99'],
      'PLN': ['zł32.99', 'zł46.99'],
      'NOK': ['kr73.99', 'kr104.99'],
      'DKK': ['kr51.99', 'kr73.99']
    };

    var zmLang = ZmOptlyUtil.getCookie('_zm_lang') || 'en-US';
    var zmCurrency = ZmOptlyUtil.getCookie('_zm_currency') || 'USD';

    var $t = function (key) {
      var text = (translations[zmLang] || translations['en-US'])[key] || key;
      var currArr = priceMatrix[zmCurrency] || priceMatrix['USD'];
      var price = variation === 'B' ? currArr[0] : currArr[1];
      text = text.replace('{price}', price);
      return text;
    };

    var billingConfig = {
      'selector': '.zr-main-container',

      'preCancelDiscountTileTextKey': 'retentions.tiles.title.offer',
      'preCancelTilesSelector': '.bp-retentions__pre-cancel .bp-ui-card',
      'preCancelTileTitleSelector': '.title',
      'preCancelTileTitleSelector.img': '.title svg',
      'preCancelTileTitleSelector.title': '.title span',
      'preCancelTileDescSelector': '.desc',
      'preCancelTileLinkSelector': '.link',

      'postCancelDiscountTileTextKey': 'retentions.tiles.title.offer_reactivate',
      'postCancelTileSelector': '.bp-retentions__cancel-confirm .bp-ui-card',
      'postCancelTileTitleSelector': '.title',
      'postCancelTileTitleSelector.img': '.title svg',
      'postCancelTileTitleSelector.title': '.title span',
      'postCancelTileDescSelector': '.desc',
      'postCancelTileLinkSelector': '.link',

      'offerDialogSelector': '.bp-cancel-coupon-dialog'
    };

    var appElm = document.querySelector(billingConfig.selector);
    if (!appElm.__vue__) {
      return;
    }

    if (isArl) {
      runPreCancelArlFlow();
    } else if (!isArl && (variation === 'B' || variation === 'C')) {
      updateOfferDialog('preCancel');
    }

    if (postCancelDialogObserver) {
      postCancelDialogObserver.disconnect();
    }
    postCancelDialogObserver = new MutationObserver(function () {
      if (!!document.querySelector('.bp-post-cancel-success-dialog .bp-ui-card')) {
        // this.disconnect();
        runPostCancelFlow();
      }
    });
    postCancelDialogObserver.observe(document, {subtree: true, childList: true});

    isInit = true;

    function runPreCancelArlFlow() {
      var discountTileText = appElm.__vue__.$t(billingConfig.preCancelDiscountTileTextKey);
      var tileElms = Array.from(document.querySelectorAll(billingConfig.preCancelTilesSelector));
      var discountTile = tileElms.find(function (tileElm) {
        var titleElm = tileElm.querySelector(billingConfig.preCancelTileTitleSelector);
        return titleElm && titleElm.textContent === discountTileText;
      });

      if (!discountTile) {
        return;
      }

      updateLinkIdOnTiles(tileElms, true);

      if (variation !== 'B' && variation !== 'C') {
        return;
      }

      updatePreCancelOfferTile();

      function updatePreCancelOfferTile() {
        // update pre-cancel tile
        discountTile.querySelector(billingConfig['preCancelTileTitleSelector.title']).textContent = $t('arl.preCancel.tile.heading');
        discountTile.querySelector(billingConfig['preCancelTileDescSelector']).textContent = $t('arl.preCancel.tile.desc');
        discountTile.querySelector(billingConfig['preCancelTileLinkSelector']).textContent = $t('arl.preCancel.tile.link');

        var newImgElm = document.createElement('img');
        newImgElm.src = '//cdn.optimizely.com/img/20673560014/ea30183c84d2481abbeed17babb45eda.svgz';
        newImgElm.style.width = '42px';
        newImgElm.style.height = '42px';
        newImgElm.style.margin = '0 10px 10px 0';
        discountTile.querySelector(billingConfig['preCancelTileTitleSelector.img']).replaceWith(newImgElm);

        discountTile.querySelector(billingConfig['preCancelTileLinkSelector']).addEventListener('click', function () {
          observeOfferDialog('preCancel');
        });
      }
    }

    function runPostCancelFlow() {
      var discountTileText = appElm.__vue__.$t(billingConfig.postCancelDiscountTileTextKey);
      var tileElms = Array.from(document.querySelectorAll(billingConfig.postCancelTileSelector));
      var discountTile = tileElms.find(function (tileElm) {
        var titleElm = tileElm.querySelector(billingConfig.preCancelTileTitleSelector);
        return titleElm && titleElm.textContent === discountTileText;
      });

      // discount tile doesn't exist (could've been removed the first time)
      if (!discountTile) {
        return;
      }

      updateLinkIdOnTiles(tileElms, false);

      if (variation !== 'B' && variation !== 'C') {
        return;
      }

      updatePostCancelOfferTile();

      function updatePostCancelOfferTile() {
        // update pre-cancel tile
        discountTile.querySelector(billingConfig['postCancelTileTitleSelector.title']).textContent = $t('all.postCancel.tile.heading');
        discountTile.querySelector(billingConfig['postCancelTileDescSelector']).textContent = $t('all.postCancel.tile.desc');
        discountTile.querySelector(billingConfig['postCancelTileLinkSelector']).textContent = $t('all.postCancel.tile.link');

        var newImgElm = document.createElement('img');
        newImgElm.src = '//cdn.optimizely.com/img/20673560014/ea30183c84d2481abbeed17babb45eda.svgz';
        newImgElm.style.width = '42px';
        newImgElm.style.height = '42px';
        newImgElm.style.margin = '10px 10px 20px 0';

        discountTile.querySelector(billingConfig['postCancelTileTitleSelector.img']).replaceWith(newImgElm);

        discountTile.querySelector(billingConfig['postCancelTileLinkSelector']).addEventListener('click', function () {
          observeOfferDialog('postCancel');
        });
      }
    }

    function updateLinkIdOnTiles(tileElms, preCancel) {
      var tileTitleKeys = ['offer', 'offer_annual', 'offer_monthly', 'offer_reactivate', 'switch_term', 'pause', 'social', 'survey', 'resubscribe'];
      var tileTitleSelector = preCancel ? billingConfig.preCancelTileTitleSelector : billingConfig.postCancelTileTitleSelector;
      var tileLinkSelector = preCancel ? billingConfig.preCancelTileLinkSelector : billingConfig.postCancelTileLinkSelector;
      var linkIdPrefix = preCancel ? 'btn_precancel_' : 'btn_postcancel_';

      tileElms.forEach(function (tileElm) {
        var titleElm = tileElm.querySelector(tileTitleSelector);
        var tileId = tileTitleKeys.find(function (key) {
          var tileTitleText = appElm.__vue__.$t('retentions.tiles.title.' + key);
          return titleElm && titleElm.textContent === tileTitleText;
        });
        if (tileId) {
          tileElm.querySelector(tileLinkSelector).id = linkIdPrefix + tileId;
        }
      });
    }

    function observeOfferDialog(flow) {
      if (arlOfferDialogObserver) {
        arlOfferDialogObserver.disconnect();
      }
      arlOfferDialogObserver = new MutationObserver(function () {
        var cancelCouponDialogElm = document.querySelector(billingConfig.offerDialogSelector);
        if (cancelCouponDialogElm) {
          this.disconnect();
          updateOfferDialog(flow);
        }
      });
      arlOfferDialogObserver.observe(document, {subtree: true, childList: true});
    }

    function updateOfferDialog(flow) {
      currentFlow = flow;
      var dialogElm = document.querySelector(billingConfig.offerDialogSelector);

      if (dialogElm.getAttribute('data-bp-updated') === 'true') {
        return;
      }

      dialogElm.style.setProperty('width', '680px', 'important');

      var wrapperElm = dialogElm.querySelector('.cancel-coupon-template-wrapper');
      wrapperElm.style.minHeight = '375px';
      wrapperElm.style.height = '375px';

      var contentElm = dialogElm.querySelector('.cancel-coupon-template-content');
      contentElm.style.height = '100%';

      var betaElm = document.createElement('span');
      betaElm.textContent = 'BETA';
      betaElm.style.display = 'inline-block';
      betaElm.style.color = 'white';
      betaElm.style.borderRadius = '100px';
      betaElm.style.background = 'linear-gradient(45deg, #493AB7 0%, #925DFF 100%)';
      betaElm.style.padding = '1px 7px';
      betaElm.style.margin = '0 0 10px 12px';
      contentElm.prepend(betaElm);

      var bgElm = document.createElement('img');
      bgElm.src = '//cdn.optimizely.com/img/20673560014/1d20efd443e24328b0906719b1eb8503.svgz';
      bgElm.style.position = 'relative';
      bgElm.style.top = '50px';
      var imgElm = document.createElement('img');
      imgElm.src = '//cdn.optimizely.com/img/20673560014/6bc3dde2bb114a428af6c3535dfe4480.svgz';
      imgElm.style.position = 'absolute';
      imgElm.style.width = '216px';
      imgElm.style.height = '305px';
      imgElm.style.left = '448px';
      imgElm.style.top = '55px';
      var imgContainer = dialogElm.querySelector('.cancel-coupon-bg-image');
      imgContainer.innerHTML = '';
      imgContainer.appendChild(bgElm);
      imgContainer.appendChild(imgElm);

      var titleElm = dialogElm.querySelector('.cancel-coupon-title');
      titleElm.style.width = '400px';
      titleElm.style.textAlign = 'left';
      titleElm.style.marginLeft = '12px';
      titleElm.textContent = $t('all.offer.heading');

      var discountContentElm = dialogElm.querySelector('.cancel-coupon-discount-content');
      discountContentElm.style.margin = '16px 12px';
      discountContentElm.style.fontsize = '16px';
      discountContentElm.style.width = '385px';
      discountContentElm.style.width = '385px';
      discountContentElm.textContent = $t('all.offer.desc');

      var buttonsElm = dialogElm.querySelector('.dialog-button');
      buttonsElm.style.position = 'absolute';
      buttonsElm.style.bottom = '12px';
      buttonsElm.style.left = '12px';

      var secondaryBtnElm = buttonsElm.querySelector('.zm-button--plain');
      secondaryBtnElm.value = $t('all.offer.secondaryBtn');

      var primaryBtnElm = buttonsElm.querySelector('.zm-button--primary');
      primaryBtnElm.value = $t('all.offer.primaryBtn');
      primaryBtnElm.addEventListener('click', function (evt) {
        evt.preventDefault();
        evt.stopPropagation();

        if (variation === 'B') {
          window.location.href = '/opc/buy/downgrade?plan=zobasicp&type=downgrade';
        } else if (variation === 'C') {
          window.location.href = '/opc/buy/downgrade?plan=zobasicpm&type=downgrade';
        }
      }, true);

      dialogElm.setAttribute('data-bp-updated', 'true');
    }
  };
})();
// ----- END ZTSPZ-117 - Main core code (shared between two campaigns)

// ----- START ZTSPZ-145 (Basic Plus Checkout/Confirmation Page Hotfixes)
(function () {
  var url = new URL(window.location.href);
  var plan = url.searchParams.get('plan');
  if (plan !== 'zobasicp' && plan !== 'zobasicpm') {
    return;
  }

  var translations = {
    'en-US': {
      'co': 'Make sure to update to the required client version of 5.15.5 or higher before using this plan.',
      'conf': 'Client version 5.15.5 or higher is required. Please visit our <a href="https://zoom.us/download#client_4meeting" target="_blank">Download Center</a> to update.'
    },
    'es-ES': {
      'co': 'Antes de usar este plan, asegúrese de actualizar a la versión del cliente requerida 5.15.5 o una superior.',
      'conf': 'Se requiere la versión del cliente 5.15.5 o una superior. Visite nuestro <a href="https://zoom.us/download#client_4meeting" target="_blank">Download Center</a> para completar la actualización.'
    },
    'de-DE': {
      'co': 'Aktualisieren Sie auf die erforderliche Client-Version – 5.15.5 oder höher –, damit Sie Ihr Abo nutzen können.',
      'conf': 'Client-Version 5.15.5 oder höher ist erforderlich. Bitte besuchen Sie unser <a href="https://zoom.us/download#client_4meeting" target="_blank">Download Center</a>, um die Aktualisierung vorzunehmen.'
    },
    'fr-FR': {
      'co': 'Pour profiter de ce forfait, vous devez impérativement mettre à jour votre client vers la version 5.15.5 ou supérieure.',
      'conf': 'La version 5.15.5 ou ultérieure du client est requise. Accédez à notre <a href="https://zoom.us/download#client_4meeting" target="_blank">Download Center</a> pour effectuer la mise à jour.'
    },
    'jp-JP': {
      'co': 'クライアント バージョン 5.15.5 以降に更新（必須）してからこちらのプランをご利用ください。',
      'conf': 'クライアント バージョン 5.15.5 以降が必要です。 <a href="https://zoom.us/download#client_4meeting" target="_blank">ダウンロード センター</a>にアクセスして更新してください。'
    },
    'pt-PT': {
      'co': 'Certifique-se de atualizar para a versão necessária do cliente (5.15.5 ou posterior) antes de usar esse plano.',
      'conf': 'A versão de cliente 5.15.5 ou posterior é necessária. Visite nosso <a href="https://zoom.us/download#client_4meeting" target="_blank">Download Center</a> para atualizar.'
    },
    'ru-RU': {
      'co': 'Прежде чем использовать этот план, обновите клиент до требуемой версии 5.15.5 или более поздней.',
      'conf': 'Требуется клиент версии 5.15.5 или более поздней. Чтобы обновить его, перейдите в наш <a href="https://zoom.us/download#client_4meeting" target="_blank">Download Center</a>.'
    },
    'zh-CN': {
      'co': '确保在使用此套餐之前必须将您的客户端版本更新到 5.15.5 或更高版本。',
      'conf': '需要 5.15.5 或更高版本的客户端。 请访问我们的<a href="https://zoom.us/download#client_4meeting" target="_blank">下载中心</a>进行更新。'
    },
    'zh-TW': {
      'co': '請在開始使用此方案之前，務必將所需要的用戶端版本更新為 5.15.5 或更高版本。',
      'conf': '需要 5.15.5 或更高版本的用戶端。 請造訪我們的<a href="https://zoom.us/download#client_4meeting" target="_blank">下載中心</a>進行更新。'
    },
    'it-IT': {
      'co': 'Prima di usare questo piano, assicurati di eseguire l\'aggiornamento alla versione richiesta del client 5.15.5 o a versioni successive.',
      'conf': 'È necessario utilizzare la versione del client 5.15.5 o versioni successive. Per effettuare l\'aggiornamento, visita il nostro <a href="https://zoom.us/download#client_4meeting" target="_blank">Download Center</a>.'
    },
    'vi-VN': {
      'co': 'Hãy đảm bảo cập nhật lên phiên bản máy khách được yêu cầu 5.15.5 trở lên trước khi sử dụng gói này.',
      'conf': 'Yêu cầu phiên bản máy khách từ 5.15.5 trở lên. Vui lòng truy cập <a href="https://zoom.us/download#client_4meeting" target="_blank">Download Center</a> để cập nhật.'
    },
    'ko-KO': {
      'co': '이 요금제를 사용하기 전에 클라이언트 버전 5.15.5 이상으로 업데이트해야 합니다.',
      'conf': '클라이언트 버전 5.15.5 이상이 필요합니다. <a href="https://zoom.us/download#client_4meeting" target="_blank">Download Center</a>에서 업데이트하시기 바랍니다.'
    },
    'pl-PL': {
      'co': 'Aby rozpocząć korzystanie z planu, zaktualizuj klienta do wymaganej wersji (5.15.5 lub nowszej).',
      'conf': 'Wymagany jest klient w wersji 5.15.5 lub nowszej. Odwiedź nasze <a href="https://zoom.us/download#client_4meeting" target="_blank">Centrum pobierania</a>, aby dokonać aktualizacji.'
    },
    'tr-TR': {
      'co': 'Bu planı kullanmadan önce gerekli istemci sürümünü 5.15.5 veya üzerine güncellediğinizden emin olun.',
      'conf': 'İstemci sürümü 5.15.5 veya üzeri gerekiyor. Güncellemek için lütfen <a href="https://zoom.us/download#client_4meeting" target="_blank">Download Center</a>\'ımızı ziyaret edin.'
    },
    'id-ID': {
      'co': 'Pastikan untuk memperbarui ke versi klien yang diperlukan 5.15.5 atau yang lebih tinggi sebelum menggunakan paket ini.',
      'conf': 'Diperlukan versi klien 5.15.5 atau yang lebih tinggi. Kunjungi <a href="https://zoom.us/download#client_4meeting" target="_blank">Download Center</a> untuk memperbarui.'
    },
    'nl-NL': {
      'co': 'Zorg dat je bijwerkt naar de vereiste clientversie 5.15.5 of hoger voordat je dit abonnement gaat gebruiken.',
      'conf': 'Clientversie 5.15.5 of hoger is vereist. Ga naar ons <a href="https://zoom.us/download#client_4meeting" target="_blank">Downloadcentrum</a> om bij te werken.'
    }
  };

  var ZmOptlyUtil = window['ZmOptlyUtil'];
  var zmLang = ZmOptlyUtil.getCookie('_zm_lang') || 'en-US';

  var $t = function (key) {
    return (translations[zmLang] || translations['en-US'])[key] || key;
  };

  if (ZmOptlyUtil.isInPath([/\/opc\/buy\/updateSuccess\/?/])) { // confirmation page
    new MutationObserver(function () {
      var containerSelector = document.querySelector('.opc-upgrade-success__content');
      if (containerSelector) {
        this.disconnect();
        var pElm = containerSelector.querySelector('p');
        pElm = pElm ? pElm.cloneNode(true) : document.createElement('p');
        pElm.style.width = 'auto';
        pElm.style.color = '#131619';
        pElm.style.marginTop = '8px';
        pElm.innerHTML = $t('conf');
        containerSelector.appendChild(pElm);
      }
    }).observe(document, {subtree: true, childList: true});

  } else if (ZmOptlyUtil.isInPath([/\/opc\/buy\/?/])) { // checkout page
    new MutationObserver(function () {
      var containerSelector = document.querySelector('.opc-tile.opc-basic-plus');
      if (containerSelector && !document.getElementById('optly-bp-co-msg')) {
        var msgHtml = '<div id="optly-bp-co-msg" role="alert" class="zm-alert number-item" style="background-color:#f7f7f8;margin-bottom:20px;color:#515079"><div class="zm-alert__content"><div class="zm-alert__body"><div class="zm-alert__description"><div style="display:flex;align-items:center"><i class="zm-icon-info" style="color:#9191A4;font-size:18px"></i><p style="margin-left:12px">' + $t('co') + '</p></div></div></div></div></div>';
        containerSelector.insertAdjacentHTML('beforebegin', msgHtml);
      }
    }).observe(document, {subtree: true, childList: true});
  }
})();
// ----- END ZTSPZ-145 (Basic Plus Checkout/Confirmation Page Hotfixes)



// ----- START (Sessions/Events 100 Monthly legacy -> OPC checkout hotfix)
(function () {
  var ZmOptlyUtil = window['ZmOptlyUtil'];
  var paths = [
    /\/buy/,
    /\/account\/billing\/buy/
  ];

  if (!ZmOptlyUtil.isInPath(paths)) {
    return;
  }

  var url = new URL(window.location.href);
  var query = url.searchParams;

  if (url.pathname === '/account/billing/buy' // edit flow
    && ((query.get('subPlan') === 'eventsaascore' && query.get('oldPlanCode') === 'zec_100_unlimited_monthly')
      || (query.get('subPlan') === 'eventsaas' && query.get('oldPlanCode') === 'ze_100_unlimited_monthly'))) {
    window.location.replace('/opc/buy/edit' + window.location.search);

  } else if (url.pathname === '/buy' || url.pathname === '/account/billing/buy') { // buy flow / f2p
    if ((query.get('from') === 'eventsaascore100' || query.get('from') === 'eventsaas100') && query.get('period') === 'monthly') {
      window.location.replace('/opc/buy/config' + window.location.search);
    }
  }
})();
// ----- END (Sessions/Events 100 Monthly legacy -> OPC checkout hotfix)


// ----- START ZTSPZ-147 Holdback Support
(function () {
  var ZmOptlyUtil = window['ZmOptlyUtil'];
  if (!ZmOptlyUtil.isInPath([/(\/[\w-]+)?\/pricing\/events\/?/])) {
    return;
  }

  if (!ZmOptlyUtil.createPatch('opcWESAddendum', '[PZ-ECOMM] 2023.08 Support for OPC ZW/ZE/ZS holdback')) {
    return;
  }

  new MutationObserver(function () {
    if (!!document.querySelector('#opc_config ~ * ~ *') && window.dataModel) {
      this.disconnect();
      if (ZmOptlyUtil.isInHoldback('24958240299', '24950780089')) {
        window.dataModel._disableZE100 = true;
      }
    }
  }).observe(document, {subtree: true, childList: true});
})();
// ----- END ZTSPZ-147 Holdback Support

// ----- START ZOOM-584125 (ZP Edit OPC to Legacy flow)
(function(){var e=window["ZmOptlyUtil"];var o=e.isInPath([/\/opc\/buy/]);var r=e.isInPath([/\/buy/]);if(!o&&!r){return}if(!e.createPatch("opcAudioRoom","[PZ-ECOMM] 2023.10 Redirect OPC Audio Conf/Room Conn to Legacy")){return}var i=e.getCookie("_zm_lang")||e.getCookie("_zm_optly_lang");if(i==="en-US"){return}if(o){var n=new URL(window.location.href);var t=n.searchParams;var l;if(t.get("type")==="edit"&&(t.get("subPlan")==="tollfree"||t.get("subPlan")==="rc")){l="/account/billing/buy"+window.location.search}else if(t.get("subPlan")==="newsubs"&&(t.get("from_sub")==="tollfree"||t.get("from_sub")==="rc")){l="/account/billing/buy"+window.location.search}else if(t.get("from")==="tollfree"||t.get("from")==="rc"){l="/buy"+window.location.search}if(l){if(document.referrer){window.sessionStorage.setItem("optly_zm_billing_buy_flow_refer_url",document.referrer);window.sessionStorage.removeItem("_zm_billing_buy_flow_refer_url")}window.location.replace(l)}return}var a=window.sessionStorage.getItem("optly_zm_billing_buy_flow_refer_url");var _;var w=10;if(r&&a){_=window.setInterval((function(){var e=window.sessionStorage.getItem("_zm_billing_buy_flow_refer_url");if(e){window.sessionStorage.setItem("_zm_billing_buy_flow_refer_url",a);window.sessionStorage.removeItem("optly_zm_billing_buy_flow_refer_url");window.clearInterval(_)}w--;if(w<=0){window.clearInterval(_)}}),1e3)}})();
// ----- END ZOOM-584125 (ZP Edit OPC to Legacy flow)
}, "interestGroups": [], "tagGroups": []},f=__webpack_require__(8821),l="initializeOptimizelyPreview";if(f.initGlobalStore(s),u.populateDirectiveData(),r.clientHasAlreadyInitialized())e.warn("Main / Disabling because Optimizely has already initialized on this page load. Are there multiple snippets on the page?");else if(r.shouldBailForDesktopApp())e.log("Main / Disabling because of desktop app.");else if(r.conflictInObservingChanges())e.log("Main / Disabling: Observe Changes Indefinitely is on, but browser does not support it.");else{if(r.shouldLoadInnie())a.registerFunction("getProjectId",(function(){return s.projectId})),a.registerFunction("getAccountId",(function(){return s.accountId})),c.addScriptAsync("https://app.optimizely.com/js/innie.js"),e.log("Main / Disabling in favor of the editor client.");else if(r.shouldLoadPreview())(r.isSlave()?window.optimizely:window.optimizely=window.optimizely||[]).push({type:"load",data:s}),e.log("Main / Disabling in favor of the preview client."),__webpack_require__(106).setupPreviewGlobal(),__webpack_require__(106).pushToPreviewGlobal({type:"pushPreviewData",name:"liveCommitData",data:s}),r.isSlave()||(a.registerFunction("getProjectId",(function(){return s.projectId})),c.addScriptSync("https://cdn-assets-prod.s3.amazonaws.com/js/preview2/20917322331.js"));else if(r.shouldBootstrapDataForPreview()){a.registerFunction(l,(function(t){n(),a.unregisterFunction(l)}));var d=r.isSlave()?PROJECT_ID_FOR_SLAVE_PREVIEW:a.getFunction("getProjectId")();h=r.getProjectToken(),v=d,p=r.getPreviewLayerIds(),o="/dist/preview_data.js?token=__TOKEN__&preview_layer_ids=__PREVIEW_LAYER_IDS__".replace("__TOKEN__",h).replace("__PROJECT_ID__",v).replace("__PREVIEW_LAYER_IDS__",p.join(",")).replace("__GET_ONLY_PREVIEW_LAYERS__",!0),c.addScriptSync(o),__webpack_require__(106).setupPreviewGlobal(),c.addScriptAsync("/dist/js/preview_ui.js")}else r.shouldBootstrapDataForEditor()?(a.registerFunction(l,(function(t){n(),a.unregisterFunction(l)})),c.addScriptAsync(window.optimizely_editor_data_endpoint)):r.shouldInitialize()&&n();var h,v,p;t.timeEnd("block");var g=t.now();t.setMark("optimizelyFinished",startTime=g,duration=g)}}()}catch(n){try{__webpack_require__(6708).handleError(n)}catch(t){console.log(t)}}}()})();