import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleColorMode from './Theme'; // Ensure this is the correct path

const logoStyle = {
  width: '140px',
  height: 'auto',
  cursor: 'pointer',
};

function Navbar({ mode, toggleColorMode }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      const offset = 128; // Adjust this value as needed for the height of the AppBar
      const targetScroll = sectionElement.offsetTop - offset;
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 2,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={(theme) => ({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: '999px',
            bgcolor:
              theme.palette.mode === 'light'
                ? 'rgba(255, 255, 255, 0.4)'
                : 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(24px)',
            maxHeight: 60,
            border: '1px solid',
            borderColor: 'divider',
            boxShadow:
              theme.palette.mode === 'light'
                ? '0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)'
                : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
          })}
        >
          <Box sx={{ flexGrow: 0 }}>
            <Typography variant="h6" color="text.primary" sx={{ fontWeight: 'bold' }}>
              EcoFy
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-start' }}>
            <MenuItem onClick={() => scrollToSection('about')} sx={{ py: '6px', px: '12px' }}>
              <Typography variant="body2" color="text.primary">About</Typography>
            </MenuItem>
            <MenuItem onClick={() => scrollToSection('features')} sx={{ py: '6px', px: '12px' }}>
              <Typography variant="body2" color="text.primary">Features</Typography>
            </MenuItem>
            <MenuItem onClick={() => scrollToSection('impact')} sx={{ py: '6px', px: '12px' }}>
              <Typography variant="body2" color="text.primary">Impact</Typography>
            </MenuItem>
            <MenuItem onClick={() => scrollToSection('team')} sx={{ py: '6px', px: '12px' }}>
              <Typography variant="body2" color="text.primary">Team</Typography>
            </MenuItem>
            <MenuItem onClick={() => scrollToSection('contact')} sx={{ py: '6px', px: '12px' }}>
              <Typography variant="body2" color="text.primary">Contact</Typography>
            </MenuItem>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, alignItems: 'center' }}>
            <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
          </Box>
          <Box sx={{ display: { sm: '', md: 'none' } }}>
            <Button
              variant="text"
              color="primary"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ minWidth: '30px', p: '4px' }}
            >
              <MenuIcon />
            </Button>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
              <Box
                sx={{
                  minWidth: '60vw',
                  p: 2,
                  backgroundColor: 'background.paper',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'end',
                    mb: 2,
                  }}
                >
                  <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                </Box>
                <MenuItem onClick={() => scrollToSection('about')}>About</MenuItem>
                <MenuItem onClick={() => scrollToSection('features')}>Features</MenuItem>
                <MenuItem onClick={() => scrollToSection('impact')}>Impact</MenuItem>
                <MenuItem onClick={() => scrollToSection('team')}>Team</MenuItem>
                <MenuItem onClick={() => scrollToSection('contact')}>Contact</MenuItem>
                <Divider />
                <MenuItem>
                  <Button
                    color="primary"
                    variant="contained"
                    component="a"
                    href="/"
                    target="_blank"
                    sx={{ width: '100%' }}
                  >
                    Sign up
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button
                    color="primary"
                    variant="outlined"
                    component="a"
                    href="/"
                    target="_blank"
                    sx={{ width: '100%' }}
                  >
                    Sign in
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

Navbar.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default Navbar;
