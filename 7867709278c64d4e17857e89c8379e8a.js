var isTaboolaBlocked = 'no';
        var disableTaboolaCountries = ['FI', 'NO', 'PE', 'CO', 'AR'];
        var __usrCntry = getCookie("__usrCntry") || '_NA_';
        isTaboolaBlocked = (disableTaboolaCountries.indexOf(__usrCntry) !== -1) ? 'yes' : 'no';
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ 'block_toobla': isTaboolaBlocked });