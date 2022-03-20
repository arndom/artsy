import { Mic } from '@mui/icons-material';
import { Box, Button, Grid, IconButton, OutlinedInput, Typography } from '@mui/material';
import axios, { AxiosRequestConfig } from 'axios';
import { useState } from 'react';
import placeholder2 from '../../assets/images/placeholder2.png';
import placeholder3 from '../../assets/images/placeholder3.png';
import { AudioModal, DisplayImage } from '../../components';

import { styles } from './styles';

const API_KEY = process.env.REACT_APP_HOTPOT_API_KEY;

const Create = () => {
  const [text, setText] = useState('a silhouetted figure with a hand raised');
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);
  const handleClear = () => setText('');

  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const images = [placeholder2, placeholder3];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const transform = async () => {
    const data = new FormData();
    data.append('inputText', text);
    data.append('outputWidth', '256');

    // axios also defines as any...so deal with it typescript
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const config: AxiosRequestConfig<any> = {
      method: 'post',
      url: 'https://api.hotpot.ai/make-art',
      headers: {
        Authorization: `${API_KEY}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        const data = response.data;
        console.log(JSON.stringify(data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
