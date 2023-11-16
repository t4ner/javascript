//Data Types
//1.Primitive data types => Numbers, Strings, Booleans, Null, Undefined
//2.Non-primitive data types(Object References) => Objects, Functions, Arrays

// Primitive data type'lar değiştirilemez.
let word = "Javascript";
word[0]= "Y";
console.log(word) // Javascript

//Non-pritive data type'lar değiştirilebilir.
let nums = [1,2,3];
nums[0] = 4;
console.log(nums); //4,2,3

let oneNumber = 5;
let twoNumber = 5;
console.log(oneNumber == twoNumber); //true

let nums1 = [1,2,3]
let nums2 = [1,2,3]
console.log(nums1 == nums2); //false => primitive değişkenin değerini tutarken non-primitive referans değerini tutar.

let nums3 = [1,2,3];
let nums4 = nums3;
console.log(nums3 == nums4) //true => referans değerleri aynı

//Math Object
const PI = Math.PI; //3.14
Math.round(PI) //3 => ABOVE .5 UP LESS 0.5 DOWN
Math.floor(PI) //3
Math.ceil(PI) //4
Math.min(-4,5,-2,3,4,7) //-4
Math.max(-4,5,-2,3,4,7) //7
const num = Math.floor(Math.random() * 11) //Creates random number between 0 and 10
Math.abs(-10) //10
Math.sqrt(100) //10
Math.pow(3,2) //9

//String
let job = 'Software Developer';

//String Concatenation
let firstName = "Taner",
lastName = "Dökmetaş"
console.log(firstName + " " + lastName);
console.log(`${firstName} ${lastName}`); //Template Literals => Doğru kullanım

//String Methods
//1.length
let string = "Javascript"; 
console.log(string.length) //10
//2.toUpperCase()
let string2 = "Javascript";
console.log(string2.toUpperCase()); //JAVASCRİPT
//3.toLowerCase()
let string3 = "Javascript";
console.log(string3.toLowerCase()) //javascript
//4.substr()
let string4 = "Javascript"
console.log(string4.substring(4,10)); //script
//5.split()
let string5 = "30 Days Of Javascript";
console.log(string5.split()) //["30 Days Of Javascript"]
console.log(string5.split(" ")) // ["30", "Days", "Of", "Javascript"]
let string6 = "Javascript"
console.log(string6.split()) //["Javascript"]
console.log(string6.split("")) //["j","a","v","a","s","c","r","i","p","t"]
//6.trim()
let string7 = "   30 Days Of Javascript ";
console.log(string7.trim(" ")) // "30 Days Of Javascript"
//7.includes()
let string8 = "Javascript";
console.log(string8.includes("Java")); //true
console.log(string8.includes("java")); //false
console.log(string8.includes("script")); //true
//8.replace()
let string9 = "30 Days Of Javascript";
console.log(string9.replace("Javascript", "Java")) //30 Days Of Java
let string10 = "Finland";
console.log(string10.replace("Fin","Taner")) //Tanerland
//9.charAt()
let string11 = "30 Days Of Javascript";
console.log(string11.charAt(3)) //D
//10.indexOf();
let string12 = "30 Days of Javascript"
console.log(string12.indexOf("D")) //3
//11.lastIndexOf();
let string13 = "I love Javascript. I love Java"
console.log(string13.lastIndexOf("love")); //21
//12.startsWith();
let string14 = "Love is the best to in this world";
console.log(string14.startsWith("Love")) //true
console.log(string14.startsWith("love")) //false
console.log(string14.startsWith("world")) //false
//13.endsWith();
let string15 = "Love is the best to in this world";
console.log(string14.startsWith("world")) //true
console.log(string14.startsWith("World")) //false
console.log(string14.startsWith("rld")) //true

//Changing Data Type
//String to Int
let num1 = "10"
let numInt = parseInt(num1);

//String to Float
let num2 = "9.81"
let numFloat = parseFloat(num2);

//Float to Int 
let num3 = 9.81
let numInt2 = parseInt(num3);
