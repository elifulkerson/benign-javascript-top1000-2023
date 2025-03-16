(function () {
        if (typeof $LAB !== 'object') {
            return;
        }
        var script =
            '//vj0.6rooms.com/mini/js/base/analytic_106.js';
        if (typeof APPCONFIG === 'object') {
            $LAB.script(script);
        } else {
            $LAB.script('/coop/mobile/maskConfig.php').wait().script(script);
        }
    })();