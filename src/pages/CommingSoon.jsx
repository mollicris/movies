import { useAuth } from '../components/AuthContext'
import { useEffect } from 'react';
import { useComingSoonMovies } from '../api';
import { useNavigate } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { Typography } from '@mui/material';

const CommingSoon = () => {
  const { movies, fetchMovies } = useComingSoonMovies();

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom style={{ textAlign: 'center', marginTop: '20px', color : 'white'}}>
        Coming Soon Movies
      </Typography>
      <MovieCard movies={movies} />
    </div>
  )
}

export default CommingSoon