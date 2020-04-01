For the design of this simple web app, I will use the following hierarchy of 
components:

- Inputs
	- AddTodoBar
	- AddTodoButton
	- SearchBar
	- ClearButton
- TodoList
	- TodoListItem

I will keep a mutable state (an array) of TODO items outside of the app components. The important pieces of data in my app are the following:

- The TODO item name the user has entered
	- This is a state of AddTodoBar
- The search text the user has entered
	- This is a state of SearchBar
- The filtered list of TODO items
	- This is a prop since it is computed from the original list of TODO items
	and the search text from SearchBar.

Now I will worry about the states of the different components and the
information flow in my app.

- AddTodoBar and SearchBar need to display text based on state.
- TodoList need to filter the TODO list based on the list it is passed on.
