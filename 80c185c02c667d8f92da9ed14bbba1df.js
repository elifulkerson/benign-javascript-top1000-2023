/**
 * Protected Media Score politics:
 * 1. fraudScore means: fraud [2 - clean - 100 fraud]
 * 2. suspScore means: suspicious [2 - clean - 100 suspicious]
 * 3. se means means: load by search engine or ad crawler (for Google Publishers recommended to not block this
 * so Google can score your page for quality
 *
 * JIRA: ADTECH-625
 */
const PM_COOKIE_NAME       = "protectedMedia";
const PM_SCORE_COOKIE_NAME = "pms";
const protectedMediaCookie = getCookie(PM_COOKIE_NAME);
const pmScoreCookie        = getCookie(PM_SCORE_COOKIE_NAME);
window.fraud = 0;
if(protectedMediaCookie === "" || pmScoreCookie === "") { // only hit once per user
	PMScore({
			callback: function(result) {
		if(result.status.indexOf("timeout") !== -1) {
			console.log("timeout: " + JSON.stringify(result));
		}
		else { // success PM call
			if(result.status.indexOf("se") !== -1 && result.se !== 0) {
				// Load by Search engine or ad crawler (for Google Publishers, recommended to not block this so Google
				// can score your page for quality
				console.log("google bot / ad crawler detected");
				return;
			}
			// mark the PM score to user (first time)
            if(protectedMediaCookie === "") {
                setCookie(PM_COOKIE_NAME, result.fraudScore ,365, "/");
            }
            if(pmScoreCookie === "") {
                setCookie(PM_SCORE_COOKIE_NAME, JSON.stringify({'f':result.fraudScore, 's':result.suspScore}),30, "/");
            }

			if (result.fraudScore > 70) { // result.suspScore > 70
				console.log("fraud: " + JSON.stringify(result));
			}
			else {
				console.log("clean: " + JSON.stringify(result));
			}
		}
	},
			mode: "rt",
			timeout: 4000,
		})
	}
else { // user or bot already tagged by protected media (used for second load only)
	if(protectedMediaCookie > 70) {
		window.fraud = 1;
	}
}