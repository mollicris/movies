import React, { useEffect } from 'react'
import useMoviesData from '../api'
import { useAuth } from '../components/AuthContext'
import MovieCard from '../components/MovieCard';

const Home = () => {
  console.log("Home component rendered");
  const { user } = useAuth();
  console.log("User in Home:", user);
  const { fetchMovies, movies } = useMoviesData();
  useEffect(() => {
    console.log("ENTRO");
    if (user) {
      fetchMovies();
      console.log("Movies fetched successfully");
    } else {
      console.log("No user logged in");
    }
  }, []); 
  return (
    <MovieCard movies={movies} />
  )
}

export default Home