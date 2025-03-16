(function () {
    function getCookie(cookieName) {
      var name = cookieName + "=";
      var cookieArray = document.cookie.split(";");
      for (var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        while (cookie.charAt(0) == " ") cookie = cookie.substring(1);
        if (cookie.indexOf(name) == 0) return cookie.substring(name.length, cookie.length);
      }
      return "";
    }

    function getCondition() {
      if (location.pathname == "/") {
        return "postpaid_homepage";
      } else if (location.pathname == "/prepaid/") {
        return "prepaid_homepage";
      } else {
        return "landing page";
      }
    }

    function getPlatform() {
      if (navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i)) {
        if (window.innerWidth < 768) {
          return "mobile";
        }
        return "tablet";
      }
      return "desktop";
    }

    var businessGroup = "wireless";
    var isWireless = businessGroup === "wireless" || !businessGroup;

    var pathName = "/content/wcms/personal-home",
      flowName,
      pageName;

    pathName = pathName.replace(/\/$/, "").split("/");
    pathName.splice(0, 3);

    if (pathName.length <= 1) {
      flowName = pathName[0];
      pageName = pathName[0];
    } else {
      flowName = pathName[0];
      pathName.splice(0, 1);
      pageName = pathName.join("_");
    }

    var dataLayer = {
      cmp: {
        all: "", // Marketing campaign Code
      },

      error: {
        code: "", // error code (ex:400,503)
      },

      page: {
        channel: "learn", // site section
        channelSession: "",
        detail: "",
        displayChannel: "vzw",
        flow: flowName,
        id: getCondition() + ",LP_AC",
        name: pageName,
        sourceChannel: "vzw",
        type: "landing page", // If error or applicable only on AEM Pages
        subFlow: "", // For Wireless
        throttleList: "",
      },

      event: {
        value: "", // Eg: login,scAdd,scOpen,scRemove, purchase,
      },

      search: {
        term: "",
        type: "",
      },

      target: {
        assetsRequested: "", // Assets Requested (on-hold, don’t populate)
        assetAttributes: "", // Asset Attributes (on-hold, don’t populate)
        assetsLeveraged: "", // Assets Leveraged (on-hold, don’t populate)
        offer: "", // Offer ID
        abTest: "",
        audience: "",
        campaign: "",
        experience: "", // AB test experience
        message: "", // any message which is shown to customer on the page
        offer: "",
        cloud: "", // marketing cloud id
        sandbox: "", // AB Test Experience Name
        evolv: "",
        engagement: {
          intent: "learn", //  kind of flow(ordering, payment etc)
          id: "", //  the specific ID of the engagement within the SOI application
          offered: "", //  Response to engagement or what the customer is interacting with in an engagement
        },
      },

      txn: {
        agent: "", // Agent Enterprise ID (10 digit; captured on Nuance chat when customer talks with live agent)
        discount: "", // Order Discount in $
        productsQualified: "", // PRODUCTS QUALIFIED
        productSelected: "", // PRODUCTS SELECTED
        discountId: "", // Discount ID / Promo ID entered
        id: "", // order ID
        offer: "", // Offer ID at order level
        autoPay: "", // used to capture autopay enabled and disabled. capture during login along with customer info
        offerType: "", // What kind of offer. Eg: Bestmatch, Upsell etc
        orderType: "", // Eg: AAL, Upgrade etc
        paymentType: "", // Eg: Credit Card, Debit Card etc
        rewardOffer: "", // Verizon Up rewards Code
        outletId: "", // for POS
        cartId: "", // either the channel cart id or shared cart ID
        shippingZip: "",
        shippingTotal: "", // TotalShipping charge in dollars
        status: "", // Eg: order cancelled, pending order, order confirmed etc
        total: "", // $$transaction price

        product: {
          owns: {
            // Existing Products
            name: "", // Product ID
            sorId: "", // USOC / ISOC
            category: "",
            qty: "",
            offer: "", // offer ID
            discount: "", // Discount ID
            recurringPrice: "", // eVar32
            nonRecurringPrice: "",
            line: "",
            shared: "", // (Y/N),
          },

          current: {
            // Existing Products
            name: "",
            sorId: "",
            merchCat: "", // where did you see the product (eg: product grid wall pge/ hp /banner etc)
            category: "",
            offer: "",
            discount: "",
            qty: "",
            quoteid: "", // for POS
            recurringPrice: "", //
            nonRecurringPrice: "",
            line: "",
            sku: "",
            tradeInQty: "",
            tradeInAmt: "",
            contractType: "", // Contract Type
            rebate: "",
            shippingCharge: "", // Shipping charge in dollar
            shippingType: "", // Eg: Standard Shipping/pick up from store etc
            shared: "", // (Y/N)
          },
        },
      },

      user: {
        existingServices: "", // Existing Services
        account: "", // hashed account
        accountType: "", // Eg: Postpaid, Prepaid, Unlimited
        customerRole: getCookie("role"), // captures customer role like accountholder, manager etc
        customerType: "", // Wireless - PE,ME,BE
        authStatus: getCookie("loggedIn") ? "logged in" : "anonymous",
        id: "", // hashed MDN
        tenure: "", // from how long user/account tenure with Verizon
        prospect: "",
        session: getCookie("GLOBALID"), // Global Session ID (session ID carried over from GHP/Landing Page)
        chatId: "", // Nuance Chat ID
        zip: getCookie("ZIPCODE"),
        "emcAccountId ": "", // hashed (SHA256) customer identifiers and email addresses that CRM embeds into each email URL
        "emcEmailId ": "", // hashed (SHA256) customer identifiers and email addresses that CRM embeds into each email URL
        "emcMdn ": "", // hashed (SHA256) customer identifiers and email addresses that CRM embeds into each email URL
      },

      utils: {
        StrategyApiKey: "", // Strategy API Key (on-hold, don’t populate for now)
        appApiKey: "", // Application API Key (on-hold, don’t populate for now)
        pegaCaseId: "", // Pega Case ID/Pega Recommendation ID
        athenaSession: "", // For Pega NBA recommendation (If not available, please leave it blank)
        outcome: "", // Decision Outcome (‘Y’/’N (when pega offer is shown by default)’/blank)
        pegaOffer: "",
      },

      platform: {
        call: "", // Call ID
      },

      content: {
        mktgId: "", // Marketing Audience ID
      },

      env: {
        businessUnit: "wireless", // Business Unit (eg: Wireline, Wireless, Cloud)
        channel: getPlatform() + " store", // Site Section Level 1
      },
    };

    window.vzdl = window.vzdl || dataLayer;

    if (window.VZTAG_IS_READY) {
      window.vztag.api.dispatch("pageView");
    } else {
      // Otherwise, wait until we broadcast that we're ready:
      document.addEventListener("vztagReady", function () {
        window.vztag.api.dispatch("pageView");
      });
    }
  })();