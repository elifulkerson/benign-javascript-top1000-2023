TD.boot_data.xhp = true;
TD.boot_data.version_uid = "6eec9331bd59792085581119fb8a5ebc7a07d078";
TD.boot_data.environment = "prod";
TD.boot_data.abs_root_url = "https:\/\/slack.com\/";
TD.boot_data.document_referrer = "";

TD.boot_data.anonymous_visitor = false;
TD.boot_data.beacon_timing_url = "https:\/\/slack.com\/beacon\/timing";
TD.boot_data.referral_code = "";
TD.boot_data.auth_cookie_domain = ".slack.com";

TD.boot_data.geo = {"ip":"70.163.140.175","country":"US","region":"AZ","city":"Sahuarita","zip":"85629","lat":31.9455,"lon":-110.9973,"metro":789,"country_label":"United States","region_label":"Arizona","country3":"USA","continent":"NA","isp":"Cox Communications"};
TD.boot_data.geocode = "en-us";
TD.boot_data.intl_prefix = "";
TD.boot_data.request_uri = "\/";
TD.boot_data.canonical_web_url = "https:\/\/slack.com\/";
TD.boot_data.i18n_locale = "en-US";
TD.boot_data.geo_root_url = "https:\/\/slack.com\/";

TD.boot_data.is_usa = true;
TD.boot_data.is_spain = false;
TD.boot_data.is_germany = false;
TD.boot_data.is_france = false;
TD.boot_data.is_japan = false;
TD.boot_data.is_europe = false;

TD.boot_data.is_latam = false;
TD.boot_data.is_brazil = false;
TD.boot_data.is_india = false;
TD.boot_data.is_uk = false;

TD.boot_data.is_english = true;
TD.boot_data.is_spanish = false;
TD.boot_data.is_german = false;
TD.boot_data.is_french = false;
TD.boot_data.is_japanese = false;
TD.boot_data.is_portuguese = false;

TD.boot_data.job_board_token = "slack";
TD.boot_data.zd_locale = "en-us";


TS.boot_data = {};
_.extend(TD.boot_data, TS.boot_data);
TD.model.user_id = TD.boot_data.user_id;

TD.model.user_realname  = TD.boot_data.user_realname;
TD.model.user_email = TD.boot_data.user_email;

TD.model.team_id = TD.boot_data.team_id;
TD.model.team_url = TD.boot_data.team_url;
TD.model.team_domain = TD.boot_data.team_domain;
TD.model.visitor_uid = "04ae4fb03acdcbe394fe49d18338e150";
TD.model.enterprise_id = TD.boot_data.enterprise_id;

TD.model.session_id = "04ae4fb03acdcbe394fe49d18338e150.1697428462";
TD.model.session_is_fresh = true;

TD.model.is_first_visit = true;
TD.model.is_customer =  (TD.model.visitor_uid.indexOf('.') == 0);
TD.model.is_prospect = !TD.model.is_customer;
TD.model.is_signed_in = !!(TD.model.user_id);

TD.model.num_signed_in_users = 0;
TD.model.is_enterprise = !!(TD.boot_data.enterprise_id);
TD.cms = {};
TD.cms.is_cms = false;
TD.cms.is_preview = false;
TD.cms.is_home = false;
TD.cms.is_index = false;
TD.cms.is_single = false;
TD.cms.is_tag = false;
TD.cms.is_collection = false;
TD.cms.asset_id = 0;
TD.model.curr_plan = '';
TD.boot_data.clog_ui_step = "page_home";
if(TD.boot_data.team_id) TD.clog.setTeam(TD.boot_data.team_id);
if(TD.boot_data.user_id) TD.clog.setUser(TD.boot_data.user_id);
TD.boot_data.is_ls_eligible = false;
TD.boot_data.should_ls_load = false;
TD.boot_data.feature_engage_users_lp_v2 = true;