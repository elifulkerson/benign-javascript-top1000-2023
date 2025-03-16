(function (win, export_obj) {
        win['LogAnalyticsObject'] = export_obj;
        if (!win[export_obj]) {
            function _collect() {
                _collect.q.push(arguments);
            }
            _collect.q = _collect.q || [];
            win[export_obj] = _collect;
        }
        win[export_obj].l = +new Date();
    })(window, 'collectEvent');

    (function () {
        /**/
        var script = '//vj0.6rooms.com/mini/js/base/collectevent_35.js';
        /**/
        $LAB.script(script);
    })();