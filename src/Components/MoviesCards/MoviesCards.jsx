import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MoviesCard({ movie }) {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', maxWidth: 345, height: '30rem',marginBottom:'2rem' }}>
      <CardMedia
        sx={{ height: 450, width: '100%' }}  
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        title={movie.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {movie.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {movie.overview}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Watch</Button>
      </CardActions>
    </Card>
  );
}
