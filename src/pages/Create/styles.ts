import { theme } from '../../themes/theme';

export const styles = {
  container: {
    padding: theme.spacing(0, 12, 2),
    marginTop: 3,
    height: 'calc(100vh - calc(96px + calc(20.57px * 2.5)))', //nav is 96px, foot is 20.57px

    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0, 6, 2),
      height: 'max-content',
    },

    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 4, 2),
    },
  },

  prompt: {
    color: 'primary.main',
    backgroundColor: 'rgba(34, 121, 214, 0.1)',
    width: 'fit-content',
    borderRadius: '5px',
    px: 1,
    mb: 2,
  },

  mic: {
    color: 'primary.main',
    backgroundColor: 'rgba(34, 121, 214, 0.2)',
  },

  submit: {
    mr: 1,
  },

  copy: {
    mr: 2,
    mb: 2,
  },

  images: {
    display: 'flex',
    gap: 5,

    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 3,
    },
  },
};
