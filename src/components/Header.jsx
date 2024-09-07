import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import SwitchToggle from './SwitchToggle';

const Header = ({ darkMode, toggleTheme }) => {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Todo App
        </Typography>
        <SwitchToggle darkMode={darkMode} toggleTheme={toggleTheme} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
