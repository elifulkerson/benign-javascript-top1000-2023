(function() {
            var hasI18n = function(){
              return typeof window.I18n !== 'undefined' && window.I18n != null
            };
            var setSubsI18n = function() {
              if (hasI18n()) {
                window.subsI18n = I18n.scoped();
                window.subsI18n.translations = {
                  "js": {
                    "modules": {
                      "subscription": {
                        "subscribe": {
                          "email_step": {
                            "suggest_email": "Did you mean {link_open}{suggested_email}{link_close}?"
                          }
                        },
                        "simple_subscription_success": "Thank you for subscribing!",
                        "subscription_success": "Thank you for subscribing to {division} deals with {email}.",
                        "subscription_success_subsave": "Thank you for subscribing to {division} deals with {email}. Your $5 savings will be applied at checkout.",
                        "subscription_failure": "Sorry, we were unable to create your subscription at this time. Please continue to browse our site for great deals, or {link_open}click here{link_close} to try subscribing again.",
                        "social_subscription_touch_success": "Thank you for subscribing with ",
                        "social_subscription_touch_failure": "Something went wrong!",
                        "social_subscription_success": "Thank you for subscribing with {email}",
                        "social_subscription_failure": "Sorry, we were unable to create your subscription at this time."
                      }
                    }
                  }
                };
                window.subsI18n.translations.js.modules.subscription.subscribe.email_step.suggest_email = window.subsI18n.translations.js.modules.subscription.subscribe.email_step.suggest_email.replace(/{/g, "{{");
                window.subsI18n.translations.js.modules.subscription.subscribe.email_step.suggest_email = window.subsI18n.translations.js.modules.subscription.subscribe.email_step.suggest_email.replace(/}/g, "}}");
                window.subsI18n.translations.js.modules.subscription.subscription_success = window.subsI18n.translations.js.modules.subscription.subscription_success.replace(/{/g, "{{");
                window.subsI18n.translations.js.modules.subscription.subscription_success = window.subsI18n.translations.js.modules.subscription.subscription_success.replace(/}/g, "}}");
                window.subsI18n.translations.js.modules.subscription.subscription_success_subsave = window.subsI18n.translations.js.modules.subscription.subscription_success_subsave.replace(/{/g, "{{");
                window.subsI18n.translations.js.modules.subscription.subscription_success_subsave = window.subsI18n.translations.js.modules.subscription.subscription_success_subsave.replace(/}/g, "}}");
                window.subsI18n.translations.js.modules.subscription.subscription_failure = window.subsI18n.translations.js.modules.subscription.subscription_failure.replace(/{/g, "{{");
                window.subsI18n.translations.js.modules.subscription.subscription_failure = window.subsI18n.translations.js.modules.subscription.subscription_failure.replace(/}/g, "}}");
                //window.subsI18n.translations.js.modules.subscription.social_subscription_touch_success = window.subsI18n.translations.js.modules.subscription.social_subscription_touch_success.replace(/{/g, "{{");
                //window.subsI18n.translations.js.modules.subscription.social_subscription_touch_success = window.subsI18n.translations.js.modules.subscription.social_subscription_touch_success.replace(/}/g, "}}");
                window.subsI18n.translations.js.modules.subscription.social_subscription_success = window.subsI18n.translations.js.modules.subscription.social_subscription_success.replace(/{/g, "{{");
                window.subsI18n.translations.js.modules.subscription.social_subscription_success = window.subsI18n.translations.js.modules.subscription.social_subscription_success.replace(/}/g, "}}");
                window.subsI18n.translations.number = I18n.translations.number;
                window.subsI18n.scope = [ "js" ];

              } else {
                setTimeout(setSubsI18n, 250);
              }

            };
            setSubsI18n();
          }
          )();