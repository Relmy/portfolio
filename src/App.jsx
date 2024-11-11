import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import './App.css';
import AboutMe from './components/aboutMe';
import Navbar from './components/navbar';
import Technologies from './components/technologies';
import theme from './theme';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Box id='Box' sx={{
        background: 'linear-gradient(rgba(1,3,38,1) 60%, rgba(23,37,115,1) 100%, rgba(106,102,217,1) 85%)',
        height: '100vh'
      }}>
        <Navbar />
        <AboutMe />
        <Technologies />
      </Box>
    </ThemeProvider>
  );
}

export default App;
