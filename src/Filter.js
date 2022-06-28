import {useState, useEffect} from 'react'
import {Select, MenuItem, Typography, Grid} from '@material-ui/core'
import {FILTERS} from './store/todos/todosSlice'
import { useDispatch } from 'react-redux'
import {setFilteredTodos} from './store/todos/todosSlice'
import {useSelector} from 'react-redux'
const Filter = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState(FILTERS.ALL)
  const todos = useSelector(state => state.todos.todos)
  
  useEffect(() => {
    dispatch(setFilteredTodos(filter))
  }, [todos, filter, dispatch])

  return (
    <>
      <Grid container spacing={4} alignItems="center">
        <Grid item>
          <Typography variant="h4">Todo List</Typography>
        </Grid>
        <Grid item>
          <Select value={filter} onChange={(e) => {
            setFilter(e.target.value)
          }}>
                        <MenuItem value={FILTERS.ALL}>Show All</MenuItem>

            <MenuItem value={FILTERS.INCOMPLETE}>Incomplete items</MenuItem>
            <MenuItem value={FILTERS.COMPLETE}>Completed items</MenuItem>
          </Select>
        </Grid>
      </Grid>
     
    </>
  );
}
 
export default Filter;