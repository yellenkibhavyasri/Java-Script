/*const student={
    fullname:"Vishwa",
    marks:76,
    printMarks:function(){
        console.log(this.marks);
    },
};*/
/*const employee={
    calctax(){
    console.log("tax is 10%");
    },
};
const Arjun={
    salary: 50000,
    calctax(){
        console.log("tax rate is 20%");
    },
};
Arjun.__proto__=employee;*/
class car{
    constructer(brand){
        console.log("creating new object");
        this.brand=brand;
    }
    start(){
        console.log("Start");
    }
    stop(){
        console.log("Stop");
    }
    
}
let fortuner=new car();
