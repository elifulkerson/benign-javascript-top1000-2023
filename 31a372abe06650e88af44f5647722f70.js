var userId = '0';
       var isTest = /test/.test(document.domain)||/dev/.test(document.domain);
       var appId = 6322339781814;
       var projectId ='6289197098934';
       var progectKey ='3kxpt7yb';
       if(isTest){
          appId = 6296943323570;
          projectId = '6289210146098';
          progectKey = 'w65br84t';
       }
       window.WMDA_SDK_CONFIG = ({
           api_v: 1,
           sdk_v: 0.1,
           mode: 'report',
           appid: appId,
           key: progectKey,
           project_id: projectId,
           // cookie_domain: document.domain,   //58域下不需要该字段
           cate_id: '',   //按需填写
           page_extra: [{   //按需填写
               key: 'pagename',
               value: 'Ershou_Web_Home_NationalHomePage'
           },{
               key: 'city_id',
               value: '14'
           }],
           user_extra: [{   //按需填写
             key: 'guid',
             value: '62EB7B40-EEE3-CC96-EF36-8E94A1B07F05'
           }],
           channel: '',   //按需填写
           getUserId: function() {
               return userId;
           }
       });