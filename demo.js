console.log("Hello World!")
console.log(23+2);

//Primitives / value types

let a="js";
console.log(a);
console.log(typeof(a));

let b=67;
console.log(b);
console.log(typeof(b));

let c=6.7;
console.log(c);
console.log(typeof(c));

let d=true;
console.log(d);
console.log(typeof(d));

let w;//undefined is also type (it is default value) we can explicitly assign type as undefined but dont do this it will not throw any error but it is not good
console.log(w);
console.log(typeof(w));

let n=null;//empty
console.log(n);
console.log(typeof(n));

/*
it is dynamically typed language because we dont need to specify the type of variable and we can change the value as well as type of same variable.

*/

// Reference types - Objects, Arrays, Functions

//Object
let person={
    name:'John',
    age:30
};
console.log(person);
console.log(typeof(person));

console.log(person.name);
console.log(person['age']);

// Value type Vs Reference type


//Value type - value is getting copied to another variable
let x="Shraddha";
let y=x;

x="viresh";

console.log(x);
console.log(y);

//refernce type - reference is getting copied to another variable

let p={name:"shraddha"};
let q=p;

p.name="viresh";
console.log(p);
console.log(q);


//Arrays - length and type is dynamic

let courses=['js','react','angular',6,true,6.7,null];
console.log(courses);
console.log(typeof(courses));
console.log(courses[0]);
console.log(courses[1]);
console.log(courses[2]);

//Functions - block of code which can be reused

function greet(msg){
    console.log("Hello "+msg);
}

greet("Good morning");
greet("Good evening");

function myFunction(p1, p2) {
    return p1 * p2;
  }
let x1=myFunction(3,4);
console.log(x1);

// function expression - is a function that is assigned to a variable

let greet1=function(){
    console.log("Hiee");
}
greet1();

//Arrow function - is a function that is assigned to a variable & allows to write function in more concise way (shorter syntax)

let greet2= ()=>{
    console.log("Hello from arrow function")

}
greet2();

let greet3=(a,b)=>{
    console.log(a+b);
}
console.log(greet3(3,4));

let greet4=(name,age)=>{
    return `Hello ${name} your age is ${age}`;
}
console.log(greet4('shraddha',21));

let greet5=(name,age)=>`hello ${name} your age is ${age}`;
console.log(greet5('viresh',20));


//Hoisting - is a mechanism where variables and function declarations are moved to the top of their scope before code execution.
//we can use variable and function before declaration
// Execution context 
// 1. Memory creation phase - all the variables and functions are hoisted
// 2. Code execution phase - code is executed line by line


fun();
console.log(a1);

var a1=10;
 
function fun(){
    console.log("Hello HOisting")
}

fun();
console.log(a1);

var s=11;
console.log(s);
console.log(this.s);
console.log(window.s);

console.log(this===window);

// === - checks value and type
// == - checks only value
 var s1=10;
 var s2="10";
 console.log("= Operator")
 console.log(s1==s2);
 console.log(s1===s2);

// var, let and const
// let and const are more strict than var
// const - value cannot be changed and it is not hoisted and it is block scoped same as let only it is constant
// let - value can be changed and it is block scoped and it is not hoisted it will throw reference erro (Temporal dead zone)
// var - vaue can be changed and it is function scoped and it is hoisted
// let and const will not be in global and we cannot use them before initialization
//let example 

// console.log(l);
let l=10;
console.log(l);

function lfun(){
    let i=1;
    while(i<=5){
        console.log(i);
        i++;
    }
    
}

lfun();
