import React, {useState} from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import NewTodoForm from './NewTodoForm'
import Filter from './Filter'
import {Grid} from '@material-ui/core'
function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (label) => {
    setTodos([...todos, {label, isComplete: false, id: uuidv4(), isEditing: false }])
  }

  const editTodo = (id, newTodo) => {
    const newArray = todos.map((todo) => {
      if (todo.id === id) {
        return { ...newTodo};
      }
      return todo;
    });
    setTodos(newArray);
  }
  
  return (
    <div className="App" style={{ margin: "0.75rem" }}>
      <Grid container>
        <Grid item xs={6}>
          <Grid container direction="column">
            <NewTodoForm addTodo={addTodo} />
          </Grid>
        </Grid>
      </Grid>
      <Grid container alignItems="flex-start" style={{ marginTop: "2rem" }}>
        <Filter todos={todos} editTodo={editTodo} />
      </Grid>
    </div>
  );
}

export default App;
