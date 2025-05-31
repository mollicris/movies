import React from 'react'
import { useAuth } from '../components/AuthContext'
import { useEffect } from 'react';
import { useTrendingMovies } from '../api';
import { useNavigate } from 'react-router-dom';

const Trending = () => {
  const { user } = useAuth();
  const { movies,fetchMovies } = useTrendingMovies();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetchMovies();
    } else {
      navigate('/'); 
      console.log("No user logged in, cannot fetch trending movies");
    }
  }, [user]);

  return (
    <div>
      <h1>Trending</h1>
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

export default Trending