// Attribute Manipulation
//getAttribute,setAttribute,removeAttribute
let link =document.querySelector("a");
console.dir(link);
console.log(link.href);
console.log("href value",link.getAttribute('href'))

//setAttribute
link.setAttribute("href","www.google.com");
console.log("href value",link.getAttribute('href'))

//removeAttribute
link.removeAttribute("href");

// ========================================
//Dynamic DOM manipulation
//createElement,appendChild,removeChild,prepend
//createElement
let text_h1 =document.createElement("h1");
console.log(text_h1)
text_h1.textContent="create h1 with js "

// append / prepend
//document.body.append(text_h1);
document.body.prepend(text_h1);

//appendChild
let outer =document.createElement("div")
outer.classList.add("outer")
document.body.append(outer)

let inner =document.createElement("div")
inner.classList.add("inner")
outer.appendChild(inner)


//append vs appendChild
//remove vs removeChild

// ------------------------------------------
//style updates via .style and classList (add,remove,toggle)
console.dir(text_h1)
text_h1.style.backgroundColor="black";
text_h1.style.color ="White"
text_h1.style.padding ="10px"

//classlist -add
let card =document.querySelector(".card")
console.dir(card)
card.classList.add("card-style");

//remove
card.classList.remove("card");
