(function(w, d) {
    var gf = [];
    var gl = null;
    var gdnd = false;
    var k;
    w.$$files = {
      setListener: function(fn) {
        gl = fn;
        if (gl !== null && gf.length > 0) {
          gl(gf, gdnd);
          gf = [];
        }
      },
      handleFiles: function(f, d) {
        if (f && f.length > 0) {
          if (k && f[0] === k) {
            return;
          }
          k = f[0];
          if (gl === null) {
            gdnd = d;
            Array.prototype.push.apply(gf, f);
          } else if (f.length > 0) {
            gl(f, d);
          }
        }
      }
    };
    var b = d.body;
    b.addEventListener('dragover', function(evt) {
      evt.preventDefault();
    });
    b.addEventListener('dragenter', function(evt) {
      evt.preventDefault();
    });
    b.addEventListener('drop', function(evt) {
      evt.preventDefault();
      var t = evt.dataTransfer;
      if (!t) {
        return;
      }
      var f = [];
      if (t.files) {
        Array.prototype.push.apply(f, t.files);
      }
      w.$$files.handleFiles(f, true);
    });
  })(window, document);