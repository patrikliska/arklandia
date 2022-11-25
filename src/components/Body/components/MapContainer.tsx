import { Box, Grid, Paper, Typography, useTheme } from '@mui/material';

export const MapContainer = ({
  maps,
  title,
  image,
}: {
  maps: number[];
  title: string;
  image?: string;
}) => {
  const { palette } = useTheme();

  return (
    <Box border='5px double #fff' borderRadius={2} padding='0 20px 20px'>
      <Typography
        sx={{ transform: 'translateY(-65%)', marginLeft: '5%', px: 4 }}
        bgcolor='primary.main'
        variant='h4'
        textAlign='center'
        color='#ffffff'
        width='fit-content'
      >
        {title}:
      </Typography>
      <Grid container justifyContent='center' spacing={12}>
        {maps.map((value) => (
          <Grid key={value} item>
            <Paper
              sx={{
                height: 360,
                width: 240,
                boxShadow: `0px 0px 30px 0px ${palette.primary.dark}`,
                backgroundColor: palette.secondary.light,
                overflow: 'hidden',
              }}
            >
              <img
                src={image}
                alt='Lost Island'
                height='100%'
                style={{ marginLeft: -12, opacity: 0.75 }}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
