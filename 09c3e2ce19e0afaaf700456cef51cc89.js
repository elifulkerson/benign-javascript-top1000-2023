var sspMethod = 'sspScroll';

(function(){
var advPlace = document.querySelector('._s_banner_parallax:not([data-adv-load])');
g_gazeta.addResizeListener(advPlace,function(el){
if(el.offsetHeight>10){
el.classList.add('mbg');
}else{
el.classList.remove('mbg');
}
});
})();
AdfProxy[sspMethod]('._s_banner_parallax', {
'p1': 'bwrhc',
'p2': 'fhoe',
'pct': 'a',
},{
'begun-auto-pad': "432328744",
'begun-block-id': "437223824"
});