import Clarity from '@microsoft/clarity';
import { Container, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import ReactGA from 'react-ga4';

import './App.css';
import AboutMe from './components/aboutMe';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Projects from './components/projects';
import Technologies from './components/technologies';
import config from './config';
import theme from './theme';

// Don't track in DEV mode
if (!import.meta.env.DEV) {
  // Google Analytics
  ReactGA.initialize([
    {
      trackingId: config.google.analytics_id,
      // gaOptions:
      // gtagOptions:
    },
  ]);
  // Microsoft Clarity
  Clarity.init(config.microsoft.clarity_id);
}

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
      <Footer />
    </ThemeProvider>
  );
}

export default App;
