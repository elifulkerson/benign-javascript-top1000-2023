window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  if (window.getProfile) {
    getProfile().then(function(profile) {
      gtag('js', new Date());
      gtag('set', {
        custom_map: {
          dimension1: 'pageType',
          dimension2: 'team',
          dimension3: 'tags',
          dimension4: 'edition',
          dimension5: 'department',
          dimension6: 'section',
          dimension7: 'author',
          dimension8: 'articleId',
          dimension9: 'publishDate',
          dimension10: 'platform',
          dimension11: 'loggedIn',
          dimension12: 'videoPresence',
          dimension13: 'originalEdition',
        },
      });
      var config = {"pageType":"home","edition":"us","department":"homepage","section":"front-page","platform":"cambria","loggedIn":false};
      config.loggedIn = !!profile;
      gtag('set', config);
      gtag('config', 'UA-1740781-82', {
        page_title: undefined,
      });
    });
  }