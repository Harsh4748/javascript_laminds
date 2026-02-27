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

//change -- when you change element state
let sel =document.querySelector(".select");
let mobile =document.querySelector("i")
sel.addEventListener("change",(dets)=>{
    console.log(dets)
    console.log(dets.target.value)
    mobile.textContent =dets.target.value;
})


//change event => change div color and border color with color input
let box1 =document.querySelector(".box1")
let bg_inp =document.querySelector(".bg-inp")
let border_inp =document.querySelector(".border-inp")

bg_inp.addEventListener("change",(dets)=>{
    console.log(dets.target.value)
    box1.style.backgroundColor = dets.target.value
})

border_inp.addEventListener("change",(dets)=>{
    console.log(dets.target.value)
    box1.style.borderColor = dets.target.value
})


// submit
let form =document.querySelector("form");
form.addEventListener("submit",()=>{
    document.body.style.backgroundColor="red";
})

// mousemove and mouseout
let box2=  document.querySelector(".box2");
box2.addEventListener("mousemove",()=>{
    box2.style.backgroundColor ="skublue"
    box2.style.width="300px"
})

box2.addEventListener("mouseout",()=>{
    box2.style.backgroundColor ="darkgreen";
    box2.style.width ="100px"
});

// keyDown
let text =document.querySelector(".keydown")
text.addEventListener("keydown",()=>{
    text.style.backgroundColor ="black"
    text.style.color ="white"
    text.style.width ="5rem"
});

//keyDown --> keyborad checker



// event obeje:
// sel.addEventListener("change",(dets)=>{
//     console.log(dets);  // ==>dets --that called event object
// })
