window.addEventListener('load', function()  {
    const logo = document.querySelector('.onetLogo');

    if (onetAds.DV.indexOf("M_GLOWNA") > -1  && logo && logo.getAttribute('href').indexOf('https://csr.onet.pl') > -1) {
        logo.setAttribute('target', '_blank');
    }
});