window.audibleCSPViolations = window.audibleCSPViolations || [];

  window.audibleCSPNexusConfig = {
      id: "",
      schemaId: ""
  };

  if ('SecurityPolicyViolationEvent' in window) {
    window.addEventListener('securitypolicyviolation', e => {
      e.preventDefault(); window.audibleCSPViolations.push(e);
    });
  }