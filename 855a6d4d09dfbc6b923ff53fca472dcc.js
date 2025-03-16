//var adv_rand = Math.round(new Date().getTime()/1000/60/5);
var adv_rand = Math.round(new Date().getTime()/1000);
var adv_js_url = '<script src="//yuansu.bjmama.net/a/spc_74.js?rand='+adv_rand+'" type="text/javascript" charset="utf-8"><\/script>';
window.document.write(adv_js_url);
function mama_adv_run() {
	var zonenames = '';
		oa_load_count_adv_impr(zonenames);
}
setTimeout("mama_adv_run()",3000);