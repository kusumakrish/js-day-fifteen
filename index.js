let employee1= {
    name: "karan",
    age: 21,
    Gender : "Male"
}
let employee2= {
    name: "kusuma",
    age: 21,
    Gender : "Female"
}
let employee3= {
    name: "krishna",
    age: 21,
    Gender : "Female"
}

function showDetails (id , cls){
     console.log(this.name,this.age,this.Gender,id,cls);
}

showDetails.call(employee1,1,"A");
showDetails.call(employee2,2,"B");
showDetails.call(employee3,3,"c");

showDetails.apply(employee3,[1,"A"]);
showDetails.apply(employee3,[2,"B"]);
showDetails.apply(employee3,[3,"c"]);

let res1=showDetails.bind(employee3);
res1(1,"A")
let res2=showDetails.bind(employee3);
res2(2,"B");
let res3=showDetails.bind(employee3);
res3(3,"c");

const studentprototype={
   calage(){
       console.log(2022-this.byear);
   },
   intilizing(fname,lname,byear){
       this.fname=fname;
       this.lname=lname;
       this.byear=byear;

   }
}

let ramesh = Object.create(studentprototype);


ramesh.name = "ramesh" ;
ramesh.cls = "A";
ramesh.byear = 1990;
ramesh.calage();
console.log(ramesh);

let kristen = Object.create(studentprototype);
kristen.intilizing("kristen","swesten" , 1986);
kristen.calage();
console.log(kristen);

//Classes-

//Classes in Js doesnot work Exactly the same way as that of classes in java/c++.
//They are just a syntatctic sugar to object prototype, instences that we have red.
//They are special kind of functions with some variations.

//1. Classes are also First class functions.
//2. Classes are not hoisted.

const classprototype = class{
    constructor(fname,lname,byear){
        this.fname=fname;
        this.lname=lname;
        this.byear=byear;
    }
    calage(){
        console.log(2022-this.byear);
    }
}

let jarvis = new classprototype("jarvis","Vally",1992);
console.log(jarvis);
jarvis.calage();

classprototype.prototype.greet = function(){
    console.log("Hi I am someone");
}
jarvis.greet();
console.log(jarvis.__proto__);

