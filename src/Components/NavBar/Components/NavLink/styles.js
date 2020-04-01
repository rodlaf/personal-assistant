import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
	text-align: center;
	font-family: 'Arial';
	color: ${props => props.color};
	text-decoration: none;
	font-weight: bold;
	font-size: 1.5em;
	margin: 0em 1.5em 0em 1.5em;
`