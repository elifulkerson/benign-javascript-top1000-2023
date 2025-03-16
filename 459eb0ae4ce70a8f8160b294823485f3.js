window.setDeviceId = function (deviceId) {
        try {
            window.localStorage.setItem('deviceId', deviceId);
            window.deviceId = deviceId;
        } catch (error) {
            console.log(error);
        }
    };
    window.getDeviceId = {
        // 请求次数统计
        index: 0,
        // 初始化
        init: function() {
            var deviceId =  window.localStorage.getItem('deviceId');
            if (deviceId) {
                // 如果缓存有ID，直接发送
                window.setDeviceId(deviceId);
            } else {
                // 没有ID，请求接口获取
                this.getId();
            }
        },
        loadJs: function(url, fnError) {
            var _self = this;
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = false;
            script.src = url;
            if (document.head.prepend) {
                document.head.prepend(script);
            } else {
                var _script = document.getElementsByTagName('script')[0];
                _script.parentNode.insertBefore(script, _script);
            }
            script.onerror = function () {
                fnError && fnError();
            }
        },
        getId: function() {
            var _self = this;
            _self.loadJs('https://web-device-id.banggood.com/deviceId', function () {
                _self.reGetId();
                var userAgent = (window.navigator && window.navigator.userAgent) || '';
                _self.loadJs('https://www.tieszhu.com/e.html?__key=custom_event&event_label=manage&deviceIdPort=pc&deviceIdError=1&deviceIdIndex=' + _self.index + '&deviceIdUserAgent=' + userAgent);
            });
        },
        // 如果请求失败，重新请求3次
        reGetId: function() {
            if (this.index >= 3) return;
            this.index++;
            this.getId();
        }
    };
    window.getDeviceId.init();