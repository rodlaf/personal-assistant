import React from 'react';
import { StyledLink } from './styles';
import { useStateValue } from '../../../../state';

const NavLink = ({text, to}) => {
	const[ state, setState ] = useStateValue();
	const toggle = () => {
		setState({...state, pathname: to});
	}
	return (
		
		<StyledLink onClick={() => toggle()} color={state.pathname === to ? 'palevioletred' : 'black'} to={to}>
			{text}
		</StyledLink>
	)
}

export default NavLink