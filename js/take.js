/* ==========================
:: JS Name: Disshit Take
:: Author: NaeemBolchhi
:: License: GPL-3.0 License
:: Landing Page: https://naeembolchhi.github.io/
:: Telegram Profile: https://t.me/NaeemBolchhi
:: Description: Contains JavaScript for Disshit.
:: Version: v1.0
:: Created: 23/07/2021
========================== */

// Setting Variables
var type = getUrlVars().x;
if (type === "lnk") {
  var info = decodeURIComponent(getUrlVars().y);
}
if (type === "dnl") {
  var info = decodeURIComponent(getUrlVars().y);
}
if (type === "mgn") {
  var temp = 'magnet:?xt=urn:btih:' + decodeURIComponent(getUrlVars().y);
  var info = temp.replace("magnet:?xt=urn:btih:magnet:?xt=urn:btih:", "magnet:?xt=urn:btih:");
}
if (type === "drv") {
  var info = 'https://drive.google.com/u/0/uc?id=' + decodeURIComponent(getUrlVars().y) + '&export=download';
}
var code = getUrlVars().z;
var site = window.location.origin;

// Generating Link
var takeLink = "Unknown error. Try again."
if (code === "1") {
    var takeLink = site + '/get.html?x=' + type + '&y=' + encodeDisshit(info) + '&z=' + code;
}
if (code === "0") {
    var takeLink = site + '/get.html?x=' + type + '&y=' + info + '&z=' + code;
}

// Placing Link
document.getElementById('takeme').innerHTML = takeLink;

// Selecting Text
function selectText(element) {
    document.getElementById(element).select();
}

// Clicking Copy
function copyText(element) {
    document.getElementById(element).select();
    document.execCommand("copy");
    document.getElementById('btn-copy').innerHTML = "Copied!";
}

// Shortening Link
function shortenLink() {
	var tempLink = document.getElementById('takeme').innerHTML;
	let url = 'https://is.gd/create.php?format=json&url=' + tempLink;
	let response = await fetch(url);
	let shortMe = await response.json();
	document.getElementById('takeme').innerHTML = shortMe.shorturl;
    document.getElementById('btn-shorten').style.display = "none";
    document.getElementById('btn-shortened').style.display = "block";
	document.getElementById('btn-copy').classList = "btn btn-right alpha pointer";
	document.getElementById('btn-copy').innerHTML = "Copy";
}

// Verify Values
if (type !== undefined) {
    document.getElementById('default').style.display = "none";
    document.getElementById('take').style.display = "flex";
}
