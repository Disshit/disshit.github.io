/* ==========================
:: JS Name: Disshit Base
:: Author: NaeemBolchhi
:: License: GPL-3.0 License
:: Landing Page: https://naeembolchhi.github.io/
:: Telegram Profile: https://t.me/NaeemBolchhi
:: Description: Contains JavaScript and JQuery for Disshit.
:: Version: v1.0
:: Created: 16/07/2021
========================== */

// Encoding
function encodeDisshit(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
      function toSolidBytes(match, p1) {
          return String.fromCharCode('0x' + p1);
  }));
}

// Decoding
function decodeDisshit(str) {
  return decodeURIComponent(atob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

// Layer Switching
function layerSwitch() {
  var layer0 = document.getElementById('bottom');
  var layer1 = document.getElementById('top');
  if (layer0.style.display === "none") {
    layer0.style.display = "flex";
    layer1.style.display = "none";
  } else {
    layer1.style.display = "flex";
    layer0.style.display = "none";
  }
}
