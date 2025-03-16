fillFromGameStaticStats([], function () {
					let totalDownloads = 0;
					const { isLoaded, ...gameStats } = GlobalGameStats;
					Object.keys(gameStats).forEach(function(item){
						totalDownloads += gameStats[item] && gameStats[item].total || 0;
					});
					if (isNaN(totalDownloads) || totalDownloads === 0) {
						return;
					}
					$('#total_network_downloads').text(longFormat(totalDownloads));
				});
				// Populate donation points count
				fetch('https://staticstats.nexusmods.com/dp_stats/dp_stats_production.json')
					.then(function (data) {
						return data.json();
					})
					.then(function (data) {
						const value = new Intl.NumberFormat('en-US', {
							style: 'currency',
							currency: 'USD',
							maximumFractionDigits: 0,
							minimumFractionDigits: 0,
						}).format(Math.floor((data.total_dp || 0) / 1000));
						$('.total-dp').text(value);
					});
			    // Get site stats
                fetch('https://data.nexusmods.com/file/nexus-data/site-stats.json')
                    .then(function (data) {
                        return data.json();
                    })
                    .then(function (data) {
                        $('#total_mods').text(longFormat(data.mods_count));
                        $('#total_authors').text(longFormat(data.authors_count));
                        $('#total_downloads').text(longFormat(data.downloads_count));
                        $('#total_users').text(longFormat(data.users_count));
                        $('#total_games').text(longFormat(data.games_count) + " games");
                    });