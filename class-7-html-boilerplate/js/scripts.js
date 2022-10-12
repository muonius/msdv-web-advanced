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

let button = document.getElementById("GetUsers");
button.addEventListener("click", getUserData);

function getUserData() {
  let url = "https://reqres.in/api/users";
  fetch(url)
    .then((res) => res.json())
    .then(function (resp) {
      let data = resp.data;
      const ul = document.createElement("ul");
      for (let d of data) {
        let li = document.createElement("li");
        let span = document.createElement("span");
        let img = document.createElement("img");

        span.innerHTML = `${d.first_name} ${d.last_name} ${d.email}`;
        img.src = d.avatar;
        li.appendChild(img);
        li.appendChild(span);
        ul.append(li);
      }
      document.body.append(ul);
    })
    .catch(function (resp) {
      document.getElementById("Output").innerHTML = "There was an error";
    });
}
//   xhr.onerror = function () {
//     document.getElementById("Output").innerHTML = "There was an error";
//   };

//   xhr.onprogress = function (event) {
//     console.log(event);
//     document.getElementById("Output").innerHTML = "In progress";
//   };

//   xhr.onload = function () {
//     if (xhr.status === 200) {
//       let authors = JSON.parse(xhr.responseText); // Getresults
//       for (key in authors.results) {
//         // loop through theresults
//         let author = authors.results[key]; //assign current row to author var
//         console.log(author);
//       }
//     } else {
//       document.getElementById("Output").innerHTML = "There was an error";
//     }
//   };

//   xhr.open("GET", url, true);
//   xhr.send();
//   console.log(xhr);
// }
