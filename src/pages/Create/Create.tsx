import { Mic } from '@mui/icons-material';
import { Box, Button, Grid, IconButton, OutlinedInput, Typography } from '@mui/material';
import { useState } from 'react';
import placeholder1 from '../../assets/images/placeholder1.png';
import placeholder2 from '../../assets/images/placeholder2.png';
import { AudioModal, DisplayImage, Loader } from '../../components';

import { styles } from './styles';

const Create = () => {
  const [text, setText] = useState('a silhouetted figure with a hand raised');
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);
  const handleClear = () => setText('');

  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const [images, setImages] = useState([placeholder2, placeholder1]);

  const [loading, setLoading] = useState(false);

  const transform = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setImages(['']);
    }, 2000);
  };

  return (
    <Grid container sx={styles.container}>
      <AudioModal open={modalOpen} handleClose={handleModalClose} setText={setText} />
      <Grid container columnSpacing={5}>
        <Grid item xs={12} md={6} mb={4}>
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
            <Button sx={styles.submit} variant="contained" onClick={transform}>
              Submit
            </Button>
            <Button variant="outlined" onClick={handleClear}>
              Clear
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h5">Output</Typography>

          <Loader open={loading} />

          <Box sx={styles.images}>
            {images.map((image, i) => (
              <DisplayImage key={i} image={image} />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Create;
