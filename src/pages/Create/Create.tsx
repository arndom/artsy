import { ContentCopy, Download, Mic } from '@mui/icons-material';
import { Box, Button, Grid, IconButton, OutlinedInput, Typography } from '@mui/material';
import { useState } from 'react';
import placeholder from '../../assets/images/placeholder.png';
import { AudioModal } from '../../components';

import { styles } from './styles';

const Create = () => {
  const [text, setText] = useState('matte painting of a whale in the sea');
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);
  const handleClear = () => setText('');

  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <Grid container sx={styles.container}>
      <AudioModal open={modalOpen} handleClose={handleModalClose} setText={setText} />
      <Grid container>
        <Grid item xs={12} md={6} mb={4} pr={4}>
          <Typography variant="h5">Input</Typography>

          <Box mt={3}>
            <Typography sx={styles.prompt}>text prompt</Typography>
            <OutlinedInput
              value={text}
              onChange={handleTextChange}
              fullWidth
              color="primary"
              endAdornment={
                <IconButton onClick={handleModalOpen} sx={styles.mic}>
                  <Mic color="secondary" />
                </IconButton>
              }
            />
          </Box>

          <Box mt={3}>
            <Button sx={styles.submit} variant="contained">
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
            <Button sx={styles.copy} variant="outlined">
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
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Create;
