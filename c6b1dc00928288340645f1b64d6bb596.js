(function ($) {
    var cancelTime = 60 * 1000, callbackId = 0, loadedScripts = {}, i, l;
    var adBlockRadar = window.adBlockRadar;
    var PAGE_ID = 239250;
    var CID = 513655;
    var TGB_SLOT = 4847;
    var RECTANGLE_SLOT = 4499;
    var MIMIC = {
        '4499': {
            slot: 101668,
            statId: 449901
        },
        '4847': {
            slot: 101670,
            statId: 484701
        }
    };
    var MIMIC_URL = "/api-proxy/rb-mimic/v1/page?page_id=" + PAGE_ID + "&cid=" + CID + "&location=" + encodeURIComponent('https://mail.ru');
    var __transform = $.locator.transform;
    /**
     * Возвращает свойство obj.a.b по ключу 'a.b' или 'a[0].c', но не 'a[varik].c'
     * @param {object} obj
     * @param {string} key
     */
    var __getPropByFlatKey = function (obj, key) {
        // Сразу проверим на 'a[varik].c'
        if (/\[\s*[a-zA-Z]\s*\]/.test(key)) {
            return false;
        }
        try {
            var query = key.replace(/[\s'"]/g, '').split(/[\.\[\]]/).filter(function (prop) { return prop; });
            var result_1 = obj;
            query.forEach(function (prop) {
                result_1 = result_1[prop];
            });
            return result_1;
        }
        catch (e) {
            return;
        }
    };
    function fastRadar(time, place, prefix) {
        new Image().src = '//stat.radar.imgsmail.ru/update?p=splash&t=' + (prefix || 'tgb') + '_' + place + '&v=' + time + '&rnd=' + Math.random() + (document.referrer ? '&r=' + escape(document.referrer) : '');
    }
    function execInnerScripts(elem) {
        try {
            var childScripts = elem.getElementsByTagName('script');
            function evalScript(i) {
                var elem = childScripts[i], data = (elem.text || elem.textContent || elem.innerHTML || ''), head = document.getElementsByTagName('head')[0] || document.documentElement, script = document.createElement('script');
                script.type = 'text/javascript';
                if (elem.src) {
                    if (!loadedScripts[elem.src]) {
                        script.setAttribute('src', elem.src + '?rnd=' + Math.random());
                        script.onload = function () {
                            head.removeChild(script);
                            loadedScripts[elem.src] = 1;
                            next();
                        };
                        head.insertBefore(script, head.firstChild);
                    }
                    else {
                        next();
                    }
                }
                else {
                    try {
                        // doesn't work on ie...
                        script.appendChild(document.createTextNode(data));
                    }
                    catch (e) {
                        // IE has funky script nodes
                        script.text = data;
                    }
                    head.insertBefore(script, head.firstChild);
                    head.removeChild(script);
                    next();
                }
                function next() {
                    childScripts[i + 1] && evalScript(i + 1);
                }
            }
            childScripts.length && evalScript(0);
        }
        catch (e) {
            window.logError && logError(e, 'execInnerScripts');
        }
    }
    function parseWrite(html, prefix) {
        var id = '_slot_' + (prefix || '') + '_' + (new Date().getTime() * parseInt(Math.random() * 100000));
        var nonce = "e8f629a3bc9ad7d33f2a1fddb1b4c943";
        html = html.replace(/(<script[^>]*>)\s*(<!--|\/\/\s*<!\[CDATA\[)/gi, '$1;')
            .replace(/\/\/\s*(-->|\]\]>)\s*(<\/script>)/gi, ';$2')
            .replace(/\w+\.write(ln)?\(/ig, '_' + id + '+=(')
            .replace(/<script/g, '<script nonce="' + nonce + '"');
        return '<script nonce="' + nonce + '">window._' + id + '="";<\/script>' + html + '<span id="' + id + '"></span><script nonce="' + nonce + '">mr.id("' + id + '").innerHTML = _' + id + '<\/script>';
    }
    var __getRandomInt = function (min, max) { return (Math.floor(Math.random() * (max - min + 1)) + min); };
    // Описываем куда и как вставлять рекламные банеры
    var __getPlaceholderData = function (_slot, _isMimic) { return ({
        '4499': {
            tpl: _isMimic ? 'rectangle' : 'right',
            // куда вставлять
            target: _isMimic ? 'layout' : 'placeholder-4499',
            // как вставлять
            where: _isMimic ? 'inside' : 'before',
            size: 300
        },
        '4847': {
            tpl: 'tgb',
            where: 'after',
            target: $.locator.lookup('news'),
            size: 60
        }
    }[_slot]); };
    /**
     * Создаём обёртку для баннера
     * @param {*} id  номер слота
     * @param {*} target элемент который мы зеркалируем абсолютом
     */
    var __createPlaceholder = function (_a) {
        var slot = _a.slot, target = _a.target, where = _a.where, tpl = _a.tpl;
        var container = $.id(target);
        var placeholder = document.createElement('div');
        var slotId = "slot_" + slot;
        placeholder.id = __transform(slotId);
        placeholder.className = __transform(tpl + "-banner" + (mr._.EXPANDABLE_BANNER ? ' is-expandable' : ''));
        // После какого элемента вставляем
        var ref;
        // После случайного элемента внутри контейнера
        if (where === 'inside') {
            // Вставим перед случайным элементом внутри 'layout'
            // или после последнего
            var childs = [];
            var l_1 = container.children.length;
            while (l_1--) {
                var child = container.children[l_1];
                if (child.tagName.toLowerCase() === 'div') {
                    childs.push(child);
                }
            }
            // Берём случайный элемент...
            var index = __getRandomInt(0, childs.length - 1);
            ref = childs[index];
        }
        else if (where === 'after' || where === 'before') {
            ref = container;
        }
        else {
            return false;
        }
        if (ref) {
            ref.insertAdjacentElement(where === 'after' ? 'afterend' : 'beforebegin', placeholder);
        }
        // Возвращаем див для вставки баннера
        return placeholder;
    };
    __placeholders = {};
    // Получаем или создаём площадку под баннер
    var __getPlaceholder = function (banner) {
        var placeholder = __placeholders[banner.slot];
        if (!placeholder) {
            placeholder = __placeholders[banner.slot] = __createPlaceholder(banner);
        }
        return placeholder;
    };
    /**
     * @param  {array} slots
     * @param  {object} params
     * @param  {function} callbackFn
     */
    function reloadSlots(slots, params, callbackFn) {
        return function () {
            var reloadSlotsInner = function (_c, _slots) {
                try {
                    var isMimicResponse_1 = _c.result;
                    // Собираем данные для мимика
                    if (isMimicResponse_1) {
                        // Для мимика слот всегда один
                        var slot = _slots[0];
                        adBlockRadar.one({
                            name: "adblock_response_from-" + slot,
                            time: 1
                        });
                        // Забираем баннер
                        var json = _c.result.body.direct;
                        var placeholderData = __getPlaceholderData(slot, isMimicResponse_1);
                        var placeholder = __getPlaceholder($.extend(
                        // куда и как вставлять
                        placeholderData, {
                            slot: slot
                        }));
                        if (json.ads && !json.ads.length) {
                            adBlockRadar.one({
                                name: "adblock_empty_data_from-" + slot,
                                time: 1
                            });
                        }
                        callbackFn(placeholder, {
                            html: json,
                            tpl: placeholderData.tpl
                        });
                    }
                    else {
                        _c.forEach(function (ad) {
                            var slot = +ad.slot;
                            var placeholder;
                            var banner;
                            // Это ТГБ?
                            if (slot === TGB_SLOT) {
                                ad.json = $.parseJson(ad.html);
                                if (ad.json) {
                                    delete ad.html;
                                }
                            }
                            // ТГБ или 300х300?
                            if (MIMIC[slot]) {
                                var placeholderData = __getPlaceholderData(slot, isMimicResponse_1);
                                placeholder = __getPlaceholder($.extend(
                                // куда и как вставлять
                                placeholderData, {
                                    slot: slot
                                }));
                            }
                            else {
                                // Для остальных уже есть контейнеры
                                placeholder = mr.id("slot_" + slot);
                            }
                            callbackFn(placeholder, ad);
                        });
                    }
                }
                catch (e) {
                    window.logError && logError(e, 'reloadSlots');
                }
            };
            var callbackName = 'reloadSlots' + callbackId++;
            // Через Васю или напрямую
            var url = ($._.STUCK_IN_POT ? MIMIC_URL + "&" : '//ad.mail.ru/adq/?') + "callback=";
            var p = [];
            var reloadSlotsJSONPCallback = function (_c) {
                reloadSlotsInner(_c, slots);
            };
            window[callbackName] = reloadSlotsJSONPCallback;
            setTimeout(function () {
                window[callbackName] = function () { };
            }, cancelTime);
            // Передали только массив со слотами и колбэк
            if (typeof params === 'function') {
                callbackFn = params;
                params = undefined;
            }
            if (params) {
                for (var paramName in params)
                    if (params.hasOwnProperty(paramName)) {
                        var paramValue = params[paramName];
                        p.push([paramName, paramValue].join('='));
                    }
            }
            // Формируем урл запроса
            url += callbackName;
            if ($._.STUCK_IN_POT) {
                var slotData = MIMIC[slots[0]];
                url += "&slot=" + slotData.slot + "&stat_id=" + slotData.statId;
            }
            else {
                url += '&q=' + (slots.join('&q='));
                url += '&p=splash';
                if (_EXPERIMENTID) {
                    url += '&test_id=' + _EXPERIMENTID;
                    url += '&exp_id=' + _EXPERIMENTID;
                }
                if (_PREVIEW) {
                    url += '&preview=' + _PREVIEW;
                }
                // параметры
                if (p.length) {
                    url += '&' + p.join('&');
                }
            }
            // Логируем если searchuid на момент запроса отсутствует
            if (mr._.STUCK_IN_POT) {
                if (!$.cookie('searchuid')) {
                    adBlockRadar.one({
                        name: 'adblock_no_searchuid',
                        time: 1
                    });
                }
                adBlockRadar.one({
                    name: "adblock_request_to-" + slots[0],
                    time: 1
                });
            }
            $.getScript(mr._.STUCK_IN_POT && mr.encrypt ? mr.encrypt(url) : url, false, 'utf-8');
        };
    }
    $.insertBanner = function (placeholder, data) {
        /* <i style="zeropixel">.</i> для IE8, иначе innerHTML не отрабатывает. Why? Because IE  */
        placeholder.innerHTML = '<i class="zeropixel">.</i>' + parseWrite(data.html, data.slot);
        execInnerScripts(placeholder);
    };
    $.insertByJSON = function (placeholder, data) {
        // Это мимик
        if (data.html) {
            placeholder.innerHTML = Splash.tpl[data.tpl](data.html);
            // Это спрятанные ссылочки
            var links = placeholder.querySelectorAll('[data-mnemo=true]');
            $.toArray(links).forEach(function (link) {
                var url = __getPropByFlatKey(data.html, link.getAttribute('data-bem'));
                ['data-bem', 'data-mnemo'].forEach(function (attr) {
                    link.removeAttribute(attr);
                });
                if (url) {
                    link.addEventListener('click', function (event) {
                        event.stopPropagation();
                        adBlockRadar.one({
                            name: 'adblock_click_to_banner',
                            time: 1
                        });
                        window.location.href = url;
                    });
                }
            });
        }
        else if (data.json) {
            var banner = !data.json.hasOwnProperty('icon_hd') ? data.json : {
                href: data.json.urlToNavigateOnClick,
                img: $.retina && data.json.icon_hd ? data.json.icon_hd : data.json.icon,
                title: [data.json.header],
                text: [data.json.text],
                type: 'target',
                marker: 'Реклама myTarget',
                pixels: data.json.statistics
            }, pixel = void 0;
            banner.id = data.banner;
            /* normalize target stat pixels */
            for (var i = 0, l = banner.pixels.length; i < l; i++) {
                pixel = banner.pixels[i];
                if (typeof pixel !== 'string') {
                    banner.pixels[i] = pixel.url;
                }
            }
            $.counter('d' + data.banner);
            placeholder.innerHTML = Splash.tpl.tgb(banner);
        }
    };
    $.reloadSlots = reloadSlots;
    $.tgbRadar = fastRadar;
})(window.mr);