function instantiateConcertAds() {
    var concertAdsConfig = {
      cmd: window.concertAdsQueue
    };

    for (var property in window.CONCERT_ADS_CONFIG) {
      concertAdsConfig[property] = window.CONCERT_ADS_CONFIG[property];
    }

    window.concertAds = new ConcertAds(concertAdsConfig);
  }