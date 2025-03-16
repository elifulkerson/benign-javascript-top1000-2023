function createSchemaTag(str) {
        var script_tag = document.createElement('script');
        script_tag.type = 'application/ld+json';
        script_tag.text = JSON.stringify(str, null, '\t');
        document.body.appendChild(script_tag);    
    }