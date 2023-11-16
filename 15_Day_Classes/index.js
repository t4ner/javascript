//Classes
//JavaScript nesne yönelimli bir programlama dilidir.
//JavScript'teki her şey, özellikleri ve yöntemleriyle birlikte bir nesnedir

class Person {
  // code goes here
}
const person = new Person();
console.log(person); //Person {}

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
const person1 = new Person("Taner", "Dökmetaş");
const person2 = new Person("Furkan", "Dökmetaş");
console.log(person1); //Person {firstName: "Taner", lastName: "Dökmetaş"}
console.log(person2); //Person {firstName: "Furkan", lastName: "Dökmetaş"}

class Person {
  constructor(
    firstName = "Taner",
    lastName = "Dökmetaş",
    age = 22,
    country = "Turkey",
    city = "Sivas"
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
  }
}

const person3 = new Person(); // it will take the default values
const person4 = new Person("Ömer", "Öğüt", 22, "Turkey", "Istanbul");
console.log(person3); //Person {firstName: "Taner", lastName: "Dökmetaş", age: 22, country: "Turkey", city: "Sivas"}
console.log(person4); //Person {firstName: "Ömer", lastName: "Öğüt", age: 22, country: "Turkey", city: "Istanbul"}

class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
  }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
}
const person5 = new Person("Taner", "Dökmetaş", 22, "Turkey", "Sivas");
const person6 = new Person("Ömer", "Öğüt", 22, "Turkey", "Istanbul");
console.log(person5.getFullName()); //Taner Dökmetaş
console.log(person6.getFullName()); //Ömer Öğüt

//getter-setter
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
  get getScore() {
    return this.score;
  }
  set setSkill(skill) {
    this.skills.push(skill);
  }
}
const person7 = new Person("Taner", "Dökmetaş", 22, "Turkey", "Sivas");
console.log(person7.getScore); //0
person7.setSkill = "HTML";
person7.setSkill = "CSS";
person7.setSkill = "JavaScript";
console.log(person7.skills); //["HTML", "CSS", "JavaScript"]

//Inheritance
class Teacher extends Person {
  constructor(firstName, lastName, age, country, city, gender) {
    super(firstName, lastName, age, country, city);
    this.gender = gender;
  }
  //öğretir
  teach() {
    return "Matematik dersi öğretiliyor.";
  }
}
class Student extends Person {
  //öğrenir
  learn() {
    return "Ders dinleniliyor";
  }
}
const teacher = new Teacher("Taner", "Dökmetaş", 22, "Turkey", "Sivas", 1);
const student = new Student("Furkan", "Dökmetaş", 22, "Turkey", "Sivas");
console.log(teacher.teach); //Matematik dersi öğretiliyor.
console.log(student.learn); //Ders dinleniliyor
