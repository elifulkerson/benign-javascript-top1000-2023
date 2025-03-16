var config = Dribbble.JsConfig || {}
  // the assign is so this partial can be called in other partials, e.g. modals
  // without overriding parent instantiations of JsConfig
  Dribbble.JsConfig = Object.assign(config, {
      user: {"isLoggedIn":false,"reCaptchaSiteKey":"6LdmBTIUAAAAAM4NIokaWu8p3BBuYEw3CxuDdyg_","canPurchasePro":true,"isHiringTrialEligible":false},
      hiringProfile: {},
      features: {"braintreeHiring":false,"proDiscountToasty":false,"collaborators":false,"hiringBundleDiscount":true,"purchaseFreelance":true,"learnRedesign":false,"proTrial":false,"jobBoardTrial":true,"klTags":true,"hideCohortSelection":true,"shotFeedUpdates":false},
      isRobot: null,
      remoteIp: "122.11.166.17",
      isProduction: true,
      permissions: {"userPermissions":["canBuyBoostWithBraintree","canSeeThirdPartyPaymentMethods"]},
      screenshot_boost: {"buttonText":[{"label":"Buy Now","value":"buy-now"},{"label":"Download","value":"download"},{"label":"Learn More","value":"learn-more"},{"label":"Shop Now","value":"shop-now"},{"label":"Apply Now","value":"apply-now"},{"label":"Try Now","value":"try-now"},{"label":"Get Offer","value":"get-offer"},{"label":"Contact Us","value":"contact-us"}],"tiers":{"lowTier":{"daysToServe":7,"range":{"lowerLimit":0,"upperLimit":10000}},"midTier":{"daysToServe":14,"range":{"lowerLimit":10001,"upperLimit":100000}},"highTier":{"daysToServe":28,"range":{"lowerLimit":100001,"upperLimit":null}}},"pricePerImpression":"0.01","purchase":{"stripePublicKey":"pk_live_9EfFSEE6iTCgHghKqBqnixxR","savedCreditCardInformation":null},"discount":null,"minimumImpressions":2000,"targetPlacements":{"following":"Following Feed","popular":"Popular Feed","search":"Search Feed","goods":"Goods Feed","recent":"New \u0026 Noteworthy Feed","shot_modal":"Shot Modal","similar_work":"Similar Work","tags":"Tag Feed","popular_first":"Popular Feed First"},"priorities":["self_serve","sales","remnant","sales_priority"]},
  })