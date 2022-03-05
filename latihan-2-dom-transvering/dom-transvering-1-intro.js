/*
======================================================
  Menseleksi DOM berdasarkan hubungan Parent - Child
======================================================
*/

// Menseleksi element <body>
var body = document.body;

// Mendapatkan element childrent dari <body>
var bodyChilds = body.children;

// Menampilkan DOM yang menjadi child dari <body> dalam bentuk array
console.log(bodyChilds);

// Menseleksi element <div id="contoh-div-1">
var contohDiv1 = document.getElementById("contoh-div-1");

// Mendapatkan element children dari <div id="contoh-div-1"> dalam bentuk array
var contohDiv1Childs = contohDiv1.children;

console.log(contohDiv1Childs);
