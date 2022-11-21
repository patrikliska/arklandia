import React from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  useTheme,
} from '@mui/material';

import lostIslandImage from './assets/images/lostIsland.jpeg';

import { Header } from './components/Header';

const App = () => {
  const { palette } = useTheme();

  return (
    <Box height='100vh' display='flex' flexDirection='column'>
      <Header />
      <Box
        sx={{
          bgcolor: 'primary.main',
          position: 'relative',
          zIndex: -1,
          alignItems: 'center',
          display: 'flex',
          flex: 1,
        }}
      >
        <Container
          sx={{
            display: 'flex',
            maxWidth: 'md',
            py: 4,
            justifyContent: 'center',
          }}
        >
          <Box border='5px solid #fff' borderRadius={2} padding='0 20px 20px'>
            <Typography
              sx={{ transform: 'translateY(-65%)', marginLeft: '5%', px: 4 }}
              bgcolor='primary.main'
              variant='h4'
              textAlign='center'
              color='#ffffff'
              width='fit-content'
            >
              Main Mapy:
            </Typography>
            <Grid container justifyContent='center' spacing={12}>
              {[0, 1].map((value) => (
                <Grid key={value} item>
                  <Paper
                    sx={{
                      height: 360,
                      width: 240,
                      boxShadow: `0px 0px 30px 0px ${palette.primary.dark}`,
                      backgroundColor: palette.secondary.light,
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={lostIslandImage}
                      alt='Lost Island'
                      height='100%'
                      style={{ marginLeft: -12, opacity: 0.75 }}
                    />
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box sx={{ ml: 12 }}>
            <Typography variant='h4' textAlign='center' color='#ffffff' mb={4}>
              Aktuální rotace:
            </Typography>
            <Grid container justifyContent='center' spacing={12}>
              {[0].map((value) => (
                <Grid key={value} item>
                  <Paper
                    sx={{
                      height: 360,
                      width: 240,
                      boxShadow: `0px 0px 30px 0px ${palette.primary.dark}`,
                      backgroundColor: palette.secondary.light,
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={lostIslandImage}
                      alt='Lost Island'
                      height='100%'
                      style={{ marginLeft: -12, opacity: 0.75 }}
                    />
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          bgcolor: palette.secondary.main,
          bottom: 0,
          boxShadow: `0px 4px 10px 6px ${palette.primary.dark}`,
          boxSizing: 'border-box',
          minHeight: 200,
          width: '100%',
        }}
      ></Box>
    </Box>
  );
};

export default App;
