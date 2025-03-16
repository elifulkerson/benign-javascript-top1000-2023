function initCarousel(carousel){
// структура карусели должна включать в себя:
// блок .content внутри которого живут потомки .item
// .leftarr и .rightarr для управления
// остальное стилями
// *** DOM elelements
var carousel = carousel;
var className = className;
var leftArr = carousel.querySelector('.leftarr') || null;
var rightArr = carousel.querySelector('.rightarr') || null;
var content = carousel.querySelector('.content') || null;
var items = content.querySelectorAll('.item') || null;
// *** service variables
var stopPos = (content.scrollWidth - content.offsetWidth)*(-1);
var leftPos = 0;
var step = 0;
var animationFlag = false;
// *** moving step for single pressure
function fullWidthEl(el){
return +el.offsetWidth + parseInt(getComputedStyle(el).marginRight) + parseInt(getComputedStyle(el).marginLeft)
}
for(var i=0; i<items.length; i++){
var elWidth = fullWidthEl(items[i]);
if( (step + elWidth) > content.offsetWidth ) break;
step += elWidth;
}
//****** show/hide control btns
carousel.addEventListener('mouseover', function(e){
let pos = carousel.getBoundingClientRect();
let xControl = e.clientX - pos.left;
if(xControl < carousel.offsetWidth/2){
rightArr.classList.remove('visible');
if(window.getComputedStyle(content, null).getPropertyValue('left').replace('px', '')<0){
leftArr.classList.add('visible');
}
} else if(xControl >= carousel.offsetWidth/2) {
leftArr.classList.remove('visible');
if(window.getComputedStyle(content, null).getPropertyValue('left').replace('px', '')>stopPos){
rightArr.classList.add('visible');
}
}
})
carousel.addEventListener('mouseleave', function(e){
leftArr.classList.remove('visible');
rightArr.classList.remove('visible');
})
// ***END show/hide control btns
// *** Moving Content by arrows
function moveContent(val){
if(!animationFlag){
var curLeftPos = parseInt(content.style.left) || 0;
var newLeftPos = curLeftPos + val;
if(newLeftPos<stopPos){
newLeftPos = stopPos;
} else if (newLeftPos>0){
newLeftPos = 0;
}
var startTime = null;
var now = null;
var k = null;
var duration = 300;
var newPos;
(function animate(){
if(startTime===null){
startTime = performance.now();
animationFlag = true;
}
now = performance.now();
k = (now-startTime)/duration;
// пояснение
// изменять состояние новой позиции, надо на дельту между новой и старой помноженную на коэфициент
newPos = k<1 ? curLeftPos + (-curLeftPos + newLeftPos)*k : newLeftPos;
content.style.left = newPos +'px';
if(k<1){
requestAnimationFrame(animate);
} else {
if(newPos==0){
leftArr.classList.remove('visible');
} else if(newPos == stopPos) {
rightArr.classList.remove('visible');
}
animationFlag = false;
}
})();
}
}
leftArr.addEventListener('click', function(e){
moveContent(step);
})
rightArr.addEventListener('click', function(e){
moveContent(step*(-1));
})
// carousel.addEventListener('wheel', function(e){
// e.preventDefault();
// var leftPos = +content.style.left.replace(/px/, '');
// var normallyDeltaY = e.deltaMode == 0 ? -e.deltaY : -e.deltaY*14;
// leftPos = leftPos - normallyDeltaY;
// if(leftPos>0){
// leftPos = 0;
// } else if(leftPos<stopPos){
// leftPos = stopPos;
// }
// content.style.left = leftPos + 'px';
// })
var dateNow = +('' + Date.now()).slice(0,10);
for(var i = 0; i < items.length; i++) {
var itemDate = +items[i].dataset.time;
var itemLive = items[i].dataset.live || undefined;
if(dateNow < itemDate || itemLive != undefined) {
if(+items[i].offsetLeft > content.offsetWidth/2 ){
var contentLeft = (+items[i].offsetLeft - (content.offsetWidth/2) + +items[i].offsetWidth/2)*(-1);
moveContent(contentLeft);
}
break;
}
}
}
initCarousel(_id_shortboard);