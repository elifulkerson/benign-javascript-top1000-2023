window.globalSiteNormalSidebarConfig = {
    isShowSidebar: true,
    isShowSellerCoupon: true,
    newUserUrl: 'https://campaign.aliexpress.com/wow/gcp/new-user-channel/index?wh_weex=true&wx_navbar_hidden=true&wx_navbar_transparent=true&ignoreNavigationBar=true&wx_statusbar_hidden=true&_immersiveMode=true&preDownLoad=true&tabType=gift',
};

(function () {
  if(window._global_header_23_hit_exp_ != null){
    return;
  }
  var StrategyExp = ['st_StrategyExp_1695711618618#stg_685'];
  var isHitExp = false;
  var spmb = document.body.getAttribute('data-spm');

  if (['home', 'productlist', 'detail', 'cart'].indexOf(spmb) != -1) {
    var cookieStr = window.document.cookie;
    if (!cookieStr) {
      return;
    }
    var cookieParts = cookieStr.split(/;\s/g);
    var strategyCookie;
    for (var i = 0, len = cookieParts.length; i < len; i++) {
      var values = cookieParts[i].match(/AB_STG=(.+)/i);
      if (values instanceof Array) {
        try {
          strategyCookie = decodeURIComponent(values[1]);
        } catch (ex) {}
      }
    }

    if (StrategyExp && strategyCookie) {
      StrategyExp.forEach(function (itemStr) {
        if (strategyCookie.indexOf(itemStr) != -1) {
          isHitExp = true;
        }
      });
    }
  }
  window._global_header_23_hit_exp_ = isHitExp;
})();