import { theme } from '../../themes/theme';

export const styles = {
  container: {
    padding: theme.spacing(0, 12, 2),
    marginTop: 3,
    // height: 'calc(100vh - 96px)',

    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0, 6, 2),
    },

    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 4, 2),
    },
  },
};
