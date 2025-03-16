/*
Added By: Steven Ng
Description: Per Erick Tay, sponsors request to remove Latest Videos side module from a specific video page.
Github Issue: n/a
Remove: When promotion is over.
Url: https://www.gamespot.com/videos/pubg-mobiles-4th-anniversary-top-four-favorites/2300-6457685/
*/
if (document.URL.match(/2300-6457685/)) { document.getElementsByClassName('pod-recirc')[1].style.display="none"; }

/*
Added By: Patrick Galicia
Description: Remove merchant service widget from a specific article page
Remove: When editors said that we can remove it
Url: https://www.gamespot.com/articles/gamespot-sweepstakes-in-collaboration-with-stockx/1100-6509050/
*/
if (document.URL.match(/1100-6509050/)) {document.querySelector('.js-affiliate-offers').style.display="none"; }