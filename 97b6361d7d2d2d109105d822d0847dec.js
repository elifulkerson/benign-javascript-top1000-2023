var exchangeClicksHandler = g_gazeta.asyncScriptFunc('https://static.gazeta.ru/nm2021/js/block_counter.v6.js', 'blockCounter');
var g_infoxCounter = 0;
var g_smi2Counter = 0;
var g_24smiCounter = 0;
var g_exchangePull = [
{
name: 'smi2',
url: 'https://smi2.ru/',
logo: 'https://static.smi2.net/static/logo/smi2.svg',
fetchPolicy: {},
checkUrl: 0,
fetchUrls: [
'https://smi2.ru/data/js/93295.js',
'https://smi2.ru/data/js/95122.js'
],
asideCheckUrl: 0,
asideUrls: [],
weight: 14,
weightArr: [7,1,1,1 ]
},
{
name: '24smi',
url: 'https://ex.24smi.info/',
logo: 'https://static.gazeta.ru/nm2015/i/__2020/partners/logo_24smi_2020.svg',
fetchPolicy: {},
checkUrl: 0,
fetchUrls: [
'https://data.24smi.net/informer?object=19146&output=json&num=20',
'https://data.24smi.net/informer?object=19144&output=json&num=20'
],
asideCheckUrl: 0,
asideUrls: ['https://data.24smi.net/informer?object=19145&output=json&num=20'],
weight: 5,
weightArr: [3,1,1,1 ]
},
{
name: 'infox',
url: 'https://cis.infox.sg/',
logo: 'https://static.gazeta.ru/nm2021/img/all_logo/infox_logo_origin.svg',
fetchPolicy: {credentials: 'include', mode: 'cors'},
checkUrl: 0,
fetchUrls: [
'https://rb.infox.sg/json?id=604&external=true',
],
asideCheckUrl: 0,
asideUrls: ['https://rb.infox.sg/json?id=909&external=true'],
weight: 1,
weightArr: [0,0,1,1 ]
},
];
function g_loadExchangeToEl(props){
let rootEl = props.el || null;
let exchangeName = props.exchangeName || null;
let nodeLimit = props.limit || null;
let exchangeIsVertical = props.vertical || false;
let exceptionName = props.exceptionName || null;
let isAside = props.aside || false;
let articleCounter = props.articleCounter || 0;
articleCounter = articleCounter > g_exchangePull[0].weightArr.length - 1 ? g_exchangePull[0].weightArr.length - 1 : articleCounter;
if(rootEl instanceof HTMLElement){
function rand(min, max) {
let rand = min - 0.5 + Math.random() * (max - min + 1);
return Math.round(rand);
}
function g_loadExchange(props){
let id = props.id || null;
let url = props.url || null;
let fetchPolicy = props.fetchPolicy || {};
let partnerUrl = props.partnerUrl || null;
let partnerlogo = props.partnerlogo || null;
let itemLimit = props.limit || null;
let exchangeIsVertical = props.vertical || false;
let root = document.getElementById(id);
root.classList.add('b_partners_feed');
function slideThis(carouseId){
let root = document.getElementById(carouseId);
let content = root.querySelector('.content');
let lArr = root.querySelector('.arrow.m_left');
let rArr = root.querySelector('.arrow.m_right');
// find gap between siblings items
let item1 = content.querySelector('.item'); // first element in collection
let item2 = content.querySelector('.item:nth-child(2)'); // and a second
let gap = item2.offsetLeft - item1.clientWidth;
let step = (item1.clientWidth + gap) * 2;
// content extreme points
let maxScroll = content.scrollWidth - content.offsetWidth;
let scrollFlag = false;
let scroll = 0;
root.addEventListener('mouseover', function(e){
maxScroll = content.scrollWidth - content.offsetWidth;
let pos = root.getBoundingClientRect();
let xControl = e.clientX - pos.left;
if(xControl < root.offsetWidth/2){
rArr.classList.remove('visible');
if(scroll > 0 ){
lArr.classList.add('visible');
}
} else if(xControl >= root.offsetWidth/2) {
lArr.classList.remove('visible');
if(scroll < maxScroll){
rArr.classList.add('visible');
}
}
})
root.addEventListener('mouseleave', function(e){
lArr.classList.remove('visible');
rArr.classList.remove('visible');
})
lArr.addEventListener('click', letScrolling);
rArr.addEventListener('click', letScrolling);
content.addEventListener('scroll', letScrolling);
function letScrolling(e) {
if (scrollFlag) return;
if (e.type == 'click') {
if (this.classList.contains('m_right')) {
scroll = content.scrollLeft + step;
if (scroll > maxScroll) {
scroll = maxScroll;
}
} else if (this.classList.contains('m_left')) {
scroll = content.scrollLeft - step;
if (scroll < 0) {
scroll = 0;
}
}
animationScroll(scroll);
} else {
scroll = content.scrollLeft;
showHideArrows(scroll);
}
}
function animationScroll(scroll) {
scrollFlag = true;
let duration = 300;
let start = performance.now();
let k;
let startValue = content.scrollLeft;
function easing(x) {
return Math.pow(1 - x, 2) * 3 * x * 0.1 + (1 - x) * 3 * Math.pow(x, 2) + Math.pow(x, 3);
}
let reqId = requestAnimationFrame(function animate(time) {
let x = (time - start) / duration;
let newValue = scroll > startValue ?
startValue + Math.abs(startValue - scroll) * easing(x) :
startValue - Math.abs(startValue - scroll) * easing(x);
content.scrollLeft = x > 1 && scroll != newValue ? scroll : newValue;
if (x > 1) {
scrollFlag = false;
showHideArrows(scroll);
cancelAnimationFrame(reqId);
} else {
requestAnimationFrame(animate);
}
})
}
function showHideArrows(scroll) {
if (scroll >= maxScroll) {
rArr.classList.remove('visible');
} else if (scroll <= 0) {
lArr.classList.remove('visible');
}
}
}
function getAveragePixel(imageSrc){
return new Promise(function(resolve, reject){
let img = new Image();
img.src = imageSrc;
img.crossOrigin = 'Anonymous';
img.addEventListener('load', function(){
let cnv = document.createElement('canvas');
let cw = cnv.width = 40;
let ch = cnv.height = img.naturalHeight*cw/img.naturalWidth;
let ctx = cnv.getContext('2d');
ctx.drawImage(img, 0,0, cw,ch);
let data;
try {
data = ctx.getImageData(0,0,cw,ch);
} catch {
return resolve({r:29,g:29,b:29, isDark: true});
}
let rgb = {r:0, g:0, b:0, isDark: true};
let counter = 0;
for(let i = 0; i<data.data.length; i += 20){
++counter;
rgb.r += data.data[i];
rgb.g += data.data[i+1];
rgb.b += data.data[i+2];
}
rgb.r = Math.round(rgb.r/counter) > 255 ? 255 : Math.round(rgb.r/counter);
rgb.g = Math.round(rgb.g/counter) > 255 ? 255 : Math.round(rgb.g/counter);
rgb.b = Math.round(rgb.b/counter) > 255 ? 255 : Math.round(rgb.b/counter);
resolve(rgb);
})
img.onerror = function(){
return resolve({r:29,g:29,b:29, isDark: true});
}
})
}
if(exchangeIsVertical){
root.classList.add('m_col');
}
if(partnerUrl){
let header = document.createElement('a');
header.className = 'header';
header.href = partnerUrl;
header.target = '_blank';
root.append(header);
if(partnerlogo){
let img = document.createElement('img');
img.src = partnerlogo;
header.append(img);
} else {
header.innerText = 'Популярное в сети';
}
}
let wrapper = document.createElement('div');
wrapper.className = 'wrapper';
root.append(wrapper);
if(!exchangeIsVertical){
let lArr = document.createElement('div');
lArr.className = 'arrow _ui_arrow m_left';
let lSpan = document.createElement('span');
lArr.append(lSpan);
let rArr = document.createElement('div');
rArr.className = 'arrow _ui_arrow m_right m_show';
let rSpan = document.createElement('span');
rArr.append(rSpan);
wrapper.append(lArr,rArr);
}
let content = document.createElement('div');
content.className = 'content';
wrapper.append(content);
fetch(url,fetchPolicy)
.then(response => {
if(response.ok){
return response.json();
}
})
.then(json=>{
let newsCollect;
if(json.news){
newsCollect = json.news;
} else {
newsCollect = json;
}
let tiserids = [];
if(newsCollect.length){
root.classList.add('show');
let lim = itemLimit ? itemLimit : newsCollect.length;
for(let i=0; i<lim; i++){
if(props.name.match('24smi')){
tiserids.push(newsCollect[i].id);
}
if(newsCollect[i].zero_pixel){
let img = new Image();
img.async = true;
img.src = newsCollect[i].zero_pixel;
}
if(newsCollect[i].img && newsCollect[i].title && newsCollect[i].url){
getAveragePixel(newsCollect[i].img)
.then(rgb=>{
let bgColor = `rgb(${rgb.r},${rgb.g},${rgb.b})`;
let item = document.createElement('a');
item.className = 'item';
item.target = '_blank';
item.href = newsCollect[i].url;
item.style.backgroundColor = bgColor;
let img = document.createElement('img');
img.src = newsCollect[i].img;
img.className = 'item-img';
let text = document.createElement('span');
text.className = 'item-text';
text.innerText = newsCollect[i].title;
text.style.backgroundColor = bgColor;
let textPlug = document.createElement('span');
textPlug.className = 'item-text-plug';
let gradientDirection = exchangeIsVertical ? 'to left' : 'to bottom';
textPlug.style.backgroundImage = `linear-gradient(${gradientDirection}, rgba(${rgb.r},${rgb.g},${rgb.b},0), rgba(${rgb.r},${rgb.g},${rgb.b},1))`;
text.append(textPlug);
item.append(img);
item.append(text);
content.append(item);
if(!exchangeIsVertical && i==lim-1){
slideThis(id);
}
})
}
}
if(props.name.match('24smi')){
let exchangeSendFlag = false;
let informerId = url.match(/object=(\d+)&/)[1];
let tisersStr = tiserids.toString();
let endpointUrl = `https://data.24smi.net/collect?obj=${informerId}&teaser_ids=${tisersStr}`;
window.addEventListener('scroll',function(e){
if(g_gazeta.isAnyInViewport(root) && !exchangeSendFlag){
exchangeSendFlag = true;
// console.log('exchange 24smi in viewport');
fetch(endpointUrl).then(response => {
if(response.ok){
return response.text();
}
})
.then(text=>{
// console.dir(text);
})
}
})
}
}
})
.catch(error => {
console.log(`${id} + ${url} error: ${error.message}`)
root.remove();
});
}
let g_exchangeTotalWeight = g_exchangePull.reduce((sum,el)=>{
if(exceptionName != el.name){
// choose el from weight array
if (articleCounter || articleCounter === 0){
return sum + el.weightArr[articleCounter];
} else {
return sum+el.weight;
}
} else {
return sum;
}
},0);
let elID = rootEl.id;
let exchange;
let randVal = rand(1,g_exchangeTotalWeight);
let curVal = 0;
for(var i=0; i<g_exchangePull.length; i++ ){
if(exceptionName!=g_exchangePull[i].name){
if(exchangeName && g_exchangePull[i].name == exchangeName){
exchange = g_exchangePull[i];
break;
} else {
if(randVal>curVal && randVal<=(curVal + g_exchangePull[i].weightArr[articleCounter])){
exchange = g_exchangePull[i];
break;
} else {
curVal += g_exchangePull[i].weightArr[articleCounter];
}
}
}
}
let checkUrl = isAside && exchange.asideUrls.length>0 ? exchange.asideCheckUrl : exchange.checkUrl;
let fetchUrl = isAside && exchange.asideUrls.length>0 ? exchange.asideUrls[checkUrl] : exchange.fetchUrls[checkUrl];
if(isAside && exchange.asideUrls.length>0){
exchange.asideCheckUrl = checkUrl+1<exchange.asideUrls.length ? checkUrl+1 : 0;
} else {
exchange.checkUrl = checkUrl+1<exchange.fetchUrls.length ? checkUrl+1 : 0;
}
g_loadExchange({
id: elID,
url: fetchUrl,
fetchPolicy: exchange.fetchPolicy,
partnerUrl: exchange.url,
partnerlogo: exchange.logo,
limit: nodeLimit,
vertical: exchangeIsVertical,
name: exchange.name
});
if ( exchange.name == 'infox' ) {
exchangeClicksHandler('#' + elID, 'infox_' + g_infoxCounter++, 'exchange_2');
}
else if ( exchange.name == 'smi2' ) {
exchangeClicksHandler('#' + elID, 'smi2_' + g_smi2Counter++, 'exchange_2');
}
else if ( exchange.name == '24smi' ) {
exchangeClicksHandler('#' + elID, '24smi_' + g_24smiCounter++, 'exchange_2');
}
}
}