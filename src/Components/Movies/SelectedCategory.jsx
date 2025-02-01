import React from 'react';
import MoviesCard from '../MoviesCards/MoviesCards';

const SelectedCategory = ({ selectedCategory, allMovies, upcomingMovies,topRatedMovies }) => {
    const filteredAllMovies = allMovies.filter(movie => 
    movie.genre_ids.includes(selectedCategory)
  );
  const filteredUpcomingMovies=upcomingMovies.filter(movie=>movie.genre_ids.includes(selectedCategory));
  const filteredTopRatedMovies=topRatedMovies.filter(movie=>movie.genre_ids.includes(selectedCategory));
  const uniqueMovies = new Map(); 

  [...filteredUpcomingMovies, ...filteredTopRatedMovies, ...uniqueMovies].forEach(movie => {
    if (!uniqueMovies.has(movie.id)) {
      uniqueMovies.set(movie.id, { label: movie.original_title, id: movie.id, movieData: movie });
    }
  });

  return (
    <div>
      {uniqueMovies.length > 0 ? (
        uniqueMovies.map(movie => <MoviesCard key={movie.id} movie={movie} />)
      ) : (
        <p>No movies found in this category.</p>
      )}
    </div>
  );
};

export default SelectedCategory;
