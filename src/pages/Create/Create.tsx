import { ContentCopy, Download, Flare } from '@mui/icons-material';
import { Box, Button, Grid, OutlinedInput, Typography } from '@mui/material';
import { useState } from 'react';
import placeholder from '../../assets/images/placeholder.png';

import { styles } from './styles';

const Create = () => {
  const [text, setText] = useState('matte painting of a whale in the sea');
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);
  const handleClear = () => setText('');

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
                mr: 1,
              }}
              variant="contained"
            >
              Submit
            </Button>
            <Button variant="outlined" onClick={handleClear}>
              Clear
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h5">Output</Typography>

          <Box mt={3}>
            <img src={placeholder} alt="placeholder" style={{ width: '100%' }} />
          </Box>

          <Box mt={3}>
            <Button
              sx={{
                mr: 2,
                mb: 2,
              }}
              variant="outlined"
            >
              <ContentCopy sx={{ mr: 1 }} />
              Share
            </Button>
            <Button
              sx={{
                mr: 2,
                mb: 2,
              }}
              variant="outlined"
            >
              <Download sx={{ mr: 1 }} />
              Download
            </Button>
            <Button variant="outlined" sx={{ mb: 2 }}>
              <Flare sx={{ mr: 1 }} />
              NFT
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Create;
