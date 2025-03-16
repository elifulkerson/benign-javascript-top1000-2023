//<![CDATA[
  if (window.gtmEnvironment === "staging" || window.gtmEnvironment === "development") {
    function normalizeAttributeValue(value) {
      if (value === undefined) return undefined
      if (value === null) return undefined

      let normalizedValue

      if (Array.isArray(value)) {
        normalizedValue = normalizedValue || value
          .map(normalizeAttributeValue)
          .filter(Boolean)
          .join(', ')
      }

      normalizedValue = normalizedValue || value
        .toString()
        .toLowerCase()
        .trim()
        .replace(/&amp;/g, '&')
        .replace(/&#39;/g, "'")
        .replace(/\s+/g, ' ')

      if (normalizedValue === '') return undefined
      return normalizedValue
    }

    function setPageAttributes () {
      if (document.documentElement.hasAttribute('data-turbo-preview')) return

      var pageAttributes = {
        app_name: 'market-storefront',
        app_env: 'production',
        app_version: '24ccc4545b082d6725c513dc2796ad08f03b581f',
        page_type: 'home',
      }

      var normalizedPageAttributes = { event_attributes: null }

      Object.keys(pageAttributes).forEach(function(key) {
        normalizedPageAttributes[key] =  normalizeAttributeValue(pageAttributes[key])
      })

      dataLayer.push(normalizedPageAttributes)
      dataLayer.push({
        event: 'analytics_ready',
        event_attributes: {
          custom_timestamp: Date.now()
        }
      })
    }

    window.dataLayer = window.dataLayer || [];

    setPageAttributes();
  }

//]]>