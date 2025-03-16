var _NOTIFICATION_CONFIG = {
    worker: 'https://www.wondershare.com/web-notification/sw.js',// sw.js的地址要根据自己的域名换成自己的静态资源路径
    wsNotificationJsPath: 'https://dc-static.wondershare.com/notification/wsNotification.js',// 固定不变
    trackUrl: 'https://prod-web.wondershare.cc/api/v1/prodweb/notification'// 请求通知权限订阅接口地址，固定不变
  };
  (function() {
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true; g.src=_NOTIFICATION_CONFIG.wsNotificationJsPath; s.parentNode.insertBefore(g,s);
  })();