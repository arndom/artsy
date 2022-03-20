import { ContentCopy, Download } from '@mui/icons-material';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { styles } from './styles';

interface IImage {
  image: string;
}

const DisplayImage = ({ image }: IImage) => {
  return (
    <Box>
      <Box mt={3}>
        <img src={image} alt="placeholder" />
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
    </Box>
  );
};

export default DisplayImage;
