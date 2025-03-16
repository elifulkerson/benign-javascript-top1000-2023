var Config = {
      "cometd.url": "/cometd",
      "domain.main": "//www.chess.com",
      "domain.static": "//www.chess.com",
      "domain.files": "//files.chesscomfiles.com",
      "domain.live": "//live.chess.com",
      "domain.live2": "//live2.chess.com",
      "domain.live3": "//live3.chess.com",
      "domain.voice": "rtmp://voice.chess.com",
      "domain.cssjs": "//www.chess.com",
      "domain.images": "//images.chesscomfiles.com",
      "domain.avatars": "//avatars.chesscomfiles.com",
      "domain.baseUrl": "",
      "isFacebookCanvas": false,
      "facebookId": "2427617054",
      "pathToEngineWorker": "/bundles/app/js/vendor/jschessengine/stockfish.6983901b.js",
      "pathToEngineWorkerAlt": "/bundles/app/js/engine/stockfish.1de0d633.js",
      "pathToWasmEngine": "/bundles/app/js/vendor/jschessengine/stockfish.6103b42f.bin",
      "pathToNonWasmEngine": "/bundles/app/js/vendor/jschessengine/stockfish.asm.1abfa10c.js",
      "pathToKomodoWorker": "/bundles/app/js/vendor/jschessengine/komodo.9ea31da2.js",
      "pathToWasmKomodo": "/bundles/app/js/vendor/jschessengine/komodo.765d36d5.bin",
      "pathToNonWasmKomodo": "/bundles/app/js/vendor/jschessengine/komodo.asm.b6f18c99.js",
      "pathToTorchWorker": "/bundles/app/js/engine/torch.ff2549db.js",
      "pathToWasmTorch": "/bundles/app/js/engine/torch.94440d8f.wasm",
      "pathToTorchLiteWorker": "/bundles/app/js/engine/torch-lite.81c1f5f5.js",
      "pathToWasmTorchLite": "/bundles/app/js/engine/torch-lite.43dcd446.wasm",
      "pathToExplanationEngineWorker": "/bundles/app/js/vendor/explanation-engine-beta/explanation-engine.a28e1928.js",
      "pathToWasmExplanationEngine": "/bundles/app/js/vendor/explanation-engine-beta/explanation-engine.aafe0580.wasm",
      "pathToExplanationEngineWorkerPD": "/bundles/app/js/vendor/explanation-engine-pd/explanation-engine.8b6c0a0d.js",
      "pathToExplanationEnginePD": "/bundles/app/js/vendor/explanation-engine-pd/explanation-engine.fccda880.wasm",
      "pathToEcoJson": "/bundles/app/js/engine/books/eco.80c9e98e.json",
      "pathToBook": "/bundles/app/js/engine/books/eco.80c9e98e.json",
      "pathToBookSmall": "/bundles/app/js/engine/books/eco.80c9e98e.json",
      "pathToWebGL": "/bundles/app/js/vendor/webgl_three.61269fce.js",
      "pathToGamePreviewLoader": "/bundles/web/images/game-preview-loading.8677fb94.png",
      "pathToPersonalityBooks": {
                        "aggressive": "/bundles/app/js/engine/books/aggressive.50a9b452.bin",
                  "akiba_rubinstein": "/bundles/app/js/engine/books/akiba_rubinstein.27a1ba7f.bin",
                  "alekhine": "/bundles/app/js/engine/books/alekhine.78afc9d2.bin",
                  "alexandra_botez": "/bundles/app/js/engine/books/alexandra_botez.d64a85b6.bin",
                  "alexandra_kosteniuk": "/bundles/app/js/engine/books/alexandra_kosteniuk.bfba3aea.bin",
                  "aman_hambleton": "/bundles/app/js/engine/books/aman_hambleton.7df58084.bin",
                  "andrea_botez": "/bundles/app/js/engine/books/andrea_botez.53326027.bin",
                  "anish_giri": "/bundles/app/js/engine/books/anish_giri.8726a67e.bin",
                  "anna_cramling": "/bundles/app/js/engine/books/anna_cramling.b6b03794.bin",
                  "anna_muzychuk": "/bundles/app/js/engine/books/anna_muzychuk.1846bba6.bin",
                  "anna_rudolf": "/bundles/app/js/engine/books/anna_rudolf.c7ed14ff.bin",
                  "anthony_levin": "/bundles/app/js/engine/books/anthony_levin.33851150.bin",
                  "anthony_miles": "/bundles/app/js/engine/books/anthony_miles.96ba89dd.bin",
                  "aron_nimzowitsch": "/bundles/app/js/engine/books/aron_nimzowitsch.e8a3a75c.bin",
                  "avigail_rosenthal": "/bundles/app/js/engine/books/avigail_rosenthal.c28f3796.bin",
                  "balanced": "/bundles/app/js/engine/books/balanced.71d69282.bin",
                  "beginner": "/bundles/app/js/engine/books/beginner.f122c7c5.bin",
                  "benjamin_bok": "/bundles/app/js/engine/books/benjamin_bok.858af1a3.bin",
                  "bent_larsen": "/bundles/app/js/engine/books/bent_larsen.f0a04521.bin",
                  "bikfoot_wouter": "/bundles/app/js/engine/books/bikfoot_wouter.deb83ec3.bin",
                  "book": "/bundles/app/js/engine/books/book.28504e3b.bin",
                  "botvinnik": "/bundles/app/js/engine/books/botvinnik.8aa707d1.bin",
                  "capablanca": "/bundles/app/js/engine/books/capablanca.7b15e717.bin",
                  "carlsen": "/bundles/app/js/engine/books/carlsen.35b9ca73.bin",
                  "cccopenings": "/bundles/app/js/engine/books/cccopenings.bdfbf7b7.bin",
                  "christian_pulisic": "/bundles/app/js/engine/books/christian_pulisic.2b04f5d9.bin",
                  "classical": "/bundles/app/js/engine/books/classical.2e31ad51.bin",
                  "dan_rozovsky": "/bundles/app/js/engine/books/dan_rozovsky.812207a0.bin",
                  "daniel_naroditsky": "/bundles/app/js/engine/books/daniel_naroditsky.ec6d2390.bin",
                  "daryl_morey": "/bundles/app/js/engine/books/daryl_morey.09d12a5e.bin",
                  "dawid_czerw": "/bundles/app/js/engine/books/dawid_czerw.c80432c7.bin",
                  "ding": "/bundles/app/js/engine/books/ding.98c63895.bin",
                  "dodge_coates": "/bundles/app/js/engine/books/dodge_coates.7d0ade1b.bin",
                  "dylan_rittman": "/bundles/app/js/engine/books/dylan_rittman.7bdc1497.bin",
                  "eric_hansen": "/bundles/app/js/engine/books/eric_hansen.d890b525.bin",
                  "erik_allebest": "/bundles/app/js/engine/books/erik_allebest.2dfb86d6.bin",
                  "ethan_metzger": "/bundles/app/js/engine/books/ethan_metzger.549af14c.bin",
                  "euwe": "/bundles/app/js/engine/books/euwe.fbc309c1.bin",
                  "f-pawner": "/bundles/app/js/engine/books/f-pawner.bb8a15f1.bin",
                  "fabiano_caruana": "/bundles/app/js/engine/books/fabiano_caruana.5642aaea.bin",
                  "fischer": "/bundles/app/js/engine/books/fischer.c93e412d.bin",
                  "gambit": "/bundles/app/js/engine/books/gambit.3ef59ed2.bin",
                  "hou_yifan": "/bundles/app/js/engine/books/hou_yifan.a29e7286.bin",
                  "ian_nepomniachtchi": "/bundles/app/js/engine/books/ian_nepomniachtchi.387e0d9f.bin",
                  "indian": "/bundles/app/js/engine/books/indian.8e8f8dd6.bin",
                  "irina_krush": "/bundles/app/js/engine/books/irina_krush.eb470d8b.bin",
                  "james_canty": "/bundles/app/js/engine/books/james_canty.63b14dec.bin",
                  "jeremy_kane": "/bundles/app/js/engine/books/jeremy_kane.75aeaa92.bin",
                  "jonathan_cannon": "/bundles/app/js/engine/books/jonathan_cannon.232d257c.bin",
                  "joseph_votto": "/bundles/app/js/engine/books/joseph_votto.c5c5711b.bin",
                  "judit_polgar": "/bundles/app/js/engine/books/judit_polgar.7c8fcd30.bin",
                  "karpov": "/bundles/app/js/engine/books/karpov.f77e030c.bin",
                  "kasparov": "/bundles/app/js/engine/books/kasparov.fbd33443.bin",
                  "kassa_korley": "/bundles/app/js/engine/books/kassa_korley.b64ed838.bin",
                  "kenneth_wilber": "/bundles/app/js/engine/books/kenneth_wilber.185811d9.bin",
                  "kevin_bordi": "/bundles/app/js/engine/books/kevin_bordi.9cd76731.bin",
                  "komodo": "/bundles/app/js/engine/books/komodo.bb8b6a25.bin",
                  "korchnoi": "/bundles/app/js/engine/books/korchnoi.df9a9ce8.bin",
                  "krikor_mekhitarian": "/bundles/app/js/engine/books/krikor_mekhitarian.43b3d4cd.bin",
                  "lasker": "/bundles/app/js/engine/books/lasker.9d8fc690.bin",
                  "leo_stokes": "/bundles/app/js/engine/books/leo_stokes.778f6211.bin",
                  "levon_aronian": "/bundles/app/js/engine/books/levon_aronian.adcd3c3b.bin",
                  "levy_rozman": "/bundles/app/js/engine/books/levy_rozman.024e3929.bin",
                  "luis_fernandez_siles": "/bundles/app/js/engine/books/luis_fernandez_siles.12a08971.bin",
                  "martin_enev": "/bundles/app/js/engine/books/martin_enev.49fb8880.bin",
                  "matt_turner": "/bundles/app/js/engine/books/matt_turner.ccdc19ad.bin",
                  "maurice_ashley": "/bundles/app/js/engine/books/maurice_ashley.fb4474e5.bin",
                  "mike_klein": "/bundles/app/js/engine/books/mike_klein.dadd1687.bin",
                  "nakamura": "/bundles/app/js/engine/books/nakamura.1b408716.bin",
                  "naycir_gurpinar": "/bundles/app/js/engine/books/naycir_gurpinar.017ff300.bin",
                  "offbeat": "/bundles/app/js/engine/books/offbeat.c125e5bf.bin",
                  "paul_morphy": "/bundles/app/js/engine/books/paul_morphy.2a75be3d.bin",
                  "petrosian": "/bundles/app/js/engine/books/petrosian.1488f78a.bin",
                  "phiona_mutesi": "/bundles/app/js/engine/books/phiona_mutesi.03673f43.bin",
                  "positional": "/bundles/app/js/engine/books/positional.988b37b5.bin",
                  "qiyu_zhou": "/bundles/app/js/engine/books/qiyu_zhou.e1e573ce.bin",
                  "quick_queen": "/bundles/app/js/engine/books/quick_queen.523ee0a4.bin",
                  "rensch": "/bundles/app/js/engine/books/rensch.f0d14299.bin",
                  "reuben_fine": "/bundles/app/js/engine/books/reuben_fine.60466cdf.bin",
                  "richard_rapport": "/bundles/app/js/engine/books/richard_rapport.32ab0f3c.bin",
                  "robert_hess": "/bundles/app/js/engine/books/robert_hess.38e30a88.bin",
                  "rory_smith": "/bundles/app/js/engine/books/rory_smith.5b603a9f.bin",
                  "sam_copeland": "/bundles/app/js/engine/books/sam_copeland.8c022b9c.bin",
                  "samay_raina": "/bundles/app/js/engine/books/samay_raina.0c633f9e.bin",
                  "samuel_reshevsky": "/bundles/app/js/engine/books/samuel_reshevsky.d3d98935.bin",
                  "savielly_tartakower": "/bundles/app/js/engine/books/savielly_tartakower.d2de6a1a.bin",
                  "smyslov": "/bundles/app/js/engine/books/smyslov.e2ffdf87.bin",
                  "spassky": "/bundles/app/js/engine/books/spassky.f1f87ea0.bin",
                  "steinitz": "/bundles/app/js/engine/books/steinitz.875bb2f4.bin",
                  "tagir_nafikov": "/bundles/app/js/engine/books/tagir_nafikov.0e71ab52.bin",
                  "tal": "/bundles/app/js/engine/books/tal.0a811e26.bin",
                  "ulf_andersson": "/bundles/app/js/engine/books/ulf_andersson.8b253379.bin",
                  "vidit_gujrathi": "/bundles/app/js/engine/books/vidit_gujrathi.2f1e8a95.bin",
                  "vishy_anand": "/bundles/app/js/engine/books/vishy_anand.3c6cff4e.bin",
                  "vladimir_kramnik": "/bundles/app/js/engine/books/vladimir_kramnik.0c154e06.bin",
                  "wesley_so": "/bundles/app/js/engine/books/wesley_so.f8b28796.bin",
                  "will_stewart": "/bundles/app/js/engine/books/will_stewart.6bde6337.bin",
                  "winger": "/bundles/app/js/engine/books/winger.77d88765.bin",
                    },
      "threadedEnginePaths": {
        "stockfish": {
          "fakeWorker": {
            "loader": "/bundles/app/js/engine/stockfish-nnue-16-no-Worker.1ed4c83b.js",
            "engine": "/bundles/app/js/engine/stockfish-nnue-16-no-Worker.22822879.wasm",
          },
          "multiThreaded": {
            "loader": "/bundles/app/js/engine/stockfish-nnue-16.840e654f.js",
            "engine": "/bundles/app/js/engine/stockfish-nnue-16.9ffe613d.wasm",
            "nnue": "/bundles/app/js/engine/nn-5af11540bbfe.17051dfd.nnue",
          },
          "multiThreadedNoSIMD": {
            "loader": "/bundles/app/js/engine/stockfish-nnue-16-no-simd.eeddca83.js",
            "engine": "/bundles/app/js/engine/stockfish-nnue-16-no-simd.86f5189e.wasm",
          },
          "singleThreaded": {
            "loader": "/bundles/app/js/engine/stockfish-single.830cf9cc.js",
            "engine": "/bundles/app/js/engine/stockfish-single.8ffa2b70.wasm",
          },
          "asm": "/bundles/app/js/engine/stockfish.asm.16fa8540.js",
          "fakeWorkerBrowserVersions": [{"browser":"chrome","version":109}],
          "nnue": "/bundles/app/js/engine/nn-5af11540bbfe.17051dfd.nnue",
        },
      },
      "oldThemes": false,
      "isPlay": false,
      "isStaff": false,
      "noAvatar": '/bundles/web/images/user-image.007dad08.svg',
      "wdlJsonModel": '/bundles/web/wdl/model.json',
      "wdlWeights": '/bundles/web/wdl/group1-shard1of1.bin',
      "ad.hideAds": true,
      "ad.disabledAds": []
    };

    Config.adCustomPath = '';

    Config.pathToTinyMCE = "/bundles/app/js/tinymce-lazy.client.0b713277.js",

    
    
          Config.pathToDiagramViewerCSS =  "/bundles/app/css/diagram-viewer.client.30cb2e10.css",
      Config.pathToDiagramViewerJS = "/bundles/app/js/diagram-viewer.client.5e39f348.js",
    
        window.__CHESSCOM_RTL__ = false;

        window.chesscom = window.chesscom || {};
    window.chesscom.clientMetricsDomain = 'https://client-metrics.chess.com';

        window.chesscom.showAds = Boolean(1);

        //<![CDATA[
    context = {"freeTrial":null,"activeMembership":null,"i18n":{"locale":"en_US","contentLanguage":"any","mobile":[]},"csrf":{"token":"38e3aa9b391fd.jFMsOjcLVrg64LzUjGneLb-5DawCJ9kyrtlFpPcWweY.ugJYeVFdPPIKrtS23z_rb9LqbMdIYrgK4ehz0sN6gK_rAE9KXVECjHGVjA","login":"4f0bfb47f1685964ea.0RY0zy21FGVUm0URki_BQQaP6zRYX2kU9tlxSHPmN_k.jnR4uWqALSsj4wAk0Ba1NmDWmFYUMhNGp7A8fT2ecrWJQ0CJXfJQDB7ucQ","logout":"5.AO7b9xtYaXNX3x2O0tYpnBrN09MzSjPXZWfIq0Sew0A.N5yhx2MSIzUTqUTYveZL1i6doLBZOH6NPASKzXHzlnNC2KyVVGA9MTuIdg"},"amplitudeKey":"5cc41a1e56d0ee35d4c85d1d4225d2d1","iterableKey":"f771b86cf083441f992a4bb01d3d600f","adyen":{"environment":"live","integrity":"sha384-O0Q35c47I1ojd1zrD78yWAs+r5gytAjBC\/sxwZqgQW5z9hDbAFM49z8SViprrDwm","clientKey":"live_7STEYX735RGTTEZMSKIVNX5C2YU2QN5B","key":"10001|D97C83A6DB30A889AAC517489C56512C733B365B8E5E2E5CB5FD860751EC3EC14A145FE6FD2EF1A338D375DB3D9F7B988631B64D4B9C9BE3DE007D8C60649F2BAC7B0798A869892B683110B2FE53E89EBB9923A0EF7113FDEEEBC57FDB21AA8F99D3757DB7C8A8E6458D3B628B357396E77CD3C31158B203BEDAF3AC56E11A94C3BA745CAE7847B6C7D5C6B1D6E68204147A9B98EC334560F94A484FC5335F8AA4716BF13E0153B9B0E7FF75384449563F935AF0173C5F8F1CBE20B1C91593C2F7AF07A83E48F31DA8F4F5959687A682823216342C6E1B36771AC42C9BF0E03F443D07D239F25EB916BC15A908796C698D296130A9BA4A925684416F9C759143","originKey":"pub.v2.1114841580210853.aHR0cHM6Ly93d3cuY2hlc3MuY29t.g3hcnpsxbNsbEo3XJP_laQJwLDCkoYfA1YmHG6Kns8g","sdk":"https:\/\/checkoutshopper-live.adyen.com\/checkoutshopper\/sdk\/5.23.1\/adyen.js"},"iterableMuteApiCallsFeature":false,"paypalClientId":"AX68j9lUfn3i3vsUPLiDT-jSr3n_1h0nbZtUSRPXXy3-O6iMSX-adfP6PB0qcTbNbbqCaHm6MiDy4JzE"};
    //]]>
    
    context.version = '20231015133130';
    context.branch = 'master';
    context.commit = 'c3c2a2a6dc4c08cd46dd0f5d92dbaf81fcf24157';
    context.requestId = '39a7a11c2cbc5a1fbdabcc80bd3c4334';
    context.server = 'web140.chess.com';
    context.locale = 'en';
    context.environment = 'prod';
    context.cookies = {
      app: '',
    };

    context.ip = '70.163.140.175';
    context.chessboardBeta = true;
    context.route = 'web_index';