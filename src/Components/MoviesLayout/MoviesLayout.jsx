import React, { useState } from 'react';
import { Box } from '@mui/material';
import Footer from '../Footer/Footer';
import AllMovies from '../Movies/AllMovies';
import MoviesNavbar from '../MoviesNavbar/MoviesNavbar';
import TopRatedMovies from '../Movies/TopRatedMovies';
import UpcomingMovies from '../Movies/UpcomingMovies';
import DevicesBox from '../DevicesBox/DevicesBox';
import DrawerSideBar from '../DrawerSideBar/DrawerSideBar';
import MovieDetails from '../Movies/MovieDetails';

const MoviesLayout = () => {
  const [allMovies, setMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [selectedMovie, setSelectedMovies] = useState(false);

  // Function to update allMovies
  const handleAllMovies = (movies) => {
    setMovies(movies);
  };
  const handleTopRatedMovies = (topRatedMovies) => {
    setTopRatedMovies(topRatedMovies);
  };
  const handleUpcomingMovies = (upcomingMovies) => {
    setUpcomingMovies(upcomingMovies);
  };
  const handleSelectedMovie = (selectedMovie) => {
    setSelectedMovies(selectedMovie);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Navbar Section */}
      <Box sx={{ height: '32px' }}>
        <MoviesNavbar allMovies={allMovies} topRatedMovies={topRatedMovies} upcomingMovies={upcomingMovies} handleSelectedMovie=
          {handleSelectedMovie} />
      </Box>

      {/* Drawer Section */}
      <Box sx={{ flexGrow: 1, width: '100%', background: 'linear-gradient(to right, rgb(16, 16, 16), rgb(41, 41, 42))' }}>
        <DrawerSideBar />
      </Box>


      {selectedMovie ? (
  <Box 
    sx={{ 
      flexGrow: 1,width: { xs: '100%', lg: '94.55rem' }, height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', 
      background: 'linear-gradient(to right, rgb(16, 16, 16), rgb(41, 41, 42))',
    }}
  >
    <MovieDetails selectedMovie={selectedMovie} />
  </Box>
) : (
  <>
    {/* All Movies Section */}
    <Box sx={{ flexGrow: 1, width: '100%', background: 'linear-gradient(to right, rgb(16, 16, 16), rgb(41, 41, 42))' }}>
      <AllMovies handleAllMovies={handleAllMovies} />
    </Box>

    {/* Top Rated Movies Section */}
    <Box sx={{ flexGrow: 1, width: '100%', background: 'linear-gradient(to right, rgb(16, 16, 16), rgb(41, 41, 42))' }}>
      <TopRatedMovies handleTopRatedMovies={handleTopRatedMovies} />
    </Box>

    {/* Upcoming Movies Section */}
    <Box sx={{ flexGrow: 1, width: '100%', background: 'linear-gradient(to right, rgb(16, 16, 16), rgb(41, 41, 42))' }}>
      <UpcomingMovies handleUpcomingMovies={handleUpcomingMovies} />
    </Box>
  </>
)}


      <Box sx={{ flexGrow: 1, width: '100%', background: 'linear-gradient(to right, rgb(16, 16, 16), rgb(41, 41, 42))' }}>
        <DevicesBox />
      </Box>

      {/* Footer Section */}
      <Box sx={{ height: '80px',width: '100%' }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default MoviesLayout;
