var click = $("#dtkframebar-menu");
 click.click(function(e) {
 var framebarasset = document.getElementsByClassName("framebarasset-lazy");
 if(framebarasset.length != 0) {
 var imgframebarasset = framebarasset[0].querySelectorAll("[data-src]");
 for (let i = 0; i < imgframebarasset.length; i++) {
 imgframebarasset[i].setAttribute("src", imgframebarasset[i].getAttribute("data-src"));
 imgframebarasset[i].removeAttribute("data-src")
 }
 }
 });