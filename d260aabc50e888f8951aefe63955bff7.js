if ( typeof window['g_Gazeta240x400_2Counter'] == 'undefined' )
window['g_Gazeta240x400_2Counter'] = 1;

var sspMethod = 'sspScroll';

(function(){
var advPlace = document.querySelector('._s_banner_240x400_2:not([data-adv-load])');
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
AdfProxy[sspMethod]('._s_banner_240x400_2', {
p1: 'bmcwm',
p2: 'ewqs',
pct: 'a',
pageNumber: g_Gazeta240x400_2Counter*1,
},{
'begun-auto-pad': "432328744",
'begun-block-id': "432328852"
});
++g_Gazeta240x400_2Counter;