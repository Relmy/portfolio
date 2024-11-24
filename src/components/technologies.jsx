import { useTheme } from '@emotion/react';
import { Box, Card, CardMedia, Grid2 as Grid, Typography } from '@mui/material';
import * as React from 'react';

const tech = [
  {
    name: 'JavaScript',
    src: 'js.svg',
  },
  {
    name: 'Node.js',
    src: 'node.svg',
  },
  {
    name: 'Next.js',
    src: 'next.svg',
    website: 'https://nextjs.org/',
  },
  {
    name: 'React',
    src: 'react.svg',
  },
  {
    name: 'Redux',
    src: 'redux.svg',
  },
  {
    name: 'HTML',
    src: 'html5.svg',
  },
  {
    name: 'CSS',
    src: 'css.svg',
  },
  {
    name: 'AWS',
    src: 'aws.svg',
  },
  {
    name: 'MongoDB',
    src: 'mongodb.svg',
  },
  {
    name: 'SQL',
    src: 'sql.svg',
  },
  {
    name: 'Python',
    src: 'python.svg',
  },
  {
    name: 'Selenium',
    src: 'selenium.svg',
  },
  {
    name: 'Java',
    src: 'java.svg',
  },
  {
    name: 'C',
    src: 'c.svg',
  },
  {
    name: 'Julia',
    src: 'julia.svg',
  },
  {
    name: 'Git',
    src: 'git.svg',
  },
  {
    name: 'Jira',
    src: 'jira.svg',
  },
];

/**
 * Main Technologies component, displays technologies/languages I have experience with
 * @returns {JSX.Element}
 */
export default function Technologies() {
  const theme = useTheme();
  return (
    <section id="Technologies">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
          pt: { xs: 10, sm: 14 },
        }}
      >
        <Typography variant="h1">Technologies</Typography>
        <Grid
          container
          spacing={2}
          sx={{ justifyContent: 'center', width: { xs: '100%', md: '80%' } }}
        >
          {tech.map((item) => {
            return (
              <Grid key={item.name}>
                <Card
                  variant="outlined"
                  sx={{
                    width: '100px',
                    height: '100px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background:
                      'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, transparent 100%)',
                    boxShadow: `0 10px 30px -20px ${theme.palette.purple.main}`,
                    backgroundSize: '100% 200%',
                    '&:hover': {
                      boxShadow: `0 10px 100px -20px ${theme.palette.purple.main}, 0 10px 50px -20px ${theme.palette.purple.main}, 0 10px 50px -20px ${theme.palette.purple.main}`,
                      // Hide text until hovered
                      '+ p': {
                        opacity: 1,
                        transition: '1s',
                      },
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={`technologies/${item.src}`}
                    alt={item.name}
                    sx={{
                      width: '70%',
                      maxHeight: '70%',
                      objectFit: 'contain',
                    }}
                  />
                </Card>
                <Typography
                  sx={{
                    textAlign: 'center',
                    // Always show name on mobile (no hover)
                    opacity: { xs: 1, md: 0 },
                  }}
                >
                  {item.name}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </section>
  );
}
