var favourites = [];
  var limit = 18;
	var expanded = false;

  function nFormatter(num, digits) {
  	var si = [
    	{ value: 1E18, symbol: "E" },
      { value: 1E15, symbol: "P" },
      { value: 1E12, symbol: "T" },
      { value: 1E9,  symbol: "bn" },
      { value: 1E6,  symbol: "M" },
      { value: 1E3,  symbol: "k" }
    ], rx = /\.0+$|(\.[0-9]*[1-9])0+$/, i;

    for (i = 0; i < si.length; i++) {
    	if (num >= si[i].value) {
				return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
	    }
		}

		return num.toFixed(digits).replace(rx, "$1");
	}

	$(document).ready(function(){
		getGamesList().then(function (json) {
			$('#sort_by, #order, #f_name').change(function() {
				order($('#sort_by').val(), $('#order').val());
			});

			var interval;

			$('#f_name').keyup(function(){
				clearInterval(interval);
				interval = setTimeout(function(){
					order($('#sort_by').val(), $('#order').val());
				}, 450);
			});

			$('.js-expand-games').click(function(){
				limit = 0;
				order($('#sort_by').val(), $('#order').val());
				$(this).hide();

				return false;
			});

			function order(field, dir) {
				$('.game-tiles').html('');

				var json_sorted = json;

				json_sorted = _.sortBy(json_sorted, [field]);

				if (dir == 'desc') json_sorted = json_sorted.reverse();

				if ( $('#f_name').val() != '') {
					json_sorted = _.filter(json_sorted, function(item) {
						var searchTerms = $('#f_name').val().toLowerCase();
						var gameName = item.name_lower;
						var searchMatches = new RegExp('(?=.*' + searchTerms.split(/\,|\s/).join(')(?=.*') + ')', 'gi');
						return gameName.match( searchMatches ) !== null;
					});
				}

				if (limit > 0) {
					labelCount = json_sorted.length - limit;

					if (json_sorted.length > limit) {
						$('.js-expand-games').show();
						$( '#game-blurb' ).hide();
						$('.js-expand-games').text("LOAD " + labelCount + " more");
					} else {
						$('.js-expand-games').hide();
						$( '#game-blurb' ).show();
					}

					json_sorted = json_sorted.slice(0, limit);
				}

				var html = _.map(json_sorted, function (game) {
					return _.template($('#image-tile-template').html())(game)
				}).join('');

				$('.game-tiles').html(html);
			}

			fillFromGameStaticStats(_.map(json, 'id'), function (stats) {
				stats.forEach(function (item) {
					_.find(json, {id: item.item}).downloads = item.downloads;
				});

				order($('#sort_by').val(), $('#order').val());
			});
		});
	});