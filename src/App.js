import './App.css';
import NewTodoForm from './NewTodoForm'
import Filter from './Filter'
import {Grid} from '@material-ui/core'
import TodoList from "./TodoList";

function App() {
  return (
    <div className="App" style={{ margin: "0.75rem" }}>
      <Grid container>
        <Grid item xs={6}>
          <Grid container direction="column">
            <NewTodoForm />
          </Grid>
        </Grid>
      </Grid>
      <Grid container alignItems="flex-start" style={{ marginTop: "2rem" }}>
        <Filter />
        <TodoList />
      </Grid>
    </div>
  );
}

export default App;
