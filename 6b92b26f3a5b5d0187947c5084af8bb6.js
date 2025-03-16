$(document).on("click", ".countHitList", function () {
                    var $this = $(this), judge = 'false', hot = 'false', fieldName = '', itemid = $this.attr("data-itemid");
                    if ($this.hasClass("countHitSql")) { judge = "true"; }
                    if ($this.attr("data-hot")) { hot = $this.attr("data-hot"); }
                    if ($this.attr("data-fieldName")) { fieldName = $this.attr("data-fieldName"); }

                    if (itemid.indexOf(",") > 0) {
                        //console.log('多个id');
                        var id = itemid.split(",");
                        for (var i = 0; i < id.length; i++) {
                            $.ajax({
                                type: "GET", dataType: "jsonp", url: "//click.gamersky.com/Common/GetHits.aspx",
                                data: { id: id[i], script: "3", hot: hot, fieldName: fieldName, judge: judge },
                                success: function (data) { }
                            });
                        }
                    } else {
                        //console.log('单个id');
                        $.ajax({
                            type: "GET", dataType: "jsonp", url: "//click.gamersky.com/Common/GetHits.aspx",
                            data: { id: itemid, script: "3", hot: hot, fieldName: fieldName, judge: judge },
                            success: function (data) { }
                        });
                    }
                });