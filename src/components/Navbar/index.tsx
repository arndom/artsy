import { Grid, Typography, Box } from '@mui/material';
import logo from '../../assets/images/logo.png';
import Corner from '../Corner';
import { styles } from './styles';

const Navbar = () => {
  return (
    <Grid container sx={styles.container}>
      <Grid item xs={6}>
        <Box sx={styles.logo}>
          <img src={logo} alt="logo" height={80} width={80} />
          <Typography variant="h6" sx={{ display: { xs: 'none', md: 'block', lg: 'block' } }}>
            Artsy
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Corner />
      </Grid>
    </Grid>
  );
};

export default Navbar;
