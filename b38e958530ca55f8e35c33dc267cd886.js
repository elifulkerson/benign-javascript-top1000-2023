document.addEventListener("DOMContentLoaded", function(event) { 
 $(document).ready(function ()
 {
function load_taboola_script () {
  window._taboola = window._taboola || [];
  _taboola.push({homepage:'auto'});
  !function (e, f, u, i) {
    if (!document.getElementById(i)){
      e.async = 1;
      e.src = u;
      e.id = i;
      f.parentNode.insertBefore(e, f);
    }
  }(document.createElement('script'),
  document.getElementsByTagName('script')[0],
  '//cdn.taboola.com/libtrc/sakshi-sakshi/loader.js',
  'tb_loader_script');
  if(window.performance && typeof window.performance.mark == 'function')
    {window.performance.mark('tbl_ic');}
}

jQuery( window ).one (
        'scroll',
function() { load_taboola_script(); 
});
});
});