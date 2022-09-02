console.log("hello!");

let greeting_container;
greeting_container = "Good evening";
console.log(greeting_container);

alert(`Greetings ${greeting_container}`);

document.write("<p>" + greeting_container + "</p>");

/* event listener to change body background */
const btn = document.getElementById("button");
const rainbow = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "rebeccapurple",
  "violet",
];
function change() {
  document.body.style.background = rainbow[Math.floor(7 * Math.random())];
}

btn.addEventListener("click", change);

/* Simple DOM Manipulation example */
const now = new Date();
const hours = now.getHours();
document.write(`It's now: ${hours}. <br><br>`);
let bgColor = "lightorange";
if (hours > 17 && hours < 20) {
  bgColor = "orange";
} else if (hours > 19 && hours < 22) {
  bgColor = "orangered";
} else if (hours > 21 || hours < 5) {
  bgColor = "#C0C0C0";
} else if (hours > 8 && hours < 18) {
  bgColor = "lightblue";
} else if (hours > 6 && hours < 9) {
  bgColor = "skyblue";
} else if (hours > 4 && hours < 7) {
  bgColor = "steelblue";
} else {
  bgColor = "white";
}
document.body.style.backgroundColor = bgColor;

// //Load list of images from url
// const ul = document.createElement("ul");
// const url = "https://randomuser.me/api/?results=10";
// const xhr = new XMLHttpRequest();
// xhr.onerror = function () {
//   // only triggers on error
//   alert(`Oops - we cannot not do this!`);
// };
// xhr.onload = function () {
//   if (xhr.status == 200) {
//     let authors = JSON.parse(xhr.responseText); // Get results
//     for (key in authors.results) {
//       // loop through the results
//       let author = authors.results[key]; //assign current row to author var
//       let li = document.createElement("li"), //  Create theelements we need
//         img = document.createElement("img"),
//         span = document.createElement("span");
//       img.src = author.picture.medium; // Add the source ofthe image to be the src of the img element
//       span.innerHTML = author.name.first + " " + author.name.last; // Make the HTML of our span to be the first and last name of our author
//       li.appendChild(img); // Append img element back tocontaining li
//       li.appendChild(span); // Append span element back tocontaining li
//       ul.appendChild(li); // Append li element back tocontaining ul
//       document.body.append(ul); //Append the new ul to body
//     }
//   }
// };
// xhr.open("GET", url, true);
// xhr.send(null);

const ul = document.createElement("ul");
const url = "https://randomuser.me/api/?results=10";
fetch(url)
  .then((resp) => resp.json())
  .then(function (data) {
    console.log(data);
    let authors = data.results; // Get the results
    authors.forEach(function (author) {
      // Map through the results and for each run the code below
      let li = document.createElement("li"), //  Create the elements we need
        img = document.createElement("img"),
        span = document.createElement("span");
      img.src = author.picture.medium; // Add the source of the image to be the src of the img element
      span.innerHTML = `${author.name.first}
${author.name.last}`; // Make the HTML of our span to be the first and last name of our author
      li.appendChild(img); // Append all our elements
      li.appendChild(span);
      ul.appendChild(li);
    });
    document.body.append(ul);
  })
  .catch(function (error) {
    console.log(error);
  });
