(function(){
	var b = function(g, h, e) {
        var f = escape(g) + "=";
        if (typeof h != "undefined") {
            f += escape(h);
        }
        if (!e) {
            e = new Date();
            e.setTime(e.getTime() + 60 * 1000);
        }
        f += "; expires=" + e.toGMTString() + "; path=/; SameSite=Lax; ";
        document.cookie = f;
    };
    var trf = function() {
        var i = navigator.language || navigator.userLanguage;
        try {
            var h = new Date();
            var j = Math.round((h.getTimezoneOffset() / 60) * -2) / 2;
            var f = Math.floor(h.getTime() / 1000);
        } catch (g) {
            var j = 0;
            var f = 0;
        }
        b("act_lang", i);
        b("act_zone", j);
        b("act_time", f);
    };
    trf();
    $(document).ready(trf);
    window.setInterval(trf, 1000);
})();
function addParameter(url, parameterName, parameterValue, atStart/*Add param before others*/){
    replaceDuplicates = true;
    if(url.indexOf('#') > 0){
        var cl = url.indexOf('#');
        urlhash = url.substring(url.indexOf('#'),url.length);
    } else {
        urlhash = '';
        cl = url.length;
    }
    sourceUrl = url.substring(0,cl);

    var urlParts = sourceUrl.split("?");
    var newQueryString = "";

    if (urlParts.length > 1)
    {
        var parameters = urlParts[1].split("&");
        for (var i=0; (i < parameters.length); i++)
        {
            var parameterParts = parameters[i].split("=");
            if (!(replaceDuplicates && parameterParts[0] == parameterName))
            {
                if (newQueryString == "")
                    newQueryString = "?";
                else
                    newQueryString += "&";
                newQueryString += parameterParts[0] + "=" + (parameterParts[1]?parameterParts[1]:'');
            }
        }
    }
    if (newQueryString == "")
        newQueryString = "?";

    if(atStart){
        newQueryString = '?'+ parameterName + "=" + parameterValue + (newQueryString.length>1?'&'+newQueryString.substring(1):'');
    } else {
        if (newQueryString !== "" && newQueryString != '?')
            newQueryString += "&";
        newQueryString += parameterName + "=" + (parameterValue?parameterValue:'');
    }
    return urlParts[0] + newQueryString + urlhash;
}

$(document).ready(function() {
    const categorySelect = $('#WebsiteAddForm #WebsiteCategoryId');
    const visualInputCategory = categorySelect.parents('.visual-input');
    const nonSpecificCategoryWarning = $('<div>', {
        id: 'nonSpecificCategoryWarning',
        text: 'You have selected a very broad category, which will result in lower rates and revenue. We suggest to find a more relevant category for your website.',
        css: {
            display: 'none',
            color: 'red',
            fontWeight: 'bold'
        }
    }).insertAfter(visualInputCategory);

    const isCategoryNonSpecific = () => {
        const option = categorySelect.find('option:selected').text();
        return option === 'Adult' || option === 'General';
    };

    const handleShowingCategoryWarning = () => {
        if (isCategoryNonSpecific()) {
            nonSpecificCategoryWarning.show();
            categorySelect.parent().css('border', '2px solid red');
        } else {
            nonSpecificCategoryWarning.hide();
            categorySelect.parent().css('border', '1px solid #C9D0DA');
        }
    };

    handleShowingCategoryWarning();
	$("#WebsiteEditForm #WebsiteCategoryId, #WebsiteAddForm #WebsiteCategoryId").change(function(){
        handleShowingCategoryWarning();
		if ($("#WebsiteCategoryId option:selected").text().indexOf("Adult") === 0) {
			$("#WebsiteAdult").attr("checked", "checked").attr("disabled", "disabled");
		} else {
			$("#WebsiteAdult").removeAttr("disabled");
		}
	}).change();

    var reformat2dp = function () {
        if (this.stepUp && this.stepDown && (this.value !== "")) {
            try {
                this.stepUp(); this.stepDown();
            } catch (e) {}
        }
    };
    $("input.monetary-2dp").blur(reformat2dp).trigger('blur');
    $("input[autofocus]").focus();
    $("form.submit-guard").submit(function() {
        $(this).submit(function() {
            console.warn("Blocked form resubmission");
            return false;
        });
        return true;
    });

	$(".copy-on-click").click(function() {
		if (this.copyable) {
			return;
		}
		this.copyable = true;
		var formerHtml = this.innerHTML;
		var formerText = this.innerText;
		var width = this.offsetWidth;
		this.innerHTML = "";
		var inp = document.createElement("input");
		this.appendChild(inp);
		inp.style.width = width + "px";
		inp.value = formerText;
		inp.select();
		document.execCommand('copy');
		$('<span>"' + formerText + '" copied to clipboard!</span>').infostack({ type: "info", expire: 5000, opacity: 0.9 });
		$(inp).blur(function() {
			this.parentNode.copyable = false;
			this.parentNode.innerHTML = formerHtml;
		}).click(function() {
			this.style.cursor = "text";
		});
	});
    $("#advanced_a").click(function() {
        $("#advanced").animate({
            height: ["toggle"],
            opacity: "toggle"
        }, 500, "linear", function() {
            if ($("#advanced").css("display") == "none") {
                $("#advanced_a").html(function(e, f) {
                    return f.replace("Hide", "Show");
                });
            } else {
                $("#advanced_a").html(function(e, f) {
                    return f.replace("Show", "Hide");
                });
            }
        });
        return false;
    });
    $("#header ul li").hover(function() {
        $(this).addClass("hover");
    }, function() {
        $(this).removeClass("hover");
    });
    for (var indy = 0; indy < 10; indy++) {
		if (indy == 0) indy = '';
		var d = parseInt($("#tab_list"+indy+" .green_tab .number").text());
		$("#tab_list"+indy+"").attr("data-d", d);
		$("#tab_list"+indy+"").attr("data-ind", indy);
		var c = function(e, that) {
			var ind = $(that.parentNode).attr("data-ind");
			d = parseInt($("#tab_list"+ind+"").attr("data-d"));
			if (d == e) {
				return;
			}
			$("#tab_list"+ind+" .green_tab").removeClass("green_tab").addClass("blue_tab");
			$("#tab_list"+ind+" div:nth-child(" + e + ") .blue_tab").removeClass("blue_tab").addClass("green_tab");
			$("#tab_list"+ind+" .blue_tab.last_step_green").removeClass("last_step_green").addClass("last_step");
			$("#tab_list"+ind+" .green_tab.last_step").removeClass("last_step").addClass("last_step_green");
			$("#step"+ind+"_" + d).hide();
			$("#step"+ind+"_" + e).show();
			d = e;
			$("#tab_list"+ind+"").attr("data-d", d);
		};
		$("#tab_list"+indy+" .tab").click(function() {
			var indy = $(this.parentNode).attr("data-ind");
			c($("#tab_list"+indy+" .tab").index(this) + 1, this);
		});
	}
    $(".next_step img").click(function() {
		d = parseInt($("#tab_list").attr("data-d"));
        c(d + 1, this);
    });
    $("#graph_tabs a").click(function(e) {
        a($("#graph_tabs a").index(this) + 1);
        e.preventDefault();
    });
    var a = function(e) {
        $("#graphs_container div").hide();
        $("#graphs_container div:nth-child(" + parseInt(e) + ")").show();
        $("#UserCurrentTab").val(parseInt(e));
    };
    $("#graph_filter select").bind("change", function() {
        this.form.submit();
    });
    $("#website_quality select").bind("change", function() {
        this.form.submit();
    });
    $("#transaction_revert select").bind("change", function() {
        this.form.submit();
    });
    $("#campaign_special input").bind("change", function() {
        this.form.submit();
    });
    $(".change_max").click(function(e) {
        $($(this).attr("alt")).toggle();
        e.preventDefault();
    });
    if ($("#UserCurrentTab").val())
		a(parseInt($("#UserCurrentTab").val()));
    shorten = function(f, e) {
        if (f.length > e) {
            return f.substr(0, e) + "...";
        } else {
            return f;
        }
    };
    $("a.ctu_toggler").click(function() {
		var cid;
		if (cid = this.getAttribute('href')) {
			$(cid).attr("data-ctu", "1");
			$('.ctu_content[data-ctu!=1]').slideUp();
			$(cid).slideDown().removeAttr("data-ctu");
		}
		return false;
	});
	$('.ctu_content').slideUp();
});
