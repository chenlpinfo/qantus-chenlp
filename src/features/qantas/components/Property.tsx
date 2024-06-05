import { Stack } from '@mui/material';
import { IHotelItem } from '../data/type';

type Props = {
  hotel: IHotelItem;
};

export default function Property({ hotel }: Props) {
  return (
    <Stack direction='column' spacing={2}>
      <div> {hotel.property.title}</div>
      <div>{hotel.property.address}</div>
      <div>{hotel.offer.name}</div>
      {hotel.offer.cancellationOption.cancellationType.includes('FREE_CANCELLATION') ? <div>Free cancellation</div> : <div>&nbsp;</div>}
    </Stack>
  );
}
