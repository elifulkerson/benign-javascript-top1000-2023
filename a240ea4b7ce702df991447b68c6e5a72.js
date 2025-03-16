let targetingParameters = [], autoTargetingParameters = [];

            try {
              targetingParameters = (JSON.parse('null') || []);
              autoTargetingParameters = (JSON.parse('[]') || []);
            } catch (error){
              console.warn('Fox: targetingParameters or autoTargetingParameters has error');
            }

            window.foxConfig.targetingParameters = targetingParameters;
            window.foxConfig.autoTargetingParameters = autoTargetingParameters;
            window.foxConfig.useAutoTargetingParameters = true;