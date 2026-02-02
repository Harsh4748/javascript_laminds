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
let fnc1 = () => {

}

function temp_cart() {
  console.log("Adding Producat");
}
temp_cart();
temp_cart();
temp_cart();

// parameters vs arguments
// parameters are the names listed in the function definition
// (params --> () ni andar lakheli values)
// arguments are the real values passed to the function (args -->
// function call karti () ni andar lakheli(pass) kareli values).

function cart(producat) {
// product parameters
console.log("product", producat)
}
cart("Mobile"); // mobile arguments
cart("Laptop");
cart("Tablet");


// default,rest and spread parameters in function
//default
function abc(v1,v2){
    console.log(v1,v2);    
}
abc(20,21);

function cart3(price,product="product"){
    console.log(product,price);
    
}
cart3(20000)

// rest --> Let's pass multiple arguments to the function and create params.
// When you want to know what to do, you want to know when you want to use the rest parameter (rest --
// Which function has no parameters and no amount of money is required)
function abcd(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10) {
    console.log(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10);
}
abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function abcd1(...numbers) {

console.log(numbers);

}

abcd1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // how to handle multiple arguments

function abcd2 (v1, v2, ...numbers) {
    console.log(v1, v2, numbers);
}
abcd2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// retrun or early return

// retrun --> function math value spring mokalva mate

function getValue1(value) {

if (value < 25) return "Value is less than 25";

else if (value < 50) return "Value is less than 50";

else if (value < 75) return "Value Is Is less than 75";

return "Value is 100 or more";

}

let result = getValue1 (80);

console.log(result);

// first Class Function

// function can be treated as variables

// function can be passed as arguments to other functions

// function can be returned from other functions

