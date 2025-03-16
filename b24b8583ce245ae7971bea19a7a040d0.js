flash_fe_core_tool.$lazyLoadComponent();//此处为全局滚动条组件懒加载事件
    flash_fe_core_tool.$loggedPopup();
    flash_fe_core_tool.$sitewidealert.init();
    flash_fe_core_tool.$accessibility.handleTabindexOutline();
    flash_fe_core_tool.$error.init();
    if (typeof _satellite !== "undefined") {
        _satellite.pageBottom();
    }