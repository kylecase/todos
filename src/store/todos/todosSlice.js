import {createSlice} from '@reduxjs/toolkit'
import { v4 as uuidv4 } from "uuid";

export const FILTERS = {
  COMPLETE: 'complete',
  INCOMPLETE: 'incomplete',
  ALL: 'all',
}

const initialState = {
  todos: [],
  filteredTodos: [],
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodoLabel = action.payload
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            label: newTodoLabel,
            isComplete: false,
            id: uuidv4(),
            isEditing: false,
          },
        ],
      };
    },
    toggleIsComplete: (state, action) => {
      const id = action.payload
      const newArray = state.todos.map(todo => {
        if(todo.id === id){
          return {...todo, isComplete: !todo.isComplete}
        }
        return todo
      })
      return {...state, todos: newArray}
    },
    toggleIsEditing: (state, action) => {
      const id = action.payload;
      const newArray = state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isEditing: !todo.isEditing };
        }
        return todo;
      });
      return {...state, todos: newArray};
    },
    changeLabel: (state, action) => {
      const {id, newLabel} = action.payload
      const newArray = state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, label: newLabel };
        }
        return todo;
      });
      return {...state, todos: newArray};
    },
    setFilteredTodos: (state, action) => {
      const filter = action.payload
      let filteredTodos
      if(filter === FILTERS.COMPLETE){
      filteredTodos = state.todos.filter(todo => todo.isComplete)
    } else if (filter === FILTERS.INCOMPLETE){
      filteredTodos = state.todos.filter(todo => !todo.isComplete)
    } else {
      filteredTodos = state.todos
    }
    return {...state, filteredTodos}
    }
  }
})

export const {addTodo, toggleIsComplete, changeLabel, toggleIsEditing, setFilteredTodos} = todosSlice.actions

export default todosSlice.reducer;
