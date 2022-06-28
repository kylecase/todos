import {useEffect, useState} from 'react'
import {Grid, IconButton, Typography, Button, TextField} from '@material-ui/core'
import CompleteIcon from "@material-ui/icons/CheckCircle";
import IncompleteIcon from "@material-ui/icons/CheckCircleOutline";
import EditIcon from "@material-ui/icons/Edit";
const TodoItem = ({todo, editTodo}) => {
  const [newLabel, setNewLabel] = useState('')

  useEffect(() => {
    setNewLabel(todo.label)
  }, [todo.label])

  const handleCancel = () => {
    editTodo(todo.id, {
      ...todo,
      isEditing: !todo.isEditing
    })
    setNewLabel(todo.label)
  }
  return (
    <Grid container spacing={2} alignItems="center">
      {todo?.isEditing ? (
        <Grid item>
          <form onSubmit={(e) => {
            e.preventDefault()
            editTodo(todo.id, {...todo, label: newLabel, isEditing: false})
          }}>
            <TextField
              value={newLabel}
              onChange={(e) => setNewLabel(e.target.value)}
            />
            <Button onClick={handleCancel}>Cancel</Button>
            <Button type="submit" variant="contained">Save</Button>
          </form>
        </Grid>
      ) : (
        <>
          <Grid item>
            <Typography
              style={{ textDecoration: todo.isComplete && "line-through" }}
            >
              {todo.label}
            </Typography>
          </Grid>
          <Grid item>
            <IconButton onClick={() => editTodo(todo.id, {...todo, isComplete: !todo.isComplete})}>
              {todo?.isComplete ? <CompleteIcon /> : <IncompleteIcon />}
            </IconButton>
            <IconButton onClick={() => editTodo(todo.id, {...todo, isEditing: true})}>
              <EditIcon/>
            </IconButton>
          </Grid>
        </>
      )}
    </Grid>
  );
}
 
export default TodoItem;
