//Console Methods
console.log("30 Days of JavaScript");

console.log("%d %s of JavaScript", 30, "Days"); // => 30 Days of Javascript

//CSS
console.log("%cDUR %cYOLCU", "color:green", "color:red");

//console.warn => uyarı vermek için kullanılır.
console.warn("Uyarı Mesajı");

//console.error => hata mesajı vermek için kullanılır
console.error("Hata mesajı");

//console.table => console u tablo gibi gösterir. Dizi veya obje olmalı
const user = {
  name: "Taner",
  title: "Programmer",
  country: "Turkey",
  city: "İstanbul",
  age: 22,
};
console.table(user);

//console.time => işlem zamanlıyıcı
console.time("calculate 1m array");
new Array(10e5).fill("abc").map((value, index) => index);
console.timeEnd("calculate 1m Array"); //calculate 1m Array: 110.674304323 ms

// console.info => console.log ile farkı yok aynılar.

// console.assert => console.assert() yöntemleri, iddianın yanlış olması durumunda konsola bir hata mesajı yazar.
console.assert(4 > 3, "4 is greater than 3"); // no result
console.assert(3 > 4, "3 is not greater than 4"); // Assertion failed: 3 is not greater than 4

//console.group => çıktıları grup halinde görmemizi sağlar
const names = ["Taner", "Furkan", "Gizem", "Ömer"];
console.group("Names");
console.log(names);
console.groupEnd();

//console.count => console.count() işlevinin kaç kez çağrıldığını yazdırır.
const func = () => {
  console.count("Function has been called");
};
func();
func();
func();
/*
Function has been called: 1
Function has been called: 2
Function has been called: 3
*/

//console.clear() => tarayıcı konsolunu temizler.
