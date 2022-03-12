import { useEffect, useState } from 'react';

const useRecorder = () => {
  const [audioURL, setAudioURL] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [recorder, setRecorder] = useState<MediaRecorder | null>(null);

  useEffect(() => {
    // Lazily obtain recorder first time we're recording.
    if (recorder === null) {
      if (isRecording) {
        requestRecorder().then(setRecorder, console.error);
      }
      return;
    }

    // Manage recorder state.
    if (isRecording) {
      recorder.start();
    } else {
      recorder.stop();
    }

    // Obtain the audio when ready.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleData = (e: any) => {
      setAudioURL(URL.createObjectURL(e.data));
      console.log(e.data);
    };

    recorder.addEventListener('dataavailable', handleData);

    return () => recorder.removeEventListener('dataavailable', handleData);
  }, [recorder, isRecording]);

  const startRecording = () => setIsRecording(true);
  const stopRecording = () => setIsRecording(false);

  return {
    audioURL: audioURL,
    isRecording: isRecording,
    startRecording: startRecording,
    stopRecording: stopRecording,
  };
};

async function requestRecorder() {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  return new MediaRecorder(stream);
}
export default useRecorder;
