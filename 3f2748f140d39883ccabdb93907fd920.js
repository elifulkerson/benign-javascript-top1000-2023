  ;(function(global){
	var run_once = true,
	// cookie-set domains: update if necessary
	doms = [
		'privacy.libero.it',
		'privacy.virgilio.it',
		'privacy.italiaonline.it',
		'myblog.it',
		'privacy.quifinanza.it',
		'privacy.siviaggia.it',
		'privacy.dilei.it',
		'privacy.supereva.it',
		'privacy.pgcasa.it',
		'privacy.paginegialle.it',
		'privacy.paginebianche.it',
		'privacy.tuttocitta.it',
		'privacy.buonissimo.it'
	],
	// mapping policy_cookie position / purposes (add 100 for special purposes ids)
	cmap=[
		[6],
		[101],
		[5],
		[4],
		[],
		[],
		[6],
		[9],
		[],
		[],
		[],
		[],
		[],
		[]
	],
	baseUrl = '/common/cookie/api/set_local_policy_cookie.php?value=%coo%&r=%rnd%',
	cookieName = "policy_cookie",
	getCookie = function(e){
		return document.cookie.length>0&&(c_start=document.cookie.indexOf(e+"="),-1!=c_start)?(c_start=c_start+e.length+1,c_end=document.cookie.indexOf(";",c_start),-1==c_end&&(c_end=document.cookie.length),unescape(document.cookie.substring(c_start,c_end))):""
	},
	generateCookie = function(d){
		var res = [0,0,0,0,1,1,0,0,'_',1,1,1,1,1]; // default cookie
		if(typeof(d.purpose) !== 'undefined')
			if(typeof(d.purpose.consents) !== 'undefined')
				if(typeof(d.specialFeatureOptins) !== 'undefined'){
					for(var i=0;i<cmap.length;i++){
						var ok=1;
						if(cmap[i].length>0){
							for(var ii=0;ii<cmap[i].length;ii++){
								var n = cmap[i][ii], y=false;
								if(n<100){
									// purpose
									if(typeof(d.purpose.consents[n])!=='undefined') if(d.purpose.consents[n]===true) y=true; 
								}else{
									// special
									n=n-100;
									if(typeof(d.specialFeatureOptins[n])!=='undefined') if(d.specialFeatureOptins[n]===true) y=true; 
								}
								if(!y) {
									ok=0;
									break;
								}
							}
						} else ok=0;
						if(ok !== 0) res[i] = ok;
					}
				}
		var c = res.join("");
		return c;
	},
	updateCookies = function(c){
		// update policy cookie
		console.log("*** IOLCMP: UPDATING POLICY COOKIE");
		var bu = baseUrl.replace('%coo%',c).replace('%rnd%',Math.floor(Math.random()*999999999)), im = [], doma = '---';
		try{
			var d = global.location.hostname;
			d = d.split('.');
			if(d.length>2) d.shift();
			if(d.length>2) d.shift();
			if(d.length>2) d.shift();
			if(d.length===2) doma = d[0]+"."+d[1];
		}catch(er){}
		for(var i=0; i<doms.length; i++){
			if(doms[i].indexOf(doma)>-1) {
				//im[i]=new Image();
				//im[i].src = 'https://' + doms[i] + bu;
				var date = new Date();
				date.setTime(date.getTime() + (365*24*60*60*1000));
				document.cookie = "policy_cookie="+c+"; expires="+date.toUTCString()+"; Max-Age=31536000; path=/; samesite=None; domain="+doma+"; secure";
			}
		}
	},
	// "DataRecs geo vlocal Advertising tmp1 tmp2 af xedge".
	mainThread = function(){
		if(run_once){
			run_once = false;
			console.log("*** IOLCMP: 2.0");
			var run_once_2 = false;
			if(typeof global.__tcfapi !== 'undefined') global.__tcfapi('addEventListener', 2, function(d, ls){
				var do_stuff = function(){
					if(ls){
						if(d.tcString){ // if meaningful
							if(typeof(global._cmp_callback_) === 'function'){
								global._cmp_callback_(d);
							}
							var cc = getCookie(cookieName);
							var nc = generateCookie(d); // generate cookie from tcf2.0
							if(cc !== nc) { // if different from the current...
								updateCookies(nc);
							} else console.log("*** IOLCMP: NO CHANGES IN POLICY COOKIE");
							
							// display consent UI
							try {var qs=''; qs=global.location.search.substr(1); if((qs.indexOf('showCookiePolicy')>-1)&&!run_once_2) {run_once_2=true;_iub.cs.api.openPreferences();}} catch(er){}
						}
					}
				}
				setTimeout(do_stuff, 1); // detach from ___tcfapi event
			});
		}
	};
	
	mainThread();

	try{
		if(typeof global._iub !== 'undefined'){
			var gran = getCookie("_iub_cs-89638261-granular");
			if(gran)if(gran.length>30){
				global.gran_iub_fix = 1;
				//global.document.cookie = "_iub_cs-89638261-granular=;path=/;domain=.virgilio.it;SameSite=None;Secure;HostOnly;expires=Thu, 01 Jan 1970 00:00:01 GMT";
				//global.document.cookie = "euconsent-v2=;path=/;domain=.virgilio.it;SameSite=None;Secure;HostOnly;expires=Thu, 01 Jan 1970 00:00:01 GMT";
			}
		}
	}catch(er){}
	
}(window));




;(function(global){

	var res, once = true, pop = false, sample = 1;

	if(Math.random() >= sample) return;
	
	try {res = screen.width;} catch(er){res = 0;}
 
	function send_event(evt, val){
		var tme, dom;
		try {tme = Date.now();} catch(er){tme = 0;}
		try {if(typeof val === 'undefined') val = Math.floor(performance.now());} catch(er){val=0;}
		try {dom = window.location.hostname;} catch(er){dom = 'error';}
		var url = "https://evnt.iol.it/v2?&pgnf="+dom+"%2Call%2C%2C%2C%2C0%2C"+res+"%2C0%2C%2Cb%2C0%2C%2C"+evt+"%2C"+val+"&nc="+tme;
		var i=new Image();
		i.src = url;
		console.log("*** "+evt+" "+val);
	}
 
	send_event('cmpdbg_init');
	
	if(typeof global.gran_iub_fix !== 'undefined') send_event('cmpdbg_granular_fix');
	
	if(typeof global.__tcfapi !== 'undefined') global.__tcfapi('addEventListener', 2, function(d, ls){
		if(ls){
			if(d){
				if(d.tcString){
					setTimeout(function(){
						if(once){
							once = false;
							var ok = true, err = false, gog_ok = true, spec_gog = false, spec_legit = false, pst_pop = '';
							if(pop)send_event('cmpdbg_pop_close');
							try {
								
								if(!(d.purpose.consents[2]===true)) ok = false;
								if(!(d.purpose.consents[7]===true)) ok = false;
								if(!(d.purpose.consents[9]===true)) ok = false;
								if(!(d.purpose.consents[10]===true)) ok = false;
					
								if(!(d.vendor.consents[755]===true)) {gog_ok = false;}

							}  catch(er) {
								ok = false;
								gog_ok = false;
								err = true;
							}
							if(pop) pst_pop = '_pop';
							if(err) send_event('cmpdbg_error'+pst_pop);
							else if((ok)&&(gog_ok)) send_event('cmpdbg_true'+pst_pop);
							else if((!gog_ok)&&(ok)) {
								if(spec_gog) send_event('cmpdbg_google_legit_false'+pst_pop);
								send_event('cmpdbg_google_false'+pst_pop);
							} else { 
								if(spec_legit) send_event('cmpdbg_legit_undef'+pst_pop);
								send_event('cmpdbg_false'+pst_pop);
							}
						}
					},1);
				} else {
					if(!pop){
						if(d.eventStatus){
							if(d.eventStatus==="cmpuishown"){
								send_event('cmpdbg_pop_open');
								pop = true;
							}
						}
					}
				}
			}
		}
	});

	var stub_ok = true;
	if(typeof global.__tcfapi === 'undefined') stub_ok = false;
	
	setTimeout(function(){
		if((!pop)&&(once)){
			if(!stub_ok) send_event('cmpdbg_timeout_stub');
			if(typeof global._iub === 'undefined') {
				send_event('cmpdbg_timeout_iub');
				return;
			}
			if(typeof global._iub.csConfiguration === 'undefined') send_event('cmpdbg_timeout_conf');
			if(typeof global._iub.invTcfU === 'undefined') send_event('cmpdbg_timeout_cs');
			else if(typeof global._iub.i18nForBanner === 'undefined') send_event('cmpdbg_timeout_core');
			else if(typeof global._iub.cmp.VERSION.stubV2 !== 'undefined') send_event('cmpdbg_timeout_tcf2');
		}
	}, 5000);
	
}(window));