// helper functions
    var generateIdForExperimentVariant = function(experimentId, variantId) {
      return 'article.experimentVariant#story' + experimentId.toString() +  variantId.toString();
    };

    NPR.serverVars.experimentMetrics = [];
    var experimentStyles = '';

    var experimentList = NPR.serverVars.experiments || [];
    experimentList.forEach(function(experiment) {
        var experimentId = experiment.id;
        var experimentStoryId = experiment.storyId;
        var variants = experiment.variants;

        if (!variants || !variants.length) {
            return;
        }

        var randomValue =  Math.random();

        // select a variant weighted on the frequencies in the variant metadata
        // the frequencies are between 0 and 1, and the sum of the frequencies add up to 1
        var weightedSum = 0;
        var variantId = variants[0].id;
        var pickedOne = false;
        for (var index = 0; index < variants.length; index++) {
            var variant = variants[index];
            weightedSum += parseFloat(variant.freq);

            if (!pickedOne && randomValue <= weightedSum) {
                variantId = variant.id;
                pickedOne = true;
                experimentStyles += generateIdForExperimentVariant(experimentStoryId, variant.id) + ' { display:block;} \n';
            }
            else {
                experimentStyles += generateIdForExperimentVariant(experimentStoryId, variant.id) + ' { display:none;} \n';
            }
        }
        // store info for use by Google Analytics later
        NPR.serverVars.experimentMetrics.push([experimentId,variantId,experimentStoryId]);

        // https://www.admonsters.com/blog/pixel-delivery-best-practices
        // http://stackoverflow.com/a/22419389
        (new Image()).src = NPR.serverVars.experimentTrackingHost + '/abtesting/experiments/' + experimentId + '/variants/' +  variantId + '/impression.gif';
    });

    // attaching the live click handler
    document.addEventListener('click', function (event) {
        if (NPR.serverVars.experimentMetrics && NPR.serverVars.experimentMetrics.constructor === Array) {
            NPR.serverVars.experimentMetrics.forEach(function (experimentVariant) {
                var experimentId = experimentVariant[0];
                var variantId = experimentVariant[1];
                var experimentStoryId = experimentVariant[2];

                var idToSearchFor = 'story' + experimentStoryId + variantId;
                var el = event.target
                        , found;

                while (el && !(found = el.id === idToSearchFor)) {
                    el = el.parentElement;
                }

                if (found) {
                    (new Image()).src = NPR.serverVars.experimentTrackingHost + '/abtesting/experiments/' + experimentId + '/variants/' + variantId + '/click.gif';
                }
            });
        }
    });

    var styleDiv = document.createElement('div');
    styleDiv.innerHTML = '<style>' + experimentStyles + '</style>';
    document.getElementById('experimentWrap').appendChild(styleDiv.childNodes[0]);