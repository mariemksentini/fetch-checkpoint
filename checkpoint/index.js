/*
<div class="container">
<div class="widget">
  <div class="details">
    <div class="temperature">20°</div>
    <div class="summary">
      <p class="summaryText">Mostly Cloudy</p>
    </div>
    <div class="precipitation">Precipitation: 20%</div>
    <div class="wind">Wind: 3 mph</div>
  </div>
  <div class="pictoBackdrop"></div>
  <div class="pictoFrame"></div>
  <div class="pictoCloudBig"></div>
  <div class="pictoCloudFill"></div>
  <div class="pictoCloudSmall"></div>
  <div class="iconCloudBig"></div>
  <div class="iconCloudFill"></div>
  <div class="iconCloudSmall"></div>
</div>
</div>
*/
const city= 'tunis'
const country = 'tn'
var url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=584b4a7a31e71c8645f53d22222a0184`

const ConsumeAPI =async(url)=>{
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    console.log(data.weather[0].description)
    var summary = document.querySelector(".summaryText")
    summary.innerText = data.weather[0].description
    
    var temp = document.querySelector(".temperature")
    temp.innerText = `${Math.round(+data.main.temp )- 273}`

    var wind = document.querySelector(".wind")
    wind.innerText = `Wind: ${data.wind.speed} mph`

    var precipitation = document.querySelector(".precipitation")
    precipitation.innerText = `humidity: ${data.main.humidity}%`
}

ConsumeAPI(url)