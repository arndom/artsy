import { IconButton } from '@mui/material';

const Corner = () => {
  return (
    <IconButton
      target="_blank"
      href="http://github.com/arndom/artsy"
      sx={{ display: 'block', zIndex: 1, height: '45px' }}
      disableRipple
    >
      <img
        src="https://www.nicepng.com/png/full/52-520535_free-files-github-github-icon-png-white.png"
        alt="GitHub"
        style={{ width: '45px' }}
      />
    </IconButton>
  );
};

export default Corner;
