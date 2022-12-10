import { Typography, Box, Button, Divider } from '@mui/material';
import { navButtonSx, navigationContainerSx } from './styles';

const pages = [
  { label: 'Home', isActive: false },
  { label: 'Roadmap', isActive: true },
  { label: 'Screenshots', isActive: false },
];

export const Navigation = () => (
  <Box sx={navigationContainerSx}>
    <Box>
      <Typography
        variant='h4'
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
      <Divider sx={{ my: 8, width: '100%' }} />
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          gap: 5,
        }}
      >
        {pages.map(({ label, isActive }) => (
          <Button
            key={label}
            fullWidth
            variant='contained'
            size='large'
            color='secondary'
            sx={navButtonSx(isActive)}
            disableElevation
          >
            <Typography variant='h5' fontWeight='900'>
              {label}
            </Typography>
          </Button>
        ))}
      </Box>
    </Box>
    <Box sx={{ width: '100%', height: 50, background: 'red' }} />
  </Box>
);
