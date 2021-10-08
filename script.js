document.querySelector(".display form").addEventListener("submit", (event) => {
    event.preventDefault();
    const city = event.target.search.value;
    fetch(`https://wttr.in/${city}?format=j1`)
      .then((response) => response.json())
      .then((forecast) => {

        console.log(forecast)
        
        const h2 = document.querySelector("h2");
        const areaSpan = document.querySelector("#areaP .bold");
        const area = document.querySelector("#area");
        const areaValue = forecast.nearest_area[0].areaName[0].value;
        const regionSpan = document.querySelector("#regionP .bold")
        const region = document.querySelector("#region");
        const regionValue = forecast.nearest_area[0].region[0].value;
        const countrySpan = document.querySelector("#countryP .bold")
        const country = document.querySelector("#country")
        const countryValue = forecast.nearest_area[0].country[0].value
        const currentlySpan = document.querySelector("#currentlyP .bold")
        const currently = document.querySelector("#currently")
        const currentlyValue = "Feels like " + forecast.current_condition[0].FeelsLikeF + "°F"

        h2.textContent = areaValue;
        areaSpan.textContent = "Area: ";
        area.textContent = areaValue;
        regionSpan.textContent = "Region: "
        region.textContent = regionValue;
        countrySpan.textContent = "Country: "
        country.textContent = countryValue
        currentlySpan.textContent = "Currently: "
        currently.textContent = currentlyValue

        const todayH3 = document.querySelector('#today h3')
        const todayAvgSpan = document.querySelector("#today .avgP .bold ")
        const todayAvg = document.querySelector("#today .avg")
        const todayAvgValue = forecast.weather[0].avgtempF + "°F"
        const todayMaxSpan = document.querySelector("#today .maxP .bold")
        const todayMax = document.querySelector("#today .max") 
        const todayMaxValue = forecast.weather[0].maxtempF + "°F"
        const todayMinSpan = document.querySelector("#today .minP .bold")
        const todayMin = document.querySelector("#today .min")
        const todayMinValue = forecast.weather[0].mintempF + "°F" 

        todayH3.textContent = "Today"
        todayAvgSpan.textContent = "Average Temperature: "
        todayAvg.textContent = todayAvgValue
        todayMaxSpan.textContent = "Max Temperature: "
        todayMax.textContent = todayMaxValue
        todayMinSpan.textContent = "Minimum Temperature: "
        todayMin.textContent = todayMinValue

      })
      .catch((error) => {
        console.log(error);
      });
  });
  