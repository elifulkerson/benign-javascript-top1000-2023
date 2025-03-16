var whitelist={'gtm.whitelist': ["google","crto","baut","sandboxedScripts","ec","est","ea","flc","html"]};
  if(window.dataLayer) {
    window.dataLayer.push(whitelist);
  } else {
    window.dataLayer=window.dataLayer||[whitelist];
  }