/* ==========================
:: JS Name: Disshit Forge
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
var ds0 = document.getElementById('default');
var ds1 = document.getElementById('link');
var ds2 = document.getElementById('download');
var ds3 = document.getElementById('magnet');
var ds4 = document.getElementById('drive');

// Show Link
if (type === "link") {
  ds0.style.display = "none";
  ds1.style.display = "flex";
  ds2.style.display = "none";
  ds3.style.display = "none";
  ds4.style.display = "none";
}

// Show Download
if (type === "download") {
  ds0.style.display = "none";
  ds1.style.display = "none";
  ds2.style.display = "flex";
  ds3.style.display = "none";
  ds4.style.display = "none";
}

// Show Magnet
if (type === "magnet") {
  ds0.style.display = "none";
  ds1.style.display = "none";
  ds2.style.display = "none";
  ds3.style.display = "flex";
  ds4.style.display = "none";
}

// Show Drive
if (type === "drive") {
  ds0.style.display = "none";
  ds1.style.display = "none";
  ds2.style.display = "none";
  ds3.style.display = "none";
  ds4.style.display = "flex";
}
