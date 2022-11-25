import { Box, useTheme } from '@mui/material';

import { Header } from './components/Header';
import { Body } from './components/Body';

const App = () => {
  const { palette } = useTheme();

  return (
    <Box minHeight='100vh' display='flex' flexDirection='column'>
      <Header />
      <Body />
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
