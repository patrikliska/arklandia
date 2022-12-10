export const navigationContainerSx = {
  justifyContent: 'space-between',
  alignItems: 'center',
  backdropFilter: 'blur(5px)',
  background: 'rgba(0, 0, 0, 0.2)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: 8,
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  height: 'calc(100% - 80px)',
  p: 10,
  position: 'fixed',
  width: 360,
  zIndex: 10,
};

export const navButtonSx = (isActive: boolean) => {
  const hoverStyles = {
    backdropFilter: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.10)',
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    color: 'rgba(0, 0, 0, 0.9)',
  };

  return [
    {
      '&:hover': hoverStyles,
      backgroundColor: 'rgba(255, 255, 255, 0.01)',
      boxShadow: 'inset 0px 0px 10px 0px rgba(0,0,0,0.75)',
      color: 'rgba(0, 0, 0, 0.7)',
      height: 70,
      width: '90%',
    },
    isActive && {
      ...hoverStyles,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
  ];
};
