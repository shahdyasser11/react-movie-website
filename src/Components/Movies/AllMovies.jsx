import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MoviesCard from '../MoviesCards/MoviesCards';
import { Grid, Stack, Typography, Button, Box } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const AllMovies = ({ handleAllMovies }) => {
  const [allMovies, setMovies] = useState([]);
  const [showAll, setShowAll] = useState(false);

  // Get all movies
  const getMovies = async (url) => {
    try {
      const res = await axios.get(url, {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTA3YTcxNTUzMmMxYTk2ODRmZDRjNTYxMDk1Y2NhYSIsIm5iZiI6MTcyNzg2MjY5OS43NTgwMDAxLCJzdWIiOiI2NmZkMTdhYjZjMzY1OTg1YzhmMjNmMDEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.aR2TSz0MCOlXSMoLjZClgfD_fcGz_Wf1Sf74gnFcD94', 
        },
      });

      setMovies(res.data.results);
      handleAllMovies(res.data.results); 
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  useEffect(() => {
    getMovies('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1');
  }, []);

  let visibleMovies = showAll ? allMovies : allMovies.slice(0, 8);

  return (
    <Stack spacing={3} sx={{ p: 2 }}>
      <Stack spacing={0}>
        <Box component="section" sx={{ pt: 4, display: 'flex', alignItems: 'center', pl: 2 }}>
          <Typography variant="h6" color="white" fontWeight="800">
            All Movies
          </Typography>
          <ArrowForwardIosIcon sx={{ color: 'white' }} />
        </Box>
        <Typography variant="body2" color="grey" sx={{ pl: 2 }}>
          on Demand
        </Typography>
      </Stack>

      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        sx={{
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: { xs: 'center', sm: 'space-between' },
          alignItems: 'center',
          px: 2,
        }}
      >
        {visibleMovies.map((movie) => (
          <MoviesCard key={movie.id} movie={movie} />
        ))}
      </Grid>

      {allMovies.length > 8 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button
            variant="contained"
            sx={{
              bgcolor: '#FFC107',
              color: 'white',
              '&:hover': { bgcolor: '#FFA000' },
            }}
            onClick={() => setShowAll(!showAll)}
            endIcon={showAll ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          >
            {showAll ? 'See Less' : 'See More'}
          </Button>
        </Box>
      )}
    </Stack>
  );
};

export default AllMovies;
