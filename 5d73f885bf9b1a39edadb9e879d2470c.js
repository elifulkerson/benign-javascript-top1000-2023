'use strict'
{
_id_header.querySelectorAll('.b_podcastbtn').forEach(function(el){
el.addEventListener('click', function(){
var windowFeatures = "width=600,height=468";
window.open("/podcast_page/index.shtml", "podcast_popup", windowFeatures);
})
})
var pseudo = _id_header.querySelector('.b_header-pseudo');
var anchorPos = _id_header.getBoundingClientRect().bottom + pseudo.clientHeight;
window.addEventListener('scroll', function(e){
if(window.scrollY > anchorPos){
pseudo.classList.add('show');
_id_header_main.inert = true;
pseudo.inert = false;
} else {
pseudo.classList.remove('show');
_id_header_main.inert = false;
pseudo.inert = true;
}
})
// if(document.body.classList.contains('m_premium') && !/^((?!chrome|android).)*safari/i.test(navigator.userAgent)){
// let banner20Idei = document.querySelector('.b_header .pcekwcoj43jg');
// banner20Idei.classList.add('m_isadv');
// }
// search area manipulation
var searchArea = document.getElementById('_id_searcharea') || null;
if(searchArea){
var searchBtn = _id_searcharea.querySelector('.btn') ;
searchBtn.addEventListener('click', function(e){
if(_id_searcharea.classList.contains('m_open')){
_id_searcharea.classList.remove('m_open');
_id_searcharea_text.value = '';
} else {
_id_searcharea.classList.add('m_open');
_id_searcharea_text.focus();
}
})
}
var headerClicksHandler = g_gazeta.asyncScriptFunc('https://static.gazeta.ru/nm2021/js/block_counter.v6.js', 'blockCounter');
headerClicksHandler('#_id_header_main', 'desktopMainHeader', 'headerClicksHandler');
headerClicksHandler('#_id_header_pseudo', 'desktopFlowHeader', 'headerClicksHandler');
}