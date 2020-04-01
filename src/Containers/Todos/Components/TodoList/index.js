import React, { useEffect } from 'react';
import { List, ListItem, Message, DeleteIcon } from './styles'
import { useHistory }  from 'react-router-dom';
import { useStateValue } from '../../../../state'

const TodoList = () => {
	const [state, setState] = useStateValue();
	const history = useHistory();

	// save todos to local storage whenever todos are modified
	const storage = window.localStorage;
	useEffect(() => storage.setItem('todos', JSON.stringify(state.todos)));

	const removeTodo = (id) => {
		setState({
			...state,
			todos: state.todos.filter(todo => todo.id !== id)
		});
	}

	if (state.todos.length === 0) {
		return (
			<Message>Nothing to do!</Message>
		);
	}

	const filteredList = state.todos.filter(todo => todo.text.startsWith(state.search));
	const listItems = filteredList.map((todo) =>
		<ListItem key={todo.id}>
			<DeleteIcon onClick={() => removeTodo(todo.id)} viewBox="0 0 20 20">
				<path d="M11.469,10l7.08-7.08c0.406-0.406,0.406-1.064,0-1.469c-0.406-0.406-1.063-0.406-1.469,0L10,8.53l-7.081-7.08
				c-0.406-0.406-1.064-0.406-1.469,0c-0.406,0.406-0.406,1.063,0,1.469L8.531,10L1.45,17.081c-0.406,0.406-0.406,1.064,0,1.469
				c0.203,0.203,0.469,0.304,0.735,0.304c0.266,0,0.531-0.101,0.735-0.304L10,11.469l7.08,7.081c0.203,0.203,0.469,0.304,0.735,0.304
				c0.267,0,0.532-0.101,0.735-0.304c0.406-0.406,0.406-1.064,0-1.469L11.469,10z"></path>
			</DeleteIcon>
			<div onClick={() => history.push(`/todo/${todo.id}`)}>
				{todo.text}
			</div>
		</ListItem>
	);
	return (
			<List>{listItems}</List>
	);
}

export default TodoList
