import React from 'react';
import { ListItem, ListItemText } from '@mui/material';

const TodoItem = ({ todo }) => {
  return (
    <ListItem sx={{ borderBottom: '1px solid', borderColor: 'divider' }}>
      <ListItemText primary={todo} />
    </ListItem>
  );
};

export default TodoItem;
