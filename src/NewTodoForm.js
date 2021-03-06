import {useState} from 'react'
import {TextField, Button, Grid} from '@material-ui/core'

const NewTodoForm = ({addTodo}) => {
  const [todoLabel, setTodoLabel] = useState('')

  const handleAddTodo = () => {
    addTodo(todoLabel)
    setTodoLabel('')
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAddTodo();
      }}
    >
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="New todo"
            variant="outlined"
            value={todoLabel}
            onChange={(e) => setTodoLabel(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            type="submit"
            color="primary"
            size="large"
          >
            Save Todo
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
 
export default NewTodoForm;