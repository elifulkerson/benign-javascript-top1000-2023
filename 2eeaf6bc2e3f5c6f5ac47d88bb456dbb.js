window.Trip_Index_Event = (function(){
        var events = {}
        function On( Evt , handler){
            events[Evt] = []
            events[Evt].push({
                handler: handler
            })
        }
        function Execute( evt, args){
            if (!events[evt]) {
                return
            }else{
                for (var i = 0, max = events[evt].length; i < max; i++) {
                    events[evt][i].handler(args)
                }
            }
        }
        return {
            On: On,
            Execute: Execute
        }
    })()
    if (typeof window.ctrip_assit_onload_arr!="undefined"){
        window.ctrip_assit_onload_arr.push(ctrip_assit_onload)
    }else {
        window.ctrip_assit_onload_arr=[]
        window.ctrip_assit_onload_arr.push(ctrip_assit_onload)
    }

    if(typeof window.ctrip_assit_unonload_arr!="undefined"){
        window.ctrip_assit_unonload_arr.push(ctrip_assit_unonload)
    }else {
        window.ctrip_assit_unonload_arr=[]
        window.ctrip_assit_unonload_arr.push(ctrip_assit_unonload)
    }
    function ctrip_assit_onload() {
        console.log('ctrip_assit_onload')
        window.Trip_Index_Event.Execute("assitShow", true);
    }
    function ctrip_assit_unonload(){
        console.log('ctrip_assit_unonload')
        window.Trip_Index_Event.Execute("assitShow", false);
    }
    var element = document.getElementById('pc_home_right_content');
    if (element && Stickyfill) {
        Stickyfill.addOne(element);
    }