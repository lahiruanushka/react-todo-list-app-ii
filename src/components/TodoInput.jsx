import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { Add } from "@mui/icons-material";

const TodoInput = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput(""); // Clear input after adding
    }
  };

  return (
    <Box
      component="form"
      onSubmit={addTodoHandler}
      sx={{ display: "flex", gap: 2, alignItems: "center", mt: 2 }}
    >
      <TextField
        label="Enter a Todo"
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        sx={{ flexGrow: 1, maxWidth: 500 }} 
      />

      <Button
        type="submit"
        variant="contained"
        color="success"
        size="large" 
        sx={{ height: 55, width: 150 }} 
        startIcon={<Add />}
      >
        Add Todo
      </Button>
    </Box>
  );
};

export default TodoInput;
