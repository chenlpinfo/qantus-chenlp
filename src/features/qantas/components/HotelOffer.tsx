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
      <Stack>{hotel.offer.displayPrice.amount}</Stack>;
    </>
  );
}
