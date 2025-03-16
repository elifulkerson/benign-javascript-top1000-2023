//pm½ÃÇ®±â
// document.writeln('<script type="text/javascript"src="//static.file.afreecatv.com/pm/afreeca_full_pm.js"></script>');

var bLayerPopUp = false;		// ÆäÀÌ¾î ÆË¾÷ Ãâ·Â À¯¹«

var bIsplaying=false;              // ½Ã°£ Á¦ÇÑ µÎ±âÀ§ÇÔ
var oTimeId;
var Max_Time = 5000;
var tmRunPlayer = false;
var nAvoidPlayerLimitTime = 5;

var szLocalUrl = "http://127.0.0.1:21201";  // AFCPackage¿ÍÀÇ Åë½ÅÀ» À§ÇÔ

// °øÁö»çÇ× new ¾ÆÀÌÄÜ
function getIcon(flag)
{
	if(flag=='Y') {
		return '<img src="' + RES_AFREECATV + '/images/help/icon_n.jpg" alt="new" />';
	} else {
		return '';
	}
}

//½Ã°£ Á¦ÇÑ ·çÆ¾
function ClearTimeout()
{
	bIsplaying = false;
	clearTimeout(oTimeId);
}

function isPossblePlaying()
{
	if( ! bIsplaying )
	{
		bIsplaying = true;
		clearTimeout(oTimeId);
		oTimeId = setTimeout("ClearTimeout()",Max_Time);
		return true;
	}
	else
	{
		return false;
	}
}

// Æ©Åä¸®¾ó
function openTutorial()
{
	window.open( WWW_AFREECATV + "/tutorial/tutorial_new.html", null, "height=595, width=960, toolbar=no,menubar=no,location=no, top=250, left=250,scrollbars=yes");
}

// ´Ù¿î¹Þ±â(´Ù¿î·Îµå Ã¢ ¿­±â)
function openDownload()
{
	directDownload();
}
// ´Ù¿î¹Þ±â(¹Ù·Î ´Ù¿î·Îµå)
function directDownload()
{
	window.open( AFUPD1_AFREECATV+"/afreeca_installer_s2.exe", '_self');
}

// ÇØ´ç È¸¿øÀÇ ¹æ¼Û±¹ ¹Ù·Î°¡±â
function goStation(szId)
{
	if (szId == null || szId == "") {
		parent.location.href = WWW_AFREECATV;
	} else {
		if (location.href == WWW_AFREECATV+"/afreeca_app_main.htm") {
			goStationBlank(szId);
		} else {
			parent.location.href = BJ_AFREECATV + '/' +szId;
		}
	}
}

function goStationBlank(szId)
{
	window.open(BJ_AFREECATV + '/' + szId, "", "");

}

// ÇØ´ç È¸¿øÀÇ µ¿¿µ»ó ¸®½ºÆ®·Î ¹Ù·Î°¡±â
function goOnDemand(szId)
{
	if (szId == null || szId == "")
	{
		parent.location.href = WWW_AFREECATV;
	}
	else
	{
		parent.location.href = ST_AFREECATV + "/app/index.cgi?szType=list_ucc_bbs&szBjId=" + szId;
	}
}

// ¾ÆÀÌÇÁ·¹ÀÓ ³»¿¡¼­ ·©Å· ¹Ù·Î°¡±â(¸ÞÀÎ+·Î±×ÀÎ)
function goRank(szWhich)
{
	if(szWhich=="" || szWhich==null)
	{
		parent.location.href = AFEVENT2_AFREECATV + "/app/rank/index.php";
	}
	else
	{
		parent.location.href = AFEVENT2_AFREECATV + "/app/rank/index.php?szWhich="+szWhich;
	}
}

// ¾ÆÀÌÇÁ·¹ÀÓ ³»¿¡¼­ ÂÊÁö ¹Ù·Î°¡±â
function goNote()
{
	var szUrl	= NOTE_AFREECATV + "/app/index.php";
	try
	{
		if( parent.location == location )
		{
			location.href = szUrl;
		}
		else
		{
			parent.location.href = szUrl;
		}
	}
	catch (e)
	{
		location.href = szUrl;
	}
}

// ÂÊÁö º¸³»±â ÆË¾÷ ¿­±â
function goSendNote( szUserId )
{
	// ½Ç¸íÀÎÁõ Ã¼Å©
	$.ajax({
		url: MEMBER_8111 + "/app/chk_real_name.php"
		, type : 'post'
		, data : 'szWork=CHK_UID&szReturnType=jsonp&szCallback=?'
		, dataType : 'jsonp'
		, success : function ( result )
		{
			var szResult = result.CHANNEL[0];
			if ( szResult.RESULT != '200' )
			{
				return 0;
			}
			else if ( szResult.NAMECHK != 1 )
			{
				alert('ºñ½Ç¸í ¾ÆÀÌµð´Â ÂÊÁöº¸³»±â°¡ ºÒ°¡´É ÇÕ´Ï´Ù.');
				return;
			}
			else if (szResult.NAMECHK == 1)
			{
				if( szUserId == 'undefined' || szUserId == null )
				{
					szUserId = '';
				}

				var oWindow = window.open(NOTE_AFREECATV + "/app/index.php?page=write&id_list=" + szUserId, 'noteWriteWindow','left=10,top=10,width=400,height=440,marginwidth=0,marginheight=0,resizable=0,scrollbars=no');
				if( !oWindow ) alert( "Â÷´ÜµÈ ÆË¾÷À» Çã¿ëÇØÁÖ¼¼¿ä.");
				else    oWindow.focus();
			}
		}
		, error : function (jqXHR, textStatus)
		{
			//console.log(textStatus);
			return 0;
		}
	});

}

/**
  *	@brief ÂÊÁö Ä«¿îÆ® api È£Ãâ
  */
function getNoteCnt( spnId )
{
	include_js( NOTE_AFREECATV + "/api/note_cnt_api.php?szType=json&szScriptVar=oNoteInfo", onLoadNoteCnt, "scrNote", spnId );
}

/**
  *	@brief ÂÊÁö Ä«¿îÆ® Ãâ·Â
  */
function onLoadNoteCnt( spnId )
{
	try
	{
		eval( oNoteInfo );

		if( oNoteInfo.CHANNEL.RESULT  == 1 )
		{
			var nNoteCnt = oNoteInfo.CHANNEL.NOTE_CNT;

			try
			{
				document.getElementById( spnId ).innerHTML = nNoteCnt;
			}
			catch(e2)
			{
				document.write( nNoteCnt );
			}
		}
	}
	catch(e)
	{
	}
}

// ¾ÆÀÌÇÁ·¹ÀÓ ³»¿¡¼­ Æ÷ÀÎÆ® ¹Ù·Î°¡±â(¸ÞÀÎ+·Î±×ÀÎ) - 2008/03/11
function goPoint(szWhich)
{
	var szUrl = "";

	if( !checkPointPm() )
	{
		alert("[¾ÆÇÁ¸®Ä«TV Á¤±âÁ¡°Ë]\nÁö±ÝÀº ¼­ºñ½º Á¡°ËÁßÀÔ´Ï´Ù.\n\n¼­ºñ½º Á¡°Ë½Ã°£\n" + PMSPM_TEXT );
		return;
	}

	switch( szWhich )
	{
		case "point" :
			szUrl = POINT_AFREECATV + "/report/AfreecaUserOutList.asp";
			break;

		case "quickview" :
			szUrl = ITEM_AFREECATV + "/quickview.php";
			break;

		case "abroad" :
			szUrl = WWW_AFREECATV + "/abroad.htm";
			break;

		case "balloon" :
			szUrl = ITEM_AFREECATV + "/starballoon.php";
			break;

		case "alimi" :
			szUrl = WWW_AFREECATV + "/alimi.htm";
			break;

		case "my" :
			szUrl = POINT_AFREECATV + "/report/AfreecaUseList.asp";
			break;

		case "my_balloon" :
			szUrl = POINT_AFREECATV + "/Report/AfreecaBalloonList.asp";
			break;

		case "gold" :
			szUrl = ITEM_AFREECATV + "/gold.php";
			break;

		case "sticker" :
			szUrl = ITEM_AFREECATV + "/sticker.php";
			break;

		case "chocolate" :
			szUrl = ITEM_AFREECATV + "/choco/index.php?ctrl=choco_item_user_controller&func=view_item_desc";
			break;

		case "fanlove" :
			szUrl = ITEM_AFREECATV + "/myitem_sticker.php";
			break;

		case "sportshout" :
			szUrl = AFWBBS1_AFREECATV + "/app/index.php?board=sportshout";
			break;

		case "kboshout" :
			szUrl = WWW_AFREECATV + "/kboshout.htm";
			break;

		case "chatcon" :
			szUrl = AFWBBS1_AFREECATV + "/app/index.php?board=chatcon";
			break;

		case "free" :
			szUrl = WWW_AFREECATV + "/fpoint.htm";
			break;
		case 'my_hopeballoon':
			szUrl = POINT_AFREECATV + '/Hope/HopePassFrm.asp?pagetype=Hope';
			break;
	}

	try
	{
		if( parent.location == location )
		{
			location.href = szUrl;
		}
		else
		{
			parent.location.href = szUrl;
		}
	}
	catch (e)
	{
		location.href = szUrl;
	}
}

// PMS PM¿©ºÎ Ã¼Å©
function checkPointPm()
{
	var szDate = new Date();

	var szYear = szDate.getFullYear();
	var szMonth =  ((szDate.getMonth()+1 < 10)?"0":"")+(szDate.getMonth()+1);
	var szDay = ((szDate.getDate() < 10)?"0":"")+szDate.getDate();
	var szHours = ((szDate.getHours() < 10)?"0":"")+szDate.getHours();
	var szMinutes = ((szDate.getMinutes() < 10)?"0":"")+szDate.getMinutes();

	var szNowTm = String(szYear)+String(szMonth)+String(szDay)+String(szHours)+String(szMinutes);

	// ½Ã°£ Ã¼Å©
	if( szNowTm >= PMSPM_START_TM && szNowTm < PMSPM_END_TM )
	{
		return false;
	}
	return true;
}

// Ç®ÆäÀÌÁö PM¿©ºÎ Ã¼Å©
function checkFullPagePm( nowtm, target )
{
	var szNowTm = nowtm;
	if( szNowTm == undefined || szNowTm == null || szNowTm == "" )
	{
		return;
	}

	var szFullUrl = WWW_AFREECATV + "/pm/afreeca_pm_notice_full.htm";
	var szPopUrl = WWW_AFREECATV + "/pm/afreeca_pm_notice_pop.htm";
	var szUrl = (target == "pop") ? szPopUrl : szFullUrl;

	// ½Ã°£ Ã¼Å©
	if( szNowTm >= FULLPM_START_TM && szNowTm < FULLPM_END_TM )
	{
		try
		{
			top.location.href = szUrl;
		}
		catch (e)
		{
			location.href = szUrl;
		}
		return false;
	}
	return true;
}

// ¾ÆÀÌÇÁ·¹ÀÓ ¸®»çÀÌÁî
function ResizeFrame(frame_name,num)
{
	try
	{
		var objFrame = document.getElementById(frame_name);
		var objBody;

		if(window.navigator.appName.indexOf("Explorer") !=-1)		// IE
		{
			objBody = window.frames[frame_name].document.body;
			objFrame.height = objBody.scrollHeight + 10;
//			objFrame.height = objBody.scrollHeight + (objBody.offsetHeight-objBody.clientHeight);
		}
		else if(window.navigator.appName.indexOf("Opera") !=-1)		// Opera
		{
			objBody = objFrame.contentDocument.documentElement;
			objFrame.height = objBody.scrollHeight + 10;
		}
		else														// FF, Chrome, Safari
		{
			objBody = objFrame.contentDocument.documentElement;
			objFrame.height = objBody.offsetHeight + 10;
		}

		objFrame.style.height = objFrame.height + "px";
	}
	catch (e)
	{
	}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
	var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
	if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
	d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && document.getElementById) x=document.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

//¸®»çÀÌÁî ¾ÈÇÏ´Â ÆË¾÷À» ¿¬´Ù
function Pop_Open3( szUrl,szTitle,szStyle )
{
	var obj=window.open(szUrl,szTitle,szStyle);
}

//¸®»çÀÌÁî ¾ÈÇÏ´Â ÆË¾÷À» ¿¬´Ù
function Pop_Open2( szUrl,szTitle,nLeft,nTop,nWidth,nHeight )
{
	var obj=window.open(szUrl,szTitle,'left='+nLeft+', top='+nTop+', width='+nWidth+',height='+nHeight+",marginwidth=0,marginheight=0,resizable=0,scrollbars=no'");
}

//¾È¿¡¼­ resizetoÇÏ´Â ÆË¾÷À» ¿¬´Ù
function Pop_Open( szUrl,szTitle,nLeft,nTop )
{
	Pop_Open2( szUrl,szTitle,nLeft,nTop,10,10 );
}

// Ç®ÆäÀÌÁö ·Î±×ÀÎ
function Go_Pop_Up_Login()
{
	Parse_Cookie(document);
	var ticket = Read_Cookie("PdboxTicket");

	if (ticket == null || ticket == "")
	{
		var szHref = location.href;

		var szExp  =/&/g
		var szHref = szHref.replace(szExp,"%26");

		//#, #top»èÁ¦ IE¿¡¼­¸¸ ¿¡·¯°¡ ³²!
		var szExp = /#$|#top$/g
		var szHref = szHref.replace(szExp,"");

		location.href = LOGIN_8100 + "/afreeca/login.php?szFrom=full&request_uri="+szHref;
		return 0;
	}
	return 1;
}

// Ç®ÆäÀÌÁö ·Î±×¾Æ¿ô(°³ÀÎ¹æ¼Û±¹¿¡¼­ »ç¿ëÁß)
function goStationLogOut()
{
	var szHref = location.href;

	var szExp  =/&/g
	var szHref = szHref.replace(szExp,"%26");

	//#, #top»èÁ¦ IE¿¡¼­¸¸ ¿¡·¯°¡ ³²!
	var szExp = /#$|#top$/g
	var szHref = szHref.replace(szExp,"");

	location.href = LOGIN_8100 + "/app/LogOut.php?szFrom=full&request_uri="+szHref;
}


//¹üÀ§¿¡ ÇØ´çÇÏ´Â ³­¼ö¸¦ »ý¼ºÇÏ¿© ¹ÝÈ¯ÇÏ´Â ÇÔ¼ö (¾ÆÇÁ¸®Ä«TV¿¡¼­ »ý±ä ÀÏ¿¡ »ç¿ë)
function Return_Rand( szNo )
{
	var arRandNo=new Array();

	for(var i=0; i<szNo; i++)
	{
		arRandNo[arRandNo.length]=i;
	}

	arRandNo.sort( function(){return Math.random()*2-1;} );
	return arRandNo;
}

//¹üÀ§¿¡ ÇØ´çÇÏ´Â ³­¼ö¸¦ »ý¼ºÇÏ¿© ¹ÝÈ¯ÇÏ´Â ÇÔ¼ö (½ÃÀÛ°ª ÀÖÀ½)
function Return_Rand2( szStartNo, szNo )
{
	var arRandNo=new Array();

	for(var i=szStartNo; i<szNo; i++)
	{
		arRandNo[arRandNo.length]=i;
	}

	arRandNo.sort( function(){return Math.random()*2-1;} );
	return arRandNo;
}

function createHttpRequest()
{
	if( window.ActiveXObject)
	{
		try
		{
			return new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e)
		{
			try
			{
				return new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch (e2)
			{
				return null;
			}
		}
	}
	else if(window.XMLHttpRequest)
	{
		return new XMLHttpRequest();
	}
	else
	{
		return null;
	}
}

// ÇØ¿ÜÀÌ¿ëÀÚ Ã¼Å© °á°ú¸¦ ÄíÅ°·Î ±¸¿öÁÜ - by ¹Ú±º ( ¸ÞÀÎ°³Æí ÀÌÈÄ µðÀÚÀÎ )
function Abroad_Chk_Result( szData )
{
	if(szData == "OK")
	{
		try
		{
			parent.document.getElementById("divMainQuickview").className = "afreeca_item_abroad";
			parent.document.getElementById("divMainQuickview").innerHTML = '<ul><li><a href="#abroad" onClick="javascript:goPoint(\'abroad\');"><img src="'+WWW_AFREECATV+'/images/main/btn_item_abroad.gif" alt="ÇØ¿ÜÀÌ¿ëÀÚ ÀÔÀå±Ç" class="on"/></a></li><li><a href="#balloon" onClick="javascript:goPoint(\'balloon\');"><img src="'+ RES_AFREECATV +'/images/main/btn_item_ball.gif" alt="º°Ç³¼±" /></a></li><li><a href="#alimi" onclick="javascript:goPoint(\'alimi\');"><img src="'+ RES_AFREECATV +'/images/main/btn_item_alimi.gif" alt="¾Ë¸®¹Ì" /></a></li><li><a href="#my" onClick="javascript:goPoint(\'my\');"><img src="'+ RES_AFREECATV +'/images/main/btn_item_info.gif" alt="³» ¾ÆÀÌÅÛ Á¤º¸" /></a></li></ul>';
		}
		catch (e)
		{
			//¸ÞÀÎÆäÀÌÁö
		}

		try
		{
			parent.document.getElementById("imgQuickViewMenuBtn").src = RES_AFREECATV + "/item/img_btn/sub_btn_ticket.gif";
		}
		catch (e2)
		{
			//¼­ºêÆäÀÌÁö ÁÂÃø ¸Þ´º
		}

		try
		{
			parent.ChangeTab();
		}
		catch (e3)
		{
			//¾ÆÀÌÅÛ°ü·Ã ÅÇ
		}
	}

	return;
}

// get ¸Þ¼Òµå ÆÄ½ÌÇØ¼­ °¡Á®¿À±â - by ¹Ú±º
function getParam( szFullParam, szParamName)
{
	var szOnlyParam	= szFullParam.substr(1);

	var aOnlyParam	= szOnlyParam.split("&");

	for(i = 0; i < aOnlyParam.length; i++)
	{
		var aParam	= aOnlyParam[i].split("=");
		if( aParam[0] == szParamName)
		{
			return aParam[1];
		}
	}
	return '';
}

// Äüºä, ÇØ¿Ü¾ÆÀÌÅÛ °áÁ¦ ÆË¾÷ - by ¹Ú±º
function openPay(nItemId)
{
    if( !checkPointPm() )
	{
		alert("[¾ÆÇÁ¸®Ä«TV Á¤±âÁ¡°Ë]\nÁö±ÝÀº ¼­ºñ½º Á¡°ËÁßÀÔ´Ï´Ù.\n\n¼­ºñ½º Á¡°Ë½Ã°£\n" + PMSPM_TEXT );
		return;
	}

	Parse_Cookie(document);
	var ticket = Read_Cookie("PdboxTicket");

	if (ticket == null || ticket == "")
	{
		location.href = LOGIN_8100 + "/afreeca/login.php?szFrom=full&request_uri=" + location.href;
	}
	else if( nItemId == 0)
	{
	}
	else
	{
		var szAbroad = Read_Cookie("AbroadChk");
		var szConfirmMsg = "Àá±ñ!\n\n"
					+ "Æí¸®ÇÑ 'Äüºä 30ÀÏ ÀÚµ¿°áÁ¦'¸¦ ÀÌ¿ëÇØº¸¼¼¿ä.\n"
					+ "ÀÏ¹Ý »óÇ°º¸´Ù 10% Àú·ÅÇÑ 3,500¿ø¿¡ Äüºä¸¦ Áñ±æ ¼ö ÀÖ½À´Ï´Ù.\n\n"
					+ " - È®ÀÎ : ÀÚµ¿°áÁ¦ ½ÅÃ»ÇÏ±â(3,500¿ø)\n"
					+ " - Ãë¼Ò : ÀÏ¹Ý Äüºä 30ÀÏ ÀÌ¿ë±Ç ±¸¸ÅÇÏ±â(3,900¿ø)";

		if( nItemId == "463671" || nItemId == "456190" || nItemId == "462911" || nItemId == "462912" || nItemId == "462913" || nItemId == "465007" || nItemId == "465008" || nItemId == "465009" || nItemId == "676752" || nItemId == "676753" || nItemId == "676754" || nItemId == "710392")
		{
			if ( nItemId == "465007" || nItemId == "465008" || nItemId == "465009" )
			{
				window.open("","point","toolbar=0 ,location=0,directories=0,status=0,menubar=0,scrollbars=no,resizable=1,width=436,height=529,top=0,left=0");
				document.formQvs.target = "point";
				document.formQvs.action =  MEMBER_AFREECATV+"/app/ipin_pm.php?szType=qvs&itemid="+nItemId;
				document.formQvs.submit();
			}
			/**** Äüºä ÀÚµ¿°áÁ¦ À¯µµ ¸Þ½ÃÁö ·ÎÁ÷ 20100719 Á¦¿Ü(requester ÀÓ) 			*/
			else if ( nItemId == "462911" && confirm(szConfirmMsg)) // ÄüºäÀÚµ¿°áÁ¦ ÀçÈ®ÀÎ ¾ó·µ
			{
				var pop = window.open( POINT_AFREECATV+"/SetAutoPay.asp?itemcnt=1&paytype=0&itemid=520800" + getAnalysisData(),"point", "toolbar=0 ,location=0,directories=0,status=0,menubar=0,scrollbars=no,resizable=1,width=436,height=529,top=0,left=0");
				pop.focus();
			}
			else
			{
				var pop = window.open( POINT_AFREECATV+"/afreeca_license_check.asp?itemcnt=1&paytype=0&itemid="+nItemId  + getAnalysisData(),"point", "toolbar=0 ,location=0,directories=0,status=0,menubar=0,scrollbars=no,resizable=1,width=436,height=529,top=0,left=0");
				pop.focus();
			}
		}
		else if(nItemId == "520800") // ÄüºäÀÚµ¿°áÁ¦ »óÇ°
		{
			var pop = window.open( POINT_AFREECATV+"/SetAutoPay.asp?itemcnt=1&paytype=0&itemid=" + nItemId + getAnalysisData(),"point", "toolbar=0 ,location=0,directories=0,status=0,menubar=0,scrollbars=no,resizable=1,width=436,height=529,top=0,left=0");
			pop.focus();
		}
		else // ÇØ¿ÜÀÌ¿ëÀÚ´Â ¼ÓµµÃ¼Å© ÆË¾÷
		{
			var pop = window.open( WWW_AFREECATV+"/popup/abroad_speed_test.htm?itemid="+nItemId,"","width=530,height=457");
			pop.focus();
		}
	}
}

// Äüºä ¹«·áÃ¼Çè °áÁ¦ ÆË¾÷	- by ¹Ú±º
function openFree()
{
	Parse_Cookie(document);
	var ticket = Read_Cookie("PdboxTicket");

	if (ticket == null || ticket == "")
	{
		location.href = LOGIN_8100 + "/afreeca/login.php?szFrom=full&request_uri=" + location.href;
	}
	else
	{
		window.open( POINT_AFREECATV+"/afreeca/afreecafreeInsform.asp?itemid=364925","point", "toolbar=0 ,location=0,directories=0,status=0,menubar=0,scrollbars=no,resizable=1,width=436,height=529,top=0,left=0");
	}
}

// À¯·á¼­ºñ½º ÀÌ¿ë¾à°ü ÆË¾÷	- by ¹Ú±º
function popPolicy()
{
	window.open( WWW_AFREECATV+"/popup/pop_pay_policy.htm","point", "toolbar=0 ,location=0,directories=0,status=0,menubar=0,scrollbars=no,resizable=1,width=540,height=650,top=0,left=0");
}

// ÇØ¿ÜÀÌ¿ëÀÚ ¾ÆÀÌÅÛ ¹Ù·Î°¡±â ¸·´Â ½ºÅ©¸³Æ®	- by ¹Ú±º
function Abroad_Alert()
{
	if(location.href == WWW_AFREECATV+"/afreeca_app_main.htm")
	{
		window.open( WWW_AFREECATV+"/abroad.htm",'','');
	}
	else
	{
		location.href = WWW_AFREECATV+"/abroad.htm";
	}
	return;
}

function self_resize()
{
	try
	{
		var bIsSP2 = false;
		var add_sp = 0;
		bIsSP2 = (window.navigator.userAgent.indexOf("SV1") != -1);
		if (bIsSP2)
		{
			// XP SP2 ºê¶ó¿ìÀúÀÓ..
			add_sp = 25;
		}
		else
		{
			add_sp = 0;
		}

		var oBody   = document.body;

		window.resizeTo(oBody.scrollWidth+10,oBody.scrollHeight + (oBody.offsetHeight-oBody.clientHeight)+add_sp  );
	}
	catch(e)
	{
		//Trace("jscript/pop_index.js ¿¡ self_resize()¿À·ù:"+e.description);
	}
}

// vod ½ÇÇà
function playVod( chatting_url,vod_server,vod_filename,broad_title )
{
	Parse_Cookie(document);
	var ticket = Read_Cookie("PdboxTicket");

	if (ticket == null || ticket == "")
	{
		alert("¾ÆÇÁ¸®Ä«TV ¹æ¼Û ½ÃÃ»À» À§ÇØ¼­ ·Î±×ÀÎÀ» ÇØÁÖ½Ê½Ã¿À.");
		if(location.href == LIVE_AFREECATV + "/pg_gen/afreeca_web_main.htm" )
		{
			return;
		}
		else
		{
			Go_Pop_Up_Login();
		}
		return;
	}

	if( Go_Pop_Up_Login() )
	{
		var obj= document.playerform;
		obj.chatting_url.value  = chatting_url;
		obj.vod_server.value    = vod_server;
		obj.vod_filename.value  = vod_filename;
		obj.broad_title.value   = broad_title;
		obj.control.value       = "play_broad";

		obj.action = LIVE_AFREECATV + "/app/index.php";
		obj.target = "common_action_frame";
		obj.submit();
	}
}

// È­¸é °¡·Î Å©±â
function getClientWidth()
{
	var nClientWidth;
	if(self.innerWidth)
	{
		// IE ¿Ü ¸ðµç ºê¶ó¿ìÀú
		nClientWidth = self.innerWidth;
	}
	else if(document.documentElement && document.documentElement.clientWidth)
	{
		// IE 6 ¸¸
		nClientWidth = document.documentElement.clientWidth;
	}
	else if(document.body)
	{
		// IE °è¿­(IE 6 Á¦¿Ü)
		nClientWidth = document.body.clientWidth;
	}

	return nClientWidth;
}

// È­¸é ¼¼·Î Å©±â
function getClientHeight()
{
	var nClientHeight;
	if(self.innerHeight)
	{
		// IE ¿Ü ¸ðµç ºê¶ó¿ìÀú
		nClientHeight = self.innerHeight;
	}
	else if(document.documentElement && document.documentElement.clientHeight)
	{
		// IE 6 ¸¸
		nClientHeight = document.documentElement.clientHeight;
	}
	else if(document.body)
	{
		// IE °è¿­(IE 6 Á¦¿Ü)
		nClientHeight = document.body.clientHeight;
	}

	return nClientHeight;
}

// IE6 ºê¶ó¿ìÀú »ç¿ëÀÚ ·¹ÀÌ¾î ÆË¾÷ »ý¼º(1.0¸¸ º¸ÀÌ±â/°¨Ãß±â)-110906
function chkBrowser(funcName, obj)
{
	if(bLayerPopUp)
	{
		bLayerPopUp = false;
		return false;
	}

	var brVer = navigator.userAgent;
	var brVerId = brVer.indexOf('MSIE');
	var brNum = brVer.substr(brVerId, 8);

	if(brNum == "MSIE 6.0")
	{
		var szHtml = '';
		szHtml += '<div style="position:relative; z-index:109; width:630px; height:560px; background:url('+ RES_AFREECATV +'/images/popup/ie8.gif) left top no-repeat;"><a href="'+ WWW_AFREECATV +' target="_new" title="afreeca" style="width:110px; height:40px; position:absolute; left:26px; top:8px; text-indent:-3000em; ">afreeca</a><a href="#" id="ie8_popup_close" onclick=popupclose("'+funcName+'","'+obj+'"); title="´Ý±â" style="width:42px; height:42px; position:absolute; top:8px; left:570px; text-indent:-3000em; ">´Ý±â</a><a href="http://windows.microsoft.com/ko-KR/internet-explorer/downloads/ie-8" title="explorer8 ¼³Ä¡ÇÏ±â" target="_new" style="width:560px; height:66px; position:absolute; left:35px; top:445px; text-indent:-3000em;">explorer8 ¼³Ä¡ÇÏ±â</a></div>';

		var layerpopup = document.getElementById("layerpopup");
		if(layerpopup != null)
		{
			document.body.removeChild(layerpopup);
		}

		var doc = document.body;
		var el_layerpopup = document.createElement('DIV');

		el_layerpopup.setAttribute("class", "layerpopup");
		el_layerpopup.setAttribute("id", "layerpopup");
		el_layerpopup.setAttribute("align", "center");
		el_layerpopup.style.cssText = "cursor:default; Z-INDEX: 999; LEFT: 0px; POSITION: absolute; TOP: 0px; border: solid;border-color: #dedede; border-width: 2px;";	// ÅÂ±×ÀÇ style °ª ¼³Á¤(¸ðµç ºê¶ó¿ìÀú¿¡ Àû¿ëµÊ)
		el_layerpopup.innerHTML = szHtml;

		doc.appendChild(el_layerpopup);

		// ÆË¾÷ Ãâ·Â À§Ä¡ ¼³Á¤
		var nDivPopupWidth = document.getElementById('layerpopup').clientWidth;
		var nDivPopupHeight = document.getElementById('layerpopup').clientHeight;

		var nLeftMargin = (getClientWidth() - nDivPopupWidth) / 2;
		var nTopMargin = (getClientHeight() - nDivPopupHeight) / 2 + document.body.scrollTop;

		if (nLeftMargin < 0) nLeftMargin = 0;
		if (nTopMargin < 0) nTopMargin = 0;

		document.getElementById('layerpopup').style.marginLeft = nLeftMargin + 'px';
		document.getElementById('layerpopup').style.marginTop = nTopMargin + 'px';

		el_layerpopup.style.display = "";
		return true;
	}
	else
	{
		bLayerPopUp = true;
		return false;
	}
}

// ·¹ÀÌ¾î ÆË¾÷ ´Ý±â-110906
function popupclose(funcName, obj)
{
	var layerpopup = document.getElementById("layerpopup");
	layerpopup.style.display = "none";
	bLayerPopUp = true;

	//alert(funcName+"("+obj+")");
	eval(funcName+"("+obj+")");

	return;
}

// ÇÃ·¹ÀÌ¾î ½ÇÇà (1.0/2.0 °øÅë)
function runPlayer(act,etc)
{
	// IE6 »ç¿ëÀÚ ·¹ÀÌ¾î ÆË¾÷ Ãâ·Â
	if(act == "cast" || act == "app_player")
	{
		var bResult = chkBrowser('runPlayer', "'"+act+"','"+etc+"'");
		if( bResult ) { return; }
	}

	var szUrl = "";
	var szEtc = "";

	if(etc == undefined || etc == null)
	{
		etc = '';
	}

	if( isPossblePlaying() )
	{
		if( act == "cast" )
		{
			var aData = {
					nCaption : 2, // 2 ½ºÆ©µð¿À
                    szCookie : 'PdboxTicket=' + Read_Cookie('PdboxTicket') + '; PdboxUser=' + encodeURIComponent(Read_Cookie('PdboxUser')) + '; PdboxBbs=' + Read_Cookie('PdboxBbs') + '; isBbs=' + Read_Cookie('isBbs') + '; _au=' + Read_Cookie('_au') + '; OAX=' + Read_Cookie('OAX') + ';'
					};
			loadApp(aData);
			return;
		}
		else if( act == "app_player" )
		{
			var aData = {
					nCaption : 1, // 1.0 ÇÃ·¹ÀÌ¾î
					//szBjId : user_id, // ÀÓÀÇ ¾ÆÀÌµð
					//nBroadNo : broad_no, // ÀÓÀÇ ¼ýÀÚ
					//nMultiView : 0,   // ¸ÖÆ¼ ºä °ª
                    szCookie : 'PdboxTicket=' + Read_Cookie('PdboxTicket') + '; PdboxUser=' + encodeURIComponent(Read_Cookie('PdboxUser')) + '; PdboxBbs=' + Read_Cookie('PdboxBbs') + '; isBbs=' + Read_Cookie('isBbs') + '; _au=' + Read_Cookie('_au') + '; OAX=' + Read_Cookie('OAX') + ';'
			};
			loadApp(aData);
			return;
		}
		else
		{
			runFlashPlayer();
			return;
		}
	}
	else
	{
		alert( "½ÇÇàÁßÀÔ´Ï´Ù. Àá½Ã¸¸ ±â´Ù·ÁÁÖ¼¼¿ä. " );
		return;
	}
}

// ½ºÆ©µð¿À ½ÇÇà(af_station ¿ë)
function runPlayer2(act)
{
	// IE6 »ç¿ëÀÚ ·¹ÀÌ¾î ÆË¾÷ Ãâ·Â
	var bResult = chkBrowser('runPlayer2', "'"+act+"'");
	if( bResult ) { return; }

	Parse_Cookie(document);
	var ticket = Read_Cookie("PdboxTicket");

	if (ticket == null || ticket == "")
	{
		if( act == 'cast' )
		{
			alert("¾ÆÇÁ¸®Ä«TV ½ºÆ©µð¿À ½ÇÇàÀ» À§ÇØ¼­ ·Î±×ÀÎÀ» ÇØÁÖ½Ê½Ã¿À.");
			Go_Pop_Up_Login();
		}
		return;
	}

	if(  isPossblePlaying() )
	{
		var aData = {
				nCaption : 2, // 2Àº ½ºÆ©µð¿À¶ó°í °¡Á¤
                szCookie : 'PdboxTicket=' + Read_Cookie('PdboxTicket') + '; PdboxUser=' + encodeURIComponent(Read_Cookie('PdboxUser')) + '; PdboxBbs=' + Read_Cookie('PdboxBbs') + '; isBbs=' + Read_Cookie('isBbs') + '; _au=' + Read_Cookie('_au') + '; OAX=' + Read_Cookie('OAX') + ';'
				};
		loadApp(aData);
		return;
	}
	else
	{
		alert( "½ÇÇàÁßÀÔ´Ï´Ù. Àá½Ã¸¸ ±â´Ù·ÁÁÖ¼¼¿ä" )
		return;
	}
}

// ½Å±Ô ½ºÆ©µð¿À ½ÇÇà
function runNewPlayer(act)
{
	// IE6 »ç¿ëÀÚ ·¹ÀÌ¾î ÆË¾÷ Ãâ·Â
	var bResult = chkBrowser('runNewPlayer', "'"+act+"'");
	if(bResult) { return; }

	Parse_Cookie(document);
	var ticket = Read_Cookie("PdboxTicket");

	if (ticket == null || ticket == "")
	{
		if(act == 'cast')
		{
			alert("¾ÆÇÁ¸®Ä«TV ½ºÆ©µð¿À ½ÇÇàÀ» À§ÇØ¼­ ·Î±×ÀÎÀ» ÇØÁÖ½Ê½Ã¿À.");
			Go_Pop_Up_Login();
		}
		return;
	}

	if(isPossblePlaying())
	{
		var aData = {
				nCaption : 4, // 4 : ´º½ºÆ©µð¿À
				szCookie : 'PdboxTicket=' + Read_Cookie('PdboxTicket') + '; PdboxUser=' + encodeURIComponent(Read_Cookie('PdboxUser')) + '; PdboxBbs=' + Read_Cookie('PdboxBbs') + '; isBbs=' + Read_Cookie('isBbs') + '; _au=' + Read_Cookie('_au') + '; OAX=' + Read_Cookie('OAX') + ';'
				};
		loadApp(aData);
		return;
	}
	else
	{
		alert( "½ÇÇàÁßÀÔ´Ï´Ù. Àá½Ã¸¸ ±â´Ù·ÁÁÖ¼¼¿ä" )
		return;
	}
}

// AVE ½ÇÇà
function runAvaPlayer(act,nUpdate)
{
	// IE6 »ç¿ëÀÚ ·¹ÀÌ¾î ÆË¾÷ Ãâ·Â
	var bResult = chkBrowser('runAvaPlayer', "'"+act+"'");
	if( bResult ) { return; }

	Parse_Cookie(document);
	var ticket = Read_Cookie("PdboxTicket");

	if (ticket == null || ticket == "")
	{
		if( act == 'cast' )
		{
			alert("¾ÆÇÁ¸®Ä«TV AVA ½ÇÇàÀ» À§ÇØ¼­ ·Î±×ÀÎÀ» ÇØÁÖ½Ê½Ã¿À.");
			Go_Pop_Up_Login();
		}
		return;
	}
	//¾÷µ¥ÀÌÆ® ¾ÈµÅ¼­ ´Ù½Ã ½ÇÇàÇÒ¶© ½ÇÇàÁßÀÎ ÇÃ·¹ÀÌ¾î Ã¼Å©ÇÏÁö¾Êµµ·Ï
	if(false == isPossblePlaying() && nUpdate == undefined)
	{
		alert( "½ÇÇàÁßÀÔ´Ï´Ù. Àá½Ã¸¸ ±â´Ù·ÁÁÖ¼¼¿ä" )
		return;
	}
	else
	{
		var aData = {
			nCaption : 9, // AME
			szCookie : 'PdboxTicket=' + Read_Cookie('PdboxTicket') + '; PdboxUser=' + encodeURIComponent(Read_Cookie('PdboxUser')) + '; PdboxBbs=' + Read_Cookie('PdboxBbs') + '; isBbs=' + Read_Cookie('isBbs') + '; _au=' + Read_Cookie('_au') + '; OAX=' + Read_Cookie('OAX') + ';'
		};
		loadApp(aData);
	}
}

// Basecamp ½ÇÇà
function runBasecamp()
{
	// IE6 »ç¿ëÀÚ ·¹ÀÌ¾î ÆË¾÷ Ãâ·Â
	var bResult = chkBrowser('runBasecamp', '');
	if( bResult ) { return; }

	Parse_Cookie(document);
	var ticket = Read_Cookie("PdboxTicket");

	if (ticket == null || ticket == "")
	{
		//alert("¾ÆÇÁ¸®Ä«TV VRÇÃ·¹ÀÌ¾î ½ÇÇàÀ» À§ÇØ¼­ ·Î±×ÀÎÀ» ÇØÁÖ½Ê½Ã¿À.");
		Go_Pop_Up_Login();
		return;
	}

	if(isPossblePlaying())
	{
		var aData = {
			nCaption : 7, // BASECAMP
			szCookie : 'PdboxTicket=' + Read_Cookie('PdboxTicket') + '; PdboxUser=' + encodeURIComponent(Read_Cookie('PdboxUser')) + '; PdboxBbs=' + Read_Cookie('PdboxBbs') + '; isBbs=' + Read_Cookie('isBbs') + '; _au=' + Read_Cookie('_au') + '; OAX=' + Read_Cookie('OAX') + ';'
		};
		loadApp(aData);
	}
	else 
	{
		alert( "½ÇÇàÁßÀÔ´Ï´Ù. Àá½Ã¸¸ ±â´Ù·ÁÁÖ¼¼¿ä" )
		return;
	}
}

function fixBroadCall(uid, bjid, bno, ut, logic) {
	var _url = 'http://ddukbob.'+ DOMAIN +'/api_rin.php?m=rin&t=json&v=1.0&uid=' + uid + '&w=webk&bj=' + bjid + '&bno=' + bno + '&ref=' + uid + '&ut=' + ut + '&logic=' + logic;
	$.ajax({
		url: _url
		, dataType : 'jsonp'
		, success : function(data) {
			//console.log('##### call success.');
			//alert('call success');
		}
		, error : function(data) {
			//call error
			//alert('call error');
		}
	});
}

//¾ÆÇÁ¸®Ä«TV 2.0 ½ÃÃ»ÇÏ±â
function runSvlPlayer(uId, bNo)
{
	playBroad(bNo, 'flash', uId);
	return;
}

//¾ÆÇÁ¸®Ä«TV 3.0 ½ÃÃ»ÇÏ±â(ÇÃ·¡½Ã ÇÃ·¹ÀÌ¾î)
function runFlashPlayer( uId, bNo )
{
	var szOpenUrl = PLAY_AFREECATV;

	if( uId != null && uId != undefined && uId != '' )
	{
		szOpenUrl = PLAY_AFREECATV + "/" + uId;

		if(bNo != null && bNo != undefined && bNo != '')
		{
			szOpenUrl = PLAY_AFREECATV + "/" + uId + "/" + bNo;
		}
	}

	// »ç¾÷ºÎ ¿äÃ»À¸·Î player »õÃ¢À¸·Î ¶ç¿ò
    //top.location.href = szOpenUrl;
    window.open(szOpenUrl,'_blank');

	return;
}

// trim function
function common_trim( szData )
{
	if( typeof(szData) == 'undefined' )
	{
		return szData;
	}
	else
	{
		szData = szData.toString();
		return szData.replace(/^\s+|\s+$/g, "");
	}
}

//¾ÆÇÁ¸®Ä«TV ½ÃÃ»ÇÏ±â
function playBroad(broad_no, act, user_id, keyword)
{
	Parse_Cookie(document);

	// IE6 »ç¿ëÀÚ ·¹ÀÌ¾î ÆË¾÷ Ãâ·Â
	var bResult = chkBrowser('playBroad', "'"+broad_no+"','"+act+"','"+user_id+"'");
	if( bResult ) { return; }

	// ¾ç³¡ °ø¹é Á¦°Å
	broad_no = common_trim(broad_no);
	act = common_trim(act);
	user_id = common_trim(user_id);

	if( act == "app_launch" )
	{
		if(user_id == null || typeof(user_id) == 'undefined' || user_id == '')
		{
			user_id = broad_no;
			broad_no = '';
		}

		var aData = {
				nCaption : 1, // 0Àº ÇÃ·¹ÀÌ¾î¶ó°í °¡Á¤
				szBjId : user_id, // ÀÓÀÇ ¾ÆÀÌµð
				nBroadNo : broad_no, // ÀÓÀÇ ¼ýÀÚ
				nMultiView : 0,   // ¸ÖÆ¼ ºä °ª
				szCookie : 'PdboxTicket=' + Read_Cookie('PdboxTicket') + '; PdboxUser=' + encodeURIComponent(Read_Cookie('PdboxUser')) + '; PdboxBbs=' + Read_Cookie('PdboxBbs') + '; isBbs=' + Read_Cookie('isBbs') + '; _au=' + Read_Cookie('_au') + '; OAX=' + Read_Cookie('OAX') + ';'
		};
		loadApp(aData);
		return;
	}
	else	// act in ( player, svl, flash, serch_byid )
	{
		if( user_id != null && typeof(user_id) != 'undefined' && user_id != '' )
		{
			runFlashPlayer(user_id, broad_no);
		}
		else
		{
			user_id = broad_no;
			runFlashPlayer( user_id );
		}
		return;
	}
}

function loadApp(aData) {
	var szDownUrl = '';
	if (aData['nCaption'] == 1) {
		szDownUrl = AFUPD1_AFREECATV+'/afreeca_installer_p.exe';
	} else if( aData['nCaption'] == 4){
		szDownUrl = AFUPD1_AFREECATV+'/afreeca_installer_s2.exe';
	} else if(aData['nCaption'] == 9){
		szDownUrl = AFUPD1_AFREECATV+'/afreeca_installer_a.exe';
	} else if(aData['nCaption'] == 7){
		szDownUrl = AFUPD1_AFREECATV+'/afreeca_installer_b.exe';
	} else {
		szDownUrl = AFUPD1_AFREECATV+'/afreeca_installer_s.exe';
	}

    // HTTPS ÀÏ °æ¿ì HTTP ÆË¾÷ÂÊÀ¸·Î ½ÇÇàµÇ°Ô ¼öÁ¤
    if (document.location.protocol == 'https:') {
        var szOption = 'location=no, directories=no,resizable=no,status=no,';
        szOption += 'toolbar=no,menubar=no, width=1,height=1,left=0, top=0, scrollbars=no';
        window.open('http:' + RES_AFREECA_NONE_SCHEME + '/player.html?nCaption=' + aData.nCaption, 'popup_player_' + aData.nCaption, szOption);
        return;
    }
    // ´Ð³×ÀÓ º¯°æ½ÃµµÇÒ¶§´Â szCookie¶ó´Â °ªÀÌ ¾ø¾î ¿¡·¯°¡ ¹ß»ýÇÏ¿© ¼öÁ¤ÇÔ
    if (aData['szCookie']) {
    	// ÀÏºÎ·¯ pdboxticket¿¡ cookie_allow_id °ª -1 °ªÀ¸·Î º¯°æÇØ¼­ ³Ö¾îÁÖ±â À§ÇØ(·Î±×ÀÎ À¯Áö ¹ÌÁö¿ø)
	    var aCookieList = aData['szCookie'].split('; ');
	    $.each(aCookieList, function(key, value) {
	        var aCookie = value.split('=');
	        if (aCookie[0] == 'PdboxTicket') {
	            // ticketÀÌ ºñ¾îÀÖÀ¸¸é ¹Ýº¹¹® Á¾·á
	            if (!aCookie[1] || aCookie[1] == 'null') {
	                return false;
	            }

	            $.ajax({
	                type: "POST",
	                url: LOGIN_8100 + "/app/cookieallowchg.php",
	                data: {
	                    'PdboxTicket' : aCookie[1]
	                },
	                async: false,
	                success: function(response) {
	                    aCookie[1] = response;
	                }
	            });
	        }
	        aCookieList[key] = aCookie[0] + '=' + aCookie[1];
	    });
	    aData['szCookie'] = aCookieList.join('; ');
    }

	//IE7¿¡¼­ ¾Æ·¡ ·ÎÁ÷ÀÌ ¸ÔÁö¾Ê¾Æ ¿¹¿Ü Ã³¸®
	if (navigator.userAgent.indexOf("MSIE 7.0") != -1) {
		$.ajax({
			type: "GET",
			url: this.szLocalUrl + '/?_=' + new Date().getTime() + '&callback=?',
			dataType: "jsonp",
			data: aData,
			async: true,
			success: function(response) {
				//¿¹¿Ü Ã³¸®
				if(response.code < 0) {
					var szErrMsg = 'Àá½Ã ÈÄ ´Ù½Ã ½ÃµµÇØº¸½Ã±â ¹Ù¶ø´Ï´Ù.';
					switch(response.code) {
						case -1:
							szErrMsg = "ÇØ´ç BJ°¡ ¹æ¼ÛÁßÀÌÁö ¾Ê½À´Ï´Ù.";
							break;
						case -3:
							szErrMsg  = "¾ÆÇÁ¸®Ä« ¿î¿µ¿øÄ¢ À§¹ÝÀ¸·Î ¼­ºñ½º ÀÌ¿ëÀÌ Á¤Áö µÇ¾ú½À´Ï´Ù." + '\n' +
										"Á¤Áö±â°£ Áß ÁÖ¹Îµî·Ï¹øÈ£ µµ¿ë µîÀ» ÅëÇÑ ÇãÀ§¾ÆÀÌµð »ý¼ºÀ¸·Î µ¿ÀÏÇÑ À§¹ÝÇàÀ§¸¦" + '\n' +
										"ÇÏ½Ç°æ¿ì, Á¦ÀçÁ¶Ä¡¿Í´Â º°µµ·Î °ü·Ã¹ý¿¡ ÀÇ°Å ¹ýÀûÀÎ Ã³¹úÀ» ¹ÞÀ» ¼ö ÀÖ½À´Ï´Ù.";
							break;
					}
					alert(szErrMsg);
				}
				if(response.update == 1 && aData['nCaption'] == 9) {
					setTimeout(function() {
						runAvaPlayer('cast',1);
					}, 3000);
				}
			}, error: function(jqXHR, textStatus, errorThrown)
			{
				//¼³Ä¡ ¸µÅ©
				window.open(szDownUrl);
			}
		});
		return;
	}

	var xdr;
	var url = szLocalUrl + '/?_=' + new Date().getTime() + '&';

	for(key in aData) {
		if(key == 'szCookie') {
			aData[key] = encodeURIComponent(aData[key]);
		}
		url += key + '=' + aData[key] + '&';
	}

	//IE »óÀ§¹öÀü Ã³¸®
	if (window.XDomainRequest) {
		xdr = new XDomainRequest();
		xdr.timeout = 10000;
		xdr.ontimeout = function() {
			window.open( szDownUrl, '_self');
		}
		xdr.onerror = function() {
			window.open( szDownUrl, '_self');
		}
		xdr.onload = function() {
			//¿¹¿Ü Ã³¸®
			var response = $.parseJSON(xdr.responseText);
			if(response.code < 0) {
				var szErrMsg = 'Àá½Ã ÈÄ ´Ù½Ã ½ÃµµÇØº¸½Ã±â ¹Ù¶ø´Ï´Ù.';
				switch(response.code) {
					case -1:
							szErrMsg = "ÇØ´ç BJ°¡ ¹æ¼ÛÁßÀÌÁö ¾Ê½À´Ï´Ù.";
							break;
					case -3:
						szErrMsg  = "¾ÆÇÁ¸®Ä« ¿î¿µ¿øÄ¢ À§¹ÝÀ¸·Î ¼­ºñ½º ÀÌ¿ëÀÌ Á¤Áö µÇ¾ú½À´Ï´Ù." + '\n' +
									"Á¤Áö±â°£ Áß ÁÖ¹Îµî·Ï¹øÈ£ µµ¿ë µîÀ» ÅëÇÑ ÇãÀ§¾ÆÀÌµð »ý¼ºÀ¸·Î µ¿ÀÏÇÑ À§¹ÝÇàÀ§¸¦" + '\n' +
									"ÇÏ½Ç°æ¿ì, Á¦ÀçÁ¶Ä¡¿Í´Â º°µµ·Î °ü·Ã¹ý¿¡ ÀÇ°Å ¹ýÀûÀÎ Ã³¹úÀ» ¹ÞÀ» ¼ö ÀÖ½À´Ï´Ù.";
						break;
				}
				alert(szErrMsg);
			}
			if(response.update == 1 && aData['nCaption'] == 9) {
				setTimeout(function() {
					runAvaPlayer('cast',1);
				}, 3000);
			}
		}
		xdr.onprogress = function() {
		}
		xdr.open("GET", url);
	}
	//Å©·Ò Ã³¸®
	else if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xdr = new XMLHttpRequest();
		xdr.onreadystatechange = function() {
			if (xdr.readyState == XMLHttpRequest.DONE ) {
				if(xdr.status == 200){
					//¿¹¿Ü Ã³¸®
					var response = $.parseJSON(xdr.responseText);
					if(response.code < 0) {
						var szErrMsg = 'Àá½Ã ÈÄ ´Ù½Ã ½ÃµµÇØº¸½Ã±â ¹Ù¶ø´Ï´Ù.';
						switch(response.code) {
							case -1:
								szErrMsg = "ÇØ´ç BJ°¡ ¹æ¼ÛÁßÀÌÁö ¾Ê½À´Ï´Ù.";
								break;
							case -3:
								szErrMsg  = "¾ÆÇÁ¸®Ä« ¿î¿µ¿øÄ¢ À§¹ÝÀ¸·Î ¼­ºñ½º ÀÌ¿ëÀÌ Á¤Áö µÇ¾ú½À´Ï´Ù." + '\n' +
											"Á¤Áö±â°£ Áß ÁÖ¹Îµî·Ï¹øÈ£ µµ¿ë µîÀ» ÅëÇÑ ÇãÀ§¾ÆÀÌµð »ý¼ºÀ¸·Î µ¿ÀÏÇÑ À§¹ÝÇàÀ§¸¦" + '\n' +
											"ÇÏ½Ç°æ¿ì, Á¦ÀçÁ¶Ä¡¿Í´Â º°µµ·Î °ü·Ã¹ý¿¡ ÀÇ°Å ¹ýÀûÀÎ Ã³¹úÀ» ¹ÞÀ» ¼ö ÀÖ½À´Ï´Ù.";
								break;
						}
						alert(szErrMsg);
					}
					if(response.update == 1 && aData['nCaption'] == 9) {
						setTimeout(function() {
							runAvaPlayer('cast',1);
						}, 3000);
					}
				}
				else {
					window.open( szDownUrl, '_self');
				}
			}
		}
		xdr.open("GET", url, true);
	}
	else {
		//console.log('not work');
		return;
	}

	try{
		xdr.send();
	} catch (e) {
		//console.log('send catch :: ' + e.message);
	}
}

//¾ÆÇÁ¸®Ä«TV 1.0 ¼ºÀÎ¹æ ½ÃÃ»ÇÏ±â
function playAdultBroad(broad_no, act, user_id)
{
	playBroad(broad_no, act, user_id);
}

// °ÔÀÓTV ÇÃ·¯±×ÀÎ ¼³Ä¡¾È³»
function showPluginInstall()
{
	try{
		var bIsInstalled = false;
		if( BrowserCheck() == "" )
		{
			var aPlugins = navigator.plugins;

			for(var i=0; i<aPlugins.length; i++)
			{
				if(aPlugins[i].name.indexOf('AFCStarter') > -1)
				{
					bIsInstalled = true;
					break;
				}
			}

			if(bIsInstalled)
			{
				document.getElementById("afcPluginInfoDiv").innerHTML = '';
			}
			else
			{
				printPluginInfo(AFUPD1_AFREECATV + '/AFC/AFCUpdater.exe', 'Install');
			}
		}
	}catch(e)
	{
	}
}

//ÇÃ·¯±×ÀÎ ¼³Ä¡ ¾È³»
function printPluginInfo(plink, type)
{
	var szHtml = '';
	//¾ÆÇÁ¸®Ä«TV ¸ÞÀÎ¿¡¼­
	if(type != "SeeAfreeca")
	{
		szHtml = '<div class="layer_plugin">';
	}
	else//°³ÀÎ¹æ¼Û±¹¿¡¼­
	{
		szHtml = '<div class="layer_plugin mybs_position">';
	}

	szHtml = '<div class="layer_plugin">';

	szHtml += '<p class="blind">ÆÄÀÌ¾îÆø½º, Å©·Ò, »çÆÄ¸®, ¿ÀÆä¶ó ºê¶ó¿ìÀú¿¡¼­<br /> ¿øÈ°ÇÑ ÀÌ¿ëÀ» À§ÇØ ÇÃ·¯±×ÀÎ ¼³Ä¡°¡ ÇÊ¿äÇÕ´Ï´Ù.</p>'
			+ '<a href="' + plink + '" class="plugin" title="ÇÃ·¯±×ÀÎ ¼³Ä¡ÇÏ±â">ÇÃ·¯±×ÀÎ ¼³Ä¡ÇÏ±â</a>'
			+ '<a href="javascript:closePluginInfo();" class="layer_close1" title="´Ý±â">´Ý±â</a>';

	szHtml += '</div>';
	try
	{
		document.getElementById('afcPluginInfoDiv').innerHTML = szHtml;
		try{
			document.getElementById('afcPluginLayer').style.display = 'block';
		}catch (e2){}
		return true;
	}
	catch(e)
	{
		//alert(e);
		return false;
	}
}

//ÇÃ·¯±×ÀÎ ¼³Ä¡ ´Ý±â
function closePluginInfo()
{
	document.getElementById('afcPluginInfoDiv').innerHTML = '';
	try{
		document.getElementById('afcPluginLayer').style.display = 'none';
	}catch (e){}
}
// ¸ÞÀÎ °³Æí ÀÌÈÄ Áñ°ÜÃ£±â Ãß°¡
function Add_Favorite(szId)
{
	Parse_Cookie(document);
	var ticket = Read_Cookie("PdboxTicket");

	if (ticket == null || ticket == "")
	{
		alert("Áñ°ÜÃ£±â Ãß°¡¸¦ À§ÇØ¼­ ·Î±×ÀÎ ÇØÁÖ¼¼¿ä. ");
		return;
	}

	var szUserId = Read_Cookie("PdboxBbs");
	makeIframe( LIVE_AFREECATV + "/afreeca/favorite_api.php?szWork=ADD&favorite=" + szId + "&szBjId=" + szUserId );
}
// ¸ÞÀÎ °³Æí ÀÌÈÄ Áñ°ÜÃ£±â Ãß°¡
function Add_Favorite_station(szId)
{
	Parse_Cookie(document);
	var ticket = Read_Cookie("PdboxTicket");

	if (ticket == null || ticket == "")
	{
		Go_Pop_Up_Login();
		return;
	}

	var szUserId = Read_Cookie("PdboxBbs");
	makeIframe( LIVE_AFREECATV+"/afreeca/favorite_api.php?szWork=ADD&favorite=" + szId + "&szBjId=" + szUserId );
}

// ¸ÞÀÎ°³Æí ÀÌÈÄ Äüºä º¸À¯¿©ºÎ Ç¥½Ã
function dispItme()
{
	try
	{
		eval( objItem );

		Parse_Cookie(document);
		var szAbroad = Read_Cookie("AbroadChk");

		var nIsItem = objItem["isItem"];
		var szDetail = objItem["detail"][0];

		var szWhich = "quickview";
		var szItemName = "Äüºä ";
		var szAltText	= "±¸¸Å";
		var szUrl = WWW_AFREECATV+"/quickview.htm";
		var szItemImg = RES_AFREECATV+"/images/main/login_a_btn03.gif";

		if( szAbroad == "OK" )		// ÇØ¿Ü ÀÌ¿ëÀÚ
		{
			szWhich = "abroad";
			szItemName = "ÇØ¿ÜÀÌ¿ëÀÚ ÀÔÀå±Ç";
			szUrl = WWW_AFREECATV+"/abroad.htm";

			if( nIsItem > 0 && szDetail == "ABROAD")		// º¸À¯ ¾ÆÀÌÅÛ ÀÖÀ» °æ¿ì
			{
				szItemImg = RES_AFREECATV+"/images/main/btn_on.gif";
				szAltText = "Äüºäon";
			}
		}
		else
		{
			if( nIsItem > 0 )		// º¸À¯ ¾ÆÀÌÅÛ ÀÖÀ» °æ¿ì
			{
				szWhich = "my";
				szUrl = POINT_AFREECATV+"/report/afreecauselist.asp";
				szItemImg = RES_AFREECATV+"/images/main/btn_on.gif";
				szAltText = "Äüºäon";
			}
		}

		document.getElementById("spnItemName").innerHTML = '<a href="#point" class="quickv" onclick="javascript:goPoint(\'' + szWhich + '\');">' + szItemName + '</a>';
		document.getElementById("spnItemImg").innerHTML = '<a href="#point" onclick="javascript:goPoint(\'' + szWhich + '\');"><img src="' + szItemImg + '" alt="'+ szAltText +'" border="0"></a>';
	}
	catch (e)
	{
	}
}

// ¸µÅ© ¿­±â
function openLink(url, target)
{
	if( target == "_blank" || target == 1 )
	{
		Pop_Open3(url, 'openLink', 'toolbar=yes,menubar=yes,location=yes,resizable=yes,scrollbars=yes');
	}
	else
	{
		location.href = url;
	}
}

// ¾ÆÀÌÇÁ·¹ÀÓ µ¿Àû »ý¼º
function makeIframe( szUrl )
{
	var iframe = document.createElement('iframe');

	iframe.style.width = '50';
	iframe.style.height = '0';
	iframe.setAttribute('src', szUrl);
	iframe.setAttribute('frameborder','0');

	document.getElementsByTagName('body').item(0).appendChild(iframe);
}

// ºê¶ó¿ìÀú ¹öÁ¯ Ã¼Å©
function checkBrowserVersion()
{
	if (new RegExp(/EDGE/).test(navigator.userAgent.toUpperCase())){
		return "EG";
	}else if(new RegExp(/Firefox/).test(navigator.userAgent)){
		return "FF";
	}else if(new RegExp(/Netscape/).test(navigator.userAgent)){
		return "NC";
	}else if(new RegExp(/MSIE/).test(navigator.userAgent)){
		return "IE";
	}
}

/**
 * @brief   GNB ¿µ¿ª °Ë»ö Å¸ÀÌÆ² ¼³Á¤
 */
function setSearchData( nValue, oTitle, oSearchType, oSearchList )
{
	var szTitle = "";

	if(nValue == "broad")	{ szTitle = "»ý¹æ¼Û"; }
	else if(nValue == "vod") { szTitle = "µ¿¿µ»ó"; }
	else if(nValue == "bj") { szTitle = "BJ"; }

	try
	{
		oTitle.innerHTML = szTitle;
		oSearchType.value = nValue;
		szSearchType.value = nValue;
	}
	catch (e)
	{
	}

	oSearchList.style.display = 'none';
}

/**
 * @brief	GNB ¿µ¿ª °Ë»ö¸Þ´º ¼³Á¤
 */
function setSearchMenu( oSearchList )
{
	try
	{
		var szDisp = (oSearchList.style.display == "block") ? "none" : "block";
		oSearchList.style.display = szDisp;
	}
	catch (e)
	{
	}
}

/** ¸ÞÀÎ, ¼­ºêÆäÀÌÁö °Ë»ö Ã¼Å©
*	2012-11-07 °Ë»ö°³ÆíÀ¸·Î ÀÎÇØ ¼öÁ¤µÊ. jhyun
*	¾È¾µµí...
*	2020-07-07 szHiddenKeyword ·ÎÁ÷ »èÁ¦. hyuk
*/
function checkSearch()
{
	var oForm = document.oSearchForm;
	
	$('form[name=oSearchForm]').attr("action", WWW_AFREECATV +"/total_search.html").submit();
	return false;
}

// Æ¯¼ö¹®ÀÚ Á¦°Å
function isSpecial(szText)
{
	var szSpecial = /\+|\[|\&|\*|\(|\)|\+|\?|\#|\%/g;
	if(szSpecial.exec( szText))
	{
		return true;
	}
	return false;
}

// Æ¯¼ö¹®ÀÚ Á¦°Å2
function isSpecial2(szText, szSpecial)
{
	if(szSpecial.exec( szText))
	{
		return true;
	}
	return false;
}

// Æ¯¼ö¹®ÀÚ Á¦°Å
function removeSpecialSymbol(str) {
	var reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi
  //Æ¯¼ö¹®ÀÚ °ËÁõ
	if(reg.test(str)){
		//Æ¯¼ö¹®ÀÚ Á¦°ÅÈÄ ¸®ÅÏ
		return str.replace(reg, "");    
	} else {
		//Æ¯¼ö¹®ÀÚ°¡ ¾øÀ¸¹Ç·Î º»·¡ ¹®ÀÚ ¸®ÅÏ
		return str;
	}  
}


// ¹®ÀÚ¿­À» Á¤ÇØÁø byte¼ö¸¸Å­ Àß¶ó³¿
function getByteLength( szMsg, nMaxLen )
{
	try
	{
		var nBytes = 0;
		var str = szMsg.substring(0);

		if( str == null )
			return 0;

		for(var i=0; i<str.length; i++)
		{
			var nAsc = str.charCodeAt(i);

			if ( (nAsc > 0)  && (nAsc < 256) && (nAsc != '\r'))
				nBytes += 1;
			else
				nBytes += 2;

			if( nBytes > nMaxLen )	// Çã¿ë ¼ö¸¦ ³Ñ¾î¼­¸é
			{
				str = str.substr(0,i) + "..";
				break;
			}
		}
	}
	catch(e)
	{
	}
	return str;
}

// js ÆÄÀÏ µ¿Àû ·Îµù
function include_js(file, callBackFunction, szId, callBackParam )
{
	try
	{
		var html_doc = document.getElementsByTagName('head')[0];
		//id°ª Ãß°¡ by mino 2009-03-24
		if(!szId || szId == 'undefined' || szId == null)
		{
			szId = 'json';
		}
		var removeTarget = document.getElementById(szId);
		if(removeTarget != 'undefined' && removeTarget!=null)
		{
			html_doc.removeChild( removeTarget );
		}
		//ÄÝ¹é ÆÄ¶ó¹ÌÅÍ Ãß°¡
		if( callBackParam == 'undefined' || callBackParam == null )
		{
			callBackParam = '';
		}

		js = document.createElement('script');
		js.setAttribute('type', 'text/javascript');
		js.setAttribute('charset', 'euc-kr');
		js.setAttribute('id', szId);
		js.setAttribute('src', file);

		js.onloadDone = false;

		html_doc.appendChild(js);

		// Fires in IE, also modified the test to cover both states
		js.onreadystatechange = function () {
			if (/complete|loaded/.test(js.readyState) && !js.onloadDone ) {
				if( callBackFunction != null && callBackFunction != undefined )
				{
					js.onloadDone = true;
					callBackFunction( callBackParam );
				}
			}
		}
		// Fires in FF
		js.onload = function () {
			if( callBackFunction != null && callBackFunction != undefined && !js.onloadDone )
			{
				js.onloadDone = true;
				callBackFunction( callBackParam );
			}
		}
		return false;
	}
	catch (e)
	{
	}
}

// js ÆÄÀÏ µ¿Àû ÀÎÅ¬·çµå ¿Ï·á ÈÄ »èÁ¦
function remove_js(szId)
{
	try
	{
		var html_doc = document.getElementsByTagName('head')[0];
		if(!szId || szId == 'undefined' || szId == null)
		{
			szId = 'json';
		}
		var removeTarget = document.getElementById(szId);
		if(removeTarget != 'undefined' && removeTarget!=null)
		{
			html_doc.removeChild( removeTarget );
		}
		removeTarget = null;
	}
	catch (e)
	{
	}
}

// ¼ÓµµÃ¼Å©
function Print_Ocx()
{
	document.write("<OBJECT id='AfSpeedCheck' style='WIDTH:0px; HEIGHT:15px' CODEBASE='" + WWW_AFREECATV + "/ocx/AfSpeedCheck.cab#version=1,0,1,4' CLASSID=CLSID:0AE0F5F9-8233-49A4-A3C8-004CE190787B NAME='SpeedCheck'></OBJECT>");
}

// URL º¹»ç
function copyCurUrl( szUrl )
{
	try
	{
		var bResult = false;

		if( window.clipboardData )		// IE
		{
			bResult = window.clipboardData.setData("Text", szUrl);
		}
		else
		{
			prompt("ÀÌ ±ÛÀÇ Æ®·¢¹é ÁÖ¼ÒÀÔ´Ï´Ù. Ctrl+C¸¦ ´­·¯ Å¬¸³º¸µå·Î º¹»çÇÏ¼¼¿ä", szUrl);
			return;
		}

		if( bResult == true)
		{
			alert("°Ô½Ã¹° ÁÖ¼Ò°¡ º¹»çµÇ¾ú½À´Ï´Ù.\nCtrl+V ·Î ºÙ¿©³Ö±â ÇÒ ¼ö ÀÖ½À´Ï´Ù.");
			return;
		}
	}
	catch (e)
	{
		alert( e.description );
	}
}

/**
   * @brief  StringBuffer »ç¿ë
   * @author	jwizard
   **/
var StringBuffer = function()
{
	this.buffer = new Array() ;
}

StringBuffer.prototype.append = function(str)
{
	this.buffer[this.buffer.length] = str ;
}

StringBuffer.prototype.toString = function()
{
	return this.buffer.join("") ;
}

function goFramePage( szUrl )
{
	try
	{
		top.location.href = szUrl;
	}
	catch (e)
	{
		location.href = szUrl;
	}
}

var $A = function(iterable) {
  if (!iterable) return [];
  if (iterable.toArray) {
    return iterable.toArray();
  } else {
    var results = [];
    for (var i = 0; i < iterable.length; i++)
      results.push(iterable[i]);
    return results;
  }
}

if (!Function.prototype.bind) {
  Function.prototype.bind = function() {
   try{
    var __method = this, args = $A(arguments),object = args.shift();
    return function() {
      return __method.apply(object, args.concat($A(arguments)));
    }
   }catch(e){alert(e.message)}
  }
}
/**
  *	@brief ÇöÀç½Ã°£ yyyymmdd ÇüÅÂ·Î ¸®ÅÏ
  */
function getNowDate()
{
	var szDate = new Date();

	var szYear = szDate.getFullYear();
	var szMonth =  ((szDate.getMonth()+1 < 10)?"0":"")+(szDate.getMonth()+1);
	var szDay = ((szDate.getDate() < 10)?"0":"")+szDate.getDate();
	var szHours = ((szDate.getHours() < 10)?"0":"")+szDate.getHours();
	var szMinutes = ((szDate.getMinutes() < 10)?"0":"")+szDate.getMinutes();

	var szNowTm = String(szYear)+String(szMonth)+String(szDay)+String(szHours)+String(szMinutes);

	return szNowTm ;
}

/**
  *	@brief ³¯Â¥°ª °è»ê
  */
//addDate('20110503','year',3); //3³â ÈÄ ³¯Â¥ ¹ÝÈ¯
//addDate('20110503','month',5); //5°³¿ù ÈÄ ³¯Â¥ ¹ÝÈ¯
//addDate('20110503','day',30);  //30ÀÏ ÈÄ ³¯Â¥ ¹ÝÈ¯
//addDate('20110503000000','hour',16); //16½Ã°£ ÈÄ ³¯Â¥ ¹ÝÈ¯
//addDate('20110503000000','minute',80); //80ºÐ ÈÄ ³¯Â¥ ¹ÝÈ¯
//addDate('20110503000000','second',100); //100ÃÊ ÈÄ ³¯Â¥ ¹ÝÈ¯

function addDate(date, flag, cnt)
{
	date += "";
	flag = flag.toLowerCase();
	var year = date.substring(0,4);
	var month = Number(date.substring(4,6))-1;
	var day = date.substring(6,8);
	var hour = "";
	var minute = "";
	var second = "";

	if(date.length >= 10) hour = date.substring(8,10);
	if(date.length >= 12) minute = date.substring(10,12);
	if(date.length == 14) second = date.substring(12,14);

	date = date.length == 14 ? new Date(year, month, day, hour, minute, second).getTime() : new Date(year, month, day).getTime();

	if(flag == "year") date += 1000 * 60 * 60 * 24 * 365 * cnt;
	else if(flag == "month") date += 1000 * 60 * 60 * 24 * 30 * cnt;
	else if(flag == "day") date += 1000 * 60 * 60 * 24 * cnt;
	else if(flag == "hour") date += 1000 * 60 * 60 * cnt;
	else if(flag == "minute") date += 1000 * 60 * cnt;
	else if(flag == "second") date += 1000 * cnt;

	var d = new Date(date);
	year = d.getFullYear();
	month = d.getMonth()+1 < 10 ? "0" + (d.getMonth()+1) : d.getMonth()+1;
	day = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
	hour = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
	minute = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
	second = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();

	return year + "" + month + day + hour + minute + second;
}

/**
  *	@brief ¿äÀÏ ±¸ÇÏ±â ³¯Â¥°ª °è»ê
  */
//getWeekday(20121217); //3³â ÈÄ ³¯Â¥ ¹ÝÈ¯
function getWeekday(sDate) {

	var yy = parseInt(sDate.substr(0,4), 10);
	var mm = parseInt(sDate.substr(4,2), 10);
	var dd = parseInt(sDate.substr(6,2), 10);

	var d = new Date(yy,mm - 1, dd);
	var weekday=new Array(7);
	weekday[0]="ÀÏ";
	weekday[1]="¿ù";
	weekday[2]="È­";
	weekday[3]="¼ö";
	weekday[4]="¸ñ";
	weekday[5]="±Ý";
	weekday[6]="Åä";

	return weekday[d.getDay()];
}

function setPng24(obj)
{
	obj.width=obj.height=1;
	obj.className=obj.className.replace(/\bpng24\b/i,'');
	obj.style.filter =
	"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+ obj.src +"',sizingMethod='image');"
	obj.src='';
	return '';
}

/**
  *	@brief Form °´Ã¼ Ãß°¡
  */
function createForm(name, action,target, method)
{
	var form = document.createElement("form");

	form.setAttribute("name", name);
	form.setAttribute("action", action);
	form.setAttribute("target", target);
	form.setAttribute("method", method);

	return form;
}

/**
  *	@brief element °´Ã¼ Ãß°¡ (hidden)
  */
function insertInput(form, name, value)
{
	var input = document.createElement("input");

	input.setAttribute("type", "hidden");
	input.setAttribute("name", name);
	input.setAttribute("value", value);
	form.appendChild(input);

	return form;
}

function leadingZeros (n, digits)
{
	var zero = '';
	n = n.toString();

	if (n.length < digits) {
		for (i = 0; i < digits - n.length; i++)
			zero += '0';
	}
	return zero + n;
}

function getTimeStamp ()
{
	var d = new Date();
	var s =
		this.leadingZeros(d.getFullYear(), 4) + '-' +
		this.leadingZeros(d.getMonth() + 1, 2) + '-' +
		this.leadingZeros(d.getDate(), 2) + ' ' +

		this.leadingZeros(d.getHours(), 2) + ':' +
		this.leadingZeros(d.getMinutes(), 2) + ':' +
		this.leadingZeros(d.getSeconds(), 2);

	return s;
}

function getReferer()
{
	var szReferer = '';

	try {
		szReferer = document.referrer != '' ? document.referrer : opener.location.href;
	} catch (e) {}

	return szReferer;
}

// gnb_global 
if (typeof checkDarkModeApply == "undefined") 
{
	function checkDarkModeApply() {
		var tempLocale = szLocale || "ko";
		var aBodyClassNames = document.body.className.split(" ");
		var nIdxDarkMode = aBodyClassNames.indexOf("thema_dark");
		var bDarkMode = nIdxDarkMode > -1;

		if (getCookie('theme') == 'dark' && tempLocale == "ko") {
			if (!bDarkMode) {
				aBodyClassNames.push("thema_dark");
			}
		} else {
			if (bDarkMode) {
				aBodyClassNames.splice(nIdxDarkMode, 1);	
			}
		}

		document.body.className = aBodyClassNames.join(" ");
	}
} 

function getCookie(name)
{
	var srch = name + '=';
	if (document.cookie.length > 0)
	{
		offset = document.cookie.indexOf(srch);
		if (offset != -1)
		{
			offset += srch.length;
			end = document.cookie.indexOf(';', offset);
			if (end == -1)
				end = document.cookie.length;
			return unescape(document.cookie.substring(offset, end));
		} else return false;
	} else return false;
}

function callAU(szAction)
{
	var szProtocol = document.location.protocol;

	if(szProtocol == "http:" || szProtocol == "https:")
	{
		window.szLogAction = szAction;
		//window.performance = ;
		include_js('//analysis.afreecatv.com/_au.js', onLoadCallAu);
	}
}

function callAuBanner(szAction,szBannerDescription)
{
	var szProtocol = document.location.protocol;

	if(szProtocol == "http:" || szProtocol == "https:")
	{
		window.szLogAction = szAction;
		window.szBannerDescription = szBannerDescription;
		include_js('//analysis.afreecatv.com/_au.js', onLoadCallAu);
	}
}

function onLoadCallAu()
{
	window.szLogAction = '';
}

function callAnalytics()
{
	var szProtocol = document.location.protocol;
	if(szProtocol == "http:" || szProtocol == "https:")
	{
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		ga('create', 'UA-44889037-1', 'auto');
		ga('send', 'pageview');
	}
}

function strip_tags(input, allowed) {
	try {
	input = input.replace(/ /g, '');	//°ø¹éÁ¦°Å
	allowed = (((allowed || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join(''); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
	var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
			commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
	}catch(err) {}
	return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
		return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
	});
}

// Regexp check data
function setRegData( szData )
{
	if( typeof(szData) == 'undefined' )
	{
		return '';
	}

	szData = szData.replace('[', '\\[');
	szData = szData.replace(']', '\\]');
	szData = szData.replace('(', '\\(');
	szData = szData.replace(')', '\\)');

	return szData;
}

function stationPmAlertMsg()
{
	alert('°³ÀÎ¹æ¼Û±¹ °Ô½ÃÆÇ °³ÆíÀ» À§ÇÑ ¼­ºñ½º Á¡°Ë ÁßÀÔ´Ï´Ù.\n(8/9 ¿ÀÈÄ 17:30~ 8/10 ¿ÀÀü 08:00)Á¡°Ë ½Ã°£ µ¿¾È º» ¼­ºñ½º »ç¿ëÀÌ Áß´ÜµË´Ï´Ù.\nÀÌ¿ë¿¡ ºÒÆíÀ» µå·Á¼­ ÁË¼ÛÇÕ´Ï´Ù. Á¡°Ë ÈÄ ´õ ³ªÀº ¼­ºñ½º·Î Ã£¾ÆºË°Ú½À´Ï´Ù.');
	return;
}

function getFilterParam(szFullParam, szParamName)
{
    if (szFullParam.indexOf('?') >= 0) {
        var aTempFullParam = szFullParam.split('?');
        if (typeof(aTempFullParam[1]) != 'undefined') {
            szFullParam = aTempFullParam[1];
        }
    }

    var aFullParam = szFullParam.split("&");
    for (var i=0; i<aFullParam.length; i++) {
        if (aFullParam[i].indexOf('=') > 0) {
            var szQuery = aFullParam[i].split('=');
            if (szQuery[0] == szParamName) {
                return szQuery[1];
            }
        }
    }
	return '';
}

function getAnalysisData()
{
    var szReturnData = '';
    var szData = top.location.href;
    szReturnData += (getFilterParam(szData, 'sys_type') != '') ? '&sys_type=' + getFilterParam(szData, 'sys_type') : '';
    szReturnData += (getFilterParam(szData, 'location') != '') ? '&location=' + getFilterParam(szData, 'location') : '';
    szReturnData += (getFilterParam(szData, 'broad_no') != '') ? '&broad_no=' + getFilterParam(szData, 'broad_no') : '';
    szReturnData += (getFilterParam(szData, 'title_no') != '') ? '&title_no=' + getFilterParam(szData, 'title_no') : '';

    return szReturnData;
}

// disableScroll
function disableScroll() {
	$(document).on("mousewheel.disableScroll DOMMouseScroll.disableScroll touchmove.disableScroll", function(e) {
		e.preventDefault();
		return;
	});
	$(document).on("keydown.disableScroll", function(e) {
		var eventKeyArray = [32, 33, 34, 35, 36, 37, 38, 39, 40];
		for (var i = 0; i < eventKeyArray.length; i++) {
			if (e.keyCode === eventKeyArray [i]) {
				e.preventDefault();
				return;
			}
		}
	});
}

// ÅëÇÕ°Ë»ö ÆäÀÌÁö ÀÌµ¿
function goTotalSearch(szSetKeyword, szTarget, szSetStype)
{
    if (szSetKeyword == undefined || szSetKeyword == '') {
        return false;
    }
    if (szTarget == undefined) {
        szTarget = '_blank';
    }

    // °Ë»ö½Ã ÇÊ¿äÇÑ ÀÎÀÚ°ª di(Á÷Á¢), rc(ÃßÃµ), ac(ÀÚµ¿), rt(¿¬°ü), bn(¹è³Ê)
    if (szSetStype == undefined || szSetStype == '') {
        szSetStype = 'di';
    }
    var szSetKeywordhidden = encodeURIComponent(szSetKeyword);
    var szFormName = 'form_search';

    var aHtml = [];

    aHtml.push('<form name="' + szFormName + '" id="' + szFormName + '">');
    aHtml.push('<input type="hidden" id="szSearchType" name="szSearchType" value="total"/>');
    aHtml.push('<input type="hidden" name="szStype" value="' + szSetStype + '"/>');
    aHtml.push('<input type="text" id="szKeyword" name="szKeyword" autocomplete="off" value="' + szSetKeyword + '"/>');
    aHtml.push('<input type="hidden" id="szKeywordhidden" name="szKeywordhidden" value="' + szSetKeywordhidden + '"/>');
    aHtml.push('</form>');

    var szSearchUrl = WWW_AFREECATV + '/total_search.html';

    // jquery »ç¿ëÇÏÁö °æ¿ì
    if (typeof($.find) != 'function') {
        var oSearchElement = document.getElementById(szFormName);
        if (oSearchElement != null) {
            oSearchElement.parentNode.remove(oSearchElement);
        }

        var oDiv = document.createElement('DIV');
        oDiv.setAttribute('id', 'div_' + szFormName);
        document.body.appendChild(oDiv);

        var oDivSearchElement = document.getElementById('div_' + szFormName);
        oDivSearchElement.innerHTML = aHtml.join('');

        var oFormDoc = document[szFormName];
        if (oFormDoc != undefined || oFormDoc != null) {
			oFormDoc.action = szSearchUrl;
			oFormDoc.method = 'post';
            
            if (szTarget != '') {
                oFormDoc.target = szTarget;
            }
            oFormDoc.submit();
        }
    } else {
        $('html body').find('#' + szFormName).remove();
        $('html body').append(aHtml.join(''));

        $('#' + szFormName).attr('action', szSearchUrl);
        $('#' + szFormName).attr('method', 'post');
        if (szTarget != '') {
            $('#' + szFormName).attr('target', szTarget);
        }
        $('#' + szFormName).submit();
    }

    return true;
}

// enableScroll
function enableScroll() {
	$(document).off(".disableScroll");
}

function checkSimple(szPageName, szObjectName){
	if(szPageName == "" || szObjectName == ""){
		if(typeof oSimplePage === 'undefined' || typeof oSimplePage["is_simple"] === 'undefined' || oSimplePage["is_simple"]==0){
			return true;
		}else{
			return false;
		}
	}else{
		if(typeof oSimplePage === 'undefined' || typeof oSimplePage["is_simple"] === 'undefined' || oSimplePage["is_simple"]==0
			|| typeof oSimplePage[szPageName] === 'undefined' || typeof oSimplePage[szPageName][szObjectName] === 'undefined'
			|| oSimplePage[szPageName][szObjectName] ==0){
			return true;
		}else{
			return false;
		}
	}
}


//onload °´Ã¼ °¡Á®¿Í¼­ ÀÖÀ¸¸é ±×°É ÇÔ¼ö·Î ¸¸µé¾î¼­ °°ÀÌ Ã³¸®
//¾øÀ¸¸é ·Î±× È£Ãâ¸¸ Ã³¸®ÇØÁÜ
var oldonload = window.onload;

if(typeof window.onload != 'function'){
	window.onload = function(){
		callAU(window.szLogAction || '');
	};
}else{
	window.onload = function(){
		oldonload();
		callAU(window.szLogAction || '');
	};
}

function getTransferImageSSL(szSetText)
{
    var szResultText = szSetText;
    var szCheckImageUrl = '';
    var szImageUrlNoneScheme = '';
    
    szResultText.replace(/((https?|ssh|ftp):\/\/|\/\/)[^\s]+/ig, function(szImageUrl) {
        if (!szImageUrl.match(/(\.jpg)|(\.jpeg)|(\.png)|(\.gif)|(\.bmp)|(videoimg.afreecatv.com)|(videoimg-test.afreecatv.com)/gi)) {
           return true;
        }
        
        // °ã/È¬ µû¿ÈÇ¥·Î ÇÊÅÍµÈ ºÎºÐÀº Á¦°Å
        szImageUrl = szImageUrl.replace('&quot;', '');
        szImageUrl = szImageUrl.replace('&quot', '');
        szImageUrl = szImageUrl.replace('&#039;', '');
        szImageUrl = szImageUrl.replace('&#039', '');
        szImageUrl = szImageUrl.replace('&nbsp;', '');
        szImageUrl = szImageUrl.replace('&nbsp', '');
        szImageUrl = szImageUrl.replace('"', '');
        szImageUrl = szImageUrl.replace('\'', '');
        
        /* ¾Æ·¡ ·ÎÁ÷ ¿¹½Ã
        szFileExtension = '.jpg';
        aFileExtension = szImageUrl.match(/(\.jpg.*)/gi);
        if (aFileExtension != null) {
            szFileExtension = aFileExtension[0];
        }
        szImageUrl = szImageUrl.replace(/(\.jpg.*)/gi, szFileExtension);
        */
        var aFileExtension = null;
        var szFileExtension = '';
        var aCheckFileExtension = ['(\.jpg.*)', '(.jpeg.*)', '(.png.*)', '(.gif.*)', '(.bmp.*)'];
        for (var i=0; i<aCheckFileExtension.length; i++) {
            var oCheckRegexp = new RegExp(aCheckFileExtension[i], 'gi');
            aFileExtension = szImageUrl.match(oCheckRegexp);
            if (aFileExtension != null) {
                aCheckFileExtension[i] = aFileExtension[0];
            }
            szImageUrl = szImageUrl.replace(oCheckRegexp, aCheckFileExtension[i]);
        }
        
        szCheckImageUrl = szImageUrl.replace('afreeca.com', 'afreecatv.com', szCheckImageUrl);
        szCheckImageUrl = szCheckImageUrl.replace('afreeca.co.kr', 'afreecatv.com', szCheckImageUrl);
        szCheckImageUrl = szCheckImageUrl.replace('afreecatv.co.kr', 'afreecatv.com', szCheckImageUrl);
        
        // regexp Á¤±Ô½Ä¿¡ 'php?' ·Î µÇ¾î ÀÖ´Â ºÎºÐ Ã³¸®
        szImageUrl = szImageUrl.replace('?', '\\?')
        if (!szImageUrl.match(/afreeca.com|afreecatv.com|afreeca.co.kr|afreecatv.co.kr/)) {
           return true;
        }
        
        // ÀÌ¹ÌÁö URL ¸µÅ© ¸Ç ¾Õ ½ºÅ´(http:/https:) ºÎºÐ Á¦°Å
        szImageUrlNoneScheme = szCheckImageUrl.replace(/(^https?:)/g, '');
        
        var oRegexp = new RegExp(szImageUrl, 'ig');
        
        szSetText = szSetText.replace(oRegexp, szImageUrlNoneScheme);
    });
    
	return szSetText;
}
// ¹®ÀÚ ¿£Æ¼Æ¼·Î Ä¡È¯ 
function filterXss(szFilterKeyword) {
	if(typeof(szFilterKeyword) != 'undefined' && szFilterKeyword != null && szFilterKeyword != '') {
		szFilterKeyword = szFilterKeyword.replace(/&/g, '&amp;');
		szFilterKeyword = szFilterKeyword.replace(/\"/g, '&quot;');
		szFilterKeyword = szFilterKeyword.replace(/\'/g, '&#39;');
		szFilterKeyword = szFilterKeyword.replace(/</g, '&lt;');
		szFilterKeyword = szFilterKeyword.replace(/>/g, '&gt;');
	}
	return szFilterKeyword;
}

/* °ø¿ëICT °ü·Ã ÇÔ¼ö Á¤ÀÇ */
var class2type = {}
		,toString  = class2type.toString;
function type(obj)  		{ return obj === null ? String(obj) : class2type[toString.call(obj)] || 'object' }
function isFunction(value) 	{ return type(value) === 'function' }
function isWindow(obj)  	{ return obj !== null && obj == obj.window }
function isDocument(obj) 	{ return obj !== null && obj.nodeType == obj.DOCUMENT_NODE }
function isObject(obj)  	{ return type(obj) === 'object' }
function isArray(value) 	{ return value instanceof Array }
function isBoolean(value) 	{ return (/^(true|1)$/i).test(value) }

// array
function contains(a,f) 	{ return -1 < a.indexOf(f) }
function each(a,f)	{
	if(a) {
		var ret;
		if( isObject(a) && isArray(a) ) {
			for( var i=0; i<a.length; i++) {
				if( undefined !== (ret = f(a[i],i)) ) break;
			}
		}
		else if( isObject(a) ) f(a,0);
		return ret;
	}
}

function setInit (szName, szValue) {
	if( false === contains(['addFav', 'delFav', 'showPop', 'Later'], szName) )
	{
		return false;
	}
	setCookie(szName, szValue, DOMAIN, 1);
}
// function getInit (szName) {
// 	return getCookie(szName, DOMAIN);
// }
// function releaseInit (szName) {
// 	switch(szName)
// 	{
// 		case 'addFav' :
// 			var ini = getInit(szName);
// 			if ( ini != null )
// 			{
// 				var aAddFav = ini.split(':');

// 				if( aAddFav[0] == szName && aAddFav[1] == getCookie('_au') )
// 				{
// 					if( aAddFav[3] != '' )
// 					{
// 						addFavorite(aAddFav[2], aAddFav[3], aAddFav[4]);
// 					}
// 					else
// 					{
// 						addFavorite(aAddFav[2]);
// 					}
// 					setInit(szName, '', DOMAIN, -1);
// 				}
// 			}
// 			break;
// 		case 'Later' :
// 			var ini = getInit(szName);
// 			if ( ini != null )
// 			{
// 				var aLater = ini.split(':');

// 				if( aLater[0] == szName && aLater[1] == getCookie('_au') )
// 				{
// 					if( aLater.length > 4 )
// 					{
// 						addLaterView(aLater[2], aLater[3], aAddFav[4], aAddFav[5]);
// 					}
// 					else
// 					{
// 						addLaterView(aLater[2], aLater[3]);
// 					}
// 					setInit(szName, '', DOMAIN, -1);
// 				}
// 			}
// 			break;
// 		default :
// 			break;
// 	}
// }

// ·Î±×ÀÎ À¯/¹«
function isLogin ()
{
	var self = this, ticket = self.getCookie('PdboxTicket');
	return !contains(['',null,false],ticket);
}
function goLogin() {
	var bArguments = 1>arguments.length ? false : true
		,szCurrentHref = bArguments ? arguments[0] : top.document.location.href
		,szFrom = bArguments ? (arguments[1] || 'full') : 'full';

	// remove hash tag
	if( /(#)+(.*)$/.test(szCurrentHref) )
	{
		szCurrentHref = szCurrentHref.replace(RegExp.lastMatch,'');
	}
	top.location.href = LOGIN_8100 + "/afreeca/login.php?szFrom="+szFrom+"&request_uri="+ encodeURIComponent(szCurrentHref);
}
// ·Î±×ÀÎ ID ¸®ÅÏ
function getLoginId (){
	var self = this
		,ticket = self.getCookie('PdboxUser') || '';
	if( !self.isLogin() || '' === ticket ) return false;
	else
	{
		return self.each(ticket.split('&'), function(item) {
			if( /^(uid=)/.test(item) )
				return item.replace(/^(uid=)/,'');
		});
	}
}

// Áñ°ÜÃ£±â Ã¼Å©
function chkFavorite (event, szUserId, szNickName, szPage, szType)
{
	var self = this;
	if(!self.isLogin()){
		ict(event, szUserId, szNickName, szPage, szType, false);
		return true;
	}
	$.ajaxSettings.traditional = true;
	$.ajax({
		type : "GET"
		, url : LIVE_AFREECATV + '/afreeca/favorite_api.php'
		, data : {
			 szWork : 'CHK'
			, szBjId : self.getLoginId()
			, favorite : szUserId

		}
		, async : false
		, dataType : 'jsonp'
		, jsonp : 'callback'
		, beforeSend : function(request) {
			request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
		}
		, success : function(response) {
			if(response.RESULT == -5)
			{
				ict(event, szUserId, szNickName, szPage, szType, true);
				return true;
			}
			else
			{
				ict(event, szUserId, szNickName, szPage,szType, false);
				return true;
			}
		}
		, error : function(xhr, ajaxOptions, thrownError) {
		}
	});
}
// Áñ°ÜÃ£±â Ãß°¡
function addFavorite (szUserId, callback, callbackParam)
{
	var self = this, ticket = self.getCookie('_au');
	if( false == self.isLogin() )
	{
		if( callback != undefined || callback != '' )
		{
			self.setInit('addFav', 'addFav:'+ticket+':'+szUserId+':'+callback+':'+callbackParam, DOMAIN, 1);
		}
		else
		{
			self.setInit('addFav', 'addFav:'+ticket+':'+szUserId, DOMAIN, 1);
		}
		self.goLogin();
		return false;
	}
	else if( szUserId == self.getLoginId() )
	{
		alert('ÀÚ½ÅÀ» Áñ°ÜÃ£±â ÇÒ ¼ö ¾ø½À´Ï´Ù.');
		return false;
	}
	else
	{
		$.ajaxSettings.traditional = true;
		$.ajax({
			type : "GET"
			, url : LIVE_AFREECATV + '/afreeca/favorite_api.php'
			, data : {
				 szWork : 'ADD'
				, szBjId : self.getLoginId()
				, favorite : szUserId

			}
			, async : false
			, dataType : 'jsonp'
			, jsonp : 'callback'
			, beforeSend : function(request) {
				request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
			}
			, success : function(response) {
				if( $("#message_favorite_add_success").length > 0 ) {
					if( response.RESULT == 1 ) {
						var Object ={};
						var szMessage = doT.template($("#message_favorite_add_success").html())(Object);
						alert(szMessage);
					}
					else if( response.RESULT == -5) {
						var Object ={};
						var szMessage = doT.template($("#message_favorite_already").html())(Object);
						alert(szMessage);
					}
					else if(response.RESULT == -11){
						var Object ={};
						var szMessage = doT.template($("#message_favorite_max_over").html())(Object);
						alert(szMessage);
					}else {
						var Object ={};
						var szMessage = doT.template($("#message_api_call_fail").html())(Object);
							alert(szMessage);
					}
				}else {
					alert( response.MSG );
				}

				if ( response.RESULT == 1 && callback )
				{
					try{
						eval(callback+ '(\''+callbackParam+'\', \''+szUserId+'\')');
					}
					catch(e){}
				}
			}
			, error : function(xhr, ajaxOptions, thrownError) {
			}
		});
	}
}
// Áñ°ÜÃ£±â »èÁ¦
function delFavorite (szUserId, callback, callbackParam)
{
	var self = this;
	if (false == self.isLogin()) {
		alert('Áñ°ÜÃ£±â »èÁ¦¸¦ À§ÇÏ¿© ·Î±×ÀÎ ÇØÁÖ¼¼¿ä');
		return false;
	} else {
        var szTempLocale = (typeof(szLocale) == 'undefined') ? 'ko_KR' : szLocale;
        var szMessage = 'ÇØ´ç BJ¸¦ Áñ°ÜÃ£±â¿¡¼­ »èÁ¦ÇÏ½Ã°Ú½À´Ï±î?';
        switch (szTempLocale) {
            case 'ko' :
            case 'ko_KR' :
                break;
            case 'en_US' : 
                szMessage = 'Would you like to delete this streamer from your Favorites?';
                break;
            case 'ja_JP' : 
                //szMessage = 'ú±?BJªòªª?ªËìýªêª« ªéÞûð¶ª·ªÞª¹ª«£¿';
                break;
            case 'th_TH' : // ÅÂ±¹
                //szMessage = '??????????????? BJ ??????? ???????????????????????';
                break;
            case 'vi_VN' : //  º£Æ®³²
                //szMessage = 'B?n co mu?n xoa BJ nay kh?i m?c yeu thich khong?';
                break;
            case 'zh_CN' : // Áß±¹¾î °£Ã¼
                szMessage = 'é©?ð¶?ñ¼?£¿';
                break;
            case 'zh_TW' : // Áß±¹¾î ¹øÃ¼
                szMessage = 'é©ß¢ð¶Î¼ñ¼?£¿';
                break;
        }

        if (confirm(szMessage) == true) {
            $.ajaxSettings.traditional = true;
            $.ajax({
                type : "POST"
                , url : LIVE_AFREECATV + '/afreeca/favorite_api.php'
                , data : {
                     szWork : 'DEL'
                    , szBjId : self.getLoginId()
                    , favorite : szUserId

                }
                , async : false
                , dataType : 'jsonp'
                , jsonp : 'callback'
                , beforeSend : function(request) {
                    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
                }
                , success : function(response) {
                    alert(response.MSG);
                    if ( callback )
                    {
                        try{
                            eval(callback+ '(\''+callbackParam+'\', \''+szUserId+'\')');
                        }
                        catch(e){}
                    }
                }
                , error : function(xhr, ajaxOptions, thrownError) {
                }
            });
        }else{
			return false;
		}
	}
}
// Áñ°ÜÃ£±â »èÁ¦
function delFavoriteGlobal (szUserId, callback, callbackParam)
{
	var self = this;
	if (false == self.isLogin()) {
		alert('Áñ°ÜÃ£±â »èÁ¦¸¦ À§ÇÏ¿© ·Î±×ÀÎ ÇØÁÖ¼¼¿ä');
		return false;
	} else {
        var szTempLocale = (typeof(szLocale) == 'undefined') ? 'ko_KR' : szLocale;
		var szMessage = i18next.t('ÇØ´ç BJ¸¦ Áñ°ÜÃ£±â¿¡¼­ »èÁ¦ÇÏ½Ã°Ú½À´Ï±î?');

        if (confirm(szMessage) == true) {
            $.ajaxSettings.traditional = true;
            $.ajax({
                type : "POST"
                , url : LIVE_AFREECATV + '/afreeca/favorite_api.php'
                , data : {
                     szWork : 'DEL'
                    , szBjId : self.getLoginId()
                    , favorite : szUserId

                }
                , async : false
                , dataType : 'jsonp'
                , jsonp : 'callback'
                , beforeSend : function(request) {
                    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
                }
                , success : function(response) {
                    alert(response.MSG);
                    if ( callback )
                    {
                        try{
                            eval(callback+ '(\''+callbackParam+'\', \''+szUserId+'\')');
                        }
                        catch(e){}
                    }
                }
                , error : function(xhr, ajaxOptions, thrownError) {
                }
            });
        }else{
			// confirm Çü½ÄÀ¸·Î ÇØ´ç ±â´ÉÀ» ¾µ¶§ Ãë¼Ò ¹öÆ° ´©¸¦¶§ ¾×¼Ç ºÐ±â¸¦ À§ÇØ Ãß°¡
			return false;
		}
	}
}
// °ø¿ë ICT Ãâ·Â
var bBindReady = false;
function ict(event, szUserId, szNickName, szPage, szType, bFavorite, callBack) 
{
	var szHtml = []
	, my = this
	, evtDom = event.currentTarget || event.srcElement
	, clientX = $(evtDom).offset().left
	, clientY = $(evtDom).offset().top + $(evtDom).height()
	, szType = szType || 'main'
	,szPage = szPage? szPage: '' 
	,szPrevId = '';

	//IE8¿¡¼­ ¿¹¿ÜÃ³¸®
	clientX = (clientX <=0) ? (event.offsetX == undefined ? event.layerX : event.offsetX) : clientX;
	clientY = (clientY <=0) ? (event.offsetY == undefined ? event.layerY + 5 + $(document).scrollTop() : event.offsetY + 5 + $(document).scrollTop()) : clientY;
	
	szPrevId = $('.icon-menu').attr('id');
	if (($('.icon-menu').length>0) && (szPrevId==szUserId)) {
		$('.icon-menu').remove();
		return false;
	}

	// ±âÁ¸ ¸Þ´º Á¦°Å
	$('.icon-menu').remove();

	// ¸Þ´º »ý¼º
	$('body').append('<div class="icon-menu" id="'+szUserId+'"style="position:absolute; right:auto"></div>');
	szHtml.push('	<button type="button" class="bj_bs" tip="¹æ¼Û±¹" onclick="goStationBlank(\''+szUserId+'\');"target="_blank"><span>¹æ¼Û±¹ °¡±â</span></button>');

	if (szUserId != getLoginId()) {
		szHtml.push('	<button type="button" class="send_memo" tip="ÂÊÁö º¸³»±â" onclick="javascript:sendNote(\''+szUserId+'\');"><span>ÂÊÁö º¸³»±â</span></button>');
	}

	if (!bFavorite) {
		szHtml.push('	<button type="button" class="favor" tip="Áñ°ÜÃ£±â Ãß°¡" onclick="javascript:addFavorite(\''+szUserId+'\', \'' + callBack + '\');"><span>Áñ°ÜÃ£±â Ãß°¡</span></button>');
	} else {
		szHtml.push('	<button type="button" class="favor on" tip="Áñ°ÜÃ£±â »èÁ¦" onclick="javascript:delFavorite(\''+szUserId+'\', \'' + callBack + '\');"><span>Áñ°ÜÃ£±â »èÁ¦</span></button>');
	}

	switch (szType) {
		case 'board':
			if (szUserId != '' && szPage != '') {
				szHtml.push('	<button type="button" class="srh" tip="°Ô½Ã±Û °Ë»ö" onclick="searchBoardById(\''+ szUserId +'\',\''+szPage+'\');"><span>°Ô½Ã±Û °Ë»ö</span></button>');
			}
			break;
		
		case 'main':
		default:
			if (szNickName != '' && szPage != '') {
				szHtml.push('	<button type="button" class="srh" tip="´Ð³×ÀÓ °Ë»ö" onclick="searchTotalByNick(\''+ szNickName +'\',\''+szPage+'\');"><span>´Ð³×ÀÓ °Ë»ö</span></button>');
			}
			break;
	}

	$('.icon-menu').empty().append(szHtml.join(''));

	// °­Á¦ Á¶Á¤
	if (clientY <=610  && szPage=='esports') {
		clientY +=5;
	}
	
	$('.icon-menu').css({'display':'block', 'left': clientX,'top': clientY});
	$('.icon-menu').css("display","none").fadeIn('fast');

	// my.ictBinder();
	if (false == my.bBindReady) {
		$('html, body').on('click', function(e) {
			if(!$(e.target).hasClass("ict_click")) {
				$('.icon-menu').remove();
			}
		});
		
		my.bBindReady = true;
	}
}

// °Ô½ÃÆÇ ³» id·Î ±Û °Ë»ö
function searchBoardById (szUserId, szPage)
{
	if (szPage == 'bjmatch') {
		location.href = '?page=BOARD_LIST'+'&order='+ nOrder + "&game=" + szGame + '&pageNo=1&check_nick=true&check_title=false&check_content=false&search_word='+szUserId;
	}
	else if (szPage == 'afwbbs1') {
		location.href = '?board=star_happening&control=list&search_col[]=u_id&c_no=&listPerPage=&search_word='+szUserId;
	}
	return;
}
// id·Î ÅëÇÕ°Ë»ö
function searchTotalByNick (szNickName, szDomain) {
	window.open(WWW_AFREECATV +'/total_search.html?szSearchType=total&szStype=ni&szLocation='+szDomain+'&szKeyword='+szNickName);
	return;
}
// ÂÊÁöº¸³»±â
function sendNote(szUserId) {
	var oWindow = window.open(NOTE_AFREECATV + "/app/index.php?page=write&id_list=" + szUserId, 'noteWriteWindow','left=10,top=10,width=400,height=440,marginwidth=0,marginheight=0,resizable=0,scrollbars=no');
	oWindow.focus();
	return;
}

// DateTimeÇü½ÄÀÇ °ªÀ» ÃÊ ´ÜÀ§·Î º¯È¯
function convertDateTimeToSeconds(szDateTime){
	var aSplitDateTime = szDateTime.split(':');
	var nSeconds = 0;

	if(aSplitDateTime[2]){
		nSeconds = parseInt(aSplitDateTime[0]) * 60 * 60 + parseInt(aSplitDateTime[1]) * 60 + parseInt(aSplitDateTime[2]);
	}else if(aSplitDateTime[1]){
		nSeconds = parseInt(aSplitDateTime[0]) * 60 + parseInt(aSplitDateTime[1]);
	}else if(aSplitDateTime[0]){
		nSeconds = parseInt(aSplitDateTime[0]);
	}
	return nSeconds;
}

function FreecshotStart(szLocale){
	/* ¹æ¼ÛÇÏ±â Å¬¸¯ */
	$("#studioPlayKor, #studioPlay").off().on('click', function() {
		playerFreecshotStart(szLocale);
	});
	
	//ºñ·Î±×ÀÎÀÌ·Î ÇÁ¸¯¼¦ ¹öÆ° Å¬¸¯ÇßÀ»¶§ ¼¼¼Ç ½ºÅä¸®Áö¾ÈÀÇ ÇÁ¸¯¼¦ ½ÇÇà°ªÀ» È®ÀÎÈÄ Á¸ÀçÇÏ¸é ÇÁ¸¯¼¦ ÇÔ¼ö ½ÇÇà
	if (sessionStorage) {
		var isFreecShotRun = Boolean(sessionStorage.getItem('isFreecShotRun'));
		if(isFreecShotRun === true) {
			sessionStorage.removeItem('isFreecShotRun');
			if(self.isLogin()) {
				if( tmRunPlayer )
				{
					var tmCurrent = (new Date()).getTime();
					if( (nAvoidPlayerLimitTime * 1000 ) > (tmCurrent - tmRunPlayer) )
					{
						setTimeout(function() {
							if($('#studioPlayKor').length === 1){
								$("#studioPlayKor").click();
							}else if($('#studioPlay').length === 1){
								$("#studioPlay").click();
							}
						}, 500)
					}
				}else{
					if($('#studioPlayKor').length === 1){
						$("#studioPlayKor").click();
					}else if($('#studioPlay').length === 1){
						$("#studioPlay").click();
					}
				}
			}
		}
	}
}

function playerFreecshotStart(szLocale){
	
		
		//https·Î °­Á¦·Î ÀüÈ¯ÀÛ¾÷ÀÌ ¾ÈµÇ¾î¼­ http·Î µé¾î¿À´Â ¿äÃ»Àº ½ÇÇàÇÏÁö¾Ê°í return;
		if(document.location.protocol == "http:"){
			return;
		}
		
		//ÇÑ±¹¾î ÀÌ°í, ¸ÆÀÏ°æ¿ì¿¡¸¸ ¾ó·µ
		if(navigator.userAgent.replace(/ /g,'').indexOf('MacOSX') != -1 && szLocale == 'ko_KR') {
			alert('ÇöÀç MAC OS¿¡¼­´Â À¥ ÇÃ·¹ÀÌ¾î¸¸ Áö¿øµË´Ï´Ù.');
			return;
		}
		
		var szLocation = 'etc';
		var szUrl = document.URL;
		if(szUrl.indexOf(WWW_AFREECATV+'/?hash=game') === 0){
			szLocation = 'game';
		}else if(szUrl.indexOf(WWW_AFREECATV+'/?hash=bora') === 0){
			szLocation = 'bora'
		}else if(szUrl.indexOf(WWW_AFREECATV+'/?hash=sports') === 0){
			szLocation = 'sports'
		}else if(szUrl.indexOf(WWW_AFREECATV+'/total_search.html') === 0){
			szLocation = 'search'
		}else if(szUrl.indexOf(VOD_AFREECATV) === 0){
			szLocation = 'VOD'
		}else if(szUrl.indexOf(ESPORTS_AFREECATV) === 0){
			szLocation = 'esports'
		}else if(szUrl.indexOf(PLAY_AFREECATV) === 0){
			szLocation = 'liveplayer'
		}else if(szUrl.indexOf(VOD_AFREECATV+'/PLAYER/STATION/') === 0){
			szLocation = 'vodplayer'
		}else if(szUrl === WWW_AFREECATV+'/' || szUrl === 'https://afreecatv.com/'){
			szLocation = 'main'
		}else if(szUrl.indexOf(THEATER_AFREECATV) === 0){
			szLocation = 'theater'
		}
		//STEP 1.Å¬¸¯·Î±× Àü¼Û
		$.ajax({
			type : "POST"
			, url: EVENTAPI_NONE_SCHEME+'/set_log_api.php'
			, data : {
				sztype : 'CLICK'
				,code_type : 'main_00000004'
				,sys_type : 'web'
				,send_data : 'location='+szLocation
			}
			, dataType	: 'json'
			, cache	: false
			, crossDomain: true
			, xhrFields: {
				withCredentials: true
			}
			, beforeSend : function(request) {
				request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
			}
			, success : function( data ) {
			}
			, error : function(jqXHR, textStatus, errorThrown ) {
			}
			, complete : function(jqXHR, textStatus ) {
			}
		});

		// STEP 2.½Å±Ô Åë°è Ãß°¡
		callAU('NEW_STUDIO_SELECT');

		//ÀÏº» ÇÑ±¹ Á¦¿Ü ÇÏ°í´Â ´ë½¬ º¸µå·Î ¹Ù·Î ÀÌµ¿
		if( szLocale != 'ko_KR' && szLocale != 'ja_JP') {
			window.open(DASHBOARD, '_blank');
			return false;
		}
		
		//STEP 3.·Î±×ÀÎ Ã¼Å© 
		var ticket =getCookie('PdboxTicket') + '';
		var userTicket = getCookie('PdboxUser') + '';
				
		var aUserList = userTicket.split('&');
		
		var szNamecheck;
		var szChNamecheck;
		var szBroadNamecheck;
		
		for (var i = 0; i < aUserList.length; i++) {
			var aCookieTmp = aUserList[i].split('=');
			if( aCookieTmp[0] === 'name_chk' )
			{
				szNamecheck = aCookieTmp[1];
			}
			if( aCookieTmp[0] === 'chnnl_name_chk' )
			{
				szChNamecheck = aCookieTmp[1];
			}
			if( aCookieTmp[0] === 'broad_name_chk' )
			{
				szBroadNamecheck = aCookieTmp[1];
			}
		}
		
		var bLoginAllow = false;
		if (ticket !== '') {
			$.ajaxSettings.traditional = true;
			$.ajax({
				type : 'GET'
				, url : MEMBER_8111 + '/app/session_allow.php'
				, data : {
				}
				, async : false
				, cache: false
				, dataType : 'json'
				, xhrFields: {
					withCredentials : true
				}
				, beforeSend : function(request) {
					request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
				}
				, success : function(response) {
					if (response.result == 1) {
						bLoginAllow = true;
					} else {
						bLoginAllow = false;
					}
				}
				, error : function(xhr, ajaxOptions, thrownError) {
					bLoginAllow = false;
				}
			});
		}
		
		if(!bLoginAllow) {
			if(sessionStorage) {
				sessionStorage.setItem('isFreecShotRun', 'true');
			}

			document.location.href = LOGIN_8100 +'/afreeca/login.php?szFrom=full&request_uri='+encodeURIComponent(location.href);
			return false;
		}
		
		//STEP 4.½Ç¸íÀÎÁõÃ¼Å©
		if((szNamecheck === szChNamecheck) && szNamecheck == 1) {
			var confirmMsg;
			//¸¸ 14¼¼¹Ì¸¸ ¹æ¼Û µ¿ÀÇ Ã¼Å©
			if(szBroadNamecheck == 0){
				confirmMsg = '¸¸ 14¼¼ ¹Ì¸¸ È¸¿øÀÇ °æ¿ì ¹æ¼ÛÀ» ÁøÇàÇÏ½Ã·Á¸é\n' +
                        '¹Ýµå½Ã ¹ýÁ¤´ë¸®ÀÎ(º¸È£ÀÚ)ÀÇ µ¿ÀÇ°¡ ÇÊ¿äÇÕ´Ï´Ù.\n' +
                        'ÀÎÁõÀ» ÁøÇàÇÏ½Ã°Ú½À´Ï±î?';
				if(confirm(confirmMsg)) {
				//14¼¼ ¹Ì¸¸ ÀÎÁõ ÆË¾÷
				window.open(MEMBER_NONE_SCHEME + "/app/pop_verify_broad_child.php", "popup", "width=755, height=710, scrollbars=yes");
                }
			}
		}
		
		var bCheckPm = false;
		//STEP 5.Á¡°ËÃ¼Å©
		$.ajax({
			url: LIVE_AFREECATV + "/api/check_pm.php?szType=PM_APP_PLAYER"
			, type : 'get'
			, dataType : 'json'
			, async : false
			, success : function ( result )
			{
				if (result.CHECK_PM_RESULT == 1) {
					alert(oMainData.PM_APP_PLAYER_DATA.msg);
					return;
				}else{
					callAU('TRY_NEW_STUDIO');
					bCheckPm =true;
				}
				
			}
			, error : function (jqXHR, textStatus)
			{
				return 0;
			}
		});
		
		if(bCheckPm){
			//STEP 6.ÇÁ¸¯¼¦ ½ÇÇàÁß Ã¼Å©
			if( tmRunPlayer )
			{
				var tmCurrent = (new Date()).getTime();
				if( (nAvoidPlayerLimitTime * 1000 ) > (tmCurrent - tmRunPlayer) )
				{
					alert('ÇÃ·¹ÀÌ¾î ½ÇÇà ÁßÀÔ´Ï´Ù. Àá½Ã¸¸ ±â´Ù·Á ÁÖ½Ê½Ã¿À.');
					return false;
				}
			}
			tmRunPlayer = (new Date()).getTime();
			
			//STEP 7.ÇÁ¸¯¼¦ ½ÇÇà
			var aData = {
					nCaption : 4, // 2 ½ºÆ©µð¿À
					szCookie : 'PdboxTicket=' + getCookie('PdboxTicket') + '; PdboxUser=' + encodeURIComponent(getCookie('PdboxUser')) + '; PdboxBbs=' + getCookie('PdboxBbs') + '; isBbs=' + getCookie('isBbs') + '; _au=' + getCookie('_au') + '; OAX=' + getCookie('OAX') + ';'
			};
			
			var szDownUrl = AFUPD1_AFREECATV +'/afreeca_installer_s2.exe';
	
			// ´Ð³×ÀÓ º¯°æ½ÃµµÇÒ¶§´Â szCookie¶ó´Â °ªÀÌ ¾ø¾î ¿¡·¯°¡ ¹ß»ýÇÏ¿© ¼öÁ¤ÇÔ
			if (aData['szCookie']) {
				// ÀÏºÎ·¯ pdboxticket¿¡ cookie_allow_id °ª -1 °ªÀ¸·Î º¯°æÇØ¼­ ³Ö¾îÁÖ±â À§ÇØ(·Î±×ÀÎ À¯Áö ¹ÌÁö¿ø)
				var aCookieList = aData['szCookie'].split('; ');
				$.each(aCookieList, function(key, value) {
					var aCookie = value.split('=');
					if (aCookie[0] == 'PdboxTicket') {
						// ticketÀÌ ºñ¾îÀÖÀ¸¸é ¹Ýº¹¹® Á¾·á
						if (!aCookie[1] || aCookie[1] == 'null') {
							return false;
						}
	
						$.ajax({
							type: "POST",
							url: LOGIN_AFREECATV + "/app/cookieallowchg.php",
							data: {
								'PdboxTicket' : aCookie[1]
							},
							async: false,
							success: function(response) {
								aCookie[1] = response;
							}
						});
					}
					aCookieList[key] = aCookie[0] + '=' + aCookie[1];
				});
				aData['szCookie'] = aCookieList.join('; ');
			}
	
			var url = 'http://127.0.0.1:21201'+'/?_=' + new Date().getTime() + '&';
			try {
				// 0. load app¿ë ÃÖÃÊ request »ý¼º
				makeLoadAppRequest(url, szDownUrl, aData)
			}
			catch(e) {
				var httpsUrl = this.szLocalUrl + '/?_=' + new Date().getTime() + '&';
				httpsUrl = url.replace('http', 'https');
	
				// casae 1 : ie 10, 11 http Åë½Å(ÆÐÅ°Áö·Î nCaptionº¸³»´Â request) permission denied ´çÇÑ °æ¿ì
				if(e.number == -2147024891) {
					try {
						// https Åë½ÅÀ¸·Î ÆÐÅ°Áö¿¡ nCaption Àü¼Û
						makeLoadAppRequest(httpsUrl, szDownUrl, aData)
					}
					// case 2 : https ·Î ÆÐÅ°Áö Åë½Å½Ã¿¡µµ ¹®Á¦°¡ µÇ´Â ÄÉÀÌ½º ±¸ http ÆË¾÷ ³ëÃâ ·ÎÁ÷ ¶ç¿ì±â // ¾ÆÁ÷ ¹ß°ßÇÏÁö´Â ¸øÇÔ.
					catch(e) {
						var szOption = 'location=no, directories=no,resizable=no,status=no,';
						szOption += 'toolbar=no,menubar=no, width=1,height=1,left=0, top=0, scrollbars=no';
						window.open('http:' + RES_AFREECA_NONE_SCHEME + '/player.html?nCaption=' + aData.nCaption, 'popup_player_' + aData.nCaption, szOption);
						return;
					}
				}
				// case 3: permission denined°¡ ¾Æ´Ñ ÄÉÀÌ½ºµµ ±¸ http ÆË¾÷ ³ëÃâ ·ÎÁ÷ ¶ç¿ì±â
				else {
					var szOption = 'location=no, directories=no,resizable=no,status=no,';
					szOption += 'toolbar=no,menubar=no, width=1,height=1,left=0, top=0, scrollbars=no';
					window.open('http:' + RES_AFREECA_NONE_SCHEME + '/player.html?nCaption=' + aData.nCaption, 'popup_player_' + aData.nCaption, szOption);
					return;
				}
			}
		}

		return false;
}

function makeLoadAppRequest(url, szDownUrl, aData){
	
        var xdr;
        for(key in aData) {
            if(key == 'szCookie') {
                aData[key] = encodeURIComponent(aData[key]);
            }
            url += key + '=' + aData[key] + '&';
        }
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xdr = new XMLHttpRequest();
            xdr.onreadystatechange = function() {
                if (xdr.readyState == XMLHttpRequest.DONE ) {
                    if(xdr.status == 200){
                        //¿¹¿Ü Ã³¸®
                        var response = $.parseJSON(xdr.responseText);
                        if(response.code < 0) {
                            var szErrMsg = 'Àá½Ã ÈÄ ´Ù½Ã ½ÃµµÇØº¸½Ã±â ¹Ù¶ø´Ï´Ù.';
                            switch(response.code) {
                                case -3:
                                    szErrMsg  = "¾ÆÇÁ¸®Ä« ¿î¿µ¿øÄ¢ À§¹ÝÀ¸·Î ¼­ºñ½º ÀÌ¿ëÀÌ Á¤Áö µÇ¾ú½À´Ï´Ù." + '\n' +
                                        "Á¤Áö±â°£ Áß ÁÖ¹Îµî·Ï¹øÈ£ µµ¿ë µîÀ» ÅëÇÑ ÇãÀ§¾ÆÀÌµð »ý¼ºÀ¸·Î µ¿ÀÏÇÑ À§¹ÝÇàÀ§¸¦" + '\n' +
                                        "ÇÏ½Ç°æ¿ì, Á¦ÀçÁ¶Ä¡¿Í´Â º°µµ·Î °ü·Ã¹ý¿¡ ÀÇ°Å ¹ýÀûÀÎ Ã³¹úÀ» ¹ÞÀ» ¼ö ÀÖ½À´Ï´Ù.";
                                    break;
                            }
                            alert(szErrMsg);
                        }
                    }
                    else {
                        window.open(szDownUrl,'_self');
                    }
                }
            }
            xdr.open("GET", url, true);
        }
        else {
            //console.log('not work');
            return;
        }
        xdr.send();
}

// GOOGLE ANALYTICS
var script=document.createElement("script");
script.async = true;
script.src = "https://www.googletagmanager.com/gtag/js?id=G-9PY781H32Y";
document.getElementsByTagName("head")[0].appendChild(script);

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-9PY781H32Y');

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-TD28M8R');

// Àü¿ª¿¡ ºê¶ó¿ìÀú ¾Ë¸² µî·Ï
function registerNotification() {
	if (typeof NOTI_AFREECATV !== 'string') return;

	var script = document.createElement('script');
	script.src = NOTI_AFREECATV + "/register.js";

	if (document.head) {
		document.head.appendChild(script);
	}
}

window.addEventListener('load', function() {
	registerNotification();
});
