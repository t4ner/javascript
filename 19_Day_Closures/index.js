//Closure
// JavaScript, bir dış fonksiyonun içine fonksiyon yazmaya izin verir.
// Dilediğimiz kadar iç fonksiyon yazabiliriz.
// Eğer iç fonksiyon dış fonksiyonun değişkenlerine erişiyorsa buna closure denir.

function outerFunction() {
  let count = 0;
  function innerFunction() {
    count++;
    return count;
  }

  return innerFunction;
}
const innerFunc = outerFunction();
console.log(innerFunc()); //1
console.log(innerFunc()); //2
console.log(innerFunc()); //3

function outerFunction() {
  let count = 0;
  function plusOne() {
    count++;
    return count;
  }
  function minusOne() {
    count--;
    return count;
  }

  return {
    plusOne: plusOne(),
    minusOne: minusOne(),
  };
}
const innerFuncs = outerFunction();
console.log(innerFuncs.plusOne); //1
console.log(innerFuncs.minusOne); //0
