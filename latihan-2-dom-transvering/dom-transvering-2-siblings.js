/*
===============================================
  Menseleksi DOM berdasarkan hubungan Sibling
===============================================
*/

// Menyeleksi element <div id="contoh-div-1">
var contohDiv1 = document.getElementById("contoh-div-1");

// Mendapatkan sibling setelah <div id="contoh-div-1">
var contohDiv1NextSibling = contohDiv1.nextElementSibling;

console.log(contohDiv1NextSibling);

// Mendapatkan sibling sebelum <div id="contoh-div-1">
var contohDivPrevSibling = contohDiv1.previousElementSibling;

console.log(contohDivPrevSibling);
