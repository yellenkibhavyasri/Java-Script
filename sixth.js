//console.dir(document.body);
//accessing elements
/*let heading=document.getElementById("heading");
console.dir(heading);
let cls=document.getElementsByClassName("para");
console.dir(cls);
console.log(cls);

let firstele=document.querySelector("p");
console.dir(firstele);
let allEl=document.querySelectorAll(".para");
console.dir(allEl);
let div=document.querySelector("div");
console.dir(div);*/
//Practice QUestion
//Create a h2 heading element with text-"Hello java script ".append from Apna college student to this text using js
let H2=document.querySelector("h2");
console.dir(H2.innerText);
H2.innerText=H2.innerHTML+"from Apna College Students";//concatenate using the innerText property