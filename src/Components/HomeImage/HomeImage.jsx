import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import backgroundImage from '../../imgs/backgroundImage.jpg';

const HomeImage = () => {
  return (
    <Box
      sx={{
        height: '100vh', 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        color: '#fff',
        overflow: 'hidden', 
        margin: 0, 
        padding: 0, 
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.36)', 
          zIndex: 1, 
        }}
      ></Box>

      {/* Main Content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2, 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          height: '100%',
          textAlign: 'left',
          px: 4,
          maxWidth: '1200px', 
          margin: '0 auto', 
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            mb: 2,
            lineHeight: 1.2,
            fontSize: {
              xs: '1.5rem',
              sm: '2.5rem',
              md: '3rem',
            },
          }}
        >
          Free Movies to Watch,
          <br />
          Anytime Anywhere.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: {
              xs: '1rem', // Small screens
              sm: '1.25rem', // Medium screens
              md: '1.5rem', // Large screens
            },
            fontFamily: 'Arial, sans-serif',
            fontWeight: '100',
            mb: 4,
          }}
        >
          The search is over! Let Plex help you find the perfect
          <br />
          movie to watch tonight for free.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#FFC107', 
            color: 'white', 
            fontSize: {
              xs: '0.4rem',  // Small screens
              sm: '0.9rem',    // Medium screens
              md: '1.2rem', // Large screens
            },
            fontWeight: 600,
            padding: '8px 28px',
            borderRadius: '30px',
            '&:hover': {
              backgroundColor: '#FFB300', 
            },
          }}
        >
          Watch Free
        </Button>
      </Box>

      {/* New Div */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 3, 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          height: 'auto', 
          textAlign: 'left',
          px: 4,
          maxWidth: '1200px',
          margin: '20px auto', 
          backgroundColor: 'rgba(0, 0, 0, 0.5)', 
          padding: '20px', 
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 500,
            color: '#fff',
            mb: 2,
            fontSize: {
              xs: '1.2rem',
              sm: '1.8rem',
              md: '2.2rem',
            },
          }}
        >
          Additional Content Goes Here
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: {
              xs: '0.9rem', // Small screens
              sm: '1rem', // Medium screens
              md: '1.25rem', // Large screens
            },
            fontFamily: 'Arial, sans-serif',
            color: '#fff',
            mb: 4,
          }}
        >
          Here you can add more details or other elements for your page, such as another call to action, description, or images.
        </Typography>
      </Box>
    </Box>
  );
};

export default HomeImage;
