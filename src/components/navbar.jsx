import * as React from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import CJIcon from '../assets/cjIcon';

import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { alpha } from '@mui/material/styles';

// TODO: Add contact section w/ emailjs
const pages = ['Technologies', 'Projects']; //, 'Contact'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 16px)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          id="navbar"
          disableGutters
          sx={[
            (theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
              backdropFilter: 'blur(24px)',
              border: '1px solid',
              borderColor: (theme.vars || theme).palette.divider,
              backgroundColor: theme.vars
                ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
                : alpha(theme.palette.background.default, 0.4),
              boxShadow: (theme.vars || theme).shadows[1],
              padding: '8px 12px',
            }),
          ]}
        >
          {/* CJ Logo/Icon */}
          <Box
            sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}
          >
            <Link href="#About" height={'24px'}>
              <CJIcon sx={{ mx: 1 }} />
            </Link>
          </Box>
          {/* Desktop - Navigation Buttons */}
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              alignItems: 'center',
              mx: 1,
            }}
          >
            {pages.map((page) => (
              <Button
                component="a"
                href={`#${page}`}
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ color: 'white', display: 'block' }}
                size="small"
              >
                {page}
              </Button>
            ))}
          </Box>
          {/* Mobile - Menu Button */}
          <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
            <IconButton
              size="small"
              aria-label="Menu button"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
              slotProps={{
                paper: {
                  variant: 'outlined',
                  elevation: 0,
                  sx: {
                    my: '10px',
                    borderRadius: '20px',
                    backgroundColor: 'transparent',
                    backdropFilter: 'blur(24px)',
                  },
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  component="a"
                  href={`#${page}`}
                >
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
