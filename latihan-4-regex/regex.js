// Cara membuat RegExp Object

// var foo = /ab+c/;

// console.log(foo);
// console.log(typeof foo);

// var bar = new RegExp("ab+c");

// console.log(bar);
// console.log(typeof bar);

// Reg Exp Object Method

// var foo = "Belajar JavaScript";
// var pola = /JavaScript/;

// console.log(pola.test(foo));
// console.log(/Belajar/.test(foo));
// console.log(/belajar/.test(foo));

// Method RegExp.prototype.exec()
// var foo = "1 jam sama dengan 60 menit, juga sama dengan 3600 detik";
// var pola = /\d+/;

// console.log(pola.exec(foo));

// var foo = "1 jam sama dengan 60 menit, juga sama dengan 3600 detik";
// var pola = /\d+/g;

// console.log(pola.exec(foo));
// console.log(pola.exec(foo));
// console.log(pola.exec(foo));

// var foo = "Belajar JavaScript";

// console.log(/JavaScript/.test(foo));
// console.log(/javaScript/.test(foo));
// console.log(/Belajar/.test(foo));
// console.log(/belajar/.test(foo));
// console.log(/Java/.test(foo));
// console.log(/ajar/.test(foo));

// Pola Character Set
var pola = /[abcde]../;

console.log(pola.test("abaa"));
console.log(pola.test("fba"));
console.log(pola.test("1dd"));
console.log(pola.test("add"));
console.log(pola.test("dd"));
console.log(pola.test("belajar"));
