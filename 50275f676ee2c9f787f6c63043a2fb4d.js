(function() {
      if (!window.URLSearchParams || !window.history || !window.history.replaceState) {
        return;
      }
      var searchParams = new URLSearchParams(window.location.search);
      var paramsToDelete = [
        'fs',
        'sm',
        'swp',
        'iid',
        'nbs',
        'rcc', // related content category
        'rcpos', // related content carousel position
        'rcpg', // related carousel page
        'rchid', // related content hit id
        'f_ri', // research interest id, for SEO tracking
        'f_fri', // featured research interest, for SEO tracking (param key without value)
        'f_rid', // from research interest directory for SEO tracking
        'f_loswp', // from research interest pills on LOSWP sidebar for SEO tracking
        'rhid', // referrring hit id
      ];

      if (paramsToDelete.every((key) => searchParams.get(key) === null)) {
        return;
      }
      paramsToDelete.forEach((key) => {
        searchParams.delete(key);
      });

      var cleanUrl = new URL(window.location.href);
      cleanUrl.search = searchParams.toString();
      history.replaceState({}, document.title, cleanUrl);
    })();