//Error Handling
try {
  let lastName = "Dökmetaş";
  let fullName = fistName + " " + lastName;
} catch (err) {
  console.log(err); //ReferenceError: fistName is not defined
}

try {
  let lastName = "Dökmetaş";
  let fullName = fistName + " " + lastName;
} catch (err) {
  console.error(err); //ReferenceError: fistName is not defined
} finally {
  console.log("In any case I will be executed");
} //In any case it  will be executed

const throwErrorExampleFun = () => {
  let message;
  let x = prompt("Enter a number: "); //12
  try {
    if (x == "") throw "empty";
    if (isNaN(x)) throw "not a number";
    x = Number(x);
    if (x < 5) throw "too low";
    if (x > 10) throw "too high";
  } catch (err) {
    console.log(err); //too high
  }
};
throwErrorExampleFun();

//Error Types
//Reference Error
let firstName = "Taner";
let fullName = firstName + " " + lastName;
console.log(fullName); //Uncaught ReferenceError: lastName is not defined

//SyntaxError
//let square = 2 x 2
console.log(square);
//console.log('Hello, world") //Uncaught SyntaxError: Unexpected identifier

//TypeError
let num = 10;
console.log(num.toLowerCase()); //Uncaught TypeError: num.toLowerCase is not a function
