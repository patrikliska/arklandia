import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Button,
} from '@mui/material';

const pages = ['Roadmap'];

export const Navigation = () => (
  <Box>
    <Typography
      variant='h5'
      noWrap
      sx={{
        mr: 2,
        display: { md: 'flex' },
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      ARKLANDIA
    </Typography>
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {pages.map((page) => (
        <Button
          key={page}
          variant='contained'
          size='medium'
          color='secondary'
          sx={{ ml: 10 }}
          disableElevation
        >
          {page}
        </Button>
      ))}
    </Box>
  </Box>
);
