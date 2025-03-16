(function(){var timer_interval=5*60*1000;function addQS(param){var url=window.location.pathname;var qs=window.location.search;var hash=window.location.hash;url+=(qs?qs+'&':'?')+"updated";if(window.location.hash)
url+=window.location.hash;return url;}
var timer_id;var start_timer;document.addEventListener("visibilitychange",function(){if(document.hidden){if(timer_id)
clearTimeout(timer_id);start_timer=(new Date()).getTime();timer_id=setTimeout(function(){document.addEventListener("visibilitychange",function(){if(!document.hidden){window['reloading_updated']=true;var url=window.location.pathname;var qs=window.location.search;var hash=window.location.hash;if(qs.match(/\bupdated\b/))
window.location.reload(true);else
window.location.replace(addQS('updated'));}});},timer_interval);}else{var cur_time=(new Date()).getTime();if(cur_time<start_timer+timer_interval){if(timer_id){clearTimeout(timer_id);timer_id=undefined;}}}});})();