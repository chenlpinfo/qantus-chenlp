import { Rating, styled } from '@mui/material';
import { IHotelItem } from '../data/type';
import CircleIcon from '@mui/icons-material/Circle';

type Props = {
  hotel: IHotelItem;
};

export default function HotelRating({ hotel }: Props) {
  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
      color: '#ff3d47',
    },
  });
  return (
    <>
      {hotel.property.rating.ratingType.includes('star') ? (
        <Rating name='size-small' defaultValue={hotel.property.rating.ratingValue} size='small' />
      ) : (
        <StyledRating
          size='small'
          name='customized-color'
          defaultValue={hotel.property.rating.ratingValue}
          getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
          precision={0.5}
          icon={<CircleIcon fontSize='inherit' />}
          emptyIcon={<CircleIcon fontSize='inherit' />}
        />
      )}
    </>
  );
}
