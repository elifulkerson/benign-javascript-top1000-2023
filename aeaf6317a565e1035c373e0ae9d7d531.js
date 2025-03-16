function mimgError() {
                var statPath = 'https://mail.163.com/mailstats-sdk/mailstats.umd-1.1.3.js';
                var script = document.createElement('script');
                script.src = statPath;
                script.onload = function() {
                    var mailStats = null;
                    mailStats = new MailStats({
                        dataSource: 'mail',
                    });
                    mailStats.config({
                        application: 'free_webmail_9c89159b6fde1dc2',
                        options: {
                            autoAddKeyInfo: false,
                        }
                    });
                    mailStats.click('b_mimg_cdn_load_error', {}, '');
                };
                document.head.appendChild(script);
            }