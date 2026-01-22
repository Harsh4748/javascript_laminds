// operators
// Arithematic,comparison,logical,assignment,unary,ternary
//Arithmetic:
// +,-,/,*,**,%

// + --> Add and concatenation
//ex. 1+2 --> Add
// "user " +"name" --> concat 
// 5+"5" --> concat,5+5 -->add
//  subtraction -
//ex  2-1
//  /,*

//ex 240/2, 25*2
// %(module)(sheshfal)(reminder)
//ex 12%4 -->0
//e 9%2 -->1
//**  (square)(exposination)
//ex 2**3 --> 8

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)

// console.log(2/2)
// console.log(2**3)
// console.log(10%3)



// Comparison (ans: true, false)

//==
// console.log(12 = 13)
// console.log(12 = "12")
// ex. 12 == 13, 12 comparison) == "12" (don't check type, only check value, not strict comparison)

//===
// console.log(12===12);
// console.log(12==="12");

// ex. 12 === "12" (check type and value, strict comparaison)
// !=
// console.log(12!=13);

// ex. 12 != 13 (reverse of ==,not strict comparison)
// !==
// console.log(12!== "12");

// ex. 12!== "12" (reverse of ===)
// >=
// console.log(22>=22);

// ex. 22 >= 22
// <=
// console.log(13 <= 13);

// ex. 13 <= 13
// <
// console.log(12 < 113);
// console.log(12 < 9);
// console.log(22 < 22);

// ex. 12 < 113, 12 < 9, 22 < 22
// >

// console.log(12 > 113);
// console.log(12 > 9);
// console.log(22 > 22);
// ex. 12 > 113, 12 > 9, 13 > 13


// operators
 // assignment
//=
let a = 12;
// console.log(a); // 12

// give a value, value assignment operator
// ex. let a = 12;
// +=
let b = 10;
b += 3;   // b = b + 3
// console.log(b); // 13


// ex. a += 3; (add value into old value and save it into a)
//-=
let c = 10;
c -= 4;   
// console.log(c); // 6

//ex. a -= 4; (subtract value into old value and save it into a)
 // *=
let d = 5;
d *= 2;   
// console.log(d); // 10
// ex. a *= 2;

//    /=
let e = 20;
e /= 2;   
// console.log(e); // 10

 // ex. a /= 2;
 // %=

 let f = 10;
f %= 3;   
// console.log(f); // 1

 // ex. a %= 2; (give remainder)


// logical
// && (AND)
// ex. true && true --> true 12<13 && 14<15 --> true
// false && true --> false 12<10 && 14 < 15 --> false
// ture && false --> false
// false && false --> false

// console.log(true && true);    // true
// console.log(false && true);   // false

// console.log(12 < 13 && 14 < 15); // true
// console.log(12 < 10 && 14 < 15); // false


// || (OR)
// ex. true || true --> true
// false || true --> true
// ture || false --> true
// false || false --> false

// console.log(true || true);    // true
// console.log(false || true);   // true
// console.log(true || false);   // true
// console.log(false || false);  // false

// ! (NOT)
// e.g. ! true --> false
// !false --> true
// !12 --> false --> !!12 --> true
// console.log(!true);   // false
// console.log(!false);  // true


//Unary Operator

//+ ! typeof ++
//+

// covert string to number

//ex. +"5" --> 5
// console.log(+"5");   // 5

//+"Name" --> NaN
// console.log(+"Name"); // NaN

//"5" + 5 --> 55
// console.log("5" + 5); // "55"  (string concatenation)

//+"5" + 5 --> 10
// console.log(+"5" + 5); // 10

//-
// console.log(-5);   // -5

// ex. -5
let p = 8;
// console.log(-p);   // -8


// ! 

// e.g. !12 --> false

// console.log(!12);    // false (12 is truthy)
// console.log(!0);     // true
// console.log(!true);  // false
// console.log(!false); // true
// console.log(!!12); // true
// console.log(!!0);  // false


// typeof
// console.log(typeof "name"); // string
// console.log(typeof 12);     // number
// console.log(typeof true);   // boolean
// console.log(typeof null);   // object (JS bug)
// console.log(typeof undefined); // undefined

// ex. typeof "name" string

//++

// ex. let a = 12

// a++ --> 12 // post ex. a++ + a => 25

// ++a --> 13 // pre ex. a++ + a => 26


// ex. let a = 3;

// a--

// a++


// Ternary

// ? : :

// condition ? true theses to print theses: false theses to print theses

//let a = 12>13 ? console.log("true"): console.log("false");

// typeof null --> object

// typeof [] --> object, let a; a instanceof Array --> true

// instanceof --> check type of reference data type // don't use typeof for  reference data type

// typeof NaN --> number

// typeof --> premitive data type mate use karvo    

// instanceof --> reference data type mate use karvo