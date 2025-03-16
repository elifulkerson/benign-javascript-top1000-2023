if (window.innerWidth > 970) {
window.addEventListener('googletagloaded', (evt) => {
googletag.cmd.push(function() {
googletag.display('970x90_top');
});
});
}