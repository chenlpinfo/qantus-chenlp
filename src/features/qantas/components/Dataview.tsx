'use client';

import { IHotelItem } from '../data/type';
import { useGetQantasData } from '../data/useGetQantasData';
import HotelOffer from './HotelOffer';
import { Stack } from '@mui/material';
import Property from './Property';
import Image from './Image';

export default function Dataview() {
  const { qantasData } = useGetQantasData();

  return (
    <Stack>
      {qantasData.map((hotel) => {
        return (
          <Stack direction='row' spacing={2}>
            <Image hotel={hotel} />
            <Property hotel={hotel} />
            <HotelOffer hotel={hotel} />
          </Stack>
        );
      })}
    </Stack>
  );
}
