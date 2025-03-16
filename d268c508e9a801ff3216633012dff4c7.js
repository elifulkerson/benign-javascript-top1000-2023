const netIdPurposeId = '647f32453fc9de0668bbf5b4',
    netidReadUrl = 'https://einwilligungsspeicher.netid.de/netid-user-status?q.tapp_id.eq=1a0e3a41-fe3d-447c-af9a-3fc4640171c5',
    netidWriteUrl = 'https://einwilligen.netid.de/netid-permissions?q.tapp_id.eq=1a0e3a41-fe3d-447c-af9a-3fc4640171c5',
    mmsDomain = 'https://cmp.chip.de',
    accountId = '217'
  ;
  let netidConsent = false;

  writeSPScript = () => {
    const url = mmsDomain + '/unified/wrapperMessagingWithoutDetection.js';
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = url;
    script.onload = () => {
      if (window._sp_.config.isSPA) {
        window._sp_.executeMessaging();
      }
    };
    document.head.appendChild(script);
  };

  window._sp_queue = [];
  window._sp_ = {
    config: {
      accountId: accountId,
      baseEndpoint: mmsDomain,
      gdpr: {
        consentLanguage: 'de',
      },
      targetingParams: {},
      custom: {},
      events: {
        onPrivacyManagerAction: function (pmData) {
          if (pmData === 'SAVE_AND_EXIT') {
            __tcfapi('addEventListener', 2, function (tcData, success) {
              if (tcData.eventStatus === 'useractioncomplete') {
                __tcfapi('removeEventListener', 2, function (success) {}, tcData.listenerId);
                location.reload();
              }
            });
          }
        },
        onMessageReady: function (message) {
          if (message === 'custom') {
            if (localStorage.getItem('nidLayer')) {
              const currentLayer = parseFloat(localStorage.getItem('nidLayer'));
              localStorage.setItem('nidLayer', currentLayer + 1);
            } else {
              localStorage.setItem('nidLayer', 1);
            }
          }
          window.launchEventData = window.launchEventData || [];
          launchEventData.push({"event":"sourcepoint.onMessageReady"});
        }
      }
    }
  };
  const spConfig = window._sp_.config;

  writeNetIdStatus = (status, tcString) => {
    const bodyObj = {
      "idconsent": status,
      "iab_tc_string": tcString
    };
    fetch(netidWriteUrl, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/vnd.netid.permission-center.netid-subject-status-v1+json',
        'Content-Type': 'application/vnd.netid.permission-center.netid-permissions-v2+json'
      },
      body: JSON.stringify(bodyObj)
    })
            .then((data) => data.json())
            .then((data) => {
              if (data.subject_identifiers && data.subject_identifiers.tpid) {
                window.sessionStorage.setItem('nid', data.subject_identifiers.tpid);
              }
            });
  };
  if (window.sessionStorage.getItem('nidchecked') === 'true') {
    /* NetId has been checked in the session already, directly load the CMP */
    writeSPScript();
  } else {
    /* NetId has not been checked, do it once for this session */
    fetch(netidReadUrl, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Accept': 'application/vnd.netid.permission-center.netid-user-status-v1+json'
      },
    })
            .then((data) => data.json())
            .then((data) => {
              if (data.status && (data.status === 400 || data.status === 403)) {
                /*
                // status_code = NO_TPID | NO_TOKEN | TOKEN_ERROR | NO_TAPP_ID | TAPP_NOT_ALLOWED
                // only consider NO_TPID
                // no tpid, no NetId user
                */
                spConfig.targetingParams.netiduser = 0;
                spConfig.isSPA = false;
              }

              if (data.status_code && data.status_code === 'PERMISSIONS_FOUND') {
                /*
                // Net ID user with permissions
                // if a VALID setting is found, netID can be used and don't show the layer again
                */
                /* Save PERMISSIONS_FOUND status */
                if (data.netid_privacy_settings && data.netid_privacy_settings.find((setting) => setting.type === 'IDCONSENT').status === 'VALID') {
                  window.sessionStorage.setItem('nidpermissions', 'valid');
                } else {
                  window.sessionStorage.setItem('nidpermissions', 'invalid');
                }


                if (data.subject_identifiers && data.subject_identifiers.tpid) {
                  window.sessionStorage.setItem('nid', data.subject_identifiers.tpid);
                  /* if close button has been clicked, wait for the configured time before showing the layer again */
                } else if (window.localStorage.getItem('nidDate')) {
                  const lastChangeTime = window.localStorage.getItem('nidDate');
                  const now = Date.now();

                  /* 2 weeks in milliseconds */
                  const millisecondsBetween = 1209600000;

                  /* last change was atleast 2 weeks ago? show layer again */
                  if (lastChangeTime < now - millisecondsBetween) {
                    spConfig.targetingParams.netiduser = 1;
                    spConfig.isSPA = true;
                    if (localStorage.getItem('nidDelayed') === 'true') {
                      spConfig.targetingParams.delayed = 1;
                    }
                  }
                  /* otherwise show the layer */
                } else {
                  spConfig.targetingParams.netiduser = 1;
                  spConfig.isSPA = true;
                  if (localStorage.getItem('nidDelayed') === 'true') {
                    spConfig.targetingParams.delayed = 1;
                  }
                }
              }

              if (data.status_code && data.status_code === 'PERMISSIONS_NOT_FOUND') {
                /* Net ID user without permissions, show the layer */
                spConfig.targetingParams.netiduser = 1;
                spConfig.isSPA = true;
                if (localStorage.getItem('nidDelayed') === 'true') {
                  spConfig.targetingParams.delayed = 1;
                }
              }

              if (data.status_code && data.status_code === 'TPID_EXISTENCE_ERROR') {
                /* Net ID account has been deleted, delete usage of NetId aswell, in case we had it before */
                window.sessionStorage.removeItem('nid');
                spConfig.targetingParams.netiduser = 0;
                spConfig.isSPA = false;
              }
              window.sessionStorage.setItem('nidchecked', 'true');
              writeSPScript();
            });
  }

  // event listener to check if the user has given NetId consent on the GDPR layer
  window.__tcfapi('addEventListener', 2, function(tcData, success) {
    if (success && (tcData.eventStatus === 'tcloaded' || tcData.eventStatus === 'useractioncomplete')) {
      window.__tcString = tcData.tcString;
      window.__tcfapi('getCustomVendorConsents', 2, (tcData) => {
        const consentedPurposes = tcData.consentedPurposes;
        if (consentedPurposes.length > 0) {
          consentedPurposes.forEach((purpose) => {
            if (purpose._id === netIdPurposeId) {
              netidConsent = true;
            }
          });
        }
        /* NetId Purpose Consent has been given, set targeting key */
        if (netidConsent) {
          spConfig.targetingParams.consent = 1;
        } else {
          /*
          // if we are allowed to use the netId, BUT the user hasn't given full consent
          // since he changed it in our layer afterwards, disallow the usage
          */
          if (window.sessionStorage.getItem('nidpermissions') == 'valid') {
            writeNetIdStatus('INVALID', window.__tcString);
          }
          /* delete them on this page impression, since we still have it */
          window.sessionStorage.removeItem('nid');
        }

        if (spConfig.targetingParams.consent === 1 && spConfig.isSPA) {
          window._sp_.executeMessaging();
        }

      });
    }
  });