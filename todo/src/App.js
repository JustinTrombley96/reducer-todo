import React, { useReducer } from 'react';

import { reducer, initialState } from './reducers/reducer';

import TodoList from './components/TodoList';
import Form from './components/Form';

import './App.css';

const App = () => {
	const [ state, dispatch ] = useReducer(reducer, initialState);

	const addItem = (e, item) => {
		e.preventDefault();
		dispatch({ type: 'ADD_TODO', payload: item });
	};

	const toggleTodo = itemid => {
		dispatch({ type: 'TOGGLE_TODO', payload: itemid });
	};

	const clearCompleted = e => {
		e.preventDefault();
		dispatch({ type: 'CLEAR_COMPLETED' });
	};

	return (
		<div className='App'>
			<div className='header'>
				<h1>Todo List</h1>
				<Form addItem={addItem} />
			</div>
			<TodoList todos={state.todos} toggleTodo={toggleTodo} clearCompleted={clearCompleted} />
		</div>
	);
};
export default App;
