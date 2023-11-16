//FUNCTİONS
function sayHello() {
  console.log("Hello");
}
sayHello();

function areaOfCircle(r) {
  let area = Math.PI * r * r;
  return area;
}
console.log(areaOfCircle(10));

let array = [2, 4, 7, 3, 8, 6];
function sumArrayValues(array) {
  let total = 0;
  for (let i = 0; i < array.lenght; i++) {
    total += array[i];
  }
  return total;
}
console.log("Toplam", sumArrayValues(array)); //30

const anonymousFun = function () {
  console.log(
    "I am an anonymous function and my value is stored in anonymousFun"
  );
};

const square = function (n) {
  return n * n;
};
console.log(square(2)); // -> 4

//kendi kendini çağıran fonksiyon;
(function (n) {
  console.log(n * n);
})(2); // 4

let squaredNum = (function (n) {
  return n * n;
})(10);
console.log(squaredNum); //100

//Arrow functions
function hello() {}
const hello = () => {};
const hello = (name) => `hello ${name}`;
const toplama = (...numbers) => {
  console.log(numbers);
}; //Rest operators
toplama(2, 5, 7, 4, 9);

function multiply(num1, num2 = 2) {
  return num1 * num2;
}
console.log(multiply(10)); //20
console.log(multiply(10, 4)); //40
