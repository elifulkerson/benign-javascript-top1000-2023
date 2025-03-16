"use strict";
(() => {
  const script = document.currentScript;
  const params = script.dataset;
  const placeholderId = params.placeholderId;
  const modalId = params.modalId;
  const modalHtml = params.modalHtml;
  const unsplash = window.__UNSPLASH__;
  const consentState = unsplash.consent;
  if (consentState.tag === "Pending") {
    const modalPlaceholder = document.getElementById(
      placeholderId
    );
    modalPlaceholder.outerHTML = modalHtml;
    const modal = document.getElementById(modalId);
    const consentButton = document.getElementById(
      `${modalId}-consent`
    );
    const objectButton = document.getElementById(
      `${modalId}-object`
    );
    const closeButton = document.getElementById(
      `${modalId}-close`
    );
    void consentState.value().then(() => {
      modal.close();
    });
    const handleClick = (action, consent) => () => {
      void consentState.setConsent(action, consent);
    };
    consentButton.addEventListener(
      "click",
      handleClick("accepted-cookie-consent", true)
    );
    closeButton.addEventListener(
      "click",
      handleClick("closed-cookie-consent", true)
    );
    objectButton.addEventListener(
      "click",
      handleClick("rejected-cookie-consent", false)
    );
    modal.show();
  }
})();