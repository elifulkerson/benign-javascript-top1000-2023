function setDismissedCookie(id) {
		Cookies.set(id, 'false', { expires: 90 });
		document.querySelector(`#${id}`).style.display = 'none';
	}

	let gamesList = [];
	let gamesListMap = {};
	let gamesListPromise = null;

	function populateGamesList() {
		if (gamesListPromise === null) {
			gamesListPromise = fetch('https://data.nexusmods.com/file/nexus-data/games.json').then(function (response) {
				if (!response.ok) {
					throw new Error();
				}

				return response.json();
			}).catch(function () {
				return fetch('/assets/files/games.json').then(function (response) {
					if (!response.ok) {
						return [];
					}

					return response.json();
				}).catch(function () {
					return [];
				});
			});
		}

		return gamesListPromise;
	}

	async function getGamesList() {
		if (gamesList.length == 0) {
			gamesList = await populateGamesList();
			gamesListMap = gamesList.reduce(function (acc, game) {
				acc[game.id] = game
				return acc
			}, {})
		}

		return gamesList;
	}

	async function getGamesListMap() {
		await getGamesList()

		return gamesListMap;
	}