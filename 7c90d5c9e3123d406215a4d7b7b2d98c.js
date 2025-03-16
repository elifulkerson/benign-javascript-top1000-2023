$(function () {
  var httpAtUsers = "https://gateway.jrj.com";
  var httpAtHQIndex = "https://summary.jrj.com.cn";
  var timeSharing = [
    {
      title: "ä¸è¯ææ°",
      sid: 1000001,
      mkt: 1,
      code: "000001",
      start: 0,
      domId: "sh-stock",
      xAxis: [],
      series: [],
      data: { xAxis: [], series: [] },
    },
    {
      title: "æ·±è¯ææ",
      sid: 2399001,
      mkt: 2,
      code: 399001,
      start: 0,
      domId: "sz-stock",
      xAxis: [],
      series: [],
      data: { xAxis: [], series: [] },
    },
    {
      title: "åä¸æ¿æ",
      sid: 2399006,
      mkt: 2,
      code: 399006,
      start: 0,
      domId: "cy-stock",
      xAxis: [],
      series: [],
      data: { xAxis: [], series: [] },
    },
    {
      title: "ç§å50",
      sid: 1000688,
      mkt: 1,
      code: "000688",
      start: 0,
      domId: "zz-stock",
      xAxis: [],
      series: [],
      data: { xAxis: [], series: [] },
    },
  ];

  var timer = null; // å¤æ­çåãçä¸­ãçå-å®æ¶å¨
  var plateTimer = null; // çä¸­-è·åæ°æ®-å®æ¶å¨
  var $timeEnum = {
    status: 60000, // ç¶æè½®è¯¢1åé
    data: 6000, // æ°æ®è½®è¯¢6ç§
  };
  var $EMarket = {
    1: "sh",
    2: "sz",
    3: "bj",
    4: "zz",
    5: "gz",
    sh: 1,
    sz: 2,
    bj: 3,
    zz: 4,
    gz: 5,
  };
  var $mkt_sts = 0; // å½åäº¤æç¶æ
  var $td = 0; // å½åæ¶é´ä¿¡æ¯
  var clearChart = null; // æ¯å¦æ¸ç

  var tabActive = 0; // å½åå±ç¤ºçè¡æå¾
  var minLine = 0; // æå°å»åº¦
  var maxLine = 0; // æå¤§å»åº¦
  var interval = 0; // é´é
  var stockMain = $(".stockMain");

  // æ¨¡æçå½å¨æå½æ°
  (function mounted() {
    getTimeSharing(function (index) {
      changeEcharts(); //
      renderHandler(index);
    });
    getTradedate();
    startPollingTimer();
    startPollingPlateTimer();
  })();

  // æ é¢ç¹å»è·³è½¬
  $("#hqzx_index").click(function () {
    window.open(httpAtHQIndex, "_blank");
  });

  // è¯·æ±å½æ°
  function AxiosRequest(params, resolve, reject) {
    reject = reject ? reject : function () {};
    $.ajax({
      type: "POST",
      data: JSON.stringify(params.params),
      headers: {
        "content-type": "application/json",
      },
      url: httpAtUsers + params.url,
      success: function (res) {
        if (res.code == 20000) {
          resolve(res);
        }
      },
    });
  }

  function requestHandler(url, params, fn) {
    AxiosRequest(
      {
        url: url,
        params: params,
      },
      function (res) {
        fn(res);
      }
    );
  }

  // ææ°æ¸²æ
  function lineInterval(index) {
    var close = timeSharing[index].close; // æ¨æ¶
    var highest = timeSharing[index].highest; // æé«
    var lowest = timeSharing[index].lowest; // æä½
    var Max = Math.max(Math.abs(close - highest), Math.abs(close - lowest));
    maxLine = close - 0 + Max;
    minLine = close - 0 - Max;

    var baseNumber = Number(timeSharing[index].close).toFixed(2);
    interval = Math.abs(Number((baseNumber - minLine) / 2));
  }

  // æ¥æ¶
  function autoTimeline(start, end) {
    var timeline = [];
    var startHour = start.split(":")[0] * 1;
    var startMin = start.split(":")[1] * 1;
    var endHour = end.split(":")[0] * 1;
    var endMin = end.split(":")[1] * 1;
    for (var i = startHour; i <= endHour; i++) {
      var start = i === startHour ? startMin : "0";
      var end = i === endHour ? endMin : "59";
      for (var j = start; j <= end; j++) {
        j = j < 10 ? "0" + j : j;
        timeline.push(i + ":" + j);
      }
    }
    return timeline;
  }

  // echartsåå§å
  function initChart(dom, index) {
    lineInterval(index);
    // çææ¨ªåæ æ¶é´è½´
    var beforenoon = autoTimeline("9:30", "11:30");
    var afternoon = autoTimeline("13:00", "15:00");
    beforenoon.splice(beforenoon.length - 1, 1);
    afternoon[0] = "11:30/13:00";
    var timeline = beforenoon.concat(afternoon);
    var myChart = echarts.init(dom);
    var option = {
      grid: {
        left: 0,
        right:
          (46 / 6) * Number(timeSharing[index].close).toFixed(2).length - 1,
        // right: 60,
        top: 10,
        bottom: 18,
      },
      // tooltip: {
      //   trigger: 'axis',
      //   axisPointer: {
      //     type: 'line',
      //     lineStyle: {
      //       color: '#c01639',
      //       type: 'solid'
      //     }
      //   },
      //   valueFormatter(value) {
      //     return value.toFixed(2)
      //   }
      // },
      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          data: timeline,
          // data: ['9:00', '10:30', '11:30/13:00', '14:00', '15:00'],
          // ç½æ ¼çº¿
          splitLine: {
            show: true,
            lineStyle: {
              // type: 'dashed',
              color: "#e5e5e5",
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: true,
            interval: 59, // ä¸è½å¨
            formatter: function (value, index) {
              var str = "        ";
              if (value === "9:30") {
                return str + "9:30";
              }
              if (value === "15:00") {
                return "15:00" + str;
              }
              if (value === "10:30" || value === "14:00") {
                return "";
              } else {
                return value;
              }
            },
            textStyle: {
              color: "#000",
              fontSize: 10,
            },
          },
          // è½´çº¿
          axisLine: {
            show: true,
            lineStyle: {
              color: "#e5e5e5",
              type: "solid",
            },
          },
        },
      ],
      yAxis: [
        {
          position: "right",
          type: "value",
          interval: interval,
          min: minLine,
          max: maxLine,
          minorTick: {
            show: true,
          },
          minorSplitLine: {
            show: true,
          },
          axisLabel: {
            color: "#999",
            textStyle: {
              fontSize: 11,
              fontWeight: 400,
              // è®¾ç½®åæ®µé¢è²
              color: function (v) {
                var close = parseFloat(timeSharing[index].close).toFixed(2);
                var value = parseFloat(v).toFixed(2);
                return value >= 0 && value < close
                  ? "rgba(33, 186, 125, 1)"
                  : value === close
                  ? "rgba(0,0,0,1)"
                  : "rgba(192, 22, 57, 1)";
              },
            },
            formatter: function (value) {
              return value.toFixed(2);
            },
          },
          axisTick: false,
          axisLine: false,
          // ç½æ ¼çº¿
          splitLine: {
            show: true,
            lineStyle: {
              color: "#e5e5e5",
              // type: 'dashed'
            },
          },
          // // è½´çº¿
          // axisLine: {
          //   show: true,
          //   lineStyle: {
          //     color: '#e5e5e5',
          //     type: 'solid'
          //   }
          // }
        },
      ],
      series: [
        {
          type: "line",
          // data: [],
          data: timeSharing[index].series,
          showSymbol: false,
          smooth: true,
          symbol: "circle",
          color: "rgba(74, 130, 255,0.7)",
          itemStyle: {
            normal: {
              lineStyle: {
                width: 1,
              },
            },
          },
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "rgba(74,130,255,0.2)",
                },
                // {
                //   offset: 0.5,
                //   color: 'rgba(255,255,255,0.2)'
                // },
                {
                  offset: 1,
                  color: "rgba(255,255,255,0)",
                },
              ],
            },
          },
        },
      ],
    };
    option && myChart.setOption(option, true);
  }

  //
  function renderHandler(index) {
    // sh-stock sz-stock cy-stock zz-stock
    var dom = $("#" + timeSharing[index].domId);
    if (dom) {
      initChart(dom[0], index);
    }
  }

  function getTimeSharing(fn) {
    var timeSharingInfo = [];
    // ä¸è¯ææ°1000001 æ·±è¯ææ2399001 åä¸æ¿æ2399006 ç§å50 1000688
    var timeStokeIds = [1000001, 2399001, 2399006, 1000688];
    // ä¸ªè¡è¯¦æ-å¿«ç§ãçå£ç­
    requestHandler(
      "/quot-feed/hqs",
      {
        env: [1, 2, 4],
        stocks: timeStokeIds,
      },
      function (res) {
        if (res.code == 20000) {
          timeSharingInfo = res.data.hqs;
          for (var index = 0; index < timeSharing.length; index++) {
            (function (index) {
              var item = timeSharing[index];
              var findCode = index;
              item.data.newPrice = timeSharingInfo[findCode].ssp.np; // ææ°ä»·
              item.data.changAmount = timeSharingInfo[findCode].ssp.chg; // æ¶¨è·é¢
              item.data.changRange = timeSharingInfo[findCode].ssp.chgr; // æ¶¨è·å¹
              item.data.amount = timeSharingInfo[findCode].esp.amt; // æäº¤é¢
              item.data.upNum = timeSharingInfo[findCode].bsp.unum; // ä¸æ¶¨è¡ç¥¨æ°
              item.data.eqNum = timeSharingInfo[findCode].bsp.eqnum; // æå¹³è¡ç¥¨æ°
              item.data.downNum = timeSharingInfo[findCode].bsp.dnum; // ä¸è·è¡ç¥¨æ°

              timeSharing[index] = item;

              // åä¸ª-åæ¶å¾
              requestHandler(
                "/quot-feed/rtmin",
                {
                  sid: item.sid,
                  start: item.start,
                  // start: 0,
                },
                function (res2) {
                  if (res2.code == 20000) {
                    var xAxis = [];
                    var series = [];
                    var mins = res2.data.mins;

                    var cls = res2.data.lcp; // æ¨æ¶
                    var hst = res2.data.hp; // æé«
                    var lst = res2.data.lp; // æä½

                    // å¦ææä½æé«é½ç­äºæ¨æ¶ï¼é»è®¤ç»2%æµ®å¨
                    if (cls == hst && cls == lst) {
                      hst = (cls - 0) * 0.02;
                      lst = (cls - 0) * 0.02;
                    }

                    var echartObj = {
                      close: cls, // æ¨æ¶
                      highest: hst, // æé«
                      lowest: lst, // æä½
                    };

                    // è§£æèµå¼ æ°æ®æèµ·æ¥
                    var newData = {};
                    for (var eOI in echartObj) {
                      newData[eOI] = echartObj[eOI];
                    }
                    for (var tI in timeSharing[index]) {
                      newData[tI] = timeSharing[index][tI];
                    }

                    // éæ°èµå¼
                    timeSharing[index].close = echartObj.close;
                    timeSharing[index].highest = echartObj.highest;
                    timeSharing[index].lowest = echartObj.lowest;
                    // timeSharing[index].xAxis = echartObj.xAxis;
                    // timeSharing[index].series = echartObj.series;

                    // æ´æ°åæ¶å¾
                    if (mins.length > 0) {
                      for (var index2 = 0; index2 < mins.length; index2++) {
                        var tm = mins[index2].tm + "";
                        var time =
                          tm.length === 5
                            ? tm.slice(0, 1) + ":" + tm.slice(1, 3)
                            : tm.slice(0, 2) + ":" + tm.slice(2, 4);

                        xAxis.push(time);
                        series.push(mins[index2].px);
                      }

                      // è½®è¯¢å°±è¿½å 
                      if (item.start !== 0 && mins.length > 0) {
                        xAxis = timeSharing[index].xAxis.concat(xAxis);
                        series = timeSharing[index].series.concat(series);
                      }
                      echartObj.xAxis = xAxis;
                      echartObj.series = series;

                      // éæ°èµå¼
                      timeSharing[index].series = echartObj.series;
                      timeSharing[index].xAxis = echartObj.xAxis;
                      // sh-stock sz-stock cy-stock zz-stock
                      // changeEcharts(); //
                      // renderHandler(index);
                    } else if (clearChart) {
                      // æ¸ç
                      timeSharing[index].xAxis = xAxis;
                      timeSharing[index].series = series;
                    }
                    item.start = timeSharing[index].xAxis.length;
                    fn(index);
                  }
                }
              );
            })(index);
          }
        }
      }
    );
  }

  // å¼å§è½®è¯¢æ¥å£1
  function startPollingTimer() {
    endPollingTimer();
    timer = setInterval(function () {
      getTradedate();
    }, $timeEnum.status);
  }

  // å¼å§è½®è¯¢æ¥å£2
  function startPollingPlateTimer() {
    endPollingPlateTimer();
    plateTimer = setInterval(function () {
      getTimeSharing(function (index) {
        changeEcharts(); //
        renderHandler(index);
      });
    }, $timeEnum.data);
  }

  // // å¼å§è½®è¯¢
  // function startPolling(name, time) {
  //   var _name = name;
  //   if (!time) time = $timeEnum.data;
  //   window.clearInterval("timer");
  //   window.clearInterval("plateTimer");
  //   clearInterval("timer");
  //   clearInterval("plateTimer");
  //   timer = null;
  //   plateTimer = null;
  //   name = window.setInterval(function () {
  //     // setTimeout(function () {
  //     if (_name === "timer") {
  //       getTradedate();
  //     } else {
  //       getTimeSharing(function (index) {
  //         changeEcharts(); //
  //         renderHandler(index);
  //       });
  //     }
  //     // }, 0);
  //   }, time);
  // }

  // æ¸é¤è½®è¯¢
  function endPollingTimer() {
    clearInterval(timer);
    timer = null;
    // window.clearInterval([name]);
    // [name] = null;
  }
  function endPollingPlateTimer() {
    clearInterval(plateTimer);
    plateTimer = null;
    // window.clearInterval([name]);
    // [name] = null;
  }

  // è·åå½åäº¤ææ¥åäº¤æç¶æ
  function getTradedate() {
    requestHandler("/quot-feed/tradedate", {}, function (res) {
      var data = res.data;
      if (res.code == 20000) {
        $mkt_sts = data.mkt_sts;

        if ($td !== data.td && clearChart !== null) {
          clearChart = true;
        } else {
          clearChart = false;
        }

        $td = data.td;

        // å½åäº¤ææ¥åäº¤æç¶æ 1-å·²æ¶ç, 2-æªå¼ç, 3-éåç«ä»·, 4-ç­å¾å¼çï¼5-äº¤æä¸­, 6-åä¼ï¼9-çåäº¤æ
        // çå
        if (data.mkt_sts === 1) {
          if (plateTimer) {
            endPollingPlateTimer("plateTimer");
          }
        } else {
          if (!plateTimer) {
            startPollingPlateTimer("plateTimer");
          }
        }
      }
    });
  }
  // // æ é¢
  // $("#quotation_stock_line .domId").html(timeSharing[tabActive].title);
  // è¡æå¾ç¹å»
  hq_echarts_href();
  function hq_echarts_href() {
    for (var i = 0; i < stockMain.length; i++) {
      stockMain[i].onclick = function (event) {
        var row = {
          mkt: timeSharing[tabActive].mkt,
          stockCode: timeSharing[tabActive].code,
        };
        // var { href } = this.$router.resolve({
        //   path: "/stock/" + $EMarket[row.mkt] + "/" + row.stockCode,
        // });
        var stock_path =
          httpAtHQIndex + "/stock/" + $EMarket[row.mkt] + "/" + row.stockCode;
        window.open(stock_path, "_blank");
      };
    }
  }

  // tofiex(2)
  function toFixed2(value) {
    if (!value && value !== 0) {
      return "";
    }
    return Number(value).toFixed(2);
  }

  // Percent
  function Percent(value) {
    if (value === "--") {
      return value;
    }
    if (!value && value !== 0) {
      return "";
    }
    const str = (Number(value) * 100).toFixed(2) + "%";

    return value > 0 ? "+" + str : str;

    // if (!value && value !== 0) {
    //   return "";
    // }
    // return (Number(value) * 100).toFixed(2) + "%";
  }

  // åæ¢å¾è¡¨
  function changeEcharts() {
    var chartData = timeSharing[tabActive];
    var data = chartData.data;
    stockMain.eq(tabActive).show();

    // <!-- ããæ¶¨è·å¹ãæäº¤éé¢ãææ°åæ¶å¾ãä¸æ¶¨è¡ç¥¨æ°ãæå¹³è¡ç¥¨æ°ãä¸è·è¡ç¥¨æ° -->
    // å½åä»·
    var newPriceDom = $("#quotation_stock_line .newPrice");
    newPriceDom.html(toFixed2(data.newPrice));
    // æ¶¨è·
    var changDom = $("#quotation_stock_line .changAmount");
    var changAmount = toFixed2(data.changAmount); // æ¶¨è·é¢
    var changRange = Percent(data.changRange); // æ¶¨è·å¹
    changDom.html(changAmount + "ï¼" + changRange + "ï¼");

    // mkt_sts=2æªå¼ç
    // ææ°ä»·
    if (data.newPrice == 0 || data.newPrice == chartData.close) {
      newPriceDom.eq(0).removeClass("up").removeClass("down");
    } else if (data.newPrice > chartData.close) {
      newPriceDom.eq(0).removeClass("down");
      newPriceDom.eq(0).addClass("up");
    } else {
      newPriceDom.eq(0).addClass("down");
      newPriceDom.eq(0).removeClass("up");
    }
    // æ¶¨è·
    if (data.changAmount == 0) {
      changDom.eq(0).removeClass("up").removeClass("down");
    } else if (data.changAmount > 0) {
      changDom.eq(0).removeClass("down");
      changDom.eq(0).addClass("up");
    } else {
      changDom.eq(0).addClass("down");
      changDom.eq(0).removeClass("up");
    }
  }

  // ææ°tabåæ¢
  hqzx_tab();
  function hqzx_tab() {
    var zs_span = $("#hqzx_zst span");
    // å¾ªç¯ç»å®äºä»¶
    for (var i = 0; i < zs_span.length; i++) {
      stockMain.eq(i).hide();
      zs_span[i].onclick = function (event, i) {
        // å¾ªç¯å é¤class
        for (var j = 0; j < zs_span.length; j++) {
          zs_span[j].className = "";
          zs_span.eq(j).removeClass("active");
          stockMain.eq(j).hide();
        }
        event.target.className = "active";
        // tabActive å½åéä¸­ä¸æ 
        tabActive = event.target.id - 1;
        changeEcharts();
      };
    }
  }
});
