"use strict";

// let apiKey = "f2b43360bc225f82cfcb35c2824f1757";
// let weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${apiKey}`;

// const showWeather = () => {
// 	const response = axios.get(weatherApi);
// 	const data = response.json();
// 	console.log(data);
// };

// showWeather();

// function showWeather(response) {
// 	console.log(response.data);
// }
// axios.get(weatherApi).then(showWeather);

function showUser(response) {
	alert(`The user name is ${response.data.name}`);
}

let url = "https://jsonplaceholder.typicode.com/users/1";
axios.get(url).then(showUser);
