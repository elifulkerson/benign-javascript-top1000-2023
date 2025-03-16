(() => {
  if (nav = document.querySelector('blz-nav, blz-nav-battlenet')) {
    nav.addEventListener('blz-nav:cms-loaded', ({ detail }) => {
      detail.cmsContent.filter((e) => ['/login', '/logout', '/?logout'].includes(e.href)).forEach((e) => {
        e.setAttribute('href', `${e.href}?redirect=${window.location.pathname}`)
      })
    })
  }
})();