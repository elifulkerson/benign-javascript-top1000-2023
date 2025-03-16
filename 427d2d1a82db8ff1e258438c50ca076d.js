var unleashConfig = {
				url: 'https://unleash-edge.nexusmods.com/api/frontend',
				clientKey: '*:production.5340650e3f0669aee0ab68fa1ca73f977f40c841f920d22e625a71a2',
				appName: 'flamework',
				environment: 'production',
				disableRefresh: true,
			};
			var unleashClient = new unleash.UnleashClient(unleashConfig);
			window.unleashClient = unleashClient;
						unleashClient.updateContext({ userId: 0 });
						unleashClient.start();
			unleashClient.stop();