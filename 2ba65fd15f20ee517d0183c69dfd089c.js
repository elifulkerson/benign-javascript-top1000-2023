if (window.__ace && typeof window.__ace === 'function') {
    const id = '61f2bdf7b00575078c959fee';
    const cb = () => {
      const vendorScript = document.createElement('script');
      vendorScript.src = 'https://d2zue0pgsssbc6.cloudfront.net/j/prod-wsj.js';
      vendorScript.setAttribute('id', 'adtoniq');
      vendorScript.async = true;
      vendorScript.addEventListener('load', function () { window.__ace('page', 'setPerfMark', ['adtoniq-loaded']);window.__ace('adtoniq', 'initListener', ['154a3e38-2228-44d6-9db6-c9707f3647ea']); });
      document.body.appendChild(vendorScript);
    }
    __ace('djcmp', 'executeOnCmpReady', [{cb, id }]);
  };