import React from 'react'
import { useEffect } from 'react';
import { useAuth } from '../components/AuthContext';
import {useFavoritesMovies} from '../api';

const Favorites = () => {
  const { user } = useAuth();
  const { fetchMovies, movies } = useFavoritesMovies();

  useEffect(() => {
    if (user) {
      fetchMovies();
    }
  }, [user]);

  return (
    <div>
      <h1>Favorites</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} style={{ width: '200px', height: '300px' }} />
            {movie.title}
            <p>{movie.overview}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Favorites