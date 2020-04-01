import React from 'react';
import { StyledLink } from './styles';

const NavLink = ({text, to}) => {
	return (
		<StyledLink color={window.location.pathname === to ? 'palevioletred' : 'black'} to={to}>
			{text}
		</StyledLink>
	)
}

export default NavLink