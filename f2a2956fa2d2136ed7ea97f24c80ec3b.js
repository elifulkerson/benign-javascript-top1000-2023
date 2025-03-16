'use strict'
{
// topnews manipulation
// // topnews text cutting
// _id_topnews.querySelectorAll('.b_topnews-content .item-text').forEach(function(el){
// if(el.innerText.length>110) {
// let timeNode = el.querySelector('.time');
// let re = new RegExp(timeNode.innerText);
// let sliceTo;
// if(timeNode.innerText.length>5){
// sliceTo = 80;
// } else {
// sliceTo = 90;
// }
// let clearText = el.innerText; //.replace(re, '').trim().slice(0,sliceTo) + '... ';
// el.innerText = clearText;
// el.append(timeNode);
// }
// })
if(!_id_topnews.classList.contains('m_extra')){
let tnLArr = _id_topnews.querySelector('.b_topnews-arrow.m_left');
let tnRArr = _id_topnews.querySelector('.b_topnews-arrow.m_right');
// find gap between siblings items
let item1 = _id_topnews_content.querySelector('.item'); // first element in collection
let item2 = _id_topnews_content.querySelector('.item:nth-child(2)'); // and a second
let gap = item2.offsetLeft - item1.clientWidth;
let tnScrollStep = (item1.clientWidth + gap)*2;
// a/b Test part
// function createYaMetricSendFunction(rootId, levelId) {
// return function (type) {
// var obj = {};
// obj[rootId] = {};
// obj[rootId][levelId] = type;
// ym(27775902, 'params', obj);
// }
// }
// function topNewsABTest(block, rootId, levelId){
// var wasVisible = false;
// var wasClicked = false;
// var isInView = function (el) {
// let parent = el.offsetParent;
// return (el.offsetLeft<=(parent.scrollLeft+parent.clientWidth));
// };
// var sendYa = createYaMetricSendFunction(rootId, levelId);
// sendYa("setup");
// _id_topnews_content.addEventListener('scroll', e=>{
// if(isInView(block)){
// if(!wasVisible){
// sendYa("view");
// console.log('view');
// console.dir(block);
// wasVisible = true;
// }
// }
// })
// block.addEventListener("click", e=>{
// if (!wasClicked) {
// sendYa("clicked");
// wasClicked = true;
// }
// sendYa("click");
// })
// }
// topNewsABTest(tnRArr, 'topNewsDesc_AB', 'rArr');
// let items = _id_topnews_content.querySelectorAll('.item');
// let isLongVar = Math.random()>0.5 ? true : false;
// items.forEach((el,i)=>{
// if(i==4){
// el.id = '_id_topnews_5_item';
// topNewsABTest(el, 'topNewsDesc_AB', 'news_5');
// }
// if(isLongVar){
// if(i==9){
// el.id = '_id_topnews_long_10_item';
// topNewsABTest(el, 'topNewsDesc_AB', 'Long_news_10');
// } else if(i==(items.length-1)){
// el.id = '_id_topnews_long_last_item';
// topNewsABTest(el, 'topNewsDesc_AB', 'Long_last_news');
// }
// } else {
// if(i==9){
// el.id = '_id_topnews_short_10_item';
// topNewsABTest(el, 'topNewsDesc_AB', 'Short_last_news');
// }
// if(i>9){
// el.remove();
// }
// }
// });
// END a/b Test part
// topnews content extreme points
let tnMaxScroll = _id_topnews_content.scrollWidth - _id_topnews_content.offsetWidth;
let scroll;
let topNewsScrollFlag = false;
tnLArr.addEventListener('click', scrollNews);
tnRArr.addEventListener('click', scrollNews);
_id_topnews_content.addEventListener('scroll', scrollNews);
function scrollNews(e){
if(topNewsScrollFlag) return;
if(e.type == 'click'){
if(this.classList.contains('m_right')){
scroll = _id_topnews_content.scrollLeft + tnScrollStep;
if( scroll > tnMaxScroll ){
scroll = tnMaxScroll;
}
} else if(this.classList.contains('m_left')) {
scroll = _id_topnews_content.scrollLeft - tnScrollStep;
if( scroll < 0 ){
scroll = 0;
}
}
animationScroll(scroll);
} else {
scroll = _id_topnews_content.scrollLeft;
showHideArrows(scroll);
}
}
function animationScroll(scroll){
topNewsScrollFlag = true;
let duration = 300;
let start = performance.now();
let k;
let startValue = _id_topnews_content.scrollLeft;
function easing(x){
return Math.pow(1 - x, 2) * 3 * x * 0.1 + (1 - x) * 3 * Math.pow(x,2) + Math.pow(x,3);
}
let reqId = requestAnimationFrame(function animate(time){
let x = (time-start)/duration;
let newValue = scroll > startValue ?
startValue + Math.abs(startValue - scroll)*easing(x) :
startValue - Math.abs(startValue - scroll)*easing(x);
_id_topnews_content.scrollLeft = x > 1 && scroll != newValue ? scroll : newValue;
if(x>1){
topNewsScrollFlag = false;
showHideArrows(scroll);
cancelAnimationFrame(reqId);
} else {
requestAnimationFrame(animate);
}
})
}
function showHideArrows(scroll){
if(scroll>0 && scroll!=tnMaxScroll){
tnLArr.classList.add('m_show');
tnRArr.classList.add('m_show');
} else if(scroll>=tnMaxScroll) {
tnRArr.classList.remove('m_show');
// topNewsCounter('#_id_topnews', 'scrollToEnd', 'topnews');
} else if(scroll<=0) {
tnLArr.classList.remove('m_show');
}
}
}
}