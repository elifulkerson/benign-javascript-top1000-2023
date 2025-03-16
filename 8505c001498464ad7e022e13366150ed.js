var utag_data = 
{"page_level_1":"","organization_uuid":"anonymous","organization_name":"anonymous","user_login_type":"anonymous","us_em":"anonymous","content_uuid":"0000014b-3270-d4f3-a3cb-f3ffa8610000/00000162-6360-dbb9-a9ee-ef7e43ca0000","distribution_channel":"politico","free_paid_content":"free","original_headline":"homepage","site_section":"homepage","ad_unit_section":"core-home","viewport_ads_id":"pol-vp","site_domain":"www.politico.com","site_url":"https://www.politico.com/","internal_site_id":"politico","page_type":"homepage","page_name":"POLITICO Home","enable_prebid":"true","enable_anchor_ad":"true"};

if (typeof(Storage) !== 'undefined') {
 if (localStorage.uId !== undefined && localStorage.uId !== '') {
utag_data["us_id"] = localStorage.uId;
}
 if (localStorage.uStatus !== undefined && localStorage.uStatus !== '') {
utag_data["us_st"] = localStorage.uStatus;} else {
utag_data["us_st"] = "anonymous";
}
 if (localStorage.uCid !== undefined && localStorage.uCid !== '') {
utag_data["us_co"] = localStorage.uCid;
}
}
;(function(a,b,c,d){
a='//tags.tiqcdn.com/utag/politico/main/prod/utag.js';
b=document;c='script';d=b.createElement(c);d.src=a;d.type='text/java'+c;d.async=true;
a=b.getElementsByTagName(c)[0];a.parentNode.insertBefore(d,a);
})();