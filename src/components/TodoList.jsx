import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import {
  Card,
  CardContent,
  IconButton,
  Typography,
  Fab,
  Container,
} from "@mui/material"; // Make sure Fab is imported
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id)); // Dispatch the removeTodo action with the todo id
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "2rem" }}>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <Card
            key={todo.id}
            variant="outlined"
            style={{
              marginBottom: "1rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0.5rem",
            }}
          >
            <CardContent style={{ flex: 1 }}>
              <Typography variant="h6" component="p">
                {todo.text}
              </Typography>
            </CardContent>
            <div>
              <Fab
                color="error"
                aria-label="delete"
                size="small"
                style={{ marginLeft: "0.5rem" }}
                onClick={() => handleRemoveTodo(todo.id)}
              >
                <DeleteIcon />
              </Fab>
              <Fab
                color="secondary"
                aria-label="edit"
                size="small"
                style={{ marginLeft: "0.5rem" }}
              >
                <EditIcon />
              </Fab>
            </div>
          </Card>
        ))
      ) : (
        <Typography variant="body1" align="center" color="textSecondary">
          No todos yet! Click add todo button to add a todo.
        </Typography>
      )}
    </Container>
  );
};

export default TodoList;
