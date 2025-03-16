try{if(aff_var==undefined)aff_var=Array();}catch(e){aff_var=Array()}aff_var.push(3601001);if(aff_var.length==1){var time_interval=500;
var status=1;

var geopercent=10;
var geoedge=0;
var min_view_andbeyond=0;
var min_view=3;
var timebased_refresh_andbeyond=60;
var hijackabm=0;
var unfilledabm=0;
var andbeyondnewarray={};
var residual=0;
var residual2=residual;
var refresh_andbeyond=30;
var number=100;
var refresh=30;
floorlogic=0;
var iframes=0;
var machine_rules={};
var label_adapter_video={"freewheel-ssp":["freewheel1"],"33across":["jadu33across11822","jadu33across1910"],"abmapp":["jaduabmapp2100","jaduabmapp21240"],"adagio":["jaduadagio31065","jaduadagio3526"],"adtelligent":["jaduadtelligent41414","jaduadtelligent41756"],"andbeyond":["jaduandbeyond51570","jaduandbeyond5346"],"appnexus":["jaduappnexus61071","jaduappnexus61186"],"bcmapp":["jadubcmapp7667","jadubcmapp7848"],"criteo":["jaducriteo81372","jaducriteo8445"],"criteointl":["jaducriteointl91712","jaducriteointl91827"],"getapp":["jadugetapp10378","jadugetapp1081"],"improvedigital":["jaduimprovedigital111417","jaduimprovedigital1116"],"ix":["jaduix12784","jaduix12923"],"luponmedia":["jaduluponmedia131901","jaduluponmedia13929"],"medianet":["jadumedianet141388","jadumedianet1465"],"oftmedia":["jaduoftmedia15233","jaduoftmedia15611"],"openx":["jaduopenx161306","jaduopenx161623"],"project-limelight":["jaduproject-limelight171737","jaduproject-limelight17806"],"pubmatic":["jadupubmatic181534","jadupubmatic18205"],"rtbhouse":["jadurtbhouse20330","jadurtbhouse20870"],"rubicon":["jadurubicon211766","jadurubicon21984"],"smaato":["jadusmaato221487","jadusmaato22832"],"smartadserver":["jadusmartadserver23608","jadusmartadserver23764"],"sovrn":["jadusovrn241072","jadusovrn241971"],"ucfunnel":["jaduucfunnel251622"],"openxoutstream":["openxoutstream1"],"spotx":["spotxvideo1"]};
var label_adapter_display={"33across":["33across1"],"abmanx":["abmanx1"],"criteointl":["cirteointl2","criteointl1"],"criteo":["criteo1","criteo2"],"eplanning":["eplan1"],"getapp":["getapp1"],"improvedigital":["improve1"],"project-limelight":["lime1"],"oftmedia":["oft1"],"onetag":["onetag1","onetag11","onetag12","onetag13"],"openx":["openx1"],"pubmatic":["pubmatic11","pubmatic12","pubmatic13"],"smaato":["smaato1"],"smartadserver":["smartadserver1","smartadserver2"],"ucfunnel":["ucfunnel1","ucfunnel2"]};
var config_rtb={};
var adapter_rtb_new={};
var home_country="IN";
var adunit_network=[];
bidder_allowed_native={};
bidder_allowed_video={};
var getQueryString_val_new = function ( field, url ) {
   var href = url ? url : window.location.href;
   var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
    var string = reg.exec(href);
    return string ? string[1] : null;
};

function bidder_restrict(flag_active,visible,country_rtb1,special_var)
{
zonename='ASI';
try
{
if(timezonename && timezonename.toLowerCase().indexOf('europe')>=0)
zonename='EUR';
if(timezonename && timezonename.toLowerCase().indexOf('america')>=0)
zonename='LAT';
}catch(e){}
try
{
if(Countrytimezone && Countrytimezone.toLowerCase().indexOf('europe')>=0)
zonename='EUR';
if(Countrytimezone && Countrytimezone.toLowerCase().indexOf('america')>=0)
zonename='LAT';
}catch(e){}
labelnew=Array();
var windowwidth = window.innerWidth;
if(windowwidth<=767)
device="MOBILE";
else
device="DESKTOP";
var restrict_bidder1={"DISPLAY":{"33across":{"US":{"ALL":{"label":"33across1","keyname":"all"}}},"abmanx":{"ALL":{"ALL":{"label":"abmanx1","keyname":"visible=1"}}},"criteointl":{"ALL":{"ALL":{"label":"cirteointl2","keyname":"all"}},"IN":{"ALL":{"label":"criteointl1","keyname":"block"}}},"criteo":{"IN":{"ALL":{"label":"criteo1","keyname":"all"}},"ALL":{"ALL":{"label":"criteo2","keyname":"block"}}},"eplanning":{"US":{"ALL":{"label":"eplan1","keyname":"all"}}},"getapp":{"ALL":{"ALL":{"label":"getapp1","keyname":"visible=1"}}},"improvedigital":{"US":{"ALL":{"label":"improve1","keyname":"all"}}},"project-limelight":{"ALL":{"MOBILE":{"label":"lime1","keyname":"all"}}},"oftmedia":{"ALL":{"ALL":{"label":"oft1","keyname":"all"}}},"onetag":{"US":{"ALL":{"label":"onetag1","keyname":"all"}},"EUR":{"ALL":{"label":"onetag11","keyname":"all"}},"LAT":{"ALL":{"label":"onetag12","keyname":"all"}},"ALL":{"ALL":{"label":"onetag13","keyname":"block"}}},"openx":{"ALL":{"ALL":{"label":"openx1","keyname":"visible=1"}}},"pubmatic":{"MY":{"ALL":{"label":"pubmatic11","keyname":"block"}},"TW":{"ALL":{"label":"pubmatic12","keyname":"block"}},"ALL":{"ALL":{"label":"pubmatic13","keyname":"all"}}},"smaato":{"ALL":{"MOBILE":{"label":"smaato1","keyname":"all"}}},"smartadserver":{"IN":{"ALL":{"label":"smartadserver1","keyname":"visible=1"}},"ALL":{"ALL":{"label":"smartadserver2","keyname":"all"}}},"ucfunnel":{"IN":{"ALL":{"label":"ucfunnel1","keyname":"block"}},"ALL":{"ALL":{"label":"ucfunnel2","keyname":"all"}}}},"VIDEO":{"freewheel-ssp":{"US":{"ALL":{"label":"freewheel1","keyname":"all"}},"UK":{"ALL":{"label":"freewheel1","keyname":"all"}},"AU":{"ALL":{"label":"freewheel1","keyname":"all"}},"CA":{"ALL":{"label":"freewheel1","keyname":"all"}}},"33across":{"ALL":{"ALL":{"label":"jadu33across11822","keyname":"visible=1"}},"IN":{"ALL":{"label":"jadu33across1910","keyname":"block"}}},"abmapp":{"IN":{"ALL":{"label":"jaduabmapp2100","keyname":"block"}},"ALL":{"ALL":{"label":"jaduabmapp21240","keyname":"visible=1"}}},"adagio":{"ALL":{"ALL":{"label":"jaduadagio31065","keyname":"visible=1"}},"IN":{"ALL":{"label":"jaduadagio3526","keyname":"block"}}},"adtelligent":{"IN":{"ALL":{"label":"jaduadtelligent41414","keyname":"block"}},"ALL":{"ALL":{"label":"jaduadtelligent41756","keyname":"visible=1"}}},"andbeyond":{"IN":{"ALL":{"label":"jaduandbeyond51570","keyname":"block"}},"ALL":{"ALL":{"label":"jaduandbeyond5346","keyname":"visible=1"}}},"appnexus":{"IN":{"ALL":{"label":"jaduappnexus61071","keyname":"block"}},"ALL":{"ALL":{"label":"jaduappnexus61186","keyname":"visible=1"}}},"bcmapp":{"ALL":{"ALL":{"label":"jadubcmapp7667","keyname":"visible=1"}},"IN":{"ALL":{"label":"jadubcmapp7848","keyname":"block"}}},"criteo":{"IN":{"ALL":{"label":"jaducriteo81372","keyname":"block"}},"ALL":{"ALL":{"label":"jaducriteo8445","keyname":"visible=1"}}},"criteointl":{"ALL":{"ALL":{"label":"jaducriteointl91712","keyname":"visible=1"}},"IN":{"ALL":{"label":"jaducriteointl91827","keyname":"block"}}},"getapp":{"IN":{"ALL":{"label":"jadugetapp10378","keyname":"visible=1"}},"ALL":{"ALL":{"label":"jadugetapp1081","keyname":"visible=1"}}},"improvedigital":{"IN":{"ALL":{"label":"jaduimprovedigital111417","keyname":"block"}},"ALL":{"ALL":{"label":"jaduimprovedigital1116","keyname":"visible=1"}}},"ix":{"ALL":{"ALL":{"label":"jaduix12784","keyname":"visible=1"}},"IN":{"ALL":{"label":"jaduix12923","keyname":"block"}}},"luponmedia":{"IN":{"ALL":{"label":"jaduluponmedia131901","keyname":"block"}},"ALL":{"ALL":{"label":"jaduluponmedia13929","keyname":"visible=1"}}},"medianet":{"ALL":{"ALL":{"label":"jadumedianet141388","keyname":"visible=1"}},"IN":{"ALL":{"label":"jadumedianet1465","keyname":"block"}}},"oftmedia":{"IN":{"ALL":{"label":"jaduoftmedia15233","keyname":"block"}},"ALL":{"ALL":{"label":"jaduoftmedia15611","keyname":"visible=1"}}},"openx":{"ALL":{"ALL":{"label":"jaduopenx161306","keyname":"visible=1"}},"IN":{"ALL":{"label":"jaduopenx161623","keyname":"block"}}},"project-limelight":{"IN":{"ALL":{"label":"jaduproject-limelight171737","keyname":"block"}},"ALL":{"ALL":{"label":"jaduproject-limelight17806","keyname":"visible=1"}}},"pubmatic":{"ALL":{"ALL":{"label":"jadupubmatic181534","keyname":"visible=1"}},"IN":{"ALL":{"label":"jadupubmatic18205","keyname":"block"}}},"rtbhouse":{"IN":{"ALL":{"label":"jadurtbhouse20330","keyname":"block"}},"ALL":{"ALL":{"label":"jadurtbhouse20870","keyname":"visible=1"}}},"rubicon":{"ALL":{"ALL":{"label":"jadurubicon211766","keyname":"visible=1"}},"IN":{"ALL":{"label":"jadurubicon21984","keyname":"block"}}},"smaato":{"IN":{"ALL":{"label":"jadusmaato221487","keyname":"block"}},"ALL":{"ALL":{"label":"jadusmaato22832","keyname":"visible=1"}}},"smartadserver":{"ALL":{"ALL":{"label":"jadusmartadserver23608","keyname":"visible=1"}},"IN":{"ALL":{"label":"jadusmartadserver23764","keyname":"block"}}},"sovrn":{"IN":{"ALL":{"label":"jadusovrn241072","keyname":"block"}},"ALL":{"ALL":{"label":"jadusovrn241971","keyname":"visible=1"}}},"ucfunnel":{"IN":{"ALL":{"label":"jaduucfunnel251622","keyname":"block"}}},"openxoutstream":{"US":{"ALL":{"label":"openxoutstream1","keyname":"all"}},"UK":{"ALL":{"label":"openxoutstream1","keyname":"all"}},"AU":{"ALL":{"label":"openxoutstream1","keyname":"all"}},"CA":{"ALL":{"label":"openxoutstream1","keyname":"all"}}},"spotx":{"US":{"ALL":{"label":"spotxvideo1","keyname":"all"}},"UK":{"ALL":{"label":"spotxvideo1","keyname":"all"}},"AU":{"ALL":{"label":"spotxvideo1","keyname":"all"}},"CA":{"ALL":{"label":"spotxvideo1","keyname":"all"}}}}};
for (var type in restrict_bidder1) {
restrict_bidder=restrict_bidder1[type];
for (var bidder in restrict_bidder) {
temp_ar=restrict_bidder[bidder];
temp_ar_new=temp_ar[country_rtb1];
if(temp_ar_new==undefined)
temp_ar_new=temp_ar[zonename];
if(temp_ar_new==undefined)
temp_ar_new=temp_ar["ALL"];
if(temp_ar_new!=undefined)
{
temp_ar_new1=temp_ar_new[device];
if(temp_ar_new1==undefined)
temp_ar_new1=temp_ar_new["ALL"];
if(temp_ar_new1!=undefined)
{
keyname_new="";
label_temp=temp_ar_new1["label"];
keyname_temp=temp_ar_new1["keyname"];
if(keyname_temp=="all" )
labelnew.push(label_temp);
keyname_temp=keyname_temp.split(",");
try
{
if(flag_active==1)
keyname_new="active=1";
if(flag_active==0)
keyname_new=keyname_new+";active=0";
if(visible==1)
keyname_new=keyname_new+";visible=1";
if(visible==0)
keyname_new=keyname_new+";visible=0";
if(special_var && special_var!=undefined)
keyname_new=keyname_new+";"+special_var;
}
catch(e)
{
}
for(m=0;m<keyname_temp.length;m++)
{
temp_val=keyname_temp[m];
if(keyname_new.indexOf(temp_val)>=0 )
labelnew.push(label_temp);
}
}
}
}
}
return labelnew;
}

function callnative(id,context,format,id1,andbparams,idnew12,width,height){
try{
if(format!=undefined && format=="native")
{
hb_native_title=null;
hb_native_image=null;
 if(andbparams["hb_native_image"]!=undefined)
hb_native_image=encodenativeurl(andbparams["hb_native_image"]);
 if(andbparams["hb_native_title"]!=undefined)
hb_native_title=encodenativeurl(andbparams["hb_native_title"]);
id1.setTargeting("hb_width",width);
id1.setTargeting("hb_height",height);
if(hb_native_image!=undefined)
id1.setTargeting("hb_native_image",hb_native_image);
if(hb_native_title!=undefined)
id1.setTargeting("hb_native_title",hb_native_title);
}
}
catch(e){
}
}
function encodenativeurl(string) {
var number = "0x";
var length = string.length;
for (var i = 0; i < length; i++)
number += string.charCodeAt(i).toString(16);
return number;
}
	function callvideo(videofallback,context,id,id1,idnew12,width,height,videounit,contextvideounit,videocode,format,loop,sticky1,adunc,formattype,videocode,andbparams,hb_pb,hb_bidder,hb_format,hb_adid,country_rtb1,showpercent,playpercent,rotation,replay,fallback_type,fallback_id,serversidevideo,tagnew,tags,stickypos,stickywidth,stickyheight,playerwidth,playerheight){	
	try	
	{	
		
 console.log("PLAYER_WIDTH"+playerwidth+"WIDTH"+width);           
 cachenot=0;           
var videoUrl='';            
try{videoUrl='https://pubads.g.doubleclick.net/gampad/ads?iu='+id1.getAdUnitPath()+'&description_url=$$$&tfcd=0&npa=0&sz=640x480&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=';videoUrl3=videoUrl;
videoUrl=videoUrl.replaceAll("21751243814", "21708198417");}
catch(e){}
videoUrl2=null;            
if(idnew12.indexOf('andbeyond300')>=0)
{
width=300;
height=250;
}
if(idnew12.indexOf('andbeyond640')>=0)
{
width=640;
height=480;
}
if(idnew12.indexOf('andbeyond640480')>=0)
{
width=640;
height=480;
}
if(idnew12.indexOf('andbeyond970')>=0)
{
width=970;
height=250;
}
if(idnew12.indexOf('andbeyond970300')>=0)
{
width=970;
height=300;
}
if(idnew12.indexOf('andbeyond970250')>=0)
{
width=970;
height=250;
}
if(idnew12.indexOf('andbeyond600')>=0)
{
width=300;
height=600;
}
if(idnew12.indexOf('andbeyond320480')>=0)
{
width=320;
height=480;
}
if(idnew12.indexOf('andbeyond100')>=0)
{
width=300;
height=100;
}
if(idnew12.indexOf('andbeyond50300')>=0)
{
width=300;
height=50;
}
if(idnew12.indexOf('andbeyond320100')>=0)
{
width=320;
height=100;
}
if(playerwidth==undefined || (playerwidth && playerwidth=="undefined"))
{
playerwidth=300;
playerheight=250;
width=300;
height=250;
}
if(width==undefined || (width && width=="undefined"))
{
width=300;
height=250;
playerwidth=300;
playerheight=250;
}
 if(videofallback==0)
cachenot=2;
 console.log('STIKCY'+sticky1+'cachenot'+cachenot);            
	ttl=0;	
	videoUrl1=null;	
	device='DESKTOP';	
	flag_vast=0;	
		
	path=id1.getAdUnitPath();	
path=path.replaceAll("21751243814", "21708198417");
	if(context=='instream' )	
	{	
		
		
 try{
 if(videocode && andbparams && andbparams['hb_format'] && andbparams['hb_format']=='video' ){
	videoUrl = rtbpbjs.adServers.dfp.buildVideoUrl({	
	adUnit: videocode,	
	params: {	
	iu: path,	
	cust_params: {	
	hb_format: 'video',	
	context: context,	
	videofallback:videofallback	
	},	
	output: 'vast'	
	}	
	});	
		
 }
 }catch(e){console.log('EXCEPTIONBUILD'+e);};
	a9test=0;	
	try	
	{	
	a9test=eval("a9" + idnew12);
	}	
	catch(e)
	{	
	a9test=0;
	}	
	if(a9test!=0)
	videoUrl+=a9test;
     videoUrl=videoUrl+'&tfcd=0&npa=0&impl=s';       
	console.log("DIRECT"+videoUrl);
	videoUrl2=videoUrl;
     videoUrl3=videoUrl;
     token=Date.now()+Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);       
	try
	{
	if(videocode && andbparams && cachenot!=2 &&  andbparams['hb_format'] && andbparams['hb_format']=='video')	
	{	
	console.log('VIDEOURL'+videoUrl+'JSONAGAIN'+JSON.stringify(andbparams));
	try
	{
	params1=eval('params'+idnew12);
	token=params1['token'];	
	}
	catch(e)
	{	
	
	token=Date.now()+Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);	
	}	
	url3="https://prebid.andbeyond.media/videoset.php?id="+idnew12+"&aff=3601001&token="+token+"&diff=10&cache=3600&url1="+videoUrl;
	videoUrl='https://prebid.andbeyond.media/videoread.php?id='+idnew12+'&aff=3601001&diff=10&cache=3600&token='+token+'&host='+location.protocol + '//imasdk.googleapis.com';
     videoUrl3='https://prebid.andbeyond.media/videoread.php?id='+idnew12+'&aff=3601001&diff=10&cache=3600&token='+token+'&host='+location.protocol + '//' + location.host;
	console.log(url3);
	const xhttp = new XMLHttpRequest();
		
	
	xhttp.onload = function() {
	
	
	}
	
	xhttp.open("GET", url3);
	xhttp.send();
	}	
	}	
	catch(e){
console.log("EXCEPTION AGAIN")
	}	
	videoUrl1=videoUrl;	
	console.log(videoUrl1);	
	console.log('VIDEO');	
	}	
	if(context=='outstream' || serversidevideo==0)	
	{	
	bids1=rtbpbjs.getBidResponses(idnew12);	
	if(bids1 && bids1[idnew12] && bids1[idnew12]['bids'])	
	{	
	bids2=bids1[idnew12]['bids'];	
	if(bids2)	
	{	
	cpm_final=0;	
	for(i=0;i<bids2.length;i++)	
	{	
	if(bids2[i].mediaType=='video' )	
	{	
	cpm=bids2[i].cpm;	
	bidnew=bids2[i];	
	vastXml=bidnew.vastXml;	
		
	if(vastXml && cpm>cpm_final)	
	{	
	ttl=bidnew.ttl;	
	flag_vast=1;	
	videoUrl=vastXml;	
		
videoUrl = videoUrl.replace(/[\r\n]+/g, "").replace(/["]+/g, "\\\"");
	}	
		
	if (bidnew.adResponse && bidnew.adResponse.ad && bidnew.adResponse.ad.video && typeof bidnew.adResponse.ad.video.content === 'string' && cpm>cpm_final) {	
		
	videoUrl=vastXml;	
	flag_vast=1;	
videoUrl = videoUrl.replace(/[\r\n]+/g, "").replace(/["]+/g, "\\\"");
		
	}	
		
		
	}	
	}	
		
	}	
	}	
		
		
	}	
	var enew1 = document.createElement('div');	
		
		
	enew1.setAttribute('id',idplay);	
 if(playerwidth=='100')
         style1='width:'+width+'px;height:1px;margin:0 auto;text-align:center;overflow:hidden';
 else
  style1='width:'+playerwidth+'px;height:1px;margin:0 auto;text-align:center;overflow:hidden';
	enew1.setAttribute('style',style1);	
	var script = document.createElement('script');	
	script.type = 'text/javascript';	
	params=andbparams;	
	paramsnew={};	
	paramsnew['hb_pb']=hb_pb;	
	paramsnew['hb_bidder']=hb_bidder;	
	paramsnew['hb_adid']=hb_adid;	
	paramsnew['width']=width;	
	paramsnew['height']=height;	
     paramsnew['widthpx']=width+'px';  
     paramsnew['heightpx']=height+'px'; 
     paramsnew['no']=0; 
paramsnew['token']=token;
if(playerwidth=='100')
{
 paramsnew['playerwidth']='"'+playerwidth+'%"';
paramsnew['playerheight']='"auto"';
  paramsnew['playerwidthpx']='"'+playerwidth+'%"';
paramsnew['playerheightpx']='"auto"';
}
else
{
 paramsnew['playerwidth']='"'+playerwidth+'"';
        paramsnew['playerheight']='"'+playerheight+'"';
 paramsnew['playerwidthpx']=playerwidth+'px';
 paramsnew['playerheightpx']=playerheight+'px';
}
		
	eval("params" + idnew12 + " = paramsnew");	
	eval("videoparams" + idnew12 + " = andbparams");	
		
		
		
 if(videofallback==0)
	adunc='function call_video(){ try{newid=divid;console.log("ERORID"+newid);if(document.getElementById(newid))document.getElementById(newid).remove();console.log(\'NEWIDREMOVAL\'+newid);newid1=newid.replace(\'andplayer\',\'andbeyond\',newid);document.getElementById(newid1).style.display="block";params1=eval(\'params\'+newid1); enew=document.getElementById(newid1);enew.style.width = params1[\'widthpx\'];enew.style.height = params1[\'heightpx\']; adPlayerPro.setAdVolume(0); }catch(e){console.log("EXCEPTIONERROR"+e);}};adPlayerPro.on(\'AdStopped\', function(){  call_video();  });adPlayerPro.on(\'AdError\', function(){ error++;if(error==numbernew) call_video();  });adPlayerPro.on(\'AdSkipped\', function(){  call_video(); });adPlayerPro.on(\'AdStarted\', function(){error=0;if(no==1){no=2; newid=divid;console.log(\'NEWID\'+newid);newid1=newid.replace(\'andplayer\',\'andbeyond\',newid);;params1=eval(\'params\'+newid1);enew=document.getElementById(newid); if( document.getElementById(newid1)) document.getElementById(newid1).style.display="none";style1="margin:0 auto;text-align:center;overflow:hidden";if(enew){enew.setAttribute("style",style1); 	enew.style.width = params1[\'playerwidthpx\'];enew.style.height = params1[\'playerheightpx\'];enew.setAttribute("width",params1["width"]);enew.setAttribute("height",params1["height"]);}} });adPlayerPro.on("AdLoaded", function(){ console.log("LOADED");if(no==0){no=1;  var img = document.createElement("img"); try { newid=divid;newid1=newid.replace(\'andplayer\',\'andbeyond\',newid);id1=eval(newid1);params1=eval(\'params\'+newid1);params=eval(\'videoparams\'+newid1);console.log("HERE");var img = document.createElement("img"); img.src = "https:\/\/prebid.andbeyond.media\/impben1.php?aff=3601001&publisher_id="+params["hb_bidder"]+"&price="+params["hb_pb"]+"&type=refresh&cid=video&context="+flag_vast_context+"&width="+params1["width"]+"&height="+params1["height"]+"&country="+ttl+flag_vast; img.setAttribute("width",1); img.setAttribute("height",1); style1="display:none"; img.setAttribute("style",style1); document.getElementById(divid).appendChild(img); }catch(e){console.log("EXCEPTION"+e);}} });';	
		
		
		
		
		
		
		
		
 if(videofallback==1)
     adunc='function call_video(){   try{newid=divid;if(document.getElementById(newid))document.getElementById(newid).remove();newid=divid;console.log(\'NEWIDREMOVAL\'+newid);newid1=newid.replace(\'andplayer\',\'andbeyond\',newid);document.getElementById(newid1).style.display="block"; params1=eval(\'params\'+newid1); enew=document.getElementById(newid1);enew.style.width = params1[\'widthpx\'];enew.style.height = params1[\'heightpx\'];adPlayerPro.setAdVolume(0); }catch(e){console.log("EXCEPTIONERROR"+e);} };adPlayerPro.on(\'AdStopped\', function(){  console.log("STOPPED");call_video();  });adPlayerPro.on(\'AdError\', function(){ error++;console.log("ERROR"+error+"NUMBERNEW"+numbernew);if(error==numbernew) call_video();  });adPlayerPro.on(\'AdStarted\', function(){if(loop==false && formattype=="inStream")numbernew=numbernew1;error=0;newid=divid;console.log(\'NEWID\'+newid);newid1=newid.replace(\'andplayer\',\'andbeyond\',newid);params1=eval(\'params\'+newid1);no=params1[\'no\'];console.log("STARTED"+no);if(no>=1){no=2; params1[\'no\']=2;eval("params" + newid1 + " = params1");enew=document.getElementById(newid); if( document.getElementById(newid1)) document.getElementById(newid1).style.display="none";style1="margin:0 auto;text-align:center;overflow:hidden";if(enew){enew.setAttribute("style",style1);     enew.style.width = params1[\'playerwidthpx\'];enew.style.height = params1[\'playerheightpx\'];enew.setAttribute("width",params1["playerwidth"]);enew.setAttribute("height",params1["playerheight"]);}} });adPlayerPro.on("AdLoaded", function(){ newid=divid;newid1=newid.replace(\'andplayer\',\'andbeyond\',newid);id1=eval(newid1);params1=eval(\'params\'+newid1);no=params1[\'no\'];console.log("LOADED"+no);if(no==0){no=1;params1[\'no\']=1;eval("params" + newid1 + " = params1");  var img = document.createElement("img"); try { params=eval(\'videoparams\'+newid1);var img = document.createElement("img"); img.src = "https:\/\/prebid.andbeyond.media\/impben1.php?aff=3601001&publisher_id="+params["hb_bidder"]+"&price="+params["hb_pb"]+"&type=refresh&cid=video&context="+flag_vast_context+"&width="+params1["width"]+"&height="+params1["height"]+"&country="+ttl+flag_vast; img.setAttribute("width",1); img.setAttribute("height",1); style1="display:none"; img.setAttribute("style",style1); document.getElementById(divid).appendChild(img); }catch(e){console.log("EXCEPTION"+e);}} });';       
 if(videofallback==2)
 adunc='function call_video(){ try{  newid=divid;if(document.getElementById(newid))document.getElementById(newid).remove();newid=divid;console.log(\'NEWID\'+newid);newid1=newid.replace(\'andplayer\',\'andbeyond\',newid);document.getElementById(newid1).style.display="block";params1=eval(\'params\'+newid1); enew=document.getElementById(newid1);enew.style.width = params1[\'widthpx\'];enew.style.height = params1[\'heightpx\'];adPlayerPro.setAdVolume(0); }catch(e){}};adPlayerPro.on(\'AdVideoStart\', function(){  });adPlayerPro.on(\'AdStopped\', function(){  call_video();  });adPlayerPro.on(\'AdError\', function(){   });adPlayerPro.on(\'AdLoaded\', function(){if(no==0){no=1; newid=divid;console.log(\'NEWID\'+newid);newid1=newid.replace(\'andplayer\',\'andbeyond\',newid);;params1=eval(\'params\'+newid1);enew=document.getElementById(newid); if( document.getElementById(newid1)) document.getElementById(newid1).style.display="none";style1="margin:0 auto;text-align:center;overflow:hidden";if(enew){enew.setAttribute("style",style1);     enew.style.width = params1[\'playerwidthpx\'];enew.style.height = params1[\'playerheightpx\'];enew.setAttribute("width",params1["playerwidth"]);enew.setAttribute("height",params1["playerheight"]);}} });adPlayerPro.on("AdStarted", function(){ if(loop==false && formattype=="inStream")numbernew=numbernew1;if(no==1){no=2;  var img = document.createElement("img"); try { newid=divid;newid1=newid.replace(\'andplayer\',\'andbeyond\',newid);id1=eval(newid1);params1=eval(\'params\'+newid1);params=eval(\'videoparams\'+newid1);var img = document.createElement("img"); img.src = "https:\/\/prebid.andbeyond.media\/impben1.php?aff=323541&publisher_id="+params["hb_bidder"]+"&price="+params["hb_pb"]+"&type=refresh&cid=video&context="+flag_vast_context+"&width="+params1["width"]+"&height="+params1["height"]+"&country="+ttl+flag_vast; img.setAttribute("width",1); img.setAttribute("height",1); style1="display:none"; img.setAttribute("style",style1); document.getElementById(divid).appendChild(img); }catch(e){console.log("EXCEPTION"+e);}} });';
		
		
		
		
		
		
		
		
	 if(videoUrl==undefined && videounit==0)	
	 {	
	document.getElementById(idnew12).style.display='block';	
		
		
	 }	
	 else {	
 if(cachenot==2)
 videoUrl=videoUrl2;
 if(cachenot==1)
  numbernew=(tags+1);
 else
 	numbernew=tags;
	if(context=='outstream' || flag_vast==1)	
	numbernew=1;	
		
	flag_vast_context=context;	
numbernew=1;
numbernew1=0;
numbernew=rotation+1;
if(tags==2 && tagnew!=null )
{
if(tagnew.indexOf('adplayer')>=0 || tagnew.indexOf('video')>=0 )
numbernew=numbernew+rotation+1;
else
{
numbernew=numbernew+1;
numbernew1++;
}
}
numbernew=numbernew+1;
numbernew1++;
	if(context=='outstream' || flag_vast==1)	
	flag_vast_context='outstream';	
	else	
	flag_vast_context='instream';	
		
	adunc=adunc+'} testplayer(document.currentScript.parentNode.id,0,width,height,numbernew,0,flag_vast_context,numbernew1,loop,formattype);';	
	if(context=='outstream')	
	client_type='url'	
	else	
	client_type='googima';	
		
		
		
  adunc=' eval("paramsadplayer" + divid + " = adPlayerPro");'+adunc;
sequential=false;
	if(context=='outstream' || flag_vast==1)	
	 {	
script.text='function testplayer(divid,no,width,height,numbernew,error,flag_vast_context,numbernew1,loop,formattype){adPlayerPro=AdPlayerPro(\''+idplay+'\').setup({    "width":'+width+',          "height": '+height+',                "autoStart": true,          "muted": true,"soundByHover":true,  "type": "'+formattype+'",          "advertising": {"tag":"'+videoUrl+'",       "requestTimeout": 10000,        "creativeTimeout": 5000,        "bestTimeout": 20000,        "position": "'+stickypos+'",        "barColor": "#2e95ff",        "skipOffset": 30,"showPercent":'+showpercent+',"playPercent":'+playpercent+',"replay":'+replay+',"lifecycleLoop":'+loop+',        "sticky":'+sticky1+',        "stickyWidth": "'+stickywidth+'",        "stickyHeight": "'+stickyheight+'",        "rotation": 0,        "sequential": '+sequential+'}, "tapToUnmute": true        });'+adunc;
	 }	
	 else {	
breaksc=', "breakScheduleType": [ "PRE", "MID" ]';
breaksc1=',"breakSchedule": [ { "type": "PRE", }, { "type": "MID",   "startOn": "30,60,90,120,150,180,210,240,270,300" } ]';
     if(tagnew && tagnew!='null')    
     {       
if(tagnew && (tagnew.toLowerCase().indexOf('adplayer')>=0 || tagnew.toLowerCase().indexOf('video')>=0))
tagnew1='https://pubads.g.doubleclick.net/gampad/ads?iu='+tagnew+'&description_url=$$$&tfcd=0&npa=0&sz=640x480&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=';
else
tagnew1='https://serving.stat-rock.com/v1/placements/'+tagnew+'/code/vpaid/1?w=640&h=480&url='+window.location.href+'&cb='+ran+'&C_ITEM_TITLE=__item-title__&ITEM_DESCRIPTION=__item-description__&ITEM_MEDIAID=__item-mediaid__&ITEM_FILE=__item-file__&ITEM_DURATION=__item-duration__&ITEM_TAGS=__item-tags__&ITEM_CUSTOMPARAM=__item-customparam__';
     if(cachenot==1) 
     {       
     if(tagnew1.indexOf('google')>=0)        
     tagst='{"closeButton":true,"closeDelay":30,"tag":[{"url":"'+videoUrl+'","client":"'+client_type+'","type":"url","rotation":true,"repeat":false,"replay":true'+breaksc+'},{"url":"'+tagnew1+'","client":"googima","type":"url","rotation":true,"replay":true'+breaksc+'},{"url":"'+videoUrl2+'","client":"'+client_type+'","type":"url","rotation":true,"repeat":false,"replay":true,"rc":false'+breaksc+'}]';       
     else    
     tagst='{"closeButton":true,"closeDelay":30,"tag":[{"url":"'+videoUrl+'","client":"'+client_type+'","type":"url","rotation":true,"repeat":false,"replay":true'+breaksc+'},{"url":"'+tagnew1+'","client":"vast","type":"url","rotation":true,"replay":true'+breaksc+'},{"url":"'+videoUrl2+'","client":"'+client_type+'","type":"url","rotation":true,"repeat":false,"replay":true,"rc":false'+breaksc+'}]';  
             
     }       
     else    
     {       
     if(tagnew1.indexOf('google')>=0)        
     tagst='{"closeButton":true,"closeDelay":30,"tag":[{"url":"'+videoUrl+'","client":"'+client_type+'","type":"url","rotation":true,"repeat":false,"replay":true'+breaksc+'},{"url":"'+tagnew1+'","client":"googima","type":"url","rotation":true,"replay":true'+breaksc+'},{"url":"'+videoUrl3+'","client":"vast","type":"url","rotation":true,"repeat":false,"replay":true'+breaksc+'}]';      
     else    
     tagst='{"closeButton":true,"closeDelay":30,"tag":[{"url":"'+videoUrl+'","client":"'+client_type+'","type":"url","rotation":true,"repeat":false,"replay":true'+breaksc+'},{"url":"'+tagnew1+'","client":"vast","type":"url","rotation":true,"replay":true'+breaksc+'},{"url":"'+videoUrl3+'","client":"vast","type":"url","rotation":true,"repeat":false,"replay":true'+breaksc+'}]'; 
     }       
     }       
     else    
     {       
     if(cachenot==1) 
     tagst='{"closeButton":true,"closeDelay":30,"tag":[{"url":"'+videoUrl+'","client":"'+client_type+'","type":"url","rotation":true,"replay":true,"repeat":false},{"url":"'+videoUrl2+'","client":"'+client_type+'","type":"url","rotation":true,"replay":true,"repeat":false,"rc":false'+breaksc+'}]'; 
     else    
     tagst='{"closeButton":true,"closeDelay":30,"tag":[{"url":"'+videoUrl+'","client":"'+client_type+'","type":"url","rotation":true,"replay":true,"repeat":false'+breaksc+'},{"url":"'+videoUrl3+'","client":"vast","type":"url","rotation":true,"replay":true,"repeat":false'+breaksc+'}]';     
     }       
	falt='"file": "'+fallback_id+'"';	
	if(fallback_type=='rss')	
	{	
     falt='"file": { "type": "rss", "limit": "5", "url": "'+fallback_id+'", "parsePage": "true", "parser":"parser.img = function () { return $(\'<b>\' + .find(\'description\').text() + \'</b>\').find(\'img\').attr(\'src\') || ( && .find(\'.article-image img\').attr(\'src\'))}", }';    
	}	
		
	if(fallback_type=='file')	
	{	
	falt='"file": "'+fallback_id+'"';	
	}	
	if(fallback_type=='youtube')	
	{	
	falt='"file":{"type":"youtube","videoId":"'+fallback_id+'"}';	
	}	
		
		
if(playerwidth=='100')
width1='"100%","aspectratio":"4:3"';
else
width1='"'+playerwidth+'","height":"'+playerheight+'"';	
	if(videofallback==1 || videofallback==2)	
script.text='function testplayer(divid,no,width,height,numbernew,error,flag_vast_context,numbernew1,loop,formattype){adPlayerPro=AdPlayerPro(\''+idplay+'\').setup({    "width":'+width1+',                "autoStart": true,          "muted": true,"soundByHover":true,  "type": "'+formattype+'","videoCloseButton":true,"forceFile": "true",'+falt+',          "advertising": '+tagst+breaksc1+',       "requestTimeout": 10000,        "creativeTimeout": 5000,        "bestTimeout": 20000,        "position": "'+stickypos+'",        "barColor": "#2e95ff",        "skipOffset": 30,"showPercent":'+showpercent+',"playPercent":'+playpercent+',"lifecycleLoop":'+loop+',        "sticky":'+sticky1+',        "stickyWidth": "'+stickywidth+'",        "stickyHeight": "'+stickyheight+'",        "rotation": '+rotation+',   "replay": '+replay+',       "sequential": '+sequential+'}, "tapToUnmute": true        });'+adunc;
	else	
script.text='function testplayer(divid,no,width,height,numbernew,error,flag_vast_context,numbernew1,loop,formattype){adPlayerPro=AdPlayerPro(\''+idplay+'\').setup({    "width":'+width1+',                "autoStart": true,          "muted": true,"soundByHover":true,  "type": "'+formattype+'",          "advertising": '+tagst+',       "requestTimeout": 10000,        "creativeTimeout": 5000,        "bestTimeout": 20000,        "position": "BL",        "barColor": "#2e95ff",        "skipOffset": 30,"showPercent":'+showpercent+',"playPercent":'+playpercent+',"lifecycleLoop":'+loop+',        "sticky":'+sticky1+',        "stickyWidth": "'+stickywidth+'",        "stickyHeight": "'+stickyheight+'",        "rotation": '+rotation+',"replay": '+replay+',          "sequential": '+sequential+'}, "tapToUnmute": true        });'+adunc;
}		
console.log('SCRIPTNEW'+script.text);
		
     menu=document.getElementById(idnew12);  
 if(document.getElementById(idplay)==undefined) 
 { 
	menu.parentNode.insertBefore(enew1,menu);	
     enew1.appendChild(script);      
 } 
	if(format!=undefined && format=='video' && (context=='instream' || context=='outstream'))	
	{	
	var img = document.createElement('img');	
	var windowwidthfloor=window.innerWidth;	
		
		
		
		
		
	}	
	}	
	}	
	catch(e)	
	{	
		
 console.log("EXCEPTIONNEW"+e);            
	document.getElementById(idnew12).style.display='block';	
	}	
	}	



var sitemainurlandbyeond=window.location.origin+window.location.pathname;
if(sitemainurlandbyeond.indexOf("andhrajyothy.com")>=0){

}else{
var andbeyondhttp = new XMLHttpRequest();
andbeyondhttp.onreadystatechange = function() {
if(this.readyState == 4 && this.status == 200) {
}
};
andbeyondhttp.open("GET", "https://prebid.andbeyond.media/domainping.php?domain="+sitemainurlandbyeond+"&aff=3601001");
andbeyondhttp.responseType = "json";
andbeyondhttp.send();
}

if(sitemainurlandbyeond.indexOf("andhrajyothy.com")>=0){




var getQueryString_val_new = function ( field, url ) {
  var href = url ? url : window.location.href;
  var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
   var string = reg.exec(href);
   return string ? string[1] : null;
};


debugtest2=getQueryString_val_new('debugtest2');

var observ={};
var slot_vis={};
var start_time={};
var total_vis={};
var timedate1;
var andstatus300=0; 
var andstatus3001=0; 
var prebid_active=1;
var newtestunitcount=1;
var adlooksstatus=0;
var adlooksstatus1=0;
var adloox_fraud=0;
var andbeyondadult=0;
var adplayer_d=1;
function calcTime(cityddd, offsetdd) {

   var ddd = new Date();
   var utcdd = ddd.getTime() + (ddd.getTimezoneOffset() * 60000);
  var nde = new Date(utcdd + (3600000*offsetdd));
   hoursssss=nde.getHours();
    return hoursssss;

}



var newunitcallback=0;

var city_rtb='DELHI';
var timezonename='ASIA';
var Countrytimezone='ASIA';
var city_ip='1234445';
var city_region='DL';
var country_rtb1='IN';

const loadDatageo = async (url, timeoutThreshold) => {
try
{
  const controller = new AbortController()

  const timeoutId = setTimeout(() => {
    controller.abort()
  }, timeoutThreshold)
  const response = await fetch(url, {
    signal: controller.signal,
  })
  clearTimeout(timeoutId)
  const data = await response.json()
    if(Object.keys(data).length > 0){
 var andbeyondgeo = data;
  country_rtb1=andbeyondgeo["countryCode"].toString().toUpperCase();
      if(andbeyondgeo["city"]!=null){
      city_rtb=andbeyondgeo["city"].toString().toUpperCase();
    }else{
      city_rtb=andbeyondgeo["countryName"].toString().toUpperCase();
    }
    
     if(andbeyondgeo["regionCode"]!=null){
      city_region=andbeyondgeo["regionCode"].toString().toUpperCase();
    }else{
      city_region=andbeyondgeo["countryName"].toString().toUpperCase();
    }
    if(andbeyondgeo["timeZone"]!=null){
Countrytimezone=andbeyondgeo["timeZone"]["id"].toString().toUpperCase();

    }else{
    Countrytimezone=andbeyondgeo["countryName"].toString().toUpperCase();
    }
     if(andbeyondgeo["timeZone"]!=null){
timezonename=andbeyondgeo["timeZone"]["id"].toString().toUpperCase();

    }else{
    timezonename=andbeyondgeo["countryName"].toString().toUpperCase();
    }
 
       newunitcallback=1;
      netacuitycpde++;
}


  return data;
 } catch (error) {

}
}

loadDatageo('https://rtbdemand.apiip.net/api/check?accessKey=7ef45bac-167a-4aa8-8c99-bc8a28f80bc5',4000);



var prebid_active=1;

var block_url=[{"url":"lit.andhrajyothy.com\/new%20stories\/sathyanveshana-13493\/page\/5"}];


var width;
var height;


var size3001status=1;
var size3002status=1;
var size3003status=1;
var size3004status=1;
var size3005status=1;
var size3006status=1;
var size3008status=1;
var size3009status=1;

var size6001status=1;
var size6002status=1;
var size6003status=1;


var size7281status=1;
var size7282status=1;
var size7283status=1;
var size7284status=1;
var size7285status=1;
var size7286status=1;
var size7287status=1;
var size7288status=1;

var size1601status=1;
var size1602status=1;
var size1603status=1;
var size1604status=1;

var size1201status=1;
var size1202status=1;
var size1203status=1;
var size1204status=1;

var size9701status=1;
var size9702status=1;
var size9703status=1;

var size9702501status=1;
var size9702502status=1;


var size3201status=1;
var size3202status=1;
var size3203status=1;
var size3204status=1;
var size3205status=1;
var size3206status=1;
var size3207status=1;
var size3208status=1;
var size3209status=1;
var size32010status=1;
var size32011status=1;
var size32012status=1;
var size32013status=1;
var size32014status=1;
var size32015status=1;
var size32016status=1;
var size32017status=1;
var size32018status=1;
var size32019status=1;
var size32020status=1;
var size32021status=1;
var size32022status=1;
var size32023status=1;
var size32024status=1;
var size32025status=1;

var size1001status=1;
var size1002status=1;
var size1003status=1;
var size1004status=1;




var label_adapter={"medianet":["jadumedianet1465","jadumedianet141388"],"pubmatic":["jadupubmatic18205","jadupubmatic181534"],"getapp":["getapp1","jadugetapp10378","jadugetapp1081"],"rubicon":["jadurubicon21984","jadurubicon211766"],"bcmapp":["jadubcmapp7848","jadubcmapp7667"],"andbeyond":["jaduandbeyond51570","jaduandbeyond5346"],"rtbdemandadk":["jadurtbdemandadk191014","jadurtbdemandadk191208"],"oftmedia":["oft1","jaduoftmedia15233","jaduoftmedia15611"],"openx":["openx1","jaduopenx161623","jaduopenx161306"],"33across":["33across1","jadu33across1910","jadu33across11822"],"appnexus":["jaduappnexus61071","jaduappnexus61186"],"abmapp":["jaduabmapp2100","jaduabmapp21240"],"adagio":["jaduadagio3526","jaduadagio31065"],"improvedigital":["improve1","jaduimprovedigital111417","jaduimprovedigital1116"],"smartadserver":["smartadserver2","smartadserver1","jadusmartadserver23764","jadusmartadserver23608"],"criteointl":["criteointl1","cirteointl2","jaducriteointl91827","jaducriteointl91712"],"criteo":["criteo2","criteo1","jaducriteo81372","jaducriteo8445"],"luponmedia":["jaduluponmedia131901","jaduluponmedia13929"],"ix":["jaduix12923","jaduix12784"],"smaato":["smaato1","jadusmaato221487","jadusmaato22832"],"project-limelight":["lime1","jaduproject-limelight171737","jaduproject-limelight17806"],"adtelligent":["jaduadtelligent41414","jaduadtelligent41756"],"ucfunnel":["ucfunnel2","ucfunnel1","jaduucfunnel251622","jaduucfunnel251845"],"all":["auto2","auto1"],"rtbhouse":["jadurtbhouse20330","jadurtbhouse20870"],"sovrn":["jadusovrn241072","jadusovrn241971"],"abmanx":["abmanx1"],"onetag":["onetag1"],"eplanning":["eplan1"],"spotx":["spotxvideo1"],"openxoutstream":["openxoutstream1"]};
var machine_rules="{}";
function isInteger(num){
return (num^0)=== num;
}

var tier2=0;
var tier3=0;
var globalandbeyond=0;

var factor_internal=0;
var timebased=1;
var timebased_refresh=60;
var timer_refresh=0;
var factor_visible=1;
var factor_tier1=1;
var factor_tier2=2;
var factor_tier1_text='TIER1';
var factor_tier2_text='TIER2_US';

var no_refresh='<!--NO_REFRESH-->';
var detectPartial=true;
var highcpm=0.09;
var highcpm1=highcpm;
var height;
var width;


var strategy=0;

function myTimer() {
timer_refresh=timer_refresh+1;

}
var myVar = setInterval(myTimer, 1000);



String.prototype.replaceAll = function(searchStr, replaceStr) {
    var str = this;

    // escape regexp special characters in search string
    searchStr = searchStr.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

    return str.replace(new RegExp(searchStr, 'gi'), replaceStr);
};


function isVisible(elem) {
    if (!(elem instanceof Element)) return true;
    const style = getComputedStyle(elem);
    if (style.display === 'none') return false;
    if (style.visibility !== 'visible') return false;
    if (style.opacity < 0.1) return false;
    if (elem.offsetWidth + elem.offsetHeight + elem.getBoundingClientRect().height +
        elem.getBoundingClientRect().width === 0) {
        return false;
    }
    const elemCenter   = {
        x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
        y: elem.getBoundingClientRect().top + elem.offsetHeight / 2
    };
    if (elemCenter.x < 0) return false;
    if (elemCenter.x > (document.documentElement.clientWidth || window.innerWidth)) return false;
    if (elemCenter.y < 0) return false;
    if (elemCenter.y > (document.documentElement.clientHeight || window.innerHeight)) return false;
    let pointContainer = document.elementFromPoint(elemCenter.x, elemCenter.y);
    if(pointContainer!=null && pointContainer!=undefined){

    do {
        if (pointContainer === elem) return true;
    } while (pointContainer = pointContainer.parentNode);
    return false;
    }
    
}


var randomval1=Math.floor(Math.random() * 10) + 1;
 // console.log("randomval1"+randomval1);
var network1=21751243814;
var network2=21751243814;
var percent1=10;

if(randomval1<=percent1){
 var namemc=network1;
}else{
var namemc=network2;
}



function bidadjust1(cpm)
{



if (cpm < 8) {
cpm1=cpm;

cpm= (cpm).toFixed(2);
return cpm;
} else {
return '8.00';
}



}


var windowwidth2 = window.parent.innerWidth;


var PREBID_TIMEOUT_NEW =4000;
var floor=0;
var ref=refresh;


var rtbpbjs = rtbpbjs || {};
rtbpbjs.que = rtbpbjs.que || [];



var activeadunit =[
{
code: "andbeyond7281",
mediaTypes:{
banner:{
sizes: [[728,90],[468,60],[600,100],[640,100]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85848,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond7281",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498476"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535773
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896500",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_728x90_HB@728x90"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond7282",
mediaTypes:{
banner:{
sizes: [[728,90],[468,60],[600,100],[640,100]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85848,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond7282",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498476"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535773
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896500",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_728x90_HB@728x90"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond7283",
mediaTypes:{
banner:{
sizes: [[728,90],[468,60],[600,100],[640,100]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85848,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond7283",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498476"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535773
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896500",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_728x90_HB@728x90"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond7284",
mediaTypes:{
banner:{
sizes: [[728,90],[468,60],[600,100],[640,100]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85848,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond7284",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498476"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535773
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896500",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_728x90_HB@728x90"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond7285",
mediaTypes:{
banner:{
sizes: [[728,90],[468,60],[600,100],[640,100]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85848,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond7285",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498476"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535773
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896500",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_728x90_HB@728x90"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond7286",
mediaTypes:{
banner:{
sizes: [[728,90],[468,60],[600,100],[640,100]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85848,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond7286",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498476"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535773
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896500",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_728x90_HB@728x90"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond7287",
mediaTypes:{
banner:{
sizes: [[728,90],[468,60],[600,100],[640,100]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85848,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond7287",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498476"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535773
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896500",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_728x90_HB@728x90"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond7288",
mediaTypes:{
banner:{
sizes: [[728,90],[468,60],[600,100],[640,100]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85848,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond7288",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498476"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535773
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896500",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_728x90_HB@728x90"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond7289",
mediaTypes:{
banner:{
sizes: [[728,90],[468,60],[600,100],[640,100]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85848,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond7289",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498476"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535773
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896500",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_728x90_HB@728x90"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond1201",
mediaTypes:{
banner:{
sizes: [[120,600]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 87089,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond1201",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498486"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535783
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896502",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_120x600_HB@120x600"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond1202",
mediaTypes:{
banner:{
sizes: [[120,600]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 87089,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond1202",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498486"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535783
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896502",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_120x600_HB@120x600"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond1203",
mediaTypes:{
banner:{
sizes: [[120,600]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 87089,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond1203",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498486"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535783
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896502",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_120x600_HB@120x600"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond1204",
mediaTypes:{
banner:{
sizes: [[120,600]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 87089,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond1204",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498486"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535783
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896502",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_120x600_HB@120x600"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond1205",
mediaTypes:{
banner:{
sizes: [[120,600]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 87089,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond1205",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498486"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535783
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896502",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_120x600_HB@120x600"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond1601",
mediaTypes:{
banner:{
sizes: [[160,600]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85850,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond1601",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498484"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535775
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896501",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_160x600_HB@160x600"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond1602",
mediaTypes:{
banner:{
sizes: [[160,600]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85850,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond1602",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498484"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535775
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896501",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_160x600_HB@160x600"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond1603",
mediaTypes:{
banner:{
sizes: [[160,600]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85850,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond1603",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498484"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535775
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896501",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_160x600_HB@160x600"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond1604",
mediaTypes:{
banner:{
sizes: [[160,600]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85850,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond1604",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498484"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535775
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896501",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_160x600_HB@160x600"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond1605",
mediaTypes:{
banner:{
sizes: [[160,600]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85850,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond1605",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498484"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535775
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896501",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_160x600_HB@160x600"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond1606",
mediaTypes:{
banner:{
sizes: [[160,600]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85850,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond1606",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498484"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535775
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896501",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_160x600_HB@160x600"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond3001",
mediaTypes:{
banner:{
sizes: [[300,250],[200,200],[250,250],[200,200]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85846,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond3001",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498474"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535774
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896492",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_300x250_HB@300x250"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond3002",
mediaTypes:{
banner:{
sizes: [[300,250],[200,200],[250,250],[200,200]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85846,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond3002",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498474"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535774
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896492",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_300x250_HB@300x250"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond3003",
mediaTypes:{
banner:{
sizes: [[300,250],[200,200],[250,250],[200,200]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85846,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond3003",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498474"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535774
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896492",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_300x250_HB@300x250"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond3004",
mediaTypes:{
banner:{
sizes: [[300,250],[200,200],[250,250],[200,200]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85846,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond3004",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498474"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535774
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896492",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_300x250_HB@300x250"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond3005",
mediaTypes:{
banner:{
sizes: [[300,250],[200,200],[250,250],[200,200]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85846,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond3005",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498474"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535774
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896492",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_300x250_HB@300x250"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond3006",
mediaTypes:{
banner:{
sizes: [[300,250],[200,200],[250,250],[200,200]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85846,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond3006",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498474"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535774
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896492",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_300x250_HB@300x250"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond3007",
mediaTypes:{
banner:{
sizes: [[300,250],[200,200],[250,250],[200,200]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85846,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond3007",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498474"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535774
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896492",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_300x250_HB@300x250"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond3008",
mediaTypes:{
banner:{
sizes: [[300,250],[200,200],[250,250],[200,200]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85846,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond3008",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498474"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535774
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896492",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_300x250_HB@300x250"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond3009",
mediaTypes:{
banner:{
sizes: [[300,250],[200,200],[250,250],[200,200]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85846,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond3009",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498474"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535774
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896492",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_300x250_HB@300x250"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond30010",
mediaTypes:{
banner:{
sizes: [[300,250],[200,200],[250,250],[200,200]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85846,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond30010",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498474"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535774
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896492",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_300x250_HB@300x250"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond30011",
mediaTypes:{
banner:{
sizes: [[300,250],[200,200],[250,250],[200,200]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85846,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond30011",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498474"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535774
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896492",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_300x250_HB@300x250"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond30012",
mediaTypes:{
banner:{
sizes: [[300,250],[200,200],[250,250],[200,200]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85846,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond30012",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498474"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535774
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896492",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_300x250_HB@300x250"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond30013",
mediaTypes:{
banner:{
sizes: [[300,250],[200,200],[250,250],[200,200]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85846,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond30013",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498474"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535774
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896492",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_300x250_HB@300x250"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond30014",
mediaTypes:{
banner:{
sizes: [[300,250],[200,200],[250,250],[200,200]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85846,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond30014",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498474"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535774
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896492",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_300x250_HB@300x250"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond3201",
mediaTypes:{
banner:{
sizes: [[320,50],[300,50]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85847,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond3201",
environment: "mobile",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498488"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535780
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896496",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_320x50_HB@320x50"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond3202",
mediaTypes:{
banner:{
sizes: [[320,50],[300,50]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85847,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond3202",
environment: "mobile",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498488"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535780
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896496",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_320x50_HB@320x50"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond3203",
mediaTypes:{
banner:{
sizes: [[320,50],[300,50]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85847,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond3203",
environment: "mobile",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498488"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535780
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896496",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_320x50_HB@320x50"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond3204",
mediaTypes:{
banner:{
sizes: [[320,50],[300,50]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85847,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond3204",
environment: "mobile",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498488"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535780
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896496",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_320x50_HB@320x50"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond3205",
mediaTypes:{
banner:{
sizes: [[320,50],[300,50]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85847,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond3205",
environment: "mobile",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498488"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535780
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896496",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_320x50_HB@320x50"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond3206",
mediaTypes:{
banner:{
sizes: [[320,50],[300,50]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85847,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond3206",
environment: "mobile",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498488"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535780
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896496",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_320x50_HB@320x50"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond3207",
mediaTypes:{
banner:{
sizes: [[320,50],[300,50]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85847,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond3207",
environment: "mobile",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498488"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535780
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896496",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_320x50_HB@320x50"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond3208",
mediaTypes:{
banner:{
sizes: [[320,50],[300,50]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85847,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond3208",
environment: "mobile",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498488"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535780
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896496",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_320x50_HB@320x50"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond3209",
mediaTypes:{
banner:{
sizes: [[320,50],[300,50]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85847,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond3209",
environment: "mobile",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498488"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535780
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896496",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_320x50_HB@320x50"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond32010",
mediaTypes:{
banner:{
sizes: [[320,50],[300,50]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85847,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond32010",
environment: "mobile",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498488"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535780
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896496",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_320x50_HB@320x50"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond32011",
mediaTypes:{
banner:{
sizes: [[320,50],[300,50]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85847,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond3202",
environment: "mobile",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498488"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535780
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896496",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_320x50_HB@320x50"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond32012",
mediaTypes:{
banner:{
sizes: [[320,50],[300,50]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85847,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond3202",
environment: "mobile",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498488"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535780
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896496",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_320x50_HB@320x50"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond32013",
mediaTypes:{
banner:{
sizes: [[320,50],[300,50]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85847,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond3202",
environment: "mobile",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498488"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535780
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896496",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_320x50_HB@320x50"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond32014",
mediaTypes:{
banner:{
sizes: [[320,50],[300,50]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85847,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond3202",
environment: "mobile",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498488"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535780
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896496",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_320x50_HB@320x50"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond32015",
mediaTypes:{
banner:{
sizes: [[320,50],[300,50]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85847,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond3202",
environment: "mobile",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498488"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535780
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896496",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_320x50_HB@320x50"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond32016",
mediaTypes:{
banner:{
sizes: [[320,50],[300,50]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85847,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond3202",
environment: "mobile",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498488"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535780
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896496",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_320x50_HB@320x50"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond32017",
mediaTypes:{
banner:{
sizes: [[320,50],[300,50]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85847,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond3202",
environment: "mobile",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498488"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535780
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896496",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_320x50_HB@320x50"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond32018",
mediaTypes:{
banner:{
sizes: [[320,50],[300,50]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85847,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond3202",
environment: "mobile",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498488"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535780
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896496",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_320x50_HB@320x50"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond32019",
mediaTypes:{
banner:{
sizes: [[320,50],[300,50]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85847,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond3202",
environment: "mobile",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498488"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535780
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896496",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_320x50_HB@320x50"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond32020",
mediaTypes:{
banner:{
sizes: [[320,50],[300,50]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85847,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond3202",
environment: "mobile",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498488"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535780
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896496",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_320x50_HB@320x50"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond32021",
mediaTypes:{
banner:{
sizes: [[320,50],[300,50]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85847,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond3202",
environment: "mobile",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498488"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535780
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896496",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_320x50_HB@320x50"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond32022",
mediaTypes:{
banner:{
sizes: [[320,50],[300,50]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85847,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond3202",
environment: "mobile",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498488"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535780
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896496",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_320x50_HB@320x50"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond32023",
mediaTypes:{
banner:{
sizes: [[320,50],[300,50]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85847,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond3202",
environment: "mobile",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498488"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535780
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896496",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_320x50_HB@320x50"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond32024",
mediaTypes:{
banner:{
sizes: [[320,50],[300,50]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85847,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond3202",
environment: "mobile",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498488"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535780
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896496",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_320x50_HB@320x50"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond32025",
mediaTypes:{
banner:{
sizes: [[320,50],[300,50]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85847,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond3202",
environment: "mobile",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498488"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535780
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896496",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_320x50_HB@320x50"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond6001",
mediaTypes:{
banner:{
sizes: [[300,600],[300,250],[160,600],[120,600],[300,450]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85851,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond6001",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498482"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535776
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896497",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_300x600_HB@300x600"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond6002",
mediaTypes:{
banner:{
sizes: [[300,600],[300,250],[160,600],[120,600],[300,450]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85851,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond6002",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498482"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535776
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896497",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_300x600_HB@300x600"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond6003",
mediaTypes:{
banner:{
sizes: [[300,600],[300,250],[160,600],[120,600],[300,450]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85851,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond6003",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498482"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535776
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896497",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_300x600_HB@300x600"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond6004",
mediaTypes:{
banner:{
sizes: [[300,600],[300,250],[160,600],[120,600],[300,450]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85851,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond6004",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498482"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535776
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896497",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_300x600_HB@300x600"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond6005",
mediaTypes:{
banner:{
sizes: [[300,600],[300,250],[160,600],[120,600],[300,450]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85851,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond6005",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498482"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535776
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896497",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_300x600_HB@300x600"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond9702501",
mediaTypes:{
banner:{
sizes: [[970,250]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85849,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond9702501",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498478"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535778
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896498",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_970x250_HB@970x250"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond9702502",
mediaTypes:{
banner:{
sizes: [[970,250]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85849,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond9702502",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498478"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535778
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896498",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_970x250_HB@970x250"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond9702503",
mediaTypes:{
banner:{
sizes: [[970,250]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85849,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond9702503",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498478"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535778
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896498",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_970x250_HB@970x250"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond9702504",
mediaTypes:{
banner:{
sizes: [[970,250]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85849,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond9702504",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498478"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535778
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896498",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_970x250_HB@970x250"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond9702505",
mediaTypes:{
banner:{
sizes: [[970,250]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85849,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond9702505",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498478"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535778
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896498",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_970x250_HB@970x250"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond9702506",
mediaTypes:{
banner:{
sizes: [[970,250]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 85849,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond9702506",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498478"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535778
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896498",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_970x250_HB@970x250"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond9701",
mediaTypes:{
banner:{
sizes: [[970,90],[728,90],[980,90],[640,100],[600,100],[468,60]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 87086,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond9701",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498480"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535777
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896499",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_970x90_HB@970x90"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond9702",
mediaTypes:{
banner:{
sizes: [[970,90],[728,90],[980,90],[640,100],[600,100],[468,60]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 87086,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond9702",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498480"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535777
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896499",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_970x90_HB@970x90"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond9703",
mediaTypes:{
banner:{
sizes: [[970,90],[728,90],[980,90],[640,100],[600,100],[468,60]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 87086,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond9703",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1498480"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535777
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "540896499",
delDomain: "rtbdemand-d.openx.net"
}
},{
bidder: "pubmatic",
labelAny:["pubmatic11","pubmatic12","pubmatic13"],
params: {
publisherId: "156181",
adSlot: "Andhrajyothy_970x90_HB@970x90"
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond1001",
mediaTypes:{
banner:{
sizes: [[300,100],[300,50],[320,50]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 89417,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond1001",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1626230"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535783
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond1002",
mediaTypes:{
banner:{
sizes: [[300,100],[300,50],[320,50]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 89417,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond1002",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1626230"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535783
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond1003",
mediaTypes:{
banner:{
sizes: [[300,100],[300,50],[320,50]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 89417,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond1003",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1626230"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535783
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond1004",
mediaTypes:{
banner:{
sizes: [[300,100],[300,50],[320,50]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 89417,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond1004",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1626230"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535783
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond1005",
mediaTypes:{
banner:{
sizes: [[300,100],[300,50],[320,50]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 89417,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond1002",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1626230"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535783
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond1006",
mediaTypes:{
banner:{
sizes: [[300,100],[300,50],[320,50]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 89417,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond1002",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1626230"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535783
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond1007",
mediaTypes:{
banner:{
sizes: [[300,100],[300,50],[320,50]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 89417,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond1002",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1626230"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535783
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond1008",
mediaTypes:{
banner:{
sizes: [[300,100],[300,50],[320,50]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 89417,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond1002",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1626230"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535783
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond1009",
mediaTypes:{
banner:{
sizes: [[300,100],[300,50],[320,50]],
}
},
bids: [
{
bidder: "adabm",
params: {
aid: "842986"
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 341225,
pageId: 1193705,
formatId: 89417,
domain: "https://prg-apac.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond1002",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "297700",
zoneId: "1626230"
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535783
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond3204801",
mediaTypes:{
banner:{
sizes: [[320,480],[300,250],[320,100],[320,50],[300,100],[300,50],[320,250]],
}
},
bids: [
{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond7281",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535773
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond3204802",
mediaTypes:{
banner:{
sizes: [[320,480],[300,250],[320,100],[320,50],[300,100],[300,50],[320,250]],
}
},
bids: [
{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond7281",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535773
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond3204803",
mediaTypes:{
banner:{
sizes: [[320,480],[300,250],[320,100],[320,50],[300,100],[300,50],[320,250]],
}
},
bids: [
{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond7281",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535773
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond3204804",
mediaTypes:{
banner:{
sizes: [[320,480],[300,250],[320,100],[320,50],[300,100],[300,50],[320,250]],
}
},
bids: [
{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond7281",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535773
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
},{
code: "andbeyond3204805",
mediaTypes:{
banner:{
sizes: [[320,480],[300,250],[320,100],[320,50],[300,100],[300,50],[320,250]],
}
},
bids: [
{
bidder: "projectagora",
params: {
placementId: "30721125"
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "andhrajyothy-com",
placement: "atf",
adUnitElementId: "andbeyond7281",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "getapp",
labelAny:["getapp1"],
params: {
placementId: 16535773
}
},{
bidder: "oftmedia",
labelAny:["oft1"],
params: {
placementId: "20780644"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N"
}
},{
bidder: "appnexus",
params: {
placementId: "18740036"
}
},{
bidder: "abmapp",
params: {
placementId: "17476512"
}
},{
bidder: "criteointl",
labelAny:["cirteointl2","criteointl1"],
params: {
networkId: "9745"
}
},{
bidder: "criteo",
labelAny:["criteo1","criteo2"],
params: {
networkId: "9525"
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag11","onetag12","onetag13"],
params: {
pubId: "7181130204ef46c"
}
}
]
}
];

(function () {
        
    var gads = document.createElement('script');
          gads.async = true;
          gads.type = 'text/javascript';
          var useSSL = 'https:' == document.location.protocol;
          gads.src = (useSSL ? 'https:' : 'http:') +
           '//rtbpass.andbeyond.media/prebid-custom.js';
          var node = document.getElementsByTagName('script')[0];
          node.parentNode.insertBefore(gads, node);
  
  
  
      })();
  

  rtbpbjs.que.push(function() {
       
  rtbpbjs.addAdUnits(activeadunit);
    
  });

var divandbeyond = document.createElement("div");
divandbeyond.setAttribute("id", "trackerandbeyond");
divandbeyond.style.display = "none";
divandbeyond.innerHTML = "0";
    document.head.appendChild(divandbeyond);


  var andbeyondtotalSeconds=0;
  var andbeyondtotalSeconds1=1;
    var andbeyondtimestop;

    function andbeyonddisps()
    {
      andbeyondtotalSeconds++;
      
andbeyondtotalSeconds1=andbeyondtotalSeconds;

    }


function addListenerMulti(element, eventNames, listener) {
  var events = eventNames.split(' ');
  for (var i=0, iLen=events.length; i<iLen; i++) {
    element.addEventListener(events[i], listener, false);
  }
}

 var idleStates = false;
        var idleTimers = null;
        addListenerMulti(window,"mousemove mouseover touchmove ontouchstart touchend click mouseup mousedown keydown keypress keyup submit change mouseenter scroll resize dblclick", function() {
            clearTimeout(idleTimers);
            if (idleStates == false) {

                andbeyondtimestop = setInterval(function(){andbeyonddisps()},1000);
            }
            idleStates = true;
            idleTimers = setTimeout(function () {

                clearInterval(andbeyondtimestop);
                idleStates = false; }, 3000);
        });


!function(a9,a,p,s,t,A,g){if(a[a9])return;function q(c,r){a[a9]._Q.push([c,r])}a[a9]={init:function(){q("i",arguments)},fetchBids:function(){q("f",arguments)},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]};A=p.createElement(s);A.async=!0;A.src=t;g=p.getElementsByTagName(s)[0];g.parentNode.insertBefore(A,g)}("apstag",window,document,"script","//c.amazon-adsystem.com/aax2/apstag.js");
apstag.init({
pubID: "cd6cddc5-4dca-4d77-9a65-8b894400e772",
adServer: "googletag",
videoAdServer: "DFP",
schain: {
complete: 1,
ver: '1.0',
nodes: [
{
asi: 'andbeyond.media',
sid: '11226',
hp: 1
}
]
}

});
var a9slots={"andbeyond11":{"slotID":"andbeyond11","slotName":"\/{network},1769731\/3601001-1-1-1","sizes":[[1,1]]},"andbeyond7281":{"slotID":"andbeyond7281","slotName":"\/{network},1769731\/3601001-728-90-1","sizes":[[728,90]]},"andbeyond7282":{"slotID":"andbeyond7282","slotName":"\/{network},1769731\/3601001-728-90-2","sizes":[[728,90]]},"andbeyond7283":{"slotID":"andbeyond7283","slotName":"\/{network},1769731\/3601001-728-90-3","sizes":[[728,90]]},"andbeyond7284":{"slotID":"andbeyond7284","slotName":"\/{network},1769731\/3601001-728-90-4","sizes":[[728,90]]},"andbeyond7285":{"slotID":"andbeyond7285","slotName":"\/{network},1769731\/3601001-728-90-5","sizes":[[728,90]]},"andbeyond7286":{"slotID":"andbeyond7286","slotName":"\/{network},1769731\/3601001-728-90-6","sizes":[[728,90]]},"andbeyond7287":{"slotID":"andbeyond7287","slotName":"\/{network},1769731\/3601001-728-90-7","sizes":[[728,90]]},"andbeyond7288":{"slotID":"andbeyond7288","slotName":"\/{network},1769731\/3601001-728-90-8","sizes":[[728,90]]},"andbeyond7289":{"slotID":"andbeyond7289","slotName":"\/{network},1769731\/3601001-728-90-9","sizes":[[728,90]]},"andbeyond1201":{"slotID":"andbeyond1201","slotName":"\/{network},1769731\/3601001-120-600-1","sizes":[[120,600]]},"andbeyond1202":{"slotID":"andbeyond1202","slotName":"\/{network},1769731\/3601001-120-600-2","sizes":[[120,600]]},"andbeyond1203":{"slotID":"andbeyond1203","slotName":"\/{network},1769731\/3601001-120-600-3","sizes":[[120,600]]},"andbeyond1204":{"slotID":"andbeyond1204","slotName":"\/{network},1769731\/3601001-120-600-4","sizes":[[120,600]]},"andbeyond1205":{"slotID":"andbeyond1205","slotName":"\/{network},1769731\/3601001-120-600-5","sizes":[[120,600]]},"andbeyond1601":{"slotID":"andbeyond1601","slotName":"\/{network},1769731\/3601001-160-600-1","sizes":[[160,600]]},"andbeyond1602":{"slotID":"andbeyond1602","slotName":"\/{network},1769731\/3601001-160-600-2","sizes":[[160,600]]},"andbeyond1603":{"slotID":"andbeyond1603","slotName":"\/{network},1769731\/3601001-160-600-3","sizes":[[160,600]]},"andbeyond1604":{"slotID":"andbeyond1604","slotName":"\/{network},1769731\/3601001-160-600-4","sizes":[[160,600]]},"andbeyond1605":{"slotID":"andbeyond1605","slotName":"\/{network},1769731\/3601001-160-600-5","sizes":[[160,600]]},"andbeyond1606":{"slotID":"andbeyond1606","slotName":"\/{network},1769731\/3601001-160-600-6","sizes":[[160,600]]},"andbeyond3001":{"slotID":"andbeyond3001","slotName":"\/{network},1769731\/3601001-300-250-1","sizes":[[300,250]]},"andbeyond3002":{"slotID":"andbeyond3002","slotName":"\/{network},1769731\/3601001-300-250-2","sizes":[[300,250]]},"andbeyond3003":{"slotID":"andbeyond3003","slotName":"\/{network},1769731\/3601001-300-250-3","sizes":[[300,250]]},"andbeyond3004":{"slotID":"andbeyond3004","slotName":"\/{network},1769731\/3601001-300-250-4","sizes":[[300,250]]},"andbeyond3005":{"slotID":"andbeyond3005","slotName":"\/{network},1769731\/3601001-300-250-5","sizes":[[300,250]]},"andbeyond3006":{"slotID":"andbeyond3006","slotName":"\/{network},1769731\/3601001-300-250-6","sizes":[[300,250]]},"andbeyond3007":{"slotID":"andbeyond3007","slotName":"\/{network},1769731\/3601001-300-250-7","sizes":[[300,250]]},"andbeyond3008":{"slotID":"andbeyond3008","slotName":"\/{network},1769731\/3601001-300-250-8","sizes":[[300,250]]},"andbeyond3009":{"slotID":"andbeyond3009","slotName":"\/{network},1769731\/3601001-300-250-9","sizes":[[300,250]]},"andbeyond30010":{"slotID":"andbeyond30010","slotName":"\/{network},1769731\/3601001-300-250-10","sizes":[[300,250]]},"andbeyond30011":{"slotID":"andbeyond30011","slotName":"\/{network},1769731\/3601001-300-250-11","sizes":[[300,250]]},"andbeyond30012":{"slotID":"andbeyond30012","slotName":"\/{network},1769731\/3601001-300-250-12","sizes":[[300,250]]},"andbeyond30013":{"slotID":"andbeyond30013","slotName":"\/{network},1769731\/3601001-300-250-13","sizes":[[300,250]]},"andbeyond30014":{"slotID":"andbeyond30014","slotName":"\/{network},1769731\/3601001-300-250-14","sizes":[[300,250]]},"andbeyond3201":{"slotID":"andbeyond3201","slotName":"\/{network},1769731\/3601001-320-480-1","sizes":[[320,480]]},"andbeyond3202":{"slotID":"andbeyond3202","slotName":"\/{network},1769731\/3601001-320-480-2","sizes":[[320,480]]},"andbeyond3203":{"slotID":"andbeyond3203","slotName":"\/{network},1769731\/3601001-320-480-3","sizes":[[320,480]]},"andbeyond3204":{"slotID":"andbeyond3204","slotName":"\/{network},1769731\/3601001-320-480-4","sizes":[[320,480]]},"andbeyond3205":{"slotID":"andbeyond3205","slotName":"\/{network},1769731\/3601001-320-480-5","sizes":[[320,480]]},"andbeyond3206":{"slotID":"andbeyond3206","slotName":"\/{network},1769731\/3601001-320-50-6","sizes":[[320,50]]},"andbeyond3207":{"slotID":"andbeyond3207","slotName":"\/{network},1769731\/3601001-320-50-7","sizes":[[320,50]]},"andbeyond3208":{"slotID":"andbeyond3208","slotName":"\/{network},1769731\/3601001-320-50-8","sizes":[[320,50]]},"andbeyond3209":{"slotID":"andbeyond3209","slotName":"\/{network},1769731\/3601001-320-50-9","sizes":[[320,50]]},"andbeyond32010":{"slotID":"andbeyond32010","slotName":"\/{network},1769731\/3601001-320-50-10","sizes":[[320,50]]},"andbeyond6001":{"slotID":"andbeyond6001","slotName":"\/{network},1769731\/3601001-300-600-1","sizes":[[300,600],[300,250]]},"andbeyond6002":{"slotID":"andbeyond6002","slotName":"\/{network},1769731\/3601001-300-600-2","sizes":[[300,600],[300,250]]},"andbeyond9702501":{"slotID":"andbeyond9702501","slotName":"\/{network},1769731\/3601001-970-250-1","sizes":[[970,250],[300,250],[970,90]]},"andbeyond9702502":{"slotID":"andbeyond9702502","slotName":"\/{network},1769731\/3601001-970-250-2","sizes":[[970,250],[300,250],[970,90]]},"andbeyond9702503":{"slotID":"andbeyond9702503","slotName":"\/{network},1769731\/3601001-970-250-3","sizes":[[970,250],[300,250],[970,90]]},"andbeyond9702504":{"slotID":"andbeyond9702504","slotName":"\/{network},1769731\/3601001-970-250-4","sizes":[[970,250],[300,250],[970,90]]},"andbeyond9702505":{"slotID":"andbeyond9702505","slotName":"\/{network},1769731\/3601001-970-250-5","sizes":[[970,250],[300,250],[970,90]]},"andbeyond9702506":{"slotID":"andbeyond9702506","slotName":"\/{network},1769731\/3601001-970-250-6","sizes":[[970,250],[300,250],[970,90]]},"andbeyond9701":{"slotID":"andbeyond9701","slotName":"\/{network},1769731\/3601001-970-90-1","sizes":[[970,90],[728,90]]},"andbeyond9702":{"slotID":"andbeyond9702","slotName":"\/{network},1769731\/3601001-970-90-2","sizes":[[970,90],[728,90]]},"andbeyond9703":{"slotID":"andbeyond9703","slotName":"\/{network},1769731\/3601001-970-90-3","sizes":[[970,90],[728,90]]},"andbeyond1001":{"slotID":"andbeyond1001","slotName":"\/{network},1769731\/3601001-300-100-1","sizes":[[300,100]]},"andbeyond1002":{"slotID":"andbeyond1002","slotName":"\/{network},1769731\/3601001-300-100-2","sizes":[[300,100]]},"andbeyond1003":{"slotID":"andbeyond1003","slotName":"\/{network},1769731\/3601001-300-100-3","sizes":[[300,100]]},"andbeyond1004":{"slotID":"andbeyond1004","slotName":"\/{network},1769731\/3601001-300-100-4","sizes":[[300,100]]},"andbeyond6003":{"slotID":"andbeyond6003","slotName":"\/{network},1769731\/3601001-300-600-3","sizes":[[300,600],[300,250]]},"andbeyond6004":{"slotID":"andbeyond6004","slotName":"\/{network},1769731\/3601001-300-600-4","sizes":[[300,600],[300,250]]},"andbeyond6005":{"slotID":"andbeyond6005","slotName":"\/{network},1769731\/3601001-300-600-5","sizes":[[300,600],[300,250]]},"andbeyond1":{"slotID":"andbeyond1","slotName":"\/{network},1769731\/3601001_pageview_1","sizes":[[0,0]]},"andbeyond2":{"slotID":"andbeyond2","slotName":"\/{network},1769731\/3601001_block_2","sizes":[[0,0]]},"andbeyond3":{"slotID":"andbeyond3","slotName":"\/{network},1769731\/3601001_block_3","sizes":[[0,0]]},"andbeyond4":{"slotID":"andbeyond4","slotName":"\/{network},1769731\/3601001_block_4","sizes":[[0,0]]},"andbeyond5":{"slotID":"andbeyond5","slotName":"\/{network},1769731\/3601001_block_5","sizes":[[0,0]]},"andbeyond6":{"slotID":"andbeyond6","slotName":"\/{network},1769731\/3601001_block_6","sizes":[[0,0]]},"andbeyond7":{"slotID":"andbeyond7","slotName":"\/{network},1769731\/3601001_block_7","sizes":[[0,0]]},"andbeyond8":{"slotID":"andbeyond8","slotName":"\/{network},1769731\/3601001_block_8","sizes":[[0,0]]},"andbeyond9":{"slotID":"andbeyond9","slotName":"\/{network},1769731\/3601001_block_9","sizes":[[0,0]]},"andbeyond10":{"slotID":"andbeyond10","slotName":"\/{network},1769731\/3601001_block_10","sizes":[[0,0]]},"andbeyond32011":{"slotID":"andbeyond32011","slotName":"\/{network},1769731\/3601001-320-50-11","sizes":[[320,50]]},"andbeyond32012":{"slotID":"andbeyond32012","slotName":"\/{network},1769731\/3601001-320-50-12","sizes":[[320,50]]},"andbeyond32013":{"slotID":"andbeyond32013","slotName":"\/{network},1769731\/3601001-320-50-13","sizes":[[320,50]]},"andbeyond32014":{"slotID":"andbeyond32014","slotName":"\/{network},1769731\/3601001-320-50-14","sizes":[[320,50]]},"andbeyond32015":{"slotID":"andbeyond32015","slotName":"\/{network},1769731\/3601001-320-50-15","sizes":[[320,50]]},"andbeyond32016":{"slotID":"andbeyond32016","slotName":"\/{network},1769731\/3601001-320-50-16","sizes":[[320,50]]},"andbeyond32017":{"slotID":"andbeyond32017","slotName":"\/{network},1769731\/3601001-320-50-17","sizes":[[320,50]]},"andbeyond32018":{"slotID":"andbeyond32018","slotName":"\/{network},1769731\/3601001-320-50-18","sizes":[[320,50]]},"andbeyond32019":{"slotID":"andbeyond32019","slotName":"\/{network},1769731\/3601001-320-50-19","sizes":[[320,50]]},"andbeyond32020":{"slotID":"andbeyond32020","slotName":"\/{network},1769731\/3601001-320-50-20","sizes":[[320,50]]},"andbeyond32021":{"slotID":"andbeyond32021","slotName":"\/{network},1769731\/3601001-320-50-21","sizes":[[320,50]]},"andbeyond32022":{"slotID":"andbeyond32022","slotName":"\/{network},1769731\/3601001-320-50-22","sizes":[[320,50]]},"andbeyond32023":{"slotID":"andbeyond32023","slotName":"\/{network},1769731\/3601001-320-50-23","sizes":[[320,50]]},"andbeyond32024":{"slotID":"andbeyond32024","slotName":"\/{network},1769731\/3601001-320-50-24","sizes":[[320,50]]},"andbeyond32025":{"slotID":"andbeyond32025","slotName":"\/{network},1769731\/3601001-320-50-25","sizes":[[320,50]]},"andbeyond1005":{"slotID":"andbeyond1005","slotName":"\/{network},1769731\/3601001-300-100-5","sizes":[[300,100]]},"andbeyond1006":{"slotID":"andbeyond1006","slotName":"\/{network},1769731\/3601001-300-100-6","sizes":[[300,100]]},"andbeyond1007":{"slotID":"andbeyond1007","slotName":"\/{network},1769731\/3601001-300-100-7","sizes":[[300,100]]},"andbeyond1008":{"slotID":"andbeyond1008","slotName":"\/{network},1769731\/3601001-300-100-8","sizes":[[300,100]]},"andbeyond1009":{"slotID":"andbeyond1009","slotName":"\/{network},1769731\/3601001-300-100-9","sizes":[[300,100]]}};
 


var and_geo_block={"COUNTRY":[{"country_name":"ALL","Adunit_country":["ANDHRAJYOTHY_DT_STICKY","ANDHRAJYOTHY.COM_NB_320X50","ANDHRAJYOTHY.COM_UB_300X100","ANDHRAJYOTHY_UB_125X125","ANDHRAJYOTHY_UB_320X50","\/VUUKLE-WIDGET\/ANDHRAJYOTHY.COM-1","\/VUUKLE-WIDGET\/ANDHRAJYOTHY.COM-2","\/VUUKLE-WIDGET\/ANDHRAJYOTHY.COM-3","\/VUUKLE-WIDGET\/ANDHRAJYOTHY.COM-4","\/VUUKLE-WIDGET\/ANDHRAJYOTHY.COM-5","\/VUUKLE-WIDGET\/CHITRAJYOTHY.COM_0","\/VUUKLE-WIDGET\/CHITRAJYOTHY.COM-5","\/VUUKLE-WIDGET\/ANDHRAJYOTHY.COM-0","ABNAJ_300X250_NATIVE_NEW","ABNCJ_300X250_NATIVE_NEW","ANDHRAJYOTHY_INTERSTITIAL","ANDHRAJYOTHY_STICKY"],"Time_country":"NONE","Hour_country":"ALL"},{"country_name":"IN","Adunit_country":["ADPLAYERVIDEO"],"Time_country":"NONE","Hour_country":[{"fromhour":"6","tohour":"23","timezone":"Asia\/Calcutta"}]}],"STATE":[{"state_name":"IN_AD","Adunit_state":["ADPLAYERVIDEO"],"Time_state":"NONE","Hour_state":[{"fromhour":"6","tohour":"23","timezone":"Asia\/Calcutta"}]},{"state_name":"IN_AP","Adunit_state":["ADPLAYERVIDEO"],"Time_state":"NONE","Hour_state":[{"fromhour":"6","tohour":"23","timezone":"Asia\/Calcutta"}]},{"state_name":"IN_TS","Adunit_state":["ADPLAYERVIDEO"],"Time_state":"NONE","Hour_state":[{"fromhour":"6","tohour":"23","timezone":"Asia\/Calcutta"}]}]};

 setInterval(function(){
timedate1 = Math.round((new Date()).getTime() / 1000);
},1000);

function blackbox(temp_caps,country_rtb1,city_rtb,city_region,new12)
{

flag2=1;

for (var make in and_geo_block) {
    for (var i = 0; i < and_geo_block[make].length; i++) {
        var country1 = and_geo_block[make][i].country_name;
        var Adunit1 = and_geo_block[make][i].Adunit_country;
        var city1 = and_geo_block[make][i].city_name;
        var adunit_city1 = and_geo_block[make][i].Adunit_city;
         var state1 = and_geo_block[make][i].state_name;
         var adunit_state1 = and_geo_block[make][i].Adunit_state;
         var Time_city1 = and_geo_block[make][i].Time_city;
         var Time_state1 = and_geo_block[make][i].Time_state;
         var Time_country1 = and_geo_block[make][i].Time_country;
         var Hour_state1 = and_geo_block[make][i].Hour_state;
         var Hour_city1 = and_geo_block[make][i].Hour_city;
         var Hour_country1 = and_geo_block[make][i].Hour_country;


         var country_state=country_rtb1+"_"+city_region;



       if(country1!=undefined && Adunit1!=undefined && Time_country1!=undefined){
      for(d=0; d<Adunit1.length; d++){
      var adunit_caps=Adunit1[d].toUpperCase();
      var norefresh1=temp_caps.indexOf(adunit_caps);
      for(var kkk=0; kkk<Time_country1.length; kkk++){
     
                for(var kk2=0; kk2<Hour_country1.length; kk2++){

            

             if(Hour_country1[kk2].timezone!=undefined)
                    timezone=Hour_country1[kk2].timezone;
                    else
                    timezone='LOCAL';
                    if(timezone=='LOCAL')
                    {
                    current_hour2=new Date().getHours();
                    }
                    else
                    {

                    // d2="new Date().toLocaleString('en-US', { timeZone: '"+timezone+"' })";
                    // d3=eval(d2);

                    // d1=new Date(d3);
                    // current_hour2=d1.getHours();
                    current_hour2=calcTime('Bombay', '+5.5');

                    }

                     if(current_hour2==0)
                      current_hour2=24;

                   if(current_hour2==1)
                      current_hour2=25;

                   if(current_hour2==2)
                      current_hour2=26;

                   // if(current_hour2==3)
                   //    current_hour2=27;

                   // if(current_hour2==4)
                   //    current_hour2=28;

                   // if(current_hour2==5)
                   //    current_hour2=29;


            if(Time_country1 != "NONE" && Hour_country1 != "NONE" && norefresh1>=0 && country_rtb1==country1 && Hour_country1[kk2].fromhour <= current_hour2 && Hour_country1[kk2].tohour >= current_hour2 && Time_country1[kkk].from <= timedate1 && Time_country1[kkk].to >= timedate1){
                      flag2=0;
                      
                      
                      }

                        if(Hour_country1 != "NONE" && Time_country1 == "NONE"  && Hour_country1 != "ALL" && norefresh1>=0 && country_rtb1==country1 && Hour_country1[kk2].fromhour <= current_hour2 && Hour_country1[kk2].tohour >= current_hour2)
                      {
                       
                      flag2=0;
                      
                      }

                        if(Time_country1 != "NONE" && Hour_country1 == "NONE" && Time_country1 != "ALL" && norefresh1>=0 && country_rtb1==country1 && Time_country1[kkk].from <= timedate1 && Time_country1[kkk].to >= timedate1)
                      {
                      flag2=0;
                        
                       
                      }

                     if(Time_country1 != "NONE" && Hour_country1 != "NONE" && norefresh1>=0 && country1== "ALL" && Hour_country1[kk2].fromhour <= current_hour2 && Hour_country1[kk2].tohour >= current_hour2 && Time_country1[kkk].from <= timedate1 && Time_country1[kkk].to >= timedate1){
                      flag2=0;
                      
                      
                      }

                        if(Hour_country1 != "NONE" && Time_country1 == "NONE"  && Hour_country1 != "ALL" && norefresh1>=0 && country1== "ALL" && Hour_country1[kk2].fromhour <= current_hour2 && Hour_country1[kk2].tohour >= current_hour2)
                      {
                       
                      flag2=0;
                     
                      }

                        if(Time_country1 != "NONE" && Hour_country1 == "NONE" && Time_country1 != "ALL" && norefresh1>=0 && country1== "ALL" && Time_country1[kkk].from <= timedate1 && Time_country1[kkk].to >= timedate1)
                      {
                      flag2=0;
                        
                      
                      }

 if(new12==0){
                     if(Time_country1 != "NONE" && Hour_country1 != "NONE" && Adunit1[d]=="ALL" && country1== "ALL" && Hour_country1[kk2].fromhour <= current_hour2 && Hour_country1[kk2].tohour >= current_hour2 && Time_country1[kkk].from <= timedate1 && Time_country1[kkk].to >= timedate1){
                      flag2=0;
                      
                      
                      }

                        if(Hour_country1 != "NONE" && Time_country1 == "NONE"  && Hour_country1 != "ALL" && Adunit1[d]=="ALL" && country1== "ALL" && Hour_country1[kk2].fromhour <= current_hour2 && Hour_country1[kk2].tohour >= current_hour2)
                      {
                       
                      flag2=0;
                     
                      }

                        if(Time_country1 != "NONE" && Hour_country1 == "NONE" && Time_country1 != "ALL" && Adunit1[d]=="ALL" && country1== "ALL" && Time_country1[kkk].from <= timedate1 && Time_country1[kkk].to >= timedate1)
                      {
                      flag2=0;
                        
                       
                      }

                         if(Time_country1 != "NONE" && Hour_country1 != "NONE" && Adunit1[d]=="ALL" && country_rtb1==country1 && Hour_country1[kk2].fromhour <= current_hour2 && Hour_country1[kk2].tohour >= current_hour2 && Time_country1[kkk].from <= timedate1 && Time_country1[kkk].to >= timedate1){
                      flag2=0;
                      
                      
                      }

                        if(Hour_country1 != "NONE" && Time_country1 == "NONE"  && Hour_country1 != "ALL" && Adunit1[d]=="ALL" && country_rtb1==country1 && Hour_country1[kk2].fromhour <= current_hour2 && Hour_country1[kk2].tohour >= current_hour2)
                      {
                       
                      flag2=0;
                      
                      }

                        if(Time_country1 != "NONE" && Hour_country1 == "NONE" && Time_country1 != "ALL" && Adunit1[d]=="ALL" && country_rtb1==country1 && Time_country1[kkk].from <= timedate1 && Time_country1[kkk].to >= timedate1)
                      {
                      flag2=0;
                     
                      }

}


            if(new12==0){

                   if(Time_country1 != "NONE" && Hour_country1 != "NONE" && Adunit1[d]=="ALL" && country1=="INTERNATIONAL" && country_rtb1!="IN" && Hour_country1[kk2].fromhour <= current_hour2 && Hour_country1[kk2].tohour >= current_hour2 && Time_country1[kkk].from <= timedate1 && Time_country1[kkk].to >= timedate1){
                      flag2=0;
                     
                      }

                        if(Hour_country1 != "NONE" && Time_country1 == "NONE"  && Hour_country1 != "ALL" && Adunit1[d]=="ALL" && country1=="INTERNATIONAL" && country_rtb1!="IN" && Hour_country1[kk2].fromhour <= current_hour2 && Hour_country1[kk2].tohour >= current_hour2)
                      {
                       
                      flag2=0;
                     
                      }

                        if(Time_country1 != "NONE" && Hour_country1 == "NONE" && Time_country1 != "ALL" && Adunit1[d]=="ALL" && country1=="INTERNATIONAL" && country_rtb1!="IN" && Time_country1[kkk].from <= timedate1 && Time_country1[kkk].to >= timedate1)
                      {
                      flag2=0;
                     
                      }

                        if(Hour_country1 != "NONE" && Time_country1 == "NONE"  && Hour_country1 != "ALL" && Adunit1[d]=="ALL" && country1=="INTERNATIONAL" && country_rtb1!="IN" && Hour_country1[kk2].fromhour <= current_hour2 && Hour_country1[kk2].tohour >= current_hour2)
                      {
                       
                      flag2=0;
                     
                      }

                     
                  }


                     if(Time_country1 != "NONE" && Hour_country1 != "NONE" && norefresh1>=0 && country1=="INTERNATIONAL" && country_rtb1!="IN" && Hour_country1[kk2].fromhour <= current_hour2 && Hour_country1[kk2].tohour >= current_hour2 && Time_country1[kkk].from <= timedate1 && Time_country1[kkk].to >= timedate1){
                      flag2=0;
                      
                       
                      }

                        if(Hour_country1 != "NONE" && Time_country1 == "NONE"  && Hour_country1 != "ALL" && norefresh1>=0 && country1=="INTERNATIONAL" && country_rtb1!="IN" && Hour_country1[kk2].fromhour <= current_hour2 && Hour_country1[kk2].tohour >= current_hour2)
                      {
                       
                      flag2=0;
                      
                      }

                        if(Time_country1 != "NONE" && Hour_country1 == "NONE" && Time_country1 != "ALL" && norefresh1>=0 && country1=="INTERNATIONAL" && country_rtb1!="IN" && Time_country1[kkk].from <= timedate1 && Time_country1[kkk].to >= timedate1)
                      {
                      flag2=0;
                        
                      
                      }


                     if(Time_country1 == "ALL" && Hour_country1 == "NONE" && norefresh1>=0 && country_rtb1==country1 ){
                      flag2=0;
                      
                      
                      }



                        if(Hour_country1 == "ALL" && Time_country1 == "NONE"  && norefresh1>=0 && country_rtb1==country1)
                      {
                       
                      flag2=0;
                      
                      }

                       if(Hour_country1 == "ALL" && Time_country1 == "ALL"  && norefresh1>=0 && country_rtb1==country1)
                      {
                       
                      flag2=0;
                      
                      }

                        if(Hour_country1 != "NONE" && Time_country1 == "ALL"  && norefresh1>=0 && country_rtb1==country1 && Hour_country1[kk2].fromhour <= current_hour2 && Hour_country1[kk2].tohour >= current_hour2)
                      {
                       
                      flag2=0;
                      
                      }

                     if(Time_country1 == "ALL" && Hour_country1 == "NONE" && norefresh1>=0 && country1== "ALL" ){
                      flag2=0;
                      
                     
                      }

                        if(Hour_country1 == "ALL" && Time_country1 == "NONE"  && norefresh1>=0 && country1== "ALL")
                      {
                       
                      flag2=0;
                      
                      }

                        if(Time_country1 == "ALL" && Hour_country1 == "NONE"  && norefresh1>=0 && country1== "ALL")
                      {
                      flag2=0;
                        
                      
                      }
                        if(Time_country1 == "ALL" && Hour_country1 == "ALL"  && norefresh1>=0 && country1== "ALL")
                      {
                      flag2=0;
                        
                      
                      }

 if(new12==0){
                     if(Time_country1 == "ALL" && Hour_country1 == "NONE" && Adunit1[d]=="ALL" && country1== "ALL" ){
                      flag2=0;
                      
                     
                      }

                        if(Hour_country1 == "ALL" && Time_country1 == "NONE"  && Adunit1[d]=="ALL" && country1== "ALL")
                      {
                       
                      flag2=0;
                     
                      }

                     

                         if(Time_country1 == "ALL" && Hour_country1 == "NONE" && Adunit1[d]=="ALL" && country_rtb1==country1 ){
                      flag2=0;
                      
                      
                      }
                       if(Time_country1 == "NONE" && Hour_country1 == "ALL" && Adunit1[d]=="ALL" && country_rtb1==country1 ){
                      flag2=0;
                      
                      
                      }
                       if(Time_country1 == "ALL" && Hour_country1 == "ALL" && Adunit1[d]=="ALL" && country_rtb1==country1 ){
                      flag2=0;
                      
                      
                      }               

}

            if(new12==0){

                   if(Time_country1 == "ALL" && Hour_country1 == "NONE" && Adunit1[d]=="ALL" && country1=="INTERNATIONAL" && country_rtb1!="IN" ){
                      flag2=0;
                     
                      }

                        if(Hour_country1 == "ALL" && Time_country1 == "NONE"  && Adunit1[d]=="ALL" && country1=="INTERNATIONAL" && country_rtb1!="IN")
                      {
                       
                      flag2=0;
                    
                      }
                        if(Hour_country1 == "ALL" && Time_country1 == "ALL"  && Adunit1[d]=="ALL" && country1=="INTERNATIONAL" && country_rtb1!="IN")
                      {
                       
                      flag2=0;
                    
                      }

                        
                      

                  }

                     if(Time_country1 == "ALL" && Hour_country1 == "NONE" && norefresh1>=0 && country1=="INTERNATIONAL" && country_rtb1!="IN" ){
                      flag2=0;
                      
                     
                      }

                        if(Hour_country1 == "ALL" && Time_country1 == "NONE"  && norefresh1>=0 && country1=="INTERNATIONAL" && country_rtb1!="IN")
                      {
                       
                      flag2=0;
                     
                      }
                       if(Hour_country1 == "ALL" && Time_country1 == "ALL"  && norefresh1>=0 && country1=="INTERNATIONAL" && country_rtb1!="IN")
                      {
                       
                      flag2=0;
                     
                      }




      }
      }
      }
  }
      if(city1!=undefined && adunit_city1!=undefined && Time_city1!=undefined){
      for(var f=0; f<adunit_city1.length; f++){
      //console.log("Time_city1"+Time_city1);
      for(var h=0; h<Time_city1.length; h++){
      var adunitcity_caps=adunit_city1[f].toUpperCase();
      var norefresh2=temp_caps.indexOf(adunitcity_caps);
     

 for(var h2=0; h2<Hour_city1.length; h2++){

            // console.log(Hour_state1[k2].fromhour);
            // console.log(Hour_state1[k2].tohour);

      if(Hour_city1[h2].timezone!=undefined)
                    timezone=Hour_city1[h2].timezone;
                    else
                    timezone='LOCAL';
                    if(timezone=='LOCAL')
                    {
                    current_hour1=new Date().getHours();
                    }
                    else
                    {

                    // d2="new Date().toLocaleString('en-US', { timeZone: '"+timezone+"' })";
                    // d3=eval(d2);

                    // d1=new Date(d3);
                    // current_hour1=d1.getHours();
                     current_hour1=calcTime('Bombay', '+5.5');

                    }

                    if(current_hour1==0)
                      current_hour1=24;

                   if(current_hour1==1)
                      current_hour1=25;

                   if(current_hour1==2)
                      current_hour1=26;

                   // if(current_hour1==3)
                   //    current_hour1=27;

                   // if(current_hour1==4)
                   //    current_hour1=28;

                   // if(current_hour1==5)
                   //    current_hour1=29;


              
                  if (Time_city1 != "NONE" && Hour_city1 != "NONE" && norefresh2 >= 0 && city_rtb == city1 && Hour_city1[h2].fromhour <= current_hour1 && Hour_city1[h2].tohour >= current_hour1 && Time_city1[h].from <= timedate1 && Time_city1[h].to >= timedate1) {
        flag2 = 0;

      
    }

    if (Hour_city1 != "NONE" && Time_city1 == "NONE" && Hour_city1 != "ALL" && norefresh2 >= 0 && city_rtb == city1 && Hour_city1[h2].fromhour <= current_hour1 && Hour_city1[h2].tohour >= current_hour1) {

        flag2 = 0;
   
    }

    if (Time_city1 != "NONE" && Hour_city1 == "NONE" && Time_city1 != "ALL" && norefresh2 >= 0 && city_rtb == city1 && Time_city1[h].from <= timedate1 && Time_city1[h].to >= timedate1) {
        flag2 = 0;

    }


    if (Time_city1 != "NONE" && Hour_city1 != "NONE" && norefresh2 >= 0 && city1 == "ALL" && Hour_city1[h2].fromhour <= current_hour1 && Hour_city1[h2].tohour >= current_hour1 && Time_city1[h].from <= timedate1 && Time_city1[h].to >= timedate1) {
        flag2 = 0;

    }

    if (Hour_city1 != "NONE" && Time_city1 == "NONE" && Hour_city1 != "ALL" && norefresh2 >= 0 && city1 == "ALL" && Hour_city1[h2].fromhour <= current_hour1 && Hour_city1[h2].tohour >= current_hour1) {

        flag2 = 0;
        
    }

    if (Time_city1 != "NONE" && Hour_city1 == "NONE" && Time_city1 != "ALL" && norefresh2 >= 0 && city1 == "ALL" && Time_city1[h].from <= timedate1 && Time_city1[h].to >= timedate1) {
        flag2 = 0;

    }


    if (new12 == 0) {
        if (Time_city1 != "NONE" && Hour_city1 != "NONE" && adunit_city1[f] == "ALL" && city1 == "ALL" && Hour_city1[h2].fromhour <= current_hour1 && Hour_city1[h2].tohour >= current_hour1 && Time_city1[h].from <= timedate1 && Time_city1[h].to >= timedate1) {
            flag2 = 0;

          
        }

        if (Hour_city1 != "NONE" && Time_city1 == "NONE" && Hour_city1 != "ALL" && adunit_city1[f] == "ALL" && city1 == "ALL" && Hour_city1[h2].fromhour <= current_hour1 && Hour_city1[h2].tohour >= current_hour1) {

            flag2 = 0;
            
        }

        if (Time_city1 != "NONE" && Hour_city1 == "NONE" && Time_city1 != "ALL" && adunit_city1[f] == "ALL" && city1 == "ALL" && Time_city1[h].from <= timedate1 && Time_city1[h].to >= timedate1) {
            flag2 = 0;

        }

        if (Time_city1 != "NONE" && Hour_city1 != "NONE" && adunit_city1[f] == "ALL" && city_rtb == city1 && Hour_city1[h2].fromhour <= current_hour1 && Hour_city1[h2].tohour >= current_hour1 && Time_city1[h].from <= timedate1 && Time_city1[h].to >= timedate1) {
            flag2 = 0;

        }

        if (Hour_city1 != "NONE" && Time_city1 == "NONE" && Hour_city1 != "ALL" && adunit_city1[f] == "ALL" && city_rtb == city1 && Hour_city1[h2].fromhour <= current_hour1 && Hour_city1[h2].tohour >= current_hour1) {

            flag2 = 0;
           
        }

        if (Time_city1 != "NONE" && Hour_city1 == "NONE" && Time_city1 != "ALL" && adunit_city1[f] == "ALL" && city_rtb == city1 && Time_city1[h].from <= timedate1 && Time_city1[h].to >= timedate1) {
            flag2 = 0;

        }

    }

    if (new12 == 0) {

        if (Time_city1 != "NONE" && Hour_city1 != "NONE" && adunit_city1[f] == "ALL" && city1 == "INTERNATIONAL" && country_rtb1!= "IN" && Hour_city1[h2].fromhour <= current_hour1 && Hour_city1[h2].tohour >= current_hour1 && Time_city1[h].from <= timedate1 && Time_city1[h].to >= timedate1) {
            flag2 = 0;

          
        }

        if (Hour_city1 != "NONE" && Time_city1 == "NONE" && Hour_city1 != "ALL" && adunit_city1[f] == "ALL" && city1 == "INTERNATIONAL" && country_rtb1!= "IN" && Hour_city1[h2].fromhour <= current_hour1 && Hour_city1[h2].tohour >= current_hour1) {

            flag2 = 0;
          
        }

        if (Time_city1 != "NONE" && Hour_city1 == "NONE" && Time_city1 != "ALL" && adunit_city1[f] == "ALL" && city1 == "INTERNATIONAL" && country_rtb1!= "IN" && Time_city1[h].from <= timedate1 && Time_city1[h].to >= timedate1) {
            flag2 = 0;

          
        }

        if (Hour_city1 != "NONE" && Time_city1 == "NONE" && Hour_city1 != "ALL" && adunit_city1[f] == "ALL" && city1 == "INTERNATIONAL" && country_rtb1!= "IN" && Hour_city1[h2].fromhour <= current_hour1 && Hour_city1[h2].tohour >= current_hour1) {

            flag2 = 0;
           
        }

    }

    if (Time_city1 != "NONE" && Hour_city1 != "NONE" && norefresh2 >= 0 && city1 == "INTERNATIONAL" && country_rtb1!= "IN" && Hour_city1[h2].fromhour <= current_hour1 && Hour_city1[h2].tohour >= current_hour1 && Time_city1[h].from <= timedate1 && Time_city1[h].to >= timedate1) {
        flag2 = 0;

        
    }

    if (Hour_city1 != "NONE" && Time_city1 == "NONE" && Hour_city1 != "ALL" && norefresh2 >= 0 && city1 == "INTERNATIONAL" && country_rtb1!= "IN" && Hour_city1[h2].fromhour <= current_hour1 && Hour_city1[h2].tohour >= current_hour1) {

        flag2 = 0;
       
    }

    if (Time_city1 != "NONE" && Hour_city1 == "NONE" && Time_city1 != "ALL" && norefresh2 >= 0 && city1 == "INTERNATIONAL" && country_rtb1!= "IN" && Time_city1[h].from <= timedate1 && Time_city1[h].to >= timedate1) {
        flag2 = 0;

        
    }


    if (Time_city1 == "ALL" && Hour_city1 == "NONE" && norefresh2 >= 0 && city_rtb == city1) {
        flag2 = 0;

      
    }

            if(Hour_city1 != "NONE" && Time_city1 == "ALL"  && norefresh2>=0 && city_rtb==city1 && Hour_city1[h2].fromhour <= current_hour1 && Hour_city1[h2].tohour >= current_hour1)
                      {
                       
                      flag2=0;
                      
                      }


    if (Hour_city1 == "ALL" && Time_city1 == "NONE" && norefresh2 >= 0 && city_rtb == city1) {

        flag2 = 0;
        
    }

    if (Time_city1 == "ALL" && Hour_city1 == "NONE" && norefresh2 >= 0 && city1 == "ALL") {
        flag2 = 0;

      
    }

    if (Hour_city1 == "ALL" && Time_city1 == "NONE" && norefresh2 >= 0 && city1 == "ALL") {

        flag2 = 0;
        
    }

    if (Time_city1 == "ALL" && Hour_city1 == "NONE" && norefresh2 >= 0 && city1 == "ALL") {
        flag2 = 0;

      
    }
     if (Time_city1 == "ALL" && Hour_city1 == "ALL" && norefresh2 >= 0 && city1 == "ALL") {
        flag2 = 0;

      
    }

    if (new12 == 0) {
        if (Time_city1 == "ALL" && Hour_city1 == "NONE" && adunit_city1[f] == "ALL" && city1 == "ALL") {
            flag2 = 0;

         
        }

        if (Hour_city1 == "ALL" && Time_city1 == "NONE" && adunit_city1[f] == "ALL" && city1 == "ALL") {

            flag2 = 0;
          
        }

        if (Time_city1 == "ALL" && Hour_city1 == "NONE" && adunit_city1[f] == "ALL" && city_rtb == city1) {
            flag2 = 0;
        }
         if (Time_city1 == "NONE" && Hour_city1 == "ALL" && adunit_city1[f] == "ALL" && city_rtb == city1) {
            flag2 = 0;
        }

       if (Time_city1 == "ALL" && Hour_city1 == "ALL" && adunit_city1[f] == "ALL" && city_rtb == city1) {
            flag2 = 0;

         
        }
    }

    if (new12 == 0) {

        if (Time_city1 == "ALL" && Hour_city1 == "NONE" && adunit_city1[f] == "ALL" && city1 == "INTERNATIONAL" && country_rtb1!= "IN") {
            flag2 = 0;

         
        }

        if (Hour_city1 == "ALL" && Time_city1 == "NONE" && adunit_city1[f] == "ALL" && city1 == "INTERNATIONAL" && country_rtb1!= "IN") {

            flag2 = 0;
           
        }
         if (Hour_city1 == "ALL" && Time_city1 == "ALL" && adunit_city1[f] == "ALL" && city1 == "INTERNATIONAL" && country_rtb1!= "IN") {

            flag2 = 0;
           
        }

    }

    if (Time_city1 == "ALL" && Hour_city1 == "NONE" && norefresh2 >= 0 && city1 == "INTERNATIONAL" && country_rtb1!= "IN") {
        flag2 = 0;

        
    }

    if (Hour_city1 == "ALL" && Time_city1 == "NONE" && norefresh2 >= 0 && city1 == "INTERNATIONAL" && country_rtb1!= "IN") {

        flag2 = 0;
       
    }
    if (Hour_city1 == "ALL" && Time_city1 == "ALL" && norefresh2 >= 0 && city1 == "INTERNATIONAL" && country_rtb1!= "IN") {

        flag2 = 0;
       
    }





                }






      }
      }
      }
      if(state1!=undefined && adunit_state1!=undefined && Time_state1!=undefined && Hour_state1!=undefined){


      for(c=0; c<adunit_state1.length; c++){

      var adunit_caps1=adunit_state1[c].toUpperCase();

      var norefresh3=temp_caps.indexOf(adunit_caps1);

      for(var kk=0; kk<Time_state1.length; kk++){


           for(var k2=0; k2<Hour_state1.length; k2++){

            // console.log(Hour_state1[k2].fromhour);
            // console.log(Hour_state1[k2].tohour);

            if(Hour_state1[k2].timezone!=undefined)
                    timezone=Hour_state1[k2].timezone;
                    else
                    timezone='LOCAL';
                    if(timezone=='LOCAL')
                    {
                    current_hour=new Date().getHours();
                    }
                    else
                    {

                    // d2="new Date().toLocaleString('en-US', { timeZone: '"+timezone+"' })";
                    // d3=eval(d2);

                    // d1=new Date(d3);
                    // current_hour=d1.getHours();
                    current_hour=calcTime('Bombay', '+5.5');

                    }


                        if(current_hour==0)
                      current_hour=24;

                   if(current_hour==1)
                      current_hour=25;

                   if(current_hour==2)
                      current_hour=26;

                   // if(current_hour==3)
                   //    current_hour=27;

                   // if(current_hour==4)
                   //    current_hour=28;

                   // if(current_hour==5)
                   //    current_hour=29;


 if (Time_state1 != "NONE" && Hour_state1 != "NONE" && norefresh3 >= 0 && country_state == state1 && Hour_state1[k2].fromhour <= current_hour && Hour_state1[k2].tohour >= current_hour && Time_state1[kk].from <= timedate1 && Time_state1[kk].to >= timedate1) {
        flag2 = 0;

    }

    if (Hour_state1 != "NONE" && Time_state1 == "NONE" && Hour_state1 != "ALL" && norefresh3 >= 0 && country_state == state1 && Hour_state1[k2].fromhour <= current_hour && Hour_state1[k2].tohour >= current_hour) {

        flag2 = 0;
        
    }

    if (Time_state1 != "NONE" && Hour_state1 == "NONE" && Time_state1 != "ALL" && norefresh3 >= 0 && country_state == state1 && Time_state1[kk].from <= timedate1 && Time_state1[kk].to >= timedate1) {
        flag2 = 0;

    }


    if (Time_state1 != "NONE" && Hour_state1 != "NONE" && norefresh3 >= 0 && state1 == "ALL" && Hour_state1[k2].fromhour <= current_hour && Hour_state1[k2].tohour >= current_hour && Time_state1[kk].from <= timedate1 && Time_state1[kk].to >= timedate1) {
        flag2 = 0;

    }

    if (Hour_state1 != "NONE" && Time_state1 == "NONE" && Hour_state1 != "ALL" && norefresh3 >= 0 && state1 == "ALL" && Hour_state1[k2].fromhour <= current_hour && Hour_state1[k2].tohour >= current_hour) {

        flag2 = 0;
        
    }

    if (Time_state1 != "NONE" && Hour_state1 == "NONE" && Time_state1 != "ALL" && norefresh3 >= 0 && state1 == "ALL" && Time_state1[kk].from <= timedate1 && Time_state1[kk].to >= timedate1) {
        flag2 = 0;

       
    }


    if (new12 == 0) {
        if (Time_state1 != "NONE" && Hour_state1 != "NONE" && adunit_state1[c] == "ALL" && state1 == "ALL" && Hour_state1[k2].fromhour <= current_hour && Hour_state1[k2].tohour >= current_hour && Time_state1[kk].from <= timedate1 && Time_state1[kk].to >= timedate1) {
            flag2 = 0;

        }

        if (Hour_state1 != "NONE" && Time_state1 == "NONE" && Hour_state1 != "ALL" && adunit_state1[c] == "ALL" && state1 == "ALL" && Hour_state1[k2].fromhour <= current_hour && Hour_state1[k2].tohour >= current_hour) {

            flag2 = 0;
          
        }

        if (Time_state1 != "NONE" && Hour_state1 == "NONE" && Time_state1 != "ALL" && adunit_state1[c] == "ALL" && state1 == "ALL" && Time_state1[kk].from <= timedate1 && Time_state1[kk].to >= timedate1) {
            flag2 = 0;

        }

        if (Time_state1 != "NONE" && Hour_state1 != "NONE" && adunit_state1[c] == "ALL" && country_state == state1 && Hour_state1[k2].fromhour <= current_hour && Hour_state1[k2].tohour >= current_hour && Time_state1[kk].from <= timedate1 && Time_state1[kk].to >= timedate1) {
            flag2 = 0;

        }

        if (Hour_state1 != "NONE" && Time_state1 == "NONE" && Hour_state1 != "ALL" && adunit_state1[c] == "ALL" && country_state == state1 && Hour_state1[k2].fromhour <= current_hour && Hour_state1[k2].tohour >= current_hour) {

            flag2 = 0;
           
        }

        if (Time_state1 != "NONE" && Hour_state1 == "NONE" && Time_state1 != "ALL" && adunit_state1[c] == "ALL" && country_state == state1 && Time_state1[kk].from <= timedate1 && Time_state1[kk].to >= timedate1) {
            flag2 = 0;

        }

    }

    if (new12 == 0) {

        if (Time_state1 != "NONE" && Hour_state1 != "NONE" && adunit_state1[c] == "ALL" && state1 == "INTERNATIONAL" && country_rtb1!= "IN" && Hour_state1[k2].fromhour <= current_hour && Hour_state1[k2].tohour >= current_hour && Time_state1[kk].from <= timedate1 && Time_state1[kk].to >= timedate1) {
            flag2 = 0;

        }

        if (Hour_state1 != "NONE" && Time_state1 == "NONE" && Hour_state1 != "ALL" && adunit_state1[c] == "ALL" && state1 == "INTERNATIONAL" && country_rtb1!= "IN" && Hour_state1[k2].fromhour <= current_hour && Hour_state1[k2].tohour >= current_hour) {

            flag2 = 0;
           
        }

        if (Time_state1 != "NONE" && Hour_state1 == "NONE" && Time_state1 != "ALL" && adunit_state1[c] == "ALL" && state1 == "INTERNATIONAL" && country_rtb1!= "IN" && Time_state1[kk].from <= timedate1 && Time_state1[kk].to >= timedate1) {
            flag2 = 0;

        }

        if (Hour_state1 != "NONE" && Time_state1 == "NONE" && Hour_state1 != "ALL" && adunit_state1[c] == "ALL" && state1 == "INTERNATIONAL" && country_rtb1!= "IN" && Hour_state1[k2].fromhour <= current_hour && Hour_state1[k2].tohour >= current_hour) {

            flag2 = 0;
           
        }

    }

    if (Time_state1 != "NONE" && Hour_state1 != "NONE" && norefresh3 >= 0 && state1 == "INTERNATIONAL" && country_rtb1!= "IN" && Hour_state1[k2].fromhour <= current_hour && Hour_state1[k2].tohour >= current_hour && Time_state1[kk].from <= timedate1 && Time_state1[kk].to >= timedate1) {
        flag2 = 0;

    }

    if (Hour_state1 != "NONE" && Time_state1 == "NONE" && Hour_state1 != "ALL" && norefresh3 >= 0 && state1 == "INTERNATIONAL" && country_rtb1!= "IN" && Hour_state1[k2].fromhour <= current_hour && Hour_state1[k2].tohour >= current_hour) {

        flag2 = 0;
       
    }

    if (Time_state1 != "NONE" && Hour_state1 == "NONE" && Time_state1 != "ALL" && norefresh3 >= 0 && state1 == "INTERNATIONAL" && country_rtb1!= "IN" && Time_state1[kk].from <= timedate1 && Time_state1[kk].to >= timedate1) {
        flag2 = 0;

    }


    if (Time_state1 == "ALL" && Hour_state1 == "NONE" && norefresh3 >= 0 && country_state == state1) {
        flag2 = 0;

    }

    if (Hour_state1 == "ALL" && Time_state1 == "NONE" && norefresh3 >= 0 && country_state == state1) {

        flag2 = 0;
       
    }
 if (Hour_state1 == "ALL" && Time_state1 == "ALL" && norefresh3 >= 0 && country_state == state1) {

        flag2 = 0;
       
    }

                if(Hour_state1 != "NONE" && Time_city1 == "ALL"  && norefresh3>=0 && country_state==state1 && Hour_state1[k2].fromhour <= current_hour && Hour_state1[k2].tohour >= current_hour)
                      {
                       
                      flag2=0;
                      
                      }

    if (Time_state1 == "ALL" && Hour_state1 == "NONE" && norefresh3 >= 0 && state1 == "ALL") {
        flag2 = 0;

       
    }

    if (Hour_state1 == "ALL" && Time_state1 == "NONE" && norefresh3 >= 0 && state1 == "ALL") {

        flag2 = 0;
     
    }

    if (Time_state1 == "ALL" && Hour_state1 == "NONE" && norefresh3 >= 0 && state1 == "ALL") {
        flag2 = 0;

    }
    if (Time_state1 == "ALL" && Hour_state1 == "ALL" && norefresh3 >= 0 && state1 == "ALL") {
        flag2 = 0;

    }

    if (new12 == 0) {
        if (Time_state1 == "ALL" && Hour_state1 == "NONE" && adunit_state1[c] == "ALL" && state1 == "ALL") {
            flag2 = 0;

        }

        if (Hour_state1 == "ALL" && Time_state1 == "NONE" && adunit_state1[c] == "ALL" && state1 == "ALL") {

            flag2 = 0;
           
        }

        if (Time_state1 == "ALL" && Hour_state1 == "NONE" && adunit_state1[c] == "ALL" && country_state == state1) {
            flag2 = 0;

        }
         if (Time_state1 == "NONE" && Hour_state1 == "ALL" && adunit_state1[c] == "ALL" && country_state == state1) {
            flag2 = 0;

        }
        if (Time_state1 == "ALL" && Hour_state1 == "ALL" && adunit_state1[c] == "ALL" && country_state == state1) {
            flag2 = 0;

        }

    }

    if (new12 == 0) {

        if (Time_state1 == "ALL" && Hour_state1 == "NONE" && adunit_state1[c] == "ALL" && state1 == "INTERNATIONAL" && country_rtb1!= "IN") {
            flag2 = 0;

        }

        if (Hour_state1 == "ALL" && Time_state1 == "NONE" && adunit_state1[c] == "ALL" && state1 == "INTERNATIONAL" && country_rtb1!= "IN") {

            flag2 = 0;
          
        }
         if (Hour_state1 == "ALL" && Time_state1 == "ALL" && adunit_state1[c] == "ALL" && state1 == "INTERNATIONAL" && country_rtb1!= "IN") {

            flag2 = 0;
          
        }

    }

    if (Time_state1 == "ALL" && Hour_state1 == "NONE" && norefresh3 >= 0 && state1 == "INTERNATIONAL" && country_rtb1!= "IN") {
        flag2 = 0;

    }

    if (Hour_state1 == "ALL" && Time_state1 == "NONE" && norefresh3 >= 0 && state1 == "INTERNATIONAL" && country_rtb1!= "IN") {

        flag2 = 0;
       
    }
if (Hour_state1 == "ALL" && Time_state1 == "ALL" && norefresh3 >= 0 && state1 == "INTERNATIONAL" && country_rtb1!= "IN") {

        flag2 = 0;
       
    }



     
      }
  }
      }
      }
      

    }
}

return flag2;
}


  var andbeyondpv = new XMLHttpRequest();
  andbeyondpv.onreadystatechange = function() {
  if(this.readyState == 4 && this.status == 200) {
  }
  };
  andbeyondpv.open("GET", "https://prebid.andbeyond.media/impstats.php?aff=3601001&type=pv");
  andbeyondpv.responseType = "json";
  andbeyondpv.send();

let options = {
                root: null,
                rootMargin: "-50px -50px",
                threshold: 0.05
            };
 let observer = new IntersectionObserver((entries, ob) => {
                entries.forEach(entry => {
target_id=entry.target.id;
                    if (entry.isIntersecting) {
                        starttime = entry.time;
start_time[target_id]=starttime;
                        entry.target.classList.add("active");
                    } else {
                        entry.target.classList.remove("active");
                        if (start_time[target_id]!=undefined && start_time[target_id] != 0) {
                            endtime = entry.time;
if(total_vis[target_id]==undefined)
total_vis[target_id]=0;
                            total_vis[target_id] = total_vis[target_id] + endtime - start_time[target_id];

totalvisible1=Math.round(total_vis[target_id]/1000);
                
            // console.log("total visible : " +target_id+ 'SECONDS'+totalvisible1);

slot_vis[target_id]=totalvisible1;

                        }
                    }
                });
            }, options);





var url1=window.location.origin + window.location.pathname;
var country=country_rtb1;


   (function () {
 var gads = document.createElement('script');

       gads.type = 'text/javascript';
gads.async = true;
var useSSL = 'https:' == document.location.protocol;
        gads.src = (useSSL ? 'https:' : 'http:') +
                '//p.adlooxtracking.com/gpt/a.js';
       var node = document.getElementsByTagName('script')[0];
        node.parentNode.insertBefore(gads, node);
    })();


window.adloox_pubint = window.adloox_pubint || { cmd: [] };
adloox_pubint.cmd.push(function() {
adloox_pubint.init({
clientid: 532,
platformid: 248,
tagid: 1193

});
});
window.googletag = window.googletag || { cmd: [] };


url1=window.location.href;
ignore={};
 googletag.cmd.push(function() {


    ///////// BEGIN DIY INJECT JS //////////
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      function a2qs(a) {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
        function fixedEncodeURIComponent(str) {
          return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
            return '%' + c.charCodeAt(0).toString(16);
          });
        }
       
 
        const args = [];
        let n = a.length;
        while (n-->0)
          if (!(a[n][1] === undefined || a[n][1] === null || a[n][1] === false))
            args.unshift(fixedEncodeURIComponent(a[n][0]) + (a[n][1] !== true ? ('=' + fixedEncodeURIComponent(a[n][1])) : ''));
        
        return args.join('&');
      }


      if (event.isEmpty) return;

      var slot = event.slot;
      var id = slot.getSlotElementId();

if (googletag.pubads().getTargeting("adl_ok").length==0)return;

if((googletag.pubads().getTargeting("adl_ivt").length>0 || googletag.pubads().getTargeting("adl_ip").length>0 || googletag.pubads().getTargeting("adl_freqcap").length>0 || googletag.pubads().getTargeting("adl_ua_spider").length>0 || googletag.pubads().getTargeting("adl_ua_old").length>0 || googletag.pubads().getTargeting("adl_ua_invalid").length>0))
 {
   // adloox_fraud=1;
  return; 
 }

 if((googletag.pubads().getTargeting("adl_ivt").length>0 && googletag.pubads().getTargeting("adl_ivt")=='1') || (googletag.pubads().getTargeting("adl_ua_old").length>0 && googletag.pubads().getTargeting("adl_ua_old")=='1') || googletag.pubads().getTargeting("adl_ua_invalid").length>0 && googletag.pubads().getTargeting("adl_ua_invalid")=='1'){
adloox_fraud=1;
}else{
  adloox_fraud=0;
}

if(id=='andbeyond3001' && (ignore[id]==undefined || !ignore[id])) 
{
ignore[id]=true;
}
else
return;

      var el = document.getElementById(id);
      if (!el) {
        console.log('should not happen, missing id!', id);
        return;
      }


      var js = 'https://j.adlooxtracking.com/ads/js/tfav_adl_' + 532 + '.js';  // clientid
      var qs = [
        [ 'tagid', 1193 ],              // tagid
        [ 'platform', 248 ],              // platformid
        [ 'targetelt', id ],
        [ 'fwtype', 4 ],
        [ 'id1', slot.getSlotElementId() ],
        [ 'id2', slot.getAdUnitPath() ],
        [ 'id3', event.advertiserId ],
        [ 'id4', event.campaignId ],
        [ 'id5', event.creativeId ],
        [ 'id6', event.lineItemId ],
        [ 'id7', event.size.join('x') ],
        [ 'id8', url1 ],      // <<<< SET BY YOU EARLIER!
        [ 'id9', country_rtb1 ],      // <<<< SET BY YOU EARLIER!
        [ 'id11', '$ADLOOX_WEBSITE' ]
      ];
  
      var s = document.createElement('script');
      s.src = js + '#' + a2qs(qs);
      el.parentNode.insertBefore(s, el.nextSibling);
    });
    ///////// END DIY INJECT JS //////////
  });



var adloox_pubint_timeout = function(fn, to) {
var cb = (function(that) {
return function() {
if (!cb.t) return;
window.clearTimeout(cb.t);
delete cb.t;
fn.apply(that);
};
})(this);
cb.t = window.setTimeout(cb, to);
return cb;

};



   

setTimeout(function(){
  var gads = document.createElement('script');
      gads.async = true;
gads.type = 'text/javascript';
var useSSL = 'https:' == document.location.protocol;
gads.src = (useSSL ? 'https:' : 'http:') +
'//ads.aralego.com/cookiesync';
var node = document.getElementsByTagName('script')[0];
node.parentNode.insertBefore(gads, node);
},10000);
rtbpbjs.que.push(function () {
rtbpbjs.setConfig({ bidderSequence: "fixed" }) ; 
rtbpbjs.setConfig({
        cache: {
            url: "https://prebid.adnxs.com/pbc/v1/cache",
            ignoreBidderCacheKey:true
        }
    });
rtbpbjs.setBidderConfig({"bidders":["beyondmedia","smartyads","smartyvideo","adpone","adlivevideo","abmxandr","adabm","rtbhouse","teads","teadarticle","onetag","medianet","smaato","rtbhouse","improvedigital","rtbhouse","rtbdemandadk","adagio","colombia","improvedigital","criteointl","audiencenetwork","sovrn","smartadserver","criteo","pubmatic","rubicon","sovrn","abmapp","medianet"],"config":{"schain":{"validation":"relaxed","config":{"ver":"1.0","complete":1,"nodes":[{"asi":"andbeyond.media","sid":"11226","hp":1}]}}}});
rtbpbjs.setBidderConfig({"bidders":["between","tripleartside","triplesectop","triplesecside","openxoutstream","project-limelight","adtellvideo","project-lime-video","spotx","freewheel-ssp","amx","eplanning","smilewanted","adtelligent","adagiortb","districtmDMX","brapp","adkernelAdn","tripleart","openx","gumgum","ix","ixrtb","andbeyond","adkernel","oftmedia","getapp","33across","triplelift","appnexus"],"config":{"schain":{"validation":"relaxed","config":{"ver":"1.0","complete":1,"nodes":[{"asi":"rtbdemand.com","sid":"22044","hp":1}]}}}});
rtbpbjs.setBidderConfig({"bidders":["Abmanx"],"config":{"schain":{"validation":"relaxed","config":{"ver":"1.0","complete":1,"nodes":[{"asi":"datacygnal.io","sid":"153359","hp":1}]}}}});

});



rtbpbjs.que.push(function () {
rtbpbjs.aliasBidder("appnexus", "projectagora", {gvlid: 1032});
rtbpbjs.bidderSettings["projectagora"] = {
 bidCpmAdjustment: function(bidCpm) {
 return bidCpm * 0.75;}
}
    });
rtbpbjs.que.push(function () {
rtbpbjs.setBidderConfig({
"bidders": ["projectagora"],
"config": {
 "schain": {
"validation": "strict",
"config": {
  "ver": "1.0",
  "complete": 1,
  "nodes": [
   {
 "asi": "andbeyond.media",
"sid": "11226",
 "hp": 1
 },
 {
   "asi": "projectagora.com",
 "sid": "108968",
 "hp": 1
}
]
}
}
}
 });
rtbpbjs.setBidderConfig({
 bidders: ['oftmedia'],
config: {
  schain: {
  validation: 'relaxed',
  config: {
  ver:'1.0',
  complete: 1,
  nodes: [
              {
                  'asi':'152media.info',
                  'sid':'152M21',
                  'hp':1
              }
          ]
      }
  }
}
 });
});
rtbpbjs.que.push(function () {

});
rtbpbjs.que.push(function () {
rtbpbjs.setConfig({
 useBidCache: true,
 bidCacheFilterFunction: bid => bid.mediaType !== 'video'
});
});
 rtbpbjs.que.push(function() {
rtbpbjs.setConfig({
userSync: {
filterSettings: {
all: {
bidders: "*",
filter: "include"
}
},
syncsPerBidder: 6,
syncDelay: 3000,
auctionDelay: 0
}
});
});
 rtbpbjs.que.push(function() {
rtbpbjs.setConfig({
userSync: {
 userIds: [
{
name: "33acrossId",
params: {
pid: "0013300001cG13gAAC"
},
storage: {
name: "33acrossId",
type: "html5",
expires: 90,
refreshInSeconds: 8 * 3600
}
},
{
name: "unifiedId",
params: {
url: "//match.adsrvr.org/track/rid?ttd_pid=pubmatic&fmt=json"
},
storage: {
type: "html5",
name: "rtbpbjs-unifiedid",
expires: 60
}
},
{
name: "id5Id",
params: {
partner: 984
},
storage: {
type: "html5",
name: "id5id",
expires: 90,
refreshInSeconds: 8*3600
}
}
],
syncDelay: 5000
}
});
});
rtbpbjs.que.push(function () {

});
rtbpbjs.que.push(function () {
rtbpbjs.aliasBidder("appnexus", "projectagora");
rtbpbjs.aliasBidder("project-lime-video", "project-limelight");
rtbpbjs.aliasBidder("appnexus", "abmxandr");
rtbpbjs.aliasBidder("appnexus", "rtbxandr");
rtbpbjs.aliasBidder("smartyads", "smartyvideo");
rtbpbjs.aliasBidder("adtelligent", "adabm");
rtbpbjs.aliasBidder("appnexus", "districtm");
rtbpbjs.aliasBidder("appnexus", "abmapp");
rtbpbjs.aliasBidder("appnexus", "Abmanx");
rtbpbjs.aliasBidder("appnexus", "getapp");
rtbpbjs.aliasBidder("appnexus", "bcmapp");
rtbpbjs.aliasBidder("appnexus", "brapp");
rtbpbjs.aliasBidder("criteo","criteointl");  
rtbpbjs.aliasBidder("criteo","criteoint");  
rtbpbjs.aliasBidder("triplelift","tripleartside");  
rtbpbjs.aliasBidder("triplelift","triplesectop");  
rtbpbjs.aliasBidder("triplelift","triplesecside");  
rtbpbjs.aliasBidder("triplelift","tripleliftart");  
rtbpbjs.aliasBidder("adkernel","rtbdemandadk"); 
rtbpbjs.aliasBidder("teads","teadarticle"); 
rtbpbjs.aliasBidder("adagio", "adagiortb");
rtbpbjs.aliasBidder("adtelligent", "adtellvideo");
rtbpbjs.aliasBidder("adlivetech", "adlivevideo");
rtbpbjs.aliasBidder("project-limelight", "project-lime-video");
rtbpbjs.aliasBidder("smilewanted", "smilevideo");
rtbpbjs.aliasBidder("oftmedia", "abmoftmedia");
rtbpbjs.aliasBidder("amx", "abmamx");
rtbpbjs.aliasBidder("between", "betweenabm");
rtbpbjs.bidderSettings =
{
medianet: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.8;}},
pubmatic: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.85;}},
getapp: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.75;}},
rubicon: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.6;}},
bcmapp: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.75;}},
andbeyond: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.85;}},
rtbdemandadk: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.85;}},
oftmedia: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.7;}},
openx: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.8;}},
adagio: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.8;}},
improvedigital: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.68;}},
smartadserver: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.8;}},
luponmedia: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.9;}},
ix: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.9;}},
smaato: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.75;}},
adtelligent: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.9;}},
ucfunnel: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.8;}},
abmanx: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.9;}},
onetag: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.85;}},
amx: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.9;}},
projectagora: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.75;}},
           standard: {
storageAllowed: true,
adserverTargeting: [
{
                            key: "hb_bidder",
       val: function (bidResponse) {
                                return bidResponse.bidderCode;
       }
                        }, {
       key: "hb_adid",
                            val: function (bidResponse) {
           return bidResponse.adId;
                            }
   },
 {
key: "rtb_pb",
val: function (bidResponse) {
               var cpm = bidResponse.cpm;    
if( bidResponse.bidderCode && bidResponse.bidderCode=="pxyz" &&   cpm && cpm<=1.74)
return "0.00";

if (bidResponse.cpm < 8) {
return bidResponse.pbHg;
} else 
 return "8.00";
}
},{
key: "hb_pb",
val: function (bidResponse) {
               var cpm = bidResponse.cpm;    
if( bidResponse.bidderCode && bidResponse.bidderCode=="pxyz" &&   cpm && cpm<=1.74)
return "0.00";

if (bidResponse.cpm < 8) {
return bidResponse.pbHg;
} else 
 return "8.00";
}
},{

                            key: "hb_format",
       val: function (bidResponse) {
mediaType=bidResponse.mediaType;
if(bidResponse.bidderCode=="rtbdemandadk" || bidResponse.bidderCode=="adlivetech" || bidResponse.bidderCode=="adlivevideo" )
return "amp";
try
        {
                              mediaType=bidResponse.mediaType;
 if(bidResponse.adUnitCode.indexOf('78059622')>=0)
 return 'amp';
        if(mediaType==undefined || mediaType=="banner")
                              mediaType="banner";
        }
                              catch(e)
        {
                              mediaType="banner";
        }
 return mediaType;
       }
                          },{
       key: "hb_size",
                            val: function (bidResponse) {
           return bidResponse.size;
                            }
   }
                    ]
                },
            };
                            });
 rtbpbjs.que.push(function() {
});

var debug=getQueryString_val_new('debug');
if(debug!=undefined && debug==1)
{
context1=getQueryString_val_new('context');
if(context1==undefined )
context1='regular';
var adunitmock=getQueryString_val_new('adunit');
if(adunitmock==undefined )
adunitmock='andbeyond3001';
var adUnitsfirst = [{
        code: adunitmock,
        mediaTypes: {
banner:{
sizes: [[300,250]],
}
},
        bids: [
{
    bidder: 'pubmatic',
                        params: {
   "publisherId":"156276",
                "adSlot":"pubmatic_test"
    }
                    }
        ]
    }];
if(context1=='instream')
{
width1=640;
height1=480;
}
else
{
width1=300;
height1=250;
}
  var adUnitsvideo = [{
        code: adunitmock,
        sizes :[[640,480],[300,250]],
        mediaTypes: {
video: {
 playerSize:[[width1, height1]],
                context: context1
            }
        },
 renderer: {
        url: 'https://acdn.adnxs.com/video/outstream/ANOutstreamVideo.js',
        backupOnly: true, // prefer demand renderer
        render: function (bid) {
            adResponse = {
                ad: {
                    video: {
    content: bid.vastXml,
                        player_height: bid.playerHeight,
    player_width: bid.playerWidth
}
}
            }
            bid.renderer.push(() => {
                ANOutstreamVideo.renderAd({
targetId: bid.adUnitCode,
                    adResponse: adResponse
                });
            });
        }
    },
        bids: [
            {
bidder: 'avantisvideo',
params: {
      AV_PUBLISHERID: '55b78633181f4603178b4568',
      AV_CHANNELID: '5d19dfca4b6236688c0a2fc4'
    }
}
        ]
    }];
activeadunit=adUnitsfirst;
adUnitand1=adUnitsfirst;
if(context1=="instream" || context1=="outstream")
adUnits1=adUnitsvideo;
rtbpbjs.que.push(function () {
rtbpbjs.addAdUnits(adUnitsfirst);
if(context1=="instream" || context1=="outstream")
{
adUnits1=adUnitsvideo;
rtbpbjs.addAdUnits(adUnitsvideo);
}
});
}


    
var globalinterval3=setInterval(function(){
  if(newunitcallback==1){
    clearInterval(globalinterval3);
    
  }
},100);

 

function refreshBid1rtb(id,test) {
 googletag.cmd.push(function() {
try
{
  var labelnew=Array();
  flag_active=1;
  visible=1;
  if(country_rtb1==undefined)
  country_rtb1='IN';
  
 labelnew=bidder_restrict(flag_active,visible,country_rtb1,null);
id1=eval(id);
id1.setTargeting("prebidtrue", "0");
id1.setTargeting("refresh1", "0");
 rtbpbjs.que.push(function() {

      rtbpbjs.requestBids({
         labels:labelnew,
        timeout: PREBID_TIMEOUT_NEW,
        adUnitCodes: [id],
        bidsBackHandler: function() {
        andstatus3001=1;
        id1=eval(id);
       if(id1!=undefined)
            {

              setTimeout(function () {
            if(adlooksstatus1==0){
                id1=eval(id);
             rtbpbjs.setTargetingForGPTAsync([id]);
             context="instream";


videocode=null;
var hb_pb=0;
var hb_bidder;
var hb_adid;
var hb_format;
var format;
idnew12=id.toString();
var andbparams=rtbpbjs.getAdserverTargetingForAdUnitCode(idnew12);
if(andbparams!=undefined)
format=andbparams["hb_format"];
else
format="banner";
videounit=0;
contextvideounit='other';

             if(videounit==1 && (contextvideounit=='instream' || contextvideounit=='oustream' && format!=undefined && format=='video')  || (format!=undefined && format=='video' && (context=='instream' || context=='outstream')))
        {
             

           }else{
             googletag.pubads().refresh([id1]);
           }
             
            }
             },1500);
            var cb = adloox_pubint_timeout(function() {
              id1=eval(id);
              adlooksstatus1=1;
             rtbpbjs.setTargetingForGPTAsync([id]);
             context="instream";


videocode=null;
var hb_pb=0;
var hb_bidder;
var hb_adid;
var hb_format;
var format;
idnew12=id.toString();
var andbparams=rtbpbjs.getAdserverTargetingForAdUnitCode(idnew12);
if(andbparams!=undefined)
format=andbparams["hb_format"];
else
format="banner";
videounit=0;
contextvideounit='other';

             if(videounit==1 && (contextvideounit=='instream' || contextvideounit=='oustream' && format!=undefined && format=='video')  || (format!=undefined && format=='video' && (context=='instream' || context=='outstream')))
           {
             

           }else{
             googletag.pubads().refresh([id1]);
           }

             // googletag.pubads().refresh([id1]);
            }, 700); // 700 milliseconds maximum delay
            adloox_pubint.cmd.push(function() {
            adloox_pubint.gpt(googletag, cb);
            });

            }

       }
      });
    });

 setTimeout(function () {

if(andstatus3001==0)
{

     id1=eval(id);
     googletag.pubads().refresh([id1]);

}
}, 5000);
}
catch(e)
{


}
});
 }


function encodenativeurl(string) {
    var number = "0x";
    var length = string.length;
    for (var i = 0; i < length; i++)
        number += string.charCodeAt(i).toString(16);
    return number;
}


setTimeout(function(){
  var locurl2=window.location.href;
locurl2 = locurl2.replace(/(^\w+:|^)\/\//, '');
 // console.log("locurl2"+locurl2);
if(block_url && block_url.length>0)
{
for(i=0;i<block_url.length;i++)
{
var url22=block_url[i]['url'];

if(locurl2.indexOf(url22)>=0)
{
   // console.log("locuradult1");
try{
if(googletag!=undefined &&  googletag.pubads()!=undefined){
 googletag.pubads().setTargeting("adult","1");
 andbeyondadult=1;
   // console.log("locuradult2");
}
}catch(e){
console.log('EXCEPTION'+e);
}
}
}

}

},1000);



function refreshBid2(id,this1,type,test,factor,width,height,newidflag,flag6,flag_active,nextactive,nextpassive,nextnumber,time_refreshunit,aswifttest1) {
 googletag.cmd.push(function() {
try{
var adunit3=id;
var adunitaswift3=id;



adunit3=adunit3.replaceAll('\/', '');
adunit3=adunit3.replaceAll('\_', '');
adunit3=adunit3.replaceAll('\-', '');
adunit3=adunit3.replaceAll('\.', '');

  adunit2=id;
try
{
adunit2=eval("adunit2" + id);

}
catch(e)
{

var ele='#'+id+' iframe';
try
{

  if(document.querySelectorAll(ele).length>0)
  {
  var ab3=document.querySelectorAll(ele)[0];
  iframe1=1;
   iframeid=ab3.getAttribute('id');
adunit2=iframeid;

}

}
catch(e)
{

}
}

adunit2=adunit2.replaceAll('google_ads_iframe_', '');
adunit2=adunit2.replaceAll('_0', '');
pos=adunit2.lastIndexOf("/");

if(pos>0)
adunit2 = adunit2.substring(pos+1);

len=adunit2.length;

pos123=adunit2.substring(len-2,len-1);

if(pos123=='_')
{
adunit2=adunit2.substring(0,len-2);
}

adunit2 = adunit2.substring(0,40);


var html=this1.innerHTML;
var demand_timeout;
var demand_payout;
var ad;
var publisher_id;
var cid;
var crid;
var id3;
var supply_timeout;

var countrefresh=0;
var norefresh=-1;
var idnew=id;
       var windowwidth = window.innerWidth;
var visible=true;
if(windowwidth<700 || flag6==1)
visible = isVisible(this1);
else 
visible = isVisible(this1);





flag=1;
if(visible==true)
{

flag=1;
}


var data;

id=id.replaceAll('\/', '');
id=id.replaceAll('\_', '');
id=id.replaceAll('\-', '');
id=id.replaceAll('\.', '');
try
{
data=eval('count'+id);
}
catch(e)
{
data=0;
}
var count=1;
if(data==undefined)
count=1;
else
count=parseInt(data)+1;

eval("count" + id + " = count");
tempval=eval("count"+id);

countrefresh=count;
strategy2=strategy;
if(visible==false)
{
success=count/factor_visible;

if(Number.isInteger(success))
{
flag=1;
strategy2=0;
}
else
{
strategy2=0;
flag=0;
}
}


if(visible==true && factor>1)
{
success=count/factor;
if(Number.isInteger(success))
{
flag=1;
}
else
flag=0;
}


if(norefresh>0)
flag=0;





flag2=1;
if(type==0)
{

try
{
flag2=eval('status'+id+'new');

}
catch(e)
{
flag2=1;
}


}

if(aswifttest1==1){
  min_view=0;
}
if((adunit3.indexOf('andbeyond')>=0 || html.indexOf('rtbdemiframe')>0 ) && flag==1 && flag2==1 && count<=1000)
{
if(slot_vis[adunit3]>=min_view_andbeyond)
{
flag2=1;

}
else
{
flag2=2;

}
}

if(adunit3.indexOf('andbeyond')<0 && flag==1 && flag2==1 && count<=1000)
{
if(slot_vis[adunit3]>=min_view)
{
flag2=1;

}
else
{
flag2=2;

}
}


flag4=0;

if((residual==1 && count<=1000 && flag==1 && id!="andbeyond6005") && ((adloox_fraud==1) || (andbeyondadult==1 || (flag_active==0 && visible==false && country_rtb1=="IN"))))
{
flag4=1;

try
{
time_refreshunitnew=eval("time_refreshunitnew"+adunit3);
}
catch(e)
{
time_refreshunitnew=0;
}


diffnew=timer_refresh-time_refreshunitnew;
eval("time_refreshunitnew" + adunit3  + " = timer_refresh");

if(flag2!=2)
{

 time_refreshunit=timer_refresh;


eval("active" + adunit3  + " = nextactive");
eval("passive" + adunit3  + " = nextpassive");
eval("time_refreshunit" + adunit3  + " = time_refreshunit");
}
else
{


if(diffnew<30)
{

flag4=0;
}
}



if(flag4==1)
{



if(flag==1)
{
var randomvaldata=Math.floor(Math.random() * 5) + 1;
if((width==970 && height==250)){
id='andbeyond'+width+height+randomvaldata;
}
else if((width==300 && height==100) || (width==300 && height==600)){
id='andbeyond'+height+randomvaldata;
}else{
id='andbeyond'+width+randomvaldata;
}
}
var labelnew=Array();
labelnew=bidder_restrict(flag_active,visible,country_rtb1,null);

 rtbpbjs.que.push(function(){
  rtbpbjs.requestBids({
       labels:labelnew,
        timeout: PREBID_TIMEOUT_NEW,
        adUnitCodes: [id],
        bidsBackHandler: function() {


var params = rtbpbjs.getAdserverTargetingForAdUnitCode(id);
if(params && params['hb_adid']){
cpm_final=params['hb_pb'];
}
else{
cpm_final=0;
}


if(cpm_final>0 && (params['hb_format']=='banner') || params['hb_format']=='amp')
{


slot_vis[adunit3]=0;
 time_refreshunit=timer_refresh;
nextnumber++;

eval("active" + adunit3  + " = nextactive");
eval("passive" + adunit3  + " = nextpassive");
eval("time_refreshunit" + adunit3  + " = time_refreshunit");
eval("nextnumber" + adunit3 + " = nextnumber");


var newDiv = document.createElement("div");
newDiv.setAttribute("id", 'rtbdemiframe');
newDiv.setAttribute("width", width);
newDiv.setAttribute("height", height);
style1="height:"+height+"px; width:"+width+"px;margin:0 auto;text-align:center";
newDiv.setAttribute("style",style1);
var newFrame = document.createElement("iframe");
newFrame.setAttribute("id", "rtbdemiframe");
newFrame.setAttribute("FRAMEBORDER", "0");
newFrame.setAttribute("SCROLLING", "no");
newFrame.setAttribute("MARGINHEIGHT", "0");
newFrame.setAttribute("MARGINWIDTH", "0");
newFrame.setAttribute("TOPMARGIN", "0");
newFrame.setAttribute("LEFTMARGIN", "0");
newFrame.setAttribute("ALLOWTRANSPARENCY", "true");
newFrame.setAttribute("WIDTH", "0");
newFrame.setAttribute("HEIGHT", "0");
newDiv.appendChild(newFrame);
jQuery(this1,parent.document).html(newDiv);
var url='https://prebid.andbeyond.media/impben1.php?aff=3601001&publisher_id='+params['hb_bidder']+'&price='+params['hb_pb']+'&type=refresh';
var pixel='<img src="'+url+'" style="display:none"></img>';
rtbpbjs.renderAd(newFrame.contentWindow.document,params['hb_adid']);
jQuery(this1,parent.document).append(pixel);

}


}
});

});
}
}else{

if(type==0)
{


if(count<=1000 && flag==1 && flag2==1)
{



var data;
var counter=1;

try
{
if(width==970 && height==250){
  data=eval('status'+width+height+'new');
  counter=parseInt(data)+1;
}
else{
if((width==300 && height==600) || (width==300 && height==100))
 data=eval('status'+height+'new');
else 
  data=eval('status'+width+'new');
counter=parseInt(data)+1;
}
}catch(e)
{
data=1;
counter=1;
}
if(width==970 && height==250)
eval("status" + width + height+ "new" + " = counter");
else
{
if((width==300 && height==600) || (width==300 && height==100))
eval("status" + height + "new" + " = counter");
else
eval("status" + width + "new" + " = counter");
}


eval("status" + id + "new" + " = 1");


try
{

if(width==970 && height==250){
  stat=eval('size'+width+height+counter+'status');
  }else{

    stat=eval('size'+width+counter+'status');



  }

if(stat==0)
flag2=0;
}
catch(e)
{
flag2=0;

}



if(height=="600" && width=="300"){
  id2='andbeyond'+height+counter;
}else if(height=="250" && width=="970"){
  id2='andbeyond'+width+height+counter;
}
else{
  id2='andbeyond'+width+counter;
}
if(height=="200" && width=="970")
  id2='andbeyond'+width+height+counter;
if(height=="100" && width=="300")
  id2='andbeyond'+height+counter;


eval("andbeyonddiv" + id + " = id2");
eval("andbeyondwidth" + id + " = width");
eval("andbeyondheight" + id + " = height");

test=test.replaceAll(idnew, id2);
id=id2;
eval("count" + id + " = countrefresh");
}
}





if(count<=1000 && flag==1 && flag2==1)
{


slot_vis[id]=0;
 time_refreshunit=timer_refresh;
nextnumber++;

eval("active" + id  + " = nextactive");
eval("passive" + id  + " = nextpassive");
eval("time_refreshunit" + id  + " = time_refreshunit");
eval("nextnumber" + id + " = nextnumber");

try
{
data=eval('counterefresh'+id);
}
catch(e)
{
data=0;
}

var count=1;
if(data==undefined)
count=1;
else
count=parseInt(data)+1;
eval("counterefresh" + id + " =count");


if(html.indexOf('rtbdemiframe')>0)
{
type=0;

}


status_bad=0;
id1=null;

try
{
id1=eval(id);
if(id1==undefined)
status_bad=1;

}
catch(e)
{
status_bad=1;
}


var namemc_back=namemc;

if(status_bad==1)
{
googletag.cmd.push(function () {

aff="3601001";


len=id.length;
if(len==14){
pos1=id.substr(len-2);
}
else{
  pos1=id.substr(len-1);
}

text=null;


if(id.indexOf('100')>0)
{
width1=300;
height1=100;
width2=100;
text='googletag.defineSlot("/'+namemc_back+',1769731/'+aff+'-'+width1+'-'+height1+'-'+pos1+'", ["fluid",[300, 100]], "'+id+'").addService(googletag.pubads())';
var positiondiv=aff+'-'+width1+'-'+height1+'-'+pos1;
}
if(id.indexOf('300')>0)
{
width1=300;
height1=250;
width2=width1;
text='googletag.defineSlot("/'+namemc_back+',1769731/'+aff+'-'+width1+'-'+height1+'-'+pos1+'", ["fluid",[300, 250],[250, 250],[200, 200]], "'+id+'").addService(googletag.pubads())';
var positiondiv=aff+'-'+width1+'-'+height1+'-'+pos1;
}
if(id.indexOf('336')>0)
{
width1=336;
height1=280;
width2=width1;
text='googletag.defineSlot("/'+namemc_back+',1769731/'+aff+'-'+width1+'-'+height1+'-'+pos1+'", ["fluid",[336,280],[300, 250]], "'+id+'").addService(googletag.pubads())';
var positiondiv=aff+'-'+width1+'-'+height1+'-'+pos1;
}
if(id.indexOf('600')>0)
{
width1=300;
height1=600;
width2=600;
text='googletag.defineSlot("/'+namemc_back+',1769731/'+aff+'-'+width1+'-'+height1+'-'+pos1+'", ["fluid",[300,600]], "'+id+'").addService(googletag.pubads())';
var positiondiv=aff+'-'+width1+'-'+height1+'-'+pos1;
}
if(id.indexOf('468')>0)
{
width1=468;
height1=60;
width2=468;
text='googletag.defineSlot("/'+namemc_back+',1769731/'+aff+'-'+width1+'-'+height1+'-'+pos1+'", ["fluid",[468,60]], "'+id+'").addService(googletag.pubads())';
var positiondiv=aff+'-'+width1+'-'+height1+'-'+pos1;
}

if(id.indexOf('728')>0)
{
width1=728;
height1=90;
width2=728;
text='googletag.defineSlot("/'+namemc_back+',1769731/'+aff+'-'+width1+'-'+height1+'-'+pos1+'", ["fluid",[728, 90]], "'+id+'").addService(googletag.pubads())';
var positiondiv=aff+'-'+width1+'-'+height1+'-'+pos1;
}


if(id.indexOf('970') >0)
{
width1=970;
height1=90;
width2=970;

text='googletag.defineSlot("/'+namemc_back+',1769731/'+aff+'-'+width1+'-'+height1+'-'+pos1+'", ["fluid",[970, 90],[728,90]], "'+id+'").addService(googletag.pubads())';
var positiondiv=aff+'-'+width1+'-'+height1+'-'+pos1;
}

if(id.indexOf('640')>0)
{
width1=640;
height1=480;
width2=640;

text='googletag.defineSlot("/'+namemc_back+',1769731/'+aff+'-'+width1+'-'+height1+'-'+pos1+'", ["fluid",[640,480]], "'+id+'").addService(googletag.pubads())';
var positiondiv=aff+'-'+width1+'-'+height1+'-'+pos1;
}


if(id.indexOf('970')>0 && id.indexOf('250')>0)
{
width1=970;
height1=250;
width2=970250;
text='googletag.defineSlot("/'+namemc_back+',1769731/'+aff+'-'+width1+'-'+height1+'-'+pos1+'", ["fluid",[970,250]], "'+id+'").addService(googletag.pubads())';
var positiondiv=aff+'-'+width1+'-'+height1+'-'+pos1;
}

if(id.indexOf('970')>0 && id.indexOf('200')>0)
{
width1=970;
height1=200;
width2=970200;
text='googletag.defineSlot("/'+namemc_back+',1769731/'+aff+'-'+width1+'-'+height1+'-'+pos1+'", ["fluid",[970,200]], "'+id+'").addService(googletag.pubads())';
var positiondiv=aff+'-'+width1+'-'+height1+'-'+pos1;
}

if(id.indexOf('160')>0)
{
width1=160;
height1=600;
width2=160;
text='googletag.defineSlot("/'+namemc_back+',1769731/'+aff+'-'+width1+'-'+height1+'-'+pos1+'", ["fluid",[160, 600],[120, 600]], "'+id+'").addService(googletag.pubads())';
var positiondiv=aff+'-'+width1+'-'+height1+'-'+pos1;
}
if(id.indexOf('120')>0)
{
width1=120;
height1=600;
width2=120;
text='googletag.defineSlot("/'+namemc_back+',1769731/'+aff+'-'+width1+'-'+height1+'-'+pos1+'", ["fluid",[120, 600]], "'+id+'").addService(googletag.pubads())';
var positiondiv=aff+'-'+width1+'-'+height1+'-'+pos1;
}
if(id.indexOf('320')>0)
{
width1=320;
height1=50;
width2=width1;
text='googletag.defineSlot("/'+namemc_back+',1769731/'+aff+'-'+width1+'-'+height1+'-'+pos1+'", ["fluid",[320, 50]], "'+id+'").addService(googletag.pubads())';
var positiondiv=aff+'-'+width1+'-'+height1+'-'+pos1;
}

if(adunit_network.length>0){
name_mc=namemc_back;
namemc_new=name_mc;
for (var i = 0; i < adunit_network.length; i++) {
if(adunit_network[i].adunit==positiondiv)
namemc_new=adunit_network[i].network;
}
if(text!=undefined)
text=text.replaceAll(""+name_mc+"",namemc_new);
}




if(text!=undefined)
{
try
{

id1=eval(text);




eval("andbeyond" + width2 + pos1 + " = id1");




 // googletag.pubads().disableInitialLoad();
}
catch(e)
{
console.log("CREATION EXCEPTION"+e+'FOR ID'+id);
}
}
});


}

if(type==0 || type==1)
{

eval("strategy2" + id + " =strategy2");
eval("strategy2width" + id + " =width");
eval("strategy2height" + id + " =height");
eval("strategy2type" + id + " =type");
eval("strategy2counter" + id + " =counter");



if(type==0 && strategy2==0){
  // this1.style.width = width+"px";
  // this1.style.height = height+"px";
  // this1.style.margin = "0 auto";
  // this1.style.overflow = "hidden";
  if(adunitaswift3.indexOf("aswift_")>=0){
    // this1.style.width = width+"px";
    // this1.style.height = height+"px";
    // this1.style.margin = "0 auto";
    // this1.style.overflow = "hidden";
    // this1.style.opacity = "1";

  }else{
this1.innerHTML="";
}
}
}

if(html.indexOf('rtbdemiframe')>0 && strategy2==0){
this1.innerHTML="";
}

var toiurl1=window.location.origin + window.location.pathname;
if((type==0 || newidflag==1) && strategy2==0){
  if(adunitaswift3.indexOf("aswift_")>=0){
    this1.parentNode.parentNode.innerHTML=test;
    // this1.style.display = "block";
  }else{
     this1.innerHTML=test;
 this1.style.display = "block";
}

 
 }


if(html.indexOf('rtbdemiframe')>0 && strategy2==0){
 this1.innerHTML=test;
}


if(id1!=null && id1!=undefined){
try
{


eval("adunit2" + id + " = adunit2");
id1.setTargeting("adunit" ,adunit2);
id1.setTargeting("prebidtrue", "0");

if(flag_active==undefined || flag_active==0)
id1.setTargeting("active","0");
else
id1.setTargeting("active","1");

if(visible==true)
id1.setTargeting("visible","1");
else
id1.setTargeting("visible","0");


if(count==1)
id1.setTargeting("refresh1","1");
if(count==2)
id1.setTargeting("refresh1","2");
if(count==3)
id1.setTargeting("refresh1","3");
if(count==4)
id1.setTargeting("refresh1","4");
if(count==5)
id1.setTargeting("refresh1","5");
if(count==6)
id1.setTargeting("refresh1","6");
if(count==7)
id1.setTargeting("refresh1","7");
if(count==8)
id1.setTargeting("refresh1","8");
if(count==9)
id1.setTargeting("refresh1","9");
if(count>=10)
id1.setTargeting("refresh1","10");


var andbeyondkeyname='activevisible';
if((visible==true && flag_active==1))
{
andbeyondkeyname='activevisible';

}
if((visible==true && flag_active==0))
{
andbeyondkeyname='inactivevisible';

}

if((visible==false && flag_active==1))
{
andbeyondkeyname='activeinvisible';

}
if((visible==false && flag_active==0))
{
andbeyondkeyname='inactiveinvisible';

}

try
{
if(id1.getTargetingKeys().length>0 && id1.getTargetingKeys().includes("activevisible"))
id1.clearTargeting("activevisible");

if(id1.getTargetingKeys().length>0 && id1.getTargetingKeys().includes("inactivevisible"))
id1.clearTargeting("inactivevisible");
if(id1.getTargetingKeys().length>0 && id1.getTargetingKeys().includes("activeinvisible"))
id1.clearTargeting("activeinvisible");
if(id1.getTargetingKeys().length>0 && id1.getTargetingKeys().includes("inactiveinvisible"))
id1.clearTargeting("inactiveinvisible");

}
catch(e)
{
}

  if(count==1){
  id1.setTargeting(andbeyondkeyname,"1");
  }else if(count==2){
  id1.setTargeting(andbeyondkeyname,"2");
  }else if(count==3){
  id1.setTargeting(andbeyondkeyname,"3");
  }else if(count==4){
  id1.setTargeting(andbeyondkeyname,"4");
  }else if(count==5){
  id1.setTargeting(andbeyondkeyname,"5");
  }else if(count==6){
  id1.setTargeting(andbeyondkeyname,"6");
  }else if(count==7){
  id1.setTargeting(andbeyondkeyname,"7");
  }else if(count==8){
  id1.setTargeting(andbeyondkeyname,"8");
  }else if(count==9){
  id1.setTargeting(andbeyondkeyname,"9");
  }else if(count>=10){
  id1.setTargeting(andbeyondkeyname,"10");
  }else{
    
  }

var randomvaldata=Math.floor(Math.random() * 10) + 1;
if(randomvaldata==1){
  if(flag_active==1){
  id1.setTargeting("refreshtype","active");
}else{
  id1.setTargeting("refreshtype","inactive");
}
}else{
   id1.setTargeting("refreshtype","none");
}

}
catch(e)
{
console.log('EXCEPTION'+e);
}
}

var labelnew=Array();
labelnew=bidder_restrict(flag_active,visible,country_rtb1,null);

if(country_rtb1!="IN"){
if(id!=undefined)
{
try{if(namemc_back==undefined)
tempnetwork=namemc;
else
tempnetwork=namemc_back;
temp_net=a9slots[id];
temp=JSON.stringify(temp_net);
temp=temp.replaceAll("{network}",tempnetwork);
temp_net=JSON.parse(temp);
apstag.fetchBids({
 slots:[temp_net],
 timeout:4e3
},function(bids){
googletag.cmd.push(function(){
apstag.setDisplayBids();
});
});
	videoa9flag=0;	
try{
	if(adUnits1 && adUnits1!=undefined)	
	{	
	for(i=0;i<adUnits1.length;i++)	
	{	
 videocode1=adUnits1[i];
 if(videocode1["code"]==id )
	videoa9flag=1;	
	}	
		
	}	
	eval("a9" + id + " = 0");	
	if(videoa9flag==1)	
	{	
		
		
	 apstag.fetchBids({	
	        slots: [{	
	            slotID: "andbeyondvideo", //Slot name created in the portal, aligns to individual request for this bid	
	            mediaType: "video"	
	        }]	
	    }, function(bids) {	
	      handleVideoBids(bids);	
	    });	
	    function handleVideoBids(bids) {	
	  if(bids.length > 0){	
	eval("a9" + id + " = bids[0].encodedQsParams");	
	        }	
	    }	
		
	}	
}catch(e){}}catch(e){console.log("EXCEPTION"+e);}
}
 }
 eval("widthid" + id + " = width");
eval("heightid" + id + " = height");
try{if(adunit3==undefined)
adunit3=id;
}
catch(e)
{
adunit3=id;
}
     try     
     {       
     temp_caps=this1.innerHTML;      
     }       
     catch(e)        
     {       
     temp_caps=id;   
     }       
     flagvideo=0;    
     try     
     {       
     if(country_rtb1!=undefined)     
     flagvideo=blackbox(temp_caps,country_rtb1,city_rtb,city_region,2);      
     }       
     catch(e){       
     flagvideo=0;    
     }       
     if(flagvideo==1)        
     eval("VIDEOFLAG" + id  + " = 1");       


 rtbpbjs.que.push(function() {
if(id!=undefined)
{
     rtbpbjs.requestBids({
       labels:labelnew,
        timeout: PREBID_TIMEOUT_NEW,
        adUnitCodes: [id],
        bidsBackHandler: function() {
               try
     {
     width1=eval('widthid'+id);
     height1=eval('heightid'+id);
  width=width1;
  height=height1;
     }
     catch(e)
     {       
     
       
     }       
try
{
videoflag=eval("VIDEOFLAG" + id);
}
catch(e)
{
videoflag=0;
}

andstatus300=1;
id1=eval(id);

idnew12=id.toString();
var andbparams=rtbpbjs.getAdserverTargetingForAdUnitCode(idnew12);


id1=eval(id);

  
if(id1!=undefined)
            {

              setTimeout(function () {
            if(adlooksstatus==0){
                id1=eval(id);
             rtbpbjs.setTargetingForGPTAsync([id]);
             context="instream";


videocode=null;
var hb_pb=0;
var hb_bidder;
var hb_adid;
var hb_format;
var format;
idnew12=id.toString();
var andbparams=rtbpbjs.getAdserverTargetingForAdUnitCode(idnew12);
if(andbparams!=undefined)
format=andbparams["hb_format"];
else
format="banner";
videounit=0;
contextvideounit='other';

             if(videounit==1 && (contextvideounit=='instream' || contextvideounit=='oustream' && format!=undefined && format=='video')  || (format!=undefined && format=='video' && (context=='instream' || context=='outstream')))
        {
             

           }else{
             googletag.pubads().refresh([id1]);
           }
             
            }
             },1500);
            var cb = adloox_pubint_timeout(function() {
              id1=eval(id);
              adlooksstatus=1;
             rtbpbjs.setTargetingForGPTAsync([id]);
             context="instream";


videocode=null;
var hb_pb=0;
var hb_bidder;
var hb_adid;
var hb_format;
var format;
idnew12=id.toString();
var andbparams=rtbpbjs.getAdserverTargetingForAdUnitCode(idnew12);
if(andbparams!=undefined)
format=andbparams["hb_format"];
else
format="banner";
videounit=0;
contextvideounit='other';

             if(videounit==1 && (contextvideounit=='instream' || contextvideounit=='oustream' && format!=undefined && format=='video')  || (format!=undefined && format=='video' && (context=='instream' || context=='outstream')))
           {
             

           }else{
             googletag.pubads().refresh([id1]);
           }

             // googletag.pubads().refresh([id1]);
            }, 700); // 700 milliseconds maximum delay
            adloox_pubint.cmd.push(function() {
            adloox_pubint.gpt(googletag, cb);
            });

            }

}









      });
}
    });

 setTimeout(function () {

if(andstatus300==0)
{
  id1=eval(id);
console.log('REFRESHING AGAIN AS NO PREBID RETURNED');
googletag.pubads().refresh([id1]);
                 
}
}, 5000);
}
}
}
catch(e)
{

console.log('EXCEPTION'+e);

}
});
}




 var windowwidth = window.innerWidth;

var global_refresh=0;


var tier2=0;

var newid=0;

var flag2=1;

      refreshval=refresh;
    


number5=0;
var refresh_time1=0;
var refresh_time=0;
var refresh_time2=0;

setInterval(function(){


  var val1=andbeyondtotalSeconds1;
  var weekdays = new Array(7);
  weekdays[0] = "Sunday";
  weekdays[1] = "Monday";
  weekdays[2] = "Tuesday";
  weekdays[3] = "Wednesday";
  weekdays[4] = "Thursday";
  weekdays[5] = "Friday";
  weekdays[6] = "Saturday";
  var current_date = new Date();
  var weekday_value = current_date.getDay();
  //var timehours=new Date().getHours();

success=timer_refresh/timebased_refresh;

timedate1 = Math.round((new Date()).getTime() / 1000);

try{
if(Number.isInteger(success))
{
timeflag=1;
 highcpm=0.1;
}
else
{

timeflag=0;
}

}catch(e){
console.log('EXCEPTION'+e);
}

     
 var sizeflag=0;
      

  idnew2='';
   knew=0;




   var childDivs = document.querySelectorAll('*[id^="andbeyond"],*[id^="div-"],*[id^="MOBILE_"],*[id^="DESK_"],*[id^="TOP_"],*[id^="LHS_"],*[id^="RHSTOP_"],*[id^="HP_"],*[id^="HP1_"],*[id^="RHS_"],*[id^="BTF_"],*[id^="ADP_"],*[id^="TOPBANNER_"],*[id^="BELOWARTICLE_"],*[id^="aswift_"]');
for( j=0; j< childDivs.length; j++ ) {
  var childDiv = childDivs[j];
newid=0;
newidflag=0;
var norefresh=0;
flag2=1;
var vs2=null;

try
{
if(childDiv!=undefined && childDiv!=null)
  vs2=childDiv.getAttribute('id');
else
 vs2=null;
}
catch(e)
{
}

var visible22=isVisible(childDiv);
if(visible22==undefined){
  visible22=false; 
}

vs3=vs2;
vs3=vs3.replaceAll('\/', '');
vs3=vs3.replaceAll('\_', '');
vs3=vs3.replaceAll('\-', '');
vs3=vs3.replaceAll('\.', '');
vs3=vs3.replaceAll('\(', '');
vs3=vs3.replaceAll('\)', '');


if(vs3!=undefined)
{


if(observ[vs3]==undefined)
{
observ[vs3]=1;
slot_vis[vs3]=0;

}
}



if(visible22==true)
slot_vis[vs3]=slot_vis[vs3]+1;
try{
if(vs2!=undefined && vs2!=null){
var vsinnerhtml=document.getElementById(vs2).innerHTML;
if(vsinnerhtml.indexOf('<iframe')<0){
slot_vis[vs3]=100;
}
}
}
catch(e)
{
  
}

nextactive=refresh+val1;
nextpassive=timer_refresh+timebased_refresh;
time_refreshunit=0;

try{
time_refreshunit=eval("time_refreshunit"+vs3);
nextnumber=eval("nextnumber"+vs3);

nextactive=eval("active" + vs3);
nextpassive=eval("passive" + vs3);
}
catch(e)
{
nextactive=refresh+val1;
nextpassive=timer_refresh+timebased_refresh;
time_refreshunit=timer_refresh;
nextnumber=0;
pos=1;
}

eval("passive" + vs3 + " = nextpassive");
eval("active" + vs3 + " = nextactive");
eval("time_refreshunit" + vs3 + " = time_refreshunit");
eval("nextnumber" + vs3 + " = nextnumber");
newflag=0;
diff=timer_refresh-time_refreshunit;

flagnewone=0;
if(vs2.indexOf('andbeyond')>=0 || (vs2.indexOf('andbeyond')<0 && timer_refresh>30))
{
if(vs2.indexOf('andbeyond')<0 && visible22==true && timer_refresh>30 && diff>=30){
flagnewone=1;
}
else{
if(vs2.indexOf('andbeyond')>=0 && visible22==true && diff>30){
flagnewone=2;
}
else{
flagnewone=0;
}
}
var temp=childDiv.innerHTML;

var temp_caps=temp.toUpperCase();


m1html=temp;
if(val1==nextactive)
{
if(vs2.indexOf('andbeyond')>=0)
nextactive=nextactive+refresh_andbeyond;
else
nextactive=nextactive+refresh;
if(diff>=30)
{
factor_visible=factor_visible;
newflag=1;
flag_active=1;
}
}
if((timebased==1 && (nextpassive==timer_refresh) && nextnumber<number))
{
if(vs2.indexOf('andbeyond')>=0)
nextpassive=nextpassive+timebased_refresh_andbeyond;
else
nextpassive=nextpassive+timebased_refresh;

if(diff>=30)
{
factor_visible=factor_visible;
flag_active=0;
newflag=1;
}
}


if(flagnewone==1 || flagnewone==2)
{
flag_active=2;
newflag=1;
}
eval("passive" + vs3 + " = nextpassive");
eval("active" + vs3 + " = nextactive");
eval("time_refreshunit" + vs3 + " = time_refreshunit");
eval("nextnumber" + vs3 + " = nextnumber");
if(newflag==1 && diff>=30)
{
    // console.log("diff"+diff+"time_refreshunit"+time_refreshunit+"flagnewone"+flagnewone);

if((diff>=30 && nextnumber<=5) || (flag_active==1))
{
flag6=0;

highcpm=highcpm1;
if(googletag!=undefined &&  googletag.pubads()!=undefined)
 googletag.pubads().setTargeting("refresh","0");
}
else
{



if(googletag!=undefined &&  googletag.pubads()!=undefined)
 googletag.pubads().setTargeting("refresh","1");
flag6=1;
highcpm=0.1;

} 
 

     
if(vs2.indexOf('andbeyond')==0 || vs2.indexOf('div-')==0 || vs2.indexOf('MOBILE_')==0 || vs2.indexOf('DESK_')==0 || vs2.indexOf('BELOWARTICLE_')==0 || vs2.indexOf('TOP_')==0 || vs2.indexOf('ADP_')==0 || vs2.indexOf('LHS_')==0 ||vs2.indexOf('RHSTOP_')==0 ||vs2.indexOf('HP_')==0 ||vs2.indexOf('HP1_')==0 ||vs2.indexOf('RHS_')==0 ||vs2.indexOf('BTF_')==0 ||vs2.indexOf('TOPBANNER_')==0 || vs2.indexOf('aswift_')==0)
{

try
{


if(country_rtb1==undefined)
   country_rtb1="IN";

if(vs2.indexOf('andbeyond')<0)
flag2=blackbox(temp_caps,country_rtb1,city_rtb,city_region,0);
else
flag2=1;



}
catch(e)
{
}



factortier1=m1html.indexOf(factor_tier1_text);
factortier2=m1html.indexOf(factor_tier2_text);
factortier3=m1html.indexOf("TIER3");

if(factortier2>0)
tier2=1;

if(factortier3>0)
tier3=1;





size600=temp.indexOf('height="600"');
size300=temp.indexOf('width="300"');
size60=temp.indexOf('height="60"');
size468=temp.indexOf('width="468"');
size250=temp.indexOf('height="250"');
size250se=temp.indexOf('width="250"');
size728=temp.indexOf('width="728"');
size160=temp.indexOf('width="160"');
size970=temp.indexOf('width="970"');
size90=temp.indexOf('height="90"');
size320=temp.indexOf('width="320"');
size50=temp.indexOf('height="50"');
size336=temp.indexOf('width="336"');
size280=temp.indexOf('height="280"');
size200=temp.indexOf('height="200"');
size1050=temp.indexOf('width="1050"');
size159=temp.indexOf('height="159"');
size360=temp.indexOf('width="360"');
size100=temp.indexOf('height="100"');
size480=temp.indexOf('height="480"');
size100=temp.indexOf('height="100"');
size480=temp.indexOf('height="480"');
size10501=temp.indexOf('height="1050"');
size980=temp.indexOf('width="980"');
size1200=temp.indexOf('width="1200"');
size64=temp.indexOf('height="64"');
size120=temp.indexOf('width="120"');
size750=temp.indexOf('height="750"');
size400=temp.indexOf('width="400"');
size333=temp.indexOf('height="333"');
sizeheight300=temp.indexOf('height="300"');
sizeheight312=temp.indexOf('height="312"');
sizewidth312=temp.indexOf('width="312"');
sizewidth372=temp.indexOf('width="375"');
size7501=temp.indexOf('width="750"');
size497=temp.indexOf('width="497"');
size329=temp.indexOf('width="329"');
size351=temp.indexOf('width="351"');
size292=temp.indexOf('height="292"');
size1005=temp.indexOf('width="1005"');
size317=temp.indexOf('width="317"');
size158=temp.indexOf('width="158"');
size215=temp.indexOf('width="215"');
size328=temp.indexOf('width="328');
size318=temp.indexOf('width="318"');
size124=temp.indexOf('height="124"');
size0=temp.indexOf('height="0"');
size300px=temp.indexOf('width="300px"');
size0px=temp.indexOf('height="0px"');
size20px=temp.indexOf('height="0"');
size53=temp.indexOf('height="53"');
size106=temp.indexOf('height="106"');




flag=0;

  var windowwidthqwq = window.innerWidth;
           
  aswifttest1=0;

if(vs2.indexOf('andbeyond')==0){
  flag2=1;
}

if(size300>0 && size250>0)
{
flag=1;
width=300;
height=250;
}

if(size300>0 && size0>0)
{
flag=1;
width=300;
height=250;
}

if(size300px>0 && size0px>0)
{
flag=1;
width=300;
height=250;
aswifttest1=1;
}

if(size300>0 && size20px>0)
{
flag=1;
width=300;
height=250;
aswifttest1=1;
}
if(size317>0 && size250>0)
{
flag=1;
width=300;
height=250;
}

if(size318>0 && size250>0)
{
flag=1;
width=300;
height=250;

}if(size328>0 && size250>0)
{
flag=1;
width=300;
height=250;
}


if(size329>0 && size250>0)
{
flag=1;
width=300;
height=250;
}
if(size320>0 && size480>0)
{
flag=1;
width=320;
height=480;
}
if(size351>0 && size292>0)
{
flag=1;
width=300;
height=250;
}

if(size468>0 && size60>0)
{
flag=1;
width=320;
height=50;
}
if(size497>0 && size280>0)
{
flag=1;
width=300;
height=250;
}

if(size400>0 && size333>0)
{
flag=1;
width=300;
height=250;
}


if(size400>0 && sizeheight300>0)
{
flag=1;
width=300;
height=250;
}

if(size7501>0 && size280>0)
{
flag=1;
width=720;
height=90;
}
if(size250>0 && size250se>0)
{
flag=1;
width=300;
height=250;
}
if(size336>0 && size280>0)
{
flag=1;
width=300;
height=250;
}
if(size600>0 && size300>0)
{
flag=1;
width=300;
height=600;
}
if(size10501>0 && size300>0)
{
flag=1;
width=300;
height=600;
}


 if(size160>0 && size600>0)
 {
 flag=1;
 width=160;
 height=600;
 }

 if(size158>0 && size600>0)
 {
 flag=1;
 width=160;
 height=600;
 }

 if(size215>0 && size600>0)
 {
 flag=1;
 width=160;
 height=600;
 }

 if(size120>0 && size600>0)
 {
 flag=1;
 width=120;
 height=600;
 }
 if(size728>0 && size90>0)
 {
 flag=1;
 width=728;
 height=90;
 }

if(size728>0)
{
flag=1;
width=728;
height=90;
}
if(size970>0 && size250>0)
{
flag=1;
width=970;
height=250;
}

if(size970>0 && size200>0)
{
flag=1;
width=970;
height=90;
}

if(size1200>0 && size90>0)
{
flag=1;
width=970;
height=90;
}

if(size970>0 && size90>0)
{
flag=1;
width=970;
height=90;
}
if(size980>0 && size200>0)
{
flag=1;
width=970;
height=90;
}

if(size1005>0 && size124>0)
{
flag=1;
width=970;
height=90;
}

 if(sizewidth372>0 && sizeheight312>0)
{
flag=1;
width=300;
height=250;
}

 if(sizeheight312>0 && sizewidth312>0)
{
flag=1;
width=300;
height=250;
}

if(size320>0 && size50>0)
{
flag=1;
width=320;
height=50;
}
if(size320>0 && size53>0)
{
flag=1;
width=320;
height=50;
}
 if(sizewidth372>0 && size50>0)
{
flag=1;
width=320;
height=50;
}


if(size320>0 && size100>0)
{
flag=1;
width=300;
height=100;
}
if(size320>0 && size106>0)
{
flag=1;
width=300;
height=100;
}
if(size300>0 && size100>0)
{
flag=1;
width=300;
height=100;
}


if(windowwidthqwq<=767){
if(size64>0)
{
flag=1;
width=320;
height=50;
}
if(size750>0)
{
flag=1;
width=300;
height=600;
}
if(sizeheight300>0)
{
flag=1;
width=300;
height=250;
}
}


if(flag==0)
{
sizehp1=temp.indexOf('300x250');
sizehp2=temp.indexOf('728x90');
sizehp3=temp.indexOf('320x50');
sizehp4=temp.indexOf('300x600');
sizehp5=temp.indexOf('970x90');
sizehp6=temp.indexOf('970x250');
sizehp8=temp.indexOf('160x600');
sizehp7=temp.indexOf('google_ads_iframe');


size1206001=temp.indexOf('120X600');
size1606001=temp.indexOf('160X600');
size3006001=temp.indexOf('300X600');
size728901=temp.indexOf('728X90');
size970901=temp.indexOf('970X90');
size320501=temp.indexOf('320X50');
size9702501=temp.indexOf('970X250');
sizeh3002501=temp.indexOf('300X250');




if(sizehp1>0 && sizehp7>0)
{
flag=1;
width=300;
height=250;
}

if(sizehp2>0 && sizehp7>0)
{
flag=1;
width=728;
height=90;
}


if(sizehp3>0 && sizehp7>0)
{
flag=1;
width=320;
height=50;
}

if(sizehp4>0 && sizehp7>0)
{
flag=1;
width=300;
height=600;
}
if(sizehp5>0 && sizehp7>0)
{
flag=1;
width=970;
height=90;
}
if(sizehp6>0 && sizehp7>0)
{
flag=1;
width=970;
height=250;
}


if(size1206001>0 && sizehp7>0)
 {
 flag=1;
 width=160;
 height=600;
 }

 if(size1606001>0 && sizehp7>0)
 {
 flag=1;
 width=160;
 height=600;
 }


if(sizehp8>0 && sizehp7>0)
{
flag=1;
width=160;
height=600;
}

if(sizeh3002501>0 && sizehp7>0)
{
flag=1;
width=300;
height=250;
}

if(size3006001>0 && sizehp7>0)
{
flag=1;
width=300;
height=600;
}

if(size320501>0 && sizehp7>0)
{
flag=1;
width=320;
height=50;
}

if(size970901>0 && sizehp7>0)
{
flag=1;
width=970;
height=90;
}


if(size728901>0 && sizehp7>0)
{
flag=1;
width=728;
height=90;
}

if(size9702501>0 && sizehp7>0)
{
flag=1;
width=970;
height=250;
}
}




m=vs2.indexOf('andbeyond');
m1=vs2.indexOf('div-');
m2=vs2.indexOf('aswift_');
m3=vs2.indexOf('BELOWARTICLE_');
m4=vs2.indexOf('TOPBANNER_');
m5=vs2.indexOf('BTF_');
m6=vs2.indexOf('RHS_');
m7=vs2.indexOf('HP_');
m8=vs2.indexOf('RHSTOP_');
m9=vs2.indexOf('LHS_');
m10=vs2.indexOf('TOP_');
m11=vs2.indexOf('ADP_');
m12=vs2.indexOf('HP1_');
m13=vs2.indexOf('DESK_');
m14=vs2.indexOf('MOBILE_');



if(debugtest2==1){
console.log("vs2"+vs2+"flag"+flag+"flag2"+flag2);
}
if(factortier1>0 && global_refresh==0){
global_refresh=1;


refresh=Math.round(refresh/factor_tier1);
}
if(factortier2>0 && global_refresh==0){
global_refresh=1;
refresh=15;
if(timebased==1 && timeflag==1)
highcpm=0.2;
else
highcpm=0.1;

}


if(vs2=="div-gpt-ad-1497448474263-1"){
  flag2=0;
}
var aswiftad1=1;
if(vs2.indexOf("aswift_")>=0){
if(vs2.indexOf("_host")>=0){
  aswiftad1=0;
}
}else{
  aswiftad1=0;
}


if(flag2==1 && aswiftad1==0)
{
if(flag==1 && newid!=undefined && newid!=0)
{
if(flag6==1)
 test='<div id="andbeyond_unit" style="height:'+height+'px; width:'+width+'px;margin:0 auto;text-align:center;"><div id="' + newid + '"><scr' + 'ipt>googletag.pubads().setTargeting("refresh","1");google' + 'tag.cmd.' + 'push(func' + 'tion() { google' + 'tag.displ' + 'ay(\'' + newid + '\'); });</scr' + 'ipt></div></div>';
else
 test='<div id="andbeyond_unit" style="height:'+height+'px; width:'+width+'px;margin:0 auto;text-align:center;"><div id="' + newid + '"><scr' + 'ipt>googletag.pubads().setTargeting("refresh","0");google' + 'tag.cmd.' + 'push(func' + 'tion() { google' + 'tag.displ' + 'ay(\'' + newid + '\'); });</scr' + 'ipt></div></div>';
 
refreshBid2(newid,childDiv,1,test,1,width,height,newidflag,flag6,flag_active,nextactive,nextpassive,nextnumber,time_refreshunit,aswifttest1);


}
else
{
if( m==0 || ((m1==0 || m2==0 || m3==0 || m4==0 || m5==0 || m6==0 || m7==0 || m8==0 || m9==0 || m10==0 || m11==0 || m12==0 || m13==0 || m14==0) && flag==1 && temp.indexOf('id="andbeyond')<0))
{

  
if(m==0)
{   

if(flag6==1)
 test='<scr' + 'ipt> googletag.pubads().setTargeting("refresh","1");google' + 'tag.cmd.' + 'push(func' + 'tion() { google' + 'tag.displ' + 'ay(\'' + vs2 + '\'); });</scr' + 'ipt>';
else
 test='<scr' + 'ipt> googletag.pubads().setTargeting("refresh","0");google' + 'tag.cmd.' + 'push(func' + 'tion() { google' + 'tag.displ' + 'ay(\'' + vs2 + '\'); });</scr' + 'ipt>';

 refreshBid2(vs2,childDiv,1,test,1,width,height,newidflag,flag6,flag_active,nextactive,nextpassive,nextnumber,time_refreshunit,aswifttest1);
}
else
{

if(flag6==1)
 test='<div id="andbeyond_unit" style="height:'+height+'px; width:'+width+'px;margin:0 auto;text-align:center;"><div id="' + vs2 + '"><scr' + 'ipt>googletag.pubads().setTargeting("refresh","1");google' + 'tag.cmd.' + 'push(func' + 'tion() { google' + 'tag.displ' + 'ay(\'' + vs2 + '\'); });</scr' + 'ipt></div></div>';
else
 test='<div id="andbeyond_unit" style="height:'+height+'px; width:'+width+'px;margin:0 auto;text-align:center;"><div id="' + vs2 + '"><scr' + 'ipt>googletag.pubads().setTargeting("refresh","0");google' + 'tag.cmd.' + 'push(func' + 'tion() { google' + 'tag.displ' + 'ay(\'' + vs2 + '\'); });</scr' + 'ipt></div></div>';
 
refreshBid2(vs2,childDiv,0,test,1,width,height,newidflag,flag6,flag_active,nextactive,nextpassive,nextnumber,time_refreshunit,aswifttest1);

}

}

} 

}

andblocktest=0;

if(flag2==0 && flag==1)
{

if(vs3.indexOf('andbeyond')<0 &&  temp.indexOf('andbeyond')<0)
{
  try
     {
    andblocktest=eval('dividandblocktest'+vs3);
     }
catch(e2)
{
eval("dividandblocktest" + vs3 + " = 1");
andblocktest=1;
 var andbeyondpv = new XMLHttpRequest();
andbeyondpv.onreadystatechange = function() {
if(this.readyState == 4 && this.status == 200) {
}
};
andbeyondpv.open("GET", "https://prebid.andbeyond.media/impstats.php?aff=3601001&type=block");
andbeyondpv.responseType = "json";
andbeyondpv.send();
}

}
}


}

}


}

}

}, 1000)

var windowwidth1 = window.innerWidth;
  var urlmob22=window.location.origin + window.location.pathname;
var globalcount=0;
var globalinterval=setInterval(function(){
if(window.googletag && googletag.pubadsReady && googletag.apiReady)
{


  if(windowwidth1<=900){

if(urlmob22!="https://chitrajyothy.com/" || urlmob22!="https://m.andhrajyothy.com/"){

if(document.querySelector("#andbeyond6005")){
  clearInterval(globalinterval);
       }
    else{
var flyingcarpetunit='<div class="fly123" style="min-width: 300px; height: 300px;position: relative!important; visibility: visible!important; overflow: hidden!important;">  <div class="flycarpet1" style="height: 100%!important; width: 100%!important;position: absolute!important;clip: rect(0,auto,auto,0)!important;"><div class="andbeyond_adunit" style="backface-visibility: hidden!important;transform: translate3d(0px, 0px, 0px)!important;visibility: visible!important;    overflow: hidden!important;width: 100%!important;height: 100%!important;position: fixed!important; top: 120px!important;left: 0px!important;"><div id="andbeyond6005" style="width:300px;height:600px;margin: 0 auto;text-align: center;"><scr' + 'ipt>google' + 'tag.cmd.' + 'push(func' + 'tion() { google' + 'tag.displ' + 'ay("andbeyond6005"); });</scr' + 'ipt></div></div></div></div>'; 
    if(document.querySelectorAll('.category_desc p')[2]){
   googletag.cmd.push(function () {
  andbeyond6005=googletag.defineSlot("/21751243814,1769731/3601001-300-600-5", [300, 600], "andbeyond6005").addService(googletag.pubads());
 });
 document.querySelectorAll('.category_desc p')[0].insertAdjacentHTML("afterend", flyingcarpetunit);
     refreshBid1rtb('andbeyond6005',andbeyond6005); 
   }  
}
}
}
}
},100);


}

}