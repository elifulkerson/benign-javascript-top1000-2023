window.spmReportData = {}
      window.reportConfig = {
        sample: 1,
        msgObjects: 'spmReportData',
        errorTracker: true
      }
      function getCookie(name) {
        var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
        var r = document.cookie.match(reg)
        return r ? unescape(r[2]) : null
      }
      function fsrCb() {
        if (window.performance && window.performance.timing) {
          window.performance.timing.firstscreenfinish = new Date().getTime()
        }
      }
      // 图片降级使用
      function imgOnError(img) {
        typeof window.imgAutoFallbackOnError === 'function' && window.imgAutoFallbackOnError(img)
      }
      // 图片降级使用
      function imgOnLoad(img) {
        typeof window.imgAutoFallbackOnLoad === 'function' && window.imgAutoFallbackOnLoad(img)
      }
      function lqipCb(img) {
        var lqip =
          img && img.parentNode && img.parentNode.querySelector('.lqip')
        if (lqip) {
          lqip.classList.add('is-active')
        }
      }
      if (history.scrollRestoration) {
        history.scrollRestoration = 'manual'
      }
      window.page_load_time = Date.now()