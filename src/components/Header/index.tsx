import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Button,
} from '@mui/material';

const pages = ['Roadmap'];

export const Header = () => (
  <AppBar
    position='static'
    sx={{
      bgcolor: 'primary.dark',
      boxShadow: '0px -4px 10px 6px rgba(0,0,0,0.75)',
    }}
  >
    <Container maxWidth='md'>
      <Toolbar disableGutters>
        <Typography
          variant='h5'
          noWrap
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
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
              size='small'
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              {page}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
);
