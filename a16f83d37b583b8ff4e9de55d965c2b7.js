$(document).ready(() => {
  window.adBannerAds = () => {};
  let country = window.YTMP3country;
  if (
    !["HK","AU", "US", "PH", "ID", "GR", "MY", "IN", "CA", "MX"].includes(country)
  ) {
    country = "Others";
  }
  const judgeRandom = (ads) => {
    const random = Math.random();
    if (ads.length <= 0) return;
    if (ads.length === 1) {
      const i = ads[0];
      if (random <= i.percent) {
        window.open(i.link);
      }
      return;
    }
    let lastCount = 0;
    ads.forEach((i) => {
      if (i.percent === 1) {
        window.open(i.link);
        return;
      }
      if (random > lastCount && random < i.percent + lastCount) {
        window.open(i.link);
      }
      lastCount = lastCount + i.percent;
    });
  };
  const { button: data, banner } = window.adsConfig;
  window.adBannerAds = (isError, isFirstPage) => {
    const ads = banner.filter((i) => {
      let result = Date.now() > i.date;
      if (window.ismobile) {
        result = result && i.device === "Mobile";
      } else {
        result = result && i.device === "PC";
      }
      if (isError) {
        result = result && i.errorShow;
      }
      if (isFirstPage) {
        result = result && i.page !== 1
      } else {
        result = result && i.page > 0
      }
      return result && i.geo.includes(country);
    });
    if (ads.length === 0) return;
    const random = Math.random();
    let lastCount = 0;
    ads.forEach((i) => {
      if (random > lastCount && random < i.percent + lastCount) {
        let $target = $("#converter");
        if (isError) {
          $target = $("#error");
        } 
        if (isFirstPage) {
          $('#a-320-50').after(`
          <a id="banner" ${isFirstPage ? 'class="first-page-banner"':''} href="${i.link}" target="_blank" rel="nofollow">
            <img src="https://ytmp3.run/config/images/${i.image}" alt="" />
          </a>`)
        } else {
          $target.before(`
          <a id="banner" ${isFirstPage ? 'class="first-page-banner"':''} href="${i.link}" target="_blank" rel="nofollow">
            <img src="https://ytmp3.run/config/images/${i.image}" alt="" />
          </a>`);
        }
        if (i.image.includes('winx')) {
          ym(85320316,'reachGoal',i.image.replace('.png', ''));
        }
        if (i.image.includes('banner')) {
          ym(85320316,'reachGoal','videopro-show');
        }
        ym(85320316, "reachGoal", "banner-show");
      }
      lastCount = lastCount + i.percent;
    });
  };

  window.adBannerAds(false, true);
  $(document).delegate(".ad-btn-left", "click", () => {
    // DOWNLOAD NOW
    const ads = data.filter((i) => {
      let result =
        (i.button === "fake download" || i.button === "All") &&
        Date.now() > i.date; // date , button
      if (window.ismobile) {
        // device
        result = result && (i.device === "All" || i.device === "Mobile");
      } else {
        result = result && (i.device === "All" || i.device === "PC");
      }
      return result && i.geo.includes(country);
    });
    if (ads.length > 0) {
      judgeRandom(ads);
    } else {
      window.open("https://almstda.tv/4/6435625");
    }
  });
  $(document).delegate(".ad-btn-right", "click", () => {
    // PLAY NOW
    const ads = data.filter((i) => {
      let result =
        (i.button === "fake play" || i.button === "All") && Date.now() > i.date; // date , button
      if (window.ismobile) {
        // device
        result = result && (i.device === "All" || i.device === "Mobile");
      } else {
        result = result && (i.device === "All" || i.device === "PC");
      }
      return result && i.geo.includes(country);
    });
    if (ads.length > 0) {
      judgeRandom(ads);
    } else {
      window.open("https://almstda.tv/4/6435625");
    }
  });
  $(document).delegate(".table-download,.download-mp3-mb", "click", () => {
    // various quality  mobile
    const ads = data.filter((i) => {
      let result =
        (i.button === "quality" || i.button === "All") &&
        Date.now() > i.date &&
        i.device === "Mobile"; // date , button, device
      return result && i.geo.includes(country);
    });
    if (ads.length > 0) {
      judgeRandom(ads);
    } else {
      window.open("https://almstda.tv/4/6435625");
    }
  });
  $(document).delegate("#download_list div", "click", () => {
    // various quality  pc
    const ads = data.filter((i) => {
      let result =
        i.button === "quality" && Date.now() > i.date && i.device === "PC"; // date , button, device
      return result && i.geo.includes(country);
    });
    if (ads.length > 0) {
      judgeRandom(ads);
    } else {
      window.open("https://grunoaph.net/4/5433942");
    }
  });
  $(document).delegate("#download_pc", "click", () => {
    // download pc
    const ads = data.filter((i) => {
      let result =
        (i.button === "download" || i.button === "All") &&
        Date.now() > i.date &&
        i.device === "PC"; // date , button, device
      return result && i.geo.includes(country);
    });
    if (ads.length > 0) {
      judgeRandom(ads);
    } else {
      window.open("https://ak.hauchiwu.com/4/5881309");
    }
  });
  $(document).delegate(".download", "click", () => {
    // download_search
    const ads = data.filter((i) => {
      let result =
        (i.button === "download_search" || i.button === "All") &&
        Date.now() > i.date; // date , button
      if (window.ismobile) {
        // device
        result = result && (i.device === "All" || i.device === "Mobile");
      } else {
        result = result && (i.device === "All" || i.device === "PC");
      }
      return result && i.geo.includes(country);
    });
    if (ads.length > 0) {
      judgeRandom(ads);
    } else {
      window.open("https://almstda.tv/4/6435625");
    }
  });
  $(document).delegate("#download", "click", () => {
    // download mobile
    const ads = data.filter((i) => {
      let result =
        (i.button === "download" || i.button === "All") &&
        Date.now() > i.date &&
        i.device === "Mobile"; // date , button, device
      return result && i.geo.includes(country);
    });
    if (ads.length > 0) {
      judgeRandom(ads);
    } else {
      window.open("https://almstda.tv/4/6435625");
    }
  });
  $(document).delegate("#withApp", "click", () => {
    // Download MP4 with APP (mobile
    const ads = data.filter((i) => {
      let result =
        (i.button === "download_app" || i.button === "All") &&
        Date.now() > i.date &&
        i.device === "Mobile"; // date , button, device
      return result && i.geo.includes(country);
    });
    if (ads.length > 0) {
      judgeRandom(ads);
    } else {
      window.open("https://almstda.tv/4/6435625");
    }
  });
  $(document).delegate("#more_format", "click", () => {
    // more format (mobile
    const ads = data.filter((i) => {
      let result =
        (i.button === "formats" || i.button === "All") &&
        Date.now() > i.date &&
        i.device === "Mobile"; // date , button, device
      return result && i.geo.includes(country);
    });
    if (ads.length > 0) {
      judgeRandom(ads);
    } else {
      window.open("https://almstda.tv/4/6435625");
    }
  });
  $(document).delegate("#play_btn", "click", function () {
    // Play
    const ads = data.filter((i) => {
      let result =
        (i.button === "play" || i.button === "All") && Date.now() > i.date; // date , button
      if (window.ismobile) {
        // device
        result = result && (i.device === "All" || i.device === "Mobile");
      } else {
        result = result && (i.device === "All" || i.device === "PC");
      }
      return result && i.geo.includes(country);
    });
    if (ads.length > 0) {
      judgeRandom(ads);
    } else if (!window.ismobile) {
      window.open("https://almstda.tv/4/6435625");
    }
  });
});
