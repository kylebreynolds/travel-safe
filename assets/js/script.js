var countryInputEl = document.querySelector("#country-input");
var countrySearchTerm = document.querySelector("country-searched");
var countryContainerEl = document.querySelector("country-container");

document.getElementById("deleteBtn").onclick = function() {
    document.getElementById("info").remove();
}

function getApi(){
    console.log("function ran")

    var inputCountry = document.querySelector(".input").value;
    console.log(inputCountry);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'worldometers.p.rapidapi.com',
            'X-RapidAPI-Key': '732163bbc7mshf5bc9ce97d26d10p104e4fjsnaf7fb436f202'
        }
    };
    
    fetch(`https://worldometers.p.rapidapi.com/api/coronavirus/country/${inputCountry}`, options)
        .then(response => response.json())
	    .then(response => console.log(response))
	    .catch(err => console.error(err));
       
} 
var button = document.querySelector(".button");



button.addEventListener("click", getApi)



var display

// create span element to hold country name


// append container with API number of cases



//append container with API number of deaths



// save country searched to local storage

