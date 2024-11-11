import { Box, Card, CardMedia, Grid2 as Grid } from '@mui/material';
import * as React from 'react';

const tech = [
  {
    name: 'JavaScript',
    src: 'js.svg'
  },
  {
    name: 'Node.js',
    src: 'node.svg'
  },
  {
    name: 'Next.js',
    src: 'next.svg',
    website: 'https://nextjs.org/'
  },
  {
    name: 'React',
    src: 'react.svg'
  },
  {
    name: 'Redux',
    src: 'redux.svg'
  },
  {
    name: 'HTML',
    src: 'html5.svg'
  },
  {
    name: 'CSS',
    src: 'css3.svg'
  },
  {
    name: 'AWS',
    src: 'aws.svg'
  },
  {
    name: 'MongoDB',
    src: 'mongodb.svg'
  },
  {
    name: 'SQL',
    src: 'sql.svg'
  },
  {
    name: 'Python',
    src: 'python.svg'
  },
  {
    name: 'Selenium',
    src: 'selenium.svg'
  },
  {
    name: 'Java',
    src: 'java.svg'
  },
  {
    name: 'C',
    src: 'c.svg'
  },
  {
    name: 'Julia',
    src: 'julia.svg'
  },
  {
    name: 'Git',
    src: 'git.svg'
  },
  {
    name: 'Jira',
    src: 'jira.svg'
  },
]

export default function Technologies() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', m: 3 }}>
      <Grid container spacing={2} sx={{ justifyContent: 'center', width: { xs: '100vw', md: '60vw' } }}>
        {
          tech.map((item) => {
            return (
              <Grid>
                <Card variant='outlined' sx={{
                  width: '100px',
                  height: '100px',
                  boxShadow: 'inset 0px 0px 30px 5px rgba(23,37,115,0.5), inset 0px 0px 25px 5px rgba(29,100,242,0.5), inset 0px 0px 15px 0px rgb(106, 102, 217), inset 0px 0px 5px 2px #F07EF2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <CardMedia
                    component="img"
                    image={item.src}
                    alt={item.name}
                    sx={{
                      width: '70px',
                      maxHeight: '70px',
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