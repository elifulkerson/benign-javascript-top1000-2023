function initialize_wunderkind(d) {
    window.addEventListener('load', function() {
      var e = d.createElement('script');
      e.src = d.location.protocol + '//tag.wknd.ai/5453/i.js';
      e.async = true;
      d.getElementsByTagName("head")[0].appendChild(e);
    });
  }

  function determine_wunderkind_eligibility() {
    if (window.location.search.includes('enable_wunderkind')) {
      initialize_wunderkind(document);
      return;
    }

    let wunderkind_segment = 0;
    try { wunderkind_segment = localStorage.getItem('genius_wunderkind_segment'); } catch (e) {}

    if (typeof(wunderkind_segment) === 'string') {
      wunderkind_segment = Number(wunderkind_segment);
    } else {
      wunderkind_segment = Math.random();
      try { localStorage.setItem('genius_wunderkind_segment', wunderkind_segment); } catch (e) {}
    }

    if ((wunderkind_segment * 100) < 100.0) {
      window['com.Genius.wunderkind_cohort'] = 'wunderkind';
      initialize_wunderkind(document);
    } else {
      window['com.Genius.wunderkind_cohort'] = 'control';
    }
  }

  determine_wunderkind_eligibility();