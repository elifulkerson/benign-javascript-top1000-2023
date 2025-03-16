const q = (window.goldlog_queue || (window.goldlog_queue = []));
                  q.push({
                    action: 'goldlog.setMetaInfo',
                    arguments: ['aplus-auto-exp', [{logkey: '/yt/youku.pcweb.control', cssSelector: '.aplus_exp', pkgSize: 10, "method": "POST", props: ['data-scm','data-spm','data-trackinfo','data-utparam', 'data-language']}]]
                  })
                  q.push({
                    action: 'goldlog.setMetaInfo',
                    arguments: ['aplus-auto-clk', [{logkey: '/yt/youku.pcweb.control', cssSelector: '.aplus_clk', props:['data-scm','data-spm','data-trackinfo','data-utparam','data-language']}]]
                  })
                  // pv日志上报
                  q.push({
                      action: 'goldlog.sendPV',
                      arguments: [{
                          is_auto: false
                      }, {
                        log_ver: 'v2',
                        urlInfo: 'ab_test=852:5158#2185:5477&web_test='
                      }]
                  })
                  window.spmData = {
                    spmA: "a2hja",
                    spmB: "14919748_WEBHOME_NEW"
                  };