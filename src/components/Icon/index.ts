import { SvgIcon } from '@mui/material';

import icons from '../../assets/svg';

export const Icon = (name: string, ...restProps: any[]) => {
  const selectedIcon = icons[name];

  return <SvgIcon {...restProps}></SvgIcon>;
};
