import {useEffect, useState} from 'react'
import {Grid, IconButton, Typography, Button, TextField} from '@material-ui/core'
import CompleteIcon from "@material-ui/icons/CheckCircle";
import IncompleteIcon from "@material-ui/icons/CheckCircleOutline";
import EditIcon from "@material-ui/icons/Edit";
import { useDispatch } from 'react-redux';
import { changeLabel, toggleIsComplete, toggleIsEditing} from './store/todos/todosSlice'
const TodoItem = ({todo}) => {
  const dispatch = useDispatch()
  const [newLabel, setNewLabel] = useState('')

  useEffect(() => {
    setNewLabel(todo.label)
  }, [todo.label])
  
  const handleCancel = () => {
    dispatch(changeLabel({id: todo.id, newLabel: todo.label}))
    dispatch(toggleIsEditing(todo.id))
  }
  return (
    <Grid container spacing={2} alignItems="center">
      {todo?.isEditing ? (
        <Grid item>
          <form onSubmit={(e) => {
            e.preventDefault()
            dispatch(changeLabel({id: todo.id, newLabel: newLabel}))
            dispatch(toggleIsEditing(todo.id))
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
            <IconButton onClick={() => dispatch(toggleIsComplete(todo.id))}>
              {todo?.isComplete ? <CompleteIcon /> : <IncompleteIcon />}
            </IconButton>
            <IconButton onClick={() => dispatch(toggleIsEditing(todo.id))}>
              <EditIcon/>
            </IconButton>
          </Grid>
        </>
      )}
    </Grid>
  );
}
 
export default TodoItem;
