import React from 'react';
import { Input, Title, Container, Button } from './styles'
import { useHistory, useParams }  from 'react-router-dom';
import { useStateValue } from '../../state'

const Details = () => {
	const [state, setState] = useStateValue();
	const { id } = useParams();
	const todo = state.todos.find((todo) => todo.id === id);
	const history = useHistory();
	const updateDetails = (text) => {
		setState({
			...state,
			todos: state.todos.map(t => t.id === todo.id ?  {id: todo.id, text: todo.text, details: text} : t)
		})
	}	
	return (
		<Container>
			<Title>{todo.text}</Title>
			<Input 
				value={todo.details}
				onChange={event => updateDetails(event.target.value)}
				placeholder="Todo details..." 
				type="text" 
			/>
			<Button onClick={() => history.push("/todo")}>
				Save todo
			</Button>
		</Container>
	);
}
export default Details