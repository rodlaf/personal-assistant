import styled from 'styled-components'

export const Button = styled.button`
	background: palevioletred;
	border: none;
	border-radius: 2px;
	cursor: pointer;
	color: white;
	width: 10em;
	height: 2.4em;
	font-weight:bold;
	font-size: .9em;
	padding: 0.1em;
	margin: 1em 0em 0em 2em;
	:hover {
    	background: #a72a54;
	}
`

export const Input = styled.input`
  	width: 20em;
  	font-size: .9em;
  	padding: 0.5em;
 	height: 1.5em;
 	background: WhiteSmoke;
 	border: none;

`;

export const Container = styled.section`
	width: 30em;
	display: flex;
	align-items: left;
	justify-content: left;
	margin: auto;
	display: grid;
`

