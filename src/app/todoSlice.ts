import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITodo } from '../models/todo'

interface ITodoState {
  todos: ITodo[];
}

const initialState: ITodoState = {
  todos: [],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos.push(action.payload);
    },
    updateTodo: (state, action: PayloadAction<ITodo>) => {
      const todoIndex = state.todos.findIndex((todo) => todo.id === action.payload.id);
      if (todoIndex !== -1) state.todos[todoIndex].toggle();
    },
  },
})

export const { addTodo, updateTodo } = todoSlice.actions
