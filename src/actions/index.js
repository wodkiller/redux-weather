import axios from 'axios';

const API_KEY =  '2beb53fa4b88bfbd8c10e68f2a00ec09';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);
	console.log('FETCH_WEATHER request: ', request);
	return {
		type: 'FETCH_WEATHER',
		payload: request
	};
}
