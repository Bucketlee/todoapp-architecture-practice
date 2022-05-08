import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITodoDto } from '../models/todo'

interface ITodoState {
  todos: ITodoDto[];
}

const initialState: ITodoState = {
  todos: [],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodoDto>) => {
      state.todos.push(action.payload);
    },
    replaceTodo: (state, action: PayloadAction<{ id: ITodoDto['id'], newTodo: ITodoDto }>) => {
      const todoIndex = state.todos.findIndex((todo) => todo.id === action.payload.id);
      if (todoIndex !== -1) {
        state.todos[todoIndex] = action.payload.newTodo;
      }
    },
  },
})

export const { addTodo, replaceTodo } = todoSlice.actions
