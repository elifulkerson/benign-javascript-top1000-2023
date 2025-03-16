if (!window.pageloadId) {
    window.pageloadId = (crypto.randomUUID) ? crypto.randomUUID() : ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, function (c)  { return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);} );
  }

  try {
    Reflect.setPrototypeOf(document, new Proxy(Reflect.getPrototypeOf(document), {
      set(target, key, value, thisArg) {
        try {
          if (key === 'cookie') {
            if (initialDataLayer && value.startsWith('_gaexp=')) {
              const decoded = decodeURIComponent(value);
              const optimizeExperiments = [...decoded.matchAll(/([\w-]{22})\.\d{5}\.(\d{1})/g)]
              let ids = [];
              let variants = [];
              optimizeExperiments.forEach((exp) => { ids.push(exp[1]); variants.push(exp[2]); } )
              // let's add it to both the dataLayer and the initialDataLayer
              initialDataLayer.experimentIds = ids;
              initialDataLayer.experimentVariants = variants;
              dataLayer.push({'experimentIds': ids});
              dataLayer.push({'experimentVariants': variants});
            }
          }
        } catch (e) {
          console.error(`Error inspecting document property '${key}' assignment: ${e}`);
        } finally { // always set the property via the original object
          return Reflect.set(...arguments);
        }
      }
    }));
  } catch (e) {
    console.error(`Unable to reflect and proxy document.cookie: ${e}`);
  }

  const initialDataLayer = {"Network":"polygon","Community":"polygon","root_domain":"polygon.com","GA Primary ID":"UA-29192711-1","GA4 Primary ID":"G-5F3Y8WVGT7","GA CrossDomains":"heroesneverdie.com,polygon.com,theflyingcourier.com,riftherald.com","Demand Post":"no","All Chorus Categories":"polygon:polygon","Content Type":"homepage","chartbeat_domain":"polygon.com","chartbeat_zone":"172968584/polygon/polygon.com/front_page","Logged in Status":"Logged Out","auth0_id":"No Auth0 ID","section":"Front Page","enable_url_cleaning":true};
  initialDataLayer.pageloadId = window.pageloadId;
  dataLayer = [initialDataLayer];