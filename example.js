// Print number from 1 to 10 using a for loop.
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// Print number from 10 to 1 using while loop
// let i = 10;
// while (i >= 1) {
//     console.log(i);
//     i--;
// }


// Print even numbers from 1 to 20 using for loop 
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// Print odd numbers from 1 to 15 using while loop 
// let i = 1;
// while (i <= 15) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
//     i++;
// }

// Print the multiplication table of 5 
// for (let i = 1; i <= 10; i++) {
//     console.log(`5 x ${i} = ${5 * i}`);
// }


// Find the sum of numbers from 1 to 100
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum = sum + i;
// }
// console.log(sum);

// Print numbers between 1 to 50 divisible by 3
// for (let i = 1; i <= 50; i++) {
//     if (i % 3 === 0) {
//         console.log(i);
//     }
// }

// Ask the user for a number and print whether each number from 1 to that number is even or odd.

// let num = prompt("Give a number");

// for (let i = 1; i <= num; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " is even");
//     } else {
//         console.log(i + " is odd");
//     }
// }


// Count how many numbers between 1 to 100 are divisible by 3 or 5.
// let count = 0;
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         count++;
//     }
// }
// console.log("Count =", count);

// <div> <h1> (Break and Continue)Example 10:</h1> <p>Stop at First Multiple of 7</p> <p>Write a Loop from 1 to 100 that:</p> <p>Prints Each number</p> <p>Stop Completely when it finds the first number divisible by 7</p> <p> for(let i=1; i<=100; i++){ console.log(i); if(i%7 ===0){ break; } } </p> </div>

// for (let i = 1; i <= 100; i++) {
//       console.log(i);
//       if (i % 7 === 0) {
//         break;
//       }
//     }


{/* <div>
<h1> (Break and Continue)Example 11:</h1>
<p>Skip Multiples of 3</p>
<p>Write a Loop From 1 to 20 that:</p>
<p>Skip number divisible by 3</p>
<p>Prints all other numbers</p>
<p>
for(let i=1; i<=20; i++){
    if(i%3 ===0){
        continue;
    }
    console.log(i);
}
</p>
</div>
 */}


//  for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 0) {
//         continue;
//     }
//     console.log(i);
// }


{/* <div>
<h1> (Break and Continue)Example 12:</h1>
<p>Print First 5 Odd Numbers</p>
<p>Write a loop from 1 to 100 that:</p>
<p>Prints only 5 odd numbers</p>
<p>Then stops the loop</p>
<p>Use Both if, continue and a counter + break</p>
<p>
count = 0;
for(let i =1; i<=100; i++){
    if(i%2 ===1){
        count++;
        console.log(i)
    }
    console.log(i);
    if(count ===5){cha
        break;
    }
}
</p>
</div>
 */}

 let count = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        continue;   // skip even
    }

    console.log(i);
    count++;

    if (count === 5) {
        break;
    }
}

