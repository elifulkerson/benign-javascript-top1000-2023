(function(){
var advPlace = document.querySelector('._s_banner_billboard:not([data-adv-load])');
var gap = document.createElement('div');
gap.className = 'p1';
g_gazeta.addResizeListener(advPlace,function(el){
if(el.offsetHeight>10){
el.after(gap);
}else{
gap.remove();
}
});
})();
AdfProxy.ssp('._s_banner_billboard', {
'p1': 'beely',
'p2': 'y',
'pct': 'c',
},{
'begun-auto-pad': "432328744",
'begun-block-id': "432328854",
});