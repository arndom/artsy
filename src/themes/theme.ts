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
      main: '#FC0284',
      contrastText: '#fff',
    },
    background: {
      default: '#000000',
    },
  },

  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: 56,
          fontSize: 14,
          fontWeight: 400,
          border: '1px solid #2279D6',
          color: '#fff',
          '&.Mui-focused': {
            border: 'none',
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        contained: {
          height: 46,
          fontSize: '.85rem',
          fontWeight: 400,
        },

        outlined: {
          height: 46,
          fontSize: '.85rem',
          fontWeight: 400,
          '& .MuiSvgIcon-root': {
            width: 18,
            height: 18,
          },
        },
      },
    },
  },
});
