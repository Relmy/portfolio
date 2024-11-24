import { Container, CssBaseline } from '@mui/material';
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
      <CssBaseline />
      <Navbar />
      <Container
        maxWidth="xl"
        sx={(theme) => ({
          width: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `radial-gradient(ellipse 60% 40% at 50% -20%, ${theme.palette.primary.main}, transparent)`,
        })}
      >
        <AboutMe />
        <Technologies />
        <Projects />
      </Container>
    </ThemeProvider>
  );
}

export default App;
