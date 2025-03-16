(function (n, e, o, r, i) {
    if (!e) {
      (e = e || {}),
        (window['permutive'] = e),
        (e.q = []),
        (e.config = i || {}),
        (e.config.projectId = o),
        (e.config.apiKey = r),
        (e.config.environment = 'prod');
      for (var t = ["addon","identify","track","trigger","query","segment","segments","ready","on","once","user","consent"], c = 0; c < t.length; c++) {
        var f = t[c];
        e[f] = (function (n) {
          return function () {
            var o = Array.prototype.slice.call(arguments, 0);
            e.q.push({
              functionName: n,
              arguments: o,
            });
          };
        })(f);
      }
    }
  })(
    document, window['permutive'], '6ef7b2c1-fe43-45ad-8551-5377c13e2f71', 'e275d97e-aa77-43e0-ac22-71c7d5d5ad5a', {}
  );