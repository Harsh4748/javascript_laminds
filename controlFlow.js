// Control Flow Statements in JavaScriptq
// If-Else Statement (if, if else, if else-if else)

// if (condition) {} --> condition true hoy to {} code run

if (12 < 13) {
    // console.log(true);
}
if (15 < 13) {
    // console.log(true);
} // condition is false that why if statement not run

if (!12) {
    // console.log("number");
}

if (!0) {
    // console.log("number");
}

// if-else 
// if-else Statement

if (12 < 13) {
    // console.log(true);
} else {
    // console.log(false);
}

if (15 < 13) {
    // console.log(true);
} // condition is false that why if statement not run
else {
    // console.log(false); // if if statement condition is false then run this code
}

if (!12) {
    // console.log("number");
}
else {
    // console.log("Not A Number");
}

// if-else if-else Statement

/*

if (condition) {

} else if (condition) {

} else{}

*/

// let loggedin = true;
// let admin = false;
// if (loggedin && admin) {
//     console.log("welcome admin");
// } else if (loggedin) {
//     console.log("welcome user");
// } else {
//     console.log("go to login page");
// }


let age = 20;

if (age >= 18) {
    // console.log("Eligible for voting");
} else if (age >= 13) {
    // console.log("Teenager");
} else {
    // console.log("Child");
}


// Switch case Statement

// switch ("BOGO") // value --> Case value with match last one code run these

// {
//     case "First50":
//         console.log("50% Off on First Order");
//         break;

//     case "BOGO":
//         console.log("Buy one get one" );
//         break;
//     case "BlackFriday":
//         console.log("It's Black Friday Sale get at Rs. 50");
//         break;
//     default:
//         console.log("Offer Not Valid");
// }


// another ex
let signal = "Green";

switch (signal) {
    case "Red":
        // console.log("Stop");
        break;

    case "Yellow":
        // console.log("Get Ready");
        break;

    case "Green":
        // console.log("Go");
        break;

    default:
    // console.log("Invalid Signal");
}


// Early Return Pattern

// function score(value) {
//     if (value > 90) {
//         return "Value is more than 90";
//     } else if (value < 80) {

//         return "Value is less than 80";

//     } else if (value < 70) {

//         return "Value is less than 70";

//     } else if (value < 60) {

//         return "Value is less than 60";

//     } else {

//         return "Value is less than 60";
//     }
// }
// score(100);
// console.log(score(100))


// function score(value) {
//     if (value > 90) return "Value is more than 90";
//     else if (value < 80) return "Value is less than 80";
//     else if (value < 70) return "Value is less than 70";
//     else if (value < 60) return "Value is less than 60";
//     else return "Value is less than 60";
// }
// score(65)
// console.log(score());



// function score(value) {
//     if (value > 90) {
//         return "Value is more than 90";
//     } else if (value >= 80) {
//         return "Value is less than 90";
//     } else if (value >= 70) {
//         return "Value is less than 80";
//     } else if (value >= 60) {
//         return "Value is less than 70";
//     } else {
//         return "Value is less than 60";
//     }
// }

// console.log(score(65)); 


// let x = 2;

// switch (x) {
//     case 2:
//         console.log("Two");
//         break;

//     case 3:
//         console.log("Three");
//         break;

//     default:
//         console.log("Invalid number");
// }


// getGrade(score) function

// function getGrade(score) {

//     if (score >= 90 && score <= 100) {
//         return "A+";
//     }
//     else if (score >= 80 && score <= 89) {
//         return "A";
//     }
//     else if (score >= 70 && score <= 79) {
//         return "B";
//     }
//     else if (score >= 60 && score <= 69) {
//         return "C";
//     }
//     else if (score >= 33 && score <= 59) {
//         return "D";
//     }
//     else if (score >= 0 && score <= 32) {
//         return "Fail";
//     }
//     else {
//         return "Invalid Marks";
//     }
// }

// console.log(getGrade(95))

// Rock-Paper-Scissors (Function)

// function playGame(player1, player2) {

//     if (player1 === player2) {
//         return "Draw";
//     }

//     if (player1 === "rock" && player2 === "scissors") {
//         return "rock";
//     }
//     else if (player1 === "paper" && player2 === "rock") {
//         return "paper";
//     }
//     else if (player1 === "scissors" && player2 === "paper") {
//         return "scissors";
//     }
//     else {
//         return "Invalid input";
//     }
// }

// console.log(playGame("rock", "scissors"));
// console.log(playGame("paper", "rock"));        // paper
// console.log(playGame("scissors", "paper"));    // scissors
// console.log(playGame("rock", "rock"));         // Draw