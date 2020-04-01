import React from 'react';
import TodoForm from './Components/TodoForm/index'
import TodoList from './Components/TodoList/index'
import { Title, Container } from './styles'

const Todos = () => { 
	return (
		<Container>
			<TodoForm/>
			<Title>Your Todos:</Title>
			<TodoList />
		</Container>
	)
}

export default Todos
