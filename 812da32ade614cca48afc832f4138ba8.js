(function(){
    const week = {
      '(Mon)': '(月)',
      '(Tue)': '(火)',
      '(Wed)': '(水)',
      '(Thu)': '(木)',
      '(Fri)': '(金)',
      '(Sat)': '(土)',
      '(Sun)': '(日)',
    }
    const targets = document.querySelectorAll('a[id^="forecaster-article-link"] .date-time, .forecaster-diary-entries-list .date-time, a[id^="right-forecaster-article-link"] .date-time, .news-entries-list .date-time, .date-youbi');
    if (targets.length !== 0) {
      targets.forEach(target => {
        for (const [k,v] of Object.entries(week)) {
          if (target.innerText.indexOf(k) !== -1) {
            target.innerText = target.innerText.replace(k, v);
          }
        }
      });
    }
  })();
  // #1887:曜日対応