import { Box, Button, Grid, OutlinedInput, Typography } from '@mui/material';
import { useState } from 'react';

import { styles } from './styles';

const Create = () => {
  const [text, setText] = useState('matte painting of a whale in the sea');
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);
  const handleReset = () => setText('');

  return (
    <Grid container sx={styles.container}>
      <Grid container>
        <Grid item xs={12} md={6} mb={4} pr={4}>
          <Typography variant="h5">Input</Typography>

          <Box mt={3}>
            <Typography
              sx={{
                color: 'primary.main',
                backgroundColor: 'rgba(34, 121, 214, 0.1)',
                width: 'fit-content',
                borderRadius: '5px',
                px: 1,
                mb: 2,
              }}
            >
              text prompt
            </Typography>
            <OutlinedInput value={text} onChange={handleTextChange} fullWidth color="primary" />
          </Box>

          <Box mt={3}>
            <Button
              sx={{
                height: 46,
                width: 66,
                fontSize: '.8rem',
                fontWeight: 400,
                mr: 2,
              }}
              variant="contained"
            >
              Submit
            </Button>
            <Button
              sx={{
                height: 46,
                width: 66,
                fontSize: '.8rem',
                fontWeight: 400,
              }}
              variant="outlined"
              onClick={handleReset}
            >
              Reset
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h5">Output</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Create;
