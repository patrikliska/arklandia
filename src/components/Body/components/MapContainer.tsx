import { Box, Grid, Fade, Paper, Typography, useTheme } from '@mui/material';
import { useRef } from 'react';
import { useHover } from 'usehooks-ts'

interface MapContainerProps {
  maps: number[];
  title: string;
  image?: string;
}

export const MapContainer = ({
  maps,
  title,
  image,
}: MapContainerProps) => {
  const hoverRef = useRef(null)
  const isHover = useHover(hoverRef)
  const { palette } = useTheme();

  return (
    <Box
      border='5px double #fff'
      borderRadius={2}
      padding='0 20px 20px'
      minWidth={400}
    >
      <Typography
        sx={{
          boxShadow: `0px 4px 8px 14px ${palette.primary.main}`,
          transform: 'translateY(-65%)',
          marginLeft: '5%',
          px: 2,
        }}
        bgcolor='primary.main'
        variant='h5'
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
              ref={hoverRef}
              sx={{
                height: 360,
                width: 240,
                boxShadow: `0px 0px 30px 0px ${palette.primary.dark}`,
                backgroundColor: palette.secondary.light,
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <Fade in={isHover}>
                <Box sx={{ p: 4, opacity: 0.1, background: `radial-gradient(${palette.primary.light}, ${palette.primary.main})`, height: '100%', zIndex: 1, position: "relative" }}>
                  wadawdawd
                </Box>
              </Fade >
              <img
                src={image}
                alt='Lost Island'
                height='100%'
                style={{
                  marginLeft: -12,
                  opacity: 0.75,
                  position: 'absolute',
                  top: 0,
                }}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
