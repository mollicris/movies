//import { useState } from 'react';
import { Movie } from '@mui/icons-material';
import { useEffect, useState } from 'react';

const useMoviesData = () => {
   const [data,setData] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
    
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
    const options = {
    smethod: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTk4YTcwZjI1ZTk3M2JjOTFlNDk0OGQ2NTY3NWY0MCIsIm5iZiI6MTY3Mjk0NTIyMC45NzMsInN1YiI6IjYzYjcxZTQ0NDMyNTBmMDA4MmU4ZDY4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WFo_QXDB5rrwFbbampruLihmNC0DRHzrzBK6nkGf8DA'
  }
    };

    const fetchMovies = async () => {
        try {
            const response = await fetch(url,options);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);
            setData(data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }
    return {
        movies: data.results || [],
        loading,
        error,
        fetchMovies
    }
};
export default useMoviesData;

const useTrendingMovies = () => {
    const [data, setData] = useState([]);

    const url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';
        const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTk4YTcwZjI1ZTk3M2JjOTFlNDk0OGQ2NTY3NWY0MCIsIm5iZiI6MTY3Mjk0NTIyMC45NzMsInN1YiI6IjYzYjcxZTQ0NDMyNTBmMDA4MmU4ZDY4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WFo_QXDB5rrwFbbampruLihmNC0DRHzrzBK6nkGf8DA'
    }
    };
    const fetchMovies = async () => {
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const results = await response.json();
            setData(results);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    }
        return {
            movies: data.results || [],
            fetchMovies
        }
    }

    export { useTrendingMovies };

const useFavoritesMovies = () => {
    const [data, setData] = useState([]);

    const url = 'https://api.themoviedb.org/3/account/16856563/favorite/movies?language=en-US&page=1&sort_by=created_at.asc';
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTk4YTcwZjI1ZTk3M2JjOTFlNDk0OGQ2NTY3NWY0MCIsIm5iZiI6MTY3Mjk0NTIyMC45NzMsInN1YiI6IjYzYjcxZTQ0NDMyNTBmMDA4MmU4ZDY4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WFo_QXDB5rrwFbbampruLihmNC0DRHzrzBK6nkGf8DA'
  }
};

const fetchMovies = async () => {
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setData(result || []);
            console.log(data);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };
    return {
        movies: data.results || [],
        fetchMovies
    }
};

export { useFavoritesMovies };