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
