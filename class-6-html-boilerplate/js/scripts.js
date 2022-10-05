//1. create a function that reverses the string

const reverseString = (str) => {
  const arr = str.split("");
  const newArr = [];
  for (let i = arr.length; i > 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr.join("");
};

console.log(reverseString("hello there"));
//2. Check if a string/sentence is a palindrome

const palindromeCheck = (str) => {
  const re = /[\W_]/g;
  const newString = str.toLowerCase().replace(re, "");
  const arr = newString.split("");
  const reverseString = arr.reverse().join("");
  return newString === reverseString;
};

console.log(palindromeCheck("nurses run"));

//3. check if a year is a leap year

const leapYear = (year) => {
  if (year % 4 === 0 && year % 100 != 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else return false;
};

console.log(leapYear(2022));

/*4. Create a function that can perfomr a word count
given a block of text. Punctuations or special characters are not to be included
*/

const checkCount = (text) => {
  const re = /[\W_]/g;
  let arr = text.split(" ");
  arr = arr.map((t) => t.replace(re, ""));
  console.log(arr);
};

console.log(checkCount("hello! how are you doing?"));
