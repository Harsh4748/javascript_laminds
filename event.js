let btn =document.querySelector(".btn1");
btn.addEventListener("click",()=>{
    if(btn.textContent==="Dark Mode"){
        btn.textContent="Light Mode"
        document.body.style.backgroundColor="black";
    }else{
        btn.textContent ="Dark Mode"
        document.body.style.backgroundColor="white" 
    }
})

let btn1 = document.querySelector(".btn");
let box = document.querySelector(".color-card");

btn1.addEventListener("click", () => {
    if(btn1.textContent === "Red") {
        box.style.border = "5px solid red";
        btn1.textContent = "White";
    } 
    else{
        box.style.border = "5px solid white";
        btn1.textContent = "Red";
    }
});

// input
// how to know which is typed:

// let inp =document.querySelector("input");
// inp.addEventListener("input",(dets)=>{
//     // console.log(dets)
//     if (dets.data !== null){
//         console.log(dets.data)
//     }
// });

let inp1 =document.querySelector(".input2");
inp1.addEventListener("input",(dets)=>{
    // console.log(dets)
    if (dets.data !== null){
        inp1.style.border = "5px solid white";
        
        console.log(dets.data)
    }
});


