try {
      var tracker2_search = window.location.href.substring(window.location.href.indexOf("?") + 1);
      var from_url = tracker2_search.replace("from=", "");

      if (from_url) {
        var reportCustom = (params) => {
          if (!window.JSTracker2 || !JSTracker2) {
            return;
          }
          window.JSTracker2.reportCustom(params)
        }

        var tracker2_new_url = new URL(from_url);

        window.JSTracker2.reportCustom({
          code: 'form_url',
          sampling: 1,
          message: '进入错误页',
          d1: tracker2_new_url.origin,
          d2: tracker2_new_url.origin + tracker2_new_url.pathname,
          c1: tracker2_new_url.href,
          c2: document.referrer,
        });
      }
    } catch (error) {
      window.JSTracker2.reportCustom({
        code: 'from_url_parse_error',
        sampling: 1,
        message: error,
        d1: from_url,
      });
    }