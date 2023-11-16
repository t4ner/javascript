//KOŞULLAR
let num = 3;
if (num > 0) {
  console.log(`${num} is a positive number`);
} //3 is a positive number

let isRaining = true;
if (isRaining) {
  console.log("Remember to take your rain coat");
} //Remember to take your rain coat

let num2 = 3;
if (num2 > 0) {
  console.log(`${num2} is a positive number`);
} else {
  console.log(`${num2} is a negative number`);
} //3 is a positive number

let num3 = 0;
if (num3 > 0) {
  console.log(`${num3} is a positive number`);
} else if (num3 == 0) {
  console.log(`${num3} is zero`);
} else {
  console.log(`${num3} is a negative number`);
}//0 is zero

let weather = "cloudy";
switch (weather) {
  case "rainy":
    console.log("You need a rain coat");
    break;
  case "cloudy":
    console.log("It might be cold, you need a jacket");
    break;
  case "sunny":
    console.log("Go out freely");
    break;
  default:
    console.log("No need for rain coat.");
}//It might be cold, you need a jacket

isRaining
    ? console.log("You need a rain coat")
    : console.log("No need for a rain coat")