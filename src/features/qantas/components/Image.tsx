import { Avatar, Link, Stack } from '@mui/material';
import { IHotelItem } from '../data/type';

type Props = {
  hotel: IHotelItem;
};
export default function Image({ hotel }: Props) {
  const imageUrl = hotel.property.previewImage.url;

  return <Avatar alt={hotel.property.previewImage.caption} src={imageUrl} sx={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '2px' }} />;
}
