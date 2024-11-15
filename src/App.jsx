import { Paper } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import './App.css';
import AboutMe from './components/aboutMe';
import Navbar from './components/navbar';
import Projects from './components/projects';
import Technologies from './components/technologies';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Paper
        sx={{
          background:
            'linear-gradient(rgba(1,3,38,1) 60%, rgba(23,37,115,1) 100%, rgba(106,102,217,1) 85%)',
          minHeight: '100vh',
          pb: 5,
          borderRadius: 0,
        }}
      >
        <Navbar />
        <AboutMe />
        <Technologies />
        <Projects />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
