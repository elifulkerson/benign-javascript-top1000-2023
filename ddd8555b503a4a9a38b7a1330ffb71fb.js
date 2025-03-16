//Captura variables desde la url para pasarlas a DFP
        var getQueryString = function(field, url) {
            var href = url ? url : window.location.href;
            var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
            var string = reg.exec(href);
            return string ? string[1] : null;
        };
        var dfp_demo = getQueryString("demo");