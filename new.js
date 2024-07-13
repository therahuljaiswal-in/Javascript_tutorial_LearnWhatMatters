// Primitive / value types 
// string, Number, Boolean, Undefined, NULL, Symbol
// dynamic language

// string

let x = "Javascript";
console.log(x);
console.log(typeof(x));

x = 5;
console.log(x);
console.log(typeof(x));

// Number

let y = 10;
console.log(y);
console.log(typeof(y));


let z = 11.6;
console.log(z);
console.log(typeof(z));

// Boolean

let r = true;
console.log(r);
console.log(typeof(r));

// undefined

let s= "hye";
console.log(s);
console.log(typeof(s));

//  Reference Type= objects, Arrays, Functions

let course = {
    title: "JavaScrpit Master",
    description: "projects",
    rating:5
};

console.log(course);
console.log(typeof(course));

console.log(course.title);  // . notation
console.log(course['title']); // bracket notation

// Value type VS Reference type

let a= "English";
let b=a;

a="Hindi"

console.log(a);
console.log(b); // here, value get copied so it is value typed

let c={name: "English"};
let d=c;

console.log(c);
console.log(d);


//  arrays are objects , we can use any data types in an array of any length too.\

let courses = ['hjs', 'sdfsd', true, 34,2345, null];

console.log(courses[1]);
console.log(courses[2]);
console.log(courses[3]);
console.log(courses[4]);
console.log(courses[5]);

console.log(courses);

console.log(typeof(courses));

//  functions

function createcourse(coursename) {
    console.log("creating " + coursename);
}

createcourse('web');
createcourse('UI/UX');


//  How JS code get executed
// 1.  JS engine reads the code line by line
// 2.  JS engine creates a memory space for each variable and function

//  Execution Context
// 1. Memory Phase - variable environment 
// 2. Code Phase

// Hoisting : The concept of being able to access or extract variable and functions before initialising them or putting any value  into it, this is called hoisting.
 
console.log(m);
console.log(this.m);
console.log(window.m);

var m = "mahek";
console.log(m);
console.log(this.m);
console.log(window.m);

console.log(window);

console.log(this == window);

// Temporal Dead Zone
// const, var, let 

// const, let --> are block scoped

{
    let g = 10;
    const h = 3;
    var i = 34;

    console.log(g);
    console.log(h);
    console.log(i);


}

// console.log(g); this both g and h will give reference error that is due to their scope
// console.log(h);
console.log(i);

// lexical scope

function hello() {
    let o=10;
    console.log(o);
}

hello();

//  Functions in js are often referred as a First Class Citizens
//   Higher-order-function are regular function that either takes arguments as function or you return the functions.
function sum (a,b){
    return a+b;
}

function diff (a,b){
    return a-b;
}

function operate(operationfunc,a ,b ){
    return operationfunc(a,b);
}

console.log(operate(sum, 3, 4))
console.log(operate(diff, 3, 4))


function outer() {
    function inner(){
        console.log('Hello');
    }
    return inner;
}

let returnedFunVar = outer();
console.log(returnedFunVar);
returnedFunVar(); 
function fetchedData(callback) {
    setTimeout(() => {
        let data = 'fetched data';
        callback(data, 'server error');
    }, 5000);
}

function handleData(data, error) {
    if(error) {
        console.error(error);
    }
    else {
        console.log(data);
    }
}

console.log('start');
fetchedData(handleData);

// Promises in JS

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched');

        }, 5000);
    });
}

// getData()
// .then(result => {
//     console.log(result);
// })
// .catch(error => {
//     console.error(error);
// }) all are promises 


//  Async wait is just like promises below is the syntex

async function fetchData() {
    try{
        const result = await getData();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

fetchData();


// Common Higher order functions
// 1. Map

// const nums = [1,2,3,4,5]
// console.log(nums);
// const doublenums = nums.map((num) => 2*num);
// console.log(doublenums);

// 2. Filter

// const nums = [1,2,3,4,5]
// console.log(nums);
// const evens = nums.filter((num) => num%2 == 0);
// console.log(evens);

// 3.Reduce

const nums = [1,2,3,4,5]
console.log(nums);
const sums = nums.reduce((accumulator, num) => accumulator + num, 0);
console.log(sums);