const searchInp = document.querySelector(".search-input"),
  cityName = document.querySelector(".city-name"),
  weekDay = document.querySelector(".weekday span:first-child"),
  currentTime = document.querySelector(".weekday span:last-child"),
  iconNow = document.querySelector(".icon-now img"),
  temperature = document.querySelector(".temperature .temN"),
  predictTemp = document.querySelector(".temperature-predict");

const API_TOKEN = "1a80b73497e140c7993113654232301",
  weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

let cache = {};

async function getLocation() {
  const response = await fetch("https://ipinfo.io/json?token=64b97c52f62c95");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
}

localStorage.clear();

const fetchData = async (url, place = "Moscow") => {
  if (place === null) {
    place = await getLocation().then((data) => data.city);
  }
  place = place.toUpperCase();
  const localData = localStorage.getItem(url);

  if (
    localData &&
    localStorage.getItem("place") === place &&
    localStorage.getItem("time") > Date.now()
  ) {
    return JSON.parse(localData);
  }

  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${API_TOKEN}&q=${place}`
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  localStorage.setItem(url, JSON.stringify(data));
  localStorage.setItem("place", place);
  localStorage.setItem("time", Date.now() + 1000 * 60 * 60);

  return data;
};

const getWeekDayUtc = (lon) => {
  (date = new Date()),
    (utcTime = date.getTime() + date.getTimezoneOffset() * 60 * 1000),
    (localTime = utcTime + lon * 60 * 60 * 1000),
    (localDate = new Date(localTime)),
    (weekDayIndex = localDate.getUTCDay());
  return weekdays[weekDayIndex];
};

function changeHtml(data) {
  let { location, forecast, current } = data;
  let timeNow = location.localtime.split(" ")[1],
    currTemp = current.temp_c;

  cityName.innerText = location.name;
  weekDay.innerText = getWeekDayUtc(location.lon);
  currentTime.innerText = timeNow;
  temperature.innerText = currTemp < 0 ? currTemp : "+" + currTemp;
  iconNow.src = current.condition.icon;
  createForecastDays(forecast.forecastday[0].hour);
}

function createForecastDays(arr) {
  let list = "";
  for (let el of arr) {
    list += `<li class="predict--weather">
                    <p class="time">${el.time.split(" ")[1]}</p>
                    <div class="icon-predict">
                        <img src="${el.condition.icon}" alt="">           
                    </div>
                    <div class="temperature-predict">${
                      el.temp_c < 0 ? el.temp_c : "+" + el.temp_c
                    } <span class="C">C</span>
                </div>`;
  }
  document.querySelector("ul").innerHTML = list;
}

let country = localStorage.getItem("place");

fetchData("forecast", country).then((data) => {
  changeHtml(data);
});

const carausel = document.querySelector("ul");

let draggable = false,
  prevPageX,
  prevScrollLeft;

carausel.addEventListener("mousedown", (e) => {
  draggable = true;
  prevPageX = e.pageX;
  prevScrollLeft = carausel.scrollLeft;
});

carausel.addEventListener("mousemove", (e) => {
  if (!draggable) return;
  e.preventDefault();
  let positionDiff = e.pageX - prevPageX;
  carausel.scrollLeft = prevScrollLeft - positionDiff;
});

carausel.addEventListener("mouseup", () => (draggable = false));
document.querySelector(".container").addEventListener("mouseup", () => {
  draggable = false;
  console.log("first");
});
document.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (e.key === "Enter") {
    searchInp.click();
  }
});
searchInp.addEventListener("click", (e) => {
  e.preventDefault();
  fetchData("forecast", e.target.value)
    .then((data) => {
      changeHtml(data);
    })
    .catch((erro) => console.log(erro));
  searchInp.value = "";
});
