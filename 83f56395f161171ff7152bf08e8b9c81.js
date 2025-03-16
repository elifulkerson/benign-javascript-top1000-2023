window.DD_RUM && window.DD_RUM.init({
                applicationId: '07e75210-4f7c-4074-b5b5-dbdaa1b02285',
                clientToken: 'pub419b92861cd5aaa7dd6ca4f406320fea',
                site: 'datadoghq.com',
                service: 'OP.GG-KR',
                sampleRate: 0.05,
                replaySampleRate: 100,
                trackInteractions: true,
                env: 'na',
                allowedTracingOrigins: ["https://lol-api-champion.op.gg", "https://lol-api-summoner.op.gg", /https:\/\/.*\.op\.gg/]
              });
              window.DD_RUM.startSessionReplayRecording();