import React, { useEffect } from 'react';
import { Title, Message } from './styles';
import { useStateValue } from '../../../../state'

const Weather = () => { 
	const [state, setState] = useStateValue();
	
	const fetchData = () => { 
		navigator.geolocation.getCurrentPosition(function(position) {
		 	fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=db5bbba816b58757082ce2230c7754a6&units=imperial`)
			.then(response => response.json())
			.then(body => {
				setState({...state, geo: body});
			});
		}, (e) => alert('Unable to retrieve information'));
	};
	useEffect(fetchData, []);
	return (
		state.geo === null ? 
		<Message>Retrieving info...</Message> : 
		<div>
			<Title>It's {state.geo.main.temp}°.</Title>
			<Message>Today's forecast is {state.geo.weather[0].description}. 
			The high is {state.geo.main.temp_max}° and the low is {state.geo.main.temp_min}°,
			but it feels more like {state.geo.main.feels_like}°. 
			I hope your day in {state.geo.name} is a great one!</Message>
		</div>
	);	
}

export default Weather

