import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', 'sans-serif'",
    fontSize: 12,
    button: {
      fontWeight: 700,
      textTransform: 'none',
    },
    allVariants: {
      color: '#fff',
    },

    h1: {
      fontSize: 'clamp(3rem, 10vw, 5rem)',
      fontWeight: 600,
    },
  },

  palette: {
    primary: {
      main: '#2279D6',
      contrastText: '#fff',
    },
    secondary: {
      main: '#959AEC',
      contrastText: '#fff',
    },
    background: {
      default: '#000000',
    },
  },
});
