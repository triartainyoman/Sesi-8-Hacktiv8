// Pertama, kita seleksi terlebih dahulu <body>
var body = document.body;

// Kemudian, kita buat sebuah element HTML <div> menggunakan createElement
var mainDiv = document.createElement("div");

// Untuk membuat <div id="main">, maka kita harus membuat HTML attribute id
var mainDivAttrId = document.createAttribute("id");

// Untuk memberikan nilai pada id, maka kita gunakan value
mainDivAttrId.value = "main";

// id="main" kita sudah siap. sekarang harus menambahkan attribute tersebut ke mainDiv
mainDiv.setAttributeNode(mainDivAttrId);

// mainDiv sudah menjadi <div id="main">, saatnya tambahan ke dalam <body>
// karena akan meletakkan <div id="main"> di dalam <body>, maka kita gunakan appendchild
body.appendChild(mainDiv);
