function createRandomNumber(max) {
  console.log("I am returning", Math.floor(Math.random() * max));
}

//If createRandomNumber, only returns the content of the function;
function createRandomNumber(max) {
  console.log("I am returning", Math.floor(Math.random() * max));
}

//impure function makes a change in programming
function convertToCelsius() {
  let deg_fah = 100;
  let converted_deg = ((deg_fah - 32) * 5) / 9;
  console.log("The converted temperatureis", converted_deg);
}

//pure function does not make a change, just return a value
function convertToCelsius() {
  let deg_fah = 100;
  let converted_deg = ((deg_fah - 32) * 5) / 9;
  return converted_deg;
}

//nothing happens to convertToCelsius()
let converted_deg = convertToCelsius();
console.log("No.1", `The converted temperature is ${converted_deg}`);

//function chaining, function programming using pure functions
//convertToCelsius().openConsule().goHome();

//it's always good to have a default value set
function convertToCelsius2(deg_fah) {
  // if (deg_fah === undefined) {
  //   deg_fah = 32;
  // }
  deg_fah = deg_fah || 32;
  let converted_deg2 = ((deg_fah - 32) * 5) / 9;
  return converted_deg;
}
console.log("No.2", convertToCelsius2());
console.log("No.2", convertToCelsius2(100));

function convertToCelsius3(deg_fah = 32) {
  let converted_deg = ((deg_fah - 32) * 5) / 9;
  return converted_deg;
}
console.log("No.3", convertToCelsius3());

function convertToCelsius4(deg_fah = 32, dec_fixed) {
  // no default for optional param
  let converted_deg = ((deg_fah - 32) * 5) / 9;
  converted_deg = converted_deg.toFixed(dec_fixed);
  console.log(converted_deg);
  return converted_deg;
}

//converted_deg only exists inside of each function
let deg_in_cel = convertToCelsius4(100);
console.log("No.4", deg_in_cel);

let new_func = convertToCelsius;
let deg_in_cel2 = new_func(100, 2);
console.log("new_func", new_func(100));

//callback function
function convert(converter, temperature) {
  return converter(temperature);
}

let deg_in_cel3 = convert(convertToCelsius, 100);
console.log("function as value", deg_in_cel3);

//more callbacks
const convertToCelsius5 = function (deg_fah, callback) {
  let converted_deg = ((deg_fah - 32) * 5) / 9;
  callback(converted_deg);
};
const displayInConsole = function (value) {
  console.log("The converted temperature is: ", value);
};
const displayInModal = function (value) {
  alert("The converted temperature is: " + value);
};

//pass function only as var without () as its a reference to the function which is then called inside
convertToCelsius5(23, displayInConsole);
// convertToCelsius5(23, displayInModal);

//without callback:
const convertToCelsius6 = function (deg_fah) {
  let converted_deg = ((deg_fah - 32) * 5) / 9;
  return converted_deg;
};
let cel = convertToCelsius6(23);
displayInConsole(cel);
// displayInModal(cel);

//function expression
// assign anonymous function to variable
const convertToCelsius7 = function (deg_fah) {
  let converted_deg = ((deg_fah - 32) * 5) / 9;
  return converted_deg;
};
// assign named function to variable
const newFunction = function convertToCelsius8(deg_fah) {
  let converted_deg = ((deg_fah - 32) * 5) / 9;
  return converted_deg;
};

let convertToCelsius9 = (deg_fah = 32, dec_fixed = 1) =>
  (((deg_fah - 32) * 5) / 9).toFixed(dec_fixed);
let convertToCelsius10 = (deg_fah) =>
  (((deg_fah - 32) * 5) / 9).toFixed(dec_fixed);

//function declaration is hoisted, function expression is not hoisted
//when called before defined, function declaration will work

//array function
const my_array = ["blue", "red", "green"];
//anonymous function is function you use once only
//for instance, the below function you can't use it again
const new_array = my_array.map(function (val) {
  return val.toUpperCase();
});

console.log(new_array);
//Similar to:
var toUppercase = function (value) {
  return value.toUpperCase();
};
my_array.map(toUppercase);

//reduce
let array_sum = [1, 2, 3, 4, 5];

sum_arr1 = array_sum.reduce((prev, current) => prev + current);
console.log(sum_arr1);

let sum_arr2 = 0;
for (val of array_sum) {
  sum_arr2 += val;
}
console.log(sum_arr2);

//closure allows you to get access to outer function variables
const module = function () {
  let localVar = 1913;
  const localFunc = function () {
    return localVar;
  };
  return localFunc;
};
let newmod = module(); //return localFunc definition
console.log(newmod()); // calls localFunc 1913
//let newmod=module()()

function multiplier(factor) {
  let ret = function (number) {
    return number * factor;
  };
  return ret;
}

let twice = multiplier(2);
console.log(twice(4));
let thrice = multiplier(3);
console.log(thrice(4));

//Create a function that searches a string and find if it contains a pattern.
//1. find a pattern match in a string

const my_quote =
  "The Answer to the Great Question Of Life, the Universe and Everything is Forty-two.";
let pattern = "Life";

// function findMatch(str, pattern) {
//   const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
//   return str.replace(regex, "").split(" ").includes(pattern) ? "yes" : "no";
// }
// console.log(findMatch(my_quote, pattern));

/*2. when match found, provide a callback that changes that matched part of the string, and make it
uppercase*/

function makeUpperCase(str) {
  return str.toUpperCase();
}

function findMatch(str, pattern, callback) {
  const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  if (str.replace(regex, "").split(" ").includes(pattern) == true) {
    return callback(pattern);
  } else return "no";
}
console.log(findMatch(my_quote, pattern, makeUpperCase));
