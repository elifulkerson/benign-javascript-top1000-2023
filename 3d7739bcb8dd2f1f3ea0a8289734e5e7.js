if (window.innerWidth <= 768) {
window.addEventListener('googletagloaded', (evt) => {
googletag.cmd.push(function() {
googletag.display('square_3_mobile');
});
});
}