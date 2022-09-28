// const body = document.body; // returns node object - level 1
// console.log(typeof body); // returns "object"
// console.log(body.nodeType); // returns integer
// console.log(body.nodeName); // returns name"BODY"
// console.log(body.nodeValue); // returns nothing since it only has childnodes
// console.log(document.documentElement); //returns top level (usually HTML)
// const images = document.images; // returns a list of image nodes
// const forms = document.forms; // returns a list of forms
// const links = document.links; // returns a list of links inside anchors

// let spans = document.getElementsByTagName("span");
// for (let i = 0; i < spans.length; i++) {
//   let item = spans[i];
//   console.log(item.nodeType);
// }

//new_span=[...spans]

//Exercises

const para = document.querySelector("p");
para.style.fontFamily = "Times New Roman";

const new_para = document.createElement("p");
new_para.innerHTML = "hello there";
const section = document.querySelector("section");
section.appendChild(new_para);

const button = document.createElement("button");
button.innerHTML = "click me";
section.append(button);

button.addEventListener("click", showImage);

function showImage() {
  const image = document.createElement("img");
  image.setAttribute("src", "https://source.unsplash.com/random");
  image.style.width = "400px";
  section.appendChild(image);
}
