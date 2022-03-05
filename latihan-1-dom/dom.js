var pageTitleElement = document.getElementById("page-title");
// Menyeleksi DOM bedasarkan ID element dan mempunyai ke dalam variabel. Isinya merupakan object HTML element

var pageBoxElements = document.getElementsByClassName("page-box");
// Menyeleksi DOM bedasarkan nama class element dan menjampungnya ke dalam variabel. Isinya merupakan array dari object HTML element, walau <h1> hanya ada 1

var pageHeading = document.getElementsByTagName("h1");
// Menyeleksi DOM berdasarkan tag <h1> dan menampungnya ke dalam variabel. Isinya merupakan array dari object HTML element.

// Mengakses isi DOM

var pageTitleElementContent = pageTitleElement.innerHTML;
console.log("isi <div id='page-title'> : " + pageTitleElementContent);
// isi <div id='page-title'> : Sample Title Page

var pageBoxElementsContent = pageBoxElements.innerHTML;
console.log("isi <div class='page-box'> : " + pageBoxElementsContent);
// isi <div class='page-box'> : undefined

// Melooping array pageBoxElements
for (var i = 0; i < pageBoxElements.length; i++) {
  var currentPageBoxElement = pageBoxElements[i];

  var currentPageBoxElementContent = currentPageBoxElement.innerHTML;

  // Mengambil isi elemen pageBoxElements yang kedua, yaitu index ke 0
  var firstPageBoxElement = pageBoxElements[0];
  var firstPageBoxElementContent = firstPageBoxElement.innerHTML;

  // Mengambil isi elemen pageBoxElements yang kedua, yaitu index ke 1
  var secondPageBoxElement = pageBoxElements[1];
  var secondPageBoxElementContent = secondPageBoxElement.innerHTML;

  // Mengambil isi elemen pageBoxElements yang ketiga, yaitu index ke 2
  var thirdPageBoxElement = pageBoxElements[2];
  var thirdPageBoxElementContent = thirdPageBoxElement.innerHTML;

  // Menampilkan isi elemen dengan console.log
  console.log(
    'isi <div class="page-box"> yang pertama:' + firstPageBoxElementContent
  );
  console.log(
    'isi <div class="page-box"> yang kedua:' + secondPageBoxElementContent
  );
  console.log(
    'isi <div class="page-box"> yang ketiga:' + thirdPageBoxElementContent
  );
}
