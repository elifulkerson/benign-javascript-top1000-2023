const _disallow_params = ["gaa_at", "gaa_n", "gaa_ts", "gaa_sig"]
    tp.push(['init', function() {
      const current_url = new URL(window.location.href)
      const matched_params = _disallow_params.filter(el => current_url.searchParams.has(el))

      if (!tp.pianoId.isUserValid() && matched_params.length == 0){
                loadScript("https://accounts.google.com/gsi/client")
              } 
    }])