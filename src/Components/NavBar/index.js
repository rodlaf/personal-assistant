import React from 'react';
import NavLink from './Components/NavLink/index';
import { Bar } from './styles';

const NavBar = () => (
	<Bar>
		<NavLink text="Home" to="/personal-assistant/" />
		<NavLink text="Todos" to="/personal-assistant/todo" />
	</Bar>
)

export default NavBar