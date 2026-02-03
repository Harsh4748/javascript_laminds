//////function

// function

// what --> function is a block of code that performs a specific task.

// why --> to avoid code repetition and to make code modular and reusable.

// how --> function keyword, name, parameters, body, return statement


// type of functions:

// function name(params) {}  --> function declaration
function abc() {

}

// let fnc = function () {}  --> function expression
let fnc = function () {

}

// let fnc = () => {}  --> arrow function --> fat arrow function
// let fnc1 = () => {

// }

// function temp_cart() {
//   console.log("Adding Producat");
// }
// temp_cart();
// temp_cart();
// temp_cart();

// parameters vs arguments
// parameters are the names listed in the function definition
// (params --> () ni andar lakheli values)
// arguments are the real values passed to the function (args -->
// function call karti () ni andar lakheli(pass) kareli values).

// function cart(producat) {
// // product parameters
// console.log("product", producat)
// }
// cart("Mobile"); // mobile arguments
// cart("Laptop");
// cart("Tablet");


// default,rest and spread parameters in function
//default
// function abc(v1,v2){
//     console.log(v1,v2);    
// }
// abc(20,21);

// function cart3(price,product="product"){
//     console.log(product,price);
    
// }
// cart3(20000)

// rest --> Let's pass multiple arguments to the function and create params.
// When you want to know what to do, you want to know when you want to use the rest parameter (rest --
// Which function has no parameters and no amount of money is required)
// function abcd(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10) {
//     console.log(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10);
// }
// abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// function abcd1(...numbers) {

// console.log(numbers);

// }

// abcd1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // how to handle multiple arguments

// function abcd2 (v1, v2, ...numbers) {
//     console.log(v1, v2, numbers);
// }
// abcd2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// retrun or early return

// retrun --> function math value spring mokalva mate

// function getValue1(value) {

// if (value < 25) return "Value is less than 25";

// else if (value < 50) return "Value is less than 50";

// else if (value < 75) return "Value Is Is less than 75";

// return "Value is 100 or more";

// }

// let result = getValue1 (80);

// console.log(result);

// first Class Function

// function can be treated as variables
// let fun = function(){}
// let fnc = () =>{}
    // let buyNow1 = function(product,price){
    //     console.log(product,price);
    // }
    // buyNow1("S24 FE",50500)

// convert into arrow function


// function can be passed as arguments to other functions
// let fun = function(){}
//fnc(function()){}
// function abc1(v1,v2){
//     console.log(v2);
//     return v1();
// }
// abc1(function(){
//     console.log("First class function");
    
// },"Hello")

// function abc2(v1,v2){
//     return v1();
//     console.log(v2);
    
// }

// abc2(function(){
//     console.log("First class function");
    
// },"Hello")

// function can be returned from other functions

// function abc(){
//     return function(){
//         console.log("function within function");
//     }
// }
// abc()();
// function abc(){
//     return ()=>{
//         console.log("Arrow function within function");
//     }
// }
// abc2();

// higher order function
// function that takes another function as an argument or return a function as a result(eva function je return kare ek functioin athava acepect kare ek functioin params ma)

// function abcd(val){val();}
// -->abcd(function(){console.log("hello")})
//function abcd(val){}--> higher order function


// function abcd(){return function(){}}abcd()()--> higher order

// pure vs impure function

// pure function --> functioin je same input par same output aapse ane koi bahar na state ne modify na kre (pure functioin-->je function bahar na state ne modify na kare)

// let a =20;
// function change_a(){
//     return "a not change(pure functioin) " + a;
// // pure function    
// }
// console.log(change_a);

// impure function--> function je sme input par different output aapse athava bahar na state ne modify kare(impure function--> je function bahar na state ne modify kare)

// function change_a1(){
//     a++;
//     return "a change(impure function) "+ a;
// }
// console.log(change_a1());

// closure functioin
// function je potana parent function na variables ne access kari shake(return thava valo function use karshe parent function na koi variable)(function within function)
// function outer(){
//     let outer_var="Outer Function Variable";
//     function inner(){
//         console.log(outer_var);
//     }
//     inner();
// }
// outer();


// lexical scope--> nested function can access variables declared in their outer scope

// function outer1(){
//     let outer_var = "outer Function variable";
//     function inner1(){
//         console.log(outer_var);
//         let inner_var ="Inner Function variable";
//         function most_inner(){
//             console.log(outer_var);
//             console.log(inner_var);
//         }
//         most_inner();
//     }
//     inner1();
// }
// outer1();

// another example


// function level1() {
//     let var1 = "Variable from Level 1";

//     function level2() {
//         let var2 = "Variable from Level 2";

//         function level3() {
//             let var3 = "Variable from Level 3";

//             function level4() {
//                 console.log(var1); // Access level1 variable
//                 console.log(var2); // Access level2 variable
//                 console.log(var3); // Access level3 variable
//                 console.log("Inside Level 4 Function");
//             }

//             level4();
//         }

//         level3();
//     }

//     level2();
// }

// level1();


// Hosting in function
// use case --> show project structure
// temp_fnc();

// function temp_fnc(){
//     console.log("hosting in function");
// }

// with the help of arrow function (let, const)

// temp_fnc();   // ❌ Error

// const temp_fnc = () => {
//     console.log("arrow function");
// };


// temp_fnc();   // ❌ Error

// var temp_fnc = () => {
//     console.log("arrow function");
// };


// function expression 

// greet();   // ❌ Error

// var greet = function () {
//     console.log("Hello from function expression");
// };


// greet();   // ❌ ReferenceError

// const greet = function () {
//     console.log("Hello");
// };

