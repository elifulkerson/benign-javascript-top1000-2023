window.chsn_ad_id = window.initialPageViewGuid;
    window.chsn_pageType = "homepage-2022";
    window.chsn_post_id = "639f6b02-d2bb-4285-ae1d-9586609432b5";

    !(function (co, h, e, s, i, o, n) {
      var d = "documentElement";
      var a = "className";
      h[d][a] += " preampjs fusejs";
      n.k = e;
      co._Cohesion = n;
      co._Preamp = { k: s, start: new Date() };
      co._Fuse = { k: i };
      co._Tagular = { k: o };
      [e, s, i, o].map(function (x) {
        co[x] =
          co[x] ||
          function () {
            (co[x].q = co[x].q || []).push([].slice.call(arguments));
          };
      });
      h.addEventListener("DOMContentLoaded", function () {
        co.setTimeout(function () {
          var u = h[d][a];
          h[d][a] = u.replace(/ ?preampjs| ?fusejs/g, "");
        }, 3e3);
        co._Preamp.docReady = co._Fuse.docReady = !0;
      });
      var z = h.createElement("script");
      z.async = 1;
      z.src = "https://www.cnet.com/ext/cohesion/cdn/cohesion/cohesion-latest.min.js";
      h.head.appendChild(z);
    })(window, document, "cohesion", "preamp", "fuse", "tagular", {"consent": {"onetrust": {"enabled": true,"optIn": true},"required": true},"tagular": {"writeKey": "wk_1jbobeCiGVIPZaBX3yXqhexRwuy","sourceKey": "src_1jbobeEHGTZmBD9QsSnBOaHCzpy","apiHost": "https://www.cnet.com/ext/make/ingest/v2/t","beamHook": function (event) {
        if (false) {}
      },"cookieDomain": ".cnet.com","iframeAllowlist": {"0": "https://view.ceros.com"}},"preamp": {"siteId": "6ROcMJLU4qafKKGM04m2iK","hooks": {"beforeRun": (config, done) => {
          if (!window.preampCustomMetadata) {
            window.preampCustomMetadata = {};
          }
          config.custom = window.preampCustomMetadata;
          done();
        }},"callback": (error, decision) => {
        if (error) {
          // handle the error - preamp will log it, so just do nothing
        } else if (decision) {
          const bbPromise = new Promise((resolve, reject) => {
            window.neutronWaitForService('BidBarrel', 'setTargeting', resolve, reject);
          });
          bbPromise.then(() => {
            window.BidBarrel.setTargeting({
              abtest: `${decision.audienceName}|${decision.testName}|${decision.experienceName}|${decision.experienceNumber}`
            });
          }).catch(() => {
            // bb was blocked/etc so nothing to be done
          });
        }
      }},"fuse": {"cookieDomain": ".cnet.com","metadata": {"mcid": "3577221"}}});