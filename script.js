// document.addEventListener('DOMContentLoaded', function() {
//     const toggleButton = document.getElementsByClassName('toggle-button')[0];
//     const navbarLinks = document.getElementsByClassName('navbar-links')[0];
    
//     toggleButton.addEventListener('click', () => {
//         navbarLinks.classList.toggle('active');
//     });
// });

// var x = 10;
// a();
// b();
// console.log(x);

// function a(){
//     var x = 10;
//     console.log(x);
// }

// function b(){
//     var x = 100;
//     console.log(x);
// }

// function a(){
//     var x = 100;
//     c();
//     function c(){
//         console.log(x);
//     }
// }

// a();
// console.log(x);

// let a = 100
// {
//     let a=10;
//     let b=20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// console.log(a);
// console.log(b);
// console.log(c);

// function x(){
//     for(var i=1;i<=5;i++){
//         function count(x){
//             setTimeout(()=>{
//                 console.log(x);
//             },x*1000)
//         }
//        count(i)
//     }
// }

// x();

//Constructor function 
// function Counter(){
//     var count = 0;
//     this.incrementCount = function(){
//         count++;
//         console.log(count);
//     }

//     this.decrementCount = function(){
//         count--;
//         console.log(count);
//     }
// }

// var count1 = new Counter();

// count1.incrementCount()
// count1.incrementCount()
// count1.decrementCount()

// const arr = [5,7,3,9,10]

// const arrObject = [
//     {"firstName":"Ganesh", "lastName":"Hegde", "age":26},
//     {"firstName":"Bhargavi", "lastName":"Hegde", "age":18},
//     {"firstName":"Nagaratna", "lastName":"Hegde", "age":53},
//     {"firstName":"Raj", "lastName":"Hegde", "age":26},
// ]



// const output = arrObject.map((x) => x.firstName);
// console.log(output);

// const evenNumber = arrObject.filter((x) => x.age>26).map(x=> x.firstName);
// console.log(evenNumber);

// const output = arrObject.reduce((acc, curr)=>{
//     if(curr.age>16){
//         acc.push(curr.firstName);
//     }

//     return acc;
// },[])

// console.log(output);

// function sum(a,b){
//     return a+b;
// }

// function fib(n){
//     let n1 = 0, n2 = 1;
//     let nextNumber = n1 + n2;

//     for(let i=1;i<n;i++){
//         n1 = n2;
//         n2 = nextNumber;
//         nextNumber = n1+n2;
//     }

//     return nextNumber;
// }

// function fact(n){
//     let facto=1;
//     for(let i=1;i<=n;i++){
//         facto *= i;
//     }
//     return facto;
// }


// function memoize(fn){
//     let cache = {}
//     return function(...args){
//         if(args in cache){
//             return cache[args]
//         }

//         let result = fn.apply(this, args)
//         cache[args] = result

//         return result;
//     }
// }

// // Create a memoized version of the add function
// const memoizedAdd = memoize(sum);

// console.log("Hello")
// console.log(memoizedAdd(1, 2)); // Computes and returns 3
// console.log(memoizedAdd(1, 2)); // Returns cached result 3
// console.log(memoizedAdd(2, 3)); // Computes and returns 5
// console.log(memoizedAdd(2, 3)); // Returns cached result 5

// const fruits = ["Banana", "Orange", "Apple", "Mango"];


// console.log(fruits.splice(0, 8))

//Curring in Javascript

// function sum(a){
//     return function (b){
//         return function (c){
//             return a+b+c;
//         };
//     }
// }

// console.log(sum(5)(4)(9))

// function evaluate(operation){
//     return function(a){
//         return function(b){
//             if(operation === "sum") return a+b;
//             else if(operation === "subtraction") return a-b;
//             else if(operation === "multiplication") return a*b;
//             else if(operation === "division") return a/b;
//             else return "Invalid operation";
//         }
//     }
// }

// console.log(evaluate("sum")(5)(6))
// console.log(evaluate("subtraction")(5)(6))
// console.log(evaluate("multiplication")(5)(6))
// console.log(evaluate("division")(5)(6))

// function add(a){
//     return function(b){
//         if(b) return add(a+b);
//         return a;
//     }
// }

// console.log(add(5)(4)(6)())

//Currying vs Partial Application

// function add(a){
//     return function(b,c){
//         return a+b+c;
//     }
// }

// const x=add(5)
// console.log(x(6,9))

// Modifying DOM 

function updateDOM(id){
    return function(content){
        return document.querySelector("#" + id).textContent = content;
    }
}

const dom = updateDOM("header")

dom("Updated Header")