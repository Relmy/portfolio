import { Box, Card } from '@mui/material';
import * as React from 'react';

export default function AboutMe() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', m: 3 }}>
      <Card variant='outlined' sx={{ width: '60vw', height: '300px' }}>
        ...About Me...
      </Card>
    </Box>
  );
}