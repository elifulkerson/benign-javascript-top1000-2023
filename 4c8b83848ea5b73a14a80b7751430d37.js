var JRI = '6rooms.com',
            JRI_HOSTS = {"vj0":"\/\/vj0.6rooms.com","vj1":"\/\/vj1.6rooms.com","vj2":"\/\/vj2.6rooms.com","vj3":"\/\/vj3.6rooms.com","vr0":"\/\/vr0.6rooms.com","vr1":"\/\/vr1.6rooms.com","vr2":"\/\/vr2.6rooms.com","vr3":"\/\/vr3.6rooms.com","vi0":"\/\/vi0.6rooms.com","vi1":"\/\/vi1.6rooms.com","vi2":"\/\/vi2.6rooms.com","vi3":"\/\/vi3.6rooms.com"},
            JSF = {"jq":"\/\/vj0.6rooms.com\/mini\/js\/base\/jquery_5.js","login":"\/\/vr0.6rooms.com\/hao\/vintage\/login_f19ef1f58fe62e0350f2.js","z":"\/\/vr0.6rooms.com\/hao\/vintage\/z_51127e22b7c56e6b6cab.js","swf":"\/\/vj0.6rooms.com\/mini\/js\/base\/swfobject_2016_3.js","im":"\/\/vj0.6rooms.com\/mini\/js\/imr\/imr_203.js","imr":"\/\/vj0.6rooms.com\/mini\/js\/imr\/imr_203.js","webview":"\/\/vr0.6rooms.com\/hao\/vintage\/webview_ab1fe617bd471d4650c7.js","corejs":"\/\/vj0.6rooms.com\/mini\/js\/libs\/corejs.3.20.2.js","jq_drag":"\/\/vj0.6rooms.com\/mini\/js\/libs\/jquery-ui-1.12.1.custom.min.js","gift":"\/\/vj0.6rooms.com\/mini\/js\/base\/gift_685.js","gift_new":"\/\/vj0.6rooms.com\/mini\/js\/base\/gift_new_463.js","gift_conf":"\/\/vj0.6rooms.com\/mini\/js\/base\/gift_conf_120.js","sso":"\/\/vj0.6rooms.com\/mini\/js\/base\/sso_21.js","pcgate":"\/\/vr0.6rooms.com\/hao\/vintage\/pcgate_1c5e864ebc1f33831962.js"};

        JSF.pcwebsocket = JRI_HOSTS.vr0 + "/hao/s/pcwebsocket/7d306a88805e9035162b.js";
        JSF.smcp = "//castatic.fengkongcloud.cn/pr/v1.0.4/smcp.min.js";
        JSF.pcwebsocketworker = JRI_HOSTS.vr0 + "/tao/s/dbac4b62573f1fadde97.js";
        if (location.search.indexOf('pcgatedev=1') > -1) {
            JSF.pcgate = 'https://dev-m.6.cn/static/dev/pcgate/pcgate.js';
        }
        $LAB.script(JSF.jq).wait();
        if (self.location.search.indexOf('swdev=6') > -1) {
            $LAB.script('/js/serviceworker.js');
        }