StackExchange.ready(function () {
        StackExchange.Hero.init("nso", "a");

        var location = 0;
        if ($("body").hasClass("questions-page")) {
            location = 1;
        } else if ($("body").hasClass("question-page")) {
            location = 1;
        } else if ($("body").hasClass("faq-page")) {
            location = 5;
        } else if ($("body").hasClass("home-page")) {
            location = 3;
        }

        $('.js-cta-button').click(function () {
            StackExchange.using("gps", function () {
                StackExchange.gps.track("hero.action", { hero_action_type: 'cta', location: location }, true);
            });
        });

        // TODO: we should review the class names and whatnot in use here. Older heroes use id selectors, the newer
        // sticky question hero on SO has a .js-dismiss class instead, but it's apparently not used anywhere... 
        // It's not great. Ideally we'd have a set of classes in the partials above that would correspond to 
        // the behaviours we want here in a more clear way. 

        // sticky question-page hero at the bottom of the page on SO
        $('.js-dismiss').on('click', function () {
            StackExchange.using("gps", function () {
                StackExchange.gps.track("hero.action", { hero_action_type: "close", location: location }, true);
            });
            StackExchange.Hero.dismiss();
            $(".js-dismissable-hero").fadeOut("fast");
        });
    });