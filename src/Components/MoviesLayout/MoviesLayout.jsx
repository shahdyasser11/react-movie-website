import React from 'react';
import { Box } from '@mui/material';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import MoviesNavbar from '../MoviesNavbar/MoviesNavbar';


const MoviesLayout = () => {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        {/* Navbar Section */}
        <Box sx={{ height: '32px', }}>
          <MoviesNavbar />
        </Box>

        {/* movies Content Section */}
        <Box sx={{ flexGrow: 1 , background: 'linear-gradient(to right, rgb(16, 16, 16), rgb(41, 41, 42))',}}>
          <Movies />
        </Box>

        {/* Footer Section */}
        <Box sx={{ height: '80px' }}>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default MoviesLayout;
