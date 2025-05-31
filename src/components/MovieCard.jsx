
import React from 'react';
import { 
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,

} from '@mui/material';


const MovieCard = ({ movies }) => {
  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={1.5}> 
        {movies.map((movie) => (
          <Grid item key={movie.id} xs={2.4}> 
            <Card sx={{ 
              '&:hover': {
                transform: 'scale(1.05)',
                transition: 'transform 0.2s',
                zIndex: 1
              }
            }}>
              <CardMedia
                component="img"
                image={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} 
                alt={movie.title}
                sx={{ 
                  width: '100%',
                  aspectRatio: '2/3', 
                  cursor: 'pointer'
                }}
              />
             
              <Typography 
                variant="caption" 
                sx={{
                  display: 'block',
                  p: 0.5,
                  textAlign: 'center',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {movie.title}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};


export default MovieCard