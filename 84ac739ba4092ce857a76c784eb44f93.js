window.fspSDK.updateOptions({
    reporterHandler({ name, value, payload = {} } = {}) {      
      if (!name || !value || window.isClientBot) {
        return
      }

      const resource = payload.resource || ''
      window.TPM?.run({
        marketing: 'ClientAnalytics',
        method: '_defineTrack',
        params: {
          data: {
            resource,
            data: [
              {
                key_path: name,
                values: { num: value }
              },
            ]
          },
          options: {
            random: 1,
            immediate: true,
          },
        }
      })
    }
  })