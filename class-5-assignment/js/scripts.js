//1. Update the style attribute of the first `<p>` tag on the page to have a different color, size or family.
const para = document.querySelector("p");
const link = document.querySelector("p a");
para.style.fontFamily = "Times New Roman";
para.style.color = "pink";
link.style.color = "pink";

//2. Add a new `<p>` element right below the first one and add some content to it.
const new_para = document.createElement("p");
new_para.innerHTML = "Hello there! I am the newbie here.";
new_para.style.color = "green";
const section = document.querySelector("section");
const secondPara = document.querySelectorAll("p")[1];
section.insertBefore(new_para, secondPara);

//3. Write code that inserts an image and inserts it inside the `<section>` tag.

/* 3a. Start from 3 and now write code that, on click of a button ('click' eventListener), can randomly fetch an image from that url and insert it somewhere inside the body. To make it more fun, try to assign it as a background image to the whole body (make it cover fit). Then update your code so that the image can change every time you click the button. 

4.  Extend the existing table with a few additional rows (tr and td) in the html. Then write code to select the table rows and build a loop to assign alternative colors to the rows.
*/
const image = document.createElement("div");
section.appendChild(div);
image.style.backgroundImage = "url('https://source.unsplash.com/random')";

const button = document.createElement("button");
button.innerHTML = "click me";
section.appendChild(button);

// button.addEventListener("click", showImage);

// function showImage() {
//   const image = document.createElement("img");
//   image.setAttribute("src", "https://source.unsplash.com/random");
//   image.style.width = "400px";
//   section.appendChild(image);
// }
