"use strict";
(() => {
  const consentCookieMaxAge = 6 * 30 * 24 * 60 * 60;
  const consentUidCookieMaxAge = 400 * 24 * 60 * 60;
  const consentUidCookieName = "consent_uid";
  const getCookie = (name) => document.cookie.split("; ").find((c) => c.startsWith(`${name}=`))?.split("=")?.[1];
  const setCookie = (name, value, maxAge) => {
    document.cookie = `${name}=${value}; max-age=${maxAge.toString()}; path=/`;
    return value;
  };
  const maybe = (fn) => (value) => typeof value === "undefined" ? void 0 : fn(value);
  const maybeJSONParse = maybe(JSON.parse);
  const tryCatch = (fn, defaultValue) => {
    try {
      return fn();
    } catch (_e) {
      return defaultValue;
    }
  };
  const promiseWithResolve = () => {
    let resolve;
    const promise = new Promise((_resolve) => {
      resolve = _resolve;
    });
    return { promise, resolve };
  };
  const storeConsent = (action, consent) => {
    const now = Date.now().toString();
    const consentUid = (
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      getCookie(consentUidCookieName) || setCookie(
        consentUidCookieName,
        crypto.randomUUID(),
        consentUidCookieMaxAge
      )
    );
    const event = {
      schema: "iglu:com.snowplowanalytics.snowplow/payload_data/jsonschema/1-0-4",
      data: [
        {
          e: "se",
          se_ca: "consent",
          se_ac: action,
          se_la: consent ? "granted" : "denied",
          eid: crypto.randomUUID(),
          tna: "web-fetch",
          tv: "fetch",
          p: "web",
          cs: "UTF-8",
          dtm: now,
          duid: consentUid,
          url: window.location.href,
          stm: now
        }
      ]
    };
    return fetch(
      "https://collector.unsplash.com/com.snowplowanalytics.snowplow/tp2",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        referrerPolicy: "no-referrer",
        // eslint-disable-next-line local/no-json
        body: JSON.stringify(event)
      }
    );
  };
  const currentConsentUid = getCookie(consentUidCookieName);
  if (currentConsentUid !== void 0) {
    setCookie(consentUidCookieName, currentConsentUid, consentUidCookieMaxAge);
  }
  const isConsentRequired = tryCatch(
    () => maybeJSONParse(getCookie("require_cookie_consent")) === true,
    false
  );
  if (isConsentRequired) {
    const hasConsented = tryCatch(
      () => maybeJSONParse(getCookie("cookie_consent")),
      void 0
    );
    const setConsent = (action, consent) => {
      setCookie("cookie_consent", consent.toString(), consentCookieMaxAge);
      return storeConsent(action, consent);
    };
    const setConsentAndReload = (action, consent) => setConsent(action, consent).then(() => window.location.reload());
    if (typeof hasConsented === "boolean") {
      window.__UNSPLASH__ = {
        consent: {
          tag: "Obtained",
          value: hasConsented,
          setConsent: setConsentAndReload
        }
      };
    } else {
      const { promise, resolve } = promiseWithResolve();
      let isFirstCall = true;
      window.__UNSPLASH__ = {
        consent: {
          tag: "Pending",
          value: () => promise,
          setConsent: (action, consent) => {
            if (isFirstCall) {
              resolve(consent);
              isFirstCall = false;
              return setConsent(action, consent).then(() => void 0);
            } else {
              return setConsentAndReload(action, consent);
            }
          }
        }
      };
    }
  } else {
    window.__UNSPLASH__ = { consent: { tag: "NotRequired" } };
  }
})();