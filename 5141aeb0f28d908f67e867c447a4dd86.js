window.DTM = window.DTM || {};
      DTM.pageDataLayer = DTM.pageDataLayer || {};
      DTM.pageDataLayer.performance = {};
      function registerCLS(metric) { DTM.pageDataLayer.performance.cls = metric; }
      function registerFID(metric) { DTM.pageDataLayer.performance.fid = metric; }
      function registerLCP(metric) { DTM.pageDataLayer.performance.lcp = metric; }
      function registerTTFB(metric) { DTM.pageDataLayer.performance.ttbf = metric; }
      
    (function() {
      var script = document.createElement('script');
      script.src = 'https://unpkg.com/web-vitals/dist/web-vitals.base.iife.js';
      script.onload = function() {
        
          webVitals.getCLS(registerCLS, true);
          webVitals.getFID(registerFID, true);
          webVitals.getLCP(registerLCP, true);
          webVitals.getTTFB(registerTTFB, true);
      
      }
      document.head.appendChild(script);
    }())