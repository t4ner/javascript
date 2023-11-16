const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
]; // List of web technologies

console.log(webTechs); //all the array items
console.log(webTechs.length); //to know the size of the array, which is 7
console.log(webTechs[0]); //HTML
console.log(webTechs[6]); //MongoDB

let lastIndex2 = webTechs.length - 1;
console.log(webTechs[lastIndex2]); // -> MongoDB

// Modifying array element
const numbers = [1, 2, 3, 4, 5];
numbers[0] = 10; // changing 1 at index 0 to 10
numbers[1] = 20; // changing  2 at index 1 to 20
console.log(numbers); // [10, 20, 3, 4, 5]

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
countries[0] = "Afghanistan"; // Replacing Albania by Afghanistan
let lastIndex = countries.length - 1;
countries[lastIndex] = "Korea"; // Replacing Kenya by Korea
console.log(countries); //["Afghanistan", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Korea"]

//Methods to manipulate array
const eightXvalues = Array(8).fill("X"); // it creates eight element values filled with 'X'
console.log(eightXvalues); // ['X', 'X','X','X','X','X','X','X']

const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList);
console.log(thirdList); // [1, 2, 3, 4, 5, 6]

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.length); // -> 5 is the size of the array

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.indexOf(5)); // -> 4
console.log(numbers.indexOf(0)); // -> -1
console.log(numbers.indexOf(1)); // -> 0
const fruits = ["banana", "orange", "mango", "lemon"];
let index = fruits.indexOf("banana"); // 0

const numbers = [1, 2, 3, 4, 5, 3, 1, 2];
console.log(numbers.lastIndexOf(2)); // 7
console.log(numbers.lastIndexOf(0)); // -1
console.log(numbers.lastIndexOf(1)); //  6

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(5)); // true
console.log(numbers.includes(0)); // false
console.log(numbers.includes(1)); // true

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.toString()); // 1,2,3,4,5
const names = ["Taner", "Furkan", "Ömer", "Akın"];
console.log(names.toString()); // Asabeneh,Mathias,Elias,Brook

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.join()); // 1,2,3,4,5
const names2 = ["Taner", "Furkan", "Ömer", "Akın"];
console.log(names2.join()); // Asabeneh,Mathias,Elias,Brook
console.log(names2.join("")); //AsabenehMathiasEliasBrook
console.log(names2.join(" ")); //Asabeneh Mathias Elias Brook
console.log(names2.join(", ")); //Asabeneh, Mathias, Elias, Brook
console.log(names2.join(" # ")); //Asabeneh # Mathias # Elias # Brook

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.slice(1, 4)); //->[2,3,4] // it doesn't include the ending position

const numbers = [1, 2, 3, 4, 5];
numbers.splice(0, 1);
console.log(numbers); //remove the first item
const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.splice(3, 3, 7, 8, 9)); // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items
//Üç parametre alır: Başlangıç ​​konumu, kaldırılacak sayı ve eklenecek öğe sayısı.

const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers); // -> [1,2,3,4,5,6]

numbers.pop(); // -> remove one item from the end
console.log(numbers); // -> [1,2,3,4,5]

const numbers = [1, 2, 3, 4, 5];
numbers.shift(); // -> remove one item from the beginning
console.log(numbers); // -> [2,3,4,5]

const numbers = [1, 2, 3, 4, 5];
numbers.unshift(0); // -> add one item from the beginning
console.log(numbers); // -> [0,1,2,3,4,5]

const numbers = [1, 2, 3, 4, 5];
numbers.reverse(); // -> reverse array order
console.log(numbers); // [5, 4, 3, 2, 1]

const webTechs2 = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
webTechs2.sort();
console.log(webTechs2); // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

const firstNums = [1, 2, 3];
const secondNums = [1, 4, 9];

const arrayOfArray = [
  [1, 2, 3],
  [1, 2, 3],
];
console.log(arrayOfArray[0]); // [1, 2, 3]

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = [frontEnd, backEnd];
console.log(fullStack); // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length); // 2
console.log(fullStack[0]); // ["HTML", "CSS", "JS", "React", "Redux"]
console.log(fullStack[1]); // ["Node", "Express", "MongoDB"]
