window.WP.push(function () {
    try {
    var viewData = {"event":"pageview","user":{"type":"guest-pl.wp","loggedIn":"none"},"page":{"pageviewType":"standard","templateType":"homepage","error5XX":"","error404":""},"site":{"name":"pl.wp","responsiveBreakpoint":"desktop-wide","version":"10.30.5-infinityGlo.1"}};

    var error404FromData = viewData.page ? viewData.page.error404 : '';
    var error404Regex = new RegExp(/[?&]404/);
    var error404 =
      error404Regex.test(document.location.search) && document.referrer
        ? 'redirect - ' + document.referrer
        : error404FromData;

    var responsiveBreakpoint =  window.sg_app_type === 'mobile'
      ? 'mobile'
      : window.applicationSize && window.applicationSize.type === 'narrow'
      ? 'desktop-narrow'
      : 'desktop-wide';
        
    var viewPage = {
      ga: {
        event: viewData.event,
        user: viewData.user,
        page: viewData.page,
        site: viewData.site,
        content: viewData.content,
      },
    };
    viewPage.ga.page.error404 = error404 || '';
    viewPage.ga.site.responsiveBreakpoint = responsiveBreakpoint;
    viewPage.ga.site.version = window.appVersion;

    window.WP.pwp.viewPage(viewPage);
    } catch (e) {
      console.error('SSR_GA_VIEW_PAGE_ERROR: ', e);
    }
  });