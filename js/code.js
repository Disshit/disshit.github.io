/* ==========================
:: JS Name: Disshit Code
:: Author: NaeemBolchhi
:: License: GPL-2.0 License
:: Landing Page: https://naeembolchhi.github.io/
:: Telegram Profile: https://t.me/NaeemBolchhi
:: Description: Helps in encoding/decoding strings to/from Base64.
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