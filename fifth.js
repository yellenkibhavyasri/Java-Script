/*function myFunction(){
    console.log("Welcome to my page");
}
myFunction();*/
/*function myFunction(msg){
    //parameter
console.log(msg);
}
myFunction("India!!!");//argument*/
/*function sum(x,y){
s=x+y;
return s;
}
let val=sum(3,4);
console.log(val);*/
/*function sum(a,b){
    return a+b;
}
const arrowSum=(a,b)=>{
    console.log(a+b);
};*/
//practice function create a function using the "function " keyword that takes a string as an argument & returns the number of vowels in the string.
/*function countvowels(str){
    let c=0;
for(const char of str){
    if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){c++;}
    
}
console.log(c);
}
const arrowFunction=(str)=>{
    let c=0;
for(const char of str){
    if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){c++;}
    
}
console.log(c);
}*/
/*let arr=[1, 2, 3, 4, 5];
arr.forEach(function printVal(val){
    console.log(val);
});*/
//map method
/*let nums=[67, 56, 78];
let newArr=nums.map((val) => {
    return val*val;
});
console.log(newArr);*/
//filter method
/*let arr=[4, 7, 8, 9, 3456];
let res=arr.filter((val) => {
return val%2===0;
});
console.log(res);*/
let arr=[1, 2, 3, 4];
const output=arr.reduce((res, curr) =>{
    return res+curr;
} );
console.log(output);

