if (window.innerWidth > 728) {
window.addEventListener('googletagloaded', ()=>{
googletag.cmd.push(function() {
googletag.display('728x90_top');
});
});
}