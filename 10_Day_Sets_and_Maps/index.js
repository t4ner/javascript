//set - map
//set
const companiess = new Set();
console.log(companies); // Set(0) {}

const languages = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
];

const setOfLanguages = new Set(languages);
console.log(setOfLanguages); //Set(4) {"English", "Finnish", "French", "Spanish"}

const companies = new Set(); // creating an empty set
console.log(companies.size); // 0
companies.add("Google"); // add element to the set
companies.add("Facebook");
companies.add("Amazon");
companies.add("Oracle");
companies.add("Microsoft");
console.log(companies.size); // 5 elements in the set
console.log(companies); //Set(5) {"Google", "Facebook", "Amazon", "Oracle", "Microsoft"}
console.log(companies.delete("Google"));
console.log(companies.size); // 4 elements left in the set
console.log(companies.has("Apple")); // false
console.log(companies.has("Facebook")); // true
companies.clear();
console.log(companies); //Set(0) {}

let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];
let c = [...a, ...b];
let C = new Set(c);
console.log(C); //Set(6) {1, 2, 3, 4, 5,6}

let a2 = [1, 2, 3, 4, 5];
let b2 = [3, 4, 5, 6];
let A2 = new Set(a2);
let B2 = new Set(b2);
let c2 = a.filter((num) => B2.has(num));
let C2 = new Set(c2);
console.log(C2); //Set(3) {3, 4, 5}

let a3 = [1, 2, 3, 4, 5];
let b3 = [3, 4, 5, 6];
let A3 = new Set(a3);
let B3 = new Set(b3);
let c3 = a.filter((num) => !B3.has(num));
let C3 = new Set(c3);
console.log(C3); //Set(2) {1, 2}

//map => objelerde key değerine tüm veri tiplerini verebilmemizi sağlar
const maps = new Map();
console.log(map); //Map(0) {}

countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
const map = new Map(countries);
console.log(map); // Map(3) {"Finland" => "Helsinki", "Sweden" => "Stockholm", "Norway" => "Oslo"}
console.log(map.size); //3

const countriesMap = new Map();
console.log(countriesMap.size); // 0
countriesMap.set("Finland", "Helsinki");
countriesMap.set("Sweden", "Stockholm");
countriesMap.set("Norway", "Oslo");
console.log(countriesMap); //Map(3) {"Finland" => "Helsinki", "Sweden" => "Stockholm", "Norway" => "Oslo"}
console.log(countriesMap.size); //3

console.log(countriesMap.get("Finland")); //Helsinki
