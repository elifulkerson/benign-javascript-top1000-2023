$(function () {
    	fillFromModStaticStats();
			if (window.setDataLayerEvent) {
				window.setDataLayerEvent(368);
				delete window.setDataLayerEvent;
			}
		});

    function parseParams(str) {
        return str.split('&').reduce(function (params, param) {
            var paramSplit = param.split('=').map(function (value) {
                return decodeURIComponent(value.replace('+', ' '));
            });
            params[paramSplit[0]] = paramSplit[1];
            return params;
        }, {});
    }

	$('#mods-tab > a > span[ class="alert"]').html("368");

    $('.search-terms .result-delete').off('click').on('click', function() {
        var term = $(this).data('term');
        var url = window.location.search;

        url = parseParams(url.replace('?', ''));

        delete url['search[search]'];

        window.history.replaceState( {} , null, '?' + $.param(url) );
    });