import React from 'react';
import Details from './Containers/Details/index'
import Home from './Containers/Home/index'
import Todos from './Containers/Todos/index'
import NavBar from './Components/NavBar/index'
import { Switch, Route, useHistory }  from 'react-router-dom';
import { StateProvider } from './state'

const App = () => {

	return (
		<StateProvider>
			<NavBar />
			<Switch>
				<Route exact path="/todo/:id" component={Details} />
				<Route exact path="/todo" component={Todos} />
		        <Route exact path="/" component={Home} />
	    	</Switch>
		</StateProvider>
	)
}

export default App

