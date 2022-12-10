import bgImage from '../assets/images/bgImage.png';

export const bgImageSx = {
  position: 'fixed',
  height: '100%',
  width: '100%',
  backgroundImage: `url(${bgImage})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  filter: 'blur(80px)',
  transform: 'scale(1.2)',
};
