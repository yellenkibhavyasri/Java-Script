/*let div=document.querySelector("div");
console.log(div);
let id=div.getAttribute("id");
console.log(id);
let para=document.querySelector("p");
console.log(para.setAttribute("class","new class"));*/
/*let div=document.querySelector("div");
console.log(div);
div.style.backgroundColor="green";*/
/*let newBtn=document.createElement("button");
newBtn.innerText="Click mee";
console.log(newBtn);
let div=document.querySelector("div");
div.append(newBtn);*/
//practice question
let newBtn=document.createElement("Button");
newBtn.innerText="click me";
newBtn.style.color="white";
newBtn.style.backgroundColor="Red";
document.querySelector("body").prepend(newBtn);
console.log(newBtn);