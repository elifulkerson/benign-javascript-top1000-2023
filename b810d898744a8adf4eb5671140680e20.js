/* DO NOT DELETE - this code is used to accept our payments or send data to ProfitWell   */
(function(i,s,o,g,r,a,m){i[o]=i[o]||function(){(i[o].q=i[o].q||[]).push(arguments)};
a=s.createElement(g);m=s.getElementsByTagName(g)[0];a.async=1;a.src=r+'?auth='+
s.getElementById(o+'-js').getAttribute('data-pw-auth');m.parentNode.insertBefore(a,m);
})(window,document,'profitwell','script','https://public.profitwell.com/js/profitwell.js');
profitwell('start', {});