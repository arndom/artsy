import { Grid, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import Corner from '../Corner';
import { styles } from './styles';

const Navbar = () => {
  const navigate = useNavigate();
  const routeHome = () => navigate('/');

  return (
    <Grid container sx={styles.container}>
      <Grid item xs={6} onClick={routeHome}>
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
