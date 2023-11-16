//SCOPE
//window scope
ad = "Taner"; //const veya let kullanmadan atadığımız değerler otomatik olarak window scope a atanır.

a = "JavaScript"; // declaring a variable without let or const make it available in window object and this found anywhere
b = 10; // this is a global scope variable and found in the window object
function letsLearnScope() {
  console.log(a, b); //accessible
  if (true) {
    console.log(a, b); //accessible
  }
}
console.log(a, b); //accessible

//global scope
let a = "JavaScript"; //is a global scope it will be found anywhere in this file
let b = 10; //is a global scope it will be found anywhere in this file
function letsLearnScope() {
  console.log(a, b); //JavaScript 10, accessible
  if (true) {
    let a = "Python"; //local scope
    let b = 100; //local scope
    console.log(a, b); //Python 100
  }
  console.log(a, b); //JavaScript 10
}
letsLearnScope();
console.log(a, b); //JavaScript 10, accessible

//Object
const person = {
  firstName: "Taner",
  lastName: "Dökmetaş",
  age: 22,
  country: "Turkey",
  city: "Sivas",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  isMarried: false,
  getFullName: function(){
    return `${this.firstName} ${this.lastName}`
  }
};

console.log(person.firstName) //Taner
console.log(person.age) //22
console.log(person.skills[2]) //JavaScript
console.log(person["firstName"]) //Taner
console.log(person["age"]) //22
console.log(person["skills"][2]) //JavaScript 
console.log(person.getFullName()) //Taner Dökmetaş

person.nationality = 'France'
person.job = 'Software Developer'
person.skills.push('Java')
person.skills.push('Spring boot')
person.isMarried = true
console.log(person)
/*
age: 22
city: "Sivas"
country: "Turkey"
firstName: "Taner"
getFullName: ƒ ()
isMarried: true
lastName: "Dökmetaş"
nationality: "France"
skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'MongoDB', 'Python', 'D3.js', 'Java', 'Spring boot']
job: "Software Developer"
*/

//Object Methods
let newPerson = Object.assign({}, person)

Object.keys(person) //['firstName', 'lastName', 'age', 'country', 'city', 'skills', 'isMarried', 'getFullName', 'nationality', 'title']

Object.values(person) //['Taner', 'Dökmetaş', 22, 'Turkey', 'Sivas', Array(10), true, ƒ, 'France', 'Software Developer']

Object.entries(person) // ['firstName', 'Taner'] ['lastName', 'Dökmetaş'] ['age', 22] ['country', 'Turkey'] ['city', 'Sivas'] ['skills', Array(10)] ['isMarried', true] ['getFullName', ƒ] ['nationality', 'France'] ['title', 'Software Developer']
for(let [key,value] of Object.entries(person)){
    console.log(key, value)
}

person.hasOwnProperty("firstName") //true
hasOwnProperty("School") //false