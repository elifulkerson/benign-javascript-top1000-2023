/**
* INVEN Html Handling Script
*/
/* INITIALIZE */
	var INVEN = window.INVEN || {};
	INVEN.Html = INVEN.Html || {};

/* CSS CLASS FUNCTION */
	/* 특정 클래스가 있는지 검사 */
		INVEN.Html.existClass = function(obj, cname) {
			if (obj.className == cname) { return true; }
			if (obj.className.search(new RegExp("^"+cname+" ","g")) > -1) { return true; }
			if (obj.className.search(new RegExp(" "+cname+"$","g")) > -1) { return true; }
			if (obj.className.search(new RegExp(" "+cname+" ","g")) > -1) { return true; }
			return false;
		}
	/* 특정 클래스를 교체 */
		INVEN.Html.replaceClass = function(obj, from, to) {
			if (obj.className == from) {
				obj.className = to;
			} else {
				obj.className = obj.className.replace(new RegExp("^"+from+" ","g"),to+" ");
				obj.className = obj.className.replace(new RegExp(" "+from+"$","g")," "+to);
				obj.className = obj.className.replace(new RegExp(" "+from+" ","g")," "+to+" ");
			}
		}
	/* 특정 클래스를 제거 */
		INVEN.Html.removeClass = function(obj, cname) {
			obj.className = obj.className.replace(new RegExp("^"+cname+" ","g"),"");
			obj.className = obj.className.replace(new RegExp(" "+cname+"$","g"),"");
			obj.className = obj.className.replace(new RegExp(" "+cname+" ","g")," ");
			if (trim(obj.className) == cname) { obj.className = ''; }
		}

/* DOM FUNCTION */
	/* 특정 태그로 상위 노드 검색 */
		INVEN.Html.getParentByTagName = function(obj, tagName) {
			var temp = obj.parentNode;
			tagName = tagName.toLowerCase();
			while (temp.tagName.toLowerCase() != tagName) {
				temp = temp.parentNode;
				if ((temp == document.body) || (temp == document)) { return null; }
			}
			return temp;
		}
		INVEN.Html.getParentNode = INVEN.Html.getParentByTagName;
	/* 특정 클래스로 상위 노드 검색 */
		INVEN.Html.getParentByClassName = function(obj, className) {
			var temp = obj.parentNode;
			while (!INVEN.Html.existClass(temp, className)) {
				temp = temp.parentNode;
				if ((temp == document.body) || (temp == document)) { return null; }
			}
			return temp;
		}
	/* 특정 태그로 하위 노드 검색 */
		INVEN.Html.getChildNodes = function(obj, tag, childOnly) {
			obj = getObj(obj);
			if (!obj) { return null; }
			if (!tag) { tag = '*'; }
			tag = tag.toUpperCase();
			var objs = new Array();
			if (childOnly) {
				var objsLen = obj.childNodes.length;
				for (var i = 0; i < objsLen; i++) {
					var objOne = obj.childNodes.item(i);
					if ((tag == '*' || objOne.nodeName == tag) && (objOne.nodeType == 1)) {
						objs.push(objOne);
					}
				}
			} else {
				objs = obj.getElementsByTagName(tag);
			}
			return objs;
		}
	/* 모든 하위 노드 삭제 */
		INVEN.Html.removeChildAll = function(obj, tagName) {
			obj = getObj(obj);
			if (!tagName) {
				tagName = '';
			} else {
				tagName = tagName.toUpperCase();
			}
			var chs = obj.childNodes;
			var n = chs.length;
			for (var i = n - 1; i >= 0; i--) {
				var item = chs[i];
				if ((tagName == '') || ((item.tagName) && (item.tagName.toUpperCase() == tagName))) {
					obj.removeChild(item);
				}
			}
		}
	/* 이전 노드 */
		INVEN.Html.previousObj = function(obj, tagName) {
			if (tagName == undefined) { tagName ='*'; }
			tagName = tagName.toLowerCase();
			do {
				if (obj == obj.parentNode.firstChild) {
					return false;
				}
				obj = obj.previousSibling;
			} while ((obj.nodeType != 1) || ((tagName != '*') && (tagName != obj.nodeName.toLowerCase())));
			return obj;
		} 
	/* 다음 노드 */
		INVEN.Html.nextObj = function(obj, tagName) {
			if (tagName == undefined) { tagName ='*'; }
			do {
				if (obj == obj.parentNode.lastChild) {
					return false;
				}
				obj = obj.nextSibling;
			} while ((obj.nodeType != 1) || ((tagName != '*') && (tagName != obj.nodeName.toLowerCase())));
			return obj;
		} 
	/* SELECT 개체에 OPTION 추가 */
		INVEN.Html.addSelectOption = function(obj, value, text, isSelected) {
			var optionObj = document.createElement("OPTION");
			optionObj.value = value;
			optionObj.appendChild(document.createTextNode(text));
			if (isSelected) {
				optionObj.selected = true;
				optionObj.defaultSelected = true;
			}
			obj.appendChild(optionObj);
		}
	/* 특정 태그의 속성 일괄변경 */
		INVEN.Html.changeChildAttr = function(obj, tag, attr, value) {
			obj = getObj(obj);
			var chs = obj.getElementsByTagName(tag);
			var n = chs.length;
			for (var i = 0; i < n; i++) {
				chs[i][attr] = value;
			}
		}
	/* selectLabel */
		INVEN.Html.selectLabel = function(obj, action) {
			if (!action) { action = 'display->none'; }
			var labelObj = INVEN.Html.previousObj(obj, 'label');
			if (labelObj && (!obj.value)) {
				var actions = splitAssoc(action, ',', '->');
				var rollbacks = new Array();
				for (var key in actions) {
					switch (key) {
						case 'display':
							var styleVal = obj.currentStyle ? labelObj.currentStyle[key] : (window.getComputedStyle ? window.getComputedStyle(obj, "").getPropertyValue(key) : false);
							if (styleVal !== false) {
								rollbacks.push(function() { labelObj.style[key] = styleVal; });
								labelObj.style[key] = actions[key];
							}
							break;
						case 'class':
							rollbacks.push(function() { INVEN.Html.removeClass(labelObj, actions[key]); });
							if (!INVEN.Html.existClass(labelObj, actions[key])) { labelObj.className += ' ' + actions[key]; }
							break;
					}
				}
				obj.onblur = function() {
					if (!obj.value) {
						if (rollbacks && rollbacks.length) {
							var n = rollbacks.length;
							for (var i = 0; i < n; i++) {
								rollbacks[i]();
							}
						}
					}
				}
			}
		}

/* CHECKBOX FUNCTION */
	/* 초기화 */
		INVEN.Html.Check = INVEN.Html.Check || {};
	/* 모두 선택 */
		INVEN.Html.Check.checkAll = function(obj, prefix, chk) {
			obj = getObj(obj);
			var chs = obj.getElementsByTagName('INPUT');
			var n = chs.length;
			var prefixn = prefix.length;
			for (var i = 0; i < n; i++) {
				var item = chs.item(i);
				if (item.type.toLowerCase() == 'checkbox') {
					if (item.getAttribute('name').substring(0, prefixn) == prefix) {
						item.checked = chk;
					}
				}
			}
		}
	/* 모두 선택 채크박스 재검사 */
		// 주의 : 전체선택/해제 박스는 name 값을 가지면 안됨
		INVEN.Html.Check.recalc = function(obj, prefix, allbox) {
			obj = getObj(obj);
			if (!allbox) allbox = prefix;
			var chs = obj.getElementsByTagName('INPUT');
			var n = chs.length;
			var prefixn = prefix.length;
			var allChecked = true;
			for (var i = 0; i < n; i++) {
				var item = chs.item(i);
				if (item.type.toLowerCase() == 'checkbox') {
					if ((item.getAttribute('name').substring(0, prefixn) == prefix) && (!item.checked)) allChecked = false;
				}
			}
			var selObj = document.getElementById(allbox);
			if (selObj) selObj.checked = allChecked;
		}
	/* 선택된 채크박스의 값을 문자열로 변환*/
		INVEN.Html.Check.getString = function(obj, prefix, sep) {
			obj = getObj(obj);
			if (!sep) sep = ",";
			var chs = obj.getElementsByTagName('INPUT');
			var n = chs.length;
			var prefixn = prefix.length;
			var temp = "";
			for (var i = 0; i < n; i++) {
				var item = chs.item(i);
				var itemname = item.getAttribute('name');
				if (itemname && (itemname.substring(0, prefixn) == prefix) && (item.checked)) {
					temp += itemname.substring(prefixn) + sep;
				}
			}
			return temp.substring(0, temp.length - sep.length);
		}

/* VIRTUAL FORM OBJECT */
	INVEN.Html.VirtualForm = INVEN.Html.VirtualForm || {};
	INVEN.Html.VirtualForm.object = function() {
		this.formObj = null;
		
		this.init = function(meth, act) {
			if (!meth) meth = "POST";
			if (!act) act = "";
			this.formObj = document.createElement("FORM");
			this.formObj.method = meth;
			this.formObj.action = act;
			this.formObj.style.display = 'none';
		}

		this.addHidden = function(name, value) {
			var fieldObj = document.createElement("INPUT");
			fieldObj.type = "hidden";
			fieldObj.name = name;
			fieldObj.value = value;
			this.formObj.appendChild(fieldObj);
		}

		this.submit = function() {
			document.body.appendChild(this.formObj);
			this.formObj.submit();
		}
	}
	INVEN.Html.VirtualForm.create = function(meth, act) {
		var obj = new INVEN.Html.VirtualForm.object();
		obj.init(meth, act);
		return obj;
	}

/* SEQUENCE FUNCTION */
	INVEN.Html.Seq = INVEN.Html.Seq || {};
	INVEN.Html.Seq.moveUp = function(obj) {
		var wrap = obj.parentNode;
		var chs = wrap.childNodes;
		n = chs.length;
		temp = false;
		for (i = 0; i < chs.length; i++) {
			if (i > 0) {
				if (chs.item(i) == obj) {
					if (temp !== false) obj.swapNode(temp);
					return;
				}
			}
			var temp = chs.item(i);
		}
	}
	INVEN.Html.Seq.moveDown = function(obj) {
		var wrap = obj.parentNode;
		var chs = wrap.childNodes;
		n = chs.length;
		changeNext = false;
		for (i = 0; i < chs.length; i++) {
			if (changeNext) {
				temp.swapNode(chs.item(i));
				return;
			}
			if (chs.item(i) == obj) {
				changeNext = true;
			}

			var temp = chs.item(i);
		}
	}
	INVEN.Html.Seq.remove = function(obj) {
		var wrap = obj.parentNode;
		wrap.removeChild(obj);
	}

/* FORM CONTROL FUNCTION */
	/* 폼 항목 값 설정 */
		INVEN.Html.setFormValue = function(fmObj, name, value) {
			function process(obj, value) {
				if (!obj) { return; }
				if (obj.length && (!obj.nodeName || (obj.nodeName.toUpperCase() != 'OPTION'))) {
					for (var i = 0; i < obj.length; i++) {
						process(obj[i], value);
					}
				} else {
					var type = obj.nodeName.toUpperCase();
					if (type == 'INPUT') { type += ':' + obj.getAttribute('type').toUpperCase(); }
					switch (type) {
						case 'OPTION':
							if (obj.value == value) { obj.parentNode.value = value; }
							break;
						case 'INPUT:RADIO':
						case 'INPUT:CHECKBOX':
							if (obj.value == value) { obj.checked = true; }
							break;
						default:
							obj.value = value;
							break;
					}
				}
			}
			fmObj = getObj(fmObj);
			obj = fmObj[name];
			if (!obj) { return false; }
			process(obj, value);
		}
	/* 폼 항목 값 추출 */
		INVEN.Html.getFormValue = function(fmObj, name) {
			function process(obj, value) {
				if (!obj) { return; }
				if (obj.length && (!obj.nodeName || (obj.nodeName.toUpperCase() != 'OPTION'))) {
					for (var i = 0; i < obj.length; i++) {
						process(obj[i], value);
					}
				} else {
					var type = obj.nodeName.toUpperCase();
					if (type == 'INPUT') { type += ':' + obj.getAttribute('type').toUpperCase(); }
					switch (type) {
						case 'OPTION':
							if (obj.selected) { value.push(obj.value); }
							break;
						case 'INPUT:RADIO':
						case 'INPUT:CHECKBOX':
							if (obj.checked) { value.push(obj.value); }
							break;
						default:
							value.push(obj.value);
							break;
					}
				}
			}
			var value = new Array();
			fmObj = getObj(fmObj);
			obj = fmObj[name];
			if (!obj) { return false; }
			process(obj, value);
			if (value.length == 0) {
				return 0;
			} else if (value.length == 1) {
				return value[0];
			} else {
				return value;
			}
		}

/* FORM CONTROL OBJECT */
	/* 초기화 */
		INVEN.Html.FormControl = window.INVEN.Html.FormControl || {};
	/* 생성 */
		INVEN.Html.FormControl.create = function() {
			var temp = new INVEN.Html.FormControl.object();
			return temp;
		}
	/* 오브젝트 */
		INVEN.Html.FormControl.object = function() {
			/* Privates */
				var formObj = null;
				var formFields = new Array();
				var linkControls = new Array();
			/* Main Form */
				this.setForm = function(value) { formObj = getObj(value); }
				this.getForm = function() { return formObj; }
			/* Linked Control */
				this.addLinkControl = function(control) {
					if (control) {
						var fields = control.getFields();
						for (var i in fields) {
							formFields[i] = fields[i];
						}
					}
				}
			/* Form Fields */
				this.getFields = function() { return formFields; }
				this.addField = function(name, caption, passCheck) {
					if (!passCheck) { passCheck = false; }
					if (!formObj) { return; }
					if (!formObj[name]) { return; }
					if (!formFields[name]) { formFields[name] = new Array(); }
					formFields[name]['name'] = name;
					formFields[name]['obj'] = formObj[name];
					formFields[name]['form'] = formObj;
					formFields[name]['caption'] = caption;
					formFields[name]['passCheck'] = passCheck;
				}
				this.clearFields = function() { formFields = new Array(); }
			/* Form Values */
				this.getValue = function(name) {
					if (formFields[name]) {
						return INVEN.Html.getFormValue(formFields[name]['form'], name);
					} else {
						return null;
					}
				}
				this.getValues = function() {
					var temp = new Array();
					for (var name in formFields) {
						temp[name] = this.getValue(name);
					}
					return temp;
				}
				this.setValue = function(name, value) {
					if (formFields[name]) {
						INVEN.Html.setFormValue(formFields[name]['form'], name, value);
					}
				}
				this.setValues = function(data) {
					for (var name in data) {
						this.setValue(name, data[name]);
					}
				}
			/* Sync Linked */
				this.syncLinked = function() {
					for (var name in formFields) {
						var formField = formFields[name];
						if ((formField['form'] != formObj) && (formObj[name])) {
							INVEN.Html.setFormValue(formObj, name, this.getValue(name));
						}
					}
				}
				this.updateLinked = function() {
					for (var name in formFields) {
						var formField = formFields[name];
						if ((formField['form'] != formObj) && (formObj[name])) {
							INVEN.Html.setFormValue(formField['form'], name, INVEN.Html.getFormValue(formObj, name));
						}
					}
				}
			/* Check Form */
				this.checkForm = function() {
					if ((arguments.length == 0) || (!arguments[0])) {
						var temp = new Array();
						for (var name in formFields) {
							if (!formFields[name]['passCheck']) {
								temp.push(name);
							}
						}
						conditions = new Array();
						conditions[0] = temp.join(',');
					} else {
						var conditions = new Array();
						if (arguments[0].constructor == Array) {
							conditions = arguments[0];
						} else {
							conditions = arguments;
						}
					}
					var requires = new Array();
					var allrequires = new Array();
					var result = false;
					for (var i = 0; i < conditions.length; i++) {
						var condition = conditions[i];
						var items = condition.split(',');
						var itemCount = items.length;
						var anyTrue = false;
						var allTrue = true;
						var missing = new Array();
						var allmissing = new Array();
						for (var j = 0; j < itemCount; j++) {
							var item = trim(items[j]);
							if (item) {
								var value = trim(this.getValue(item));
								if (value) {
									anyTrue = true;
								} else {
									missing.push('"' + formFields[item]['caption'] + '"');
									allTrue = false;
								}
								allmissing.push('"' + formFields[item]['caption'] + '"');
							}
						}
						if (allTrue) {
							return true;
						}
						if (anyTrue) {
							requires.push(missing.join(', '));
						}
						allrequires.push(allmissing.join(', '));
					}
					if (requires.length == 0) {
						alert("다음 항목을 입력해 주세요.\n\n" + allrequires.join("\n\n또는\n\n"));
					} else {
						alert("다음 항목을 입력해 주세요.\n\n" + requires.join("\n\n또는\n\n"));
					}
					return false;
				}
		}

/* TAB CONTROL */
	INVEN.Html.TabControl = window.INVEN.Html.TabControl || {};
	INVEN.Html.TabControl.create = function() {
		var obj = new INVEN.Html.TabControl.object();
		return obj;
	}
	INVEN.Html.TabControl.object = function() {
		/* Private Attributes */
			var anchorObjs = new Array();
			var idName = '';
			var anchorClass = '';
			var groupClass = '';
			var groupObj = null;
			var eventName = null;
			var hasLink = false;
			var anchorArray = new Array();
		/* Public Method */
			this.initialize = initialize;
			this.switchTab = switchTab;
		/* Method : Initialize */
			function initialize(idNameValue, anchorClassValue, groupClassValue, eventNameValue, linkCheck) {
				idName = idNameValue;
				anchorClass = anchorClassValue;
				groupClass = groupClassValue;
				eventName = eventNameValue ? eventNameValue : 'click';
				hasLink = linkCheck ? true : false;
				convertAnchors();
			}
		/* Method : Convert Anchors */
			function convertAnchors() {
				var obj = getObj(idName + 'Tabs');
				if (!obj) { return; }
				var aObjs = obj.getElementsByTagName('a');
				var aObjCount = aObjs.length;
				for (var i = 0; i < aObjCount; i++) {
					var aObj = aObjs[i];
					var re = new RegExp(idName + 'A([0-9]+)');
					var temp = aObj.href.match(re);
					if (temp) {
						anchorArray.push(aObj);
						var tabValue = temp[1];
						if (!hasLink) {
							aObj.href = 'javascript:nothing();';
						} else {
							aObj.href = aObj.href.replace('#' + temp[0], '');
						}
						aObj['on' + eventName] = createTabSwitchFunction(tabValue);
						if (eventName == 'click') { aObj.onfocus = function() { this.blur(); }; };
						anchorObjs[tabValue] = aObj;
					}
				}
			}
		/* Method : Create Tab Switch Function */
			function createTabSwitchFunction(tabValue) {
				var fn = function() {
					switchTab(tabValue);
				}
				return fn;
			}
		/* Method : Create Tab Switch Function */
			function switchTab(tabValue, autoMove) {
				var tabKeyArray = new Array();
				var keySelect = 0;
				for (var key in anchorObjs) {
					tabKeyArray.push(key);
				}
				var tabKeyArrayLen = tabKeyArray.length;
				switch (tabValue) {
					case 'random':
						keySelect = Math.round(Math.random() * (tabKeyArrayLen - 1));
						tabValue = tabKeyArray[keySelect];
						break;
				}
				switchTabProcess(tabValue);
				if (autoMove) {
					var timeout = 0;
					var tabCheck = 0;
					var moveProcess = true;
					var fn1 = function() {
						tabCheck++;
						if (tabCheck >= tabKeyArrayLen) {
							tabCheck = tabCheck % tabKeyArrayLen;
						}
						switchTabProcess(tabKeyArray[tabCheck]);
						autoMoveFn();
					}
					var fn2 = function(aObj, count) {
						var tempFn = function() {
							tabCheck = count;
							overFn();
						}
						addEvent(aObj, 'mouseover', tempFn);
					}
					function overFn() {
						moveProcess = false;
						clearTimeout(timeout);
					}
					function outFn() {
						moveProcess = true;
						autoMoveFn();
					}
					var autoMoveFn = function() {
						if (moveProcess) {
							timeout = setTimeout(fn1, (autoMove * 1000));
						}
					}
					if (keySelect) {
						tabCheck = keySelect;
					}
					for (var i in anchorArray) {
						var aObj = anchorArray[i];
						fn2(aObj, i);
						addEvent(aObj, 'mouseout', outFn);
						var contentObj = getObj(idName + 'A' + tabKeyArray[i]);
						fn2(contentObj, i);
						addEvent(contentObj, 'mouseout', outFn);
					}
					autoMoveFn();
				}
			}
			function switchTabProcess(tabValue) {
				if (!groupObj) { groupObj = getObj(idName); }
				INVEN.Html.removeClass(groupObj, groupClass + '([0-9]+)');
				groupObj.className += ' ' + groupClass + tabValue;
				var n = anchorObjs.length;
				for (var key in anchorObjs) {
					var anchorObj = anchorObjs[key];
					INVEN.Html.removeClass(anchorObj, anchorClass + '\-Selected');
				}
				anchorObjs[tabValue].className += ' ' + anchorClass + '-Selected';
			}
	}

/* RESIZE IFRAME */
	function checkIframeSize(obj, width, height) {
		if (width === undefined) { width = true; }
		if (height === undefined) { height = true; }
		var obj = getObj(obj);
		var nodeType = obj.nodeName.toLowerCase();
		switch (nodeType) {
			case 'iframe':
				var documentObj = obj.contentWindow.document ? obj.contentWindow.document : obj.contentDocument;
				if (width) {
					obj.style.width = documentObj.body.scrollWidth + 'px';
				}
				if (height) {
					obj.style.height = documentObj.body.scrollHeight + 'px';
				}
				break;
		}
	}
