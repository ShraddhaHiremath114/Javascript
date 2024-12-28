// closure - 
// lexical scope - it is the simple term inner function can access the outer function variables but outer function cannot access the inner function variables.

function outer(){
    let username = "Shraddha";
    function inner(){
        let password = "1234";
        console.log("Username: "+username, "Password: "+password);
    }
    inner();
    console.log(username);
    console.log(password);
}
outer();
// This is because the inner function's lexical scope includes the scope of the outer function.

// Closure - function with lexical scope = closure
function outer(){
    let count = 0;
    function inner(){
        count++;
        console.log(count);
    }
    return inner;
}
let counter = outer();
counter();
counter();
counter();
counter();

// JavaScript is single threded language. It can do one thing at a time. It has a call stack and event loop. everything happens sequentially. line by line execution.
// It is inefficient to wait for the response from the server. So, we use asynchronous programming. It is non-blocking. It is used to handle multiple requests at the same time.
// Callbacks - It is a function that is passed as an argument to another function and is executed after the completion of the task.
// Promices - It is an object that represents the eventual completion or failure of an asynchronous operation. It is used to handle multiple asynchronous operations.
// Async/Await - It is a syntactic sugar for promises. It makes the code more readable and easy to understand.
// Asynchronous operation = non-blocking behaviour
// Synchronous operation = blocking / sequential operations.

// callback
function getData(callback){
    setTimeout(()=>{
        let data="Data from the server";
        let error=null;
        callback(data,error);
    }, 5000);
}
function displayData(data,error){
    if(error){
        console.error(error);
    }else{
        console.log(data);
    }
}
getData(displayData);

// after 2000 mlsec, it will display the data.

//Promises  - 
//creation of promise

const myPromise = new Promise((resolve, reject)=>{
    let data = "Data from the server | DB calls | API calls | File read | Cryptography | Network calls";
    let error = null;
    if(error){
        reject(error);//calling asynchroneous operation ie calling catch block
    }else{
        resolve(data);// calling then block
    }
})
// consume the promise
myPromise.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.error(error);
})

// Async/Await - Instead of using then and catch, we can use async and await. which makes the code more readable and easy to understand.
// async - it is used to define an asynchronous function.
// await - it is used to wait for the promise to be resolved.
// async function always returns a promise.

async function getData(){
    try{
        let data = await myPromise;
        console.log(data);
    }
    catch(error){
        console.error(error);
    }
}

getData();

