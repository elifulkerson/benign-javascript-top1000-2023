window.ds = typeof window.ds == "function" ? window.ds : function(){
                (ds.q = ds.q || []).push(arguments);
                return ds;
            };