import { useTheme } from '@emotion/react';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, IconButton, Paper, Typography } from '@mui/material';
import * as React from 'react';

export default function AboutMe() {
  const theme = useTheme()
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-evenly',
      my: { xs: 5, md: 10 },
      mx: 'auto',
      gap: 2,
      maxWidth: '900px'
    }}>
      {/* Left Section: Greeting, name, position, and education */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Typography variant='h4' sx={{
          textShadow: `0px 0px 10px ${theme.palette.blue.main}`,
          mb: 1
        }}>
          Welcome!
        </Typography>
        <Typography variant='h3' sx={{
          textShadow: `1px 1px 10px ${theme.palette.purple.main}, -1px -1px 10px ${theme.palette.pink.main}`,
          mb: 1
        }}>
          I'm CJ (Rosario) Elmy
        </Typography>
        <Typography variant='subtitle' sx={{
          textShadow: `0px 0px 10px ${theme.palette.pink.main}`,
        }}>
          Full Stack Engineer
        </Typography>
        <Typography variant='subtitle' sx={{
          textShadow: `0px 0px 10px ${theme.palette.purple.main}`,
          fontSize: '14px',
        }}>
          B.Sc. Computer Science
        </Typography>
        <Box>
          <IconButton href="mailto:cjelmy@pm.me"><AlternateEmailIcon /></IconButton>
          <IconButton href="https://github.com/Relmy"><GitHubIcon /></IconButton>
          <IconButton href="www.linkedin.com/in/cj-elmy"><LinkedInIcon /></IconButton>
        </Box>
      </Box>
      {/* More info about me */}
      <Paper sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        maxWidth: '50vw',
        gap: 1,
        p: 2
      }}>
        <Typography variant='body1' >
          I discovered my passion for developing elegant solutions in 2013 and have been learning and improving since!
        </Typography>
        <Typography variant='body1' >
          Below you will find technologies I've worked with and some info about my past experience and projects.
        </Typography>
        <Typography variant='body1' >
          Enjoy your stay! c:
        </Typography>
      </Paper>
    </Box >
  );
}