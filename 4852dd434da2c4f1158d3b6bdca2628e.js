const registerEventListener = ({pubadsService}) => {
  pubadsService.addEventListener('impressionViewable', (event) => {});
  pubadsService.addEventListener('slotOnload', (event) => {});
  pubadsService.addEventListener('slotRenderEnded', (event) => {
    if (event.slot.getSlotElementId() === 'out-of-page-ad' && !event.isEmpty) {
      const documentPlaceholder = window.document.getElementById(
        'parallax-placeholder'
      );

      if (documentPlaceholder) {
        documentPlaceholder.remove();
      }
      let count = 0;
      const interval = setInterval(() => {
        count++;
        const document = window.document.getElementById('parallax');

        if (count === 20) {
          clearInterval(interval);
        } else if (document) {
          document.style.cssText =
            'width:100%; height:500px; background:black;';
          clearInterval(interval);
        }
      }, 100);
    }
  });

  pubadsService.addEventListener('slotRequested', (event) => {});
  pubadsService.addEventListener('slotResponseReceived', (event) => {});
  pubadsService.addEventListener('slotVisibilityChanged', (event) => {});
};

const displayAds = (slotID) => {
  try {
    let count = 0;
    const interval = setInterval(() => {
      count++;
      if (count === 200) {
        clearInterval(interval);
      } else if (window.__ADS_READY_TO_DISPLAY__) {
        const {googletag} = window;
        googletag.cmd.push(() => {
          googletag.display(slotID);
        });
        clearInterval(interval);
      }
    }, 100);
  } catch (error) {}
};

const loadAds = (listAds) => {
  const buildTime = new Date();

  if (listAds && listAds.length > 0) {
    window.googletag = window.googletag || {cmd: []};
    const {googletag} = window;

    googletag.cmd.push(() => {
      const pubadsService = googletag.pubads();
      pubadsService.collapseEmptyDivs(true);

      registerEventListener({pubadsService, listAds});

      try {
        if (listAds.length > 0) {
          listAds.forEach((ads) => {
            let slot = null;
            if (ads.isOutOfPage) {
              slot = googletag.defineOutOfPageSlot(ads.adUnit, ads.slotID);
            } else {
              slot = googletag.defineSlot(ads.adUnit, ads.sizes, ads.slotID);
            }

            if (
              slot &&
              ads.targetingArguments &&
              ads.targetingArguments.length > 0
            ) {
              ads.targetingArguments.forEach((data) => {
                slot.setTargeting(
                  data.key,
                  Array.isArray(data.value) ? data.value : `${data.value}`
                );
              });

              slot.addService(pubadsService);

              const obj = {
                fetchingMode: 'vanilla',
                lifecycleTime: {
                  begin: buildTime,
                  impressionViewable: null,
                  slotRequested: null,
                  slotOnload: null,
                  slotRenderEnded: null,
                  slotResponseReceived: null,
                  slotVisibilityChanged: null,
                },
                isEmpty: true,
                loaded: false,
                slot,
                ...ads,
              };

              try {
                window.__REGISTERED_ADS_SLOT__.set(ads.slotID, obj);
              } catch (error) {}
            }
          });

          googletag.enableServices();

          window.__ADS_READY_TO_DISPLAY__ = true;
        }
      } catch (error) {}
    });
  }
};

(function () {
  window.__REGISTERED_ADS_SLOT__ = new Map();
  try {
    let count = 0;

    const interval = setInterval(() => {
      count++;

      if (
        window.__DISABLE_ADS__ ||
        window.__IS_PERF_SCORE_USER_AGENT__ ||
        count === 20
      ) {
        clearInterval(interval);
      } else if (window && window.googletag && window.googletag.apiReady) {
        loadAds(window.__ADS_TO_DISPLAY__ || []);
        clearInterval(interval);
      }
    }, 200);
  } catch (error) {
    console.error(error);
  }
})();