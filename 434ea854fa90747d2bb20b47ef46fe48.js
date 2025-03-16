(function () {
    "use strict";

    /**
     * Include a script in the head of the doc. This is a private function called from the load third party function and callback only
     * @param  {string}  scriptId ID of the script element
     * @param  {string}  url      URL to the script
     * @param  {boolean} async    Whether or not to load the script async
     */
    function includeScript(scriptId, url, async) {
      var doc = document,
        tagname = 'script',
        lastScript = doc.getElementsByTagName(tagname)[0];
      if (!lastScript) {
        lastScript = doc.head;
      }
      var script = doc.createElement(tagname);
      script.async = async ? true : false;
      script.id = scriptId;
      script.src = url;

      // set a data attribute of data-error if the script failed to load
      script.addEventListener('error', function (err) {
        if (err) {
          script.setAttribute('data-error', 'true');
        }
      });

      lastScript.parentNode.insertBefore(script, lastScript);
    }

    var PhoenixLoader = window.PhoenixLoader = {
      consent: false,
      scripts: [],
      scriptFailed: false,
      thirdPartyFeatureList: true,
      trackingInitialized: false,
      loadScriptIds: [],

      /**
       * Load a third party consent when GDPR consent is received
       * @param {string} scriptId ID of the script element
       * @param {string} url URL to the script
       * @param {boolean} async Whether or not to load the script async
       * @param {function} disableCallback that is called if this scriptId is disabled
       */
      loadThirdParty: function (scriptId, url, async, disableCallback) {
        // do not include script if not enabled
        if (scriptId !== true && this.thirdPartyFeatureList !== true && !this.thirdPartyFeatureList.includes(scriptId)) {
          console.warn(':: FEATURE ' + scriptId + ' DISABLED!');
          if (disableCallback !== undefined && typeof disableCallback === "function") {
            disableCallback();
          }
          return;
        }
        if (this.consent) {
          includeScript(scriptId, url, async);
        }
        else {
          this.scripts[scriptId] = {'url': url, 'async': async};
        }
      },

      /**
       * Run a callback when third party consent is received from the GDPR script (Gate by OneTrust)
       * @param {string | boolean} id ID of the script element, if equal true, means in house customize scripts.
       * @param {function} callback Callback function to call when consent is received
       * @param {string | null} category OneTrust's cookie category
       * @param {function | undefined} disableCallback that is called if this scriptId is disabled
       */
      gdprConsentCallback: function (id, callback, category = null, disableCallback = undefined) {
        if (id !== true && this.thirdPartyFeatureList !== true && !this.thirdPartyFeatureList.includes(id)) {
          console.warn(':: FEATURE ' + id + ' DISABLED!');
          if (disableCallback !== undefined && typeof disableCallback === "function") {
            disableCallback();
          }
          return;
        }

        // No CMP Queue, don't gate
        if (!window.consentCallbackQueue) {
          callback();
          return;
        }

        window.consentCallback(id, () => {
          this.loadScriptIds[id] = true;
          callback();
        }, category);

        // Only few pages that are not asking for consent fire the load event immediately
        if (this.consent) {
          callback();
        } else {
          document.addEventListener('loadThirdParty', function (e) {
            callback();
          });
        }
      },

      /**
       * Trigger the consent event so the rest of the scripts can load
       * This should only be called after GDPR script has run and the user has given consent
       */
      triggerConsent: function () {
        this.consent = true;
        this.triggerEvent('loadThirdParty')
      },

      /**
       * Trigger an event on the document
       * @param  {string} eventName
       */
      triggerEvent: function (eventName) {
        var event = null;
        if (typeof(Event) === 'function') {
          var event = new Event(eventName);
        }
        // IE 11 and below doesn't support the Event constructor, use the old deprecated way of creating events
        else {
          var event = document.createEvent('Event');
          event.initEvent(eventName, true, true);
        }

        document.dispatchEvent(event);
      },

      /**
       * Monitor a script tag for failure to load. If it fails to load mark failed
       * @param  {Element} script Script element to monitor
       */
      monitorKeyScript: function (script) {
        var self = this;
        script.addEventListener('error', function (err) {
          if (err) {
            self.scriptFailed = true;
          }
        });
      },

      /**
       * Have key scripts failed to load
       * @return {boolean} Returns true if any of the key scripts we monitor have failed to load
       */
      keyScriptsFailed: function () {
        return this.scriptFailed;
      }
    };
    /**
     * When third party consent is received run all the scripts we've queued up
     */
    PhoenixLoader.gdprConsentCallback(true, function () {
      var scripts = PhoenixLoader.scripts;
      Object.keys(scripts).forEach(function (key) {
        includeScript(key, scripts[key].url, scripts[key].async);
        delete scripts[key];
      });
    });
        // Monitor onetrust lib as a key script, if it fails to load we want to trigger all tracking ready events so site features will work even though tracking will not work.
    // Normally we would put this by the script include itself, but we include onetrust as the first thing in the head tag
    PhoenixLoader.monitorKeyScript(document.getElementById('onetrust-lib'));
      })();