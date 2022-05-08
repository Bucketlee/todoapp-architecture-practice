import React, { ChangeEventHandler, useCallback, useMemo, useState } from 'react';
import './App.css';
import { store } from './app/store';
import TodoService from './services/todoService';
import { ITodo } from './models/todo';
import useTodoObserver from './useTodoObserver';

function App() {
  const [text, setText] = useState('');
  const todos = useTodoObserver()
  const todoService = useMemo(() => new TodoService(store), []);

  const handleTextInputChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => setText(e.target.value),
    [],
  );

  const handleAddTodoButtonClick = useCallback(() => {
    todoService.addTodo(text);
  }, [text, todoService]);

  const handleToggleTodoButtonClick = useCallback((todo: ITodo) => {
    todoService.toggleTodo(todo);
  }, [todoService]);

  return (
    <div className="App">
      <header className="App-header">
        <input value={text} onChange={handleTextInputChange}></input>
        <button onClick={handleAddTodoButtonClick}>add</button>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => handleToggleTodoButtonClick(todo)}
              />
              <div>{todo.text}</div>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
