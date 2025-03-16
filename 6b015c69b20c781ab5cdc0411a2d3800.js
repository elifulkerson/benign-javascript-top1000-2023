(function ($) {
  var tgList = [
    //统一调用定制top皮肤js
    {
      tid: "#gsTopJs",
      url: "game/gs.top.all.js",
    },
    //首页Top通栏
    {
      tid: "#top_index_660",
      url: "banner/top_index_660.js",
    },
    //首页背景
    {
      tid: "#back_index1100_all",
      url: "background/back_index1100_all.js",
    },
    {
      tid: "#index_fugai_900",
      url: "fugai/index_fugai_900.js",
    },
    {
      tid: "#index_siye",
      url: "common/index_siye.js",
    },
    {
      tid: "#index_tips",
      url: "tips/index_tips.js",
    },
    {
      tid: "#index_new_tips",
      url: "tips/index_new_tips.js",
    },
    {
      tid: "#index_left_ad",
      url: "common/index_left_ad.js",
    },
    {
      tid: "#index_xiaya",
      url: "fugai/index_xiaya.js",
    },
    {
      tid: "#index_xiaya_swf",
      url: "background/index_xiaya_swf.js",
    },
    {
      tid: "#adscontainer_banner_new_top_index_1060_1",
      url: "banner/new_top_index_1060_1.js",
    },
    {
      tid: "#adscontainer_banner_new_top_index_1060_2",
      url: "banner/new_top_index_1060_2.js",
    },
    {
      tid: "#adscontainer_banner_new_top_index_1060_3",
      url: "banner/new_top_index_1060_3.js",
    },
    {
      tid: "#common_huandeng",
      url: "common/huandeng.js",
    },
    {
      tid: "#adscontainer_www_index_feturegame",
      url: "www/index_feturegame.js",
    },
    {
      tid: "#common_qtz",
      url: "common/qtz.js",
    },
    {
      tid: "#adscontainer_banner_new_second_index_1060",
      url: "banner/new_second_index_1060.js",
    },
    {
      tid: "#adscontainer_banner_new_middle_index_1060_1",
      url: "banner/new_middle_index_1060_1.js",
    },
    {
      tid: "#adscontainer_banner_new_middle_index_1060_2",
      url: "banner/new_middle_index_1060_2.js",
    },
    {
      tid: "#adscontainer_banner_new_middle_index_1060_3",
      url: "banner/new_middle_index_1060_3.js",
    },
    {
      tid: "#adscontainer_banner_new_middle_index_1060_4",
      url: "banner/new_middle_index_1060_4.js",
    },
    {
      tid: "#adscontainer_banner_new_middle_index_1060_5",
      url: "banner/new_middle_index_1060_5.js",
    },
    {
      tid: "#adscontainer_banner_new_bottom_index_1060",
      url: "banner/new_bottom_index_1060.js",
    },
    //新——全站通栏1
    {
      tid: "#new_top_allsite_970_1",
      url: "banner/new_top_allsite_970_1.js",
    },
    //新——全站通栏2
    {
      tid: "#new_top_allsite_970_2",
      url: "banner/new_top_allsite_970_2.js",
    },
    //新——全站通栏3
    {
      tid: "#new_top_allsite_970_3",
      url: "banner/new_top_allsite_970_3.js",
    },
    //全站通栏1
    {
      tid: "#top_allsite_950_1",
      url: "banner/top_allsite_950_1.js",
    },
    //全站通栏2
    {
      tid: "#top_allsite_950_2",
      url: "banner/top_allsite_950_2.js",
    },
    //全站通栏3
    {
      tid: "#top_allsite_950_3",
      url: "banner/top_allsite_950_3.js",
    },
    //全站顶部横幅
    {
      tid: "#top_allsite_660",
      url: "banner/top_allsite_660.js",
    },
    //动漫全站顶部通栏
    {
      tid: "#top_allsite_acg_660",
      url: "banner/top_allsite_acg_660.js",
    },
    //动漫内页一屏通栏
    {
      tid: "#new_top_allsite_acg_970_1",
      url: "banner/new_top_allsite_acg_970_1.js",
    },
    //手游内页一屏通栏
    {
      tid: "#new_top_shouyou_970",
      url: "banner/new_top_shouyou_970.js",
    },
    //视频内页一屏通栏1
    {
      tid: "#new_top_allsite_video_1100_1",
      url: "banner/new_top_allsite_video_1100_1.js",
    },
    //新——频道通栏1
    {
      tid: "#top_pd_1060_1",
      url: "banner/top_pd_1060_1.js",
    },
    //steam专区首页一屏通栏1
    {
      tid: "#steam_1000_1",
      url: "banner/steam_1000_1.js",
    },
    //专区通栏--暗黑3
    {
      tid: "#zq_970_n_ah3",
      url: "common/zq_970_n_ah3.js",
    },
    //内容页分页Banner
    {
      tid: "#new_page_allsite_620",
      url: "banner/new_page_allsite_620.js",
    },
    //硬件频道通栏1
    {
      tid: "#hardware_top_950_1",
      url: "banner/hardware_top_950_1.js",
    },
    //下载诱导v2
    {
      tid: "#common_down_info",
      url: "common/down_info.js",
    },
    //下载频道内容页中部横幅
    {
      tid: "#banner_down_link",
      url: "banner/down_link.js",
    },
    //新——PC频道首页覆盖
    {
      tid: "#pc_fugai_900",
      url: "fugai/pc_fugai_900.js",
    },
    //动漫内容页背景
    {
      tid: "#tgs_back_acg460",
      url: "background/back_acg460.js",
    },
    //手游内容页背景
    {
      tid: "#tgs_back_shouyou460",
      url: "background/back_shouyou460.js",
    },
    //下载内容页背景（含攻略）-新
    {
      tid: "#tgs_back_down1000",
      url: "background/back_down1000.js",
    },
    //下载频道首页背景
    {
      tid: "#tgs_back_index1100_down",
      url: "background/back_index1100.down.js",
    },
    //频道首页背景
    {
      tid: "#tgs_back_index1100",
      url: "background/back_index1100.js",
    },
    //PC频道首页背景
    {
      tid: "#tgs_back_index1100_pc",
      url: "background/back_index1100.pc.js",
    },
    //专区频道首页背景
    {
      tid: "#tgs_back_index1100_zq",
      url: "background/back_index1100.zq.js",
    },
    //列表页背景（与专区页背景一致）
    {
      tid: "#tgs_back_list1100",
      url: "background/back_list1100.js",
    },
    //资讯频道内容页背景
    {
      tid: "#tgs_back_news960",
      url: "background/back_news960.js",
    },
    //资讯频道内容页背景-新
    {
      tid: "#tgs_back_news1000",
      url: "background/back_news1000.js",
    },
    //文库娱乐内容页背景
    {
      tid: "#tgs_back_zatan1000",
      url: "background/back_zatan1000.js",
    },
    //专区页背景V4
    {
      tid: "#tgs_back_zq1000",
      url: "background/back_zq1000.js",
    },
    //专区页背景(三国志)V4
    {
      tid: "#tgs_back_zq1000_sg",
      url: "background/back_zq1000_sg.js",
    },
    //专区通栏1
    {
      tid: "#gsincome_zq_zq_950_n",
      url: "common/zq_950_n.js",
    },
    //专区通栏2
    {
      tid: "#gsincome_zq_600",
      url: "common/zq_600.js",
    },
    //专区右侧方块1
    {
      tid: "#gsincome_zq_right_300_1",
      url: "common/zq_right_300_1.js",
    },
    //专区右侧方块2
    {
      tid: "#gsincome_zq_right_300_2",
      url: "common/zq_right_300_2.js",
    },
    //专区页背景
    {
      tid: "#background_back_zq950",
      url: "background/back_zq950.js",
    },
    //新——专区页覆盖
    {
      tid: "#fugai_zq_fugai_900",
      url: "fugai/zq_fugai_900.js",
    },
    //新——专区通栏1
    {
      tid: "#gsincome_zq_970_n",
      url: "common/zq_970_n.js",
    },
    //新——专区通栏2
    {
      tid: "#gsincome_zq_600_new",
      url: "common/zq_600_new.js",
    },
    //专区页背景-自动
    {
      tid: "#background_back_zq_auto",
      url: "background/back_zq_auto.js",
    },
    //S专区通栏1
    {
      tid: "#gsincome_szq_1160",
      url: "common/szq_1160.js",
    },
    //S专区通栏2
    {
      tid: "#gsincome_szq_835",
      url: "common/szq_835.js",
    },
    //下载内容页背景
    {
      tid: "#tgs_back_down960",
      url: "background/back_down960.js",
    },
    //首页一屏通栏1-联动横幅
    {
      tid: "#adscontainer_banner_new_top_index_1060_1",
      url: "banner/new_top_index_1060_1_ld.js",
    },
    //首页一屏通栏2-联动横幅
    {
      tid: "#adscontainer_banner_new_top_index_1060_2",
      url: "banner/new_top_index_1060_2_ld.js",
    },
    //首页一屏通栏3-联动横幅
    {
      tid: "#adscontainer_banner_new_top_index_1060_3",
      url: "banner/new_top_index_1060_3_ld.js",
    },
    //专栏内页一屏通栏1
    {
      tid: "#zl_content_top_1100_1",
      url: "banner/zl_content_top_1100_1.js",
    },
    //下载频道内容页下载引导(新版诱导)
    {
      tid: "#common_down_news",
      url: "common/down_content_news.js",
    },
    //下载频道内容页下载引导(旧版诱导)
    {
      tid: "#common_down_old",
      url: "common/down_content_old.js",
    },
    //下载单机频道通栏
    {
      tid: "#down_pc_top_1060",
      url: "banner/down_pc_top_1060.js",
    },
    //逆水寒专区头部通栏
    {
      tid: "#nsh_z_top_1100",
      url: "banner/nsh_z_top_1100.js",
    },
    //特殊专区页-怪物猎人-通栏
    {
      tid: "#zq_mhworld_650_n",
      url: "banner/zq_mhworld_650_n.js",
    },
    //特殊专区内容页-全境封锁2-底部
    {
      tid: "body",
      url: "common/content_zdyd.js",
    },
    //硬件频道右侧方块1
    {
      tid: "#T300_hardware",
      url: "www/T300_hardware.js",
    },
    //内容页右侧方块1
    {
      tid: "#adscontainer_block_300_1",
      url: "block/news_content_300_1.js",
    },
    //内容页右侧方块2
    {
      tid: "#adscontainer_block_300_2",
      url: "block/news_content_300_2.js",
    },
    //内容页右侧方块3
    {
      tid: "#adscontainer_block_300_3",
      url: "block/news_content_300_3.js",
    },
    //内容页右侧方块4
    {
      tid: "#adscontainer_block_300_4",
      url: "block/news_content_300_4.js",
    },
    //动漫内容页右侧方块3
    {
      tid: "#gsincome_acg_right_300_3",
      url: "common/acg_right_300_3.js",
    },
    //内容页右侧方块2-杂谈
    {
      tid: "#gsincome_www_a300_2_zatan",
      url: "block/gsincome_www_a300_2_zatan.js",
    },
    //内容页右侧方块1——下载页
    {
      tid: "#gsincome_www_a300_1_down",
      url: "block/gsincome_www_a300_1_down.js",
    },
    //下载频道内容页地址右侧方块
    {
      tid: "#down_right_218_364",
      url: "common/down_right_218_364.js",
    },
  ];

  $.cachedScript(
    "//ja2.gamersky.com/common/HeteromorphicCover.js?v=" + dateFtt({ f: 10 })
  );
  //首页浮动按钮
  $.cachedScript(
    "//ja2.gamersky.com/common/HomePageFloatingButton.js?v=" +
      dateFtt({ f: 10 })
  );
  //下载站百度广告联盟
  $.cachedScript(
    "//down.gamersky.com/ja/common/DownloadButtonNetunion.js?v=" +
      dateFtt({ f: 10 })
  );
  //自定义今日值得买
  $.cachedScript(
    "//ja2.gamersky.com/common/FhAdEdit.js?v=" + dateFtt({ f: 10 })
  );
  // Cps曝光统计
  $.cachedScript(
    "//ja2.gamersky.com/common/IntermodalExposureStatistics.js?v=" +
      dateFtt({ f: 10 })
  );

  //全站广告统一调用方法PC
  $.cachedScript(
    "//ja2.gamersky.com/gs.common.income.js?v=" + dateFtt({ f: 10 })
  ).done(function () {
    for (var i = 0; i < tgList.length; i++) {
      if ($(tgList[i].tid).length > 0) {
        $.cachedScript(
          "//ja2.gamersky.com/" + tgList[i].url + "?v=" + dateFtt({ f: 10 })
        );
      }
    }
  });
})(jQuery);