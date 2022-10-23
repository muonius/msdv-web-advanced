let button = document.getElementById("GetUsers");
button.addEventListener("click", getUserData);

let resp1;

function getUserData() {
  let url =
    "https://unstats.un.org/sdgapi/v1/sdg/Goal/2/Target/List?includechildren=true";
  fetch(url)
    .then((res) => res.json())
    .then(function (resp) {
      console.log(resp);

      let description = resp[0].description;
      let targets = resp[0].targets;

      let span = document.createElement("span");
      span.innerHTML = description;
      let ul = document.createElement("ul");
      for (let t of targets) {
        let li = document.createElement("li");
        li.innerHTML = t.description;
        ul.append(li);
      }

      document.body.append(span);
      document.body.append(ul);

      // return fetch("../transformations.json");
    })