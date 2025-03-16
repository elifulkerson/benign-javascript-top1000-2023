function top_companies_post_screener() {
		var e = document.mktinfo_scr_frm.sel_code.value;
		var t = document.mktinfo_scr_frm.screen_crit.value;

		if( e == "All Companies" ) {
			document.mktinfo_scr_frm.action = "https://www.moneycontrol.com/stocks/top-companies-in-india/" + t + "-bse.html";
		} else {
			document.mktinfo_scr_frm.action = "https://www.moneycontrol.com/stocks/top-companies-in-india/" + t + "-bse/" + e + ".html";
		}
		document.mktinfo_scr_frm.submit();

		return false;
	}

	function top_companies_post_result_screener() {
		var e = "";
		var t = document.frm_screener.result_screener.value;

		if( t == 1 ) {
			e = "https://www.moneycontrol.com/markets/earnings/latest-results/best-performer/yoy/standalone/";
		} else if( t == 2 ) {
			e = "https://www.moneycontrol.com/markets/earnings/latest-results/worst-performer/yoy/standalone/";
		} else if( t == 3 ) {
			e = "https://www.moneycontrol.com/markets/earnings/latest-results/positive-turnaround/yoy/standalone/";
		} else if( t == 4 ) {
			e = "https://www.moneycontrol.com/markets/earnings/latest-results/negative-turnaround/yoy/standalone/";
		} else if( t == 5 ) {
			e = "https://www.moneycontrol.com/stocks/cptmarket/qtrlist.php";
		} else if( t == 6 ) {
			e = "https://www.moneycontrol.com/stocks/cptmarket/sector/qtrlist.php";
		}

		document.frm_screener.action = e;
		document.frm_screener.submit();
		return false;
	}

	function top_companies_post_valuation_stats(){
		var e = "";
		var t = document.frm_valuation.valuation_stats.value;

		if( t == 7 ) {
			e = "https://www.moneycontrol.com/stocks/marketinfo/eps/bse/index.php";
		} else if( t == 8 ) {
			e = "https://www.moneycontrol.com/stocks/marketinfo/pe/bse/index.php?indcode=0&sortcode=0";
		} else if( t == 9 ) {
			e = "https://www.moneycontrol.com/stocks/marketinfo/pe/bse/index.php?indcode=0&sortcode=2";
		} else if( t == 10 ) {
			e = "https://www.moneycontrol.com/stocks/marketinfo/price2bv/bse/index.php";
		} else if( t == 11 ) {
			e = "https://www.moneycontrol.com/stocks/marketinfo/premium2bv/bse/index.php";
		} else if( t == 12 ) {
			e = "https://www.moneycontrol.com/stocks/marketinfo/disc2bv/bse/index.php";
		} else if( t == 13 ) {
			e = "https://www.moneycontrol.com/stocks/marketinfo/dividends/index.php";
		} else if( t == 14 ) {
			e = "https://www.moneycontrol.com/india/stockmarket/topdividentstock/0/0/marketstatistics/BSE";
		} else if( t == 15 ) {
			e = "https://www.moneycontrol.com/stocks/marketinfo/qtrgrowth/index.php";
		}
		document.frm_valuation.action = e;
		document.frm_valuation.submit();
		return false;
	}