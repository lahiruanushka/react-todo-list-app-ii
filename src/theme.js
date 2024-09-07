import { createTheme } from '@mui/material/styles';

// Light theme
const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

// Dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export { lightTheme, darkTheme };
