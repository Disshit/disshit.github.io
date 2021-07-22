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
let type = getUrlVars().x;
if (type === "lnk") {
  let info = getUrlVars().y;
}
if (type === "dnl") {
  let info = getUrlVars().y;
}
if (type === "mgn") {
  var temp = 'magnet:?xt=urn:btih:' + getUrlVars().y;
  let info = temp.replace("magnet:?xt=urn:btih:magnet:?xt=urn:btih:", "magnet:?xt=urn:btih:");
}
if (type === "drv") {
  let info = 'https://drive.google.com/u/0/uc?id=' + getUrlVars().y + '&export=download';
}
let code = getUrlVars().z;
let site = window.location.origin;

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
	document.getElementById('btn-copy').style.display = "none";
	document.getElementById('btn-copied').style.display = "block";
	document.getElementById('btn-shorten').style.display = "none";
	document.getElementById('btn-shortened').style.display = "block";
}
function copiedText(element) {
	document.getElementById(element).select();
	document.execCommand("copy");
}

// Shortening Link
function shortenLink() {
	window.open("https://tiny.cc/", "_blank");
}

// Verify Values
if (type !== undefined) {
	document.getElementById('default').style.display = "none";
	document.getElementById('take').style.display = "flex";
}
