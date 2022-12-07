import { Box, Container } from '@mui/material';

import lostIslandImage from '../../assets/images/lostIsland.jpeg';

import { MapContainer } from './components/MapContainer';

export const Body = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        alignItems: 'center',
        display: 'flex',
        flex: 1,
      }}
    >
      <Container
        sx={{
          display: 'flex',
          maxWidth: 'md',
          p: 10,
          justifyContent: 'space-between',
        }}
      ></Container>
    </Box>
  );
};
