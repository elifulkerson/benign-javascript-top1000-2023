if( /([a-z0-9]+)*\.[a-z]{2,6}$/.test(location.hostname) )
{
	if(RegExp.lastMatch == "afreecatv.com")
	{
		var DOMAIN = RegExp.lastMatch;
	}
	else
		var DOMAIN = "afreeca.com";
}

var PMSPM_START_TM = "202101270400";
var PMSPM_END_TM = "202101270000";
var PMSPM_TEXT = "2021ë 01ì 27ì¼(ì) 04:00 ~ 07:30";
var FULLPM_START_TM = "202101270400";
var FULLPM_END_TM = "202101270000";
var FULLPM_TEXT = "2021ë 01ì 27ì¼(ì) 04:00 ~ 07:30";

var IS_DEBUG = false;

var AFREECA = "http://www.afreecatv.com";
var AFREECA_SSL = "https://www.afreecatv.com";
var AFREECA_NONE_SCHEME = "//www.afreecatv.com";           // ë©ì¸ & ì´ë¯¸ì§(SSL)

var AFREECA_AUTO = (document.location.protocol == "https:") ? AFREECA_SSL : AFREECA;

var AFREE_CA = "https://afree.ca";
var AFREECA_ISAPI = "http://afreecatv.com/";
var AFREE_CA_NONE_SCHEME = "http://afree.ca";

var OPENTV_ISAPI = "http://opentv.afreecatv.com/";

var POINT = "http://point.afreecatv.com";
var POINT_SSL = "https://point.afreecatv.com";
var POINT_NONE_SCHEME = "//point.afreecatv.com";

var POINT_API = "https://pointapi.afreecatv.com";
var POINT_NONE_SCHEME = "//pointapi.afreecatv.com";

var HELPAFREECA = "http://help.afreecatv.com";
var HELPAFREECA_SSL = "https://help.afreecatv.com";           // ê³ ê°ì¼í°(SSL)
var HELPAFREECA_NONE_SCHEME = "//help.afreecatv.com";           // ê³ ê°ì¼í°
var GLOBAL_HELPAFREECA_NONE_SCHEME = "//ghelp.afreecatv.com";           // ê¸ë¡ë² ê³ ê°ì¼í°

var NEWHELPAFREECA = "http://afreecatv.com/new_help/atvhelp";
var NEWHELPAFREECA_NONE_SCHEME = "//afreecatv.com/new_help/atvhelp";           // ê³ ê°ì¼í°_new

var LIVE_8057 = ((document.location.protocol == "https:") ? "https:" : "http:") + "//live.afreecatv.com";
var LIVE_80 = "http://live.afreecatv.com";
var LIVE_SSL = "https://live.afreecatv.com";
var LIVE_NONE_SCHEME = "//live.afreecatv.com";

var LIVE_8079 = "http://live.afreecatv.com:8079";
var ST_80 = "http://st.afreecatv.com";
var ST_SSL = "https://st.afreecatv.com";
var ST_NONE_SCHEME = "//st.afreecatv.com";

var LIVE_8080 = "http://live.afreecatv.com:8080";
var AFBBS_8080 = "http://afbbs.afreecatv.com:8080";
var AFBBS_NONE_SCHEME = "//afbbs.afreecatv.com";
var STBBS_80 =  "http://stbbs.afreecatv.com";
var STBBS_SSL = "https://stbbs.afreecatv.com";
var STBBS_NONE_SCHEME = "//stbbs.afreecatv.com";

var AFFIND_8057 = "http://affind.afreecatv.com:8057";
var AFFIND_NONE_SCHEME = "//affind.afreecatv.com";    // ê²ì

var FAV_8057 = "//live.afreecatv.com";
var FAV_NONE_SCHEME = "//live.afreecatv.com";          // ì¦ê²¨ì°¾ê¸°

var MY_NONE_SCHEME = "//my.afreecatv.com";             // MY

var AFWBBS1_8081 = "http://afwbbs1.afreecatv.com:8081";
var AFWBBS1_NONE_SCHEME = "//afwbbs1.afreecatv.com";  // ì¹ ê²ìí

var AFEVENT_8089 = "http://afevent.afreecatv.com:8089";
var AFEVENT_SSL = "https://afevent.afreecatv.com";
var AFEVENT_NONE_SCHEME = "//afevent.afreecatv.com";       // ì´ë²¤í¸

var AFEVENT2_8120 = "http://afevent2.afreecatv.com:8120";
var AFEVENT2_SSL = "https://afevent2.afreecatv.com";
var AFEVENT2_NONE_SCHEME = "//afevent2.afreecatv.com";     // ì´ë²¤í¸2

var AFFTP1_8084 = "http://afftp1.afreecatv.com:8084";
var AFPROXYFTP1_8084 = "http://afproxyftp1.afreecatv.com:8084";

var ALIMIAD1_8084 = "http://alimiad1.afreecatv.com:8084";

var LOGIN_8100 = "https://login.afreecatv.com";
var LOGIN_NONE_SCHEME = "//login.afreecatv.com";      // ë¡ê·¸ì¸

var LIVEIMG_9090 = "//liveimg.afreecatv.com";
var LIVEIMG_NONE_SCHEME = "//liveimg.afreecatv.com";

var AFUPD1_9091 = "//afupd1.afreecatv.com";
var AFUPD1_NONE_SCHEME = "//afupd1.afreecatv.com";    // ìë£¨ì ìë°ì´í¸
var AFUPD1_JAPAN_NONE_SCHEME = "//afupdjp.afreecatv.com";    // ìë£¨ì ìë°ì´í¸

var AFOCX_9091 = "http://afocx.afreecatv.com:9091";
var ADMIN_8112 = "http://admin.afreecatv.com:8112";
var AFSMS_8104 = "http://smsadmin.afreecatv.com:8104";

var MEMBER_8108 = "https://member.afreecatv.com";
var MEMBER_8111 = "https://member.afreecatv.com";
var MEMBER_NONE_SCHEME = "//member.afreecatv.com";   // ë©¤ë²ì½

var NOTE_8133 = "http://note.afreecatv.com:8133";
var NOTE_SSL = "https://note.afreecatv.com";
var NOTE_NONE_SCHEME = "//note.afreecatv.com";      // ìª½ì§

var PLAYER_80 = "http://player.afreecatv.com";

var UPDATE_8134 = "http://update.afreecatv.com:8134";
var UPDATE_NONE_SCHEME = "//update.afreecatv.com";

var PLAY_80 = "http://play.afreecatv.com";
var PLAY_SSL = "https://play.afreecatv.com";
var PLAY_NONE_SCHEME = "//play.afreecatv.com";           // íëì íë ì´ì´

var GAMECENTER_DOMAIN = "http://gamecenterpc.afreecatv.com";
var GAMECENTER_DOMAIN_NONE_SCHEME = "//gamecenterpc.afreecatv.com";	//ê²ìì¼í°
var GAMECENTER_NONE_SCHEME = "//gamecenterpc.afreecatv.com";	//ê²ìì¼í°
var GAMECENTER_IMG = "http://img.gamecenter.afreecatv.com/admin/";
var GAMECENTER_IMG_NONE_SCHEME = "//img.gamecenter.afreecatv.com/admin/";	//ê²ìì¼í° ì´ë¯¸ì§

var STATIC_FILE = "//static.file.afreecatv.com";
var STATIC_FILE_NONE_SCHEME = "//static.file.afreecatv.com";		// STATIC íì¼(MogileFS)

var RES_AFREECA = ((document.location.protocol == "https:") ? "https" : "http")+"://res.afreecatv.com";
var RES_AFREECA_NONE_SCHEME = "//res.afreecatv.com";

var DASHBOARD = "http://dashboard.afreecatv.com";		//ëì¬ë³´ë
var DASHBOARD_NONE_SCHEME = "//dashboard.afreecatv.com";		//ëì¬ë³´ë

var SUBS_DOMAIN = "http://subs.afreecatv.com";
var SUBS_SSL_DOMAIN = "https://subs.afreecatv.com";		//êµ¬ë ì ë¬¼ íì´ì§ SSL
var SUBS_NONE_SCHEME = "//subs.afreecatv.com";			//êµ¬ë ì ë¬¼ íì´ì§

var NEWBJ_DOMAIN = "http://newbj.afreecatv.com";     // ì ì BJì§ìì¼í°
var NEWBJ_NONE_SCHEME = "//newbj.afreecatv.com";     //  ì ì BJì§ìì¼í°

var STATIC_AFREECA = ((document.location.protocol == "https:") ? "https" : "http")+"://static.afreecatv.com";
var STATIC_AFREECA_80 = "http://static.afreecatv.com";
var STATIC_AFREECA_NONE_SCHEME = "//static.afreecatv.com";

var ANALYSIS_AFREECA = ((document.location.protocol == "https:") ? "https" : "http")+"://analysis.afreecatv.com";
var ANALYSIS_NONE_SCHEME = "//analysis.afreecatv.com";

var ST_PROXY_80 = "http://stproxy.afreecatv.com";
var ST_PROXY_NONE_SCHEME = "//stproxy.afreecatv.com";		   // íë¡ì

var AFFLV1_8099 = "http://afflv1.afreecatv.com:8099";
var AFJOBENC1 = "http://afjobenc1.afreecatv.com";
var AFENC1 = "http://afenc1.afreecatv.com";
var AFENC2 = "http://afenc2.afreecatv.com";
var AFENC5 = "http://afenc5.afreecatv.com";

var SPORTS_KBO = "http://kbo.sports.afreecatv.com/";
var SPORTS_EPL = "http://epl.afreecatv.com";
var SPBBS_8117 = "http://spbbs.afreecatv.com:8117";
var SPORTS_TV = "http://sportstv.afreecatv.com";
var SPORTS_TV2 = "http://sportstv.afreecatv.com";

var ESPORTS_DOMAIN = "http://esports.sports.afreecatv.com/";
var ESPORTS_DOMAIN_NONE_SCHEME = "//esports.sports.afreecatv.com/";
var ESPORTS_NONE_SCHEME = "//esports.sports.afreecatv.com/";

var API_SPORTS = "http://api.sports.afreecatv.com/";
var API_SPORTS_NONE_SCHEME = "//api.sports.afreecatv.com/";

var BILLIARD_DOMAIN = "http://billiard.sports.afreecatv.com";			//ë¹êµ¬ íì´ì§
var BILLIARD_SSL_DOMAIN = "https://billiard.sports.afreecatv.com";		//ë¹êµ¬ íì´ì§ SSL
var BILLIARD_NONE_SCHEME = "//billiard.sports.afreecatv.com";		//ë¹êµ¬ íì´ì§ SSL

var ANI_DOMAIN = "http://ani.afreecatv.com";
var ANI_DOMAIN_NONE_SCHEME = "//ani.afreecatv.com";
var ANI_NONE_SCHEME = "//ani.afreecatv.com";

var VR_DOMAIN = "http://vr.afreecatv.com";
var VR_DOMAIN_NONE_SCHEME = "//vr.afreecatv.com";		// VRììê´
var VR_NONE_SCHEME = "//vr.afreecatv.com";		// VRììê´

var TV_DOMAIN = "http://tv.afreecatv.com";
var TV_DOMAIN_NONE_SCHEME = "//tv.afreecatv.com";		// ì§ìí/ì¼ì´ë¸
var TV_NONE_SCHEME = "//tv.afreecatv.com";		// ì§ìí/ì¼ì´ë¸

var STAR_DOMAIN ="http://star.afreecatv.com";
var STAR_DOMAIN_NONE_SCHEME ="//star.afreecatv.com";            //ë³´ì´ë ë¼ëì¤
var STAR_NONE_SCHEME ="//star.afreecatv.com";            //ë³´ì´ë ë¼ëì¤

var MOBILE_DOMAIN ="http://mobile.afreecatv.com";
var MOBILE_DOMAIN_NONE_SCHEME ="//mobile.afreecatv.com";        //ëª¨ë°ì¼ ë°©ì¡
var MOBILE_NONE_SCHEME ="//mobile.afreecatv.com";        //ëª¨ë°ì¼ ë°©ì¡

var MOBILE_STATIC = "http://static.m.afreecatv.com";
var MOBILE_STATIC_NONE_SCHEME ="//static.m.afreecatv.com";	//ëª¨ë°ì¼ STATIC

var CONTENTLAB_DOMAIN = "http://contentlab.afreecatv.com";
var CONTENTLAB_DOMAIN_NONE_SCHEME = "//contentlab.afreecatv.com"; //ì½íì¸  ë°ì ì
var CONTENTLAB_NONE_SCHEME = "//contentlab.afreecatv.com"; //ì½íì¸  ë°ì ì

var FFOM_DOMAIN = "http://ffom.afreecatv.com";
var FFOM_DOMAIN_NONE_SCHEME = "//ffom.afreecatv.com"; // ë½ ëë©ì¸
var FFOM_NONE_SCHEME = "//ffom.afreecatv.com"; // ë½ ëë©ì¸

var SHOP_DOMAIN = "http://shop.afreecatv.com";
var SHOP_DOMAIN_NONE_SCHEME = "//shop.afreecatv.com"; // ìµíë¦¬ì¹´
var SHOP_NONE_SCHEME = "//shop.afreecatv.com"; // ìµíë¦¬ì¹´

var ADTIME_DOMAIN = "http://adtime.afreecatv.com"; // ADíì
var ADTIME_SSL_DOMAIN = "https://adtime.afreecatv.com"; // ADíì SSL
var ADTIME_DOMAIN_NONE_SCHEME = "//adtime.afreecatv.com"; // ADíì
var ADTIME_NONE_SCHEME = "//adtime.afreecatv.com"; // ADíì

var ADCON_DOMAIN = "http://adballoon.afreecatv.com"; // ADCON
var ADCON_SSL_DOMAIN = "https://adballoon.afreecatv.com"; // ADCON SSL
var ADBALLOON_NONE_SCHEME = "//adballoon.afreecatv.com"; // ADBALLOON SSL

var FUNDING_AFREECA = "http://funding.afreecatv.com";
var FUNDING_AFREECA_NONE_SCHEME = "//funding.afreecatv.com";

var UP_DOMAIN = "http://up.afreecatv.com";
var UP_DOMAIN_NONE_SCHEME = "//up.afreecatv.com";
var UP_NONE_SCHEME = "//up.afreecatv.com";

var ITEM_DOMAIN = "http://item.afreecatv.com";	// ìì´í
var ITEM_NONE_SCHEME = "//item.afreecatv.com";	// ìì´í
var ITEM_SSL_DOMAIN = "https://item.afreecatv.com";

var TOKEN_DOMAIN = "http://token.afreecatv.com"; // í í°
var TOKEN_DOMAIN_AUTO = ((document.location.protocol == "https:") ? "https" : "http")+"://token.afreecatv.com"; //í í° SSL
var TOKEN_DOMAIN_NONE_SCHEME = "//token.afreecatv.com"; // í í°
var TOKEN_NONE_SCHEME = "//token.afreecatv.com"; // í í°

var ITEM_80 = "http://items.afreecatv.com";
var ITEMS_NONE_SCHEME = "//items.afreecatv.com";     // ì´ì½ë  ìì´í

var INFODESK_DOMAIN = "http://infodesk.afreecatv.com";  // ë°©ì¡ì§ìì¼í°
var INFODESK_DOMAIN_NONE_SCHEME = "//infodesk.afreecatv.com";  // ë°©ì¡ì§ìì¼í°
var INFODESK_NONE_SCHEME = "//infodesk.afreecatv.com";  // ë°©ì¡ì§ìì¼í°

var BJ_AFREECA = ((document.location.protocol == "https:") ? "https" : "http")+"://bj.afreecatv.com";
var BJ_AFREECA_NONE_SCHEME = "//bj.afreecatv.com";
var BJ_AFREECA_SSL = "https://bj.afreecatv.com";

var BJGUIDE_DOMAIN = "http://bjguide.afreecatv.com";  // BJ ê°ì´ë
var BJGUIDE_DOMAIN_NONE_SCHEME = "//bjguide.afreecatv.com";  // BJ ê°ì´ë
var BJGUIDE_NONE_SCHEME = "//bjguide.afreecatv.com";  // BJ ê°ì´ë

var ADREVENUE_DOMAIN = "http://adrevenue.afreecatv.com";
var ADREVENUE_SSL_DOMAIN = "https://adrevenue.afreecatv.com";
var ADREVENUE_DOMAIN_NONE_SCHEME = "//adrevenue.afreecatv.com"; // ADREVENUE ê´ê³ íì 
var ADREVENUE_NONE_SCHEME = "//adrevenue.afreecatv.com"; // ADREVENUE ê´ê³ íì 

var DASHBOARD_DOMAIN = "http://dashboard.afreecatv.com"; // ê¸ë¡ë² ìë¹ë (ëìë³´ë)
var DASHBOARD_NONE_SCHEME = "//dashboard.afreecatv.com"; // ê¸ë¡ë² ìë¹ë (ëìë³´ë)

var API_SABANA = "https://apisabana.afreecatv.com";
var API_SABANA_NONE_SCHEME = "//apisabana.afreecatv.com";	//ì¬ë°ë API

var ETC_80 = "http://etc.afreecatv.com";                 //ì°í¸ë²í¸, ì¸êµ­ì¸ ë³¸ì¸ íì¸ ë± ê¸°í ì©ë
var ETC_SSL = "https://etc.afreecatv.com";               //ì°í¸ë²í¸, ì¸êµ­ì¸ ë³¸ì¸ íì¸ ë± ê¸°í ì©ë (SSL)
var ETC_NONE_SCHEME = "//etc.afreecatv.com";               //ì°í¸ë²í¸, ì¸êµ­ì¸ ë³¸ì¸ íì¸ ë± ê¸°í ì©ë (SSL)

var BIZAFREECA = "http://www.bizafreeca.com";

var M_AFREECA = "http://m.afreecatv.com";
var M_AFREECA_NONE_SCHEME = "//m.afreecatv.com";                //ëª¨ë°ì¼ ìíë¦¬ì¹´

var M_AFREECATV_NONE_SCHEME = "//m.afreeca.tv";               //ëª¨ë°ì¼ ìíë¦¬ì¹´ ë°ë¡ê°ê¸°

var FPOINT_8130 = "http://fpoint.afreecatv.com:8130";
var FPOINT_SSL = "https://fpoint.afreecatv.com";

var GMTV = "http://gametv.afreecatv.com";
var GMTV_NONE_SCHEME = "//gametv.afreecatv.com";
//var GMFTP1_8084 = "http://gmftp1.afreecatv.com:8084";
//var GMPROXYFTP1_8084 = "http://gmproxyftp1.afreecatv.com:8084";

var BESTBJ_80 = "http://bestbj.afreecatv.com";
var BESTBJ_NONE_SCHEME = "//bestbj.afreecatv.com";           //ë² ì¤í¸BJ ì ì©

var ISSUE_80 = "http://issue.afreecatv.com";
var ISSUE_SSL = "https://issue.afreecatv.com";
var ISSUE_NONE_SCHEME = "//issue.afreecatv.com";           //ì´ìë°©ì¡ì¤ì¼ì¥´

var AFREECA_AD = "http://ad.afreecatv.com";
var AFREECA_AD_NONE_SCHEME = "//ad.afreecatv.com";            //ìíë¦¬ì¹´TV ê´ê³ 

var AD_NONE_SCHEME = "//pa.afreecatv.com";      // ìíë¦¬ì¹´TV ê´ê³ 

var VOD_DOMAIN = "http://vod.afreecatv.com";
var VOD_NONE_SCHEME = "//vod.afreecatv.com";

var VIDEO_FILE = "http://video.afreecatv.com";
var VIDEO_FILE_NONE_SCHEME = "//video.afreecatv.com";           //ìì¹´ì´ë¸ íì¼

var VIDEO_THUMBNAIL = "http://videoimg.afreecatv.com";
var VIDEO_THUMBNAIL_NONE_SCHEME = "//videoimg.afreecatv.com";   //ìì¹´ì´ë¸ ì¸ë¤ì¼

var IAPP_AFREECA = "http://iapp.m.afreecatv.com";
var IAPP_AFREECA_NONE_SCHEME = "//iapp.m.afreecatv.com";   //ëª¨ë°ì¼ ìíë¦¬ì¹´

var AFREECA_STORAGE_ADMIN_LOCATION = "/ADMIN/";

var ADMIN_IMG = "//admin.img.afreecatv.com";
var ADMIN_IMG_NONE_SCHEME = "//admin.img.afreecatv.com";

var EVENT_IMG = "//event.img.afreecatv.com";
var EVENT_IMG_NONE_SCHEME = "//event.img.afreecatv.com";

var SPORTS_IMG = "//sports.img.afreecatv.com";
var SPORTS_IMG_NONE_SCHEME = "//sports.img.afreecatv.com";

var STATION_IMG = "//stimg.afreecatv.com";
var STATION_IMG_NONE_SCHEME = "//stimg.afreecatv.com";

var BBS_IMG = "//bbs.img.afreecatv.com";
var BBS_IMG_NONE_SCHEME = "//bbs.img.afreecatv.com";

var FFOM_IMG = "//ffom.img.afreecatv.com";
var FFOM_IMG_NONE_SCHEME = "//ffom.img.afreecatv.com";

var SEARCH_SCH_80 = "http://sch.afreecatv.com";
var SEARCH_SCH_NONE_SCHEME = "//sch.afreecatv.com";

var SEARCH_SCKETC_80 = "//scketc.afreecatv.com";
var SEARCH_SCKETC_NONE_SCHEME = "//scketc.afreecatv.com";

//íë¦¬ìº¡
var STS = 'http://apro.afreecatv.com';
var STS_NONE_SCHEME = '//apro.afreecatv.com';

var STS_STATIC = 'http://static.apro.afreecatv.com';
var STS_STATIC_NONE_SCHEME = '//static.apro.afreecatv.com';

var STS_BBS = 'http://bbs.apro.afreecatv.com';

// í¸ëì¤ì½ë ì¥ë¹
var TRANSCODER = 'http://transcoder.afreecatv.com';
var TRANSCODER_NONE_SCHEME = '//transcoder.afreecatv.com';

// ìì¿ ì
var AQUA_DOMAIN = 'http://aqua.afreecatv.com';
var AQUA_NONE_SCHEME = '//aqua.afreecatv.com';

var EVENTAPI_NONE_SCHEME = '//eventapi.afreecatv.com';

var API_UP_NONE_SCHEME = '//api.up.afreecatv.com';

var BROAD_STATISTIC = "http://broadstatistic.afreecatv.com";
var BROAD_STATISTIC_NONE_SCHEME = "//broadstatistic.afreecatv.com";

var STUDIO_AFREECA_NONE_SCHEME = ((document.location.protocol == 'https:') ? 'https://' : 'http://') + 'studio.afreecatv.com';
var SOTONG_AFREECA_NONE_SCHEME = ((document.location.protocol == 'https:') ? 'https://' : 'http://') + 'sotong.afreecatv.com';
var NEWAPPLY_AFREECA_NONE_SCHEME = ((document.location.protocol == 'https:') ? 'https://' : 'http://') + 'newapply.afreecatv.com';

// í¬ì¸í¸
var MYPOINT_DOMAIN = "http://mypoint.afreecatv.com";
var MYPOINT_NONE_SCHEME = "//mypoint.afreecatv.com";

// ë´ ììµ
var MY_REVENUE = "http://myrevenue.afreecatv.com";
var MY_REVENUE_NONE_SCHEME = "//myrevenue.afreecatv.com";

// developers
var DEVELOPERS_AFREECATV_SCHEME = "//developers.afreecatv.com";

// OGQ MARKET
var OGQ_MARKET_NONE_SCHEME = "//ogqmarket.afreecatv.com";

/**
 * ì ê· ëë©ì¸ ì ë¦¬íë ë¶ë¶(ìëë¶ë¶ë¶í°)
 */
var RES_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//res.afreecatv.com';
var STATIC_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//static.afreecatv.com';
var LIVEIMG_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//liveimg.afreecatv.com';  // LIVE ì¬ë¤ì¼
var ADMIN_IMG_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//admin.img.afreecatv.com';  // ìíë¦¬ì¹´ ë©ì¸ íì´ì§
var STATIC_FILE_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//static.file.afreecatv.com';  // ëª¨ìì¼ ì ì  íì¼
var STIMG_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//stimg.afreecatv.com';  // ê°ì¸ë°©ì¡êµ­ ëª¨ìì¼ ì´ë¯¸ì§
var EVENT_IMG_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//event.img.afreecatv.com';  // ì´ë²¤í¸ ëª¨ìì¼ ì´ë¯¸ì§
var SPORTS_IMG_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//sports.img.afreecatv.com';  // ì¤í¬ì¸  ëª¨ìì¼ ì´ë¯¸ì§
var BBS_IMG_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//bbs.img.afreecatv.com';  // ê²ìí ëª¨ìì¼ ì´ë¯¸ì§
var FFOM_IMG_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//ffom.img.afreecatv.com';  // FFOM ëª¨ìì¼ ì´ë¯¸ì§
var VR_IMG_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//vr.img.afreecatv.com';  // VR ëª¨ìì¼ ì´ë¯¸ì§
var PROFILE_IMG_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//profile.img.afreecatv.com';  // ê°ì¸ë°©ì¡êµ­ ëª¨ìì¼ ì´ë¯¸ì§

var ADMIN_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//admin.afreecatv.com';
var M_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//m.afreecatv.com';  // ëª¨ë°ì¼ ìíë¦¬ì¹´TV
var API_M_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//api.m.afreecatv.com';
var STATIC_M_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//static.m.afreecatv.com';
var CACHE_M_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//cache.m.afreecatv.com';
var ITEM_M_AFREECATV = 'https://item.m.afreecatv.com';
var AUTH_M_AFREECATV = 'https://auth.m.afreecatv.com';
var MEMBER_M_AFREECATV = 'https://member.m.afreecatv.com';

var WWW_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//www.afreecatv.com';  // ìíë¦¬ì¹´ ë©ì¸ íì´ì§
var SPORTSTV_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//sportstv.afreecatv.com';  // ì¤í¬ì¸  TV (ìì  ì¤í¬ì¸  ëë©ì¸)
var LIVE_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//live.afreecatv.com';  // LIVE ì ë³´ ë° API ë±ë±
var AFWBBS1_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//afwbbs1.afreecatv.com';  // êµ¬ ê²ìí
var BJ_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//bj.afreecatv.com';  // ì ê· ë°©ì¡êµ­
var OPENTV_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//opentv.afreecatv.com';  // ê¸°ìë°©ì¡êµ­
var POINT_AFREECATV = 'https://point.afreecatv.com';																  // httpsê³ ì , í¬ì¸í¸,êµ¬ë§¤
var POINTAPI_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//pointapi.afreecatv.com';  // PMS REST API ëë©ì¸
var HELP_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//help.afreecatv.com';  // ê³ ê°ì¼í°
var GHELP_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//ghelp.afreecatv.com';  // ê³ ê°ì¼í° (ê¸ë¡ë²)
var APIHELP_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//apihelp.afreecatv.com';  // ê³ ê°ì¼í° API
var ST_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//st.afreecatv.com';  // ê°ì¸ë°©ì¡êµ­
var STBBS_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//stbbs.afreecatv.com';  // ê°ì¸ë°©ì¡êµ­ íµí© ê²ìí
var AFEVENT_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//afevent.afreecatv.com';  // ì´ë²¤í¸
var AFEVENT2_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//afevent2.afreecatv.com';  // ì´ë²¤í¸2
var LOGIN_AFREECATV = 'https://login.afreecatv.com';  																	// ë¡ê·¸ì¸
var AFUPD1_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//afupd1.afreecatv.com';  // ìë£¨ì ìë°ì´í¸
var AFUPDJP_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//afupdjp.afreecatv.com';  // ìë£¨ì ìë°ì´í¸ (ì¼ë³¸)
var MEMBER_AFREECATV = 'https://member.afreecatv.com';  // ë©¤ë²ì½
var NOTE_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//note.afreecatv.com';  // ìª½ì§
var UPDATE_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//update.afreecatv.com';  // ë´ìíë¦¬ì¹´ ìë°ì´í¸
var PLAY_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//play.afreecatv.com';  // íëì íë ì´ì´
var ADREVENUE_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//adrevenue.afreecatv.com';  // ADREVENUE ê´ê³ íì  íì´ì§
var APISABANA_AFREECATV = 'https://apisabana.afreecatv.com';  // ì¬ë°ë API
var AFJOBENC1_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//afjobenc1.afreecatv.com';
var SPORTS_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//sports.afreecatv.com';  // ì¤í¬ì¸ 
var SBS_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//sbs.afreecatv.com';  // SBS ì¤í¬ì¸ 
var API_SPORTS_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//api.sports.afreecatv.com';  // SBS ì¤í¬ì¸  API
var VR_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//vr.afreecatv.com';  // VRììê´
var ANI_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//ani.afreecatv.com';  // ì ëë©ì´ì
var TV_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//tv.afreecatv.com';  // ì§ìí/ì¼ì´ë¸ TV
var STAR_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//star.afreecatv.com';  // ë³´ì´ë ë¼ëì¤
var ANALYSIS_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//analysis.afreecatv.com';  // LOG API
var FFOM_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//ffom.afreecatv.com';  // ë½ëë©ì¸
var SHOP_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//shop.afreecatv.com';  // ìµíë¦¬ì¹´
var SHOPFREECA_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//shopfreeca.afreecatv.com';  // ìµíë¦¬ì¹´
var ADTIME_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//adtime.afreecatv.com';  // ADíì
var ADBALLOON_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//adballoon.afreecatv.com';  // ì ëë²ë£¬
var UP_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//up.afreecatv.com';  // UP beta
var ITEM_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//item.afreecatv.com';  // ìì´í
var TOKEN_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//token.afreecatv.com';  // í í°
var ITEMS_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//items.afreecatv.com';  // ìì´í
var INFODESK_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//infodesk.afreecatv.com';  // ë°©ì¡ì§ìì¼í°
var BJGUIDE_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//bjguide.afreecatv.com';  // BJ ê°ì´ë
var DASHBOARD_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//dashboard.afreecatv.com';  // ëì¬ë³´ë
var SUBS_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//subs.afreecatv.com';  // êµ¬ë ì ë¬¼ íì´ì§
var NEWBJ_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//newbj.afreecatv.com';  // ì ì BJì§ìì¼í°
var FREECAP_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//apro.afreecatv.com';  // íë¦¬ìº¡
var STATIC_FREECAP_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//static.apro.afreecatv.com';  // íë¦¬ìº¡ STATIC
var BBS_FREECAP_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//bbs.apro.afreecatv.com';  // íë¦¬ìº¡ BBS
var GAMECENTERPC_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//gamecenterpc.afreecatv.com';  // ê²ìì¼í°
var CONTENTLAB_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//contentlab.afreecatv.com';  // ì½íì¸ ë°ì ì
var WWW_BIZAFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//www.bizafreeca.com';
var GAMETV_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//gametv.afreecatv.com';  // GAME TV ê´ë ¨
var BORA_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//bora.afreecatv.com';  // ë³´ì´ë ë¼ëì¤
var BESTBJ_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//bestbj.afreecatv.com';  // ë² ì¤í¸BJ ì ì©
var ISSUE_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//issue.afreecatv.com';  // ì´ìë°©ì¡ì¤ì¼ì¥´
var AD_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//ad.afreecatv.com';  // ìíë¦¬ì¹´TV ê´ê³ 
var PA_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//pa.afreecatv.com';  // ìíë¦¬ì¹´TV ê´ê³ 
var VOD_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//vod.afreecatv.com';  // ëìì ì¹ì
var VIDEO_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//video.afreecatv.com';  // ìì¹´ì´ë¸ íì¼
var HLS_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//hls.afreecatv.com';  // ìì¹´ì´ë¸ hls
var HLS_STAGE_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//hls-stage.afreecatv.com';  // ìì¹´ì´ë¸ hls stage
var VIDEOIMG_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//videoimg.afreecatv.com';  // ìì¹´ì´ë¸ ì¸ë¤ì¼
var VIDEOIMG_TEST_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//videoimg-test.afreecatv.com';  // ìì¹´ì´ë¸ ì¸ë¤ì¼ test
var TS_PC_STREAM_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//ts-pc.stream.afreecatv.com';  // íììíí¸ pc
var AFREECATV_ASYNC_WISEN_GSCDN = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//afreecatv.async.wisen.gscdn.com';  // CDN í¼ì§ URL
var AFFLV_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//afflv14.afreecatv.com';  // ììí´ë¦½ afflv14 ëë©ì¸
var AQUA_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//aqua.afreecatv.com';  // ìì¿ ì(AQUA) ì ìì¬ì±
var BROADSTATISTIC_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//broadstatistic.afreecatv.com';  // ë°©ì¡íµê³
var SCH_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//sch.afreecatv.com';  // ê²ì API URL ì ë³´
var SCKETC_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//scketc.afreecatv.com';  // ê²ì
var V_AFREE_CA = 'https://v.afree.ca';  // SHOORT VOD URL
var TRANSCODER_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//transcoder.afreecatv.com';  // í¸ëì¤ì½ë ì¥ë¹
var VACSDRDB_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//vacsdrdb.afreecatv.com';
var EVENTAPI_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//eventapi.afreecatv.com';
var API_UP_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//api.up.afreecatv.com';
var STUDIO_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//studio.afreecatv.com';  // ì¤íëì¤
var SOTONG_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//sotong.afreecatv.com';  // ìíµ ê²ìí
var NEWAPPLY_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//newapply.afreecatv.com';  // newapply
var MYPOINT_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//mypoint.afreecatv.com';  // í¬ì¸í¸
var VEDITOR_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//veditor.afreecatv.com';  // VOD êµ¬ê° í¸ì§ê¸°
var DEVELOPERS_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//developers.afreecatv.com';  // developers open api íì´ì§
var MYREVENUE_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//myrevenue.afreecatv.com';  // ë´ ììµ
var OGQ_MARKET_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//ogqmarket.afreecatv.com';  // OGQ ë§ì¼
var OGQ_IMG_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//ogq-sticker-global-cdn-z01.afreecatv.com';  // OGQ ë§ì¼ ì´ë¯¸ì§
var OGQ_IMG_TEST_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//ogqmarket.img.afreecatv.com';  // OGQ ë§ì¼ ì´ë¯¸ì§
var ESPORTS_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//esports.afreecatv.com';  // eì¤í¬ì¸ 
var AFREECACOLOSSEUM = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//www.afreecacolosseum.com';  // eì¤í¬ì¸  ê³µì§ì¬í­ ê²ìí (ì½ë¡ì¸ì)
var MY_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//my.afreecatv.com';  // MY
var PPV_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//ppv.afreecatv.com';  // PPV ëë©ì¸
var DDUKBOB_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//ddukbob.afreecatv.com';
var TOKENAPI_AFREECATV = 'https://tokenapi.afreecatv.com';
var ADPAPI_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//adpapi.afreecatv.com'; // ì ëí¬ì¸í¸ ëë©ì¸
var OLYMPIC_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//olympic.afreecatv.com';  // ì¬ë¦¼í½
var BJ_MATCH_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//bjmatch.afreecatv.com';  // BJ ë©¸ë§ ì 
var VODBJ_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//vodbj.afreecatv.com';  // í¸ì§BJ
var BJ_EDU_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//bjedu.afreecatv.com';  // BJ êµì¡
var VODBJ_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//vodbj.afreecatv.com';  // í¸ì§BJ
var THEATER_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//theater.afreecatv.com';  // ììê´
var AFTMARKET_TV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//aftmarket.tv';  //AFTë§ì¼
var EXTENSION_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//extension.afreecatv.com';  //ìµì¤íìë§ì¼
var EXTENSION_FILE_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//extfileupload.afreecatv.com';  // developers open api íì´ì§
var NOTI_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//noti.afreecatv.com';  // ë¸ë¼ì°ì  ìë¦¼
var GEM_ADMIN_AFREECATV = 'https://esadmin.afreecatv.com';  // ì ¬ ì´ëë¯¼
var GEM_API_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//gpapi.afreecatv.com';  // ì ¬ API
var ADMIN_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//admin.afreecatv.com';
var PARTNERSHIP_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//partnership.afreecatv.com';  // íí¸ëì­
var CREATOR_UP_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//creatorup.afreecatv.com';  // ì¤í¸ë¦¬ë¨¸(ì¤ì¹ íì¼ ì©)
var ITEM_API_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//item-api.afreecatv.com';  // ìì´í API ìë²
var ITEM_API_TEST_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//item-api-test.afreecatv.com';  // ìì´í API ìë²
var ITEM_ADMIN_AFREECATV = 'https://item-admin.afreecatv.com:8001';  // ìì´í ì´ëë¯¼ ìë²
var ITEM_ADMIN_TEST_AFREECATV = 'https://item-admin-test.afreecatv.com:8001';  // ìì´í ì´ëë¯¼ ê°ë° ìë²
var DOLRIMPAN_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//dolrimpan.afreecatv.com';  // ëë¦¼í
var BILLIARDS_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//billiards.afreecatv.com';  // ë¹êµ¬
var CINETY_AFREECATV = ((document.location.protocol == 'https:') ? 'https:' : 'http:') + '//cinety.afreecatv.com';  // ìë¤í°