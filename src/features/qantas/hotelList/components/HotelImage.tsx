import { Avatar } from '@mui/material';
import { IHotelItem } from '../../data/type';

type Props = {
  hotel: IHotelItem;
};
export default function HotelImage({ hotel }: Props) {
  const imageUrl = hotel.property.previewImage.url;

  return (
    <>
      <Avatar alt={hotel.property.previewImage.caption} src={imageUrl} title={hotel.offer.promotion.title} sx={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '2px' }} />
      <div>{hotel.offer.promotion.title}</div>
    </>
  );
}
