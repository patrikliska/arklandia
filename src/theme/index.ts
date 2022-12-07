import { createTheme } from '@mui/material';
import '@fontsource/roboto';

import { palette } from './palette';
import bgImage from '../assets/images/bgimage.png';

export const theme = createTheme({
  spacing: 4,
  typography: { fontFamily: '"Roboto", sans-serif' },
  palette,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
        },
      },
    },
  },
});
