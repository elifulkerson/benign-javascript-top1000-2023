(function () {
    var q = new URLSearchParams(window.location.search)
    var args =  {} 
    if (q.get('s')) args.social = q.get('s')
    if (q.get('f')) args.from = q.get('f')
    if (q.get('c')) args.click_id = q.get('c')
    if (q.get('p')) args.promo = q.get('p')

    CTTR.init({
      
      landing_id: 9,
      landing_name: "cb",
      args: args,

      onInit (trackData, error) {
        if (error) {
          dataLayer.push({ 'event': 'pageview'})
        } else {
          dataLayer.push({ 'event': 'pageview', 'track_id': trackData.id })
        }
      },
      onDownloadEvent (data, trackData, error) {
        console.log(trackData)
        if (error) {
          dataLayer.push({ 'event': 'download', 'platform': trackData.platform, })
        } else {
          dataLayer.push({ 'event': 'download', 'track_id': trackData.id, 'platform': trackData.platform, })
        }
      }
    })
  })()