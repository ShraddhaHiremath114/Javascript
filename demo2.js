console.log("Closures in JS")

// function demo(){
//     var p=33;
//     let x=1;
//     if(x==1){
//         let a=10;
//         const y=20;
//         console.log(a);
//         console.log(y);
//     }
//     console.log(x);
//     console.log(p);
//     console.log(a);
//     console.log(y);
// }
// demo();

//Closure - function inside a function
function outer(){
    var x=10;
    function inner(){
        var y=20;
        console.log("Inner function "+x);

    }
    inner();
    
}
outer();

//Coping refernce type by reference
let person=["Shraddha",1,92.51];
let student=person;
console.log(person);
console.log(student);
student[0]="Viresh";
console.log(student);
console.log(person);

//Coping refernce type by value
let arr1=[1,2,3,4,5];
let arr2=[...arr1];
arr2.pop();
console.log(arr2);
console.log(arr1);

let m=92;
if(m>=10){
    console.log("Good");
}else if(m>=25){
    console.log("Pass");
}else{
    console.log("Fail");
}

let n=0;

if(n==0){
    console.log("Falsy");
}else {
    console.log("Truthy");
}

//Forech loop - used to iterate over an array
let arr=[1,2,3,4,5];
arr.forEach(function(value,index){
    console.log(value+" "+index);
});
//Forin loop - used to iterate over an object
let obj={name:"Shraddha",age:21};
for(let key in obj){
    console.log(key+"->"+obj[key]);
}

var array=[1,2,3];
console.log(array);

array.push(4);//add element at the end
array.unshift(0);// add element at the start
console.log(array);

array.pop();//remove element from the end
array.shift();//remove element from the start
console.log(array);