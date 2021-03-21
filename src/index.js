let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  moscow: {
    temp: -5,
    humidity: 20
  }
};

// write your code here

let city = prompt("Enter a city?");
if (city != null) {
  city = city.toLowerCase();

  if (weather[city] !== undefined) {
    //let temperature = weather[city].temp;
    //let humidity = weather[city].humidity;

    alert(
      "It is currently " +
        weather[city].temp +
        "°C " +
        " in " +
        city +
        " with a humidity of " +
        weather[city].humidity +
        "%"
    );

    // alert = `'It is currently ${temp} °C in ${city} with a humidity of ${humidity}'
  } else {
    alert(
      "Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather"
    );
  }
}

let h1 = document.querySelector("#locationName");

let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  let locationInput = document.querySelector("#locationInput").value;

  h1.innerHTML = locationInput;
  window.scroll(0, 0);
}

let p = document.querySelector("#todayDate");

function formatDate() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

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
    "December"
  ];

  let date = new Date();
  let currentYear = date.getFullYear();
  let currentDay = days[date.getDay()];
  let currentMonth = months[date.getMonth()];
  let currentDate = date.getDate();

  let formattedDate = `${currentDay}, ${currentMonth} ${currentDate}, ${currentYear}`;

  p.innerHTML = `${formattedDate}<br>Sunny Day :)`;
}

formatDate();

//return formattedDate;
//console.log(formatDate(currentTime));

// bonus

let converter = document.querySelector("a#convert");

converter.addEventListener("click", convertFormat);

function convertFormat(event) {
  event.preventDefault();

  let temperature = document.querySelector("#temperature").innerHTML;

  let temperatureFormat = document.querySelector("#temperatureFormat")
    .innerHTML;

  if (temperatureFormat == "C") {
    // convert to F

    temperature = (temperature * 9) / 5 + 32;
    temperatureFormat = "F";

    document.querySelector("#temperature").innerHTML = temperature;
    document.querySelector("a#convert").innerHTML = "Convert to Celsius";
  } else {
    // convert to C

    temperature = ((temperature - 32) * 5) / 9;
    temperatureFormat = "C";

    document.querySelector("#temperature").innerHTML = Math.floor(temperature);
    document.querySelector("a#convert").innerHTML = "Convert to Farenheit";
  }

  document.querySelector("#temperatureFormat").innerHTML = temperatureFormat;
}
