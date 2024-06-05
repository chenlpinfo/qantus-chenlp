'use client';

import { useGetQantasData } from '../data/useGetQantasData';
import { Stack } from '@mui/material';
import { IHotelItem } from '../data/type';

type Props = {
  hotel: IHotelItem;
};

export default function HotelOffer({ hotel }: Props) {
  return (
    <>
      <Stack direction='column' spacing={2}>
        <div>1 night total(AUD)</div>
        <div>${hotel.offer.displayPrice.amount}</div>
        {hotel.offer.savings ? <div>Save ${hotel.offer.savings.amount}</div> : <div>&nbsp;</div>}
      </Stack>
    </>
  );
}
