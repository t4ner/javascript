//HİGHER ORDER FUNCTİONS
//Callback
//a callback function, the name of the function could be any name
const callback = (n) => {
  return n ** 2
}
//function that takes other function as a callback
function cube(callback, n) {
  return callback(n) * n
}  ​
console.log(cube(callback, 3)) //27

//setInterval
function sayHello() {
  console.log("Hello");
}
setInterval(sayHello, 1000); // Her 1 saniyede bir Hello yazar.

//setTimeout
function sayHello() {
  console.log("Hello");
}
setTimeout(sayHello, 2000); // Kod çalıştıktan 2 saniye sonra bir defa Hello yazar ve biter

//clearInterval
const interval = setInterval(sayHello, 1000);
setTimeout(() => {
  clearInterval(interval);
}, 5000); //5 saniye sonra setInterval durur.

//forEach
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => console.log(num));
console.log(sum); // 1 2 3 4 5

let sum = 0;
const numbers1 = [1, 2, 3, 4, 5];
numbers1.forEach((num) => (sum += num));
console.log(sum); //15

const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];
countries.forEach((element) => console.log(element.toUpperCase())); //FINLAND DENMARK SWEDEN NORWAY ICELAND

//map
const numbers2 = [1, 2, 3, 4, 5];
const numbersSquare = numbers2.map((num) => num * num);
console.log(numbersSquare); //[1, 4, 9, 16, 25]

const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const namesToUpperCase = names.map((name) => name.toUpperCase());
console.log(namesToUpperCase); //['ASABENEH', 'MATHIAS', 'ELIAS', 'BROOK']

let users = [
  {
    id: 1,
    name: "Taner",
    age: 22,
  },
  {
    id: 2,
    name: "Furkan",
    age: 18,
  },
];
users.map((user) => {
  if (user.id == 2) {
    users.name = "Ömer";
  }
  return user;
});
//forEach genellikle bir dizi üzerinde gezinip her eleman için bir işlem gerçekleştirmek için kullanılırken,
//map ise her eleman üzerinde belirtilen bir işlemi gerçekleştirip yeni bir dizi oluşturmak için kullanılır.

//filter
const scores = [
  { name: "Taner", score: 95 },
  { name: "Furkan", score: 98 },
  { name: "Ömer", score: 80 },
  { name: "Akın", score: 50 },
];
const scoresGreaterEighty = scores.filter((score) => score.score > 80);
console.log(scoresGreaterEighty);

//reduce
const numbers3 = [1, 3, 5, 7, 9];
numbers3.reduce((oldValue, currentValue) => oldValue + currentValue, 0); //25

//every
let users2 = [
  {
    id: 1,
    name: "Taner",
    age: 22,
    gender: 1,
  },
  {
    id: 2,
    name: "Furkan",
    age: 18,
    gender: 1,
  },
  {
    id: 3,
    name: "Gizem",
    age: 21,
    gender: 0,
  },
];
users2.every((user) => user.gender == 1); //false => true olması için tüm gender değerleri 1 olmalı
users2.some((user) => user.gender == 1); //true => elemanlardan bir tanesinin bile gender değeri 1 ise true

//find
const ages = [24, 22, 25, 32, 35, 18];
const age = ages.find((age) => age > 20);
console.log(age); //22 koşulu sağlayan ilk değeri getirir.
const ageIndex = ages.findIndex((age) => age < 20);
console.log(ageIndex); // 1

//sort
//Sayı değerleri string olarak sıralanırsa bize yanlış sonuç verir.
//Sıralama yöntemi orijinal diziyi değiştirir.
//Sıralama yöntemini kullanmaya başlamadan önce orijinal verileri kopyalamanız önerilir .
const products = ["Milk", "Coffee", "Sugar", "Honey", "Apple", "Carrot"];
console.log(products.sort()); // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']

const numbers4 = [9.81, 3.14, 100, 37];
console.log(numbers4.sort()); //[100, 3.14, 37, 9.81]
numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers); // [3.14, 9.81, 37, 100]

numbers.sort(function (a, b) {
  return b - a;
});
console.log(numbers); //[100, 37, 9.81, 3.14]

