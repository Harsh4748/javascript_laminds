// localstorege API: setItem,getItem,removeItem,clear
//localstorage -->save that data into browser's storage,after close the browser data wasn't deleted
//browser nu aevu storage ke jema data store thay chhe and browser band thay jay to pan data delete thato nathi
//~ 5MB storage

//setItem
// localStorage.setItem("key","value");
localStorage.setItem("username","test");
//getItem
// localStorage.getItem("key_name")
console.log(localStorage.getItem("username"));

//removeItem
localStorage.removeItem("username");

//updateItem
localStorage.setItem("username","demo")


//sessionStorage API
//session Storage --> save that for temporarily time when you close tab delete was deleted
//(aa storage data ne tempory time mate save kari ne rakhe chhe,jyare pan tab close karsho tyare teni sathe data pan delete thai jay chhe)
//~ 5MB Storage

//setItem
sessionStorage.setItem("email","test@gmail.com")

////getItem

console.log(sessionStorage.getItem("email"))

//removeItem
// sessionStorage.removeItem("email")

//update
sessionStorage.setItem("email","demo@gmail.com")

//clear
// sessionStorage.clear();


//Basic cookie structure (manual key =value)
// cookie --> store data into browser cookie
//(cookie data ne browser na cookie name ni property ma save kare che ,cookie no use lighe dat save karva mate thay che)

//when you reload web page data will be aytomatically send to server
// ~ 4KB storage 

document.cookie ="name =test1";
// max age 

document.cookie="email =test@gmail.com;max-age =60"

//dark light mode --> save into local storage

let btn =document.querySelector("button");
let body =document.querySelector("body")
if(localStorage.getItem("theme")==="dark"){
    body.className="";
    body.classList.add(localStorage.getItem("theme"));
    btn.textContent="light Mode"
    btn.style.color ="#222"
    btn.style.backgroundColor ="#555"
    localStorage.setItem("theme","dark")
}


btn.addEventListener("click",()=>{
    console.log("btn clicked");
    if (body.classList.contains("light")){
        body.classList.remove("light");
          body.classList.add("dark");
        btn.textContent="Light Mode";
        btn.style.color = "#222";
        btn.style.backgroundColor ="#555";
        localStorage.setItem("theme","dark");

    }else{
        body.classList.remove("dark");
         body.classList.add("light");
        btn.textContent="Dark mode";
        btn.style.color = "rgb(224,224,224)";
        btn.style.backgroundColor ="white";
        localStorage.setItem("theme","light");
    }
})
