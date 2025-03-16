(function(){
var advPlace = document.querySelector('._s_banner_native1:not([data-adv-load])');
var adFreeContent = document.createElement('div');
adFreeContent.className = '_is_adfree-text';
adFreeContent.innerHTML = '<div class="_is_adfree-title">Реклама отключена</div>';
function adFreeContentChecking(){
var listenerID = g_gazeta.addResizeListener(advPlace,function(el){
if(el.offsetHeight<10){
advPlace.classList.add('_is_adfree');
advPlace.append(adFreeContent);
g_gazeta.removeResizeListener(advPlace, listenerID);
}
});
}
AdfProxy.ssp('._s_banner_native1', {
'p1': 'bukpb',
'p2': 'fhzr',
'pct': 'a',
},{
'begun-auto-pad': "432328744",
'begun-block-id': "441704104"
})
.then(function(result){
// adFreeContentChecking();
});
})();