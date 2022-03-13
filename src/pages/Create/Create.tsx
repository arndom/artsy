import { Check, ContentCopy, Download, FiberManualRecord, Mic, Refresh, Stop } from '@mui/icons-material';
import { Box, Button, ButtonGroup, Grid, IconButton, Modal, OutlinedInput, Typography } from '@mui/material';
import { useState } from 'react';
import placeholder from '../../assets/images/placeholder.png';
import { Wave } from '../../assets/svgs/Wave/Wave';
import useRecorder from '../../hooks/useRecorder';

import { styles } from './styles';

interface IModal {
  open: boolean;
  handleClose: () => void;
}

const AudioModal = ({ open, handleClose }: IModal) => {
  const { audioURL, resetAudio, isRecording, startRecording, stopRecording } = useRecorder();
  console.log(audioURL, isRecording);

  return (
    <Modal open={open} onClose={handleClose} sx={styles.modalContainer}>
      <Box sx={styles.modalContent}>
        <Typography variant="h6" sx={{ textAlign: 'center' }}>
          Create with words
        </Typography>

        <Box>
          {audioURL.length === 0 && (isRecording ? <Wave live /> : <Wave />)}
          {audioURL.length > 0 && (
            <Box width={200} height={150} sx={styles.audioBoxContainer}>
              <audio src={audioURL} controls style={{ width: '100%' }} />
            </Box>
          )}
        </Box>

        <Box sx={styles.audioControls}>
          {audioURL.length === 0 && (
            <ButtonGroup>
              <IconButton onClick={startRecording} disabled={isRecording} sx={styles.audioControl}>
                <FiberManualRecord color="secondary" />
              </IconButton>

              <IconButton onClick={stopRecording} disabled={!isRecording} sx={styles.audioControl}>
                <Stop color="secondary" />
              </IconButton>
            </ButtonGroup>
          )}

          {audioURL.length !== 0 && (
            <ButtonGroup>
              <IconButton onClick={resetAudio} sx={styles.audioControl}>
                <Refresh color="secondary" />
              </IconButton>

              <IconButton onClick={resetAudio} sx={styles.audioControl}>
                <Check color="secondary" />
              </IconButton>
            </ButtonGroup>
          )}
        </Box>
      </Box>
    </Modal>
  );
};

const Create = () => {
  const [text, setText] = useState('matte painting of a whale in the sea');
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);
  const handleClear = () => setText('');

  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <Grid container sx={styles.container}>
      <AudioModal open={modalOpen} handleClose={handleModalClose} />
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
                <IconButton
                  onClick={handleModalOpen}
                  sx={{
                    color: 'primary.main',
                    backgroundColor: 'rgba(34, 121, 214, 0.2)',
                  }}
                >
                  <Mic color="primary" />
                </IconButton>
              }
            />
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
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Create;
