// Print number from 1 to 10 using a for loop.
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// Print number from 10 to 1 using while loop
// let i = 10;
// while (i >= 1) {
//     console.log(i);
//     i--;
// }


// Print even numbers from 1 to 20 using for loop 
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// Print odd numbers from 1 to 15 using while loop 
// let i = 1;
// while (i <= 15) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
//     i++;
// }

// Print the multiplication table of 5 
// for (let i = 1; i <= 10; i++) {
//     console.log(`5 x ${i} = ${5 * i}`);
// }


// Find the sum of numbers from 1 to 100
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum = sum + i;
// }
// console.log(sum);

// Print numbers between 1 to 50 divisible by 3
// for (let i = 1; i <= 50; i++) {
//     if (i % 3 === 0) {
//         console.log(i);
//     }
// }

// Ask the user for a number and print whether each number from 1 to that number is even or odd.

// let num = prompt("Give a number");

// for (let i = 1; i <= num; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " is even");
//     } else {
//         console.log(i + " is odd");
//     }
// }


// Count how many numbers between 1 to 100 are divisible by 3 or 5.
// let count = 0;
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         count++;
//     }
// }
// console.log("Count =", count);

// <div> <h1> (Break and Continue)Example 10:</h1> <p>Stop at First Multiple of 7</p> <p>Write a Loop from 1 to 100 that:</p> <p>Prints Each number</p> <p>Stop Completely when it finds the first number divisible by 7</p> <p> for(let i=1; i<=100; i++){ console.log(i); if(i%7 ===0){ break; } } </p> </div>

// for (let i = 1; i <= 100; i++) {
//       console.log(i);
//       if (i % 7 === 0) {
//         break;
//       }
//     }


{/* <div>
<h1> (Break and Continue)Example 11:</h1>
<p>Skip Multiples of 3</p>
<p>Write a Loop From 1 to 20 that:</p>
<p>Skip number divisible by 3</p>
<p>Prints all other numbers</p>
<p>
for(let i=1; i<=20; i++){
    if(i%3 ===0){
        continue;
    }
    console.log(i);
}
</p>
</div>
 */}


//  for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 0) {
//         continue;
//     }
//     console.log(i);
// }


{/* <div>
<h1> (Break and Continue)Example 12:</h1>
<p>Print First 5 Odd Numbers</p>
<p>Write a loop from 1 to 100 that:</p>
<p>Prints only 5 odd numbers</p>
<p>Then stops the loop</p>
<p>Use Both if, continue and a counter + break</p>
<p>
count = 0;
for(let i =1; i<=100; i++){
    if(i%2 ===1){
        count++;
        console.log(i)
    }
    console.log(i);
    if(count ===5){cha
        break;
    }
}
</p>
</div>
 */}

//  let count = 0;

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         continue;   // skip even
//     }

//     console.log(i);
//     count++;

//     if (count === 5) {
//         break;
//     }
// }

// Example 11
//  What does it mean when we say “Functions are First-Class Citizens”?

// Ans-->When we say functions are first-class citizens, it means that functions in JavaScript are treated like normal values.

// This means a function can:
// Be stored in a variable
// Be passed as an argument to another function
// Be returned from a function
// Because functions can do all these things, they are called first-class citizens.

// Why is this important?
// Makes code flexible and reusable
// Helps in callbacks, higher-order functions, and closures
// Widely used in real-world JavaScript (events, timers, APIs)


// <p>Can You assign a function to a variable and then all it?</p>

// let a = function(){
//     console.log("Hello");
// }
// a();

//<h1> Example 13: </h1>
//<p>Pass A function into anthor funtion and excute it inside.</p><p>Ans and Why, How</p>

// function abcd(val){
//     val();
// }
// abcd(function(){
//     console.log("Hello");
// });

//<h1> Example 14: </h1><p>What is higer order function?</p><p>Ans and Why</p>
// jo function dusre function ko argument ke roop me accept kare ya function return kare, use Higher Order Function kehte hain.

// Why important?Clean code Reusability Functional programming

// function higher(fn){
//     fn();
// }

// Example 16: pure or impure function?

// let total = 5;

// function num(num){
//     total += num;
// }
// num(3);

// Why?
// External variable (total) modify kar raha hai
// Same input par different output ho sakta hai
// Side effect present hai

// Example 17: <h1> Example 17: </h1><p>convert example 16 function into pure function?</p><p>Ans and how</p>

// function num(total, num){
//     return total + num;
// }
// let result = num(5, 3);

// Why Pure?
// No external variable
// Same input → same output
// No side effects

// Example 18:<p>What is Closure? When is it created?</p><p>Ans and Example</p>

// Closure tab banta hai jab ek function apne outer function ke variables ko yaad rakhta hai, chahe outer function execute ho chuka ho.

// function outer(){
//     let x = 10;
//     return function(){
//         console.log(x);
//     }
// }

// When created?
// Function creation time
// Not execution time

{/* <h1> Example 19: </h1><p>What's logged?</p> */}

// 
//function outer(){
//     let count = 0;
//     return function(){
//         count++;
//         console.log(count);
//     };
// }

// const counter = outer();
// counter();
// counter();
// Why?
// count closure me preserved hai
// outer() sirf ek baar call hua
// Same count memory use ho rahi hai

//<div><h1> Example 20: </h1><p>Convert below function into an IIFE:</p><p>function init(){    console.log("Initialized"); }</p><p>Ans and Why</p> </div>

// (function(){
//     console.log("Initialized");
// })();

// Why IIFE?
// Turant execute hota hai
// Global scope pollute nahi karta

{/* <h1> Example 21: </h1><p>What is the use of IIFE? Name one real-world use case.</p> */}

// let fun = (function(){
//     let score = 0;
//     return {
//         getScore(){
//             console.log(score);
//         },
//         setScore(val){
//             score = val;
//         }
//     }
// })();

// score private variable hai
// Bahar se direct access nahi ho sakta

// Real-world use
// Data hiding
// Module pattern
// Security

{/* <h1> Example 22: </h1>
<p>What will be the output here and why?</p>
<p>temp_var();</p>
<p>var temp_var = function(){
    console.log("Hello");
}</p>
<p>Ans and Why</p>
</div> */}

// temp_var();

// var temp_var = function(){
//     console.log("Hello");
// }

//  output:  TypeError: temp_var is not a function
// Why?
// Hoisting ke time:
// var temp_var; // undefined

{/* <h1> Example 23: </h1>
<p>What will be the output here and why?</p>
<p>temp_var();</p>
<p>function temp_var(){
    console.log("Hello");
}</p>
<p>Ans and Why</p>
</div> */}

// temp_var();

// function temp_var(){
//     console.log("Hello");
// }

// output : Hello

// Why?
// Function declaration fully hoisted hota hai
// Call before definition allowed
