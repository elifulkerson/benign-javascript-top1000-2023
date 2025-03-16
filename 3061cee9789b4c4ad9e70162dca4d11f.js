window.heap = window.heap || [], heap.load = function(e, t)
    {
      window.heap.appid = e, window.heap.config = t = t || {};

          window.sdLoadQueue.push([function ()
          {
        var r = t.forceSSL || "https:" === document.location.protocol,
          a = document.createElement("script");
        a.type = "text/javascript", a.async = !0, a.src = (r ? "https:" : "http:") + "//cdn.heapanalytics.com/js/heap-" + e + ".js";
        var n = document.getElementsByTagName("script")[0];
        n.parentNode.insertBefore(a, n);
      }, 'analytics']);

      for (var o = function(e) {
          return function() {
            heap.push([e].concat(Array.prototype.slice.call(arguments, 0)))
          }
        }, p = ["addEventProperties", "addUserProperties", "clearEventProperties", "identify", "resetIdentity", "removeEventProperty", "setEventProperties", "track", "unsetEventProperty"], c = 0; c < p.length; c++) heap[p[c]] = o(p[c])
    };

    heap.load("4023737901", {
      secureCookie: true,
      forceSSL: true
    });

    function findClosestElement(target, selector) {
      if (!target)
      {
        return undefined;
      }

      while (target && !target.matches(selector) && !target.matches('body'))
      {
        target = target.parentElement;
      }

      return (target && target.matches(selector)) ? target : undefined;
    }

    // Once all window dependencies are loaded, fire module impressions and listen for module clicks
    window.onload = function (event) {
      const modules = Array.prototype.slice.call(document.querySelectorAll('[data-module-name]'));
      const moduleNames = modules.map(function (element) {
        return element.getAttribute('data-module-name');
      });

      for (let i = 0; i < moduleNames.length; ++i) {
        window.heap.track('Module Impression', {'moduleName': moduleNames[i]});
      }

      document.addEventListener('click', function(e) {
        let clickElm = e.target;
        const parentElm = findClosestElement(clickElm, '[data-module-name]');

        if (!clickElm.hasAttribute('data-module-item'))
        {
          while (clickElm && clickElm.tagName !== 'BODY' && typeof clickElm.hasAttribute === 'function' && !clickElm.hasAttribute('data-module-item'))
          {
            clickElm = clickElm.parentNode;
          }
        }

        if (parentElm && clickElm && clickElm.tagName !== 'BODY')
        {
          let children = Array.prototype.filter.call(parentElm.querySelectorAll('[data-module-item]'), function (elm) {
            return elm.offsetParent !== null;
          });

          window.heap.track('Module Click', {'moduleName': parentElm.dataset.moduleName, 'moduleItemPosition': children.indexOf(clickElm)+1})
        }
      }, false);
    }