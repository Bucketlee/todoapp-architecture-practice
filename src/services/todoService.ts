import { Store } from "@reduxjs/toolkit";
import Todo, { ITodo } from "../models/todo";
import { RootState } from "../app/store";
import { addTodo, replaceTodo } from "../app/todoSlice";

export interface ITodoService {
  getTodos(): ITodo[];
  addTodo(text: string): void;
  toggleTodo(todo: ITodo): void;
}

export default class TodoService implements ITodoService {
  constructor(private readonly store: Store) {
  }

  getTodos(): ITodo[] {
    const state = this.store.getState() as RootState;
    const todos = state.todo.todos;
    return todos.map(todo => Todo.fromJson(todo));
  }

  addTodo(text: string): void {
    const newTodo = Todo.fromText(text).toJson();
    this.store.dispatch(addTodo(newTodo));
  }

  toggleTodo(todo: ITodo): void {
    this.store.dispatch(replaceTodo({
      id: todo.id,
      newTodo: todo.copyWith({ checked: !todo.checked }).toJson(),
    }));
  }
}
