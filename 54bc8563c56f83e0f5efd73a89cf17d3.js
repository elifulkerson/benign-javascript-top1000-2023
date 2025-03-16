$(function () {
  var httpAtUsers = 'https://gateway.jrj.com'
  var httpAtHQIndex = 'https://summary.jrj.com.cn/dataCenter/zdtwdj'
  var timer = null // å¤æ­çåãçä¸­ãçå-å®æ¶å¨
  var plateTimer = null // çä¸­-è·åæ°æ®-å®æ¶å¨
  var $timeEnum = {
    status: 60000, // ç¶æè½®è¯¢1åé
    data: 6000 // æ°æ®è½®è¯¢6ç§
  }
  // æç°æ°æ®
  var dataLine = {
    zt: [],
    dt: []
  }
  // æå¤§å¼å»åº¦å¼
  var maxLine = 0
  // æ¨¡æçå½å¨æå½æ°
  ;(function mounted() {
    getTimeLine()
    getTradedate()
    startPollingTimer()
    startPollingPlateTimer()
  })()
  // æ é¢ç¹å»è·³è½¬
  $('#hq-zdt-title').click(function () {
    window.open(httpAtHQIndex, '_blank')
  })
  // æçº¿å¾ç¹å»è·³è½¬
  $('.zdt-line').click(function () {
    window.open(httpAtHQIndex, '_blank')
  })
  // è¯·æ±å½æ°
  function AxiosRequest(params, resolve, reject) {
    reject = reject ? reject : function () {}
    $.ajax({
      type: 'POST',
      data: JSON.stringify(params.params),
      headers: {
        'content-type': 'application/json'
      },
      url: httpAtUsers + params.url,
      success: function (res) {
        if (res.code == 20000) {
          resolve(res)
        }
      }
    })
  }
  // æ¥å£è¯·æ±å°è£
  function requestHandler(url, params, fn) {
    AxiosRequest(
      {
        url: url,
        params: params
      },
      function (res) {
        fn(res)
      }
    )
  }
  // çæyè½´æ¶é´æ°æ®
  function autoTimeline(start, end) {
    const timeline = []
    const startHour = start.split(':')[0] * 1
    const startMin = start.split(':')[1] * 1
    const endHour = end.split(':')[0] * 1
    const endMin = end.split(':')[1] * 1
    for (let i = startHour; i <= endHour; i++) {
      const start = i === startHour ? startMin : '0'
      const end = i === endHour ? endMin : '59'
      for (let j = start; j <= end; j++) {
        j = j < 10 ? '0' + j : j
        const iStr = i < 10 ? '0' + i : i
        timeline.push(iStr + ':' + j)
      }
    }
    return timeline
  }
  // echartsåå§å
  function initChart() {
    // çææ¨ªåæ æ¶é´è½´
    var beforenoon = autoTimeline('9:30', '11:30')
    var afternoon = autoTimeline('13:00', '15:00')
    beforenoon.splice(beforenoon.length - 1, 1)
    afternoon[0] = '11:30/13:00'
    var timeline = beforenoon.concat(afternoon)
    var myChart = echarts.init($('#zdtMain')[0])
    var option = {
      grid: {
        top: 1,
        left: 0,
        right: 0,
        bottom: 0,
        containLabel: true,
        show: true,
        borderWidth: 1,
        borderColor: '#DADEE8'
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: timeline,
          axisLine: {
            show: true,
            lineStyle: {
              color: '#F5F5F5',
              type: 'solid'
            }
          },
          axisTick: {
            lineStyle: {
              color: '#DADEE8'
            }
          },
          splitLine: {
            lineStyle: {
              color: '#F5F5F5'
            }
          },
          axisLabel: {
            interval: 59,
            textStyle: {
              color: '#000'
            },
            formatter: function (value, index) {
              const str = '         '
              if (index === 0) {
                return str + '09:30'
              } else if (value === '15:00') {
                return '15:00' + str
              } else if (value === '10:30' || value === '14:00') {
                return ''
              } else {
                return value
              }
            },
            textStyle: {
              color: '#000',
              fontSize: 10
            }
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          min: 0,
          max: maxLine,
          interval: maxLine / 3,
          splitLine: {
            lineStyle: {
              color: '#F5F5F5'
            }
          },
          axisLabel: {
            textStyle: {
              fontSize: 11,
              color: '#898989'
            },
            inside: true,
            margin: 0,
            overflow: 'breakAll',
            formatter: function (value, index) {
              value = parseInt(value)
              if (index === 3) {
                return ' \n' + value
              } else if (value === 0) {
                return value + '\n '
              } else {
                return value
              }
            }
          },
          axisTick: false,
          axisLine: false
        }
      ],
      series: [
        {
          name: 'æ¶¨åæ°',
          type: 'line',
          showSymbol: false,
          color: '#f54949',
          itemStyle: {
            normal: {
              lineStyle: {
                width: 1
              }
            }
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(192,22,57,0.3)'
                },
                {
                  offset: 1,
                  color: 'rgba(255,255,255,0.3)'
                }
              ]
            }
          },
          emphasis: {
            focus: 'series'
          },
          data: dataLine.zt
        },
        {
          name: 'è·åæ°',
          type: 'line',
          showSymbol: false,
          color: '#21ba7d',
          itemStyle: {
            normal: {
              lineStyle: {
                width: 1
              }
            }
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(33,186,125,0.3)'
                },
                {
                  offset: 1,
                  color: 'rgba(255,255,255,0.3)'
                }
              ]
            }
          },
          emphasis: {
            focus: 'series'
          },
          data: dataLine.dt
        }
      ],
      graphic: [
        {
          type: 'image',
          id: 'logo',
          right: 'center',
          top: 57,
          z: 1,
          bounding: 'all',
          style: {
            image: 'https://static.jrj.com.cn/resource/web/chart_logo.png',
            width: 78,
            height: 32
          }
        }
      ]
    }
    option && myChart.setOption(option, true)
  }
  // æ°æ®å¤ç
  function splitData(val) {
    dataLine = {
      zt: [],
      dt: []
    }
    for (var i = 0; i < val.length; i++) {
      let v = val[i]
      dataLine.zt.push(v.zt)
      dataLine.dt.push(v.dt)
    }
    // maxLine = parseInt(Math.max(...dataLine.zt, ...dataLine.dt) * 1.2) + 5
    maxLine = parseInt(Math.max.apply(null,dataLine.zt.concat(dataLine.dt)) * 1.2) + 5
    initChart()
  }
  // è·åæçº¿å¾æ°æ®
  function getTimeLine() {
    // æ¶¨è·åç´çº¿å¾æ°æ®
    requestHandler('/quot-dc/zdt/market_timeline', {}, function (res) {
      if (res.code == 20000) {
        let result = res.data
        if (result && result.timeline.length > 0) {
          // è®¾ç½®æ¶¨è·å®¶æ°
          $('#zt-num').html(result.timeline[result.timeline.length - 1].zt)
          $('#dt-num').html(result.timeline[result.timeline.length - 1].dt)
        }
        splitData(result.timeline)
      }
    })
  }
  // å¼å§è½®è¯¢ç¶æ
  function startPollingTimer() {
    endPollingTimer()
    timer = setInterval(function () {
      getTradedate()
    }, $timeEnum.status)
  }
  // å¼å§è½®è¯¢æ°æ®æ´æ°
  function startPollingPlateTimer() {
    endPollingPlateTimer()
    plateTimer = setInterval(function () {
      getTimeLine()
    }, $timeEnum.data)
  }
  // æ¸é¤è½®è¯¢
  function endPollingTimer() {
    clearInterval(timer)
    timer = null
  }
  function endPollingPlateTimer() {
    clearInterval(plateTimer)
    plateTimer = null
  }
  // è·åå½åäº¤ææ¥åäº¤æç¶æ
  function getTradedate() {
    requestHandler('/quot-feed/tradedate', {}, function (res) {
      var data = res.data
      if (res.code == 20000) {
        $mkt_sts = data.mkt_sts
        // å½åäº¤ææ¥åäº¤æç¶æ 1-å·²æ¶ç, 2-æªå¼ç, 3-éåç«ä»·, 4-ç­å¾å¼çï¼5-äº¤æä¸­, 6-åä¼ï¼9-çåäº¤æ
        // çå
        if (data.mkt_sts === 1) {
          if (plateTimer) {
            endPollingPlateTimer('plateTimer')
          }
        } else {
          if (!plateTimer) {
            startPollingPlateTimer('plateTimer')
          }
        }
      }
    })
  }
})
