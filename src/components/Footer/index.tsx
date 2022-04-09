import { Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Typography
      variant="caption"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      Powered by
      <Link
        mx={1}
        sx={{ cursor: 'pointer' }}
        href="https://deepgram.com/product/overview/"
        target="_blank"
        underline="hover"
        rel="noreferrer"
      >
        Deepgram
      </Link>
      ,
      <Link
        mx={1}
        sx={{ cursor: 'pointer' }}
        href="https://hotpot.ai/art-maker"
        target="_blank"
        underline="hover"
        rel="noreferrer"
      >
        Hotpot AI
      </Link>
      &
      <Link
        mx={1}
        sx={{ cursor: 'pointer' }}
        href="https://replicate.com/pixray/text2image"
        target="_blank"
        underline="hover"
        rel="noreferrer"
      >
        Pixray
      </Link>
    </Typography>
  );
};

export default Footer;
