// bili-mirror 告警上报
      function loadScript(url, cb) {
        var script = document.createElement('script')
        script.type = "text/javascript"
        script.src = url
        document.body.appendChild(script)
        script.onload = function() {
          typeof cb === 'function' && cb()
        }
      }
      loadScript('//s1.hdslb.com/bfs/seed/jinkela/short/b-mirror/biliMirror.umd.mini.js', () => {
        if (window.__INITIAL_MIRROR__) {
          const config = {
            origin: 'main',
            module: 'home-page',
            spmId: '333.1007',
            config: {
              whiteScreen: {
                maxLoop: 5,
                elemArry: ['#i_cecream'],
                callback: status => {
                  console.log('白屏检测是否正常', status)
                },
                isSkeleton: false
              }
            }
          }
          window.__INITIAL_MIRROR__(config)
        }
      })