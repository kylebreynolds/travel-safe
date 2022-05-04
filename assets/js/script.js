

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
    
    fetch(`https://worldometers.p.rapidapi.com/api/coronavirus/country/${inputCountry}`, options).then((data)=> {
        return data.json();
    }).then((data)=>{
        console.log(data);
        document.getElementById("stats").innerHTML= JSON.stringify(data);
    })
     
    
    
        
       
} 
var button = document.querySelector(".button");



button.addEventListener("click", getApi)



function displayStats(data) {
    var stats = data;
    var statsDiv = document.createElement("country-container")



var countryName = stats;
var titleEl = document.createElement("h1")
titleEl.textContent = countryName;
statsDiv.appendChild(titleEl);

}


// create span element to hold country name


// append container with API number of cases



//append container with API number of deaths



// save country searched to local storage

