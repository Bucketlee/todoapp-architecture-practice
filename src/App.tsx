import React, { useState } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { RootState, store } from './app/store';
import TodoService from './services/todoService';

function App() {
  const [text, setText] = useState('');
  const todos = useSelector((state: RootState) => state.todo.todos);
  const todoService = new TodoService(store);
  console.log(todos);
  return (
    <div className="App">
      <header className="App-header">
        <input onChange={(e) => setText(e.target.value)}></input>
        <button onClick={() => todoService.addTodo(text)}>add</button>
        <ul>
          {todos.map(todo => <li key={todo.id}>
            <button onClick={() => todoService.toggleTodo(todo)}>
              {todo.checked ? <input type="checkbox" checked></input> : <input type="checkbox" ></input>}
            </button>
            <div>{todo.text}</div>
          </li>)}
        </ul>
      </header>
    </div>
  );
}

export default App;
