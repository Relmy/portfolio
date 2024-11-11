import { Box, Typography } from '@mui/material';
import * as React from 'react';

export default function AboutMe() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', m: 3 }}>
      <Box sx={{ width: '60vw' }}>
        <Typography variant='body1' sx={{ color: 'white' }}>
          Full Stack Developer with 3+ years of experience building and maintaining web applications and 8+ years experience programming. Passionate about creating elegant and efficient solutions. Proven ability to collaborate effectively in a fast-paced environment and contribute to all stages of the development lifecycle.
        </Typography>
      </Box>
    </Box>
  );
}