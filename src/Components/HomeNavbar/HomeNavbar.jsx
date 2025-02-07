import * as React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
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
import SignUp from '../SignUP/SignUp.jsx';
import SignIn from '../SignIn/SignIn.jsx';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const drawerWidth = 240;
const navItems = [
  { page: 'Home', route: '/' },
  { page: 'About', route: '/about' },
  { page: 'Contact', route: '/contact' },
];

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function HomeNavbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const navigate = useNavigate();

  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return Boolean(localStorage.getItem('authToken'));
  });

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLoginSuccess = () => {
    const fakeAuthToken = 'your-auth-token-here';
    localStorage.setItem('authToken', fakeAuthToken);
    setIsLoggedIn(true);
    setSnackbarMessage('Successfully logged in!');
    setSnackbarSeverity('success');
    setSnackbarOpen(true);
  };

  const handleSignupSuccess = () => {
    const fakeAuthToken = 'your-auth-token-here';
    localStorage.setItem('authToken', fakeAuthToken);
    setIsLoggedIn(true);
    setSnackbarMessage('Successfully registered!');
    setSnackbarSeverity('success');
    setSnackbarOpen(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    handleMenuClose();
    setSnackbarMessage('Successfully logged out!');
    setSnackbarSeverity('info');
    setSnackbarOpen(true);
    navigate('/');
  };

  React.useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleDrawerSignIn = () => {
    setMobileOpen(false);
    setSignInOpen(true);
  };

  const handleDrawerSignUp = () => {
    setMobileOpen(false);
    setSignUpOpen(true);
  };

  const handlePageNavigation = (pageRoute) => {
    setMobileOpen(false);
    navigate(pageRoute);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };


  const handleOpenSignIn = () => {
    setSignUpOpen(false);
    setSignInOpen(true);
  };

  const handleOpenSignUp = () => {
    setSignInOpen(false);
    setSignUpOpen(true);
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
        {!isLoggedIn ? (
          <>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }} onClick={handleDrawerSignUp}>
                <SignIn  />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }} onClick={handleDrawerSignIn} >
                <SignUp  />
              </ListItemButton>
            </ListItem>
          </>
        ) : (
          <ListItem disablePadding>
            <ListItemButton onClick={handleLogout} sx={{ textAlign: 'center' }}>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

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
                onClick={() => navigate(item.route)}
              >
                {item.page}
              </Button>
            ))}
          </Box>


          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
            {!isLoggedIn ? (
              <>
              <Button 
                onClick={handleDrawerSignUp}
                sx={{
                  color: '#fff',
                  mr: 3,
                  '&:hover': { color: '#FBBC04', bgcolor: '#1A1A1D' },
                }}
              >
                Sign Up
              </Button>
              <Button 
                onClick={handleDrawerSignIn}
                sx={{
                  color: '#fff',
                  '&:hover': { color: '#FBBC04', bgcolor: '#1A1A1D' },
                }}
              >
                Sign In
              </Button>
            </>
            ) : (
              <>
                <IconButton onClick={handleMenuOpen} sx={{ p: 0 }}>
                  <Avatar alt="User Avatar" src="" sx={{ width: 50, height: 50 }} />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </>
            )}
          </Box>


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

      <SignIn 
        open={signInOpen}
        onClose={() => setSignInOpen(false)}
        onSwitchAuth={() => {
          setSignInOpen(false);
          setSignUpOpen(true);
        }}
        onLoginSuccess={handleLoginSuccess}
      />
      <SignUp 
        open={signUpOpen}
        onClose={() => setSignUpOpen(false)}
        onSwitchAuth={() => {
          setSignUpOpen(false);
          setSignInOpen(true);
        }}
        onSignupSuccess={handleSignupSuccess}
      />

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>

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
              backgroundColor: '#1A1A1D',
              color: '#fff',

            }, '&:hover': { color: '#FBBC04' }
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
  window: PropTypes.func,
};

export default HomeNavbar;
















