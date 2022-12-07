import { Box, useTheme } from '@mui/material';

import { Navigation } from './components/Navigation';
import { Body } from './components/Body';

const App = () => {
  const { palette } = useTheme();

  return (
    <Box minHeight='100vh' display='flex' flexDirection='column'>
      <Navigation />
      <Body />
      {/* <Box
        sx={{
          bgcolor: palette.secondary.main,
          bottom: 0,
          boxShadow: `0px 4px 10px 6px ${palette.primary.dark}`,
          boxSizing: 'border-box',
          minHeight: 200,
          width: '100%',
          opacity: 0.25,
        }}
      ></Box> */}
    </Box>
  );
};

export default App;
