//Array --Hold multiple values as same time
//["Mobile","Laptop","Tablet",5000,25,588]
//["a","b","Hello"]
//[2,4,5,6]

//create
// variable_name = [values]
// let arr=[1,2,3,4];
//access
//position = [0 1 2 3]
// access
// array_name[position/index]
// arr[0]

//modify
//array_name[postion]=new value
// arr[0]=10;
// arr[1]=20;
// arr[2]=30;
// arr[3]=40;


// Array Methods:
//push,pop,shift,unshift,splice,slice,reverse,sort
//push -->Enter new value into array --place it into last
// let a =[1,2,3,4,5];
//variable || function.method--> koi variable ke function in pachhal dot(.) kari ne lakho to te method kevai
// a.push(700);
// use case -- enter new products into existing products list
// let product =["Apple","Banana","Cherry"]
// product.push("Mango");


//pop --> remove last value into array
// let b =[10,20,30,40];
// b.pop();
// //use case --remove last product you add into your list

// let product1 =["Apple","Banana","Cherry"];
// product1.pop("Mango");


// shift -- remove first value into Array
// let c = [30, 40, 50, 60];
// // c.shift();
// // use case -- remove old product automatic after sometimes
// let product3 =["Apple","Banana","Cherry"];
// product3.shift();

// unshift -- add value into array -- first
// let d = [52, 35, 65, 85];
// // d.unshift(20);
// // use case -- add a value into top of that data you receive
// let product4 =["Apple","Banana","Cherry"];
// product4.unshift("Mango");
// splice -remove value into array --aspecific position and specific  number of values
//into() -fisrt index (position),how many value you want to remove
// let e =[50,60,30,40,10];
// e.splice(3,2)
//e.splice(50, 60, 30)
//use case --select msg and remove multiple msg at on click

// let food = ["samosa","jalebi","maggie","Bhajiya","faluda"]
// food.splice(2,5);
//slice -copy values from array --specific position and specific number of values
//new variable =array_nmae.slice(start index,end index)
//start index --include into copy
//end index --not include intp copy
// let f =[100,50,25,0];
// let new_f =f.slice(1,3);
//use case --copy specific data and save it into new variable

// let old_data = ["apple","samsung","vivo","oppo","readme"]
// let new_data = old_data.slice(0,3)


//generate a report based on date and save it into new variable
//generate a report based on date and generate a file or save the file into your local machine

//splice vs slice
//splice --remove value into main array or modify new array
//slice --copy value from main array and cretate a new array that hold the value that you can into 


//reverse --reverse value of array
// let g= [25,30,35,40,85]
//g.reverse();
//use case --show latest update first into your fronted

//sort --set into ascending order
// let h =[50,20,80,10,40];
// h.sort();

//let h=[11,62,3,4,25];
//let sr =h.sort(function(a,b)){
// return a-b; //ascending order
// })

//let h= [11,62,3,4,25];
// let sr =h.sort((a,b))=>{
//     return b-a; // decending order
//})

// use case --sort product price low to high.


// for each loop
//for each --Array  ni darek value mate loop chalse
// let i =[10,35,40,68]
// i.forEach((val) => {
//     let new_val = val + 10;
//     console.log(new_val);

// });
// [5,58,"Hello"].forEach((val)=>{
//     let new_arr =val+2;
//     console.log(new_arr);
    
// })

// .map() Method:
//map tyare j use karvu ke jiyare ek new arary create karvo che
//first map create a black array --only for understing


// let data =[10,20,50,4,15];
//same like a for each loop but map return a new array
// let temp_data =data.map((val)=>{
//     if(val>20){
//         return val;
//     }
// });

//use case --data ma  thi specific data new array ma store karvo hoy
//ex. product ma thi specific category na product new array ma store karva hoy
//if you want to show only electronics product on your homepage

// let marks =[10,5,20,25,15]
// let final_marks =marks.map((val)=>{
//     if (val == 5){
//         return val +4;
//     }
//     return val;
// })

//filter 
//filter tysre use karvu ke jyare ek new arary create karvo chhe with condition

// in return true/false
//if true --> add into new array
//if else(false)--> not add into new array

// let laptops_price =[15000,20000,30000,65000,99000,45000];
// let expensive_laptops = laptops_price.filter((price) =>{
//     if (price>30000)return true;
// });
 //je vslue 30000 thi vsdhsre hhe te new array ma add thase and biji value ne array ma add nahi kare 
//use case --data ma thi specific data new array ma store karva hoy based on condition
 //ex.product ma thui specific price na product new arrat ma store karva hoy
 //if  you want to show only expensive product on your honepage
 // if you want to filter product based on price
//  let product_type= ["Mobile","Tablet","laptop","Mouse","Keyboard"];
//  let filter_product_type =product_type.filter((type)=>{
//     if(type==="Tablet" || type ==="Mobile")return true;
//  });


 //reduce 
// reduce tyare j use karvu ke jyare ek single value calculate karvi hoy form Array
// let total_price =[10,68,45,58,52,48];
// let final_price =total_price.reduce((accumulator,val)=>{
//     return accumulator + val;
// },0); // intial value of accumulator
// 0+10 => 10
//10+68 =>78
//78 +45 => 123
// console.log("Final Price : ",final_price);
//accumulator --> je value function ma return thase re accumulator ma store thase -->accumulator name change kari sako cho
//val -->array ni darek value

// use case --data ma thi ek single value calculate karvi hoy
//ex.product ma thi total price calculate karvi hoy


// find 
// find tyare j use karvu ke jare arrat mathi ek value find karvi hoy based on condition
// find()return kare che array no element --> callback no return value nahi
//never returns what you return inside it
//return the array element itself -- not return array
//.find() stops at the first match
// it does not continue looping

// let product =["Laptop","Mobile","Tablet","Desktop","Smart watch"];
// let find_product = product.find((item)=>{
//     console.log("can't find product"); // not working
//     if(item ==="Tablet"){
//         return true;
//     }else if (item ==="Desktop"){
//         return true;
//     }else {
//         return "Not Found";
//     }
// })


// some 
//check  kare chhe ke array ma koi pan ek item condition satisfy kare che ke nahi
// condition true aave tyare stop kare
//some() vs find()--> some() can't return you value its return true or false,find() return you value its return true or false,find() return value of array 
//give ans in true and false
// let marks1 =[10,20,35,80];
// let any =marks1.some((val)=>{
//     if (val>85)return 12;
//     //if (val<85)return "need improvement";
// });

//use case --check if some product are out of stock in your cart


// every
//check kare che ke array ke array ma badha j items condition satisfy kare che ke nahi
//true --badha items condition match kare
//false --ek pan fail thay to
// let def =[20,30,40,50];
// let num =def.every(function(val){
//     return val<40;
// })

//use case --> check all student is pass or not

//some(),find(),filter(),every()
//let products =["Tablet","Mobile","Laptop","Mobile"]
//method -->condition --> output
//.some()--> item ==="Mobile" -->true
//.find() --item ==="Mobile" --> "Mobile"
//.filter()--> item ==="Mobile"--> ["Mobile","Mobile"]
//.every() -->item === "Mobile" -->false

//destructing operator --give value to variavle(ex.we dont't use every time arr1[1],just save it into variable let [ ,k] =arr1)

// let arr4 =[1,2,3,4,5]
// let [ , , k] =arr4; //--> destructing 
// // let [j, ,k]=arr;
// console.log(k);
// let user_data=["text","text@gmail.com","Male","Surat"]

// spread operator --copy vslue from msin array
let arr8 =[1,2,3,4,5,6,7];
//let arr4=arr3; // -just give reference not copy value (when you change into arr4 that will be change arr3 too)
let arr9 =[...arr8];
//... --> into function
// ... --> spread --> into array and object
