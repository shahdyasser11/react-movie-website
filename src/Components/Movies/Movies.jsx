import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCards/MoviesCards';
import { Grid } from '@mui/material';

export const Movies = () => {
  const [allMovies, setMovies] = useState([]);

  const getMovies = async (url) => {
    try {
      const res = await axios.get(
        url, 
        {
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTA3YTcxNTUzMmMxYTk2ODRmZDRjNTYxMDk1Y2NhYSIsIm5iZiI6MTcyNzg2MjY5OS43NTgwMDAxLCJzdWIiOiI2NmZkMTdhYjZjMzY1OTg1YzhmMjNmMDEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.aR2TSz0MCOlXSMoLjZClgfD_fcGz_Wf1Sf74gnFcD94'
          }
        }
      );

      console.log(res.data.results);
      setMovies(res.data.results); 
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  useEffect(() => {
    getMovies('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1');
  }, []);

  return (
     <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="center"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' }, 
              justifyContent: { xs: 'center', sm: 'space-between' },  
              alignItems: 'center', 
            }}
          >
           {allMovies.map((movie) => (
        <MoviesCard key={movie.id} movie={movie} />
      ))}

        </Grid>
    
  );
};

export default Movies;
