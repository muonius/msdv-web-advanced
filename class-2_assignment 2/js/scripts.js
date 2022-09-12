//1. Conditions
let num = Math.floor(Math.random() * 100);

const checkOdd = (num) => {
  num % 2 === 0
    ? console.log(`${num} is even.`)
    : console.log(`${num} is odd.`);
};

checkOdd(num);

//2. Conditions/Random
let rolled = Math.ceil(Math.random() * 6);

const rollDice = (rolled) => {
  switch (rolled) {
    case 1:
      console.log("You rolled a one.");
      break;
    case 2:
      console.log("You rolled a two.");
      break;
    case 3:
      console.log("You rolled a three.");
      break;
    case 4:
      console.log("You rolled a four.");
      break;
    case 5:
      console.log("You rolled a five.");
      break;
    case 6:
      console.log("You rolled a six.");
      break;
    default:
      console.log("You rolled a number that does not exist on a dice.");
  }
};

rollDice(rolled);

//3. Loops
//I couldn't figure out how to keep generating a random number
function rollDice2() {
  return rolled;
}
for (let i = 1; i < 10; i++) {
  rollDice2();
  console.log(rolled, i);
  if (rolled > 3) {
    break;
  }
}
//4. Loops
let num2 = Math.floor(Math.random() * 10);
let fact = 1;
for (let i = num2; i > 0; i--) {
  fact *= i;
}
console.log(`${num2}'s factorial is ${fact}`);

//5. Loops
let pound = "";
for (let i = 0; i < 4; i++) {
  pound += "#";
  console.log(pound);
}

//6. Loops and Conditions

let board = "";
for (let col = 0; col < 8; col++) {
  for (let row = 0; row < 8; row++) {
    if ((col + row) % 2 === 0) {
      board += "#";
    } else board += " ";
  }
  board += "\n";
}
console.log(board);
