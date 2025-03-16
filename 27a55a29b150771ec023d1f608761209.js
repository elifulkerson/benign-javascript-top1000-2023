function fontSizeSetFunc(selector, fontSize, setCookie){
let setFontSize;
switch (fontSize) {
case 'small':
setFontSize= 10;
break;
case 'medium':
setFontSize= 12;
break;
case 'large':
setFontSize= 14;
break;
default:
setFontSize = 10;
}
if(selector){
let activeSelectors = document.querySelectorAll('.b_fontsize_switcher .selector.active');
if(activeSelectors.length>0){
activeSelectors.forEach(el=>{
el.classList.remove('active');
})
}
// document.documentElement.querySelector('.b_fontsize_switcher .selector.active').classList.remove('active');
let neededSelectors = document.querySelectorAll(selector);
if(neededSelectors.length>0){
neededSelectors.forEach(el=>{
el.classList.add('active');
})
}
// selector.classList.add('active');
}
document.documentElement.style.fontSize = setFontSize + 'px';
if(setCookie){
g_gazeta.setCookie('fontSizeSet', fontSize, {path: '/', expires: 2147483647});
}
}
if(g_gazeta.getCookie('fontSizeSet')){
let size = g_gazeta.getCookie('fontSizeSet');
let selector = '.b_fontsize_switcher .selector[data-size="'+size+'"]';
fontSizeSetFunc(selector, size);
}
window.addEventListener('DOMContentLoaded', (e) => {
if(g_gazeta.getCookie('fontSizeSet')){
let size = g_gazeta.getCookie('fontSizeSet');
let selector = '.b_fontsize_switcher .selector[data-size="'+size+'"]';
fontSizeSetFunc(selector, size);
}
var fontSwitcher = document.querySelectorAll('.b_fontsize_switcher');
if(fontSwitcher.length>0){
document.documentElement.querySelectorAll('.b_fontsize_switcher .selector').forEach(el=>{
el.addEventListener('click', function(){
if(el.classList.contains('active')) return;
let selector = '.b_fontsize_switcher .selector[data-size="' + el.dataset.size +'"';
fontSizeSetFunc(selector, el.dataset.size, true);
})
})
}
});