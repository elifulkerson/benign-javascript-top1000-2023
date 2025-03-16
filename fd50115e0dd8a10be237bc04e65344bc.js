"use strict";
(() => {
  const script = document.currentScript;
  const params = script.dataset;
  const containerId = params.containerId;
  const tagId = params.tagId;
  const cookieDomain = params.cookieDomain;
  const deleteCookie = (name) => {
    document.cookie = `${name}=; max-age=0; domain=${cookieDomain}; path=/`;
  };
  const unsplashConsent = window.__UNSPLASH__.consent;
  const canSetCookie = unsplashConsent.tag === "Obtained" && unsplashConsent.value || unsplashConsent.tag === "NotRequired";
  const defaultConsent = canSetCookie ? "granted" : "denied";
  if (canSetCookie === false) {
    deleteCookie("_ga");
    deleteCookie(`_ga_${containerId}`);
  }
  gtag("consent", "default", {
    ad_storage: defaultConsent,
    analytics_storage: defaultConsent,
    functionality_storage: "denied",
    personalization_storage: "denied",
    security_storage: "denied"
  });
  gtag("config", tagId);
  if (unsplashConsent.tag === "Pending") {
    void unsplashConsent.value().then((consent) => {
      if (consent) {
        gtag("consent", "update", {
          ad_storage: "granted",
          analytics_storage: "granted"
        });
      }
    });
  }
})();