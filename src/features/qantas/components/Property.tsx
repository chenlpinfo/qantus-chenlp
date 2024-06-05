import { Rating, Stack, styled } from '@mui/material';
import { IHotelItem } from '../data/type';
import CircleIcon from '@mui/icons-material/Circle';
import HotelRating from './HotelRating';

type Props = {
  hotel: IHotelItem;
};

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

export default function Property({ hotel }: Props) {
  return (
    <Stack direction='column' spacing={2}>
      <Stack direction='row' spacing={2}>
        {hotel.property.title}
        <HotelRating hotel={hotel} />
      </Stack>
      <div>{hotel.property.address}</div>
      <div>{hotel.offer.name}</div>
      {hotel.offer.cancellationOption.cancellationType.includes('FREE_CANCELLATION') ? <div>Free cancellation</div> : <div>&nbsp;</div>}
    </Stack>
  );
}
