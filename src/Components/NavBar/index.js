import React from 'react';
import NavLink from './Components/NavLink/index';
import { Bar } from './styles';

const NavBar = () => (
		<Bar>
			<NavLink text="Home" to="/" />
			<NavLink text="Todos" to="/todo" />
		</Bar>
)

	

export default NavBar