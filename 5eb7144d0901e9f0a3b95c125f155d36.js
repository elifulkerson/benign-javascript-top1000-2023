window.addEventListener("load", function() {
  if (window.IS_WIX_HEADER_2020_RENDERED) {
    var wixSitesWithNoStickyHeader = [
      'wix.com/ascend/home',
      'wix.com/domain/names',
      'wix.com/features/wix-seo',
      'wix.com/wearepages/seohub2',
      'wix.com/wix-platform/podcast',
      'wix.com/domain/domain-name-search',
      'wix.com/domain/buy-domain-name',
      'wix.com/seo/learn',
      'wix.com/upgrade/website',
      'wix.com/wix-platform/package-picker-anons',
    ];
    var language = document.documentElement.getAttribute('lang') || undefined;
    var sticky = !wixSitesWithNoStickyHeader.some(function (url) {
      return window.location.href.indexOf(url) !== -1;
    })

    var config = {
      sticky: sticky,
      language: language,
      isWixSite: true,
    }

    if (window['header-footer-wix-statics']) {
      window['header-footer-wix-statics'].initHeaderAndFooter2020(config);
    } else if (typeof window.require === 'function') {
      window.require(['header-footer-wix-statics'], function (hnf) {
        hnf.initHeaderAndFooter2020(config);
      });
    }else {
      console.error('Error getting init function of Wix Header And Footer 2020');
    }
  } else {
    var isMobile = window.innerWidth <= 1024;
    var origin = window.location.href;
    new Image().src = '//frog.wix.com/hf?src=19&evid=500&component=none&origin=' + origin +'&is_mobile=' + isMobile + '&_=' + Math.random().toString();
  }
})