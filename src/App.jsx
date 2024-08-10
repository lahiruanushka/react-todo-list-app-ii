import { useEffect, useState } from "react";
import "./App.css";
import { TextField, CircularProgress, Box, Typography } from "@mui/material";
import { Header, Footer, TodoList, TodoInput, TodoFilters } from "./components";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  async function fetchListOfTodos() {
    try {
      setLoading(true);
      const apiResponse = await fetch("https://dummyjson.com/todos");
      const result = await apiResponse.json();

      if (result?.todos && result?.todos?.length > 0) {
        setTodoList(result.todos);
      } else {
        setTodoList([]);
      }

      setErrorMsg("");
    } catch (error) {
      setErrorMsg("Failed to fetch todos. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchListOfTodos();
  }, []);

  return (
    <Box sx={{ width: "100%", maxWidth: 500, mx: "auto", p: 2 }}>
      <Header />
      <TodoInput />
      <TodoFilters />
      {loading ? (
        <CircularProgress />
      ) : errorMsg ? (
        <Typography color="error">{errorMsg}</Typography>
      ) : (
        <TodoList todoList={todoList} />
      )}
      <Footer />
    </Box>
  );
}

export default App;
