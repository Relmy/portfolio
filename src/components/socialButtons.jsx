import * as React from 'react';

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, IconButton, Tooltip } from '@mui/material';

/**
 * Buttons to social platforms: email, Github and LinkedIn
 *
 * @param {String} color (Optional) set color of icon buttons
 * @returns {JSX.Element}
 */
export default function SocialButtons({ color }) {
  return (
    <Box sx={{ color: color }}>
      <Tooltip title="Email me!">
        <IconButton
          aria-label="Email"
          href="mailto:cjelmy@pm.me"
          target="_blank"
          color="inherit"
        >
          <AlternateEmailIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Github">
        <IconButton
          aria-label="Github"
          href="https://github.com/Relmy"
          target="_blank"
          color="inherit"
        >
          <GitHubIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="LinkedIn">
        <IconButton
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/cj-elmy"
          target="_blank"
          color="inherit"
        >
          <LinkedInIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
