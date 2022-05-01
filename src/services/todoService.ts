import { Store } from "@reduxjs/toolkit";
import Todo, { ITodo } from "../models/todo";
import { RootState } from "../app/store";
import { addTodo, updateTodo } from "../app/todoSlice";

export interface ITodoService {
  getTodos(): ITodo[];
  addTodo(text: string): void;
  toggleTodo(todo: Todo): void;
}

export default class TodoService implements ITodoService {
  constructor(private readonly store: Store) {
  }

  getTodos(): ITodo[] {
    const state = this.store.getState() as RootState;
    const todos = state.todo.todos;
    return todos;
  }

  addTodo(text: string): void {
    const newTodo = new Todo(text);
    this.store.dispatch(addTodo(newTodo));
  }

  toggleTodo(todo: ITodo): void {
    this.store.dispatch(updateTodo(todo));
  }
}
