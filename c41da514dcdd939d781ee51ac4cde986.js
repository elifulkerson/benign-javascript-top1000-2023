if (window.performance && window.performance.measure) {
  window.performance.mark("FMP");
  window.performance.measure(
      "Time To First Meaningful Paint",
      "requestStart",
      "FMP"
    );
  window.sendUserTiming("Time To First Meaningful Paint");
}