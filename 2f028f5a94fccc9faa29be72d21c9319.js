const rtlLinks = ["https://www.crunchyroll.com/build/main-rtl.common-8a7a8465.c5e4cb13db261acce24b.css","https://www.crunchyroll.com/build/main-rtl.common-87b458c9.103494b21e4041257694.css"];
      const ltrLinks = ["https://www.crunchyroll.com/build/main-ltr.common-fdd41e81.439d73cf06304356bd03.css","https://www.crunchyroll.com/build/main-ltr.common-f50829eb.f76fb6f6935b4628ed29.css"];

      const rtlScripts = ["https://www.crunchyroll.com/build/main-rtl.8358b0bfddf6ff842305.js"]

      const ltrScript = ["https://www.crunchyroll.com/build/main-ltr.8ba2ed47f71b504ccd2a.js"]

      const isRTL = document.location.pathname.startsWith('/ar/') || document.location.pathname === '/ar'
      const html = document.getElementsByTagName('html')[0];
      const dir = isRTL ? 'rtl' : 'ltr';
      const scripts = isRTL ? rtlScripts : ltrScript;
      const links = isRTL ? rtlLinks : ltrLinks;

      html.setAttribute('dir', dir);
      scripts.forEach((script) => {
        const scriptTag = document.createElement('script');
        scriptTag.src = script;
        document.head.appendChild(scriptTag);
      });

      links.forEach((link) => {
        const linkTag = document.createElement('link');
        linkTag.href = link;
        linkTag.rel = 'stylesheet';
        document.head.appendChild(linkTag);
      });