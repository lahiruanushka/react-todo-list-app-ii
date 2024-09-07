import React, { useState } from "react";
import {
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
  Paper,
  Container,
  Box,
} from "@mui/material";
import { lightTheme, darkTheme } from "./theme"; // Import themes
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <MuiThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Paper sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
        <Header darkMode={darkMode} toggleTheme={toggleTheme} />
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TodoInput />
            <TodoList />
          </Box>
        </Container>
        <Footer />
      </Paper>
    </MuiThemeProvider>
  );
}

export default App;
