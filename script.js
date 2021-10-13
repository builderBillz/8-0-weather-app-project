document.querySelector(".display form").addEventListener("submit", (event) => {
  event.preventDefault();

  
  const city = event.target.search.value;

  fetch(`https://wttr.in/${city}?format=j1`)
  .then((response) => response.json())
  .then((forecast) => {
    console.log(city)


    if (!city.length) {
      throw new Error(`Please enter a city`);
    }
    
    console.log(forecast)

    const upperCity= capitalizeFirstLetter(city)


        
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

    h2.textContent = upperCity;
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

    const tomorrowH3 = document.querySelector('#tomorrow h3')
    const tomorrowAvgSpan = document.querySelector("#tomorrow .avgP .bold ")
    const tomorrowAvg = document.querySelector("#tomorrow .avg")
    const tomorrowAvgValue = forecast.weather[1].avgtempF + "°F"
    const tomorrowMaxSpan = document.querySelector("#tomorrow .maxP .bold")
    const tomorrowMax = document.querySelector("#tomorrow .max") 
    const tomorrowMaxValue = forecast.weather[1].maxtempF + "°F"
    const tomorrowMinSpan = document.querySelector("#tomorrow .minP .bold")
    const tomorrowMin = document.querySelector("#tomorrow .min")
    const tomorrowMinValue = forecast.weather[1].mintempF + "°F" 
      
    tomorrowH3.textContent = "Tomorrow"
    tomorrowAvgSpan.textContent = "Average Temperature: "
    tomorrowAvg.textContent = tomorrowAvgValue
    tomorrowMaxSpan.textContent = "Max Temperature: "
    tomorrowMax.textContent = tomorrowMaxValue
    tomorrowMinSpan.textContent = "Minimum Temperature: "
    tomorrowMin.textContent = tomorrowMinValue

    const dayAfterTomorrowH3 = document.querySelector('#day-after-tomorrow h3')
    const dayAfterTomorrowAvgSpan = document.querySelector("#day-after-tomorrow .avgP .bold ")
    const dayAfterTomorrowAvg = document.querySelector("#day-after-tomorrow .avg")
    const dayAfterTomorrowAvgValue = forecast.weather[2].avgtempF + "°F"
    const dayAfterTomorrowMaxSpan = document.querySelector("#day-after-tomorrow .maxP .bold")
    const dayAfterTomorrowMax = document.querySelector("#day-after-tomorrow .max") 
    const dayAfterTomorrowMaxValue = forecast.weather[2].maxtempF + "°F"
    const dayAfterTomorrowMinSpan = document.querySelector("#day-after-tomorrow .minP .bold")
    const dayAfterTomorrowMin = document.querySelector("#day-after-tomorrow .min")
    const dayAfterTomorrowMinValue = forecast.weather[2].mintempF + "°F" 

    dayAfterTomorrowH3.textContent = "Day After Tomorrow"
    dayAfterTomorrowAvgSpan.textContent = "Average Temperature: "
    dayAfterTomorrowAvg.textContent = dayAfterTomorrowAvgValue
    dayAfterTomorrowMaxSpan.textContent = "Max Temperature: "
    dayAfterTomorrowMax.textContent = dayAfterTomorrowMaxValue
    dayAfterTomorrowMinSpan.textContent = "Minimum Temperature: "
    dayAfterTomorrowMin.textContent = dayAfterTomorrowMinValue

    const prevSearch = document.querySelector("ul li")
    // console.log()
    if(prevSearch.textContent === "No previous searches."){
      const prevSearchLink= document.createElement("a")
      const prevSearchLinkValue = document.createTextNode(areaValue)
      prevSearchLink.append(prevSearchLinkValue) 
      prevSearchLink.href = ""
      prevSearchLink.title = city
      prevSearch.textContent = " - " + forecast.current_condition[0].FeelsLikeF + "°F"
      prevSearch.prepend(prevSearchLink)

    }else{ 
  // Worked with Fatema on the Code below    
      const duplicateSearch = []
      const previousSearches = document.querySelectorAll("a")
      console.log(previousSearches)
      
      previousSearches.forEach((previousSearch) => { 
        if (previousSearch.title.toLowerCase() === city.toLowerCase())
        duplicateSearch.push(previousSearch.title.toLowerCase())})

      console.log(duplicateSearch)
      if (duplicateSearch.includes(city.toLowerCase()))  {

      } else {

      const nextSearch = document.createElement("li")
      const nextSearchLink= document.createElement("a")
      const nextSearchLinkValue = document.createTextNode(upperCity)
      nextSearchLink.append(nextSearchLinkValue) 
      nextSearchLink.href = "#"
      nextSearchLink.title = city
      nextSearch.textContent = " - " + forecast.current_condition[0].FeelsLikeF + "°F"
      nextSearch.prepend(nextSearchLink)
      prevSearch.append(nextSearch)
  }
    }
    const links = document.querySelectorAll("a")
      
    links.forEach((link) =>{
        link.addEventListener("click", (event) => {
          event.preventDefault()
          const city = event.target.title;
          console.log(city)
          fetch(`https://wttr.in/${city}?format=j1`)
          .then((response) => response.json())
          .then((forecast) => {
    
          // console.log(forecast)
            
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
    
          h2.textContent = upperCity;
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
    
          const tomorrowH3 = document.querySelector('#tomorrow h3')
          const tomorrowAvgSpan = document.querySelector("#tomorrow .avgP .bold ")
          const tomorrowAvg = document.querySelector("#tomorrow .avg")
          const tomorrowAvgValue = forecast.weather[1].avgtempF + "°F"
          const tomorrowMaxSpan = document.querySelector("#tomorrow .maxP .bold")
          const tomorrowMax = document.querySelector("#tomorrow .max") 
          const tomorrowMaxValue = forecast.weather[1].maxtempF + "°F"
          const tomorrowMinSpan = document.querySelector("#tomorrow .minP .bold")
          const tomorrowMin = document.querySelector("#tomorrow .min")
          const tomorrowMinValue = forecast.weather[1].mintempF + "°F" 
          
          tomorrowH3.textContent = "Tomorrow"
          tomorrowAvgSpan.textContent = "Average Temperature: "
          tomorrowAvg.textContent = tomorrowAvgValue
          tomorrowMaxSpan.textContent = "Max Temperature: "
          tomorrowMax.textContent = tomorrowMaxValue
          tomorrowMinSpan.textContent = "Minimum Temperature: "
          tomorrowMin.textContent = tomorrowMinValue
    
          const dayAfterTomorrowH3 = document.querySelector('#day-after-tomorrow h3')
          const dayAfterTomorrowAvgSpan = document.querySelector("#day-after-tomorrow .avgP .bold ")
          const dayAfterTomorrowAvg = document.querySelector("#day-after-tomorrow .avg")
          const dayAfterTomorrowAvgValue = forecast.weather[2].avgtempF + "°F"
          const dayAfterTomorrowMaxSpan = document.querySelector("#day-after-tomorrow .maxP .bold")
          const dayAfterTomorrowMax = document.querySelector("#day-after-tomorrow .max") 
          const dayAfterTomorrowMaxValue = forecast.weather[2].maxtempF + "°F"
          const dayAfterTomorrowMinSpan = document.querySelector("#day-after-tomorrow .minP .bold")
          const dayAfterTomorrowMin = document.querySelector("#day-after-tomorrow .min")
          const dayAfterTomorrowMinValue = forecast.weather[2].mintempF + "°F" 
    
          dayAfterTomorrowH3.textContent = "Day After Tomorrow";
          dayAfterTomorrowAvgSpan.textContent = "Average Temperature: ";
          dayAfterTomorrowAvg.textContent = dayAfterTomorrowAvgValue;
          dayAfterTomorrowMaxSpan.textContent = "Max Temperature: ";
          dayAfterTomorrowMax.textContent = dayAfterTomorrowMaxValue;
          dayAfterTomorrowMinSpan.textContent = "Minimum Temperature: ";
          dayAfterTomorrowMin.textContent = dayAfterTomorrowMinValue;
             
         }) 
      });
    })

      
  })
    .catch((error) => {
      console.log(error);
      
    });

    event.target.reset()
});
