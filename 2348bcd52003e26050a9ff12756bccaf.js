/*! For license information please see microsoft.3ae83c6ae1581d9e53b6.js.LICENSE.txt */
(self.webpackChunk_msnews_msnews_experiences=self.webpackChunk_msnews_msnews_experiences||[]).push([["microsoft"],{63165:function(t,e,n){"use strict";n.d(e,{Z:function(){return A}});var i=n(45362),o=n(23806),r=n(80221),s=n(60851),a=n(26454),l=n(254),c=n(74539),u=n(98500),d=n(69509),h=n(39289),p=500;function f(t,e,n){e&&(0,c.kJ)(e)&&e[l.R5]>0&&(e=e.sort((function(t,e){return t[u.yi]-e[u.yi]})),(0,c.tO)(e,(function(t){t[u.yi]<p&&(0,c._y)("Channel has invalid priority - "+t[l.pZ])})),t[l.MW]({queue:(0,c.FL)(e),chain:(0,d.jV)(e,n[l.TC],n)}))}var g=n(85282),v=n(5482),m=n(33220),b=n(26932),y=function(t){function e(){var n,i,a=t.call(this)||this;function d(){n=0,i=[]}return a.identifier="TelemetryInitializerPlugin",a.priority=199,d(),(0,o.Z)(e,a,(function(t,e){t.addTelemetryInitializer=function(t){var e={id:n++,fn:t};return i[l.MW](e),{remove:function(){(0,c.tO)(i,(function(t,n){if(t.id===e.id)return i[l.cb](n,1),-1}))}}},t[u.hL]=function(e,n){for(var o=!1,a=i[l.R5],u=0;u<a;++u){var d=i[u];if(d)try{if(!1===d.fn[l.ZV](null,[e])){o=!0;break}}catch(t){(0,r.kP)(n[l.mc](),1,64,"One of telemetry initializers failed, telemetry item will not be sent: "+(0,c.jj)(t),{exception:(0,s.eU)(t)},!0)}}o||t[l.uL](e,n)},t[l.F3]=function(){d()}})),a}return(0,i.ne)(e,t),e.__ieDyn=1,e}(n(27981).i),x=n(9894),w="Plugins must provide initialize method",$="SDK is still unloading...",C={loggingLevelConsole:1};function k(t,e){return new b.Jk(e)}function S(t,e){var n=!1;return(0,c.tO)(e,(function(e){if(e===t)return n=!0,-1})),n}var T=function(){function t(){var e,n,s,T,L,O,I,A,H,D,F,E,B,R,j,P,_,M,z,N,V=0;(0,o.Z)(t,this,(function(t){function o(){n=!1,e=(0,c.mm)(!0,{},C),t[l.TC]=e,t[l.eZ]=new r.AQ(e),t[l.iC]=[],j=new y,s=[],T=null,L=null,O=null,I=null,A=null,D=null,H=[],F=null,E=null,B=null,R=!1,P=null,_=(0,v.J)("AIBaseCore",!0),M=(0,x.Y)(),N=null}function q(){return(0,d.CD)(G(),e,t)}function U(n){var i=function(t,e,n){var i,o=[],s={};return(0,c.tO)(n,(function(n){((0,c.le)(n)||(0,c.le)(n[l.VL]))&&(0,c._y)(w);var i=n[u.yi],a=n[l.pZ];n&&i&&((0,c.le)(s[i])?s[i]=a:(0,r.jV)(t,"Two extensions have same priority #"+i+" - "+s[i]+", "+a)),(!i||i<e)&&o[l.MW](n)})),(i={all:n})[u.oV]=o,i}(t[l.eZ],p,H);D=i[u.oV],A=null;var o=i.all;if(B=(0,c.FL)(function(t,e,n){var i=[];if(t&&(0,c.tO)(t,(function(t){return f(i,t,n)})),e){var o=[];(0,c.tO)(e,(function(t){t[u.yi]>p&&o[l.MW](t)})),f(i,o,n)}return i}(E,o,t)),F){var s=(0,c.UA)(o,F);-1!==s&&o[l.cb](s,1),-1!==(s=(0,c.UA)(D,F))&&D[l.cb](s,1),F._setQueue(B)}else F=function(t,e){function n(){return(0,d.CD)(null,e[l.TC],e,null)}function i(t,e,n,i){var o=t?t[l.R5]+1:1;function r(){0==--o&&(i&&i(),i=null)}o>0&&(0,c.tO)(t,(function(t){if(t&&t.queue[l.R5]>0){var i=t.chain,s=e[l.zV](i);s[l.Fc](r),n(s)}else o--})),r()}var o=!1,r={identifier:"ChannelControllerPlugin",priority:p,initialize:function(e,n,i,r){o=!0,(0,c.tO)(t,(function(t){t&&t.queue[l.R5]>0&&(0,h.bP)((0,d.CD)(t.chain,e,n),i)}))},isInitialized:function(){return o},processTelemetry:function(e,o){i(t,o||n(),(function(t){t[l.uL](e)}),(function(){o[l.uL](e)}))},update:function(e,n){var o=n||{reason:0};return i(t,e,(function(t){t[l.uL](o)}),(function(){e[l.uL](o)})),!0},pause:function(){i(t,n(),(function(t){t.iterate((function(t){t.pause&&t.pause()}))}),null)},resume:function(){i(t,n(),(function(t){t.iterate((function(t){t.resume&&t.resume()}))}),null)},teardown:function(e,n){var r=n||{reason:0,isAsync:!1};return i(t,e,(function(t){t[l.uL](r)}),(function(){e[l.uL](r),o=!1})),!0},getChannel:function(e){var n=null;return t&&t[l.R5]>0&&(0,c.tO)(t,(function(t){if(t&&t.queue[l.R5]>0&&((0,c.tO)(t.queue,(function(t){if(t[l.pZ]===e)return n=t,-1})),n))return-1})),n},flush:function(e,o,r,s){var a=1,c=!1,u=null;function d(){a--,c&&0===a&&(u&&(clearTimeout(u),u=null),o&&o(c),o=null)}return s=s||5e3,i(t,n(),(function(t){t.iterate((function(t){if(t[l.kL]){a++;var n=!1;t[l.kL](e,(function(){n=!0,d()}),r)||n||(e&&null==u?u=setTimeout((function(){u=null,d()}),s):d())}}))}),(function(){c=!0,d()})),!0},_setQueue:function(e){t=e}};return r}(B,t);o[l.MW](F),D[l.MW](F),t[l.iC]=(0,h.AA)(o),F[l.VL](e,t,o),(0,h.bP)(q(),o),t[l.iC]=(0,c.FL)((0,h.AA)(D||[])).slice(),n&&function(e){var n=(0,d.xy)(G(),t);t._updateHook&&!0===t._updateHook(n,e)||n[l.uL](e)}(n)}function W(e){var n,i=null,o=null;return(0,c.tO)(t[l.iC],(function(t){if(t[l.pZ]===e&&t!==F&&t!==j)return o=t,-1})),!o&&F&&(o=F.getChannel(e)),o&&((n={plugin:o})[l.$h]=function(t){(0,h.OY)(o)[u.mE]=!t},n.isEnabled=function(){var t=(0,h.OY)(o);return!t[l.fi]&&!t[u.mE]},n.remove=function(t,e){var n;void 0===t&&(t=!0);var i=[o],r=((n={reason:1})[l.d]=t,n);Z(i,r,(function(t){t&&U({reason:32,removed:i}),e&&e(t)}))},i=n),i}function G(){if(!A){var n=(D||[]).slice();-1===(0,c.UA)(n,j)&&n[l.MW](j),A=(0,d.jV)((0,h.AA)(n),e,t)}return A}function Z(n,i,o){if(n&&n[l.R5]>0){var r=(0,d.jV)(n,e,t),s=(0,d.Bt)(r,t);s[l.Fc]((function(){var t=!1,e=[];(0,c.tO)(H,(function(i,o){S(i,n)?t=!0:e[l.MW](i)})),H=e;var i=[];E&&((0,c.tO)(E,(function(e,o){var r=[];(0,c.tO)(e,(function(e){S(e,n)?t=!0:r[l.MW](e)})),i[l.MW](r)})),E=i),o&&o(t)})),s[l.uL](i)}else o(!1)}function K(){var n=t[l.eZ]?t[l.eZ].queue:[];n&&((0,c.tO)(n,(function(n){var i,o=((i={})[l.I]=P||"InternalMessageId: "+n[l.Gc],i.iKey=(0,c.v4)(e[l.p$]),i.time=(0,c.Y6)(new Date),i.baseType=r.lQ.dataType,i.baseData={message:n[l.gU]},i);t.track(o)})),n[l.R5]=0)}function Q(t,e,n,i){return F?F[l.kL](t,e,n||6,i):(e&&e(!1),!0)}function X(e){var n=t[l.eZ];n?(0,r.kP)(n,2,73,e):(0,c._y)(e)}o(),t[l.yl]=function(){return n},t[l.VL]=function(o,r,s,a){R&&(0,c._y)($),t[l.yl]()&&(0,c._y)("Core should not be initialized more than once"),e=o||{},t[l.TC]=e,(0,c.le)(o[l.p$])&&(0,c._y)("Please provide instrumentation key"),T=a,t._notificationManager=a,function(){var t=(0,c.v4)(e.disableDbgExt);!0===t&&z&&(T[l.n7](z),z=null);T&&!z&&!0!==t&&(z=(0,m.p)(e),T[l.g](z))}(),function(){var t=(0,c.v4)(e.enablePerfMgr);!t&&O&&(O=null);t&&(0,c.qK)(e,u.DN,k)}(),(0,c.qK)(e,u.Zh,{}).NotificationManager=T,s&&(t[l.eZ]=s);var d=(0,c.qK)(e,u.js,[]);(H=[])[l.MW].apply(H,(0,i.$h)((0,i.$h)([],r,!1),d,!1)),E=(0,c.qK)(e,u.Z,[]),U(null),B&&0!==B[l.R5]||(0,c._y)("No "+u.Z+" available"),n=!0,t.releaseQueue()},t.getTransmissionControls=function(){var t=[];return B&&(0,c.tO)(B,(function(e){t[l.MW](e.queue)})),(0,c.FL)(t)},t.track=function(n){n.iKey=n.iKey||e[l.p$],n[l.Z_]=n[l.Z_]||(0,c.Y6)(new Date),n.ver=n.ver||"4.0",!R&&t[l.yl]()?q()[l.uL](n):s[l.MW](n)},t[l.SD]=q,t[l.tb]=function(){var e;return T||(T=(0,a.pu)(((e={})[l.g]=function(t){},e[l.n7]=function(t){},e[u.uC]=function(t){},e[u.$F]=function(t,e){},e[u.f_]=function(t,e){},e)),t._notificationManager=T),T},t[l.g]=function(t){T&&T[l.g](t)},t[l.n7]=function(t){T&&T[l.n7](t)},t.getCookieMgr=function(){return I||(I=(0,g.Nz)(e,t[l.eZ])),I},t.setCookieMgr=function(t){I=t},t[u.kl]=function(){if(!L&&!O&&(0,c.v4)(e.enablePerfMgr)){var n=(0,c.v4)(e[u.DN]);(0,c.mf)(n)&&(O=n(t,t[l.tb]()))}return L||O||(0,b.j5)()},t.setPerfMgr=function(t){L=t},t.eventCnt=function(){return s[l.R5]},t.releaseQueue=function(){if(n&&s[l.R5]>0){var t=s;s=[],(0,c.tO)(t,(function(t){q()[l.uL](t)}))}},t.pollInternalLogs=function(t){P=t||null;var n=(0,c.v4)(e.diagnosticLogInterval);return n&&n>0||(n=1e4),V&&clearInterval(V),V=setInterval((function(){K()}),n)},t[l.LS]=function(){V&&(clearInterval(V),V=0,K())},(0,c.Vb)(t,(function(){return j}),["addTelemetryInitializer"]),t.unload=function(e,i,r){var s;void 0===e&&(e=!0),n||(0,c._y)("SDK is not initialized"),R&&(0,c._y)($);var a=((s={reason:50})[l.d]=e,s.flushComplete=!1,s),u=(0,d.Bt)(G(),t);function h(e){a.flushComplete=e,R=!0,M.run(u,a),t[l.LS](),u[l.uL](a)}u[l.Fc]((function(){o(),i&&i(a)}),t),Q(e,h,6,r)||h(!1)},t[l.TO]=W,t.addPlugin=function(t,e,n,i){if(!t)return i&&i(!1),void X(w);var o=W(t[l.pZ]);if(o&&!e)return i&&i(!1),void X("Plugin ["+t[l.pZ]+"] is already loaded!");var r={reason:16};function s(e){H[l.MW](t),r.added=[t],U(r),i&&i(!0)}if(o){var a=[o.plugin];Z(a,{reason:2,isAsync:!!n},(function(t){t?(r.removed=a,r.reason|=32,s()):i&&i(!1)}))}else s()},t.evtNamespace=function(){return _},t[l.kL]=Q,t.getTraceCtx=function(t){return N||(N=(0,h.Yn)()),N},t.setTraceCtx=function(t){N=t||null},(0,c.Oi)(t,"addUnloadCb",(function(){return M}),"add")}))}return t.__ieDyn=1,t}(),L=n(18366),O=n(91254),I=function(t){function e(){var n=t.call(this)||this;return(0,o.Z)(e,n,(function(t,e){t.initialize=function(n,i,o,a){n&&!n.endpointUrl&&(n.endpointUrl=L.YT),t.getWParam=function(){return O.x9||n.enableWParam?0:-1};try{e.initialize(n,i,o,a)}catch(e){(0,r.kP)(t.logger,1,514,"Initialization Failed: "+(0,s.eU)(e)+"\n - Note: Channels must be provided through config.channels only")}},t.track=function(t){var n=t;if(n){var i=n.ext=n.ext||{};i.sdk=i.sdk||{},i.sdk.ver=O.vs}e.track(n)}})),n}return(0,i.ne)(e,t),e.__ieDyn=1,e}(T),A=I},65004:function(t,e,n){"use strict";n.d(e,{zU:function(){return l}});var i,o=n(45362),r=n(71178),s=n(74539),a=((0,r.By)({CRITICAL:1,WARNING:2}),(0,r.By)(((i={}).BrowserDoesNotSupportLocalStorage=0,i.BrowserCannotReadLocalStorage=1,i.BrowserCannotReadSessionStorage=2,i.BrowserCannotWriteLocalStorage=3,i.BrowserCannotWriteSessionStorage=4,i.BrowserFailedRemovalFromLocalStorage=5,i.BrowserFailedRemovalFromSessionStorage=6,i.CannotSendEmptyTelemetry=7,i.ClientPerformanceMathError=8,i.ErrorParsingAISessionCookie=9,i.ErrorPVCalc=10,i.ExceptionWhileLoggingError=11,i.FailedAddingTelemetryToBuffer=12,i.FailedMonitorAjaxAbort=13,i.FailedMonitorAjaxDur=14,i.FailedMonitorAjaxOpen=15,i.FailedMonitorAjaxRSC=16,i.FailedMonitorAjaxSend=17,i.FailedMonitorAjaxGetCorrelationHeader=18,i.FailedToAddHandlerForOnBeforeUnload=19,i.FailedToSendQueuedTelemetry=20,i.FailedToReportDataLoss=21,i.FlushFailed=22,i.MessageLimitPerPVExceeded=23,i.MissingRequiredFieldSpecification=24,i.NavigationTimingNotSupported=25,i.OnError=26,i.SessionRenewalDateIsZero=27,i.SenderNotInitialized=28,i.StartTrackEventFailed=29,i.StopTrackEventFailed=30,i.StartTrackFailed=31,i.StopTrackFailed=32,i.TelemetrySampledAndNotSent=33,i.TrackEventFailed=34,i.TrackExceptionFailed=35,i.TrackMetricFailed=36,i.TrackPVFailed=37,i.TrackPVFailedCalc=38,i.TrackTraceFailed=39,i.TransmissionFailed=40,i.FailedToSetStorageBuffer=41,i.FailedToRestoreStorageBuffer=42,i.InvalidBackendResponse=43,i.FailedToFixDepricatedValues=44,i.InvalidDurationValue=45,i.TelemetryEnvelopeInvalid=46,i.CreateEnvelopeError=47,i.CannotSerializeObject=48,i.CannotSerializeObjectNonSerializable=49,i.CircularReferenceDetected=50,i.ClearAuthContextFailed=51,i.ExceptionTruncated=52,i.IllegalCharsInName=53,i.ItemNotInArray=54,i.MaxAjaxPerPVExceeded=55,i.MessageTruncated=56,i.NameTooLong=57,i.SampleRateOutOfRange=58,i.SetAuthContextFailed=59,i.SetAuthContextFailedAccountName=60,i.StringValueTooLong=61,i.StartCalledMoreThanOnce=62,i.StopCalledWithoutStart=63,i.TelemetryInitializerFailed=64,i.TrackArgumentsNotSpecified=65,i.UrlTooLong=66,i.SessionStorageBufferFull=67,i.CannotAccessCookie=68,i.IdTooLong=69,i.InvalidEvent=70,i.FailedMonitorAjaxSetRequestHeader=71,i.SendBrowserInfoOnUserInit=72,i.PluginException=73,i.NotificationException=74,i.SnippetScriptLoadFailure=99,i.InvalidInstrumentationKey=100,i.CannotParseAiBlobValue=101,i.InvalidContentBlob=102,i.TrackPageActionEventFailed=103,i.FailedAddingCustomDefinedRequestContext=104,i.InMemoryStorageBufferFull=105,i.InstrumentationKeyDeprecation=106,i))),l=((0,r.By)({NotSet:0,Pii_DistinguishedName:1,Pii_GenericData:2,Pii_IPV4Address:3,Pii_IPv6Address:4,Pii_MailSubject:5,Pii_PhoneNumber:6,Pii_QueryString:7,Pii_SipAddress:8,Pii_SmtpAddress:9,Pii_Identity:10,Pii_Uri:11,Pii_Fqdn:12,Pii_IPV4AddressLegacy:13,CustomerContent_GenericContent:32}),(0,r.By)({Normal:1,CostDeferred:2,RealTime:3,Immediate:4}));(0,r.By)({Unspecified:0,String:1,Int32:2,UInt32:3,Int64:4,UInt64:5,Double:6,Bool:7,Guid:8,DateTime:9}),(0,r.By)({Normal:1,Critical:2}),(0,r.By)({NONE:0,ERROR:1,WARNING:2,INFORMATION:3}),(0,s.FL)((0,o.uc)((0,o.uc)({},a),(0,r.By)({AuthHandShakeError:501,AuthRedirectFail:502,BrowserCannotReadLocalStorage:503,BrowserCannotWriteLocalStorage:504,BrowserDoesNotSupportLocalStorage:505,CannotParseBiBlobValue:506,CannotParseDataAttribute:507,CVPluginNotAvailable:508,DroppedEvent:509,ErrorParsingAISessionCookie:510,ErrorProvidedChannels:511,FailedToGetCookies:512,FailedToInitializeCorrelationVector:513,FailedToInitializeSDK:514,InvalidContentBlob:515,InvalidCorrelationValue:516,SessionRenewalDateIsZero:517,SendPostOnCompleteFailure:518,PostResponseHandler:519,SDKNotInitialized:520})))},18366:function(t,e,n){"use strict";n.d(e,{YT:function(){return o},qS:function(){return i}});var i="",o="https://browser.events.data.microsoft.com/OneCollector/1.0/"},91254:function(t,e,n){"use strict";n.d(e,{Do:function(){return w},Sn:function(){return m},Vv:function(){return x},cm:function(){return $},hK:function(){return k},if:function(){return L},jM:function(){return b},l7:function(){return C},mJ:function(){return I},ot:function(){return A},vs:function(){return p},x9:function(){return v},yj:function(){return y}});var i,o=n(60851),r=n(74539),s=n(85282),a=n(39860),l=n(21908),c=n(10607),u=n(42774),d=n(26454),h=n(18366),p="1DS-Web-JS-3.2.8",f="withCredentials",g=((i={})[0]=0,i[2]=6,i[1]=1,i[3]=7,i[4098]=6,i[4097]=1,i[4099]=7,i),v=Boolean((0,o.Me)());Boolean((0,o.Jj)());function m(t){return!(t===h.qS||(0,r.le)(t))}function b(t){if(t){var e=t.indexOf("-");if(e>-1)return t.substring(0,e)}return h.qS}function y(t,e,n){if(!e&&!m(e)||"string"!=typeof t)return null;var i=typeof e;if("string"===i||"number"===i||"boolean"===i||(0,r.kJ)(e))e={value:e};else if("object"!==i||l.CY.call(e,"value")){if((0,r.le)(e.value)||e.value===h.qS||!(0,r.HD)(e.value)&&!(0,r.hj)(e.value)&&!(0,r.jn)(e.value)&&!(0,r.kJ)(e.value))return null}else e={value:n?JSON.stringify(e):e};if((0,r.kJ)(e.value)&&!T(e.value))return null;if(!(0,r.le)(e.kind)){if((0,r.kJ)(e.value)||!S(e.kind))return null;e.value=e.value.toString()}return e}function x(t,e,n){var i=-1;if(!(0,r.o8)(t))if(e>0&&(32===e?i=8192:e<=13&&(i=e<<5)),function(t){if(t>=0&&t<=9)return!0;return!1}(n))-1===i&&(i=0),i|=n;else{var o=g[O(t)]||-1;-1!==i&&-1!==o?i|=o:6===o&&(i=o)}return i}function w(t,e,n){var i;return void 0===n&&(n=!0),t&&(i=t.get(e),n&&i&&decodeURIComponent&&(i=decodeURIComponent(i))),i||h.qS}function $(t){void 0===t&&(t="D");var e=(0,a.GW)();return"B"===t?e="{"+e+"}":"P"===t?e="("+e+")":"N"===t&&(e=e.replace(/-/g,h.qS)),e}function C(t,e,n,i,o){var s={},a=!1,c=0,u=arguments.length,d=Object[l.hB],h=arguments;for("[object Boolean]"===d.toString.call(h[0])&&(a=h[0],c++);c<u;c++){t=h[c];(0,r.rW)(t,(function(t,e){a&&e&&(0,r.Kn)(e)?(0,r.kJ)(e)?(s[t]=s[t]||[],(0,r.tO)(e,(function(e,n){e&&(0,r.Kn)(e)?s[t][n]=C(!0,s[t][n],e):s[t][n]=e}))):s[t]=C(!0,s[t],e):s[t]=e}))}return s}var k=a.Jj;function S(t){return 0===t||t>0&&t<=13||32===t}function T(t){return t.length>0}function L(t,e){var n=t;n.timings=n.timings||{},n.timings.processTelemetryStart=n.timings.processTelemetryStart||{},n.timings.processTelemetryStart[e]=k()}function O(t){var e=0;if(null!=t){var n=typeof t;"string"===n?e=1:"number"===n?e=2:"boolean"===n?e=3:n===l.fK&&(e=4,(0,r.kJ)(t)?(e=4096,t.length>0&&(e|=O(t[0]))):l.CY.call(t,"value")&&(e=8192|O(t.value)))}return e}l.jA,l.fK,l.jA,r.tO,r.UA,r.Mr,r.Xz,r.FY,r.Y6,o.b$,r.HD,r.hj,r.jn,r.mf,r.kJ,r.Kn,r.nd,o.MF,r.Y6,o.cp,s.p7,s.UY,r.l_,c.c9,c.Ib,r.Id,r.rW,r.Ym,r.o8,r.le,r.nr,r.mf,r.Kn,r.J_,r.kJ,r.VZ,r.HD,r.hj,r.jn,r.Y6,r.tO,r.UA,r.Mr,r.Xz,r.nd,d.pu,r.FY,r.l_,c.Ib,r.m6,o.w1,a.GW,a.Jj,u.pZ,u.az,u._l,u.CN,u.F6,a.DO;function I(){return!!(0,o.a8)("chrome")}function A(t,e,n,i,o,r){function s(t,e,n){try{t[e]=n}catch(t){}}void 0===i&&(i=!1),void 0===o&&(o=!1);var a=new XMLHttpRequest;return i&&s(a,"Microsoft_ApplicationInsights_BypassAjaxInstrumentation",i),n&&s(a,f,n),a.open(t,e,!o),n&&s(a,f,n),!o&&r&&s(a,"timeout",r),a}},71178:function(t,e,n){"use strict";n.d(e,{By:function(){return o}});var i=n(74539);function o(t){var e={};return(0,i.rW)(t,(function(t,n){e[t]=n,e[n]=t})),(0,i._A)(e)}},27981:function(t,e,n){"use strict";n.d(e,{i:function(){return c}});var i=n(23806),o=n(254),r=n(74539),s=n(98500),a=n(69509),l=n(9894),c=function(){function t(){var e,n,c,u,d,h=this;function p(t){void 0===t&&(t=null);var e=t;if(!e){var i=n||(0,a.CD)(null,{},h[s.oV]);e=c&&c.getPlugin?i[o.zV](null,c.getPlugin):i[o.zV](null,c)}return e}function f(t,e,i){t&&(0,r.sO)(t,s.Zh,[],null,r.le),!i&&e&&(i=e[o.SD]()[o.W2]());var l=c;c&&c.getPlugin&&(l=c.getPlugin()),h[s.oV]=e,n=(0,a.CD)(i,t,e,l)}function g(){e=!1,h[s.oV]=null,n=null,c=null,d=[],u=(0,l.Y)()}g(),(0,i.Z)(t,h,(function(t){t[o.VL]=function(t,n,i,o){f(t,n,o),e=!0},t[o.fi]=function(e,n){var i,l=t[s.oV];if(l&&(!e||l===e[s.oV]())){var h,p=!1,f=e||(0,a.Bt)(null,l,c&&c.getPlugin?c.getPlugin():c),v=n||((i={reason:0})[o.d]=!1,i);return t[o.F3]&&!0===t[o.F3](f,v,m)?h=!0:m(),h}function m(){if(!p){p=!0,u.run(f,n);var t=d;d=[],(0,r.tO)(t,(function(t){t.rm()})),!0===h&&f[o.uL](v),g()}}},t[o.Tu]=function(e,n){var i=t[s.oV];if(i&&(!e||i===e[s.oV]())){var r,l=!1,u=e||(0,a.xy)(null,i,c&&c.getPlugin?c.getPlugin():c),d=n||{reason:0};return t._doUpdate&&!0===t._doUpdate(u,d,h)?r=!0:h(),r}function h(){l||(l=!0,f(u.getCfg(),u.core(),u[o.W2]()))}},t._addHook=function(t){t&&((0,r.kJ)(t)?d=d.concat(t):d[o.MW](t))},(0,r.Oi)(t,"_addUnloadCb",(function(){return u}),"add")})),h[o.mc]=function(t){return p(t)[o.mc]()},h[o.yl]=function(){return e},h.setInitialized=function(t){e=t},h[o.Jd]=function(t){c=t},h[o.uL]=function(t,e){e?e[o.uL](t):c&&(0,r.mf)(c[s.hL])&&c[s.hL](t,null)},h._getTelCtx=p}return t.__ieDyn=1,t}()},85282:function(t,e,n){"use strict";n.d(e,{JP:function(){return x},Nz:function(){return w},UY:function(){return O},kj:function(){return m},p7:function(){return $}});var i=n(254),o=n(80221),r=n(60851),s=n(74539),a=n(98500),l="toGMTString",c="toUTCString",u="expires",d=null,h=null,p=null,f=(0,r.Me)(),g={},v={};function m(t,e){var n=w._ckMgr||v._ckMgr;return n||(n=w._ckMgr=w(t,e),v._ckMgr=n),n}function b(t){return!t||t.isEnabled()}function y(t,e){return!!(e&&t&&(0,s.kJ)(t.ignoreCookies))&&-1!==t.ignoreCookies[i.ou](e)}function x(t,e){var n;if(t)n=t.getCookieMgr();else if(e){var o=e[i.Lk];n=o._ckMgr?o._ckMgr:w(e)}return n||(n=m(e,(t||{})[i.eZ])),n}function w(t,e){var n,o=function(t){var e=t[i.Lk]=t[i.Lk]||{};if((0,s.sO)(e,"domain",t.cookieDomain,s.BX,s.le),(0,s.sO)(e,"path",t.cookiePath||"/",null,s.le),(0,s.le)(e.enabled)){var n=void 0;(0,s.o8)(t.isCookieUseDisabled)||(n=!t.isCookieUseDisabled),(0,s.o8)(t.disableCookiesUsage)||(n=!t.disableCookiesUsage),e.enabled=n}return e}(t||v),d=o.path||"/",p=o.domain,f=!1!==o.enabled,g=((n={isEnabled:function(){var t=f&&$(e),n=v._ckMgr;return t&&n&&g!==n&&(t=b(n)),t}})[i.$h]=function(t){f=!1!==t},n.set=function(t,e,n,f,v){var m=!1;if(b(g)&&!function(t,e){return!!(e&&t&&(0,s.kJ)(t.blockedCookies)&&-1!==t.blockedCookies[i.ou](e))||y(t,e)}(o,t)){var x={},w=(0,s.nd)(e||a.qS),$=w[i.ou](";");if(-1!==$&&(w=(0,s.nd)(e[i.zc](0,$)),x=C(e[i.zc]($+1))),(0,s.sO)(x,"domain",f||p,s.fQ,s.o8),!(0,s.le)(n)){var T=(0,r.w1)();if((0,s.o8)(x.expires)){var I=(0,s.m6)()+1e3*n;if(I>0){var A=new Date;A.setTime(I),(0,s.sO)(x,u,k(A,T?l:c)||k(A,T?l:c)||a.qS,s.fQ)}}T||(0,s.sO)(x,"max-age",a.qS+n,null,s.o8)}var H=(0,r.k$)();H&&"https:"===H.protocol&&((0,s.sO)(x,"secure",null,null,s.o8),null===h&&(h=!O(((0,r.jW)()||{})[i.qV])),h&&(0,s.sO)(x,"SameSite","None",null,s.o8)),(0,s.sO)(x,"path",v||d,null,s.o8),(o.setCookie||L)(t,S(w,x)),m=!0}return m},n.get=function(t){var e=a.qS;return b(g)&&!y(o,t)&&(e=(o.getCookie||T)(t)),e},n.del=function(t,e){var n=!1;return b(g)&&(n=g.purge(t,e)),n},n.purge=function(t,n){var i,s=!1;if($(e)){var l=((i={}).path=n||"/",i.expires="Thu, 01 Jan 1970 00:00:01 GMT",i);(0,r.w1)()||(l["max-age"]="0"),(o.delCookie||L)(t,S(a.qS,l)),s=!0}return s},n);return g._ckMgr=g,g}function $(t){if(null===d){d=!1;try{d=void 0!==(f||{}).cookie}catch(e){(0,o.kP)(t,2,68,"Cannot access document.cookie - "+(0,s.jj)(e),{exception:(0,r.eU)(e)})}}return d}function C(t){var e={};if(t&&t[i.R5]){var n=(0,s.nd)(t)[i.w6](";");(0,s.tO)(n,(function(t){if(t=(0,s.nd)(t||a.qS)){var n=t[i.ou]("=");-1===n?e[t]=null:e[(0,s.nd)(t[i.zc](0,n))]=(0,s.nd)(t[i.zc](n+1))}}))}return e}function k(t,e){return(0,s.mf)(t[e])?t[e]():null}function S(t,e){var n=t||a.qS;return(0,s.rW)(e,(function(t,e){n+="; "+t+((0,s.le)(e)?a.qS:"="+e)})),n}function T(t){var e=a.qS;if(f){var n=f.cookie||a.qS;p!==n&&(g=C(n),p=n),e=(0,s.nd)(g[t]||a.qS)}return e}function L(t,e){f&&(f.cookie=t+"="+e)}function O(t){return!!(0,s.HD)(t)&&(!(!(0,s._Q)(t,"CPU iPhone OS 12")&&!(0,s._Q)(t,"iPad; CPU OS 12"))||(!!((0,s._Q)(t,"Macintosh; Intel Mac OS X 10_14")&&(0,s._Q)(t,"Version/")&&(0,s._Q)(t,"Safari"))||(!(!(0,s._Q)(t,"Macintosh; Intel Mac OS X 10_14")||!(0,s.Id)(t,"AppleWebKit/605.1.15 (KHTML, like Gecko)"))||(!(!(0,s._Q)(t,"Chrome/5")&&!(0,s._Q)(t,"Chrome/6"))||(!(!(0,s._Q)(t,"UnrealEngine")||(0,s._Q)(t,"Chrome"))||!(!(0,s._Q)(t,"UCBrowser/12")&&!(0,s._Q)(t,"UCBrowser/11")))))))}},39860:function(t,e,n){"use strict";n.d(e,{DO:function(){return g},GW:function(){return p},Jj:function(){return f}});var i,o=n(26454),r=n(254),s=n(85282),a=n(60851),l=n(10607),c=n(74539),u=n(98500),d=n(42774),h=null;function p(){var t=g();return t[r.zc](0,8)+"-"+t[r.zc](8,12)+"-"+t[r.zc](12,16)+"-"+t[r.zc](16,20)+"-"+t[r.zc](20)}function f(){var t=(0,a.r)();return t&&t.now?t.now():(0,c.m6)()}function g(){for(var t,e=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],n=u.qS,i=0;i<4;i++)n+=e[15&(t=(0,d._l)())]+e[t>>4&15]+e[t>>8&15]+e[t>>12&15]+e[t>>16&15]+e[t>>20&15]+e[t>>24&15]+e[t>>28&15];var o=e[8+(3&(0,d._l)())|0];return n[r.Jn](0,8)+n[r.Jn](9,4)+"4"+n[r.Jn](13,3)+o+n[r.Jn](16,3)+n[r.Jn](19,12)}var v={_canUseCookies:void 0,isTypeof:c.Ym,isUndefined:c.o8,isNullOrUndefined:c.le,hasOwnProperty:c.nr,isFunction:c.mf,isObject:c.Kn,isDate:c.J_,isArray:c.kJ,isError:c.VZ,isString:c.HD,isNumber:c.hj,isBoolean:c.jn,toISOString:c.Y6,arrForEach:c.tO,arrIndexOf:c.UA,arrMap:c.Mr,arrReduce:c.Xz,strTrim:c.nd,objCreate:o.pu,objKeys:c.FY,objDefineAccessors:c.l_,addEventHandler:l.Ib,dateNow:c.m6,isIE:a.w1,disableCookies:function(){m()[r.$h](!1)},newGuid:p,perfNow:f,newId:d.pZ,randomValue:d.az,random32:d._l,mwcRandomSeed:d.CN,mwcRandom32:d.F6,generateW3CId:g};l.pZ,l.pZ,l.pD,l.pD;function m(t,e){var n=(0,s.kj)(t,e),o=v._canUseCookies;return null===h&&(h=[],i=o,(0,c.l_)(v,"_canUseCookies",(function(){return i}),(function(t){i=t,(0,c.tO)(h,(function(e){e[r.$h](t)}))}))),-1===(0,c.UA)(h,n)&&h[r.MW](n),(0,c.jn)(o)&&n[r.$h](o),(0,c.jn)(i)&&n[r.$h](i),n}},5482:function(t,e,n){"use strict";n.d(e,{J:function(){return f},K:function(){return g}});var i=n(21908),o=n(254),r=n(74539),s=n(98500),a=n(42774),l=i.RJ,c="2.8.9",u="."+(0,a.pZ)(6),d=0;function h(t){return 1===t[o.xv]||9===t[o.xv]||!+t[o.xv]}function p(t,e){var n=e[t.id];if(!n){n={};try{h(e)&&(function(t,e,n){if(l)try{return l(t,e,{value:n,enumerable:!1,configurable:!0}),!0}catch(t){}return!1}(e,t.id,n)||(e[t.id]=n))}catch(t){}}return n}function f(t,e){return void 0===e&&(e=!1),(0,r.Gf)(t+d+++(e?".2.8.9":s.qS)+u)}function g(t){var e={id:f("_aiData-"+(t||s.qS)+"."+c),accept:function(t){return h(t)},get:function(t,n,i,o){var s=t[e.id];return s?s[(0,r.Gf)(n)]:(o&&((s=p(e,t))[(0,r.Gf)(n)]=i),i)},kill:function(t,e){if(t&&t[e])try{delete t[e]}catch(t){}}};return e}},33220:function(t,e,n){"use strict";n.d(e,{j:function(){return c},p:function(){return u}});var i,o=n(254),r=n(60851),s=["eventsSent","eventsDiscarded","eventsSendRequest","perfEvent"],a=null;function l(t,e){return function(){var n=arguments,i=c(e);if(i){var r=i.listener;r&&r[t]&&r[t][o.ZV](r,n)}}}function c(t){var e,n=a;return n||!0===t.disableDbgExt||(n=a||((e=(0,r.a8)("Microsoft"))&&(a=e.ApplicationInsights),a)),n?n.ChromeDbgExt:null}function u(t){if(!i){i={};for(var e=0;e<s[o.R5];e++)i[s[e]]=l(s[e],t)}return i}},80221:function(t,e,n){"use strict";n.d(e,{AQ:function(){return p},jV:function(){return v},kP:function(){return g},lQ:function(){return d},vH:function(){return h}});var i=n(23806),o=n(254),r=n(33220),s=n(60851),a=n(74539),l=n(98500);function c(t){return t?'"'+t[o.i7](/\"/g,l.qS)+'"':l.qS}function u(t,e){var n=(0,s.dr)();if(n){var i="log";n[t]&&(i=t),(0,a.mf)(n[i])&&n[i](e)}}var d=function(){function t(t,e,n,i){void 0===n&&(n=!1);var r=this;r[o.Gc]=t,r[o.gU]=(n?"AI: ":"AI (Internal): ")+t;var a=l.qS;(0,s.nS)()&&(a=(0,s.xA)().stringify(i));var u=(e?" message:"+c(e):l.qS)+(i?" props:"+c(a):l.qS);r[o.gU]+=u}return t.dataType="MessageData",t}();function h(t,e){return(t||{})[o.eZ]||new p(e)}var p=function(){function t(e){this.identifier="DiagnosticLogger",this.queue=[];var n,c,h,p,f=0,g={};(0,i.Z)(t,this,(function(t){function i(e,n){if(!(f>=h)){var i=!0,r="AITR_"+n[o.Gc];if(g[r]?i=!1:g[r]=!0,i&&(e<=c&&(t.queue[o.MW](n),f++,v(1===e?"error":"warn",n)),f===h)){var s="Internal events throttle limit per PageView reached for this app.",a=new d(23,s,!1);t.queue[o.MW](a),1===e?t[l.ys](s):t[l.cL](s)}}}function v(t,n){var i=(0,r.j)(e||{});i&&i[o.mc]&&i[o.mc](t,n)}!function(t){n=(0,a.v4)(t.loggingLevelConsole,0),c=(0,a.v4)(t.loggingLevelTelemetry,1),h=(0,a.v4)(t.maxMessageLimit,25),p=(0,a.v4)(t[o.Fr],!1)}(e||{}),t.consoleLoggingLevel=function(){return n},t.telemetryLoggingLevel=function(){return c},t.maxInternalMessageLimit=function(){return h},t[o.Fr]=function(){return p},t.throwInternal=function(e,r,c,u,h){void 0===h&&(h=!1);var f=new d(r,c,h,u);if(p)throw(0,s.eU)(f);var m=1===e?l.ys:l.cL;if((0,a.o8)(f[o.gU]))v("throw"+(1===e?"Critical":"Warning"),f);else{if(h){var b=+f[o.Gc];!g[b]&&n>=e&&(t[m](f[o.gU]),g[b]=!0)}else n>=e&&t[m](f[o.gU]);i(e,f)}},t[l.cL]=function(t){u("warn",t),v("warning",t)},t[l.ys]=function(t){u("error",t),v("error",t)},t.resetInternalMessageCount=function(){f=0,g={}},t[o.jk]=i}))}return t.__ieDyn=1,t}();function f(t){return t||new p}function g(t,e,n,i,o,r){void 0===r&&(r=!1),f(t).throwInternal(e,n,i,o,r)}function v(t,e){f(t)[l.cL](e)}},60851:function(t,e,n){"use strict";n.d(e,{JO:function(){return j},Jj:function(){return w},MF:function(){return R},MX:function(){return H},Me:function(){return C},Nv:function(){return $},Z3:function(){return _},a8:function(){return y},b$:function(){return F},cp:function(){return P},dr:function(){return L},eU:function(){return B},gz:function(){return D},jW:function(){return S},k$:function(){return T},nS:function(){return I},r:function(){return O},w1:function(){return E},xA:function(){return A}});var i=n(21908),o=n(26454),r=n(254),s=n(74539),a=n(98500),l="window",c="JSON",u="msie",d="trident/",h="XMLHttpRequest",p=null,f=null,g=!1,v=null,m=null;function b(t,e){var n=!1;if(t){try{if(!(n=e in t)){var o=t[i.hB];o&&(n=e in o)}}catch(t){}if(!n)try{var r=new t;n=!(0,s.o8)(r[e])}catch(t){}}return n}function y(t){var e=(0,o.Rd)();return e&&e[t]?e[t]:t===l&&x()?window:null}function x(){return Boolean(typeof window===i.fK&&window)}function w(){return x()?window:y(l)}function $(){return Boolean(typeof document===i.fK&&document)}function C(){return $()?document:y("document")}function k(){return Boolean(typeof navigator===i.fK&&navigator)}function S(){return k()?navigator:y("navigator")}function T(t){if(t&&g){var e=y("__mockLocation");if(e)return e}return typeof location===i.fK&&location?location:y("location")}function L(){return typeof console!==i.jA?console:y("console")}function O(){return y("performance")}function I(){return Boolean(typeof JSON===i.fK&&JSON||null!==y(c))}function A(){return I()?JSON||y(c):null}function H(){return y("crypto")}function D(){return y("msCrypto")}function F(){var t=S();return!(!t||!t.product)&&"ReactNative"===t.product}function E(){var t=S();if(t&&(t[r.qV]!==f||null===p)){var e=((f=t[r.qV])||a.qS)[r.T1]();p=(0,s._Q)(e,u)||(0,s._Q)(e,d)}return p}function B(t){var e=Object[i.hB].toString[r._S](t),n=a.qS;return"[object Error]"===e?n="{ stack: '"+t.stack+"', message: '"+t.message+"', name: '"+t[r.I]+"'":I()&&(n=A().stringify(t)),e+n}function R(){return null===m&&(m=k()&&Boolean(S().sendBeacon)),m}function j(t){var e=!1;try{e=!!y("fetch");var n=y("Request");e&&t&&n&&(e=b(n,"keepalive"))}catch(t){}return e}function P(){return null===v&&(v=typeof XDomainRequest!==i.jA)&&_()&&(v=v&&!b(y(h),"withCredentials")),v}function _(){var t=!1;try{t=!!y(h)}catch(t){}return t}},10607:function(t,e,n){"use strict";n.d(e,{C9:function(){return j},Ib:function(){return H},JA:function(){return B},TJ:function(){return R},Yl:function(){return _},c9:function(){return E},jU:function(){return T},nD:function(){return P},pD:function(){return A},pZ:function(){return I}});var i=n(254),o=n(5482),r=n(60851),s=n(74539),a=n(98500),l="events",c="visibilitychange",u="pagehide",d="pageshow",h="unload",p="beforeunload",f=(0,o.J)("aiEvtPageHide"),g=(0,o.J)("aiEvtPageShow"),v=/\.[\.]+/g,m=/[\.]+$/,b=1,y=(0,o.K)("events"),x=/^([^.]*)(?:\.(.+)|)/;function w(t){return t&&t[i.i7]?t[i.i7](/^[\s\.]+|(?=[\s\.])[\.\s]+$/g,a.qS):t}function $(t,e){var n;if(e){var o=a.qS;(0,s.kJ)(e)?(o=a.qS,(0,s.tO)(e,(function(t){(t=w(t))&&("."!==t[0]&&(t="."+t),o+=t)}))):o=w(e),o&&("."!==o[0]&&(o="."+o),t=(t||a.qS)+o)}var r=x.exec(t||a.qS)||[];return(n={})[i.P6]=r[1],n.ns=(r[2]||a.qS).replace(v,".").replace(m,a.qS)[i.w6](".").sort().join("."),n}function C(t,e,n){void 0===n&&(n=!0);var i=y.get(t,l,{},n),o=i[e];return o||(o=i[e]=[]),o}function k(t,e,n,o){t&&e&&e[i.P6]&&(t.removeEventListener?t.removeEventListener(e[i.P6],n,o):t.detachEvent&&t.detachEvent("on"+e[i.P6],n))}function S(t,e,n,o){for(var r=e[i.R5];r--;){var s=e[r];s&&(n.ns&&n.ns!==s.evtName.ns||o&&!o(s)||(k(t,s.evtName,s[i.Kn],s.capture),e[i.cb](r,1)))}}function T(t,e){return e?$("xx",(0,s.kJ)(e)?[t].concat(e):[t,e]).ns[i.w6]("."):t}function L(t,e,n,o,r){var s;void 0===r&&(r=!1);var a=!1;if(t)try{var l=$(e,o);if(a=function(t,e,n,o){var r=!1;return t&&e&&e[i.P6]&&n&&(t.addEventListener?(t.addEventListener(e[i.P6],n,o),r=!0):t.attachEvent&&(t.attachEvent("on"+e[i.P6],n),r=!0)),r}(t,l,n,r),a&&y.accept(t)){var c=((s={guid:b++,evtName:l})[i.Kn]=n,s.capture=r,s);C(t,l.type)[i.MW](c)}}catch(t){}return a}function O(t,e,n,o,r){if(void 0===r&&(r=!1),t)try{var a=$(e,o),c=!1;!function(t,e,n){if(e[i.P6])S(t,C(t,e[i.P6]),e,n);else{var o=y.get(t,l,{});(0,s.rW)(o,(function(i,o){S(t,o,e,n)})),0===(0,s.FY)(o)[i.R5]&&y.kill(t,l)}}(t,a,(function(t){return!((!a.ns||n)&&t[i.Kn]!==n)&&(c=!0,!0)})),c||k(t,a,n,r)}catch(t){}}function I(t,e,n,i){return void 0===i&&(i=!1),L(t,e,n,null,i)}function A(t,e,n,i){void 0===i&&(i=!1),O(t,e,n,null,i)}function H(t,e,n){var i=!1,o=(0,r.Jj)();o&&(i=L(o,t,e,n),i=L(o.body,t,e,n)||i);var s=(0,r.Me)();return s&&(i=L(s,t,e,n)||i),i}function D(t,e,n,o){var r=!1;return e&&t&&t[i.R5]>0&&(0,s.tO)(t,(function(t){t&&(n&&-1!==(0,s.UA)(n,t)||(r=H(t,e,o)||r))})),r}function F(t,e,n){t&&(0,s.kJ)(t)&&(0,s.tO)(t,(function(t){t&&function(t,e,n){var i=(0,r.Jj)();i&&(O(i,t,e,n),O(i.body,t,e,n));var o=(0,r.Me)();o&&O(o,t,e,n)}(t,e,n)}))}function E(t,e,n){return function(t,e,n,o){var r=!1;return e&&t&&(0,s.kJ)(t)&&!(r=D(t,e,n,o))&&n&&n[i.R5]>0&&(r=D(t,e,null,o)),r}([p,h,u],t,e,n)}function B(t,e){F([p,h,u],t,e)}function R(t,e,n){var i=T(f,n),o=D([u],t,e,i);return e&&-1!==(0,s.UA)(e,c)||(o=D([c],(function(e){var n=(0,r.Me)();t&&n&&"hidden"===n.visibilityState&&t(e)}),e,i)||o),!o&&e&&(o=R(t,null,n)),o}function j(t,e){var n=T(f,e);F([u],t,n),F([c],null,n)}function P(t,e,n){var i=T(g,n),o=D([d],t,e,i);return!(o=D([c],(function(e){var n=(0,r.Me)();t&&n&&"visible"===n.visibilityState&&t(e)}),e,i)||o)&&e&&(o=P(t,null,n)),o}function _(t,e){var n=T(g,e);F([d],t,n),F([c],null,n)}},74539:function(t,e,n){"use strict";n.d(e,{Ax:function(){return ht},BX:function(){return L},FL:function(){return et},FY:function(){return X},Gf:function(){return H},HD:function(){return _},Id:function(){return F},J_:function(){return R},Kn:function(){return I},Mr:function(){return W},Oi:function(){return ut},UA:function(){return U},VZ:function(){return P},Vb:function(){return dt},Xz:function(){return G},Y6:function(){return V},Ym:function(){return k},_A:function(){return tt},_Q:function(){return B},_y:function(){return lt},fQ:function(){return at},hj:function(){return M},jj:function(){return it},jn:function(){return z},kJ:function(){return j},l_:function(){return J},le:function(){return T},m6:function(){return nt},mf:function(){return A},mm:function(){return pt},nd:function(){return Z},nr:function(){return O},o8:function(){return S},qK:function(){return rt},rW:function(){return D},sO:function(){return ot},tO:function(){return q},v4:function(){return st},xe:function(){return E}});var i=n(21908),o=n(26454),r=n(254),s=n(98500),a="constructor",l=i.RJ,c=i.Pw.freeze,u=(i.Pw.seal,i.Pw.keys),d=String[i.hB],h=d.trim,p=d.endsWith,f=d.startsWith,g=Date[i.hB].toISOString,v=Array.isArray,m=i.V4.toString,b=i.CY.toString,y=b[r._S](i.Pw),x=/-([a-z])/g,w=/([^\w\d_$])/g,$=/^(\d+[\w\d_$])/,C=Object.getPrototypeOf;function k(t,e){return typeof t===e}function S(t){return void 0===t||typeof t===i.jA}function T(t){return null===t||S(t)}function L(t){return!T(t)}function O(t,e){return!(!t||!i.CY[r._S](t,e))}function I(t){return!(!t||typeof t!==i.fK)}function A(t){return!(!t||typeof t!==i.cb)}function H(t){var e=t;return e&&_(e)&&(e=(e=(e=e[r.i7](x,(function(t,e){return e.toUpperCase()})))[r.i7](w,"_"))[r.i7]($,(function(t,e){return"_"+e}))),e}function D(t,e){if(t)for(var n in t)i.CY[r._S](t,n)&&e[r._S](t,n,t[n])}function F(t,e){var n=!1;return t&&e&&!(n=t===e)&&(n=p?t.endsWith(e):function(t,e){var n=!1,i=e?e[r.R5]:0,o=t?t[r.R5]:0;if(i&&o&&o>=i&&!(n=t===e)){for(var s=o-1,a=i-1;a>=0;a--){if(t[s]!=e[a])return!1;s--}n=!0}return n}(t,e)),n}function E(t,e){var n=!1;return t&&e&&!(n=t===e)&&(n=f?t.startsWith(e):function(t,e){var n=!1,i=e?e[r.R5]:0;if(t&&i&&t[r.R5]>=i&&!(n=t===e)){for(var o=0;o<i;o++)if(t[o]!==e[o])return!1;n=!0}return n}(t,e)),n}function B(t,e){return!(!t||!e)&&-1!==t[r.ou](e)}function R(t){return!(!t||"[object Date]"!==m[r._S](t))}var j=v||function(t){return!(!t||"[object Array]"!==m[r._S](t))};function P(t){return!(!t||"[object Error]"!==m[r._S](t))}function _(t){return"string"==typeof t}function M(t){return"number"==typeof t}function z(t){return"boolean"==typeof t}function N(t){var e=!1;if(t&&"object"==typeof t){var n=C?C(t):function(t){if(t){if(C)return C(t);var e=t.__proto__||t[i.hB]||t.constructor;if(e)return e}return null}(t);n?(n.constructor&&i.CY[r._S](n,a)&&(n=n.constructor),e=typeof n===i.cb&&b[r._S](n)===y):e=!0}return e}function V(t){if(t)return g?t.toISOString():function(t){if(t&&t.getUTCFullYear){var e=function(t){var e=String(t);return 1===e[r.R5]&&(e="0"+e),e};return t.getUTCFullYear()+"-"+e(t.getUTCMonth()+1)+"-"+e(t.getUTCDate())+"T"+e(t.getUTCHours())+":"+e(t.getUTCMinutes())+":"+e(t.getUTCSeconds())+"."+String((t.getUTCMilliseconds()/1e3).toFixed(3)).slice(2,5)+"Z"}}(t)}function q(t,e,n){var i=t[r.R5];try{for(var o=0;o<i&&(!(o in t)||-1!==e[r._S](n||t,t[o],o,t));o++);}catch(t){}}function U(t,e,n){if(t){if(t.indexOf)return t.indexOf(e,n);var i=t[r.R5],o=n||0;try{for(var s=Math.max(o>=0?o:i-Math.abs(o),0);s<i;s++)if(s in t&&t[s]===e)return s}catch(t){}}return-1}function W(t,e,n){var i;if(t){if(t.map)return t.map(e,n);var o=t[r.R5],s=n||t;i=new Array(o);try{for(var a=0;a<o;a++)a in t&&(i[a]=e[r._S](s,t[a],t))}catch(t){}}return i}function G(t,e,n){var i;if(t){if(t.reduce)return t.reduce(e,n);var o=t[r.R5],s=0;if(arguments[r.R5]>=3)i=n;else{for(;s<o&&!(s in t);)s++;i=t[s++]}for(;s<o;)s in t&&(i=e(i,t[s],s,t)),s++}return i}function Z(t){return t&&(t=h&&t.trim?t.trim():t[r.i7]?t[r.i7](/^\s+|(?=\s)\s+$/g,s.qS):t),t}var K=!{toString:null}.propertyIsEnumerable("toString"),Q=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];function X(t){var e=typeof t;if(e===i.cb||e===i.fK&&null!==t||(0,o.ZU)("objKeys called on non-object"),!K&&u)return u(t);var n=[];for(var s in t)t&&i.CY[r._S](t,s)&&n[r.MW](s);if(K)for(var a=Q[r.R5],l=0;l<a;l++)t&&i.CY[r._S](t,Q[l])&&n[r.MW](Q[l]);return n}function J(t,e,n,i){if(l)try{var o={enumerable:!0,configurable:!0};return n&&(o.get=n),i&&(o.set=i),l(t,e,o),!0}catch(t){}return!1}function Y(t){return t}function tt(t){return c&&D(t,(function(t,e){(j(e)||I(e))&&c(e)})),et(t)}var et=c||Y;function nt(){var t=Date;return t.now?t.now():(new t).getTime()}function it(t){return P(t)?t[r.I]:s.qS}function ot(t,e,n,i,o){var r=n;return t&&((r=t[e])===n||o&&!o(r)||i&&!i(n)||(r=n,t[e]=r)),r}function rt(t,e,n){var i;return t?!(i=t[e])&&T(i)&&(i=S(n)?{}:n,t[e]=i):i=S(n)?{}:n,i}function st(t,e){return T(t)?e:t}function at(t){return!!t}function lt(t){throw new Error(t)}function ct(t,e){var n=null,i=null;return A(t)?n=t:i=t,function(){var t=arguments;if(n&&(i=n()),i)return i[e][r.ZV](i,t)}}function ut(t,e,n,i,o){t&&e&&n&&(!1!==o||S(t[e]))&&(t[e]=ct(n,i))}function dt(t,e,n,i){return t&&e&&I(t)&&j(n)&&q(n,(function(n){_(n)&&ut(t,n,e,n,i)})),t}function ht(t){return t&&i.rl&&(t=(0,i.Pw)((0,i.rl)({},t))),t}function pt(t,e,n,o,s,a){var l=arguments,c=l[0]||{},u=l[r.R5],d=!1,h=1;for(u>0&&z(c)&&(d=c,c=l[h]||{},h++),I(c)||(c={});h<u;h++){var p=l[h],f=j(p),g=I(p);for(var v in p){var m=f&&v in p||g&&i.CY[r._S](p,v);if(m){var b=p[v],y=void 0;if(d&&b&&((y=j(b))||N(b))){var x=c[v];y?j(x)||(x=[]):N(x)||(x={}),b=pt(d,x,b)}void 0!==b&&(c[v]=b)}}}return c}},98500:function(t,e,n){"use strict";n.d(e,{$F:function(){return p},C$:function(){return g},DN:function(){return s},Z:function(){return o},Zh:function(){return l},cL:function(){return m},f_:function(){return f},hL:function(){return u},js:function(){return c},kl:function(){return b},mE:function(){return a},oV:function(){return r},qS:function(){return i},uC:function(){return h},yi:function(){return d},ys:function(){return v}});var i="",o="channels",r="core",s="createPerfMgr",a="disabled",l="extensionConfig",c="extensions",u="processTelemetry",d="priority",h="eventsSent",p="eventsDiscarded",f="eventsSendRequest",g="perfEvent",v="errorToConsole",m="warnToConsole",b="getPerfMgr"},26932:function(t,e,n){"use strict";n.d(e,{Jk:function(){return c},Lm:function(){return d},j5:function(){return h}});var i=n(23806),o=n(254),r=n(74539),s=n(98500),a=null,l=function(){function t(e,n,i){var s,a=this,l=!1;(a.start=(0,r.m6)(),a[o.I]=e,a[o.d]=i,a[o.PL]=function(){return!1},(0,r.mf)(n))&&(l=(0,r.l_)(a,"payload",(function(){return!s&&(0,r.mf)(n)&&(s=n(),n=null),s})));a[o.T]=function(e){return e?e===t.ParentContextKey||e===t.ChildrenContextKey?a[e]:(a.ctx||{})[e]:null},a[o.wu]=function(e,n){if(e)if(e===t.ParentContextKey)a[e]||(a[o.PL]=function(){return!0}),a[e]=n;else if(e===t.ChildrenContextKey)a[e]=n;else{(a.ctx=a.ctx||{})[e]=n}},a[o.Km]=function(){var e=0,i=a[o.T](t.ChildrenContextKey);if((0,r.kJ)(i))for(var s=0;s<i[o.R5];s++){var c=i[s];c&&(e+=c[o.Z_])}a[o.Z_]=(0,r.m6)()-a.start,a.exTime=a[o.Z_]-e,a[o.Km]=function(){},!l&&(0,r.mf)(n)&&(a.payload=n())}}return t.ParentContextKey="parent",t.ChildrenContextKey="childEvts",t}(),c=function(){function t(e){this.ctx={},(0,i.Z)(t,this,(function(t){t.create=function(t,e,n){return new l(t,e,n)},t.fire=function(t){t&&(t[o.Km](),e&&(0,r.mf)(e[s.C$])&&e[s.C$](t))},t[o.wu]=function(e,n){e&&((t.ctx=t.ctx||{})[e]=n)},t[o.T]=function(e){return(t.ctx||{})[e]}}))}return t.__ieDyn=1,t}(),u="CoreUtils.doPerf";function d(t,e,n,i,r){if(t){var a=t;if(a[s.kl]&&(a=a[s.kl]()),a){var c=void 0,d=a[o.T](u);try{if(c=a.create(e(),i,r)){if(d&&c[o.wu]&&(c[o.wu](l.ParentContextKey,d),d[o.T]&&d[o.wu])){var h=d[o.T](l.ChildrenContextKey);h||(h=[],d[o.wu](l.ChildrenContextKey,h)),h[o.MW](c)}return a[o.wu](u,c),n(c)}}catch(t){c&&c[o.wu]&&c[o.wu]("exception",t)}finally{c&&a.fire(c),a[o.wu](u,d)}}}return n()}function h(){return a}},69509:function(t,e,n){"use strict";n.d(e,{Bt:function(){return f},CD:function(){return p},jV:function(){return v},xy:function(){return g}});var i=n(254),o=n(80221),r=n(60851),s=n(74539),a=n(98500),l=n(26932),c=n(39289),u="TelemetryPluginChain",d=0;function h(t,e,n,l){var c=null,u=[];null!==l&&(c=l?function(t,e,n){for(;t;){if(t[i.TO]()===n)return t;t=t[i.W2]()}return v([n],e[i.TC]||{},e)}(t,n,l):t);var d={_next:function(){var t=c;if(c=t?t[i.W2]():null,!t){var e=u;e&&e[i.R5]>0&&((0,s.tO)(e,(function(t){try{t.func[i._S](t.self,t.args)}catch(t){(0,o.kP)(n[i.eZ],2,73,"Unexpected Exception during onComplete - "+(0,r.eU)(t))}})),u=[])}return t},ctx:{core:function(){return n},diagLog:function(){return(0,o.vH)(n,e)},getCfg:function(){return e},getExtCfg:h,getConfig:function(t,n,i){void 0===i&&(i=!1);var o,r=h(t,null);r&&!(0,s.le)(r[n])?o=r[n]:e&&!(0,s.le)(e[n])&&(o=e[n]);return(0,s.le)(o)?i:o},hasNext:function(){return!!c},getNext:function(){return c},setNext:function(t){c=t},iterate:function(t){var e;for(;e=d._next();){var n=e[i.TO]();n&&t(n)}},onComplete:function(t,e){for(var n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o];t&&u[i.MW]({func:t,self:(0,s.o8)(e)?d.ctx:e,args:n})}}};function h(t,n,i){var o;if(void 0===n&&(n={}),void 0===i&&(i=0),e){var r=e[a.Zh];r&&t&&(o=r[t])}if(o){if((0,s.Kn)(n)&&0!==i){var l=(0,s.mm)(!0,n,o);e&&2===i&&(0,s.rW)(n,(function(t){if((0,s.le)(l[t])){var n=e[t];(0,s.le)(n)||(l[t]=n)}})),o=l}}else o=n;return o}return d}function p(t,e,n,o){var r=h(t,e,n,o),l=r.ctx;return l[i.uL]=function(t){var e=r._next();return e&&e[a.hL](t,l),!e},l[i.zV]=function(t,o){return void 0===t&&(t=null),(0,s.kJ)(t)&&(t=v(t,e,n,o)),p(t||l[i.W2](),e,n,o)},l}function f(t,e,n){var o=e[i.TC]||{},r=h(t,o,e,n),a=r.ctx;return a[i.uL]=function(t){var e=r._next();return e&&e.unload(a,t),!e},a[i.zV]=function(t,n){return void 0===t&&(t=null),(0,s.kJ)(t)&&(t=v(t,o,e,n)),f(t||a[i.W2](),e,n)},a}function g(t,e,n){var o=e[i.TC]||{},r=h(t,o,e,n).ctx;return r[i.uL]=function(t){return r.iterate((function(e){(0,s.mf)(e[i.Tu])&&e[i.Tu](r,t)}))},r[i.zV]=function(t,n){return void 0===t&&(t=null),(0,s.kJ)(t)&&(t=v(t,o,e,n)),g(t||r[i.W2](),e,n)},r}function v(t,e,n,h){var f=null,g=!h;if((0,s.kJ)(t)&&t[i.R5]>0){var m=null;(0,s.tO)(t,(function(t){if(g||h!==t||(g=!0),g&&t&&(0,s.mf)(t[a.hL])){var v=function(t,e,n){var h,f=null,g=(0,s.mf)(t[a.hL]),v=(0,s.mf)(t[i.Jd]);h=t?t[i.pZ]+"-"+t[a.yi]+"-"+d++:"Unknown-0-"+d++;var m={getPlugin:function(){return t},getNext:function(){return f},processTelemetry:x,unload:w,update:$,_id:h,_setNext:function(t){f=t}};function b(){var i;return t&&(0,s.mf)(t._getTelCtx)&&(i=t._getTelCtx()),i||(i=p(m,e,n)),i}function y(e,n,s,c,d){var p=!1,g=t?t[i.pZ]:u,v=e._hasRun;return v||(v=e._hasRun={}),e.setNext(f),t&&(0,l.Lm)(e[a.oV](),(function(){return g+":"+s}),(function(){v[h]=!0;try{var t=f?f._id:a.qS;t&&(v[t]=!1),p=n(e)}catch(t){var l=!f||v[f._id];l&&(p=!0),f&&l||(0,o.kP)(e[i.mc](),1,73,"Plugin ["+g+"] failed during "+s+" - "+(0,r.eU)(t)+", run flags: "+(0,r.eU)(v))}}),c,d),p}function x(e,n){function o(n){if(!t||!g)return!1;var o=(0,c.OY)(t);return!o[i.fi]&&!o[a.mE]&&(v&&t[i.Jd](f),t[a.hL](e,n),!0)}y(n=n||b(),o,"processTelemetry",(function(){return{item:e}}),!e.sync)||n[i.uL](e)}function w(e,n){function o(){var o=!1;if(t){var r=(0,c.OY)(t),s=t[a.oV]||r[a.oV];!t||s&&s!==e.core()||r[i.fi]||(r[a.oV]=null,r[i.fi]=!0,r[i.yl]=!1,t[i.fi]&&!0===t[i.fi](e,n)&&(o=!0))}return o}y(e,o,"unload",(function(){}),n[i.d])||e[i.uL](n)}function $(e,n){function o(){var o=!1;if(t){var r=(0,c.OY)(t),s=t[a.oV]||r[a.oV];!t||s&&s!==e.core()||r[i.fi]||t[i.Tu]&&!0===t[i.Tu](e,n)&&(o=!0)}return o}y(e,o,"update",(function(){}),!1)||e[i.uL](n)}return(0,s.FL)(m)}(t,e,n);f||(f=v),m&&m._setNext(v),m=v}}))}return h&&!f?v([h],e,n):f}},42774:function(t,e,n){"use strict";n.d(e,{CN:function(){return v},F6:function(){return m},_l:function(){return g},az:function(){return f},pZ:function(){return b}});var i=n(254),o=n(60851),r=n(74539),s=n(98500),a=4294967296,l=4294967295,c=!1,u=123456789,d=987654321;function h(t){t<0&&(t>>>=0),u=123456789+t&l,d=987654321-t&l,c=!0}function p(){try{var t=2147483647&(0,r.m6)();h((Math.random()*a^t)+t)}catch(t){}}function f(t){return t>0?Math.floor(g()/l*(t+1))>>>0:0}function g(t){var e=0,n=(0,o.MX)()||(0,o.gz)();return n&&n.getRandomValues&&(e=n.getRandomValues(new Uint32Array(1))[0]&l),0===e&&(0,o.w1)()&&(c||p(),e=m()&l),0===e&&(e=Math.floor(a*Math.random()|0)),t||(e>>>=0),e}function v(t){t?h(t):p()}function m(t){var e=((d=36969*(65535&d)+(d>>16)&l)<<16)+(65535&(u=18e3*(65535&u)+(u>>16)&l))>>>0&l|0;return t||(e>>>=0),e}function b(t){void 0===t&&(t=22);for(var e=g()>>>0,n=0,o=s.qS;o[i.R5]<t;)n++,o+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(63&e),e>>>=6,5===n&&(e=(g()<<2&4294967295|3&e)>>>0,n=0);return o}},39289:function(t,e,n){"use strict";n.d(e,{AA:function(){return d},OY:function(){return c},Yn:function(){return h},bP:function(){return u}});var i=n(254),o=n(5482),r=n(74539),s=n(98500),a=n(54480),l=(0,o.K)("plugin");function c(t){return l.get(t,"state",{},!0)}function u(t,e){for(var n,o=[],a=null,l=t[i.W2]();l;){var u=l[i.TO]();if(u){a&&(0,r.mf)(a[i.Jd])&&(0,r.mf)(u[s.hL])&&a[i.Jd](u);((0,r.mf)(u[i.yl])?u[i.yl]():(n=c(u))[i.yl])||o[i.MW](u),a=u,l=l[i.W2]()}}(0,r.tO)(o,(function(o){var r=t[s.oV]();o[i.VL](t.getCfg(),r,e,t[i.W2]()),n=c(o),o[s.oV]||n[s.oV]||(n[s.oV]=r),n[i.yl]=!0,delete n[i.fi]}))}function d(t){return t.sort((function(t,e){var n=0;if(e){var i=(0,r.mf)(e[s.hL]);(0,r.mf)(t[s.hL])?n=i?t[s.yi]-e[s.yi]:1:i&&(n=-1)}else n=t?1:-1;return n}))}function h(t){var e={};return{getName:function(){return e[i.I]},setName:function(n){t&&t.setName(n),e[i.I]=n},getTraceId:function(){return e[i.nY]},setTraceId:function(n){t&&t.setTraceId(n),(0,a.jN)(n)&&(e[i.nY]=n)},getSpanId:function(){return e[i._d]},setSpanId:function(n){t&&t.setSpanId(n),(0,a.Lc)(n)&&(e[i._d]=n)},getTraceFlags:function(){return e[i.T0]},setTraceFlags:function(n){t&&t.setTraceFlags(n),e[i.T0]=n}}}},9894:function(t,e,n){"use strict";n.d(e,{Y:function(){return a}});var i=n(254),o=n(80221),r=n(60851),s=n(74539);function a(){var t=[];return{add:function(e){e&&t[i.MW](e)},run:function(e,n){(0,s.tO)(t,(function(t){try{t(e,n)}catch(t){(0,o.kP)(e[i.mc](),2,73,"Unexpected error calling unload handler - "+(0,r.eU)(t))}})),t=[]}}}},54480:function(t,e,n){"use strict";n.d(e,{Lc:function(){return l},jN:function(){return a}});var i=n(254),o="00000000000000000000000000000000",r="0000000000000000";function s(t,e,n){return!(!t||t[i.R5]!==e||t===n)&&!!t.match(/^[\da-f]*$/)}function a(t){return s(t,32,o)}function l(t){return s(t,16,r)}},254:function(t,e,n){"use strict";n.d(e,{$h:function(){return _},F3:function(){return O},Fc:function(){return y},Fr:function(){return q},Gc:function(){return S},I:function(){return o},Jd:function(){return D},Jn:function(){return M},Km:function(){return Y},Kn:function(){return K},LS:function(){return b},Lk:function(){return E},MW:function(){return a},P6:function(){return Z},PL:function(){return Q},R5:function(){return h},SD:function(){return g},T:function(){return X},T0:function(){return nt},T1:function(){return W},TC:function(){return c},TO:function(){return x},Tu:function(){return I},VL:function(){return i},W2:function(){return A},ZV:function(){return N},Z_:function(){return p},_S:function(){return G},_d:function(){return et},cb:function(){return C},d:function(){return L},eZ:function(){return d},fi:function(){return k},g:function(){return v},gU:function(){return T},i7:function(){return V},iC:function(){return $},jk:function(){return U},kL:function(){return w},mc:function(){return H},n7:function(){return m},nY:function(){return tt},ou:function(){return B},p$:function(){return u},pZ:function(){return s},qV:function(){return j},tb:function(){return r},uL:function(){return f},w6:function(){return P},wu:function(){return J},xv:function(){return z},yl:function(){return l},zV:function(){return F},zc:function(){return R}});var i="initialize",o="name",r="getNotifyMgr",s="identifier",a="push",l="isInitialized",c="config",u="instrumentationKey",d="logger",h="length",p="time",f="processNext",g="getProcessTelContext",v="addNotificationListener",m="removeNotificationListener",b="stopPollingInternalLogs",y="onComplete",x="getPlugin",w="flush",$="_extensions",C="splice",k="teardown",S="messageId",T="message",L="isAsync",O="_doTeardown",I="update",A="getNext",H="diagLog",D="setNextPlugin",F="createNew",E="cookieCfg",B="indexOf",R="substring",j="userAgent",P="split",_="setEnabled",M="substr",z="nodeType",N="apply",V="replace",q="enableDebugExceptions",U="logInternalMessage",W="toLowerCase",G="call",Z="type",K="handler",Q="isChildEvt",X="getCtx",J="setCtx",Y="complete",tt="traceId",et="spanId",nt="traceFlags"},3232:function(t,e,n){"use strict";n.d(e,{Z:function(){return at}});var i=n(45362),o=n(23806),r=n(26932),s=n(10607),a=n(5482),l=n(91254),c=n(74539),u=n(60851),d=(0,n(71178).By)({Unknown:0,NonRetryableStatus:1,InvalidEvent:2,SizeLimitExceeded:3,KillSwitch:4,QueueFull:5}),h=n(80221),p=n(27981),f="REAL_TIME",g="",v="POST",m="drop",b="send",y="requeue",x="rspFail",w="application/x-json-stream",$="cache-control",C="content-type",k="kill-duration",S="time-delta-millis",T="client-version",L="client-id",O="time-delta-to-apply-millis",I="upload-time",A="apikey",H="AuthMsaDeviceTicket",D="AuthXToken";function F(t){var e=(t.ext||{}).intweb;return e&&(0,l.Sn)(e.msfpc)?e.msfpc:null}function E(t){for(var e=null,n=0;null===e&&n<t.length;n++)e=F(t[n]);return e}var B=function(){function t(e,n){var i=n?[].concat(n):[],o=this,r=E(i);o.iKey=function(){return e},o.Msfpc=function(){return r||g},o.count=function(){return i.length},o.events=function(){return i},o.addEvent=function(t){return!!t&&(i.push(t),r||(r=F(t)),!0)},o.split=function(n,o){var s;if(n<i.length){var a=i.length-n;(0,c.le)(o)||(a=o<a?o:a),s=i.splice(n,a),r=E(i)}return new t(e,s)}}return t.create=function(e,n){return new t(e,n)},t}(),R=function(){function t(){var e=!0,n=!0,i=!0,r="use-collector-delta",s=!1;(0,o.Z)(t,this,(function(t){t.allowRequestSending=function(){return e},t.firstRequestSent=function(){i&&(i=!1,s||(e=!1))},t.shouldAddClockSkewHeaders=function(){return n},t.getClockSkewHeaderValue=function(){return r},t.setClockSkew=function(t){s||(t?(r=t,n=!0,s=!0):n=!1,e=!0)}}))}return t.__ieDyn=1,t}(),j=function(){function t(){var e={};(0,o.Z)(t,this,(function(t){t.setKillSwitchTenants=function(t,n){if(t&&n)try{var i=(s=t.split(","),a=[],s&&(0,c.tO)(s,(function(t){a.push((0,c.nd)(t))})),a);if("this-request-only"===n)return i;for(var o=1e3*parseInt(n,10),r=0;r<i.length;++r)e[i[r]]=(0,c.m6)()+o}catch(t){return[]}var s,a;return[]},t.isTenantKilled=function(t){var n=e,i=(0,c.nd)(t);return void 0!==n[i]&&n[i]>(0,c.m6)()||(delete n[i],!1)}}))}return t.__ieDyn=1,t}(),P=n(21908);function _(t){var e,n=Math.floor(1200*Math.random())+2400;return e=Math.pow(2,t)*n,Math.min(e,6e5)}var M,z=2e6,N=Math.min(z,65e3),V=/\./,q=function(){function t(e,n,i,s){var a="data",u="baseData",d=!!s,h=n,p={};(0,o.Z)(t,this,(function(t){function n(t,e,o,r,s,a,u){(0,c.rW)(t,(function(t,f){var g=null;if(f||(0,l.Sn)(f)){var v=o,m=t,b=s,y=e;if(d&&!r&&V.test(t)){var x=t.split("."),w=x.length;if(w>1){b&&(b=b.slice());for(var $=0;$<w-1;$++){var C=x[$];y=y[C]=y[C]||{},v+="."+C,b&&b.push(C)}m=x[w-1]}}var k=r&&function(t,e){var n=p[t];return void 0===n&&(t.length>=7&&(n=(0,c.xe)(t,"ext.metadata")||(0,c.xe)(t,"ext.web")),p[t]=n),n}(v);if(g=!k&&h&&h.handleField(v,m)?h.value(v,m,f,i):(0,l.yj)(m,f,i)){var S=g.value;if(y[m]=S,a&&a(b,m,g),u&&"object"==typeof S&&!(0,c.kJ)(S)){var T=b;T&&(T=T.slice()).push(m),n(f,S,v+"."+m,r,T,a,u)}}}}))}t.createPayload=function(t,e,n,i,o,r){return{apiKeys:[],payloadBlob:g,overflow:null,sizeExceed:[],failedEvts:[],batches:[],numEvents:0,retryCnt:t,isTeardown:e,isSync:n,isBeacon:i,sendType:r,sendReason:o}},t.appendPayload=function(n,i,o){var s=n&&i&&!n.overflow;return s&&(0,r.Lm)(e,(function(){return"Serializer:appendPayload"}),(function(){for(var e=i.events(),r=n.payloadBlob,s=n.numEvents,a=!1,l=[],u=[],d=n.isBeacon,h=d?65e3:3984588,p=d?N:z,f=0,g=0;f<e.length;){var v=e[f];if(v){if(s>=o){n.overflow=i.split(f);break}var m=t.getEventBlob(v);if(m&&m.length<=p){var b=m.length;if(r.length+b>h){n.overflow=i.split(f);break}r&&(r+="\n"),r+=m,++g>20&&(r.substr(0,1),g=0),a=!0,s++}else m?l.push(v):u.push(v),e.splice(f,1),f--}f++}if(l&&l.length>0&&n.sizeExceed.push(B.create(i.iKey(),l)),u&&u.length>0&&n.failedEvts.push(B.create(i.iKey(),u)),a){n.batches.push(i),n.payloadBlob=r,n.numEvents=s;var y=i.iKey();-1===(0,c.UA)(n.apiKeys,y)&&n.apiKeys.push(y)}}),(function(){return{payload:n,theBatch:{iKey:i.iKey(),evts:i.events()},max:o}})),s},t.getEventBlob=function(t){try{return(0,r.Lm)(e,(function(){return"Serializer.getEventBlob"}),(function(){var e={};e.name=t.name,e.time=t.time,e.ver=t.ver,e.iKey="o:"+(0,l.jM)(t.iKey);var i={},o=t.ext;o&&(e.ext=i,(0,c.rW)(o,(function(t,e){n(e,i[t]={},"ext."+t,!0,null,null,!0)})));var r=e.data={};r.baseType=t.baseType;var s=r.baseData={};return n(t.baseData,s,u,!1,[u],(function(t,e,n){U(i,t,e,n)}),true),n(t.data,r,a,!1,[],(function(t,e,n){U(i,t,e,n)}),true),JSON.stringify(e)}),(function(){return{item:t}}))}catch(t){return null}}}))}return t.__ieDyn=1,t}();function U(t,e,n,i){if(i&&t){var o=(0,l.Vv)(i.value,i.kind,i.propertyType);if(o>-1){var r=t.metadata;r||(r=t.metadata={f:{}});var s=r.f;if(s||(s=r.f={}),e)for(var a=0;a<e.length;a++){var u=e[a];s[u]||(s[u]={f:{}});var d=s[u].f;d||(d=s[u].f={}),s=d}s=s[n]={},(0,c.kJ)(i.value)?s.a={t:o}:s.t=o}}}var W="&NoResponseBody=true",G=((M={})[1]=y,M[100]=y,M[200]="sent",M[8004]=m,M[8003]=m,M),Z={},K={};function Q(t,e,n){Z[t]=e,!1!==n&&(K[e]=t)}function X(t){try{return t.responseText}catch(t){}return g}function J(t,e){var n=!1;if(t&&e){var i=(0,c.FY)(t);if(i&&i.length>0)for(var o=e.toLowerCase(),r=0;r<i.length;r++){var s=i[r];if(s&&(0,c.nr)(e,s)&&s.toLowerCase()===o){n=!0;break}}}return n}function Y(t,e,n,i){e&&n&&n.length>0&&(i&&Z[e]?(t.hdrs[Z[e]]=n,t.useHdrs=!0):t.url+="&"+e+"="+n)}function tt(t,e){return e&&((0,c.hj)(e)?t=[e].concat(t):(0,c.kJ)(e)&&(t=e.concat(t))),t}Q(H,H,!1),Q(T,T),Q(L,"Client-Id"),Q(A,A),Q(O,O),Q(I,I),Q(D,D);var et=function(){function t(e,n,i,s,a){this._responseHandlers=[];var d,p,f,y,H,D,F,E,B,M,z="?cors=true&"+C.toLowerCase()+"="+w,N=new j,V=!1,U=new R,Z=!1,Q=0,et=!0,nt=[],it={},ot=[],rt=null,st=!1,at=!1,lt=!1;(0,o.Z)(t,this,(function(t){var o=!0;function R(t,e){for(var n=0,i=null,o=0;null==i&&o<t.length;)1===(n=t[o])?(0,u.cp)()?i=j:(0,u.Z3)()&&(i=ut):2===n&&(0,u.JO)(e)&&(!e||e&&!E)?i=ct:Z&&3===n&&(0,u.MF)()&&(i=ht),o++;return i?{_transport:n,_isSync:e,sendPOST:i}:null}function j(t,e,n){var i=new XDomainRequest;i.open(v,t.urlString),t.timeout&&(i.timeout=t.timeout),i.onload=function(){var t=X(i);dt(e,200,{},t),kt(t)},i.onerror=function(){dt(e,400,{})},i.ontimeout=function(){dt(e,500,{})},i.onprogress=function(){},n?i.send(t.data):a.set((function(){i.send(t.data)}),0)}function ct(t,e,n){var i,r=t.urlString,s=!1,l=!1,u=((i={body:t.data,method:v}).Microsoft_ApplicationInsights_BypassAjaxInstrumentation=!0,i);n&&(u.keepalive=!0,2===t._sendReason&&(s=!0,M&&(r+=W))),o&&(u.credentials="include"),t.headers&&(0,c.FY)(t.headers).length>0&&(u.headers=t.headers),fetch(r,u).then((function(t){var n={},i=g,o=t.headers;o&&o.forEach((function(t,e){n[e]=t})),t.body&&t.text().then((function(t){i=t})),l||(l=!0,dt(e,t.status,n,i),kt(i))})).catch((function(t){l||(l=!0,dt(e,0,{}))})),s&&!l&&(l=!0,dt(e,200,{})),!l&&t.timeout>0&&a.set((function(){l||(l=!0,dt(e,500,{}))}),t.timeout)}function ut(t,e,n){var i=t.urlString;function r(t,e,n){if(!t[n]&&e&&e.getResponseHeader){var i=e.getResponseHeader(n);i&&(t[n]=(0,c.nd)(i))}return t}function s(t){var e={};return t.getAllResponseHeaders?e=function(t){var e={};if((0,c.HD)(t)){var n=(0,c.nd)(t).split(/[\r\n]+/);(0,c.tO)(n,(function(t){if(t){var n=t.indexOf(": ");if(-1!==n){var i=(0,c.nd)(t.substring(0,n)).toLowerCase(),o=(0,c.nd)(t.substring(n+1));e[i]=o}else e[(0,c.nd)(t)]=1}}))}return e}(t.getAllResponseHeaders()):(e=r(e,t,S),e=r(e,t,k),e=r(e,t,"kill-duration-seconds")),e}function a(t,n){dt(e,t.status,s(t),n)}n&&t.disableXhrSync&&(n=!1);var u=(0,l.ot)(v,i,o,!0,n,t.timeout);(0,c.rW)(t.headers,(function(t,e){u.setRequestHeader(t,e)})),u.onload=function(){var t=X(u);a(u,t),kt(t)},u.onerror=function(){a(u)},u.ontimeout=function(){a(u)},u.send(t.data)}function dt(t,e,n,i){try{t(e,n,i)}catch(t){(0,h.kP)(p,2,518,(0,u.eU)(t))}}function ht(t,e,n){var i=200,o=t._thePayload,r=t.urlString+(M?W:g);try{var s=(0,u.jW)();if(!s.sendBeacon(r,t.data))if(o){var a=[];(0,c.tO)(o.batches,(function(t){if(a&&t&&t.count()>0){for(var e=t.events(),n=0;n<e.length;n++)if(!s.sendBeacon(r,rt.getEventBlob(e[n]))){a.push(t.split(n));break}}else a.push(t.split(0))})),St(a,8003,o.sendType,!0)}else i=0}catch(t){(0,h.jV)(p,"Failed to send telemetry using sendBeacon API. Ex:"+(0,u.eU)(t)),i=0}finally{dt(e,i,{},g)}}function pt(t){return 2===t||3===t}function ft(t){return at&&pt(t)&&(t=2),t}function gt(){return!V&&Q<n}function vt(){var t=ot;return ot=[],t}function mt(t,e,n){var i=!1;return t&&t.length>0&&!V&&f[e]&&rt&&(i=0!==e||gt()&&(n>0||U.allowRequestSending())),i}function bt(t){var e={};return t&&(0,c.tO)(t,(function(t,n){e[n]={iKey:t.iKey(),evts:t.events()}})),e}function yt(t,n,i,o,s){if(t&&0!==t.length)if(V)St(t,1,o);else{o=ft(o);try{var a=t,c=0!==o;(0,r.Lm)(y,(function(){return"HttpManager:_sendBatches"}),(function(r){r&&(t=t.slice(0));for(var a=[],u=null,d=(0,l.hK)(),h=f[o]||(c?f[1]:f[0]),p=h&&h._transport,g=B&&(at||pt(o)||3===p||h._isSync&&2===p);mt(t,o,n);){var v=t.shift();v&&v.count()>0&&(N.isTenantKilled(v.iKey())?a.push(v):(u=u||rt.createPayload(n,i,c,g,s,o),rt.appendPayload(u,v,e)?null!==u.overflow&&(t=[u.overflow].concat(t),u.overflow=null,$t(u,d,(0,l.hK)(),s),d=(0,l.hK)(),u=null):($t(u,d,(0,l.hK)(),s),d=(0,l.hK)(),t=[v].concat(t),u=null)))}u&&$t(u,d,(0,l.hK)(),s),t.length>0&&(ot=t.concat(ot)),St(a,8004,o)}),(function(){return{batches:bt(a),retryCount:n,isTeardown:i,isSynchronous:c,sendReason:s,useSendBeacon:pt(o),sendType:o}}),!c)}catch(t){(0,h.kP)(p,2,48,"Unexpected Exception sending batch: "+(0,u.eU)(t))}}}function xt(t,e){var n={url:z,hdrs:{},useHdrs:!1};e?(n.hdrs=(0,l.l7)(n.hdrs,it),n.useHdrs=(0,c.FY)(n.hdrs).length>0):(0,c.rW)(it,(function(t,e){K[t]?Y(n,K[t],e,!1):(n.hdrs[t]=e,n.useHdrs=!0)})),Y(n,L,"NO_AUTH",e),Y(n,T,l.vs,e);var i=g;(0,c.tO)(t.apiKeys,(function(t){i.length>0&&(i+=","),i+=t})),Y(n,A,i,e),Y(n,I,(0,c.m6)().toString(),e);var o=function(t){for(var e=0;e<t.batches.length;e++){var n=t.batches[e].Msfpc();if(n)return encodeURIComponent(n)}return g}(t);if((0,l.Sn)(o)&&(n.url+="&ext.intweb.msfpc="+o),U.shouldAddClockSkewHeaders()&&Y(n,O,U.getClockSkewHeaderValue(),e),y.getWParam){var r=y.getWParam();r>=0&&(n.url+="&w="+r)}for(var s=0;s<nt.length;s++)n.url+="&"+nt[s].name+"="+nt[s].value;return n}function wt(t,e,n){t[e]=t[e]||{},t[e][d.identifier]=n}function $t(e,n,o,s){if(e&&e.payloadBlob&&e.payloadBlob.length>0){var a=!!t.sendHook,g=f[e.sendType];!pt(e.sendType)&&e.isBeacon&&2===e.sendReason&&(g=f[2]||f[3]||g);var v=lt;(e.isBeacon||3===g._transport)&&(v=!1);var m=xt(e,v);v=v||m.useHdrs;var b=(0,l.hK)();(0,r.Lm)(y,(function(){return"HttpManager:_doPayloadSend"}),(function(){for(var f=0;f<e.batches.length;f++)for(var x=e.batches[f].events(),k=0;k<x.length;k++){var S=x[k];if(st){var T=S.timings=S.timings||{};wt(T,"sendEventStart",b),wt(T,"serializationStart",n),wt(T,"serializationCompleted",o)}S.sendAttempt>0?S.sendAttempt++:S.sendAttempt=1}St(e.batches,1e3+(s||0),e.sendType,!0);var L={data:e.payloadBlob,urlString:m.url,headers:m.hdrs,_thePayload:e,_sendReason:s,timeout:D,disableXhrSync:F,disableFetchKeepAlive:E};v&&(J(L.headers,$)||(L.headers["cache-control"]="no-cache, no-store"),J(L.headers,C)||(L.headers["content-type"]=w));var O=null;g&&(O=function(n){U.firstRequestSent();var o=function(n,o){!function(e,n,o,r){var s=9e3,a=null,u=!1,h=!1;try{var p=!0;if(typeof e!==P.jA){if(n){U.setClockSkew(n["time-delta-millis"]);var f=n["kill-duration"]||n["kill-duration-seconds"];(0,c.tO)(N.setKillSwitchTenants(n["kill-tokens"],f),(function(t){(0,c.tO)(o.batches,(function(e){if(e.iKey()===t){a=a||[];var n=e.split(0);o.numEvents-=n.count(),a.push(n)}}))}))}if(200==e||204==e)return void(s=200);((v=e)>=300&&v<500&&408!=v&&429!=v||501==v||505==v||o.numEvents<=0)&&(p=!1),s=9e3+e%1e3}if(p){s=100;var g=o.retryCnt;0===o.sendType&&(g<i?(u=!0,Ct((function(){0===o.sendType&&Q--,yt(o.batches,g+1,o.isTeardown,at?2:o.sendType,5)}),at,_(g))):(h=!0,at&&(s=8001)))}}finally{u||(U.setClockSkew(),function(e,n,i,o){try{o&&d._backOffTransmission(),200===n&&(o||e.isSync||d._clearBackOff(),function(t){if(st){var e=(0,l.hK)();(0,c.tO)(t,(function(t){t&&t.count()>0&&function(t,e){st&&(0,c.tO)(t,(function(t){wt(t.timings=t.timings||{},"sendEventCompleted",e)}))}(t.events(),e)}))}}(e.batches)),St(e.batches,n,e.sendType,!0)}finally{0===e.sendType&&(Q--,5!==i&&t.sendQueuedRequests(e.sendType,i))}}(o,s,r,h)),St(a,8004,o.sendType)}var v}(n,o,e,s)},r=e.isTeardown||e.isSync;try{g.sendPOST(n,o,r),t.sendListener&&t.sendListener(L,n,r,e.isBeacon)}catch(t){(0,h.jV)(p,"Unexpected exception sending payload. Ex:"+(0,u.eU)(t)),dt(o,0,{})}}),(0,r.Lm)(y,(function(){return"HttpManager:_doPayloadSend.sender"}),(function(){if(O)if(0===e.sendType&&Q++,a&&!e.isBeacon&&3!==g._transport){var n={data:L.data,urlString:L.urlString,headers:(0,l.l7)({},L.headers),timeout:L.timeout,disableXhrSync:L.disableXhrSync,disableFetchKeepAlive:L.disableFetchKeepAlive},i=!1;(0,r.Lm)(y,(function(){return"HttpManager:_doPayloadSend.sendHook"}),(function(){try{t.sendHook(n,(function(t){i=!0,et||t._thePayload||(t._thePayload=t._thePayload||L._thePayload,t._sendReason=t._sendReason||L._sendReason),O(t)}),e.isSync||e.isTeardown)}catch(t){i||O(L)}}))}else O(L)}))}),(function(){return{thePayload:e,serializationStart:n,serializationCompleted:o,sendReason:s}}),e.isSync)}e.sizeExceed&&e.sizeExceed.length>0&&St(e.sizeExceed,8003,e.sendType),e.failedEvts&&e.failedEvts.length>0&&St(e.failedEvts,8002,e.sendType)}function Ct(t,e,n){e?t():a.set(t,n)}function kt(e){var n=t._responseHandlers;try{for(var i=0;i<n.length;i++)try{n[i](e)}catch(t){(0,h.kP)(p,1,519,"Response handler failed: "+t)}if(e){var o=JSON.parse(e);(0,l.Sn)(o.webResult)&&(0,l.Sn)(o.webResult.msfpc)&&H.set("MSFPC",o.webResult.msfpc,31536e3)}}catch(t){}}function St(t,e,n,i){if(t&&t.length>0&&s){var o=s[function(t){var e=G[t];(0,l.Sn)(e)||(e="oth",t>=9e3&&t<=9999?e=x:t>=8e3&&t<=8999?e=m:t>=1e3&&t<=1999&&(e=b));return e}(e)];if(o){var a=0!==n;(0,r.Lm)(y,(function(){return"HttpManager:_sendBatchesNotification"}),(function(){Ct((function(){try{o.call(s,t,e,a,n)}catch(t){(0,h.kP)(p,1,74,"send request notification failed: "+t)}}),i||a,0)}),(function(){return{batches:bt(t),reason:e,isSync:a,sendSync:i,sendType:n}}),!a)}}}t.initialize=function(t,e,n,i,r){var s;r||(r={}),z=t+z,lt=!!(0,c.o8)(r.avoidOptions)||!r.avoidOptions,y=e,H=e.getCookieMgr(),st=!y.config.disableEventTimings;var a=!!y.config.enableCompoundKey;p=(d=n).diagLog();var l=r.valueSanitizer,g=r.stringifyObjects;(0,c.o8)(r.enableCompoundKey)||(a=!!r.enableCompoundKey),D=r.xhrTimeout,F=!!r.disableXhrSync,E=!!r.disableFetchKeepAlive,M=!1!==r.addNoResponse,Z=!(0,u.b$)(),rt=new q(y,l,g,a),(0,c.le)(r.useSendBeacon)||(Z=!!r.useSendBeacon);var v=i,m=r.alwaysUseXhrOverride?i:null,b=r.alwaysUseXhrOverride?i:null,x=[3,2];if(!i){et=!1;var w=(0,u.k$)();w&&w.protocol&&"file:"===w.protocol.toLowerCase()&&(o=!1);var $=[];(0,u.b$)()?($=[2,1],x=[2,1,3]):$=[1,2,3],(i=R($=tt($,r.transports),!1))||(0,h.jV)(p,"No available transport to send events"),v=R($,!0)}m||(m=R(x=tt(x,r.unloadTransports),!0)),B=!et&&(Z&&(0,u.MF)()||!E&&(0,u.JO)(!0)),(s={})[0]=i,s[1]=v||R([1,2,3],!0),s[2]=m||v||R([1],!0),s[3]=b||R([2,3],!0)||v||R([1],!0),f=s},t._getDbgPlgTargets=function(){return[f[0],N,rt,f]},t.addQueryStringParameter=function(t,e){for(var n=0;n<nt.length;n++)if(nt[n].name===t)return void(nt[n].value=e);nt.push({name:t,value:e})},t.addHeader=function(t,e){it[t]=e},t.canSendRequest=function(){return gt()&&U.allowRequestSending()},t.sendQueuedRequests=function(t,e){(0,c.o8)(t)&&(t=0),at&&(t=ft(t),e=2),mt(ot,t,0)&&yt(vt(),0,!1,t,e||0)},t.isCompletelyIdle=function(){return!V&&0===Q&&0===ot.length},t.setUnloading=function(t){at=t},t.addBatch=function(t){if(t&&t.count()>0){if(N.isTenantKilled(t.iKey()))return!1;ot.push(t)}return!0},t.teardown=function(){ot.length>0&&yt(vt(),0,!0,2,2)},t.pause=function(){V=!0},t.resume=function(){V=!1,t.sendQueuedRequests(0,4)},t.sendSynchronousBatch=function(t,e,n){t&&t.count()>0&&((0,c.le)(e)&&(e=1),at&&(e=ft(e),n=2),yt([t],0,!1,e,n||0))}}))}return t.__ieDyn=1,t}();function nt(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];return setTimeout(t,e,n)}function it(t){clearTimeout(t)}function ot(t,e){return{set:t||nt,clear:e||it}}var rt="eventsDiscarded",st=function(t){function e(){var n,i=t.call(this)||this;i.identifier="PostChannel",i.priority=1011,i.version="3.2.8";var p,g,v,m,b,y,x,w=!1,$=[],C=null,k=!1,S=0,T=500,L=0,O=1e4,I={},A=f,D=null,F=null,E=0,R=0,j={},P=-1,M=!0,z=!1,N=6,V=2;return(0,o.Z)(e,i,(function(t,e){function i(t){"beforeunload"!==(t||(0,u.Jj)().event).type&&(z=!0,g.setUnloading(z)),X(2,2)}function o(t){z=!1,g.setUnloading(z)}function q(t,e){if(t.sendAttempt||(t.sendAttempt=0),t.latency||(t.latency=1),t.ext&&t.ext.trace&&delete t.ext.trace,t.ext&&t.ext.user&&t.ext.user.id&&delete t.ext.user.id,M&&(l.if,t.ext=(0,c.Ax)(t.ext),t.baseData&&(t.baseData=(0,c.Ax)(t.baseData)),t.data&&(t.data=(0,c.Ax)(t.data))),t.sync)if(E||k)t.latency=3,t.sync=!1;else if(g)return M&&(t=(0,c.Ax)(t)),void g.sendSynchronousBatch(B.create(t.iKey,[t]),!0===t.sync?1:t.sync,3);var n=t.latency,i=L,o=O;4===n&&(i=S,o=T);var r=!1;if(i<o)r=!tt(t,e);else{var s=1,a=20;4===n&&(s=4,a=1),r=!0,function(t,e,n,i){for(;n<=e;){var o=J(t,e,!0);if(o&&o.count()>0){var r=o.split(0,i),s=r.count();if(s>0)return 4===n?S-=s:L-=s,ht(rt,[r],d.QueueFull),!0}n++}return nt(),!1}(t.iKey,t.latency,s,a)&&(r=!tt(t,e))}r&&dt(rt,[t],d.QueueFull)}function U(t,e,n){var i=it(t,e,n);return g.sendQueuedRequests(e,n),i}function W(){return L>0}function G(){if(P>=0&&it(P,0,b)&&g.sendQueuedRequests(0,b),S>0&&!F&&!k){var t=I[A][2];t>=0&&(F=K((function(){F=null,U(4,0,1),G()}),t))}var e=I[A][1];!D&&!C&&e>=0&&!k&&(W()?D=K((function(){D=null,U(0===R?3:1,0,1),R++,R%=2,G()}),e):R=0)}function Z(){n=null,w=!1,$=[],C=null,k=!1,S=0,T=500,L=0,O=1e4,I={},A=f,D=null,F=null,E=0,R=0,p=null,j={},v=void 0,m=0,P=-1,b=null,M=!0,z=!1,N=6,V=2,y=null,x=ot(),g=new et(500,2,1,{requeue:ct,send:pt,sent:ft,drop:gt,rspFail:vt,oth:mt},x),lt(),j[4]={batches:[],iKeyMap:{}},j[3]={batches:[],iKeyMap:{}},j[2]={batches:[],iKeyMap:{}},j[1]={batches:[],iKeyMap:{}},bt()}function K(t,e){0===e&&E&&(e=1);var n=1e3;return E&&(n=_(E-1)),x.set(t,e*n)}function Q(){return null!==D&&(x.clear(D),D=null,R=0,!0)}function X(t,e){Q(),C&&(x.clear(C),C=null),k||U(1,t,e)}function J(t,e,n){var i=j[e];i||(i=j[e=1]);var o=i.iKeyMap[t];return!o&&n&&(o=B.create(t),i.batches.push(o),i.iKeyMap[t]=o),o}function Y(e,n){g.canSendRequest()&&!E&&(v>0&&L>v&&(n=!0),n&&null==C&&t.flush(e,null,20))}function tt(t,e){M&&(t=(0,c.Ax)(t));var n=t.latency,i=J(t.iKey,n,!0);return!!i.addEvent(t)&&(4!==n?(L++,e&&0===t.sendAttempt&&Y(!t.sync,m>0&&i.count()>=m)):S++,!0)}function nt(){for(var t=0,e=0,n=function(n){var i=j[n];i&&i.batches&&(0,c.tO)(i.batches,(function(i){4===n?t+=i.count():e+=i.count()}))},i=1;i<=4;i++)n(i);L=e,S=t}function it(e,n,i){var o=!1,s=0===n;return!s||g.canSendRequest()?(0,r.Lm)(t.core,(function(){return"PostChannel._queueBatches"}),(function(){for(var t=[],n=4;n>=e;){var i=j[n];i&&i.batches&&i.batches.length>0&&((0,c.tO)(i.batches,(function(e){g.addBatch(e)?o=o||e&&e.count()>0:t=t.concat(e.events()),4===n?S-=e.count():L-=e.count()})),i.batches=[],i.iKeyMap={}),n--}t.length>0&&dt(rt,t,d.KillSwitch),o&&P>=e&&(P=-1,b=0)}),(function(){return{latency:e,sendType:n,sendReason:i}}),!s):(P=P>=0?Math.min(P,e):e,b=Math.max(b,i)),o}function st(t,e){U(1,0,e),nt(),at((function(){t&&t(),$.length>0?C=K((function(){C=null,st($.shift(),e)}),0):(C=null,G())}))}function at(t){g.isCompletelyIdle()?t():C=K((function(){C=null,at(t)}),.25)}function lt(){(I={}).REAL_TIME=[2,1,0],I.NEAR_REAL_TIME=[6,3,0],I.BEST_EFFORT=[18,9,0]}function ct(e,n){var i=[],o=N;z&&(o=V),(0,c.tO)(e,(function(e){e&&e.count()>0&&(0,c.tO)(e.events(),(function(e){e&&(e.sync&&(e.latency=4,e.sync=!1),e.sendAttempt<o?((0,l.if)(e,t.identifier),q(e,!1)):i.push(e))}))})),i.length>0&&dt(rt,i,d.NonRetryableStatus),z&&X(2,2)}function ut(e,n){var i=t._notificationManager||{},o=i[e];if(o)try{o.apply(i,n)}catch(n){(0,h.kP)(t.diagLog(),1,74,e+" notification failed: "+n)}}function dt(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];e&&e.length>0&&ut(t,[e].concat(n))}function ht(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];e&&e.length>0&&(0,c.tO)(e,(function(e){e&&e.count()>0&&ut(t,[e.events()].concat(n))}))}function pt(t,e,n){t&&t.length>0&&ut("eventsSendRequest",[e>=1e3&&e<=1999?e-1e3:0,!0!==n])}function ft(t,e){ht("eventsSent",t,e),G()}function gt(t,e){ht(rt,t,e>=8e3&&e<=8999?e-8e3:d.Unknown)}function vt(t){ht(rt,t,d.NonRetryableStatus),G()}function mt(t,e){ht(rt,t,d.Unknown),G()}function bt(){m=n&&n.disableAutoBatchFlushLimit?0:Math.max(1500,O/6)}Z(),t._getDbgPlgTargets=function(){return[g]},t.initialize=function(u,d,h){(0,r.Lm)(d,(function(){return"PostChannel:initialize"}),(function(){var r=d;e.initialize(u,d,h);try{d.addUnloadCb;y=(0,s.jU)((0,a.J)(t.identifier),d.evtNamespace&&d.evtNamespace());var f=t._getTelCtx();u.extensionConfig[t.identifier]=u.extensionConfig[t.identifier]||{},n=f.getExtCfg(t.identifier),x=ot(n.setTimeoutOverride,n.clearTimeoutOverride),M=!n.disableOptimizeObj&&(0,l.mJ)(),function(t){var e=t.getWParam;t.getWParam=function(){var t=0;return n.ignoreMc1Ms0CookieProcessing&&(t|=2),t|e()}}(r),n.eventsLimitInMem>0&&(O=n.eventsLimitInMem),n.immediateEventLimit>0&&(T=n.immediateEventLimit),n.autoFlushEventsLimit>0&&(v=n.autoFlushEventsLimit),(0,c.hj)(n.maxEventRetryAttempts)&&(N=n.maxEventRetryAttempts),(0,c.hj)(n.maxUnloadEventRetryAttempts)&&(V=n.maxUnloadEventRetryAttempts),bt(),n.httpXHROverride&&n.httpXHROverride.sendPOST&&(p=n.httpXHROverride),(0,l.Sn)(u.anonCookieName)&&g.addQueryStringParameter("anoncknm",u.anonCookieName),g.sendHook=n.payloadPreprocessor,g.sendListener=n.payloadListener;var m=n.overrideEndpointUrl?n.overrideEndpointUrl:u.endpointUrl;t._notificationManager=d.getNotifyMgr(),g.initialize(m,t.core,t,p,n);var b=u.disablePageUnloadEvents||[];(0,s.c9)(i,b,y),(0,s.TJ)(i,b,y),(0,s.nD)(o,u.disablePageShowEvents,y)}catch(e){throw t.setInitialized(!1),e}}),(function(){return{coreConfig:u,core:d,extensions:h}}))},t.processTelemetry=function(e,i){(0,l.if)(e,t.identifier);var o=(i=t._getTelCtx(i)).getExtCfg(t.identifier),r=!!n.disableTelemetry;o&&(r=r||!!o.disableTelemetry);var s=e;r||w||(n.overrideInstrumentationKey&&(s.iKey=n.overrideInstrumentationKey),o&&o.overrideInstrumentationKey&&(s.iKey=o.overrideInstrumentationKey),q(s,!0),z?X(2,2):G()),t.processNext(s,i)},t._doTeardown=function(t,e){X(2,2),w=!0,g.teardown(),(0,s.JA)(null,y),(0,s.C9)(null,y),(0,s.Yl)(null,y),Z()},t.setEventQueueLimits=function(t,e){O=t>0?t:1e4,v=e>0?e:0,bt();var n=L>t;if(!n&&m>0)for(var i=1;!n&&i<=3;i++){var o=j[i];o&&o.batches&&(0,c.tO)(o.batches,(function(t){t&&t.count()>=m&&(n=!0)}))}Y(!0,n)},t.pause=function(){Q(),k=!0,g.pause()},t.resume=function(){k=!1,g.resume(),G()},t.addResponseHandler=function(t){g._responseHandlers.push(t)},t._loadTransmitProfiles=function(t){Q(),lt(),A=f,G(),(0,c.rW)(t,(function(t,e){var n=e.length;if(n>=2){var i=n>2?e[2]:0;if(e.splice(0,n-2),e[1]<0&&(e[0]=-1),e[1]>0&&e[0]>0){var o=e[0]/e[1];e[0]=Math.ceil(o)*e[1]}i>=0&&e[1]>=0&&i>e[1]&&(i=e[1]),e.push(i),I[t]=e}}))},t.flush=function(t,e,n){if(void 0===t&&(t=!0),!k)if(n=n||1,t)null==C?(Q(),it(1,0,n),C=K((function(){C=null,st(e,n)}),0)):$.push(e);else{var i=Q();U(1,1,n),null!=e&&e(),i&&G()}},t.setMsaAuthTicket=function(t){g.addHeader(H,t)},t.hasEvents=W,t._setTransmitProfile=function(t){A!==t&&void 0!==I[t]&&(Q(),A=t,G())},t._backOffTransmission=function(){E<4&&(E++,Q(),G())},t._clearBackOff=function(){E&&(E=0,Q(),G())},(0,c.l_)(t,"_setTimeoutOverride",(function(){return x.set}),(function(t){x=ot(t,x.clear)})),(0,c.l_)(t,"_clearTimeoutOverride",(function(){return x.clear}),(function(t){x=ot(x.set,t)}))})),i}return(0,i.ne)(e,t),e.__ieDyn=1,e}(p.i),at=st},14590:function(t,e,n){"use strict";n.d(e,{Z:function(){return Pt}});var i=n(45362),o=n(23806),r=n(91254),s=n(74539),a=n(27981),l=n(21908),c=(l.RJ,l.Pw.freeze),u=(l.Pw.seal,l.Pw.keys,String[l.hB]),d=(u.trim,u.endsWith,u.startsWith,Date[l.hB].toISOString,Array.isArray),h=l.V4.toString,p=l.CY.toString;p.call(l.Pw),Object.getPrototypeOf;function f(t){return!(!t||typeof t!==l.fK)}function g(t,e){if(t)for(var n in t)l.CY.call(t,n)&&e.call(t,n,t[n])}var v=d||function(t){return!(!t||"[object Array]"!==h.call(t))};({toString:null}).propertyIsEnumerable("toString");function m(t){return t}var b=c||m;function y(t){var e,n={};return g(t,(function(t,e){n[t]=e[1],n[e[0]]=e[1]})),e=n,c&&g(e,(function(t,e){(v(e)||f(e))&&c(e)})),b(e)}var x,w="locale",$="ver",C="name",k=y({UserExt:[0,"user"],DeviceExt:[1,"device"],TraceExt:[2,"trace"],WebExt:[3,"web"],AppExt:[4,"app"],OSExt:[5,"os"],SdkExt:[6,"sdk"],IntWebExt:[7,"intweb"],UtcExt:[8,"utc"],LocExt:[9,"loc"],CloudExt:[10,"cloud"],DtExt:[11,"dt"]}),S=y({id:[0,"id"],ver:[1,$],appName:[2,C],locale:[3,w],expId:[4,"expId"],env:[5,"env"]}),T=y({domain:[0,"domain"],browser:[1,"browser"],browserVer:[2,"browserVer"],screenRes:[3,"screenRes"],userConsent:[4,"userConsent"],consentDetails:[5,"consentDetails"]}),L=y({locale:[0,w],localId:[1,"localId"],id:[2,"id"]}),O=y({osName:[0,C],ver:[1,$]}),I=y({ver:[0,$],seq:[1,"seq"],installId:[2,"installId"],epoch:[3,"epoch"]}),A=y({msfpc:[0,"msfpc"],anid:[1,"anid"],serviceName:[2,"serviceName"]}),H=y({popSample:[0,"popSample"],eventFlags:[1,"eventFlags"]}),D=y({tz:[0,"tz"]}),F=y({sessionId:[0,"sesId"]}),E=y({localId:[0,"localId"],deviceClass:[1,"deviceClass"],make:[2,"make"],model:[3,"model"]}),B=y({role:[0,"role"],roleInstance:[1,"roleInstance"],roleVer:[2,"roleVer"]}),R=y({traceId:[0,"traceID"],traceName:[1,C],parentId:[2,"parentID"]}),j=y({traceId:[0,"traceId"],spanId:[1,"spanId"],traceFlags:[2,"traceFlags"]}),P=n(54480),_=n(80221),M=n(85282),z=n(42774),N=n(26454);function V(){return void 0===x&&(x=!!U(0)),x}function q(){return V()?U(0):null}function U(t){var e,n,i=null;try{var o=(0,N.Rd)();if(!o)return null;n=new Date,(i=0===t?o.localStorage:o.sessionStorage)&&(0,s.mf)(i.setItem)&&(i.setItem(n,n),e=i.getItem(n)!==n,i.removeItem(n),e&&(i=null))}catch(t){i=null}return i}function W(){return this.getId()}function G(t){this.setId(t)}var Z=function(){function t(){(0,o.Z)(t,this,(function(t){t.setId=function(e){t.customId=e},t.getId=function(){return(0,s.HD)(t.customId)?t.customId:t.automaticId}}))}return t._staticInit=void(0,s.l_)(t.prototype,"id",W,G),t}(),K="ai_session",Q=function(){function t(e,n){var i,a,l=(0,_.vH)(e),c=(0,M.JP)(e);(0,o.Z)(t,this,(function(e){var o,u={sessionRenewalMs:(o=n).sessionRenewalMs&&function(){return o.sessionRenewalMs},sessionExpirationMs:o.sessionExpirationMs&&function(){return o.sessionExpirationMs},cookieDomain:o.cookieDomain&&function(){return o.cookieDomain},namePrefix:o.namePrefix&&function(){return o.namePrefix},sessionAsGuid:function(){return o.sessionAsGuid},idLength:function(){return o.idLength?o.idLength:22}};function d(t){var n=e.automaticSession,i=t.split("|");i.length>0&&n.setId(i[0]);try{if(i.length>1){var o=+i[1];n.acquisitionDate=+new Date(o),n.acquisitionDate=n.acquisitionDate>0?n.acquisitionDate:0}if(i.length>2){var r=+i[2];n.renewalDate=+new Date(r),n.renewalDate=n.renewalDate>0?n.renewalDate:0}}catch(t){(0,_.kP)(l,1,510,"Error parsing ai_session cookie, session will be reset: "+t)}0===n.renewalDate&&(0,_.kP)(l,2,517,"AI session renewal date is 0, session will be reset.")}function h(){var t=e.automaticSession,n=(new Date).getTime(),i=e.config.sessionAsGuid();!(0,s.o8)(i)&&i?(0,s.jn)(i)?t.setId((0,r.cm)()):t.setId((0,r.cm)(i)):t.setId((0,z.pZ)(u&&u.idLength?u.idLength():22)),t.acquisitionDate=n,t.renewalDate=n,p(t.getId(),t.acquisitionDate,t.renewalDate),V()||(0,_.kP)(l,2,505,"Browser does not support local storage. Session durations will be inaccurate.")}function p(t,n,o){var r=n+e.config.sessionExpirationMs(),s=o+e.config.sessionRenewalMs(),l=new Date,u=[t,n,o];r<s?l.setTime(r):l.setTime(s);var d=e.config.cookieDomain?e.config.cookieDomain():null;c.set(a(),u.join("|")+";expires="+l.toUTCString(),null,d),i=(new Date).getTime()}(0,s.mf)(n.sessionExpirationMs)||(u.sessionExpirationMs=function(){return t.acquisitionSpan}),(0,s.mf)(n.sessionRenewalMs)||(u.sessionRenewalMs=function(){return t.renewalSpan}),e.config=u,a=function(){return e.config.namePrefix&&e.config.namePrefix()?K+e.config.namePrefix():K},e.automaticSession=new Z,e.update=function(){e.automaticSession.getId()||function(){var t=c.get(a());if(t&&(0,s.mf)(t.split))d(t);else{var n=function(t,e){var n=q();if(null!==n)try{return n.getItem(e)}catch(e){x=!1,(0,_.kP)(t,1,503,"Browser failed read of local storage. "+e)}return null}(l,a());n&&d(n)}e.automaticSession.getId()||h()}();var n=e.automaticSession,o=e.config,r=(new Date).getTime(),u=r-n.acquisitionDate>o.sessionExpirationMs(),f=r-n.renewalDate>o.sessionRenewalMs();if(u||f)h();else{(!i||r-i>t.cookieUpdateInterval)&&(n.renewalDate=r,p(n.getId(),n.acquisitionDate,n.renewalDate))}},e.backup=function(){var t,n,i,o=e.automaticSession;t=o.getId(),n=o.acquisitionDate,i=o.renewalDate,function(t,e,n){var i=q();if(null!==i)try{i.setItem(e,n)}catch(e){x=!1,(0,_.kP)(t,1,504,"Browser failed write to local storage. "+e)}}(l,a(),[t,n,i].join("|"))}}))}return t.acquisitionSpan=864e5,t.renewalSpan=18e5,t.cookieUpdateInterval=6e4,t}(),X=n(60851),J=["AX","EX","SF","CS","CF","CT","CU","DC","DF","H5","HL","WS","WP"];function Y(t,e){void 0===e&&(e=J);var n=null;if(t)for(var i=t.split(","),o=0;o<i.length;o++)tt(i[o],e)&&(n?n+=","+i[o]:n=i[o]);return n}function tt(t,e){if(void 0===e&&(e=J),!t||t.length<4)return!1;for(var n=!1,i=t.substring(0,3).toString().toUpperCase(),o=0;o<e.length;o++)if(e[o]+":"===i&&t.length<=256){n=!0;break}return n}function et(){return this.getExpId()}var nt=function(){function t(e,n){var i=null,s=J.slice(0),a="Treatments",l=(0,M.JP)(n),c=e;(0,o.Z)(t,this,(function(t){if((0,X.Nv)()){var n=(0,X.Me)().documentElement;n&&(t.locale=n.lang)}function o(t){t!==i&&(i=Y(t,s))}t.env=e.env?e.env:function(t){var e,n={},i=(0,X.Me)();if(i){e=i&&i.querySelectorAll("meta");for(var o=0;o<e.length;o++){var r=e[o];if(r.name)if(0===r.name.toLowerCase().indexOf(t)){var s=r.name.replace(t,"");n[s]=r.content}}}return n}("awa-").env,t.getExpId=function(){return c.expId?(o(c.expId),i):(o((0,r.Do)(l,a)),i)}}))}return t.validateAppExpId=Y,t._staticInit=void(0,s.l_)(t.prototype,"expId",et),t}(),it=function(){},ot=function(){};function rt(){return this.getMsfpc()}function st(){return this.getAnid()}var at=function(){function t(e,n){var i=(0,M.JP)(n);(0,o.Z)(t,this,(function(t){e.serviceName&&(t.serviceName=e.serviceName),t.getMsfpc=function(){return(0,r.Do)(i,"MSFPC")},t.getAnid=function(){return(0,r.Do)(i,"ANON").slice(0,34)}}))}var e;return t._staticInit=(e=t.prototype,(0,s.l_)(e,"msfpc",rt),void(0,s.l_)(e,"anid",st)),t}(),lt=function(){var t=(new Date).getTimezoneOffset(),e=t%60,n=(t-e)/60,i="+";n>0&&(i="-"),n=Math.abs(n),e=Math.abs(e),this.tz=i+(n<10?"0"+n:n.toString())+":"+(e<10?"0"+e:e.toString())},ct={WIN:/(windows|win32)/i,WINRT:/ arm;/i,WINPHONE:/windows\sphone\s\d+\.\d+/i,OSX:/(macintosh|mac os x)/i,IOS:/(ipad|iphone|ipod)(?=.*like mac os x)/i,LINUX:/(linux|joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)/i,ANDROID:/android/i,CROS:/CrOS/i},ut={5.1:"XP","6.0":"Vista",6.1:"7",6.2:"8",6.3:"8.1","10.0":"10"},dt="Unknown",ht=[{r:ct.WINPHONE,os:"Windows Phone"},{r:ct.WINRT,os:"Windows RT"},{r:ct.WIN,os:"Windows"},{r:ct.IOS,os:"iOS"},{r:ct.ANDROID,os:"Android"},{r:ct.LINUX,os:"Linux"},{r:ct.CROS,os:"Chrome OS"},{s:"x11",os:"Unix"},{s:"blackberry",os:"BlackBerry"},{s:"symbian",os:"Symbian"},{s:"nokia",os:"Nokia"},{r:ct.OSX,os:"Mac OS X"}];function pt(t,e){return"Windows"===e?ft(t,"Windows NT"):"Android"===e?ft(t,e):"Mac OS X"===e?function(t){var e=t.match(new RegExp("Mac OS X ([\\d,_,.]+)"));if(e){var n=e[1].replace(/_/g,".");if(n){var i=gt(n);return i?n.split(i)[0]:n}}return dt}(t):"iOS"===e?function(t){var e=t.match(new RegExp("OS ([\\d,_,.]+)"));if(e){var n=e[1].replace(/_/g,".");if(n){var i=gt(n);return i?n.split(i)[0]:n}}return dt}(t):dt}function ft(t,e){var n=t.match(new RegExp(e+" ([\\d,.]+)"));return n?ut[n[1]]?ut[n[1]]:n[1]:dt}function gt(t){return t.indexOf(".")>-1?".":t.indexOf("_")>-1?"_":null}var vt=function(t){if(t.populateOperatingSystemInfo){var e=this,n=(0,X.jW)()||{},i=t.userAgent||n.userAgent||"",o=t.userAgentData||n.userAgentData||{};if(i){var r=function(t){for(var e=0;e<ht.length;e++){var n=ht[e];if(n.r&&t.match(n.r))return n.os;if(n.s&&-1!==t.indexOf(n.s))return n.os}return dt}(i.toLowerCase());e.name=r,e.ver=pt(i,r)}e.name&&e.name!==dt||!(0,s.HD)(o.platform)||(e.name=o.platform)}},mt=n(39860),bt="MicrosoftApplicationsTelemetryDeviceId";var yt=function(){function t(e,n){var i=0;(0,o.Z)(t,this,(function(t){var o=e.propertyStorageOverride;t.seq=i,t.epoch=(0,z._l)(!1).toString();var s=(0,M.JP)(n,e);if(s.isEnabled()||o){var a=function(t,e,n){return e?e.getProperty(n)||"":(0,r.Do)(t,n)}(s,o,bt);a||(a=(0,mt.GW)()),function(t,e,n,i){e?e.setProperty(n,i):t.set(n,i,31536e3)}(s,o,bt,a),t.installId=a}else s.purge(bt);t.getSequenceId=function(){return++i}}))}return t.__ieDyn=1,t}(),xt=function(t,e,n,i){var o=this;if(o.traceId=e||(0,mt.DO)(),t.enableDistributedTracing&&!n&&(n=(0,mt.DO)().substring(0,16)),o.parentId=n,t.enableApplicationInsightsTrace){o.name=i;var r=(0,X.k$)();r&&r.pathname&&(o.name=r.pathname)}};function wt(){return this.getLocalId()}function $t(t){this.setLocalId(t)}var Ct=function(){function t(e,n,i){var a,l=n,c=(0,M.JP)(i,e);(0,o.Z)(t,this,(function(n){if(c&&c.isEnabled()&&(f(),l.enableApplicationInsightsUser)){var i=(0,r.Do)(c,t.userCookieName);if(i){var o=i.split(t.cookieSeparator);o.length>0&&(n.id=o[0])}if(!n.id){n.id=(0,z.pZ)(e&&!(0,s.o8)(e.idLength)?e.idLength:22);var u=(0,s.Y6)(new Date);n.accountAcquisitionDate=u;var d=[n.id,u],h=l.cookieDomain?l.cookieDomain:void 0;c.set(t.userCookieName,d.join(t.cookieSeparator),31536e3,h)}}if("undefined"!=typeof navigator){var p=navigator;n.locale=p.userLanguage||p.language}function f(){if(!l.hashIdentifiers&&!l.dropIdentifiers){var t=(0,r.Do)(c,"MUID");t&&(a="t:"+t)}return a}n.getLocalId=function(){return a||f()},n.setLocalId=function(t){a=t}}))}return t.cookieSeparator="|",t.userCookieName="ai_user",t._staticInit=void(0,s.l_)(t.prototype,"localId",wt,$t),t}(),kt=function(t){var e=this;e.popSample=100,e.eventFlags=0,t.hashIdentifiers&&(e.eventFlags=1048576|e.eventFlags),t.dropIdentifiers&&(e.eventFlags=2097152|e.eventFlags)},St="([\\d,.]+)",Tt="Unknown",Lt="Edg/",Ot=[{ua:"OPR/",b:"Opera"},{ua:"PhantomJS",b:"PhantomJS"},{ua:"Edge",b:"Edge"},{ua:Lt,b:"Edge"},{ua:"Electron",b:"Electron"},{ua:"Chrome",b:"Chrome"},{ua:"Trident",b:"MSIE"},{ua:"MSIE ",b:"MSIE"},{ua:"Firefox",b:"Firefox"},{ua:"Safari",b:"Safari"},{ua:"SkypeShell",b:"SkypeShell"}],It=[{br:"Microsoft Edge",b:"Edge"},{br:"Google Chrome",b:"Chrome"},{br:"Opera",b:"Opera"}];function At(t,e){return e.indexOf(t)>-1}function Ht(t,e){for(var n=0;n<e.length;n++)if(t==e[n].brand)return e[n].version;return null}function Dt(t,e){return"MSIE"===e?function(t){var e=t.match(new RegExp("MSIE ([\\d,.]+)"));if(e)return e[1];var n=t.match(new RegExp("rv:([\\d,.]+)"));if(n)return n[1]}(t):function(t,e){"Safari"===t?t="Version":"Edge"===t&&At(Lt,e)&&(t="Edg");var n=e.match(new RegExp(t+"/"+St));if(n)return n[1];if("Opera"===t&&(n=e.match(new RegExp("OPR/([\\d,.]+)"))))return n[1];return Tt}(e,t)}function Ft(){return this.getUserConsent()}var Et=function(){function t(e,n){var i=(0,M.JP)(n),a=e||{};(0,o.Z)(t,this,(function(t){var e=(0,X.k$)();if(e){var n=e.hostname;n&&(t.domain="file:"===e.protocol?"local":n)}if(a.populateBrowserInfo){var o=a.userAgent,l=(a.userAgentData||{}).brands,c=(0,X.jW)();c&&(o=o||c.userAgent||"",l=l||(c.userAgentData||{}).brands),function(e,n){if((0,s.kJ)(n))try{for(var i=0;i<It.length;i++){var o=Ht(It[i].br,n);if(o)return t.browser=It[i].b,void(t.browserVer=o)}}catch(t){}if(e){var r=function(t){if(t)for(var e=0;e<Ot.length;e++)if(At(Ot[e].ua,t))return Ot[e].b;return Tt}(e);t.browser=r,t.browserVer=Dt(e,r)}}(o,l);var u=function(){var t={h:0,w:0},e=(0,X.Jj)();return e&&e.screen&&(t.h=screen.height,t.w=screen.width),t}();t.screenRes=u.w+"X"+u.h}t.getUserConsent=function(){return a.userConsented||!!(0,r.Do)(i,a.userConsentCookieName||"MSCC")},t.getUserConsentDetails=function(){try{var t=a.callback;if(t&&t.userConsentDetails){var e=t.userConsentDetails();if(e)return JSON.stringify({Required:e.Required||!1,Analytics:e.Analytics||!1,SocialMedia:e.SocialMedia||!1,Advertising:e.Advertising||!1})}}catch(t){}return null},(0,s.l_)(t,"userConsent",t.getUserConsent)}))}return t._staticInit=void(0,s.l_)(t.prototype,"userConsent",Ft),t}();function Bt(t,e,n,i,o){var r=e.ext[k[t]];return r&&(0,s.rW)(i,(function(t,e){if((0,s.HD)(e)||(0,s.hj)(e)||(0,s.jn)(e)){var i=r[n[t]];!o&&(i||(0,s.HD)(i)||(0,s.hj)(i)||(0,s.jn)(i))&&(e=i),r[n[t]]=e}})),r}var Rt=function(){function t(e,n,i){(0,o.Z)(t,this,(function(t){t.app=new nt(n,i),t.cloud=new it,t.user=new Ct(e,n,i),t.os=new vt(n),t.web=new Et(n,i);var o=new yt(e,i),r=new at(n,i),a=new kt(n);t.loc=new lt,t.device=new ot;var l=new Q(i,n);t.session=new Z;var c,u,d,h=(c=new xt(n),u=g(),d=c||{},{getName:function(){return d.name},setName:function(t){u&&u.setName(t),d.name=t},getTraceId:function(){return d.traceId},setTraceId:function(t){u&&u.setTraceId(t),(0,P.jN)(t)&&(d.traceId=t)},getSpanId:function(){return d.parentId},setSpanId:function(t){u&&u.setSpanId(t),(0,P.Lc)(t)&&(d.parentId=t)},getTraceFlags:function(){return d.traceFlags},setTraceFlags:function(t){u&&u.setTraceFlags(t),d.traceFlags=t}}),p=!(n||{}).eventContainExtFields;function f(){var e=t.session;if(e&&(0,s.HD)(e.customId))return e.customId;l.update();var n=l.automaticSession;if(n){var i=n.getId();i&&(0,s.HD)(i)&&(e.automaticId=i)}return e.automaticId}function g(){var t=h;return i&&i.getTraceCtx&&(t=i.getTraceCtx(!1)||h),t}t.getTraceCtx=function(){return h},t.getSessionId=f,t.applyApplicationContext=function(e){var n,i=t.app;Bt(4,e,S,((n={})[0]=i.id,n[1]=i.ver,n[2]=i.name,n[3]=i.locale,n[4]=i.getExpId(),n[5]=i.env,n),p)},t.applyUserContext=function(e){var n,i=t.user;Bt(0,e,L,((n={})[1]=i.getLocalId(),n[0]=i.locale,n[2]=i.id,n),p)},t.applyWebContext=function(e){var n,i=t.web;Bt(3,e,T,((n={})[0]=i.domain,n[1]=i.browser,n[2]=i.browserVer,n[3]=i.screenRes,n[5]=i.getUserConsentDetails(),n[4]=i.getUserConsent(),n),p)},t.applyOsContext=function(e){var n,i=t.os;Bt(5,e,O,((n={})[0]=i.name,n[1]=i.ver,n),p)},t.applySdkContext=function(t){var e;Bt(6,t,I,((e={})[2]=o.installId,e[1]=o.getSequenceId(),e[3]=o.epoch,e),p)},t.applyIntWebContext=function(t){var e;Bt(7,t,A,((e={})[0]=r.getMsfpc(),e[1]=r.getAnid(),e[2]=r.serviceName,e),p)},t.applyUtcContext=function(t){var e,n=((e={})[0]=a.popSample,e);a.eventFlags>0&&(n[1]=a.eventFlags),Bt(8,t,H,n,p)},t.applyLocContext=function(e){var n;Bt(9,e,D,((n={})[0]=t.loc.tz,n),p)},t.applySessionContext=function(t){var e;Bt(4,t,F,((e={})[0]=f(),e),p)},t.applyDeviceContext=function(e){var n,i=t.device;Bt(1,e,E,((n={})[0]=i.localId,n[2]=i.make,n[3]=i.model,n[1]=i.deviceClass,n),p)},t.applyCloudContext=function(e){var n,i=t.cloud;Bt(10,e,B,((n={})[0]=i.role,n[1]=i.roleInstance,n[2]=i.roleVer,n),p)},t.applyAITraceContext=function(t){var e;if(n.enableApplicationInsightsTrace){var i=g();i&&Bt(2,t,R,((e={})[0]=i.getTraceId(),e[1]=i.getName(),e[2]=i.getSpanId(),e),!1)}},t.applyDistributedTraceContext=function(t){var e,n=g();if(n){var i=((e={})[0]=n.getTraceId(),e[1]=n.getSpanId(),e),o=n.getTraceFlags();(0,s.le)(o)||(i[2]=o),Bt(11,t,j,i,!1)}}}))}return t.__ieDyn=1,t}();var jt=[k[4],k[0],k[3],k[5],k[6],k[7],k[8],k[9],k[1],k[2],k[11],k[10]],Pt=function(t){function e(){var n,i,a,l=t.call(this)||this;return l.identifier="SystemPropertiesCollector",l.priority=3,l.version="3.2.8",(0,o.Z)(e,l,(function(t,e){function o(){n=null,i={}}o(),t.initialize=function(i,o,r){e.initialize(i,o,r),a=t._getTelCtx().getExtCfg(t.identifier),n=new Rt(i,a,o),o&&o.setTraceCtx&&o.setTraceCtx(n.getTraceCtx())},t.processTelemetry=function(e,o){(0,r.if)(e,t.identifier),o=t._getTelCtx(o);var l,c,u=e.ext=e.ext?e.ext:{};e.data=e.data?e.data:{},(0,s.tO)(jt,(function(t){u[t]=u[t]||{}})),n&&(n.applyApplicationContext(e),n.applyUserContext(e),n.applyWebContext(e),n.applyOsContext(e),n.applySdkContext(e),n.applyIntWebContext(e),n.applyUtcContext(e),n.applyLocContext(e),n.applySessionContext(e),n.applyDeviceContext(e),a.enableApplicationInsightsTrace&&n.applyAITraceContext(e),a.enableDistributedTracing&&n.applyDistributedTraceContext(e),n.applyCloudContext(e)),(0,s.tO)((0,s.FY)(u),(function(t){0===(0,s.FY)(u[t]).length&&delete u[t]})),l=i,c=e.data,l&&(0,s.rW)(l,(function(t,e){c[t]||(c[t]=e)})),t.processNext(e,o)},t.getPropertiesContext=function(){return n},t.setProperty=function(t,e){i[t]=e},t._doTeardown=function(t,e){var i=(t||{}).core();if(i&&i.getTraceCtx&&n){var r=i.getTraceCtx(!1);r&&r===n.getTraceCtx()&&i.setTraceCtx(null)}o()}})),l}return(0,i.ne)(e,t),e.__ieDyn=1,e}(a.i)},21908:function(t,e,n){"use strict";n.d(e,{CY:function(){return p},Pw:function(){return l},RJ:function(){return h},V4:function(){return c},bO:function(){return a},cb:function(){return i},fK:function(){return o},hB:function(){return s},jA:function(){return r},rl:function(){return u},yu:function(){return d}});var i="function",o="object",r="undefined",s="prototype",a="hasOwnProperty",l=Object,c=l[s],u=l.assign,d=l.create,h=l.defineProperty,p=c[a]},26454:function(t,e,n){"use strict";n.d(e,{Rd:function(){return r},ZU:function(){return s},pu:function(){return a}});var i=n(21908),o=null;function r(t){void 0===t&&(t=!0);var e=!1===t?null:o;return e||(typeof globalThis!==i.jA&&(e=globalThis),e||typeof self===i.jA||(e=self),e||typeof window===i.jA||(e=window),e||typeof n.g===i.jA||(e=n.g),o=e),e}function s(t){throw new TypeError(t)}function a(t){var e=i.yu;if(e)return e(t);if(null==t)return{};var n=typeof t;function o(){}return n!==i.fK&&n!==i.cb&&s("Object prototype may only be an Object:"+t),o[i.hB]=t,new o}},45362:function(t,e,n){"use strict";n.d(e,{$h:function(){return l},ne:function(){return a},uc:function(){return r}});var i=n(21908),o=n(26454),r=(((0,o.Rd)()||{}).Symbol,((0,o.Rd)()||{}).Reflect,i.rl||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])i.V4[i.bO].call(e,r)&&(t[r]=e[r]);return t}),s=function(t,e){return s=i.Pw.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e[i.bO](n)&&(t[n]=e[n])},s(t,e)};function a(t,e){function n(){this.constructor=t}typeof e!==i.cb&&null!==e&&(0,o.ZU)("Class extends value "+String(e)+" is not a constructor or null"),s(t,e),t[i.hB]=null===e?(0,o.pu)(e):(n[i.hB]=e[i.hB],new n)}function l(t,e){for(var n=0,i=e.length,o=t.length;n<i;n++,o++)t[o]=e[n];return t}},23806:function(t,e,n){"use strict";var i;n.d(e,{Z:function(){return I}});var o="undefined",r="constructor",s="prototype",a="function",l="_dynClass",c="_unknown_",u="_dyn__proto__",d=Object,h=d.getPrototypeOf,p=d.getOwnPropertyNames;var f,g=(typeof globalThis!==o&&(f=globalThis),f||typeof self===o||(f=self),f||typeof window===o||(f=window),f||typeof n.g===o||(f=n.g),f||{}),v=g.__dynProto$Gbl||(g.__dynProto$Gbl={o:(i={},i.setInstFuncs=!0,i.useBaseInst=!0,i),n:1e3});function m(t,e){return t&&d.prototype.hasOwnProperty.call(t,e)}function b(t){return t&&(t===d.prototype||t===Array.prototype)}function y(t){return b(t)||t===Function.prototype}function x(t){var e;if(t){if(h)return h(t);var n=t.__proto__||t.prototype||(t.constructor?t.constructor.prototype:null);e=t._dyn__proto__||n,m(t,u)||(delete t._dynInstProto,e=t._dyn__proto__=t._dynInstProto||t._dyn__proto__,t._dynInstProto=n)}return e}function w(t,e){var n=[];if(p)n=p(t);else for(var i in t)"string"==typeof i&&m(t,i)&&n.push(i);if(n&&n.length>0)for(var o=0;o<n.length;o++)e(n[o])}function $(t,e,n){return e!==r&&typeof t[e]===a&&(n||m(t,e))}function C(t){throw new TypeError("DynamicProto: "+t)}function k(t,e){for(var n=t.length-1;n>=0;n--)if(t[n]===e)return!0;return!1}function S(t,e,n,i){var o=null;if(t&&m(n,l)){var r=t._dynInstFuncs||{};if((o=(r[n._dynClass]||{})[e])||C("Missing ["+e+"] "+a),!o._dynInstChk&&!1!==r._dynInstChk){for(var s=!m(t,e),c=x(t),u=[];s&&c&&!y(c)&&!k(u,c);){var d=c[e];if(d){s=d===i;break}u.push(c),c=x(c)}try{s&&(t[e]=o),o._dynInstChk=1}catch(t){r._dynInstChk=!1}}}return o}function T(t,e,n){var i=e[t];return i===n&&(i=x(e)[t]),typeof i!==a&&C("["+t+"] is not a "+a),i}function L(t,e,n,i,o){if(!b(t)){var r=n._dynInstFuncs=n._dynInstFuncs||{},s=r[e]=r[e]||{};!1!==r._dynInstChk&&(r._dynInstChk=!!o),w(n,(function(e){$(n,e,!1)&&n[e]!==i[e]&&(s[e]=n[e],delete n[e],(!m(t,e)||t[e]&&!t[e]._isDynProxy)&&(t[e]=function(t,e){var n=function(){return(S(this,e,t,n)||T(e,t,n)).apply(this,arguments)};return n._isDynProxy=1,n}(t,e)))}))}}function O(t,e){return m(t,s)?t.name||e||c:((t||{}).constructor||{}).name||e||c}function I(t,e,n,i){m(t,s)||C("theClass is an invalid class definition.");var o=t.prototype;(function(t,e){if(h){for(var n=[],i=x(e);i&&!y(i)&&!k(n,i);){if(i===t)return!0;n.push(i),i=x(i)}return!1}return!0})(o,e)||C("["+O(t)+"] not in hierarchy of ["+O(e)+"]");var r=null;m(o,l)?r=o._dynClass:(r="_dynCls$"+O(t,"_")+"$"+v.n,v.n++,o._dynClass=r);var a=I._dfOpts,c=!!a.useBaseInst;c&&i&&void 0!==i.useBaseInst&&(c=!!i.useBaseInst);var u=function(t){var e={};return w(t,(function(n){!e[n]&&$(t,n,!1)&&(e[n]=t[n])})),e}(e),d=function(t,e,n,i){function o(t,e,n){var o=e[n];if(o._isDynProxy&&i){var r=t._dynInstFuncs||{};!1!==r._dynInstChk&&(o=(r[e._dynClass]||{})[n]||o)}return function(){return o.apply(t,arguments)}}var r={};w(n,(function(t){r[t]=o(e,n,t)}));for(var s=x(t),a=[];s&&!y(s)&&!k(a,s);)w(s,(function(t){!r[t]&&$(s,t,!h)&&(r[t]=o(e,s,t))})),a.push(s),s=x(s);return r}(o,e,u,c);n(e,d);var p=!!h&&!!a.setInstFuncs;p&&i&&(p=!!i.setInstFuncs),L(o,r,e,u,!1!==p)}I._dfOpts=v.o},92531:function(t,e,n){"use strict";var i;n.d(e,{DO:function(){return l},ZP:function(){return c}}),function(t){t.ltr="ltr",t.rtl="rtl"}(i||(i={}));var o=n(2619),r=n(11162);const s={steps:94,clipLight:0,clipDark:0},a=(Object.assign({},s),Object.assign(Object.assign({},s),{baseColor:(0,r.in)("#0078D4")}),{backgroundColor:"#FFFFFF",contrast:0,density:0,designUnit:4,baseHeightMultiplier:8,baseHorizontalSpacingMultiplier:3,direction:i.ltr,cornerRadius:2,elevatedCornerRadius:4,focusOutlineWidth:2,fontWeight:{light:100,semilight:200,normal:400,semibold:600,bold:700},disabledOpacity:.3,outlineWidth:1,neutralPalette:["#FFFFFF","#FCFCFC","#FAFAFA","#F7F7F7","#F5F5F5","#F2F2F2","#EFEFEF","#EDEDED","#EAEAEA","#E8E8E8","#E5E5E5","#E2E2E2","#E0E0E0","#DDDDDD","#DBDBDB","#D8D8D8","#D6D6D6","#D3D3D3","#D0D0D0","#CECECE","#CBCBCB","#C9C9C9","#C6C6C6","#C3C3C3","#C1C1C1","#BEBEBE","#BCBCBC","#B9B9B9","#B6B6B6","#B4B4B4","#B1B1B1","#AFAFAF","#ACACAC","#A9A9A9","#A7A7A7","#A4A4A4","#A2A2A2","#9F9F9F","#9D9D9D","#9A9A9A","#979797","#959595","#929292","#909090","#8D8D8D","#8A8A8A","#888888","#858585","#838383","#808080","#7D7D7D","#7B7B7B","#787878","#767676","#737373","#717171","#6E6E6E","#6B6B6B","#696969","#666666","#646464","#616161","#5F5F5F","#5C5C5C","#5A5A5A","#575757","#545454","#525252","#4F4F4F","#4D4D4D","#4A4A4A","#484848","#454545","#424242","#404040","#3D3D3D","#3B3B3B","#383838","#363636","#333333","#313131","#2E2E2E","#2B2B2B","#292929","#262626","#242424","#212121","#1E1E1E","#1B1B1B","#181818","#151515","#121212","#101010","#000000"],accentPalette:["#FFFFFF","#FBFDFE","#F6FAFE","#F2F8FD","#EEF6FC","#E9F4FB","#E5F1FB","#E1EFFA","#DCEDF9","#D8EAF8","#D4E8F8","#CFE6F7","#CBE4F6","#C7E1F6","#C2DFF5","#BEDDF4","#BADAF3","#B6D8F3","#B1D6F2","#ADD4F1","#A9D1F0","#A4CFF0","#A0CDEF","#9CCAEE","#97C8EE","#93C6ED","#8FC4EC","#8AC1EB","#86BFEB","#82BDEA","#7DBAE9","#79B8E8","#75B6E8","#70B3E7","#6CB1E6","#68AFE5","#63ADE5","#5FAAE4","#5BA8E3","#56A6E3","#52A3E2","#4EA1E1","#499FE0","#459DE0","#419ADF","#3D98DE","#3896DD","#3493DD","#3091DC","#2B8FDB","#278DDB","#238ADA","#1E88D9","#1A86D8","#1683D8","#1181D7","#0D7FD6","#097DD5","#047AD5","#0078D4","#0075CF","#0072C9","#006FC4","#006CBE","#0069B9","#0066B4","#0063AE","#0060A9","#005CA3","#00599E","#005699","#005393","#00508E","#004D88","#004A83","#00477D","#004478","#004173","#003E6D","#003B68","#003862","#00355D","#003258","#002F52","#002B4D","#002847","#002542","#00223C","#001F36","#001B30","#00182B","#001525","#00121F","#000000"],accentBaseColor:"#0078D4",accentFillRestDelta:0,accentFillHoverDelta:4,accentFillActiveDelta:-5,accentFillFocusDelta:0,accentFillSelectedDelta:12,accentForegroundRestDelta:0,accentForegroundHoverDelta:6,accentForegroundActiveDelta:-4,accentForegroundFocusDelta:0,neutralFillRestDelta:7,neutralFillHoverDelta:10,neutralFillActiveDelta:5,neutralFillFocusDelta:0,neutralFillSelectedDelta:7,neutralFillInputRestDelta:0,neutralFillInputHoverDelta:0,neutralFillInputActiveDelta:0,neutralFillInputFocusDelta:0,neutralFillInputSelectedDelta:0,neutralFillStealthRestDelta:0,neutralFillStealthHoverDelta:5,neutralFillStealthActiveDelta:3,neutralFillStealthFocusDelta:0,neutralFillStealthSelectedDelta:7,neutralFillToggleHoverDelta:8,neutralFillToggleActiveDelta:-5,neutralFillToggleFocusDelta:0,baseLayerLuminance:-1,neutralFillCardDelta:3,neutralForegroundDarkIndex:93,neutralForegroundLightIndex:0,neutralForegroundHoverDelta:0,neutralForegroundActiveDelta:0,neutralForegroundFocusDelta:0,neutralDividerRestDelta:8,neutralOutlineRestDelta:25,neutralOutlineHoverDelta:40,neutralOutlineActiveDelta:16,neutralOutlineFocusDelta:25});function l(t,e){return(0,o.Z)(t)?t(e):t}var c=a},8340:function(t,e,n){"use strict";n.d(e,{$p:function(){return h},ET:function(){return d},K2:function(){return f},Kf:function(){return u},lB:function(){return i},mq:function(){return l},sF:function(){return p},uZ:function(){return g},vm:function(){return a}});var i,o=n(11162),r=n(60279),s=n(9791);function a(t){const e=(0,s.Z)(t);return function(t){return"function"==typeof t?n=>e(Object.assign({},n,{backgroundColor:t(n)})):e(t)}}function l(t,e){const n=(0,s.Z)(e);return e=>"function"==typeof e?i=>n(Object.assign({},i,{backgroundColor:e(i)}))[t]:n(e)[t]}!function(t){t.rest="rest",t.hover="hover",t.active="active",t.focus="focus",t.selected="selected"}(i||(i={}));const c=(0,s.Z)((t=>{let e=(0,o.in)(t);if(null!==e)return e;if(e=(0,o.hg)(t),null!==e)return e;throw new Error(`${t} cannot be converted to a ColorRGBA64. Color strings must be one of the following formats: "#RGB", "#RRGGBB", or "rgb(r, g, b)"`)}));function u(t){return(0,o.pJ)(t)||(0,o.b4)(t)}function d(t,e){return c(t).equalValue(c(e))}const h=(0,s.Z)(((t,e)=>(0,r.wo)(c(t),c(e))),((t,e)=>t+e));function p(t){return(0,r.hM)(c(t))}function f(...t){return e=>Math.max.apply(null,t.map((t=>t(e))))}const g=(t,e,n)=>Math.min(Math.max(t,e),n)},17533:function(t,e,n){"use strict";n.d(e,{jq:function(){return l}});var i=n(33390),o=n(8340),r=n(9739);const s=(0,o.K2)(i.MY,i.jW,i.hD,i.VQ,i.qD,i.fq,i.gs,i.IU);function a(t){return e=>{const n=(0,r.BD)(e),o=n>=s(e)?-1:1;return(0,r.qZ)(n+o*t(e),(0,i.yv)(e))}}const l=(0,o.vm)(a(i.qD)),c=(0,o.vm)(a(i.fq)),u=(0,o.vm)(a(i.gs)),d=(0,o.vm)(a(i.IU)),h=(0,o.vm)(a(i.Uy));(0,o.vm)((t=>({rest:l(t),hover:c(t),active:u(t),focus:d(t),selected:h(t)})))},89967:function(t,e,n){"use strict";n.d(e,{Xi:function(){return c},wF:function(){return l}});var i=n(33390),o=n(8340),r=n(9739);const s=(0,o.K2)(i.MY,i.jW,i.hD,i.VQ);function a(t){return e=>{const n=(0,r.BD)(e),o=n>=s(e)?-1:1;return(0,r.qZ)(n+o*t(e),(0,i.yv)(e))}}const l=(0,o.vm)(a(i.MY)),c=(0,o.vm)(a(i.jW)),u=(0,o.vm)(a(i.hD)),d=(0,o.vm)(a(i.VQ)),h=(0,o.vm)(a(i.y$));(0,o.vm)((t=>({rest:l(t),hover:c(t),active:u(t),focus:d(t),selected:h(t)})))},22263:function(t,e,n){"use strict";n.d(e,{Q:function(){return c}});var i=n(33390),o=n(8340),r=n(92531),s=n(9739);function a(t,e,n,o,a,l){return c=>{const u=(0,r.DO)(t,c),d=(0,s.Yc)(c)?-1:1,h=(0,s.Ce)(i.Cz)(u)(s.Tq)((()=>d))((0,s.iC)((0,r.DO)(e,c)))(c),p=(0,s.Ik)(t,h)(c),f=(0,r.DO)(n,c),g=(0,r.DO)(o,c),v=(0,r.DO)(a,c),m=(0,r.DO)(l,c);return function(t,e,n,i,o,r,a){const l=t+n*Math.abs(i-o),c=1===n?i<o:n*i>n*o,u=c?t:l,d=c?l:t,h=u+n*r,p=u+n*a;return{rest:(0,s.qZ)(u,e),hover:(0,s.qZ)(d,e),active:(0,s.qZ)(h,e),focus:(0,s.qZ)(p,e)}}(p,u,d,f,g,v,m)}}function l(t){return a(i.yv,t,0,0,0,0)}const c=(0,o.mq)(o.lB.rest,(0,o.vm)(l(4.5)));(0,o.mq)(o.lB.rest,(0,o.vm)(l(3)))},33442:function(t,e,n){"use strict";n.d(e,{$B:function(){return x},A4:function(){return y},l$:function(){return w},s5:function(){return b}});var i,o,r,s=n(74626),a=n(2696),l=n(82917),c=n(33390),u=n(9739),d=n(8340);function h(t,e){return n=>-1===(0,c.q2)(n)?e(n):t(n)}!function(t){t[t.L1=0]="L1",t[t.L1Alt=3]="L1Alt",t[t.L2=10]="L2",t[t.L3=13]="L3",t[t.L4=16]="L4"}(i||(i={})),function(t){t[t.L1=76]="L1",t[t.L1Alt=76]="L1Alt",t[t.L2=79]="L2",t[t.L3=82]="L3",t[t.L4=85]="L4"}(o||(o={})),function(t){t[t.LightMode=1]="LightMode",t[t.DarkMode=.23]="DarkMode"}(r||(r={}));const p=(0,u.hi)(c.yv,(t=>{const e=(0,c.q2)(t);return new a.h(e,e,e,1).toStringHexRGB()})),f=t=>(0,l.uZ)((0,s.$X)(p,c.Dk)(t),0,(0,c.yv)(t).length-1),g=(0,d.K2)(c.MY,c.jW,c.hD),v=(0,d.K2)((0,s.IH)(p,c.Dk),g),m=t=>{const e=.14,n=new a.h(e,e,e,1);return(0,u.hi)(c.yv,n.toStringHexRGB())(t)},b=(0,d.vm)(h((0,u.qZ)((0,s.$X)(f,c.Dk),c.yv),(0,u.Qs)(c.yv)(0,(0,s.$X)(m,(0,s.Jp)(c.Dk,5))))),y=(0,d.vm)(h((0,u.qZ)(f,c.yv),(0,u.Qs)(c.yv)(0,(0,s.$X)(m,(0,s.Jp)(c.Dk,4))))),x=(0,d.vm)(h((0,u.qZ)((0,s.IH)(f,c.Dk),c.yv),(0,u.Qs)(c.yv)(c.Dk,(0,s.$X)(m,(0,s.Jp)(c.Dk,3))))),w=((0,d.vm)(h((0,u.qZ)(p,c.yv),(0,u.Qs)(c.yv)(0,(0,s.$X)(m,(0,s.Jp)(c.Dk,3))))),(0,d.vm)(h((0,u.qZ)(v,c.yv),(0,u.Qs)(c.yv)(g,(0,s.$X)(m,(0,s.Jp)(c.Dk,2))))),(0,d.vm)(h((0,u.qZ)((0,s.IH)(v,c.Dk),c.yv),(0,u.Qs)(c.yv)((0,s.IH)(g,c.Dk),(0,s.$X)(m,c.Dk)))),(0,d.vm)(h((0,u.qZ)((0,s.IH)(v,(0,s.Jp)(c.Dk,2)),c.yv),(0,u.Qs)(c.yv)((0,s.IH)(g,(0,s.Jp)(c.Dk,2)),m))))},9739:function(t,e,n){"use strict";n.d(e,{BD:function(){return g},Ce:function(){return p},Ik:function(){return a},Qs:function(){return d},Tq:function(){return f},Yc:function(){return c},hi:function(){return l},iC:function(){return v},qZ:function(){return u}});var i,o=n(92531),r=n(33390),s=n(8340);function a(t,e){return n=>{if(!(0,s.Kf)(e))return-1;const i=(0,o.DO)(t,n),r=i.indexOf(e);return-1!==r?r:i.findIndex((t=>(0,s.Kf)(t)&&(0,s.ET)(e,t)))}}function l(t,e){return n=>{const i=(0,o.DO)(t,n),r=(0,o.DO)(e,n),l=a(i,r)(n);let c;if(-1!==l)return l;try{c=(0,s.sF)(r)}catch(t){c=-1}return-1===c?0:i.map(((t,e)=>({luminance:(0,s.sF)(t),index:e}))).reduce(((t,e)=>Math.abs(e.luminance-c)<Math.abs(t.luminance-c)?e:t)).index}}function c(t){return(0,s.sF)((0,r.Cz)(t))<=(-.1+Math.sqrt(.21))/2}function u(t,e){return"function"==typeof t?n=>e(n)[(0,s.uZ)(t(n),0,e(n).length-1)]:e[(0,s.uZ)(t,0,e.length-1)]}function d(t){return(e,n)=>i=>u(c(i)?(0,o.DO)(n,i):(0,o.DO)(e,i),t(i))}function h(t,e,n=0,i=t.length-1){if(i===n)return t[n];const o=Math.floor((i-n)/2)+n;return e(t[o])?h(t,e,n,o):h(t,e,o+1,i)}function p(t){return e=>n=>i=>r=>a=>{const l=(0,o.DO)(t,a),c=(0,o.DO)(e,a),u=c.length,d=(0,s.uZ)(n(l,c,a),0,u-1),p=i(d,c,a);const f=[].concat(c),g=u-1;let v=d;return-1===p&&(f.reverse(),v=g-v),h(f,(function(t){return r((0,s.$p)(l,t))}),v,g)}}function f(t,e,n){return l(e,t)(n)}function g(t){return l(r.yv,(0,r.Cz)(t))(t)}function v(t){return e=>e>=t}!function(t){t.neutral="neutral",t.accent="accent"}(i||(i={}))},33390:function(t,e,n){"use strict";n.d(e,{Cz:function(){return r},Db:function(){return l},Dk:function(){return x},IU:function(){return m},MY:function(){return c},Uy:function(){return b},VQ:function(){return h},bu:function(){return a},fq:function(){return g},gs:function(){return v},hD:function(){return d},jW:function(){return u},q2:function(){return y},qD:function(){return f},y$:function(){return p},yv:function(){return s}});var i=n(92531);function o(t){return e=>e&&void 0!==e[t]?e[t]:i.ZP[t]}const r=o("backgroundColor"),s=(o("accentBaseColor"),o("cornerRadius"),o("elevatedCornerRadius"),o("neutralPalette")),a=(o("accentPalette"),o("contrast"),o("designUnit"),o("baseHeightMultiplier"),o("baseHorizontalSpacingMultiplier"),o("direction"),o("outlineWidth")),l=o("focusOutlineWidth"),c=(o("disabledOpacity"),o("accentFillRestDelta"),o("accentFillHoverDelta"),o("accentFillActiveDelta"),o("accentFillFocusDelta"),o("accentFillSelectedDelta"),o("accentForegroundRestDelta"),o("accentForegroundHoverDelta"),o("accentForegroundActiveDelta"),o("accentForegroundFocusDelta"),o("neutralFillRestDelta")),u=o("neutralFillHoverDelta"),d=o("neutralFillActiveDelta"),h=o("neutralFillFocusDelta"),p=o("neutralFillSelectedDelta"),f=(o("neutralFillInputRestDelta"),o("neutralFillInputHoverDelta"),o("neutralFillInputActiveDelta"),o("neutralFillInputFocusDelta"),o("neutralFillInputSelectedDelta"),o("neutralFillStealthRestDelta")),g=o("neutralFillStealthHoverDelta"),v=o("neutralFillStealthActiveDelta"),m=o("neutralFillStealthFocusDelta"),b=o("neutralFillStealthSelectedDelta"),y=(o("neutralFillToggleHoverDelta"),o("neutralFillToggleActiveDelta"),o("neutralFillToggleFocusDelta"),o("baseLayerLuminance")),x=o("neutralFillCardDelta");o("neutralForegroundDarkIndex"),o("neutralForegroundLightIndex"),o("neutralForegroundHoverDelta"),o("neutralForegroundActiveDelta"),o("neutralForegroundFocusDelta"),o("neutralDividerRestDelta"),o("neutralOutlineRestDelta"),o("neutralOutlineHoverDelta"),o("neutralOutlineActiveDelta"),o("fontWeight"),o("neutralOutlineFocusDelta")},89677:function(t,e,n){"use strict";var i;n.d(e,{Nm:function(){return i}}),function(t){t.ltr="ltr",t.rtl="rtl"}(i||(i={}))},74626:function(t,e,n){"use strict";function i(t){return(...e)=>n=>{const i=e[0];let o="function"==typeof i?i(n):i;for(let i=1;i<e.length;i++){const r=e[i];o=t(o,"function"==typeof r?r(n):r)}return o}}n.d(e,{$X:function(){return l},IH:function(){return a},Jp:function(){return c}});const o=i(((t,e)=>t+e)),r=i(((t,e)=>t-e)),s=i(((t,e)=>t*e));i(((t,e)=>t/e));function a(...t){return o.apply(this,t)}function l(...t){return r.apply(this,t)}function c(...t){return s.apply(this,t)}},42166:function(t,e,n){"use strict";n.d(e,{a:function(){return r}});var i=n(2619);const o=function(t="px"){return e=>e+t}();function r(t){return(0,i.Z)(t)?e=>o(t(e)):o(t)}},20654:function(t,e,n){"use strict";var i=n(39619),o=n(80329);e.Z=new class{constructor(){this._breakpoints=o.R1,this._defaultBreakpoint=0,this.subscriptions=[],this.update=()=>{const t=(0,i.N)()?(0,o.wk)(window.innerWidth,this._breakpoints):this.defaultBreakpoint;this.breakpoint!==t&&(this.breakpoint=t,this.notifySubscribers(this.breakpoint)),this.openRequestAnimationFrame=!1},this.currentBreakpoint=()=>this.breakpoint,this.requestFrame=()=>{this.openRequestAnimationFrame||(this.openRequestAnimationFrame=!0,window.requestAnimationFrame(this.update))},(0,i.N)()?(this.breakpoint=(0,o.wk)(window.innerWidth,this._breakpoints),window.addEventListener("resize",this.requestFrame)):this.breakpoint=this.defaultBreakpoint}get breakpoints(){return this._breakpoints}set breakpoints(t){this._breakpoints=t,this.update()}get defaultBreakpoint(){return this._defaultBreakpoint}set defaultBreakpoint(t){this._defaultBreakpoint=t,this.update()}subscribe(t){this.subscriptions.includes(t)||this.subscriptions.push(t)}unsubscribe(t){this.subscriptions=this.subscriptions.filter((e=>t!==e))}notifySubscribers(t){this.subscriptions.forEach((e=>{e(t)}))}}},80329:function(t,e,n){"use strict";n.d(e,{R1:function(){return i},wk:function(){return o}});const i=[0,540,768,1084,1400,1779];function o(t,e=i){for(let n=e.length-1;n>=0;n--)if(t>=e[n])return n}},34757:function(){var t;!function(t){var e=function(){function t(){}return t.getGlobal=function(){return"undefined"!=typeof globalThis&&globalThis?globalThis:"undefined"!=typeof self&&self?self:"undefined"!=typeof window&&window?window:null},t.hasWindow=function(){return Boolean("object"==typeof window&&window)},t.getGlobalInst=function(t){if("window"===t&&this.hasWindow())return window;var e=this.getGlobal();return e&&e[t]?e[t]:null},t}();t.getGlobalWindow=e}(t||(t={})),function(t){var e=function(){function t(){}return t.trackerConfig={useTelemetryService:!1,selectorMethod:".",directFunctionCall:!0,impressionIdParamName:"",publisherName:"msnperegrine"},t}();t.Config=e}(t||(t={})),t||(t={}),function(t){var e=function(){this.element=null,this.trackBeacons=[]};t.VideoTrackEvents=e}(t||(t={})),function(t){var e=function(){function t(){}return t.appinsights={stagingConnectionString:"9b1500b8-3f89-4126-8af8-cd9020439a04",prodConnectionString:"922c1827-2168-46e4-b953-34fef5deff39"},t.msn={videoViewIdMacro:"VIDEO_VIEW_ID"},t}();t.Constants=e}(t||(t={})),function(t){t._window=t.getGlobalWindow.getGlobalInst("window");var e=function(){function e(){}return e.isDebug=function(t){return"true"===this.getQueryParam("na-debug",t.location.search)},e.getRid=function(e){if(t.config.publisherName.indexOf("msn")>=0)for(var n=0;n<e.beacons.length;n++){if(0==e.beacons[n].url.indexOf("https://srtb.msn.com"))return this.getQueryParam("rid",e.beacons[n].url)}return e.impid},e.replaceQueryParam=function(t,e,n){var i=this.getQueryParam(t,n),o=t.concat("=").concat(i),r=t.concat("=").concat(e);return n&&n.indexOf(o)>=0?n.replace(o,r):n},e.getQueryParam=function(t,e){var n=this.getQueryParams(new RegExp("^"+this.escapeRegExp(t)+"$"),e);return n&&n.length>0?n[0].value:null},e.getQueryParams=function(t,e){return e&&e.indexOf("?")>=0&&(e=e.substring(e.indexOf("?")+1)),this.getKeyValuePairs(t,e,"&")},e.getKeyValuePairs=function(t,e,n){if(!e||!t||!t.test)return[];for(var i=[],o=e.split(n),r=0;r<o.length;r++){var s=o[r],a=s.indexOf("=");if(-1!==a){var l=s.substring(0,a).trim(),c=s.substring(a+1).trim();t.test(l)&&i.push({name:l,value:c})}}return i},e.escapeRegExp=function(t){return t?t.replace(this.regexSpecialCharsRegex,"\\$1"):t},e.consoleLog=function(t,e){this.isDebug(e)&&console.log(t)},e.JSONstringify=function(t){if("function"==typeof JSON.stringify)return JSON.stringify(t)},e.getMetaContentByName=function(e,n){try{n||(n=t._window);for(var i=n.document.getElementsByTagName("meta"),o=0;o<i.length;o++)if(i[o].getAttribute("name")===e)return i[o].getAttribute("content");return""}catch(t){return""}},e.loadScript=function(t,e){var n=document.getElementsByTagName("head")[0],i=document.createElement("script");i.type="text/javascript",i.src=t,i.onload=e,i.onreadystatechange=function(){"complete"===this.readyState&&e()},n.appendChild(i)},e.fireBeacon=function(e){e&&t._window&&t._window.Image&&((new t._window.Image).src=e)},e.addQueryParam=function(t,e,n){return t+=-1==t.indexOf("?")?"?":"&",t+=e+"="+n},e.isIE=function(t){return t.navigator.userAgent.indexOf("MSIE ")>-1},e.getCurrentScriptTag=function(t){if(!t)return null;if((e=t.document.currentScript)&&e.src)return e.src;var e,n=t.document.getElementsByTagName("script");if(n&&n.length>0&&-1!=(e=n[n.length-1]).src.indexOf("nativeads/msantracker"))return e.src;var i="",o=t.document.querySelector("script[src*='nativeads/msantracker']");return o&&(i=o.src),i},e.isMSN=function(t){return t?-1!=t.location.href.indexOf("msn.com"):null},e.isStagingEnv=function(t){if(!t)return null;var e=this.getCurrentScriptTag(t);return!!e&&-1!=e.indexOf("nativeads/staging/")},e.getPublisherName=function(t){return t?this.getQueryParam("publisherName",t):""},e.inIframe=function(){try{return t._window.self!==t._window.top}catch(t){return!0}},e.getTargetWindow=function(){return this.inIframe()?t._window.parent:t._window},e.isDocumentReady=function(t){return!!t&&(!(!t.navigator.userAgent||-1===t.navigator.userAgent.indexOf("Android")||"loaded"!=t.document.readyState)||"complete"==t.document.readyState)},e.getVideoViewId=function(){return this.getGuid().replace(/-/g,"")},e.getGuid=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"===t?e:3&e|8).toString(16)}))},e.regexSpecialCharsRegex="/([.*+?^=!:${}()|[]/\\])/g",e}();t.utils=e}(t||(t={})),function(t){var e=function(){function e(){}return e.initialize=function(t){t=t},e.logEvent=function(t,e,n){this.logEventForMSN(t,e,n)},e.logEventForMSN=function(e,n,i){if(n&&i){var o=void 0;this.elementsToTrack&&e&&this.elementsToTrack[e]&&(o=this.elementsToTrack[e]),i.publishername=t.config.publisherName;var r=this.targetWindow.btoa(t.utils.JSONstringify(i)).substring(0,1800),s="https://srtb.msn.com/log?r="+o+"&n="+n+"&d="+encodeURIComponent(r);t.utils.fireBeacon(s),i.rid=o,t.utils.consoleLog("TelemetryEvent: "+n+" "+t.utils.JSONstringify(i),this.targetWindow)}},e.setElementToTrack=function(t,e){t&&e&&(this.elementsToTrack[t]=e)},e.logAdView=function(t,e,n){var i={elementId:e,percentage:n.percentage,duration:n.duration,type:n.type,triggerType:n.triggerType,url:n.url};this.logEvent(t,"mt_view",i)},e.logVideoAdPlay=function(t,e,n){var i={elementId:e,percentage:n.percentage,duration:n.duration,type:n.type,triggerType:n.triggerType,url:n.url};this.logEvent(t,"mt_view",i)},e.logAdClick=function(t,e,n){var i={elementId:e,type:n.type,url:n.url};this.logEvent(t,"mt_click",i)},e.targetWindow=t._window,e.elementsToTrack={},e}();t.Telemetry=e}(t||(t={})),function(t){var e=function(){function e(){}return e.trackElement=function(t,n,i,o,r){var s=e.DEFAULT_PERCENTINVIEW,a=e.DEFAULT_DURATIONINVIEW;return o&&(o.percentage&&(s=o.percentage),o.duration&&(a=o.duration)),e.elementsToTrack.push({selector:t,element:n,targetWindow:i,percentInView:s,milliSecondsInView:a,viewBeacon:o,action:r}),null==e.processing&&(e.processing=setInterval(e.process,e.interval)),this},e.process=function(){try{if(e.elementsToTrack.length>0){for(var n=0;n<e.elementsToTrack.length;n++)e.appearedElements.indexOf(n)<0&&e.elementsWaitingForTimeout.indexOf(n)<0&&e.isElementInView(e.elementsToTrack[n])&&(e.elementsWaitingForTimeout.push(n),setTimeout(e.checkAfterTimeout,e.elementsToTrack[n].milliSecondsInView,e.elementsToTrack[n],n));e.elementsToTrack.length===e.appearedElements.length&&e.stopProcessing()}}catch(n){var i=e.elementsToTrack;i.length>0&&i[0]&&i[0].viewBeacon?t.Telemetry.logEvent(i[0].viewBeacon.guid,"mt_err",{msg:n.message,details:i[0].viewBeacon}):t.Telemetry.logEvent("","mt_err",{msg:n.message})}},e.checkAfterTimeout=function(t,n){e.appearedElements.indexOf(n)<0&&e.isElementInView(t)&&(e.appearedElements.push(n),t.action.call(void 0,t.selector,t.viewBeacon,t.targetWindow)),e.elementsWaitingForTimeout.splice(e.elementsWaitingForTimeout.indexOf(n),1)},e.isElementInView=function(n){var i=n.targetWindow,o=i.document;if(!n.element)return!1;var r,s=n.element,a=o.getElementsByTagName("body");a&&(r=a[0]);var l=s.getBoundingClientRect();if(!l)return!1;var c=-1===l.left?0:l.left,u=-1===l.top?0:l.top,d=s.offsetHeight,h=s.offsetWidth,p=o.elementFromPoint(c+h/2,u+d/2);if("msnperegrine"!=t.config.publisherName&&(!p||p&&s!==p&&!s.contains(p)))return!1;var f=i.innerHeight||o.clientWidth||r.clientWidth,g=i.innerWidth||o.clientHeight||r.clientHeight,v=i.pageYOffset,m=v+f,b=u+i.scrollY,y=b+d,x=i.pageXOffset,w=x+g,$=c+i.scrollX,C={pTop:v,pBottom:m,pLeft:x,pRight:w,eTop:b,eBottom:y,eLeft:$,eRight:$+h,eWidth:h,eHeight:d,percentInView:n.percentInView};return e.validateIsElementInView(C)},e.validateIsElementInView=function(t){if(t.eBottom<=t.pTop||t.eTop>=t.pBottom||t.eRight<=t.pLeft||t.eLeft>=t.pRight)return!1;var e=0,n=0,i=0,o=0;t.pTop>t.eTop&&t.pTop<t.eBottom&&(e=t.pTop-t.eTop),t.pBottom<t.eBottom&&t.pBottom>t.eTop&&(i=t.eBottom-t.pBottom),t.pLeft>t.eLeft&&t.pLeft<t.eRight&&(o=t.pLeft-t.eLeft),t.pRight<t.eRight&&t.pRight>t.eLeft&&(n=t.eRight-t.pRight);var r=o+n;return(e+i)*t.eWidth+r*t.eHeight<=t.eHeight*t.eWidth*(100-t.percentInView)/100},e.stopProcessing=function(){clearInterval(e.processing),e.processing=null},e.DEFAULT_PERCENTINVIEW=50,e.DEFAULT_DURATIONINVIEW=1e3,e.elementsToTrack=[],e.appearedElements=[],e.elementsWaitingForTimeout=[],e.processing=null,e.interval=100,e}();t.AppearUtils=e}(t||(t={})),function(t){var e=function(){function e(){}return e.trackElement=function(n,i,o,r,s,a){for(var l=t.utils.getVideoViewId(),c=[],u=0;u<r.length;u++){var d=r[u];if(e.toTrackUrlCounts=e.toTrackUrlCounts+1,"videoView"!=d.type){var h=t.utils.getQueryParam("rlink",d.url),p=decodeURIComponent(h),f=t.utils.replaceQueryParam("vi",l,p),g=encodeURIComponent(f);d.url=t.utils.replaceQueryParam("rlink",g,d.url)}c.push({selector:n,element:i,videoParenentElement:s,videoBeacon:d,action:a,targetWindow:o,percentInView:d.percentage?d.percentage:50})}return e.elementsToTrack.push({element:i,trackBeacons:c}),null==e.processing&&(e.processing=setInterval(e.process,e.interval)),i.onplay=function(){e.refreshBeaconsWhenStart(i,o)},i.onseeking=function(){e.refreshBeaconsWhenStart(i,o)},this},e.untrackElement=function(t){var n=e.getElementBeaconsIndex(e.elementsToTrack,t);n>=0&&e.elementsToTrack.splice(n,1)},e.getElementBeaconsIndex=function(t,e){if(t&&t.length>0)for(var n=0;n<t.length;n++)if(t[n].element==e)return n;return-1},e.refreshBeaconsWhenStart=function(n,i){if(n&&0==n.currentTime){var o=t.utils.getVideoViewId(),r=e.getElementBeaconsIndex(e.elementsToTrack,n);if(r>=0){for(var s=e.elementsToTrack[r].trackBeacons,a=[],l=0;l<s.length;l++){var c=s[l],u=c.videoBeacon;if("videoView"!=u.type){e.trackedBeacons.indexOf(u.url)>=0&&(e.toTrackUrlCounts=e.toTrackUrlCounts+1);var d=t.utils.getQueryParam("rlink",u.url),h=decodeURIComponent(d),p=t.utils.replaceQueryParam("vi",o,h),f=encodeURIComponent(p);u.url=t.utils.replaceQueryParam("rlink",f,u.url)}a.push({selector:c.selector,element:c.element,videoParenentElement:c.videoParenentElement,videoBeacon:u,action:c.action,targetWindow:i,percentInView:c.percentInView?c.percentInView:50})}e.elementsToTrack[r].trackBeacons=a}null==e.processing&&(e.processing=setInterval(e.process,e.interval))}},e.process=function(){try{if(e.elementsToTrack&&e.elementsToTrack.length>0){for(var n=0;n<e.elementsToTrack.length;n++)for(var i=e.elementsToTrack[n].trackBeacons,o=0;o<i.length;o++){var r=i[o];e.trackedBeacons.indexOf(r.videoBeacon.url)<0&&e.trackPlay(r)}e.toTrackUrlCounts===e.trackedBeacons.length&&e.stopProcessing()}}catch(n){var s=e.elementsToTrack;if(s&&s.length>0&&s[0].trackBeacons&&s[0].trackBeacons[0].videoBeacon){var a=s[0].trackBeacons[0].videoBeacon;t.Telemetry.logEvent(a.guid,"mt_err",{msg:n.message,details:a})}else t.Telemetry.logEvent("","mt_err",{msg:n.message})}},e.trackPlay=function(n){var i=n.element,o=n.videoBeacon.duration,r=1e3*i.currentTime,s=n.videoBeacon.type,a={targetWindow:n.targetWindow,element:n.videoParenentElement?n.videoParenentElement:n.element,percentInView:n.percentInView};t.AppearUtils.isElementInView(a)&&e.trackedBeacons.indexOf(n.videoBeacon.url)<0&&("videoView"==s?this.checkPlayedTime(i)>=o&&(n.action.call(void 0,n.selector,n.videoBeacon),e.trackedBeacons.push(n.videoBeacon.url)):(0==o&&r>o||o>0&&this.checkCurrentTime(r,o))&&(n.action.call(void 0,n.selector,n.videoBeacon),e.trackedBeacons.push(n.videoBeacon.url)))},e.checkCurrentTime=function(t,e){return t>=e-50&&t<=e+50},e.checkPlayedTime=function(t){var e=0;if(t.played&&t.played.length>0)for(var n=0;n<t.played.length;n++)e+=t.played.end(n)-t.played.start(n);return 1e3*e},e.stopProcessing=function(){clearInterval(e.processing),e.processing=null},e.elementsToTrack=[],e.trackedBeacons=[],e.processing=null,e.interval=100,e.toTrackUrlCounts=0,e}();t.PlayUtils=e}(t||(t={})),function(t){var e=function(){this.type="view",this.url="",this.guid="",this.triggerType="view",this.percentage=50,this.duration=1e3};t.ViewBeacon=e}(t||(t={})),function(t){var e=function(){this.type="videoView",this.url="",this.guid="",this.triggerType="play",this.percentage=50,this.duration=0};t.VideoBeacon=e}(t||(t={})),function(t){var e=function(){this.impid="",this.rid="",this.beacons=[]};t.TrackableElement=e}(t||(t={})),function(t){function e(e){var i=new t.TrackableElement,o=new URLSearchParams(t.scriptSrc);if(o){var r="";if(o.has("v")){if(r=o.get("v"),o.has("d")){var s=o.get("d");t.Telemetry.logEvent("","mt_info",{msg:"Version",clientVersion:s})}var a=decodeURI(r),l=new URLSearchParams(a),c=t.config.impressionIdParamName;if(l.has(c)&&(i.impid=l.get(c)),""!=i.impid){l.has("rId")&&(i.rid=l.get("rId"));var u=new t.ViewBeacon;u.url=a,i.beacons=[u],n([i],e,!1)}else t.Telemetry.logEvent("","mt_err",{msg:"view_id is empty or null",url:a})}else t.Telemetry.logEvent("","mt_err",{msg:"viewability beacon not present",url:t.scriptSrc})}else t.Telemetry.logEvent("","mt_err",{msg:"invalid script src url for params",url:t.scriptSrc})}function n(e,n,o){void 0===o&&(o=!0),!e&&e&&e.length>0?t.Telemetry.logEvent("","mt_err",{msg:"elements null or empty"}):e.forEach((function(e){var o=t.utils.getGuid();if(e.rid||(e.rid=t.utils.getRid(e)),t.Telemetry.setElementToTrack(o,e.rid),e.beacons&&e.impid){var r=e.impid;"msn"==t.config.publisherName&&(r="bing-"+e.impid);var s=!0;e.element&&(s=!1);var a=t.config.selectorMethod+""+r;if(s){var l=n.document.querySelector(a);l&&(e.element=l)}if(e.element)i(e,a,n,r,o);else{t.Telemetry.logEvent(o,"mt_err",{msg:"No element with id or element, setting an interval to wait",id:r,selector:a});var c=setInterval((function(){var s=n.document.querySelector(a);s&&(t.Telemetry.logEvent(o,"mt_info",{msg:"Found element after retry",element:a}),clearInterval(c),e.element=s,i(e,a,n,r,o))}),100)}}else t.Telemetry.logEvent(o,"mt_err",{msg:"Beacon or imp id is empty or null"})}))}function i(e,n,i,o,r){var s=e.beacons,a=[];s&&s.length>0&&s.forEach((function(s){t.Telemetry.logEvent(r,"mt_info",{msg:"Beacon Information",id:o,beaconUrl:s.url}),s.guid=r,"play"==s.triggerType?a.push(s):function(e,n,i,o){var r=this;if(e.triggerType&&"view"!==e.triggerType)if("click"===e.type){n.element.addEventListener("click",(function(n){t.Telemetry.logAdClick(e.guid,r.id,e),t.utils.fireBeacon(e.url)}))}else t.Telemetry.logEvent(e.guid,"mt_err",{msg:"Unsupported tracker event",impid:n.impid});else{var s=e;t.AppearUtils.trackElement(i,n.element,o,s,(function(e,n,i){var o=e.split(t.config.selectorMethod)[1];t.Telemetry.logAdView(n.guid,o,n),t.utils.fireBeacon(n.url),console.log("[MSAN view beacon fired] "+n.url)}))}}(s,e,n,i)})),a&&a.length>0&&function(e,n,i,o){var r=e;t.PlayUtils.trackElement(i,n.element,o,r,n.videoParenentElement,(function(e,n){var i=e.split(t.config.selectorMethod)[1];t.Telemetry.logVideoAdPlay(n.guid,i,n),t.utils.fireBeacon(n.url),console.log("[MSAN video beacon fired] "+n.url)}))}(a,e,n,i)}t.config=null,t.isInitialized=!1,t.scriptSrc="",t.Initialize=function(){t.config=t.Config.trackerConfig,t.Telemetry.initialize(t._window),"msnperegrine"!=t.config.publisherName&&t.Telemetry.logEvent("","mt_info",{msg:"MSANTracker JS Inserted"});var n=t.utils.getCurrentScriptTag(t._window);if(n){if(t.scriptSrc=n,!t.isInitialized&&!t.config.directFunctionCall)var i=setInterval((function(){t.utils.isDocumentReady(t._window)&&(t.isInitialized=!0,t.Telemetry.logEvent("","mt_info",{msg:"Document in ready state"}),clearInterval(i),e(t._window))}),100)}else"msnperegrine"!=t.config.publisherName&&t.Telemetry.logEvent("","mt_err",{msg:"Cannot find current script src"})},t.ProcessTrackers=e,t.TrackElements=function(e,i,o){if(void 0===o&&(o=!0),t.Telemetry.logEvent("","mt_info",{msg:"MSANTracker function called",directCall:o}),e||t.Telemetry.logEvent("","mt_err",{msg:"elements null or empty"}),!t.isInitialized&&o)var r=setInterval((function(){t.utils.isDocumentReady(i)&&(t.isInitialized=!0,t.Telemetry.logEvent("","mt_info",{msg:"Document in ready state"}),clearInterval(r),n(e,i,o))}),100);else o&&n(e,i,o)}}(t||(t={})),t._window&&(t.Initialize(),t._window.MSANTracker=t)},45147:function(t){t.exports='<svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M4 24a20 20 0 1140 0 20 20 0 01-40 0zm19.87-8.63a1.25 1.25 0 000 1.76l5.61 5.62H15.25a1.25 1.25 0 100 2.5h14.23l-5.61 5.62a1.25 1.25 0 001.76 1.76l7.75-7.75c.5-.48.5-1.28 0-1.76l-7.75-7.75a1.25 1.25 0 00-1.76 0z"></path></svg>'},72264:function(t){t.exports='<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 2h5c.28 0 .5.22.5.5V5h1a2 2 0 012 2v5a2 2 0 01-2 2H4a2 2 0 01-2-2V7c0-1.1.9-2 2-2h1V2.5c0-.28.22-.5.5-.5zM10 5V3H6v2h4zM4 6a1 1 0 00-1 1v5a1 1 0 001 1h8a1 1 0 001-1V7a1 1 0 00-1-1H4z"></path></svg>'},33785:function(t){t.exports='<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M9.43 11.84a1 1 0 001.57-.82V4.98a1 1 0 00-1.57-.82L5.64 6.78c-.85.59-.85 1.85 0 2.44l3.79 2.62z"></path></svg>'},41517:function(t){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 14.2a1 1 0 01-1.63.78l-4.72-3.81a1.5 1.5 0 010-2.34l4.72-3.81A1 1 0 0113 5.8v8.4z"></path></svg>'},16370:function(t){t.exports='<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 17.9a1.25 1.25 0 01-2.07.94l-6.31-5.52c-.8-.7-.8-1.94 0-2.64l6.3-5.52c.82-.7 2.08-.13 2.08.94v11.8z"></path></svg>'},62923:function(t){t.exports='<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M7.57 11.84A1 1 0 016 11.02V4.98a1 1 0 011.57-.82l3.79 2.62c.85.59.85 1.85 0 2.44l-3.79 2.62z"></path></svg>'},85130:function(t){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 14.2a1 1 0 001.63.78l4.72-3.81a1.5 1.5 0 000-2.34L8.63 5.02A1 1 0 007 5.8v8.4z"></path></svg>'},91578:function(t){t.exports='<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 17.9a1.25 1.25 0 002.07.94l6.31-5.52c.8-.7.8-1.94 0-2.64l-6.3-5.52C10.25 4.46 9 5.03 9 6.1v11.8z"></path></svg>'},36362:function(t){t.exports='<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M2.59 2.72l.06-.07a.5.5 0 01.63-.06l.07.06L8 7.29l4.65-4.64a.5.5 0 01.7.7L8.71 8l4.64 4.65c.18.17.2.44.06.63l-.06.07a.5.5 0 01-.63.06l-.07-.06L8 8.71l-4.65 4.64a.5.5 0 01-.7-.7L7.29 8 2.65 3.35a.5.5 0 01-.06-.63l.06-.07-.06.07z"></path></svg>'},26785:function(t){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.85 2.15a.5.5 0 10-.7.7l3.5 3.5a8.1 8.1 0 00-3.37 5.05.5.5 0 10.98.2 7.09 7.09 0 013.1-4.53l1.6 1.59a3.5 3.5 0 104.88 4.89l4.3 4.3a.5.5 0 00.71-.7l-15-15zm9.27 10.68a2.5 2.5 0 11-3.45-3.45l3.45 3.45zm-2-4.83l3.38 3.38A3.5 3.5 0 0010.12 8zM10 6c-.57 0-1.13.07-1.67.21l-.8-.8A7.65 7.65 0 0110 5c3.7 0 6.94 2.67 7.72 6.4a.5.5 0 01-.98.2A6.97 6.97 0 0010 6z"></path></svg>'},16446:function(t){t.exports='<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 14A6 6 0 108 2a6 6 0 000 12zM8 3c.37 0 .88.36 1.31 1.32.1.2.18.43.26.68H6.43c.08-.25.16-.47.26-.68C7.12 3.36 7.63 3 8 3zm-2.22.9c-.15.34-.29.7-.4 1.1H4a5.02 5.02 0 012.04-1.6c-.1.16-.18.33-.26.5zM5.16 6a12.06 12.06 0 000 4H3.42a4.98 4.98 0 010-4h1.74zm.22 5a7.53 7.53 0 00.66 1.6A5.02 5.02 0 014 11h1.38zm1.05 0h3.14a6.2 6.2 0 01-.26.68C8.88 12.64 8.37 13 8 13c-.37 0-.88-.36-1.31-1.32a6.2 6.2 0 01-.26-.68zm3.4-1H6.17a10.94 10.94 0 010-4h3.64a10.94 10.94 0 010 4zm.79 1H12a5.02 5.02 0 01-2.04 1.6c.1-.16.18-.33.26-.5.15-.34.29-.7.4-1.1zm1.96-1h-1.74a12.05 12.05 0 000-4h1.74a4.98 4.98 0 010 4zM9.96 3.4c.81.35 1.52.9 2.04 1.6h-1.38a7.53 7.53 0 00-.66-1.6z"></path></svg>'},83572:function(t){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.14 2.53a1.5 1.5 0 00-2.28 0l-6.62 7.8A1 1 0 003 11.98h3V17a1 1 0 001 1h6a1 1 0 001-1v-5.02h3a1 1 0 00.76-1.65l-6.62-7.8z"></path></svg>'},78408:function(t){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.86 2.53c.6-.7 1.68-.7 2.28 0l6.62 7.8a1 1 0 01-.76 1.65h-3V17a1 1 0 01-1 1H7a1 1 0 01-1-1v-5.02H3a1 1 0 01-.76-1.65l6.62-7.8zm1.52.65a.5.5 0 00-.76 0L3 10.98h3.5c.28 0 .5.23.5.5V17h6v-5.52c0-.27.22-.5.5-.5H17l-6.62-7.8z"></path></svg>'},3893:function(t){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.25 10a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm5 0a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM15 11.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"></path></svg>'},55096:function(t){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M1.91 7.38A8.5 8.5 0 013.69 4.3a.5.5 0 01.54-.13l1.92.68a1 1 0 001.32-.76l.36-2a.5.5 0 01.4-.4 8.53 8.53 0 013.55 0c.2.04.35.2.38.4l.37 2a1 1 0 001.32.76l1.92-.68a.5.5 0 01.54.13 8.5 8.5 0 011.78 3.08c.06.2 0 .4-.15.54l-1.56 1.32a1 1 0 000 1.52l1.56 1.32a.5.5 0 01.15.54 8.5 8.5 0 01-1.78 3.08.5.5 0 01-.54.13l-1.92-.68a1 1 0 00-1.32.76l-.37 2a.5.5 0 01-.38.4 8.53 8.53 0 01-3.56 0 .5.5 0 01-.39-.4l-.36-2a1 1 0 00-1.32-.76l-1.92.68a.5.5 0 01-.54-.13 8.5 8.5 0 01-1.78-3.08.5.5 0 01.15-.54l1.56-1.32a1 1 0 000-1.52L2.06 7.92a.5.5 0 01-.15-.54zm1.06 0l1.3 1.1a2 2 0 010 3.04l-1.3 1.1c.3.79.71 1.51 1.25 2.16l1.6-.58a2 2 0 012.63 1.53l.3 1.67a7.56 7.56 0 002.5 0l.3-1.67a2 2 0 012.64-1.53l1.6.58a7.5 7.5 0 001.24-2.16l-1.3-1.1a2 2 0 010-3.04l1.3-1.1a7.5 7.5 0 00-1.25-2.16l-1.6.58a2 2 0 01-2.63-1.53l-.3-1.67a7.55 7.55 0 00-2.5 0l-.3 1.67A2 2 0 015.81 5.8l-1.6-.58a7.5 7.5 0 00-1.24 2.16zM7.5 10a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zm1 0a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z"></path></svg>'},36764:function(t){t.exports='<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M7.2 2.1a.9.9 0 011.6 0l1.53 3.08 3.4.5a.9.9 0 01.5 1.53l-2.46 2.4.58 3.39a.9.9 0 01-1.3.95L8 12.35l-3.04 1.6a.9.9 0 01-1.3-.95l.57-3.39-2.46-2.4a.9.9 0 01.5-1.53l3.4-.5L7.2 2.1z"></path></svg>'},17447:function(t){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.77 7.08A.5.5 0 008 7.5v5.15a.5.5 0 00.78.42l4-2.65a.5.5 0 00-.01-.84l-4-2.5zM4.5 3A2.5 2.5 0 002 5.5v9A2.5 2.5 0 004.5 17h11a2.5 2.5 0 002.5-2.5v-9A2.5 2.5 0 0015.5 3h-11zM3 5.5C3 4.67 3.67 4 4.5 4h11c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 013 14.5v-9z"></path></svg>'},68231:function(t,e,n){"use strict";n.d(e,{N:function(){return p}});var i=n(33940),o=n(38492),r=n(56837),s=n(42355),a=n(89949),l=n(11162),c=n(78923),u=n(99452),d=n(42590),h=n(27447);class p extends h.T{constructor(){super(...arguments),this.gradientAngle="112.05deg",this.gradientColor=this.cardFillColor,this.gradientVariables=null}cardFillColorChanged(t,e){if(!e)return;if(super.cardFillColorChanged(t,e),!(0,l.pJ)(e))return this.gradientVariables&&this.$fastController.removeStyles(this.gradientVariables),o.I.deleteValueFor(this),void r.y.deleteValueFor(this);const n=(0,l.in)(e);n&&(this.neutralPaletteSource=e,o.I.setValueFor(this,s.w.create(n.r,n.g,n.b)))}neutralPaletteSourceChanged(t,e){if(e){const t=(0,l.in)(e);if(!t)return;const n=s.w.create(t.r,t.g,t.b);r.y.setValueFor(this,a.v.create(n))}}cardSecondaryColorChanged(){this.handleChange()}gradientAngleChanged(){this.handleChange()}generateGradientVariables(t,e,n){return c.i`
            :host {
                --gradient-angle: ${t};
                --gradient-start-color: ${e};
                --gradient-end-color: ${n};
            }
        `}connectedCallback(){super.connectedCallback(),u.y$.getNotifier(this).subscribe(this,"cardFillColor"),this.handleChange()}handleChange(){this.cardSecondaryColor&&(this.cardFillColor?this.gradientColor=this.cardFillColor:this.gradientColor=o.I.getValueFor(this).toColorString(),this.gradientVariables&&this.$fastController.removeStyles(this.gradientVariables),this.gradientVariables=this.generateGradientVariables(this.gradientAngle,this.gradientColor??"",this.cardSecondaryColor),this.$fastController.addStyles(this.gradientVariables))}}(0,i.gn)([(0,d.Lj)({attribute:"neutral-palette-source",mode:"fromView"}),(0,i.w6)("design:type",String)],p.prototype,"neutralPaletteSource",void 0),(0,i.gn)([(0,d.Lj)({attribute:"card-secondary-color",mode:"fromView"}),(0,i.w6)("design:type",Object)],p.prototype,"cardSecondaryColor",void 0),(0,i.gn)([(0,d.Lj)({attribute:"gradient-angle",mode:"fromView"}),(0,i.w6)("design:type",String)],p.prototype,"gradientAngle",void 0)},27447:function(t,e,n){"use strict";n.d(e,{T:function(){return p}});var i=n(33940),o=n(72582),r=n(78125),s=n(35680),a=n(33978),l=n(56837),c=n(38492),u=n(35210),d=n(42590),h=n(68250);class p extends u.v{constructor(){super(...arguments),this.size=h.Id._1x_2y}cardFillColorChanged(t,e){this.isDarkCardGradient()?o.q.setValueFor(this,r.h.DarkMode):this.isLightCardGradient()?o.q.setValueFor(this,r.h.LightMode):o.q.deleteValueFor(this)}isDarkCardGradient(){return Object.values(h.Gi).includes(this.cardFillColor)}isLightCardGradient(){return Object.values(h.iV).includes(this.cardFillColor)}isNamedGradientFillColor(){return this.isLightCardGradient()||this.isDarkCardGradient()}connectedCallback(){super.connectedCallback(),s.At.setValueFor(this,{evaluate:(t,e)=>(0,a.P)(t(l.y),e||t(c.I),-1,1,0,0,void 0,2,3,1,2,void 0)})}}(0,i.gn)([(0,d.Lj)({attribute:"card-fill-color"}),(0,i.w6)("design:type",Object)],p.prototype,"cardFillColor",void 0),(0,i.gn)([d.Lj,(0,i.w6)("design:type",String)],p.prototype,"size",void 0)},68250:function(t,e,n){"use strict";n.d(e,{Gi:function(){return o},Id:function(){return i},iV:function(){return r}});const i={_1x_1y:"_1x_1y",_1x_2y:"_1x_2y",_2x_2y:"_2x_2y",_2x_1y:"_2x_1y"},o={DarkPlum:"dark-plum",DarkDesert:"dark-desert",DarkDawn:"dark-dawn",DarkSea:"dark-sea",DarkOrange:"dark-orange",DarkTropic:"dark-tropic",DarkMerlot:"dark-merlot",DarkPurple:"dark-purple",DarkGreen:"dark-green"},r={LightBlue:"light-blue",LightPurple:"light-purple",LightSky:"light-sky",LightPink:"light-pink",LightYellow:"light-yellow",LightBluebird:"light-bluebird",LightOrange:"light-orange",LightAqua:"light-aqua",LightGreen:"light-green"}},64799:function(t,e,n){"use strict";n.d(e,{W2:function(){return g},hl:function(){return f},sQ:function(){return p},yp:function(){return h}});var i=n(38492),o=n(26512),r=n(91290),s=n(55135),a=n(42689),l=n(78923),c=n(27186),u=n(29717),d=n(22798);const h=l.i`
    :host([size][card-fill-color="light-blue"]) {
        background: linear-gradient(140.53deg, #f0e1f7 9.32%, #cddfff 58.45%);
    }

    :host([size][card-fill-color="light-purple"]) {
        background: linear-gradient(139.03deg, #ffe9e1 5.05%, #f0e1f7 51.71%);
    }

    :host([size][card-fill-color="light-sky"]) {
        background: linear-gradient(140.53deg, #f5f7e1 9.32%, #cdf0ff 58.45%);
    }

    :host([size][card-fill-color="light-pink"]) {
        background: linear-gradient(139.03deg, #fff1cd 5.05%, #ffe8ed 51.71%);
    }

    :host([size][card-fill-color="light-yellow"]) {
        background: linear-gradient(140.53deg, #fffedc 9.32%, #fff4d7 58.45%);
    }

    :host([size][card-fill-color="light-bluebird"]) {
        background: linear-gradient(139.03deg, #e1e6f8 5.05%, #ebfefb 51.71%);
    }

    :host([size][card-fill-color="light-orange"]) {
        background: linear-gradient(140.56deg, #f0e1f7 5.42%, #ffe9e1 51.68%);
    }

    :host([size][card-fill-color="light-aqua"]) {
        background: linear-gradient(140.56deg, #cef9ff 5.42%, #e3f9f3 51.68%);
    }

    :host([size][card-fill-color="light-green"]) {
        background: linear-gradient(140.56deg, #fffee9 5.42%, #d0f0e1 51.68%);
    }

    :host([size][card-fill-color="dark-plum"]) {
        background: linear-gradient(138.52deg, #512c2c -1.32%, #252c4e 85.77%);
    }

    :host([size][card-fill-color="dark-desert"]) {
        background: linear-gradient(138.25deg, #553f2b -1.2%, #372d54 84.27%);
    }

    :host([size][card-fill-color="dark-dawn"]) {
        background: linear-gradient(140.02deg, #58314f -2.33%, #29203c 84.75%);
    }

    :host([size][card-fill-color="dark-sea"]) {
        background: linear-gradient(138.52deg, #264b50 0.44%, #292448 85.15%);
    }

    :host([size][card-fill-color="dark-orange"]) {
        background: linear-gradient(140.69deg, #514c28 -7.13%, #482b24 87.33%);
    }

    :host([size][card-fill-color="dark-tropic"]) {
        background: linear-gradient(140.08deg, #0b4b4f 1.27%, #39371e 85.21%);
    }

    :host([size][card-fill-color="dark-merlot"]) {
        background: linear-gradient(140.02deg, #5c452f -2.33%, #3a1b26 84.75%);
    }

    :host([size][card-fill-color="dark-purple"]) {
        background: linear-gradient(140.02deg, #283266 -2.33%, #351740 84.75%);
    }

    :host([size][card-fill-color="dark-green"]) {
        background: linear-gradient(138.44deg, #57511f 0.35%, #17352f 83.81%);
    }
`,p=l.i`
    ${(0,c.j)("flex")} :host {
        background: ${i.I};
        outline: calc(${o.H} * 1px) solid ${r.Qs};
        border-radius: calc((${s.rS} - ${o.H}) * 1px);
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
        box-sizing: border-box;
        color: ${a.C};
        contain: content;
        content-visibility: auto;
    }

    :host(:hover) {
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.14);
    }

    @media (prefers-color-scheme: dark) {
        :host(:hover) {
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.26);
        }
    }

    /* Safari specific styles because border-radius and outline aren't compatible in current version  */
    @supports selector(:nth-child(1 of x)) {
        :host {
            outline: none;
            box-shadow: 0 0 0 calc(${o.H} * 1px) ${r.Qs},
                0px 2px 4px rgba(0, 0, 0, 0.04);
        }

        :host(:hover) {
            box-shadow: 0 0 0 calc(${o.H} * 1px) ${r.Qs},
                0px 4px 8px rgba(0, 0, 0, 0.14);
        }

        @media (prefers-color-scheme: dark) {
            :host(:hover) {
                box-shadow: 0 0 0 calc(${o.H} * 1px) ${r.Qs},
                    0px 4px 8px rgba(0, 0, 0, 0.26);
            }
        }
    }

    :host([size="_1x_1y"]) {
        width: calc(${r.$f} * 1px);
        height: calc(${r.di} * 1px);
    }

    :host([size="_1x_2y"]) {
        width: calc(${r.$f} * 1px);
        height: calc((${r.di} * 2px) + (${r.RR} * 1px));
    }

    :host([size="_2x_2y"]) {
        width: calc((${r.$f} * 2px) + (${r.RR} * 1px));
        height: calc((${r.di} * 2px) + (${r.RR} * 1px));
    }

    :host([size="_2x_1y"]) {
        width: calc((${r.$f} * 2px) + (${r.RR} * 1px));
        height: calc(${r.di} * 1px);
    }

    ::slotted(*) {
        color: inherit;
    }
`,f=(0,u.vF)(l.i`
            :host {
                background: ${d.H.Canvas};
                color: ${d.H.CanvasText};
            }
        `),g=l.i`
    ${p}
    ${h}

        :host([card-secondary-color]) {
        background: linear-gradient(
            var(--gradient-angle),
            var(--gradient-start-color) 35.59%,
            var(--gradient-end-color) 100%
        );
        background-clip: padding-box;
    }
`.withBehaviors(f)},23190:function(t,e,n){"use strict";n.d(e,{D:function(){return m}});var i=n(77615),o=n(41339),r=n(64799),s=n(53131),a=n(74449),l=n(27782),c=n(42689),u=n(32572),d=n(27186),h=n(78923),p=n(29717);const f=h.i`
    ${r.sQ}

    ${(0,d.j)("grid")} :host {
        grid-template-rows: auto 1fr;
        font-family: ${s.S};
        width: 240px;
        height: 100%;
    }

    .content {
        grid-row: 2;
        display: grid;
        grid-template-rows: 1fr auto;
        padding: 10px 16px 12px 16px;
        align-self: end;
        height: 100%;
        box-sizing: border-box;
    }

    ::slotted([slot="metadata"]) {
        color: ${a.Q};
        font-size: ${l.c};
        line-height: ${l.R};
        max-height: 20px;
        overflow: hidden;
        display: -webkit-box;
        text-decoration: none;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        margin-top: 2px;
    }

    ::slotted([slot="image"]) {
        grid-row: 1;
        object-fit: cover;
        width: 100%;
    }

    :host([image-aspect-ratio="1.91:1"]) ::slotted([slot="image"]) {
        height: 126px;
    }

    :host([image-aspect-ratio="1:1"]) ::slotted([slot="image"]) {
        height: 240px;
    }

    :host([image-aspect-ratio="3:4"]) ::slotted([slot="image"]) {
        height: 320px;
    }

    .heading {
        color: ${c.C};
        fill: currentcolor;
        display: -webkit-box;
        outline: 0;
        overflow: hidden;
        text-decoration: none;
        -webkit-line-clamp: var(--heading-max-lines, 3);
        -webkit-box-orient: vertical;
        font-weight: 600;
        font-size: var(--carousel-card-heading-font-size, ${u.P});
        line-height: var(--carousel-card-heading-line-height, ${u.b});
    }

    .heading:after {
        bottom: 0;
        content: "";
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        width: 100%;
        z-index: var(--sloppy-click-z-index, 2);
    }
`.withBehaviors((0,p.vF)(h.i`
            :host {
                forced-color-adjust: auto;
            }
        `));var g=n(49218);const v=function(t={}){return g.dy`
        <template role="article">
            <div class="image" part="image">
                <slot name="image">${t.image??""}</slot>
            </div>
            <div class="content" part="content">
                <a
                    id="heading"
                    class="heading"
                    part="heading"
                    href="${t=>t.href?t.href:void 0}"
                    target="${t=>t.target?t.target:void 0}"
                    @click=${(t,e)=>t.handleContentCardLinkClick(e.event)}
                    data-t="${t=>t.anchorTelemetryTag}"
                >
                    <span role="heading" aria-level="${t=>t.headingLevel}">
                        <slot></slot>
                    </span>
                </a>
                <slot name="metadata">${t.metadata??""}</slot>
            </div>
        </template>
    `}(),m=o.V.compose({name:`${i.s.prefix}-carousel-card`,styles:f,template:v})},41339:function(t,e,n){"use strict";n.d(e,{V:function(){return c}});var i=n(33940),o=n(28904),r=n(20284),s=n(42590),a=n(99452);const l="1.91:1";class c extends o.H{constructor(){super(...arguments),this.headingLevel=2,this.imageAspectRatio=l,this.target=r.P._blank}handleContentCardLinkClick(t){return this.$emit("link-invoked",t),!0}}(0,i.gn)([(0,s.Lj)({attribute:"heading-level",mode:"fromView",converter:s.Id}),(0,i.w6)("design:type",Number)],c.prototype,"headingLevel",void 0),(0,i.gn)([(0,s.Lj)({attribute:"image-aspect-ratio"}),(0,i.w6)("design:type",String)],c.prototype,"imageAspectRatio",void 0),(0,i.gn)([s.Lj,(0,i.w6)("design:type",Object)],c.prototype,"href",void 0),(0,i.gn)([s.Lj,(0,i.w6)("design:type",String)],c.prototype,"target",void 0),(0,i.gn)([a.LO,(0,i.w6)("design:type",String)],c.prototype,"anchorTelemetryTag",void 0)},39432:function(t,e,n){"use strict";n.d(e,{G:function(){return g}});var i=n(33940),o=n(68231),r=n(68250),s=n(38492),a=n(28904),l=n(20284),c=n(2696),u=n(78923),d=n(62795),h=n(99452),p=n(11162),f=n(42590);class g extends a.H{constructor(){super(...arguments),this.headingLevel=2,this.immersiveCard=!1,this.animateVideo=!1,this.subscribed=!1,this.target=l.P._blank,this.mediaSlot=[],this.loaded=!1,this.gradientVariables=null,this.cardSize=()=>this.size?this.size:this.parent&&this.parent instanceof o.N?this.parent.size:r.Id._1x_2y,this.colorSwatch=()=>{if(this.parent&&this.parent instanceof o.N)return this.parent.cardFillColor??s.I.getValueFor(this.parent).toColorString()}}animateVideoChanged(){this.loaded=!0}isColorSampled(){return!!(this.parent&&this.parent instanceof o.N)&&!!this.parent.cardSecondaryColor}generateGradientVariables(t){let e,n;return this.isColorSampled()?(e=new c.h(t.r,t.g,t.b,0).toStringWebRGBA(),n=new c.h(t.r,t.g,t.b,.8).toStringWebRGBA()):(e=new c.h(0,0,0,0).toStringWebRGBA(),n=new c.h(0,0,0,.54).toStringWebRGBA()),u.i`
            :host {
                --image-gradient-overlay-start-color: ${e};
                --image-gradient-overlay-end-color: ${n};
            }
        `}handleContentCardLinkClick(t){return this.$emit("link-invoked",t),!0}connectedCallback(){super.connectedCallback(),this.parent=(0,d.TC)(this),!this.parent||this.parent instanceof o.N||(this.parent=(0,d.TC)(this.parent)),this.parent&&(this.handleChange(),h.y$.getNotifier(this.parent).subscribe(this,"cardFillColor"),h.y$.getNotifier(this.parent).subscribe(this,"cardSecondaryColor"),h.y$.getNotifier(this.parent).subscribe(this,"size"))}handleChange(){if(this.size=this.cardSize(),this.cardColor=this.colorSwatch(),this.cardColor){const t=(0,p.in)(this.cardColor);this.gradientVariables&&this.$fastController.removeStyles(this.gradientVariables),t&&(this.gradientVariables=this.generateGradientVariables(t),this.$fastController.addStyles(this.gradientVariables))}}}(0,i.gn)([(0,f.Lj)({attribute:"heading-level",mode:"fromView",converter:f.Id}),(0,i.w6)("design:type",Number)],g.prototype,"headingLevel",void 0),(0,i.gn)([f.Lj,(0,i.w6)("design:type",String)],g.prototype,"size",void 0),(0,i.gn)([(0,f.Lj)({attribute:"immersive-card",mode:"boolean"}),(0,i.w6)("design:type",Boolean)],g.prototype,"immersiveCard",void 0),(0,i.gn)([(0,f.Lj)({attribute:"media-type"}),(0,i.w6)("design:type",Object)],g.prototype,"mediaType",void 0),(0,i.gn)([(0,f.Lj)({attribute:"animate-video",mode:"boolean"}),(0,i.w6)("design:type",Boolean)],g.prototype,"animateVideo",void 0),(0,i.gn)([(0,f.Lj)({attribute:"subscribed",mode:"boolean"}),(0,i.w6)("design:type",Boolean)],g.prototype,"subscribed",void 0),(0,i.gn)([f.Lj,(0,i.w6)("design:type",Object)],g.prototype,"href",void 0),(0,i.gn)([f.Lj,(0,i.w6)("design:type",String)],g.prototype,"target",void 0),(0,i.gn)([h.LO,(0,i.w6)("design:type",Array)],g.prototype,"childElements",void 0),(0,i.gn)([h.LO,(0,i.w6)("design:type",Array)],g.prototype,"mediaSlot",void 0),(0,i.gn)([h.LO,(0,i.w6)("design:type",Object)],g.prototype,"parent",void 0),(0,i.gn)([h.LO,(0,i.w6)("design:type",Boolean)],g.prototype,"loaded",void 0),(0,i.gn)([h.LO,(0,i.w6)("design:type",String)],g.prototype,"anchorTelemetryTag",void 0)},62449:function(t,e,n){"use strict";n.d(e,{D:function(){return i}});const i={image:"image",video:"video"}},28946:function(t,e,n){"use strict";n.d(e,{D:function(){return p}});var i=n(63070),o=n(33940),r=n(95380),s=n(42590);class a extends r.u{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const t=this.defaultSlottedContent.filter((t=>t.nodeType===Node.ELEMENT_NODE));1===t.length&&t[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}(0,o.gn)([s.Lj,(0,o.w6)("design:type",String)],a.prototype,"appearance",void 0);var l=n(78923),c=n(45597),u=n(82636);const d=l.i`
    ${c.G6}
`.withBehaviors((0,u.H)("accent",c.jQ),(0,u.H)("hypertext",c.Xu),(0,u.H)("lightweight",c.vt),(0,u.H)("outline",c.O8),(0,u.H)("stealth",c.cg));const h=(0,n(52791).g)(),p=a.compose({name:`${i.H.prefix}-anchor`,template:h,styles:d,shadowOptions:{delegatesFocus:!0}})},21772:function(t,e,n){"use strict";n.d(e,{D:function(){return b}});var i=n(33940),o=n(28904),r=n(58968),s=n(42590),a=n(99452),l=n(59997);const c="resize",u="scroll";var d=n(5977);class h extends o.H{constructor(){super(...arguments),this.anchor="",this.viewport="",this.horizontalPositioningMode="uncontrolled",this.horizontalDefaultPosition="unset",this.horizontalViewportLock=!1,this.horizontalInset=!1,this.horizontalScaling="content",this.verticalPositioningMode="uncontrolled",this.verticalDefaultPosition="unset",this.verticalViewportLock=!1,this.verticalInset=!1,this.verticalScaling="content",this.fixedPlacement=!1,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.initialLayoutComplete=!1,this.resizeDetector=null,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.pendingPositioningUpdate=!1,this.pendingReset=!1,this.currentDirection=l.N.ltr,this.regionVisible=!1,this.forceUpdate=!1,this.updateThreshold=.5,this.update=()=>{this.pendingPositioningUpdate||this.requestPositionUpdates()},this.startObservers=()=>{this.stopObservers(),null!==this.anchorElement&&(this.requestPositionUpdates(),null!==this.resizeDetector&&(this.resizeDetector.observe(this.anchorElement),this.resizeDetector.observe(this)))},this.requestPositionUpdates=()=>{null===this.anchorElement||this.pendingPositioningUpdate||(h.intersectionService.requestPosition(this,this.handleIntersection),h.intersectionService.requestPosition(this.anchorElement,this.handleIntersection),null!==this.viewportElement&&h.intersectionService.requestPosition(this.viewportElement,this.handleIntersection),this.pendingPositioningUpdate=!0)},this.stopObservers=()=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,h.intersectionService.cancelRequestPosition(this,this.handleIntersection),null!==this.anchorElement&&h.intersectionService.cancelRequestPosition(this.anchorElement,this.handleIntersection),null!==this.viewportElement&&h.intersectionService.cancelRequestPosition(this.viewportElement,this.handleIntersection)),null!==this.resizeDetector&&this.resizeDetector.disconnect()},this.getViewport=()=>{if("string"!=typeof this.viewport||""===this.viewport)return document.documentElement;const t=this.getRootNode();return t instanceof ShadowRoot?t.getElementById(this.viewport):document.getElementById(this.viewport)},this.getAnchor=()=>{const t=this.getRootNode();return t instanceof ShadowRoot?t.getElementById(this.anchor):document.getElementById(this.anchor)},this.handleIntersection=t=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,this.applyIntersectionEntries(t)&&this.updateLayout())},this.applyIntersectionEntries=t=>{const e=t.find((t=>t.target===this)),n=t.find((t=>t.target===this.anchorElement)),i=t.find((t=>t.target===this.viewportElement));return void 0!==e&&void 0!==i&&void 0!==n&&(!!(!this.regionVisible||this.forceUpdate||void 0===this.regionRect||void 0===this.anchorRect||void 0===this.viewportRect||this.isRectDifferent(this.anchorRect,n.boundingClientRect)||this.isRectDifferent(this.viewportRect,i.boundingClientRect)||this.isRectDifferent(this.regionRect,e.boundingClientRect))&&(this.regionRect=e.boundingClientRect,this.anchorRect=n.boundingClientRect,this.viewportElement===document.documentElement?this.viewportRect=new DOMRectReadOnly(i.boundingClientRect.x+document.documentElement.scrollLeft,i.boundingClientRect.y+document.documentElement.scrollTop,i.boundingClientRect.width,i.boundingClientRect.height):this.viewportRect=i.boundingClientRect,this.updateRegionOffset(),this.forceUpdate=!1,!0))},this.updateRegionOffset=()=>{this.anchorRect&&this.regionRect&&(this.baseHorizontalOffset=this.baseHorizontalOffset+(this.anchorRect.left-this.regionRect.left)+(this.translateX-this.baseHorizontalOffset),this.baseVerticalOffset=this.baseVerticalOffset+(this.anchorRect.top-this.regionRect.top)+(this.translateY-this.baseVerticalOffset))},this.isRectDifferent=(t,e)=>Math.abs(t.top-e.top)>this.updateThreshold||Math.abs(t.right-e.right)>this.updateThreshold||Math.abs(t.bottom-e.bottom)>this.updateThreshold||Math.abs(t.left-e.left)>this.updateThreshold,this.handleResize=t=>{this.update()},this.reset=()=>{this.pendingReset&&(this.pendingReset=!1,null===this.anchorElement&&(this.anchorElement=this.getAnchor()),null===this.viewportElement&&(this.viewportElement=this.getViewport()),this.currentDirection=(0,d.M)(this),this.startObservers())},this.updateLayout=()=>{let t,e;if("uncontrolled"!==this.horizontalPositioningMode){const t=this.getPositioningOptions(this.horizontalInset);if("center"===this.horizontalDefaultPosition)e="center";else if("unset"!==this.horizontalDefaultPosition){let t=this.horizontalDefaultPosition;if("start"===t||"end"===t){const e=(0,d.M)(this);if(e!==this.currentDirection)return this.currentDirection=e,void this.initialize();t=this.currentDirection===l.N.ltr?"start"===t?"left":"right":"start"===t?"right":"left"}switch(t){case"left":e=this.horizontalInset?"insetStart":"start";break;case"right":e=this.horizontalInset?"insetEnd":"end"}}const n=void 0!==this.horizontalThreshold?this.horizontalThreshold:void 0!==this.regionRect?this.regionRect.width:0,i=void 0!==this.anchorRect?this.anchorRect.left:0,o=void 0!==this.anchorRect?this.anchorRect.right:0,r=void 0!==this.anchorRect?this.anchorRect.width:0,s=void 0!==this.viewportRect?this.viewportRect.left:0,a=void 0!==this.viewportRect?this.viewportRect.right:0;(void 0===e||"locktodefault"!==this.horizontalPositioningMode&&this.getAvailableSpace(e,i,o,r,s,a)<n)&&(e=this.getAvailableSpace(t[0],i,o,r,s,a)>this.getAvailableSpace(t[1],i,o,r,s,a)?t[0]:t[1])}if("uncontrolled"!==this.verticalPositioningMode){const e=this.getPositioningOptions(this.verticalInset);if("center"===this.verticalDefaultPosition)t="center";else if("unset"!==this.verticalDefaultPosition)switch(this.verticalDefaultPosition){case"top":t=this.verticalInset?"insetStart":"start";break;case"bottom":t=this.verticalInset?"insetEnd":"end"}const n=void 0!==this.verticalThreshold?this.verticalThreshold:void 0!==this.regionRect?this.regionRect.height:0,i=void 0!==this.anchorRect?this.anchorRect.top:0,o=void 0!==this.anchorRect?this.anchorRect.bottom:0,r=void 0!==this.anchorRect?this.anchorRect.height:0,s=void 0!==this.viewportRect?this.viewportRect.top:0,a=void 0!==this.viewportRect?this.viewportRect.bottom:0;(void 0===t||"locktodefault"!==this.verticalPositioningMode&&this.getAvailableSpace(t,i,o,r,s,a)<n)&&(t=this.getAvailableSpace(e[0],i,o,r,s,a)>this.getAvailableSpace(e[1],i,o,r,s,a)?e[0]:e[1])}const n=this.getNextRegionDimension(e,t),i=this.horizontalPosition!==e||this.verticalPosition!==t;if(this.setHorizontalPosition(e,n),this.setVerticalPosition(t,n),this.updateRegionStyle(),!this.initialLayoutComplete)return this.initialLayoutComplete=!0,void this.requestPositionUpdates();this.regionVisible||(this.regionVisible=!0,this.style.removeProperty("pointer-events"),this.style.removeProperty("opacity"),this.classList.toggle("loaded",!0),this.$emit("loaded",this,{bubbles:!1})),this.updatePositionClasses(),i&&this.$emit("positionchange",this,{bubbles:!1})},this.updateRegionStyle=()=>{this.style.width=this.regionWidth,this.style.height=this.regionHeight,this.style.transform=`translate(${this.translateX}px, ${this.translateY}px)`},this.updatePositionClasses=()=>{this.classList.toggle("top","start"===this.verticalPosition),this.classList.toggle("bottom","end"===this.verticalPosition),this.classList.toggle("inset-top","insetStart"===this.verticalPosition),this.classList.toggle("inset-bottom","insetEnd"===this.verticalPosition),this.classList.toggle("vertical-center","center"===this.verticalPosition),this.classList.toggle("left","start"===this.horizontalPosition),this.classList.toggle("right","end"===this.horizontalPosition),this.classList.toggle("inset-left","insetStart"===this.horizontalPosition),this.classList.toggle("inset-right","insetEnd"===this.horizontalPosition),this.classList.toggle("horizontal-center","center"===this.horizontalPosition)},this.setHorizontalPosition=(t,e)=>{if(void 0===t||void 0===this.regionRect||void 0===this.anchorRect||void 0===this.viewportRect)return;let n=0;switch(this.horizontalScaling){case"anchor":case"fill":n=this.horizontalViewportLock?this.viewportRect.width:e.width,this.regionWidth=`${n}px`;break;case"content":n=this.regionRect.width,this.regionWidth="unset"}let i=0;switch(t){case"start":this.translateX=this.baseHorizontalOffset-n,this.horizontalViewportLock&&this.anchorRect.left>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.right));break;case"insetStart":this.translateX=this.baseHorizontalOffset-n+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.right));break;case"insetEnd":this.translateX=this.baseHorizontalOffset,this.horizontalViewportLock&&this.anchorRect.left<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.left));break;case"end":this.translateX=this.baseHorizontalOffset+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.left));break;case"center":if(i=(this.anchorRect.width-n)/2,this.translateX=this.baseHorizontalOffset+i,this.horizontalViewportLock){const t=this.anchorRect.left+i,e=this.anchorRect.right-i;t<this.viewportRect.left&&!(e>this.viewportRect.right)?this.translateX=this.translateX-(t-this.viewportRect.left):e>this.viewportRect.right&&!(t<this.viewportRect.left)&&(this.translateX=this.translateX-(e-this.viewportRect.right))}}this.horizontalPosition=t},this.setVerticalPosition=(t,e)=>{if(void 0===t||void 0===this.regionRect||void 0===this.anchorRect||void 0===this.viewportRect)return;let n=0;switch(this.verticalScaling){case"anchor":case"fill":n=this.verticalViewportLock?this.viewportRect.height:e.height,this.regionHeight=`${n}px`;break;case"content":n=this.regionRect.height,this.regionHeight="unset"}let i=0;switch(t){case"start":this.translateY=this.baseVerticalOffset-n,this.verticalViewportLock&&this.anchorRect.top>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.bottom));break;case"insetStart":this.translateY=this.baseVerticalOffset-n+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.bottom));break;case"insetEnd":this.translateY=this.baseVerticalOffset,this.verticalViewportLock&&this.anchorRect.top<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.top));break;case"end":this.translateY=this.baseVerticalOffset+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.top));break;case"center":if(i=(this.anchorRect.height-n)/2,this.translateY=this.baseVerticalOffset+i,this.verticalViewportLock){const t=this.anchorRect.top+i,e=this.anchorRect.bottom-i;t<this.viewportRect.top&&!(e>this.viewportRect.bottom)?this.translateY=this.translateY-(t-this.viewportRect.top):e>this.viewportRect.bottom&&!(t<this.viewportRect.top)&&(this.translateY=this.translateY-(e-this.viewportRect.bottom))}}this.verticalPosition=t},this.getPositioningOptions=t=>t?["insetStart","insetEnd"]:["start","end"],this.getAvailableSpace=(t,e,n,i,o,r)=>{const s=e-o,a=r-(e+i);switch(t){case"start":return s;case"insetStart":return s+i;case"insetEnd":return a+i;case"end":return a;case"center":return 2*Math.min(s,a)+i}},this.getNextRegionDimension=(t,e)=>{const n={height:void 0!==this.regionRect?this.regionRect.height:0,width:void 0!==this.regionRect?this.regionRect.width:0};return void 0!==t&&"fill"===this.horizontalScaling?n.width=this.getAvailableSpace(t,void 0!==this.anchorRect?this.anchorRect.left:0,void 0!==this.anchorRect?this.anchorRect.right:0,void 0!==this.anchorRect?this.anchorRect.width:0,void 0!==this.viewportRect?this.viewportRect.left:0,void 0!==this.viewportRect?this.viewportRect.right:0):"anchor"===this.horizontalScaling&&(n.width=void 0!==this.anchorRect?this.anchorRect.width:0),void 0!==e&&"fill"===this.verticalScaling?n.height=this.getAvailableSpace(e,void 0!==this.anchorRect?this.anchorRect.top:0,void 0!==this.anchorRect?this.anchorRect.bottom:0,void 0!==this.anchorRect?this.anchorRect.height:0,void 0!==this.viewportRect?this.viewportRect.top:0,void 0!==this.viewportRect?this.viewportRect.bottom:0):"anchor"===this.verticalScaling&&(n.height=void 0!==this.anchorRect?this.anchorRect.height:0),n},this.startAutoUpdateEventListeners=()=>{window.addEventListener(c,this.update,{passive:!0}),window.addEventListener(u,this.update,{passive:!0,capture:!0}),null!==this.resizeDetector&&null!==this.viewportElement&&this.resizeDetector.observe(this.viewportElement)},this.stopAutoUpdateEventListeners=()=>{window.removeEventListener(c,this.update),window.removeEventListener(u,this.update),null!==this.resizeDetector&&null!==this.viewportElement&&this.resizeDetector.unobserve(this.viewportElement)}}anchorChanged(){this.initialLayoutComplete&&(this.anchorElement=this.getAnchor())}viewportChanged(){this.initialLayoutComplete&&(this.viewportElement=this.getViewport())}horizontalPositioningModeChanged(){this.requestReset()}horizontalDefaultPositionChanged(){this.updateForAttributeChange()}horizontalViewportLockChanged(){this.updateForAttributeChange()}horizontalInsetChanged(){this.updateForAttributeChange()}horizontalThresholdChanged(){this.updateForAttributeChange()}horizontalScalingChanged(){this.updateForAttributeChange()}verticalPositioningModeChanged(){this.requestReset()}verticalDefaultPositionChanged(){this.updateForAttributeChange()}verticalViewportLockChanged(){this.updateForAttributeChange()}verticalInsetChanged(){this.updateForAttributeChange()}verticalThresholdChanged(){this.updateForAttributeChange()}verticalScalingChanged(){this.updateForAttributeChange()}fixedPlacementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}autoUpdateModeChanged(t,e){this.$fastController.isConnected&&this.initialLayoutComplete&&("auto"===t&&this.stopAutoUpdateEventListeners(),"auto"===e&&this.startAutoUpdateEventListeners())}anchorElementChanged(){this.requestReset()}viewportElementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}connectedCallback(){super.connectedCallback(),"auto"===this.autoUpdateMode&&this.startAutoUpdateEventListeners(),this.initialize()}disconnectedCallback(){super.disconnectedCallback(),"auto"===this.autoUpdateMode&&this.stopAutoUpdateEventListeners(),this.stopObservers(),this.disconnectResizeDetector()}adoptedCallback(){this.initialize()}disconnectResizeDetector(){null!==this.resizeDetector&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.handleResize)}updateForAttributeChange(){this.$fastController.isConnected&&this.initialLayoutComplete&&(this.forceUpdate=!0,this.update())}initialize(){this.initializeResizeDetector(),null===this.anchorElement&&(this.anchorElement=this.getAnchor()),this.requestReset()}requestReset(){this.$fastController.isConnected&&!1===this.pendingReset&&(this.setInitialState(),r.H.enqueue((()=>this.reset())),this.pendingReset=!0)}setInitialState(){this.initialLayoutComplete=!1,this.regionVisible=!1,this.translateX=0,this.translateY=0,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.viewportRect=void 0,this.regionRect=void 0,this.anchorRect=void 0,this.verticalPosition=void 0,this.horizontalPosition=void 0,this.style.opacity="0",this.style.pointerEvents="none",this.forceUpdate=!1,this.style.position=this.fixedPlacement?"fixed":"absolute",this.updatePositionClasses(),this.updateRegionStyle()}}h.intersectionService=new class{constructor(){this.intersectionDetector=null,this.observedElements=new Map,this.requestPosition=(t,e)=>{null!==this.intersectionDetector&&(this.observedElements.has(t)?this.observedElements.get(t)?.push(e):(this.observedElements.set(t,[e]),this.intersectionDetector.observe(t)))},this.cancelRequestPosition=(t,e)=>{const n=this.observedElements.get(t);if(void 0!==n){const t=n.indexOf(e);-1!==t&&n.splice(t,1)}},this.initializeIntersectionDetector=()=>{globalThis.IntersectionObserver&&(this.intersectionDetector=new IntersectionObserver(this.handleIntersection,{root:null,rootMargin:"0px",threshold:[0,1]}))},this.handleIntersection=t=>{if(null===this.intersectionDetector)return;const e=[],n=[];t.forEach((t=>{this.intersectionDetector?.unobserve(t.target);const i=this.observedElements.get(t.target);void 0!==i&&(i.forEach((i=>{let o=e.indexOf(i);-1===o&&(o=e.length,e.push(i),n.push([])),n[o].push(t)})),this.observedElements.delete(t.target))})),e.forEach(((t,e)=>{t(n[e])}))},this.initializeIntersectionDetector()}},(0,i.gn)([s.Lj,(0,i.w6)("design:type",String)],h.prototype,"anchor",void 0),(0,i.gn)([s.Lj,(0,i.w6)("design:type",String)],h.prototype,"viewport",void 0),(0,i.gn)([(0,s.Lj)({attribute:"horizontal-positioning-mode"}),(0,i.w6)("design:type",String)],h.prototype,"horizontalPositioningMode",void 0),(0,i.gn)([(0,s.Lj)({attribute:"horizontal-default-position"}),(0,i.w6)("design:type",String)],h.prototype,"horizontalDefaultPosition",void 0),(0,i.gn)([(0,s.Lj)({attribute:"horizontal-viewport-lock",mode:"boolean"}),(0,i.w6)("design:type",Boolean)],h.prototype,"horizontalViewportLock",void 0),(0,i.gn)([(0,s.Lj)({attribute:"horizontal-inset",mode:"boolean"}),(0,i.w6)("design:type",Boolean)],h.prototype,"horizontalInset",void 0),(0,i.gn)([(0,s.Lj)({attribute:"horizontal-threshold"}),(0,i.w6)("design:type",Number)],h.prototype,"horizontalThreshold",void 0),(0,i.gn)([(0,s.Lj)({attribute:"horizontal-scaling"}),(0,i.w6)("design:type",String)],h.prototype,"horizontalScaling",void 0),(0,i.gn)([(0,s.Lj)({attribute:"vertical-positioning-mode"}),(0,i.w6)("design:type",String)],h.prototype,"verticalPositioningMode",void 0),(0,i.gn)([(0,s.Lj)({attribute:"vertical-default-position"}),(0,i.w6)("design:type",String)],h.prototype,"verticalDefaultPosition",void 0),(0,i.gn)([(0,s.Lj)({attribute:"vertical-viewport-lock",mode:"boolean"}),(0,i.w6)("design:type",Boolean)],h.prototype,"verticalViewportLock",void 0),(0,i.gn)([(0,s.Lj)({attribute:"vertical-inset",mode:"boolean"}),(0,i.w6)("design:type",Boolean)],h.prototype,"verticalInset",void 0),(0,i.gn)([(0,s.Lj)({attribute:"vertical-threshold"}),(0,i.w6)("design:type",Number)],h.prototype,"verticalThreshold",void 0),(0,i.gn)([(0,s.Lj)({attribute:"vertical-scaling"}),(0,i.w6)("design:type",String)],h.prototype,"verticalScaling",void 0),(0,i.gn)([(0,s.Lj)({attribute:"fixed-placement",mode:"boolean"}),(0,i.w6)("design:type",Boolean)],h.prototype,"fixedPlacement",void 0),(0,i.gn)([(0,s.Lj)({attribute:"auto-update-mode"}),(0,i.w6)("design:type",String)],h.prototype,"autoUpdateMode",void 0),(0,i.gn)([a.LO,(0,i.w6)("design:type",Object)],h.prototype,"anchorElement",void 0),(0,i.gn)([a.LO,(0,i.w6)("design:type",Object)],h.prototype,"viewportElement",void 0),(0,i.gn)([a.LO,(0,i.w6)("design:type",Boolean)],h.prototype,"initialLayoutComplete",void 0);var p=n(63070);const f=n(78923).i`
    :host {
        contain: layout;
        display: block;
    }
`;var g=n(49218),v=n(93703);const m=g.dy`
        <template data-loaded="${t=>t.initialLayoutComplete?"loaded":""}">
            ${(0,v.g)((t=>t.initialLayoutComplete),g.dy`
                    <slot></slot>
                `)}
        </template>
    `,b=h.compose({name:`${p.H.prefix}-anchored-region`,template:m,styles:f})},45900:function(t,e,n){"use strict";n.d(e,{D:function(){return a}});var i=n(63070),o=n(84355),r=n(71851),s=n(48758);const a=o.X.compose({name:`${i.H.prefix}-button`,template:s.X,styles:r.W,shadowOptions:{delegatesFocus:!0}})},84355:function(t,e,n){"use strict";n.d(e,{X:function(){return m}});var i=n(33940),o=n(42590),r=n(99452),s=n(33714),a=n(33818),l=n(31289),c=n(28904),u=n(23526);class d extends c.H{}class h extends((0,u.Um)(d)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const p="submit",f="reset";class g extends h{constructor(){super(...arguments),this.handleSubmission=()=>{if(!this.form)return;const t=this.proxy.isConnected;t||this.attachProxy(),"function"==typeof this.form.requestSubmit?this.form.requestSubmit(this.proxy):this.proxy.click(),t||this.detachProxy()},this.handleFormReset=()=>{this.form?.reset()},this.handleUnsupportedDelegatesFocus=()=>{window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&this.$fastController.definition.shadowOptions?.delegatesFocus&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(t,e){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),e===p&&this.addEventListener("click",this.handleSubmission),t===p&&this.removeEventListener("click",this.handleSubmission),e===f&&this.addEventListener("click",this.handleFormReset),t===f&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus()}}(0,i.gn)([(0,o.Lj)({mode:"boolean"}),(0,i.w6)("design:type",Boolean)],g.prototype,"autofocus",void 0),(0,i.gn)([(0,o.Lj)({attribute:"form"}),(0,i.w6)("design:type",String)],g.prototype,"formId",void 0),(0,i.gn)([o.Lj,(0,i.w6)("design:type",String)],g.prototype,"formaction",void 0),(0,i.gn)([o.Lj,(0,i.w6)("design:type",String)],g.prototype,"formenctype",void 0),(0,i.gn)([o.Lj,(0,i.w6)("design:type",String)],g.prototype,"formmethod",void 0),(0,i.gn)([(0,o.Lj)({mode:"boolean"}),(0,i.w6)("design:type",Boolean)],g.prototype,"formnovalidate",void 0),(0,i.gn)([o.Lj,(0,i.w6)("design:type",String)],g.prototype,"formtarget",void 0),(0,i.gn)([o.Lj,(0,i.w6)("design:type",String)],g.prototype,"type",void 0),(0,i.gn)([r.LO,(0,i.w6)("design:type",Array)],g.prototype,"defaultSlottedContent",void 0);class v{}(0,i.gn)([(0,o.Lj)({attribute:"aria-expanded"}),(0,i.w6)("design:type",Object)],v.prototype,"ariaExpanded",void 0),(0,i.gn)([(0,o.Lj)({attribute:"aria-pressed"}),(0,i.w6)("design:type",Object)],v.prototype,"ariaPressed",void 0),(0,l.e)(v,s.v),(0,l.e)(g,a.hW,v);class m extends g{constructor(){super(...arguments),this.iconOnly=!1}appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const t=this.defaultSlottedContent.filter((t=>t.nodeType===Node.ELEMENT_NODE));1===t.length&&t[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}(0,i.gn)([o.Lj,(0,i.w6)("design:type",String)],m.prototype,"appearance",void 0),(0,i.gn)([(0,o.Lj)({attribute:"icon-only",mode:"boolean"}),(0,i.w6)("design:type",Boolean)],m.prototype,"iconOnly",void 0)},71851:function(t,e,n){"use strict";n.d(e,{W:function(){return g}});var i=n(78923),o=n(24484),r=n(29717),s=n(22798),a=n(45597),l=n(82636),c=n(10970),u=n(35680),d=n(958),h=n(26738),p=n(28632),f=n(80260);const g=i.i`
    :host([disabled]),
    :host([disabled]:hover),
    :host([disabled]:active) {
        opacity: ${c.V};
        background-color: ${u.wF};
        cursor: ${o.H};
    }

    ${a.G6}
`.withBehaviors((0,r.vF)(i.i`
            :host([disabled]),
            :host([disabled]:hover),
            :host([disabled]:active),
            :host([disabled]) .control,
            :host([disabled]) .control:hover,
            :host([appearance="neutral"][disabled]:hover) .control {
                forced-color-adjust: none;
                background-color: ${s.H.ButtonFace};
                border-color: ${s.H.GrayText};
                color: ${s.H.GrayText};
                opacity: 1;
            }
        `),(0,l.H)("accent",i.i`
            :host([appearance="accent"][disabled]),
            :host([appearance="accent"][disabled]:hover),
            :host([appearance="accent"][disabled]:active) {
                background: ${d.Av};
            }

            ${a.jQ}
        `.withBehaviors((0,r.vF)(i.i`
                    :host([appearance="accent"][disabled]) .control,
                    :host([appearance="accent"][disabled]) .control:hover {
                        background: ${s.H.ButtonFace};
                        border-color: ${s.H.GrayText};
                        color: ${s.H.GrayText};
                    }
                `))),(0,l.H)("lightweight",i.i`
            :host([appearance="lightweight"][disabled]:hover),
            :host([appearance="lightweight"][disabled]:active) {
                background-color: transparent;
                color: ${h.go};
            }

            :host([appearance="lightweight"][disabled]) .content::before,
            :host([appearance="lightweight"][disabled]:hover) .content::before,
            :host([appearance="lightweight"][disabled]:active) .content::before {
                background: transparent;
            }

            ${a.vt}
        `.withBehaviors((0,r.vF)(i.i`
                    :host([appearance="lightweight"][disabled]) .control {
                        forced-color-adjust: none;
                        color: ${s.H.GrayText};
                    }

                    :host([appearance="lightweight"][disabled])
                        .control:hover
                        .content::before {
                        background: none;
                    }
                `))),(0,l.H)("outline",i.i`
            :host([appearance="outline"][disabled]:hover),
            :host([appearance="outline"][disabled]:active) {
                background: transparent;
                border-color: ${p.ak};
            }

            ${a.O8}
        `.withBehaviors((0,r.vF)(i.i`
                    :host([appearance="outline"][disabled]) .control {
                        border-color: ${s.H.GrayText};
                    }
                `))),(0,l.H)("stealth",i.i`
            :host([appearance="stealth"][disabled]),
            :host([appearance="stealth"][disabled]:hover),
            :host([appearance="stealth"][disabled]:active) {
                background: ${f.jq};
            }

            ${a.cg}
        `.withBehaviors((0,r.vF)(i.i`
                    :host([appearance="stealth"][disabled]),
                    :host([appearance="stealth"][disabled]:hover) {
                        background: ${s.H.ButtonFace};
                    }

                    :host([appearance="stealth"][disabled]) .control {
                        background: ${s.H.ButtonFace};
                        border-color: transparent;
                        color: ${s.H.GrayText};
                    }
                `))))},48758:function(t,e,n){"use strict";n.d(e,{X:function(){return a}});var i=n(49218),o=n(41472),r=n(47548),s=n(33818);const a=function(t={}){return i.dy`
        <button
            class="control"
            part="control"
            ?autofocus="${t=>t.autofocus}"
            ?disabled="${t=>t.disabled}"
            form="${t=>t.formId}"
            formaction="${t=>t.formaction}"
            formenctype="${t=>t.formenctype}"
            formmethod="${t=>t.formmethod}"
            ?formnovalidate="${t=>t.formnovalidate}"
            formtarget="${t=>t.formtarget}"
            name="${t=>t.name}"
            type="${t=>t.type}"
            value="${t=>t.value}"
            aria-atomic="${t=>t.ariaAtomic}"
            aria-busy="${t=>t.ariaBusy}"
            aria-controls="${t=>t.ariaControls}"
            aria-current="${t=>t.ariaCurrent}"
            aria-describedby="${t=>t.ariaDescribedby}"
            aria-details="${t=>t.ariaDetails}"
            aria-disabled="${t=>t.ariaDisabled}"
            aria-errormessage="${t=>t.ariaErrormessage}"
            aria-expanded="${t=>t.ariaExpanded}"
            aria-flowto="${t=>t.ariaFlowto}"
            aria-haspopup="${t=>t.ariaHaspopup}"
            aria-hidden="${t=>t.ariaHidden}"
            aria-invalid="${t=>t.ariaInvalid}"
            aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
            aria-label="${t=>t.ariaLabel}"
            aria-labelledby="${t=>t.ariaLabelledby}"
            aria-live="${t=>t.ariaLive}"
            aria-owns="${t=>t.ariaOwns}"
            aria-pressed="${t=>t.ariaPressed}"
            aria-relevant="${t=>t.ariaRelevant}"
            aria-roledescription="${t=>t.ariaRoledescription}"
            ${(0,o.i)("control")}
        >
            ${(0,s.m9)(t)}
            <span class="content" part="content">
                <slot ${(0,r.Q)("defaultSlottedContent")}></slot>
            </span>
            ${(0,s.LC)(t)}
        </button>
    `}()},76679:function(t,e,n){"use strict";n.d(e,{D:function(){return a}});var i=n(63070),o=n(32229),r=n(72354),s=n(13261);const a=o.u.compose({name:`${i.H.prefix}-card`,template:s.X,styles:r.W})},32229:function(t,e,n){"use strict";n.d(e,{u:function(){return f}});var i=n(33940),o=n(35210),r=n(11162),s=n(62795),a=n(99452),l=n(42590),c=n(38492),u=n(56837),d=n(79148),h=n(42355),p=n(89949);class f extends o.v{cardFillColorChanged(t,e){if(e){const t=(0,r.in)(e);null!==t&&(this.neutralPaletteSource=e,c.I.setValueFor(this,h.w.create(t.r,t.g,t.b)))}}neutralPaletteSourceChanged(t,e){if(e){const t=(0,r.in)(e),n=h.w.create(t.r,t.g,t.b);u.y.setValueFor(this,p.v.create(n))}}handleChange(t,e){this.cardFillColor||c.I.setValueFor(this,(t=>t(d.ab).evaluate(t,t(c.I))))}connectedCallback(){super.connectedCallback();const t=(0,s.TC)(this);if(t){const e=a.y$.getNotifier(t);e.subscribe(this,"fillColor"),e.subscribe(this,"neutralPalette"),this.handleChange(t,"fillColor")}}}(0,i.gn)([(0,l.Lj)({attribute:"card-fill-color",mode:"fromView"}),(0,i.w6)("design:type",String)],f.prototype,"cardFillColor",void 0),(0,i.gn)([(0,l.Lj)({attribute:"neutral-palette-source",mode:"fromView"}),(0,i.w6)("design:type",String)],f.prototype,"neutralPaletteSource",void 0)},72354:function(t,e,n){"use strict";n.d(e,{W:function(){return d}});var i=n(78923),o=n(27186),r=n(29717),s=n(22798),a=n(62734),l=n(38492),c=n(42689),u=n(55135);const d=i.i`
    ${(0,o.j)("block")} :host {
        --elevation: 4;
        display: block;
        contain: content;
        height: var(--card-height, 100%);
        width: var(--card-width, 100%);
        box-sizing: border-box;
        background: ${l.I};
        color: ${c.C};
        border-radius: calc(${u.rS} * 1px);
        ${a.XC}
    }

    :host(:hover) {
        --elevation: 8;
    }

    :host(:focus-within) {
        --elevation: 8;
    }

    :host {
        content-visibility: auto;
    }
`.withBehaviors((0,r.vF)(i.i`
            :host {
                forced-color-adjust: none;
                background: ${s.H.Canvas};
                box-shadow: 0 0 0 1px ${s.H.CanvasText};
            }
        `))},13261:function(t,e,n){"use strict";n.d(e,{X:function(){return i}});const i=(0,n(35928).O)()},89949:function(t,e,n){"use strict";n.d(e,{v:function(){return L}});var i,o=n(82917),r=n(2696),s=n(60279),a=n(83343);function l(t,e,n=18){const i=(0,s.$2)(t);let o=i.c+e*n;return o<0&&(o=0),(0,s.KW)(new a.t(i.l,o,i.h))}function c(t,e){return t*e}function u(t,e){return new r.h(c(t.r,e.r),c(t.g,e.g),c(t.b,e.b),1)}function d(t,e){return t<.5?(0,o.uZ)(2*e*t,0,1):(0,o.uZ)(1-2*(1-e)*(1-t),0,1)}function h(t,e){return new r.h(d(t.r,e.r),d(t.g,e.g),d(t.b,e.b),1)}!function(t){t[t.Burn=0]="Burn",t[t.Color=1]="Color",t[t.Darken=2]="Darken",t[t.Dodge=3]="Dodge",t[t.Lighten=4]="Lighten",t[t.Multiply=5]="Multiply",t[t.Overlay=6]="Overlay",t[t.Screen=7]="Screen"}(i||(i={}));var p,f=n(9366),g=n(38316),v=n(447),m=n(40272);function b(t,e,n,i){if(isNaN(t)||t<=0)return n;if(t>=1)return i;switch(e){case p.HSL:return(0,s.hP)(function(t,e,n){return isNaN(t)||t<=0?e:t>=1?n:new f.H((0,o.AG)(t,e.h,n.h),(0,o.t7)(t,e.s,n.s),(0,o.t7)(t,e.l,n.l))}(t,(0,s.lw)(n),(0,s.lw)(i)));case p.HSV:return(0,s.iI)(function(t,e,n){return isNaN(t)||t<=0?e:t>=1?n:new g.T((0,o.AG)(t,e.h,n.h),(0,o.t7)(t,e.s,n.s),(0,o.t7)(t,e.v,n.v))}(t,(0,s.T8)(n),(0,s.T8)(i)));case p.XYZ:return(0,s.rD)(function(t,e,n){return isNaN(t)||t<=0?e:t>=1?n:new m.x((0,o.t7)(t,e.x,n.x),(0,o.t7)(t,e.y,n.y),(0,o.t7)(t,e.z,n.z))}(t,(0,s.zP)(n),(0,s.zP)(i)));case p.LAB:return(0,s.DR)(function(t,e,n){return isNaN(t)||t<=0?e:t>=1?n:new v.R((0,o.t7)(t,e.l,n.l),(0,o.t7)(t,e.a,n.a),(0,o.t7)(t,e.b,n.b))}(t,(0,s.v1)(n),(0,s.v1)(i)));case p.LCH:return(0,s.KW)(function(t,e,n){return isNaN(t)||t<=0?e:t>=1?n:new a.t((0,o.t7)(t,e.l,n.l),(0,o.t7)(t,e.c,n.c),(0,o.AG)(t,e.h,n.h))}(t,(0,s.$2)(n),(0,s.$2)(i)));default:return function(t,e,n){return isNaN(t)||t<=0?e:t>=1?n:new r.h((0,o.t7)(t,e.r,n.r),(0,o.t7)(t,e.g,n.g),(0,o.t7)(t,e.b,n.b),(0,o.t7)(t,e.a,n.a))}(t,n,i)}}!function(t){t[t.RGB=0]="RGB",t[t.HSL=1]="HSL",t[t.HSV=2]="HSV",t[t.XYZ=3]="XYZ",t[t.LAB=4]="LAB",t[t.LCH=5]="LCH"}(p||(p={}));class y{constructor(t){if(null==t||0===t.length)throw new Error("The stops argument must be non-empty");this.stops=this.sortColorScaleStops(t)}static createBalancedColorScale(t){if(null==t||0===t.length)throw new Error("The colors argument must be non-empty");const e=new Array(t.length);for(let n=0;n<t.length;n++)0===n?e[n]={color:t[n],position:0}:n===t.length-1?e[n]={color:t[n],position:1}:e[n]={color:t[n],position:n*(1/(t.length-1))};return new y(e)}getColor(t,e=p.RGB){if(1===this.stops.length)return this.stops[0].color;if(t<=0)return this.stops[0].color;if(t>=1)return this.stops[this.stops.length-1].color;let n=0;for(let e=0;e<this.stops.length;e++)this.stops[e].position<=t&&(n=e);let i=n+1;i>=this.stops.length&&(i=this.stops.length-1);return b((t-this.stops[n].position)*(1/(this.stops[i].position-this.stops[n].position)),e,this.stops[n].color,this.stops[i].color)}trim(t,e,n=p.RGB){if(t<0||e>1||e<t)throw new Error("Invalid bounds");if(t===e)return new y([{color:this.getColor(t,n),position:0}]);const i=[];for(let n=0;n<this.stops.length;n++)this.stops[n].position>=t&&this.stops[n].position<=e&&i.push(this.stops[n]);if(0===i.length)return new y([{color:this.getColor(t),position:t},{color:this.getColor(e),position:e}]);i[0].position!==t&&i.unshift({color:this.getColor(t),position:t}),i[i.length-1].position!==e&&i.push({color:this.getColor(e),position:e});const o=e-t,r=new Array(i.length);for(let e=0;e<i.length;e++)r[e]={color:i[e].color,position:(i[e].position-t)/o};return new y(r)}findNextColor(t,e,n=!1,i=p.RGB,o=.005,r=32){isNaN(t)||t<=0?t=0:t>=1&&(t=1);const a=this.getColor(t,i),l=n?0:1,c=this.getColor(l,i);if((0,s.wo)(a,c)<=e)return l;let u=n?0:t,d=n?t:0,h=l,f=0;for(;f<=r;){h=Math.abs(d-u)/2+u;const t=this.getColor(h,i),r=(0,s.wo)(a,t);if(Math.abs(r-e)<=o)return h;r>e?n?u=h:d=h:n?d=h:u=h,f++}return h}clone(){const t=new Array(this.stops.length);for(let e=0;e<t.length;e++)t[e]={color:this.stops[e].color,position:this.stops[e].position};return new y(t)}sortColorScaleStops(t){return t.sort(((t,e)=>{const n=t.position,i=e.position;return n<i?-1:n>i?1:0}))}}var x=n(11162);class w{constructor(t){this.config=Object.assign({},w.defaultPaletteConfig,t),this.palette=[],this.updatePaletteColors()}updatePaletteGenerationValues(t){let e=!1;for(const n in t)this.config[n]&&(this.config[n].equalValue?this.config[n].equalValue(t[n])||(this.config[n]=t[n],e=!0):t[n]!==this.config[n]&&(this.config[n]=t[n],e=!0));return e&&this.updatePaletteColors(),e}updatePaletteColors(){const t=this.generatePaletteColorScale();for(let e=0;e<this.config.steps;e++)this.palette[e]=t.getColor(e/(this.config.steps-1),this.config.interpolationMode)}generatePaletteColorScale(){const t=(0,s.lw)(this.config.baseColor),e=new y([{position:0,color:this.config.scaleColorLight},{position:.5,color:this.config.baseColor},{position:1,color:this.config.scaleColorDark}]).trim(this.config.clipLight,1-this.config.clipDark);let n=e.getColor(0),i=e.getColor(1);if(t.s>=this.config.saturationAdjustmentCutoff&&(n=l(n,this.config.saturationLight),i=l(i,this.config.saturationDark)),0!==this.config.multiplyLight){const t=u(this.config.baseColor,n);n=b(this.config.multiplyLight,this.config.interpolationMode,n,t)}if(0!==this.config.multiplyDark){const t=u(this.config.baseColor,i);i=b(this.config.multiplyDark,this.config.interpolationMode,i,t)}if(0!==this.config.overlayLight){const t=h(this.config.baseColor,n);n=b(this.config.overlayLight,this.config.interpolationMode,n,t)}if(0!==this.config.overlayDark){const t=h(this.config.baseColor,i);i=b(this.config.overlayDark,this.config.interpolationMode,i,t)}return this.config.baseScalePosition?this.config.baseScalePosition<=0?new y([{position:0,color:this.config.baseColor},{position:1,color:i.clamp()}]):this.config.baseScalePosition>=1?new y([{position:0,color:n.clamp()},{position:1,color:this.config.baseColor}]):new y([{position:0,color:n.clamp()},{position:this.config.baseScalePosition,color:this.config.baseColor},{position:1,color:i.clamp()}]):new y([{position:0,color:n.clamp()},{position:.5,color:this.config.baseColor},{position:1,color:i.clamp()}])}}w.defaultPaletteConfig={baseColor:(0,x.in)("#808080"),steps:11,interpolationMode:p.RGB,scaleColorLight:new r.h(1,1,1,1),scaleColorDark:new r.h(0,0,0,1),clipLight:.185,clipDark:.16,saturationAdjustmentCutoff:.05,saturationLight:.35,saturationDark:1.25,overlayLight:0,overlayDark:.25,multiplyLight:0,multiplyDark:0,baseScalePosition:.5},w.greyscalePaletteConfig={baseColor:(0,x.in)("#808080"),steps:11,interpolationMode:p.RGB,scaleColorLight:new r.h(1,1,1,1),scaleColorDark:new r.h(0,0,0,1),clipLight:0,clipDark:0,saturationAdjustmentCutoff:0,saturationLight:0,saturationDark:0,overlayLight:0,overlayDark:0,multiplyLight:0,multiplyDark:0,baseScalePosition:.5};w.defaultPaletteConfig.scaleColorLight,w.defaultPaletteConfig.scaleColorDark;class ${constructor(t){this.palette=[],this.config=Object.assign({},$.defaultPaletteConfig,t),this.regenPalettes()}regenPalettes(){let t=this.config.steps;(isNaN(t)||t<3)&&(t=3);const e=.14,n=new r.h(e,e,e,1),i=new w(Object.assign(Object.assign({},w.greyscalePaletteConfig),{baseColor:n,baseScalePosition:86/94,steps:t})).palette,o=((0,s.rp)(this.config.baseColor)+(0,s.lw)(this.config.baseColor).l)/2,a=this.matchRelativeLuminanceIndex(o,i)/(t-1),l=this.matchRelativeLuminanceIndex(e,i)/(t-1),c=(0,s.lw)(this.config.baseColor),u=(0,s.hP)(f.H.fromObject({h:c.h,s:c.s,l:e})),d=(0,s.hP)(f.H.fromObject({h:c.h,s:c.s,l:.06})),h=new Array(5);h[0]={position:0,color:new r.h(1,1,1,1)},h[1]={position:a,color:this.config.baseColor},h[2]={position:l,color:u},h[3]={position:.99,color:d},h[4]={position:1,color:new r.h(0,0,0,1)};const g=new y(h);this.palette=new Array(t);for(let e=0;e<t;e++){const n=g.getColor(e/(t-1),p.RGB);this.palette[e]=n}}matchRelativeLuminanceIndex(t,e){let n=Number.MAX_VALUE,i=0,o=0;const r=e.length;for(;o<r;o++){const r=Math.abs((0,s.rp)(e[o])-t);r<n&&(n=r,i=o)}return i}}$.defaultPaletteConfig={baseColor:(0,x.in)("#808080"),steps:94};var C=n(42355);function k(t,e,n=0,i=t.length-1){if(i===n)return t[n];const o=Math.floor((i-n)/2)+n;return e(t[o])?k(t,e,n,o):k(t,e,o+1,i)}var S=n(64087),T=n(32470);const L=Object.freeze({create:t=>O.from(t)});class O{constructor(t,e){this.closestIndexCache=new Map,this.source=t,this.swatches=e,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(t,e,n,i){void 0===n&&(n=this.closestIndexOf(t));let o=this.swatches;const r=this.lastIndex;let s=n;void 0===i&&(i=(0,S.a)(t));return-1===i&&(o=this.reversedSwatches,s=r-s),k(o,(n=>(0,T.$)(t,n)>=e),s,r)}get(t){return this.swatches[t]||this.swatches[(0,o.uZ)(t,0,this.lastIndex)]}closestIndexOf(t){if(this.closestIndexCache.has(t.relativeLuminance))return this.closestIndexCache.get(t.relativeLuminance);let e=this.swatches.indexOf(t);if(-1!==e)return this.closestIndexCache.set(t.relativeLuminance,e),e;const n=this.swatches.reduce(((e,n)=>Math.abs(n.relativeLuminance-t.relativeLuminance)<Math.abs(e.relativeLuminance-t.relativeLuminance)?n:e));return e=this.swatches.indexOf(n),this.closestIndexCache.set(t.relativeLuminance,e),e}static from(t){return new O(t,Object.freeze(new $({baseColor:r.h.fromObject(t)}).palette.map((t=>{const e=(0,x.in)(t.toStringHexRGB());return C.w.create(e.r,e.g,e.b)}))))}}},33978:function(t,e,n){"use strict";n.d(e,{P:function(){return s},w:function(){return r}});var i=n(64087),o=n(3794);function r(t,e,n,o,r,s,a){const l=t.closestIndexOf(e);return null==a&&(a=(0,i.a)(e)),{rest:t.get(l+a*n),hover:t.get(l+a*o),active:t.get(l+a*r),focus:t.get(l+a*s)}}function s(t,e,n,i,s,a,l,c,u,d,h,p){return(0,o._)(e)?r(t,e,c,u,d,h,p):r(t,e,n,i,s,a,l)}},27153:function(t,e,n){"use strict";n.d(e,{a:function(){return r},y:function(){return o}});var i=n(64087);function o(t,e){return t.colorContrast(e,3.5)}function r(t,e,n){return t.colorContrast(n,3.5,t.closestIndexOf(t.source),-1*(0,i.a)(e))}},42355:function(t,e,n){"use strict";n.d(e,{w:function(){return s}});var i=n(2696),o=n(60279),r=n(32470);const s=Object.freeze({create:(t,e,n)=>new a(t,e,n),from:t=>new a(t.r,t.g,t.b)});class a extends i.h{constructor(t,e,n){super(t,e,n,1),this.toColorString=this.toStringHexRGB,this.contrast=r.$.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=(0,o.hM)(this)}static fromObject(t){return new a(t.r,t.g,t.b)}}},78125:function(t,e,n){"use strict";n.d(e,{C:function(){return r},h:function(){return i}});var i,o=n(42355);function r(t){return o.w.create(t,t,t)}!function(t){t[t.LightMode=1]="LightMode",t[t.DarkMode=.23]="DarkMode"}(i||(i={}))},56185:function(t,e,n){"use strict";n.d(e,{Pc:function(){return a},Sn:function(){return s},Us:function(){return c},ix:function(){return r}});var i=n(11162),o=n(42355);const r=o.w.create(1,1,1),s=o.w.create(0,0,0),a=o.w.create(.5,.5,.5),l=(0,i.in)("#0078D4"),c=o.w.create(l.r,l.g,l.b)},64087:function(t,e,n){"use strict";n.d(e,{a:function(){return o}});var i=n(3794);function o(t){return(0,i._)(t)?-1:1}},3794:function(t,e,n){"use strict";n.d(e,{_:function(){return o}});const i=(-.1+Math.sqrt(.21))/2;function o(t){return t.relativeLuminance<=i}},32470:function(t,e,n){"use strict";function i(t,e){const n=t.relativeLuminance>e.relativeLuminance?t:e,i=t.relativeLuminance>e.relativeLuminance?e:t;return(n.relativeLuminance+.05)/(i.relativeLuminance+.05)}n.d(e,{$:function(){return i}})},84030:function(t,e,n){"use strict";n.d(e,{D:function(){return et}});var i=n(33940),o=n(11162),r=n(78923),s=n(29717),a=n(22798),l=n(28904),c=n(99452),u=n(42590),d=n(49218),h=n(27186),p=n(89949),f=n(42355),g=n(38492),v=n(42689),m=n(30363),b=n(56837),y=n(40009),x=n(66779),w=n(55135),$=n(26512),C=n(10970),k=n(3490),S=n(16549),T=n(27782),L=n(32572),O=n(94585),I=n(68530),A=n(52704);const{create:H}=A.L,D=H("type-ramp-plus-4-font-size","28px"),F=H("type-ramp-plus-4-line-height","36px"),{create:E}=A.L,B=E("type-ramp-plus-5-font-size","32px"),R=E("type-ramp-plus-5-line-height","40px"),{create:j}=A.L,P=j("type-ramp-plus-6-font-size","40px"),_=j("type-ramp-plus-6-line-height","52px");var M=n(47999),z=n(18681),N=n(20246),V=n(37939),q=n(84659),U=n(12600),W=n(92332),G=n(72582),Z=n(14744),K=n(59845),Q=n(63070);const X={toView:t=>null==t?null:t?.toColorString(),fromView(t){if(null==t)return null;const e=(0,o.in)(t);return e?f.w.create(e.r,e.g,e.b):null}},J=r.i`
    :host {
        background-color: ${g.I};
        color: ${v.C};
    }
`.withBehaviors((0,s.vF)(r.i`
            :host {
                background-color: ${a.H.Canvas};
                box-shadow: 0 0 0 1px ${a.H.CanvasText};
                color: ${a.H.CanvasText};
            }
        `));function Y(t){return(e,n)=>{e[n+"Changed"]=function(e,n){null!=n?t.setValueFor(this,n):t.deleteValueFor(this)}}}class tt extends l.H{constructor(){super(),this.noPaint=!1,c.y$.getNotifier(this).subscribe({handleChange:this.noPaintChanged.bind(this)},"fillColor")}noPaintChanged(){this.noPaint||void 0===this.fillColor?this.$fastController.removeStyles(J):this.$fastController.addStyles(J)}accentBaseColorChanged(t,e){null!=e?m.a.setValueFor(this,p.v.create(e)):m.a.deleteValueFor(this)}neutralBaseColorChanged(t,e){null!=e?b.y.setValueFor(this,p.v.create(e)):b.y.deleteValueFor(this)}}(0,i.gn)([(0,u.Lj)({attribute:"no-paint",mode:"boolean"}),(0,i.w6)("design:type",Object)],tt.prototype,"noPaint",void 0),(0,i.gn)([(0,u.Lj)({attribute:"fill-color",converter:X}),Y(g.I),(0,i.w6)("design:type",Object)],tt.prototype,"fillColor",void 0),(0,i.gn)([(0,u.Lj)({attribute:"accent-base-color",converter:X,mode:"fromView"}),(0,i.w6)("design:type",Object)],tt.prototype,"accentBaseColor",void 0),(0,i.gn)([(0,u.Lj)({attribute:"neutral-base-color",converter:X,mode:"fromView"}),(0,i.w6)("design:type",Object)],tt.prototype,"neutralBaseColor",void 0),(0,i.gn)([c.LO,Y(b.y),(0,i.w6)("design:type",Object)],tt.prototype,"neutralPalette",void 0),(0,i.gn)([c.LO,Y(m.a),(0,i.w6)("design:type",Object)],tt.prototype,"accentPalette",void 0),(0,i.gn)([(0,u.Lj)({converter:u.Id}),Y(y.hV),(0,i.w6)("design:type",Number)],tt.prototype,"density",void 0),(0,i.gn)([(0,u.Lj)({attribute:"design-unit",converter:u.Id}),Y(y._5),(0,i.w6)("design:type",Number)],tt.prototype,"designUnit",void 0),(0,i.gn)([(0,u.Lj)({attribute:"direction"}),Y(x.o),(0,i.w6)("design:type",String)],tt.prototype,"direction",void 0),(0,i.gn)([(0,u.Lj)({attribute:"base-height-multiplier",converter:u.Id}),Y(y.nf),(0,i.w6)("design:type",Number)],tt.prototype,"baseHeightMultiplier",void 0),(0,i.gn)([(0,u.Lj)({attribute:"base-horizontal-spacing-multiplier",converter:u.Id}),Y(y.LQ),(0,i.w6)("design:type",Number)],tt.prototype,"baseHorizontalSpacingMultiplier",void 0),(0,i.gn)([(0,u.Lj)({attribute:"control-corner-radius",converter:u.Id}),Y(w.UW),(0,i.w6)("design:type",Number)],tt.prototype,"controlCornerRadius",void 0),(0,i.gn)([(0,u.Lj)({attribute:"stroke-width",converter:u.Id}),Y($.H),(0,i.w6)("design:type",Number)],tt.prototype,"strokeWidth",void 0),(0,i.gn)([(0,u.Lj)({attribute:"focus-stroke-width",converter:u.Id}),Y($.vx),(0,i.w6)("design:type",Number)],tt.prototype,"focusStrokeWidth",void 0),(0,i.gn)([(0,u.Lj)({attribute:"disabled-opacity",converter:u.Id}),Y(C.V),(0,i.w6)("design:type",Number)],tt.prototype,"disabledOpacity",void 0),(0,i.gn)([(0,u.Lj)({attribute:"type-ramp-minus-2-font-size"}),Y(k.G),(0,i.w6)("design:type",String)],tt.prototype,"typeRampMinus2FontSize",void 0),(0,i.gn)([(0,u.Lj)({attribute:"type-ramp-minus-2-line-height"}),Y(k.M),(0,i.w6)("design:type",String)],tt.prototype,"typeRampMinus2LineHeight",void 0),(0,i.gn)([(0,u.Lj)({attribute:"type-ramp-minus-1-font-size"}),Y(S.s),(0,i.w6)("design:type",String)],tt.prototype,"typeRampMinus1FontSize",void 0),(0,i.gn)([(0,u.Lj)({attribute:"type-ramp-minus-1-line-height"}),Y(S.v),(0,i.w6)("design:type",String)],tt.prototype,"typeRampMinus1LineHeight",void 0),(0,i.gn)([(0,u.Lj)({attribute:"type-ramp-base-font-size"}),Y(T.c),(0,i.w6)("design:type",String)],tt.prototype,"typeRampBaseFontSize",void 0),(0,i.gn)([(0,u.Lj)({attribute:"type-ramp-base-line-height"}),Y(T.R),(0,i.w6)("design:type",String)],tt.prototype,"typeRampBaseLineHeight",void 0),(0,i.gn)([(0,u.Lj)({attribute:"type-ramp-plus-1-font-size"}),Y(L.P),(0,i.w6)("design:type",String)],tt.prototype,"typeRampPlus1FontSize",void 0),(0,i.gn)([(0,u.Lj)({attribute:"type-ramp-plus-1-line-height"}),Y(L.b),(0,i.w6)("design:type",String)],tt.prototype,"typeRampPlus1LineHeight",void 0),(0,i.gn)([(0,u.Lj)({attribute:"type-ramp-plus-2-font-size"}),Y(O.m),(0,i.w6)("design:type",String)],tt.prototype,"typeRampPlus2FontSize",void 0),(0,i.gn)([(0,u.Lj)({attribute:"type-ramp-plus-2-line-height"}),Y(O.I),(0,i.w6)("design:type",String)],tt.prototype,"typeRampPlus2LineHeight",void 0),(0,i.gn)([(0,u.Lj)({attribute:"type-ramp-plus-3-font-size"}),Y(I.i),(0,i.w6)("design:type",String)],tt.prototype,"typeRampPlus3FontSize",void 0),(0,i.gn)([(0,u.Lj)({attribute:"type-ramp-plus-3-line-height"}),Y(I.y),(0,i.w6)("design:type",String)],tt.prototype,"typeRampPlus3LineHeight",void 0),(0,i.gn)([(0,u.Lj)({attribute:"type-ramp-plus-4-font-size"}),Y(D),(0,i.w6)("design:type",String)],tt.prototype,"typeRampPlus4FontSize",void 0),(0,i.gn)([(0,u.Lj)({attribute:"type-ramp-plus-4-line-height"}),Y(F),(0,i.w6)("design:type",String)],tt.prototype,"typeRampPlus4LineHeight",void 0),(0,i.gn)([(0,u.Lj)({attribute:"type-ramp-plus-5-font-size"}),Y(B),(0,i.w6)("design:type",String)],tt.prototype,"typeRampPlus5FontSize",void 0),(0,i.gn)([(0,u.Lj)({attribute:"type-ramp-plus-5-line-height"}),Y(R),(0,i.w6)("design:type",String)],tt.prototype,"typeRampPlus5LineHeight",void 0),(0,i.gn)([(0,u.Lj)({attribute:"type-ramp-plus-6-font-size"}),Y(P),(0,i.w6)("design:type",String)],tt.prototype,"typeRampPlus6FontSize",void 0),(0,i.gn)([(0,u.Lj)({attribute:"type-ramp-plus-6-line-height"}),Y(_),(0,i.w6)("design:type",String)],tt.prototype,"typeRampPlus6LineHeight",void 0),(0,i.gn)([(0,u.Lj)({attribute:"accent-fill-rest-delta",converter:u.Id}),Y(M.N7),(0,i.w6)("design:type",Number)],tt.prototype,"accentFillRestDelta",void 0),(0,i.gn)([(0,u.Lj)({attribute:"accent-fill-hover-delta",converter:u.Id}),Y(M.B2),(0,i.w6)("design:type",Number)],tt.prototype,"accentFillHoverDelta",void 0),(0,i.gn)([(0,u.Lj)({attribute:"accent-fill-active-delta",converter:u.Id}),Y(M.Wo),(0,i.w6)("design:type",Number)],tt.prototype,"accentFillActiveDelta",void 0),(0,i.gn)([(0,u.Lj)({attribute:"accent-fill-focus-delta",converter:u.Id}),Y(M.v$),(0,i.w6)("design:type",Number)],tt.prototype,"accentFillFocusDelta",void 0),(0,i.gn)([(0,u.Lj)({attribute:"accent-foreground-rest-delta",converter:u.Id}),Y(z.kp),(0,i.w6)("design:type",Number)],tt.prototype,"accentForegroundRestDelta",void 0),(0,i.gn)([(0,u.Lj)({attribute:"accent-foreground-hover-delta",converter:u.Id}),Y(z.L8),(0,i.w6)("design:type",Number)],tt.prototype,"accentForegroundHoverDelta",void 0),(0,i.gn)([(0,u.Lj)({attribute:"accent-foreground-active-delta",converter:u.Id}),Y(z.kb),(0,i.w6)("design:type",Number)],tt.prototype,"accentForegroundActiveDelta",void 0),(0,i.gn)([(0,u.Lj)({attribute:"accent-foreground-focus-delta",converter:u.Id}),Y(z.nd),(0,i.w6)("design:type",Number)],tt.prototype,"accentForegroundFocusDelta",void 0),(0,i.gn)([(0,u.Lj)({attribute:"neutral-fill-rest-delta",converter:u.Id}),Y(N.MY),(0,i.w6)("design:type",Number)],tt.prototype,"neutralFillRestDelta",void 0),(0,i.gn)([(0,u.Lj)({attribute:"neutral-fill-hover-delta",converter:u.Id}),Y(N.jW),(0,i.w6)("design:type",Number)],tt.prototype,"neutralFillHoverDelta",void 0),(0,i.gn)([(0,u.Lj)({attribute:"neutral-fill-active-delta",converter:u.Id}),Y(N.hD),(0,i.w6)("design:type",Number)],tt.prototype,"neutralFillActiveDelta",void 0),(0,i.gn)([(0,u.Lj)({attribute:"neutral-fill-focus-delta",converter:u.Id}),Y(N.VQ),(0,i.w6)("design:type",Number)],tt.prototype,"neutralFillFocusDelta",void 0),(0,i.gn)([(0,u.Lj)({attribute:"neutral-fill-input-rest-delta",converter:u.Id}),Y(V.ef),(0,i.w6)("design:type",Number)],tt.prototype,"neutralFillInputRestDelta",void 0),(0,i.gn)([(0,u.Lj)({attribute:"neutral-fill-input-hover-delta",converter:u.Id}),Y(V.EL),(0,i.w6)("design:type",Number)],tt.prototype,"neutralFillInputHoverDelta",void 0),(0,i.gn)([(0,u.Lj)({attribute:"neutral-fill-input-active-delta",converter:u.Id}),Y(V.q_),(0,i.w6)("design:type",Number)],tt.prototype,"neutralFillInputActiveDelta",void 0),(0,i.gn)([(0,u.Lj)({attribute:"neutral-fill-input-focus-delta",converter:u.Id}),Y(V.Zb),(0,i.w6)("design:type",Number)],tt.prototype,"neutralFillInputFocusDelta",void 0),(0,i.gn)([(0,u.Lj)({attribute:"neutral-fill-layer-rest-delta",converter:u.Id}),Y(q.Y),(0,i.w6)("design:type",Number)],tt.prototype,"neutralFillLayerRestDelta",void 0),(0,i.gn)([(0,u.Lj)({attribute:"neutral-fill-stealth-rest-delta",converter:u.Id}),Y(U.qD),(0,i.w6)("design:type",Number)],tt.prototype,"neutralFillStealthRestDelta",void 0),(0,i.gn)([(0,u.Lj)({attribute:"neutral-fill-stealth-hover-delta",converter:u.Id}),Y(U.fq),(0,i.w6)("design:type",Number)],tt.prototype,"neutralFillStealthHoverDelta",void 0),(0,i.gn)([(0,u.Lj)({attribute:"neutral-fill-stealth-active-delta",converter:u.Id}),Y(U.gs),(0,i.w6)("design:type",Number)],tt.prototype,"neutralFillStealthActiveDelta",void 0),(0,i.gn)([(0,u.Lj)({attribute:"neutral-fill-stealth-focus-delta",converter:u.Id}),Y(U.IU),(0,i.w6)("design:type",Number)],tt.prototype,"neutralFillStealthFocusDelta",void 0),(0,i.gn)([(0,u.Lj)({attribute:"neutral-fill-strong-hover-delta",converter:u.Id}),Y(W.sc),(0,i.w6)("design:type",Number)],tt.prototype,"neutralFillStrongHoverDelta",void 0),(0,i.gn)([(0,u.Lj)({attribute:"neutral-fill-strong-active-delta",converter:u.Id}),Y(W.Vt),(0,i.w6)("design:type",Number)],tt.prototype,"neutralFillStrongActiveDelta",void 0),(0,i.gn)([(0,u.Lj)({attribute:"neutral-fill-strong-focus-delta",converter:u.Id}),Y(W.UC),(0,i.w6)("design:type",Number)],tt.prototype,"neutralFillStrongFocusDelta",void 0),(0,i.gn)([(0,u.Lj)({attribute:"base-layer-luminance",converter:u.Id}),Y(G.q),(0,i.w6)("design:type",Number)],tt.prototype,"baseLayerLuminance",void 0),(0,i.gn)([(0,u.Lj)({attribute:"neutral-stroke-divider-rest-delta",converter:u.Id}),Y(Z.h),(0,i.w6)("design:type",Number)],tt.prototype,"neutralStrokeDividerRestDelta",void 0),(0,i.gn)([(0,u.Lj)({attribute:"neutral-stroke-rest-delta",converter:u.Id}),Y(K.fd),(0,i.w6)("design:type",Number)],tt.prototype,"neutralStrokeRestDelta",void 0),(0,i.gn)([(0,u.Lj)({attribute:"neutral-stroke-hover-delta",converter:u.Id}),Y(K.rn),(0,i.w6)("design:type",Number)],tt.prototype,"neutralStrokeHoverDelta",void 0),(0,i.gn)([(0,u.Lj)({attribute:"neutral-stroke-active-delta",converter:u.Id}),Y(K.IM),(0,i.w6)("design:type",Number)],tt.prototype,"neutralStrokeActiveDelta",void 0),(0,i.gn)([(0,u.Lj)({attribute:"neutral-stroke-focus-delta",converter:u.Id}),Y(K.Bx),(0,i.w6)("design:type",Number)],tt.prototype,"neutralStrokeFocusDelta",void 0);const et=tt.compose({name:`${Q.H.prefix}-design-system-provider`,template:d.dy`
        <slot></slot>
    `,styles:r.i`
        ${(0,h.j)("block")}
    `})},8522:function(t,e,n){"use strict";n.d(e,{D:function(){return m}});var i=n(33940),o=n(28904),r=n(42590),s=n(97380);const a="separator";class l extends o.H{constructor(){super(...arguments),this.role=a,this.orientation=s.i.horizontal}}(0,i.gn)([r.Lj,(0,i.w6)("design:type",String)],l.prototype,"role",void 0),(0,i.gn)([r.Lj,(0,i.w6)("design:type",String)],l.prototype,"orientation",void 0);var c=n(63070),u=n(78923),d=n(27186),h=n(40009),p=n(26512),f=n(71942);const g=u.i`
    ${(0,d.j)("block")} :host {
        box-sizing: content-box;
        height: 0;
        margin: calc(${h._5} * 1px) 0;
        border: none;
        border-top: calc(${p.H} * 1px) solid ${f.dt};
    }
`;const v=n(49218).dy`
        <template
            role="${t=>t.role}"
            aria-orientation="${t=>t.orientation}"
        ></template>
    `;const m=class extends l{}.compose({name:`${c.H.prefix}-divider`,template:v,styles:g})},52175:function(t,e,n){"use strict";n.d(e,{D:function(){return C}});var i=n(67776),o=n(63070),r=n(78923),s=n(27186),a=n(24484),l=n(67739),c=n(29717),u=n(22798),d=n(2658),h=n(42689),p=n(80260),f=n(26512),g=n(28632),v=n(10970),m=n(17993);const b=r.i`
    ${(0,s.j)("inline-flex")} :host {
        width: calc(${d.i} * 1px);
        height: calc(${d.i} * 1px);
        justify-content: center;
        align-items: center;
        margin: 0;
        position: relative;
        fill: currentcolor;
        color: ${h.C};
        background: transparent;
        border: none;
        outline: none;
        padding: 0;
    }

    :host::before {
        content: "";
        opacity: 0.8;
        background: ${p.jq};
        border: calc(${f.H} * 1px) solid ${g.ak};
        border-radius: 50%;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        transition: all 0.1s ease-in-out;
    }

    .next,
    .previous {
        position: relative;
        ${""} width: 16px;
        height: 16px;
    }

    :host([disabled]) {
        opacity: ${v.V};
        cursor: ${a.H};
    }

    :host(:hover) {
        cursor: pointer;
    }

    :host(:hover)::before {
        background: ${p.Qp};
        border-color: ${g.QP};
    }

    :host(:${l.b}) {
        outline: none;
    }

    :host(:${l.b})::before {
        box-shadow: 0 0 0 1px ${m.yG} inset;
        border-color: ${m.yG};
    }

    :host(:active)::before {
        background: ${p.sG};
        border-color: ${g.c1};
    }

    :host::-moz-focus-inner {
        border: 0;
    }
`.withBehaviors((0,c.vF)(r.i`
            :host {
                background: ${u.H.Canvas};
            }
            :host .next,
            :host .previous {
                color: ${u.H.ButtonText};
                fill: currentcolor;
            }
            :host::before {
                background: ${u.H.Canvas};
                border-color: ${u.H.ButtonText};
            }
            :host(:hover)::before {
                forced-color-adjust: none;
                background: ${u.H.Highlight};
                border-color: ${u.H.ButtonText};
                opacity: 1;
            }
            :host(:hover) .next,
            :host(:hover) .previous {
                forced-color-adjust: none;
                color: ${u.H.HighlightText};
                fill: currentcolor;
            }
            :host([disabled]) {
                opacity: 1;
            }
            :host([disabled])::before,
            :host([disabled]:hover)::before,
            :host([disabled]) .next,
            :host([disabled]) .previous,
            :host([disabled]:hover) .next,
            :host([disabled]:hover) .previous {
                forced-color-adjust: none;
                background: ${u.H.Canvas};
                border-color: ${u.H.GrayText};
                color: ${u.H.GrayText};
                fill: ${u.H.GrayText};
            }
            :host(:${l.b})::before {
                forced-color-adjust: none;
                border-color: ${u.H.Highlight};
                box-shadow: 0 0 0 2px ${u.H.Field},
                    0 0 0 4px ${u.H.FieldText};
            }
        `));var y=n(86158),x=n(49218);const w=(0,y._)({next:x.dy`
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M4.023 15.273L11.29 8 4.023.727l.704-.704L12.71 8l-7.984 7.977-.704-.704z"
            />
        </svg>
    `,previous:x.dy`
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M11.273 15.977L3.29 8 11.273.023l.704.704L4.71 8l7.266 7.273-.704.704z"
            />
        </svg>
    `});class $ extends i.N{}const C=$.compose({name:`${o.H.prefix}-flipper`,template:w,styles:b})},63070:function(t,e,n){"use strict";n.d(e,{H:function(){return i}});const i=Object.freeze({prefix:"fluent",shadowRootMode:"open",registry:customElements})},37248:function(t,e,n){"use strict";n.d(e,{D:function(){return c}});var i=n(63070),o=n(55024),r=n(7771),s=n(49752),a=n(49218);const l=(0,s.S)({nextFlipper:a.dy`
            <fluent-flipper
                @click="${t=>t.scrollToNext()}"
                aria-hidden="${t=>t.flippersHiddenFromAT}"
            ></fluent-flipper>
        `,previousFlipper:a.dy`
            <fluent-flipper
                @click="${t=>t.scrollToPrevious()}"
                direction="previous"
                aria-hidden="${t=>t.flippersHiddenFromAT}"
            ></fluent-flipper>
        `}),c=o.b.compose({name:`${i.H.prefix}-horizontal-scroll`,template:l,styles:r.W})},55024:function(t,e,n){"use strict";n.d(e,{b:function(){return r}});var i=n(65799),o=n(7771);class r extends i.n{connectedCallback(){super.connectedCallback(),"mobile"!==this.view&&this.$fastController.addStyles(o.P)}}},7771:function(t,e,n){"use strict";n.d(e,{P:function(){return l},W:function(){return c}});var i=n(78923),o=n(27186),r=n(22674);const s=i.i`
    .scroll-prev {
        right: auto;
        left: 0;
    }

    .scroll.scroll-next::before,
    .scroll-next .scroll-action {
        left: auto;
        right: 0;
    }

    .scroll.scroll-next::before {
        background: linear-gradient(to right, transparent, var(--scroll-fade-next));
    }

    .scroll-next .scroll-action {
        transform: translate(50%, -50%);
    }
`,a=i.i`
    .scroll.scroll-next {
        right: auto;
        left: 0;
    }

    .scroll.scroll-next::before {
        background: linear-gradient(to right, var(--scroll-fade-next), transparent);
        left: auto;
        right: 0;
    }

    .scroll.scroll-prev::before {
        background: linear-gradient(to right, transparent, var(--scroll-fade-previous));
    }

    .scroll-prev .scroll-action {
        left: auto;
        right: 0;
        transform: translate(50%, -50%);
    }
`,l=i.i`
    .scroll-area {
        position: relative;
    }

    div.scroll-view {
        overflow-x: hidden;
    }

    .scroll {
        bottom: 0;
        pointer-events: none;
        position: absolute;
        right: 0;
        top: 0;
        user-select: none;
        width: 100px;
    }

    .scroll.disabled {
        display: none;
    }

    .scroll::before,
    .scroll-action {
        left: 0;
        position: absolute;
    }

    .scroll::before {
        background: linear-gradient(to right, var(--scroll-fade-previous), transparent);
        content: "";
        display: block;
        height: 100%;
        width: 100%;
    }

    .scroll-action {
        pointer-events: auto;
        right: auto;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    ::slotted(fluent-flipper) {
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
    }

    .scroll-area:hover ::slotted(fluent-flipper) {
        opacity: 1;
    }
`.withBehaviors(new r.O(s,a)),c=i.i`
    ${(0,o.j)("block")} :host {
        --scroll-align: center;
        --scroll-item-spacing: 4px;
        contain: layout;
        position: relative;
    }

    .scroll-view {
        overflow-x: auto;
        scrollbar-width: none;
    }

    ::-webkit-scrollbar {
        display: none;
    }

    .content-container {
        align-items: var(--scroll-align);
        display: inline-flex;
        flex-wrap: nowrap;
        position: relative;
    }

    .content-container ::slotted(*) {
        margin-right: var(--scroll-item-spacing);
    }

    .content-container ::slotted(*:last-child) {
        margin-right: 0;
    }
`},18449:function(t,e,n){"use strict";n.d(e,{D:function(){return a}});var i=n(3193),o=n(63070),r=n(3812);const s=(0,n(36393).T)(),a=i.Qm.compose({name:`${o.H.prefix}-option`,template:s,styles:r.W})},3812:function(t,e,n){"use strict";n.d(e,{W:function(){return $}});var i=n(78923),o=n(27186),r=n(67739),s=n(24484),a=n(29717),l=n(22798),c=n(2658),u=n(53131),d=n(55135),h=n(26512),p=n(42689),f=n(27782),g=n(40009),v=n(26741),m=n(17993),b=n(958),y=n(23132),x=n(35680),w=n(10970);const $=i.i`
    ${(0,o.j)("inline-flex")} :host {
        font-family: ${u.S};
        border-radius: calc(${d.UW} * 1px);
        border: calc(${h.vx} * 1px) solid transparent;
        box-sizing: border-box;
        color: ${p.C};
        cursor: pointer;
        fill: currentcolor;
        font-size: ${f.c};
        height: calc(${c.i} * 1px);
        line-height: ${f.R};
        margin: 0 calc(${g._5} * 1px);
        outline: none;
        overflow: hidden;
        align-items: center;
        padding: 0 calc(${g._5} * 2.25px);
        user-select: none;
        white-space: nowrap;
    }

    :host(:${r.b}) {
        box-shadow: 0 0 0 calc(${h.vx} * 1px) inset ${v.a2};
        border-color: ${m.yG};
        background: ${b.D8};
        color: ${y.$u};
    }

    :host([aria-selected="true"]) {
        background: ${b.Av};
        color: ${y.w4};
    }

    :host(:hover) {
        background: ${b.OC};
        color: ${y.lJ};
    }

    :host(:active) {
        background: ${b.UE};
        color: ${y.Pp};
    }

    :host(:not([aria-selected="true"]):hover) {
        background: ${x.Xi};
        color: ${p.C};
    }

    :host(:not([aria-selected="true"]):active) {
        background: ${x.Gy};
        color: ${p.C};
    }

    :host([disabled]) {
        cursor: ${s.H};
        opacity: ${w.V};
    }

    :host([disabled]:hover) {
        background-color: inherit;
    }

    .content {
        grid-column-start: 2;
        justify-self: start;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    ::slotted([slot="start"]),
    ::slotted([slot="end"]),
    ::slotted(svg) {
        display: flex;
    }

    ::slotted(svg) {
        ${""}
        height: calc(${g._5} * 4px);
        width: calc(${g._5} * 4px);
    }

    ::slotted([slot="end"]) {
        margin-inline-start: 1ch;
    }

    ::slotted([slot="start"]) {
        margin-inline-end: 1ch;
    }
`.withBehaviors((0,a.vF)(i.i`
            :host {
                border-color: transparent;
                color: ${l.H.ButtonText};
                forced-color-adjust: none;
            }

            :host(:not([aria-selected="true"]):hover),
            :host([aria-selected="true"]) {
                background: ${l.H.Highlight};
                color: ${l.H.HighlightText};
            }

            :host([disabled]),
            :host([disabled]:not([aria-selected="true"]):hover) {
                background: ${l.H.Canvas};
                color: ${l.H.GrayText};
                fill: currentcolor;
                opacity: 1;
            }
        `))},27535:function(t,e,n){"use strict";n.d(e,{D:function(){return D}});var i=n(63070),o=n(79406),r=n(78923),s=n(27186),a=n(67739),l=n(24484),c=n(29717),u=n(22798),d=n(2658),h=n(53131),p=n(40009),f=n(42689),g=n(27782),v=n(55135),m=n(26512),b=n(17993),y=n(80260),x=n(10970),w=n(74449);const $=r.i`
    ${(0,s.j)("grid")} :host {
        contain: layout;
        overflow: visible;
        font-family: ${h.S};
        outline: none;
        box-sizing: border-box;
        height: calc(${d.i} * 1px);
        grid-template-columns: minmax(42px, auto) 1fr minmax(42px, auto);
        grid-template-rows: auto;
        justify-items: center;
        align-items: center;
        padding: 0;
        margin: 0 calc(${p._5} * 1px);
        white-space: nowrap;
        color: ${f.C};
        fill: currentcolor;
        cursor: pointer;
        font-size: ${g.c};
        line-height: ${g.R};
        border-radius: calc(${v.UW} * 1px);
        border: calc(${m.H} * 1px) solid transparent;
        position: relative;
    }

    :host([start-column-count="0"]) {
        grid-template-columns: auto 1fr minmax(42px, auto);
    }

    :host([start-column-count="0"]) .content {
        grid-column: 1;
        grid-row: 1;
        margin-inline-start: 10px;
    }

    :host([start-column-count="0"]) .expand-collapse-glyph-container {
        grid-column: 5;
        grid-row: 1;
    }

    :host([start-column-count="2"]) {
        grid-template-columns:
            minmax(42px, auto) minmax(42px, auto) 1fr minmax(42px, auto)
            minmax(42px, auto);
    }

    :host([start-column-count="2"]) .content {
        grid-column: 3;
        grid-row: 1;
        margin-inline-start: 10px;
    }

    :host([start-column-count="2"]) .expand-collapse-glyph-container {
        grid-column: 5;
        grid-row: 1;
    }

    :host([start-column-count="2"]) ::slotted([slot="start"]) {
        grid-column: 2;
    }

    :host([start-column-count="2"]) ::slotted([slot="end"]) {
        grid-column: 4;
    }

    :host(:${a.b}) {
        border: calc(${m.H} * 1px) solid ${b.yG};
        box-shadow: 0 0 0 calc((${m.vx} - ${m.H}) * 1px)
            ${b.yG};
    }

    :host(:hover) {
        background: ${y.Qp};
    }

    :host([aria-checked="true"]),
    :host(:active),
    :host([aria-expanded="true"]) {
        background: ${y.sG};
        color: ${f.C};
        z-index: 2;
    }

    :host([disabled]) {
        cursor: ${l.H};
        opacity: ${x.V};
    }

    :host([disabled]:hover) ::slotted([slot="start"]),
    :host([disabled]:hover) ::slotted([slot="end"]),
    :host([disabled]:hover)::slotted(svg) {
        fill: currentcolor;
    }

    .content {
        grid-column-start: 2;
        justify-self: start;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    ::slotted([slot="start"]),
    ::slotted([slot="end"]) {
        display: flex;
        justify-content: center;
    }

    ::slotted([slot="end"]) {
        grid-column: 3;
    }

    ::slotted(svg) {
        ${""} width: 16px;
        height: 16px;
        display: flex;
    }

    :host(:hover) ::slotted([slot="start"]),
    :host(:hover) ::slotted([slot="end"]),
    :host(:hover)::slotted(svg),
    :host(:active) ::slotted([slot="start"]),
    :host(:active) ::slotted([slot="end"]),
    :host(:active)::slotted(svg) {
        fill: ${f.C};
    }

    :host([start-column-count="0"][aria-haspopup="menu"]) {
        display: grid;
        grid-template-columns: minmax(42px, auto) auto 1fr minmax(42px, auto) minmax(
                42px,
                auto
            );
        align-items: center;
        min-height: 32px;
    }

    :host([start-column-count="1"][aria-haspopup="menu"]),
    :host([start-column-count="1"][role="menuitemcheckbox"]),
    :host([start-column-count="1"][role="menuitemradio"]) {
        display: grid;
        grid-template-columns: minmax(42px, auto) auto 1fr minmax(42px, auto) minmax(
                42px,
                auto
            );
        align-items: center;
        min-height: 32px;
    }

    :host([start-column-count="2"]:not([aria-haspopup="menu"])) ::slotted([slot="end"]) {
        grid-column: 5;
    }

    :host .input-container,
    :host .expand-collapse-glyph-container {
        display: none;
    }

    :host([aria-haspopup="menu"]) .expand-collapse-glyph-container,
    :host([role="menuitemcheckbox"]) .input-container,
    :host([role="menuitemradio"]) .input-container {
        display: grid;
        margin-inline-end: 10px;
    }

    :host([aria-haspopup="menu"]) .content,
    :host([role="menuitemcheckbox"]) .content,
    :host([role="menuitemradio"]) .content {
        grid-column-start: 3;
    }

    :host([aria-haspopup="menu"][start-column-count="0"]) .content {
        grid-column-start: 1;
    }

    :host([aria-haspopup="menu"]) ::slotted([slot="end"]),
    :host([role="menuitemcheckbox"]) ::slotted([slot="end"]),
    :host([role="menuitemradio"]) ::slotted([slot="end"]) {
        grid-column-start: 4;
    }

    :host .expand-collapse,
    :host .checkbox,
    :host .radio {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 20px;
        height: 20px;
        box-sizing: border-box;
        outline: none;
        margin-inline-start: 10px;
    }

    :host .checkbox {
        border-radius: calc(${v.UW} * 1px);
    }

    :host .radio {
        border-radius: 999px;
    }

    :host .checkbox-indicator,
    :host .radio-indicator,
    ::slotted([slot="checkbox-indicator"]),
    ::slotted([slot="radio-indicator"]) {
        display: none;
    }

    ::slotted([slot="end"]:not(svg)) {
        margin-inline-end: 10px;
        color: ${w.Q};
    }

    :host([aria-checked="true"]) .checkbox-indicator,
    :host([aria-checked="true"]) ::slotted([slot="checkbox-indicator"]) {
        width: 100%;
        height: 100%;
        display: block;
        fill: ${f.C};
        pointer-events: none;
    }

    :host([aria-checked="true"]) .radio-indicator {
        display: block;
        pointer-events: none;
    }

    :host([aria-checked="true"]) ::slotted([slot="radio-indicator"]) {
        display: block;
        pointer-events: none;
    }

    .submenu-container {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
    }
`.withBehaviors((0,c.vF)(r.i`
            :host {
                forced-color-adjust: none;
                border-color: transparent;
                color: ${u.H.ButtonText};
                fill: ${u.H.ButtonText};
            }
            :host(:hover) {
                background: ${u.H.Highlight};
                color: ${u.H.HighlightText};
            }
            :host(:hover) ::slotted([slot="start"]),
            :host(:hover) ::slotted([slot="end"]),
            :host(:hover)::slotted(svg),
            :host(:active) ::slotted([slot="start"]),
            :host(:active) ::slotted([slot="end"]),
            :host(:active)::slotted(svg) {
                fill: ${u.H.HighlightText};
            }

            :host([aria-expanded="true"]) {
                background: ${u.H.Highlight};
                border-color: ${u.H.Highlight};
                color: ${u.H.HighlightText};
            }

            :host(:${a.b}) {
                background: ${u.H.Highlight};
                border-color: ${u.H.ButtonText};
                box-shadow: 0 0 0 calc(${m.H} * 1px) inset
                    ${u.H.HighlightText};
                color: ${u.H.HighlightText};
                fill: currentcolor;
            }

            :host([disabled]),
            :host([disabled]:hover),
            :host([disabled]:hover) ::slotted([slot="start"]),
            :host([disabled]:hover) ::slotted([slot="end"]),
            :host([disabled]:hover)::slotted(svg) {
                background: ${u.H.Canvas};
                color: ${u.H.GrayText};
                fill: currentcolor;
                opacity: 1;
            }

            :host .expanded-toggle,
            :host .checkbox,
            :host .radio {
                border-color: ${u.H.ButtonText};
                background: ${u.H.HighlightText};
            }

            :host([checked="true"]) .checkbox,
            :host([checked="true"]) .radio {
                background: ${u.H.HighlightText};
                border-color: ${u.H.HighlightText};
            }

            :host(:hover) .expanded-toggle,
            :host(:hover) .checkbox,
            :host(:hover) .radio,
            :host(:${a.b}) .expanded-toggle,
            :host(:${a.b}) .checkbox,
            :host(:${a.b}) .radio,
            :host([checked="true"]:hover) .checkbox,
            :host([checked="true"]:hover) .radio,
            :host([checked="true"]:${a.b}) .checkbox,
            :host([checked="true"]:${a.b}) .radio {
                border-color: ${u.H.HighlightText};
            }

            :host([aria-checked="true"]) {
                background: ${u.H.Highlight};
                color: ${u.H.HighlightText};
            }

            :host([aria-checked="true"]) .checkbox-indicator,
            :host([aria-checked="true"]) ::slotted([slot="checkbox-indicator"]),
            :host([aria-checked="true"]) ::slotted([slot="radio-indicator"]) {
                fill: ${u.H.Highlight};
            }

            :host([aria-checked="true"]) .radio-indicator {
                background: ${u.H.Highlight};
            }
        `));var C=n(49218),k=n(93703),S=n(41472),T=n(47548),L=n(95185),O=n(33818),I=n(17503),A=n(12695);const H=function(t={}){return C.dy`
    <template
        aria-haspopup="${t=>t.hasSubmenu?"menu":void 0}"
        aria-checked="${t=>t.role!==A.O.menuitem?t.checked:void 0}"
        aria-disabled="${t=>t.disabled}"
        aria-expanded="${t=>t.expanded}"
        @keydown="${(t,e)=>t.handleMenuItemKeyDown(e.event)}"
        @click="${(t,e)=>t.handleMenuItemClick(e.event)}"
        @mouseover="${(t,e)=>t.handleMouseOver(e.event)}"
        @mouseout="${(t,e)=>t.handleMouseOut(e.event)}"
    >
            ${(0,k.g)((t=>t.role===A.O.menuitemcheckbox),C.dy`
                    <div part="input-container" class="input-container">
                        <span part="checkbox" class="checkbox">
                            <slot name="checkbox-indicator">
                                ${(0,I.A)(t.checkboxIndicator)}
                            </slot>
                        </span>
                    </div>
                `)}
            ${(0,k.g)((t=>t.role===A.O.menuitemradio),C.dy`
                    <div part="input-container" class="input-container">
                        <span part="radio" class="radio">
                            <slot name="radio-indicator">
                                ${(0,I.A)(t.radioIndicator)}
                            </slot>
                        </span>
                    </div>
                `)}
        </div>
        ${(0,O.m9)(t)}
        <span class="content" part="content">
            <slot></slot>
        </span>
        ${(0,O.LC)(t)}
        ${(0,k.g)((t=>t.hasSubmenu),C.dy`
                <div
                    part="expand-collapse-glyph-container"
                    class="expand-collapse-glyph-container"
                >
                    <span part="expand-collapse" class="expand-collapse">
                        <slot name="expand-collapse-indicator">
                            ${(0,I.A)(t.expandCollapseGlyph)}
                        </slot>
                    </span>
                </div>
            `)}
        <span
            ?hidden="${t=>!t.expanded}"
            class="submenu-container"
            part="submenu-container"
            ${(0,S.i)("submenuContainer")}
        >
            <slot name="submenu" ${(0,T.Q)({property:"slottedSubmenu",filter:(0,L.R)("[role='menu']")})}></slot>
        </span>
    </template>
    `}({checkboxIndicator:C.dy`
        <svg
            aria-hidden="true"
            part="checkbox-indicator"
            class="checkbox-indicator"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.143 12.6697L15.235 4.5L16.8 5.90363L8.23812 15.7667L3.80005 11.2556L5.27591 9.7555L8.143 12.6697Z"
            />
        </svg>
    `,expandCollapseGlyph:C.dy`
        <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            class="expand-collapse-glyph"
            part="expand-collapse-glyph"
        >
            <path
                d="M5.00001 12.3263C5.00124 12.5147 5.05566 12.699 5.15699 12.8578C5.25831 13.0167 5.40243 13.1437 5.57273 13.2242C5.74304 13.3047 5.9326 13.3354 6.11959 13.3128C6.30659 13.2902 6.4834 13.2152 6.62967 13.0965L10.8988 8.83532C11.0739 8.69473 11.2153 8.51658 11.3124 8.31402C11.4096 8.11146 11.46 7.88966 11.46 7.66499C11.46 7.44033 11.4096 7.21853 11.3124 7.01597C11.2153 6.81341 11.0739 6.63526 10.8988 6.49467L6.62967 2.22347C6.48274 2.10422 6.30501 2.02912 6.11712 2.00691C5.92923 1.9847 5.73889 2.01628 5.56823 2.09799C5.39757 2.17969 5.25358 2.30817 5.153 2.46849C5.05241 2.62882 4.99936 2.8144 5.00001 3.00369V12.3263Z"
            />
        </svg>
    `,radioIndicator:C.dy`
        <svg
            aria-hidden="true"
            part="radio-indicator"
            class="radio-indicator"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.143 12.6697L15.235 4.5L16.8 5.90363L8.23812 15.7667L3.80005 11.2556L5.27591 9.7555L8.143 12.6697Z"
            />
        </svg>
    `}),D=o.h.compose({name:`${i.H.prefix}-menu-item`,template:H,styles:$})},79406:function(t,e,n){"use strict";n.d(e,{h:function(){return s}});var i=n(33940),o=n(41034),r=n(42590);class s extends o.WN{connectedCallback(){super.connectedCallback(),this.startColumnCount||(this.startColumnCount=1)}}(0,i.gn)([(0,r.Lj)({attribute:"start-column-count"}),(0,i.w6)("design:type",Object)],s.prototype,"startColumnCount",void 0)},37627:function(t,e,n){"use strict";n.d(e,{D:function(){return O}});var i=n(63070),o=n(33940),r=n(28904),s=n(58968),a=n(99452),l=n(7986),c=n(94537),u=n(12695),d=n(41034);class h extends r.H{constructor(){super(...arguments),this.expandedItem=null,this.focusIndex=-1,this.isNestedMenu=()=>null!==this.parentElement&&(0,l.Re)(this.parentElement)&&"menuitem"===this.parentElement.getAttribute("role"),this.handleFocusOut=t=>{if(!this.contains(t.relatedTarget)&&void 0!==this.menuItems){this.collapseExpandedItem();const t=this.menuItems.findIndex(this.isFocusableElement);this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.menuItems[t].setAttribute("tabindex","0"),this.focusIndex=t}},this.handleItemFocus=t=>{const e=t.target;void 0!==this.menuItems&&e!==this.menuItems[this.focusIndex]&&(this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=this.menuItems.indexOf(e),e.setAttribute("tabindex","0"))},this.handleExpandedChanged=t=>{if(t.defaultPrevented||null===t.target||void 0===this.menuItems||this.menuItems.indexOf(t.target)<0)return;t.preventDefault();const e=t.target;null===this.expandedItem||e!==this.expandedItem||!1!==e.expanded?e.expanded&&(null!==this.expandedItem&&this.expandedItem!==e&&(this.expandedItem.expanded=!1),this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.expandedItem=e,this.focusIndex=this.menuItems.indexOf(e),e.setAttribute("tabindex","0")):this.expandedItem=null},this.changeHandler=t=>{if(void 0===this.menuItems)return;const e=t.target,n=this.menuItems.indexOf(e);if(-1!==n&&"menuitemradio"===e.role&&!0===e.checked){for(let t=n-1;t>=0;--t){const e=this.menuItems[t],n=e.getAttribute("role");if(n===u.O.menuitemradio&&(e.checked=!1),"separator"===n)break}const t=this.menuItems.length-1;for(let e=n+1;e<=t;++e){const t=this.menuItems[e],n=t.getAttribute("role");if(n===u.O.menuitemradio&&(t.checked=!1),"separator"===n)break}}},this.isMenuItemElement=t=>t instanceof d.WN||(0,l.Re)(t)&&t.getAttribute("role")in h.focusableElementRoles,this.isFocusableElement=t=>this.isMenuItemElement(t)}itemsChanged(t,e){this.$fastController.isConnected&&void 0!==this.menuItems&&this.setItems()}connectedCallback(){super.connectedCallback(),s.H.enqueue((()=>{this.setItems()})),this.addEventListener("change",this.changeHandler)}disconnectedCallback(){super.disconnectedCallback(),this.removeItemListeners(),this.menuItems=void 0,this.removeEventListener("change",this.changeHandler)}focus(){this.setFocus(0,1)}collapseExpandedItem(){null!==this.expandedItem&&(this.expandedItem.expanded=!1,this.expandedItem=null)}handleMenuKeyDown(t){if(!t.defaultPrevented&&void 0!==this.menuItems)switch(t.key){case c.iF:return void this.setFocus(this.focusIndex+1,1);case c.SB:return void this.setFocus(this.focusIndex-1,-1);case c.Kh:return void this.setFocus(this.menuItems.length-1,-1);case c.tU:return void this.setFocus(0,1);default:return!0}}removeItemListeners(t=this.items){t.forEach((t=>{t.removeEventListener("focus",this.handleItemFocus),t.removeEventListener("expanded-changed",this.handleExpandedChanged),a.y$.getNotifier(t).unsubscribe(this,"hidden")}))}setItems(){const t=Array.from(this.children);this.removeItemListeners(t),t.forEach((t=>a.y$.getNotifier(t).subscribe(this,"hidden")));const e=t.filter((t=>!t.hasAttribute("hidden")));this.menuItems=e;const n=this.menuItems.filter(this.isMenuItemElement);n.length&&(this.focusIndex=0),n.forEach(((t,e)=>{t.setAttribute("tabindex",0===e?"0":"-1"),t.addEventListener("expanded-change",this.handleExpandedChanged),t.addEventListener("focus",this.handleItemFocus)}))}handleChange(t,e){"hidden"===e&&this.setItems()}setFocus(t,e){if(void 0!==this.menuItems)for(;t>=0&&t<this.menuItems.length;){const n=this.menuItems[t];if(this.isFocusableElement(n)){this.focusIndex>-1&&this.menuItems.length>=this.focusIndex-1&&this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=t,n.setAttribute("tabindex","0"),n.focus();break}t+=e}}}h.focusableElementRoles=u.O,(0,o.gn)([a.LO,(0,o.w6)("design:type",Array)],h.prototype,"items",void 0);var p=n(38492),f=n(79406),g=n(27460);class v extends h{setItems(){super.setItems();const t=this.menuItems?.filter(this.isMenuItemElement);t?.forEach(((e,n)=>{const i=t?.reduce(((t,e)=>{const n=v.elementIndent(e);return Math.max(t,n)}),0);e instanceof f.h&&(e.startColumnCount=i)}))}static elementIndent(t){const e=t.getAttribute("role"),n=t.querySelector("[slot=start]");return e&&e!==u.O.menuitem?n?2:1:n?1:0}connectedCallback(){super.connectedCallback(),p.I.setValueFor(this,g.s)}}var m=n(78923),b=n(27186),y=n(62734),x=n(26512),w=n(55135),$=n(40009),C=n(71942);const k=m.i`
    ${(0,b.j)("block")} :host {
        --elevation: 11;
        background: ${p.I};
        border: calc(${x.H} * 1px) solid transparent;
        border-radius: ${w.rS};
        ${y.XC}
        margin: 0;
        border-radius: calc(${w.UW} * 1px);
        padding: calc(${$._5} * 1px) 0;
        max-width: 368px;
        min-width: 64px;
    }

    :host([slot="submenu"]) {
        width: max-content;
        margin: 0 calc(${$._5} * 1px);
    }

    ::slotted(hr) {
        box-sizing: content-box;
        height: 0;
        margin: 0;
        border: none;
        border-top: calc(${x.H} * 1px) solid ${C.dt};
    }
`;var S=n(49218),T=n(47548);const L=S.dy`
        <template
            slot="${t=>t.slot?t.slot:t.isNestedMenu()?"submenu":void 0}"
            role="menu"
            @keydown="${(t,e)=>t.handleMenuKeyDown(e.event)}"
            @focusout="${(t,e)=>t.handleFocusOut(e.event)}"
        >
            <slot ${(0,T.Q)("items")}></slot>
        </template>
    `,O=v.compose({name:`${i.H.prefix}-menu`,template:L,styles:k})},40925:function(t,e,n){"use strict";n.d(e,{D:function(){return $}});var i=n(33940),o=n(28904),r=n(42590),s=n(99452);class a extends o.H{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const t="number"==typeof this.min?this.min:0,e="number"==typeof this.max?this.max:100,n="number"==typeof this.value?this.value:0,i=e-t;this.percentComplete=0===i?0:Math.fround((n-t)/i*100)}}(0,i.gn)([(0,r.Lj)({converter:r.Id}),(0,i.w6)("design:type",Object)],a.prototype,"value",void 0),(0,i.gn)([(0,r.Lj)({converter:r.Id}),(0,i.w6)("design:type",Number)],a.prototype,"min",void 0),(0,i.gn)([(0,r.Lj)({converter:r.Id}),(0,i.w6)("design:type",Number)],a.prototype,"max",void 0),(0,i.gn)([(0,r.Lj)({mode:"boolean"}),(0,i.w6)("design:type",Boolean)],a.prototype,"paused",void 0),(0,i.gn)([s.LO,(0,i.w6)("design:type",Number)],a.prototype,"percentComplete",void 0);var l=n(63070),c=n(78923),u=n(27186),d=n(29717),h=n(22798),p=n(2658),f=n(35680),g=n(958),v=n(74449);const m=c.i`
    ${(0,u.j)("flex")} :host {
        align-items: center;
        outline: none;
        height: calc(${p.i} * 1px);
        width: calc(${p.i} * 1px);
        margin: calc(${p.i} * 1px) 0;
    }

    .progress {
        height: 100%;
        width: 100%;
    }

    .background {
        stroke: ${f.wF};
        fill: none;
        stroke-width: 2px;
    }

    .determinate {
        stroke: ${g.Av};
        fill: none;
        stroke-width: 2px;
        stroke-linecap: round;
        transform-origin: 50% 50%;
        transform: rotate(-90deg);
        transition: all 0.2s ease-in-out;
    }

    .indeterminate-indicator-1 {
        stroke: ${g.Av};
        fill: none;
        stroke-width: 2px;
        stroke-linecap: round;
        transform-origin: 50% 50%;
        transform: rotate(-90deg);
        transition: all 0.2s ease-in-out;
        animation: spin-infinite 2s linear infinite;
    }

    :host([paused]) .indeterminate-indicator-1 {
        animation-play-state: paused;
        stroke: ${f.wF};
    }

    :host([paused]) .determinate {
        stroke: ${v.Q};
    }

    @keyframes spin-infinite {
        0% {
            stroke-dasharray: 0.01px 43.97px;
            transform: rotate(0deg);
        }
        50% {
            stroke-dasharray: 21.99px 21.99px;
            transform: rotate(450deg);
        }
        100% {
            stroke-dasharray: 0.01px 43.97px;
            transform: rotate(1080deg);
        }
    }
`.withBehaviors((0,d.vF)(c.i`
            .indeterminate-indicator-1,
            .determinate {
                stroke: ${h.H.FieldText};
            }
            .background {
                stroke: ${h.H.Field};
            }
            :host([paused]) .indeterminate-indicator-1 {
                stroke: ${h.H.Field};
            }
            :host([paused]) .determinate {
                stroke: ${h.H.GrayText};
            }
        `));var b=n(49218),y=n(93703),x=n(17503);const w=function(t={}){return b.dy`
        <template
            role="progressbar"
            aria-valuenow="${t=>t.value}"
            aria-valuemin="${t=>t.min}"
            aria-valuemax="${t=>t.max}"
        >
            ${(0,y.g)((t=>"number"==typeof t.value),b.dy`
                    <svg
                        class="progress"
                        part="progress"
                        viewBox="0 0 16 16"
                        slot="determinate"
                    >
                        <circle
                            class="background"
                            part="background"
                            cx="8px"
                            cy="8px"
                            r="7px"
                        ></circle>
                        <circle
                            class="determinate"
                            part="determinate"
                            style="stroke-dasharray: ${t=>44*t.percentComplete/100+"px 44px"}"
                            cx="8px"
                            cy="8px"
                            r="7px"
                        ></circle>
                    </svg>
                `,b.dy`
                    <slot name="indeterminate">
                        ${(0,x.A)(t.indeterminateIndicator)}
                    </slot>
                `)}
        </template>
    `}({indeterminateIndicator:b.dy`
        <svg class="progress" part="progress" viewBox="0 0 16 16">
            <circle
                class="background"
                part="background"
                cx="8px"
                cy="8px"
                r="7px"
            ></circle>
            <circle
                class="indeterminate-indicator-1"
                part="indeterminate-indicator-1"
                cx="8px"
                cy="8px"
                r="7px"
            ></circle>
        </svg>
    `}),$=class extends a{}.compose({name:`${l.H.prefix}-progress-ring`,template:w,styles:m})},51576:function(t,e,n){"use strict";n.d(e,{D:function(){return R}});var i=n(33940),o=n(42590),r=n(99452),s=n(94537),a=n(28904),l=n(23526);class c extends a.H{}class u extends((0,l.V2)(c)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class d extends u{constructor(){super(),this.initialValue="on",this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=this.defaultChecked??!1,this.dirtyChecked=!1))}connectedCallback(){super.connectedCallback(),this.validate(),"radiogroup"!==this.parentElement?.getAttribute("role")&&null===this.getAttribute("tabindex")&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=this.defaultChecked??!1,this.dirtyChecked=!1))}isInsideRadioGroup(){return null!==this.closest("[role=radiogroup]")}keypressHandler(t){if(t.key!==s.BI)return!0;this.checked||this.readOnly||(this.checked=!0)}clickHandler(t){this.disabled||this.readOnly||this.checked||(this.checked=!0)}}(0,i.gn)([(0,o.Lj)({attribute:"readonly",mode:"boolean"}),(0,i.w6)("design:type",Boolean)],d.prototype,"readOnly",void 0),(0,i.gn)([r.LO,(0,i.w6)("design:type",String)],d.prototype,"name",void 0),(0,i.gn)([r.LO,(0,i.w6)("design:type",Array)],d.prototype,"defaultSlottedNodes",void 0);var h=n(63070),p=n(78923),f=n(27186),g=n(67739),v=n(24484),m=n(29717),b=n(22798),y=n(2658),x=n(40009),w=n(26512),$=n(60184),C=n(39238),k=n(53131),S=n(42689),T=n(27782),L=n(38492),O=n(17993),I=n(10970);const A=p.i`
    ${(0,f.j)("inline-flex")} :host {
        --input-size: calc((${y.i} / 2) + ${x._5});
        align-items: center;
        outline: none;
        margin: calc(${x._5} * 1px) 0;
        ${""} user-select: none;
        position: relative;
        flex-direction: row;
        transition: all 0.2s ease-in-out;
    }

    .control {
        position: relative;
        width: calc(var(--input-size) * 1px);
        height: calc(var(--input-size) * 1px);
        box-sizing: border-box;
        border-radius: 50%;
        border: calc(${w.H} * 1px) solid ${$.rU};
        background: ${C._B};
        outline: none;
        cursor: pointer;
    }

    .label__hidden {
        display: none;
        visibility: hidden;
    }

    .label {
        font-family: ${k.S};
        color: ${S.C};
        ${""} padding-inline-start: calc(${x._5} * 2px + 2px);
        margin-inline-end: calc(${x._5} * 2px + 2px);
        cursor: pointer;
        font-size: ${T.c};
        line-height: ${T.R};
    }

    .control,
    .checked-indicator {
        flex-shrink: 0;
    }

    .checked-indicator {
        position: absolute;
        top: 5px;
        left: 5px;
        right: 5px;
        bottom: 5px;
        border-radius: 50%;
        display: inline-block;
        background: ${S.C};
        fill: ${S.C};
        opacity: 0;
        pointer-events: none;
    }

    :host(:enabled) .control:hover {
        background: ${C.Tm};
        border-color: ${$.gK};
    }

    :host(:enabled) .control:active {
        background: ${C.Iu};
        border-color: ${$.ek};
    }

    :host(:${g.b}) .control {
        box-shadow: 0 0 0 2px ${L.I}, 0 0 0 4px ${O.yG};
        border-color: ${O.yG};
    }

    :host([disabled]) .label,
    :host([readonly]) .label,
    :host([readonly]) .control,
    :host([disabled]) .control {
        cursor: ${v.H};
    }

    :host([aria-checked="true"]) .checked-indicator {
        opacity: 1;
    }

    :host([disabled]) {
        opacity: ${I.V};
    }
`.withBehaviors((0,m.vF)(p.i`
            .control {
                forced-color-adjust: none;
                border-color: ${b.H.FieldText};
                background: ${b.H.Field};
            }
            :host(:enabled) .control:hover,
            .control:active {
                border-color: ${b.H.Highlight};
                background: ${b.H.Field};
            }
            :host(:${g.b}) .control {
                border-color: ${b.H.Highlight};
                box-shadow: 0 0 0 2px ${b.H.Field},
                    0 0 0 4px ${b.H.FieldText};
            }
            :host([aria-checked="true"]:${g.b}:enabled) .control {
                border-color: ${b.H.Highlight};
                box-shadow: 0 0 0 2px ${b.H.Field},
                    0 0 0 4px ${b.H.FieldText};
            }
            :host([aria-checked="true"]:enabled) .control:hover,
            .control:active {
                border-color: ${b.H.Highlight};
                background: ${b.H.Highlight};
            }
            :host([aria-checked="true"]) .checked-indicator {
                background: ${b.H.Highlight};
                fill: ${b.H.Highlight};
            }
            :host([aria-checked="true"]) .control:hover .checked-indicator {
                background: ${b.H.HighlightText};
                fill: ${b.H.HighlightText};
            }
            :host([disabled]) {
                forced-color-adjust: none;
                opacity: 1;
            }
            :host([disabled]) .label {
                color: ${b.H.GrayText};
            }
            :host([disabled]) .control,
            :host([aria-checked="true"][disabled]) .control:hover,
            .control:active {
                background: ${b.H.Field};
                border-color: ${b.H.GrayText};
            }
            :host([disabled]) .checked-indicator,
            :host([aria-checked="true"][disabled]) .control:hover .checked-indicator {
                fill: ${b.H.GrayText};
                background: ${b.H.GrayText};
            }
        `));var H=n(49218),D=n(47548),F=n(86755),E=n(17503);const B=function(t={}){return H.dy`
        <template
            role="radio"
            aria-checked="${t=>t.checked}"
            aria-required="${t=>t.required}"
            aria-disabled="${t=>t.disabled}"
            aria-readonly="${t=>t.readOnly}"
            @keypress="${(t,e)=>t.keypressHandler(e.event)}"
            @click="${(t,e)=>t.clickHandler(e.event)}"
        >
            <div part="control" class="control">
                <slot name="checked-indicator">
                    ${(0,E.A)(t.checkedIndicator)}
                </slot>
            </div>
            <label
                part="label"
                class="${t=>["label",!t.defaultSlottedNodes?.length&&"label__hidden"].filter(Boolean).join(" ")}"
            >
                <slot
                    ${(0,D.Q)({property:"defaultSlottedNodes",filter:F.E})}
                ></slot>
            </label>
        </template>
    `}({checkedIndicator:H.dy`
        <div part="checked-indicator" class="checked-indicator"></div>
    `}),R=d.compose({name:`${h.H.prefix}-radio`,template:B,styles:A})},79659:function(t,e,n){"use strict";n.d(e,{D:function(){return c}});var i=n(63070),o=n(53839),r=n(27663),s=n(3923),a=n(49218);const l=(0,s.U)({indicator:a.dy`
        <svg
            class="select-indicator"
            part="select-indicator"
            viewBox="0 0 12 7"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11.85.65c.2.2.2.5 0 .7L6.4 6.84a.55.55 0 01-.78 0L.14 1.35a.5.5 0 11.71-.7L6 5.8 11.15.65c.2-.2.5-.2.7 0z"
            />
        </svg>
    `}),c=o.x.compose({name:`${i.H.prefix}-select`,template:l,styles:r.W2})},53839:function(t,e,n){"use strict";n.d(e,{x:function(){return x}});var i=n(33940),o=n(50123),r=n(50937),s=n(58968),a=n(99452),l=n(42590),c=n(62512),u=n(94537),d=n(98296),h=n(33818),p=n(31289),f=n(13031),g=n(23526);class v extends f.b{}class m extends((0,g.Um)(v)){constructor(){super(...arguments),this.proxy=document.createElement("select")}}class b extends m{constructor(){super(...arguments),this.open=!1,this.shiftListbox="0",this.listboxId=(0,c.EL)("listbox-")}shiftListboxChanged(t,e){void 0!==e&&this.setPositioning()}openChanged(t,e){if(this.collapsible){if(this.open)return this.ariaControls=this.listboxId,this.ariaExpanded="true",s.H.enqueue((()=>this.setPositioning())),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,void s.H.enqueue((()=>this.focus()));this.cleanup?.(),this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||"number"==typeof this.size)}get value(){return a.y$.track(this,"value"),this._value}set value(t){const e=`${this._value}`;if(this._options?.length){const e=this._options.findIndex((e=>e.value===t)),n=this._options[this.selectedIndex]?.value??null,i=this._options[e]?.value??null;-1!==e&&n===i||(t="",this.selectedIndex=e),t=this.firstSelectedOption?.value??t}e!==t&&(this._value=t,super.valueChanged(e,t),a.y$.notify(this,"value"),this.updateDisplayValue())}updateValue(t){this.$fastController.isConnected&&(this.value=this.firstSelectedOption?.value??""),t&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(t,e){super.selectedIndexChanged(t,e),this.updateValue()}setPositioning(){this.$fastController.isConnected&&(this.cleanup=(0,o.Me)(this,this.listbox,(async()=>{const t=this.shiftListbox?parseFloat(this.shiftListbox):0,{middlewareData:e,x:n,y:i}=await(0,o.oo)(this.control,this.listbox,{placement:"bottom",strategy:"fixed",middleware:[(0,r.RR)(),(0,r.uY)({padding:t}),(0,r.dp)({apply:({availableHeight:t,rects:e})=>{Object.assign(this.listbox.style,{maxHeight:`${t}px`,minWidth:`${e.reference.width}px`})}}),(0,r.Cp)()]});e.hide?.referenceHidden?this.open=!1:Object.assign(this.listbox.style,{position:"fixed",top:"0",left:"0",transform:`translate(${n}px, ${i}px)`})})))}get displayValue(){return a.y$.track(this,"displayValue"),this.firstSelectedOption?.text??""}disabledChanged(t,e){super.disabledChanged&&super.disabledChanged(t,e),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),-1===this.selectedIndex&&(this.selectedIndex=0)}clickHandler(t){if(!this.disabled){if(this.open){const e=t.target.closest("option,[role=option]");if(e&&e.disabled)return}return super.clickHandler(t),this.open=this.collapsible&&!this.open,this.open||this.indexWhenOpened===this.selectedIndex||this.updateValue(!0),!0}}focusoutHandler(t){if(super.focusoutHandler(t),!this.open)return!0;const e=t.relatedTarget;this.isSameNode(e)?this.focus():this.options?.includes(e)||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(t,e){super.handleChange(t,e),"value"===e&&this.updateValue()}slottedOptionsChanged(t,e){this.options.forEach((t=>{a.y$.getNotifier(t).unsubscribe(this,"value")})),super.slottedOptionsChanged(t,e),this.options.forEach((t=>{a.y$.getNotifier(t).subscribe(this,"value")})),this.setProxyOptions(),this.updateValue()}mousedownHandler(t){return t.offsetX>=0&&t.offsetX<=this.listbox?.scrollWidth?super.mousedownHandler(t):this.collapsible}multipleChanged(t,e){super.multipleChanged(t,e),this.proxy&&(this.proxy.multiple=e)}selectedOptionsChanged(t,e){super.selectedOptionsChanged(t,e),this.options?.forEach(((t,e)=>{const n=this.proxy?.options.item(e);n&&(n.selected=t.selected)}))}setDefaultSelectedOption(){const t=(this.options??Array.from(this.children).filter(d.z.slottedOptionFilter))?.findIndex((t=>t.hasAttribute("selected")||t.selected||t.value===this.value));this.selectedIndex=-1===t?0:t}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach((t=>{const e=t.proxy||(t instanceof HTMLOptionElement?t.cloneNode():null);e&&this.proxy.options.add(e)})))}keydownHandler(t){super.keydownHandler(t);const e=t.key||t.key.charCodeAt(0);switch(e){case u.BI:t.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break;case u.tU:case u.Kh:t.preventDefault();break;case u.kL:t.preventDefault(),this.open=!this.open;break;case u.CX:this.collapsible&&this.open&&(t.preventDefault(),this.open=!1);break;case u.oM:return this.collapsible&&this.open&&(t.preventDefault(),this.open=!1),!0}return this.open||this.indexWhenOpened===this.selectedIndex||(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(e===u.iF||e===u.SB)}connectedCallback(){super.connectedCallback(),this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),this.cleanup?.(),super.disconnectedCallback()}sizeChanged(t,e){super.sizeChanged(t,e),this.proxy&&(this.proxy.size=e)}updateDisplayValue(){this.collapsible&&a.y$.notify(this,"displayValue")}}(0,i.gn)([(0,l.Lj)({attribute:"open",mode:"boolean"}),(0,i.w6)("design:type",Boolean)],b.prototype,"open",void 0),(0,i.gn)([(0,l.Lj)({attribute:"shift-listbox"}),(0,i.w6)("design:type",String)],b.prototype,"shiftListbox",void 0),(0,i.gn)([a.lk,(0,i.w6)("design:type",Boolean),(0,i.w6)("design:paramtypes",[])],b.prototype,"collapsible",null),(0,i.gn)([a.LO,(0,i.w6)("design:type",HTMLElement)],b.prototype,"control",void 0);class y{}(0,i.gn)([a.LO,(0,i.w6)("design:type",Object)],y.prototype,"ariaControls",void 0),(0,p.e)(y,d.x),(0,p.e)(b,h.hW,y);class x extends b{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}(0,i.gn)([(0,l.Lj)({mode:"fromView"}),(0,i.w6)("design:type",String)],x.prototype,"appearance",void 0)},27663:function(t,e,n){"use strict";n.d(e,{Cw:function(){return O},W2:function(){return A},WK:function(){return I}});var i=n(78923),o=n(67739),r=n(27186),s=n(24484),a=n(29717),l=n(22798),c=n(2658),u=n(62734),d=n(82636),h=n(35680),p=n(17993),f=n(39238),g=n(55135),v=n(26512),m=n(28632),b=n(42689),y=n(53131),x=n(27460),w=n(40009),$=n(27782),C=n(26741),k=n(958),S=n(23132),T=n(10970),L=n(80260);const O=i.i`
    :host([appearance="filled"]) {
        background: ${h.wF};
        border-color: transparent;
    }

    :host([appearance="filled"]:hover:not([disabled])) {
        background: ${h.Xi};
        border-color: transparent;
    }

    :host([appearance="filled"]:${o.b}) {
        border-color: ${p.yG};
    }
`,I=i.i`
    ${(0,r.j)("inline-flex")} :host {
        --elevation: 14;
        background: ${f._B};
        border-radius: calc(${g.UW} * 1px);
        border: calc(${v.H} * 1px) solid ${m.ak};
        box-sizing: border-box;
        color: ${b.C};
        font-family: ${y.S};
        height: calc(${c.i} * 1px);
        position: relative;
        user-select: none;
        min-width: 250px;
        vertical-align: top;
    }

    .listbox {
        ${u.XC}
        background: ${x.s};
        border-radius: calc(${g.UW} * 1px);
        box-sizing: border-box;
        display: inline-flex;
        flex-direction: column;
        left: 0;
        max-height: calc(var(--max-height) - (${c.i} * 1px));
        padding: calc(${w._5} * 1px) 0;
        overflow-y: auto;
        position: fixed;
        top: 0;
        z-index: 1;
        margin: 1px 0;
    }

    .listbox[hidden] {
        display: none;
    }

    .control {
        align-items: center;
        box-sizing: border-box;
        cursor: pointer;
        display: flex;
        font-size: ${$.c};
        font-family: inherit;
        min-height: 100%;
        line-height: ${$.R};
        padding: 0 calc(${w._5} * 2.25px);
        width: 100%;
    }

    :host(:not([disabled]):hover) {
        background: ${f.Tm};
        border-color: ${m.QP};
    }

    :host(:focus) {
        outline: none;
    }

    :host(:${o.b}) {
        border-color: ${p.yG};
        outline: none;
        box-shadow: 0 0 0 1px inset ${p.yG};
    }

    :host([open]:${o.b}) {
        border-color: ${m.ak};
        outline: none;
        box-shadow: none;
    }

    :host(:${o.b}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
        box-shadow: 0 0 0 calc(${v.vx} * 1px) inset ${C.a2};
        border-color: ${p.yG};
        background: ${k.D8};
        color: ${S.$u};
    }

    :host([disabled]) {
        cursor: ${s.H};
        opacity: ${T.V};
    }

    :host([disabled]) .control {
        cursor: ${s.H};
        user-select: none;
    }

    :host([disabled]:hover) {
        background: ${L.jq};
        color: ${b.C};
        fill: currentcolor;
    }

    :host(:not([disabled])) .control:active {
        background: ${f.Iu};
        border-color: ${m.c1};
        border-radius: calc(${g.UW} * 1px);
    }

    .selected-value {
        font-family: inherit;
        flex: 1 1 auto;
        text-align: start;
    }

    .indicator {
        flex: 0 0 auto;
        margin-inline-start: 1em;
    }

    ::slotted([name="listbox"]) {
        display: none;
        width: 100%;
    }

    :host([open]) ::slotted([name="listbox"]) {
        display: flex;
        position: absolute;
        ${u.XC}
    }

    ::slotted([slot="end"]) {
        margin-inline-start: auto;
    }

    ::slotted([slot="start"]),
    ::slotted([slot="end"]),
    .indicator,
    .select-indicator,
    ::slotted(svg) {
        ${""}
        fill: currentcolor;
        height: 1em;
        min-height: calc(${w._5} * 4px);
        min-width: calc(${w._5} * 4px);
        width: 1em;
    }

    ::slotted([role="option"]) {
        flex: 0 0 auto;
    }
`.withBehaviors((0,d.H)("filled",O),(0,a.vF)(i.i`
            :host([disabled]) {
                border-color: ${l.H.GrayText};
                background-color: ${l.H.ButtonFace};
                color: ${l.H.GrayText};
                opacity: 1;
                forced-color-adjust: none;
            }

            :host([disabled]:hover) {
                background: ${l.H.ButtonFace};
            }

            :host([disabled]) .control {
                color: ${l.H.GrayText};
                border-color: ${l.H.GrayText};
            }

            :host(:not([disabled]):hover) {
                background: ${l.H.ButtonFace};
                border-color: ${l.H.Highlight};
            }

            :host(:${o.b}) {
                forced-color-adjust: none;
                background: ${l.H.ButtonFace};
                border-color: ${l.H.Highlight};
                box-shadow: 0 0 0 1px inset ${l.H.Highlight};
                color: ${l.H.ButtonText};
                fill: currentcolor;
            }

            :host([open]) .listbox {
                background: ${l.H.ButtonFace};
                border: 1px solid ${l.H.ButtonText};
            }

            :host(:${o.b}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
                background: ${l.H.Highlight};
                border-color: ${l.H.ButtonText};
                box-shadow: 0 0 0 calc(${v.vx} * 1px) inset
                    ${l.H.HighlightText};
                color: ${l.H.HighlightText};
                fill: currentcolor;
            }

            ::slotted([role="option"]:not([aria-selected="true"]):not([disabled]):hover) {
                forced-color-adjust: none;
                color: ${l.H.ButtonText};
                background: ${l.H.ButtonFace};
                border-color: ${l.H.Highlight};
                box-shadow: none;
            }
        `)),A=i.i`
    ${I}
`},45597:function(t,e,n){"use strict";n.d(e,{G6:function(){return C},O8:function(){return L},Xu:function(){return S},cg:function(){return O},jQ:function(){return k},vt:function(){return T}});var i=n(78923),o=n(27186),r=n(67739),s=n(29717),a=n(22798),l=n(2658),c=n(53131),u=n(27782),d=n(35680),h=n(42689),p=n(55135),f=n(40009),g=n(26512),v=n(17993),m=n(958),b=n(23132),y=n(26741),x=n(26738),w=n(28632),$=n(80260);const C=i.i`
    ${(0,o.j)("inline-flex")} :host {
        font-family: ${c.S};
        outline: none;
        font-size: ${u.c};
        line-height: ${u.R};
        height: calc(${l.i} * 1px);
        min-width: calc(${l.i} * 1px);
        background-color: ${d.wF};
        color: ${h.C};
        border-radius: calc(${p.UW} * 1px);
        fill: currentcolor;
        cursor: pointer;
    }

    .control {
        background: transparent;
        height: inherit;
        flex-grow: 1;
        box-sizing: border-box;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 0 calc((10 + (${f._5} * 2 * ${f.hV})) * 1px);
        white-space: nowrap;
        outline: none;
        text-decoration: none;
        border: calc(${g.H} * 1px) solid transparent;
        color: inherit;
        border-radius: inherit;
        fill: inherit;
        cursor: inherit;
        font-family: inherit;
    }

    .control,
    ::slotted([slot="end"]),
    ::slotted([slot="start"]) {
        font: inherit;
    }

    :host([icon-only]) .control,
    .control.icon-only {
        padding: 0;
        line-height: 0;
    }

    :host(:hover) {
        background-color: ${d.Xi};
    }

    :host(:active) {
        background-color: ${d.Gy};
    }

    ${""}
    .control:${r.b} {
        border: calc(${g.H} * 1px) solid ${v.yG};
        box-shadow: 0 0 0 calc((${g.vx} - ${g.H}) * 1px)
            ${v.yG};
    }

    .control::-moz-focus-inner {
        border: 0;
    }

    .content {
        pointer-events: none;
    }

    ::slotted([slot="start"]),
    ::slotted([slot="end"]) {
        display: flex;
        pointer-events: none;
    }

    ::slotted(svg) {
        ${""} width: 16px;
        height: 16px;
        pointer-events: none;
    }

    ::slotted([slot="start"]) {
        margin-inline-end: 11px;
    }

    ::slotted([slot="end"]) {
        margin-inline-start: 11px;
    }
`.withBehaviors((0,s.vF)(i.i`
        :host,
        :host([appearance="neutral"]) .control {
          background-color: ${a.H.ButtonFace};
          border-color: ${a.H.ButtonText};
          color: ${a.H.ButtonText};
          fill: currentcolor;
        }

        :host(:not([disabled][href]):hover),
        :host([appearance="neutral"]:not([disabled]):hover) .control {
          forced-color-adjust: none;
          background-color: ${a.H.Highlight};
          color: ${a.H.HighlightText};
        }

        .control:${r.b},
        :host([appearance="outline"]) .control:${r.b},
        :host([appearance="neutral"]:${r.b}) .control {
          forced-color-adjust: none;
          background-color: ${a.H.Highlight};
          border-color: ${a.H.ButtonText};
          box-shadow: 0 0 0 calc((${g.vx} - ${g.H}) * 1px) ${a.H.ButtonText};
          color: ${a.H.HighlightText};
        }

        .control:not([disabled]):hover,
        :host([appearance="outline"]) .control:hover {
          border-color: ${a.H.ButtonText};
        }

        :host([href]) .control {
          border-color: ${a.H.LinkText};
          color: ${a.H.LinkText};
        }

        :host([href]) .control:hover,
        :host(.neutral[href]) .control:hover,
        :host(.outline[href]) .control:hover,
        :host([href]) .control:${r.b}{
          forced-color-adjust: none;
          background: ${a.H.ButtonFace};
          border-color: ${a.H.LinkText};
          box-shadow: 0 0 0 1px ${a.H.LinkText} inset;
          color: ${a.H.LinkText};
          fill: currentcolor;
        }
    `)),k=i.i`
    :host([appearance="accent"]) {
        background: ${m.Av};
        color: ${b.w4};
    }

    :host([appearance="accent"]:hover) {
        background: ${m.OC};
        color: ${b.lJ};
    }

    :host([appearance="accent"]:active) .control:active {
        background: ${m.UE};
        color: ${b.Pp};
    }

    :host([appearance="accent"]) .control:${r.b} {
        box-shadow: 0 0 0 calc(${g.vx} * 1px) inset ${y.a2},
            0 0 0 calc((${g.vx} - ${g.H}) * 1px) ${v.yG};
    }
`.withBehaviors((0,s.vF)(i.i`
            :host([appearance="accent"]) .control {
                forced-color-adjust: none;
                background: ${a.H.Highlight};
                color: ${a.H.HighlightText};
            }

            :host([appearance="accent"]) .control:hover,
            :host([appearance="accent"]:active) .control:active {
                background: ${a.H.HighlightText};
                border-color: ${a.H.Highlight};
                color: ${a.H.Highlight};
            }

            :host([appearance="accent"]) .control:${r.b} {
                border-color: ${a.H.ButtonText};
                box-shadow: 0 0 0 2px ${a.H.HighlightText} inset;
            }

            :host([appearance="accent"][href]) .control {
                background: ${a.H.LinkText};
                color: ${a.H.HighlightText};
            }

            :host([appearance="accent"][href]) .control:hover {
                background: ${a.H.ButtonFace};
                border-color: ${a.H.LinkText};
                box-shadow: none;
                color: ${a.H.LinkText};
                fill: currentcolor;
            }

            :host([appearance="accent"][href]) .control:${r.b} {
                border-color: ${a.H.LinkText};
                box-shadow: 0 0 0 2px ${a.H.HighlightText} inset;
            }
        `)),S=i.i`
    :host([appearance="hypertext"]) {
        height: auto;
        font-size: inherit;
        line-height: inherit;
        background: transparent;
        min-width: 0;
    }

    :host([appearance="hypertext"]) .control {
        display: inline;
        padding: 0;
        border: none;
        box-shadow: none;
        border-radius: 0;
        line-height: 1;
    }
    :host a.control:not(:link) {
        background-color: transparent;
        cursor: default;
    }
    :host([appearance="hypertext"]) .control:link,
    :host([appearance="hypertext"]) .control:visited {
        background: transparent;
        color: ${x.go};
        border-bottom: calc(${g.H} * 1px) solid ${x.go};
    }
    :host([appearance="hypertext"]) .control:hover {
        border-bottom-color: ${x.D9};
    }
    :host([appearance="hypertext"]) .control:active {
        border-bottom-color: ${x.VN};
    }
    :host([appearance="hypertext"]) .control:${r.b} {
        border-bottom: calc(${g.vx} * 1px) solid ${v.yG};
        margin-bottom: calc(calc(${g.H} - ${g.vx}) * 1px);
    }
`.withBehaviors((0,s.vF)(i.i`
            :host([appearance="hypertext"]) .control:${r.b} {
                color: ${a.H.LinkText};
                border-bottom-color: ${a.H.LinkText};
            }
        `)),T=i.i`
    :host([appearance="lightweight"]) {
        background: transparent;
        color: ${x.go};
    }

    :host([appearance="lightweight"]) .control {
        padding: 0;
        height: initial;
        border: none;
        box-shadow: none;
        border-radius: 0;
    }

    :host([appearance="lightweight"]:hover) {
        color: ${x.D9};
    }

    :host([appearance="lightweight"]:active) {
        color: ${x.VN};
    }

    :host([appearance="lightweight"]) .content {
        position: relative;
    }

    :host([appearance="lightweight"]) .content::before {
        content: "";
        display: block;
        height: calc(${g.H} * 1px);
        position: absolute;
        top: calc(1em + 3px);
        width: 100%;
    }

    :host([appearance="lightweight"]:hover) .content::before {
        background: ${x.D9};
    }

    :host([appearance="lightweight"]:active) .content::before {
        background: ${x.VN};
    }

    :host([appearance="lightweight"]) .control:${r.b} .content::before {
        background: ${h.C};
        height: calc(${g.vx} * 1px);
    }
`.withBehaviors((0,s.vF)(i.i`
            :host([appearance="lightweight"]) {
                color: ${a.H.ButtonText};
            }
            :host([appearance="lightweight"]) .control:hover,
        :host([appearance="lightweight"]) .control:${r.b} {
                forced-color-adjust: none;
                background: ${a.H.ButtonFace};
                color: ${a.H.Highlight};
            }
            :host([appearance="lightweight"]) .control:hover .content::before,
        :host([appearance="lightweight"]) .control:${r.b} .content::before {
                background: ${a.H.Highlight};
            }

            :host([appearance="lightweight"][href]) .control:hover,
        :host([appearance="lightweight"][href]) .control:${r.b} {
                background: ${a.H.ButtonFace};
                box-shadow: none;
                color: ${a.H.LinkText};
            }

            :host([appearance="lightweight"][href]) .control:hover .content::before,
        :host([appearance="lightweight"][href]) .control:${r.b} .content::before {
                background: ${a.H.LinkText};
            }
        `)),L=i.i`
    :host([appearance="outline"]) {
        background: transparent;
        border-color: ${w.ak};
    }

    :host([appearance="outline"]:hover) {
        border-color: ${w.QP};
    }

    :host([appearance="outline"]:active) {
        border-color: ${w.c1};
    }

    :host([appearance="outline"]) .control {
        border-color: inherit;
    }

    :host([appearance="outline"]) .control:${r.b} {
        box-shadow: 0 0 0 calc((${g.vx} - ${g.H}) * 1px)
            ${v.yG};
        border-color: ${v.yG};
    }
`.withBehaviors((0,s.vF)(i.i`
            :host([appearance="outline"]) {
                border-color: ${a.H.ButtonText};
            }
            :host([appearance="outline"][href]) {
                border-color: ${a.H.LinkText};
            }
        `)),O=i.i`
    :host([appearance="stealth"]) {
        background: ${$.jq};
    }

    :host([appearance="stealth"]:hover) {
        background: ${$.Qp};
    }

    :host([appearance="stealth"]:active) {
        background: ${$.sG};
    }
`.withBehaviors((0,s.vF)(i.i`
            :host([appearance="stealth"]),
            :host([appearance="stealth"]) .control {
                forced-color-adjust: none;
                background: ${a.H.ButtonFace};
                border-color: transparent;
                color: ${a.H.ButtonText};
                fill: currentcolor;
            }

            :host([appearance="stealth"]:hover) .control {
                background: ${a.H.Highlight};
                border-color: ${a.H.Highlight};
                color: ${a.H.HighlightText};
                fill: currentcolor;
            }

            :host([appearance="stealth"]:${r.b}) .control {
                background: ${a.H.Highlight};
                box-shadow: 0 0 0 1px ${a.H.Highlight};
                color: ${a.H.HighlightText};
                fill: currentcolor;
            }

            :host([appearance="stealth"][href]) .control {
                color: ${a.H.LinkText};
            }

            :host([appearance="stealth"]:hover[href]) .control,
        :host([appearance="stealth"]:${r.b}[href]) .control {
                background: ${a.H.LinkText};
                border-color: ${a.H.LinkText};
                color: ${a.H.HighlightText};
                fill: currentcolor;
            }

            :host([appearance="stealth"]:${r.b}[href]) .control {
                box-shadow: 0 0 0 1px ${a.H.LinkText};
            }
        `))},94352:function(t,e,n){"use strict";n.d(e,{D:function(){return P}});var i=n(33940),o=n(42590),r=n(99452),s=n(94537),a=n(28904),l=n(23526);class c extends a.H{}class u extends((0,l.V2)(c)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class d extends u{constructor(){super(),this.initialValue="on",this.keypressHandler=t=>{if(!this.readOnly)switch(t.key){case s.kL:case s.BI:this.checked=!this.checked}},this.clickHandler=t=>{this.disabled||this.readOnly||(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly),this.readOnly?this.classList.add("readonly"):this.classList.remove("readonly")}checkedChanged(t,e){super.checkedChanged(t,e),this.checked?this.classList.add("checked"):this.classList.remove("checked")}}(0,i.gn)([(0,o.Lj)({attribute:"readonly",mode:"boolean"}),(0,i.w6)("design:type",Boolean)],d.prototype,"readOnly",void 0),(0,i.gn)([r.LO,(0,i.w6)("design:type",Array)],d.prototype,"defaultSlottedNodes",void 0);var h=n(63070),p=n(78923),f=n(27186),g=n(24484),v=n(67739),m=n(29717),b=n(22798),y=n(2658),x=n(22674),w=n(53131),$=n(40009),C=n(10970),k=n(39238),S=n(26512),T=n(60184),L=n(38492),O=n(17993),I=n(42689),A=n(27782),H=n(23132),D=n(958);const F=p.i`
    :host([hidden]) {
        display: none;
    }

    ${(0,f.j)("inline-flex")} :host {
        align-items: center;
        outline: none;
        font-family: ${w.S};
        margin: calc(${$._5} * 1px) 0;
        ${""} user-select: none;
    }

    :host([disabled]) {
        opacity: ${C.V};
    }

    :host([disabled]) .label,
    :host([readonly]) .label,
    :host([readonly]) .switch,
    :host([disabled]) .switch {
        cursor: ${g.H};
    }

    .switch {
        position: relative;
        outline: none;
        box-sizing: border-box;
        width: calc(((${y.i} / 2) + ${$._5}) * 2px);
        height: calc(((${y.i} / 2) + ${$._5}) * 1px);
        background: ${k._B};
        border-radius: calc(${y.i} * 1px);
        border: calc(${S.H} * 1px) solid ${T.rU};
    }

    :host(:enabled) .switch:hover {
        background: ${k.Tm};
        border-color: ${T.gK};
        cursor: pointer;
    }

    :host(:enabled) .switch:active {
        background: ${k.Iu};
        border-color: ${T.ek};
    }

    :host(:${v.b}) .switch {
        box-shadow: 0 0 0 2px ${L.I}, 0 0 0 4px ${O.yG};
        border-color: ${O.yG};
    }

    .checked-indicator {
        position: absolute;
        height: calc((${y.i} - (${$._5} * 5.5)) * 1px);
        width: calc((${y.i} - (${$._5} * 5.5)) * 1px);
        top: calc(${$._5} * 1px);
        background: ${I.C};
        border-radius: 50%;
        transition: all 0.2s ease-in-out;
    }

    .status-message {
        color: ${I.C};
        cursor: pointer;
        font-size: ${A.c};
        line-height: ${A.R};
    }

    .label__hidden {
        display: none;
        visibility: hidden;
    }

    .label {
        color: ${I.C};
        font-size: ${A.c};
        line-height: ${A.R};
        margin-inline-end: calc(${$._5} * 2px + 2px);
        cursor: pointer;
    }

    ::slotted(*) {
        ${""} margin-inline-start: calc(${$._5} * 2px + 2px);
    }

    :host([aria-checked="true"]) .checked-indicator {
        background: ${H.w4};
    }

    :host([aria-checked="true"]) .switch {
        background: ${D.Av};
    }

    :host([aria-checked="true"]:enabled) .switch:hover {
        background: ${D.OC};
    }

    :host([aria-checked="true"]:enabled) .switch:hover .checked-indicator {
        background: ${H.lJ};
    }

    :host([aria-checked="true"]:enabled) .switch:active {
        background: ${D.UE};
    }

    :host([aria-checked="true"]:enabled) .switch:active .checked-indicator {
        background: ${H.Pp};
    }

    :host([aria-checked="true"]:${v.b}:enabled) .switch {
        box-shadow: 0 0 0 2px ${L.I}, 0 0 0 4px ${O.yG};
        border-color: transparent;
    }

    .unchecked-message {
        display: block;
    }

    .checked-message {
        display: none;
    }

    :host([aria-checked="true"]) .unchecked-message {
        display: none;
    }

    :host([aria-checked="true"]) .checked-message {
        display: block;
    }
`.withBehaviors(new x.O(p.i`
            .checked-indicator {
                left: calc(${$._5} * 1px);
            }

            :host([aria-checked="true"]) .checked-indicator {
                left: calc(
                    (((${y.i} / 2) + ${$._5}) + ${$._5}) * 1px
                );
            }
        `,p.i`
            .checked-indicator {
                right: calc(${$._5} * 1px);
            }

            :host([aria-checked="true"]) .checked-indicator {
                right: calc(
                    (((${y.i} / 2) + ${$._5}) + ${$._5}) * 1px
                );
            }
        `),(0,m.vF)(p.i`
            .checked-indicator,
            :host(:enabled) .switch:active .checked-indicator {
                forced-color-adjust: none;
                background: ${b.H.FieldText};
            }
            .switch {
                forced-color-adjust: none;
                background: ${b.H.Field};
                border-color: ${b.H.FieldText};
            }
            :host(:enabled) .switch:hover {
                background: ${b.H.HighlightText};
                border-color: ${b.H.Highlight};
            }
            :host([aria-checked="true"]) .switch {
                background: ${b.H.Highlight};
                border-color: ${b.H.Highlight};
            }
            :host([aria-checked="true"]:enabled) .switch:hover,
            :host(:enabled) .switch:active {
                background: ${b.H.HighlightText};
                border-color: ${b.H.Highlight};
            }
            :host([aria-checked="true"]) .checked-indicator {
                background: ${b.H.HighlightText};
            }
            :host([aria-checked="true"]:enabled) .switch:hover .checked-indicator {
                background: ${b.H.Highlight};
            }
            :host(:${v.b}) .switch {
                border-color: ${b.H.Highlight};
                box-shadow: 0 0 0 2px ${b.H.Field},
                    0 0 0 4px ${b.H.FieldText};
            }
            :host([aria-checked="true"]:${v.b}:enabled) .switch {
                box-shadow: 0 0 0 2px ${b.H.Field},
                    0 0 0 4px ${b.H.FieldText};
            }
            :host([disabled]) {
                opacity: 1;
            }
            :host([disabled]) .checked-indicator {
                background: ${b.H.GrayText};
            }
            :host([disabled]) .switch {
                background: ${b.H.Field};
                border-color: ${b.H.GrayText};
            }
            .status-message,
            .label {
                color: ${b.H.FieldText};
            }
        `));var E=n(49218),B=n(47548),R=n(17503);const j=function(t={}){return E.dy`
        <template
            role="switch"
            aria-checked="${t=>t.checked}"
            aria-disabled="${t=>t.disabled}"
            aria-readonly="${t=>t.readOnly}"
            tabindex="${t=>t.disabled?null:0}"
            @keypress="${(t,e)=>t.keypressHandler(e.event)}"
            @click="${(t,e)=>t.clickHandler(e.event)}"
        >
            <label
                part="label"
                class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
            >
                <slot ${(0,B.Q)("defaultSlottedNodes")}></slot>
            </label>
            <div part="switch" class="switch">
                <slot name="switch">${(0,R.A)(t.switch)}</slot>
            </div>
            <span class="status-message" part="status-message">
                <span class="checked-message" part="checked-message">
                    <slot name="checked-message"></slot>
                </span>
                <span class="unchecked-message" part="unchecked-message">
                    <slot name="unchecked-message"></slot>
                </span>
            </span>
        </template>
    `}({switch:E.dy`
        <span class="checked-indicator" part="checked-indicator"></span>
    `});const P=class extends d{}.compose({name:`${h.H.prefix}-switch`,template:j,styles:F})},82636:function(t,e,n){"use strict";n.d(e,{H:function(){return o}});var i=n(81239);function o(t,e){return new i.w("appearance",t,e)}},77615:function(t,e,n){"use strict";n.d(e,{s:function(){return i}});const i=Object.freeze({prefix:"cs",shadowRootMode:"open",registry:customElements})},91290:function(t,e,n){"use strict";n.d(e,{$f:function(){return a},Qs:function(){return c},RR:function(){return l},di:function(){return s}});var i=n(52704),o=n(78125),r=n(72582);const s=i.L.create("card-base-height",146),a=i.L.create("card-base-width",300),l=i.L.create("card-base-gap",14),c=i.L.create("card-stroke-color",(t=>t(r.q)===o.h.DarkMode?"rgba(0,0,0,0.1)":"rgba(0,0,0,0.0578)"))},55135:function(t,e,n){"use strict";n.d(e,{UW:function(){return r},rS:function(){return s}});var i=n(52704);const{create:o}=i.L,r=o("control-corner-radius",4),s=o("layer-corner-radius",4)},40009:function(t,e,n){"use strict";n.d(e,{LQ:function(){return s},_5:function(){return l},hV:function(){return a},nf:function(){return r}});var i=n(52704);const{create:o}=i.L,r=o("base-height-multiplier",8),s=o("base-horizontal-spacing-multiplier",3),a=o("density",0),l=o("design-unit",4)},66779:function(t,e,n){"use strict";n.d(e,{o:function(){return s}});var i=n(52704),o=n(59997);const{create:r}=i.L,s=r("direction",o.N.ltr)},10970:function(t,e,n){"use strict";n.d(e,{V:function(){return r}});var i=n(52704);const{create:o}=i.L,r=o("disabled-opacity",.3)},38492:function(t,e,n){"use strict";n.d(e,{I:function(){return s}});var i=n(52704),o=n(32484);const{create:r}=i.L,s=r("fill-color",(t=>t(o.y9)))},53131:function(t,e,n){"use strict";n.d(e,{S:function(){return r}});var i=n(52704);const{create:o}=i.L,r=o("body-font","Segoe UI, Segoe UI Midlevel, sans-serif")},72582:function(t,e,n){"use strict";n.d(e,{q:function(){return s}});var i=n(52704),o=n(78125);const{create:r}=i.L,s=r("base-layer-luminance",o.h.LightMode)},47999:function(t,e,n){"use strict";n.d(e,{B2:function(){return s},N7:function(){return r},Wo:function(){return a},v$:function(){return l}});var i=n(52704);const{create:o}=i.L,r=o("accent-fill-rest-delta",0),s=o("accent-fill-hover-delta",4),a=o("accent-fill-active-delta",-5),l=o("accent-fill-focus-delta",0)},958:function(t,e,n){"use strict";n.d(e,{UE:function(){return f},D8:function(){return g},OC:function(){return p},Av:function(){return h}});var i=n(52704);var o=n(38492),r=n(20246),s=n(56837),a=n(47999),l=n(30363),c=n(94806);const{create:u}=i.L,d=u({name:"accent-fill-recipe"},{evaluate:(t,e)=>(c.v.normal,(t,e)=>function(t,e,n,i,o,r,s,a,l){const c=t.source,u=t.closestIndexOf(c),d=u+1*i,h=u+1*o,p=u+1*r;return{rest:t.get(u),hover:t.get(d),active:t.get(h),focus:t.get(p)}}(t(l.a),t(s.y),e||t(o.I),t(a.B2),t(a.Wo),t(a.v$),t(r.MY),t(r.jW),t(r.hD)))(t,e)}),h=u("accent-fill-rest",(t=>t(d).evaluate(t).rest)),p=u("accent-fill-hover",(t=>t(d).evaluate(t).hover)),f=u("accent-fill-active",(t=>t(d).evaluate(t).active)),g=u("accent-fill-focus",(t=>t(d).evaluate(t).focus))},18681:function(t,e,n){"use strict";n.d(e,{L8:function(){return s},kb:function(){return a},kp:function(){return r},nd:function(){return l}});var i=n(52704);const{create:o}=i.L,r=o("accent-foreground-rest-delta",0),s=o("accent-foreground-hover-delta",6),a=o("accent-foreground-active-delta",-4),l=o("accent-foreground-focus-delta",0)},26738:function(t,e,n){"use strict";n.d(e,{VN:function(){return f},D9:function(){return p},go:function(){return h}});var i=n(52704),o=n(64087);var r=n(38492),s=n(18681),a=n(30363),l=n(94806);const{create:c}=i.L,u=t=>(e,n)=>function(t,e,n,i,r,s,a){const l=t.source,c=t.closestIndexOf(l),u=(0,o.a)(e),d=c+(1===u?Math.min(i,r):Math.max(u*i,u*r)),h=t.colorContrast(e,n,d,u),p=t.closestIndexOf(h),f=p+u*Math.abs(i-r);let g,v;return(1===u?i<r:u*i>u*r)?(g=p,v=f):(g=f,v=p),{rest:t.get(g),hover:t.get(v),active:t.get(g+u*s),focus:t.get(g+u*a)}}(e(a.a),n||e(r.I),t,e(s.kp),e(s.L8),e(s.kb),e(s.nd)),d=c({name:"accent-foreground-recipe"},{evaluate:(t,e)=>u(l.v.normal)(t,e)}),h=c("accent-foreground-rest",(t=>t(d).evaluate(t).rest)),p=c("accent-foreground-hover",(t=>t(d).evaluate(t).hover)),f=c("accent-foreground-active",(t=>t(d).evaluate(t).active));c("accent-foreground-focus",(t=>t(d).evaluate(t).focus))},30363:function(t,e,n){"use strict";n.d(e,{a:function(){return a}});var i=n(52704),o=n(89949),r=n(56185);const{create:s}=i.L,a=s({name:"accent-palette"},o.v.create(r.Us))},94806:function(t,e,n){"use strict";n.d(e,{v:function(){return i}});const i={normal:4.5,large:7}},23132:function(t,e,n){"use strict";n.d(e,{Pp:function(){return h},$u:function(){return p},lJ:function(){return d},w4:function(){return u}});var i=n(52704),o=n(958),r=n(94806),s=n(56185);const a=t=>(e,n)=>function(t,e){return t.contrast(s.ix)>=e?s.ix:s.Sn}(n||e(o.Av),t),{create:l}=i.L,c=l({name:"foreground-on-accent-recipe"},{evaluate:(t,e)=>a(r.v.normal)(t,e)}),u=l("foreground-on-accent-rest",(t=>t(c).evaluate(t,t(o.Av)))),d=l("foreground-on-accent-hover",(t=>t(c).evaluate(t,t(o.OC)))),h=l("foreground-on-accent-active",(t=>t(c).evaluate(t,t(o.UE)))),p=l("foreground-on-accent-focus",(t=>t(c).evaluate(t,t(o.D8))))},26741:function(t,e,n){"use strict";n.d(e,{a2:function(){return u}});var i=n(52704),o=n(27153),r=n(38492),s=n(30363),a=n(17993);const{create:l}=i.L,c=l({name:"focus-stroke-inner-recipe"},{evaluate:t=>(0,o.a)(t(s.a),t(r.I),t(a.yG))}),u=l("focus-stroke-inner",(t=>t(c).evaluate(t)))},17993:function(t,e,n){"use strict";n.d(e,{F7:function(){return u},yG:function(){return c}});var i=n(52704),o=n(27153),r=n(38492),s=n(56837);const{create:a}=i.L,l=a({name:"focus-stroke-outer-recipe"},{evaluate:t=>(0,o.y)(t(s.y),t(r.I))}),c=a("focus-stroke-outer",(t=>t(l).evaluate(t))),u=c},20246:function(t,e,n){"use strict";n.d(e,{MY:function(){return r},VQ:function(){return l},hD:function(){return a},jW:function(){return s}});var i=n(52704);const{create:o}=i.L,r=o("neutral-fill-rest-delta",7),s=o("neutral-fill-hover-delta",10),a=o("neutral-fill-active-delta",5),l=o("neutral-fill-focus-delta",0)},37939:function(t,e,n){"use strict";n.d(e,{EL:function(){return s},Zb:function(){return l},ef:function(){return r},q_:function(){return a}});var i=n(52704);const{create:o}=i.L,r=o("neutral-fill-input-rest-delta",0),s=o("neutral-fill-input-hover-delta",0),a=o("neutral-fill-input-active-delta",0),l=o("neutral-fill-input-focus-delta",0)},39238:function(t,e,n){"use strict";n.d(e,{Iu:function(){return h},Tm:function(){return d},_B:function(){return u}});var i=n(52704),o=n(64087);var r=n(38492),s=n(37939),a=n(56837);const{create:l}=i.L,c=l({name:"neutral-fill-input-recipe"},{evaluate:(t,e)=>function(t,e,n,i,r,s){const a=(0,o.a)(e),l=t.closestIndexOf(e);return{rest:t.get(l-a*n),hover:t.get(l-a*i),active:t.get(l-a*r),focus:t.get(l-a*s)}}(t(a.y),e||t(r.I),t(s.ef),t(s.EL),t(s.q_),t(s.Zb))}),u=l("neutral-fill-input-rest",(t=>t(c).evaluate(t).rest)),d=l("neutral-fill-input-hover",(t=>t(c).evaluate(t).hover)),h=l("neutral-fill-input-active",(t=>t(c).evaluate(t).active));l("neutral-fill-input-focus",(t=>t(c).evaluate(t).focus))},84659:function(t,e,n){"use strict";n.d(e,{Y:function(){return r}});var i=n(52704);const{create:o}=i.L,r=o("neutral-fill-layer-rest-delta",3)},79148:function(t,e,n){"use strict";n.d(e,{t:function(){return u},ab:function(){return l},RJ:function(){return c}});var i=n(52704);var o=n(38492),r=n(84659),s=n(56837);const{create:a}=i.L,l=a({name:"neutral-fill-layer-recipe"},{evaluate:(t,e)=>function(t,e,n){const i=t.closestIndexOf(e);return t.get(i-n)}(t(s.y),e||t(o.I),t(r.Y))}),c=a("neutral-fill-layer-rest",(t=>t(l).evaluate(t))),u=c},67341:function(t,e,n){"use strict";n.d(e,{_i:function(){return v},d$:function(){return g},_j:function(){return f}});var i=n(52704),o=n(33978),r=n(38492),s=n(41911);const a=(0,s.q)("neutral-fill-secondary-rest-delta",3),l=(0,s.q)("neutral-fill-secondary-hover-delta",2),c=(0,s.q)("neutral-fill-secondary-active-delta",1),u=(0,s.q)("neutral-fill-secondary-focus-delta",3);var d=n(56837);const{create:h}=i.L,p=(0,s.q)("neutral-fill-secondary-recipe",{evaluate:(t,e)=>(0,o.w)(t(d.y),e||t(r.I),t(a),t(l),t(c),t(u))}),f=h("neutral-fill-secondary-rest",(t=>t(p).evaluate(t).rest)),g=h("neutral-fill-secondary-hover",(t=>t(p).evaluate(t).hover)),v=h("neutral-fill-secondary-active",(t=>t(p).evaluate(t).active));h("neutral-fill-secondary-focus",(t=>t(p).evaluate(t).focus))},12600:function(t,e,n){"use strict";n.d(e,{IU:function(){return l},fq:function(){return s},gs:function(){return a},qD:function(){return r}});var i=n(52704);const{create:o}=i.L,r=o("neutral-fill-stealth-rest-delta",0),s=o("neutral-fill-stealth-hover-delta",5),a=o("neutral-fill-stealth-active-delta",3),l=o("neutral-fill-stealth-focus-delta",0)},80260:function(t,e,n){"use strict";n.d(e,{sG:function(){return h},Qp:function(){return d},DF:function(){return c},jq:function(){return u}});var i=n(52704);var o=n(38492),r=n(20246),s=n(12600),a=n(56837);const{create:l}=i.L,c=l({name:"neutral-fill-stealth-recipe"},{evaluate:(t,e)=>function(t,e,n,i,o,r,s,a,l,c){const u=Math.max(n,i,o,r,s,a,l,c),d=t.closestIndexOf(e),h=d>=u?-1:1;return{rest:t.get(d+h*n),hover:t.get(d+h*i),active:t.get(d+h*o),focus:t.get(d+h*r)}}(t(a.y),e||t(o.I),t(s.qD),t(s.fq),t(s.gs),t(s.IU),t(r.MY),t(r.jW),t(r.hD),t(r.VQ))}),u=l("neutral-fill-stealth-rest",(t=>t(c).evaluate(t).rest)),d=l("neutral-fill-stealth-hover",(t=>t(c).evaluate(t).hover)),h=l("neutral-fill-stealth-active",(t=>t(c).evaluate(t).active));l("neutral-fill-stealth-focus",(t=>t(c).evaluate(t).focus))},92332:function(t,e,n){"use strict";n.d(e,{Cl:function(){return r},UC:function(){return l},Vt:function(){return a},sc:function(){return s}});var i=n(52704);const{create:o}=i.L,r=o("neutral-fill-strong-rest-delta",0),s=o("neutral-fill-strong-hover-delta",8),a=o("neutral-fill-strong-active-delta",-5),l=o("neutral-fill-strong-focus-delta",0)},35680:function(t,e,n){"use strict";n.d(e,{Gy:function(){return d},Xi:function(){return u},At:function(){return l},wF:function(){return c}});var i=n(52704);var o=n(38492),r=n(20246),s=n(56837);const{create:a}=i.L,l=a({name:"neutral-fill-recipe"},{evaluate:(t,e)=>function(t,e,n,i,o,r){const s=t.closestIndexOf(e),a=s>=Math.max(n,i,o,r)?-1:1;return{rest:t.get(s+a*n),hover:t.get(s+a*i),active:t.get(s+a*o),focus:t.get(s+a*r)}}(t(s.y),e||t(o.I),t(r.MY),t(r.jW),t(r.hD),t(r.VQ))}),c=a("neutral-fill-rest",(t=>t(l).evaluate(t).rest)),u=a("neutral-fill-hover",(t=>t(l).evaluate(t).hover)),d=a("neutral-fill-active",(t=>t(l).evaluate(t).active));a("neutral-fill-focus",(t=>t(l).evaluate(t).focus))},74449:function(t,e,n){"use strict";n.d(e,{Q:function(){return l},a:function(){return a}});var i=n(52704);var o=n(38492),r=n(56837);const{create:s}=i.L,a=s({name:"neutral-foreground-hint-recipe"},{evaluate:t=>{return e=t(r.y),n=t(o.I),e.colorContrast(n,4.5);var e,n}}),l=s("neutral-foreground-hint",(t=>t(a).evaluate(t)))},42689:function(t,e,n){"use strict";n.d(e,{C:function(){return l}});var i=n(52704);var o=n(38492),r=n(56837);const{create:s}=i.L,a=s({name:"neutral-foreground-recipe"},{evaluate:t=>{return e=t(r.y),n=t(o.I),e.colorContrast(n,14);var e,n}}),l=s("neutral-foreground-rest",(t=>t(a).evaluate(t)))},32484:function(t,e,n){"use strict";n.d(e,{y9:function(){return c}});var i=n(52704),o=n(78125);var r=n(72582),s=n(56837);const{create:a}=i.L,l=a({name:"neutral-layer-1-recipe"},{evaluate:t=>{return e=t(s.y),n=t(r.q),e.get(e.closestIndexOf((0,o.C)(n)));var e,n}}),c=a("neutral-layer-1",(t=>t(l).evaluate(t)))},27460:function(t,e,n){"use strict";n.d(e,{s:function(){return u}});var i=n(52704),o=n(78125);var r=n(84659),s=n(72582),a=n(56837);const{create:l}=i.L,c=l({name:"neutral-layer-floating-recipe"},{evaluate:t=>function(t,e,n){const i=t.closestIndexOf((0,o.C)(e))-n;return t.get(i-n)}(t(a.y),t(s.q),t(r.Y))}),u=l("neutral-layer-floating",(t=>t(c).evaluate(t)))},56837:function(t,e,n){"use strict";n.d(e,{y:function(){return a}});var i=n(52704),o=n(89949),r=n(56185);const{create:s}=i.L,a=s({name:"neutral-palette"},o.v.create(r.Pc))},59845:function(t,e,n){"use strict";n.d(e,{Bx:function(){return l},IM:function(){return a},fd:function(){return r},rn:function(){return s}});var i=n(52704);const{create:o}=i.L,r=o("neutral-stroke-rest-delta",25),s=o("neutral-stroke-hover-delta",40),a=o("neutral-stroke-active-delta",16),l=o("neutral-stroke-focus-delta",25)},14744:function(t,e,n){"use strict";n.d(e,{h:function(){return r}});var i=n(52704);const{create:o}=i.L,r=o("neutral-stroke-divider-rest-delta",8)},71942:function(t,e,n){"use strict";n.d(e,{eN:function(){return d},dt:function(){return u}});var i=n(52704),o=n(64087);var r=n(38492),s=n(14744),a=n(56837);const{create:l}=i.L,c=l({name:"neutral-stroke-divider-recipe"},{evaluate:(t,e)=>function(t,e,n){return t.get(t.closestIndexOf(e)+(0,o.a)(e)*n)}(t(a.y),e||t(r.I),t(s.h))}),u=l("neutral-stroke-divider-rest",(t=>t(c).evaluate(t))),d=u},60184:function(t,e,n){"use strict";n.d(e,{ek:function(){return g},gK:function(){return f},rU:function(){return p}});var i=n(52704),o=n(64087);var r=n(38492);const{create:s}=i.L,a=s("neutral-stroke-strong-hover-delta",40),l=s("neutral-stroke-strong-active-delta",16),c=s("neutral-stroke-strong-focus-delta",25);var u=n(56837);const{create:d}=i.L,h=d({name:"neutral-stroke-strong-recipe"},{evaluate:t=>function(t,e,n,i,r,s){const a=(0,o.a)(e),l=t.colorContrast(e,n),c=t.closestIndexOf(l);return{rest:l,hover:t.get(c+a*i),active:t.get(c+a*r),focus:t.get(c+a*s)}}(t(u.y),t(r.I),3,t(a),t(l),t(c))}),p=d("neutral-stroke-strong-rest",(t=>t(h).evaluate(t).rest)),f=d("neutral-stroke-strong-hover",(t=>t(h).evaluate(t).hover)),g=d("neutral-stroke-strong-active",(t=>t(h).evaluate(t).active));d("neutral-stroke-strong-focus",(t=>t(h).evaluate(t).focus))},28632:function(t,e,n){"use strict";n.d(e,{tA:function(){return v},yD:function(){return g},L$:function(){return f},c1:function(){return h},V0:function(){return p},QP:function(){return d},ak:function(){return u}});var i=n(52704),o=n(64087);var r=n(38492),s=n(59845),a=n(56837);const{create:l}=i.L,c=l({name:"neutral-stroke-recipe"},{evaluate:t=>function(t,e,n,i,r,s){const a=t.closestIndexOf(e),l=(0,o.a)(e),c=a+l*n,u=c+l*(i-n),d=c+l*(r-n),h=c+l*(s-n);return{rest:t.get(c),hover:t.get(u),active:t.get(d),focus:t.get(h)}}(t(a.y),t(r.I),t(s.fd),t(s.rn),t(s.IM),t(s.Bx))}),u=l("neutral-stroke-rest",(t=>t(c).evaluate(t).rest)),d=l("neutral-stroke-hover",(t=>t(c).evaluate(t).hover)),h=l("neutral-stroke-active",(t=>t(c).evaluate(t).active)),p=l("neutral-stroke-focus",(t=>t(c).evaluate(t).focus)),f=u,g=d,v=h},26512:function(t,e,n){"use strict";n.d(e,{H:function(){return r},bu:function(){return a},vx:function(){return s}});var i=n(52704);const{create:o}=i.L,r=o("stroke-width",1),s=o("focus-stroke-width",2),a=r},27782:function(t,e,n){"use strict";n.d(e,{R:function(){return s},c:function(){return r}});var i=n(52704);const{create:o}=i.L,r=o("type-ramp-base-font-size","14px"),s=o("type-ramp-base-line-height","20px")},16549:function(t,e,n){"use strict";n.d(e,{s:function(){return r},v:function(){return s}});var i=n(52704);const{create:o}=i.L,r=o("type-ramp-minus-1-font-size","12px"),s=o("type-ramp-minus-1-line-height","16px")},3490:function(t,e,n){"use strict";n.d(e,{G:function(){return r},M:function(){return s}});var i=n(52704);const{create:o}=i.L,r=o("type-ramp-minus-2-font-size","10px"),s=o("type-ramp-minus-2-line-height","14px")},32572:function(t,e,n){"use strict";n.d(e,{P:function(){return r},b:function(){return s}});var i=n(52704);const{create:o}=i.L,r=o("type-ramp-plus-1-font-size","16px"),s=o("type-ramp-plus-1-line-height","22px")},94585:function(t,e,n){"use strict";n.d(e,{I:function(){return s},m:function(){return r}});var i=n(52704);const{create:o}=i.L,r=o("type-ramp-plus-2-font-size","20px"),s=o("type-ramp-plus-2-line-height","28px")},68530:function(t,e,n){"use strict";n.d(e,{i:function(){return r},y:function(){return s}});var i=n(52704);const{create:o}=i.L,r=o("type-ramp-plus-3-font-size","24px"),s=o("type-ramp-plus-3-line-height","32px")},41911:function(t,e,n){"use strict";n.d(e,{q:function(){return o}});var i=n(52704);function o(t,e){return i.L.create({name:t},e)}},22674:function(t,e,n){"use strict";n.d(e,{O:function(){return r}});var i=n(58968),o=n(66779);class r{constructor(t,e){this.cache=new WeakMap,this.ltr=t,this.rtl=e}connectedCallback(t){i.H.enqueue((()=>{this.attach(t.source)}))}disconnectedCallback(t){const e=this.cache.get(t.source);e&&o.o.unsubscribe(e)}attach(t){const e=this.cache.get(t)||new s(this.ltr,this.rtl,t),n=o.o.getValueFor(t);o.o.subscribe(e),e.attach(n),this.cache.set(t,e)}}class s{constructor(t,e,n){this.ltr=t,this.rtl=e,this.source=n,this.attached=null}handleChange(t,e){this.attach("default"===e.target?t.default:t.getValueFor(e.target))}attach(t){this.attached!==this[t]&&(null!==this.attached&&this.source.$fastController.removeStyles(this.attached),this.attached=this[t],null!==this.attached&&this.source.$fastController.addStyles(this.attached))}}},62734:function(t,e,n){"use strict";n.d(e,{XC:function(){return i}});const i="box-shadow: 0 0 calc((var(--elevation) * 0.225px) + 2px) rgba(0, 0, 0, calc(.11 * (2 - var(--background-luminance, 1)))), 0 calc(var(--elevation) * 0.4px) calc((var(--elevation) * 0.9px)) rgba(0, 0, 0, calc(.13 * (2 - var(--background-luminance, 1))));"},2658:function(t,e,n){"use strict";n.d(e,{i:function(){return r}});var i=n(78923),o=n(40009);const r=i.j`(${o.nf} + ${o.hV}) * ${o._5}`},42590:function(t,e,n){"use strict";n.d(e,{Ax:function(){return u},Id:function(){return p},Lj:function(){return g},bw:function(){return d},so:function(){return f}});var i=n(99452),o=n(34959),r=n(58968),s=n(31699),a=n(89522);const l="boolean",c="reflect",u=Object.freeze({locate:(0,a.j8)()}),d={toView:t=>t?"true":"false",fromView:t=>null!=t&&"false"!==t&&!1!==t&&0!==t};function h(t){if(null==t)return null;const e=1*t;return isNaN(e)?null:e}const p={toView(t){const e=h(t);return e?e.toString():e},fromView:h};class f{constructor(t,e,n=e.toLowerCase(),i="reflect",o){this.guards=new Set,this.Owner=t,this.name=e,this.attribute=n,this.mode=i,this.converter=o,this.fieldName=`_${e}`,this.callbackName=`${e}Changed`,this.hasCallback=this.callbackName in t.prototype,i===l&&void 0===o&&(this.converter=d)}setValue(t,e){const n=t[this.fieldName],i=this.converter;void 0!==i&&(e=i.fromView(e)),n!==e&&(t[this.fieldName]=e,this.tryReflectToAttribute(t),this.hasCallback&&t[this.callbackName](n,e),t.$fastController.notify(this.name))}getValue(t){return i.y$.track(t,this.name),t[this.fieldName]}onAttributeChangedCallback(t,e){this.guards.has(t)||(this.guards.add(t),this.setValue(t,e),this.guards.delete(t))}tryReflectToAttribute(t){const e=this.mode,n=this.guards;n.has(t)||"fromView"===e||r.H.enqueue((()=>{n.add(t);const i=t[this.fieldName];switch(e){case c:const e=this.converter;s.S.setAttribute(t,this.attribute,void 0!==e?e.toView(i):i);break;case l:s.S.setBooleanAttribute(t,this.attribute,i)}n.delete(t)}))}static collect(t,...e){const n=[];e.push(u.locate(t));for(let i=0,r=e.length;i<r;++i){const r=e[i];if(void 0!==r)for(let e=0,i=r.length;e<i;++e){const i=r[e];(0,o.HD)(i)?n.push(new f(t,i)):n.push(new f(t,i.property,i.attribute,i.mode,i.converter))}}return n}}function g(t,e){let n;function i(t,e){arguments.length>1&&(n.property=e),u.locate(t.constructor).push(n)}return arguments.length>1?(n={},void i(t,e)):(n=void 0===t?{}:t,i)}},7279:function(t,e,n){"use strict";n.d(e,{Hi:function(){return C},t3:function(){return v}});var i=n(34959),o=n(39579),r=n(99452),s=n(89522),a=n(70885),l=n(62795),c=n(72394),u=n(28521);const d={bubbles:!0,composed:!0,cancelable:!0},h="isConnected",p=new WeakMap;function f(t){var e,n;return null!==(n=null!==(e=t.shadowRoot)&&void 0!==e?e:p.get(t))&&void 0!==n?n:null}let g;class v extends o.A{constructor(t,e){super(t),this.boundObservables=null,this.needsInitialization=!0,this.hasExistingShadowRoot=!1,this._template=null,this.stage=3,this.guardBehaviorConnection=!1,this.behaviors=null,this.behaviorsConnected=!1,this._mainStyles=null,this.$fastController=this,this.view=null,this.toJSON=i.ZT,this.source=t,this.definition=e;const n=e.shadowOptions;if(void 0!==n){let e=t.shadowRoot;e?this.hasExistingShadowRoot=!0:(e=t.attachShadow(n),"closed"===n.mode&&p.set(t,e))}const o=r.y$.getAccessors(t);if(o.length>0){const e=this.boundObservables=Object.create(null);for(let n=0,i=o.length;n<i;++n){const i=o[n].name,r=t[i];void 0!==r&&(delete t[i],e[i]=r)}}}get isConnected(){return r.y$.track(this,h),1===this.stage}get template(){var t;if(null===this._template){const e=this.definition;this.source.resolveTemplate?this._template=this.source.resolveTemplate():e.template&&(this._template=null!==(t=e.template)&&void 0!==t?t:null)}return this._template}set template(t){this._template!==t&&(this._template=t,this.needsInitialization||this.renderTemplate(t))}get mainStyles(){var t;if(null===this._mainStyles){const e=this.definition;this.source.resolveStyles?this._mainStyles=this.source.resolveStyles():e.styles&&(this._mainStyles=null!==(t=e.styles)&&void 0!==t?t:null)}return this._mainStyles}set mainStyles(t){this._mainStyles!==t&&(null!==this._mainStyles&&this.removeStyles(this._mainStyles),this._mainStyles=t,this.needsInitialization||this.addStyles(t))}addBehavior(t){var e,n;const i=null!==(e=this.behaviors)&&void 0!==e?e:this.behaviors=new Map,o=null!==(n=i.get(t))&&void 0!==n?n:0;0===o?(i.set(t,1),t.addedCallback&&t.addedCallback(this),!t.connectedCallback||this.guardBehaviorConnection||1!==this.stage&&0!==this.stage||t.connectedCallback(this)):i.set(t,o+1)}removeBehavior(t,e=!1){const n=this.behaviors;if(null===n)return;const i=n.get(t);void 0!==i&&(1===i||e?(n.delete(t),t.disconnectedCallback&&3!==this.stage&&t.disconnectedCallback(this),t.removedCallback&&t.removedCallback(this)):n.set(t,i-1))}addStyles(t){var e;if(!t)return;const n=this.source;if(t instanceof HTMLElement){(null!==(e=f(n))&&void 0!==e?e:this.source).append(t)}else if(!t.isAttachedTo(n)){const e=t.behaviors;if(t.addStylesTo(n),null!==e)for(let t=0,n=e.length;t<n;++t)this.addBehavior(e[t])}}removeStyles(t){var e;if(!t)return;const n=this.source;if(t instanceof HTMLElement){(null!==(e=f(n))&&void 0!==e?e:n).removeChild(t)}else if(t.isAttachedTo(n)){const e=t.behaviors;if(t.removeStylesFrom(n),null!==e)for(let t=0,n=e.length;t<n;++t)this.addBehavior(e[t])}}connect(){3===this.stage&&(this.stage=0,this.bindObservables(),this.connectBehaviors(),this.needsInitialization?(this.renderTemplate(this.template),this.addStyles(this.mainStyles),this.needsInitialization=!1):null!==this.view&&this.view.bind(this.source),this.stage=1,r.y$.notify(this,h))}bindObservables(){if(null!==this.boundObservables){const t=this.source,e=this.boundObservables,n=Object.keys(e);for(let i=0,o=n.length;i<o;++i){const o=n[i];t[o]=e[o]}this.boundObservables=null}}connectBehaviors(){if(!1===this.behaviorsConnected){const t=this.behaviors;if(null!==t){this.guardBehaviorConnection=!0;for(const e of t.keys())e.connectedCallback&&e.connectedCallback(this);this.guardBehaviorConnection=!1}this.behaviorsConnected=!0}}disconnectBehaviors(){if(!0===this.behaviorsConnected){const t=this.behaviors;if(null!==t)for(const e of t.keys())e.disconnectedCallback&&e.disconnectedCallback(this);this.behaviorsConnected=!1}}disconnect(){1===this.stage&&(this.stage=2,r.y$.notify(this,h),null!==this.view&&this.view.unbind(),this.disconnectBehaviors(),this.stage=3)}onAttributeChangedCallback(t,e,n){const i=this.definition.attributeLookup[t];void 0!==i&&i.onAttributeChangedCallback(this.source,n)}emit(t,e,n){return 1===this.stage&&this.source.dispatchEvent(new CustomEvent(t,Object.assign(Object.assign({detail:e},d),n)))}renderTemplate(t){var e;const n=this.source,i=null!==(e=f(n))&&void 0!==e?e:n;if(null!==this.view)this.view.dispose(),this.view=null;else if(!this.needsInitialization||this.hasExistingShadowRoot){this.hasExistingShadowRoot=!1;for(let t=i.firstChild;null!==t;t=i.firstChild)i.removeChild(t)}t&&(this.view=t.render(n,i,n),this.view.sourceLifetime=r.sG.coupled)}static forCustomElement(t){const e=t.$fastController;if(void 0!==e)return e;const n=c.W.getForInstance(t);if(void 0===n)throw s.Bo.error(1401);return t.$fastController=new g(t,n)}static setStrategy(t){g=t}}function m(t){var e;return"adoptedStyleSheets"in t?t:null!==(e=f(t))&&void 0!==e?e:t.getRootNode()}v.setStrategy(v);class b{constructor(t){const e=b.styleSheetCache;this.sheets=t.map((t=>{if(t instanceof CSSStyleSheet)return t;let n=e.get(t);return void 0===n&&(n=new CSSStyleSheet,n.replaceSync(t),e.set(t,n)),n}))}addStylesTo(t){const e=m(t);e.adoptedStyleSheets=[...e.adoptedStyleSheets,...this.sheets]}removeStylesFrom(t){const e=m(t),n=this.sheets;e.adoptedStyleSheets=e.adoptedStyleSheets.filter((t=>-1===n.indexOf(t)))}}b.styleSheetCache=new Map;let y=0;function x(t){return t===document?document.body:t}a.X.setDefaultStrategy(a.X.supportsAdoptedStyleSheets?b:class{constructor(t){this.styles=t,this.styleClass="fast-"+ ++y}addStylesTo(t){t=x(m(t));const e=this.styles,n=this.styleClass;for(let i=0;i<e.length;i++){const o=document.createElement("style");o.innerHTML=e[i],o.className=n,t.append(o)}}removeStylesFrom(t){const e=(t=x(m(t))).querySelectorAll(`.${this.styleClass}`);for(let n=0,i=e.length;n<i;++n)t.removeChild(e[n])}});const w="defer-hydration",$="needs-hydration";class C extends v{static hydrationObserverHandler(t){for(const e of t)C.hydrationObserver.unobserve(e.target),e.target.$fastController.connect()}connect(){var t,e;if(void 0===this.needsHydration&&(this.needsHydration=null!==this.source.getAttribute($)),this.source.hasAttribute(w))return void C.hydrationObserver.observe(this.source,{attributeFilter:[w]});if(!this.needsHydration)return void super.connect();if(3!==this.stage)return;this.stage=0,this.bindObservables(),this.connectBehaviors();const n=this.source,i=null!==(t=f(n))&&void 0!==t?t:n;this.template&&((0,u.l$)(this.template)?(this.view=this.template.hydrate(i.firstChild,i.lastChild,n),null===(e=this.view)||void 0===e||e.bind(this.source)):this.renderTemplate(this.template)),this.addStyles(this.mainStyles),this.stage=1,this.source.removeAttribute($),this.needsInitialization=this.needsHydration=!1,r.y$.notify(this,h)}disconnect(){super.disconnect(),C.hydrationObserver.unobserve(this.source)}static install(){v.setStrategy(C)}}C.hydrationObserver=new l.Ag(C.hydrationObserverHandler)},72394:function(t,e,n){"use strict";n.d(e,{W:function(){return h}});var i=n(34959),o=n(99452),r=n(89522),s=n(70885),a=n(42590);const l={mode:"open"},c={},u=new Set,d=r.Bo.getById(i.P6.elementRegistry,(()=>(0,r.LI)()));class h{constructor(t,e=t.definition){var n;this.platformDefined=!1,(0,i.HD)(e)&&(e={name:e}),this.type=t,this.name=e.name,this.template=e.template,this.registry=null!==(n=e.registry)&&void 0!==n?n:customElements;const r=t.prototype,u=a.so.collect(t,e.attributes),h=new Array(u.length),p={},f={};for(let t=0,e=u.length;t<e;++t){const e=u[t];h[t]=e.attribute,p[e.name]=e,f[e.attribute]=e,o.y$.defineProperty(r,e)}Reflect.defineProperty(t,"observedAttributes",{value:h,enumerable:!0}),this.attributes=u,this.propertyLookup=p,this.attributeLookup=f,this.shadowOptions=void 0===e.shadowOptions?l:null===e.shadowOptions?void 0:Object.assign(Object.assign({},l),e.shadowOptions),this.elementOptions=void 0===e.elementOptions?c:Object.assign(Object.assign({},c),e.elementOptions),this.styles=s.X.normalize(e.styles),d.register(this)}get isDefined(){return this.platformDefined}define(t=this.registry){const e=this.type;return t.get(this.name)||(this.platformDefined=!0,t.define(this.name,e,this.elementOptions)),this}static compose(t,e){return u.has(t)||d.getByType(t)?new h(class extends t{},e):new h(t,e)}static registerBaseType(t){u.add(t)}}h.getByType=d.getByType,h.getForInstance=d.getForInstance},28904:function(t,e,n){"use strict";n.d(e,{H:function(){return l},M:function(){return c}});var i=n(34959),o=n(7279),r=n(72394);function s(t){const e=class extends t{constructor(){super(),o.t3.forCustomElement(this)}$emit(t,e,n){return this.$fastController.emit(t,e,n)}connectedCallback(){this.$fastController.connect()}disconnectedCallback(){this.$fastController.disconnect()}attributeChangedCallback(t,e,n){this.$fastController.onAttributeChangedCallback(t,e,n)}};return r.W.registerBaseType(e),e}function a(t,e){return(0,i.mf)(t)?r.W.compose(t,e).define().type:r.W.compose(this,t).define().type}const l=Object.assign(s(HTMLElement),{from:function(t){return s(t)},define:a,compose:function(t,e){return(0,i.mf)(t)?r.W.compose(t,e):r.W.compose(this,t)}});function c(t){return function(e){a(e,t)}}},28521:function(t,e,n){"use strict";n.d(e,{BL:function(){return u},_M:function(){return a},l$:function(){return d}});const i=/fe-b\$\$start\$\$(\d+)\$\$(.+)\$\$fe-b/,o=/fe-b\$\$end\$\$(\d+)\$\$(.+)\$\$fe-b/,r=/fe-repeat\$\$start\$\$(\d+)\$\$fe-repeat/,s=/fe-repeat\$\$end\$\$(\d+)\$\$fe-repeat/,a=Object.freeze({attributeMarkerName:"data-fe-b",attributeBindingSeparator:" ",contentBindingStartMarker:(t,e)=>`fe-b$$start$$${t}$$${e}$$fe-b`,contentBindingEndMarker:(t,e)=>`fe-b$$end$$${t}$$${e}$$fe-b`,repeatStartMarker:t=>`fe-repeat$$start$$${t}$$fe-repeat`,repeatEndMarker:t=>`fe-repeat$$end$$${t}$$fe-repeat`,isContentBindingStartMarker:t=>i.test(t),isContentBindingEndMarker:t=>o.test(t),isRepeatViewStartMarker:t=>r.test(t),isRepeatViewEndMarker:t=>s.test(t),parseAttributeBinding(t){const e=t.getAttribute(this.attributeMarkerName);return null===e?e:e.split(this.attributeBindingSeparator).map((t=>parseInt(t)))},parseContentBindingStartMarker:t=>c(i,t),parseContentBindingEndMarker:t=>c(o,t),parseRepeatStartMarker:t=>l(r,t),parseRepeatEndMarker:t=>l(s,t)});function l(t,e){const n=t.exec(e);return null===n?n:parseInt(n[1])}function c(t,e){const n=t.exec(e);return null===n?n:[parseInt(n[1]),n[2]]}const u=Symbol.for("fe-hydration");function d(t){return t[u]===u}},36e3:function(t,e,n){"use strict";n.d(e,{DI:function(){return y},YM:function(){return M},f3:function(){return C}});var i=n(33940),o=n(89522);const r=new Map;"metadata"in Reflect||(Reflect.metadata=function(t,e){return function(n){Reflect.defineMetadata(t,e,n)}},Reflect.defineMetadata=function(t,e,n){let i=r.get(n);void 0===i&&r.set(n,i=new Map),i.set(t,e)},Reflect.getOwnMetadata=function(t,e){const n=r.get(e);if(void 0!==n)return n.get(t)});const s=Object.freeze({getDesignParamTypes:t=>{var e;return null!==(e=Reflect.getOwnMetadata("design:paramtypes",t))&&void 0!==e?e:o.ow},getAnnotationParamTypes:t=>{var e;return null!==(e=Reflect.getOwnMetadata("annotation:paramtypes",t))&&void 0!==e?e:o.ow},getOrCreateAnnotationParamTypes(t){let e=this.getAnnotationParamTypes(t);return e===o.ow&&Reflect.defineMetadata("annotation:paramtypes",e=[],t),e}}),a="context-request";let l;const c=Object.freeze({eventType:a,create(t,e){const n=function(t,e,i){if(null==t||void 0!==new.target)throw o.Bo.error(1501,{name:n.name});if(e)c.defineProperty(t,e,n);else{s.getOrCreateAnnotationParamTypes(t)[i]=n}};return n.$isInterface=!0,n.initialValue=e,Reflect.defineProperty(n,"name",{value:t}),n.handle=(t,e)=>c.handle(t,e,n),n.provide=(t,e)=>c.provide(t,n,e),n.get=t=>c.get(t,n),n.request=(t,e,i)=>c.request(t,n,e,i),n.toString=()=>`Context<${n.name}>`,n},setDefaultRequestStrategy(t){l=t},get(t,e){var n;let i;return l(t,e,(t=>i=t),!1),null!==(n=i)&&void 0!==n?n:e.initialValue},request(t,e,n,i=!1){l(t,e,n,i)},dispatch(t,e,n,i=!1){t.dispatchEvent(new u(e,n,i))},provide(t,e,n){this.handle(t,(t=>{t.stopImmediatePropagation(),t.callback(n)}),e)},handle(t,e,n){n?t.addEventListener(a,(t=>{t.context===n&&e(t)})):t.addEventListener(a,e)},defineProperty(t,e,n){const i=`$di_${e}`;Reflect.defineProperty(t,e,{get:function(){var t;return null!==(t=this[i])&&void 0!==t?t:this[i]=c.get(this,n)}})}});c.setDefaultRequestStrategy(c.dispatch);class u extends Event{constructor(t,e,n){super(a,{bubbles:!0,composed:!0}),this.context=t,this.callback=e,this.multiple=n}}class d{constructor(t,e){this.container=t,this.key=e}instance(t){return this.registerResolver(0,t)}singleton(t){return this.registerResolver(1,t)}transient(t){return this.registerResolver(2,t)}callback(t){return this.registerResolver(3,t)}cachedCallback(t){return this.registerResolver(3,_(t))}aliasTo(t){return this.registerResolver(5,t)}registerResolver(t,e){const{container:n,key:i}=this;return this.container=this.key=void 0,n.registerResolver(i,new O(i,t,e))}}function h(t){const e=t.slice(),n=Object.keys(t),i=n.length;let o;for(let r=0;r<i;++r)o=n[r],G(o)||(e[o]=t[o]);return e}const p=Object.freeze({none(t){throw o.Bo.error(1512,{key:t})},singleton:t=>new O(t,1,t),transient:t=>new O(t,2,t)}),f=Object.freeze({default:Object.freeze({parentLocator:()=>null,asyncRegistrationLocator:()=>(0,i.mG)(void 0,void 0,void 0,(function*(){return null})),responsibleForOwnerRequests:!1,defaultResolver:p.singleton})});function g(t,e){const n="function"==typeof t?t:e,i="string"==typeof t?t:t&&"friendlyName"in t&&t.friendlyName||V,r="string"!=typeof t&&(t&&"respectConnection"in t&&t.respectConnection||!1),a=function(t,e,n){if(null==t||void 0!==new.target)throw o.Bo.error(1501,{name:a.name});if(e)y.defineProperty(t,e,a,r);else{s.getOrCreateAnnotationParamTypes(t)[n]=a}};return a.$isInterface=!0,Reflect.defineProperty(a,"name",{value:null!=i?i:V}),null!=n&&(a.register=function(t,e){return n(new d(t,null!=e?e:a))}),a.toString=function(){return`DIContext<${a.name}>`},a}const v=new Map;let m=null,b=0;const y=Object.freeze({installAsContextRequestStrategy(t){c.setDefaultRequestStrategy(((e,n,i)=>{i(y.findResponsibleContainer(e,t).get(n))}))},createContainer:t=>new j(null,Object.assign({},f.default,t)),findResponsibleContainer(t,e){const n=t.$$container$$;return n&&n.responsibleForOwnerRequests?n:y.findParentContainer(t,e)},findParentContainer(t,e){if(b<1)return e?e():y.getOrCreateDOMContainer();let n;return c.dispatch(t,w,(t=>n=t)),null!=n?n:e?e():y.getOrCreateDOMContainer()},getOrCreateDOMContainer(t,e){if(!t)return m||(m=new j("undefined"!=typeof window?window:null,Object.assign({},f.default,e,{parentLocator:()=>null})));let n=t.$$container$$;return void 0===n&&(b++,n=new j(t,Object.assign({},f.default,e,{parentLocator:y.findParentContainer}))),n},getDependencies(t){let e=v.get(t);if(void 0===e){const n=t.inject;if(void 0===n){const n=s.getDesignParamTypes(t),i=s.getAnnotationParamTypes(t);if(n===o.ow)if(i===o.ow){const n=Object.getPrototypeOf(t);e="function"==typeof n&&n!==Function.prototype?h(y.getDependencies(n)):[]}else e=h(i);else if(i===o.ow)e=h(n);else{e=h(n);let t,o=i.length;for(let n=0;n<o;++n)t=i[n],void 0!==t&&(e[n]=t);const r=Object.keys(i);let s;o=r.length;for(let t=0;t<o;++t)s=r[t],G(s)||(e[s]=i[s])}}else e=h(n);v.set(t,e)}return e},defineProperty(t,e,n,i=!1){const r=`$di_${e}`;Reflect.defineProperty(t,e,{get:function(){let t=this[r];if(void 0===t){const s=this instanceof Node?y.findResponsibleContainer(this):y.getOrCreateDOMContainer();if(t=s.get(n),this[r]=t,i){const i=this.$fastController;if(!i)throw o.Bo.error(1514);const s=()=>{y.findResponsibleContainer(this).get(n)!==this[r]&&(this[r]=t,i.notify(e))};i.subscribe({handleChange:s},"isConnected")}}return t}})},createContext:g,createInterface:g,inject:(...t)=>function(e,n,i){if("number"==typeof i){const n=s.getOrCreateAnnotationParamTypes(e),o=t[0];void 0!==o&&(n[i]=o)}else if(n)y.defineProperty(e,n,t[0]);else{const n=i?s.getOrCreateAnnotationParamTypes(i.value):s.getOrCreateAnnotationParamTypes(e);let o;for(let e=0;e<t.length;++e)o=t[e],void 0!==o&&(n[e]=o)}},transient:t=>(t.register=function(e){return M.transient(t,t).register(e)},t.registerInRequestor=!1,t),singleton:(t,e=k)=>(t.register=function(e){return M.singleton(t,t).register(e)},t.registerInRequestor=e.scoped,t)}),x=y.createContext("Container"),w=x;function $(t){return function(e){const n=function(t,e,i){y.inject(n)(t,e,i)};return n.$isResolver=!0,n.resolve=function(n,i){return t(e,n,i)},n}}const C=y.inject;const k={scoped:!1};S=(t,e,n,i)=>n.getAll(t,i);var S;$(((t,e,n)=>()=>n.get(t))),$(((t,e,n)=>n.has(t,!0)?n.get(t):void 0));function T(t,e,n){y.inject(T)(t,e,n)}T.$isResolver=!0,T.resolve=()=>{};$(((t,e,n)=>{const i=L(t,e),o=new O(t,0,i);return n.registerResolver(t,o),i})),$(((t,e,n)=>L(t,e)));function L(t,e){return e.getFactory(t).construct(e)}class O{constructor(t,e,n){this.key=t,this.strategy=e,this.state=n,this.resolving=!1}get $isResolver(){return!0}register(t){return t.registerResolver(this.key,this)}resolveAsync(t,e){switch(this.strategy){case 1:if(this.resolving)throw o.Bo.error(1513,{name:this.state.name});return this.resolving=!0,t.getFactory(this.state).constructAsync(e).then((t=>(this.state=t,this.strategy=0,this.resolving=!1,t)));case 2:{const n=t.getFactory(this.state);if(null===n)throw o.Bo.error(1502,{key:this.key});return n.constructAsync(e)}default:return Promise.resolve(this.resolve(t,e))}}resolve(t,e){switch(this.strategy){case 0:return this.state;case 1:if(this.resolving)throw o.Bo.error(1513,{name:this.state.name});return this.resolving=!0,this.state=t.getFactory(this.state).construct(e),this.strategy=0,this.resolving=!1,this.state;case 2:{const n=t.getFactory(this.state);if(null===n)throw o.Bo.error(1502,{key:this.key});return n.construct(e)}case 3:return this.state(t,e,this);case 4:return this.state[0].resolve(t,e);case 5:return e.get(this.state);default:throw o.Bo.error(1503,{strategy:this.strategy})}}getFactory(t){var e,n,i;switch(this.strategy){case 1:case 2:return t.getFactory(this.state);case 5:return null!==(i=null===(n=null===(e=t.getResolver(this.state))||void 0===e?void 0:e.getFactory)||void 0===n?void 0:n.call(e,t))&&void 0!==i?i:null;default:return null}}}function I(t){return this.get(t)}function A(t,e){return e(t)}class H{constructor(t,e){this.Type=t,this.dependencies=e,this.transformers=null}constructAsync(t,e){return(0,i.mG)(this,void 0,void 0,(function*(){const n=yield Promise.all(this.dependencies.map((e=>t.getAsync(e))));return this.constructCore(n,e)}))}construct(t,e){const n=this.dependencies.map(I,t);return this.constructCore(n,e)}constructCore(t,e){let n;return n=void 0===e?new this.Type(...t):new this.Type(...t,...e),null===this.transformers?n:this.transformers.reduce(A,n)}registerTransformer(t){(this.transformers||(this.transformers=[])).push(t)}}const D={$isResolver:!0,resolve:(t,e)=>e,resolveAsync:function(t,e){return Promise.resolve(e)}};function F(t){return"function"==typeof t.register}function E(t){return function(t){return F(t)&&"boolean"==typeof t.registerInRequestor}(t)&&t.registerInRequestor}const B=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),R=new Map;class j{constructor(t,e){this.owner=t,this.config=e,this._parent=void 0,this.registerDepth=0,this.isHandlingContextRequests=!1,this.resolvers=new Map,this.resolvers.set(x,D),t&&(t.$$container$$=this,"addEventListener"in t&&c.handle(t,(t=>{if(this.isHandlingContextRequests)try{const e=this.get(t.context);t.stopImmediatePropagation(),t.callback(e)}catch(t){}else t.context===x&&t.composedPath()[0]!==this.owner&&(t.stopImmediatePropagation(),t.callback(this))})))}get parent(){return void 0===this._parent&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return null===this.parent?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}handleContextRequests(t){this.isHandlingContextRequests=t}register(...t){if(100==++this.registerDepth)throw o.Bo.error(1504);let e,n,i,r,s;for(let o=0,a=t.length;o<a;++o)if(e=t[o],q(e))if(F(e))e.register(this);else if(void 0!==e.prototype)M.singleton(e,e).register(this);else for(n=Object.keys(e),r=0,s=n.length;r<s;++r)i=e[n[r]],q(i)&&(F(i)?i.register(this):this.register(i));return--this.registerDepth,this}registerResolver(t,e){z(t);const n=this.resolvers,i=n.get(t);return null==i?n.set(t,e):i instanceof O&&4===i.strategy?i.state.push(e):n.set(t,new O(t,4,[i,e])),e}registerTransformer(t,e){const n=this.getResolver(t);if(null==n)return!1;if(n.getFactory){const t=n.getFactory(this);return null!=t&&(t.registerTransformer(e),!0)}return!1}getResolver(t,e=!0){if(z(t),void 0!==t.resolve)return t;let n,i=this;for(;null!=i;){if(n=i.resolvers.get(t),null!=n)return n;if(null==i.parent){const n=E(t)?this:i;return e?this.jitRegister(t,n):null}i=i.parent}return null}has(t,e=!1){return!!this.resolvers.has(t)||!(!e||null==this.parent)&&this.parent.has(t,!0)}getAsync(t){return(0,i.mG)(this,void 0,void 0,(function*(){if(z(t),t.$isResolver)return t.resolveAsync(this,this);let e,n=this;for(;null!=n;){if(e=n.resolvers.get(t),null!=e)return e.resolveAsync(n,this);if(null==n.parent){const i=yield this.config.asyncRegistrationLocator(t);if(!i)throw o.Bo.error(1505,{key:t});const r=E(t)?this:n;return e=i.register(r),e.resolveAsync(n,this)}n=n.parent}throw o.Bo.error(1505,{key:t})}))}get(t){if(z(t),t.$isResolver)return t.resolve(this,this);let e,n=this;for(;null!=n;){if(e=n.resolvers.get(t),null!=e)return e.resolve(n,this);if(null==n.parent){const i=E(t)?this:n;return e=this.jitRegister(t,i),e.resolve(n,this)}n=n.parent}throw o.Bo.error(1505,{key:t})}getAll(t,e=!1){z(t);const n=this;let i,r=n;if(e){let e=o.ow;for(;null!=r;)i=r.resolvers.get(t),null!=i&&(e=e.concat(N(i,r,n))),r=r.parent;return e}for(;null!=r;){if(i=r.resolvers.get(t),null!=i)return N(i,r,n);if(r=r.parent,null==r)return o.ow}return o.ow}getFactory(t){let e=R.get(t);if(void 0===e){if(U(t))throw o.Bo.error(1506,{name:t.name});R.set(t,e=new H(t,y.getDependencies(t)))}return e}registerFactory(t,e){R.set(t,e)}createChild(t){return new j(null,Object.assign({},this.config,t,{parentLocator:()=>this}))}jitRegister(t,e){if("function"!=typeof t)throw o.Bo.error(1507,{value:t});if(B.has(t.name))throw o.Bo.error(1508,{value:t.name});if(F(t)){const n=t.register(e);if(!(n instanceof Object)||null==n.resolve){const n=e.resolvers.get(t);if(null!=n)return n;throw o.Bo.error(1510)}return n}if(t.$isInterface)throw o.Bo.error(1509,{value:t.name});{const n=this.config.defaultResolver(t,e);return e.resolvers.set(t,n),n}}}const P=new WeakMap;function _(t){return function(e,n,i){if(P.has(i))return P.get(i);const o=t(e,n,i);return P.set(i,o),o}}const M=Object.freeze({instance:(t,e)=>new O(t,0,e),singleton:(t,e)=>new O(t,1,e),transient:(t,e)=>new O(t,2,e),callback:(t,e)=>new O(t,3,e),cachedCallback:(t,e)=>new O(t,3,_(e)),aliasTo:(t,e)=>new O(e,5,t)});function z(t){if(null==t)throw o.Bo.error(1511)}function N(t,e,n){if(t instanceof O&&4===t.strategy){const i=t.state;let o=i.length;const r=new Array(o);for(;o--;)r[o]=i[o].resolve(e,n);return r}return[t.resolve(e,n)]}const V="(anonymous)";function q(t){return"object"==typeof t&&null!==t||"function"==typeof t}const U=function(){const t=new WeakMap;let e=!1,n="",i=0;return function(o){return e=t.get(o),void 0===e&&(n=o.toString(),i=n.length,e=i>=29&&i<=100&&125===n.charCodeAt(i-1)&&n.charCodeAt(i-2)<=32&&93===n.charCodeAt(i-3)&&101===n.charCodeAt(i-4)&&100===n.charCodeAt(i-5)&&111===n.charCodeAt(i-6)&&99===n.charCodeAt(i-7)&&32===n.charCodeAt(i-8)&&101===n.charCodeAt(i-9)&&118===n.charCodeAt(i-10)&&105===n.charCodeAt(i-11)&&116===n.charCodeAt(i-12)&&97===n.charCodeAt(i-13)&&110===n.charCodeAt(i-14)&&88===n.charCodeAt(i-15),t.set(o,e)),e}}(),W={};function G(t){switch(typeof t){case"number":return t>=0&&(0|t)===t;case"string":{const e=W[t];if(void 0!==e)return e;const n=t.length;if(0===n)return W[t]=!1;let i=0;for(let e=0;e<n;++e)if(i=t.charCodeAt(e),0===e&&48===i&&n>1||i<48||i>57)return W[t]=!1;return W[t]=!0}default:return!1}}},31393:function(t,e,n){"use strict";n.d(e,{K:function(){return p}});var i=n(31699),o=n(34959);function r(t,e,n,i){return(t,e,n,...r)=>{(0,o.HD)(n)&&(n=n.replace("javascript:","")),i(t,e,n,...r)}}function s(t,e,n,i){throw new Error(`${n} on ${null!=t?t:"text"} is blocked by the current DOMPolicy.`)}const a={onabort:s,onauxclick:s,onbeforeinput:s,onbeforematch:s,onblur:s,oncancel:s,oncanplay:s,oncanplaythrough:s,onchange:s,onclick:s,onclose:s,oncontextlost:s,oncontextmenu:s,oncontextrestored:s,oncopy:s,oncuechange:s,oncut:s,ondblclick:s,ondrag:s,ondragend:s,ondragenter:s,ondragleave:s,ondragover:s,ondragstart:s,ondrop:s,ondurationchange:s,onemptied:s,onended:s,onerror:s,onfocus:s,onformdata:s,oninput:s,oninvalid:s,onkeydown:s,onkeypress:s,onkeyup:s,onload:s,onloadeddata:s,onloadedmetadata:s,onloadstart:s,onmousedown:s,onmouseenter:s,onmouseleave:s,onmousemove:s,onmouseout:s,onmouseover:s,onmouseup:s,onpaste:s,onpause:s,onplay:s,onplaying:s,onprogress:s,onratechange:s,onreset:s,onresize:s,onscroll:s,onsecuritypolicyviolation:s,onseeked:s,onseeking:s,onselect:s,onslotchange:s,onstalled:s,onsubmit:s,onsuspend:s,ontimeupdate:s,ontoggle:s,onvolumechange:s,onwaiting:s,onwebkitanimationend:s,onwebkitanimationiteration:s,onwebkitanimationstart:s,onwebkittransitionend:s,onwheel:s},l={elements:{a:{[i.O.attribute]:{href:r},[i.O.property]:{href:r}},area:{[i.O.attribute]:{href:r},[i.O.property]:{href:r}},button:{[i.O.attribute]:{formaction:r},[i.O.property]:{formAction:r}},embed:{[i.O.attribute]:{src:s},[i.O.property]:{src:s}},form:{[i.O.attribute]:{action:r},[i.O.property]:{action:r}},frame:{[i.O.attribute]:{src:r},[i.O.property]:{src:r}},iframe:{[i.O.attribute]:{src:r},[i.O.property]:{src:r,srcdoc:s}},input:{[i.O.attribute]:{formaction:r},[i.O.property]:{formAction:r}},link:{[i.O.attribute]:{href:s},[i.O.property]:{href:s}},object:{[i.O.attribute]:{codebase:s,data:s},[i.O.property]:{codeBase:s,data:s}},script:{[i.O.attribute]:{src:s,text:s},[i.O.property]:{src:s,text:s,innerText:s,textContent:s}},style:{[i.O.property]:{innerText:s,textContent:s}}},aspects:{[i.O.attribute]:Object.assign({},a),[i.O.property]:Object.assign({innerHTML:s},a),[i.O.event]:Object.assign({},a)}};function c(t,e){const n={};for(const i in e){const o=t[i],r=e[i];switch(o){case null:break;case void 0:n[i]=r;break;default:n[i]=o}}for(const e in t)e in n||(n[e]=t[e]);return Object.freeze(n)}function u(t,e){const n={};for(const i in e){const o=t[i],r=e[i];switch(o){case null:break;case void 0:n[i]=c(r,{});break;default:n[i]=c(o,r)}}for(const e in t)e in n||(n[e]=c(t[e],{}));return Object.freeze(n)}function d(t,e){const n={};for(const i in e){const o=t[i],r=e[i];switch(o){case null:break;case void 0:n[i]=u(o,{});break;default:n[i]=u(o,r)}}for(const e in t)e in n||(n[e]=u(t[e],{}));return Object.freeze(n)}function h(t,e,n,i,o){const r=t[n];if(r){const t=r[i];if(t)return t(e,n,i,o)}}const p=Object.freeze({create(t={}){var e,n;const i=null!==(e=t.trustedType)&&void 0!==e?e:function(){const t=t=>t;return globalThis.trustedTypes?globalThis.trustedTypes.createPolicy("fast-html",{createHTML:t}):{createHTML:t}}(),o=(r=null!==(n=t.guards)&&void 0!==n?n:{},s=l,Object.freeze({elements:r.elements?d(r.elements,s.elements):s.elements,aspects:r.aspects?u(r.aspects,s.aspects):s.aspects}));var r,s;return Object.freeze({createHTML:t=>i.createHTML(t),protect(t,e,n,i){var r;const s=(null!=t?t:"").toLowerCase(),a=o.elements[s];if(a){const o=h(a,t,e,n,i);if(o)return o}return null!==(r=h(o.aspects,t,e,n,i))&&void 0!==r?r:i}})}})},31699:function(t,e,n){"use strict";n.d(e,{O:function(){return r},S:function(){return u}});var i=n(58968),o=n(89522);const r=Object.freeze({none:0,attribute:1,booleanAttribute:2,property:3,content:4,tokenList:5,event:6}),s=t=>t,a=globalThis.trustedTypes?globalThis.trustedTypes.createPolicy("fast-html",{createHTML:s}):{createHTML:s};let l=Object.freeze({createHTML:t=>a.createHTML(t),protect:(t,e,n,i)=>i});const c=l,u=Object.freeze({queueUpdate:i.H.enqueue,nextUpdate:i.H.next,processUpdates:i.H.process,get policy(){return l},setPolicy(t){if(l!==c)throw o.Bo.error(1201);l=t},setAttribute(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)},setBooleanAttribute(t,e,n){n?t.setAttribute(e,""):t.removeAttribute(e)}})},89225:function(t,e,n){"use strict";n.r(e),n.d(e,{ArrayObserver:function(){return a.K1},AttributeConfiguration:function(){return W.Ax},AttributeDefinition:function(){return W.so},Binding:function(){return v.KX},CSSDirective:function(){return d.v},ChildrenDirective:function(){return w.p},Compiler:function(){return p.S},DOM:function(){return o.S},DOMAspect:function(){return o.O},ElementController:function(){return G.t3},ElementStyles:function(){return c.X},ExecutionContext:function(){return r.rd},FAST:function(){return i.Bo},FASTElement:function(){return U.H},FASTElementDefinition:function(){return k.W},HTMLBindingDirective:function(){return g.RV},HTMLDirective:function(){return v.m0},HTMLView:function(){return $.bP},HydratableElementController:function(){return G.Hi},HydrationBindingError:function(){return $.AH},HydrationRepeatError:function(){return y.ev},HydrationStage:function(){return $.BH},HydrationView:function(){return $.Bq},InlineTemplateDirective:function(){return h.Sy},Markup:function(){return f.Lu},NodeObservationDirective:function(){return C.v},NodeTemplate:function(){return V},Observable:function(){return r.y$},Parser:function(){return f._b},PropertyChangeNotifier:function(){return s.A},RefDirective:function(){return m.o},RenderBehavior:function(){return L},RenderDirective:function(){return O},RenderInstruction:function(){return z},RepeatBehavior:function(){return y.eN},RepeatDirective:function(){return y.Gx},SlottedDirective:function(){return x.E},SourceLifetime:function(){return r.sG},Splice:function(){return a.fw},SpliceStrategy:function(){return a.Fk},SpliceStrategySupport:function(){return a.HO},StatelessAttachedAttributeDirective:function(){return v.Pq},SubscriberSet:function(){return s.q},Updates:function(){return l.H},ViewTemplate:function(){return h._H},attr:function(){return W.Lj},bind:function(){return g.ak},booleanConverter:function(){return W.bw},children:function(){return w.N},createMetadataLocator:function(){return i.j8},createTypeRegistry:function(){return i.LI},css:function(){return u.i},cssDirective:function(){return d.k},cssPartial:function(){return u.j},customElement:function(){return U.M},elements:function(){return C.R},emptyArray:function(){return i.ow},html:function(){return h.dy},htmlDirective:function(){return v.hG},lengthOf:function(){return a.Tk},listener:function(){return g.X3},normalizeBinding:function(){return g.k_},nullableNumberConverter:function(){return W.Id},observable:function(){return r.LO},oneTime:function(){return g.xv},ref:function(){return m.i},render:function(){return q},renderWith:function(){return N},repeat:function(){return y.rx},slotted:function(){return x.Q},volatile:function(){return r.lk},when:function(){return b.g}});var i=n(89522),o=n(31699),r=n(99452),s=n(39579),a=n(32883),l=n(58968),c=n(70885),u=n(78923),d=n(17781),h=n(49218),p=n(65883),f=n(59833),g=n(41869),v=n(85594),m=n(41472),b=n(93703),y=n(89150),x=n(47548),w=n(99026),$=n(49820),C=n(95185),k=n(72394),S=n(28521),T=n(34959);class L{constructor(t){this.directive=t,this.location=null,this.controller=null,this.view=null,this.data=null,this.dataBindingObserver=t.dataBinding.createObserver(t,this),this.templateBindingObserver=t.templateBinding.createObserver(t,this)}bind(t){if(this.location=t.targets[this.directive.targetNodeId],this.controller=t,this.data=this.dataBindingObserver.bind(t),this.template=this.templateBindingObserver.bind(t),t.onUnbind(this),(0,S.l$)(this.template)&&(0,S.l$)(t)&&t.hydrationStage!==$.BH.hydrated&&!this.view){const e=t.bindingViewBoundaries[this.directive.targetNodeId];e&&(this.view=this.template.hydrate(e.first,e.last),this.bindView(this.view))}else this.refreshView()}unbind(t){const e=this.view;null!==e&&e.isComposed&&(e.unbind(),e.needsBindOnly=!0)}handleChange(t,e){e===this.dataBindingObserver&&(this.data=this.dataBindingObserver.bind(this.controller)),(this.directive.templateBindingDependsOnData||e===this.templateBindingObserver)&&(this.template=this.templateBindingObserver.bind(this.controller)),this.refreshView()}bindView(t){t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.data)):(t.isComposed=!0,t.bind(this.data),t.insertBefore(this.location),t.$fastTemplate=this.template)}refreshView(){let t=this.view;const e=this.template;null===t?(this.view=t=e.create(),this.view.context.parent=this.controller.source,this.view.context.parentContext=this.controller.context):t.$fastTemplate!==e&&(t.isComposed&&(t.remove(),t.unbind()),this.view=t=e.create(),this.view.context.parent=this.controller.source,this.view.context.parentContext=this.controller.context),this.bindView(t)}}class O{constructor(t,e,n){this.dataBinding=t,this.templateBinding=e,this.templateBindingDependsOnData=n}createHTML(t){return f.Lu.comment(t(this))}createBehavior(){return new L(this)}}v.m0.define(O);const I=new Map,A={":model":t=>t},H=Symbol("RenderInstruction"),D="default-view",F=h.dy`
    &nbsp;
`;function E(t){return void 0===t?F:t.template}function B(t,e,n,i){const o=[],r=[];if(e){const n=Object.getOwnPropertyNames(e);o.push(`<${t}`);for(let t=0,i=n.length;t<i;++t){const i=n[t];0===t?o[0]=`${o[0]} ${i}="`:o.push(`" ${i}="`),r.push(e[i])}o.push('">')}else o.push(`<${t}>`);if(n&&(0,T.mf)(n.create))r.push(n),o.push(`</${t}>`);else{const e=o.length-1;o[e]=`${o[e]}${null!=n?n:""}</${t}>`}return h._H.create(o,r,i)}function R(t){var e,n;const i=null!==(e=t.name)&&void 0!==e?e:D;let o;if((r=t).element||r.tagName){let e=t.tagName;if(!e){const n=k.W.getByType(t.element);if(!n)throw new Error("Invalid element for model rendering.");e=n.name}o=B(e,null!==(n=t.attributes)&&void 0!==n?n:A,t.content,t.policy)}else o=t.template;var r;return{brand:H,type:t.type,name:i,template:o}}function j(t){return t&&t.brand===H}function P(t){let e=I.get(t.type);void 0===e&&I.set(t.type,e=Object.create(null));const n=j(t)?t:R(t);return e[n.name]=n}function _(t,e){const n=I.get(t);if(void 0!==n)return n[null!=e?e:D]}function M(t,e){if(t)return _(t.constructor,e)}const z=Object.freeze({instanceOf:j,create:R,createElementTemplate:B,register:P,getByType:_,getForInstance:M});function N(t,e){return function(n){(0,T.mf)(t)?P({type:n,element:t,name:e}):(0,T.mf)(t.create)?P({type:n,template:t,name:e}):P(Object.assign({type:n},t))}}class V{constructor(t){this.node=t,t.$fastTemplate=this}get context(){return this}bind(t){}unbind(){}insertBefore(t){t.parentNode.insertBefore(this.node,t)}remove(){this.node.parentNode.removeChild(this.node)}create(){return this}hydrate(t,e){return this}}function q(t,e){let n,i;n=void 0===t?(0,g.xv)((t=>t)):(0,g.k_)(t);let o=!1;if(void 0===e)o=!0,i=(0,g.xv)(((t,e)=>{var i;const o=n.evaluate(t,e);return o instanceof Node?null!==(i=o.$fastTemplate)&&void 0!==i?i:new V(o):E(M(o))}));else if((0,T.mf)(e))i=(0,g.ak)(((t,i)=>{var o;let r=e(t,i);return(0,T.HD)(r)?r=E(M(n.evaluate(t,i),r)):r instanceof Node&&(r=null!==(o=r.$fastTemplate)&&void 0!==o?o:new V(r)),r}),void 0,!0);else if((0,T.HD)(e))o=!0,i=(0,g.xv)(((t,i)=>{var o;const r=n.evaluate(t,i);return r instanceof Node?null!==(o=r.$fastTemplate)&&void 0!==o?o:new V(r):E(M(r,e))}));else if(e instanceof v.KX){const t=e.evaluate;e.evaluate=(e,i)=>{var o;let r=t(e,i);return(0,T.HD)(r)?r=E(M(n.evaluate(e,i),r)):r instanceof Node&&(r=null!==(o=r.$fastTemplate)&&void 0!==o?o:new V(r)),r},i=e}else i=(0,g.xv)(((t,n)=>e));return new O(n,i,o)}var U=n(28904),W=n(42590),G=n(7279)},34959:function(t,e,n){"use strict";let i;n.d(e,{HD:function(){return a},P6:function(){return r},ZT:function(){return l},mf:function(){return s}});const o="fast-kernel";try{if(document.currentScript)i=document.currentScript.getAttribute(o);else{const t=document.getElementsByTagName("script");i=t[t.length-1].getAttribute(o)}}catch(t){i="isolate"}let r;switch(i){case"share":r=Object.freeze({updateQueue:1,observable:2,contextEvent:3,elementRegistry:4});break;case"share-v2":r=Object.freeze({updateQueue:1.2,observable:2.2,contextEvent:3.2,elementRegistry:4.2});break;default:const t=`-${Math.random().toString(36).substring(2,8)}`;r=Object.freeze({updateQueue:`1.2${t}`,observable:`2.2${t}`,contextEvent:`3.2${t}`,elementRegistry:`4.2${t}`})}const s=t=>"function"==typeof t,a=t=>"string"==typeof t,l=()=>{}},32883:function(t,e,n){"use strict";n.d(e,{Fk:function(){return f},HO:function(){return l},K1:function(){return b},Tk:function(){return y},fw:function(){return a}});var i=n(89522),o=n(39579),r=n(99452),s=n(58968);class a{constructor(t,e,n){this.index=t,this.removed=e,this.addedCount=n}adjustTo(t){let e=this.index;const n=t.length;return e>n?e=n-this.addedCount:e<0&&(e=n+this.removed.length+e-this.addedCount),this.index=e<0?0:e,this}}const l=Object.freeze({reset:1,splice:2,optimized:3}),c=new a(0,i.ow,0);c.reset=!0;const u=[c];function d(t,e,n,o,r,s){let l=0,c=0;const u=Math.min(n-e,s-r);if(0===e&&0===r&&(l=function(t,e,n){for(let i=0;i<n;++i)if(t[i]!==e[i])return i;return n}(t,o,u)),n===t.length&&s===o.length&&(c=function(t,e,n){let i=t.length,o=e.length,r=0;for(;r<n&&t[--i]===e[--o];)r++;return r}(t,o,u-l)),r+=l,s-=c,(n-=c)-(e+=l)==0&&s-r==0)return i.ow;if(e===n){const t=new a(e,[],0);for(;r<s;)t.removed.push(o[r++]);return[t]}if(r===s)return[new a(e,[],n-e)];const d=function(t){let e=t.length-1,n=t[0].length-1,i=t[e][n];const o=[];for(;e>0||n>0;){if(0===e){o.push(2),n--;continue}if(0===n){o.push(3),e--;continue}const r=t[e-1][n-1],s=t[e-1][n],a=t[e][n-1];let l;l=s<a?s<r?s:r:a<r?a:r,l===r?(r===i?o.push(0):(o.push(1),i=r),e--,n--):l===s?(o.push(3),e--,i=s):(o.push(2),n--,i=a)}return o.reverse()}(function(t,e,n,i,o,r){const s=r-o+1,a=n-e+1,l=new Array(s);let c,u;for(let t=0;t<s;++t)l[t]=new Array(a),l[t][0]=t;for(let t=0;t<a;++t)l[0][t]=t;for(let n=1;n<s;++n)for(let r=1;r<a;++r)t[e+r-1]===i[o+n-1]?l[n][r]=l[n-1][r-1]:(c=l[n-1][r]+1,u=l[n][r-1]+1,l[n][r]=c<u?c:u);return l}(t,e,n,o,r,s)),h=[];let p,f=e,g=r;for(let t=0;t<d.length;++t)switch(d[t]){case 0:void 0!==p&&(h.push(p),p=void 0),f++,g++;break;case 1:void 0===p&&(p=new a(f,[],0)),p.addedCount++,f++,p.removed.push(o[g]),g++;break;case 2:void 0===p&&(p=new a(f,[],0)),p.addedCount++,f++;break;case 3:void 0===p&&(p=new a(f,[],0)),p.removed.push(o[g]),g++}return void 0!==p&&h.push(p),h}function h(t,e){let n=!1,i=0;for(let l=0;l<e.length;l++){const c=e[l];if(c.index+=i,n)continue;const u=(o=t.index,r=t.index+t.removed.length,s=c.index,a=c.index+c.addedCount,r<s||a<o?-1:r===s||a===o?0:o<s?r<a?r-s:a-s:a<r?a-o:r-o);if(u>=0){e.splice(l,1),l--,i-=c.addedCount-c.removed.length,t.addedCount+=c.addedCount-u;const o=t.removed.length+c.removed.length-u;if(t.addedCount||o){let e=c.removed;if(t.index<c.index){const n=t.removed.slice(0,c.index-t.index);n.push(...e),e=n}if(t.index+t.removed.length>c.index+c.addedCount){const n=t.removed.slice(c.index+c.addedCount-t.index);e.push(...n)}t.removed=e,c.index<t.index&&(t.index=c.index)}else n=!0}else if(t.index<c.index){n=!0,e.splice(l,0,t),l++;const o=t.addedCount-t.removed.length;c.index+=o,i+=o}}var o,r,s,a;n||e.push(t)}let p=Object.freeze({support:l.optimized,normalize:(t,e,n)=>void 0===t?void 0===n?i.ow:n.length>1?function(t,e){let n=[];const i=[];for(let t=0,n=e.length;t<n;t++)h(e[t],i);for(let e=0,o=i.length;e<o;++e){const o=i[e];1!==o.addedCount||1!==o.removed.length?n=n.concat(d(t,o.index,o.index+o.addedCount,o.removed,0,o.removed.length)):o.removed[0]!==t[o.index]&&n.push(o)}return n}(e,n):n:u,pop(t,e,n,i){const o=t.length>0,r=n.apply(t,i);return o&&e.addSplice(new a(t.length,[r],0)),r},push(t,e,n,i){const o=n.apply(t,i);return e.addSplice(new a(t.length-i.length,[],i.length).adjustTo(t)),o},reverse(t,e,n,i){const o=n.apply(t,i);return e.reset(t),o},shift(t,e,n,i){const o=t.length>0,r=n.apply(t,i);return o&&e.addSplice(new a(0,[r],0)),r},sort(t,e,n,i){const o=n.apply(t,i);return e.reset(t),o},splice(t,e,n,i){const o=n.apply(t,i);return e.addSplice(new a(+i[0],o,i.length>2?i.length-2:0).adjustTo(t)),o},unshift(t,e,n,i){const o=n.apply(t,i);return e.addSplice(new a(0,[],i.length).adjustTo(t)),o}});const f=Object.freeze({reset:u,setDefaultStrategy(t){p=t}});function g(t,e,n){Reflect.defineProperty(t,e,{value:n,enumerable:!1})}class v extends o.q{constructor(t){super(t),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this._strategy=null,this._lengthObserver=void 0,this.call=this.flush,g(t,"$fastController",this)}get strategy(){return this._strategy}set strategy(t){this._strategy=t}get lengthObserver(){let t=this._lengthObserver;if(void 0===t){const e=this.subject;this._lengthObserver=t={length:e.length,handleChange(){this.length!==e.length&&(this.length=e.length,r.y$.notify(t,"length"))}},this.subscribe(t)}return t}subscribe(t){this.flush(),super.subscribe(t)}addSplice(t){void 0===this.splices?this.splices=[t]:this.splices.push(t),this.enqueue()}reset(t){this.oldCollection=t,this.enqueue()}flush(){var t;const e=this.splices,n=this.oldCollection;void 0===e&&void 0===n||(this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0,this.notify((null!==(t=this._strategy)&&void 0!==t?t:p).normalize(n,this.subject,e)))}enqueue(){this.needsQueue&&(this.needsQueue=!1,s.H.enqueue(this))}}let m=!1;const b=Object.freeze({enable(){if(m)return;m=!0,r.y$.setArrayObserverFactory((t=>new v(t)));const t=Array.prototype;t.$fastPatch||(g(t,"$fastPatch",1),[t.pop,t.push,t.reverse,t.shift,t.sort,t.splice,t.unshift].forEach((e=>{t[e.name]=function(...t){var n;const i=this.$fastController;return void 0===i?e.apply(this,t):(null!==(n=i.strategy)&&void 0!==n?n:p)[e.name](this,i,e,t)}})))}});function y(t){if(!t)return 0;let e=t.$fastController;return void 0===e&&(b.enable(),e=r.y$.getNotifier(t)),r.y$.track(e.lengthObserver,"length"),t.length}},39579:function(t,e,n){"use strict";n.d(e,{A:function(){return o},q:function(){return i}});class i{constructor(t,e){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.subject=t,this.sub1=e}has(t){return void 0===this.spillover?this.sub1===t||this.sub2===t:-1!==this.spillover.indexOf(t)}subscribe(t){const e=this.spillover;if(void 0===e){if(this.has(t))return;if(void 0===this.sub1)return void(this.sub1=t);if(void 0===this.sub2)return void(this.sub2=t);this.spillover=[this.sub1,this.sub2,t],this.sub1=void 0,this.sub2=void 0}else{-1===e.indexOf(t)&&e.push(t)}}unsubscribe(t){const e=this.spillover;if(void 0===e)this.sub1===t?this.sub1=void 0:this.sub2===t&&(this.sub2=void 0);else{const n=e.indexOf(t);-1!==n&&e.splice(n,1)}}notify(t){const e=this.spillover,n=this.subject;if(void 0===e){const e=this.sub1,i=this.sub2;void 0!==e&&e.handleChange(n,t),void 0!==i&&i.handleChange(n,t)}else for(let i=0,o=e.length;i<o;++i)e[i].handleChange(n,t)}}class o{constructor(t){this.subscribers={},this.subjectSubscribers=null,this.subject=t}notify(t){var e,n;null===(e=this.subscribers[t])||void 0===e||e.notify(t),null===(n=this.subjectSubscribers)||void 0===n||n.notify(t)}subscribe(t,e){var n,o;let r;r=e?null!==(n=this.subscribers[e])&&void 0!==n?n:this.subscribers[e]=new i(this.subject):null!==(o=this.subjectSubscribers)&&void 0!==o?o:this.subjectSubscribers=new i(this.subject),r.subscribe(t)}unsubscribe(t,e){var n,i;e?null===(n=this.subscribers[e])||void 0===n||n.unsubscribe(t):null===(i=this.subjectSubscribers)||void 0===i||i.unsubscribe(t)}}},99452:function(t,e,n){"use strict";n.d(e,{LO:function(){return c},lk:function(){return u},rd:function(){return h},sG:function(){return a},y$:function(){return l}});var i=n(34959),o=n(89522),r=n(58968),s=n(39579);const a=Object.freeze({unknown:void 0,coupled:1}),l=o.Bo.getById(i.P6.observable,(()=>{const t=r.H.enqueue,e=/(:|&&|\|\||if)/,n=new WeakMap;let l,c=t=>{throw o.Bo.error(1101)};function u(t){var e;let i=null!==(e=t.$fastController)&&void 0!==e?e:n.get(t);return void 0===i&&(Array.isArray(t)?i=c(t):n.set(t,i=new s.A(t))),i}const d=(0,o.j8)();class h{constructor(t){this.name=t,this.field=`_${t}`,this.callback=`${t}Changed`}getValue(t){return void 0!==l&&l.watch(t,this.name),t[this.field]}setValue(t,e){const n=this.field,o=t[n];if(o!==e){t[n]=e;const r=t[this.callback];(0,i.mf)(r)&&r.call(t,o,e),u(t).notify(this.name)}}}class p extends s.q{constructor(t,e,n=!1){super(t,e),this.expression=t,this.isVolatileBinding=n,this.needsRefresh=!0,this.needsQueue=!0,this.isAsync=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0,this.toJSON=i.ZT}setMode(t){this.isAsync=this.needsQueue=t}bind(t){this.controller=t;const e=this.observe(t.source,t.context);return!t.isBound&&this.requiresUnbind(t)&&t.onUnbind(this),e}requiresUnbind(t){return t.sourceLifetime!==a.coupled||this.first!==this.last||this.first.propertySource!==t.source}unbind(t){this.dispose()}observe(t,e){this.needsRefresh&&null!==this.last&&this.dispose();const n=l;let i;l=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;try{i=this.expression(t,e)}finally{l=n}return i}disconnect(){this.dispose()}dispose(){if(null!==this.last){let t=this.first;for(;void 0!==t;)t.notifier.unsubscribe(this,t.propertyName),t=t.next;this.last=null,this.needsRefresh=this.needsQueue=this.isAsync}}watch(t,e){const n=this.last,i=u(t),o=null===n?this.first:{};if(o.propertySource=t,o.propertyName=e,o.notifier=i,i.subscribe(this,e),null!==n){if(!this.needsRefresh){let e;l=void 0,e=n.propertySource[n.propertyName],l=this,t===e&&(this.needsRefresh=!0)}n.next=o}this.last=o}handleChange(){this.needsQueue?(this.needsQueue=!1,t(this)):this.isAsync||this.call()}call(){null!==this.last&&(this.needsQueue=this.isAsync,this.notify(this))}*records(){let t=this.first;for(;void 0!==t;)yield t,t=t.next}}return Object.freeze({setArrayObserverFactory(t){c=t},getNotifier:u,track(t,e){l&&l.watch(t,e)},trackVolatile(){l&&(l.needsRefresh=!0)},notify(t,e){u(t).notify(e)},defineProperty(t,e){(0,i.HD)(e)&&(e=new h(e)),d(t).push(e),Reflect.defineProperty(t,e.name,{enumerable:!0,get(){return e.getValue(this)},set(t){e.setValue(this,t)}})},getAccessors:d,binding(t,e,n=this.isVolatileBinding(t)){return new p(t,e,n)},isVolatileBinding:t=>e.test(t.toString())})}));function c(t,e){l.defineProperty(t,e)}function u(t,e,n){return Object.assign({},n,{get(){return l.trackVolatile(),n.get.apply(this)}})}const d=o.Bo.getById(i.P6.contextEvent,(()=>{let t=null;return{get:()=>t,set(e){t=e}}})),h=Object.freeze({default:{index:0,length:0,get event(){return h.getEvent()},eventDetail(){return this.event.detail},eventTarget(){return this.event.target}},getEvent:()=>d.get(),setEvent(t){d.set(t)}})},58968:function(t,e,n){"use strict";n.d(e,{H:function(){return o}});var i=n(34959);const o=n(89522).Bo.getById(i.P6.updateQueue,(()=>{const t=[],e=[];let n=!0;function i(){if(e.length)throw e.shift()}function o(o){try{o.call()}catch(o){if(!n)throw t.length=0,o;e.push(o),setTimeout(i,0)}}function r(){let e=0;for(;e<t.length;)if(o(t[e]),e++,e>1024){for(let n=0,i=t.length-e;n<i;n++)t[n]=t[n+e];t.length-=e,e=0}t.length=0}function s(e){t.push(e),t.length<2&&(n?globalThis.requestAnimationFrame(r):r())}return Object.freeze({enqueue:s,next:()=>new Promise(s),process:r,setMode:t=>n=t})}))},89522:function(t,e,n){"use strict";n.d(e,{Bo:function(){return o},j8:function(){return a},LI:function(){return s},ow:function(){return r}}),function(){if("undefined"==typeof globalThis)if("undefined"!=typeof global)global.globalThis=global;else if("undefined"!=typeof self)self.globalThis=self;else if("undefined"!=typeof window)window.globalThis=window;else{const t=new Function("return this")();t.globalThis=t}}();const i={configurable:!1,enumerable:!1,writable:!1};void 0===globalThis.FAST&&Reflect.defineProperty(globalThis,"FAST",Object.assign({value:Object.create(null)},i));const o=globalThis.FAST;if(void 0===o.getById){const t=Object.create(null);Reflect.defineProperty(o,"getById",Object.assign({value(e,n){let i=t[e];return void 0===i&&(i=n?t[e]=n():null),i}},i))}void 0===o.error&&Object.assign(o,{warn(){},error:t=>new Error(`Error ${t}`),addMessages(){}});const r=Object.freeze([]);function s(){const t=new WeakMap;return Object.freeze({register:e=>!t.has(e.type)&&(t.set(e.type,e),!0),getByType:e=>t.get(e),getForInstance(e){if(null!=e)return t.get(e.constructor)}})}function a(){const t=new WeakMap;return function(e){let n=t.get(e);if(void 0===n){let i=Reflect.getPrototypeOf(e);for(;void 0===n&&null!==i;)n=t.get(i),i=Reflect.getPrototypeOf(i);n=void 0===n?[]:n.slice(0),t.set(e,n)}return n}}},17781:function(t,e,n){"use strict";n.d(e,{k:function(){return r},v:function(){return o}});const i=(0,n(89522).LI)(),o=Object.freeze({getForInstance:i.getForInstance,getByType:i.getByType,define:t=>(i.register({type:t}),t)});function r(){return function(t){o.define(t)}}},78923:function(t,e,n){"use strict";n.d(e,{i:function(){return a},j:function(){return c}});var i=n(34959),o=n(17781),r=n(70885);function s(t,e){const n=[];let i="";const s=[],a=t=>{s.push(t)};for(let s=0,l=t.length-1;s<l;++s){i+=t[s];let l=e[s];void 0!==o.v.getForInstance(l)&&(l=l.createCSS(a)),l instanceof r.X||l instanceof CSSStyleSheet?(""!==i.trim()&&(n.push(i),i=""),n.push(l)):i+=l}return i+=t[t.length-1],""!==i.trim()&&n.push(i),{styles:n,behaviors:s}}const a=(t,...e)=>{const{styles:n,behaviors:i}=s(t,e),o=new r.X(n);return i.length?o.withBehaviors(...i):o};class l{constructor(t,e){this.behaviors=e,this.css="";const n=t.reduce(((t,e)=>((0,i.HD)(e)?this.css+=e:t.push(e),t)),[]);n.length&&(this.styles=new r.X(n))}createCSS(t){return this.behaviors.forEach(t),this.styles&&t(this),this.css}addedCallback(t){t.addStyles(this.styles)}removedCallback(t){t.removeStyles(this.styles)}}o.v.define(l),a.partial=(t,...e)=>{const{styles:n,behaviors:i}=s(t,e);return new l(n,i)};const c=a.partial},70885:function(t,e,n){"use strict";var i;let o;function r(t){return t.map((t=>t instanceof s?r(t.styles):[t])).reduce(((t,e)=>t.concat(e)),[])}n.d(e,{X:function(){return s}});class s{constructor(t){this.styles=t,this.targets=new WeakSet,this._strategy=null,this.behaviors=t.map((t=>t instanceof s?t.behaviors:null)).reduce(((t,e)=>null===e?t:null===t?e:t.concat(e)),null)}get strategy(){return null===this._strategy&&this.withStrategy(o),this._strategy}addStylesTo(t){this.strategy.addStylesTo(t),this.targets.add(t)}removeStylesFrom(t){this.strategy.removeStylesFrom(t),this.targets.delete(t)}isAttachedTo(t){return this.targets.has(t)}withBehaviors(...t){return this.behaviors=null===this.behaviors?t:this.behaviors.concat(t),this}withStrategy(t){return this._strategy=new t(r(this.styles)),this}static setDefaultStrategy(t){o=t}static normalize(t){return void 0===t?void 0:Array.isArray(t)?new s(t):t instanceof s?t:new s([t])}}s.supportsAdoptedStyleSheets=!(null===(i=globalThis.CSS)||void 0===i?void 0:i.supports("background","-webkit-named-image(i)"))&&Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype},41869:function(t,e,n){"use strict";n.d(e,{RV:function(){return f},X3:function(){return m},ak:function(){return g},k_:function(){return b},xv:function(){return v}});var i=n(28521),o=n(31699),r=n(34959),s=n(99452),a=n(89522),l=n(85594),c=n(59833),u=n(49820);class d extends l.KX{createObserver(t,e){return s.y$.binding(this.evaluate,e,this.isVolatile)}}class h extends l.KX{constructor(){super(...arguments),this.toJSON=r.ZT}createObserver(){return this}bind(t){return this.evaluate(t.source,t.context)}}const p={[o.O.attribute]:o.S.setAttribute,[o.O.booleanAttribute]:o.S.setBooleanAttribute,[o.O.property]:(t,e,n)=>t[e]=n,[o.O.content]:function(t,e,n,o){if(null==n&&(n=""),function(t){return void 0!==t.create}(n)){t.textContent="";let e=t.$fastView;if(void 0===e)if((0,i.l$)(o)&&(0,i.l$)(n)&&void 0!==o.bindingViewBoundaries[this.targetNodeId]&&o.hydrationStage!==u.BH.hydrated){const t=o.bindingViewBoundaries[this.targetNodeId];e=n.hydrate(t.first,t.last)}else e=n.create();else t.$fastTemplate!==n&&(e.isComposed&&(e.remove(),e.unbind()),e=n.create());e.isComposed?e.needsBindOnly&&(e.needsBindOnly=!1,e.bind(o.source,o.context)):(e.isComposed=!0,e.bind(o.source,o.context),e.insertBefore(t),t.$fastView=e,t.$fastTemplate=n)}else{const e=t.$fastView;void 0!==e&&e.isComposed&&(e.isComposed=!1,e.remove(),e.needsBindOnly?e.needsBindOnly=!1:e.unbind()),t.textContent=n}},[o.O.tokenList]:function(t,e,n){var i;const o=`${this.id}-t`,r=null!==(i=t[o])&&void 0!==i?i:t[o]={v:0,cv:Object.create(null)},s=r.cv;let a=r.v;const l=t[e];if(null!=n&&n.length){const t=n.split(/\s+/);for(let e=0,n=t.length;e<n;++e){const n=t[e];""!==n&&(s[n]=a,l.add(n))}}if(r.v=a+1,0!==a){a-=1;for(const t in s)s[t]===a&&l.remove(t)}},[o.O.event]:()=>{}};class f{constructor(t){this.dataBinding=t,this.updateTarget=null,this.aspectType=o.O.content}createHTML(t){return c.Lu.interpolation(t(this))}createBehavior(){var t;if(null===this.updateTarget){const e=p[this.aspectType],n=null!==(t=this.dataBinding.policy)&&void 0!==t?t:this.policy;if(!e)throw a.Bo.error(1205);this.data=`${this.id}-d`,this.updateTarget=n.protect(this.targetTagName,this.aspectType,this.targetAspect,e)}return this}bind(t){var e;const n=t.targets[this.targetNodeId],r=(0,i.l$)(t)&&t.hydrationStage&&t.hydrationStage!==u.BH.hydrated;switch(this.aspectType){case o.O.event:n[this.data]=t,n.addEventListener(this.targetAspect,this,this.dataBinding.options);break;case o.O.content:t.onUnbind(this);default:const i=null!==(e=n[this.data])&&void 0!==e?e:n[this.data]=this.dataBinding.createObserver(this,this);if(i.target=n,i.controller=t,r&&(this.aspectType===o.O.attribute||this.aspectType===o.O.booleanAttribute)){i.bind(t);break}this.updateTarget(n,this.targetAspect,i.bind(t),t)}}unbind(t){const e=t.targets[this.targetNodeId].$fastView;void 0!==e&&e.isComposed&&(e.unbind(),e.needsBindOnly=!0)}handleEvent(t){const e=t.currentTarget[this.data];if(e.isBound){s.rd.setEvent(t);const n=this.dataBinding.evaluate(e.source,e.context);s.rd.setEvent(null),!0!==n&&t.preventDefault()}}handleChange(t,e){const n=e.target,i=e.controller;this.updateTarget(n,this.targetAspect,e.bind(i),i)}}function g(t,e,n=s.y$.isVolatileBinding(t)){return new d(t,e,n)}function v(t,e){return new h(t,e)}function m(t,e){const n=new d(t);return n.options=e,n}function b(t){return(0,r.mf)(t)?g(t):t instanceof l.KX?t:v((()=>t))}l.m0.define(f,{aspected:!0})},99026:function(t,e,n){"use strict";n.d(e,{N:function(){return a},p:function(){return s}});var i=n(34959),o=n(85594),r=n(95185);class s extends r.v{constructor(t){super(t),this.observerProperty=`${this.id}-o`,this.handleEvent=(t,e)=>{const n=e.target;this.updateTarget(this.getSource(n),this.computeNodes(n))},t.childList=!0}observe(t){let e=t[this.observerProperty];e||(e=new MutationObserver(this.handleEvent),e.toJSON=i.ZT,t[this.observerProperty]=e),e.target=t,e.observe(t,this.options)}disconnect(t){const e=t[this.observerProperty];e.target=null,e.disconnect()}getNodes(t){return"selector"in this.options?Array.from(t.querySelectorAll(this.options.selector)):Array.from(t.childNodes)}}function a(t){return(0,i.HD)(t)&&(t={property:t}),new s(t)}o.m0.define(s)},65883:function(t,e,n){"use strict";n.d(e,{S:function(){return x}});var i=n(34959),o=n(89522),r=n(31699),s=n(59833),a=n(41869),l=n(85594),c=n(49820);const u=(t,e)=>`${t}.${e}`,d={},h={index:0,node:null};function p(t){t.startsWith("fast-")||o.Bo.warn(1204,{name:t})}const f=new Proxy(document.createElement("div"),{get(t,e){p(e);const n=Reflect.get(t,e);return(0,i.mf)(n)?n.bind(t):n},set:(t,e,n)=>(p(e),Reflect.set(t,e,n))});class g{constructor(t,e,n){this.fragment=t,this.directives=e,this.policy=n,this.proto=null,this.nodeIds=new Set,this.descriptors={},this.factories=[]}addFactory(t,e,n,i,o){var r,a;this.nodeIds.has(n)||(this.nodeIds.add(n),this.addTargetDescriptor(e,n,i)),t.id=null!==(r=t.id)&&void 0!==r?r:(0,s.To)(),t.targetNodeId=n,t.targetTagName=o,t.policy=null!==(a=t.policy)&&void 0!==a?a:this.policy,this.factories.push(t)}freeze(){return this.proto=Object.create(null,this.descriptors),this}addTargetDescriptor(t,e,n){const i=this.descriptors;if("r"===e||"h"===e||i[e])return;if(!i[t]){const e=t.lastIndexOf("."),n=t.substring(0,e),i=parseInt(t.substring(e+1));this.addTargetDescriptor(n,t,i)}let o=d[e];if(!o){const i=`_${e}`;d[e]=o={get(){var e;return null!==(e=this[i])&&void 0!==e?e:this[i]=this[t].childNodes[n]}}}i[e]=o}createView(t){const e=this.fragment.cloneNode(!0),n=Object.create(this.proto);n.r=e,n.h=null!=t?t:f;for(const t of this.nodeIds)n[t];return new c.bP(e,this.factories,n)}}function v(t,e,n,i,o,r=!1){const c=n.attributes,u=t.directives;for(let d=0,h=c.length;d<h;++d){const p=c[d],f=p.value,g=s._b.parse(f,u);let v=null;null===g?r&&(v=new a.RV((0,a.xv)((()=>f),t.policy)),l.m0.assignAspect(v,p.name)):v=x.aggregate(g,t.policy),null!==v&&(n.removeAttributeNode(p),d--,h--,t.addFactory(v,e,i,o,n.tagName))}}function m(t,e,n){let i=0,o=e.firstChild;for(;o;){const e=b(t,n,o,i);o=e.node,i=e.index}}function b(t,e,n,o){const r=u(e,o);switch(n.nodeType){case 1:v(t,e,n,r,o),m(t,n,r);break;case 3:return function(t,e,n,o,r){const a=s._b.parse(e.textContent,t.directives);if(null===a)return h.node=e.nextSibling,h.index=r+1,h;let c,d=c=e;for(let e=0,s=a.length;e<s;++e){const s=a[e];0!==e&&(r++,o=u(n,r),c=d.parentNode.insertBefore(document.createTextNode(""),d.nextSibling)),(0,i.HD)(s)?c.textContent=s:(c.textContent=" ",l.m0.assignAspect(s),t.addFactory(s,n,o,r,null)),d=c}return h.index=r+1,h.node=d.nextSibling,h}(t,n,e,r,o);case 8:const a=s._b.parse(n.data,t.directives);null!==a&&t.addFactory(x.aggregate(a),e,r,o,null)}return h.index=o+1,h.node=n.nextSibling,h}const y="TEMPLATE",x={compile(t,e,n=r.S.policy){let o;if((0,i.HD)(t)){o=document.createElement(y),o.innerHTML=n.createHTML(t);const e=o.content.firstElementChild;null!==e&&e.tagName===y&&(o=e)}else o=t;const a=document.adoptNode(o.content),l=new g(a,e,n);var c,u;return v(l,"",o,"h",0,!0),c=a.firstChild,u=e,(c&&8==c.nodeType&&null!==s._b.parse(c.data,u)||1===a.childNodes.length&&Object.keys(e).length>0)&&a.insertBefore(document.createComment(""),a.firstChild),m(l,a,"r"),h.node=null,l.freeze()},setDefaultStrategy(t){this.compile=t},aggregate(t,e=r.S.policy){if(1===t.length)return t[0];let n,o,s=!1;const c=t.length,u=t.map((t=>(0,i.HD)(t)?()=>t:(n=t.sourceAspect||n,s=s||t.dataBinding.isVolatile,o=o||t.dataBinding.policy,t.dataBinding.evaluate))),d=new a.RV((0,a.ak)(((t,e)=>{let n="";for(let i=0;i<c;++i)n+=u[i](t,e);return n}),null!=o?o:e,s));return l.m0.assignAspect(d,n),d}}},85594:function(t,e,n){"use strict";n.d(e,{KX:function(){return u},Pq:function(){return d},hG:function(){return c},m0:function(){return l}});var i=n(31699),o=n(34959),r=n(89522),s=n(59833);const a=(0,r.LI)(),l=Object.freeze({getForInstance:a.getForInstance,getByType:a.getByType,define:(t,e)=>((e=e||{}).type=t,a.register(e),t),assignAspect(t,e){if(e)switch(t.sourceAspect=e,e[0]){case":":t.targetAspect=e.substring(1),t.aspectType="classList"===t.targetAspect?i.O.tokenList:i.O.property;break;case"?":t.targetAspect=e.substring(1),t.aspectType=i.O.booleanAttribute;break;case"@":t.targetAspect=e.substring(1),t.aspectType=i.O.event;break;default:t.targetAspect=e,t.aspectType=i.O.attribute}else t.aspectType=i.O.content}});function c(t){return function(e){l.define(e,t)}}class u{constructor(t,e,n=!1){this.evaluate=t,this.policy=e,this.isVolatile=n}}class d{constructor(t){this.options=t,this.toJSON=o.ZT}createHTML(t){return s.Lu.attribute(t(this))}createBehavior(){return this}}},59833:function(t,e,n){"use strict";n.d(e,{Lu:function(){return c},To:function(){return l},_b:function(){return u}});const i=`fast-${Math.random().toString(36).substring(2,8)}`,o=`${i}{`,r=`}${i}`,s=r.length;let a=0;const l=()=>`${i}-${++a}`,c=Object.freeze({interpolation:t=>`${o}${t}${r}`,attribute:t=>`${l()}="${o}${t}${r}"`,comment:t=>`\x3c!--${o}${t}${r}--\x3e`}),u=Object.freeze({parse(t,e){const n=t.split(o);if(1===n.length)return null;const i=[];for(let t=0,o=n.length;t<o;++t){const o=n[t],a=o.indexOf(r);let l;if(-1===a)l=o;else{const t=o.substring(0,a);i.push(e[t]),l=o.substring(a+s)}""!==l&&i.push(l)}return i}})},95185:function(t,e,n){"use strict";n.d(e,{R:function(){return s},v:function(){return a}});var i=n(89522),o=n(85594);const r=t=>1===t.nodeType,s=t=>t?e=>1===e.nodeType&&e.matches(t):r;class a extends o.Pq{get id(){return this._id}set id(t){this._id=t,this._controllerProperty=`${t}-c`}bind(t){const e=t.targets[this.targetNodeId];e[this._controllerProperty]=t,this.updateTarget(t.source,this.computeNodes(e)),this.observe(e),t.onUnbind(this)}unbind(t){const e=t.targets[this.targetNodeId];this.updateTarget(t.source,i.ow),this.disconnect(e),e[this._controllerProperty]=null}getSource(t){return t[this._controllerProperty].source}updateTarget(t,e){t[this.options.property]=e}computeNodes(t){let e=this.getNodes(t);return"filter"in this.options&&(e=e.filter(this.options.filter)),e}}},41472:function(t,e,n){"use strict";n.d(e,{i:function(){return r},o:function(){return o}});var i=n(85594);class o extends i.Pq{bind(t){t.source[this.options]=t.targets[this.targetNodeId]}}i.m0.define(o);const r=t=>new o(t)},89150:function(t,e,n){"use strict";n.d(e,{Gx:function(){return m},eN:function(){return v},ev:function(){return g},rx:function(){return b}});var i=n(28521),o=n(32883),r=n(99452),s=n(89522),a=n(41869),l=n(85594),c=n(59833),u=n(49820);const d=Object.freeze({positioning:!1,recycle:!0});function h(t,e,n,i){t.context.parent=i.source,t.context.parentContext=i.context,t.bind(e[n])}function p(t,e,n,i){t.context.parent=i.source,t.context.parentContext=i.context,t.context.length=e.length,t.context.index=n,t.bind(e[n])}function f(t){return t.nodeType===Node.COMMENT_NODE}class g extends Error{constructor(t,e){super(t),this.propertyBag=e}}class v{constructor(t){this.directive=t,this.items=null,this.itemsObserver=null,this.bindView=h,this.views=[],this.itemsBindingObserver=t.dataBinding.createObserver(t,this),this.templateBindingObserver=t.templateBinding.createObserver(t,this),t.options.positioning&&(this.bindView=p)}bind(t){this.location=t.targets[this.directive.targetNodeId],this.controller=t,this.items=this.itemsBindingObserver.bind(t),this.template=this.templateBindingObserver.bind(t),this.observeItems(!0),(0,i.l$)(this.template)&&(0,i.l$)(t)&&t.hydrationStage!==u.BH.hydrated?this.hydrateViews(this.template):this.refreshAllViews(),t.onUnbind(this)}unbind(){null!==this.itemsObserver&&this.itemsObserver.unsubscribe(this),this.unbindAllViews()}handleChange(t,e){if(e===this.itemsBindingObserver)this.items=this.itemsBindingObserver.bind(this.controller),this.observeItems(),this.refreshAllViews();else if(e===this.templateBindingObserver)this.template=this.templateBindingObserver.bind(this.controller),this.refreshAllViews(!0);else{if(!e[0])return;e[0].reset?this.refreshAllViews():this.updateViews(e)}}observeItems(t=!1){if(!this.items)return void(this.items=s.ow);const e=this.itemsObserver,n=this.itemsObserver=r.y$.getNotifier(this.items),i=e!==n;i&&null!==e&&e.unsubscribe(this),(i||t)&&n.subscribe(this)}updateViews(t){const e=this.views,n=this.bindView,i=this.items,o=this.template,r=this.controller,s=this.directive.options.recycle,a=[];let l=0,c=0;for(let u=0,d=t.length;u<d;++u){const d=t[u],h=d.removed;let p=0,f=d.index;const g=f+d.addedCount,v=e.splice(d.index,h.length),m=c=a.length+v.length;for(;f<g;++f){const t=e[f],u=t?t.firstChild:this.location;let d;s&&c>0?(p<=m&&v.length>0?(d=v[p],p++):(d=a[l],l++),c--):d=o.create(),e.splice(f,0,d),n(d,i,f,r),d.insertBefore(u)}v[p]&&a.push(...v.slice(p))}for(let t=l,e=a.length;t<e;++t)a[t].dispose();if(this.directive.options.positioning)for(let t=0,n=e.length;t<n;++t){const i=e[t].context;i.length=n,i.index=t}}refreshAllViews(t=!1){const e=this.items,n=this.template,i=this.location,o=this.bindView,r=this.controller;let s=e.length,a=this.views,l=a.length;if(0!==s&&!t&&this.directive.options.recycle||(u.bP.disposeContiguousBatch(a),l=0),0===l){this.views=a=new Array(s);for(let t=0;t<s;++t){const s=n.create();o(s,e,t,r),a[t]=s,s.insertBefore(i)}}else{let t=0;for(;t<s;++t)if(t<l){const i=a[t];if(!i){const e=new XMLSerializer;throw new g(`View is null or undefined inside ${this.location.getRootNode().host.nodeName}. This is a SSR software defect`,{index:t,hydrationStage:this.controller.hydrationStage,itemsLength:s,viewsState:a.map((t=>t?"hydrated":"empty")),viewTemplateString:e.serializeToString(n.create().fragment),rootNodeContent:e.serializeToString(this.location.getRootNode())})}o(i,e,t,r)}else{const s=n.create();o(s,e,t,r),a.push(s),s.insertBefore(i)}const c=a.splice(t,l-t);for(t=0,s=c.length;t<s;++t)c[t].dispose()}}unbindAllViews(){const t=this.views;for(let e=0,n=t.length;e<n;++e){const n=t[e];if(!n){const n=new XMLSerializer;throw new g(`View is null or undefined inside ${this.location.getRootNode().host.nodeName}. This is a SSR software defect`,{index:e,hydrationStage:this.controller.hydrationStage,viewsState:t.map((t=>t?"hydrated":"empty")),rootNodeContent:n.serializeToString(this.location.getRootNode())})}n.unbind()}}hydrateViews(t){if(!this.items)return;this.views=new Array(this.items.length);let e=this.location.previousSibling;for(;null!==e;){if(!f(e)){e=e.previousSibling;continue}const n=i._M.parseRepeatEndMarker(e.data);if(null===n){e=e.previousSibling;continue}e.data="";const o=e.previousSibling;if(!o)throw new Error(`Error when hydrating inside ${this.location.getRootNode().host.nodeName}: end should never be null. This is a SSR software defect`);let r=o,s=0;for(;null!==r;){if(f(r))if(i._M.isRepeatViewEndMarker(r.data))s++;else if(i._M.isRepeatViewStartMarker(r.data)){if(!s){if(i._M.parseRepeatStartMarker(r.data)!==n)throw new Error(`Error when hydrating inside ${this.location.getRootNode().host.nodeName}: Mismatched start and end markers. This is a SSR software defect`);r.data="",e=r.previousSibling,r=r.nextSibling;const s=t.hydrate(r,o);this.views[n]=s,this.bindView(s,this.items,n,this.controller);break}s--}r=r.previousSibling}if(!r)throw new Error(`Error when hydrating inside ${this.location.getRootNode().host.nodeName}:start should never be null. This is a SSR software defect`)}}}class m{constructor(t,e,n){this.dataBinding=t,this.templateBinding=e,this.options=n,o.K1.enable()}createHTML(t){return c.Lu.comment(t(this))}createBehavior(){return new v(this)}}function b(t,e,n=d){const i=(0,a.k_)(t),o=(0,a.k_)(e);return new m(i,o,Object.assign(Object.assign({},d),n))}l.m0.define(m)},47548:function(t,e,n){"use strict";n.d(e,{E:function(){return a},Q:function(){return l}});var i=n(34959),o=n(85594),r=n(95185);const s="slotchange";class a extends r.v{observe(t){t.addEventListener(s,this)}disconnect(t){t.removeEventListener(s,this)}getNodes(t){return t.assignedNodes(this.options)}handleEvent(t){const e=t.currentTarget;this.updateTarget(this.getSource(e),this.computeNodes(e))}}function l(t){return(0,i.HD)(t)&&(t={property:t}),new a(t)}o.m0.define(a)},49218:function(t,e,n){"use strict";n.d(e,{Sy:function(){return d},_H:function(){return p},dy:function(){return f}});var i=n(34959),o=n(89522),r=n(41869),s=n(65883),a=n(85594),l=n(59833);const c=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,u=Object.create(null);class d{constructor(t,e=u){this.html=t,this.factories=e}createHTML(t){const e=this.factories;for(const n in e)t(e[n]);return this.html}}function h(t,e,n,i=a.m0.getForInstance(t)){if(i.aspected){const n=c.exec(e);null!==n&&a.m0.assignAspect(t,n[2])}return t.createHTML(n)}d.empty=new d(""),a.m0.define(d);class p{constructor(t,e={},n){this.policy=n,this.result=null,this.toJSON=i.ZT,this.html=t,this.factories=e}compile(){return null===this.result&&(this.result=s.S.compile(this.html,this.factories,this.policy)),this.result}create(t){return this.compile().createView(t)}inline(){return new d((0,i.HD)(this.html)?this.html:this.html.innerHTML,this.factories)}withPolicy(t){if(this.result)throw o.Bo.error(1208);if(this.policy)throw o.Bo.error(1207);return this.policy=t,this}render(t,e,n){const i=this.create(n);return i.bind(t),i.appendTo(e),i}static create(t,e,n){let o="";const s=Object.create(null),c=t=>{var e;const n=null!==(e=t.id)&&void 0!==e?e:t.id=(0,l.To)();return s[n]=t,n};for(let n=0,s=t.length-1;n<s;++n){const s=t[n];let l,u=e[n];if(o+=s,(0,i.mf)(u))u=new r.RV((0,r.ak)(u));else if(u instanceof a.KX)u=new r.RV(u);else if(!(l=a.m0.getForInstance(u))){const t=u;u=new r.RV((0,r.xv)((()=>t)))}o+=h(u,s,c,l)}return new p(o+t[t.length-1],s,n)}}const f=(t,...e)=>{if(Array.isArray(t)&&Array.isArray(t.raw))return p.create(t,e);throw o.Bo.error(1206)};f.partial=t=>new d(t)},49820:function(t,e,n){"use strict";n.d(e,{bP:function(){return v},AH:function(){return b},BH:function(){return m},Bq:function(){return y}});var i=n(28521);class o extends Error{constructor(t,e,n){super(t),this.factories=e,this.node=n}}function r(t){return t.nodeType===Node.COMMENT_NODE}function s(t){return t.nodeType===Node.TEXT_NODE}function a(t,e){const n=document.createRange();return n.setStart(t,0),n.setEnd(e,r(e)||s(e)?e.data.length:e.childNodes.length),n}function l(t,e,n){const r=i._M.parseAttributeBinding(t);if(null!==r){for(const i of r){if(!e[i])throw new o(`HydrationView was unable to successfully target factory on ${t.nodeName} inside ${t.getRootNode().host.nodeName}. This likely indicates a template mismatch between SSR rendering and hydration.`,e,t);u(e[i],t,n)}t.removeAttribute(i._M.attributeMarkerName)}}function c(t,e,n,o,a){if(i._M.isContentBindingStartMarker(t.data)){const l=i._M.parseContentBindingStartMarker(t.data);if(null===l)return;const[c,d]=l,h=n[c],p=[];let f=e.nextSibling();t.data="";const g=f;for(;null!==f;){if(r(f)){const t=i._M.parseContentBindingEndMarker(f.data);if(t&&t[1]===d)break}p.push(f),f=e.nextSibling()}if(null===f){const e=t.getRootNode();throw new Error(`Error when hydrating inside ${function(t){return t instanceof DocumentFragment&&"mode"in t}(e)?e.host.nodeName:e.nodeName}: current should never be null. This is a SSR software defect`)}if(f.data="",1===p.length&&s(p[0]))u(h,p[0],o);else{f!==g&&null!==f.previousSibling&&(a[h.targetNodeId]={first:g,last:f.previousSibling});u(h,f.parentNode.insertBefore(document.createTextNode(""),f),o)}}}function u(t,e,n){if(void 0===t.targetNodeId)throw new Error("Factory could not be target to the node");n[t.targetNodeId]=e}var d,h=n(34959),p=n(99452);function f(t,e){const n=t.parentNode;let i,o=t;for(;o!==e;){if(i=o.nextSibling,!i)throw new Error(`Unmatched first/last child inside ${e.getRootNode().host.nodeName}. This is a SSR software defect`);n.removeChild(o),o=i}n.removeChild(e)}class g{constructor(){this.index=0,this.length=0}get event(){return p.rd.getEvent()}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}eventDetail(){return this.event.detail}eventTarget(){return this.event.target}}class v extends g{constructor(t,e,n){super(),this.fragment=t,this.factories=e,this.targets=n,this.behaviors=null,this.unbindables=[],this.source=null,this.isBound=!1,this.sourceLifetime=p.sG.unknown,this.context=this,this.toJSON=h.ZT,this.firstChild=t.firstChild,this.lastChild=t.lastChild}appendTo(t){t.appendChild(this.fragment)}insertBefore(t){if(this.fragment.hasChildNodes())t.parentNode.insertBefore(this.fragment,t);else{const e=this.lastChild;if(t.previousSibling===e)return;const n=t.parentNode;let i,o=this.firstChild;for(;o!==e;)i=o.nextSibling,n.insertBefore(o,t),o=i;n.insertBefore(e,t)}}remove(){const t=this.fragment,e=this.lastChild;let n,i=this.firstChild;for(;i!==e;)n=i.nextSibling,t.appendChild(i),i=n;t.appendChild(e)}dispose(){f(this.firstChild,this.lastChild),this.unbind()}onUnbind(t){this.unbindables.push(t)}bind(t,e=this){if(this.source===t)return;let n=this.behaviors;if(null===n){this.source=t,this.context=e,this.behaviors=n=new Array(this.factories.length);const i=this.factories;for(let t=0,e=i.length;t<e;++t){const e=i[t].createBehavior();e.bind(this),n[t]=e}}else{null!==this.source&&this.evaluateUnbindables(),this.isBound=!1,this.source=t,this.context=e;for(let t=0,e=n.length;t<e;++t)n[t].bind(this)}this.isBound=!0}unbind(){this.isBound&&null!==this.source&&(this.evaluateUnbindables(),this.source=null,this.context=this,this.isBound=!1)}evaluateUnbindables(){const t=this.unbindables;for(let e=0,n=t.length;e<n;++e)t[e].unbind(this);t.length=0}static disposeContiguousBatch(t){if(0!==t.length){f(t[0].firstChild,t[t.length-1].lastChild);for(let e=0,n=t.length;e<n;++e)t[e].unbind()}}}p.y$.defineProperty(v.prototype,"index"),p.y$.defineProperty(v.prototype,"length");const m={unhydrated:"unhydrated",hydrating:"hydrating",hydrated:"hydrated"};class b extends Error{constructor(t,e,n,i){super(t),this.factory=e,this.fragment=n,this.templateString=i}}class y extends g{constructor(t,e,n,o){super(),this.firstChild=t,this.lastChild=e,this.sourceTemplate=n,this.hostBindingTarget=o,this[d]=i.BL,this.context=this,this.source=null,this.isBound=!1,this.sourceLifetime=p.sG.unknown,this.unbindables=[],this.fragment=null,this.behaviors=null,this._hydrationStage=m.unhydrated,this._bindingViewBoundaries={},this._targets={},this.toJSON=h.ZT,this.factories=n.compile().factories}get hydrationStage(){return this._hydrationStage}get targets(){return this._targets}get bindingViewBoundaries(){return this._bindingViewBoundaries}insertBefore(t){if(null!==this.fragment)if(this.fragment.hasChildNodes())t.parentNode.insertBefore(this.fragment,t);else{const e=this.lastChild;if(t.previousSibling===e)return;const n=t.parentNode;let i,o=this.firstChild;for(;o!==e;)i=o.nextSibling,n.insertBefore(o,t),o=i;n.insertBefore(e,t)}}appendTo(t){null!==this.fragment&&t.appendChild(this.fragment)}remove(){const t=this.fragment||(this.fragment=document.createDocumentFragment()),e=this.lastChild;let n,i=this.firstChild;for(;i!==e;){if(n=i.nextSibling,!n)throw new Error(`Unmatched first/last child inside ${e.getRootNode().host.nodeName}. This is a SSR software defect`);t.appendChild(i),i=n}t.appendChild(e)}bind(t,e=this){if(this.hydrationStage!==m.hydrated&&(this._hydrationStage=m.hydrating),this.source===t)return;let n=this.behaviors;if(null===n){this.source=t,this.context=e;try{const{targets:t,boundaries:e}=function(t,e,n){const i=a(t,e),o=i.commonAncestorContainer,r=document.createTreeWalker(o,NodeFilter.SHOW_ELEMENT+NodeFilter.SHOW_COMMENT+NodeFilter.SHOW_TEXT,{acceptNode:t=>0===i.comparePoint(t,0)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}),s={},u={};let d=r.currentNode=t;for(;null!==d;){switch(d.nodeType){case Node.ELEMENT_NODE:l(d,n,s);break;case Node.COMMENT_NODE:c(d,r,n,s,u)}d=r.nextNode()}return i.detach(),{targets:s,boundaries:u}}(this.firstChild,this.lastChild,this.factories);this._targets=t,this._bindingViewBoundaries=e}catch(t){if(t instanceof o){let e=this.sourceTemplate.html;"string"!=typeof e&&(e=e.innerHTML),t.templateString=e}throw t}this.behaviors=n=new Array(this.factories.length);const i=this.factories;for(let t=0,e=i.length;t<e;++t){const e=i[t];if("h"===e.targetNodeId&&this.hostBindingTarget&&u(e,this.hostBindingTarget,this._targets),!(e.targetNodeId in this.targets)){let t=this.sourceTemplate.html;throw"string"!=typeof t&&(t=t.innerHTML),new b(`HydrationView was unable to successfully target bindings inside ${this.firstChild.getRootNode().host.nodeName}.This is likely a hydration software defect.`,e,a(this.firstChild,this.lastChild).cloneContents(),t)}{const i=e.createBehavior();i.bind(this),n[t]=i}}}else{null!==this.source&&this.evaluateUnbindables(),this.isBound=!1,this.source=t,this.context=e;for(let t=0,e=n.length;t<e;++t)n[t].bind(this)}this.isBound=!0,this._hydrationStage=m.hydrated}unbind(){this.isBound&&null!==this.source&&(this.evaluateUnbindables(),this.source=null,this.context=this,this.isBound=!1)}dispose(){f(this.firstChild,this.lastChild),this.unbind()}onUnbind(t){this.unbindables.push(t)}evaluateUnbindables(){const t=this.unbindables;for(let e=0,n=t.length;e<n;++e)t[e].unbind(this);t.length=0}}d=i.BL},93703:function(t,e,n){"use strict";n.d(e,{g:function(){return s}});var i=n(34959);const o=()=>null;function r(t){return void 0===t?o:(0,i.mf)(t)?t:()=>t}function s(t,e,n){const o=(0,i.mf)(t)?t:()=>t,s=r(e),a=r(n);return(t,e)=>o(t,e)?s(t,e):a(t,e)}},62795:function(t,e,n){"use strict";n.d(e,{Ag:function(){return l},MP:function(){return a},TC:function(){return s}});var i=n(31699),o=n(99452),r=n(59833);function s(t){const e=t.parentElement;if(e)return e;{const e=t.getRootNode();if(e.host instanceof HTMLElement)return e.host}return null}function a(t,e){let n=e;for(;null!==n;){if(n===t)return!0;n=s(n)}return!1}class l extends MutationObserver{constructor(t){super((function(t){this.callback.call(null,t.filter((t=>this.observedNodes.has(t.target))))})),this.callback=t,this.observedNodes=new Set}observe(t,e){this.observedNodes.add(t),super.observe(t,e)}unobserve(t){this.observedNodes.delete(t),this.observedNodes.size<1&&this.disconnect()}}Object.freeze({create(t){const e=[],n={};let s=null,a=!1;return{source:t,context:o.rd.default,targets:n,get isBound(){return a},addBehaviorFactory(t,e){var n,o,s,a;const l=t;l.id=null!==(n=l.id)&&void 0!==n?n:(0,r.To)(),l.targetNodeId=null!==(o=l.targetNodeId)&&void 0!==o?o:(0,r.To)(),l.targetTagName=null!==(s=e.tagName)&&void 0!==s?s:null,l.policy=null!==(a=l.policy)&&void 0!==a?a:i.S.policy,this.addTarget(l.targetNodeId,e),this.addBehavior(l.createBehavior())},addTarget(t,e){n[t]=e},addBehavior(t){e.push(t),a&&t.bind(this)},onUnbind(t){null===s&&(s=[]),s.push(t)},connectedCallback(t){a||(a=!0,e.forEach((t=>t.bind(this))))},disconnectedCallback(t){a&&(a=!1,null!==s&&s.forEach((t=>t.unbind(this))))}}}})},78040:function(t,e,n){"use strict";n.d(e,{D:function(){return p}});var i=n(77615),o=n(35114),r=n(91290),s=n(53131),a=n(78923),l=n(27186);const c=a.i`
    ${(0,l.j)("grid")}

    :host {
        font-family: ${s.S};
        width: auto;
        grid-auto-columns: calc(${r.$f} * 1px);
        grid-auto-row: calc(${r.di} * 1px);
        grid-gap: calc(${r.RR} * 1px);
    }
`;var u=n(89150),d=n(49218);const h=d.dy`
    <template @keydown="${(t,e)=>t.handleKeyDown(e.event)}">
        ${(0,u.rx)((t=>t.childrenLayout),d.dy`
                ${(t,e)=>e.parent.selectTemplate(t)}
            `)}
    </template>
`,p=o.Mr.compose({name:`${i.s.prefix}-feed-layout`,styles:c,template:h})},35114:function(t,e,n){"use strict";n.d(e,{Kx:function(){return a},Mr:function(){return l}});var i=n(33940),o=n(28904),r=n(42590),s=n(99452);const a={C1:"C1",C2:"C2",C3:"C3",C4:"C4",C5:"C5",C6:"C6"};class l extends o.H{constructor(){super(...arguments),this.layout=a.C4,this.childrenLayout=[],this.disabledKeyListeners=[]}layoutChanged(){this.updateLayout()}childTemplateMapChanged(){this.updateLayout()}dataChanged(){this.updateLayout()}layoutStylesChanged(t,e){t&&this.$fastController.removeStyles(t),this.$fastController.addStyles(e)}selectTemplate(t){if(t.childTemplateType)return this.childTemplateMap?.[t.childTemplateType]}updateLayout(){if(void 0===this.data)return;const t=this.data[this.layout];this.childrenLayout=this.data.defaultLayout.map((e=>({...e,...t?.find((t=>t.id===e.id))}))).sort(((t,e)=>t.childDOMOrder&&e.childDOMOrder?t.childDOMOrder-e.childDOMOrder:0))}handleKeyDown(t){const e=Array.from(this.getRootNode().querySelectorAll(this.tagName)).reduce(((t,e)=>t.concat(Array.from(e.shadowRoot?.children||[]))),[]).filter((t=>t.offsetWidth>0&&t.offsetHeight>0));return!(!this.disabledKeyListeners||!this.disabledKeyListeners.find((e=>e===t.key)))||function(t,e){const n=!!["ArrowDown","ArrowLeft","ArrowRight","ArrowUp","End","Home","PageUp","PageDown"].find((e=>e===t.key));if(t.defaultPrevented||!n||!e)return!0;const i=e.reduce(((t,e,n)=>{const{offsetLeft:i,offsetHeight:o,offsetTop:r,offsetWidth:s}=e;return t.push({x:i,y:r,x2:i+s,y2:r+o,index:n}),t}),[]),o=e.findIndex((e=>t.composedPath().find((t=>t===e))))??0,r=t=>{const e=t.currentTarget;e&&(e.removeAttribute("tabindex"),e.removeEventListener("blur",r))},s=t=>{e&&e.length>t&&(e[t].setAttribute("tabindex","0"),e[t].addEventListener("blur",r),e[t].focus())},a=i.reduce(((t,e,n)=>{const r=i[o||0],s={x:["ArrowLeft","ArrowRight"],y:["ArrowUp","ArrowDown"]},a=t=>Math.min(e[`${t}2`],r[`${t}2`])-Math.max(e[t],r[t]),l=t=>Math.abs(e[t]>=r[`${t}2`]?e[t]-r[`${t}2`]:r[t]-e[`${t}2`]);for(const i in s){const c=i,u=a("x"===c?"y":"x"),d=l(c);if(u>0){const i=e[c]>=r[`${c}2`]?1:0,a=s[c][i];n!==o&&(void 0===t[a]||(t[a]?.distance||0)>d)&&(t[a]=Object.assign({},e,{overlap:u,distance:d})),"y"===c&&("ArrowUp"===a?(!t.PageUp||t.PageUp.y>e.y)&&(t.PageUp=e):(!t.PageDown||t.PageDown.y2<e.y2)&&(t.PageDown=e))}}return(!t.Home||t.Home.x>e.x||t.Home.y>e.y)&&(t.Home=e),(!t.End||t.End.x<e.x||t.End.y<e.y)&&(t.End=e),t}),{})[t.key];void 0!==a&&s(a.index);return!0}(t,e)}}(0,i.gn)([r.Lj,(0,i.w6)("design:type",String)],l.prototype,"layout",void 0),(0,i.gn)([s.LO,(0,i.w6)("design:type",Array)],l.prototype,"childrenLayout",void 0),(0,i.gn)([s.LO,(0,i.w6)("design:type",Object)],l.prototype,"childTemplateMap",void 0),(0,i.gn)([s.LO,(0,i.w6)("design:type",Object)],l.prototype,"data",void 0),(0,i.gn)([s.LO,(0,i.w6)("design:type",Object)],l.prototype,"layoutStyles",void 0),(0,i.gn)([s.LO,(0,i.w6)("design:type",Array)],l.prototype,"disabledKeyListeners",void 0)},45738:function(t,e,n){"use strict";n.d(e,{D:function(){return S}});var i=n(77615),o=n(33940),r=n(67776),s=n(42590),a=n(67087);class l extends r.N{constructor(){super(...arguments),this.size=a.I.medium}}(0,o.gn)([s.Lj,(0,o.w6)("design:type",String)],l.prototype,"size",void 0);var c=n(67341),u=n(55135),d=n(42689),h=n(2658),p=n(40009),f=n(10970),g=n(17993),v=n(22674),m=n(24484),b=n(67739),y=n(29717),x=n(22798),w=n(78923),$=n(27186);const C=w.i`
    ${(0,$.j)("inline-flex")} :host {
        align-items: center;
        background: ${c._j};
        border-radius: calc(${u.UW} * 1px);
        color: ${d.C};
        fill: currentcolor;
        height: calc(${h.i} * 1px);
        justify-content: center;
        outline: none;
        width: calc(${p._5} * 4px);
    }

    :host([size="large"]) {
        height: calc(${p._5} * 12px);
        width: calc(${p._5} * 6px);
    }

    ::slotted(svg) {
        height: 16px;
        width: 16px;
    }

    :host([size="large"]) ::slotted(svg) {
        height: 20px;
        width: 20px;
    }

    :host([disabled]) {
        cursor: ${m.H};
        opacity: ${f.V};
        pointer-events: none;
    }

    .next,
    .previous {
        display: flex;
    }

    :host(:not([disabled]):hover) {
        cursor: pointer;
        background: ${c.d$};
    }

    :host(:not([disabled]):active) {
        background: ${c._i};
    }

    :host(:${b.b}) {
        border-color: ${g.yG};
    }

    :host::-moz-focus-inner {
        border: 0;
    }
`.withBehaviors((0,y.vF)(w.i`
            :host {
                background: ${x.H.ButtonFace};
                border-color: ${x.H.ButtonText};
            }
            :host .next,
            :host .previous {
                color: ${x.H.ButtonText};
                fill: currentcolor;
            }
            :host(:not([disabled]):hover) {
                background: ${x.H.Highlight};
            }
            :host(:not([disabled]):hover) .next,
            :host(:not([disabled]):hover) .previous {
                color: ${x.H.HighlightText};
                fill: currentcolor;
            }
            :host([disabled]) {
                opacity: 1;
            }
            :host([disabled]),
            :host([disabled]) .next,
            :host([disabled]) .previous {
                border-color: ${x.H.GrayText};
                color: ${x.H.GrayText};
                fill: currentcolor;
            }
            :host(:${b.b}) {
                forced-color-adjust: none;
                border-color: ${x.H.Highlight};
                box-shadow: 0 0 0 2px ${x.H.ButtonFace},
                    0 0 0 4px ${x.H.ButtonText};
            }
        `),new v.O(w.i``,w.i`
            :host {
                transform: scaleX(-1);
            }
        `));const k=(0,n(86158)._)(),S=l.compose({name:`${i.s.prefix}-flipper`,styles:C,template:k})},67087:function(t,e,n){"use strict";n.d(e,{I:function(){return i}});const i={medium:"medium",large:"large"}},95380:function(t,e,n){"use strict";n.d(e,{m:function(){return d},u:function(){return u}});var i=n(33940),o=n(28904),r=n(42590),s=n(99452),a=n(33714),l=n(33818),c=n(31289);class u extends o.H{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&this.$fastController.definition.shadowOptions?.delegatesFocus&&(this.focus=()=>{this.control.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}}(0,i.gn)([r.Lj,(0,i.w6)("design:type",String)],u.prototype,"download",void 0),(0,i.gn)([r.Lj,(0,i.w6)("design:type",String)],u.prototype,"href",void 0),(0,i.gn)([r.Lj,(0,i.w6)("design:type",String)],u.prototype,"hreflang",void 0),(0,i.gn)([r.Lj,(0,i.w6)("design:type",String)],u.prototype,"ping",void 0),(0,i.gn)([r.Lj,(0,i.w6)("design:type",String)],u.prototype,"referrerpolicy",void 0),(0,i.gn)([r.Lj,(0,i.w6)("design:type",String)],u.prototype,"rel",void 0),(0,i.gn)([r.Lj,(0,i.w6)("design:type",String)],u.prototype,"target",void 0),(0,i.gn)([r.Lj,(0,i.w6)("design:type",String)],u.prototype,"type",void 0),(0,i.gn)([s.LO,(0,i.w6)("design:type",Array)],u.prototype,"defaultSlottedContent",void 0);class d{}(0,i.gn)([(0,r.Lj)({attribute:"aria-expanded"}),(0,i.w6)("design:type",Object)],d.prototype,"ariaExpanded",void 0),(0,c.e)(d,a.v),(0,c.e)(u,l.hW,d)},20284:function(t,e,n){"use strict";n.d(e,{P:function(){return i}});const i={_self:"_self",_blank:"_blank",_parent:"_parent",_top:"_top"}},52791:function(t,e,n){"use strict";n.d(e,{g:function(){return a}});var i=n(49218),o=n(41472),r=n(47548),s=n(33818);function a(t={}){return i.dy`
        <a
            class="control"
            part="control"
            download="${t=>t.download}"
            href="${t=>t.href}"
            hreflang="${t=>t.hreflang}"
            ping="${t=>t.ping}"
            referrerpolicy="${t=>t.referrerpolicy}"
            rel="${t=>t.rel}"
            target="${t=>t.target}"
            type="${t=>t.type}"
            aria-atomic="${t=>t.ariaAtomic}"
            aria-busy="${t=>t.ariaBusy}"
            aria-controls="${t=>t.ariaControls}"
            aria-current="${t=>t.ariaCurrent}"
            aria-describedby="${t=>t.ariaDescribedby}"
            aria-details="${t=>t.ariaDetails}"
            aria-disabled="${t=>t.ariaDisabled}"
            aria-errormessage="${t=>t.ariaErrormessage}"
            aria-expanded="${t=>t.ariaExpanded}"
            aria-flowto="${t=>t.ariaFlowto}"
            aria-haspopup="${t=>t.ariaHaspopup}"
            aria-hidden="${t=>t.ariaHidden}"
            aria-invalid="${t=>t.ariaInvalid}"
            aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
            aria-label="${t=>t.ariaLabel}"
            aria-labelledby="${t=>t.ariaLabelledby}"
            aria-live="${t=>t.ariaLive}"
            aria-owns="${t=>t.ariaOwns}"
            aria-relevant="${t=>t.ariaRelevant}"
            aria-roledescription="${t=>t.ariaRoledescription}"
            ${(0,o.i)("control")}
        >
            ${(0,s.m9)(t)}
            <span class="content" part="content">
                <slot ${(0,r.Q)("defaultSlottedContent")}></slot>
            </span>
            ${(0,s.LC)(t)}
        </a>
    `}},35210:function(t,e,n){"use strict";n.d(e,{v:function(){return o}});var i=n(28904);class o extends i.H{}},35928:function(t,e,n){"use strict";n.d(e,{O:function(){return o}});var i=n(49218);function o(){return i.dy`
        <slot></slot>
    `}},79084:function(t,e,n){"use strict";n.d(e,{q:function(){return w}});var i=n(33940),o=n(50123),r=n(50937),s=n(58968),a=n(99452),l=n(42590),c=n(62512),u=n(97108),d=n(98296),h=n(33818),p=n(31289),f=n(23526);class g extends d.z{}class v extends((0,f.Um)(g)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const m="inline",b="list",y="both",x="none";class w extends v{constructor(){super(...arguments),this._value="",this.filteredOptions=[],this.filter="",this.listboxId=(0,c.EL)("listbox-"),this.open=!1}formResetCallback(){super.formResetCallback(),this.setDefaultSelectedOption(),this.firstSelectedOption?this.updateValue():this.value=this.initialValue??""}validate(){super.validate(this.control)}get isAutocompleteInline(){return this.autocomplete===m||this.isAutocompleteBoth}get isAutocompleteList(){return this.autocomplete===b||this.isAutocompleteBoth}get isAutocompleteBoth(){return this.autocomplete===y}openChanged(){if(this.open)return this.ariaControls=this.listboxId,this.ariaExpanded="true",s.H.enqueue((()=>this.setPositioning())),this.focusAndScrollOptionIntoView(),void s.H.enqueue((()=>this.focus()));this.ariaControls="",this.ariaExpanded="false"}get options(){return a.y$.track(this,"options"),this.filteredOptions.length?this.filteredOptions:this._options}set options(t){this._options=t,a.y$.notify(this,"options")}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}get value(){return a.y$.track(this,"value"),this._value}set value(t){const e=`${this._value}`;if(this.$fastController.isConnected&&this.options){const e=this.options.findIndex((e=>e.text.toLowerCase()===t.toLowerCase())),n=this.options[this.selectedIndex]?.text,i=this.options[e]?.text;this.selectedIndex=n!==i?e:this.selectedIndex,t=this.firstSelectedOption?.text||t}e!==t&&(this._value=t,super.valueChanged(e,t),a.y$.notify(this,"value"))}clickHandler(t){if(!this.disabled){if(this.open){const e=t.target.closest("option,[role=option]");if(!e||e.disabled)return;this.selectedOptions=[e],this.control.value=e.text,this.clearSelectionRange(),this.updateValue(!0)}return this.open=!this.open,this.open&&this.control.focus(),!0}}connectedCallback(){super.connectedCallback(),this.value&&(this.initialValue=this.value)}disabledChanged(t,e){super.disabledChanged&&super.disabledChanged(t,e),this.ariaDisabled=this.disabled?"true":"false"}disconnectedCallback(){this.cleanup?.(),super.disconnectedCallback()}filterOptions(){this.autocomplete&&this.autocomplete!==x||(this.filter="");const t=this.filter.toLowerCase();this.filteredOptions=this._options.filter((t=>t.text.toLowerCase().startsWith(this.filter.toLowerCase()))),this.isAutocompleteList&&(this.filteredOptions.length||t||(this.filteredOptions=this._options),this._options.forEach((t=>{t.hidden=!this.filteredOptions.includes(t)})))}focusAndScrollOptionIntoView(){this.contains(document.activeElement)&&(this.control.focus(),this.firstSelectedOption&&requestAnimationFrame((()=>{this.firstSelectedOption?.scrollIntoView({block:"nearest"})})))}focusoutHandler(t){if(this.updateValue(),!this.open)return!0;const e=t.relatedTarget;this.isSameNode(e)?this.focus():this.options&&this.options.includes(e)||(this.open=!1)}inputHandler(t){if(this.filter=this.control.value,this.filterOptions(),"deleteContentBackward"===t.inputType||!this.filter.length)return!0;this.isAutocompleteList&&!this.open&&(this.open=!0),this.isAutocompleteInline&&this.filteredOptions.length&&(this.selectedOptions=[this.filteredOptions[0]],this.selectedIndex=this.options.indexOf(this.firstSelectedOption),this.setInlineSelection())}keydownHandler(t){const e=t.key;if(t.ctrlKey||t.shiftKey)return!0;switch(e){case"Enter":this.updateValue(!0),this.isAutocompleteInline&&(this.filter=this.value),this.open=!1,this.clearSelectionRange();break;case"Escape":if(this.isAutocompleteInline||(this.selectedIndex=-1),this.open){this.open=!1;break}this.value="",this.control.value="",this.filter="",this.filterOptions();break;case"Tab":if(this.updateValue(),!this.open)return!0;t.preventDefault(),this.open=!1;break;case"ArrowUp":case"ArrowDown":if(this.filterOptions(),!this.open){this.open=!0;break}this.filteredOptions.length>0&&super.keydownHandler(t),this.isAutocompleteInline&&(this.updateValue(),this.setInlineSelection());break;default:return!0}}keyupHandler(t){switch(t.key){case"ArrowLeft":case"ArrowRight":case"Backspace":case"Delete":case"Home":case"End":this.filter=this.control.value,this.selectedIndex=-1,this.filterOptions()}}selectedIndexChanged(t,e){if(this.$fastController.isConnected){if((e=(0,u.b9)(-1,this.options.length-1,e))!==this.selectedIndex)return void(this.selectedIndex=e);super.selectedIndexChanged(t,e)}}selectPreviousOption(){!this.disabled&&this.selectedIndex>=0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){if(this.$fastController.isConnected&&this.options){const t=this.options.findIndex((t=>null!==t.getAttribute("selected")||t.selected));this.selectedIndex=t,!this.dirtyValue&&this.firstSelectedOption?this.value=this.firstSelectedOption.text:this.value="",this.setSelectedOptions()}}setInlineSelection(){this.firstSelectedOption&&(this.control.value=this.firstSelectedOption.text,this.control.focus(),this.control.setSelectionRange(this.filter.length,this.control.value.length,"backward"))}setPositioning(){this.$fastController.isConnected&&(this.cleanup=(0,o.Me)(this,this.listbox,(async()=>{const{middlewareData:t,x:e,y:n}=await(0,o.oo)(this,this.listbox,{placement:"bottom",strategy:"fixed",middleware:[(0,r.RR)(),(0,r.dp)({apply:({availableHeight:t,rects:e})=>{Object.assign(this.listbox.style,{maxHeight:`${t}px`,width:`${e.reference.width}px`})}}),(0,r.Cp)()]});if(t.hide?.referenceHidden)return this.open=!1,void this.cleanup();Object.assign(this.listbox.style,{position:"fixed",top:"0",left:"0",transform:`translate(${e}px, ${n}px)`})})))}selectedOptionsChanged(t,e){this.$fastController.isConnected&&this._options.forEach((t=>{t.selected=e.includes(t)}))}slottedOptionsChanged(t,e){super.slottedOptionsChanged(t,e),this.updateValue()}updateValue(t){this.$fastController.isConnected&&(this.value=this.firstSelectedOption?.text||this.control.value),t&&this.$emit("change")}clearSelectionRange(){const t=this.control.value.length;this.control.setSelectionRange(t,t)}}(0,i.gn)([(0,l.Lj)({attribute:"autocomplete",mode:"fromView"}),(0,i.w6)("design:type",Object)],w.prototype,"autocomplete",void 0),(0,i.gn)([(0,l.Lj)({attribute:"open",mode:"boolean"}),(0,i.w6)("design:type",Boolean)],w.prototype,"open",void 0),(0,i.gn)([l.Lj,(0,i.w6)("design:type",String)],w.prototype,"placeholder",void 0);class ${}(0,i.gn)([a.LO,(0,i.w6)("design:type",Object)],$.prototype,"ariaAutoComplete",void 0),(0,i.gn)([a.LO,(0,i.w6)("design:type",Object)],$.prototype,"ariaControls",void 0),(0,p.e)($,d.x),(0,p.e)(w,h.hW,$)},21062:function(t,e,n){"use strict";n.d(e,{M:function(){return c}});var i=n(49218),o=n(41472),r=n(47548),s=n(98296),a=n(33818),l=n(17503);function c(t={}){return i.dy`
        <template
            aria-disabled="${t=>t.ariaDisabled}"
            autocomplete="${t=>t.autocomplete}"
            ?open="${t=>t.open}"
            tabindex="${t=>t.disabled?null:"0"}"
            @click="${(t,e)=>t.clickHandler(e.event)}"
            @focusout="${(t,e)=>t.focusoutHandler(e.event)}"
            @keydown="${(t,e)=>t.keydownHandler(e.event)}"
        >
            <div class="control" part="control">
                ${(0,a.m9)(t)}
                <slot name="control">
                    <input
                        aria-activedescendant="${t=>t.open?t.ariaActiveDescendant:null}"
                        aria-autocomplete="${t=>t.ariaAutoComplete}"
                        aria-controls="${t=>t.ariaControls}"
                        aria-disabled="${t=>t.ariaDisabled}"
                        aria-expanded="${t=>t.ariaExpanded}"
                        aria-haspopup="listbox"
                        class="selected-value"
                        part="selected-value"
                        placeholder="${t=>t.placeholder}"
                        role="combobox"
                        type="text"
                        ?disabled="${t=>t.disabled}"
                        :value="${t=>t.value}"
                        @input="${(t,e)=>t.inputHandler(e.event)}"
                        @keyup="${(t,e)=>t.keyupHandler(e.event)}"
                        ${(0,o.i)("control")}
                    />
                    <div class="indicator" part="indicator" aria-hidden="true">
                        <slot name="indicator">
                            ${(0,l.A)(t.indicator)}
                        </slot>
                    </div>
                </slot>
                ${(0,a.LC)(t)}
            </div>
            <div
                class="listbox"
                id="${t=>t.listboxId}"
                part="listbox"
                role="listbox"
                ?disabled="${t=>t.disabled}"
                ?hidden="${t=>!t.open}"
                ${(0,o.i)("listbox")}
            >
                <slot
                    ${(0,r.Q)({filter:s.z.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
                ></slot>
            </div>
        </template>
    `}},52704:function(t,e,n){"use strict";n.d(e,{L:function(){return C}});var i=n(33940),o=n(99452),r=n(39579),s=n(28904),a=n(17781),l=n(62795);class c{constructor(t){this.value=t,this.notifier=o.y$.getNotifier(this),this.dependencies=new Set,this.binding=o.y$.binding(t,this),this.binding.setMode(!1)}static getOrCreate(t){let e=c.cache.get(t);return e||(e=new c(t),c.cache.set(t,e),e)}evaluate(t,e){return this.binding.observe((n=>{if(this.dependencies.add(n),e===n){if(t.parent)return t.parent.getTokenValue(n);throw new Error("DesignTokenNode has encountered a circular token reference. Avoid this by setting the token value for an ancestor node.")}return t.getTokenValue(n)}))}handleChange(){this.notifier.notify(void 0)}}c.cache=new WeakMap;class u{constructor(t,e,n,i){this.token=t,this.evaluator=e,this.node=n,this.subscriber=i,this.value=e.evaluate(n,t),this.subscriber&&o.y$.getNotifier(this.evaluator).subscribe(this.subscriber)}dispose(){this.subscriber&&o.y$.getNotifier(this.evaluator).unsubscribe(this.subscriber)}update(){return this.value=this.evaluator.evaluate(this.node,this.token),this}}class d{constructor(t,e,n,i){this.target=t,this.type=e,this.token=n,this.value=i}notify(){o.y$.getNotifier(this.token).notify(this)}}class h{constructor(){this._parent=null,this._children=new Set,this._values=new Map,this._derived=new Map,this.dependencyGraph=new Map}static isDerivedTokenValue(t){return"function"==typeof t}static isDerivedFor(t,e){return t._derived.has(e)}static collectDerivedContext(t){const e=new Map;if(null===t.parent)return e;let n=h.getAssignedTokensForNode(t),i=t.parent;do{const t=h.getAssignedTokensForNode(i);for(let o=0,r=t.length;o<r;o++){const r=t[o];!n.includes(r)&&h.isDerivedFor(i,r)&&e.set(r,i._derived.get(r))}n=Array.from(new Set(n.concat(t))),i=i.parent}while(null!==i);return e}static getLocalTokenValue(t,e){return h.isAssigned(t,e)?h.isDerivedFor(t,e)?t._derived.get(e).value:t._values.get(e):void 0}static getOrCreateDependencyGraph(t,e){let n=t.dependencyGraph.get(e);return n||(n=new Set,t.dependencyGraph.set(e,n),n)}static notify(){const t=this._notifications;this._notifications=[];for(const e of t)e.notify()}static queueNotification(...t){this._notifications.push(...t)}static getAssignedTokensForNode(t){return Array.from(t._values.keys())}static composeAssignedTokensForNode(t){const e=new Set(h.getAssignedTokensForNode(t));let n=t.parent;for(;null!==n;){const t=h.getAssignedTokensForNode(n);for(const n of t)e.add(n);n=n.parent}return Array.from(e)}static isAssigned(t,e){return t._values.has(e)}get parent(){return this._parent}get children(){return Array.from(this._children)}appendChild(t){let e=null;null!==t.parent&&(e=h.composeAssignedTokensForNode(t.parent),t.parent._children.delete(t));const n=h.composeAssignedTokensForNode(this),i=h.collectDerivedContext(this);t._parent=this,this._children.add(t);for(const o of n){let n=0;if(null!==e){const t=e.indexOf(o);-1!==t&&(n=1,e.splice(t,1))}t.dispatch(new d(this,n,o,i.get(o)?.evaluator.value))}if(null!==e&&e.length>0)for(const n of e)t.dispatch(new d(this,2,n,i.get(n)?.evaluator.value));h.notify()}removeChild(t){if(t.parent===this){const e=h.composeAssignedTokensForNode(this);t._parent=null,this._children.delete(t);for(const n of e)t.dispatch(new d(this,2,n));h.notify()}}dispose(){this.parent&&(this.parent._children.delete(this),this._parent=null);for(const[,t]of this._derived)t.dispose()}setTokenValue(t,e){const n=h.isAssigned(this,t)||h.isDerivedFor(this,t)?1:0,i=h.getLocalTokenValue(this,t);this._values.set(t,e),h.isDerivedFor(this,t)&&this.tearDownDerivedTokenValue(t);const o=h.isDerivedTokenValue(e),r=h.collectDerivedContext(this);let s;if(o){s=this.setupDerivedTokenValue(t,e,!0).value}else s=e;i!==s&&h.queueNotification(new d(this,n,t,e)),this.dispatch(new d(this,n,t,e)),r.forEach(((t,e)=>{if(!h.isDerivedFor(this,e)){h.getLocalTokenValue(this,e)!==(t=this.setupDerivedTokenValue(e,t.evaluator.value)).value&&h.queueNotification(new d(this,1,e,t.evaluator.value)),this.dispatch(new d(this,0,e,t.evaluator.value))}})),h.notify()}getTokenValue(t){let e,n=this;for(;null!==n;){if(h.isDerivedFor(n,t)){e=n._derived.get(t).value;break}if(h.isAssigned(n,t)){e=n._values.get(t);break}n=n._parent}if(void 0!==e)return e;throw new Error(`No value set for token '${t.name??t}' in node tree.`)}deleteTokenValue(t){if(h.isAssigned(this,t)){const e=h.getLocalTokenValue(this,t);let n;this._values.delete(t),this.tearDownDerivedTokenValue(t);try{n=this.getTokenValue(t)}catch(t){n=void 0}h.queueNotification(new d(this,2,t)),e!==n&&this.dispatch(new d(this,2,t)),h.notify()}}dispatch(t){if(this!==t.target){const{token:e}=t,n=h.isAssigned(this,e),i=n&&this._derived.get(e)?.evaluator.dependencies.has(e);if(n&&!i)return;2===t.type&&!n&&h.isDerivedFor(this,e)&&(this.tearDownDerivedTokenValue(e),h.queueNotification(new d(this,2,e))),i&&(t=new d(this,1,e,this._derived.get(e)?.evaluator.value));const{value:o}=t;if(o&&h.isDerivedTokenValue(o)){const n=c.getOrCreate(o).dependencies;let i=!1;for(const t of n)if(h.isAssigned(this,t)){i=!0;break}if(i){const n=this._derived.get(e)?.value,i=this.setupDerivedTokenValue(e,o);if(n!==i.value){const o=new d(this,void 0===n?0:1,e,i.evaluator.value);h.queueNotification(o),t=o}}}}this.collectLocalChangeRecords(t).forEach((t=>{h.queueNotification(t),this.dispatch(t)})),this.notifyChildren(t)}collectLocalChangeRecords(t){const e=new Map;for(const n of h.getOrCreateDependencyGraph(this,t.token))n.value!==n.update().value&&e.set(n.token,new d(this,1,n.token,n.evaluator.value));return e}notifyChildren(...t){if(this.children.length)for(let e=0,n=this.children.length;e<n;e++)for(let n=0;n<t.length;n++)this.children[e].dispatch(t[n])}tearDownDerivedTokenValue(t){if(h.isDerivedFor(this,t)){const e=this._derived.get(t);e.dispose(),this._derived.delete(t),e.evaluator.dependencies.forEach((t=>{h.getOrCreateDependencyGraph(this,t).delete(e)}))}}setupDerivedTokenValue(t,e,n=!1){const i=new u(t,c.getOrCreate(e),this,n?{handleChange:()=>{if(i.value!==i.update().value){const t=new d(this,1,i.token,i.evaluator.value);h.queueNotification(t),this.dispatch(t),h.notify()}}}:void 0);return this._derived.set(t,i),i.evaluator.dependencies.forEach((e=>{e!==t&&h.getOrCreateDependencyGraph(this,e).add(i)})),i}}h._notifications=[];var p=n(58968),f=n(70885);class g{setProperty(t,e){p.H.enqueue((()=>this.target.setProperty(t,e)))}removeProperty(t){p.H.enqueue((()=>this.target.removeProperty(t)))}}class v extends g{constructor(){super();const t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,t]}}class m extends g{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:t}=this.style;if(t){const e=t.insertRule(":root{}",t.cssRules.length);this.target=t.cssRules[e].style}}}class b{constructor(t){this.store=new Map,this.target=null;const e=t.$fastController;this.style=document.createElement("style"),e.addStyles(this.style),o.y$.getNotifier(e).subscribe(this,"isConnected"),this.handleChange(e,"isConnected")}targetChanged(){if(null!==this.target)for(const[t,e]of this.store.entries())this.target.setProperty(t,e)}setProperty(t,e){this.store.set(t,e),p.H.enqueue((()=>{null!==this.target&&this.target.setProperty(t,e)}))}removeProperty(t){this.store.delete(t),p.H.enqueue((()=>{null!==this.target&&this.target.removeProperty(t)}))}handleChange(t,e){const{sheet:n}=this.style;if(n){const t=n.insertRule(":host{}",n.cssRules.length);this.target=n.cssRules[t].style}else this.target=null}}(0,i.gn)([o.LO,(0,i.w6)("design:type",Object)],b.prototype,"target",void 0);class y{setProperty(t,e){y.properties[t]=e;for(const n of y.roots.values())n.setProperty(t,e)}removeProperty(t){delete y.properties[t];for(const e of y.roots.values())e.removeProperty(t)}static registerRoot(t){const{roots:e}=y;if(!e.has(t)){e.add(t);for(const e in y.properties)t.setProperty(e,y.properties[e])}}static unregisterRoot(t){const{roots:e}=y;if(e.has(t)){e.delete(t);for(const e in y.properties)t.removeProperty(e)}}}y.roots=new Set,y.properties={};const x=new WeakMap,w=f.X.supportsAdoptedStyleSheets?class extends g{constructor(t){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":host{}")].style,t.$fastController.addStyles(new f.X([e]))}}:b,$=Object.freeze({getOrCreate(t){if(x.has(t))return x.get(t);let e;return e=t instanceof Document?f.X.supportsAdoptedStyleSheets?new v:new m:new w(t),x.set(t,e),e}});class C{constructor(t){this.subscriberNotifier={handleChange:(t,e)=>{const n={target:e.target===L.defaultNode||Reflect.get(e.target,T)===T?"default":e.target.target,token:this};this.subscribers.notify(n)}},this.name=t.name,o.y$.getNotifier(this).subscribe(this.subscriberNotifier)}get $value(){return this.default}get default(){return L.defaultOverridesNode.getTokenValue(this)}get subscribers(){return this._subscribers||(this._subscribers=new r.q(this)),this._subscribers}static isCSSDesignTokenConfiguration(t){return"string"==typeof t.cssCustomPropertyName}static create(t,e){let n;return n="string"==typeof t?new k({name:t,cssCustomPropertyName:t}):C.isCSSDesignTokenConfiguration(t)?new k(t):new C(t),void 0!==e&&L.defaultNode.setTokenValue(n,e),n}static withStrategy(t){L.withStrategy(t)}static registerDefaultStyleTarget(t=document){(t instanceof s.H||t instanceof Document)&&(t=$.getOrCreate(t)),y.registerRoot(t)}static unregisterDefaultStyleTarget(t=document){(t instanceof s.H||t instanceof Document)&&(t=$.getOrCreate(t)),y.unregisterRoot(t)}static clear(){L.clear()}getValueFor(t){return L.getOrCreate(t).getTokenValue(this)}setValueFor(t,e){L.getOrCreate(t).setTokenValue(this,this.normalizeValue(e))}deleteValueFor(t){return L.getOrCreate(t).deleteTokenValue(this),this}withDefault(t){return t=this.normalizeValue(t),h.isAssigned(L.defaultNode,this)||L.defaultNode.setTokenValue(this,t),L.defaultOverridesNode.setTokenValue(this,t),this}subscribe(t){this.subscribers.subscribe(t)}unsubscribe(t){this.subscribers.unsubscribe(t)}alias(t){return e=>e(t)}normalizeValue(t){return t instanceof C&&(t=this.alias(t)),t}}let k=class extends C{constructor(t){super(t),this.cssReflector={handleChange:(t,e)=>{const n=e.target===L.defaultNode||Reflect.get(e.target,T)===T?L.rootStyleSheetTarget:e.target instanceof L?$.getOrCreate(e.target.target):null;n&&(2===e.type?n.removeProperty(this.cssCustomProperty):n.setProperty(this.cssCustomProperty,this.resolveCSSValue(e.target.getTokenValue(this))))}},this.cssCustomProperty=`--${t.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`,o.y$.getNotifier(this).subscribe(this.cssReflector)}createCSS(){return this.cssVar}resolveCSSValue(t){return t&&"function"==typeof t.createCSS?t.createCSS():t}};k=(0,i.gn)([(0,a.k)(),(0,i.w6)("design:paramtypes",[Object])],k);const S={contains:l.MP,parent(t){let e=(0,l.TC)(t);for(;null!==e;){if(e instanceof s.H)return e;e=(0,l.TC)(e)}return null}},T=Symbol();class L extends h{constructor(t){super(),this.target=t,this.setTokenValue=this.lazyAttachToDefault(super.setTokenValue),this.getTokenValue=this.lazyAttachToDefault(super.getTokenValue),this.deleteTokenValue=this.lazyAttachToDefault(super.deleteTokenValue)}static get strategy(){return void 0===this._strategy&&L.withStrategy(S),this._strategy}static get defaultOverridesNode(){let t=L.overridesNodes.get(document);return t||(t=new h,L.overridesNodes.set(document,t),L.defaultNode.appendChild(t),Reflect.defineProperty(t,T,{value:T,enumerable:!1,configurable:!1}),t)}static clear(){!function t(e){for(const n of e.children)t(n);e.dispose()}(L.defaultOverridesNode),L.overridesNodes.delete(document)}connectedCallback(t){let e=L.findParent(t.source);if(null===e&&(e=L.defaultOverridesNode),e!==this.parent){const n=[];for(const i of e.children)i instanceof L&&L.strategy.contains(t.source,i.target)&&n.push(i);e.appendChild(this);for(const t of n)this.appendChild(t)}}disconnectedCallback(t){this.dispose()}static getOrCreate(t){let e=L.cache.get(t);return e||(e=new L(t),L.cache.set(t,e),t.$fastController.addBehavior(L.strategy),t.$fastController.addBehavior(e),e)}static withStrategy(t){this._strategy=t}static findParent(t){let e=L.strategy.parent(t);for(;null!==e;){const t=L.cache.get(e);if(t)return t;e=L.strategy.parent(e)}return null}lazyAttachToDefault(t){return(...e)=>(null===this.parent&&L.defaultOverridesNode.appendChild(this),t.apply(this,e))}}L.overridesNodes=new WeakMap,L.defaultNode=new h,L.rootStyleSheetTarget=new y,L.cache=new WeakMap},67776:function(t,e,n){"use strict";n.d(e,{N:function(){return a}});var i=n(33940),o=n(28904),r=n(42590);const s="next";class a extends o.H{constructor(){super(...arguments),this.hiddenFromAT=!0,this.direction=s}keyupHandler(t){if(!this.hiddenFromAT){const e=t.key;"Enter"!==e&&"Space"!==e||this.$emit("click",t),"Escape"===e&&this.blur()}}}(0,i.gn)([(0,r.Lj)({mode:"boolean"}),(0,i.w6)("design:type",Boolean)],a.prototype,"disabled",void 0),(0,i.gn)([(0,r.Lj)({attribute:"aria-hidden",converter:r.bw}),(0,i.w6)("design:type",Boolean)],a.prototype,"hiddenFromAT",void 0),(0,i.gn)([r.Lj,(0,i.w6)("design:type",String)],a.prototype,"direction",void 0)},86158:function(t,e,n){"use strict";n.d(e,{_:function(){return r}});var i=n(49218),o=n(17503);function r(t={}){const e={};return i.dy`
        <template
            role="button"
            aria-disabled="${t=>!!t.disabled||void 0}"
            tabindex="${t=>t.hiddenFromAT?-1:0}"
            @keyup="${(t,e)=>t.keyupHandler(e.event)}"
        >
            ${n=>function(t,n){let r=e[t];return r||(e[t]=r=i.dy`
                <span part="${t}" class="${t}">
                    <slot name="${t}">
                        ${(0,o.A)(n[t])}
                    </slot>
                </span>
            `),r}(n.direction,t)}
        </template>
    `}},23526:function(t,e,n){"use strict";n.d(e,{Um:function(){return h},V2:function(){return p}});var i=n(89522),o=n(58968),r=n(42590),s=n(99452),a=n(94537);const l="form-associated-proxy",c="ElementInternals",u=c in window&&"setFormValue"in window.ElementInternals.prototype,d=new WeakMap;function h(t){const e=class extends t{constructor(...t){super(...t),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return u}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const t=this.proxy.labels,e=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),n=t?e.concat(Array.from(t)):e;return Object.freeze(n)}return i.ow}valueChanged(t,e){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(t,e){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(t,e){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),o.H.enqueue((()=>this.classList.toggle("disabled",this.disabled)))}nameChanged(t,e){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(t,e){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),o.H.enqueue((()=>this.classList.toggle("required",this.required))),this.validate()}get elementInternals(){if(!u)return null;let t=d.get(this);return t||(t=this.attachInternals(),d.set(this,t)),t}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){super.disconnectedCallback(),this.proxyEventsToBlock.forEach((t=>this.proxy.removeEventListener(t,this.stopPropagation))),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(t,e,n){this.elementInternals?this.elementInternals.setValidity(t,e,n):"string"==typeof e&&this.proxy.setCustomValidity(e)}formDisabledCallback(t){this.disabled=t}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach((t=>this.proxy.addEventListener(t,this.stopPropagation))),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",l),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",l)),this.shadowRoot?.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){this.removeChild(this.proxy),this.shadowRoot?.removeChild(this.proxySlot)}validate(t){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,t)}setFormValue(t,e){this.elementInternals&&this.elementInternals.setFormValue(t,e||t)}_keypressHandler(t){if(t.key===a.kL)if(this.form instanceof HTMLFormElement){this.form.querySelector("[type=submit]")?.click()}}stopPropagation(t){t.stopPropagation()}};return(0,r.Lj)({mode:"boolean"})(e.prototype,"disabled"),(0,r.Lj)({mode:"fromView",attribute:"value"})(e.prototype,"initialValue"),(0,r.Lj)({attribute:"current-value"})(e.prototype,"currentValue"),(0,r.Lj)(e.prototype,"name"),(0,r.Lj)({mode:"boolean"})(e.prototype,"required"),(0,s.LO)(e.prototype,"value"),e}function p(t){class e extends(h(t)){}class n extends e{constructor(...t){super(t),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(t,e){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),void 0!==t&&this.$emit("change"),this.validate()}currentCheckedChanged(t,e){this.checked=this.currentChecked}updateForm(){const t=this.checked?this.value:null;this.setFormValue(t,t)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return(0,r.Lj)({attribute:"checked",mode:"boolean"})(n.prototype,"checkedAttribute"),(0,r.Lj)({attribute:"current-checked",converter:r.bw})(n.prototype,"currentChecked"),(0,s.LO)(n.prototype,"defaultChecked"),(0,s.LO)(n.prototype,"checked"),n}},65799:function(t,e,n){"use strict";n.d(e,{n:function(){return d}});var i=n(33940),o=n(28904),r=n(58968),s=n(42590),a=n(99452),l=n(31289),c=n(33818);const u="ease-in-out";class d extends o.H{constructor(){super(...arguments),this.framesPerSecond=60,this.updatingItems=!1,this.speed=600,this.easing=u,this.flippersHiddenFromAT=!1,this.scrolling=!1,this.resizeDetector=null}get frameTime(){return 1e3/this.framesPerSecond}scrollingChanged(t,e){if(this.scrollContainer){const t=1==this.scrolling?"scrollstart":"scrollend";this.$emit(t,this.scrollContainer.scrollLeft)}}get isRtl(){return this.scrollItems.length>1&&this.scrollItems[0].offsetLeft>this.scrollItems[1].offsetLeft}connectedCallback(){super.connectedCallback(),this.initializeResizeDetector()}disconnectedCallback(){this.disconnectResizeDetector(),super.disconnectedCallback()}scrollItemsChanged(t,e){e&&!this.updatingItems&&r.H.enqueue((()=>this.setStops()))}disconnectResizeDetector(){this.resizeDetector&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.resized.bind(this)),this.resizeDetector.observe(this)}updateScrollStops(){this.updatingItems=!0;const t=this.scrollItems.reduce(((t,e)=>e instanceof HTMLSlotElement?t.concat(e.assignedElements()):(t.push(e),t)),[]);this.scrollItems=t,this.updatingItems=!1}setStops(){this.updateScrollStops();const{scrollContainer:t}=this,{scrollLeft:e}=t,{width:n,left:i}=t.getBoundingClientRect();this.width=n;let o=0,r=this.scrollItems.map(((t,n)=>{const{left:r,width:s}=t.getBoundingClientRect(),a=Math.round(r+e-i),l=Math.round(a+s);return this.isRtl?-l:(o=l,0===n?0:a)})).concat(o);r=this.fixScrollMisalign(r),r.sort(((t,e)=>Math.abs(t)-Math.abs(e))),this.scrollStops=r,this.setFlippers()}validateStops(t=!0){const e=()=>!!this.scrollStops.find((t=>t>0));return!e()&&t&&this.setStops(),e()}fixScrollMisalign(t){if(this.isRtl&&t.some((t=>t>0))){t.sort(((t,e)=>e-t));const e=t[0];t=t.map((t=>t-e))}return t}setFlippers(){const t=this.scrollContainer.scrollLeft;if(this.previousFlipperContainer?.classList.toggle("disabled",0===t),this.scrollStops){const e=Math.abs(this.scrollStops[this.scrollStops.length-1]);this.nextFlipperContainer?.classList.toggle("disabled",this.validateStops(!1)&&Math.abs(t)+this.width>=e)}}scrollInView(t,e=0,n){if("number"!=typeof t&&t&&(t=this.scrollItems.findIndex((e=>e===t||e.contains(t)))),void 0!==t){n=n??e;const{scrollContainer:i,scrollStops:o,scrollItems:r}=this,{scrollLeft:s}=this.scrollContainer,{width:a}=i.getBoundingClientRect(),l=o[t],{width:c}=r[t].getBoundingClientRect(),u=l+c,d=s+e>l;if(d||s+a-n<u){const t=[...o].sort(((t,e)=>d?e-t:t-e)).find((t=>d?t+e<l:t+a-(n??0)>u))??0;this.scrollToPosition(t)}}}keyupHandler(t){switch(t.key){case"ArrowLeft":this.scrollToPrevious();break;case"ArrowRight":this.scrollToNext()}}scrollToPrevious(){this.validateStops();const t=this.scrollContainer.scrollLeft,e=this.scrollStops.findIndex(((e,n)=>e>=t&&(this.isRtl||n===this.scrollStops.length-1||this.scrollStops[n+1]>t))),n=Math.abs(this.scrollStops[e+1]);let i=this.scrollStops.findIndex((t=>Math.abs(t)+this.width>n));(i>=e||-1===i)&&(i=e>0?e-1:0),this.scrollToPosition(this.scrollStops[i],t)}scrollToNext(){this.validateStops();const t=this.scrollContainer.scrollLeft,e=this.scrollStops.findIndex((e=>Math.abs(e)>=Math.abs(t))),n=this.scrollStops.findIndex((e=>Math.abs(t)+this.width<=Math.abs(e)));let i=e;n>e+2?i=n-2:e<this.scrollStops.length-2&&(i=e+1),this.scrollToPosition(this.scrollStops[i],t)}scrollToPosition(t,e=this.scrollContainer.scrollLeft){if(this.scrolling)return;this.scrolling=!0;const n=this.duration??Math.abs(t-e)/this.speed+"s";this.content.style.setProperty("transition-duration",n);const i=parseFloat(getComputedStyle(this.content).getPropertyValue("transition-duration")),o=e=>{e&&e.target!==e.currentTarget||(this.content.style.setProperty("transition-duration","0s"),this.content.style.removeProperty("transform"),this.scrollContainer.style.setProperty("scroll-behavior","auto"),this.scrollContainer.scrollLeft=t,this.setFlippers(),this.content.removeEventListener("transitionend",o),this.scrolling=!1)};if(0===i)return void o();this.content.addEventListener("transitionend",o);const r=this.scrollContainer.scrollWidth-this.scrollContainer.clientWidth;let s=this.scrollContainer.scrollLeft-Math.min(t,r);this.isRtl&&(s=this.scrollContainer.scrollLeft+Math.min(Math.abs(t),r)),this.content.style.setProperty("transition-property","transform"),this.content.style.setProperty("transition-timing-function",this.easing),this.content.style.setProperty("transform",`translateX(${s}px)`)}resized(){this.resizeTimeout&&(this.resizeTimeout=clearTimeout(this.resizeTimeout)),this.resizeTimeout=setTimeout((()=>{this.width=this.scrollContainer.offsetWidth,this.setFlippers()}),this.frameTime)}scrolled(){this.scrollTimeout&&(this.scrollTimeout=clearTimeout(this.scrollTimeout)),this.scrollTimeout=setTimeout((()=>{this.setFlippers()}),this.frameTime)}}(0,i.gn)([(0,s.Lj)({converter:s.Id}),(0,i.w6)("design:type",Number)],d.prototype,"speed",void 0),(0,i.gn)([s.Lj,(0,i.w6)("design:type",String)],d.prototype,"duration",void 0),(0,i.gn)([s.Lj,(0,i.w6)("design:type",String)],d.prototype,"easing",void 0),(0,i.gn)([(0,s.Lj)({attribute:"flippers-hidden-from-at",converter:s.bw}),(0,i.w6)("design:type",Boolean)],d.prototype,"flippersHiddenFromAT",void 0),(0,i.gn)([a.LO,(0,i.w6)("design:type",Boolean)],d.prototype,"scrolling",void 0),(0,i.gn)([a.LO,(0,i.w6)("design:type",Array)],d.prototype,"scrollItems",void 0),(0,i.gn)([(0,s.Lj)({attribute:"view"}),(0,i.w6)("design:type",String)],d.prototype,"view",void 0),(0,l.e)(d,c.hW)},49752:function(t,e,n){"use strict";n.d(e,{S:function(){return u}});var i=n(49218),o=n(41472),r=n(47548),s=n(95185),a=n(93703),l=n(33818),c=n(17503);function u(t={}){return i.dy`
        <template @keyup="${(t,e)=>t.keyupHandler(e.event)}">
            ${(0,l.m9)(t)}
            <div class="scroll-area" part="scroll-area">
                <div
                    class="scroll-view"
                    part="scroll-view"
                    @scroll="${t=>t.scrolled()}"
                    ${(0,o.i)("scrollContainer")}
                >
                    <div
                        class="content-container"
                        part="content-container"
                        ${(0,o.i)("content")}
                    >
                        <slot
                            ${(0,r.Q)({property:"scrollItems",filter:(0,s.R)()})}
                        ></slot>
                    </div>
                </div>
                ${(0,a.g)((t=>"mobile"!==t.view),i.dy`
                        <div
                            class="scroll scroll-prev"
                            part="scroll-prev"
                            ${(0,o.i)("previousFlipperContainer")}
                        >
                            <div class="scroll-action" part="scroll-action-previous">
                                <slot name="previous-flipper">
                                    ${(0,c.A)(t.previousFlipper)}
                                </slot>
                            </div>
                        </div>
                        <div
                            class="scroll scroll-next"
                            part="scroll-next"
                            ${(0,o.i)("nextFlipperContainer")}
                        >
                            <div class="scroll-action" part="scroll-action-next">
                                <slot name="next-flipper">
                                    ${(0,c.A)(t.nextFlipper)}
                                </slot>
                            </div>
                        </div>
                    `)}
            </div>
            ${(0,l.LC)(t)}
        </template>
    `}},3193:function(t,e,n){"use strict";n.d(e,{Qm:function(){return h},v2:function(){return d}});var i=n(33940),o=n(28904),r=n(99452),s=n(42590),a=n(7986),l=n(33714),c=n(33818),u=n(31289);function d(t){return(0,a.Re)(t)&&("option"===t.getAttribute("role")||t instanceof HTMLOptionElement)}class h extends o.H{constructor(t,e,n,i){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,t&&(this.textContent=t),e&&(this.initialValue=e),n&&(this.defaultSelected=n),i&&(this.selected=i),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(t,e){this.ariaChecked="boolean"!=typeof e?null:e?"true":"false"}contentChanged(t,e){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(t,e){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(t,e){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){return this.value??this.text}get text(){return this.textContent?.replace(/\s+/g," ").trim()??""}set value(t){const e=`${t??""}`;this._value=e,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=e),r.y$.notify(this,"value")}get value(){return r.y$.track(this,"value"),this._value??this.text}get form(){return this.proxy?this.proxy.form:null}}(0,i.gn)([r.LO,(0,i.w6)("design:type",Boolean)],h.prototype,"checked",void 0),(0,i.gn)([r.LO,(0,i.w6)("design:type",Array)],h.prototype,"content",void 0),(0,i.gn)([r.LO,(0,i.w6)("design:type",Boolean)],h.prototype,"defaultSelected",void 0),(0,i.gn)([(0,s.Lj)({mode:"boolean"}),(0,i.w6)("design:type",Boolean)],h.prototype,"disabled",void 0),(0,i.gn)([(0,s.Lj)({attribute:"selected",mode:"boolean"}),(0,i.w6)("design:type",Boolean)],h.prototype,"selectedAttribute",void 0),(0,i.gn)([r.LO,(0,i.w6)("design:type",Boolean)],h.prototype,"selected",void 0),(0,i.gn)([(0,s.Lj)({attribute:"value",mode:"fromView"}),(0,i.w6)("design:type",String)],h.prototype,"initialValue",void 0);class p{}(0,i.gn)([r.LO,(0,i.w6)("design:type",Object)],p.prototype,"ariaChecked",void 0),(0,i.gn)([r.LO,(0,i.w6)("design:type",Object)],p.prototype,"ariaPosInSet",void 0),(0,i.gn)([r.LO,(0,i.w6)("design:type",Object)],p.prototype,"ariaSelected",void 0),(0,i.gn)([r.LO,(0,i.w6)("design:type",Object)],p.prototype,"ariaSetSize",void 0),(0,u.e)(p,l.v),(0,u.e)(h,c.hW,p)},36393:function(t,e,n){"use strict";n.d(e,{T:function(){return s}});var i=n(49218),o=n(47548),r=n(33818);function s(t={}){return i.dy`
        <template
            aria-checked="${t=>t.ariaChecked}"
            aria-disabled="${t=>t.ariaDisabled}"
            aria-posinset="${t=>t.ariaPosInSet}"
            aria-selected="${t=>t.ariaSelected}"
            aria-setsize="${t=>t.ariaSetSize}"
            role="option"
        >
            ${(0,r.m9)(t)}
            <span class="content" part="content">
                <slot ${(0,o.Q)("content")}></slot>
            </span>
            ${(0,r.LC)(t)}
        </template>
    `}},13031:function(t,e,n){"use strict";n.d(e,{b:function(){return u}});var i=n(33940),o=n(58968),r=n(99452),s=n(42590),a=n(97108),l=n(94537),c=n(98296);class u extends c.z{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){return this.options?.filter((t=>t.checked))}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(t,e){this.ariaActiveDescendant=this.options[e]?.id??"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const t=this.activeOption;t&&(t.checked=!0)}checkFirstOption(t=!1){t?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach(((t,e)=>{t.checked=(0,a.Z2)(e,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(t=!1){t?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((t,e)=>{t.checked=(0,a.Z2)(e,this.rangeStartIndex,this.options.length)}))):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(t=!1){t?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((t,e)=>{t.checked=(0,a.Z2)(e,this.rangeStartIndex,this.activeIndex+1)}))):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(t=!1){t?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),1===this.checkedOptions.length&&(this.rangeStartIndex+=1),this.options.forEach(((t,e)=>{t.checked=(0,a.Z2)(e,this.activeIndex,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(t){if(!this.multiple)return super.clickHandler(t);const e=t.target?.closest("[role=option]");return e&&!e.disabled?(this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(e),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0):void 0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(t){if(!this.multiple)return super.focusinHandler(t);this.shouldSkipFocus||t.target!==t.currentTarget||(this.uncheckAllOptions(),-1===this.activeIndex&&(this.activeIndex=-1!==this.firstSelectedOptionIndex?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(t){this.multiple&&this.uncheckAllOptions()}keydownHandler(t){if(!this.multiple)return super.keydownHandler(t);if(this.disabled)return!0;const{key:e,shiftKey:n}=t;switch(this.shouldSkipFocus=!1,e){case l.tU:return void this.checkFirstOption(n);case l.iF:return void this.checkNextOption(n);case l.SB:return void this.checkPreviousOption(n);case l.Kh:return void this.checkLastOption(n);case l.oM:return this.focusAndScrollOptionIntoView(),!0;case l.CX:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case l.BI:if(t.preventDefault(),this.typeAheadExpired)return void this.toggleSelectedForAllCheckedOptions();default:return 1===e.length&&this.handleTypeAhead(`${e}`),!0}}mousedownHandler(t){if(t.offsetX>=0&&t.offsetX<=this.scrollWidth)return super.mousedownHandler(t)}multipleChanged(t,e){this.ariaMultiSelectable=e?"true":null,this.options?.forEach((t=>{t.checked=!e&&void 0})),this.setSelectedOptions()}setSelectedOptions(){this.multiple?this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter((t=>t.selected)),this.focusAndScrollOptionIntoView()):super.setSelectedOptions()}sizeChanged(t,e){const n=Math.max(0,parseInt(e?.toFixed()??"",10));n!==e&&o.H.enqueue((()=>{this.size=n}))}toggleSelectedForAllCheckedOptions(){const t=this.checkedOptions.filter((t=>!t.disabled)),e=!t.every((t=>t.selected));t.forEach((t=>t.selected=e)),this.selectedIndex=this.options.indexOf(t[t.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(t,e){if(this.multiple){if(this.$fastController.isConnected){const t=this.getTypeaheadMatches(),e=this.options.indexOf(t[0]);e>-1&&(this.activeIndex=e,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}else super.typeaheadBufferChanged(t,e)}uncheckAllOptions(t=!1){this.options.forEach((t=>t.checked=!this.multiple&&void 0)),t||(this.rangeStartIndex=-1)}}(0,i.gn)([r.LO,(0,i.w6)("design:type",Number)],u.prototype,"activeIndex",void 0),(0,i.gn)([(0,s.Lj)({mode:"boolean"}),(0,i.w6)("design:type",Boolean)],u.prototype,"multiple",void 0),(0,i.gn)([(0,s.Lj)({converter:s.Id}),(0,i.w6)("design:type",Number)],u.prototype,"size",void 0)},98296:function(t,e,n){"use strict";n.d(e,{x:function(){return p},z:function(){return h}});var i=n(33940),o=n(28904),r=n(99452),s=n(42590),a=n(94537);var l=n(62512),c=n(3193),u=n(33714),d=n(31289);class h extends o.H{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){return this.selectedOptions[0]??null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every((t=>t.disabled))}get length(){return this.options?.length??0}get options(){return r.y$.track(this,"options"),this._options}set options(t){this._options=t,r.y$.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(t){this.typeaheadExpired=t}clickHandler(t){const e=t.target.closest("option,[role=option]");if(e&&!e.disabled)return this.selectedIndex=this.options.indexOf(e),!0}focusAndScrollOptionIntoView(t=this.firstSelectedOption){this.contains(document.activeElement)&&null!==t&&(t.focus(),requestAnimationFrame((()=>{t.scrollIntoView({block:"nearest"})})))}focusinHandler(t){this.shouldSkipFocus||t.target!==t.currentTarget||(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const t=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),e=new RegExp(`^${t}`,"gi");return this.options.filter((t=>t.text.trim().match(e)))}getSelectableIndex(t=this.selectedIndex,e){const n=t>e?-1:t<e?1:0,i=t+n;let o=null;switch(n){case-1:o=this.options.reduceRight(((t,e,n)=>!t&&!e.disabled&&n<i?e:t),o);break;case 1:o=this.options.reduce(((t,e,n)=>!t&&!e.disabled&&n>i?e:t),o)}return this.options.indexOf(o)}handleChange(t,e){if("selected"===e)h.slottedOptionFilter(t)&&(this.selectedIndex=this.options.indexOf(t)),this.setSelectedOptions()}handleTypeAhead(t){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout((()=>this.typeaheadExpired=!0),h.TYPE_AHEAD_TIMEOUT_MS),t.length>1||(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${t}`)}keydownHandler(t){if(this.disabled)return!0;this.shouldSkipFocus=!1;const e=t.key;switch(e){case a.tU:t.shiftKey||(t.preventDefault(),this.selectFirstOption());break;case a.iF:t.shiftKey||(t.preventDefault(),this.selectNextOption());break;case a.SB:t.shiftKey||(t.preventDefault(),this.selectPreviousOption());break;case a.Kh:t.preventDefault(),this.selectLastOption();break;case a.oM:return this.focusAndScrollOptionIntoView(),!0;case a.kL:case a.CX:return!0;case a.BI:if(this.typeaheadExpired)return!0;default:return 1===e.length&&this.handleTypeAhead(`${e}`),!0}}mousedownHandler(t){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(t,e){this.ariaMultiSelectable=e?"true":null}selectedIndexChanged(t,e){if(this.hasSelectableOptions){if(this.options[this.selectedIndex]?.disabled&&"number"==typeof t){const n=this.getSelectableIndex(t,e),i=n>-1?n:t;return this.selectedIndex=i,void(e===i&&this.selectedIndexChanged(e,i))}this.setSelectedOptions()}else this.selectedIndex=-1}selectedOptionsChanged(t,e){const n=e.filter(h.slottedOptionFilter);this.options?.forEach((t=>{const e=r.y$.getNotifier(t);e.unsubscribe(this,"selected"),t.selected=n.includes(t),e.subscribe(this,"selected")}))}selectFirstOption(){this.disabled||(this.selectedIndex=this.options?.findIndex((t=>!t.disabled))??-1)}selectLastOption(){this.disabled||(this.selectedIndex=function(t,e){let n=t.length;for(;n--;)if(e(t[n],n,t))return n;return-1}(this.options,(t=>!t.disabled)))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){this.selectedIndex=this.options?.findIndex((t=>t.defaultSelected))??-1}setSelectedOptions(){this.options?.length&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=this.firstSelectedOption?.id??"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(t,e){this.options=e.reduce(((t,e)=>((0,c.v2)(e)&&t.push(e),t)),[]);const n=`${this.options.length}`;this.options.forEach(((t,e)=>{t.id||(t.id=(0,l.EL)("option-")),t.ariaPosInSet=`${e+1}`,t.ariaSetSize=n})),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(t,e){if(this.$fastController.isConnected){const t=this.getTypeaheadMatches();if(t.length){const e=this.options.indexOf(t[0]);e>-1&&(this.selectedIndex=e)}this.typeaheadExpired=!1}}}h.slottedOptionFilter=t=>(0,c.v2)(t)&&!t.hidden,h.TYPE_AHEAD_TIMEOUT_MS=1e3,(0,i.gn)([(0,s.Lj)({mode:"boolean"}),(0,i.w6)("design:type",Boolean)],h.prototype,"disabled",void 0),(0,i.gn)([r.LO,(0,i.w6)("design:type",Number)],h.prototype,"selectedIndex",void 0),(0,i.gn)([r.LO,(0,i.w6)("design:type",Array)],h.prototype,"selectedOptions",void 0),(0,i.gn)([r.LO,(0,i.w6)("design:type",Array)],h.prototype,"slottedOptions",void 0),(0,i.gn)([r.LO,(0,i.w6)("design:type",String)],h.prototype,"typeaheadBuffer",void 0);class p{}(0,i.gn)([r.LO,(0,i.w6)("design:type",Object)],p.prototype,"ariaActiveDescendant",void 0),(0,i.gn)([r.LO,(0,i.w6)("design:type",Object)],p.prototype,"ariaDisabled",void 0),(0,i.gn)([r.LO,(0,i.w6)("design:type",Object)],p.prototype,"ariaExpanded",void 0),(0,i.gn)([r.LO,(0,i.w6)("design:type",Object)],p.prototype,"ariaMultiSelectable",void 0),(0,d.e)(p,u.v),(0,d.e)(h,p)},41034:function(t,e,n){"use strict";n.d(e,{WN:function(){return f}});var i=n(33940),o=n(50123),r=n(50937),s=n(28904),a=n(58968),l=n(42590),c=n(99452),u=n(94537),d=n(33818),h=n(31289),p=n(12695);class f extends s.H{constructor(){super(...arguments),this.role=p.O.menuitem,this.focusSubmenuOnLoad=!1,this.handleMenuItemKeyDown=t=>{if(t.defaultPrevented)return!1;switch(t.key){case u.kL:case u.BI:return this.invoke(),!1;case u.mr:return this.expandAndFocus(),!1;case u.CX:case u.BE:if(this.expanded)return this.closeSubMenu(),!1}return!0},this.handleMenuItemClick=t=>(t.defaultPrevented||this.disabled||this.invoke(),!1),this.submenuLoaded=()=>{this.focusSubmenuOnLoad&&(this.focusSubmenuOnLoad=!1,this.submenu&&(this.submenu.focus(),this.setAttribute("tabindex","-1")))},this.handleMouseOver=t=>(this.disabled||!this.hasSubmenu||this.expanded||(this.expanded=!0),!1),this.handleMouseOut=t=>(!this.expanded||this.contains(document.activeElement)||(this.expanded=!1),!1),this.closeSubMenu=()=>{this.expanded=!1,this.focus()},this.expandAndFocus=()=>{this.hasSubmenu&&(this.focusSubmenuOnLoad=!0,this.expanded=!0)},this.invoke=()=>{if(!this.disabled)switch(this.role){case p.O.menuitemcheckbox:this.checked=!this.checked;break;case p.O.menuitem:if(this.hasSubmenu){this.expandAndFocus();break}this.$emit("change");break;case p.O.menuitemradio:this.checked||(this.checked=!0)}}}expandedChanged(t,e){this.$fastController.isConnected&&(e&&this.submenu&&this.updateSubmenu(),this.$emit("expanded-change",this,{bubbles:!1}))}checkedChanged(t,e){this.$fastController.isConnected&&this.$emit("change")}get hasSubmenu(){return!!this.submenu}slottedSubmenuChanged(t,e){e.length&&(this.submenu=e[0],this.updateSubmenu())}disconnectedCallback(){this.cleanup?.(),super.disconnectedCallback()}updateSubmenu(){this.cleanup?.(),this.submenu&&this.expanded&&a.H.enqueue((()=>{this.cleanup=(0,o.Me)(this,this.submenuContainer,(async()=>{const t=["left-start","right-start"],{x:e,y:n}=await(0,o.oo)(this,this.submenuContainer,{middleware:[(0,r.uY)(),(0,r.dp)({apply:({availableWidth:e,rects:n})=>{e<n.floating.width&&t.push("bottom-end","top-end")}}),(0,r.RR)({fallbackPlacements:t})],placement:"right-start",strategy:"fixed"});Object.assign(this.submenuContainer.style,{left:`${e}px`,position:"fixed",top:`${n}px`}),this.submenuLoaded()}))}))}}(0,i.gn)([(0,l.Lj)({mode:"boolean"}),(0,i.w6)("design:type",Boolean)],f.prototype,"disabled",void 0),(0,i.gn)([(0,l.Lj)({mode:"boolean"}),(0,i.w6)("design:type",Boolean)],f.prototype,"expanded",void 0),(0,i.gn)([l.Lj,(0,i.w6)("design:type",String)],f.prototype,"role",void 0),(0,i.gn)([(0,l.Lj)({mode:"boolean"}),(0,i.w6)("design:type",Boolean)],f.prototype,"checked",void 0),(0,i.gn)([(0,l.Lj)({mode:"boolean"}),(0,i.w6)("design:type",Boolean)],f.prototype,"hidden",void 0),(0,i.gn)([c.LO,(0,i.w6)("design:type",Array)],f.prototype,"slottedSubmenu",void 0),(0,i.gn)([c.LO,(0,i.w6)("design:type",Object)],f.prototype,"submenu",void 0),(0,h.e)(f,d.hW)},12695:function(t,e,n){"use strict";n.d(e,{O:function(){return i}});const i={menuitem:"menuitem",menuitemcheckbox:"menuitemcheckbox",menuitemradio:"menuitemradio"};i.menuitem,i.menuitemcheckbox,i.menuitemradio},33714:function(t,e,n){"use strict";n.d(e,{v:function(){return r}});var i=n(33940),o=n(42590);class r{}(0,i.gn)([(0,o.Lj)({attribute:"aria-atomic"}),(0,i.w6)("design:type",Object)],r.prototype,"ariaAtomic",void 0),(0,i.gn)([(0,o.Lj)({attribute:"aria-busy"}),(0,i.w6)("design:type",Object)],r.prototype,"ariaBusy",void 0),(0,i.gn)([(0,o.Lj)({attribute:"aria-controls"}),(0,i.w6)("design:type",Object)],r.prototype,"ariaControls",void 0),(0,i.gn)([(0,o.Lj)({attribute:"aria-current"}),(0,i.w6)("design:type",Object)],r.prototype,"ariaCurrent",void 0),(0,i.gn)([(0,o.Lj)({attribute:"aria-describedby"}),(0,i.w6)("design:type",Object)],r.prototype,"ariaDescribedby",void 0),(0,i.gn)([(0,o.Lj)({attribute:"aria-details"}),(0,i.w6)("design:type",Object)],r.prototype,"ariaDetails",void 0),(0,i.gn)([(0,o.Lj)({attribute:"aria-disabled"}),(0,i.w6)("design:type",Object)],r.prototype,"ariaDisabled",void 0),(0,i.gn)([(0,o.Lj)({attribute:"aria-errormessage"}),(0,i.w6)("design:type",Object)],r.prototype,"ariaErrormessage",void 0),(0,i.gn)([(0,o.Lj)({attribute:"aria-flowto"}),(0,i.w6)("design:type",Object)],r.prototype,"ariaFlowto",void 0),(0,i.gn)([(0,o.Lj)({attribute:"aria-haspopup"}),(0,i.w6)("design:type",Object)],r.prototype,"ariaHaspopup",void 0),(0,i.gn)([(0,o.Lj)({attribute:"aria-hidden"}),(0,i.w6)("design:type",Object)],r.prototype,"ariaHidden",void 0),(0,i.gn)([(0,o.Lj)({attribute:"aria-invalid"}),(0,i.w6)("design:type",Object)],r.prototype,"ariaInvalid",void 0),(0,i.gn)([(0,o.Lj)({attribute:"aria-keyshortcuts"}),(0,i.w6)("design:type",Object)],r.prototype,"ariaKeyshortcuts",void 0),(0,i.gn)([(0,o.Lj)({attribute:"aria-label"}),(0,i.w6)("design:type",Object)],r.prototype,"ariaLabel",void 0),(0,i.gn)([(0,o.Lj)({attribute:"aria-labelledby"}),(0,i.w6)("design:type",Object)],r.prototype,"ariaLabelledby",void 0),(0,i.gn)([(0,o.Lj)({attribute:"aria-live"}),(0,i.w6)("design:type",Object)],r.prototype,"ariaLive",void 0),(0,i.gn)([(0,o.Lj)({attribute:"aria-owns"}),(0,i.w6)("design:type",Object)],r.prototype,"ariaOwns",void 0),(0,i.gn)([(0,o.Lj)({attribute:"aria-relevant"}),(0,i.w6)("design:type",Object)],r.prototype,"ariaRelevant",void 0),(0,i.gn)([(0,o.Lj)({attribute:"aria-roledescription"}),(0,i.w6)("design:type",Object)],r.prototype,"ariaRoledescription",void 0)},33818:function(t,e,n){"use strict";n.d(e,{LC:function(){return a},hW:function(){return s},m9:function(){return l}});var i=n(49218),o=n(41472),r=n(17503);class s{}function a(t){return i.dy`
        <slot name="end" ${(0,o.i)("end")}>${(0,r.A)(t.end)}</slot>
    `.inline()}function l(t){return i.dy`
        <slot name="start" ${(0,o.i)("start")}>${(0,r.A)(t.start)}</slot>
    `.inline()}},46313:function(t,e,n){"use strict";n.d(e,{H:function(){return o}});var i=n(72394);function o(t){if("string"==typeof t)return t;if("function"==typeof t&&!(t=i.W.getByType(t)))throw new Error("Missing FASTElement definition.");return t.name}},3923:function(t,e,n){"use strict";n.d(e,{U:function(){return u}});var i=n(49218),o=n(93703),r=n(41472),s=n(47548),a=n(98296),l=n(33818),c=n(17503);function u(t={}){return i.dy`
        <template
            aria-activedescendant="${t=>t.ariaActiveDescendant}"
            aria-controls="${t=>t.ariaControls}"
            aria-disabled="${t=>t.ariaDisabled}"
            aria-expanded="${t=>t.ariaExpanded}"
            aria-haspopup="${t=>t.collapsible?"listbox":null}"
            aria-multiselectable="${t=>t.ariaMultiSelectable}"
            ?open="${t=>t.open}"
            role="combobox"
            tabindex="${t=>t.disabled?null:"0"}"
            @click="${(t,e)=>t.clickHandler(e.event)}"
            @focusin="${(t,e)=>t.focusinHandler(e.event)}"
            @focusout="${(t,e)=>t.focusoutHandler(e.event)}"
            @keydown="${(t,e)=>t.keydownHandler(e.event)}"
            @mousedown="${(t,e)=>t.mousedownHandler(e.event)}"
        >
            ${(0,o.g)((t=>t.collapsible),i.dy`
                    <div
                        class="control"
                        part="control"
                        ?disabled="${t=>t.disabled}"
                        ${(0,r.i)("control")}
                    >
                        ${(0,l.m9)(t)}
                        <slot name="button-container">
                            <div class="selected-value" part="selected-value">
                                <slot name="selected-value">${t=>t.displayValue}</slot>
                            </div>
                            <div aria-hidden="true" class="indicator" part="indicator">
                                <slot name="indicator">
                                    ${(0,c.A)(t.indicator)}
                                </slot>
                            </div>
                        </slot>
                        ${(0,l.LC)(t)}
                    </div>
                `)}
            <div
                class="listbox"
                id="${t=>t.listboxId}"
                part="listbox"
                role="listbox"
                ?disabled="${t=>t.disabled}"
                ?hidden="${t=>!!t.collapsible&&!t.open}"
                ${(0,r.i)("listbox")}
            >
                <slot
                    ${(0,s.Q)({filter:a.z.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
                ></slot>
            </div>
        </template>
    `}},49687:function(t,e,n){"use strict";n.d(e,{P:function(){return o}});var i=n(28904);class o extends i.H{}},56758:function(t,e,n){"use strict";n.d(e,{o:function(){return o}});var i=n(49218);function o(){return i.dy`
        <template slot="tabpanel" role="tabpanel">
            <slot></slot>
        </template>
    `}},31709:function(t,e,n){"use strict";n.d(e,{g:function(){return l}});var i=n(33940),o=n(28904),r=n(42590),s=n(33818),a=n(31289);class l extends o.H{}(0,i.gn)([(0,r.Lj)({mode:"boolean"}),(0,i.w6)("design:type",Boolean)],l.prototype,"disabled",void 0),(0,a.e)(l,s.hW)},58245:function(t,e,n){"use strict";n.d(e,{O:function(){return r}});var i=n(49218),o=n(33818);function r(t={}){return i.dy`
        <template slot="tab" role="tab" aria-disabled="${t=>t.disabled}">
            ${(0,o.m9)(t)}
            <slot></slot>
            ${(0,o.LC)(t)}
        </template>
    `}},90591:function(t,e,n){"use strict";n.d(e,{G:function(){return h},K:function(){return p}});var i=n(33940),o=n(28904),r=n(42590),s=n(99452),a=n(94537),l=n(62512),c=n(97108),u=n(33818),d=n(31289);const h={vertical:"vertical",horizontal:"horizontal"};class p extends o.H{constructor(){super(...arguments),this.orientation=h.horizontal,this.hideActiveIndicator=!1,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=t=>"true"===t.getAttribute("aria-disabled"),this.isFocusableElement=t=>!this.isDisabledElement(t),this.setTabs=()=>{const t="gridColumn",e="gridRow",n=this.isHorizontal()?t:e;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach(((t,e)=>{if("tab"===t.slot){const n=this.activeTabIndex===e&&this.isFocusableElement(t);!this.hideActiveIndicator&&this.isFocusableElement(t)&&(this.showActiveIndicator=!0);const i=this.tabIds[e],o=this.tabpanelIds[e];t.setAttribute("id",i),t.setAttribute("aria-selected",n?"true":"false"),t.setAttribute("aria-controls",o),t.addEventListener("click",this.handleTabClick),t.addEventListener("keydown",this.handleTabKeyDown),t.setAttribute("tabindex",n?"0":"-1"),n&&(this.activetab=t)}t.style.gridColumn="",t.style.gridRow="",t.style[n]=`${e+1}`,this.isHorizontal()?t.classList.remove("vertical"):t.classList.add("vertical")}))},this.setTabPanels=()=>{this.tabpanels.forEach(((t,e)=>{const n=this.tabIds[e],i=this.tabpanelIds[e];t.setAttribute("id",i),t.setAttribute("aria-labelledby",n),this.activeTabIndex!==e?t.setAttribute("tabindex","-1"):t.removeAttribute("tabindex"),this.activeTabIndex!==e?t.setAttribute("hidden",""):t.removeAttribute("hidden")}))},this.handleTabClick=t=>{const e=t.currentTarget;1===e.nodeType&&this.isFocusableElement(e)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(e),this.setComponent())},this.handleTabKeyDown=t=>{if(this.isHorizontal())switch(t.key){case a.BE:t.preventDefault(),this.adjustBackward(t);break;case a.mr:t.preventDefault(),this.adjustForward(t)}else switch(t.key){case a.SB:t.preventDefault(),this.adjustBackward(t);break;case a.iF:t.preventDefault(),this.adjustForward(t)}switch(t.key){case a.tU:t.preventDefault(),this.adjust(-this.activeTabIndex);break;case a.Kh:t.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1)}},this.adjustForward=t=>{const e=this.tabs;let n=0;for(n=this.activetab?e.indexOf(this.activetab)+1:1,n===e.length&&(n=0);n<e.length&&e.length>1;){if(this.isFocusableElement(e[n])){this.moveToTabByIndex(e,n);break}if(this.activetab&&n===e.indexOf(this.activetab))break;n+1>=e.length?n=0:n+=1}},this.adjustBackward=t=>{const e=this.tabs;let n=0;for(n=this.activetab?e.indexOf(this.activetab)-1:0,n=n<0?e.length-1:n;n>=0&&e.length>1;){if(this.isFocusableElement(e[n])){this.moveToTabByIndex(e,n);break}n-1<0?n=e.length-1:n-=1}},this.moveToTabByIndex=(t,e)=>{const n=t[e];this.activetab=n,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=e,n.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(t,e){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex((e=>e.id===t)),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return void 0!==this.activeid?-1===this.tabIds.indexOf(this.activeid)?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map((t=>t.getAttribute("id")??`tab-${(0,l.EL)()}`))}getTabPanelIds(){return this.tabpanels.map((t=>t.getAttribute("id")??`panel-${(0,l.EL)()}`))}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===h.horizontal}handleActiveIndicatorPosition(){this.showActiveIndicator&&!this.hideActiveIndicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const t=this.isHorizontal()?"gridColumn":"gridRow",e=this.isHorizontal()?"translateX":"translateY",n=this.isHorizontal()?"offsetLeft":"offsetTop",i=this.activeIndicatorRef[n];this.activeIndicatorRef.style[t]=`${this.activeTabIndex+1}`;const o=this.activeIndicatorRef[n];this.activeIndicatorRef.style[t]=`${this.prevActiveTabIndex+1}`;const r=o-i;this.activeIndicatorRef.style.transform=`${e}(${r}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",(()=>{this.ticking=!1,this.activeIndicatorRef.style[t]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${e}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")}))}adjust(t){const e=this.tabs.filter((t=>!this.isDisabledElement(t))),n=e.indexOf(this.activetab),i=(0,c.b9)(0,e.length-1,n+t),o=this.tabs.indexOf(e[i]);o>-1&&this.moveToTabByIndex(this.tabs,o)}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}(0,i.gn)([r.Lj,(0,i.w6)("design:type",String)],p.prototype,"orientation",void 0),(0,i.gn)([r.Lj,(0,i.w6)("design:type",String)],p.prototype,"activeid",void 0),(0,i.gn)([s.LO,(0,i.w6)("design:type",Array)],p.prototype,"tabs",void 0),(0,i.gn)([s.LO,(0,i.w6)("design:type",Array)],p.prototype,"tabpanels",void 0),(0,i.gn)([(0,r.Lj)({attribute:"hide-active-indicator",mode:"boolean"}),(0,i.w6)("design:type",Object)],p.prototype,"hideActiveIndicator",void 0),(0,i.gn)([s.LO,(0,i.w6)("design:type",HTMLElement)],p.prototype,"activeIndicatorRef",void 0),(0,i.gn)([s.LO,(0,i.w6)("design:type",Boolean)],p.prototype,"showActiveIndicator",void 0),(0,d.e)(p,u.hW)},31289:function(t,e,n){"use strict";n.d(e,{e:function(){return o}});var i=n(42590);function o(t,...e){const n=i.Ax.locate(t);e.forEach((e=>{Object.getOwnPropertyNames(e.prototype).forEach((n=>{"constructor"!==n&&Object.defineProperty(t.prototype,n,Object.getOwnPropertyDescriptor(e.prototype,n))}));i.Ax.locate(e).forEach((t=>n.push(t)))}))}},5977:function(t,e,n){"use strict";n.d(e,{M:function(){return o}});var i=n(59997);const o=t=>"rtl"===t.closest("[dir]")?.dir?i.N.rtl:i.N.ltr},29717:function(t,e,n){"use strict";n.d(e,{KJ:function(){return i},Uu:function(){return r},vF:function(){return o},zw:function(){return s}});class i extends class{constructor(t){this.listenerCache=new WeakMap,this.query=t}connectedCallback(t){const{query:e}=this;let n=this.listenerCache.get(t);n||(n=this.constructListener(t),this.listenerCache.set(t,n)),n.bind(e)(),e.addEventListener("change",n)}disconnectedCallback(t){const e=this.listenerCache.get(t);e&&this.query.removeEventListener("change",e)}}{constructor(t,e){super(t),this.styles=e}static with(t){return e=>new i(t,e)}constructListener(t){let e=!1;const n=this.styles;return function(){const{matches:i}=this;i&&!e?(t.addStyles(n),e=i):!i&&e&&(t.removeStyles(n),e=i)}}removedCallback(t){t.removeStyles(this.styles)}}const o=i.with(window.matchMedia("(forced-colors)")),r=i.with(window.matchMedia("(prefers-color-scheme: dark)")),s=i.with(window.matchMedia("(prefers-color-scheme: light)"))},81239:function(t,e,n){"use strict";n.d(e,{w:function(){return o}});var i=n(99452);class o{constructor(t,e,n){this.propertyName=t,this.value=e,this.styles=n}addedCallback(t){i.y$.getNotifier(t.source).subscribe(this,this.propertyName),this.handleChange(t.source,this.propertyName)}removedCallback(t){i.y$.getNotifier(t.source).unsubscribe(this,this.propertyName),t.removeStyles(this.styles)}handleChange(t,e){const n=t.$fastController;t[e]===this.value?n.addStyles(this.styles):n.removeStyles(this.styles)}}},24484:function(t,e,n){"use strict";n.d(e,{H:function(){return i}});const i="not-allowed"},27186:function(t,e,n){"use strict";n.d(e,{j:function(){return i}});function i(t){return`:host([hidden]){display:none}:host{display:${t}}`}},67739:function(t,e,n){"use strict";n.d(e,{b:function(){return i}});const i="focus-visible"},17503:function(t,e,n){"use strict";n.d(e,{A:function(){return o}});var i=n(49218);function o(t){return t?"string"==typeof t?new i.Sy(t):"inline"in t?t.inline():t:i.Sy.empty}},86755:function(t,e,n){"use strict";n.d(e,{E:function(){return i}});const i=t=>t.nodeType!==Node.TEXT_NODE||!!t.nodeValue?.trim().length},82825:function(t,e,n){"use strict";n.d(e,{D:function(){return y}});var i=n(77615),o=n(78923),r=n(27186),s=n(22674);const a=o.i`
    .scroll-prev {
        right: auto;
        left: 0;
    }

    .scroll.scroll-next::before,
    .scroll-next .scroll-action {
        left: auto;
        right: 0;
    }

    .scroll.scroll-next::before {
        background: linear-gradient(to right, transparent, var(--scroll-fade-next));
    }

    .scroll-next .scroll-action {
        transform: translate(60%, -50%);
    }
`,l=o.i`
    .scroll.scroll-next {
        right: auto;
        left: 0;
    }

    .scroll.scroll-next::before {
        background: linear-gradient(to right, var(--scroll-fade-next), transparent);
        left: auto;
        right: 0;
    }

    .scroll.scroll-prev::before {
        background: linear-gradient(to right, transparent, var(--scroll-fade-previous));
    }

    .scroll-prev .scroll-action {
        left: auto;
        right: 0;
        transform: translate(60%, -50%);
    }
`,c=o.i`
    div.scroll-view {
        overflow-x: hidden;
    }

    .scroll {
        bottom: 0;
        pointer-events: none;
        position: absolute;
        right: 0;
        top: 0;
        user-select: none;
        width: 100px;
    }

    .scroll.disabled {
        display: none;
    }

    .scroll::before,
    .scroll-action {
        left: 0;
        position: absolute;
    }

    .scroll::before {
        background: linear-gradient(to right, var(--scroll-fade-previous), transparent);
        content: "";
        display: block;
        height: 100%;
        width: 100%;
    }

    .scroll-action {
        pointer-events: auto;
        right: auto;
        top: 50%;
        transform: translate(-60%, -50%);
        transition: opacity 0.2s ease-in-out;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.14);
    }

    :host([flippers-hidden-from-at="true"]) .scroll-action {
        opacity: 0;
    }

    :host([flippers-hidden-from-at="true"]) .scroll-area:hover .scroll-action {
        opacity: 1;
    }
`.withBehaviors(new s.O(a,l)),u=o.i`
    ${(0,r.j)("block")} :host {
        --scroll-align: center;
        --scroll-item-spacing: 4px;
        contain: layout;
        position: relative;
    }

    .scroll-area {
        position: relative;
        display: flex;
    }

    .scroll-view {
        overflow-x: auto;
        scrollbar-width: none;
        padding: var(--scroll-view-padding, 10px);
        overflow-y: clip;
    }

    ::-webkit-scrollbar {
        display: none;
    }

    .content-container {
        align-items: var(--scroll-align);
        display: inline-flex;
        flex-wrap: nowrap;
        position: relative;
        height: 100%;
    }

    .content-container ::slotted(*) {
        margin-inline-end: var(--scroll-item-spacing);
    }

    .content-container ::slotted(*:last-child) {
        margin-inline-end: 0;
    }
`;var d=n(33940),h=n(65799),p=n(42590),f=n(67087);class g extends h.n{constructor(){super(...arguments),this.flipperSize=f.I.large}connectedCallback(){super.connectedCallback(),"mobile"!==this.view&&this.$fastController.addStyles(c)}}(0,d.gn)([(0,p.Lj)({attribute:"next-telemetry"}),(0,d.w6)("design:type",String)],g.prototype,"nextTelemetry",void 0),(0,d.gn)([(0,p.Lj)({attribute:"previous-telemetry"}),(0,d.w6)("design:type",String)],g.prototype,"previousTelemetry",void 0),(0,d.gn)([(0,p.Lj)({attribute:"flipper-size"}),(0,d.w6)("design:type",String)],g.prototype,"flipperSize",void 0);var v=n(49752),m=n(49218);const b=(0,v.S)({nextFlipper:m.dy`
            <cs-flipper
                size="${t=>t.flipperSize}"
                @click="${t=>t.scrollToNext()}"
                aria-hidden="${t=>t.flippersHiddenFromAT}"
                data-t="${t=>t.nextTelemetry}"
                part="next-flipper"
            >
                <slot name="next" slot="next"></slot>
            </cs-flipper>
        `,previousFlipper:m.dy`
            <cs-flipper
                size="${t=>t.flipperSize}"
                @click="${t=>t.scrollToPrevious()}"
                direction="previous"
                aria-hidden="${t=>t.flippersHiddenFromAT}"
                data-t="${t=>t.previousTelemetry}"
                part="previous-flipper"
            >
                <slot name="previous" slot="previous"></slot>
            </cs-flipper>
        `}),y=g.compose({name:`${i.s.prefix}-horizontal-scroll`,styles:u,template:b})},49201:function(t,e,n){"use strict";n.d(e,{D:function(){return d}});var i=n(77615),o=n(49687),r=n(53131),s=n(27782),a=n(78923),l=n(27186);const c=a.i`
    ${(0,l.j)("block")} :host {
        box-sizing: border-box;
        font-family: ${r.S};
        font-size: ${s.c};
        line-height: ${s.R};
        font-weight: initial;
        padding: 0 16px 6px 16px;
    }

    ::slotted(cs-horizontal-scroll) {
        --scroll-view-padding: 0 0 10px 0;
    }
`;const u=(0,n(56758).o)(),d=o.P.compose({name:`${i.s.prefix}-stripe-tab-panel`,styles:c,template:u})},73913:function(t,e,n){"use strict";n.d(e,{D:function(){return w}});var i=n(77615),o=n(31709),r=n(53131),s=n(27782),a=n(2658),l=n(40009),c=n(74449),u=n(55135),d=n(26512),h=n(42689),p=n(17993),f=n(78923),g=n(27186),v=n(67739),m=n(29717),b=n(22798);const y=f.i`
    ${(0,g.j)("inline-flex")} :host {
        box-sizing: border-box;
        white-space: nowrap;
        font-family: ${r.S};
        font-size: ${s.c};
        line-height: ${s.R};
        font-weight: initial;
        height: calc((${a.i} + (${l._5} * 2)) * 1px);
        padding: 0 9px;
        color: ${c.Q};
        border-radius: calc(${u.UW} * 1px);
        border: calc(${d.H} * 1px) solid transparent;
        align-items: center;
        justify-content: center;
        grid-row: 1 / 3;
        cursor: pointer;
        outline: none;
    }
    :host([aria-selected="true"]) {
        z-index: 2;
        color: ${h.C};
        font-weight: 600;
    }
    :host(:hover),
    :host(:active) {
        color: ${h.C};
    }
    :host(:${v.b}) {
        border-color: ${p.yG};
        box-shadow: 0 0 0 calc((${d.vx} - ${d.H}) * 1px)
            ${p.yG} inset;
    }
    :host(.vertical) {
        justify-content: start;
        grid-column: 1 / 3;
    }
    :host(.vertical[aria-selected="true"]) {
        z-index: 2;
    }
    :host(.vertical:hover),
    :host(.vertical:active) {
        color: ${h.C};
    }
    :host(.vertical:hover[aria-selected="true"]) {
    }
`.withBehaviors((0,m.vF)(f.i`
            :host {
                forced-color-adjust: none;
                border-color: transparent;
                color: ${b.H.ButtonText};
                fill: currentcolor;
            }
            :host(:hover),
            :host(.vertical:hover),
            :host([aria-selected="true"]:hover) {
                background: transparent;
                color: ${b.H.Highlight};
                fill: currentcolor;
            }
            :host([aria-selected="true"]) {
                background: transparent;
                color: ${b.H.Highlight};
                fill: currentcolor;
            }
            :host(:${v.b}) {
                background: transparent;
                border-color: ${b.H.ButtonText};
                box-shadow: none;
            }
        `));const x=(0,n(58245).O)(),w=o.g.compose({name:`${i.s.prefix}-stripe-tab`,styles:y,template:x})},59427:function(t,e,n){"use strict";n.d(e,{D:function(){return k}});var i=n(77615),o=n(54101),r=n(53131),s=n(27782),a=n(42689),l=n(32572),c=n(94585),u=n(16549),d=n(80260),h=n(68530),p=n(67341),f=n(78923),g=n(27186);const v=f.i`
    ${(0,g.j)("grid")} :host {
        box-sizing: border-box;
        font-family: ${r.S};
        font-size: ${s.c};
        line-height: ${s.R};
        font-weight: initial;
        color: ${a.C};
        grid-template-rows: auto 1fr;
        grid-template-columns: 1fr;
        width: 100%;
        --tab-stripe-column-max-width: 50%;
        --title-column-max-width: 25%;
    }

    :host([layout="C1"]) .tab-stripe {
        margin-top: 8px;
        grid-template-columns: 1fr auto;
        grid-template-rows: auto auto;
        justify-content: flex-start;
        align-items: center;
    }

    :host([layout="C2"]) .tab-stripe {
        min-height: 56px;
    }

    :host([layout="C3"]) .tab-stripe {
        min-height: 64px;
    }

    :host([layout="C1"]) .more-actions {
        grid-row: 1;
        grid-column: 2;
    }

    :host([layout="C1"]) .tablist {
        grid-row: 2;
        grid-column: 1 / span 2;
    }

    :host([layout="C1"]) .title {
        font-size: ${s.c};
        line-height: ${s.R};
    }

    :host([layout="C2"]) .title {
        font-size: ${l.P};
        line-height: ${l.b};
    }

    :host([layout="C3"]) .title {
        font-size: ${c.m};
        line-height: ${c.I};
    }

    :host([layout="C1"]) ::slotted([slot="icon"]) {
        height: 16px;
        width: 16px;
    }

    :host([layout="C2"]) ::slotted([slot="icon"]) {
        height: 20px;
        width: 20px;
    }

    :host([layout="C3"]) ::slotted([slot="icon"]) {
        height: 24px;
        width: 24px;
    }

    .tab-stripe {
        display: grid;
        grid-template-columns:
            var(--title-column-max-width) minmax(auto, var(--tab-stripe-column-max-width))
            var(--title-column-max-width);
        justify-content: center;
        align-items: center;
        column-gap: 12px;
        min-height: 72px;
    }

    .tab-stripe.no-tabs {
        grid-template-columns: 1fr 1fr;
    }

    .more-actions {
        justify-self: end;
        margin-inline-end: 16px;
        display: grid;
        grid-auto-flow: column;
        column-gap: 8px;
        justify-content: center;
    }

    ::slotted([slot="more-actions"]) {
        font-size: ${u.s};
        line-height: ${u.v};
    }

    ::slotted(fluent-button[appearance="stealth"]),
    ::slotted(fluent-anchor[appearance="stealth"]) {
        background: transparent;
        --control-corner-radius: 999;
    }

    ::slotted(fluent-button[appearance="stealth"]:hover),
    ::slotted(fluent-anchor[appearance="stealth"]:hover) {
        background-color: ${d.Qp};
    }

    ::slotted(fluent-button[appearance="stealth"]:active),
    ::slotted(fluent-anchor[appearance="stealth"]:active) {
        background-color: ${d.sG};
    }

    .title-container {
        margin-inline-start: 16px;
        display: flex;
        align-items: center;
    }

    .title {
        margin-inline-start: 8px;
        font-weight: 600;
        font-size: ${h.i};
        line-height: ${h.y};
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .tablist {
        min-width: 0px;
        --scroll-view-padding: 0;
    }

    .tablist::part(scroll-area) {
        justify-content: center;
    }

    .tablist::part(scroll-view) {
        margin: 0 25px;
    }

    .tablist::part(scroll-action-previous),
    .tablist::part(scroll-action-next) {
        transform: translate(0%, -50%);
        box-shadow: none;
    }

    .tablist::part(scroll-action-previous) {
        border-inline-end: 1px solid;
        border-image: linear-gradient(
                to bottom,
                transparent 6px,
                rgba(0, 0, 0, 0.08) 6px,
                rgba(0, 0, 0, 0.08) 26px,
                transparent 26px
            )
            1;
        padding-inline-end: 8px;
    }

    .tablist::part(scroll-action-next) {
        border-inline-start: 1px solid;
        border-image: linear-gradient(
                to bottom,
                transparent 6px,
                rgba(0, 0, 0, 0.08) 6px,
                rgba(0, 0, 0, 0.08) 26px,
                transparent 26px
            )
            1;
        padding-inline-start: 8px;
    }

    .tablist::part(next-flipper),
    .tablist::part(previous-flipper) {
        background: transparent;
    }

    .tablist::part(next-flipper):hover,
    .tablist::part(previous-flipper):hover {
        background: ${p.d$};
    }

    .tablist::part(next-flipper):active,
    .tablist::part(previous-flipper):active {
        background: ${p._i};
    }

    .tabpanel {
        grid-row: 2;
        grid-column-start: 1;
        grid-column-end: 4;
        position: relative;
        width: inherit;
    }

    cs-flipper {
        visibility: hidden;
    }

    ::slotted([slot="icon"]) {
        height: 28px;
        width: 28px;
        display: flex;
    }

    :host(:hover) cs-flipper,
    :host(:focus-within) cs-flipper {
        visibility: visible;
    }
`;var m=n(49218),b=n(46313),y=n(93703),x=n(41472),w=n(47548),$=n(82825);const C=function(t={}){const e=m.dy.partial((0,b.H)($.D));return m.dy`
        <template class="${t=>t.orientation}">
            <div
                class="tab-stripe ${t=>t.showTabs?"":"no-tabs"}"
                part="tab-stripe"
            >
                <div part="title-container" class="title-container">
                    <slot name="icon">${t?.icon??""}</slot>
                    <span part="title" class="title">
                        <slot></slot>
                    </span>
                </div>
                ${(0,y.g)((t=>!!t.showTabs),m.dy`
                    <${e}
                        ${(0,x.i)("horizontalScroll")}
                        class="tablist"
                        part="tablist"
                        role="tablist"
                        flipper-size="medium"
                        flippers-hidden-from-at
                        next-telemetry="${t=>t.nextTabTelemetry}"
                        previous-telemetry="${t=>t.previousTabTelemetry}"
                    >
                        <slot name="previous-tab-glyph" slot="previous"></slot>
                        <slot name="next-tab-glyph" slot="next"></slot>
                        <slot class="tab" name="tab" part="tab" ${(0,w.Q)("tabs")}></slot>
                    </${e}>
                `)}
                <div part="more-actions" class="more-actions">
                    <slot name="more-actions">${t?.moreActions??""}</slot>
                </div>
            </div>
            <div class="tabpanel" part="tabpanel">
                <slot name="tabpanel" ${(0,w.Q)("tabpanels")}></slot>
            </div>
        </template>
    `}(),k=o.e.compose({name:`${i.s.prefix}-stripe`,styles:v,template:C})},54101:function(t,e,n){"use strict";n.d(e,{e:function(){return l}});var i=n(33940),o=n(90591),r=n(99452),s=n(42590),a=n(35114);class l extends o.K{constructor(){super(...arguments),this.tabs=[],this.tabpanels=[],this.showTabs=!0,this.layout=a.Kx.C4,this.activeindicator=!1,this.hideActiveIndicator=!0}connectedCallback(){super.connectedCallback(),this.showActiveIndicator=!1,this.horizontalScroll&&(this.horizontalScroll.keyupHandler=this.horizontalScrollKeyUp)}tabpanelsChanged(){this.tabpanels&&(1!==this.tabpanels.length?this.showTabs=!0:(this.showTabs=!1,this.tabs=[])),super.tabpanelsChanged()}horizontalScrollKeyUp(t){return!1}activeidChanged(t,e){super.activeidChanged(t,e),this.horizontalScroll.scrollInView(this.activetab)}}(0,i.gn)([r.LO,(0,i.w6)("design:type",Array)],l.prototype,"tabs",void 0),(0,i.gn)([r.LO,(0,i.w6)("design:type",Array)],l.prototype,"tabpanels",void 0),(0,i.gn)([r.LO,(0,i.w6)("design:type",Boolean)],l.prototype,"showTabs",void 0),(0,i.gn)([s.Lj,(0,i.w6)("design:type",String)],l.prototype,"layout",void 0),(0,i.gn)([(0,s.Lj)({attribute:"next-tab-telemetry"}),(0,i.w6)("design:type",String)],l.prototype,"nextTabTelemetry",void 0),(0,i.gn)([(0,s.Lj)({attribute:"previous-tab-telemetry"}),(0,i.w6)("design:type",String)],l.prototype,"previousTabTelemetry",void 0)},60279:function(t,e,n){"use strict";n.d(e,{$2:function(){return $},DR:function(){return w},KW:function(){return C},T8:function(){return v},hM:function(){return d},hP:function(){return g},iI:function(){return m},lw:function(){return f},rD:function(){return y},rp:function(){return u},v1:function(){return x},wo:function(){return p},zP:function(){return b}});var i=n(9366),o=n(38316),r=n(447),s=n(83343),a=n(2696),l=n(40272),c=n(82917);function u(t){return.2126*t.r+.7152*t.g+.0722*t.b}function d(t){function e(t){return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}return u(new a.h(e(t.r),e(t.g),e(t.b),1))}const h=(t,e)=>(t+.05)/(e+.05);function p(t,e){const n=d(t),i=d(e);return n>i?h(n,i):h(i,n)}function f(t){const e=Math.max(t.r,t.g,t.b),n=Math.min(t.r,t.g,t.b),o=e-n;let r=0;0!==o&&(r=e===t.r?(t.g-t.b)/o%6*60:e===t.g?60*((t.b-t.r)/o+2):60*((t.r-t.g)/o+4)),r<0&&(r+=360);const s=(e+n)/2;let a=0;return 0!==o&&(a=o/(1-Math.abs(2*s-1))),new i.H(r,a,s)}function g(t,e=1){const n=(1-Math.abs(2*t.l-1))*t.s,i=n*(1-Math.abs(t.h/60%2-1)),o=t.l-n/2;let r=0,s=0,l=0;return t.h<60?(r=n,s=i,l=0):t.h<120?(r=i,s=n,l=0):t.h<180?(r=0,s=n,l=i):t.h<240?(r=0,s=i,l=n):t.h<300?(r=i,s=0,l=n):t.h<360&&(r=n,s=0,l=i),new a.h(r+o,s+o,l+o,e)}function v(t){const e=Math.max(t.r,t.g,t.b),n=e-Math.min(t.r,t.g,t.b);let i=0;0!==n&&(i=e===t.r?(t.g-t.b)/n%6*60:e===t.g?60*((t.b-t.r)/n+2):60*((t.r-t.g)/n+4)),i<0&&(i+=360);let r=0;return 0!==e&&(r=n/e),new o.T(i,r,e)}function m(t,e=1){const n=t.s*t.v,i=n*(1-Math.abs(t.h/60%2-1)),o=t.v-n;let r=0,s=0,l=0;return t.h<60?(r=n,s=i,l=0):t.h<120?(r=i,s=n,l=0):t.h<180?(r=0,s=n,l=i):t.h<240?(r=0,s=i,l=n):t.h<300?(r=i,s=0,l=n):t.h<360&&(r=n,s=0,l=i),new a.h(r+o,s+o,l+o,e)}function b(t){function e(t){return t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}const n=e(t.r),i=e(t.g),o=e(t.b),r=.4124564*n+.3575761*i+.1804375*o,s=.2126729*n+.7151522*i+.072175*o,a=.0193339*n+.119192*i+.9503041*o;return new l.x(r,s,a)}function y(t,e=1){function n(t){return t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055}const i=n(3.2404542*t.x-1.5371385*t.y-.4985314*t.z),o=n(-.969266*t.x+1.8760108*t.y+.041556*t.z),r=n(.0556434*t.x-.2040259*t.y+1.0572252*t.z);return new a.h(i,o,r,e)}function x(t){return function(t){function e(t){return t>r.R.epsilon?Math.pow(t,1/3):(r.R.kappa*t+16)/116}const n=e(t.x/l.x.whitePoint.x),i=e(t.y/l.x.whitePoint.y),o=116*i-16,s=500*(n-i),a=200*(i-e(t.z/l.x.whitePoint.z));return new r.R(o,s,a)}(b(t))}function w(t,e=1){return y(function(t){const e=(t.l+16)/116,n=e+t.a/500,i=e-t.b/200,o=Math.pow(n,3),s=Math.pow(e,3),a=Math.pow(i,3);let c=0;c=o>r.R.epsilon?o:(116*n-16)/r.R.kappa;let u=0;u=t.l>r.R.epsilon*r.R.kappa?s:t.l/r.R.kappa;let d=0;return d=a>r.R.epsilon?a:(116*i-16)/r.R.kappa,c=l.x.whitePoint.x*c,u=l.x.whitePoint.y*u,d=l.x.whitePoint.z*d,new l.x(c,u,d)}(t),e)}function $(t){return function(t){let e=0;(Math.abs(t.b)>.001||Math.abs(t.a)>.001)&&(e=(0,c.vi)(Math.atan2(t.b,t.a))),e<0&&(e+=360);const n=Math.sqrt(t.a*t.a+t.b*t.b);return new s.t(t.l,n,e)}(x(t))}function C(t,e=1){return w(function(t){let e=0,n=0;return 0!==t.h&&(e=Math.cos((0,c.Ht)(t.h))*t.c,n=Math.sin((0,c.Ht)(t.h))*t.c),new r.R(t.l,e,n)}(t),e)}},9366:function(t,e,n){"use strict";n.d(e,{H:function(){return o}});var i=n(82917);class o{constructor(t,e,n){this.h=t,this.s=e,this.l=n}static fromObject(t){return!t||isNaN(t.h)||isNaN(t.s)||isNaN(t.l)?null:new o(t.h,t.s,t.l)}equalValue(t){return this.h===t.h&&this.s===t.s&&this.l===t.l}roundToPrecision(t){return new o((0,i.fZ)(this.h,t),(0,i.fZ)(this.s,t),(0,i.fZ)(this.l,t))}toObject(){return{h:this.h,s:this.s,l:this.l}}}},38316:function(t,e,n){"use strict";n.d(e,{T:function(){return o}});var i=n(82917);class o{constructor(t,e,n){this.h=t,this.s=e,this.v=n}static fromObject(t){return!t||isNaN(t.h)||isNaN(t.s)||isNaN(t.v)?null:new o(t.h,t.s,t.v)}equalValue(t){return this.h===t.h&&this.s===t.s&&this.v===t.v}roundToPrecision(t){return new o((0,i.fZ)(this.h,t),(0,i.fZ)(this.s,t),(0,i.fZ)(this.v,t))}toObject(){return{h:this.h,s:this.s,v:this.v}}}},447:function(t,e,n){"use strict";n.d(e,{R:function(){return o}});var i=n(82917);class o{constructor(t,e,n){this.l=t,this.a=e,this.b=n}static fromObject(t){return!t||isNaN(t.l)||isNaN(t.a)||isNaN(t.b)?null:new o(t.l,t.a,t.b)}equalValue(t){return this.l===t.l&&this.a===t.a&&this.b===t.b}roundToPrecision(t){return new o((0,i.fZ)(this.l,t),(0,i.fZ)(this.a,t),(0,i.fZ)(this.b,t))}toObject(){return{l:this.l,a:this.a,b:this.b}}}o.epsilon=216/24389,o.kappa=24389/27},83343:function(t,e,n){"use strict";n.d(e,{t:function(){return o}});var i=n(82917);class o{constructor(t,e,n){this.l=t,this.c=e,this.h=n}static fromObject(t){return!t||isNaN(t.l)||isNaN(t.c)||isNaN(t.h)?null:new o(t.l,t.c,t.h)}equalValue(t){return this.l===t.l&&this.c===t.c&&this.h===t.h}roundToPrecision(t){return new o((0,i.fZ)(this.l,t),(0,i.fZ)(this.c,t),(0,i.fZ)(this.h,t))}toObject(){return{l:this.l,c:this.c,h:this.h}}}},2696:function(t,e,n){"use strict";n.d(e,{h:function(){return o}});var i=n(82917);class o{constructor(t,e,n,i){this.r=t,this.g=e,this.b=n,this.a="number"!=typeof i||isNaN(i)?1:i}static fromObject(t){return!t||isNaN(t.r)||isNaN(t.g)||isNaN(t.b)?null:new o(t.r,t.g,t.b,t.a)}equalValue(t){return this.r===t.r&&this.g===t.g&&this.b===t.b&&this.a===t.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round((0,i.cY)(this.r,0,255))},${Math.round((0,i.cY)(this.g,0,255))},${Math.round((0,i.cY)(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round((0,i.cY)(this.r,0,255))},${Math.round((0,i.cY)(this.g,0,255))},${Math.round((0,i.cY)(this.b,0,255))},${(0,i.uZ)(this.a,0,1)})`}roundToPrecision(t){return new o((0,i.fZ)(this.r,t),(0,i.fZ)(this.g,t),(0,i.fZ)(this.b,t),(0,i.fZ)(this.a,t))}clamp(){return new o((0,i.uZ)(this.r,0,1),(0,i.uZ)(this.g,0,1),(0,i.uZ)(this.b,0,1),(0,i.uZ)(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(t){return(0,i.yi)((0,i.cY)(t,0,255))}}},40272:function(t,e,n){"use strict";n.d(e,{x:function(){return o}});var i=n(82917);class o{constructor(t,e,n){this.x=t,this.y=e,this.z=n}static fromObject(t){return!t||isNaN(t.x)||isNaN(t.y)||isNaN(t.z)?null:new o(t.x,t.y,t.z)}equalValue(t){return this.x===t.x&&this.y===t.y&&this.z===t.z}roundToPrecision(t){return new o((0,i.fZ)(this.x,t),(0,i.fZ)(this.y,t),(0,i.fZ)(this.z,t))}toObject(){return{x:this.x,y:this.y,z:this.z}}}o.whitePoint=new o(.95047,1,1.08883)},82917:function(t,e,n){"use strict";function i(t,e,n){return isNaN(t)||t<=e?e:t>=n?n:t}function o(t,e,n){return isNaN(t)||t<=e?0:t>=n?1:t/(n-e)}function r(t,e,n){return isNaN(t)?e:e+t*(n-e)}function s(t){return t*(Math.PI/180)}function a(t){return t*(180/Math.PI)}function l(t){const e=Math.round(i(t,0,255)).toString(16);return 1===e.length?"0"+e:e}function c(t,e,n){return isNaN(t)||t<=0?e:t>=1?n:e+t*(n-e)}function u(t,e,n){if(t<=0)return e%360;if(t>=1)return n%360;const i=(e-n+360)%360;return i<=(n-e+360)%360?(e-i*t+360)%360:(e+i*t+360)%360}n.d(e,{AG:function(){return u},Fv:function(){return o},Ht:function(){return s},cY:function(){return r},fZ:function(){return d},t7:function(){return c},uZ:function(){return i},vi:function(){return a},yi:function(){return l}});Math.PI;function d(t,e){const n=Math.pow(10,e);return Math.round(t*n)/n}},11162:function(t,e,n){"use strict";n.d(e,{b4:function(){return l},hg:function(){return u},in:function(){return c},pJ:function(){return a}});var i=n(2696),o=n(82917);const r=/^rgb\(\s*((?:(?:25[0-5]|2[0-4]\d|1\d\d|\d{1,2})\s*,\s*){2}(?:25[0-5]|2[0-4]\d|1\d\d|\d{1,2})\s*)\)$/i,s=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function a(t){return s.test(t)}function l(t){return r.test(t)}function c(t){const e=s.exec(t);if(null===e)return null;let n=e[1];if(3===n.length){const t=n.charAt(0),e=n.charAt(1),i=n.charAt(2);n=t.concat(t,e,e,i,i)}const r=parseInt(n,16);return isNaN(r)?null:new i.h((0,o.Fv)((16711680&r)>>>16,0,255),(0,o.Fv)((65280&r)>>>8,0,255),(0,o.Fv)(255&r,0,255),1)}function u(t){const e=r.exec(t);if(null===e)return null;const n=e[1].split(",");return new i.h((0,o.Fv)(Number(n[0]),0,255),(0,o.Fv)(Number(n[1]),0,255),(0,o.Fv)(Number(n[2]),0,255),1)}},97380:function(t,e,n){"use strict";n.d(e,{i:function(){return i}});const i={horizontal:"horizontal",vertical:"vertical"}},54256:function(t,e,n){"use strict";function i(...t){return t.reduce(((t,e)=>{const n=t.length?" ":"",o=Array.isArray(e)&&e[1]?i.call(null,e[0]):"function"==typeof e?e():"string"==typeof e?e:"";return o.length?t+n+o:t}),"")}n.d(e,{A:function(){return i}})},7986:function(t,e,n){"use strict";function i(...t){return t.every((t=>t instanceof HTMLElement))}function o(t,e){if(!t||!e||!i(t))return;return Array.from(t.querySelectorAll(e)).filter((t=>null!==t.offsetParent))}n.d(e,{Re:function(){return i},UM:function(){return o}})},94537:function(t,e,n){"use strict";n.d(e,{BE:function(){return o},BI:function(){return d},CX:function(){return c},Kh:function(){return a},SB:function(){return s},iF:function(){return i},kL:function(){return l},mr:function(){return r},oM:function(){return h},tU:function(){return u},uf:function(){return p}});const i="ArrowDown",o="ArrowLeft",r="ArrowRight",s="ArrowUp",a="End",l="Enter",c="Escape",u="Home",d=" ",h="Tab",p={ArrowDown:i,ArrowLeft:o,ArrowRight:r,ArrowUp:s}},59997:function(t,e,n){"use strict";var i;n.d(e,{N:function(){return i}}),function(t){t.ltr="ltr",t.rtl="rtl"}(i||(i={}))},97108:function(t,e,n){"use strict";function i(t,e,n){return n<t?e:n>e?t:n}function o(t,e,n){return Math.min(Math.max(n,t),e)}function r(t,e,n=0){return[e,n]=[e,n].sort(((t,e)=>t-e)),e<=t&&t<n}n.d(e,{Z2:function(){return r},b9:function(){return o},wt:function(){return i}})},62512:function(t,e,n){"use strict";n.d(e,{EL:function(){return o},TF:function(){return s},WU:function(){return r}});let i=0;function o(t=""){return`${t}${i++}`}function r(t,...e){return t.replace(/{(\d+)}/g,(function(t,n){if(n>=e.length)return t;const i=e[n];return"number"==typeof i||i?i:""}))}function s(t){return!t||!t.trim()}},22798:function(t,e,n){"use strict";var i;n.d(e,{H:function(){return i}}),function(t){t.Canvas="Canvas",t.CanvasText="CanvasText",t.LinkText="LinkText",t.VisitedText="VisitedText",t.ActiveText="ActiveText",t.ButtonFace="ButtonFace",t.ButtonText="ButtonText",t.Field="Field",t.FieldText="FieldText",t.Highlight="Highlight",t.HighlightText="HighlightText",t.GrayText="GrayText"}(i||(i={}))},79971:function(t,e,n){"use strict";n.d(e,{kU:function(){return x}});var i=n(33940),o=n(28904),r=n(42590);class s extends o.H{constructor(){super(...arguments),this.appearance="primary"}}(0,i.gn)([r.Lj],s.prototype,"appearance",void 0),(0,i.gn)([(0,r.Lj)({attribute:"fill"})],s.prototype,"fill",void 0),(0,i.gn)([(0,r.Lj)({attribute:"color"})],s.prototype,"color",void 0),(0,i.gn)([r.Lj],s.prototype,"download",void 0),(0,i.gn)([r.Lj],s.prototype,"href",void 0),(0,i.gn)([r.Lj],s.prototype,"hreflang",void 0),(0,i.gn)([r.Lj],s.prototype,"ping",void 0),(0,i.gn)([r.Lj],s.prototype,"referrerpolicy",void 0),(0,i.gn)([r.Lj],s.prototype,"rel",void 0),(0,i.gn)([r.Lj],s.prototype,"target",void 0),(0,i.gn)([r.Lj],s.prototype,"type",void 0);const a=n(49218).dy`<a class="control" part="control" download="${t=>t.download}" href="${t=>t.href}" hreflang="${t=>t.hreflang}" ping="${t=>t.ping}" referrerpolicy="${t=>t.referrerpolicy}" rel="${t=>t.rel}" target="${t=>t.target}" type="${t=>t.type}" style="${t=>t.fill&&t.color?`background-color: var(--ad-label-fill-${t.fill}); color: var(--ad-label-color-${t.color})`:void 0}"><slot></slot></a>`;var l=n(78923),c=n(27186),u=n(67739),d=n(29717),h=n(53131),p=n(3490),f=n(55135),g=n(26512),v=n(42689),m=n(17993);const b=l.i`
    ${(0,c.j)("inline-block")} :host{box-sizing:border-box;font-family:${h.S};
        font-size: ${p.G};
        font-weight: 400;
        ${""} z-index:4}.control{text-align:center;border-radius:calc(${f.UW} * 1px);
        padding: 0 6px;
        min-width: 24px;
        text-decoration: none;
        height: 16px;
        border: calc(${g.H} * 1px) solid ${v.C};
        color: ${v.C};
    }

    .control:${u.b}{outline:none;border:calc(${g.H} * 1px) solid ${m.yG};
    }
`.withBehaviors((0,d.vF)(l.i` :host{forced-color-adjust:auto}`));var y=n(44475);const x=s.compose({name:`${y.j.prefix}-ad-label`,template:a,styles:b,shadowOptions:{delegatesFocus:!0}})},44545:function(t,e,n){"use strict";n.d(e,{Xe:function(){return _}});var i=n(33940),o=n(42590),r=n(99452),s=n(94537),a=n(23526),l=n(28904);class c extends l.H{}class u extends((0,a.Um)(c)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class d extends u{onTitleClicked(){this.$emit("action-title-clicked")}handleTextInput(){this.inputControl&&(this.value=this.inputControl.value,this.$emit("action-text-input",this.inputControl.value))}addToWatchlist(t){this.inputControl&&(this.inputControl.value="",this.value=""),this.$emit("action-add-to-watchlist",t)}handleOnKeyDownSearchBox(t){if(!this.moneyCardContentData.showSuggestions)return!0;switch(t.key){case s.SB:t.preventDefault(),this.activeSuggestion=this.searchSuggestions.length-1,this.activeId=this.searchSuggestions[this.activeSuggestion].quoteId,this.focusSelectedElement();break;case s.iF:t.preventDefault(),this.activeSuggestion=0,this.activeId=this.searchSuggestions[this.activeSuggestion].quoteId,this.focusSelectedElement();break;default:return!0}return!0}focusSelectedElement(){this.selectedSuggestion.querySelectorAll("li").forEach((t=>{if(t.id===this.activeId){t.focus()}}))}handleOnKeyDownAutoSuggestBox(t){switch(t.key){case s.iF:t.preventDefault(),this.searchSuggestions.length>0&&(this.activeSuggestion=(this.activeSuggestion+1)%this.searchSuggestions.length,this.activeId=this.searchSuggestions[this.activeSuggestion].quoteId);break;case s.SB:t.preventDefault(),this.searchSuggestions.length>0&&(this.activeSuggestion=(this.activeSuggestion+this.searchSuggestions.length-1)%this.searchSuggestions.length,this.activeId=this.searchSuggestions[this.activeSuggestion].quoteId);break;case s.BI:case s.kL:if(t.preventDefault(),this.searchSuggestions.length>0){this.inputControl.value="",this.activeSuggestion=-1;this.selectedSuggestion.querySelectorAll("li").forEach((t=>{if(t.id===this.activeId){t.click()}}))}break;case s.CX:t.preventDefault(),this.activeSuggestion=-1,this.inputControl.value="",this.$emit("action-text-input",this.inputControl.value);break;default:return}}getSuggestionClass(t,e,n){return t===this.activeId?n:e}}(0,i.gn)([(0,o.Lj)({attribute:"layout"})],d.prototype,"layout",void 0),(0,i.gn)([r.LO],d.prototype,"moneyCardContentData",void 0),(0,i.gn)([r.LO],d.prototype,"searchSuggestions",void 0),(0,i.gn)([r.LO],d.prototype,"goBackTelemetryTag",void 0),(0,i.gn)([r.LO],d.prototype,"addToWatchlistTelemetryTag",void 0),(0,i.gn)([r.LO],d.prototype,"activeSuggestion",void 0),(0,i.gn)([r.LO],d.prototype,"activeId",void 0);var h=n(49218),p=n(41472),f=n(93703),g=n(89150);const v=h.dy`<li id="${t=>t.quoteId}" tabindex="0" active=${(t,e)=>t.quoteId===e.parent.activeId||null} class="${(t,e)=>e.parent.getSuggestionClass(t.quoteId,"suggestion-entry","suggestion-entry-selected")}" part="${(t,e)=>e.parent.getSuggestionClass(t.quoteId,"suggestion-entry","suggestion-entry-selected")}" aria-label="${t=>t.longName} ${t=>t.exchangeName}" @click="${(t,e)=>e.parent.addToWatchlist(t.quoteId)}" data-t="${(t,e)=>e.parent.addToWatchlistTelemetryTag}"><div class="suggestion-item" part="suggestion-item"><div class="suggestion-company" part="suggestion-company"><span class="suggestion-symbol" part="suggestion-symbol">${t=>t.equitySymbol}</span><span class="suggestion-name" part="suggestion-name">${t=>t.longName}</span></div><div class="suggestion-market" part="suggestion-market"><span class="suggestion-market-str">${t=>t.exchangeName}</span></div><div class="suggestion-add-icon"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17 9.53v.94h-6.53V17h-.94v-6.53H3v-.94h6.53V3h.94v6.53H17z" /></svg></div></div></li>`,m=h.dy`<div class="search-area" part="search-area"><div class="search-icon" part="search-icon"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 3a5.5 5.5 0 014.23 9.02l4.12 4.13a.5.5 0 01-.63.76l-.07-.06-4.13-4.12A5.5 5.5 0 118.5 3zm0 1a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" /></svg></div><input class="search-input" part="search-input" type="search" autofocus="autofocus" @input=${t=>t.handleTextInput()} @keydown="${(t,e)=>t.handleOnKeyDownSearchBox(e.event)}" aria-label="${t=>{var e;return null===(e=t.moneyCardContentData)||void 0===e?void 0:e.searchPlaceholder}}" placeholder="${t=>{var e;return null===(e=t.moneyCardContentData)||void 0===e?void 0:e.searchPlaceholder}}" :value="${t=>t.value}" ${(0,p.i)("inputControl")} />${(0,f.g)((t=>{var e;return!0===(null===(e=t.moneyCardContentData)||void 0===e?void 0:e.showSuggestions)}),h.dy`<ul class="suggestions-list" part="suggestions-list" tabindex="-1" @keydown="${(t,e)=>t.handleOnKeyDownAutoSuggestBox(e.event)}" ${(0,p.i)("selectedSuggestion")}>${(0,g.rx)(((t,e)=>t.searchSuggestions),v)}</ul>`)} ${(0,f.g)((t=>{var e;return!0===(null===(e=t.moneyCardContentData)||void 0===e?void 0:e.noSuggestion)}),h.dy`<div class="suggestions-list" part="suggestions-list"><div class="no-suggestion-str">${t=>{var e;return null===(e=t.moneyCardContentData)||void 0===e?void 0:e.noSuggestionHint}}</div></div>`)}</div>`,b=h.dy`<div class="title" part="title"><button class="title-button" part="title-button" @click="${t=>t.onTitleClicked()}" aria-label="${t=>{var e;return null===(e=t.moneyCardContentData)||void 0===e?void 0:e.goBackLabel}}" data-t="${t=>t.goBackTelemetryTag}"><span class="title-content">&lrm;${t=>{var e;return null===(e=t.moneyCardContentData)||void 0===e?void 0:e.titleContent}}</span></button></div>${m}
`;var y=n(78923),x=n(27186),w=n(29717),$=n(67739),C=n(16549),k=n(74449),S=n(2658),T=n(28632),L=n(42689),O=n(27782),I=n(80260),A=n(62734),H=n(53131),D=n(35680),F=n(22674),E=n(22798);const B=y.i` .suggestion-add-icon{padding-left:10px}`,R=y.i` .suggestion-add-icon{padding-right:10px}`,j=y.i`
        ${(0,x.j)("grid")} :host{box-sizing:border-box;position:relative;width:100%;outline:none;padding:12px 16px;height:100%;grid-template-rows:auto 1fr}:host([layout="full"]) .title{align-items:center;display:grid;grid-column-gap:8px;grid-template-columns:1fr auto;height:24px;margin-bottom:11px}:host([layout="half"]) .title{align-items:center;display:grid;grid-template-columns:1fr auto;grid-column-gap:8px;margin-bottom:8px;height:16px}.title-button{border:none;display:flex;font-size:${C.s};
            line-height: ${C.v};
            font-weight: 500;
            color: ${k.Q};background-color:transparent;outline:none;cursor:pointer;padding:0px}.title-button:focus{text-decoration:underline}.title-content{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-inline-end:12px}.search-area{display:grid;grid-template-columns:auto 1fr;height:calc(${S.i} * 1px);
            position: relative;
            border: 1px solid ${T.ak}}.search-icon{width:20px;padding:6px 10px}svg path{fill:${L.C}}.search-input{color:${L.C};
            background: transparent;
            font-size: ${O.c};
            line-height: ${O.R};
            height: calc(${S.i} * 1px);border:none;outline:none}input[type="search"]::-webkit-search-decoration,input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-results-button,input[type="search"]::-webkit-search-results-decoration{display:none}.suggestion-add-icon{padding-left:10px}.suggestions-list{margin:0px;display:block;position:absolute;box-sizing:border-box;top:40px;width:100%;padding:4px;background:${I.jq};
            --elevation: 10;
            ${A.XC};z-index:9999;border:1px solid transparent}.no-suggestion-str{margin:3px 9px;font-size:${O.c};
            line-height: ${O.R}}.suggestion-entry-selected{font-family:${H.S};
            outline: none;
            list-style: none;
            border: none;
            width: 258px;
            height: 47px;
            padding: 0px;
            background: ${D.Xi};text-decoration:none;cursor:pointer}.suggestion-entry{border:none;outline:none;list-style:none;width:258px;height:47px;padding:0px;background:${I.jq};text-decoration:none;cursor:pointer}.suggestion-entry:hover .suggestion-item{background:${D.Xi}}.suggestion-entry,.search-input,.title-button{font-family:${H.S}}.suggestion-item{display:grid;grid-template-columns:140px 66px 32px;grid-column-gap:2px;height:40px;padding:5px 8px 2px 8px}.suggestion-company{display:grid;text-align:start;grid-template-rows:20px 20px}.suggestion-add-icon{padding-top:9px}.suggestion-symbol{display:block;font-weight:800;font-size:${O.c};
            line-height: ${O.R};
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: ${L.C}}.suggestion-name{display:block;font-weight:600;font-size:${C.s};
            line-height: ${C.v};
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: ${L.C}}.suggestion-market{display:flex;position:relative;padding-top:8px}.suggestion-market-str{position:absolute;right:0px;font-weight:600;text-align:end;font-size:${C.s};
            line-height: ${C.v};
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: ${L.C};
        }
    `.withBehaviors(new F.O(B,R),(0,w.vF)(y.i` :host{forced-color-adjust:auto}svg path{fill:${E.H.ButtonText};
            }
            .suggestion-entry:hover .suggestion-item,
            .suggestion-entry:${$.b} .suggestion-item{forced-color-adjust:none;background:${E.H.Highlight};
            }
            .suggestion-entry:hover .suggestion-item *,
            .suggestion-entry:hover .suggestion-item svg path,
            .suggestion-entry:${$.b} .suggestion-item *,
            .suggestion-entry:${$.b} .suggestion-item svg path{color:${E.H.HighlightText};
                fill: currentcolor;
            }
        `));var P=n(44475);const _=d.compose({name:`${P.j.prefix}-add-watchlist-money-card`,template:b,styles:j})},71783:function(t,e,n){"use strict";n.d(e,{x:function(){return o}});var i=n(28904);class o extends i.H{handleImageContentChange(){this.imageContainer.classList.toggle("image",this.image.assignedNodes().length>0)}}},68464:function(t,e,n){"use strict";n.d(e,{B4:function(){return m}});var i=n(71783),o=n(49218),r=n(41472);const s=o.dy`<span part="image" ${(0,r.i)("imageContainer")}><slot name="image" ${(0,r.i)("image")} @slotchange=${t=>t.handleImageContentChange()}></slot></span><span part="content" class="content"><slot></slot></span>`;var a=n(78923),l=n(27186),c=n(29717),u=n(53131),d=n(16549),h=n(74449),p=n(40009),f=n(22798);const g=a.i`
        ${(0,l.j)("inline-flex")} :host{box-sizing:border-box;font-family:${u.S};
            font-size: ${d.s};
            font-weight: 400;
            line-height: ${d.v};
            align-items: center;
            color: ${h.Q};min-height:16px}.content{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.image{display:flex;margin-inline-end:calc(${p._5} * 2px);
        }
    `.withBehaviors((0,c.vF)(a.i` :host,.content{color:${f.H.CanvasText};
                    fill: currentcolor;
                }
            `));var v=n(44475);const m=i.x.compose({name:`${v.j.prefix}-attribution`,template:s,styles:g})},78386:function(t,e,n){"use strict";n.d(e,{$:function(){return i},u:function(){return c}});var i,o=n(33940),r=n(28904),s=n(42590),a=n(99452),l=n(78227);!function(t){t.default="default",t.condensed="condensed",t.infoPane="infoPane",t.infoPane1x3y="infoPane1x3y",t.infoPaneSplitVertical="infoPaneSplitVertical",t.infoPaneSplitHorizontal="infoPaneSplitHorizontal"}(i||(i={}));class c extends r.H{constructor(){super(...arguments),this.layout=i.default,this.headinglevel=3}handleStartActionsContentChange(){this.startActionsContainer.classList.toggle("start-actions",this.startActions.assignedNodes().length>0)}handleEndActionsContentChange(){this.endActionsContainer.classList.toggle("end-actions",this.endActions.assignedNodes().length>0)}abstractChanged(){this.$fastController.isConnected&&(this.hasAbstract=this.abstract.length>0)}handleMediaContentChange(){this.mediaContainer.classList.toggle("media",this.media.assignedNodes().length>0)}handleContentCardLinkClick(t){return this.$emit("link-invoked",t),!0}connectedCallback(){super.connectedCallback(),this.addEventListener("mouseover",this.mouseOver),this.addEventListener("mouseout",this.mouseOut),this.addEventListener("focusin",this.focusIn),this.addEventListener("focusout",this.focusOut)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mouseover",this.mouseOver),this.removeEventListener("mouseout",this.mouseOut),this.removeEventListener("focusin",this.focusIn),this.removeEventListener("focusout",this.focusOut)}mouseOver(){this.setExpanded(!0),this.hasHover=!0}mouseOut(){this.hasFocus||this.setExpanded(!1),this.hasHover=!1}focusIn(){this.setExpanded(!0),this.hasFocus=!0}focusOut(){this.hasHover||this.setExpanded(!1),this.hasFocus=!1}filteredContentIndicator(){return this.contentIndicatorNodes.filter((t=>t instanceof l.K))}setExpanded(t){this.filteredContentIndicator().forEach((e=>e.expanded=t))}}(0,o.gn)([s.Lj],c.prototype,"layout",void 0),(0,o.gn)([(0,s.Lj)({attribute:"heading-level",mode:"fromView",converter:s.Id})],c.prototype,"headinglevel",void 0),(0,o.gn)([(0,s.Lj)({mode:"fromView"})],c.prototype,"href",void 0),(0,o.gn)([a.LO],c.prototype,"isGrid",void 0),(0,o.gn)([a.LO],c.prototype,"anchorTelemetryTag",void 0),(0,o.gn)([a.LO],c.prototype,"mediaNodes",void 0),(0,o.gn)([a.LO],c.prototype,"hasAbstract",void 0),(0,o.gn)([a.LO],c.prototype,"abstract",void 0),(0,o.gn)([a.LO],c.prototype,"iconSlottedNodes",void 0),(0,o.gn)([(0,s.Lj)({attribute:"image-priority",mode:"boolean"})],c.prototype,"imagePriority",void 0),(0,o.gn)([s.Lj],c.prototype,"target",void 0),(0,o.gn)([a.LO],c.prototype,"hoverActionsSlottedNodes",void 0),(0,o.gn)([a.LO],c.prototype,"contentIndicatorNodes",void 0)},28274:function(t,e,n){"use strict";n.d(e,{On:function(){return F}});var i=n(78386),o=n(49218),r=n(41472),s=n(93703),a=n(99026),l=n(95185),c=n(47548);const u=o.dy`<div class="footer ${t=>t.hasAbstract?"has-abstract-footer":""}" part="footer"><span part="start-actions" ${(0,r.i)("startActionsContainer")}><slot name="start-actions" ${(0,r.i)("startActions")} @slotchange=${t=>t.handleStartActionsContentChange()}></slot></span><span part="end-actions" ${(0,r.i)("endActionsContainer")}><slot name="end-actions" ${(0,r.i)("endActions")} @slotchange=${t=>t.handleEndActionsContentChange()}></slot></span></div>`,d=o.dy`<div style=" background: linear-gradient(265deg, rgb(18, 113, 3) 0%, rgb(69, 153, 3) 100%); display: flex; border-radius: 4px; margin-left: 10px; margin-top: 10px; position: relative; padding-left: 2px; padding-top: 0px; align-items:center; "><img class="delivery-icon" loading="lazy" src="https://assets.msn.com/staticsb/statics/pr-3980746/shopping/deliveryTruckIcon.svg"><span style=" text-transform: uppercase; color: white; font-size: var(--annotation-font-size, var(--type-ramp-minus-1-font-size)); padding:2px; align-items: center; ">Free shipping</span></div>`,h=/\d+% cash ?back/i,p=o.dy`<div style=" background: linear-gradient(270deg, rgb(21, 61, 219) 0%, rgb(0, 113, 246) 100%); display: flex; border-radius: 4px; margin-left: 10px; margin-top: 10px; position: relative; padding-left: 2px; padding-top: 0px; align-items:center; "><span style=" text-transform: uppercase; color: white; font-size: var(--annotation-font-size, var(--type-ramp-minus-1-font-size)); padding:2px; align-items: center; ">${t=>{var e,n;return null!==(n=t.title&&(null===(e=t.title.match(h))||void 0===e?void 0:e[0]))&&void 0!==n?n:"Earn cash back"}}</span></div>`,f=o.dy`<div style="display: flex;">${(0,s.g)((t=>t),p)} ${(0,s.g)((t=>t),d)}</div>`,g=o.dy`<template ${(0,a.N)({property:"mediaNodes",filter:(0,l.R)("[slot='media'], [slot='icon']")})}><span part="background-image" class="background-image"><slot name="background-image" ${(0,r.i)("backgroundImage")}></slot></span>${(0,s.g)((t=>"contentcard_BuyDirectCard"==t.id),f)}<div class="mask" part="mask"></div><div class="body ${t=>t.hasAbstract?"has-abstract":""} ${t=>t.isGrid?"grid":""}" part="body">${(0,s.g)((t=>{var e;return(null===(e=null==t?void 0:t.mediaNodes)||void 0===e?void 0:e.length)>0}),o.dy`<div class="media-wrapper" part="media-wrapper"><div part="media" ${(0,r.i)("mediaContainer")}><slot name="media" ${(0,r.i)("media")} @slotchange=${t=>t.handleMediaContentChange()}></slot><slot name="content-indicator" ${(0,c.Q)("contentIndicatorNodes")}></slot><span part="icon" ${(0,r.i)("iconContainer")} class="${t=>t.iconSlottedNodes&&t.iconSlottedNodes.length?"icon":"icon__hidden"}"><slot name="icon" ${(0,r.i)("icon")} ${(0,c.Q)("iconSlottedNodes")}></slot></span></div></div>`)}<div class="heading-container" part="heading-container">${(0,s.g)((t=>{var e;return 0===(null===(e=null==t?void 0:t.mediaNodes)||void 0===e?void 0:e.length)}),o.dy`<slot name="content-indicator" ${(0,c.Q)("contentIndicatorNodes")}></slot>`)}<slot name="attribution"></slot><span class="heading-wrapper" part="heading-wrapper" role="heading" aria-level=${t=>t.headinglevel}><a class="heading" part="heading" href=${t=>t.href?t.href:void 0} target=${t=>t.target?t.target:void 0} @click=${(t,e)=>t.handleContentCardLinkClick(e.event)} data-t="${t=>t.anchorTelemetryTag}"><slot></slot></a></span></div><div class="abstract" part="abstract"><slot name="abstract" ${(0,c.Q)("abstract")}></slot></div>${(0,s.g)((t=>t.layout!==i.$.default),u)}</div>${(0,s.g)((t=>t.layout===i.$.default),u)}<span part="hover-actions" class="${t=>t.hoverActionsSlottedNodes&&t.hoverActionsSlottedNodes.length?"hover-actions":"hover-actions__hidden"}"><slot name="hover-actions" ${(0,c.Q)("hoverActionsSlottedNodes")}></slot></span><slot name="call-to-action"></slot></template>`;var v=n(27186),m=n(67739),b=n(29717),y=n(78923),x=n(22798),w=n(53131),$=n(16549),C=n(74449),k=n(27782),S=n(42689),T=n(32572),L=n(38492),O=n(22674);const I=y.i` :host([layout="default"]) .media-wrapper{float:right}`,A=y.i` :host([layout="default"]) .media-wrapper{float:left}`,H=y.i`
    ${(0,v.j)("flex")} :host{--icon-size:24px;position:relative;width:auto;box-sizing:border-box;font-family:${w.S};flex-direction:column;outline:none;height:100%;overflow:hidden}:host(:hover) .hover-actions{opacity:1;transition:opacity 0.2s ease-in-out}.body{display:grid;justify-content:center;row-gap:8px;column-gap:10px;grid-template-columns:1fr auto;grid-template-rows:auto}:host([layout="default"]) .body .abstract{display:none}:host([layout="default"]) .body{display:block}:host([layout="default"]) .body.grid{display:grid}:host([layout="default"]) .body.grid .media-wrapper{float:none}:host([layout="default"]) .has-abstract .heading{-webkit-line-clamp:var(--heading-max-lines,2)}:host([layout="default"]) .has-abstract .media-wrapper{margin-inline-start:16px}:host([image-priority]) .has-abstract .media-wrapper{margin-inline-start:0}.footer{padding-inline-start:var(--footer-start-padding,16px);padding-inline-end:var(--footer-start-padding,16px);padding-top:var(--footer-padding-top,0);padding-bottom:var(--footer-padding-bottom,4px);margin-top:auto;font-size:var(--footer-font-size,${$.s});
        line-height: var(--footer-line-height, ${$.v})}.footer,.start-actions,.end-actions{display:flex;flex-direction:row;align-items:center;justify-content:space-between;color:${C.Q};
        fill: ${C.Q}}.footer__hidden{display:none}.hover-actions{display:flex;flex-direction:column;position:absolute;top:8px;z-index:2;opacity:0}.hover-actions__hidden{display:none}.hover-actions:focus-within{opacity:1}.heading-container{grid-row:1;display:flex;flex-direction:column;padding-inline-start:var(--heading-start-padding,16px);padding-inline-end:var(--heading-end-padding,16px);padding-bottom:0;padding-top:16px}.heading-wrapper a:after{bottom:0;content:"";height:100%;left:0;position:absolute;right:0;top:0;width:100%;z-index:1}:host([layout="condensed"]) .body{gap:0}:host([layout="condensed"]) .footer{grid-row:2;grid-column-start:1;grid-column-end:var(--footer-grid-column-end,auto);padding-inline-start:16px}:host([layout="condensed"]) .media-wrapper{position:relative;grid-row:1 / span 2;margin-top:5px}:host([layout="condensed"]) .heading-container{padding-top:0px;--heading-end-padding:12px}:host([layout="condensed"]) ::slotted([slot="attribution"]){margin-bottom:0px}.icon{position:absolute;display:inline-flex;top:auto;bottom:0;justify-content:center;align-items:center;margin:0 0 4px 0;margin-inline-start:4px}.hover-actions{inset-inline-end:8px}.icon{inset-inline-start:0}:host([layout="infoPane1x3y"]) ::slotted([slot="content-indicator"]),:host([layout="infoPane"]) ::slotted([slot="content-indicator"]),.media-wrapper ::slotted([slot="content-indicator"]){inset-inline-start:8px}.icon__hidden{display:none}::slotted([slot="icon"]){width:var(--icon-size);height:var(--icon-size);fill:#FFF}::slotted([slot="attribution"]){margin-bottom:6px}::slotted([slot="abstract"]){margin:2px 0}.media-wrapper{grid-row:1;grid-column:2;margin-inline-end:var(--media-inline-padding,16px);margin-top:16px}.media{display:flex;position:relative}:host([image-priority]) .heading{-webkit-line-clamp:var(--heading-max-lines,2)}:host([image-priority]) .body{grid-template-columns:1}:host([image-priority]) .media-wrapper{grid-row:1;grid-column:span 2;margin:0}:host([image-priority]) .heading-container{grid-row:2;grid-column:span 2;padding-top:10px;padding-inline-start:var(--heading-start-padding,16px)}:host([image-priority]) ::slotted([slot="media"]),:host([layout="infoPaneSplitHorizontal"]) ::slotted([slot="media"]){border-radius:0px}:host([layout="infoPane"]) .media-wrapper,:host([layout="infoPane1x3y"]) .media-wrapper{grid-row:1;grid-column:1;margin-top:0;width:fit-content;height:fit-content}:host([layout="infoPane"]) .icon,:host([layout="infoPaneSplitVertical"]) .icon,:host([layout="infoPane1x3y"]) .icon{display:inline;left:0;top:0;margin:4px 0 0;margin-inline-start:4px}:host([layout="infoPaneSplitVertical"]) .icon{display:block}:host([layout="infoPaneSplitHorizontal"]) .icon{bottom:0px}:host([layout="infoPaneSplitHorizontal"]) .heading-container,:host([layout="infoPane"]) .heading-container,:host([layout="infoPane1x3y"]) .heading-container{align-self:end}:host([layout="infoPaneSplitHorizontal"]) .body,:host([layout="infoPane"]) .body,:host([layout="infoPane1x3y"]) .body{height:100%;grid-template-rows:1fr auto}::slotted([slot="call-to-action"]){width:calc(100% - 32px);grid-row:3;z-index:1;grid-column:1 / span 2;margin:0 16px}::slotted([slot="media"]){border-radius:calc(var(--content-card-corner-radius,2) * 2px)}:host([layout="default"]) .grid .heading-container{grid-area:initial !important}:host([layout="default"]) .has-abstract .abstract{display:block;padding:0 16px 16px 16px}.abstract{position:relative;margin:0;font-size:var(--abstract-font-size,${k.c});
        line-height: var(--abstract-line-height, ${k.R});
        font-weight: 400;
        grid-column: span 2;
        box-sizing: content-box;
        color: ${C.Q};padding:0 16px}::slotted([slot="start-actions"]),::slotted([slot="end-actions"]){z-index:2;display:grid;gap:5px;align-items:center;grid-auto-flow:column}::slotted([slot="call-to-action"]){z-index:2}::slotted(fluent-button[slot="start-actions"]),::slotted(fluent-button[slot="end-actions"]){color:${C.Q};
        fill: ${C.Q}}::slotted(fluent-button[appearance="stealth"]:not(:hover)),:slotted([slot="hover-actions"]:not(:hover)){background:transparent}.heading{text-decoration:none;outline:none;color:${S.C};
        font-size: var(--heading-font-size, ${T.P});
        line-height: var(--heading-line-height, ${T.b});font-weight:600;display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:var(--heading-max-lines,3);white-space:initial}.mask{display:none}.heading:hover,.heading:${m.b}{text-decoration:underline}.heading::after{position:absolute;content:"";top:0;left:0;right:0;bottom:0}:host([layout="infoPane"]),:host([layout="infoPane1x3y"]){justify-content:flex-end;border:none}:host(:not([layout="infoPane"])) .has-abstract-footer,:host(:not([layout="infoPane1x3y"])) .has-abstract-footer{position:absolute;bottom:0;right:0;left:0;background:${L.I};
        box-shadow: 0px -25px 15px ${L.I}}:host([layout="infoPane"]) .heading-container,:host([layout="infoPane1x3y"]) .heading-container{grid-column:1 / 3;z-index:1}:host([layout="infoPane"]) .has-abstract .heading-container,:host([layout="infoPane1x3y"]) .has-abstract .heading-container{grid-area:2/ 1 / span 2 / auto;--heading-start-padding:16px;--heading-end-padding:0;padding-bottom:12px;padding-top:8px;align-self:flex-start}:host([layout="infoPane"]) .abstract,:host([layout="infoPane1x3y"]) .abstract,:host([layout="infoPaneSplitHorizontal"]) .abstract{grid-row:2;grid-column:2;color:${S.C};padding:8px 16px 0 16px;align-self:end;display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:4}:host([layout="infoPane"]) .abstract,:host([layout="infoPane1x3y"]) .abstract{display:none}:host([layout="infoPane"]) .has-abstract,:host([layout="infoPane1x3y"]) .has-abstract{grid-template-columns:1fr 1fr;gap:0 10px}:host([layout="infoPane"]) .has-abstract .footer,:host([layout="infoPane1x3y"]) .has-abstract .footer{min-height:calc(40px - 4px)}:host([layout="infoPane"]) .has-abstract .abstract,:host([layout="infoPane1x3y"]) .has-abstract .abstract{display:-webkit-box;align-self:flex-end}:host([layout="infoPane"]) .mask,:host([layout="infoPane1x3y"]) .mask{display:flex;position:absolute;top:0;left:0;right:0;bottom:0;background-image:var(--mask-gradient,linear-gradient(to top,rgba(0,0,0,1),rgba(0,0,0,0) 176px))}:host([layout="infoPane1x3y"]) .mask{background-image:var(--mask-gradient,linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1) 69px,rgba(0,0,0,1)));top:257px}:host([layout="infoPane"]) .has-abstract .has-abstract-footer,:host([layout="infoPane1x3y"]) .has-abstract .has-abstract-footer{grid-row:3;grid-column:2;position:inherit;align-self:flex-end;max-height:40px}:host([layout="infoPane"]) .footer,:host([layout="infoPane1x3y"]) .footer{margin-top:unset;grid-row:2;grid-column:1 / span 2;padding-inline-start:16px;padding-inline-end:16px}:host([layout="infoPane"]) ::slotted(msft-attribution[slot="attribution"]),:host([layout="infoPane1x3y"]) ::slotted(msft-attribution[slot="attribution"]){color:${S.C};text-shadow:0px 0.4px 0.9px rgba(0,0,0,0.13),0px 0px 2.22px rgba(0,0,0,0.11)}:host([layout="infoPaneSplitVertical"]){grid-template-columns:304px 1fr;grid-template-rows:auto;background:${L.I}}:host([layout="infoPaneSplitVertical"]) ::slotted([slot="media"]){border-radius:0px}:host([layout="infoPaneSplitVertical"]) .media-wrapper{grid-row:1 / span 2;grid-column:1;margin:0}:host([layout="infoPaneSplitVertical"]) .heading-container{grid-row:1;grid-column:2;--heading-start-padding:4px;--heading-end-padding:16px;padding-bottom:0;padding-top:16px}:host([layout="infoPaneSplitVertical"]) .footer{grid-row:2;grid-column:2;padding-inline-start:0;padding-inline-end:16px;padding-top:0}:host([layout="infoPaneSplitHorizontal"]) .body{grid-template-columns:1fr 1fr;grid-template-rows:326px auto auto;row-gap:4px;background:${L.I}}:host([layout="infoPaneSplitHorizontal"]) .media-wrapper{grid-column:1 / span 2;margin:0}:host([layout="infoPaneSplitHorizontal"]) .heading-container{grid-column:1;grid-row:2 / span 2;--heading-start-padding:16px;--heading-end-padding:0;padding-bottom:12px;padding-top:12px}:host([layout="infoPaneSplitHorizontal"]) .footer{grid-column:2;grid-row:3;box-shadow:none}:host([layout="infoPaneSplitHorizontal"]) .abstract{color:inherit;align-self:inherit;padding:12px 16px 0 16px}.background-image{position:absolute;top:0;left:0;right:0;bottom:0}:host([layout="infoPane1x3y"]) .background-image{position:absolute;top:0;left:0;right:0;bottom:136px}.background-image ::slotted(img){width:100%;height:100%;object-fit:cover}:host([layout="infoPane1x3y"]) ::slotted([slot="content-indicator"]),:host([layout="infoPane"]) ::slotted([slot="content-indicator"]),.media-wrapper ::slotted([slot="content-indicator"]){position:absolute;top:8px;z-index:1}::slotted([slot="content-indicator"]){margin-bottom:26px;align-self:flex-start}`.withBehaviors(new O.O(I,A),(0,b.vF)(y.i` .heading{color:${x.H.LinkText};
                    background: ${x.H.ButtonFace}}.abstract{color:${x.H.ButtonText}}.icon{background-color:#000;height:fit-content}:host([layout="infoPane"]) .abstract,:host([layout="infoPane1x3y"]) .abstract,:host([layout="infoPaneSplitHorizontal"]) .abstract{color:${x.H.ButtonText};
                    background: ${x.H.ButtonFace}}.footer,.start-actions,.end-actions,::slotted([slot="start-actions"]),::slotted([slot="end-actions"]){background:${x.H.ButtonFace};
                    color: ${x.H.ButtonText};fill:currentcolor}:host([layout="infoPane"]) .mask,:host([layout="infoPane1x3y"]) .mask{background-image:none}:host([layout="infoPane"]) .has-abstract .footer,:host([layout="infoPane1x3y"]) .has-abstract .footer,:host([layout="infoPane"]) .footer,:host([layout="infoPane1x3y"]) .footer,:host(:not([layout="infoPane"])) .has-abstract-footer,:host(:not([layout="infoPane1x3y"])) .has-abstract-footer{background:${x.H.ButtonFace};box-shadow:none}::slotted(fluent-button[appearance="stealth"]:not(:hover)){background:${x.H.ButtonFace};
                }
            `));var D=n(44475);const F=i.u.compose({name:`${D.j.prefix}-content-card`,template:g,styles:H,shadowOptions:{delegatesFocus:!0}})},78227:function(t,e,n){"use strict";n.d(e,{K:function(){return a}});var i=n(33940),o=n(28904),r=n(42590),s=n(99452);class a extends o.H{constructor(){super(...arguments),this.expanded=!1}defaultItemsChanged(){this.$fastController.isConnected&&(this.shouldanimate=this.defaultItems.length>0)}}(0,i.gn)([(0,r.Lj)({mode:"boolean"})],a.prototype,"expanded",void 0),(0,i.gn)([s.LO],a.prototype,"defaultItems",void 0),(0,i.gn)([(0,r.Lj)({mode:"boolean",attribute:"animate"})],a.prototype,"shouldanimate",void 0)},20470:function(t,e,n){"use strict";n.d(e,{tO:function(){return $}});var i=n(78227),o=n(49218),r=n(47548);const s=o.dy`<span class="icon-container" part="icon-container" aria-hidden="true"><slot name="icon"></slot></span><span class="label-container" part="label-container"><span class="label" part="label"><slot ${(0,r.Q)({property:"defaultItems",filter:t=>{var e;return t instanceof HTMLElement&&null!==t.offsetParent||t instanceof Text&&!!(null===(e=t.textContent)||void 0===e?void 0:e.trim().length)}})}></slot></span></span>`;var a=n(53131),l=n(16549),c=n(22674),u=n(55135),d=n(27186),h=n(29717),p=n(78923),f=n(92059),g=n(22798);const v=p.i` :host::after{transform:translateX(-100%) translateX(20px)}:host([animate]) .label{transform:translateX(-100%)}`,m=p.i` :host::after{transform:translateX(100%) translateX(-20px)}:host([animate]) .label{transform:translateX(100%)}`,b=p.i` :host{color:#000}:host::after{background:rgba(255,255,255,0.46)}`,y=p.i` :host{color:#fff}:host::after{background:rgba(0,0,0,0.54)}`,x=p.i`
        ${(0,d.j)("inline-flex")} :host{align-items:center;box-sizing:border-box;contain:content;overflow:hidden}.label-container{overflow:hidden}:host,:host::after{${""} border-radius:4px}:host::after{content:"";height:100%;position:absolute;width:100%;z-index:-1}.icon-container,.label{min-height:20px;min-width:20px;display:flex;align-items:center;justify-content:center;fill:currentcolor}:host([animate])::after,.label{transition:transform 250ms cubic-bezier(0.17,0.17,0,1)}.label{font-family:${a.S};
            font-size: ${l.s};
            font-weight: 600;
            line-height: ${l.v};text-overflow:ellipsis;padding:0 4px}:host([expanded][animate])::after,:host([expanded][animate]) .label{transform:translateX(0%)}.label{transform:translateX(-100%)}::slotted([slot="icon"]){display:block;fill:currentcolor}`.withBehaviors(new c.O(v,m),new f.Y(b,y),(0,h.vF)(p.i` :host{forced-color-adjust:auto}::slotted([slot="icon"]){color:${g.H.ButtonText};fill:currentcolor}.icon-container,:host([expanded][animate]) .label,:host::after{background:${g.H.ButtonFace};
                    color: ${g.H.ButtonText};
                    fill: currentcolor;
                    border-radius: calc(${u.UW} * 10px)}.label{background:transparent}`));var w=n(44475);const $=i.K.compose({name:`${w.j.prefix}-content-indicator`,template:s,styles:x})},44475:function(t,e,n){"use strict";n.d(e,{Z:function(){return o},j:function(){return i}});const i=Object.freeze({prefix:"msft",shadowRootMode:"open",registry:customElements}),o=Object.freeze({prefix:"msn",shadowRootMode:"open",registry:customElements})},59230:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var i=n(31699),o=n(31393);const r=o.K.create({trustedType:{createHTML:t=>t.indexOf("<img")>-1&&-1==t.indexOf(":src")&&(t.indexOf('src="fast-')>-1||t.indexOf("src=fast-")>-1)?t.replaceAll("src=",":src="):t}});function s(){const t=navigator.userAgent.toLowerCase();t.indexOf("chrome")>-1||t.indexOf("edg")>-1?i.S.setPolicy(o.K.create()):i.S.setPolicy(r)}},90716:function(t,e,n){"use strict";n.d(e,{m3:function(){return w}});var i=n(90966),o=n(49218),r=n(47548),s=n(93703);const a=o.dy`<template><slot ${(0,r.Q)({property:"items",filter:t=>t instanceof HTMLElement&&null!==t.offsetParent})}></slot>${(0,s.g)((t=>t.layout===i.i.list),o.dy` <span class="topic">${t=>t.topic}</span> `)} ${t=>t.dividerTemplate}</template>`;var l=n(53131),c=n(27782),u=n(42689),d=n(38492),h=n(32572),p=n(22674),f=n(78923),g=n(27186),v=n(29717);const m=f.i` :host([layout="double"]) .divider-1{left:0}:host([layout="triple"]) .divider-1{left:0}:host([layout="triple"]) .divider-2{left:0}:host([layout="mosaic"]) .divider-1{left:0}:host([layout="mosaic"]) .divider-2{left:1px}`,b=f.i` :host([layout="double"]) .divider-1{right:0}:host([layout="triple"]) .divider-1{right:0}:host([layout="triple"]) .divider-2{right:0}:host([layout="mosaic"]) .divider-1{right:0}:host([layout="mosaic"]) .divider-2{right:1px}`,y=f.i`
        ${(0,g.j)("grid")} :host{box-sizing:border-box;font-family:${l.S};
            font-size: ${c.c};
            line-height: ${c.R};
            color: ${u.C};height:100%;width:100%;position:relative}:host([layout="single"]){grid-template-columns:1fr}:host([layout="double"]){grid-template-columns:1fr 1fr}:host([layout="split"]){grid-template-rows:1fr 1fr}:host([layout="triple"]){grid-template-columns:1fr 1fr 1fr}:host([layout="mosaic"]){grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}:host([layout="mosaic"]) ::slotted(:first-child){grid-row:1 / span 2;grid-column:1}:host([layout="mosaic"]) ::slotted(msft-content-card:not(:first-child)){--mask-gradient:linear-gradient(rgba(0,0,0,0),${d.I})}:host([layout="list"]){grid-template-rows:auto 1fr 1fr 1fr;grid-template-columns:3fr 2fr}:host([layout="list"]) ::slotted(:first-child){grid-row:1 / span 4;grid-column:1}:host([layout="list"]) ::slotted(msft-content-card:not(:first-child)){background:${d.I};
            --heading-font-size: ${c.c};
            --heading-line-height: ${c.R}}.topic{grid-row:1;grid-column:2;font-size:${h.P};
            line-height: ${h.b};
            background: ${d.I};padding:6px 12px}.divider{background:rgba(255,255,255,0.4);position:absolute;left:20px;right:20px;top:20px;bottom:20px;z-index:1;pointer-events:none;opacity:0}:host([layout="double"]) .divider-1{grid-column:2;width:1px;opacity:1}:host([layout="split"]) .divider-1{grid-row:2;height:1px;top:0;opacity:1}:host([layout="triple"]) .divider-1{grid-column:2;width:1px;opacity:1}:host([layout="triple"]) .divider-2{grid-column:3;width:1px;opacity:1}:host([layout="mosaic"]) .divider-1{grid-column:2;grid-row:1 / span 2;width:1px;opacity:1}:host([layout="mosaic"]) .divider-2{grid-column:2;grid-row:2;height:1px;top:0;opacity:1}`.withBehaviors(new p.O(m,b),(0,v.vF)(f.i` .divider{background:none}`));var x=n(44475);const w=i.P.compose({name:`${x.j.prefix}-info-pane-slide`,template:a,styles:y})},90966:function(t,e,n){"use strict";n.d(e,{P:function(){return u},i:function(){return i}});var i,o=n(33940),r=n(49218),s=n(28904),a=n(99452),l=n(42590);!function(t){t.single="single",t.double="double",t.split="split",t.triple="triple",t.mosaic="mosaic",t.list="list"}(i||(i={}));const c=new Map;class u extends s.H{constructor(){super(...arguments),this.dividerTemplate=null,this.layout=i.single}itemsChanged(t,e){this.$fastController.isConnected&&(this.dividerTemplate=function(t){if(c.has(t))return c.get(t);if(t<1)return c.set(t,null),null;const e=new Array(t).fill("").map(((t,e)=>r.dy`<div class="divider divider-${e+1}" part="divider"></div>`)).reduce(((t,e)=>r.dy`${t}${e}`));return c.set(t,e),e}(this.items.length-1))}}(0,o.gn)([a.LO],u.prototype,"items",void 0),(0,o.gn)([a.LO],u.prototype,"dividerTemplate",void 0),(0,o.gn)([l.Lj],u.prototype,"layout",void 0),(0,o.gn)([l.Lj],u.prototype,"topic",void 0)},70311:function(t,e,n){"use strict";n.d(e,{o8:function(){return P}});var i=n(44475),o=n(33940),r=n(28904),s=n(42590),a=n(99452),l=n(49218),c=n(93703);const u=l.dy`<svg width="12" height="20" viewBox="0 -1 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M2 7C2.14063 7 2.27083 7.02607 2.39063 7.07813C2.51041 7.1302 2.61459 7.20313 2.70313 7.29687C2.79687 7.3854 2.86979 7.4896 2.92187 7.6094C2.97396 7.7292 3 7.8594 3 8C3 8.1406 2.97396 8.2708 2.92187 8.3906C2.86979 8.5104 2.79687 8.6172 2.70313 8.71093C2.61459 8.79947 2.51041 8.8698 2.39063 8.92187C2.27083 8.97393 2.14063 9 2 9C1.85937 9 1.72917 8.97393 1.60937 8.92187C1.48959 8.8698 1.38281 8.79947 1.28906 8.71093C1.20052 8.6172 1.13021 8.5104 1.07813 8.3906C1.02604 8.2708 1 8.1406 1 8C1 7.8594 1.02604 7.7292 1.07813 7.6094C1.13021 7.4896 1.20052 7.3854 1.28906 7.29687C1.38281 7.20313 1.48959 7.1302 1.60937 7.07813C1.72917 7.02607 1.85937 7 2 7ZM8 7C8.1406 7 8.2708 7.02607 8.3906 7.07813C8.5104 7.1302 8.6146 7.20313 8.70313 7.29687C8.79687 7.3854 8.8698 7.4896 8.92187 7.6094C8.97393 7.7292 9 7.8594 9 8C9 8.1406 8.97393 8.2708 8.92187 8.3906C8.8698 8.5104 8.79687 8.6172 8.70313 8.71093C8.6146 8.79947 8.5104 8.8698 8.3906 8.92187C8.2708 8.97393 8.1406 9 8 9C7.8594 9 7.7292 8.97393 7.6094 8.92187C7.4896 8.8698 7.3828 8.79947 7.28907 8.71093C7.20053 8.6172 7.1302 8.5104 7.07813 8.3906C7.02607 8.2708 7 8.1406 7 8C7 7.8594 7.02607 7.7292 7.07813 7.6094C7.1302 7.4896 7.20053 7.3854 7.28907 7.29687C7.3828 7.20313 7.4896 7.1302 7.6094 7.07813C7.7292 7.02607 7.8594 7 8 7ZM14 7C14.1406 7 14.2708 7.02607 14.3906 7.07813C14.5104 7.1302 14.6146 7.20313 14.7031 7.29687C14.7969 7.3854 14.8698 7.4896 14.9219 7.6094C14.9739 7.7292 15 7.8594 15 8C15 8.1406 14.9739 8.2708 14.9219 8.3906C14.8698 8.5104 14.7969 8.6172 14.7031 8.71093C14.6146 8.79947 14.5104 8.8698 14.3906 8.92187C14.2708 8.97393 14.1406 9 14 9C13.8594 9 13.7292 8.97393 13.6094 8.92187C13.4896 8.8698 13.3828 8.79947 13.2891 8.71093C13.2005 8.6172 13.1302 8.5104 13.0781 8.3906C13.0261 8.2708 13 8.1406 13 8C13 7.8594 13.0261 7.7292 13.0781 7.6094C13.1302 7.4896 13.2005 7.3854 13.2891 7.29687C13.3828 7.20313 13.4896 7.1302 13.6094 7.07813C13.7292 7.02607 13.8594 7 14 7Z" /></svg>`;var d=l.dy`<msft-content-card href="${t=>t.href}" target="${(t,e)=>e.parent.target}" title="${t=>t.title}" data-t="${t=>t.telemetry_context&&t.telemetry_context.card}" :anchorTelemetryTag=${t=>t.telemetry_context&&t.telemetry_context.url}>${t=>t.title}<img slot="media" src="${t=>t.media_src}" alt="${t=>t.media_alt}" />${(0,c.g)((t=>t.content_indicator_icon),l.dy`<msft-content-indicator slot="content-indicator">${t=>t.content_indicator_icon}</msft-content-indicator>`)} ${(0,c.g)((t=>t.attribution_src||t.attribution_title),l.dy`<msft-attribution slot="attribution">${(0,c.g)((t=>t.attribution_src),l.dy`<img slot="image" src="${t=>t.attribution_src}" alt="${t=>t.attribution_alt}" />`)}<span class="attribution-container"><span class="attribution-title">${t=>t.attribution_title}</span>${(0,c.g)((t=>t.attribution_publishedDate),l.dy`<span class="attribution-separator">&middot;</span><span class="attribution-date">${t=>t.attribution_publishedDate}</span>`)}</span></msft-attribution>`)} ${(0,c.g)((t=>t.more_actions),l.dy` ${(0,c.g)((t=>t.comment_count),l.dy`<div slot="start-actions" class="like-button"><svg width="14" height="13" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg"><path d="M0 2.5C0 1.11929 1.11929 0 2.5 0H11.5C12.8807 0 14 1.11929 14 2.5V7.5C14 8.88071 12.8807 10 11.5 10H7.68787L4.62533 12.6797C3.99168 13.2342 3 12.7842 3 11.9422V10H2.5C1.11929 10 0 8.88071 0 7.5V2.5ZM2.5 1C1.67157 1 1 1.67157 1 2.5V7.5C1 8.32843 1.67157 9 2.5 9H4V11.8981L7.31213 9H11.5C12.3284 9 13 8.32843 13 7.5V2.5C13 1.67157 12.3284 1 11.5 1H2.5Z" /></svg><span>${t=>t.comment_count}</span></div>`)}<fluent-button appearance="stealth" class="actions-button" slot="end-actions" @click=${(t,e)=>e.parent.actionTriggered(t)} @keypress=${(t,e)=>e.parent.actionTriggered(t)} data-t="${t=>t.telemetry_context&&t.telemetry_context.button}">${u}</fluent-button>`)}</msft-content-card>`;const h='\n    <path d="M2 7a.942.942 0 0 1 .703.297A.941.941 0 0 1 3 8c0 .14-.026.27-.078.39a1.03 1.03 0 0 1-.531.532A.97.97 0 0 1 2 9a.97.97 0 0 1-.39-.078 1.103 1.103 0 0 1-.32-.211 1.103 1.103 0 0 1-.212-.32A.969.969 0 0 1 1 8a.969.969 0 0 1 .29-.703A.97.97 0 0 1 2 7Zm6 0a.941.941 0 0 1 .703.297A.941.941 0 0 1 9 8a.97.97 0 0 1-.078.39 1.03 1.03 0 0 1-.531.532A.97.97 0 0 1 8 9a.97.97 0 0 1-.39-.078 1.103 1.103 0 0 1-.32-.211 1.103 1.103 0 0 1-.212-.32A.97.97 0 0 1 7 8a.97.97 0 0 1 .29-.703A.97.97 0 0 1 8 7Zm6 0a.94.94 0 0 1 .703.297A.941.941 0 0 1 15 8a.97.97 0 0 1-.297.71A.97.97 0 0 1 14 9a.97.97 0 0 1-.39-.078 1.102 1.102 0 0 1-.32-.211 1.103 1.103 0 0 1-.212-.32A.97.97 0 0 1 13 8a.97.97 0 0 1 .29-.703A.97.97 0 0 1 14 7Z"/>\n',p=l.dy`<svg width="12" height="20" viewBox="0 -2 16 16" xmlns="http://www.w3.org/2000/svg">${h}</svg>`;var f=l.dy`<msft-content-card href="${t=>t.href}" layout="condensed" target="${(t,e)=>e.parent.target}" title="${t=>t.title}" data-t="${t=>t.telemetry_context&&t.telemetry_context.card}" :anchorTelemetryTag=${t=>t.telemetry_context&&t.telemetry_context.url}>${t=>t.title} ${(0,c.g)((t=>t.media_src),l.dy`<img slot="media" src="${t=>t.media_src}" alt="${t=>t.media_alt}" width="${t=>t.media_width}" height="${t=>t.media_height}" />`)} ${(0,c.g)((t=>t.content_indicator_icon),l.dy`<msft-content-indicator slot="content-indicator">${t=>t.content_indicator_icon}</msft-content-indicator>`)} ${(0,c.g)((t=>t.attribution_src||t.attribution_title),l.dy`<div slot="attribution" class="attribution-condensed-container"><msft-attribution>${(0,c.g)((t=>t.attribution_src),l.dy`<img slot="image" src="${t=>t.attribution_src}" alt="${t=>t.attribution_alt}" width="${t=>t.attribution_width}" height="${t=>t.attribution_height}" />`)}<span class="attribution-container"><span class="attribution-title">${t=>t.attribution_title}</span>${(0,c.g)((t=>t.attribution_publishedDate),l.dy`<span class="attribution-separator">&middot;</span><span class="attribution-date">${t=>t.attribution_publishedDate}</span>`)}</span></msft-attribution>${(0,c.g)((t=>t.more_actions),l.dy`<fluent-button class="actions-button" appearance="stealth" @click="${(t,e)=>e.parent.actionTriggered(t,e.event)}" @keypress="${(t,e)=>e.parent.actionTriggered(t,e.event)}" data-t="${t=>t.telemetry_context&&t.telemetry_context.button}">${p}</fluent-button>`)}</div>`)}</msft-content-card>`;const g=l.dy`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" version="1.1" width=36 height=36>
    <g id="ðŸ”�-System-Icons" stroke="none" stroke-width="1" fill="#FFFFFF" fill-rule="evenodd">
        <g id="ic_fluent_play_circle_24_regular" fill="#FFFFFF" fill-rule="nonzero">
            <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm0 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17ZM9.053 8.585a.5.5 0 0 1 .587-.256l.084.033 6.382 3.19a.5.5 0 0 1 .076.848l-.076.047-6.382 3.191a.5.5 0 0 1-.716-.357L9 15.19V8.809a.5.5 0 0 1 .053-.224Z" fill-rule="nonzero" fill="#FFF" id="ðŸŽ¨-Color"/>
        </g>
    </g>
</svg>
`,v=l.dy`
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M16 8c.04-2.12-.82-4.18-2.36-5.64A7.598 7.598 0 0 0 8 0C5.86-.04 3.82.82 2.34 2.36A7.655 7.655 0 0 0 0 8c-.04 2.12.82 4.18 2.34 5.66A7.732 7.732 0 0 0 8 16c2.12.04 4.18-.82 5.64-2.34A7.642 7.642 0 0 0 16 8z" fill="url(#b)"/><path d="M6.04 5.04c-1.3 0-2.36 1.04-2.38 2.34v.02C3.66 8.7 4.7 9.76 6 9.78h.02c1.3 0 2.36-1.04 2.38-2.34v-.02c0-1.3-1.04-2.36-2.34-2.38h-.02z" fill="url(#c)"/><path d="M4.46 7.42c0 .88.7 1.58 1.58 1.58.42 0 .82-.16 1.12-.46.3-.3.48-.7.46-1.12 0-.88-.7-1.58-1.58-1.58a1.573 1.573 0 0 0-1.58 1.58z" fill="#fff"/><path d="M5.48 6.86a.71.71 0 0 0-.22.56c-.02.42.32.78.76.8h.04c.22 0 .42-.08.56-.22.16-.14.24-.36.22-.56 0-.2-.08-.4-.22-.56a.757.757 0 0 0-.56-.24.712.712 0 0 0-.58.22z" fill="#000"/><path d="M7.6 7.06c-.08-.3-.22-.58-.44-.8a1.78 1.78 0 0 0-1.22-.42c-.4-.02-.78.16-1.04.48l2.7.74z" fill="#D32B00"/><path d="M10 5.04c-1.3 0-2.36 1.06-2.38 2.36v.02c0 .64.24 1.24.7 1.68.94.92 2.44.92 3.36 0 .46-.44.7-1.06.7-1.68 0-1.3-1.06-2.36-2.36-2.38H10z" fill="url(#d)"/><path d="M8.42 7.42C8.42 8.3 9.12 9 10 9c.42 0 .82-.16 1.12-.46.3-.3.48-.7.46-1.12 0-.88-.7-1.58-1.58-1.58-.42 0-.82.16-1.12.46-.3.28-.46.7-.46 1.12z" fill="#fff"/><path d="M9.44 6.86a.71.71 0 0 0-.22.56c-.02.42.32.78.76.8h.04c.22 0 .42-.08.56-.22.16-.16.24-.36.22-.58 0-.2-.08-.4-.22-.56a.77.77 0 0 0-.58-.24c-.22 0-.42.08-.56.24z" fill="#000"/><path d="M8.38 7.12c.1-.32.26-.6.5-.82.3-.3.7-.46 1.12-.46.4 0 .8.14 1.1.42l-2.72.86z" fill="#D32B00"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4.51 6.454a.258.258 0 0 1 .316-.183l2.72.72a.258.258 0 0 1-.132.498l-2.72-.72a.258.258 0 0 1-.183-.315zm6.997-.047a.258.258 0 0 1-.174.32l-2.7.8a.258.258 0 1 1-.146-.494l2.7-.8c.136-.04.28.037.32.174z" fill="#000"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11.47 4.824a.258.258 0 0 1-.114.346l-2.74 1.38a.258.258 0 0 1-.232-.46l2.74-1.38a.258.258 0 0 1 .346.114zm-6.9 0a.258.258 0 0 1 .346-.114l2.74 1.38a.258.258 0 0 1-.232.46l-2.74-1.38a.258.258 0 0 1-.114-.346z" fill="#5B3C22"/><path opacity=".5" fill-rule="evenodd" clip-rule="evenodd" d="m10.49 12.27-.14.252.14-.252a.31.31 0 0 1-.3.54l.15-.27-.15.27-.004-.002a1.31 1.31 0 0 0-.133-.062 3.954 3.954 0 0 0-.44-.157 5.713 5.713 0 0 0-1.689-.22c-.728.01-1.262.13-1.608.243a3.018 3.018 0 0 0-.469.196.692.692 0 0 0-.018.011l-.002.002v-.001a.31.31 0 0 1-.335-.52l.168.26-.168-.26.002-.001.004-.002.01-.007.034-.02a3.642 3.642 0 0 1 .582-.247c.403-.131 1-.262 1.792-.272a6.33 6.33 0 0 1 1.872.245 4.554 4.554 0 0 1 .647.245l.038.02.011.005.004.002.002.002z" fill="#FF783F"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.955 11.37a5.15 5.15 0 0 1 2.849.788.31.31 0 0 1-.328.524 4.53 4.53 0 0 0-2.51-.693h-.002a4.58 4.58 0 0 0-1.757.353 3.226 3.226 0 0 0-.545.298.828.828 0 0 0-.023.017l-.004.003a.31.31 0 0 1-.39-.48l.195.24-.196-.24h.001l.001-.001.004-.003.011-.01.039-.028a3.845 3.845 0 0 1 .663-.365 5.198 5.198 0 0 1 1.992-.402zm-2.32 1.29z" fill="#401E13"/></g><defs><linearGradient id="b" x1="8" y1=".69" x2="8" y2="16.692" gradientUnits="userSpaceOnUse"><stop stop-color="#FF7B44"/><stop offset="1" stop-color="#E62E00"/></linearGradient><linearGradient id="c" x1="6.045" y1="4.86" x2="6.045" y2="9.61" gradientUnits="userSpaceOnUse"><stop stop-color="#E73304"/><stop offset="1" stop-color="#F4692D"/></linearGradient><linearGradient id="d" x1="10.004" y1="4.86" x2="10.004" y2="9.606" gradientUnits="userSpaceOnUse"><stop stop-color="#E73304"/><stop offset="1" stop-color="#F4692D"/></linearGradient></defs></svg>
`,m=l.dy`
<svg width="15" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m1.078 9.32.2-.68h3c.32-.5.7-1.04 1.1-1.6.8-1.12 1.36-1.82 1.7-2.1.9-.7 1.46-1.16 1.7-1.36.9-.8 1.4-1.4 1.5-1.82.04-.34.18-.68.4-.96.1-.12.24-.2.4-.2.26 0 .52.18.76.52.36.48.36 1.16.04 2-.18.46-.4.9-.66 1.32-.2.28-.38.56-.54.86-.18.36-.26.78-.2 1.18.68.04 1.34.14 2 .32 1.34.36 2 .88 2 1.58 0 .2-.04.4-.12.6-.08.2-.18.28-.28.28l.3.22c.22.28.32.62.3.96 0 .22-.12.44-.3.58-.1.08-.2.14-.3.2l.16.3c.1.28.1.58.02.86-.06.22-.18.42-.36.56-.12.12-.28.2-.44.24v.74c-.06.54-.26.88-.6 1.04-.72.36-1.12.54-1.2.58-.56.16-1.36.2-2.4.12-1.12-.1-2.22-.26-3.3-.52-.6-.14-1.1-.26-1.5-.38h-3c-.12-.3-.22-.6-.28-.92-.2-.68-.3-1.4-.32-2.1.02-.8.08-1.62.22-2.42Z" fill="#FDCE4C"/></svg>
`,b=l.dy`
<svg width="16" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.578 2.3c-.84-.96-1.98-1.58-3.26-1.52-1.28.08-2.44.74-3.16 1.8-.2-.2-.36-.46-.58-.66-.24-.22-.5-.42-.78-.6-.6-.36-1.28-.56-1.96-.56-1.32.04-2.54.68-3.32 1.74a4.82 4.82 0 0 0-.84 3.64c.24 1.34 1.04 2.48 2 3.4 1.66 1.58 3.56 2.78 5.22 4.34.14.14.26.16.4.02.26-.24.48-.52.76-.74.28-.22.56-.48.86-.7 1.08-.84 2.2-1.64 3.24-2.56 1.14-1.02 2.12-2.26 2.4-3.8.26-1.34-.1-2.72-.98-3.8Z" fill="#F4322A"/></svg>
`,y=l.dy`
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M16 8c.04-2.12-.82-4.18-2.36-5.64A7.598 7.598 0 0 0 8 0C5.86-.04 3.82.82 2.34 2.36A7.655 7.655 0 0 0 0 8c-.04 2.12.82 4.18 2.34 5.66A7.732 7.732 0 0 0 8 16c2.12.04 4.18-.82 5.64-2.34A7.642 7.642 0 0 0 16 8z" fill="#FDCD4D"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11.862 12.086c-2.486-1.03-4.94-1.028-7.34-.002a.31.31 0 0 1-.244-.569c2.56-1.093 5.186-1.092 7.82 0a.31.31 0 0 1-.236.57z" fill="#FEE154"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10.886 11.374a6.04 6.04 0 0 0-2.678-.562h-.016a6.066 6.066 0 0 0-2.698.562l-.008.004-.009.003c-.28.116-.542.303-.809.532a.412.412 0 1 1-.536-.626c.29-.25.626-.5 1.022-.665A6.89 6.89 0 0 1 8.2 9.987a6.864 6.864 0 0 1 3.026.635c.395.165.732.415 1.022.665a.412.412 0 1 1-.537.626c-.266-.229-.527-.416-.808-.532l-.009-.003-.008-.004z" fill="#32150C"/><path d="M11.3 4.7c-.44-.46-1.06-.72-1.7-.7-1.32 0-2.4 1.08-2.4 2.4 0 1.32 1.08 2.4 2.4 2.4.64.02 1.26-.24 1.7-.7.46-.44.72-1.06.7-1.7.02-.64-.24-1.26-.7-1.7z" fill="url(#b)"/><path d="M8.1 4.7c-.44-.46-1.06-.72-1.7-.7C5.08 4 4 5.08 4 6.4c-.02.64.24 1.24.7 1.7.44.46 1.06.72 1.7.7.64.02 1.26-.24 1.7-.7.46-.44.72-1.06.7-1.7.02-.64-.24-1.26-.7-1.7z" fill="url(#c)"/><path d="M5.28 5.28c-.32.28-.48.7-.48 1.12 0 .88.72 1.6 1.6 1.6.42 0 .84-.16 1.14-.46.3-.3.48-.7.46-1.14 0-.88-.72-1.6-1.6-1.6-.42 0-.84.16-1.12.48z" fill="url(#d)"/><path d="M8.46 5.28c-.3.28-.46.7-.46 1.12C8 7.28 8.72 8 9.6 8c.42 0 .84-.16 1.14-.46.3-.3.48-.7.46-1.14 0-.88-.72-1.6-1.6-1.6-.42 0-.84.16-1.14.48z" fill="url(#e)"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.898 1.508a.31.31 0 0 1 .394.19 4.024 4.024 0 0 0 1.486 1.969l.005.003c.268.197.573.341.9.432a.31.31 0 0 1-.166.596 3.392 3.392 0 0 1-1.097-.527 4.643 4.643 0 0 1-1.712-2.27.31.31 0 0 1 .19-.393zm-1.796 0a.31.31 0 0 1 .19.394 4.643 4.643 0 0 1-1.712 2.27 3.392 3.392 0 0 1-1.097.526.31.31 0 0 1-.166-.596c.327-.09.632-.235.9-.431l.005-.004a4.024 4.024 0 0 0 1.486-1.969.31.31 0 0 1 .394-.19z" fill="#976537"/><path d="M5.82 5.84c-.14.14-.22.34-.22.56 0 .44.34.8.78.8h.02c.22 0 .42-.08.56-.24a.79.79 0 0 0 .24-.56c0-.22-.08-.42-.24-.56a.726.726 0 0 0-.56-.24c-.22 0-.42.08-.58.24zm3.22 0c-.16.14-.24.34-.24.56 0 .44.34.8.78.8h.02c.22 0 .42-.08.56-.24a.79.79 0 0 0 .24-.56c0-.22-.08-.42-.24-.56a.726.726 0 0 0-.56-.24c-.22 0-.42.08-.56.24z" fill="#000"/></g><defs><linearGradient id="b" x1="9.6" y1="3.992" x2="9.6" y2="8.793" gradientUnits="userSpaceOnUse"><stop stop-color="#FFB400"/><stop offset="1" stop-color="#FDCD4D"/></linearGradient><linearGradient id="c" x1="6.4" y1="3.992" x2="6.4" y2="8.793" gradientUnits="userSpaceOnUse"><stop stop-color="#FFB400"/><stop offset="1" stop-color="#FDCD4D"/></linearGradient><linearGradient id="d" x1="6.4" y1="6.52" x2="6.4" y2="7.8" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#E7F9FF"/></linearGradient><linearGradient id="e" x1="9.6" y1="6.52" x2="9.6" y2="7.8" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#E7F9FF"/></linearGradient></defs></svg>
`,x=l.dy`
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M16 8c.04-2.12-.82-4.18-2.36-5.64A7.598 7.598 0 0 0 8 0C5.86-.04 3.82.82 2.34 2.36A7.655 7.655 0 0 0 0 8c-.04 2.12.82 4.18 2.34 5.66A7.732 7.732 0 0 0 8 16c2.12.04 4.18-.82 5.64-2.34A7.642 7.642 0 0 0 16 8Z" fill="#FDCD4D"/><path d="m6.34 10.34-.16.4c-.12.42-.2.84-.24 1.26-.22 2.3.44 3.44 2 3.44s2.28-1.02 2.16-3.08c-.04-.46-.12-.9-.24-1.34-.12-.36-.18-.6-.2-.68" stroke="#FEE154" stroke-width=".722" stroke-linecap="round"/><path d="M8 9.3c-.4 0-.8.12-1.1.36-.3.24-.56.54-.72.9-.06.12-.12.26-.18.4-.28.76-.28 1.58 0 2.32.4 1.06 1.06 1.58 2 1.6.94-.02 1.6-.56 1.98-1.6.3-.88.26-1.84-.12-2.7a2.61 2.61 0 0 0-.76-.92c-.3-.24-.7-.36-1.1-.36Z" fill="#fff"/><path d="M8 9.3c.4 0 .78.12 1.1.36.32.24.58.56.76.92.38.86.42 1.82.12 2.7-.38 1.06-1.04 1.58-1.98 1.6-.94-.02-1.6-.56-2-1.6-.28-.76-.28-1.58 0-2.34.04-.14.1-.26.18-.4.16-.36.42-.66.72-.9.32-.22.7-.34 1.1-.34Z" stroke="url(#b)" stroke-width=".722" stroke-linecap="round"/><path d="M11.86 2.54c-.6-.62-1.42-.96-2.26-.94a2.99 2.99 0 0 0-2.26.94c-.62.6-.94 1.42-.94 2.26-.02.84.32 1.66.94 2.26.6.62 1.42.96 2.26.94.86.02 1.66-.32 2.26-.94.62-.58.96-1.4.94-2.26a2.99 2.99 0 0 0-.94-2.26Z" fill="url(#c)"/><path d="M8.66 2.54c-.6-.62-1.42-.96-2.26-.94a2.99 2.99 0 0 0-2.26.94c-.62.6-.94 1.42-.94 2.26-.02.84.32 1.66.94 2.26.6.62 1.42.96 2.26.94.86.02 1.66-.32 2.26-.94.62-.58.96-1.4.94-2.26a2.99 2.99 0 0 0-.94-2.26Z" fill="url(#d)"/><path d="M4.7 3.1c-.46.44-.7 1.06-.7 1.7-.02.64.24 1.26.7 1.7.44.46 1.06.72 1.7.7.64 0 1.26-.24 1.7-.7.46-.44.72-1.06.7-1.7 0-.64-.24-1.26-.7-1.7-.44-.46-1.06-.7-1.7-.7-.64-.02-1.26.24-1.7.7Z" fill="#fff"/><path d="M7.9 3.1c-.46.44-.7 1.06-.7 1.7-.02.64.24 1.26.7 1.7.44.46 1.06.72 1.7.7.64 0 1.26-.24 1.7-.7.46-.44.72-1.06.7-1.7 0-.64-.24-1.26-.7-1.7-.44-.46-1.06-.7-1.7-.7-.64-.02-1.26.24-1.7.7Z" fill="#fff"/><path d="M5.68 4.1a1 1 0 0 0-.28.7c0 .54.42 1 .96 1h.04c.26 0 .52-.1.72-.28.2-.18.3-.44.28-.72a1 1 0 0 0-.28-.7.95.95 0 0 0-.72-.3c-.26 0-.52.1-.72.3ZM8.88 4.1a1 1 0 0 0-.28.7c0 .54.42 1 .96 1h.04c.26 0 .52-.1.72-.28.2-.18.3-.44.28-.72a1 1 0 0 0-.28-.7.95.95 0 0 0-.72-.3c-.26 0-.52.1-.72.3Z" fill="#000"/><path d="M7.12.6C6.72.54 6.3.54 5.9.6c-.86.12-1.64.54-2.2 1.2M8.86.6c.4-.06.82-.06 1.22 0 .86.12 1.64.54 2.2 1.2" stroke="#976537" stroke-width=".619" stroke-linecap="round"/></g><defs><linearGradient id="b" x1="7.997" y1="16.086" x2="7.997" y2="9.198" gradientUnits="userSpaceOnUse"><stop stop-color="#8D503D"/><stop offset="1" stop-color="#32150C"/></linearGradient><linearGradient id="c" x1="9.6" y1="1.53" x2="9.6" y2="7.931" gradientUnits="userSpaceOnUse"><stop stop-color="#FFB400"/><stop offset="1" stop-color="#FDCD4D"/></linearGradient><linearGradient id="d" x1="6.4" y1="1.53" x2="6.4" y2="7.931" gradientUnits="userSpaceOnUse"><stop stop-color="#FFB400"/><stop offset="1" stop-color="#FDCD4D"/></linearGradient></defs></svg>
`,w=l.dy`
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 8c0-2.2-.78-4.1-2.36-5.64C12.1.78 10.2 0 8 0 5.8 0 3.9.78 2.34 2.36.78 3.9 0 5.8 0 8c0 2.22.78 4.1 2.34 5.66C3.9 15.22 5.8 16 8 16s4.1-.78 5.64-2.34C15.22 12.1 16 10.2 16 8z" fill="#FDCE4C"/><path d="M11.86 3.34c-.62-.62-1.38-.94-2.26-.94-.88 0-1.64.32-2.26.94-.62.62-.94 1.38-.94 2.26 0 .88.32 1.64.94 2.26.62.62 1.38.94 2.26.94.88 0 1.64-.32 2.26-.94.62-.62.94-1.38.94-2.26 0-.88-.32-1.64-.94-2.26z" fill="url(#a)"/><path d="M8.66 3.34c-.62-.62-1.38-.94-2.26-.94-.88 0-1.64.32-2.26.94-.62.62-.94 1.38-.94 2.26 0 .88.32 1.64.94 2.26.62.62 1.38.94 2.26.94.88 0 1.64-.32 2.26-.94.62-.62.94-1.38.94-2.26 0-.88-.32-1.64-.94-2.26z" fill="url(#b)"/><path d="M4.7 3.9c-.46.48-.7 1.04-.7 1.7 0 .66.24 1.24.7 1.7.46.46 1.04.7 1.7.7.66 0 1.22-.24 1.7-.7.46-.46.7-1.04.7-1.7 0-.66-.24-1.22-.7-1.7-.48-.46-1.04-.7-1.7-.7-.66 0-1.24.24-1.7.7z" fill="#fff"/><path d="M7.9 3.9c-.46.48-.7 1.04-.7 1.7 0 .66.24 1.24.7 1.7.46.46 1.04.7 1.7.7.66 0 1.22-.24 1.7-.7.46-.46.7-1.04.7-1.7 0-.66-.24-1.22-.7-1.7-.48-.46-1.04-.7-1.7-.7-.66 0-1.24.24-1.7.7z" fill="#fff"/><path d="M6.64 3.62c-.16.16-.24.34-.24.56 0 .22.08.42.24.58.16.16.34.22.56.22.22 0 .4-.08.58-.22.16-.16.22-.36.22-.58 0-.22-.08-.4-.22-.56a.801.801 0 0 0-.58-.24c-.22 0-.4.08-.56.24zm3.2 0c-.16.16-.24.34-.24.56 0 .22.08.42.24.58.16.16.34.22.56.22.22 0 .4-.08.58-.22.16-.16.22-.36.22-.58 0-.22-.08-.4-.22-.56a.801.801 0 0 0-.58-.24c-.22 0-.4.08-.56.24z" fill="#000"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.364 9.446a.425.425 0 0 1 .59.118c.275.413.556.588.839.63.297.045.69-.043 1.206-.357a.425.425 0 0 1 .442.726c-.603.366-1.201.558-1.774.472-.587-.087-1.056-.452-1.42-1a.425.425 0 0 1 .117-.589z" fill="#FEE154"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.21 9.43a.425.425 0 0 1 .56-.22c.754.331 1.54.46 2.384.367a.425.425 0 0 1 .092.845 5.422 5.422 0 0 1-2.817-.433.425.425 0 0 1-.218-.56z" fill="#000"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6.72 1.361c.334-.083.655-.127.92-.127a.266.266 0 1 1 0 .532 3.43 3.43 0 0 0-.796.112l-.009.002c-.621.132-1.094.372-1.452.713a.266.266 0 1 1-.366-.386c.44-.418 1.007-.697 1.703-.846zm2.627.408.125-.513.833.102.014.003c.657.148 1.223.428 1.664.846l-.276.442-2.36-.88z" fill="#976537"/><mask id="c" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0z" fill="#C4C4C4"/></mask><g mask="url(#c)"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.281 11.185c-.276.613-1.21 1.595-2.733.617A55.468 55.468 0 0 0 5.524 9.49c-.462-.364-1.376-.83-1.345.221-.016.307.083.99.603 1.269.425.229 1.596.903 2.417 1.379a.601.601 0 0 0-.57.89l-.09.109a.6.6 0 0 0-.513.886 1.74 1.74 0 0 0-.06.144.601.601 0 0 0-.092 1.101l.146.078c.068.154.161.314.283.479 1.208 1.644 3.315 2.162 4.4 2 .896-.148 2.825-.963 2.8-3.8-.026-2.837.341-3.661.428-3.764.19-.51.465-1.559.05-1.663-.417-.105-.869.278-1.043.483l-.657 1.884z" fill="#000"/><path d="M8.86 11.057c1.523.978 2.457-.004 2.734-.617l.656-1.884c.175-.204.627-.588 1.043-.483.415.104.14 1.152-.05 1.663-.087.103-.453.927-.428 3.764.025 2.837-1.903 3.652-2.8 3.8-1.084.162-3.192-.356-4.4-2-1.208-1.644.408-2.72 1.378-3.408-.75-.436-2.38-1.379-2.899-1.658-.52-.28-.618-.962-.603-1.268-.03-1.051.884-.586 1.345-.222a55.465 55.465 0 0 1 4.024 2.313z" fill="#D4EFF6"/><path d="M8.234 13.149a.601.601 0 0 0-.25-.813l-1.235-.655a.6.6 0 1 0-.563 1.062l1.235.655a.6.6 0 0 0 .813-.25z" fill="#D4EFF6"/><path d="M7.634 14.149a.601.601 0 0 0-.25-.813l-1.235-.655a.6.6 0 1 0-.563 1.062l1.235.655a.6.6 0 0 0 .813-.25z" fill="#D4EFF6"/><path d="M7.234 15.149a.601.601 0 0 0-.25-.813l-1.235-.655a.6.6 0 1 0-.563 1.062l1.235.655a.6.6 0 0 0 .813-.25z" fill="#D4EFF6"/><path d="m5.41 13.425-.1.218c.642.16 1.224.452 1.74.853a6.114 6.114 0 0 0-1.64-1.07zm.422-.79c.326.037.86.302 1.614.8-.644-.51-1.133-.84-1.447-.999l-.167.199z" fill="#9EC9D6"/></g><defs><linearGradient id="a" x1="9.6" y1="2.398" x2="9.6" y2="8.801" gradientUnits="userSpaceOnUse"><stop stop-color="#FFB400"/><stop offset="1" stop-color="#FFB400"/></linearGradient><linearGradient id="b" x1="6.4" y1="2.398" x2="6.4" y2="8.801" gradientUnits="userSpaceOnUse"><stop stop-color="#FFB400"/><stop offset="1" stop-color="#FFB400"/></linearGradient></defs></svg>
`,$=l.dy`<svg width="16" height="16" viewBox="0 -1 16 16" xmlns="http://www.w3.org/2000/svg">${h}</svg>`;var C,k=l.dy`<msft-content-card layout="condensed" href="${t=>t.href}" target="${(t,e)=>e.parent.target}" title="${t=>t.title}" class="social-reaction-card">${t=>t.title} ${(0,c.g)((t=>t.content_indicator_icon),l.dy`<msft-content-indicator slot="content-indicator">${t=>t.content_indicator_icon}</msft-content-indicator>`)}<img slot="media" src="${t=>t.media_src}" alt="${t=>t.media_alt}" width="${t=>t.media_width}" height="${t=>t.media_height}" />${(0,c.g)((t=>t.media_icon),l.dy` <div class="media-icon" slot="icon">${g}</div>`)} ${(0,c.g)((t=>t.attribution_src||t.attribution_title),l.dy`<msft-attribution slot="attribution">${(0,c.g)((t=>t.attribution_src),l.dy`<img slot="image" src="${t=>t.attribution_src}" alt="${t=>t.attribution_alt}" width="${t=>t.attribution_width}" height="${t=>t.attribution_height}" />`)}<span class="attribution-container"><span class="attribution-title">${t=>t.attribution_title}</span>${(0,c.g)((t=>t.attribution_publishedDate),l.dy`<span class="attribution-separator">&middot;</span><span class="attribution-date">${t=>t.attribution_publishedDate}</span>`)}</span></msft-attribution>`)} ${(0,c.g)((t=>t.more_actions),l.dy`<div slot="start-actions" class="like-button">${(0,c.g)((t=>t.social_reaction_count),l.dy` ${(0,c.g)((t=>t.social_reaction_angry),l.dy`${v}`)} ${(0,c.g)((t=>t.social_reaction_like),l.dy`${m}`)} ${(0,c.g)((t=>t.social_reaction_love),l.dy`${b}`)} ${(0,c.g)((t=>t.social_reaction_sad),l.dy`${y}`)} ${(0,c.g)((t=>t.social_reaction_surprised),l.dy`${x}`)} ${(0,c.g)((t=>t.social_reaction_thinking),l.dy`${w}`)}<span style="margin-inline-end: 30px">${t=>t.social_reaction_count}</span>`)} ${(0,c.g)((t=>t.comment_count),l.dy`<svg width="14" height="13" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg"><path d="M0 2.5C0 1.11929 1.11929 0 2.5 0H11.5C12.8807 0 14 1.11929 14 2.5V7.5C14 8.88071 12.8807 10 11.5 10H7.68787L4.62533 12.6797C3.99168 13.2342 3 12.7842 3 11.9422V10H2.5C1.11929 10 0 8.88071 0 7.5V2.5ZM2.5 1C1.67157 1 1 1.67157 1 2.5V7.5C1 8.32843 1.67157 9 2.5 9H4V11.8981L7.31213 9H11.5C12.3284 9 13 8.32843 13 7.5V2.5C13 1.67157 12.3284 1 11.5 1H2.5Z" /></svg><span>${t=>t.comment_count}</span>`)}</div><fluent-button appearance="stealth" class="actions-button" slot="end-actions" @click=${(t,e)=>e.parent.actionTriggered(t)} @keypress=${(t,e)=>e.parent.actionTriggered(t)}>${$}</fluent-button>`)}</msft-content-card>`;!function(t){t.ordered="ordered",t.unordered="unordered"}(C||(C={}));class S extends r.H{constructor(){super(...arguments),this.listType=C.unordered,this.ready=!1,this.dividerEnabled=!1,this.touchHoverUnderlineDisabled=!1,this.templateByType={"content-card":d,"condensed-card":f,"social-reactions-card":k}}selectTemplate(){return this.templateByType[this.itemTemplate]}actionTriggered(t,e){this.$emit("action-triggered",{data:t,event:e})}}(0,o.gn)([(0,s.Lj)({attribute:"list-type"})],S.prototype,"listType",void 0),(0,o.gn)([a.LO],S.prototype,"data",void 0),(0,o.gn)([(0,s.Lj)({attribute:"item-template"})],S.prototype,"itemTemplate",void 0),(0,o.gn)([a.LO],S.prototype,"ready",void 0),(0,o.gn)([s.Lj],S.prototype,"target",void 0),(0,o.gn)([(0,s.Lj)({attribute:"divider-enabled",mode:"boolean"})],S.prototype,"dividerEnabled",void 0),(0,o.gn)([(0,s.Lj)({attribute:"touch-hover-underline-disabled",mode:"boolean"})],S.prototype,"touchHoverUnderlineDisabled",void 0);var T=n(78923),L=n(27186),O=n(29717),I=n(53131),A=n(27782),H=n(42689),D=n(32572),F=n(16549);const E=T.i`
        ${(0,L.j)("flex")} :host{box-sizing:border-box;font-family:${I.S};
            font-size: ${A.c};
            line-height: ${A.R};
            color: ${H.C};height:100%;width:100%;flex-direction:column}.ordered-list,.unordered-list{display:flex;flex-direction:column;height:100%;justify-content:space-between;margin:8px 0}.ordered-list{list-style:decimal;padding-inline-start:30px}msft-content-card{--heading-font-size:${A.c};
            --heading-line-height: ${A.R}}.touch-underline-disabled msft-content-card::part(heading):hover,.touch-underline-disabled msft-content-card::part(heading):focus{text-decoration:none;-webkit-tap-highlight-color:transparent}msft-content-card[layout="condensed"]{margin-bottom:11px}.ordered-list msft-content-card{display:block;--heading-start-padding:4px}::slotted(*){display:grid;grid-template-columns:auto 1fr auto;grid-gap:12px;margin:8px 12px 0 12px;font-size:${D.P};
            line-height: ${D.b};align-items:center;font-weight:bold}::slotted([slot="footer"]){display:grid;grid-template-columns:1fr auto;grid-gap:12px;font-weight:unset;margin:0px 12px 8px 12px;font-size:${F.s};
            line-height: ${F.v};align-items:center}.unordered-list{list-style:none;padding:0}.attribution-container{display:flex;max-width:154px}.attribution-condensed-container{display:grid;grid-template-columns:minmax(0px,1fr) auto;column-gap:6px}.attribution-condensed-container .attribution-container{display:flex;max-width:100%}.attribution-condensed-container .actions-button{z-index:2;margin-top:2px}.actions-button{width:24px;height:24px;min-width:24px;justify-content:center}.actions-button::part(control){padding:0}.like-button{font-size:${F.s}}.attribution-title{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.attribution-separator{margin:0 3px}.attribution-date{white-space:nowrap}.divider li::after{background:rgba(0,0,0,0.1);content:"";height:1px;display:block;margin-left:12px;margin-right:12px;margin-bottom:5px}.divider li:nth-last-child(1)::after{display:none}.media-icon{width:36px;height:36px}.social-reaction-card::part(icon){background:none;filter:drop-shadow(0px 4px 8px rgba(0,0,0,0.2));left:50%;top:50%;margin:0;transform:translate(-50%,-50%)}`.withBehaviors((0,O.vF)(T.i` :host{forced-color-adjust:auto}`));var B=n(89150);const R=l.dy`<li>${(t,e)=>e.parent.selectTemplate()}</li>`,j=l.dy`<slot></slot>${(0,c.g)((t=>"unordered"===t.listType),l.dy`<ul class="unordered-list ${t=>t.dividerEnabled?"divider":""} ${t=>t.touchHoverUnderlineDisabled?"touch-underline-disabled":""}" part="unordered-list">${(0,B.rx)((t=>t.data),R)}</ul>`)} ${(0,c.g)((t=>"ordered"===t.listType),l.dy`<ol class="ordered-list ${t=>t.dividerEnabled?"divider":""} ${t=>t.touchHoverUnderlineDisabled?"touch-underline-disabled":""}" part="ordered-list">${(0,B.rx)((t=>t.data),R)}</ol>`)}<slot name="footer" part="footer"></slot>`,P=S.compose({name:`${i.j.prefix}-list-card`,template:j,styles:E})},80513:function(t,e,n){"use strict";n.d(e,{Pw:function(){return R}});var i=n(1931),o=n(49218),r=n(41472),s=n(93703);const a=o.dy`<div class="popover-arrow" part="popover-arrow"><svg width="16" height="6" viewBox="0 0 16 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.473.708 3.689 3.996C2.562 5.326 1.333 5.99 0 5.99c.987.02 14.998 0 16 0-1.332 0-2.563-.667-3.692-1.999L9.528.708a2.002 2.002 0 0 0-3.055 0Z" fill="#F2F2F2" /></svg></div><div class="options-list" part="options-list">${(0,s.g)((t=>!0===t.userSignedIn),o.dy`<a class="option-item" part="option-item" @mousedown="${(t,e)=>t.addSymbolAction(e.event)}"><div class="option-svg" part="option-svg"><svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6396 5.9V6.6H5.73965V11.5H5.03965V6.6H0.139648V5.9H5.03965V1H5.73965V5.9H10.6396Z" fill="black" fill-opacity="0.83" stroke="black" stroke-opacity="0.83" stroke-width="0.2" /></svg></div><div class="option-str" part="option-str"><span>${t=>t.addSymbolOptStr}</span></div></a>`)}<a class="option-item" part="option-item" @mousedown="${(t,e)=>t.hideCardAction(e.event)}"><div class="option-svg" part="option-svg"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.409.146A.5.5 0 0 0 .36.797L.41.853l2.689 2.69A6.656 6.656 0 0 0 .46 7.373a.5.5 0 0 0 .97.243 5.658 5.658 0 0 1 2.386-3.355l1.207 1.206a2.666 2.666 0 0 0 3.77 3.77l3.945 3.946a.5.5 0 0 0 .755-.651l-.048-.056L9.37 8.402V8.4l-.799-.799L6.66 5.69h.002L4.74 3.77l-.755-.754-2.87-2.87a.5.5 0 0 0-.707 0Zm5.321 6.03 2.356 2.356A1.666 1.666 0 0 1 5.73 6.176Zm1.197-3.843a6.66 6.66 0 0 0-1.925.283l.824.824a5.667 5.667 0 0 1 6.598 4.18.5.5 0 0 0 .97-.242 6.667 6.667 0 0 0-6.467-5.045Zm.13 2.339 2.534 2.533a2.668 2.668 0 0 0-2.534-2.533Z" fill="#000" fill-opacity=".83" /></svg></div><div class="option-str" part="option-str"><span>${t=>t.hideCardOptStr}</span></div></a><a class="option-item" part="option-item" @mousedown="${(t,e)=>t.dataProviderAction(e.event)}"><div class="option-svg" part="option-svg"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 9c0 .693-.235 1.332-.63 1.84l2.769 2.768a.375.375 0 1 1-.53.53l-2.77-2.768A3 3 0 1 1 7.5 9Zm-3 2.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" fill="#000" fill-opacity=".83" /><path fill-rule="evenodd" clip-rule="evenodd" d="M4.125 2.25a.375.375 0 0 0-.375.375v2.7c-.26.053-.512.133-.75.237V2.625C3 2.004 3.504 1.5 4.125 1.5h3.814c.299 0 .585.119.796.33l2.936 2.935c.21.211.329.497.329.796v6.814c0 .621-.504 1.125-1.125 1.125h-.44a1.121 1.121 0 0 0-.266-.422l-.328-.328h1.034a.375.375 0 0 0 .375-.375V6H8.625A1.125 1.125 0 0 1 7.5 4.875V2.25H4.125Zm4.125.155v2.47c0 .207.168.375.375.375h2.47L8.25 2.405Z" fill="#000" fill-opacity=".83" /></svg></div><div class="option-str" part="option-str"><span>${t=>t.dataProviderOptStr}</span></div></a><a class="option-item" part="option-item" @mousedown="${(t,e)=>t.moreSettingAction(e.event)}"><div class="option-svg" part="option-svg"><svg width="11" height="3" viewBox="0 0 11 3" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM6.5 1.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM9.25 2.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" fill="#000" fill-opacity=".83" /></svg></div><div class="option-str" part="option-str"><span>${t=>t.moreSettingOptStr}</span></div></a></div>`;var l=n(89150);const c=o.dy`<div class="quote-row"><div class="quote-view" part="quote-view" id="quoteItemView"><a class="quote-titles-cntr" part="quote-titles-cntr" href="${t=>t.quoteHref}" target=${t=>t.target}><span class="quote-title" part="quote-title">${(0,s.g)((t=>t.displayName.length<=8),o.dy`<p class="quote-title-str" part="quote-title-str">${t=>t.displayName}</p>`)} ${(0,s.g)((t=>t.displayName.length>8),o.dy`<p class="quote-title-str" part="quote-title-str">${t=>t.symbol}</p>`)}</span><span class="sec-title" part="sec-title"><p class="sec-title-str" part="sec-title-str">${t=>t.displayName}</p></span></a><div class="price" part="price"><span class="price-str" part="price-str">${t=>t.price}</span></div><a class="change-values ${(t,e)=>e.parent.getQuoteColor(t.gain,t.unchanged,"quote-red","quote-green","quote-grey")}" part="change-values ${(t,e)=>e.parent.getQuoteColor(t.gain,t.unchanged,"quote-red","quote-green","quote-grey")}" @click="${(t,e)=>e.parent.changeShowingValue()}">${(0,s.g)(((t,e)=>e.parent.showChangeValue),o.dy`<span class="change-values-str" part="change-values-str">&lrm;${t=>t.changeValue}</span>`)} ${(0,s.g)(((t,e)=>!e.parent.showChangeValue),o.dy`<span class="change-values-percentage" part="change-values-percentage">&lrm;${t=>t.changePcnt}</span>`)}</a></div></div>`,u=o.dy`<div class="quote-list" part="quote-list">${(0,l.rx)((t=>t.quoteItems&&t.quoteItems.map((e=>Object.assign(Object.assign({},e),{target:t.target})))),c)}</div><div class="footer" part="footer"><fluent-anchor class="sd-action" part="sd-action" target=${t=>t.target} href="${t=>t.footerLink}">${t=>t.footer}</fluent-anchor></div>`,d=o.dy`<div class="empty-item" part="empty-item"><div class="empty-str" part="empty-str"><span>${t=>t.emptyWatchlistStr}&lrm;</span></div><fluent-button class="add-symbol-button sd-action" appearance="outline" part="add-symbol-button" @click="${(t,e)=>t.addSymbolAction(e.event)}">&lrm;${t=>t.addSymbolBtnStr}</fluent-button></div>${(0,s.g)((t=>t.layout===i.NV.full),o.dy`<div class="quote-list-empty-watchlist" part="quote-list">${(0,l.rx)((t=>t.quoteItems&&t.quoteItems.map((e=>Object.assign(Object.assign({},e),{target:t.target})))),c)}</div>`)}
`,h=o.dy`<a class="suggestion-entry" part="suggestion-entry" @click="${(t,e)=>e.parent.addToWatchlist(t.quoteId)}"><div class="suggestion-item" part="suggestion-item"><div class="suggestion-company" part="suggestion-company"><span class="suggestion-symbol" part="suggestion-symbol">${t=>t.equitySymbol}</span><span class="suggestion-name" part="suggestion-name">${t=>t.longName}</span></div><div class="suggestion-market" part="suggestion-market"><span class="suggestion-market-str">${t=>t.exchangeName}</span></div><div class="suggestion-add-icon"><svg width="11" height="11" viewBox="0 0 11 11" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 4.9V5.6H5.6V10.5H4.9V5.6H0V4.9H4.9V0H5.6V4.9H10.5Z" fill="black" fill-opacity="0.83" /></svg></div></div></a>`,p=o.dy`<div class="search-area" part="search-area"><div class="search-button" part="search-button"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 3a5.5 5.5 0 0 1 4.227 9.02l4.127 4.126a.5.5 0 0 1-.638.765l-.07-.057-4.126-4.127A5.5 5.5 0 1 1 8.5 3Zm0 1a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z" fill="#212121" /></svg></div><input class="search-input" part="search-input" type="search" autofocus="autofocus" @input=${t=>t.handleTextInput()} placeholder="${t=>t.searchPlaceholder}" :value="${t=>t.value}" ${(0,r.i)("inputControl")} />${(0,s.g)((t=>!0===t.showSuggestions),o.dy`<div class="suggestions-list" part="suggestions-list">${(0,l.rx)((t=>t.searchSuggestions),h)}</div>`)} ${(0,s.g)((t=>!0===t.noSuggestion),o.dy`<div class="suggestions-list" part="suggestions-list"><div class="no-suggestion-str">${t=>t.noSuggestionHint}</div></div>`)}</div>`,f=o.dy`<div class="title" part="title" ${(0,r.i)("titleArea")}>${(0,s.g)((t=>t.cardType===i.Lb.AddWatchlist),o.dy`<a class="title-link" part="title-link" @click="${t=>t.onTitleClicked()}"><div class="title-content">&lrm;${t=>t.titleStr}</div></a>`)} ${(0,s.g)((t=>t.cardType!=i.Lb.AddWatchlist),o.dy`<a class="title-link" part="title-link" href="${t=>t.titleLink}" target=${t=>t.target}><div class="title-content">&lrm;${t=>t.titleStr}</div></a><fluent-button id="option-button" class="option-button" part="option-button" slot="option-actions" @click="${t=>t.optionClicked()}" @blur="${t=>t.onBlurOption()}" ref="optButton"><slot name="option-button-svg"></slot></fluent-button>`)}</div>${(0,s.g)((t=>t.optionSwitch),a)} ${(0,s.g)((t=>t.cardType===i.Lb.ShowData),u)} ${(0,s.g)((t=>t.cardType===i.Lb.EmptyWatchlist),d)} ${(0,s.g)((t=>t.cardType===i.Lb.AddWatchlist),p)}
`;var g=n(78923),v=n(27186),m=n(29717),b=n(32572),y=n(27782),x=n(42689),w=n(16549),$=n(55135),C=n(2658),k=n(74449),S=n(71942),T=n(35680),L=n(22674),O=n(26512),I=n(67739),A=n(22798),H=n(89442);const D=g.i` .options-list{right:16px}.option-str{padding:0px 10px 3px 0px}.popover-arrow{left:264px}`,F=g.i` .options-list{left:16px}.option-str{padding:0px 0px 3px 10px}.popover-arrow{left:25px}`,E=g.i`
    ${(0,v.j)("grid")} :host{box-sizing:border-box;position:relative;width:100%;outline:none;padding:8px;height:100%;grid-template-rows:auto 1fr}:host([layout="full"]) .footer{align-items:center;display:flex;justify-content:center;margin-top:8px}:host([layout="full"]) .price-str{font-size:${b.P};
        font-weight: 500;
        height: 23px;
        line-height: ${y.R}}:host([layout="full"]) .quote-list{grid-row-gap:24px;height:200px}:host([layout="full"]) .quote-title-str{color:${x.C};
        font-size: ${y.c};
        font-weight: 600;
        height: 18px;
        line-height: ${w.v};overflow:hidden;text-overflow:ellipsis;margin:0px}:host([layout="full"]) .sec-title-str{font-size:${w.s};
        height: 14px;
        line-height: ${w.v}}:host([layout="full"]) .title{align-items:center;display:grid;grid-column-gap:8px;grid-template-columns:1fr auto;height:24px;margin-bottom:11px}:host([layout="half"]) .footer{align-items:center;display:flex;justify-content:center;margin-top:8px}:host([layout="half"]) .price-str{font-size:${y.c};font-weight:500;height:18px;line-height:18px}:host([layout="half"]) .quote-list{grid-row-gap:6px;height:54px}:host([layout="half"]) .quote-title-str{color:${x.C};
        font-size: ${b.P};font-weight:600;height:18px;line-height:18px;overflow:hidden;text-overflow:ellipsis;margin:0px}:host([layout="half"]) .sec-title-str{display:none}:host([layout="half"]) .title{align-items:center;display:grid;grid-template-columns:1fr auto;grid-column-gap:8px;margin-bottom:8px}.change-values{border-radius:calc(${$.UW} * 1px);cursor:pointer;display:flex;flex-direction:column;text-decoration:none;display:flex;justify-content:center;height:24px;padding:0 6px}.change-values-str,.change-values-percentage{font-size:${w.s};
        line-height: ${w.v};display:flex;justify-content:flex-end}.operation-btn::part(actions){border:none;padding-right:0px;padding-left:0px;height:32px;width:99px}.option-button{display:none;--control-corner-radius:20;height:24px;width:24px;min-width:24px}.option-button::part(control){padding:0}.index-logo{justify-content:flex-start;fill:${x.C}}.operation-btn{height:calc(${C.i} * 1px);width:99px}.price{align-items:center;display:flex;justify-content:flex-end}.price-str{}.quote-green{color:#ffffff;background:#107c10}.quote-list{display:grid}.quote-list-empty-watchlist{display:grid;grid-row-gap:24px;height:88px;margin-bottom:44px}.quote-red{color:#ffffff;background:#d33e3e}.quote-grey{color:#ffffff;background:#808080}.quote-titles-cntr{text-decoration:none}.quote-view{align-items:center;display:grid;grid-column-gap:10px;grid-template-columns:var(--quote-grid-columns-ltr)}.sec-title-str{color:${k.Q};margin:0px;overflow:hidden;text-overflow:ellipsis}.title-link{font-weight:500;color:${x.C};
        display: flex;
        font-size: ${w.s};
        justify-content: flex-start;
        line-height: ${w.v};
        outline: none;
        cursor: pointer;
        text-decoration: none;
    }

    .title-link:${I.b}{text-decoration:underline}.title-content{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:6px;padding-inline-end:12px}.empty-item{width:146px;height:54px;align-items:center;display:grid;border-radius:calc(${$.UW} * 1px);
        border: 1px solid ${S.dt};grid-template-rows:auto 1fr;grid-row-gap:8px;justify-content:center;padding:18px 60px 19px 60px}.empty-str{font-family:Segoe UI;font-size:${y.c};
        line-height: ${y.R};text-align:center}.add-symbol-button{border-color:#00B294;color:#00B294}.search-area{display:grid;grid-template-columns:auto 1fr;height:calc(${C.i} * 1px);
        width: 266px;
        position: relative;
        border: 1px solid ${S.dt}}.search-button{border:none;background:transparent;width:20px;padding:6px 10px}.search-input{background:transparent;font-size:${y.c};
        line-height: ${y.R};
        height: calc(${C.i} * 1px);border:none;outline:none}.quote-row{padding:0 8px}.sd-action{height:24px}input[type="search"]::-webkit-search-decoration,input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-results-button,input[type="search"]::-webkit-search-results-decoration{display:none}.popover-arrow{position:absolute;z-index:9998;top:31px}.options-list{display:block;position:absolute;background:#F2F2F2;top:44px;padding:5px 0px;border-radius:3px;z-index:9999}.option-item{cursor:pointer;display:grid;grid-template-columns:28px auto;height:20px;width:100%;margin:0px;padding:3px 0px 3px 0px}.option-item:hover{background:${T.Xi}}.option-svg{display:flex;align-items:center;width:28px;height:20px}.option-svg svg{margin:0 auto;display:block}.option-str{height:16px;font-size:${w.s};
        line-height: ${y.R}}.suggestions-list{display:block;position:absolute;box-sizing:border-box;top:40px;width:100%;padding:4px;-webkit-box-shadow:0 0 10px ${S.dt};
        -moz-box-shadow: 0 0 10px ${S.dt};
        box-shadow: 0 0 10px ${S.dt};z-index:9999}.no-suggestion-str{font-size:${y.c};
        line-height: ${w.v};height:16px;margin:5px 0px 5px 9px}.suggestion-entry{text-decoration:none;cursor:pointer}.suggestion-entry:hover .suggestion-item{background:${T.Xi}}.suggestion-item{display:grid;grid-template-columns:148px 70px 32px;grid-column-gap:2px;height:40px;padding:5px 8px 2px 8px}.suggestion-company{display:grid;grid-template-rows:20px 20px}.suggestion-add-icon{padding-top:9px;padding-left:10px}.suggestion-add-icon svg path{fill:${x.C}}.suggestion-symbol{font-weight:800;font-size:${y.c};
        line-height: ${y.R};
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: ${x.C}}.suggestion-name{font-weight:600;font-size:${w.s};
        line-height: ${y.R};
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: ${x.C}}.suggestion-market{position:relative;text-align:right;padding-top:8px}.suggestion-market-str{position:absolute;height:100%;right:0px;font-weight:600;font-size:${w.s};
        line-height: ${y.R};
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: ${x.C};
    }

    ${H.U}
`.withBehaviors(new L.O(D,F),(0,m.vF)(g.i` :host{forced-color-adjust:auto}.option-item,.suggestion-add-icon svg path,.option-svg svg path,.search-button svg path{color:${A.H.ButtonText};fill:currentcolor;fill-opacity:1}.options-list{forced-color-adjust:none;background:${A.H.ButtonFace};
                box-shadow: 0 0 0 calc((v${O.H} * 1px)) ${A.H.CanvasText}}.option-item:hover,.option-item:hover .option-svg svg path{background:${A.H.Highlight};
                color: ${A.H.HighlightText};fill:currentcolor}.add-symbol-button:hover{border-color:${A.H.HighlightText};
                color: ${A.H.HighlightText}}.suggestions-list{forced-color-adjust:none;background:${A.H.Canvas};
                box-shadow: 0 0 0 calc((v${O.H} * 1px)) ${A.H.CanvasText}}.suggestion-entry .suggestion-item *{color:${A.H.ButtonText};
                fill: currentcolor;
            }
            .suggestion-entry:hover .suggestion-item,
            .suggestion-entry:${I.b} .suggestion-item{background:${A.H.Highlight};
            }
            .suggestion-entry:hover .suggestion-item *,
            .suggestion-entry:hover .suggestion-item svg path,
            .suggestion-entry:${I.b} .suggestion-item *,
            .suggestion-entry:${I.b} .suggestion-item svg path{color:${A.H.HighlightText};
                fill: currentcolor;
            }
        `));var B=n(44475);const R=i.SD.compose({name:`${B.j.prefix}-money-card`,template:f,styles:E})},1931:function(t,e,n){"use strict";n.d(e,{SD:function(){return f},NV:function(){return i},Lb:function(){return r}});var i,o,r,s,a=n(33940),l=n(42590),c=n(99452),u=n(23526),d=n(28904);class h extends d.H{}class p extends((0,u.Um)(h)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}!function(t){t.full="full",t.half="half"}(i||(i={})),function(t){t.Currency="currencyPair",t.Commodity="future",t.ETF="etf",t.Funds="fund",t.Indices="index",t.Stocks="stock"}(o||(o={})),function(t){t.ShowData="showData",t.EmptyWatchlist="emptyWatchlist",t.AddWatchlist="addWatchlist"}(r||(r={})),function(t){t.Watchlist="watchlist",t.Market="market"}(s||(s={}));class f extends p{constructor(){super(...arguments),this.layout=i.half,this.optionSwitch=!1,this.target="_blank",this.showChangeValue=!1,this.swapGainLossColor=!1}getQuoteColor(t,e,n,i,o){return e?o:this.swapGainLossColor?t?n:i:t?i:n}optionClicked(){this.$emit("action-click-option");const t=this.titleArea.querySelector("#option-button");t&&t.focus()}blurOption(){const t=this.titleArea.querySelector("#option-button");t&&t.blur()}onBlurOption(){this.$emit("action-blur-option")}onTitleClicked(){this.$emit("action-title-clicked")}changeShowingValue(){this.showChangeValue=!this.showChangeValue}handleTextInput(){this.inputControl&&(this.value=this.inputControl.value,this.$emit("action-text-input",this.inputControl.value))}addToWatchlist(t){this.inputControl&&(this.inputControl.value="",this.value=""),this.$emit("action-add-to-watchlist",t)}addSymbolAction(t){0===t.button&&(this.$emit("action-add-symbol"),this.blurOption())}hideCardAction(t){0===t.button&&(this.$emit("action-hide-card"),this.blurOption())}dataProviderAction(t){0===t.button&&(this.$emit("action-data-provider"),this.blurOption(),window.open(this.dataProviderLink))}moreSettingAction(t){0===t.button&&(this.$emit("action-more-setting"),this.blurOption())}}(0,a.gn)([l.Lj],f.prototype,"layout",void 0),(0,a.gn)([l.Lj],f.prototype,"titleStr",void 0),(0,a.gn)([l.Lj],f.prototype,"titleLink",void 0),(0,a.gn)([(0,l.Lj)({mode:"boolean"})],f.prototype,"userSignedIn",void 0),(0,a.gn)([l.Lj],f.prototype,"dataFrom",void 0),(0,a.gn)([l.Lj],f.prototype,"quoteItems",void 0),(0,a.gn)([(0,l.Lj)({mode:"boolean"})],f.prototype,"optionSwitch",void 0),(0,a.gn)([l.Lj],f.prototype,"cardType",void 0),(0,a.gn)([(0,l.Lj)()],f.prototype,"footer",void 0),(0,a.gn)([(0,l.Lj)()],f.prototype,"footerLink",void 0),(0,a.gn)([(0,l.Lj)()],f.prototype,"dataProviderLink",void 0),(0,a.gn)([l.Lj],f.prototype,"target",void 0),(0,a.gn)([c.LO],f.prototype,"showChangeValue",void 0),(0,a.gn)([(0,l.Lj)({mode:"boolean"})],f.prototype,"swapGainLossColor",void 0),(0,a.gn)([l.Lj],f.prototype,"addSymbolBtnStr",void 0),(0,a.gn)([l.Lj],f.prototype,"emptyWatchlistStr",void 0),(0,a.gn)([l.Lj],f.prototype,"searchSuggestions",void 0),(0,a.gn)([(0,l.Lj)({mode:"boolean"})],f.prototype,"showSuggestions",void 0),(0,a.gn)([l.Lj],f.prototype,"searchPlaceholder",void 0),(0,a.gn)([(0,l.Lj)({mode:"boolean"})],f.prototype,"noSuggestion",void 0),(0,a.gn)([l.Lj],f.prototype,"noSuggestionHint",void 0),(0,a.gn)([l.Lj],f.prototype,"addSymbolOptStr",void 0),(0,a.gn)([l.Lj],f.prototype,"hideCardOptStr",void 0),(0,a.gn)([l.Lj],f.prototype,"dataProviderOptStr",void 0),(0,a.gn)([l.Lj],f.prototype,"moreSettingOptStr",void 0)},49379:function(t,e,n){"use strict";n.d(e,{D3:function(){return P}});var i=n(44475),o=n(33940),r=n(31289),s=n(33818),a=n(42590),l=n(99452),c=n(23526),u=n(28904);class d extends u.H{}class h extends((0,c.Um)(d)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class p extends h{constructor(){super(...arguments),this.clearButtonCallback=()=>{}}readOnlyChanged(){this.proxy instanceof HTMLElement&&(this.proxy.readOnly=this.readOnly)}autocompleteChanged(){this.proxy instanceof HTMLElement&&(this.proxy.autocomplete=this.autocomplete)}autofocusChanged(){this.proxy instanceof HTMLElement&&(this.proxy.autofocus=this.autofocus)}placeholderChanged(){this.proxy instanceof HTMLElement&&(this.proxy.placeholder=this.placeholder)}maxlengthChanged(){this.proxy instanceof HTMLElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLElement&&(this.proxy.minLength=this.minlength)}sizeChanged(){this.proxy instanceof HTMLElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLElement&&(this.proxy.spellcheck=this.spellcheck)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}valueChanged(){this.$fastController.isConnected&&this.setFormValue(this.value),this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.$emit("change")}submitSearch(){var t;this.$emit("submit"),null===(t=this.form)||void 0===t||t.submit()}connectedCallback(){super.connectedCallback(),this.autofocus&&this.focus(),this.setFormValue(this.value,this.value)}handleTextInput(){this.control&&null!==this.control.value&&(this.value=this.control.value)}onFocus(){this.enableClearButton&&(this.showClearButton=!0)}onBlurs(){this.enableClearButton&&(this.showClearButton=!1)}clearValue(){this.control&&(this.control.value="",this.clearButtonCallback())}}(0,o.gn)([(0,a.Lj)({attribute:"readonly",mode:"boolean"})],p.prototype,"readOnly",void 0),(0,o.gn)([a.Lj],p.prototype,"autocomplete",void 0),(0,o.gn)([(0,a.Lj)({mode:"boolean"})],p.prototype,"autofocus",void 0),(0,o.gn)([a.Lj],p.prototype,"placeholder",void 0),(0,o.gn)([(0,a.Lj)({converter:a.Id})],p.prototype,"maxlength",void 0),(0,o.gn)([(0,a.Lj)({converter:a.Id})],p.prototype,"minlength",void 0),(0,o.gn)([(0,a.Lj)({converter:a.Id})],p.prototype,"size",void 0),(0,o.gn)([(0,a.Lj)({mode:"boolean"})],p.prototype,"spellcheck",void 0),(0,o.gn)([(0,a.Lj)({mode:"boolean"})],p.prototype,"isOnImage",void 0),(0,o.gn)([(0,a.Lj)({mode:"boolean"})],p.prototype,"enableClearButton",void 0),(0,o.gn)([l.LO],p.prototype,"showClearButton",void 0),(0,o.gn)([l.LO],p.prototype,"clearButtonCallback",void 0),(0,o.gn)([(0,a.Lj)({attribute:"button-label"})],p.prototype,"buttonLabel",void 0),(0,o.gn)([l.LO],p.prototype,"buttonTelemetryTag",void 0),(0,o.gn)([l.LO],p.prototype,"inputTelemetryTag",void 0),(0,o.gn)([l.LO],p.prototype,"defaultSlottedNodes",void 0),(0,r.e)(p,s.hW);var f=n(49218),g=n(41472),v=n(93703),m=n(82701);var b=n(27186),y=n(67739),x=n(24484),w=n(29717),$=n(55135),C=n(53131),k=n(27460),S=n(62734),T=n(74449),L=n(40009),O=n(42689),I=n(80260),A=n(26738),H=n(22674),D=n(78923),F=n(22798);const E=w.KJ.with(window.matchMedia("(prefers-color-scheme: dark)")),B=D.i` fluent-button{border-radius:0 var(--search-box-radius) var(--search-box-radius) 0}.searchoptions{right:70px}`,R=D.i` fluent-button{border-radius:var(--search-box-radius) 0 0 var(--search-box-radius)}.searchoptions{left:70px}`,j=D.i`
    ${(0,b.j)("inline-flex")} :host{--search-box-radius:calc(${$.UW} * 2px);
        font-family: ${C.S};
        outline: none;
        user-select: none;
        --elevation: 4;
        border-radius: var(--search-box-radius);
        transition: all 0.2s ease-in-out;
        position: relative;
        background: ${k.s};
        ${S.XC}}.root{box-sizing:border-box;position:relative;display:flex;flex-direction:row;color:${T.Q};border-radius:var(--search-box-radius) 0 0 var(--search-box-radius)}.control{-webkit-appearance:none;background:transparent;border:0;margin-top:auto;margin-bottom:auto;border:none;padding:calc(${L._5} * 2px + 2px) 12px;
        color: ${O.C};
        ${""} font-size:15px;font-weight:400;line-height:24px;width:100%;z-index:1}.searchoptions{position:absolute;z-index:900}input[type="search"]::-webkit-search-decoration,input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-results-button,input[type="search"]::-webkit-search-results-decoration{display:none}.control:hover,.control:${y.b},.control:disabled,.control:active{outline:none}.before-content,.after-content{${""} width: 16px;
        height: 16px;
        margin: auto;
        fill: ${O.C}}.end-slot{display:flex;justify-content:center;align-items:center}fluent-button{height:auto;position:relative}fluent-button.stealth{background:transparent}fluent-button.stealth:hover{background:${I.Qp}}fluent-button::part(control){padding-right:24px !important;padding-left:24px !important}:host(:hover:not([disabled])){--elevation:6;${S.XC}}:host([isonimage]) .end-slot slot[name="end"] > svg{fill:${A.go}}:host([isonimage]) fluent-button.stealth:hover{background:transparent}:host([disabled]) .label,:host([readOnly]) .label,:host([readOnly]) .control,:host([disabled]) .control{cursor:${x.H}}:host([disabled]){opacity:var(--disabled-opacity)}:host([disabled]) fluent-button{pointer-events:none}`.withBehaviors(new H.O(B,R),E(D.i` :host([isonimage]) .end-slot slot[name="end"] > svg{fill:${O.C};
                }
            `),(0,w.vF)(D.i` :host{forced-color-adjust:none;background:${F.H.Field};
                    box-shadow: ${F.H.FieldText} 0px 0px 0px 1px}:host(:hover:not([disabled])){box-shadow:${F.H.Highlight} 0px 0px 0px 1px}:host([isonimage]) .end-slot slot[name="end"] > svg{fill:${F.H.ButtonText}}:host([isonimage]) fluent-button.stealth:hover svg{fill:${F.H.HighlightText}}:host([disabled]){box-shadow:${F.H.GrayText} 0px 0px 0px 1px;opacity:1}:host([disabled]) .label,input::placeholder{color:${F.H.GrayText}}:host([disabled]) fluent-button::part(control){background:${F.H.ButtonFace};
                    color: ${F.H.GrayText};fill:currentColor}.control{color:${F.H.FieldText};
                    fill: currentColor;
                }
            `)),P=p.compose({name:`${i.j.prefix}-search-box`,template:(_={endContent:f.dy`
        <svg
            width="20"
            height="20"
            viewBox="3 3 14 14"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8.5 3a5.5 5.5 0 014.23 9.02l4.12 4.13a.5.5 0 01-.63.76l-.07-.06-4.13-4.12A5.5 5.5 0 118.5 3zm0 1a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"
            />
        </svg>
        `,clearContent:f.dy`<svg width="18" height="18" viewBox="0 0 12 12"><path d="M6.85 6 12 11.15l-.85.85L6 6.85.85 12 0 11.15 5.15 6 0 .85.85 0 6 5.15 11.15 0l.85.85L6.85 6Z"></path></svg>`},f.dy`<template tabindex="${t=>t.disabled?null:0}" class=" ${t=>t.readOnly?"readonly":""} ${t=>t.isOnImage?"onimage":""} " @focus=${t=>t.onFocus()} @blur=${t=>t.onBlurs()}><div class="root" part="root">${m.h}<input class="control" part="control" type="search" id="${t=>t.id}" title="${t=>t.title}" name="${t=>t.name}" @input=${t=>t.handleTextInput()} aria-label="${t=>t.title}" placeholder=${t=>t.placeholder} autocomplete=${t=>t.autocomplete} ?required=${t=>t.required} ?disabled=${t=>t.disabled} ?readonly=${t=>t.readOnly} maxlength="${t=>t.maxlength}" minlength="${t=>t.minlength}" ?spellcheck="${t=>t.spellcheck}" :value="${t=>t.value}" ${(0,g.i)("control")} data-t="${t=>t.inputTelemetryTag}" /></div><div class="searchoptions"><slot name="search-options"></slot></div>${(0,v.g)((t=>t.showClearButton),f.dy`<fluent-button part="button" appearance="${t=>t.isOnImage?"stealth":"accent"}" @click="${t=>t.clearValue()}"><span part="end" class="end-slot" ${(0,g.i)("endContainer")}><slot name="end" ${(0,g.i)("end")} @slotchange=${t=>t.handleEndContentChange()}>${_.clearContent||""}</slot></span></fluent-button>`)} ${(0,v.g)((t=>!t.showClearButton),f.dy`<fluent-button part="button" title=${t=>t.buttonLabel} aria-label=${t=>t.buttonLabel} tabIndex=${t=>t.disabled?"-1":"0"} appearance="${t=>t.isOnImage?"stealth":"accent"}" @click="${t=>t.submitSearch()}" @keypress="${t=>t.submitSearch()}" data-t="${t=>t.buttonTelemetryTag}"><span part="end" class="end-slot" ${(0,g.i)("endContainer")}><slot name="end" ${(0,g.i)("end")} @slotchange=${t=>t.handleEndContentChange()}>${_.endContent||""}</slot></span></fluent-button>`)}</template>`),styles:j,shadowOptions:{delegatesFocus:!0}});var _},77370:function(t,e,n){"use strict";n.d(e,{Um:function(){return L}});var i=n(33940),o=n(28904),r=n(42590),s=n(99452);class a extends o.H{moneyCardContentDataChanged(){"Default"!==this.cardStyle&&void 0===this.moneyCardContentData.actionAppearance&&(this.moneyCardContentData.actionAppearance="outline")}getQuoteColor(t,e,n,i,o){return e?o:this.moneyCardContentData.swapGainLossColor?t?n:i:t?i:n}changeShowingValue(){this.showChangeValue=!this.showChangeValue}connectedCallback(){super.connectedCallback(),this.showChangeValue=!1}}(0,i.gn)([(0,r.Lj)({attribute:"layout"})],a.prototype,"layout",void 0),(0,i.gn)([r.Lj],a.prototype,"cardStyle",void 0),(0,i.gn)([r.Lj],a.prototype,"target",void 0),(0,i.gn)([s.LO],a.prototype,"moneyCardContentData",void 0),(0,i.gn)([s.LO],a.prototype,"quoteItems",void 0),(0,i.gn)([s.LO],a.prototype,"showChangeValue",void 0),(0,i.gn)([s.LO],a.prototype,"headerTelemetryTag",void 0),(0,i.gn)([s.LO],a.prototype,"switchValueTelemetryTag",void 0),(0,i.gn)([s.LO],a.prototype,"seeMoreTelemetryTag",void 0);var l=n(49218),c=n(93703),u=n(89150);const d=l.dy`<a class="quote-row" part="quote-row" href="${t=>t.quoteHref}" target=${(t,e)=>e.parent.target} aria-label="${t=>t.displayName} ${t=>t.symbol} ${t=>t.price} ${t=>t.changePcnt}" data-t="${t=>t.telemetryTag}"><div class="quote-view" part="quote-view"><div class="quote-title-container" part="quote-title-container"><span class="quote-title" part="quote-title"><p class="quote-title-content" part="quote-title-content" title="${t=>t.displayName} (${t=>t.symbol})">${t=>t.symbol}</p></span><span class="sec-title" part="sec-title"><p class="sec-title-str" part="sec-title-str" title="${t=>t.displayName} (${t=>t.symbol})">${t=>t.displayName}</p></span></div><div class="quote-title-container" part="quote-title-container"><div class="price" part="price"><span class="price-str" part="price-str">${t=>t.price}</span></div></div><button class="change-values ${(t,e)=>e.parent.getQuoteColor(t.gain,t.unchanged,"quote-red","quote-green","quote-grey")}" part="change-values ${(t,e)=>e.parent.getQuoteColor(t.gain,t.unchanged,"quote-red","quote-green","quote-grey")}" @click="${(t,e)=>e.parent.changeShowingValue()}" aria-label="${(t,e)=>e.parent.showChangeValue?`${t.changeValue} ${t.displayName} ${t.changePcnt}`:`${t.changePcnt} ${t.displayName} ${t.changeValue}`}" data-t="${(t,e)=>e.parent.switchValueTelemetryTag}">${(0,c.g)(((t,e)=>e.parent.showChangeValue),l.dy`<span class="change-button-area" part="change-button-area"><span class="change-values-percentage" part="change-values-percentage">&lrm;${t=>t.changeValue}</span></span>`)} ${(0,c.g)(((t,e)=>!e.parent.showChangeValue),l.dy`<span class="change-button-area" part="change-button-area"><span class="change-values-percentage" part="change-values-percentage">&lrm;${t=>t.changePcnt}&lrm;</span></span>`)}</button></div></a>`,h=l.dy`<msft-structured-data-card target=${t=>t.target} :headerTelemetryTag=${t=>t.headerTelemetryTag} :seeMoreTelemetryTag=${t=>t.seeMoreTelemetryTag} :data=${t=>t.moneyCardContentData}><slot name="more-actions" slot="more-actions"></slot><slot name="pin" slot="pin"></slot><slot name="title-icon" slot="title-icon"></slot><div class="quote-list" part="quote-list">${(0,u.rx)((t=>t.quoteItems),d)}</div><slot name="footer-start" slot="footer-start"></slot><slot name="footer-end" slot="footer-end"></slot></msft-structured-data-card>`;var p=n(42689),f=n(32572),g=n(27782),v=n(74449),m=n(16549),b=n(80260),y=n(17993),x=n(26512),w=n(78923),$=n(27186),C=n(29717),k=n(22798);const S=w.i`
        ${(0,$.j)("flex")} :host{height:100%;--quote-grid-columns:111px 81px 56px}:host(:focus){outline:none}msft-structured-data-card::part(title-link)::after{position:absolute;content:"";top:0;left:0;right:0;bottom:0}.price-str{color:${p.C};
            font-weight: 600;
            text-align: end;
            width: 100%;
            font-size: var(--price-content-font-size, ${f.P});
            line-height: var(--price-content-line-height, ${f.b})}.quote-list{margin-top:var(--quote-list-margin-top,12px);display:grid;grid-template-rows:var(--quote-list-grid-rows,repeat(auto-fill,52px));row-gap:var(--quote-list-grid-gap,2px);z-index:1}.quote-title-content{color:${p.C};
            font-weight: 600;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin: 0;
            font-size: var(--quote-title-font-size, ${g.c});
            line-height: var(--quote-title-line-height, ${g.R})}.sec-title-str{color:${v.Q};
            margin: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: ${m.s};
            line-height: ${m.v}}.quote-row{cursor:pointer;text-decoration:none;padding:var(--quote-row-padding,8px 8px);margin:var(--quote-row-margin,0px 8px)}.quote-row:hover{background:${b.Qp}}.change-values{height:24px;font-family:var(--body-font);border-radius:4px;border:0;padding:0;cursor:pointer;outline:none}.change-values:focus-visible{outline-color:${y.yG};outline-width:2px;outline-style:auto}.change-button-area{display:flex;flex-direction:column;justify-content:flex-end}.change-values-percentage{margin-top:4px;margin-bottom:4px;margin-inline-end:8px;display:block;font-size:${m.s};
            font-weight: 600;
            line-height: ${m.v};text-align:end}.price{align-items:center;display:flex}.quote-title-container{text-decoration:none}.quote-view{align-items:center;display:grid;grid-column-gap:8px;grid-template-columns:var(--quote-grid-columns)}.quote-green{color:#ffffff;background:#107c10}.quote-red{color:#ffffff;background:#d33e3e}.quote-grey{color:#ffffff;background:#808080}`.withBehaviors((0,C.vF)(w.i` :host{forced-color-adjust:auto}.title-link:hover{text-decoration:underline}.change-values,.quote-row:hover{forced-color-adjust:none;background:${k.H.ButtonFace};
                    box-shadow: 0 0 0 calc((${x.vx} - ${x.H}) * 1px)
                        ${k.H.LinkText};
                    color: ${k.H.ButtonText}}::slotted(*[slot="option-button"]){fill:${k.H.ButtonText}}::slotted([slot="option-button"]:hover){background:${k.H.Highlight};
                    fill: ${k.H.HighlightText}}.change-values:focus-visible{outline-color:${k.H.Highlight};
                }
            `));var T=n(44475);const L=a.compose({name:`${T.j.prefix}-show-quotes-money-card`,template:h,styles:S})},65853:function(t,e,n){"use strict";n.d(e,{tH:function(){return x}});var i=n(33940),o=n(42590),r=n(55024);class s extends r.b{constructor(){super(...arguments),this.speed=1200,this.headingLevel=3}}(0,i.gn)([o.Lj],s.prototype,"speed",void 0),(0,i.gn)([(0,o.Lj)({attribute:"heading-level",mode:"fromView",converter:o.Id})],s.prototype,"headingLevel",void 0),(0,i.gn)([o.Lj],s.prototype,"heading",void 0);var a=n(49218),l=n(41472),c=n(47548),u=n(95185),d=n(93703),h=n(82701);const p=a.dy`<template>${h.h}<div class="heading-container" part="heading-container"><span class="header"><slot name="icon"></slot><slot name="heading"><span class="heading" role="heading" aria-level=${t=>t.headingLevel}>${t=>t.heading}</span><slot name="details"></slot></slot><slot name="description"></slot></span><slot name="action"></slot></div><div class="scroll-area"><div part="scroll-view" class="scroll-view" @scroll="${t=>t.scrolled()}" ${(0,l.i)("scrollContainer")}><div class="content-container" part="content-container" ${(0,l.i)("content")}><slot ${(0,c.Q)({property:"scrollItems",filter:(0,u.R)()})}></slot></div></div>${(0,d.g)((t=>"mobile"!==t.view),a.dy`<div class="scroll scroll-prev" part="scroll-prev" ${(0,l.i)("previousFlipperContainer")}><div class="scroll-action" @click="${t=>t.scrollToPrevious()}"><slot name="previous-flipper"><fluent-flipper direction="previous"></fluent-flipper></slot></div></div><div class="scroll scroll-next" part="scroll-next" ${(0,l.i)("nextFlipperContainer")}><div class="scroll-action" @click="${t=>t.scrollToNext()}"><slot name="next-flipper"><fluent-flipper></fluent-flipper></slot></div></div>`)}</div>${h.z}</template>`;var f=n(38492),g=n(94585),v=n(16549),m=n(7771);const b=n(78923).i`
    ${m.W} :host{--scroll-fade-next:${f.I}}.heading-container{display:grid;grid-template-columns:1fr auto;margin:0 0 12px}::slotted([slot="action"]){display:flex;align-items:flex-end}::slotted([slot="icon"]){margin-inline-end:8px}.header,.header ::slotted(h1),.header ::slotted(h2),.header ::slotted(h3),.header ::slotted(h4),.header ::slotted(h5),.header ::slotted(h6){font-size:var(--stripe-heading-font-size,${g.m});
        line-height: var(--stripe-heading-line-height, ${g.I});font-weight:600;margin:0}::slotted([slot="description"]){font-size:${v.s};
        line-height: ${v.v};
        margin: 8px 0 0;
    }
`;var y=n(44475);const x=s.compose({name:`${y.j.prefix}-stripe`,template:p,styles:b})},87275:function(t,e,n){"use strict";n.d(e,{xb:function(){return $}});var i=n(44475),o=n(33940),r=n(28904),s=n(42590),a=n(99452);class l extends r.H{constructor(){super(...arguments),this.pinned=!1}}(0,o.gn)([s.Lj],l.prototype,"target",void 0),(0,o.gn)([(0,s.Lj)({mode:"boolean"})],l.prototype,"pinned",void 0),(0,o.gn)([a.LO],l.prototype,"data",void 0),(0,o.gn)([a.LO],l.prototype,"headerTelemetryTag",void 0),(0,o.gn)([a.LO],l.prototype,"seeMoreTelemetryTag",void 0);var c=n(27186),u=n(67739),d=n(29717),h=n(78923),p=n(22798),f=n(53131),g=n(42689),v=n(16549),m=n(80260);const b=h.i`
    ${(0,c.j)("grid")}:host{position:relative;width:auto;height:100%;box-sizing:border-box;font-family:${f.S};grid-template-rows:auto 1fr auto;padding:var(--content-padding,16px 0);outline:none}:host([pinned]){padding:var(--content-padding,0 16px 16px 16px)}:host([pinned]) .title-link{cursor:pointer}:host([pinned]) .title{cursor:var(--cursor-styles);padding:var(--title-padding,16px 0 0)}.footer{display:grid;grid-template-columns:1fr auto 1fr;padding:var(--footer-padding,0 16px)}.title{overflow:hidden;display:grid;grid-template-columns:1fr auto auto;grid-gap:8px;padding:var(--title-padding,0 16px);overflow:visible;align-items:center}.title-link{display:grid;grid-template-columns:auto 1fr;grid-gap:8px;color:${g.C};
        font-size: ${v.s};
        justify-content: flex-start;
        line-height: ${v.v};
        outline: none;
        cursor: pointer;
        text-decoration: none;
        margin-inline-end: auto;
    }

    .title-link:hover,
    .title-link:active,
    .title-link:${u.b}{text-decoration:underline}.title-link:${u.b} > .title-content{text-decoration:underline}.title-content{font-size:${v.s};
        line-height: ${v.v};margin-top:4px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;-webkit-line-clamp:var(--title-max-lines,1)}::slotted([slot="title-icon"]){margin-top:4px}.sd-action{--control-corner-radius:16;grid-column:2;z-index:1}.sd-action:not([appearance="lightweight"]){font-size:${v.s};
        line-height: ${v.v}}.sd-action::part(control){width:100%;padding:var(--sd-action-padding,0px 24px)}.sd-action::part(content){-webkit-box-orient:vertical;-webkit-line-clamp:1;text-overflow:ellipsis;overflow:hidden}::slotted([slot="more-actions"]){min-width:var(--more-actions-size,24px);width:var(--more-actions-size,24px);height:var(--more-actions-size,24px);--control-corner-radius:var(--more-actions-corner-radius,16);z-index:1;grid-column:3;background-color:transparent}::slotted([slot="more-actions"]:hover){background-color:${m.Qp}}::slotted([slot="more-actions"]:active){background-color:${m.sG}}::slotted([slot="pin"]){fill:${g.C};
        margin-inline-end: 6px;
    }
`.withBehaviors((0,d.vF)(h.i` .title-link{color:${p.H.CanvasText}}a[href]{color:${p.H.LinkText};
                }
            `));var y=n(49218),x=n(93703);const w=y.dy`<div class="title" part="title" role="heading" aria-level="2">${(0,x.g)((t=>{var e;return null===(e=null==t?void 0:t.data)||void 0===e?void 0:e.titleContent}),y.dy`<a class="title-link" part="title-link" href="${t=>{var e;return null===(e=t.data)||void 0===e?void 0:e.link}}" target=${t=>t.target} title="${t=>{var e,n,i;return null!==(n=null===(e=t.data)||void 0===e?void 0:e.titleContentHint)&&void 0!==n?n:null===(i=t.data)||void 0===i?void 0:i.titleContent}}" data-t="${t=>t.headerTelemetryTag}"><slot name="title-icon"></slot><div class="title-content" part="title-content">${t=>{var e;return null===(e=t.data)||void 0===e?void 0:e.titleContent}}</div><slot name="weather-pen-btn"></slot><slot name="weather-map-btn"></slot></a>`)}<slot name="pin"></slot><slot name="more-actions"></slot></div><slot></slot><div class="footer" part="footer"><slot name="footer-start"></slot>${(0,x.g)((t=>{var e;return null===(e=null==t?void 0:t.data)||void 0===e?void 0:e.footerContent}),y.dy`<fluent-anchor class="sd-action" part="sd-action" appearance="${t=>{var e;return null===(e=t.data)||void 0===e?void 0:e.actionAppearance}}" href="${t=>{var e,n,i;return(null===(e=t.data)||void 0===e?void 0:e.footerLink)?null===(n=t.data)||void 0===n?void 0:n.footerLink:null===(i=t.data)||void 0===i?void 0:i.link}}" target=${t=>t.target} data-t="${t=>t.seeMoreTelemetryTag}">${t=>{var e;return null===(e=t.data)||void 0===e?void 0:e.footerContent}}</fluent-anchor>`)}<slot name="footer-end"></slot></div>`,$=l.compose({name:`${i.j.prefix}-structured-data-card`,template:w,styles:b})},9072:function(t,e,n){"use strict";n.d(e,{Sf:function(){return f},w_:function(){return p},px:function(){return C},UT:function(){return g},PX:function(){return $},IY:function(){return v},A4:function(){return y}});var i=n(52704),o=n(42355),r=n(35680),s=n(56837),a=n(74449),l=n(72582),c=n(84659),u=n(38492),d=n(53749);const{create:h}=i.L,p=h("gradient-white-fill").withDefault((t=>(0,d.Y)(.8,1,o.w.create(1,1,1),t(r.wF)))),f=h("gradient-background-fill").withDefault((t=>(0,d.Y)(0,1,null,t(r.wF)))),g=h("neutral-fill-bubble-on-rest").withDefault((t=>function(t,e){const n=t.closestIndexOf(e);return t.get(n-5)}(t(s.y),t(r.wF)))),v=h("neutral-foreground-hint-on-bubble-on-rest").withDefault((t=>t(a.a).evaluate(t,t(g))));function m(t,e,n){return t.get(t.closestIndexOf(function(t){return o.w.create(t,t,t)}(e))-n)}const b=h({name:"neutral-layer-card-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>m(t(s.y),t(l.q),t(c.Y))}),y=h("neutral-layer-card").withDefault((t=>t(b).evaluate(t))),x=h("neutral-fill-bubble-rest-delta",6),w=h("neutral-fill-bubble-hover-delta",9),$=h("neutral-fill-bubble-rest",(t=>{const e=t(s.y),n=e.closestIndexOf(t(u.I)),i=n>=10?-1:1;return e.get(n+i*t(x))})),C=h("neutral-fill-bubble-hover",(t=>{const e=t(s.y),n=e.closestIndexOf(t(u.I)),i=n>=10?-1:1;return e.get(n+i*t(w))}))},89442:function(t,e,n){"use strict";n.d(e,{U:function(){return r},W:function(){return o}});var i=n(78923);const o=i.i`
    .line-clamp {
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: var(--heading-max-lines, 3);
    }
`,r=i.i`
    .sd-action:not([appearance="lightweight"]) {
        --control-corner-radius: 999;
        font-size: var(--type-ramp-minus-1-font-size);
        line-height: var(--type-ramp-minus-1-line-height);
    }

    .sd-action::part(control) {
        width: 100%;
    }

    .sd-action::part(content) {
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        text-overflow: ellipsis;
        overflow: hidden;
    }
`},41789:function(t,e,n){"use strict";function i(t,e){let n=e;for(;null!==n;){if(n===t)return!0;n=o(n)}return!1}function o(t){const e=t.parentElement;if(e)return e;{const e=t.getRootNode();if(e.host instanceof HTMLElement)return e.host}return null}n.d(e,{M:function(){return i},T:function(){return o}})},53749:function(t,e,n){"use strict";n.d(e,{Y:function(){return r}});var i=n(11162),o=n(2696);function r(t=0,e=1,n,r){const s=r.toColorString(),{r:a,g:l,b:c}=(0,i.in)(s),u=`linear-gradient(160deg, ${new o.h(a,l,c,t).toStringWebRGBA()}, ${new o.h(a,l,c,e).toStringWebRGBA()})`;if(n){return[u,null==n?void 0:n.toColorString()].join()}return u}},92059:function(t,e,n){"use strict";n.d(e,{Y:function(){return c},s:function(){return l}});var i=n(38492),o=n(78125),r=n(11162),s=n(60279);const a=(0,n(9791).Z)((t=>{let e=(0,r.in)(t);if(null!==e)return e;if(e=(0,r.hg)(t),null!==e)return e;throw new Error(`${t} cannot be converted to a ColorRGBA64. Color strings must be one of the following formats: "#RGB", "#RRGGBB", or "rgb(r, g, b)"`)}));function l(t){return(0,s.hM)(a(t))}class c{constructor(t,e){this.cache=new WeakMap,this.light=t,this.dark=e}connectedCallback(t){this.attach(t.source)}disconnectedCallback(t){const e=this.cache.get(t.source);e&&i.I.unsubscribe(e)}attach(t){const e=this.cache.get(t)||new u(this.light,this.dark,t),n=i.I.getValueFor(t);i.I.subscribe(e),e.attach(n),this.cache.set(t,e)}}class u{constructor(t,e,n){this.light=t,this.dark=e,this.source=n,this.attached=null}handleChange(t,e){try{this.attach("default"===e.target?t.default:t.getValueFor(this.source))}catch(t){}}attach(t){if(window.matchMedia("(forced-colors: active)").matches)return;const e=l(t.toColorString())<=o.h.DarkMode?"dark":"light";this.attached!==this[e]&&(null!==this.attached&&this.source.$fastController.removeStyles(this.attached),this.attached=this[e],null!==this.attached&&this.source.$fastController.addStyles(this.attached))}}},82701:function(t,e,n){"use strict";n.d(e,{h:function(){return r},z:function(){return o}});var i=n(49218);const o=i.dy`
<span part="end" class="end">
    <slot name="end"></slot>
</span>
`,r=i.dy`
<span part="start" class="start">
    <slot name="start"></slot>
</span>
`}}]);