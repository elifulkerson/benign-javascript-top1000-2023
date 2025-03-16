var asyncCreateYaMetricSendFunction = g_gazeta.asyncScriptFunc('https://static.gazeta.ru/nm2021/js/block_counter.v6.js', 'createYaMetricSendFunction');

var yaMetricSendPromise = asyncCreateYaMetricSendFunction('infiniteScroll', 'view-www-first');

function yaMetricSend ( page ) {
yaMetricSendPromise.then(function (func) {
func(page.toString());
})
}
yaMetricSend('articleNumber0');
var g_newsUrlesCollect = [];
var commonNewses = [];
var politicNewses = [];
var socialNewses = [];
var businessNewses = [];
var armyNewses = [];
var cultureNewses = [];
var scienceNewses = [];
var autoNewses = [];
var childrenNewses = [];
var sportNewses = [];





// add prcom

if(Array.isArray(window["g_lastColumnUrls"])){
g_newsUrlesCollect = g_lastColumnUrls;
} else { 
 














                                                          


                                
                                                                                                                       
                    
                                              

 
 



 



g_newsUrlesCollect.push('/family/news/2023/10/16/21508327.shtml'); 
 














                                                          


                                
                                                                                                                       
                    
                                              

 
 



 



g_newsUrlesCollect.push('/politics/news/2023/10/16/21509227.shtml'); 
 














                                                          


                                
                                                                                                                       
             
       
                                              

 
 



 



g_newsUrlesCollect.push('/sport/news/2023/10/16/21509269.shtml'); 
 














                                                          


                                
                                                                                                                       
                    
                       
                       

 
 



 



g_newsUrlesCollect.push('/army/news/2023/10/16/21509275.shtml'); 
 














                                                          


                                
                                                                                                                       
                    
                       
                       

 
 



 



g_newsUrlesCollect.push('/army/news/2023/10/16/21509257.shtml'); 
 














                                                     


                                
                                                                                                                       
             
       
                                              

 
 



 



g_newsUrlesCollect.push('/sport/news/2023/10/16/21509239.shtml'); 
 














                                                          


                                
                                                                                                                       
                    
                       
                       

 
 



 



g_newsUrlesCollect.push('/army/news/2023/10/16/21509209.shtml'); 
 














                                                          


                                
                                                                                                                       
                    
                                              

 
 



 



g_newsUrlesCollect.push('/social/news/2023/10/16/21509185.shtml'); 
 






                                          
 


































































































 



g_newsUrlesCollect.push(''); 
 






                                          
 


































































































 



g_newsUrlesCollect.push(''); }

// console.dir(g_newsUrlesCollect);
function checkAllIncuts(){
// *** launch all galleries
document.querySelectorAll('.s_picture_incut').forEach(function(el){
iGallery({domEl: el})
});
// *** check texts incuts
document.querySelectorAll('.s_article_text_incut').forEach(function(el){
var moreBtn = el.querySelector('.morebtn') || null;
var popup = el.querySelector('.popup');
var closeBtn = el.querySelector('.popup-closebtn');
var scrollAreaWidth = 0;
if(moreBtn){
moreBtn.onclick = function(){
el.style.zIndex = 20;
var clWBefore = document.documentElement.clientWidth;
popup.classList.add('m_open');
document.body.style.overflow = 'hidden';
document.body.style.paddingRight = document.documentElement.clientWidth - clWBefore + 'px';
};
closeBtn.onclick = function(){
el.style.zIndex = 10;
popup.classList.remove('m_open');
document.body.style.overflow = '';
document.body.style.paddingRight = 0;
};
}
});
// *** set notice for banned orgs
var bannedOrgs = document.documentElement.querySelector('.b_article .s_asterisk_banned_orgs:not([data-checked])');
var inoagentOrgs = document.documentElement.querySelector('.b_article .s_asterisk_inoagent_orgs:not([data-checked])');
document.documentElement.querySelectorAll('.b_article .s_asterisk_banned_orgs:not([data-checked])').forEach(function(el){
el.dataset.checked = true;
});
document.documentElement.querySelectorAll('.b_article .s_asterisk_inoagent_orgs:not([data-checked])').forEach(function(el){
el.dataset.checked = true;
});
if(bannedOrgs || inoagentOrgs){
var noticeBlock = document.createElement('div');
noticeBlock.className = 'b_article-notice';
var article = bannedOrgs ? bannedOrgs.closest('.b_article') : inoagentOrgs.closest('.b_article');
if(bannedOrgs){
var bannedOrgsNotice = document.createElement('div');
bannedOrgsNotice.innerHTML = '<sup>*</sup> Организация запрещена в России';
noticeBlock.append(bannedOrgsNotice);
}
if(inoagentOrgs){
var inoagentOrgsNotice = document.createElement('div');
inoagentOrgsNotice.innerHTML = '<sup>*</sup> Признан в РФ иностранным агентом';
noticeBlock.append(inoagentOrgsNotice);
}
article.append(noticeBlock);
}
}
checkAllIncuts();
var rootArticle = document.getElementById('_id_article_1731');
var counter = 0;
var limit = 10; //g_newsUrlesCollect.length;
var anchor = document.getElementById('_id_anchor');
var loader = anchor.querySelector('.b_preloader');
var canAddArticle = true;
var lastUrl = "";
function changeAllMeta(metaContent, url, articleNumber){
if(lastUrl != url) {
lastUrl = url
// metaContent.children.forEach(function(el, i){
for (var i = 0; i < metaContent.children.length; i++) {
el = metaContent.children[i];
var needEl;
switch(el.nodeName){
case 'TITLE':
case 'TITLE_SCROLL':
document.head.querySelector('title').textContent = el.textContent;
break;
case 'META':
case 'META_SCROLL':
if(el.name != ''){
needEl = document.head.querySelector('meta[name="'+el.name+'"]') || null;
if(needEl !== null){
needEl.content = el.content;
}
} else if(el.name == '' && el.outerHTML.match('property')){
var propertyName;
el.attributes.forEach(function(i){
if(i.name == 'property'){
propertyName = i.value;
needEl = document.head.querySelector('meta[property="'+propertyName+'"]') || null;
if(needEl !== null){
needEl.content = el.content;
}
}
})
}
break;
case 'LINK':
case 'LINK_SCROLL':
if(el.rel == 'image_src'){
needEl = document.head.querySelector('link[rel="image_src"]') || null;
if(needEl !== null){
needEl.href = el.href;
}
}
break;
}
if(i == metaContent.children.length - 1){
// metaContent.innerHTML = '';
}
};
history.replaceState(null, '', url);
history.scrollRestoration = 'manual';
g_gazeta_counters_reload();
}
if(articleNumber){
yaMetricSend('articleNumber' + articleNumber);
}
}
// pull заметок с мета и диапазоном для подмены урлов/мета
var artCollect = [];
// добавляем сразу первую заметку
artCollect.push({
'top': 0,
'bottom': (_id_anchor.getBoundingClientRect().top - 500),
'metaContent': document.documentElement.querySelector('._s_dynarticle_title_place'),
'url': location.href,
'articleNum': 0,
'id': '_id_main_article'
})
// метка заметки
var articleNum = 0;
var holdMetaChanging = false;
document.addEventListener('scroll', function(e){
if(/*counter<g_newsUrlesCollect.length*/ counter < limit && anchor.getBoundingClientRect().top<(window.innerHeight*1.5+500)){
loader.classList.remove('m_hide');
if(canAddArticle && g_newsUrlesCollect[counter]){
canAddArticle = false;
var root = document.createElement('div');
root.className = '_s_added_article';
root.id = '_id_added_article_' + (counter + 1);
root.dataset.url = location.origin + g_newsUrlesCollect[counter].replace(/\?.*/, '');
root.dataset.artnum = counter+1;
anchor.before(root);
var loadUrl = g_newsUrlesCollect[counter]+'?p=article_body&article_counter='+ (counter+1);
if(counter == limit-1){
loadUrl += '&last_article=1';
}
var dontCorrectRamblerVideoCode = true;
g_gazeta.loadHTMLToElement(root,loadUrl,dontCorrectRamblerVideoCode)
.then(function(result){
var metaContent = root.querySelector('._s_dynarticle_title_place');
var articleUrl = location.origin + g_newsUrlesCollect[counter].replace(/\?.*/, '');
checkAllIncuts();
loader.classList.add('m_hide');
counter += 1;
canAddArticle = true;
var checkIn = function(e){
if(root.getBoundingClientRect().top<window.innerHeight-500){
changeAllMeta(metaContent,articleUrl,counter);
artCollect.push({
'top': window.scrollY,
'bottom': (window.scrollY + root.getBoundingClientRect().height - 500),
'metaContent': metaContent,
'url': articleUrl,
'articleNum': counter,
'id': root.id
});
document.removeEventListener('scroll', checkIn);
}
}
document.addEventListener('scroll', checkIn);
})
}
}
if(!holdMetaChanging){
var scrollY = window.scrollY;
window.requestAnimationFrame(function(){
artCollect.forEach(function(el) {
var domEl = document.getElementById(el.id) || null;
if(domEl){
if(articleNum != el.articleNum && (domEl.getBoundingClientRect().top < window.innerHeight-500 && domEl.getBoundingClientRect().bottom > window.innerHeight-500)){
articleNum = el.articleNum;
changeAllMeta(el.metaContent,el.url);
}
}
holdMetaChanging = false;
})
})
holdMetaChanging = true;
}
})