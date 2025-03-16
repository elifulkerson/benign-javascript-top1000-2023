window.HUFFPOST = {
  env: "production",
  mapiEnv: "production",
  params: {"device":"desktop","edition":"us","signInUrl":"https://login.huffpost.com/login?dest=https%3A%2F%2Fwww.huffpost.com%2F","signUpUrl":"https://login.huffpost.com/signup?dest=https%3A%2F%2Fwww.huffpost.com%2F","csrfToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiIvIiwiaWF0IjoxNjk3NDMxOTc5LCJleHAiOjE2OTc1MjE5Nzl9.LLegyh6gKBVSBiPbg45ZkFG56RReQHVoGcE-tYyB1zU","features":{},"theme":"news","slug":"front-page","resourceType":"section","isEntry":false,"isFront":true,"abeagle":["hp_ml_related_test_v1"],"serverAbeagle":["hp_taboola_test"],"brandedAPages":["by-any-means-necessary","new-money-mindset"],"abRelatedTest":{"ready":false}},
  tracking: {"context_page_id":"news_front-page","context_page_type":"feed","destination":"huffpost","mode":"desktop","page_edition":"en-us"},
  trackingEnv: "prod",
  cetEnabled: true,
  pvDisabled: false,
  entry: {
    departmentSlug: "news",
    sectionSlug: undefined,
    modulousTags: undefined
  },
  pageReady: function(callback) {
    window.HUFFPOST.pageReady.cb.push(callback)
  }
};

window.HP = window.HUFFPOST;
window.HP.pageReady.cb = [];
window.HP.pageReady.identity = function(callback) {
  callback();
};

if (document.readyState !== 'loading') {
  window.HP.pageReady = window.HP.pageReady.identity;
  window._taboola = window._taboola || [];_taboola.push({"homepage":"auto"});!function (e, f, u, i) {if (!document.getElementById(i)){e.async = 1;e.src = u;e.id = i;f.parentNode.insertBefore(e, f);}}(document.createElement('script'),document.getElementsByTagName('script')[0],'//cdn.taboola.com/libtrc/buzzfeedinc-network/loader.js','tb_loader_script');if(window.performance && typeof window.performance.mark == 'function'){window.performance.mark('tbl_ic');}
} else {
  document.addEventListener('DOMContentLoaded', function() {
    HP.pageReady.cb.forEach(HP.pageReady.identity);
    HP.pageReady = HP.pageReady.identity;
    window._taboola = window._taboola || [];_taboola.push({"homepage":"auto"});!function (e, f, u, i) {if (!document.getElementById(i)){e.async = 1;e.src = u;e.id = i;f.parentNode.insertBefore(e, f);}}(document.createElement('script'),document.getElementsByTagName('script')[0],'//cdn.taboola.com/libtrc/buzzfeedinc-network/loader.js','tb_loader_script');if(window.performance && typeof window.performance.mark == 'function'){window.performance.mark('tbl_ic');}
  }, { once: true });
}

!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="https://www.huffpost.com/static-assets/cambria/app/",n(n.s=222)}({139:function(e,t){window.waitForGlobalCambria=window.waitForGlobal=function(e,t,n){var o,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},u="function"==typeof e?e:function(){return!!window[e]},c=r.fallback,i=r.caller,l=r.fallbackCb,a=!1;u()&&!a?(t(),a=!0):(o=setInterval((function(){try{u()&&!a&&(t(),a=!0,clearInterval(o))}catch(e){clearInterval(o),console.error("Failure upon successfully waiting for global dependencies.\n\n",e)}}),n||50),"number"==typeof c&&setTimeout((function(){console.debug("waitforglobal for ".concat(i," suspended after ").concat(c,"ms")),clearInterval(o),"function"!=typeof l||a||(l(),a=!0)}),c))}},152:function(e,t){window.modulousQueue=function(){var e=[],t=!1;function n(e){setTimeout((function(){try{e()}catch(e){}}),0)}return{add:function(o){t?n(o):e.push(o)},runAll:function(){t=!0,e.forEach(n),e=[]}}}(),setTimeout(window.modulousQueue.runAll,5e3)},222:function(e,t,n){"use strict";n.r(t);n(139),n(152)}});
//# sourceMappingURL=critical-news.js.map