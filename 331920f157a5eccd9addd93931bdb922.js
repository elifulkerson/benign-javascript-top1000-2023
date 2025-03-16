


    // getCookie(), setCookie(), deleteCookie()

var g_GazetaJS = (function () {
    var instance;

    return function Construct_singletone() {
        if (instance) {
            return instance;
        }
        if (this && this.constructor === Construct_singletone) {
            instance = this;
        } else {
            return new Construct_singletone();
        }

        // возвращает cookie если есть или undefined
        this.getCookie = function (name) {
            var matches = document.cookie.match(
                new RegExp(
                    "(?:^|; )" +
                        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
                        "=([^;]*)"
                )
            );
            return matches ? decodeURIComponent(matches[1]) : undefined;
        };

        // уcтанавливает cookie
        this.setCookie = function (name, value, props) {
            props = props || {};
            var exp = props.expires;

            if (typeof exp == "number" && exp) {
                var d = new Date();
                d.setTime(d.getTime() + exp * 1000);
                exp = props.expires = d;
            }

            if (exp && exp.toUTCString) {
                props.expires = exp.toUTCString();
            }

            value = encodeURIComponent(value);

            var updatedCookie = name + "=" + value;
            for (var propName in props) {
                updatedCookie += "; " + propName;
                var propValue = props[propName];
                if (propValue !== true) {
                    updatedCookie += "=" + propValue;
                }
            }

            document.cookie = updatedCookie;
        };

        // удаляет cookie
        this.deleteCookie = function (name) {
            setCookie(name, null, { expires: -1 });
        };

        // func:  function(scrollPosition: {x:int,y:int}) => Promise|notnull|undefined;
        this.onscroll = function (func, throwNotInterrupt) {
            function isPromise(object){
                if(Promise && Promise.resolve){
                    return Promise.resolve(object) == object;
                } else {
                    throw "Promise not supported in your environment"
                }
            }        

            return new Promise(function (resolve, reject) {
                var ticking = false;
                function onScroll() {
                    if (!ticking) {
                        var lastScrollPosition = { x: window.scrollX, y: window.scrollY };
                        window.requestAnimationFrame(function() {
                            result = func(lastScrollPosition);
                            if(isPromise(result)) {
                                result
                                .then(function(res) {
                                    if(typeof res != 'undefined' && res !== null) {
                                        window.removeEventListener('scroll', onScroll);
                                        resolve(res);
                                    }
                                    ticking = false;
                                })
                                .catch(function() {
                                    if(!throwNotInterrupt) {
                                        window.removeEventListener('scroll', onScroll);
                                        reject();
                                    }
                                    ticking = false;
                                })
                            } else {
                                if(typeof result != 'undefined' && result !== null) {
                                    window.removeEventListener('scroll', onScroll);
                                    resolve(result);
                                }
                                ticking = false;
                            }
                        });
                        ticking = true;
                    }
                }
                window.addEventListener('scroll', onScroll);
            });
        };

        // selector - либо HTML элемент, либо корректный селектор для document.querySelector
        // загрузка осуществляется только в первый элемент (если их несколько)
        this.loadHTMLToElement = function (selector, url, playerFlag) {
            
            var playerFlag = playerFlag || false; // если передаем параметр true, то не обрабатываем widgetPlayer
            
            function isElement(obj) {
                try {
                    return obj instanceof HTMLElement;
                }
                catch(e){
                    //Browsers not supporting W3 DOM2 don't have HTMLElement and
                    //an exception is thrown and we end up here. Testing some
                    //properties that all elements have (works on IE7)
                    return (typeof obj==="object") &&
                        (obj.nodeType===1) && (typeof obj.style === "object") &&
                        (typeof obj.ownerDocument ==="object");
                }
            }

            return new Promise(function(resolve, reject) {
                var appendDiv = null;
                if(isElement(selector)) {
                    appendDiv = selector;
                } else {
                    var appendDiv = document.querySelector(selector);
                }
                if(!appendDiv) {
                    reject();
                    return;
                }

                fetch(url)
                    .then(function (response) {
                        return response.text();
                    })
                    .then(function (html) {
                        var src = "";
                        scripts_js = [];
                        scripts_src = [];
                        re = /(<script([^>]*)>(.*?)<\/script>)/gs;
                        m = re.exec(html);
                        while(m) {
                            src = "";
                            s = m[2].match(/src=["']([^"']*)/);
                            if(s)
                                src = s[1];
                            js = m[3].trim();
                            if(js)
                                scripts_js.push(js);
                            else if(src)
                                scripts_src.push(src);
                            m = re.exec(html);
                        }
                        html = html.replace(re, ' ');
                        if(!playerFlag){
                            html = html.replace(/(<div[^>]+)(data-widget=["']Player['"])/gs, '$1 data-auto-play="false" $2'); // отключаем автоплей у видосов                            
                        }
                        
                        appendDiv.innerHTML = html;
                        return new Promise(function(resolve, reject) {
                            setTimeout(function() {
                                resolve({js:scripts_js, src: scripts_src});
                            }, 0);
                        })
                    })
                    .then(function(scripts) {
                        scripts_js = scripts.js;
                        scripts_src = scripts.src;
                        for(var i in scripts_src) {
                            
                            if(!playerFlag){

                                if( scripts_src[i].match(/https:\/\/vp.rambler.ru\/player\/sdk.js/) &&  
                                    document.querySelector('script[src="https://vp.rambler.ru/player/sdk.js"]')){
                                    continue;
                                }

                            }
                                
                            var script = document.createElement('script');
                            script.type = 'text/javascript';
                            script.src = scripts_src[i];
                            if(script.src.match(/\/\/www.instagram.com\/.*embed.js/)) {
                                script.addEventListener("load", function() {
                                    window.instgrm.Embeds.process();
                                });
                            }
                            document.getElementsByTagName('head')[0].appendChild(script);
                        }
                        for(var i in scripts_js) {
                            try {
                                eval(scripts_js[i]);
                            }  catch(err) {
                                //reject();
                            }
                        }
                        resolve();
                    })
                    .catch(function(e) {
                        reject(e);
                    });
            });
        }

        // добавить отслеживание изменений размера элемента
        this.addResizeListener = function (element, listener) {
            var target =
                element instanceof HTMLElement
                    ? element
                    : document.querySelector(element);
            if (target) {
                var listeners = target["resizeListeners"];
                var isInit = typeof listeners == "object" && listeners != null;
                if (!isInit) {
                    listeners = {};
                }
                var maxId = 0;
                for (var key in listeners) {
                    if (listener == listeners[key]) {
                        return key;
                    }
                    if (key > maxId) maxId = key;
                }
                var id = ++maxId;
                listeners[id] = listener;
                target["resizeListeners"] = listeners;
                if (!isInit) {
                    var ro = new ResizeObserver(function (entries) {
                        if (
                            entries &&
                            entries.length > 0 &&
                            entries[0].target
                        ) {
                            var listeners = target["resizeListeners"];
                            for (var key in listeners) {
                                listeners[key](entries[0].target);
                            }
                        }
                    });
                    ro.observe(target);
                }
                listener(target);
                return id;
            }
        };

        // удалить отслеживание изменений размера элемента
        this.removeResizeListener = function (element, listener) {
            var target =
                element instanceof HTMLElement
                    ? element
                    : document.querySelector(element);
            if (target) {
                var listeners = target["resizeListeners"];
                var isInit = typeof listeners == "object" && listeners != null;
                if (!isInit) {
                    return;
                }
                var id = 0;
                if (
                    typeof listener == "string" ||
                    typeof listener == "number"
                ) {
                    id = listener;
                } else {
                    for (var key in listeners) {
                        if (listener == listeners[key]) {
                            id = key;
                        }
                    }
                }
                delete listeners[id];
                target["resizeListeners"] = listeners;
            }
        };

        // повесить click listener на родительский элемент. аналог $(sel1).on('click', 'sel2', function () {....})
        this.addParentClickListener = function (root, selector, func) {
            document.querySelectorAll(root).forEach(function(element) {
                element.addEventListener('click', function(event) {
                    target = event.target;
                    while(target && target != element && ! target.matches(selector)) {
                        target = target.parentElement;
                    }
                    if(target.matches(selector)) {
                        func(target, element);
                    };
                });
            });
        };

        // элемент целиком виден во вьюпорте
        this.isAllInViewport = function (el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        };

        // любая часть элемента видна во вьюпорте
        this.isAnyInViewport = function (el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
                rect.bottom >= 0 &&
                rect.right >= 0
            );
        };

        var asyncScripts = {};
        this.asyncScriptFunc = function (url, funcName) {
            if(window[funcName]) 
                return function() {
                    var args = [].slice.call(arguments);
                    return Promise.resolve(window[funcName].apply(void 0, args));
                }
            var s = asyncScripts[url];
            if(!s) {
                s = document.createElement('script');
                s.async = 1; 
                s.src = url; 
                document.head.appendChild(s);
                asyncScripts[url] = s;
            }
            return function () {
                var args = [].slice.call(arguments);
                if(window[funcName]) 
                    return Promise.resolve(window[funcName].apply(void 0, args));
                return new Promise( function (resolve, reject) {
                    s.addEventListener('load', function() {
                        resolve(window[funcName].apply(void 0, args));
                    })
                });
            }
        };
    };
})();

var g_gazeta = g_GazetaJS();

/*
Аргументы:

name
название cookie
value
значение cookie (строка)
props
Объект с дополнительными свойствами для установки cookie:
expires
Время истечения cookie. Интерпретируется по-разному, в зависимости от типа:
Если число - количество секунд до истечения.
Если объект типа Date - точная дата истечения.
Если expires в прошлом, то cookie будет удалено.
Если expires отсутствует или равно 0, то cookie будет установлено как сессионное и исчезнет при закрытии браузера.
path
Путь для cookie.
domain
Домен для cookie.
secure
Пересылать cookie только по защищенному соединению.
*/

 /*

    incoming props

    var options = {
        domEl           : DOM_obj,
        //view            : 'slider',
        infinite        : false,
        //safePictureUrl  : false,
        previewControl  : false,
        //fullScreenDOM   : true
    };

 */

    function iGallery(props)
    {
        var domEl           = props.domEl;
        var infinite        = props.infinite;
        var previewControl  = props.previewControl;

        // only for incuts gazeta
        var limit           = props.limit       || null;
        var safeQnt         = props.safeQnt     || null;

        var gallery         = domEl;
        var leftBtn         = gallery.querySelector('.leftbtn')         || null;
        var rightBtn        = gallery.querySelector('.rightbtn')        || null;
        var zoombtn         = gallery.querySelector('.zoombtn')         || null;
        var closeBtn        = gallery.querySelector('.closebtn')        || null;
        var textToggleBtn   = gallery.querySelector('.text_toggle_btn') || null;
        var scalePlace      = gallery.querySelector('.scaleplace')      || null;

        var mainarea        = gallery.querySelector('.mainarea')        || null;
        var itemsArr        = mainarea.getElementsByClassName('item')   || null;
        var arrSize         = itemsArr.length                           || null;
        var image           = itemsArr[0].querySelector('.item-image')  || null;

        var signPlace       = gallery.querySelector('.signplace')       || null;
        var quantityNum     = gallery.querySelector('.quantity-num')    || null;
        var quantitySum     = gallery.querySelector('.quantity-sum')    || null;

        var infoblock       = gallery.querySelector('.infoblock')       || null;

        var noManipulate    = false;

        var noHistoryUrlReplace = gallery.dataset.isincut || null;

        if(gallery.dataset.no_manipulate_in_fullscreen) {
            noManipulate = true;
        }

        if(limit){
            var digest      = gallery.querySelector('.b_gotoreport')      || null;
        } else {
            var digest      = gallery.querySelector('.b_photoreports_digest')    || null;
        }

        // service variables
        var dataItem        = 0;
        var animationFlag   = false;
        var hqPhotoLoadFlag = true;


        // ****** gazetaApplication's actions

        if(window.g_GazetaWebView && !noManipulate){

            var collectImages = {};
                collectImages.initialIndex = 0;
                collectImages.pictures = [];

            for(i=0; i<itemsArr.length; i++){

                var curImage    = itemsArr[i].querySelector('.item-image');

                collectImages.pictures.push({
                    url:        curImage.dataset.hq,
                    caption:    curImage.dataset.caption || void 0,
                    src:        curImage.dataset.author || void 0
                })
            }

        }

        var listener = {
            mousedown:  'mousedown',
            mousemove:  'mousemove',
            mouseup:    'mouseup',
            wheel:      'wheel',
            dblclick:   'dblclick'
        };

        //detect mobile
        var isMobile = (function(){
            if(/iPhone|iPod|iPad|Android|Windows Phone|\bWindows(?:.+)ARM\b|BlackBerry|BB10|Opera Mini|\b(CriOS|Chrome)(?:.+)Mobile|Mobile(?:.+)Firefox\b/i.test(navigator.userAgent)){
                infinite = true;
                return true;
            } else {
                return false;
            }
        })();
        var isIos = (function(){
            if(/iPhone|iPod|iPad/i.test(navigator.userAgent)){
                return true;
            } else {
                return false;
            }
        })();

        if(isMobile){
            listener.mousedown  = 'touchstart';
            listener.mousemove  = 'touchmove';
            listener.mouseup    = 'touchend';
        }

        if(quantityNum && quantitySum) {
            quantityNum.innerHTML = dataItem+1;
            quantitySum.innerHTML = safeQnt ? safeQnt : arrSize;
        }

        var backToStartBtn = gallery.querySelector('.b_extra_photoreports-nav .back_to_start') || null;

        var showAllBtn = gallery.querySelector('.b_extra_photoreports-nav .show_all') || null;

        if(digest && showAllBtn && backToStartBtn){

            showAllBtn.addEventListener('click', closeFullScreen);

            backToStartBtn.addEventListener('click', function(){

                digest.classList.remove('active');
                if(infoblock !== null){
                    infoblock.classList.remove('hide');
                }
                rightBtn.classList.remove('disable', 's_show_digest');
                zoombtn.classList.remove('hide');
                changeItems(0);

            })
        }


        function translateSlider(e){

            e.preventDefault();

            previewMovingFlag = true;

            var stopPos = slider.scrollWidth - slider.offsetWidth;
            var leftPos = +slider.style.left.replace(/px/, '');

            leftPos = leftPos + e.movementX;

            //debugger;
            slider.style.left = leftPos + 'px';
        }

        function controlSliderPosition(){

            var stopPos = slider.scrollWidth - slider.offsetWidth;
            var leftPos = +slider.style.left.replace(/px/, '');

            if(leftPos>0 || leftPos<(-1)*stopPos) {
                var startTime   = null,
                    now         = null,
                    k,
                    duration    = 300;

                var newPos;

                (function animate(){
                    if(startTime===null){
                        startTime = performance.now();
                    }
                    now = performance.now();

                    k = (now-startTime)/duration;

                    if(leftPos>0){
                        newPos = leftPos-leftPos*k > 0 ? leftPos - leftPos*k : 0;
                    } else if(leftPos<(-1)*stopPos){
                        newPos = leftPos + (leftPos + stopPos)*(-k) < stopPos*(-1) ? leftPos + (leftPos + stopPos)*(-k) : stopPos*(-1);
                    }

                    slider.style.left = newPos + 'px';

                    if(k<1){
                        requestAnimationFrame(animate);
                    } else {

                    }


                })();
            }
        }

        function putImageSrc(dataItem, direction){

            for(var i=dataItem;
                direction == 'left' ? i < dataItem+3 && i < arrSize : i > dataItem-3;
                direction == 'left' ? i++ : i--)
            {

                if(i<0){
                    var image       = itemsArr[arrSize + i].querySelector('.item-image');
                    var imageFront  = itemsArr[arrSize + i].querySelector('.item-image-front');
                } else {

                    var image       = itemsArr[i].querySelector('.item-image');
                    var imageFront  = itemsArr[i].querySelector('.item-image-front');
                }

                if(imageFront.getAttribute('src')==''){
                    imageFront.setAttribute('src', image.getAttribute('data-src'));
                    if(isMobile && image.getAttribute('data-srcset')){
                        imageFront.setAttribute('srcset', image.getAttribute('data-srcset'));
                    }
                }
            }
        }

        function putCaption(dataItem){

            var image   = itemsArr[dataItem].querySelector('.item-image');
            var caption = image.getAttribute('data-caption');
            var author  = image.getAttribute('data-author');
            var text    = '';
            if(caption){
                text += '<p>'+caption+'</p>';
            }
            if(author) {
                text += '<i>'+author+'</i>'
            }

            if(signPlace !== null ){
                signPlace.innerHTML = text;
            }

            getImageSize(image);
        }

        if(arrSize>1){
            putCaption(dataItem);
        }

        function photoNumSettings(photoNum) {

            if(!limit && !noHistoryUrlReplace){
                    
                var currentUrl = location.origin + location.pathname;

                if(photoNum != 1){
                    
                    if(location.search != '') {

                        if(location.search.match(/photo_num/)) {
                            currentUrl =  currentUrl + location.search.replace(/photo_num=\d+/, 'photo_num=' + photoNum);
                        } else {
                            currentUrl =  currentUrl + location.search + '&photo_num=' + photoNum;
                        }

                    } else {
                        currentUrl = currentUrl + '?p=main&photo_num=' + photoNum;
                    }    

                }   

                history.replaceState(null, '', currentUrl);
                g_gazeta_counters_reload();
                
            }

        }

        // if adv inside
        var advInside       = props.advInside || false;
        var advShowFlag     = false;
        var curAdvBlock     = null;

        function moveBannerPlace(el, direction, showHide){

            var startTime = null;
            var animationDuration = 400;
            var position;
            var addClassBeforeAnimation;
            var addClassAfterAnimation;
            var k;

            if(showHide=='hide'){
                addClassAfterAnimation = direction == 'left' ? 'b_advitem left' : 'b_advitem right';
                
                position = direction == 'left' ? -100 : 100;

            } else {
                addClassBeforeAnimation = direction == 'left' ? 'b_advitem right' : 'b_advitem left';
                addClassAfterAnimation = 'b_advitem show';
                
                position = direction == 'left' ? 100 : -100;
                
            }

            (function animate(){
                if(!startTime){
                    animationFlag = true;
                    startTime = performance.now();
                }

                k = (performance.now()-startTime)/animationDuration;

                if(showHide == 'hide'){
                    var left = Math.abs(position*k) < Math.abs(position) ? Math.floor(position*k) : position;
                } else {
                    var left = Math.abs(position)*(1-k) > 0 ? position*(1-k) : 0;
                }

                el.style.left = left + '%';
                

                if(k<1){
                    requestAnimationFrame(animate)
                } else {
                    el.setAttribute('class', addClassAfterAnimation);
                    el.removeAttribute('style');
                    animationFlag = false;
                }
            })();

        }

        function changeItems(newItem, dontShowBanner){

            if(!animationFlag && arrSize>1) {

                var direction = newItem > dataItem ? 'left' : 'right';

                if (advInside) {
                    if (!dontShowBanner) {
                        var checking = false;
                        var advnum;
                        if (newItem > dataItem) {
                            checking = !advShowFlag && advInside && newItem > 0 && newItem % 5 == 0;
                            advnum = newItem;
                        } else {
                            checking = !advShowFlag && advInside && newItem > 0 && (newItem + 1) % 5 == 0;
                            advnum = newItem + 1;
                        }

                        if (checking) {

                            curAdvBlock = gallery.querySelector('.b_advitem[data-advnum="' + advnum + '"]');

                            moveBannerPlace(curAdvBlock, direction, 'show');

                            advShowFlag = true;

                            infoblock.classList.add('hide');
                            zoombtn.classList.add('hide');

                            return;
                        }

                    }
                    if (advShowFlag) {

                        moveBannerPlace(curAdvBlock, direction, 'hide');

                        infoblock.classList.remove('hide');
                        zoombtn.classList.remove('hide');

                        advShowFlag = false;

                    }
                }

                image.removeEventListener('dblclick', cleanTranslate);

                animationFlag = true;
                scaleValue = 1;

                if(infinite){
                    if (newItem<0){
                        newItem = arrSize + newItem;
                    } else if (newItem>=arrSize){
                        newItem = 0;
                    }
                } else {

                    // if(newItem == 0){
                    //     leftBtn.classList.add('disable');
                    // } else if(newItem == arrSize-1){
                    //     if(limit == null){
                    //         rightBtn.classList.add('disable');
                    //     } else {
                    //         rightBtn.classList.add('s_show_digest');
                    //     }
                    // } else {
                    //     leftBtn.classList.remove('disable');
                    //     rightBtn.classList.remove('disable', 's_show_digest');
                    // }

                    switch(newItem){
                        case 0:
                            leftBtn.classList.add('disable');
                            break;
                        case arrSize-1:
                            if(digest){
                                rightBtn.classList.add('s_show_digest');
                            } else {
                                rightBtn.classList.add('disable');
                            }
                            leftBtn.classList.remove('disable');
                            break;
                        default:
                            leftBtn.classList.remove('disable');
                            rightBtn.classList.remove('disable', 's_show_digest');
                            break;
                    }

                }

                if(previewControl && previewItemsArr.length>0) {

                    previewItemsArr[dataItem].classList.remove('active');
                    previewItemsArr[newItem].classList.add('active');


                    var activeItem          = previewItemsArr[newItem],
                        leftCorn            = activeItem.offsetLeft,
                        rightCorn           = activeItem.offsetLeft + activeItem.clientWidth,
                        activeItemCenter    = activeItem.offsetLeft + activeItem.clientWidth/2;

                    var stopPos = slider.scrollWidth - slider.offsetWidth;
                    var leftPos = +slider.style.left.replace(/px/, '');

                    var startTime   = null,
                        now         = null,
                        k,
                        duration    = 240;

                    var newPos;

                    if(slider.offsetWidth-leftPos<rightCorn || leftPos<(-1)*leftCorn){

                        (function animate(){
                            if(startTime===null){
                                startTime = performance.now();
                            }
                            now = performance.now();

                            k = (now-startTime)/duration;

                            newPos = slider.offsetWidth/2 - activeItemCenter;

                            if(leftPos<(-1)*leftCorn) {

                                newPos = leftPos + (Math.abs(leftPos - newPos))*k;

                                if(newPos>0){
                                    newPos = 0;
                                } else if(newPos>slider.offsetWidth/2 - activeItemCenter) {
                                    newPos = slider.offsetWidth/2 - activeItemCenter;
                                }

                            } else {

                                newPos = leftPos + (Math.abs(leftPos) - Math.abs(newPos))*k;

                                if (newPos<stopPos*(-1)){
                                    newPos = stopPos*(-1);
                                } else if(newPos<slider.offsetWidth/2 - activeItemCenter) {
                                    newPos = slider.offsetWidth/2 - activeItemCenter;
                                }

                            }

                            slider.style.left = newPos + 'px';

                            if(k<1){
                                requestAnimationFrame(animate);
                            } else {

                                activeItem          = null;
                                leftCorn            = 0;
                                rightCorn           = 0;
                                activeItemCenter    = 0;
                                startTime           = null;
                                now                 = null;
                                k                   = null;
                            }

                        })();

                    }

                }

                //if(infinite){

                    // options:

                    var options = {
                            startTime           :  null,
                            dataItemLeftPos     :  direction == 'left' ? -100 : 100, // percent
                            dataItemNeedClass   :  direction == 'left' ? 'item left' : 'item right',
                            newItemLeftPos      :  direction == 'left' ? 100 : -100,
                            animationDuration   :  400,

                        };



                    (function animate(){

                        if(options.startTime === null){
                            options.startTime = performance.now();
                        }

                        var now         = performance.now(),
                            // put timing function here

                            // t: current time, b: begInnIng value, c: change In value, d: duration
                            // easeOutQuart: function (x, t, b, c, d) {
                            //     return -c * ((t=t/d-1)*t*t*t - 1) + b;
                            // },

                            k           = (now - options.startTime)/options.animationDuration, // animation step coefficient

                            dataItemPos = options.dataItemLeftPos*k > options.dataItemLeftPos ? Math.floor(options.dataItemLeftPos*k) : options.dataItemLeftPos*k,
                            newItemPos  = Math.abs(options.newItemLeftPos)*(1-k) < 0 ? 0 : options.newItemLeftPos*(1-k);

                            itemsArr[dataItem].style.left   = dataItemPos + '%';
                            itemsArr[newItem].style.left    = newItemPos + '%';

                            if(k<1){
                                requestAnimationFrame(animate);
                            } else {

                                image.removeAttribute('style');

                                itemsArr[dataItem].setAttribute('class', options.dataItemNeedClass);
                                itemsArr[dataItem].removeAttribute('style');
                                itemsArr[newItem].setAttribute('class', 'item active');
                                itemsArr[newItem].removeAttribute('style');

                                animationFlag   = false;
                                dataItem        = newItem;
                                image           = itemsArr[dataItem].querySelector('.item-image');

                                if( document.fullscreenElement!=null ||
                                    document.webkitFullscreenElement!=null ||
                                    document.mozFullScreenElement!=null ||
                                    document.msFullscreenElement!=null){
                                    translateImage();
                                    image.addEventListener('dblclick', cleanTranslate);
                                }
                            }

                    })();

                putImageSrc(newItem, direction);

                putCaption(newItem);

                quantityNum.innerHTML = newItem + 1;

                var photoNum = newItem+1;
                photoNumSettings(photoNum);

            } else {
                return false;
            }

        }

        function getImageSize(image){
            var imageSize   = {
                    realW:      image.naturalWidth,
                    realH:      image.naturalHeight,
                    clientW:    image.clientWidth,
                    clientH:    image.clientHeight,
                    percent:    Math.round(image.clientWidth*100/image.naturalWidth)
                };
            return imageSize;
        }

        function putImagePercentage(value){

            if(scalePlace && isFinite(value)){
                scalePlace.innerHTML = value + '%';
            }

        }

        // keydown holder
        function keyDownHolder(e){
            if(e.keyCode == 37){

                if(rightBtn.classList.contains('s_show_digest') && rightBtn.classList.contains('disable')){
                    gallery.classList.remove('m_digestshow');
                    digest.classList.remove('active');
                    if(infoblock !== null){
                        infoblock.classList.remove('hide');
                    }
                    // scalePlace.classList.remove('hide');
                    rightBtn.classList.remove('disable');
                    zoombtn.classList.remove('hide');

                } else {
                    rightBtn.classList.remove('disable', 's_show_digest');

                    if(!infinite && dataItem==0){

                        return false;

                    } else {
                        changeItems(dataItem-1);
                    }
                }


            } else if(e.keyCode==39) {

                if(rightBtn.classList.contains('s_show_digest')){

                    digest.classList.add('active');
                    gallery.classList.add('m_digestshow');
                    if(infoblock !== null){
                        infoblock.classList.add('hide');
                    }
                    // scalePlace.classList.add('hide');
                    rightBtn.classList.add('disable');
                    zoombtn.classList.add('hide');

                }

                if(!infinite && dataItem==arrSize-1){
                    return false;
                } else {
                    changeItems(dataItem+1);
                }

            }
        }


        // *** fullscreen manipulate


                var scaleValue = 1;
                var translateX, translateY;

                function scaleImage(e){

                    var safeTransform   = '';
                    var imageSize       = getImageSize(image);

                    if(image.style.transform.match(/translate\(.*?\)/)) {

                        safeTransform =  image.style.transform.replace(/.*(translate\(.*?\)).*/, '$1 ');

                    }

                    // lower stop point 1/2 imageSize.percent
                    // top stop point 300 %

                    // scaleValue => 100 => imageSize.percent

                    var normallyDeltaY;

                    if(isMobile && e.type=='touchmove'){

                        var dist    = Math.hypot(
                            e.touches[0].pageX - e.touches[1].pageX,
                            e.touches[0].pageY - e.touches[1].pageY);

                        if(pinchDist == 0){
                            pinchDist = dist;
                        }

                        scaleValue = scaleValue + (dist-pinchDist)/100;

                        pinchDist = dist;

                    } else {

                        if(Math.abs(e.deltaY) > 20) {
                            normallyDeltaY = e.deltaY > 0 ? 20 : e.deltaY < 0 ? -20 : 0;
                        } else {
                            normallyDeltaY = +e.deltaY;
                        }

                        normallyDeltaY = normallyDeltaY*(-1);

                        scaleValue += +normallyDeltaY/100;
                    }

                    if(scaleValue<=1){ //lower point
                        scaleValue = 1;

                    } else if(300/imageSize.percent<=scaleValue){ //highest point
                        scaleValue = 300/imageSize.percent;
                    }

                    var percentage = Math.round((scaleValue)*imageSize.percent);

                    putImagePercentage(percentage);

                    image.style.transform = safeTransform + 'scale('+scaleValue+')';

                    if(!isMobile){
                        translateControl();
                    }

                    safeTransform = '';

                }

                function safeSign(number){
                    if(number > 0){
                        return 1;
                    } else if(number < 0){
                        return -1;
                    }
                }

                function addTranslateParam(e){

                    e.preventDefault();

                    if(isMobile && e.touches.length==2){
                        scaleImage(e);
                        return;
                    } else if(isMobile && e.touches.length>2){
                        return;
                    }

                    var safeTransform = '';

                    var x = +image.style.transform.replace(/.*translate\(([-]?\d*[.]?\d*).*/, "$1") || 0;
                    var y = +image.style.transform.replace(/.*translate\(.*?,\s*([-]?\d*[.]?\d*).*/, "$1") || 0;

                    if(isMobile){
                        var imageSize = getImageSize(image);

                        if(arrSize==1){
                            if(imageSize.clientW*scaleValue>window.outerWidth){

                                translateX = x + (startPointX-e.touches[0].clientX)*(-1);

                                if(Math.abs(translateX)>(imageSize.clientW*scaleValue-window.outerWidth)/2){
                                    translateX = safeSign(translateX)*(imageSize.clientW*scaleValue-window.outerWidth)/2;
                                }
                            }
                        } else {
                            var translateX = x + (startPointX-e.touches[0].clientX)*(-1);
                        }

                        //var translateY = y + (startPointY-e.touches[0].clientY)*(-1);
                        var translateY = 0;

                        if(imageSize.clientH*scaleValue>window.outerHeight){

                            translateY = y + (startPointY-e.touches[0].clientY)*(-1);

                            if(Math.abs(translateY)>(imageSize.clientH*scaleValue-window.outerHeight)/2){
                                translateY = safeSign(translateY)*(imageSize.clientH*scaleValue-window.outerHeight)/2;
                            }
                        }


                        startPointX = e.touches[0].clientX;
                        startPointY = e.touches[0].clientY;

                    } else {
                        var translateX =  x + e.movementX || e.movementX;
                        var translateY =  y + e.movementY || e.movementY;
                    }

                    if(image.style.transform != '') {

                        //clean translate params and safe othe transform params
                        safeTransform = image.style.transform.replace(/translate\([^)]*\)/, '');

                    }

                    image.style.transform = 'translate('+translateX+'px, '+translateY+'px)' + safeTransform;

                }

                function translateControl(){

                    if(isMobile){
                        startPointX = 0;
                        startPointY = 0;
                        pinchDist = 0;
                        distanceX = 0;
                        distanceY = 0;
                    }



                    var iW      = image.clientWidth,
                        iH      = image.clientHeight;

                    var translateX = +image.style.transform.replace(/.*translate\(([-]?\d*[.]?\d*).*/, "$1") || 0,
                        translateY = +image.style.transform.replace(/.*translate\(.*?,\s*([-]?\d*[.]?\d*).*/, "$1") || 0;

                    var xShifting = iW/3,
                        yShifting = iH/3;

                    var safeTransform = '';



                    if(isMobile && arrSize>1){
                        if((scaleValue <= 1.3 && Math.abs(translateX)>40*scaleValue) || Math.abs(translateX)>xShifting*scaleValue ){
                            if(translateX>0){
                                changeItems(dataItem-1);
                                return;
                            } else {
                                changeItems(dataItem+1);
                                return;
                            }
                        }
                    }

                    if(image.style.transform!='' && (Math.abs(translateX)>xShifting*scaleValue || Math.abs(translateY)>yShifting*scaleValue))  {

                        var startTime   = null,
                            duration    = 100,
                            now         = null,
                            k, distanceX, distanceY, newTranslateX, newTranslateY;

                            safeTransform = image.style.transform.replace(/translate\([^)]*\)/, '');

                        (function returnTranslate(){
                            if(startTime===null){
                                startTime = performance.now();
                            }
                            now = performance.now();
                            k = (now-startTime)/duration;

                            distanceX = Math.abs(translateX)-((xShifting)*scaleValue);
                            distanceX = translateX>0 ? distanceX*(-1) : distanceX;


                            distanceY = Math.abs(translateY)-((yShifting)*scaleValue);
                            distanceY = translateY>0 ? distanceY*(-1) : distanceY;

                            if(Math.abs(translateX)>(xShifting)*scaleValue) {

                                newTranslateX = (translateX + distanceX*k);

                                if(newTranslateX<0 && Math.abs(newTranslateX)<(xShifting)*scaleValue){

                                    newTranslateX = (xShifting)*scaleValue * (-1);

                                } else if (newTranslateX>0 && Math.abs(newTranslateX)<(xShifting)*scaleValue){

                                    newTranslateX = (xShifting)*scaleValue

                                }
                            } else {
                                newTranslateX = translateX;
                            }

                            if(Math.abs(translateY)>(yShifting)*scaleValue) {

                                newTranslateY = (translateY + distanceY*k);
                                if(newTranslateY<0 && Math.abs(newTranslateY)<(yShifting)*scaleValue){

                                    newTranslateY = (yShifting)*scaleValue * (-1);

                                } else if (newTranslateY>0 && Math.abs(newTranslateY)<(xShifting)*scaleValue){

                                    newTranslateY = (yShifting)*scaleValue

                                }
                            } else {
                                newTranslateY = translateY;
                            }



                            image.style.transform = 'translate('+newTranslateX+'px, '+newTranslateY+'px)' + safeTransform;

                            if(k<1){
                                requestAnimationFrame(returnTranslate);
                            } else {

                                translateX = 0; //newTranslateX;
                                translateY = 0; //newTranslateY;

                                safeTransform = '';

                                return safeTransform;
                            }
                        })();

                    }
                    document.removeEventListener(listener.mousemove, addTranslateParam);

                }

                var startPointX = null;
                var startPointY = null;
                var pinchDist   = null;
                var distanceX   = null;
                var distanceY   = null;
                var threshold   = 75;
                var pinchFlag   = false;

                function iosGesturestartRemover(e){
                    e.preventDefault();
                    //scaleValue = 1;
                    // var imageSize = getImageSize(image);
                    // putImagePercentage(imageSize.percent);
                    translateImage();
                }

                function swipeGallery(){

                    gallery.addEventListener('touchstart', function(e){

                        pinchFlag = false;

                        startPointX = e.touches[0].clientX;
                        startPointY = e.touches[0].clientY;
                        distanceX = 0;
                        distanceY = 0;

                    }, {passive: false})

                    gallery.addEventListener('touchmove', function(e){

                        //e.preventDefault();

                        if(e.touches.length==1){

                            distanceX = startPointX - e.touches[0].clientX;
                            distanceY = startPointY - e.touches[0].clientY;

                        } else if(e.touches.length>1){

                            pinchFlag   = true;

                            distanceX = null;
                            distanceY = null;
                        }



                    }, {passive: false})

                    gallery.addEventListener('touchend', function(e){

                        if(!pinchFlag && Math.abs(distanceX)>Math.abs(distanceY)){
                            if(distanceX>0 && Math.abs(distanceX)>threshold){
                                changeItems(dataItem+1);
                            } else if(distanceX<0 && Math.abs(distanceX)>threshold){
                                changeItems(dataItem-1);
                            }
                        }

                        if(distanceX!==null && distanceX==0 && distanceY==0) {

                            if(isIos && !g_GazetaWebView){
                                gallery.classList.add('m_fullscreen');
                                gallery.classList.add('m_fixed');
                                document.addEventListener('gesturestart', iosGesturestartRemover);
                            } else {
                                requestFullScreenGallery();
                            }
                        }

                    }, {passive: false})
                }

                if(isMobile) {
                    swipeGallery();
                }

                function translateImage(){

                    if((
                        document.fullscreenElement!=null        ||
                        document.webkitFullscreenElement!=null  ||
                        document.mozFullScreenElement!=null     ||
                        document.msFullscreenElement!=null      ||
                        (isIos && gallery.classList.contains('m_fixed'))
                        )
                        && !image.getAttribute('translate-control') && !noManipulate){

                        image.setAttribute('translate-control', true);

                        image.addEventListener(listener.mousedown, function(e){

                            e.preventDefault();

                            if(isMobile){
                                startPointX = e.touches[0].clientX;
                                startPointY = e.touches[0].clientY;
                            }

                            document.addEventListener(listener.mousemove, addTranslateParam, {passive: false});
                        }, {passive: false});

                        document.addEventListener(listener.mouseup, translateControl);
                    }

                }

                function cleanTranslate(e){
                    e.preventDefault();

                    // back to normally

                    if(image.style.transform!='')
                        var startTime   = null,
                            duration    = 300,
                            now         = null,
                            k,

                            translateX  = +image.style.transform.replace(/.*translate\(([-]?\d*[.]?\d*).*/, "$1") || 0,
                            translateY  = +image.style.transform.replace(/.*translate\(.*?,\s*([-]?\d*[.]?\d*).*/, "$1") || 0,

                            newTranslateX   = 0,
                            newTranslateY   = 0,
                            scale           = 1;



                            (function backToNormally(){
                                if(startTime === null){
                                    startTime = performance.now();
                                }
                                now = performance.now();

                                k = (now-startTime)/duration;

                                if(scaleValue>1){
                                    scale = (scaleValue - scaleValue*k) > 1 ? (scaleValue - scaleValue*k) : 1;
                                } else if(scaleValue<1){
                                    scale = (scaleValue + scaleValue*k) < 1 ? (scaleValue + scaleValue*k) : 1;
                                }

                                if(translateX>0){
                                    newTranslateX = (translateX - translateX*k) > 0 ? (translateX - translateX*k) : 0;
                                } else if(translateX<0){
                                    newTranslateX = (translateX - (translateX*k)) < 0 ? (translateX - translateX*k) : 0;
                                }

                                if(translateY>0){
                                    newTranslateY = (translateY - translateY*k) > 0 ? (translateY - translateY*k) : 0;
                                } else if(translateY<0){

                                    newTranslateY = (translateY - translateY*k) < 0 ? (translateY - translateY*k) : 0;

                                }

                                image.style.transform = 'translate('+newTranslateX+'px, '+newTranslateY+'px) scale('+scale+')';

                                if(k<1){
                                    requestAnimationFrame(backToNormally);
                                } else {

                                    translateX = newTranslateX;
                                    translateY = newTranslateY;
                                    scaleValue = 1;

                                    getImageSize(image);


                                }
                            })();

                }


        function closeFullScreen(){

            if( !isIos && (
                document.fullscreenEnabled ||
                document.webkitFullscreenEnabled ||
                document.mozFullScreenEnabled ||
                document.msFullscreenEnabled
                )){

                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.mozCancelFullScreen) {  /* Firefox */
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) {     /* IE/Edge */
                    document.msExitFullscreen();
                }

            } else if(isIos){
                gallery.classList.remove('m_fullscreen');
                gallery.classList.remove('m_fixed');
                image.removeAttribute('style');
                document.removeEventListener('gesturestart', iosGesturestartRemover);
            }
        }

        function fullScreenChangeAction(){

            if(document.fullscreenElement===null || document.webkitFullscreenElement===null || document.mozFullScreenElement===null || document.msFullscreenElement===null){

                gallery.classList.remove('m_fullscreen');
                gallery.removeEventListener('wheel', scaleImage);
                image.removeAttribute('style');

                if(limit){
                    document.removeEventListener('keydown', keyDownHolder);
                }

            } else {

                if(!noManipulate){
                    scaleValue = 1;
                    gallery.addEventListener('wheel', scaleImage);
                    var imageSize = getImageSize(image);
                    putImagePercentage(imageSize.percent);
                    translateImage();
                    image.addEventListener('dblclick', cleanTranslate);
                }

                if(limit){
                    document.addEventListener('keydown', keyDownHolder);
                }

            }
        }

        function requestFullScreenGallery(){

            if(window.g_GazetaWebView && !noManipulate) {

                if(arrSize>1){

                    collectImages.initialIndex = dataItem;
                    g_GazetaWebView.openGallery(collectImages);
                    return;

                } else if(arrSize==1) {

                    g_GazetaWebView.openPicture({
                        url:        image.dataset.hq,
                        caption:    image.dataset.caption || void 0,
                        src:        image.dataset.author || void 0
                    });

                    return;
                }
            }

            if( document.fullscreenEnabled ||
                document.webkitFullscreenEnabled ||
                document.mozFullScreenEnabled ||
                document.msFullscreenEnabled
                ){

                if (gallery.requestFullscreen) {
                    gallery.requestFullscreen();
                } else if (gallery.mozRequestFullScreen) { /* Firefox */
                    gallery.mozRequestFullScreen();
                } else if (gallery.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
                    gallery.webkitRequestFullscreen();
                } else if (gallery.msRequestFullscreen) { /* IE/Edge */
                    gallery.msRequestFullscreen();
                }

            }

            gallery.classList.add('m_fullscreen');
        }

        function loadHqPhoto(figureBlock){
            try {
                var item  = figureBlock;
                var image = figureBlock.querySelector('.item-image');
                if(image.dataset.container){
                    return;
                }
                var tempImg = new Image();
                tempImg.src = image.getAttribute('data-hq');
                //tempImg.className = 'item-image-hq';

                tempImg.onload = function(){

                    image.setAttribute('src', tempImg.src);
                    item.setAttribute('loaded', 'true');

                };

            } catch(e) {
                console.log('error ' + e.message);
            }
        }

        function initiateHqPhoto(){
            for(var i=0; i<arrSize; i++) {
                var figureBlock = itemsArr[i];
                loadHqPhoto(figureBlock);
            }
        }

        // fullscreenChanges
            document.addEventListener('fullscreenchange', fullScreenChangeAction);
            document.addEventListener('mozfullscreenchange', fullScreenChangeAction); // does not work on linux mozilla
            document.addEventListener('webkitfullscreenchange', fullScreenChangeAction);

            // linux mozilla listener needs function, not just handler
            document.addEventListener("mozfullscreenchange", function(){
                fullScreenChangeAction();
            });
            document.addEventListener('MSFullscreenChange', function(){
                fullScreenChangeAction();
            });

        if(dataItem==0 && !infinite && leftBtn != null){
            leftBtn.classList.add('disable');
        }


        


        if(previewControl){
            var preview     = gallery.querySelector('.preview') || null;
            var slider      = gallery.querySelector('.preview-wrapper') || null;

            var previewItemsArr    = preview.getElementsByClassName('item') || null;

            var previewMovingFlag = false;

            // slider.addEventListener('mousedown', function(e){

            //     e.preventDefault();

            //     document.addEventListener('mousemove', translateSlider);
            // })

            // preview.addEventListener('wheel', function(e){

            //     e.preventDefault();

            //     var stopPos = slider.scrollWidth - slider.offsetWidth;
            //     var leftPos = +slider.style.left.replace(/px/, '');

            //     var normallyDeltaY = e.deltaMode == 0 ? e.deltaY : e.deltaY*14;

            //     leftPos = leftPos - normallyDeltaY;

            //     //leftPos = leftPos - e.deltaX;

            //     slider.style.left = leftPos + 'px';
            //     controlSliderPosition();
            // })

            // document.addEventListener('mouseup', function(){

            //     controlSliderPosition();
            //     document.removeEventListener('mousemove', translateSlider);

            // })

            preview.addEventListener('click', function(e){

                if(e.target.classList.contains('active') || e.target.offsetParent.classList.contains('active')) return;
                if(e.target.classList.contains('disabled') || e.target.offsetParent.classList.contains('disabled')) return;

                if(previewMovingFlag){
                    previewMovingFlag = false;
                } else {
                    if(e.target.getAttribute('data-item')!=null){
                        var newItem = +e.target.getAttribute('data-item');
                        changeItems(newItem, 'dontShowBanner');
                    }
                }

                if(newItem<arrSize-1) {
                    rightBtn.classList.remove('disable','s_show_digest');

                } else if(newItem == arrSize-1){
                    if(limit==null){
                        rightBtn.classList.add('disable');
                    } else {
                        if(digest){
                            rightBtn.classList.add('s_show_digest');
                        } else {
                            rightBtn.classList.add('disable');
                        }                        
                    }
                }

                if(newItem > 0){
                    leftBtn.classList.remove('disable');
                }

                    if(digest){
                        digest.classList.remove('active');    
                    }
                    
                    
                    if(infoblock !== null){
                        infoblock.classList.remove('hide');
                    }
                    
                    rightBtn.classList.remove('disable');
                    zoombtn.classList.remove('hide');

            })

        }

        if(zoombtn){
            zoombtn.addEventListener('click', function(){

                if(hqPhotoLoadFlag){
                    hqPhotoLoadFlag = false;
                    initiateHqPhoto();
                }

                if(zoombtn.dataset.location){
                    window.location = zoombtn.dataset.location;
                } else {
                    requestFullScreenGallery();
                }

            })
        }

        if(closeBtn){
            closeBtn.addEventListener('click', closeFullScreen);
        }

        if(textToggleBtn){

            textToggleBtn.addEventListener('click', function(){
                if (textToggleBtn.classList.contains('text_hid')){
                    textToggleBtn.classList.remove('text_hid');
                    if(signPlace !== null){
                        signPlace.classList.remove('hide');
                    }
                } else {
                    textToggleBtn.classList.add('text_hid');
                    if(signPlace !== null){
                        signPlace.classList.add('hide');
                    }
                }

            })

        }

        if(leftBtn && rightBtn){
            leftBtn.addEventListener('click', function(){

                if(rightBtn.classList.contains('s_show_digest') && rightBtn.classList.contains('disable')){

                    digest.classList.remove('active');
                    gallery.classList.remove('m_digestshow');
                    if(infoblock !== null){
                        infoblock.classList.remove('hide');
                    }
                    // scalePlace.classList.remove('hide');
                    rightBtn.classList.remove('disable');
                    zoombtn.classList.remove('hide');

                } else {

                    rightBtn.classList.remove('disable', 's_show_digest');

                    if(!infinite && dataItem==0){
                        return false;
                    } else {
                        changeItems(dataItem-1);
                    }

                }
            })

            rightBtn.addEventListener('click', function(){

                if(hqPhotoLoadFlag){
                    hqPhotoLoadFlag = false;
                    initiateHqPhoto();
                }

                if(rightBtn.classList.contains('s_show_digest')){

                    digest.classList.add('active');
                    gallery.classList.add('m_digestshow');
                    if(infoblock !== null){
                        infoblock.classList.add('hide');
                    }
                    // scalePlace.classList.add('hide');
                    rightBtn.classList.add('disable');
                    zoombtn.classList.add('hide');

                } else {
                    if(!infinite && dataItem==arrSize-1){
                        return false;
                    } else {
                        changeItems(dataItem+1);
                    }
                }

            })

            if(!limit ){
                document.addEventListener('keydown', keyDownHolder);
            }
        }

        // checking the required photo
        var requiredPhoto = 0;
        if(!limit && location.search.match(/photo_num/)){
            requiredPhoto = +location.search.match(/photo_num=(\d+)/)[1] - 1;

            if(requiredPhoto>=0 && requiredPhoto<arrSize){
                changeItems(requiredPhoto, 'dontShowBanner');    
            }
            
        }

    }
        