import React, { useEffect } from 'react'
import useMoviesData from '../api'
import { useAuth } from '../components/AuthContext'

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
    <div>
      <h1>Home 123</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} style={{ width: '200px' ,height: '300px' }} />
            {movie.title}
            <p>{movie.overview}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home