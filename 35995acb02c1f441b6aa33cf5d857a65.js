(function(){
    const parseJwt = token => {
      // This functions receives the encoded JWT token and decode it.
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`).join(''));
  
      return JSON.parse(jsonPayload);
    };
  
    const uuid = () => {
      try {
        return crypto.randomUUID();
      } catch (error) {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
          const r = Math.random() * 16 | 0; // eslint-disable-line no-bitwise
          const v = c === 'x' ? r : (r & 0x3 | 0x8); // eslint-disable-line no-bitwise
          return v.toString(16);
        });
      }
    };
  
    const tryGetIds = (storedProfile) => {
      const profile = JSON.parse(storedProfile);
      const {
        'https://insider/token': storedToken,
        'https://insider/subscriptionId': subscriptionId,
        'https://insider/memberId': insiderId
      } = profile;
      const token = parseJwt(storedToken);
      return {
        pianoId: token.sub,
        subscriptionId,
        insiderId
      }
    }
  
    const dataLayer = {"pageType":"homepage","postURI":"homepage","publisher":"","vertical":"homepage","author":"","category":"","dateModified":false,"datePublished":false,"abTest":"sof:control|sophi:variant|smart-banner:control|taboola-widgets-for-review:control|ad-unit-launch:variant","secondaryVerticals":"","theme":""};
  
    if (window.Fenrir.config.identifier === 'bi') {
      dataLayer.sophi_testId = 'pw:article:test1_aa';
      dataLayer.userAgent = window.navigator.userAgent;
      dataLayer.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  
        dataLayer.sophi_testGroup = 'variant'
    }
  
    const storedProfile = localStorage.getItem('profile');
    if (storedProfile) {
      const { pianoId, subscriptionId, insiderId } = tryGetIds(storedProfile);
      if (pianoId) {
        dataLayer.pianoId = pianoId;
      }
      if (subscriptionId) {
        dataLayer.subscriptionId = subscriptionId;
      }
      if (insiderId) {
        dataLayer.insiderId = insiderId;
      }
    }
  
    const universalId = localStorage.getItem('universal_id');
  
    if(!universalId) {
      var newUniversalId = uuid();
      localStorage.setItem('universal_id', newUniversalId);
      dataLayer.universalId = newUniversalId;
    } else {
      dataLayer.universalId = universalId;
    }
  
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(dataLayer);
  })()