document.addEventListener('slickdeals:ads:adLoaderReadiness', () => {
    var data = {
      csrfToken: '8a0350b.hqAqvRNUJy_dF5G8q7M8imeCx40ZFbgOst9g2mJPkMc.7JRuzmMicFyeL9jmz8Vk2RDql-RQXuBJwLcHnhEM4va_5m_kaRNLeqcg2A',
      envValue: '',
      segments: "{\"targeting\":[[\"article_label\",\"N\\\/A\"],[\"requestSource\",\"GPT\"],[\"ptype\",\"hp\"],[\"login\",\"no\"],[\"view\",\"redesign\"],[\"env\",\"prod\"],[\"UserGroup\",\"C\"],[\"pvnum\",\"1\"],[\"exp\",\"18\"],[\"hour\",\"0\"],[\"firstpv\",\"Yes\"],[\"utm_source\",\"*blank*\"],[\"utm_medium\",\"*blank*\"],[\"utm_campaign\",\"*blank*\"],[\"utm_term\",\"*blank*\"],[\"utm_content\",\"*blank*\"],[\"scat\",\"none\"]]}",
    };

    var event = new CustomEvent('slickdeals:ads:adStackConfigurationData', {
      detail: data,
    })

    document.dispatchEvent(event);
  });