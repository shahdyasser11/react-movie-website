import { useParams } from 'react-router-dom';
import MoviesCard from '../MoviesCards/MoviesCards';
import { Box } from '@mui/material';

const MovieDetails = ({ selectedMovie }) => {
  return (
    <Box 
      sx={{ 
        width: '100%', 
        height: '100%', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        p:0,
        m:0,
      }}
    >
      <MoviesCard key={selectedMovie.id} movie={selectedMovie} />
    </Box>
  );
};

export default MovieDetails;
