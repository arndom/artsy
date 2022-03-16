export const styles = {
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

  backdrop: {
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
  },

  title: { textAlign: 'center' },

  audioBoxContainer: {
    display: 'grid',
    placeItems: 'center',
  },

  transcript: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
