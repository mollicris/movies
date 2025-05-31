import React, { useEffect } from 'react'
import useMoviesData from '../api'
import { useAuth } from '../components/AuthContext'

const Home = () => {
  const { user, login, logout } = useAuth();
  const {fetchMovies} = useMoviesData();
    useEffect(() => {
    if (user) {
      fetchMovies();
      console.log("User logged in:", user.displayName);
      console.log('User photo URL:', user.photoURL);
    } else {
      console.log("No user logged in");
    }
  }, []);
  return (
    <div>Home</div>
  )
}

export default Home