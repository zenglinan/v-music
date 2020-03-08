window.addEventListener('load', logData, false);

function logData() {
  let timing = performance.timing
  let time = {}

  let start = timing.fetchStart // 起始时间
  time.dnsTime = 0
  time.connectTime = 0
  time.whitePaintTime = 0
  time.firstPaintTime = 0

  time.dnsTime = timing.domainLookupEnd - timing.domainLookupStart
  time.connectTime = timing.connectEnd - timing.connectStart
  time.firstByte = timing.responseStart - timing.fetchStart
  time.whitePaintTime = timing.domInteractive - start
  time.firstPaintTime = timing.loadEventStart - start

  console.log('页面加载数据统计', time)
}
