$(function () {
        var $stickybarUrl = "//j1-ofp.static.pub/SystemFragment/global/stickybar/stickybar.min.3568cabe2a6c1716.js";
        flash_fe_core_tool.$AsyncLoadFileManagement.load($stickybarUrl).then(res=>{
            LeStickyBar();
        }).catch(err=>{
            console.warn("stickybar.js loading error",err)
        })
    })