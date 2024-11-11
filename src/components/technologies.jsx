import { Box, Card, CardMedia } from '@mui/material';
import * as React from 'react';

export default function Technologies() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', m: 3 }}>
      <Card variant='outlined' sx={{
        width: '100px',
        height: '100px',
        boxShadow: 'inset 0px 0px 30px 5px rgba(23,37,115,0.5), inset 0px 0px 25px 5px rgba(29,100,242,0.5), inset 0px 0px 15px 0px rgb(106, 102, 217), inset 0px 0px 5px 2px #F07EF2'
      }}>
        <CardMedia
          component="img"
          image='react.svg'
        />
      </Card>
    </Box>
  );
}