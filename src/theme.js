import { createTheme } from '@mui/material/styles';

const theme = createTheme({
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
  },
  typography: {
    // fontFamily: 'Raleway',
  },
  shape: {
    borderRadius: 30,
  },
  components: {
    /* TODO: finish paper gradient changes */
    /**
    MuiPaper: {
      styleOverrides: {
        root: {
          background:
            'radial-gradient(circle, rgba(1,3,38,1) 60%, rgba(23,37,115,1) 100%, rgba(106,102,217,1) 85%)',
        },
        outlined: {
          background:
            'radial-gradient(circle, rgba(1,3,38,1) 60%, rgba(23,37,115,1) 80%, rgba(106,102,217,1) 100%, #F07EF2 100%)',
          borderColor: '#F07EF2',
        },
      },
    },
    */
  },
});

export default theme;