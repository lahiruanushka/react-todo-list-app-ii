import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ p: 2, textAlign: 'center', bgcolor: 'background.paper', mt: 'auto' }}>
      <Typography variant="body2" color="textSecondary">
        © 2024 Todo App, Inc.
      </Typography>
    </Box>
  );
};

export default Footer;
