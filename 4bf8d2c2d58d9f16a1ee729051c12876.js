var head = document.getElementsByTagName("head")[0];
if ("fonts" in document) {
head.classList.add('icon-invisible')
var font = new FontFace(
'pcgamer',
'url(https://vanilla.futurecdn.net/pcgamer/791504/media/fonts/pcgamer.woff), url(https://vanilla.futurecdn.net/pcgamer/791504/media/fonts/pcgamer.ttf), url(https://vanilla.futurecdn.net/pcgamer/791504/media/fonts/pcgamer.eot), url(https://vanilla.futurecdn.net/pcgamer/791504/media/fonts/pcgamer.svg) ', {
display: 'swap'
}
)
performance.mark("font load start")
font.load().then((fontFace) => {
document.fonts.add(fontFace)
performance.mark("font load finish")
performance.measure("font load time", "font load start", "font load finish")
head.classList.remove('icon-invisible')
console.log(fontFace.family, 'loaded successfully.')
}, (fontFace) => {
console.error('Current status', font.status);
});
}