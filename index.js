const cardTemplate = function (/* You can pass the data here*/) {
  return `<div class="card">
              <img id="flag-image" src="${imgSrc}" alt="flag" />
              <h1 class="center">${countrieName}</h1>
            </div>`;
};


const countriesNode = document.getElementById("countries");




fetch("https://restcountries.com/v3.1/all")
  .then(function (response) {
    return response.json()
    // fetch() returns a promise containing the response (a Response object).
    // This is just an HTTP response, not the actual JSON. 
    // To extract the JSON body content from the response, 
    // we use the json() method and pass it into the next .then()

  })
  .then(function (countries) {
    for (let i = 0; i < countries.length; i++) {
      imgSrc = countries.flags.png;
      countrieName = countries.name.common;
      let divCountrie = cardTemplate(imgSrc,countrieName)
      countriesNode.appendChild(divCountrie)
      document.getElementById("countries").innerHTML
    }

    // Here is where you'll need to add into the DOM all the countries received from API 

    // 1 - We will need to iterate the countries variable with a loop
    // 2 - You can use the cardTemplate() function to create a div with a class card already styled
    // 💡 you can use countriesNode variable to add elements
  });
