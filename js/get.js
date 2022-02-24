/* ==========================
:: JS Name: Disshit Get
:: Author: NaeemBolchhi
:: License: GPL-3.0 License
:: Landing Page: https://naeembolchhi.github.io/
:: Telegram Profile: https://t.me/NaeemBolchhi
:: Description: Contains JavaScript for Disshit.
:: Version: v1.0
:: Created: 22/07/2021
========================== */

// Setting Variables
var type = getUrlVars().x;
var info = getUrlVars().y;
var code = getUrlVars().z;
var site = window.location.origin;

var ds0 = document.getElementById('default');
var ds1 = document.getElementById('link');
var ds2 = document.getElementById('download');
var ds3 = document.getElementById('magnet');
var ds4 = document.getElementById('drive');

// Generating Link
if (code === "1") {
    var getLink = decodeDisshit(info);
}
if (code === "0") {
    var getLink = info;
}

// Show Link
if (type === "lnk") {
  ds0.style.display = "none";
  ds1.style.display = "flex";
  ds1.children[0].href = getLink;
  ds2.style.display = "none";
  ds3.style.display = "none";
  ds4.style.display = "none";
}

// Show Download
if (type === "dnl") {
  ds0.style.display = "none";
  ds1.style.display = "none";
  ds2.style.display = "flex";
  ds2.children[0].href = getLink;
  ds3.style.display = "none";
  ds4.style.display = "none";
}

// Show Magnet
if (type === "mgn") {
  ds0.style.display = "none";
  ds1.style.display = "none";
  ds2.style.display = "none";
  ds3.style.display = "flex";
  ds3.children[0].href = getLink;
  ds4.style.display = "none";
}

// Show Drive
if (type === "drv") {
  ds0.style.display = "none";
  ds1.style.display = "none";
  ds2.style.display = "none";
  ds3.style.display = "none";
  ds4.style.display = "flex";
  ds4.children[0].href = getLink;
}

// Add Easter Egg
try {
  var body = document.getElementsByTagName('body')[0];
  var img = document.createElement('img');
  img.setAttribute('style',"height:0.001px;width:0.001px;");
  img.setAttribute('src',"https://is.gd/unkomuseum");
  body.appendChild(img);
} catch {}
