//LOOPS
for (let i = 0; i <= 5; i++) {
  console.log(i);
} // 0 1 2 3 4 5

for (let i = 5; i >= 0; i--) {
  console.log(i);
} // 5 4 3 2 1 0

for (let i = 0; i <= 5; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}
/* 0 * 0 = 0
1 * 1 = 1
2 * 2 = 4
3 * 3 = 9
4 * 4 = 16
5 * 5 = 25 */

const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
const newArr = [];
for (let i = 0; i < countries.length; i++) {
  newArr.push(countries[i].toUpperCase());
} // ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]

const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i]; // can be shorten, sum += numbers[i]
}
console.log(sum); // 15

const numbers2 = [1, 2, 3, 4, 5];
const newArr2 = [];
let sum2 = 0;
for (let i = 0; i < numbers2.length; i++) {
  newArr2.push(numbers2[i] ** 2);
}
console.log(newArr2); // [1, 4, 9, 16, 25]

let i = 0;
while (i <= 5) {
  console.log(i);
  i++;
} // 0 1 2 3 4 5

let a = 0;
do {
  console.log(a);
  a++;
} while (a <= 5);
// 0 1 2 3 4 5

const numbers3 = [1, 2, 3, 4, 5];
for (const num of numbers3) {
  console.log(num);
} // 1 2 3 4 5

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
for (const tech of webTechs) {
  console.log(tech.toUpperCase());
} // HTML CSS JAVASCRIPT REACT NODE MONGODB

for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    break;
  }
  console.log(i);
} // 0 1 2

for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
} // 0 1 2 4 5 //! 3 değerini almadı.
