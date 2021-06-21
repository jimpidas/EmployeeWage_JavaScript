readline=require("readline-sync")

let a=readline.question("Enter value of first number:")
let b=readline.question("Enter value of second number:")
let c= a+b;
console.log("Num Addition is: "+ c);
let s1="10";
let s2="20";
let s3=s1+s2;
console.log("Str Addition is: "+s3);
let d=new Date();//creates a variable which will contain the current date
let today="Today is: " + (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear();
let time="Time: "+d.getHours() + ":" + (d.getMinutes());

console.log(today);
