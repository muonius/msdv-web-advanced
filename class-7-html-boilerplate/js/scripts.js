//setTimeout(callback,time)
// console.log("1");
// setTimeout(function () {
//   console.log("2");
// }, 3000);

// console.log("3");
// setTimeout(function () {
//   console.log("4");
// }, 1000);
//prints 1,3,4,2

// let button = document.getElementById("GetUsers");
// button.addEventListener("click", getUserData);

// function getUserData() {
//   let url = "https://reqres.in/api/users";
//   fetch(url)
//     .then((res) => res.json())
//     .then(function (resp) {
//       let data = resp.data;
//       const ul = document.createElement("ul");
//       for (let d of data) {
//         let li = document.createElement("li");
//         let span = document.createElement("span");
//         let img = document.createElement("img");

//         span.innerHTML = `${d.first_name} ${d.last_name} ${d.email}`;
//         img.src = d.avatar;
//         li.appendChild(img);
//         li.appendChild(span);
//         ul.append(li);
//       }
//       document.body.append(ul);
//     })
//     .catch(function (resp) {
//       document.getElementById("Output").innerHTML = "There was an error";
//     });
// }

let button = document.getElementById("GetUsers");
button.addEventListener("click", getUserData);

let resp1;

function getUserData() {
  let url =
    "https://unstats.un.org/sdgapi/v1/sdg/Goal/List?includechildren=true";
  fetch(url)
    .then((res) => res.json())
    .then(function (resp) {
      resp1 = resp;
      return fetch("../transformations.json");
    })
    .then((data) => data.json())
    .then((data) => {
      let merged = [];
      for (let i = 0; i < data.length; i++) {
        merged.push({
          ...data[i],
          ...resp1.find((itmInner) => itmInner.code === data[i]["Goal"]),
        });
      }

      console.log(merged);
    })
    .catch(function (resp) {
      document.getElementById("Output").innerHTML = "There was an error";
    });
}
