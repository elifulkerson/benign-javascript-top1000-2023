var header_data_globoid = {'OIDC_REDIRECT_URI': '', 'OIDC_URL': '', 'OIDC_CLIENT_ID': ''}
      var header_data_login_area_container = []
      if(header_data_globoid){
        var oidcSettings = {
          clientId: header_data_globoid.OIDC_CLIENT_ID,
          url: header_data_globoid.OIDC_URL,
          redirectUri: header_data_globoid.OIDC_REDIRECT_URI,
          loginAreaContainer: header_data_login_area_container
        };
      }