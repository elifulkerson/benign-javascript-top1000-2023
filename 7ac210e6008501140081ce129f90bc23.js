var tmall_ald_cfg = {
        panel: {
            name: 'error_a'
        },
        data: {
            param: {
                appId: "03224",
                count: 5
            },
            preprocess: function (data, callback) {
                if(data['default']){
                    data.def=data['default'];
                    delete data['default'];
                }
                data.def.title="促销/上新活动";
                callback(data);
            }
        },
        view: {
            name: 'row1'
        },
        track: {
            level: 18
        }
    }