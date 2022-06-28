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

  const toggleIsComplete = (id) => {
    const newArray = todos.map(todo => {
      if(todo.id === id){
        return {...todo, isComplete: !todo.isComplete}
      }
      return todo
    })
    setTodos(newArray)
  }

  const changeLabel = (id, newLabel) => {
    console.log('changing label to: ', newLabel)
    const newArray = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, label: newLabel };
      }
      return todo;
    });
    console.log('the new array is: ', newArray)
    setTodos(newArray);
  }

  const toggleIsEditing = (id) => {
    console.log('toggling is editing...')
     const newArray = todos.map((todo) => {
       if (todo.id === id) {
         return { ...todo, isEditing: !todo.isEditing };
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
        <Filter todos={todos} toggleIsComplete={toggleIsComplete} changeLabel={changeLabel} toggleIsEditing={toggleIsEditing} />
      </Grid>
    </div>
  );
}

export default App;
