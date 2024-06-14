import { Rating, styled } from '@mui/material';
import { IHotelItem } from '../data/type';
import CircleIcon from '@mui/icons-material/Circle';
import { yellow } from '@mui/material/colors';

type Props = {
  hotel: IHotelItem;
};

export default function HotelRating({ hotel }: Props) {
  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: yellow,
    },
    // '& .MuiRating-iconHover': {
    //   color: '#ff3d47',
    // },
  });
  return (
    <>
      {hotel.property.rating.ratingType.includes('star') ? (
        <Rating name='size-small' defaultValue={hotel.property.rating.ratingValue} size='small' color='disabled' readOnly />
      ) : (
        <StyledRating
          size='small'
          name='customized-color'
          defaultValue={hotel.property.rating.ratingValue}
          getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
          precision={0.5}
          icon={<CircleIcon style={{ fontSize: 13 }} />}
          emptyIcon={<CircleIcon style={{ fontSize: 13 }} />}
          color='disabled'
          readOnly
        />
      )}
    </>
  );
}
