



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
        console.log(data.data)
        document.getElementById("country").innerHTML= JSON.stringify(data.data.Country);
        document.getElementById("activeCases").innerHTML= JSON.stringify(data.data["Active Cases"]);
        document.getElementById("newCases").innerHTML= JSON.stringify(data.data["New Cases"]);
        document.getElementById("newDeaths").innerHTML= JSON.stringify(data.data["New Deaths"]);
        document.getElementById("place").innerHTML= JSON.stringify(data.data.place);
        
        
    })      
} 

var button = document.querySelector(".button");



button.addEventListener("click", getApi)







// create span element to hold country name


// append container with API number of cases



//append container with API number of deaths



// save country searched to local storage

function save(){
    var dataToSave = document.getElementById("country-input").value;
    localStorage.setItem("data", JSON.stringify(dataToSave));
}

button.addEventListener("click", save)

function show(){
    var dataToShow = localStorage.getItem("dataToSave");
    document.getElementById("recent").value = dataToShow

}
