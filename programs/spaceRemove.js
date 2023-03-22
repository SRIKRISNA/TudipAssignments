// Write a program to remove all the extra spaces from a paragraph/string, consider below sample input, output strings

// Sample Input String : “       Write a program         to remove all the     extra spaces         from a        paragraph/string     ”
// Sample Output String : “Write a program to remove all the extra spaces from a paragraph/string”

let str = "       Write a program         to remove all the     extra spaces         from a        paragraph/string     ";
let strToArr = str.split(' ');
let output=[];
for(let i=0; i<strToArr.length; i++){
    if(strToArr[i].length >= 1) output.push(strToArr[i]);
}
console.log(output.join(' '))