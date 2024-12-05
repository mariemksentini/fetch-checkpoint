/*
const tab = 
    {Tunis : "tn",
    Paris : "fr",
    London : "uk"}
document.querySelectorAll('.city').forEach(cityLink => {
    cityLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior

        const selectedCity = event.target.textContent.trim(); // Get selected city name
        const country = tab.selectedCity
        console.log(selectedCity,country)
        var url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=584b4a7a31e71c8645f53d22222a0184`
        consomAPI(url)
        
    });
});
url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=584b4a7a31e71c8645f53d22222a0184`
console.log(url)
// var button = document.getElementById("dropdownDelayButton")
const consomAPI =async(url)=>{
    try {
        const res = await fetch(url)
        const data = await res.json()
        var summary = document.querySelector(".summaryText")
        summary.innerText = data.weather[0].description
        
        var temp = document.querySelector(".temperature")
        temp.innerText = `${Math.round(+data.main.temp )- 273}`

        var wind = document.querySelector(".wind")
        wind.innerText = `Wind: ${data.wind.speed} mph`

        var precipitation = document.querySelector(".precipitation")
        precipitation.innerText = `humidity: ${data.main.humidity}%`
        
    } catch (error) {
        console.log(error)
        
    }
}
consomAPI(url)*/

const tab = {
    Tunis: "tn",
    Paris: "fr",
    London: "uk",
    Montreal: "ca"

};

document.querySelectorAll('.city').forEach(cityLink => {
    cityLink.addEventListener('click', (event) => {
        event.preventDefault()

        const selectedCity = event.target.textContent.trim()
        const country = tab[selectedCity]
        
        if (country) {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity},${country}&APPID=584b4a7a31e71c8645f53d22222a0184`;
            console.log("Fetching weather data for:", selectedCity, country, url)
            consomAPI(url)
        } else {
            console.error("Country code not found for the selected city.")
        }
    });
});


const consomAPI = async (url) => {
    try {
        const res = await fetch(url)
        const data = await res.json()

        showWeather(data)
        showDate()
    } catch (error) {
        console.error("Error:", error)
    }
};

const showWeather =(data)=>{
    // if (res.ok) {
            // Update the UI with fetched weather data
            var summary = document.querySelector(".summaryText");
            summary.innerText = data.weather[0].description;

            var temp = document.querySelector(".temperature");
            temp.innerText = `${Math.round(data.main.temp - 273.15)}°C`;

            var wind = document.querySelector(".wind");
            wind.innerText = `Wind: ${data.wind.speed} mph`;

            var precipitation = document.querySelector(".precipitation");
            precipitation.innerText = `Humidity: ${data.main.humidity}%`;
        // } else {
        //     console.error("Error fetching weather data:", data.message);
        // }
}

const showDate=()=>{
    var currentDate = new Date()
    var currentDay = currentDate.getDate()
    var currentYear = currentDate.getFullYear()


    const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];

    var currentMonth = months[currentDate.getMonth()]

    var date = document.querySelector('.date')

    date.innerText = `${currentDay} ${currentMonth} ${currentYear}`
}