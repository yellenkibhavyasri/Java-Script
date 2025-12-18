/*for(let count=1;count<=5;count++){
    console.log("Hellloooo");
}
console.log("loop has ended");*/
//calculate sum of 1 to 5
/*let sum=0;
for(let i=0;i<=5;i++){
    sum+=i;
}
console.log(sum);*/
/*let i=1;
while(i<=5){
    console.log(i);
    i++;
}*/
/*let i=20;
do{
    console.log("helloo");
    i++;
}
while(i<=10);*/
//for-of loop
/*let str="JavaScript";
for(let i of str){// iterator-> characters
    console.log(i);
}*/
//for-in-loop
/*let student={
    name:"Shiv",
    age:20,
    cgpa:8.5,
    isPass: true
};
for(let i in student){
console.log(i,student[i]);
}*/
//practice print all odd numbers
/*for(let i=0;i<=100;i++){
    if(i%2!==0){
        console.log(i);
    }
}*/
//practice 2 create a game where you start with any random game numebr. Ask the user to keep guessing the game number until the user enters correct value
 /*let gamenumber=50;
 let usernum=prompt("guess the number");
 console.log(usernum);
 while(usernum!=gamenumber){
usernum=prompt("u have entered wrong number");
 }
console.log("you have entered correct number");*/

//strings
/*let str="Namaste";
console.log(str[4]);*/
//Template Literals
/*let sentence=`this is a template`;
console.log(typeof sentence);
let obj={
item:"pen",
price:10,
};
let output=`the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);*/
//String Methods
/*let str="  sAdf ghjkl ";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());
console.log(str.slice(1,4));
console.log(str.replace("g","v"));*/
//practice question of strings   prompt the user fullna,e. generate a username for them based on the input. start username with @, follwed by their full name and ending with fullname length.
let fullname=prompt("Enter your full name:");
console.log(fullname);
let username="@" + fullname + fullname.length;
console.log(username);
