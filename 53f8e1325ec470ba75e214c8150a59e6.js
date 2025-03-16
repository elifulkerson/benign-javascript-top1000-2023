var lang = 'us';
  var webClient = 'shein';
  var appLanguage = 'en';
  window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;

  function GB_ga_getCookie(name){
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length >= 2) {
      return decodeURIComponent(parts.pop().split(";").shift())
    } else {
      return ''
    }
  }
  function dateFormat(fmt, d) {
    const o = {
      'M+': d.getMonth() + 1, // 月份
      'd+': d.getDate(), // 日
      'h+': d.getHours(), // 小时
      'm+': d.getMinutes(), // 分
      's+': d.getSeconds(), // 秒
      'q+': Math.floor((d.getMonth() + 3) / 3), // 季度
      S: d.getMilliseconds() // 毫秒
    }
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (d.getFullYear() + '').substr(4 - RegExp.$1.length))
    for (var k in o) if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
    return fmt
  }

  window.GB_ANALYSIS_GA = webClient === 'romwe' ? 'us' :'shein'
  window.GB_ANALYSIS_GA_SET = GB_ANALYSIS_GA + '.set'
  window.GB_ANALYSIS_GA_SEND = GB_ANALYSIS_GA + '.send'
  window.GB_ga_currentRate = Number('1') || 1
  window.PageGroup = window.PageGroup || 'other'
  window.PageGroupOverview = window.PageGroupOverview || 'other'
  window.PageGroupEmarsys = window.PageGroupEmarsys || 'other'
  window.GB_GA_pageview = null

  window.GB_ga_transformPrice = function(val) {
    if(GB_ga_currentRate) {
      return (val/GB_ga_currentRate).toFixed(2)
    } else {
      return val
    }
  }
  var _gaGetQueryString = function(name) {
    //get url query params
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
  }

  function GBGaSend(params) {
    var payload = [GB_ANALYSIS_GA_SEND, 'event']
    for (var key in params) {
      if (typeof params[key] !== 'undefined') {
        payload.push(params[key])
      }
      if (key == 'beacon') {
        payload.push({ transport: 'beacon' })
      }
    }
    ga.apply(null, payload)
  }

  !function () {
    var isCreated = false;
    GB_GA_pageview = function() {
      var isRomwe = webClient === 'romwe'
      var trackingId = isRomwe ? 'UA-56523842-1' : 'UA-22263122-1'
      var userID = window.analysisUserId = '';
      var cookieId = GB_ga_getCookie("cookieId") || '';

      if(!isCreated) {
        ga('create', trackingId, 'auto', { userId: userID, 'name': GB_ANALYSIS_GA });
        ga('require', 'linkid', 'linkid.js');
        ga(GB_ANALYSIS_GA+'.require', 'ec');
        isCreated = true
      }
      ga(GB_ANALYSIS_GA_SET, 'dimension2', userID)
      ga(GB_ANALYSIS_GA_SET, 'dimension18', cookieId)
      ga(GB_ANALYSIS_GA_SET, 'dimension36', appLanguage)
      ga(GB_ANALYSIS_GA_SET, 'dimension37', dateFormat('yyyy/MM/dd hh:mm:ss', new Date()))
      ga(GB_ANALYSIS_GA_SET, 'dimension39', 'us')

      ga(function() {
        var clientID = ga.getByName(GB_ANALYSIS_GA).get('clientId');
        ga(GB_ANALYSIS_GA_SET, 'dimension1', clientID);
      });

      

      ga(GB_ANALYSIS_GA_SET, 'contentGroup1', PageGroupOverview);
      if("undefined" != typeof PageGroup) {
        ga(GB_ANALYSIS_GA_SET, 'contentGroup2', PageGroup);
      }

      typeof SaPageInfo === 'object'
        ? ga(GB_ANALYSIS_GA_SET, 'dimension19', cookieId + ',' + (SaPageInfo.page_name || 'noPageName') + (SaPageInfo.start_time || 'noTime'))
        : ga(GB_ANALYSIS_GA_SET, 'dimension19', 'noDefinedSaPageInfo')

      if(_gaGetQueryString('ici')) {
        ga(GB_ANALYSIS_GA_SET, 'dimension7', _gaGetQueryString('ici'));
      }
      
        ga(
          GB_ANALYSIS_GA_SET,
          "dimension20",
          "样式A"
        )
      

      
      

      

      console.log('###### ga pageview');
      ga(GB_ANALYSIS_GA_SET, 'location', location.href);
      ga(GB_ANALYSIS_GA_SEND, 'pageview');

    }
    GB_GA_pageview()
  }();

  window.ScarabQueue = window.ScarabQueue || [];
  (function (subdomain, id) {
    var site = ''
    if (webClient === 'romwe') {
      site = {
        en: '1F542F7522AA01B3',
        us: '14E90776A136245E',
        fr: '1204911E0DEAF144',
        es: '120F91DC149D7D53',
        uk: '1B1B4DB0BD97D990'
      }[lang] || '1F542F7522AA01B3'
    } else {
      site = {
        en: '14AEFABFF6C30DEA',
        fr: '19DB2374A86E66CB',
        de: '1BBEDD499A9531EB',
        es: '1D243573F433C16B',
        uk: '168D45E4CC9D9A30',
        ar: '12772D590FB8B485',
        'ar-en': '12772D590FB8B485',
        au: '10ECBA3DB5F814A5',
        in: '17BB651AD5A11623',
        us: '15306811EE8118BB',
        ca:	'1A69C9CE8026BBCF',
        cafr: '1A69C9CE8026BBCF',
        il:	'1D572EBCE2FD916D',
        ilen: '1D572EBCE2FD916D',
        it:	'17581E4E3BE0039E',
        mx:	'185B89E4CD55F346',
        nl:	'15222E04E24ADCDA',
        tw:	'13459D4EDBB8F6E7',
        ru: '1417FB44A25ABAFD',
        se: '19EEECFE3D868F07',
        sesv: '19EEECFE3D868F07',
        eur: '1C3C6FDBF34C5A79',
        eurfr: '1C3C6FDBF34C5A79',
        eurnl: '1C3C6FDBF34C5A79',
        'eurpt-pt': '1C3C6FDBF34C5A79',
        br: '1290FBB9BA4228EE',
      }[lang] || '14AEFABFF6C30DEA'
    }
    if (document.getElementById(id)) return;
    var js = document.createElement('script');
    js.id = id;
    js.async = 1;
    js.src = subdomain + '.scarabresearch.com/js/'+ site +'/scarab-v2.js';
    var fs = document.getElementsByTagName('script')[0];
    fs.parentNode.insertBefore(js, fs);
  })('https:' == document.location.protocol ? 'https://recommender' : 'http://cdn', 'scarab-js-api');