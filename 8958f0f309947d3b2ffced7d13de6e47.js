function g_gazeta_tns_reload() {
var img = new Image();
img.src = 'https://www.tns-counter.ru/V13a***R>' + document.referrer.replace(/\*/g,'%2a') + '*sup_ru/ru/CP1251/tmsec=gazeta_www/' + Math.round(Math.random()*1E9);
}
g_gazeta_tns_reload();