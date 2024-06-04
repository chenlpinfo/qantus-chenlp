import { Stack } from '@mui/material';
import { IHotelItem } from '../data/type';

type Props = {
  hotel: IHotelItem;
};

export default function Property({ hotel }: Props) {
  return <Stack>{hotel.property.title}</Stack>;
}
