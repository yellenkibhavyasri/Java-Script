//This is a comment
//Arithmetic Operators
let a=7;
let b=9;
console.log(a+b);
console.log(a%b);
a++;
console.log(a);
//Assignment Operators
let x=9;
let y=6;
x+=4;
console.log(x);
//Comparison Operators
let s=8;
let t=10;
console.log(a===b);
console.log(a>b);
//Logical Operators
let o=6;
let p=5;
console.log(a<b && a===6);
console.log(a<b || a===6);
//Conditional Statements
/*let age=16;
if(age>18){
    console.log("You can vote");
}
if(age<18){
    console.log("You cannot vote");
}*/
let mode="pink";
let color;
if(mode==="dark"){
    color="black";
}
/*if(mode==="light"){
    color="white";
}*/
else{
    color="white";
}
console.log(color);
//Ternary Operators
let years=23;
console.log(years> 18 ? "adult":"not adult");
//Practice Question
//Get user to input a number using prompt("Enter a number").Check if the number is a multiple of 5 or not.
let num=prompt("Enter a number:");
if(num%5===0){
    console.log("It is multiple of 5");
}
else{
    console.log("It is not a multiple of 5");
}
console.log(num);
