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

  prompt: {
    color: 'primary.main',
    backgroundColor: 'rgba(34, 121, 214, 0.1)',
    width: 'fit-content',
    borderRadius: '5px',
    px: 1,
    mb: 2,
  },

  modalContainer: {
    display: 'grid',
    placeItems: 'center',
  },

  modalContent: {
    width: 330,
    py: 3,
    backgroundColor: 'primary.main',
    display: 'grid',
    placeItems: 'center',
    borderRadius: 4,
  },

  audioBoxContainer: {
    display: 'grid',
    placeItems: 'center',
  },

  audioControls: {
    display: 'flex',
  },

  audioControl: {
    backgroundColor: '#fff',
    marginRight: 2,
    '&:hover': {
      backgroundColor: '#fff',
    },
    '&.Mui-disabled': {
      backgroundColor: 'transparent',
    },
  },
};
