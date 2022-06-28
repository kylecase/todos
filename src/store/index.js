import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todos/todosSlice'

export const store = configureStore({
  reducer: {
    todos: todoReducer
  },
});
