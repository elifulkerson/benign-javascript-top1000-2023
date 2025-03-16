(function(){
    window.__browserSupports__ = [];
    try{ 
        var grid_supported = typeof document.createElement('div').style.grid === 'string';
        grid_supported ? window.__browserSupports__.push('grid') : window.__browserSupports__.push('not:grid');
    }catch(e){}

    var interval = null;
    var fn = function(){
        document.body.setAttribute("data-browser-supports", window.__browserSupports__.join(" "));
        clearInterval(interval);
        interval = null;
    }

    interval = setInterval(function(){
        if(document.body) fn();
    }, 5);
})();