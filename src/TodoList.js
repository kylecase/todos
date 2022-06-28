import {Typography, Grid} from '@material-ui/core'
import TodoItem from './TodoItem'
const TodoList = ({todos, editTodo}) => {
  return (
    <>
      <Grid container direction="column" alignItems="flex-start" style={{marginTop: '1.5rem'}}>
        {todos?.length > 0 ? (
          todos.map((todo) => {
            return (
              <Grid item key={todo.id}>
                <TodoItem todo={todo} editTodo={editTodo}/>
              </Grid>
            );
          })
        ) : (
          <Grid item>
            <Typography>There are no todos.</Typography>
          </Grid>
        )}
      </Grid>
    </>

  );
}
 
export default TodoList;