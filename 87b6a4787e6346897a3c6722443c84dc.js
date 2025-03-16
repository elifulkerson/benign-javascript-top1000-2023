window.__tcfapi('addEventListener', 2, async (tcData, success) => {
              if ((tcData.eventStatus === 'useractioncomplete' || tcData.eventStatus === 'tcloaded') && success) {
                window.nSdkInstance = NOLBUNDLE.nlsQ("PD51F2578-8D2E-4FB5-88B2-99949F4D9817","nSdkInstance");
                window.sdkNseNo = 0;
                window.sdkNseMeta = 0;
                __tcfapi('removeEventListener', 2, () => {}, tcData.listenerId);
              }
            });