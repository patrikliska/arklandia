import { Box } from '@mui/material';

import { Navigation } from '../components/Navigation';
import { Body } from '../components/Body';
import { bgImageSx } from './styles';

const App = () => (
  <>
    <Box sx={bgImageSx} />
    <Box display='flex' flexDirection='column'>
      <Navigation />
      <Body />
    </Box>
  </>
);

export default App;
