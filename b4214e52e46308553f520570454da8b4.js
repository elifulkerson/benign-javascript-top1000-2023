window.brandName = 'HTG';
        window.sendGa360Event = function(eventLabel, eventCategory, value, eventAction = null, page = null, hitType = null){
            var eventData = {};

            eventData.eventLabel = eventLabel;
            eventData.eventCategory = eventCategory;
            eventData.value = value;

            if(eventAction){
                eventData.eventAction = eventAction;
            }

            if(hitType){
                eventData.hitType = hitType;
            }

            if(page){
                eventData.page = page;
            }

            ga('send', eventData);
        }

        window.sendGa4Event = function(eventLabel, eventCategory, value, page=null, hitType = null){
            var eventData = {};

            eventData.eventLabel = eventLabel;
            eventData.eventCategory = eventCategory;
            eventData.value = value;

            if(hitType){
                eventData.hitType = hitType;
            }

            if(page){
                eventData.page = page;
            }

            ga('send', {
                hitType: 'scroll',
                page: this.ajaxUrl,
                eventLabel: "Load More Entries",
                eventCategory: 'Resource List',
                value: this.pageNumber
            });
        }