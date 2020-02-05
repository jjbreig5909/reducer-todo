import React, { useState, useReducer, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { toDoReducer, initialState } from '../reducers';


const Todo = ({todo, handleToggleTodo}) => {


    return(
    <li
    onClick= {() => handleToggleTodo(todo.id)}
    style={{textDecoration: todo.complete ? 'line-through' : 'none'}}
    >
        {todo.name}
    </li>
)}

export default Todo