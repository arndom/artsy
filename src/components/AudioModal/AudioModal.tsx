import { Check, FiberManualRecord, NoteAlt, Refresh, Stop } from '@mui/icons-material';
import { Backdrop, Box, ButtonGroup, CircularProgress, IconButton, Modal, Typography } from '@mui/material';
import { Wave } from '../../assets/svgs/Wave/Wave';
import useRecorder from '../../hooks/useRecorder';
import axios, { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';

import { styles } from './styles';

interface IModal {
  open: boolean;
  handleClose: () => void;
}

const API_KEY = process.env.REACT_APP_DEEPGRAM_API_KEY;

const AudioModal = ({ open, handleClose }: IModal) => {
  const { audioURL, audioBlob, resetAudio, isRecording, startRecording, stopRecording } = useRecorder();
  const [transcribing, setTranscribing] = useState(false);
  const [transcript, setTranscript] = useState('');

  const transcribe = async () => {
    const blobFile = new File(audioBlob, 'audio');
    setTranscribing(true);

    // axios also defines as any...so deal with it typescript
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const config: AxiosRequestConfig<any> = {
      method: 'post',
      url: 'https://api.deepgram.com/v1/listen?language=en-US&model=general&punctuate=true',
      headers: {
        Authorization: `Token ${API_KEY}`,
        'Content-Type': 'text/plain',
      },
      data: blobFile,
    };

    axios(config)
      .then(function (response) {
        const data = response.data;
        const text = data.results.channels[0].alternatives[0].transcript;
        console.log(text);
        if (text === '') alert('no audio recorded');
        setTranscript(text);
        setTranscribing(false);
      })
      .catch(function (error) {
        console.log(error);
        setTranscribing(false);
      });
  };

  useEffect(() => {
    if (audioURL === '') {
      setTranscript('');
    }
  }, [audioURL]);

  return (
    <Modal open={open} onClose={handleClose} sx={styles.modalContainer}>
      <Box sx={styles.modalContent}>
        <Backdrop open={transcribing} sx={styles.backdrop}>
          <CircularProgress color="inherit" />
          <Typography>Transcribing...</Typography>
        </Backdrop>

        <Typography variant="h6" sx={styles.title}>
          Convert audio to text
        </Typography>

        {transcript === '' && (
          <Box>
            {audioURL.length === 0 && (isRecording ? <Wave live /> : <Wave />)}
            {audioURL.length > 0 && (
              <Box width={200} height={150} sx={styles.audioBoxContainer}>
                <audio src={audioURL} controls style={{ width: '100%' }} />
              </Box>
            )}
          </Box>
        )}

        {transcript !== '' && (
          <Box width={200} height={150} sx={styles.transcript}>
            <Typography variant="h6">{transcript}</Typography>
          </Box>
        )}

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

              {!transcribing && transcript === '' && (
                <IconButton onClick={transcribe} sx={styles.audioControl}>
                  <NoteAlt color="secondary" />
                </IconButton>
              )}
            </ButtonGroup>
          )}

          {!transcribing && transcript !== '' && (
            <IconButton onClick={() => alert('done')} sx={styles.audioControl}>
              <Check color="secondary" />
            </IconButton>
          )}
        </Box>
      </Box>
    </Modal>
  );
};
export default AudioModal;
