const array_one = new Array("one", "two", 3);
console.log(array_one);

const button1 = document.getElementById("GetSwiss");

button1.addEventListener("click", getGetCHData);

function getGetCHData() {
  let url = "https://randomuser.me/api/?results=10&nat=CH";
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (resp) {
      document.getElementById("Output").innerHTML = JSON.stringify(
        resp.results
      );
      buildSwissData(resp.results);
    })
    .catch(function (error) {
      document.getElementById("Output").innerHTML =
        "There was an error " + error;
    });
}

function buildSwissData(data) {
  for (item of data) {
    const person = new CountryPerson(item);
    const p_el = document.createElement("p");
    p_el.innerHTML = person.render();
    document.body.appendChild(p_el);
  }
}

class Person {
  constructor(item) {
    this.first_name = item.name.first;
    this.last_name = item.name.last;
    this.image = item.picture.thumbnail;
  }

  getName() {
    return this.first_name + " " + this.last_name;
  }
  getPicture() {
    return this.image;
  }
  render() {
    return `<a href=""><img src="${this.getPicture()}" /><br>${this.getName()}</a><br>`;
  }
}

class CountryPerson extends Person {
  constructor(item) {
    super(item);
    this.nationality = item.nat;
    this.city = item.location.city;
  }
  getLocation() {
    return this.city + ", " + this.nationality;
  }
  render() {
    return `<a href=""><img src="${this.getPicture()}" /><br>${this.getName()}<br>${this.getLocation()}</a><br>`;
  }
}
