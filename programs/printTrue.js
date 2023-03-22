// If a number is divisible by 5, then print Hello
// If a number is divisible by 7, then print World
// If a number is divisible by both 5 and 7, then print Hello World

//using else if
let num = 70;
if(num%5 === 0 && num%7 === 0) console.log("Hello World");
else if(num%5 === 0) console.log("Hello");
else if(num%7 === 0) console.log("World");

//or with conditional operator
num%5 === 0 && num%7 === 0 ? 
console.log('Hello World') : num%5 === 0 ? 
console.log("Hello") : num%7 === 0 ? 
console.log('World') : "Invalid Entry";