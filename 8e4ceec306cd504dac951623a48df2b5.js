window.pageConfig = {"urlInvaild":{"code":"请输入正确地址","title":"抱歉，您当前访问的地址不合法","img":"//gw.alicdn.com/tfs/TB1694HRHY1gK0jSZTEXXXDQVXa-400-400.png"},"targetNotFound":{"code":"请查找其他资源观看","title":"抱歉，您当前访问的视频不存在","img":"//gw.alicdn.com/tfs/TB1694HRHY1gK0jSZTEXXXDQVXa-400-400.png"},"videoLimited":{"code":"请查找其他视频观看","title":"抱歉，您访问的视频版权受限暂无可播源","img":"//gw.alicdn.com/tfs/TB19MF1RUT1gK0jSZFrXXcNCXXa-400-400.png"},"serverError":{"code":"请您稍后重试","title":"啊哦，系统开小差了","img":"//gw.alicdn.com/tfs/TB1694HRHY1gK0jSZTEXXXDQVXa-400-400.png"},"didInit":true};
         
      var mtopConfig = {
            appKey: '24679788',
            v: '2.0',
            ecode: 0,
            type: 'GET',
            dataType: 'json',
        }
        var mtop = window.lib.mtop
        mtop.config.prefix = 'acs' // 当前是预发环境
        mtop.config.subDomain = ''
        mtop.config.mainDomain = 'youku.com'
        var ua = navigator.userAgent
        var UOSMode = !!(ua && (/UOSYouku/i.test(ua)))
        if (UOSMode) {
          document.querySelector('html').classList.add('uos')
        }
        if (window.$$InitYoukuHeader && window.$$InitYouKuFooter && window.$$InitYoukuFixedBar && !UOSMode) {
            window.$$InitYoukuHeader('youkuheader', {
                currentChannel: { name: '', domain: '' },
                focusWhite: false,
                enableScroll: true
            });

            window.$$InitYouKuFooter('youkufooter', {});

            window.$$InitYoukuFixedBar('fixbar', {});
        }
        var getParam = function(name, data) {
            var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
            var r
            if (data) {
                r = data.substr(1).match(reg)
            } else {
                r = window && window.location.search.substr(1).match(reg)
            }
            if (r != null) return unescape(r[2])
            return null
        }
        var ele = function(str) {
            return document.querySelector(str)
        }
        var eleAll = function(str) {
            return document.querySelectorAll(str)
        }
        var type = getParam('type')
        ele('.contentTitle').innerText = window.pageConfig && window.pageConfig[type] && window.pageConfig[type].title || '抱歉，您访问的页面不存在'
        ele('.errCode').innerText =  window.pageConfig && window.pageConfig[type] && window.pageConfig[type].code || '错误码: 404'
        ele('.logo404').src = window.pageConfig && window.pageConfig[type] && window.pageConfig[type].img || '//gw.alicdn.com/tfs/TB13sdSRHr1gK0jSZFDXXb9yVXa-400-400.png'
        function getVideo () {
            var channelIdList = [96, 97, 85, 100]
            for (var i in channelIdList ) {
                // var channelId = channelIdList[i]
                // var url = `https://index.api.youku.com/getData?num=700009&orderPro=vv&startindex=1&endindex=10&channelId=${channelId}`
                // var script = document.createElement('script')
                // script.src = url
                // document.getElementsByTagName('body')[0].appendChild(script)
                reqwest && reqwest({
                    url:"//pre-index.api.youku.com/getData",
                    type:"jsonp",
                    method:"get",
                    data:{
                      num: '700009',
                      orderPro: 'vv',
                      startindex:1,
                      endindex:10,
                      channelId:channelIdList[i]
                    },
                    success:function (res) {
                        if (res.result && Array.isArray(res.result) && res.result.length > 0) {
                            window[map[res.result[0].channelid]] = res.result.slice(0,8)
                            if (map[res.result[0].channelid] === 'tv') {
                                renderList('tv')
                            }
                        }
                    }
                })
            }
        }
        // getVideo()
        var map = {
            '电影': 'movie',
            '动漫': 'comics',
            '电视剧': 'tv',
            '剧集': 'tv',
            '综艺': 'variety'
        }
        function jsonpCb (res) {
            var kind = res.result.data[0].channelid.slice(0,5)
            window[map[kind]] = res.result.data.slice(0,8)
            if (map[kind] === 'tv') {
                renderList('tv')
            }
        }
        function renderLayer () {
            var html = ''
            for (var i=0;i<8;i++) {
                html += '<div class="hotSearchItem"><div class="layer"></div></div>'
            }
            ele('.hotSearchContent').innerHTML = html
        }
        // renderLayer()
        function renderList (type) {
            var data = window[type]
            var html = ''
            var mask = {
                '0': 'https://img.alicdn.com/tfs/TB1e6.TmO_1gK0jSZFqXXcpaXXa-138-138.png',
                '1': 'https://img.alicdn.com/tfs/TB1HfMQmLb2gK0jSZK9XXaEgFXa-138-138.png',
                '2': 'https://img.alicdn.com/tfs/TB1qbAVmND1gK0jSZFKXXcJrVXa-138-138.png',
                '3': 'https://img.alicdn.com/tfs/TB1HvZWmG61gK0jSZFlXXXDKFXa-138-138.png' 
            }
            for (var i in data) {
                var item = data[i]
                html += '<div class="hotSearchItem"><img src=' + (mask[i] || mask[3]) + ' alt="" id="mask"><div class="position">' + (Number(i) + 1) + '</div><div class="layer"><a href=' + (item.homepageurl || ("https://so.youku.com/search_video/q_" + item.title)) + ' target="_blank"><img src=' + item.avatar + ' alt=""><div class="videoTitle">' + (item.title.length > 13 ? item.title.slice(0, 10) + '...' : item.title) + '</div></a></div></div>'
            }
            ele('.hotSearchContent').innerHTML = html
        }
        // var currentTarget = ele('.hotSearchBtn')
        // for (var i in eleAll('.hotSearchBtn')) {
        //         eleAll('.hotSearchBtn')[i].addEventListener && eleAll('.hotSearchBtn')[i].addEventListener("mouseover",function (e) {
        //         currentTarget.classList.remove('active')
        //         var text = e.target.innerText
        //         renderList(map[text])
        //         currentTarget = e.target
        //         e.target.classList.add('active')
        //     })
        // }
        if (UOSMode && typeof require === 'function') {
          var ipcRenderer = require('electron').ipcRenderer;
          ipcRenderer && ele('.exit a').addEventListener('click', function () {
            ipcRenderer.send('window-close', 'playpage')
          })
        }