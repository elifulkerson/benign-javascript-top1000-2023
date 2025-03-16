Object.defineProperty(SVGElement.prototype, 'outerHTML', {
        get: function () {
            var $node, $temp;
            $temp = document.createElement('div');
            $node = this.cloneNode(true);
            $temp.appendChild($node);
            return $temp.innerHTML;
        },
        enumerable: false,
        configurable: true
    });

    // [BEG] Manually-added missing functions not provided by shims nor polyfiils:
    if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = Array.prototype.forEach;
    }
    if(window.DOMTokenList && !DOMTokenList.prototype.forEach){
        DOMTokenList.prototype.forEach = Array.prototype.forEach;
    }

    if(window.Element && !Element.prototype.remove){
        Element.prototype.remove = function() {
            this.parentElement.removeChild(this);
        }
    }

    if (window.NodeList && !NodeList.prototype.remove) {
        NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
            for(var i = this.length - 1; i >= 0; i--) {
                if(this[i] && this[i].parentElement) {
                    this[i].parentElement.removeChild(this[i]);
                }
            }
        }
    }
    // [END] Missing functions not provided by shims nor polyfiils: