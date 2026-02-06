// Q1. push()
// You are building a to-do app. Add a new task 'Buy milk' to the tasks array.
let tasks = ['Wake up', 'Brush teeth'];
tasks.push('Buy milk');

// Q2. pop()
// Remove the last notification from the notifications array.
let notifications = ['Email', 'Message', 'Reminder'];
notifications.pop();

// Q3. shift()
// A queue system removes the first customer. Remove the first customer.
let customers = ['Customer1', 'Customer2', 'Customer3'];
customers.shift();

// Q4. unshift()
// A new song is added to the beginning of the playlist.
let playlist = ['Song B', 'Song C'];
playlist.unshift('Song A');

// Q5. splice()
// In a classroom list, remove 'Alex' and add 'John' and 'Sara' in the same position.
let students = ['Mike', 'Alex', 'Emma', 'Sophia'];
students.splice(1, 1, 'John', 'Sara');

// Q6. splice()
// From the menu, remove 2 items starting from index 1.
let menu = ['Burger', 'Pizza', 'Pasta', 'Salad'];
menu.splice(1, 2);

// Q7. slice()
// Create a new array that contains only weekend days.
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let weekend = days.slice(5, 7);
// Q8. reverse()
// Reverse the order of levels in a game.
let levels = ['Easy', 'Medium', 'Hard'];

levels.reverse();

// Q9. sort()
// Sort the scores in ascending order.
let scores = [45, 12, 78, 34, 89];
scores.sort();



// Q10. sort() with numbers
// Sort the prices from lowest to highest.
// let prices = [199, 49, 999, 299, 149];
// prices.sort((a, b) => a - b);


// Q11. slice() vs splice()
// From the array, create a new array of the first 3 items WITHOUT changing the original array.
let products = ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'];
let firstThree = products.slice(0, 3);




// Q12. splice() complex
// In the array below:
// 1. Remove 'Blue'
// 2. Add 'Purple' and 'Orange' at the same position
let colors = ['Red', 'Green', 'Blue', 'Yellow'];
ans:colors.splice(2, 1, 'Purple', 'Orange')
colors.splice(2, 1, 'Purple', 'Orange');


// Q13. reverse() + push()
// Reverse the array and then add 'Final Step' at the end.
// let steps = ['Step 1', 'Step 2', 'Step 3'];
// steps.reverse();
// steps.push('Final Step');


// Q14. sort() strings
// Sort names alphabetically, ignoring case sensitivity.
let names = ['alice', 'Bob', 'charlie', 'David'];
ans: names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

// Q15. Combination Question
// You are managing a movie watchlist:
// 1. Add 'Inception'
// 2. Remove the first movie
// 3. Sort the list alphabetically
let movies = ['Avatar', 'Titanic', 'Gladiator'];
movies.push('Inception');
movies.shift();
movies.sort();


// Q16. splice() return value
// What does the splice method return in this case?
let nums1 = [1, 2, 3, 4];
nums1.splice(1, 2);

let removed = nums1.splice(1, 2);



// Q17. slice() immutability check
// After executing slice, does the original array change?
let nums2 = [10, 20, 30, 40];
let result = nums2.slice(1, 3);
// Original array does NOT change
// nums2 remains [10, 20, 30, 40]
// result is [20, 30]

// Q19. reverse() mutation
// After reversing, what happens to the original array reference?
let letters = ['a', 'b', 'c'];
let reversedLetters = letters.reverse();
// Both variables point to SAME array
//  letters === reversedLetters → true
//  Original array mutate hota ha

// Q21. splice() edge case
// What happens if deleteCount is 0?
let arr = ['x', 'y', 'z'];
arr.splice(1, 0, 'new');
// Kuch delete nahi hota
// 'new' insert ho jata hai
// Result: ['x', 'new', 'y', 'z']

// Q23. slice() negative index
// What elements are returned?
let values = [100, 200, 300, 400, 500];
let sliced = values.slice(-3, -1);
// slice(-3, -1)


// Result: [300, 400]

// Q24. splice() vs slice() decision
// Which method would you use if you want to:
// a) Update the original array  -->splice()
// b) Keep the original array unchanged --> slice()





// Q25. Chained methods (brain teaser)
// What is the final value of arr?
let arr2 = [1, 2, 3];
arr2.push(arr2.shift());
//  shift() returns 1
//  push(1)
//  Final array: [2, 3, 1]


// 1. Double daily steps count
// Real life: Fitness app doubling step goal
// const steps = [1000, 2000, 3000];
// function doubleSteps(step) {
//   return step * 2;
// }
// const newSteps = steps.map(doubleSteps);
// --->ANS:
// newSteps
// [2000, 4000, 6000]

// 2. Convert minutes to seconds ,Real life: Video duration calculation
// const minutes = [1, 5, 10];
// const seconds = minutes.map(function(min) {
//   return min * 60;
// });

//--->ANS:
// seconds
// [60, 300, 600]

// 3. Add ₹50 delivery charge to prices
// Real life: Food delivery app
// const prices = [200, 350, 500];
// const finalPrices = prices.map(price => price + 50);
// finalPrices
// [250, 400, 550]


// 4. Convert exam marks to grades ,Real life: Result system
// const marks = [35, 72, 88, 40];
// function getGrade(mark) {
//   return mark >= 40 ? 'Pass' : 'Fail';
// }
// const grades = marks.map(getGrade);

// grades
// ['Fail', 'Pass', 'Pass', 'Pass']

// 5. Capitalize names ,Real life: Display usernames properly
// const names = ['rahul', 'neha', 'amit'];
// const formattedNames = names.map(name =>
//   name[0].toUpperCase() + name.slice(1)
// );
// formattedNames
// ['Rahul', 'Neha', 'Amit']




// 6. Apply 10% discounted,Real life: Shopping sale
// const prices = [500, 1000, 1500];
// function applyDiscount(price) {
//   return price - price * 0.10;
// }
// const discounted = prices.map(applyDiscount);

// discounted
// [450, 900, 1350]

// 7. Add bonus points to scores based on condition,Real life: Game scoring system
// const scores = [45, 60, 85];
// const finalScores = scores.map(score => {
//   if (score >= 80) return score + 20;
//   if (score >= 50) return score + 10;
//   return score;
// });

// finalScores
// [45, 70, 105]

// 8. Convert temperatures with formula,Real life: Weather app
// const celsius = [0, 20, 30];
// function toFahrenheit(temp) {
//   return (temp * 9/5) + 32;
// }
// const fahrenheit = celsius.map(toFahrenheit);
// fahrenheit
// [32, 68, 86]

// 9. Generate table of numbers ,Real life: Math learning app
// const numbers = [1, 2, 3, 4];
// const tableOfTwo = numbers.map(num => num * 2);
// tableOfTwo
// // [2, 4, 6, 8]


// 10. Combine map with string formatting,Real life: SMS notification system
// const balances = [500, 1200, 300];
// const messages = balances.map(balance =>
//   `Your balance is ₹${balance}`
// );

// messages
// [
//  'Your balance is ₹500',
//  'Your balance is ₹1200',
//  'Your balance is ₹300'
// ]


// -----------------------------------------------------------------------

// JavaScript .filter() Method Example:

// ### 1. Get even numbers ,**Real life:** Find even roll numbers

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]


// ### 2. Filter adults ,**Real life:** Allow only 3+ users

const ages = [2, 1, 10, 16, 5];
function isAdult(age) {
  return age >= 18;
}
const adults = ages.filter(isAdult);
console.log(adults); // Output: [10, 16]



// ### 3. Remove empty items,**Real life:** Clean user input

const inputs = ['Hello', '', 'World', '', 'JS'];
const validInputs = inputs.filter(text => text !== '');
console.log(validInputs); // Output: ['Hello', 'World', 'JS']



// ### 4. Filter passing marks ,*Real life:** Exam result system

const marks = [35, 72, 88, 40, 25];
const passedStudents = marks.filter(mark => mark >= 40);
console.log(passedStudents); // Output: [35, 72, 88, 40]


// ### 5. Get affordable prices ,**Real life:** Shopping app price filter

const prices = [199, 499, 999, 1499, 299];
const affordable = prices.filter(price => price <= 500);
console.log(affordable); // Output: [199, 499, 299]



// ### 6. Filter long words ,*Real life:** Search keyword validation

const words = ['hi', 'hello', 'javascript', 'ok'];
function isLongWord(word) {
  return word.length > 3;
}
const longWords = words.filter(isLongWord);
console.log(longWords); // Output: ['hello', 'javascript']


// ### 7. Filter positive numbers ,**Real life:** Bank transaction validation
const transactions = [200, -100, 500, -50, 300];
const credits = transactions.filter(amount => amount > 0);
console.log(credits); // Output: [200, 500, 300]


// ### 8. Filter numbers within a range ,**Real life:** Score selection
const scores5 = [45, 60, 85, 30, 90];
const selectedScores = scores5.filter(score => score >= 50 && score <= 90);
console.log(selectedScores); // Output: [45, 60, 85, 30, 90]

// ------------------------------------------------------------------
// JavaScript .reduce() Method Example:

// ### 1. Total money in wallet,**Real life:** Add all cash amounts

const money = [100, 200, 50];
const totalMoney = money.reduce((sum, amount) => sum + amount, 0);
console.log("Total Money:", totalMoney);

// ### 2. Total steps walked in a week ,**Real life:** Fitness tracker
     
const steps = [3000, 5000, 4000, 6000];
function addSteps(total, step) {
  return total + step;
}
const weeklySteps = steps.reduce(addSteps, 0);
console.log("Weekly Steps:", weeklySteps);



// ### 3. Find total cart price,**Real life:** Shopping bill
     
const prices1 = [499, 299, 199];
const totalPrice = prices1.reduce((total, price) => total + price, 0);
console.log("Total Cart Price:", totalPrice);


// ### 4. Find maximum score,**Real life:** Highest exam mark
     
const marks1 = [45, 88, 67, 92];
const highest = marks1.reduce((max, mark) => {
  return mark > max ? mark : max;
}, marks1[0]);
     console.log("Highest Mark:", highest);


// ### 5. Count total characters,**Real life:** Text length calculation
     
const words1 = ['Hi', 'Hello', 'JS'];
const totalChars = words1.reduce((count, word) => count + word.length, 0);
console.log("Total Characters:", totalChars);


// ### 6. Combine words into a sentence ,**Real life:** Message builder
     
const words2 = ['Learning', 'JavaScript', 'is', 'fun'];
const sentence = words2.reduce((text, word) => text + ' ' + word);
console.log("Sentence:", sentence.trim());

// ### 7. Count passed students ,**Real life:** Result summary
     
const marks3 = [35, 72, 88, 40, 25];
const passCount = marks3.reduce((count, mark) => {
  return mark >= 40 ? count + 1 : count;
}, 0);
console.log("Passed Students:", passCount);
     


// ### 8. Calculate final balance ,**Real life:** Bank account calculation
     
const transactions1 = [1000, -200, -300, 500];
const finalBalance = transactions1.reduce((balance, amount) => balance + amount, 0);
console.log("Final Balance:", finalBalance);
     

// ### 10. Build comma-separated string ,**Real life:** Display values in UI
     
const items = ['Pen', 'Book', 'Pencil'];
const result1 = items.reduce((text, item) => text + ', ' + item);
console.log("Comma-separated String:", result1);
// ---------------------------------------------------------------
// JavaScript .Map, .Filter() and .reduce() Method Examples:
// ### Q1. Shopping App – Discounted Total You are given a list of item prices.

// **Tasks:**

// 1. Keep only items costing more than 500
// 2. Apply a 10% discount to those items
// 3. Find the total amount to pay

const prices2 = [200, 800, 1200, 450, 700];

const total = prices2
  .filter(price => price > 500)
  .map(price => price * 0.9)
  .reduce((sum, price) => sum + price, 0);

console.log("Total Amount to Pay:", total);
// 2430


// ### Q2. Fitness App – Total Active Minutes You are given daily activity minutes.

// **Tasks:**
// 1. Keep only days with more than 30 minutes activity
// 2. Convert minutes to calories (1 min = 5 calories)
// 3. Calculate total calories burned

const minutes = [20, 45, 60, 15, 90];

const totalCalories = minutes
  .filter(min => min > 30)
  .map(min => min * 5)
  .reduce((total, cal) => total + cal, 0);

console.log("Total Calories Burned:", totalCalories);
// 975

// ### Q3. Exam System – Average of Passed Marks,You are given marks of students.
// **Tasks:**
// 1. Keep only passing marks (>= 40)
// 2. Calculate the average of passed marks
const marks2 = [35, 72, 88, 40, 25, 90];

const passed = marks2.filter(mark => mark >= 40);
const average =
  passed.reduce((sum, mark) => sum + mark, 0) / passed.length;

console.log("Average of Passed Marks:", average);
// 72.5

// ## Q4. Salary System – Monthly Payout You are given daily wages.
// **Tasks:**
// 1. Keep wages greater than 500
// 2. Add a bonus of 100 to each
// 3. Calculate total payout

const wages = [300, 800, 450, 1000, 600];

const totalPayout = wages
  .filter(wage => wage > 500)
  .map(wage => wage + 100)
  .reduce((total, wage) => total + wage, 0);

console.log("Total Payout:", totalPayout);
// 2600

// ### Q5. Online Course – Completion Points You are given lesson completion percentages.
// **Tasks:**
// 1. Keep only completed lessons (>= 50%)
// 2. Convert percentage into points (percentage × 2)
// 3. Calculate total points
const progress = [20, 50, 75, 40, 100];

const totalPoints = progress
  .filter(p => p >= 50)
  .map(p => p * 2)
  .reduce((sum, p) => sum + p, 0);

console.log("Total Points:", totalPoints);
// 450


// ### Q6. Bank Transactions – Final Balance , You are given a list of transactions.
// **Tasks:**
// 1. Keep only credit transactions (positive values)
// 2. Add 2% interest to each credit
// 3. Calculate final credited amount

const transactions2 = [1000, -500, 2000, -300, 1500];

const creditedAmount = transactions2
  .filter(amount => amount > 0)
  .map(amount => amount * 1.02)
  .reduce((total, amount) => total + amount, 0);

console.log("Final Credited Amount:", creditedAmount);
// 4590

// ### Q7. Game App – Final Score ,You are given scores from multiple rounds.
// **Tasks:**
// 1. Keep scores greater than 50
// 2. Add bonus points (+10)
// 3. Calculate final score

const scores3 = [30, 60, 90, 45, 80];

const finalScore = scores3
  .filter(score => score > 50)
  .map(score => score + 10)
  .reduce((sum, score) => sum + score, 0);

console.log("Final Score:", finalScore);
// 270

// ### Q8. E-commerce – Total Taxed Amount ,You are given item prices.
// **Tasks:**
// 1. Keep items priced above 1000
// 2. Add 18% tax
// 3. Calculate final payable amount

const prices4 = [500, 1200, 3000, 800, 1500];

const finalAmount = prices4
  .filter(price => price > 1000)
  .map(price => price * 1.18)
  .reduce((sum, price) => sum + price, 0);

console.log("Final Payable Amount:", finalAmount);
// 6724

// ### Q9. Attendance System – Reward Points ,You are given daily attendance hours.
// **Tasks:**
// 1. Keep days with attendance >= 8 hours
// 2. Convert hours into points (1 hour = 10 points)
// 3. Find total points earned

const hours = [6, 8, 9, 7, 10];

const totalAttendancePoints = hours
  .filter(hour => hour >= 8)
  .map(hour => hour * 10)
  .reduce((sum, point) => sum + point, 0);

console.log("Total Attendance Points:", totalAttendancePoints);
// 270


// ### Q10. Interview Brain Teaser ⭐ ,You are given a list of numbers.
// **Tasks:**
// 1. Keep only even numbers
// 2. Square each number
// 3. Find the sum of squares

const numbers4 = [1, 2, 3, 4, 5, 6];

const sumOfSquares = numbers4
  .filter(num => num % 2 === 0)
  .map(num => num * num)
  .reduce((sum, num) => sum + num, 0);

console.log("Sum of Squares:", sumOfSquares);
// 56

// --------------------------------------------------------------
// JavaScript Question for .Map(), .filter() and .reduce()
// ### Q1. Grocery Store – Total Cost
// 1. Keep items costing more than 100
// 2. Add 5% tax
// 3. Find total cost

const prices5 = [50, 120, 300, 80, 200];

const totalCost = prices5
  .filter(p => p > 100)
  .map(p => p * 1.05)
  .reduce((s, p) => s + p, 0);

console.log(totalCost);
// 651

// ### Q2. Fitness App – Weekly Calories

// 1. Keep days with workout minutes >= 20
// 2. Convert minutes to calories (1 min = 4 cal)
// 3. Find total calories

const minutes1 = [10, 25, 40, 15, 60];

const totalCalories1 = minutes1
  .filter(m => m >= 20)
  .map(m => m * 4)
  .reduce((s, c) => s + c, 0);

console.log(totalCalories);
// 500

// ### Q3. Exam Results – Total Passed Marks 

// 1. Keep passing marks (>= 40)
// 2. Find total marks

const marks5 = [35, 55, 80, 20, 45];

const totalPassedMarks = marks5
  .filter(m => m >= 40)
  .reduce((s, m) => s + m, 0);

console.log(totalPassedMarks);
// 180


// ### Q4. Bank App – Total Credits

// 1. Keep only positive transactions
// 2. Find total credited amount

const transactions3 = [500, -200, 1000, -300, 700];

const totalCredits = transactions3
  .filter(t => t > 0)
  .reduce((s, t) => s + t, 0);

console.log(totalCredits);
// 2200


// ### Q5. Online Sale – Discounted Bill

// 1. Keep items above 1000
// 2. Apply 15% discount
// 3. Find total payable amount

const prices6 = [800, 1500, 3000, 600, 1200];

const discountedBill = prices6
  .filter(p => p > 1000)
  .map(p => p * 0.85)
  .reduce((s, p) => s + p, 0);

console.log(discountedBill);
// 4845

// ### Q6. Attendance – Reward Points
// 1. Keep attendance hours >= 7
// 2. Convert hours to points (×10)
// 3. Find total points

const hours1 = [5, 7, 8, 6, 9];

const rewardPoints = hours1
  .filter(h => h >= 7)
  .map(h => h * 10)
  .reduce((s, p) => s + p, 0);

console.log(rewardPoints);
// 240


// ### Q7. Delivery App – Total Distance
// 1. Keep trips longer than 5 km
// 2. Add 1 km bonus per trip
// 3. Find total distance
const distances = [3, 6, 10, 4, 8];

const totalDistance = distances
  .filter(d => d > 5)
  .map(d => d + 1)
  .reduce((s, d) => s + d, 0);

console.log(totalDistance);
// 27


// ### Q8. Salary System – Final Salary
// 1. Keep salaries above 20,000
// 2. Add 2,000 bonus
// 3. Find total salary payout

const salaries = [18000, 25000, 30000, 15000];

const totalSalary = salaries
  .filter(s => s > 20000)
  .map(s => s + 2000)
  .reduce((t, s) => t + s, 0);

console.log(totalSalary);
// 59000


// ### Q9. Study App – Total Study Time

// 1. Keep sessions longer than 1 hour
// 2. Convert hours to minutes
// 3. Find total study minutes

const hours2 = [0.5, 1.5, 2, 0.75, 3];

const totalMinutes = hours2
  .filter(h => h > 1)
  .map(h => h * 60)
  .reduce((s, m) => s + m, 0);

console.log(totalMinutes);
// 390


// ### Q10. Electricity Usage – Monthly Bill
// 1. Keep usage above 100 units
// 2. Multiply by cost per unit (₹6)
// 3. Find total bill

const units = [80, 120, 200, 90, 150];

const bill = units
  .filter(u => u > 100)
  .map(u => u * 6)
  .reduce((s, b) => s + b, 0);

console.log(bill);
// 2820


// ### Q11. Game Scores – Final Power Score
// 1. Keep scores above 40
// 2. Double each score
// 3. Find total power score

const scores1 = [30, 50, 90, 20, 70];

const powerScore = scores1
  .filter(s => s > 40)
  .map(s => s * 2)
  .reduce((t, s) => t + s, 0);

console.log(powerScore);
// 420


// ### Q12. Travel App – Total Fare
// 1. Keep rides longer than 10 km
// 2. Add ₹50 service fee
// 3. Find total fare

const rides = [5, 12, 20, 8, 15];

const totalFare = rides
  .filter(r => r > 10)
  .map(r => r + 50)
  .reduce((t, r) => t + r, 0);

console.log(totalFare);
// 147


// ### Q13. Office Work – Productive Hours
// 1. Keep hours >= 6
// 2. Convert hours to minutes
// 3. Find total productive minutes

const hours3 = [4, 6, 8, 5, 9];

const productiveMinutes = hours3
  .filter(h => h >= 6)
  .map(h => h * 60)
  .reduce((s, m) => s + m, 0);

console.log(productiveMinutes);
// 1380


// ### Q14. Shopping Cart – Reward Coins
// 1. Keep purchases above ₹500
// 2. Give 10 coins per purchase
// 3. Find total coins earned

const purchases = [300, 800, 1200, 400];

const totalCoins = purchases
  .filter(p => p > 500)
  .map(() => 10)
  .reduce((s, c) => s + c, 0);

console.log(totalCoins);
// 20

// ### Q15. Fuel App – Total Fuel Cost

// 1. Keep fuel purchases above 5 liters
// 2. Multiply by ₹105 per liter
// 3. Find total cost

const liters = [3, 6, 10, 4, 8];
const fuelCost = liters
  .filter(l => l > 5)
  .map(l => l * 105)
  .reduce((s, c) => s + c, 0);

console.log(fuelCost);
// 2520


// ### Q16. Interview Classic – Sum of Cubes
// 1. Keep odd numbers
// 2. Cube each number
// 3. Find total sum
const numbers1 = [1, 2, 3, 4, 5];

const sumOfCubes = numbers1
  .filter(n => n % 2 !== 0)
  .map(n => n ** 3)
  .reduce((s, n) => s + n, 0);

console.log(sumOfCubes);
// 153


// ### Q17. Performance Tracking – Bonus Points
// 1. Keep values above average
// 2. Add 5 bonus points
// 3. Find total score

const scores2 = [10, 20, 30, 40, 50];
const avg = scores2.reduce((s, n) => s + n, 0) / scores2.length;

const finalScore1 = scores2
  .filter(s => s > avg)
  .map(s => s + 5)
  .reduce((t, s) => t + s, 0);

console.log(finalScore1);
// 100


// ### Q18. Subscription App – Final Bill

// 1. Keep subscriptions above ₹300
// 2. Add 18% tax
// 3. Find final bill

const plans = [199, 399, 599, 299];

const finalBill = plans
  .filter(p => p > 300)
  .map(p => p * 1.18)
  .reduce((s, p) => s + p, 0);

console.log(finalBill);
// 1179.64


// ### Q19. Learning App – Achievement Score

// 1. Keep scores >= 60
// 2. Square each score
// 3. Find total score

const scores4 = [45, 60, 70, 30, 80];

const achievementScore = scores4
  .filter(s => s >= 60)
  .map(s => s * s)
  .reduce((t, s) => t + s, 0);

console.log(achievementScore);
// 14900


// ### Q20. Interview Finisher ⭐
// 1. Keep numbers divisible by 3
// 2. Multiply by 10
// 3. Find total sum

const numbers2 = [3, 6, 9, 10, 12];

const finalSum = numbers2
  .filter(n => n % 3 === 0)
  .map(n => n * 10)
  .reduce((s, n) => s + n, 0);

console.log(finalSum);
// 300



     
