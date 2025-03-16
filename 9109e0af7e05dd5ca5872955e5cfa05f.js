var INVEN = window.INVEN || {};
INVEN.Xml = window.INVEN.Xml || {};

INVEN.Xml.objects = window.INVEN.Xml.objects || new Array();

INVEN.Xml.object = function() {
	this.xmlObj;
	this.action;
	this.method;
	this.insName;
	this.nocache;

	this.init = function(insName, method, action, nocache) {
		if (!method) method = "GET";
		if (!action) action = "";
		if (!nocache) nocache = false;

		this.insName = insName;
		this.setAction(action);
		this.setMethod(method);
		this.nocache = nocache;
		return true;
	}

	this.createObj = function() {
		if (window.XMLHttpRequest) {
			this.xmlObj = new XMLHttpRequest();
		} else if (window.ActiveXObject) {
			this.xmlObj = new ActiveXObject("Microsoft.XMLHTTP");
		} else {
			return false;
		}
	}

	this.setAction = function(action) { this.action = action; }
	this.setMethod = function(method) { this.method = method; }

	this.error = function(xmlObj) {
		this.handleError(this.getErrorMsg(xmlObj));
	}

	this.handleError = function(msg) {
		if ((typeof(msg) == 'string' && msg.length > 0) || typeof(msg) == 'number') {
			alert(msg);
		}
	}

	this.getErrorMsg = function(xmlObj) {
		var msg = xmlObj.getResponseHeader("Status");
		if ((!msg) || (msg.length == null) || (msg.length <= 0)) {
			if (xmlObj.status && xmlObj.status !== 0) alert(xmlObj.status);
		} else {
			return msg;
		}
	}

	this.checkState = function(instance) {
		if (instance.xmlObj.readyState == 4) {
			if (instance.xmlObj.status == 200) {
				instance.print(instance.xmlObj);
			} else {
				instance.error(instance.xmlObj);
			}
		}
	}

	this.request = function(data) {
		this.createObj();
		eval("var chkFn = function() { " + this.insName + ".checkState(" + this.insName + "); }");
		this.xmlObj.onreadystatechange = chkFn;

		//요청처리
		var url = this.action;
		var params = "";
		var dummy = new Date().getTime();

		// data
		if (data.constructor == Array) {
			var temp = new Array();
			for (var i in data) {
				if( data.hasOwnProperty(i)) {
					temp.push(i + "=" + encodeURIComponent(data[i]));
				}
			}
			data = temp.join("&");
		}

		if (this.method.toUpperCase() == "GET") {
			url = this.action + "?" + data + (this.nocache ? "&dummy="+dummy : "");
			params = null;
		} else {
			url = this.action + (this.nocache ? "?dummy="+dummy : "");
			params = data;
		}

		this.xmlObj.open(this.method, url, true);
		this.xmlObj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
		this.xmlObj.send(params);
	}

	this.print = function(xmlObj) {
		alert(xmlObj.responseXML.xml);
	}

}

INVEN.Xml.create = function(method, action, nocache) {
	var n = INVEN.Xml.objects.length;
	INVEN.Xml.objects[n] = new INVEN.Xml.object();
	INVEN.Xml.objects[n].init("INVEN.Xml.objects["+n+"]", method, action, nocache);
	return INVEN.Xml.objects[n];
}

/* COMMON FUNCTION */
	/* Method : getTextValue */
		INVEN.Xml.getTextValue = function(node) {
			if (node && node.firstChild && node.firstChild.nodeValue) {
				return node.firstChild.nodeValue;
			} else {
				return '';
			}
		}
	/* Method : readAllXmlData */
		INVEN.Xml.readAllXmlData = function(obj) {
			var data = new Array();
			var chs = obj.childNodes;
			var n = chs.length;
			for (var i = 0; i < n; i++) {
				var item = chs[i];
				if (item.nodeType == 1) {
					var temp = item.childNodes;
					if (item.firstChild && item.firstChild.nodeType == 1) {
						data[item.tagName] = readAllXmlData(item);
					} else if ((temp.length > 1) && (temp[1].nodeType == 1)) {
						data[item.tagName] = readAllXmlData(item);
					} else {
						data[item.tagName] = INVEN.Xml.getTextValue(item);
					}
				}
			}
			return data;
		}
