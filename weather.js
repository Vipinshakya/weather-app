let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");

let getWeather = () => {
  let cityValue = cityRef.value;
 
  if (cityValue.length == 0) {
    result.innerHTML = `<h3 class="msg">Please enter a city name</h3>`;
  }
 
  else {
    let url = `https://goweather.herokuapp.com/weather/${cityValue}`;
  
    
    cityRef.value = "";
    fetch(url)
      .then((resp) => resp.json())
      //If city name is valid
      .then((data) => {
        console.log(cityValue)
        var temp=data.temperature
       console.log(data)
       console.log(data.temperature)
       console.log(data.wind)
       console.log(data.description)
       console.log(data.forecast[0].temperature,data.forecast[1].wind)
      
       
        result.innerHTML = `<h3 class="desc-1">${cityValue}</h3>
        <h2>Temp:${temp}</h2>
        <h4 class="weather-1">wind:${data.wind}</h4>
        <h4 class="desc-1">${data.description}</h4>
        <h5 class="desc-1">temp:${data.forecast[0].temperature},wind:${data.forecast[0].wind}</h5>
        
        
        
        `
      })
      //If city name is NOT valid
      .catch(() => {
        result.innerHTML = `<h3 class="msg-1">City not found</h3>`;
      });
  }
  
 
};
searchBtn.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);
