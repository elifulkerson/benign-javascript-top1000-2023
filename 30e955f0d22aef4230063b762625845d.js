function setKmklabsVisitorGaId() {
        if (typeof ga === 'function') {
            if (typeof ga.getAll == 'function') {
                ga(function() {
                    window.kmklabs.visitor.gaid = ga.getAll()[0].get('clientId');
                });
            } else {
                setTimeout(setKmklabsVisitorGaId, 500);
            }
        } else {
            setTimeout(setKmklabsVisitorGaId, 500);
        }
    }
    setKmklabsVisitorGaId();