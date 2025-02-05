import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;
const navItems = [
  { page: 'Home', route: '/' },
  { page: 'About', route: '/About' },
  { page: 'Contact', route: '../Footer' },
];

function HomeNavbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handlePageNavigation = (pageRoute) => {
    setMobileOpen(false);
    navigate(pageRoute);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Plex
      </Typography>
      <Divider />
      <List>
      {navItems.map((item) => (
  <ListItem key={item.page} disablePadding>
    <ListItemButton
      sx={{ textAlign: 'center' }}
      onClick={() => handlePageNavigation(item.route)} 
    >
      <ListItemText primary={item.page} />
    </ListItemButton>
  </ListItem>
))}

        <Divider />
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary="Sign In" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary="Sign Up" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: '#1A1A1D',
          color: '#fff',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Left Section */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              color="inherit"
              aria-label="slideshow"
              sx={{
                ml: 2,
                fontSize: '5rem',
                '&:hover': {
                  color: '#FBBC04',
                },
              }}
            >
              <SlideshowIcon />
            </IconButton>

            <Typography
              variant="h6"
              sx={{
                ml: 2,
                fontFamily: 'Comfortaa, sans-serif',
                fontWeight: 700,
              }}
            >
              Ple<span style={{ color: '#FFC107' }}>x</span>
            </Typography>
          </Box>

          {/* Center Section */}
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexGrow: 1,
              justifyContent: 'center',
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.page}
                sx={{
                  color: '#fff',
                  mx: 3,
                  '&:hover': { color: '#FBBC04', bgcolor: '#1A1A1D' },
                }}
              >
                {item.page}
              </Button>
            ))}
          </Box>

          {/* Right Section */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
            <Button
              sx={{
                color: '#fff',
                mr: 3,
                '&:hover': { color: '#FBBC04', bgcolor: '#1A1A1D' },
              }}
            >
              Sign In
            </Button>
            <Button
              sx={{
                color: '#fff',
                '&:hover': { color: '#FBBC04', bgcolor: '#1A1A1D' },
              }}
            >
              Sign Up
            </Button>
          </Box>

          {/* Drawer */}
          <Box sx={{ display: { xs: 'flex', sm: 'none' }, alignItems: 'center' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              edge="start"
              sx={{
                ml: 2,
                fontSize: '2rem',
                '&:hover': {
                  color: '#FBBC04',
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

HomeNavbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default HomeNavbar;
