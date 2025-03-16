let buildchunks = "static/chunks/webpack-deae44419d97c307.js,static/chunks/framework-79bce4a3a540b080.js,static/chunks/main-ea7a15c607273cc7.js,static/chunks/pages/_app-a26e62ad846fbf4d.js,static/chunks/365-bf30a48a7d800f71.js,static/chunks/5638-761a08f88139bd0c.js,static/chunks/9669-ea1b006ae648290c.js,static/chunks/3631-c30c136249b11e6e.js,static/chunks/9547-c45e5765bae0fefe.js,static/chunks/1664-8bb517190d54523e.js,static/chunks/1354-ea0194cde815edda.js,static/chunks/5969-6a35c466395534ab.js,static/chunks/8352-cade1d7eecfb5fa0.js,static/chunks/5585-d7886a8a12deb7a8.js,static/chunks/8455-b9760a3404ea4065.js,static/chunks/925-7a1c13f897cfda70.js,static/chunks/370-10338aa15c7e4034.js,static/chunks/4022-b3a5dfd4c2612042.js,static/chunks/2579-dc6637648df0add5.js,static/chunks/9149-fe4bb188ad50e1a1.js,static/chunks/8935-0eddf43f93d5647a.js,static/chunks/1315-d57693e60260c863.js,static/chunks/7709-e35f7a398146967f.js,static/chunks/2464-e18ed42a5888136b.js,static/chunks/7482-f14af2b002303b35.js,static/chunks/6415-ff79285705bea816.js,static/chunks/9371-3ec463e45fbd1e92.js,static/chunks/pages/index-ab36bd6c61bb952b.js,static/ZtEn0gHyaaBOphL0SyRuT/_buildManifest.js,static/ZtEn0gHyaaBOphL0SyRuT/_ssgManifest.js,static/ZtEn0gHyaaBOphL0SyRuT/_middlewareManifest.js";
            var _itbuildchunks = buildchunks.split(',');
            window.addEventListener('DOMContentLoaded', () => {
              setTimeout(function(){
                    //console.log("window load _itbuildchunks: ", _itbuildchunks);
                    for (var i = 0; i < _itbuildchunks.length; i++) {
                      let headEl = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);
                      if(headEl){
                        let givenjs = _itbuildchunks[i];
                        var script = document.createElement("script");
                        script.src = 'https://akm-img-a-in.tosshub.com/sites/indiatoday/resources/prod'+'/_next/'+givenjs;
                        script.defer = true;
                        script.crossorigin = "anonymous";
                        headEl.appendChild(script);
                      }
                    }
            }, 2000)
            })