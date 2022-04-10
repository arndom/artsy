import { Box } from '@mui/material';
import React from 'react';
import { Missing } from '../../assets/svgs/Missing';
import { styles } from './styles';

const NotFound = () => {
  return (
    <Box sx={styles}>
      <Missing />
    </Box>
  );
};

export default NotFound;
