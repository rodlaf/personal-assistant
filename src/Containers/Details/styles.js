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
	margin: 1em 5.4em;
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
	padding: 4em;
	width: 40em;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: auto;
	display: grid;
`

export const Title = styled.h1`
	font-size: 1.7em;
  	text-align: left;
  	color: black;
	margin-right: 2em;
	font-family: 'Arial';
`