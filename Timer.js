// settime , clearTimeout
//settimeout -->  run only one time
//timeout -- in ms

let timmer =setTimeout(() => {
    console.log('Hello')
}, 2000);

//cleartimeout

clearTimeout(timmer);


//set Interval ,clearIntervals
//setIntervals --> run into loop (infinite times)

let timmer1 =setInterval(() => {
    console.log("JavaScript")
}, 2000);

clearInterval(timmer1)

//counter
let number =0;
let num_counter =setInterval(() => {
    if(number <= 10){
        console.log(number)
        number++;
    }
}, 1000);

// popup windows

let card =document.querySelector(".card")
let btn =document.querySelector("button")

setTimeout(() => {
    card.style.display="block"
}, 5000);
btn.addEventListener("click",()=>{
    card.style.display ="none"
})
