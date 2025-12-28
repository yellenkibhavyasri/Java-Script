//let btn1=document.querySelector("#btn1");
/*btn1.onclick=(e)=>{
    console.log(e) //here e is event object
    console.log(e.type);
    console.log(e.target);
    /*console.log("btn1 was clicked");
    let a=25;
    a++;
    console.log(a);*/
//}
/*btn1.addEventListener("click",()=>{
    console.log("button1 was clicked");
});*/
//practice create a toggle button that changes the screen to dark mode when clicked & light mode when clicked again.
let modeBtn=document.querySelector("#mode");
let currMode="Light";

modeBtn.addEventListener("click", () => {
    if(currMode==="Light"){
        currMode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }
    else{
        currMode="Light";
        document.querySelector("body").style.backgroundColor="beige";
    }
    console.log(currMode);
});