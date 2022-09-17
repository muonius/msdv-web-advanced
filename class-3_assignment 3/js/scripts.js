/*If it's Christmas, build a Christmas tree. 

          #
         ###
        #####
       #######
      #########
  
If Christmas is over, cut the tree.
    $$$$$$$$$$$
     $$$$$$$$$
      $$$$$$$
       $$$$$
        $$$
         $
*/

let number = 1;

function treeDecision(callback1, callback2) {
  let checkDate = prompt("Is Christmas over?");

  if (checkDate.toLowerCase() == "no") {
    let checkRow = prompt("Buy a Chirstmas tree. How many rows?");
    let checkPattern = prompt("Pick a pattern from # $ *.");
    callback1(checkRow, checkPattern);
  } else {
    let checkRow = prompt("Cut the Chirstmas tree. How many rows?");
    let checkPattern = prompt("Pick a pattern from # $ *.");
    callback2(checkRow, checkPattern);
  }
}

function buildTree(checkRow, pattern) {
  while (number <= checkRow) {
    let offset = checkRow - number;
    console.log(
      " ".repeat(offset) + pattern.repeat(number) + pattern.repeat(number - 1)
    );
    number++;
  }
}

function cutTree(checkRow, pattern) {
  while (number <= checkRow) {
    let offset = checkRow - number;
    console.log(
      " ".repeat(number) + pattern.repeat(offset + 1) + pattern.repeat(offset)
    );
    number++;
  }
}

treeDecision(buildTree, cutTree);
