import { createTheme } from '@mui/material';
import '@fontsource/roboto';

import { palette } from './palette';

export const theme = createTheme({
  spacing: 4,
  typography: { fontFamily: '"Roboto", sans-serif' },
  palette,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { margin: 40 },
      },
    },
  },
});
