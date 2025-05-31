import React from 'react'
import { useAuth } from '../components/AuthContext'
import { useEffect } from 'react';
import { useTrendingMovies } from '../api';
import { useNavigate } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

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
      <MovieCard movies={movies} />
    </div>
  )
}

export default Trending