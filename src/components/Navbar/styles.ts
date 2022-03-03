import { theme } from '../../themes/theme';

export const styles = {
  container: {
    padding: theme.spacing(2, 12, 0),
    display: 'flex',

    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2, 6, 0),
    },

    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2, 4, 0),
    },
  },

  logo: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
};
