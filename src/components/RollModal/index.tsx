import { Box, Link, Modal, Typography } from '@mui/material';
import { styles } from './styles';

interface RollModalProps {
  open: boolean;
  handleClose: () => void;
}

const RollMoadal = ({ open, handleClose }: RollModalProps) => {
  return (
    <Modal open={open} onClose={handleClose} sx={styles.modalContainer}>
      <Box sx={styles.modalContent}>
        <Typography variant="h6">Apologies for the rickroll</Typography>

        <Typography variant="body1" mt={2}>
          Due to gpu expenses & other technical issues this is what we have at the moment😅
        </Typography>

        <Typography variant="body1" mt={2}>
          For actual art generation, see:
          <Link
            mx={0.5}
            color="secondary"
            sx={{ cursor: 'pointer', fontWeight: 600 }}
            href="https://hotpot.ai/art-maker"
            target="_blank"
            underline="hover"
            rel="noreferrer"
          >
            HotpotAI
          </Link>
          &
          <Link
            mx={0.5}
            color="secondary"
            sx={{ cursor: 'pointer', fontWeight: 600 }}
            href="https://replicate.com/pixray/text2image"
            target="_blank"
            underline="hover"
            rel="noreferrer"
          >
            Pixray
          </Link>
        </Typography>
      </Box>
    </Modal>
  );
};

export default RollMoadal;
