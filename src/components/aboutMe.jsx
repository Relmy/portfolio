import * as React from 'react';

import { useTheme } from '@emotion/react';
import { Box, Paper, Typography } from '@mui/material';

import SocialButtons from './socialButtons';

export default function AboutMe() {
  const theme = useTheme();
  return (
    <section id="About">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexDirection: { xs: 'column', sm: 'row' },
          mx: 'auto',
          gap: 2,
          maxWidth: '900px',
          pt: { xs: 10, sm: 16 },
        }}
      >
        {/* Left Section: Greeting, name, position, and education */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexShrink: '0',
            p: '16px',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              textShadow: `0px 0px 10px ${theme.palette.blue.main}`,
              mb: 1,
            }}
          >
            Welcome!
          </Typography>
          <Typography
            variant="h2"
            sx={{
              textShadow: `1px 1px 10px ${theme.palette.purple.main}, -1px -1px 10px ${theme.palette.pink.main}`,
              mb: 1,
            }}
          >
            I'm CJ (Rosario) Elmy
          </Typography>
          <Typography
            variant="subtitle"
            sx={{
              textShadow: `0px 0px 10px ${theme.palette.pink.main}`,
            }}
          >
            Full Stack Engineer
          </Typography>
          <Typography
            variant="subtitle"
            sx={{
              textShadow: `0px 0px 10px ${theme.palette.purple.main}`,
              fontSize: '14px',
            }}
          >
            B.Sc. Computer Science
          </Typography>
          {/* Social buttons */}
          <SocialButtons />
        </Box>
        {/* More info about me */}
        <Paper
          variant="outlined"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            maxWidth: { xs: 'auto', md: '50vw' },
            gap: 1,
            p: 2,
            boxShadow: `0 10px 30px -20px ${theme.palette.purple.main}`,
            backgroundColor: 'transparent',
            backdropFilter: 'blur(24px)',
          }}
        >
          <Typography variant="body1">
            I discovered my passion for developing elegant solutions in 2013 and
            have been elevating my craft since 🤗
          </Typography>
          <Typography variant="body1">
            I thrive on building innovative and well crafted solutions that make
            a positive impact for both users and maintainers alike!
          </Typography>
          <Typography variant="body1">
            Below you will find technologies I've worked with and info about
            some of my past projects
          </Typography>
          <Typography variant="body1">Thanks for stopping by! ✌️</Typography>
        </Paper>
      </Box>
    </section>
  );
}
