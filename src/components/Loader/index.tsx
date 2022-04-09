import { Backdrop, CircularProgress, Typography } from '@mui/material';
import React from 'react';
import { styles } from './styles';

const Loader = ({ open }: { open: boolean }) => {
  return (
    <Backdrop sx={styles.root} open={open}>
      <CircularProgress color="inherit" sx={{ mb: 2 }} />
      <Typography>Generating...</Typography>
    </Backdrop>
  );
};

export default Loader;
