(function (window) {
    var SELECTOR = [
        '[data-rapid="true"]',
        '.content-canvas'
    ].join(', ');
    var ID_PREFIX = 'td-app-aol-module';

    var getModuleId = (function () {
        var generatedIdCount = 0;
        return function (node) {
            if (!node.hasAttribute('id')) {
                generatedIdCount++;
                node.setAttribute('id', ID_PREFIX + '-' + generatedIdCount);
            }

            return node.getAttribute('id');
        };
    })();

    if (!window.YAHOO || !window.YAHOO.i13n || !window.YAHOO.i13n.Rapid || !window.rapidConfig) {
        return;
    }

    window.rapidInstance = new window.YAHOO.i13n.Rapid(window.rapidConfig);

    var customEvent = document.createEvent('CustomEvent');
    customEvent.initCustomEvent('rapid:init', false, false, {});
    document.dispatchEvent(customEvent);

    var docIsReady = function (callback) {
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            // call on next available tick
            setTimeout(callback, 1);
        } else {
            document.addEventListener('DOMContentLoaded', callback);
        }
    };

    docIsReady(function () {
        window.rapidInstance.addModulesWithViewability(
            Array.prototype.map.call(
                document.querySelectorAll(SELECTOR),
                getModuleId
            ),
            false
        );
    });
})(window);