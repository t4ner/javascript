//Destructuring - Rest - Spread => Dizilerde ve objelerde kullanabileceğimiz mekanizmalar
//Destructuring
const numbers = [1, 2, 3];
let [numOne, numTwo, numThree] = numbers;
console.log(numOne, numTwo, numThree); // 1, 2, 3

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
const [frontEnd, backEnd] = fullStack;
console.log(frontEnd); //['HTML', 'CSS', 'JS', 'React']
console.log(backEnd); //["Node", "Express", "MongoDB"]

const numbers2 = [1, 2, 3];
let [numOne2, , numThree2] = numbers; //2 is omitted
console.log(numOne, numThree); //1 3

const names = [undefined, "Taner", "Furkan"];
let [firstPerson = "Gizem", secondPerson, thirdPerson, fourthPerson = "Ömer"] =
  names;
console.log(firstPerson, secondPerson, thirdPerson, fourthPerson); //Gizem Taner Furkan Ömer

//rest
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, num3, ...rest] = nums;
console.log(num1, num2, num3); //1 2 3
console.log(rest); //[4, 5, 6, 7, 8, 9, 10]

const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
for (const [country, city] of countries) {
  console.log(country, city);
}
/*
Finland Helsinki
Sweden Stockholm
Norway Oslo
*/

//Destructuring Object
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
};
let { width, height, area, perimeter } = rectangle; //!Verdiğimiz isimler ile obje keys'leri aynı olmak zorunda
console.log(width, height, area, perimeter); //20 10 200 undefined

const rectangle2 = {
  width2: 20,
  height2: 10,
  area2: 200,
};
let { width2, height2, area2, perimeter2 = 60 } = rectangle2;
console.log(width2, height2, area2, perimeter2); //20 10 200 60

const user = {
  name: "Taner",
  surname: "Dökmetaş",
  age: 22,
  pets: {
    cats: ["Asil"],
    dogs: ["Monti"],
  },
  skills: ["HTML", "CSS", "JavaScript"],
  hobbies: ["bicycle", "reading"],
};
function showUserInfo({
  name,
  surname,
  age,
  pets: { dogs, cats },
  skills: [skill1, ...otherSkills],
  ...others
}) {
  console.log("OTHERS", others);
  return `Merhaba, ben ${name} ${surname}, ${age} yaşındayım. ${cats.length} kedim ve ${dogs.length} köpeğim var.`;
}
console.log(showUserInfo(user));

//Spread or Rest Operator
const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num11, num22, num33, ...rest1] = nums2;
console.log(num11, num22, num33); //1, 2, 3
console.log(rest1); // [4, 5, 6, 7, 8, 9, 10]

const frontEnd2 = ["HTML", "CSS", "JS", "React"];
const backEnd2 = ["Node", "Express", "MongoDB"];
const fullStack2 = [...frontEnd, ...backEnd];
console.log(fullStack2); //["HTML", "CSS", "JS", "React", "Node", "Express", "MongoDB"]

const user2 = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
};
const copiedUser = { ...user2 };
console.log(copiedUser); //{name: "Asabeneh", title: "Programmer", country: "Finland", city: "Helsinki"}

const sumAllNums = (...args) => {
  console.log(args);
};
sumAllNums(1, 2, 3, 4, 5); //[1, 2, 3, 4, 5]

const sumAllNums2 = (...args) => {
  let sum = 0;
  for (const num of args) {
    sum += num;
  }
  return sum;
};
console.log(sumAllNums2(1, 2, 3, 4, 5)); //15
