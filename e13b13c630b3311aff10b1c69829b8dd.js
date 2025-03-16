(function fidesScript(staticAssetURL) {
  var searchStrObj = new URLSearchParams(window.location.search);
  var fidesToggle = searchStrObj.get('fides-toggle');
  if (!fidesToggle) return;
  var FIDES_INDEX = 16;
  var LOOKUP_NAME = 'nyt-purr=';
  var fidesOverride = searchStrObj.get('fides-override');
  var purrVal = document.cookie.split(';').find(function (cookie) {
    return cookie.includes(LOOKUP_NAME);
  }) || '';
  var fidesTCF = purrVal.replace(LOOKUP_NAME, '').trim().charAt(FIDES_INDEX);
  if (fidesOverride === 'true' || fidesTCF === 's') {
    var script = document.createElement('script');
    script.src = staticAssetURL;
    document.head.appendChild(script);
  }
})('https://static01.nyt.com/vi-assets/static-assets/fides-4d6cae82d043965a942be860af88de26.js');