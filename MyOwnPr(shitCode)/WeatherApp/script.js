const country = document.querySelector(".country");
const week = document.querySelector(".weekdayAndTime .weekday");
const timeOfCountry = document.querySelector(".weekdayAndTime .time");
const degreeIndicator = document.querySelector(".degreeIndicator");
const weatherInfoBlocks = document.querySelectorAll(".weaterInfoByTime--block");
const inp = document.querySelector('input');
const searchBtn = document.querySelector('.header--search .searchIcon');
const changeDegreeType = document.querySelector('.header--CFdeg');
const extraWeatherInfo = document.querySelector('.extraInfoWeather');

const weekdays = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
$.ajax({
    url: "https://get.geojs.io/v1/ip/geo.js",
    dataType: "jsonp",
    jsonpCallback:"geoip",
    success: function(data) {
        console.log(data.country)
        weatherGenerator(data.country);
    }
  });
function weatherGenerator (str) {
        fetch(
            `http://api.weatherapi.com/v1/forecast.json?key=1a80b73497e140c7993113654232301&q=${str.toLowerCase()}`
          )
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              let date = new Date(data.location.localtime);
              console.log(data);
              country.innerText = data.location.name;
              week.innerText = weekdays[date.getDay()];
              timeOfCountry.innerText = `${date.getHours()}:${date.getMinutes()}`;
              degreeIndicator.innerText = Math.floor(data.current.temp_c)  + ' °C';
              degreeIndicator.dataset.c = Math.floor(data.current.temp_c)  + ' °C';
              degreeIndicator.id = Math.floor(data.current.temp_f) + ' °F';
              weatherForecast(data);
              return data;
            })
            .then((data) => {
              let list = {
                Chance_of_rain: 
                { 
                  title: 'Chance of rain',
                  value: data.forecast.forecastday[0].day.daily_chance_of_rain + ' %'
                },
                Humidity: 
                {
                  title: "Humidity",
                  value: data.current.humidity + ' %'
                },
                Wind_speed: 
                {
                  title: 'Wind speed',
                  value: data.current.wind_kph + ' km/h', 
                },
                Visiblity: 
                {
                  title: 'Visibility',
                  value: data.current.vis_km + ' km',
                },
                Pressure: {
                  title: 'Pressure',
                  value: data.current.pressure_mb + ' hPa'
                }
              }
              console.log(list.Pressure)
              for( let item in list){
                createExtraInfoBlocks(list[item].title, list[item].value)
              }
              // createExtraInfoBlocks('Chance of rain', data.forecast.forecastday[0].day.daily_chance_of_rain,);
              // createExtraInfoBlocks('Humidity', data.current.humidity);
              // createExtraInfoBlocks('Wind speed km/h', data.current.wind_kph)
              // createExtraInfoBlocks('Visiblity', data.current.vis_km)
            })
            .catch(err => {
                inp.value = '';
                inp.style.border = '2px solid red';
                inp.placeholder = 'Введите город или страну!';
                setTimeout(() => {
                    inp.style.border = 'none';
                    inp.placeholder = '';
                }, 3000);
            });
}

function weatherForecast(data) {
  let times = ["8:00", "11:00", "15:00", "20:00"];
  weatherInfoBlocks.forEach((block, i) => {
    let tempC = data.forecast.forecastday[0].hour[+times[i].split(":")[0]].temp_c,
    tempF = data.forecast.forecastday[0].hour[+times[i].split(":")[0]].temp_f;

    block.querySelector(".time").innerText = times[i];
    block.querySelector(".weaterInfoByTime--degree span:first-child").innerText = Math.floor(tempC)
    block.dataset.c = Math.floor(tempC) + ' °C';
    block.id = Math.floor(tempF) + '°F';
  });
}

function createExtraInfoBlocks(type, meaning) {
    let newEl = document.querySelector('.extraInfo--block').cloneNode(true);
    newEl.querySelector('.typeOfForecast').innerText = type;
    newEl.querySelector('.percent').innerText = meaning;
    extraWeatherInfo.append(newEl);
}

searchBtn.addEventListener('click', () => weatherGenerator(inp.value));
changeDegreeType.addEventListener('click', () => {
    changeDegreeType.classList.toggle('F');
    if (changeDegreeType.classList.contains('F')){
        document.querySelector('.degreeIndicator').innerText =  document.querySelector('.degreeIndicator').id;
        weatherInfoBlocks.forEach((block) => {
            block.querySelector(".weaterInfoByTime--degree").innerText = block.id;
        })
    }else {
        document.querySelector('.degreeIndicator').innerText =  document.querySelector('.degreeIndicator').dataset.c;
        weatherInfoBlocks.forEach((block) => {
            block.querySelector(".weaterInfoByTime--degree").innerText = block.dataset.c;
        })
    }
})