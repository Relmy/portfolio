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
    src: 'css3.svg',
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

export default function Technologies() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        m: 3,
        gap: 2,
      }}
    >
      <Typography variant="h1">Technologies</Typography>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: 'center', width: { xs: '100vw', md: '70vw' } }}
      >
        {tech.map((item) => {
          return (
            <Grid key={item.name}>
              <Card
                variant="outlined"
                sx={{
                  width: '100px',
                  height: '100px',
                  boxShadow:
                    'inset 0px 0px 30px 5px rgba(23,37,115,0.5), inset 0px 0px 25px 5px rgba(29,100,242,0.5), inset 0px 0px 15px 0px rgb(106, 102, 217), inset 0px 0px 5px 2px #F07EF2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
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
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
