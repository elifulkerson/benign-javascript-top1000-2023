const __cjpa = 'https://edata.ndtv.com/bookflip/config.json'; 
let bookflipJsonData = {};
function _cloadScript(url) {
    url = url+'?ver='+bookflipJsonData.ver;
    return new Promise(function(resolve, reject) {
            let script = document.createElement('script');
            script.src = url;
            script.async = false;
            script.onload = function() {
                    resolve(url);
            };
            script.onerror = function() {
                    reject(url);
            };
            document.body.appendChild(script);
    });
}

fetch(__cjpa)
.then(response => response.json())
.then((data) => {
        bookflipJsonData = data;
    _cloadScript('https://cdn.ndtv.com/bookflip/bookflip-inner.js');
});