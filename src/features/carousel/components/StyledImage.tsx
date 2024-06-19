import { styled } from '@mui/material';
import Image from 'next/image';

// export const StyledImage = styled(Image)((props: any) => ({
//   border: props.isHovered ? '3px solid blue' : '',
//   padding: '3px',
// }));

// export const StyledImage = styled(Image)<{ ishovered: boolean }>(({ theme, ishovered }) => ({
//   border: ishovered ? '3px solid blue' : '',
//   padding: '3px',
// }));

export const StyledImage = styled(Image)({
  '&:hover': { border: '3px solid blue' },
  padding: '3px',
});
