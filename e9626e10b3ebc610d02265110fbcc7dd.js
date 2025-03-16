/* global: ensemble is from ensemble_appshell.js */
        /* global: configureRequire comes from the
            fake_require_snippet (ui/page/script_tags.py) */
        /* global: addRequireLoadCallback comes from init_requirejs.ts */
        /* global: execTiers comes from require_init.ts */
        /* global: requirejs defined by alameda_bundle */
        ensemble.processChunk("dev-tools-pagelet", "done-1", function(){
        ensemble.setupPagelet("dev-tools-pagelet", {"name": "dev_tools__DevTools", "driver": "js_only", "html": "", "stylesheets": []}, false,
            function () { addRequireLoadCallback(function() {
                execTiers(requirejs.config({"context": "bf7b6a2b4e209f24dfa47b1cbb10dec4abcb50ad"}), function () {}, []);
            })},
            "bf7b6a2b4e209f24dfa47b1cbb10dec4abcb50ad", "atlas-web-platform-live-canary-pdx-89587b859-pb6fz", "atlasservlet.web_platform-live", "canary-pdx"
        )});