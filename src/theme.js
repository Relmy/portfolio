import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1d64f2',
    },
    secondary: {
      main: '#6a66d9',
    },
    background: {
      default: '#010218',
      paper: '#010326',
    },
    /* --- Custom colors for site theme --- */
    // Accent Colors //
    pink: {
      main: '#F07EF2',
    },
    purple: {
      main: '#6A66D9',
    },
    blue: {
      main: '#1D64F2',
    },
    darkBlue: {
      main: '#172573',
    },
    blueBlack: {
      main: '#010326',
    },
  },
  typography: {
    // fontFamily: 'Raleway',
    // fontFamily: 'Dosis, sans-serif',
    h1: {
      fontSize: '26px',
      fontWeight: '600',
    },
    h2: {
      fontSize: '22px',
      fontWeight: '600',
    },
    h3: {
      fontSize: '20px',
      fontWeight: '600',
    },
    h4: {
      fontSize: '18px',
      fontWeight: '600',
    },
    h5: {
      fontSize: '16px',
      fontWeight: '500',
    },
    body1: {
      fontFamily: 'Lato, sans-serif',
      fontSize: '14px',
      fontWeight: '400',
    },
    body2: {
      fontFamily: 'Lato, sans-serif',
      fontSize: '13px',
      fontWeight: '400',
    },
    body3: {
      fontFamily: 'Lato, sans-serif',
      fontSize: '12px',
      fontWeight: '400',
    },
    body4: {
      fontSize: '10px',
      display: 'block',
    },
  },
  shape: {
    borderRadius: 30,
  },
});

theme = createTheme(theme, {
  components: {
    /* TODO: finish paper gradient changes */
    MuiPaper: {
      styleOverrides: {
        root: {
          // background: 'radial-gradient(circle, rgba(1,3,38,1) 60%, rgba(23,37,115,1) 100%, rgba(106,102,217,1) 85%)',
        },
        outlined: {
          // background: 'radial-gradient(circle, rgba(1,3,38,1) 60%, rgba(23,37,115,1) 80%, rgba(106,102,217,1) 100%, #F07EF2 100%)',
          // borderColor: '#F07EF2',
        },
      },
    },
    //button base?
    MuiButton: {
      // add glow to button hovers
      styleOverrides: {
        root: {
          // '&:hover': {
          //   boxShadow: `0 10px 100px -20px ${theme.palette.purple.main}, 0 10px 50px -20px ${theme.palette.purple.main}, 0 10px 50px -20px ${theme.palette.purple.main}`,
          // },
        },
      },
    }
  },
});

export default theme;
