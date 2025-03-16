const gsi_container = document.getElementById("g_id_onload")
    const auth_ep = "https://madhyama.thehindu.com/api/gni";
    const response_ep = "https://madhyama.thehindu.com/api/sociallogin"
    handleResponseUrl()

    function logMomentNotification(v) {
      const gsi_overlay = document.getElementById("gsi_overlay")
      if(v.g == 'display' && v.h === true) {
        gsi_overlay.style.display = "block";

        dataLayer = window.dataLayer || [];
        dataLayer.push ({
          'event' : 'onetap_signin',
          'data' : {
            'click':'view',
            'click_type' : '',
            'general_placement':'body',
            'detailed_placement':'',
            'goal_type':'onetap_signin_view'
          }
        });
      }
      else gsi_overlay.style.display = "none"
    }

    function loginCallback(res) {
      handleGoogleSignIn()
    }

    function pushLoginEventToDataLayer() {
      dataLayer = window.dataLayer || [];
      dataLayer.push ({
        'event' : 'onetap_signin',
        'data' : {
          'click':'sign_in',
          'click_type' : 'action',
          'general_placement':'body',
          'detailed_placement':'',
          'goal_type':'onetap_signin'
        }
      });
    }

    function handleGoogleSignIn(user) {
      console.log('handleGoogleSignIn');
      const clean_url = cleanArticleUrl();
      const options = {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({
          "token": user.credential,
          "article_url": clean_url,
          "pubId": "TH",
        })
      };

      fetch(auth_ep, options)
      .then(function(res) {
        if (!res.ok) throw new Error(res.statusText)
        return res.json()
      })
      .then(function(res) {
        if (res.redirect_uri) {
          pushLoginEventToDataLayer();
          setTimeout(() => {
            window.location.replace(res.redirect_uri);
          }, 0200);
        }
        else if (!res.token || res.token.trim() === "") return
        else if(res.token && window.tp.pianoId)
          tp.push(['init', function() {
            tp.pianoId.loginByToken(res.token);
            pushLoginEventToDataLayer();
            setTimeout(() => window.location.reload(), 0700);
          }])
        else {
          console.log("Nothing happened...")
        }
      })
      .catch(err => console.error(err));
    }

    function cleanArticleUrl() {
      const params_to_remove = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"]

      const url_obj = new URL(`${window.location.href}`)
      url_obj.searchParams.forEach((v, k) =>
        {if (params_to_remove.includes(k)) url_obj.searchParams.delete(k)}
      )

      return url_obj.toString()
    }

    function handleResponseUrl() {
      const url_obj = new URL(window.location.href)
      const response_id = url_obj.searchParams.get("response_id")
      const redirect_uri = url_obj.searchParams.get("internal_redirect_uri")
      if (!response_id || !redirect_uri) {
        gsi_container.setAttribute('data-auto_prompt', "true")
        return
      }
       // If user is already logged in, Do nothing with response_id or redirect_uri
      // else if (window.tp && window.tp.pianoId.isUserValid()) return;

      const options = {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({
            "response_id": response_id,
            "pubId": "TH"
        })
      }

      fetch(response_ep, options)
      .then(function(res) {
        if (!res.ok) throw new Error(res.statusText)
        return res.json()
      })
      .then(function(res) {
        console.log(res)
        // return if response is not ok OR no access token is present
        if (!res.data.status === "ok" || !res.data.access_token) return
        if(window.tp.pianoId)
          tp.push(['init', function() {
            tp.pianoId.loginByToken(res.data.access_token)
            window.location.replace(res.data.redirect_uri)
          }])
        else window.location.replace(res.data.redirect_uri)
      })
      .catch(err => console.error("Error: ", err));
    }

    function getHeaders() {
      return {
        "Accept": "application/json, text/plain, */*",
        "Authorization": "Basic dGhlaGluZHU6a251cl9DSC1BNVBZVSU4Vw==",
        "Content-Type": "application/json",
      }
    }