doWithAds(function(){
if (ad_utils && typeof CREM != 'undefined') {
ad_utils.CREM = CREM;
}
generic.monitoring.record_metric("ads_js_request_to_done", (new Date().getTime()) - window.ads_js_start);
generic.send_csm_head_metrics && generic.send_csm_head_metrics();
if (ad_utils && ad_utils.set_slots_on_page) {
ad_utils.set_slots_on_page({ 'inline20':1, 'sis_pixel':1, 'inline40':1 });
}
custom.full_page.data_url = "https://m.media-amazon.com/images/S/sash/LjmweAjwgV1r2dK.js";
consoleLog('advertising initialized','ads');
},"ads js missing, skipping general setup.");