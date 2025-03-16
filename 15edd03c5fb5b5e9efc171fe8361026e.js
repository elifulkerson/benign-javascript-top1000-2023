window.__FSP_OPTIONS__ = {
    mode: 'manual',
    // 在容器中要忽略的元素的 class 列表, 比如弹窗我们并不关心, 需要 ignore 掉
    ignoreClasses: [
      'branch-first', // app 引流弹窗
      'c-vue-coupon', // 首页优惠券弹窗
      'c-quick-register', // 注册弹窗
    ],
    // 超时时间 (单位毫秒), 如果用户无操作, 最长多久结算 fsp
    timeout: 10 * 1000,
    // 记录 fsp 时间的阈值下限 (单位毫秒), 低于这个阈值的 fsp 不会上报 (比如fsp 发生在浏览器前进/后退时有缓存的场景, 这种情况下, fsp 一般为一个很小的值, 大概率在 30ms 左右)
    thresholdLower: 100,
    // 记录 fsp 时间的阈值上限 (单位毫秒), 超过这个阈值的 fsp 不会上报
    thresholdUpper: 15 * 1000,
    // 相同场景跳转的采样数量
    sceneSampleCount: 5,
  }