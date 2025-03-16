let goToInstallPWA;
window.addEventListener('beforeinstallprompt', e => {
e.preventDefault();
if(!g_gazeta.getCookie('dontwannainstallpwa')){
goToInstallPWA = e;
_id_pwainstall_popup.classList.add('show');
g_gazeta.setCookie('dontwannainstallpwa', '1', {expires: 86400, path: '/'});
// console.log('pwa_canBeInstalled');
_id_pwainstallbtn.addEventListener('click', e=>{
if(goToInstallPWA.prompt){
goToInstallPWA.prompt();
goToInstallPWA.userChoice
.then((choiceResult) => {
if (choiceResult.outcome === 'accepted') {
console.log('pwa installing');
} else {
console.log('refuse pwa installer');
}
goToInstallPWA = undefined;
});
}
_id_pwainstall_popup.classList.remove('show');
})
_id_pwadisagree.addEventListener('click', e=>{
g_gazeta.setCookie('dontwannainstallpwa', '1', {expires: 86400, path: '/'})
_id_pwainstall_popup.classList.remove('show');
})
}
});