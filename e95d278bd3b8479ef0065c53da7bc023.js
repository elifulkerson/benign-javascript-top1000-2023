if (window.innerWidth >= 1200) {
window.addEventListener('googletagloaded', (evt) => {
googletag.cmd.push(function() { googletag.display('1x1_out'); });
});
}