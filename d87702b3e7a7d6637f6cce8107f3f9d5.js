var Sharing=function(){if(!window.sharingInitial){window.sharingInitial=0}
if(window.sharingInitial===0){init();window.sharingInitial=1}
function init(){initMoreEscapeHandler();initMoreClickHandler();initSocialButtonsHandlers();}
function initMoreEscapeHandler(){document.addEventListener('keydown',function(event){if(event.key==='Escape'){hide();}});}
function initSocialButtonsHandlers(){document.addEventListener('click',function(event){var handlers={eml:clientRedirectHandler,vb:clientRedirectHandler,vk:false};var btn=closest(event.target,'.social-btn');if(btn){var target=btn.getAttribute('data-target');var handler=handlers[target]||serverRedirectHandler;handler(event);}});window.addEventListener('load',function(){var socialButtons=document.querySelectorAll('.social-btns');for(var i=0;i<socialButtons.length;i++){var isSticky=socialButtons[i].parentElement.classList.contains('sticky-sharing');if(!isSticky){redrawSocialButtons(socialButtons[i]);}}});}
function serverRedirectHandler(event){var params=getSharingParams(event.target);var url=getSharingURLPath()+'?'+dictToURI(params);openPopup(url,params['t']);}
function clientRedirectHandler(event){var params=getSharingParams(event.target);params['technique']='client_redirect';var url=getSharingURLPath()+'?'+dictToURI(params);callApi(url,function(data){var oldUnload=window.onbeforeunload;window.onbeforeunload=null;window.location=data['redirect_url'];setTimeout(function(){window.onbeforeunload=oldUnload;},0);});}
function callApi(url,cb){var xhr=new XMLHttpRequest();xhr.open('GET',url);xhr.send();xhr.onreadystatechange=function(data){if(xhr.readyState===XMLHttpRequest.DONE){try{var parsedData=JSON.parse(xhr.responseText);}catch(e){console.log(xhr.responseText);return;}
cb(parsedData);}}}
function getSharingParams(btn){var container=closest(btn,'.social-btns');var params={current_url:container.getAttribute('data-currenturl'),msg:container.getAttribute('data-msg'),link_id:container.getAttribute('data-linkid'),t:btn.getAttribute('data-target'),url:container.getAttribute('data-url')||window.DjangoCryptotabSharing_url};for(var key in params){if(!params[key]){delete params[key];}}
if(window.DjangoCryptotabSharing.from){if(window.DjangoCryptotabSharing.from==='p4t'&&params['t']==='fb'){params['src']='p4';}else{params['src']=window.DjangoCryptotabSharing.from;}}
if(window.DjangoCryptotabSharing.blank){params['blank']=window.DjangoCryptotabSharing.blank;}
if(window.DjangoCryptotabSharing.sum){params['sum']=window.DjangoCryptotabSharing.sum;}
return params;}
function initMoreClickHandler(){document.addEventListener('click',function(event){if(!closest(event.target,'.social-btns')){hide();}
if(closest(event.target,'.social-btns__more')){toggle(event.target);}});}
function toggle(el){var list=el.parentNode.querySelector('.social-btns__list')||el.parentNode.parentNode.querySelector('.social-btns__list');if(list.classList.contains('active')){list.classList.remove('active');}else{list.classList.add('active');}}
function hide(){var lists=document.querySelectorAll('.social-btns__list');for(var i=0;i<lists.length;i++){lists[i].classList.remove('active');}}
function openPopup(url,target){if(window.DjangoCryptotabSharing.blank){window.open(url,'_blank');}else{var height=target==='wa'?600:500;var width=target==='wa'?800:400;var y=window.outerHeight/2+window.screenY-(height/2);var x=window.outerWidth/2+window.screenX-(width/2);window.open(url,'','toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+width+', height='+height+', top='+y+', left='+x);}
return false;}
function closest(el,selector){var matches=el.webkitMatchesSelector?'webkitMatchesSelector':(el.msMatchesSelector?'msMatchesSelector':'matches');while(el.parentElement){if(el[matches](selector))return el;el=el.parentElement;}
return null;}
function debounce(func,wait,immediate){var timeout;return function(){var context=this,args=arguments;var later=function(){timeout=null;if(!immediate)func.apply(context,args);};var callNow=immediate&&!timeout;clearTimeout(timeout);timeout=setTimeout(later,wait);if(callNow)func.apply(context,args);};}
function dictToURI(dict){var str=[];for(var p in dict){str.push(encodeURIComponent(p)+"="+encodeURIComponent(dict[p]));}
return str.join("&")}
function getSharingURLPath(){return window.DjangoCryptotabSharing.host+'/'+window.DjangoCryptotabSharing.lang+'/cryptotab_sharing/';}
function redrawSocialButtons(container){var containerWidth=container.offsetWidth;if(containerWidth<=265){hideButtons(container,4);}else if(containerWidth<=310){hideButtons(container,3);}else if(containerWidth<=355){hideButtons(container,2);}else if(containerWidth<400){hideButtons(container,1);}}
function hideButtons(container,count){for(var i=0;i<count;i++){try{var button=container.querySelector('.social-btns__more').previousElementSibling;var list=container.querySelector('.social-btns__list');list.insertBefore(button,list.firstChild);}catch(e){}}}}();