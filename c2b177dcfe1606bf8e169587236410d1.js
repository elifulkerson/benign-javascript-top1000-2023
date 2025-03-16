var lzdRetcodePageName = window.LZD_RETCODE_PAGENAME || 'desktop-homepage' || location.pathname;
    if (window.LZD_ROUTER_POSTFIX) {
      if (lzdRetcodePageName.indexOf(window.LZD_ROUTER_POSTFIX) === -1) {
        lzdRetcodePageName = lzdRetcodePageName + window.LZD_ROUTER_POSTFIX;
      }
    }
    var lzdRetcodePid = window.LZD_RETCODE_PID || 'hyey0hz67v@be8ca88a369a33d';
    var lzdRetcodeSample = window.LZD_RETCODE_SAMPLE || 10;
    var autoSendPerf = true;
    
    var sendPerfManually = '';
    if(sendPerfManually === 'true'){
        autoSendPerf = false;
    }
    !function(c,b,d,a){c[a]||(c[a]={}),c[a].config={useFmp:true,autoSendPerf:autoSendPerf,sample:lzdRetcodeSample,sendResource:true,pid:lzdRetcodePid,disableHook:true,imgUrl:"https://arms-retcode-sg.aliyuncs.com/r.png?",page:lzdRetcodePageName};with(b){with(body){with(appendChild(createElement("script"),firstChild)){setAttribute("defer","");setAttribute("async","");setAttribute("crossorigin","");src=d}}}}(window,document,"//laz-g-cdn.alicdn.com/retcode/cloud-sdk/bl.js","__bl");