//Boolean
let isLightOn = true;
let isRaining1 = true;
let isMarried = false;
let falseValue = 4 < 3; //false

//Undefined
let firstName;
console.log(firstName); //undefined

//null
let empty = null;
console.log(empty); //null

//Assignment Operators
// x+=y => x = x + y
// x-=y => x = x - y
// x*=y => x = x * y
// x/=y => x = x / y
// x%=y => x = x % y
// x**=y => x = x ** y

//Comparison Operators
// x == y => x eşittir y => sadece değere bakar
// x === y => x eşittir y => hem değere hemde veri tipine bakar
// x != y => x eşit değildir y
// x > y => x büyüktür y
// x >= y => x büyük eşittir y

//Logicial Operators
const check = 4 > 3 && 10 > 5; //true && true => true
const check2 = 4 > 3 && 10 < 5; //true && false => false
const check3 = 4 < 3 && 10 < 5; // false && false => false

const check4 = 4 > 3 || 10 > 5; //true || true => true
const check5 = 4 > 3 || 10 < 5; //true || false => true
const check6 = 4 < 3 || 10 < 5; //false || false => false

let check7 = !(4 > 3); //false

//Increment Operator
let count = 0;
console.log(++count); //1
let count1 = 0;
console.log(count1++); //0
console.log(count1); //1

let count2 = 0;
console.log(--count2); //-1
let count3 = 0;
console.log(count3--); //0
console.log(count3); //-1

//Ternary Operator
let isRaining = true;
isRaining
  ? console.log("You need a rain coat")
  : console.log("No need for a rain coat");

//Date Object
const now = new Date();
console.log(now); // Sat Jan 04 2020 00:56:41 GMT+02000
console.log(now.getFullYear()); //2020
console.log(now.getMonth()); //0 => month(0-11)
console.log(now.getDate()); //4
console.log(now.getDay()); //6 => Sunday is 0, Monday is 1 (0-6)
console.log(now.getHours()); //0 because the time is 00:56:41
console.log(now.getMinutes()); //56 because the time is 00:56:41
console.log(now.getSeconds()); //41 because the time is 00:56:41

const date = new Date();

let year = date.getFullYear(),
  month = date.getMonth(),
  day = date.getDate(),
  hour = date.getHours(),
  minute = date.getMinutes(),
  second = date.getSeconds(),
  dayNumber = date.getDay();
let days = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];
let months = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
];
let humanReadableDate = `${day} ${months[month]} ${year}, ${days[dayNumber]}, ${hour}:${minute}:${second}`;
console.log(humanReadableDate); //12 Ocak 2022, Çarşamba, 13:46:20
