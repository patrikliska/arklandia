import { Box, Container } from '@mui/material';

import lostIslandImage from '../../assets/images/lostIsland.jpeg';

import { MapContainer } from './components/MapContainer';

export const Body = () => {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
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
      >
        <MapContainer title='Main mapy' maps={[0, 1]} image={lostIslandImage} />
        <MapContainer
          title='Aktuální rotace'
          maps={[0]}
          image={lostIslandImage}
        />
      </Container>
    </Box>
  );
};
