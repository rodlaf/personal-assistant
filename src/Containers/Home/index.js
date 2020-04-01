import React from 'react';
import Weather from './Components/Weather/index'
import { Title, Container, Message } from './styles'

const Home = () => { 
	return (
		<Container>
			<Title>HELLO!</Title>
			<Message>It's a beautiful day outside.</Message>
			<Weather />
		</Container>
	);
	
}

export default Home

