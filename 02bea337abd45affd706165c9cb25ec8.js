if ( typeof window['g_Gazeta240x400Counter'] == 'undefined' )
window['g_Gazeta240x400Counter'] = 0;
var sspMethod = g_Gazeta240x400Counter > 0 ? 'sspScroll' : 'ssp';
(function(){
var advPlace = document.querySelector('._s_banner_240x400:not([data-adv-load])');
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
AdfProxy[sspMethod]('._s_banner_240x400', {
p1: 'beelv',
p2: 'emhk',
pct: 'c',
criteo: 'crslr240=1',
pageNumber: g_Gazeta240x400Counter*1,
},{
'begun-auto-pad': "432328744",
'begun-block-id': "432328850"
});
++g_Gazeta240x400Counter;