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

// 3a. Start from 3 and now write code that, on click of a button ('click' eventListener), can randomly fetch an image from that url and insert it somewhere inside the body. To make it more fun, try to assign it as a background image to the whole body (make it cover fit). Then update your code so that the image can change every time you click the button.

const button = document.createElement("button");
button.innerHTML = "click me";
section.appendChild(button);

button.addEventListener("click", showImage);

//I couldn't get the image to change again
function showImage() {
  document.body.style.backgroundImage =
    "url('https://source.unsplash.com/random')";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
}

// 4.  Extend the existing table with a few additional rows (tr and td) in the html. Then write code to select the table rows and build a loop to assign alternative colors to the rows.

for (let i = 2; i < 5; i++) {
  for (let j = 1; j < 2; j++) {
    const tbody = document.querySelector("tbody");
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>Row ${i} <b>Cell ${j}</b></td><td>Row ${i} <b>Cell ${
      j + 1
    }</b></td>`;
    tbody.appendChild(tr);
  }
}

const trs = document.querySelectorAll("tr");

for (let i = 0; i < trs.length; i++) {
  if (i % 2 === 0) {
    trs[i].style.backgroundColor = "cornflowerblue";
  }
}
