AdMgr=(function(){var isLog=0,isSent=0,slots=[],slotsR=[],techs={"pb":1,"aps":1},isResent=0,techsR={"pb":1,"aps":1},vals={};
function logAds(){if(isLog){return}
if(!window.jcb||!window.TADhba){setTimeout(logAds,1000);
return}
isLog=1;
jcb("/scripts/logads.php?d=d"+"&"+TADhba(),function(){})}
AD={s:[],o:0};
googletag=window.googletag||{};
googletag.cmd=googletag.cmd||[];
function push(f){googletag.cmd.push(f)}
function set(n,v){vals[n]=v}
function get(n){return vals[n]}
function setTargeting(n,v){if(v){push(function(){googletag.pubads().setTargeting(n,v)})}}
function send(){if(isSent)return;
isSent=true;
setTargeting("pbv",window.pbv);
push(function(){googletag.enableServices();
googletag.pubads().refresh(AD.s)})}
function resend(){if(isResent)return;
isResent=true;
let o=slotsR[0];
o.S.setTargeting('rot',''+o.r);
googletag.pubads().refresh([o.S])}
function rendered(){setTimeout(logAds,1000)}
function bidsIn(i){delete techs[i];
if(Object.keys(techs).length==0){sendAdserverRequest()}}
function bidsInR(i){delete techsR[i];
if(Object.keys(techsR).length==0){resend()}}
function addSlot(o){if (o.wm&&o.wm>window.innerWidth){o.wf.i=o.i;
o=o.wf}
o.r=0;
o.a9=function(){return{slotID:o.i,slotName:o.n,sizes:o.s}}
slots.push(o);
if(o.css){let s=document.createElement('style');
s.textContent=o.css;
document.head.append(s)}}
function refresh(o){if (o.r<3 && AdMgr.highBid){o.r++;
slotsR=[o];
setTimeout(resend,3000);
pbjs.requestBids({timeout:2000,
adUnitCodes:[o.n],
bidsBackHandler:function(){try{pbjs.setTargetingForGPTAsync([o.n])}catch(e){}
AdMgr.bidsInR('pb')}});
TADaps.t=+new Date();apstag.fetchBids({slots:[o.a9()],timeout:2000,params:{adRefresh:'1'}},
function(bids){AdMgr.push(function(){TADaps.b=[];
TADaps.e=+new Date();
apstag.setDisplayBids();
AD.s.forEach(function(o){let c=0,z=o.getTargeting('amznbid');
if(z&&z.length>0){c=z[0]}
TADaps.b.push(c)});
AdMgr.bidsInR('aps')})})}}
function slot(i){return slots[i]}
function a9slot(i){return slot(i).a9()}
function gptSlot(i){let o=slot(i),j;
if(o){o.S=googletag.defineSlot(o.n,o.s,o.i);
if(o.t){for(j=0;j<o.t.length;j++){t=o.t[j];
o.S.setTargeting(t[0],t[1])}}
o.S.addService(googletag.pubads());
AD.s.push(o.S);
if (o.ro){let e=document.getElementById(o.i);
if(e){addEventListener("impressionViewableRotate",function(){refresh(o)}, true)}}}}
function dispSlot(i){let o=slot(i);
push(function(){googletag.display(o.i)})}
push(function(){googletag.pubads().disableInitialLoad();
googletag.pubads().addEventListener('slotRenderEnded',rendered)});
return {addSlot:addSlot,
slot:slot,
a9slot:a9slot,
gptSlot:gptSlot,
dispSlot:dispSlot,
bidsIn:bidsIn,
bidsInR:bidsInR,
push:push,
setTargeting:setTargeting,
send:send,
set:set,
get:get,
rendered:rendered}})();
AdMgr.addSlot({n:'/1004254/tadcom_970',s:[[970,90],[728,90]],i:'div-gpt-com-970x90-head',t:[['pf','008']],wm:1440,wf:{n:'/1004254/com728',s:[[728,90]],i:'div-gpt-com-728x90-head'}});AdMgr.addSlot({n:'/1004254/com_160',s:[[160,600],[120,600]],i:'div-gpt-com-160x600',t:[['pf','005']],ro:1});
var pbjs=pbjs||{};pbjs.que=pbjs.que||[];
pbjs.bidderSettings={standard:{storageAllowed:true}};
!function(a9,a,p){if(a[a9])return;function q(c,r){a[a9]._Q.push([c,r])}a[a9]={init:function(){q("i",arguments)},fetchBids:function(){q("f",arguments)},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]}}("apstag",window,document);
function cmpEvent(t,s){if(s){let e=t.eventStatus;
if(e=='useractioncomplete'||e=='tcloaded'){if (!t.purpose.consents[1]){AdMgr.set('p1',1)}
consentDataReady();
/*
if (t.purpose.consents[4]){consentDataReady()} else {sendAdserverRequest()}
*/}}}
function consentDataReady(){consentDataReady=function(){};
pbjs.que.push(function(){if(AdMgr.get('p1')){pbjs.setConfig({'deviceAccess':false})}
pbjs.addAdUnits([{code:AdMgr.slot(0).n,mediaTypes:{banner:{sizes:AdMgr.slot(0).s}},ortb2Imp:{ext:{gpid:'/1004254/tadcom_970#a3259'}},bids:[{bidder:'adyoulike',params:{placement:'9c844fd13a73a77ebcc7df183fe5ad77'}},{bidder:'amx',params:{tagId:'dGltZWFuZGRhdGUuY29t'}},{bidder:'appnexus',params:{placementId:28369066}},{bidder:'criteo',params:{zoneId:1702571}},{bidder:'medianet',params:{cid:'8CU692DPW',crid:'635764783'}},{bidder:'onetag',params:{pubId:'7b5d361d6af8a75'}},{bidder:'openx',params:{delDomain:'timeanddate-d.openx.net',unit:'544099932'}},{bidder:'pubmatic',params:{adSlot:'4851008',publisherId:'157610'}},{bidder:'rubicon',params:{accountId:'16448',siteId:'127484',zoneId:'2677290'}},{bidder:'sharethrough',params:{pkey:'MP4upq7RPYEkCaVYtECVCddt'}},{bidder:'shemedia',params:{accountId:'10278',siteId:'210096',zoneId:'2831480'}},{bidder:'sovrn',params:{tagid:'422101'}},{bidder:'triplelift',params:{inventoryCode:'TimeAndDate_com_728x90'}}]},{code:AdMgr.slot(1).n,mediaTypes:{banner:{sizes:AdMgr.slot(1).s}},ortb2Imp:{ext:{gpid:'/1004254/com_160#a3259'}},bids:[{bidder:'adyoulike',params:{placement:'0263b7545881cbe50ff2c47400d3c44d'}},{bidder:'amx',params:{tagId:'dGltZWFuZGRhdGUuY29t'}},{bidder:'appnexus',params:{placementId:11439179}},{bidder:'criteo',params:{zoneId:1352026}},{bidder:'medianet',params:{cid:'8CU692DPW',crid:'842241810'}},{bidder:'onetag',params:{pubId:'7b5d361d6af8a75'}},{bidder:'openx',params:{delDomain:'timeanddate-d.openx.net',unit:'544099933'}},{bidder:'pubmatic',params:{adSlot:'com_160@160x600',publisherId:'157610'}},{bidder:'rubicon',params:{accountId:'16448',siteId:'127484',zoneId:'601642'}},{bidder:'sharethrough',params:{pkey:'yCxKKh6qttD6r2SMp6ckWWve'}},{bidder:'shemedia',params:{accountId:'10278',siteId:'210096',zoneId:'2831480'}},{bidder:'sovrn',params:{tagid:'422106'}},{bidder:'triplelift',params:{inventoryCode:'TimeAndDate_com_160x600'}}]}]);
pbjs.requestBids({bidsBackHandler:function(){var c=0,a,b,i,h=0,r=pbjs.getBidResponses();
AdMgr.push(function(){pbjs.setTargetingForGPTAsync()});
for(a in r){if(r.hasOwnProperty(a)){b=r[a].bids;
for(i=0;i<b.length;i++){if(b[i].cpm){c++;
h=Math.max(h,b[i].cpm)}}}}
AdMgr.setTargeting("tadbid",""+c);
AdMgr.highBid=h;
AdMgr.bidsIn('pb')}}
)});
TADaps.t=+new Date();apstag.fetchBids({slots:[AdMgr.a9slot(0),AdMgr.a9slot(1)],timeout:1836,params:{adRefresh:'0'}},
function(bids){AdMgr.push(function(){TADaps.e=+new Date();
apstag.setDisplayBids();
AD.s.forEach(function(o){let c=0,z=o.getTargeting('amznbid');
if(z&&z.length>0){c=z[0]}
TADaps.b.push(c)});
AdMgr.bidsIn('aps')})})}
pbjs.que.push(function(){pbjs.setConfig({s2sConfig:{accountId:'1',
bidders:["amx","openx","sovrn","adyoulike","criteo","shemedia"],
adapter:'prebidServer',
enabled:true,
endpoint:{p1Consent:'https://www.timeanddate.com/.pbs/v1/openrtb2/auction',
noP1Consent:'https://www.timeanddate.com/.pbs/v1/openrtb2/auction'},
syncEndpoint:{p1Consent:'https://www.timeanddate.com/.pbs/v1/cookie_sync',
noP1Consent:'https://www.timeanddate.com/.pbs/v1/cookie_sync'},
timeout:1152},
userSync:{userIds:[{name:"quantcastId"},{name:"criteo"},{name:"sharedId",params:{pixelUrl:"/scripts/sharedid.php"},storage:{name:"_sharedID",type:"cookie",expires:30}}],filterSettings:{iframe:{bidders:"*",filter:"include"}}},
floors:{enforcement:{enforceJS:false},data:{schema:{fields:['size']},values:{'970x90':0.08,'160x600':0.05},default:0.07}},
priceGranularity:{buckets:[{min:0,max:4,increment:0.01},{min:4,max:8,increment:0.02},{min:8,max:20,increment:0.05},{min:20,max:30,increment:0.10},{min:30,max:50,increment:0.25},{min:50,max:100,increment:1}]},
enableSendAllBids:true,
bidderTimeout:1536,
pageUrl:"https:\/\/www.timeanddate.com\/"});
pbjs.aliasBidder('rubicon','shemedia');
pbjs.setBidderConfig({"bidders":["rubicon"],"config":{"schain":{"validation":"strict","config":{"ver":"1.0","complete":1,"nodes":[{"asi":"netricsales.com","sid":"16448","hp":1}]}}}});
consentDataReady()});
TADaps={b:[]};apstag.init({pubID:'12d5d789-63e3-47bc-ba31-070e97a96f2c',adServer:'googletag'});
function sendAdserverRequest(){AdMgr.send()}
setTimeout(function(){sendAdserverRequest()},3072);
googletag.cmd.push(function(){AdMgr.gptSlot(0);AdMgr.gptSlot(1);googletag.pubads().setTargeting('ab','b').setTargeting('hr','05').setTargeting('ut','u').setTargeting('art','3259').setTargeting('pf','007').enableSingleRequest()});
window._qevents=window._qevents||[];
window._qevents.push({qacct:"p-8QLn8vj66GL9W",uid:"__INSERT_EMAIL_HERE__"});