$(document).ready(function () {
            setTimeout(function () {
                var fossilOptions = {};
                Fossil.get(fossilOptions, function (components) {
                    var values = components.map(function (component) { return component.value });
                    var murmur = Fossil.x64hash128(values.join(''), 31);
                    $.post("/fossil/i/", {
                        'ftype': 'js',
                        'result': Base64.encode(murmur)
                    });
                });
            }, 1000);
        });