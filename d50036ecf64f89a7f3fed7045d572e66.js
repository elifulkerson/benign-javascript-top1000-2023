var sg_app_type = "desktop";
    var rekid = "7757";
    var is_sg_first = false;
    var source = "";
    var pageSource = 'wp';
    var appVersion = "10.30.5-infinityGlo.1";
    var isLogout = false;
    var isWPNaturally = false;
    var isSgFirstForYou = false;
    var isLogoutNoAd = false;
    var is_static_html = false;
    var wp_fb_id = '933316406876601';
    var wp_ppg_id= '5c779e2fbc5957000c4bbb8b';
    var wp_ppg_key = 'BB8csgMK1KNP_k5Voyl3wnBtNi2witzm1EGqB3zBx7DGcSVCk1HUXRqO5YmNtevcfXfyYRjT5A-WOpNeL_jcAuM';
    var wp_dot_addparams = {"ver":"2016q1","backendVer":"eea22afc496dd07d7aad1fdf92b80faa951c215f","svid":"6f27976e-d880-4a71-9477-eecff63c28f7","abtest-v2":"__notest","noStatid":true,"frontendVer":"10.30.5-infinityGlo.1|20231015","darkmode":0,"cplatform":"sgwp"};
    var registeredSSRSlots = [];
    var WP = [];
    var wp_sn = 'sg';
    var wp_cookie_info = '' || true;
    var desaturateMode = false;
    var wp_dot_type = 'click';
    var siteVersion = 'A';
    var wptests = {};
    var wp_sg_first = is_sg_first;
    var cookieDomain = '.wp.pl';
    var lockAppTimeout = 5000;
    var clientSrc = "https://www.wp.pl/cC5taW4uTCJUFhdkGw5BHBdOQwhrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGtXT2FAVlt1GxNMcRpFUXkHRU12GB0PMV0bCjdMMw04GkRMJ1AHCiNbBU0uXBpPPUdXHg";
    var wp_hj_id = 399723; // hotjar
    var wp_gtm_id = ['GTM-TBF478J'];
    var API_HOST_ONE_LOGIN = 'https://www.wp.pl';
    var API_TEASERS = 'https://www.wp.pl/v1/teasers';
    var API_PRELOAD = 'https://www.wp.pl/v1/data';
    var API_WEATHER = 'https://www.wp.pl/v1/weather';
    var API_STREAM = 'https://www.wp.pl/v2/stream';
    var API_INFINITY_GLO = 'https://www.wp.pl/v1/infinity-glo';
    var API_GRAPHQL = 'https://www.wp.pl/graphql';
    var ARTICLE_PRODUCT_ID = '6755614113666689';
    var wp_scroll_reload = false;
    var wp_pilot_test_count = 0;
    var wp_pilot_performance_test = true;
    var infinity_glo_query = "";

    var rekidConfig = {"index":7757,"article":240878};
    var wp_spa_config = {
      platform: 'desktop',
      desktop: {
        dot: {
          base: 'sg',
          type: wp_dot_type,
          params: wp_dot_addparams,
          bunches: {"index":7757,"article":240878}
        },
        gemius: {
          hit: {
            index: 'coWacc7R.xHk.xzhRC.LgpQJ38OGWzuyOAxvi8UATAr.s7',
            article: '.XA70OsGlHUZ7ZLTjiClOvUHTBSRDuy1Fs1JsiFUysH.O7',
          }
        }
      },
      mobile: {
        dot: {
          base: 'sg',
          type: wp_dot_type,
          params: wp_dot_addparams,
          bunches: {"index":234275,"article":240891}
        },
        gemius: {
          hit: {
            index: 'coWacc7R.xHk.xzhRC.LgpQJ38OGWzuyOAxvi8UATAr.s7',
            article: '.XA70OsGlHUZ7ZLTjiClOvUHTBSRDuy1Fs1JsiFUysH.O7',
          }
        }
      },
    }

    wp_dot_addparams.nn = 1;
    wp_dot_addparams.is_static_html = is_static_html;
    if(is_sg_first){
      wp_dot_addparams.cview = 'sgfirst';
    }
    if(source === 'pwp_lo_desktop' || source === 'pwp_lo_mobile'){
      if (isLogout) {
        wp_dot_addparams.cview = 'logout_wp';
      }
      if (isLogoutNoAd) {
        wp_dot_addparams.cview = 'logoutnoad_wp';
      }
    }
    if(source === 'po2_lo_desktop' || source === 'po2_lo_mobile'){
      if (isLogout) {
        wp_dot_addparams.cview = 'logout_o2';
      }
      if (isLogoutNoAd) {
        wp_dot_addparams.cview = 'logoutnoad_o2';
      }
    }
    if (isWPNaturally) {
      wp_dot_addparams.cview = 'wpnaturalnie';
    }

    WP.push(function() {
      if (!wp_dot_addparams.cview && wp_dot_addparams.reforig) {
        wp_dot_addparams.cview = 'back';
      }
    });

    if (wptests && wptests.gafSiteEnvs) {
      WP.push(function() {
        var gafSiteEnvs = wptests.gafSiteEnvs;
        Object.keys(gafSiteEnvs).forEach(function(key) {
          window[key] = gafSiteEnvs[key]
          WP.gaf.addEnv(key, gafSiteEnvs[key])
        });
      });
     }
     WP.push(function() {
      WP.gaf.addEnv('siteVersion', siteVersion);
    });

    var loadScript = (function(isStatic, deviceType, url){
    return function() {
      if(isStatic){
        return;
      }
      var wp = document.getElementsByTagName('script')[0];
      if (document.getElementById(deviceType)) { return; }
      var js = document.createElement('script');
      js.id = deviceType;
      js.src = url;
      wp.parentNode.insertBefore(js, wp);
    };
   })(is_static_html, sg_app_type, clientSrc);

    var timeout = window.setTimeout(function() {
      WP.push(function() {
        WP.performance.registerMark('WPJStimeout');
      });
      loadScript();
    }, lockAppTimeout);