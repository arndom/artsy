import { theme } from '../../themes/theme';

export const styles = {
  landing: {
    padding: theme.spacing(0, 12, 2),
    marginTop: -12,
    height: 'calc(100vh - calc(96px + calc(20.57px * 1.4)) + 96px)', //nav is 96px, foot is 20.57px

    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0, 6, 2),
      marginTop: -10,
    },

    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 4, 2),
      marginTop: -8,
    },
  },

  logo: {
    display: 'flex',
    alignItems: 'center',
  },

  header: {
    margin: theme.spacing(12, 0, 9, 0),

    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(3, 0, 5, 0),
    },
  },

  heading: {
    fontWeight: 600,
    paddingTop: theme.spacing(8),
    marginBottom: theme.spacing(4),

    [theme.breakpoints.down('md')]: {
      fontSize: '1.65em',
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: '2em',
    },
  },

  mainText: {
    color: 'primary.main',
    fontWeight: 600,

    [theme.breakpoints.down('md')]: {
      fontSize: '1.35em',
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2em',
    },
  },

  btn: {
    width: 100,
    height: 40,
    borderRadius: 30,
    fontSize: '1rem ',
    textTransform: 'uppercase',
    fontWeight: 500,
  },
};
