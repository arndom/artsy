import { Button, Grid, Typography } from '@mui/material';
import { Paint } from '../../assets/svgs/Paint/Paint';
import { styles } from './styles';

const Home = () => {
  return (
    <Grid container sx={styles.landing}>
      <Grid container sx={styles.header}>
        <Grid item xs={12} md={6} mb={4}>
          <Typography variant="h3" sx={styles.heading}>
            <Typography component="span" variant="h2" sx={styles.mainText}>
              Artsy:{' '}
            </Typography>
            Transform your words into art and mint as an NFT
          </Typography>
          <Button variant="contained" sx={styles.btn}>
            Create
          </Button>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paint />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
