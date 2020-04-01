import styled from 'styled-components'

export const ListItem = styled.li`
	display: grid;
	margin: 0.5em;
	grid-template-columns: 30px 40px;
	font-size: 1.5em;
	margin-right:4em;
  	text-align: center;
	font-family: 'Arial';
	align-items: center;
	justify-content: center;
`

export const DeleteIcon = styled.svg`
	visibility: hidden;
	flex: none;
	transition: fill 0.25s;
	fill: palevioletred;

	width: 25px;
	height: 25px;
	${ListItem}:hover & {
    	visibility: visible;
	}
	:hover {
    	fill: #a72a54;
	}
`


export const Message = styled.p`
	font-size: 1.5em;

  	text-align: center;
	font-family: 'Arial';
`
export const List = styled.ul`
	font-family: 'Arial';
`

export const Container = styled.section`
	padding: .5em;
	width: 30em;
	display: flex;

	align-items: left;
	justify-content: left;
	margin: auto;
	display: grid;
`
