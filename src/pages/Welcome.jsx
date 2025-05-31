import React, { useEffect } from 'react'
import { Box, Button, Typography } from "@mui/material";
import fondImage from '../assets/welcomefond.svg'
import backgroundImage from '../assets/imgwelcome.svg'
import WatchIcon from '../assets/icons/folder.svg'
import { useAuth } from '../components/AuthContext';
import { useNavigate } from 'react-router-dom';


const Welcome = () => {
  const { user, login, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if(user) {
      navigate('/home');
      console.log("Sesion iniciada", user.displayName);
      console.log('sesion iniciada', user.displayName)
      console.log('sesion iniciada', user.photoURL)
    }else {
      console.log("No hay usuario logueado");
    }
  }, [user]);

  return (

    <Box 
      sx={{
      position: 'relative',
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
    }}>
      <Box
        component= 'img'
        src= {fondImage}
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: 1,
          top: 0,
          left: 0,
          objectFit: 'cover',     
      }} 
      >
    </Box>
      <Box 
        component="img"
        src={backgroundImage}
        alt="Background"
        sx={{
        position: 'absolute',
        top: 0,
          left: 0,
          width: '100vw',
          height: '120vh',
          objectFit: 'cover',
          zIndex: 2
      }}
      >
      </Box>

      <Box
            sx={{
              position:'relative',
              zIndex: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
              color: 'white',
              textAlign: 'center',
            }}
          >
           <Box
              sx={{
                display: 'flex',
                gap: '10px',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '20px'}}
                >
            <img 
              src={WatchIcon}
              alt="watch icon" 
              style={{
                width:'50px',
                height:'50px',
              }}/>
            <Typography 
              variant='h4'
              sx={{ 
                fontWeight: 'bold',
                 }}>
                  WATCH
              </Typography>
            </Box>
            <Typography 
              variant='body1'
              sx={{ 
                marginBottom: '20px' }}>
                  Enjoy the newest movies
                </Typography>
          <Button
            onClick={login}
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: '#6100C2',
              padding: '10px  60px',
              marginBottom: '20px',
              '&:hover': {
                backgroundColor: '#3700b3',
              },
            }}
          > Log in
          </Button>
          <Typography 
            variant='body2'>
                No account? {' '}
                <a href='#' style={{ color: 'white' }}>Sign up</a>
              </Typography>
 

          </Box>
    </Box>

     )
}

export default Welcome


    {/*  <Box>
        <Typography 
           variant="h1"
           sx={{ fontSize: 30 }}
           color="primary"
           fontWeight='bold'>
           WATCH
        </Typography>
        <Button 
          sx={{ 
          padding: '12px 24px', // Aumenta el espacio interno
          fontSize: '1.1rem'    // Aumenta el tamaño del texto
          }}
          onClick={login}
          variant="contained" 
          color="primary"
          size="large">
        Ingresar
      </Button>
      </Box>

      <Box sx={{ p:4 }}>
        <Typography 
           variant="h4"
           color="primary">
           Prueba de Mui
        </Typography>
        <Button 
          variant="contained" 
          color="primary"
          size="large"
          startIcon={<CheckIcon />}>
        Boton icono
      </Button>

      </Box>
      <SideBar />

      */}
 