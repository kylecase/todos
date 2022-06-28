import {useState} from 'react'
import TodoList from './TodoList'
import {Select, MenuItem, Typography, Grid} from '@material-ui/core'

const FILTERS = {
  COMPLETE: 'complete',
  INCOMPLETE: 'incomplete',
  ALL: 'all',
}
const Filter = ({todos, editTodo}) => {
  const [filter, setFilter] = useState(FILTERS.ALL)

  const filteredTodos = () => {
    if(filter === FILTERS.COMPLETE){
      return todos.filter(todo => todo.isComplete)
    }
    if(filter === FILTERS.INCOMPLETE){
      return todos.filter(todo => !todo.isComplete)
    }
    return todos
  }

  return (
    <>
      <Grid container spacing={4} alignItems="center">
        <Grid item>
          <Typography variant="h4">Todo List</Typography>
        </Grid>
        <Grid item>
          <Select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <MenuItem value={FILTERS.INCOMPLETE}>Incomplete items</MenuItem>
            <MenuItem value={FILTERS.ALL}>Show All</MenuItem>
            <MenuItem value={FILTERS.COMPLETE}>Completed items</MenuItem>
          </Select>
        </Grid>
      </Grid>
      <TodoList todos={filteredTodos()} editTodo={editTodo}/>
    </>
  );
}
 
export default Filter;