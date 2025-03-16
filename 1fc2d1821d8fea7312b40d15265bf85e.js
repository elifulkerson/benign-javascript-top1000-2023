window.LS_Mustache_Params = {
            ...window.LS_Mustache_Params,
            gigConfig: {
        appName: 'homepage',
        cards: '/layout/calls/cards',
        cartInfo: '/layout/cart/info',
        division: {"name":"Tucson","id":"tucson","lat":32.222,"lng":-110.926},
        googleClientId: '169314272487.apps.googleusercontent.com',
        loginIframe: '/login/iframe',
        mystuffLayout: undefined,
        
      }
          };
          (function ({
  appName,
  cards,
  cartInfo,
  division,
  googleClientId,
  loginIframe,
  mystuffLayout,
  myGroupons,
  myReservations,
  myLinkedDeals,
  myAccount,
  myProfile,
  myEmailSubs,
  voucherArchive,
}) {
  window.Groupon || (window.Groupon = {});

  if (division) {
    Groupon.division = division;
  }

  Groupon.endpoints = {
    ...(cartInfo && { cartInfo }),
    ...(cards && { cards }),
    ...(loginIframe && { loginIframe }),
  };

  Groupon.LS = {
    data: {
      ...(appName && { appName }),
      ...(googleClientId && { googleClientId }),
    },
    ...(mystuffLayout && {
      CurrentMyStuffApp: {
        ...(myGroupons && { myGroupons }),
        ...(myReservations && { myReservations }),
        ...(myLinkedDeals && { myLinkedDeals }),
        ...(myAccount && { myAccount }),
        ...(myProfile && { myProfile }),
        ...(myEmailSubs && { myEmailSubs }),
        ...(voucherArchive && { voucherArchive }),
      },
    }),
  };
})(window.LS_Mustache_Params['gigConfig']);