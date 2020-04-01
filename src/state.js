import React, {createContext, useContext, useState } from 'react';

export const StateContext = createContext();

const storage = window.localStorage;

const initialState = {
	todos: storage.getItem('todos') === null ? [] : JSON.parse(storage.getItem('todos')), 
	input: "",
	search: "",
	geo: null,
	detailsInput: "",
	pathname: "/"
};

export const StateProvider = ({children}) => {
	return (
		<StateContext.Provider value={useState(initialState)}>
	    	{children}
		</StateContext.Provider>
	)
};

export const useStateValue = () => useContext(StateContext);
