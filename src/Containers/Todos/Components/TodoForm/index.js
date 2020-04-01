import React from 'react';
import { Input, Container, Button } from './styles'
import { useStateValue } from '../../../../state'

const TodoForm = () => { 
	const [state, setState] = useStateValue();
	const setInput = (value) => {
		setState({...state, input: value});
	}
	const setSearch = (value) => {
		setState({...state, search: value});
	}
	// https://stackoverflow.com/questions/1349404/
	const newId = (length) => {
	   var result           = '';
	   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	   var charactersLength = characters.length;
	   for ( var i = 0; i < length; i++ ) {
	      result += characters.charAt(Math.floor(Math.random() * charactersLength));
	   }
	   return result;
	}
	const addTodo= () => {
		setState(
			// Add todo only if input non-empty
			state.input === "" ? state : 
			{...state, todos: [...state.todos, {id: newId(7), text: state.input, details: ""}]}
		);
	}
	const clearAll = () => {
		setState({...state, todos: []});
	}
	return (
		<Container>
			<div>
				<Input 
					value={state.input}
					onChange={event => setInput(event.target.value)}
					placeholder="My Todo" 
					type="text"
				/>
				<Button onClick={() => addTodo()}>
					Add Todo
				</Button>
			</div>
			<div>
				<Input
					value={state.search}
					onChange={event => setSearch(event.target.value)}
					placeholder="Search Todos" 
					type="text"
				/>
				<Button onClick={() => clearAll()}>
					Clear All Todos
				</Button>
			</div>
		</Container>
	)
}

export default TodoForm