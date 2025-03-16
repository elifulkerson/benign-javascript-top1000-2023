if ( typeof window['g_GazetaSuperFooterCounter'] == 'undefined' )
window['g_GazetaSuperFooterCounter'] = 1;

var sspMethod = 'sspScroll';

(function(){
var advPlace = document.querySelector('._s_banner_superfooter:not([data-adv-load])');
var gap = document.createElement('div');
gap.className = 'rg';
g_gazeta.addResizeListener(advPlace,function(el){
if(el.offsetHeight>10){
el.after(gap);
}else{
gap.remove();
}
});
})();
AdfProxy[sspMethod]('._s_banner_superfooter', {
p1: 'bsfjc',
p2: 'fcuz',
pct: 'a',
pageNumber: g_GazetaSuperFooterCounter,
},{
'begun-auto-pad': "432328744",
'begun-block-id': "432328848"
});
++g_GazetaSuperFooterCounter;