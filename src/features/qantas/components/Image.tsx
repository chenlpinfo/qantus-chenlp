import { Link, Stack } from '@mui/material';
import { IHotelItem } from '../data/type';

type Props = {
  hotel: IHotelItem;
};
export default function Image({ hotel }: Props) {
  const imageUrl = hotel.property.previewImage.url;

  return <a href={imageUrl}></a>;
}
