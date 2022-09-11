/* always add comments
for multi line use */

//***********Class Notes */
// let a = 2;
// let b = 46;
// b = b % a;

// const my_array = [1, 2, 3];
// my_array[0] = 2;
// console.log(my_array);

// let num = Math.floor(Math.random()) * 100;
// num % 2 === 0 ? console.log("number is even") : console.log("number is odd");

// //roll the dice

// let num2 = Math.ceil(Math.random() * 6);
// console.log(num2);

//***********Assignment 1 */

let today_day = prompt("What is today?");
if (today_day.toLowerCase() === "thursday") {
  let check_empty = prompt("Is there any spot?");
  if (check_empty.toLowerCase() === "yes") {
    alert("Park now.");
  } else {
    alert("Drive to Wavely");
    let check_empty1 = prompt("Is there any spot on Wavely?");
    if (check_empty1.toLowerCase() === "yes") {
      alert("Park now.");
    } else {
      alert("Drive to paid parking.");
    }
  }
} else {
  alert("Stay home and forget about parking.");
}
