const api = {
  key: "45af3bfe298750d79f859ee93842f7ed",
  base: "https://api.openweathermap.org/data/2.5/",
};

const searchbox = document.querySelector(".search-box");
searchbox.addEventListener("keypress", setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
  }
}

function getResults(query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResults);
}

function displayResults(weather) {
  let city = document.querySelector(".weatherapp .city");
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector(".weatherapp .date");
  date.innerText = dateBuilder(now);

  let temp = document.querySelector(".weatherapp .temp");
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

  let weather_el = document.querySelector(".weatherapp .weather");
  weather_el.innerText = weather.weather[0].main;
  // console.log(weather_el.innerText);
  let weas = document.querySelector(".weatherapp .icon");
  var iconcode = weather.weather[0].icon;
  var iconurl = "http://openweathermap.org/img/wn/" + iconcode + "@2x.png";
  // console.log(iconurl);
  $("#wicon").attr("src", iconurl);

  let hilow = document.querySelector(".hi-low");
  hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(
    weather.main.temp_max
  )}°c`;
}

function dateBuilder(d) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}
