import * as React from 'react';

import { Box, Container, Divider, Link, Typography } from '@mui/material';

import CJIcon from '../assets/cjIcon';
import SocialButtons from './socialButtons';

const sections = ['About', 'Technologies', 'Projects'];

/**
 * Footer component, display logo, name, email, navigation links, social buttons and copyright
 *
 * @returns {JSX.Element}
 */
export default function Footer() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: { xs: 8, sm: 10 },
      }}
    >
      <Divider sx={{ my: 4, width: '100%' }} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'end', sm: 'center' },
          width: '100%',
          gap: 2,
        }}
      >
        {/* Logo, Name and Email */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minWidth: { xs: '100%', sm: '60%' },
          }}
        >
          <CJIcon />
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              fontWeight: 600,
              mt: 2,
              mb: 0,
            }}
          >
            CJ (Rosario) Elmy
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            href="mailto:cjelmy@pm.me"
            component={'a'}
          >
            cjelmy@pm.me
          </Typography>
        </Box>
        {/* Navigation Links */}
        {sections.map((section) => (
          <Link color="text.primary" variant="body2" href={`#${section}`}>
            {section}
          </Link>
        ))}
      </Box>
      <Divider sx={{ my: 4, width: '100%' }} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Copyright */}
        <Typography variant="body2" color="text.secondary">
          {'Copyright © CJ Elmy '}
          {new Date().getFullYear()}
        </Typography>
        {/* Social buttons */}
        <SocialButtons color="text.secondary" />
      </Box>
    </Container>
  );
}
